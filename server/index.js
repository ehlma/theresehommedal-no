require("dotenv").config();
const express = require("express");
const cors = require("cors");
const rateLimit = require("express-rate-limit");
const axios = require("axios");
const nodemailer = require("nodemailer");
const { z } = require("zod");

const app = express();
app.set("trust proxy", "loopback");
app.use(express.json());

// I dev: tillat alle origins. I prod: sett til domenet ditt.
app.use(cors({ origin: true }));

// Valideringsskjema
const contactSchema = z.object({
    name: z.string().min(1).max(200),
    email: z.string().email().max(320),
    message: z.string().min(5).max(5000),
    hp: z.string().optional(),                              // honeypot: må være tom
    tookMs: z.number().int().nonnegative().optional(),      // tempo-sjekk
    cfToken: z.string().min(10),                            // Turnstile token
});

// Rate limit (5 requests / 10 min per IP)
app.use("/api/contact", rateLimit({
    windowMs: 10 * 60 * 1000,
    max: 5,
    standardHeaders: true, // Return rate limit info in the RateLimit-* headers
    legacyHeaders: false,  // Disable the X-RateLimit-* headers
    // keyGenerator: req => req.ip, // kan eksplisiteres om ønskelig
}));

// SMTP-transport
const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT || 587),
    secure: Number(process.env.SMTP_PORT) === 465,
    auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
});

transporter.verify()
    .then(() => console.log("SMTP-forbindelse OK"))
    .catch(err => console.error("SMTP verify-feil:", err));

// Turnstile-verifisering
async function verifyTurnstile(token, ip) {
    const params = new URLSearchParams();
    params.append("secret", process.env.TURNSTILE_SECRET_KEY);
    params.append("response", token);
    if (ip) params.append("remoteip", ip);

    const resp = await axios.post(
        "https://challenges.cloudflare.com/turnstile/v0/siteverify",
        params,
        { headers: { "Content-Type": "application/x-www-form-urlencoded" } }
    );
    return resp.data?.success === true; // <-- VIKTIG
}

app.post("/api/contact", async (req, res) => {
    try {

        const data = contactSchema.parse(req.body);

        // Honeypot: skal være tom
        if (data.hp && data.hp.trim()) {
            return res.status(400).json({ message: "Bot detected." });
        }

        // Tempo-sjekk (enkelt bot-filter)
        if ((data.tookMs ?? 0) < 1500) {
            return res.status(400).json({ message: "Too fast." });
        }

        // CAPTCHA
        const ip =
            (req.headers["x-forwarded-for"]?.toString().split(",")[0] ?? null) ||
            req.socket?.remoteAddress;

        const ok = await verifyTurnstile(data.cfToken, ip);
        if (!ok) return res.status(400).json({ message: "CAPTCHA failed." });

        // (valgfritt) blokkér for mange lenker
        const links = (data.message.match(/https?:\/\//gi) || []).length;
        if (links > 2) return res.status(400).json({ message: "For mange lenker." });

        // Send e-post
        const info = await transporter.sendMail({
            from: `"Nettside kontakt" <${process.env.SMTP_FROM || process.env.SMTP_USER}>`,
            to: process.env.TO_EMAIL,
            replyTo: `${data.name} <${data.email}>`,
            subject: `Ny henvendelse fra ${data.name}`,
            text: `Navn: ${data.name}\nE-post: ${data.email}\n\n${data.message}`,
            html: `
        <p><strong>Navn:</strong> ${data.name}</p>
        <p><strong>E-post:</strong> ${data.email}</p>
        <p><strong>Melding:</strong><br>${data.message.replace(/\n/g, "<br/>")}</p>
      `,
        });
        console.log("sendMail info:", info);


        return res.json({ message: "Takk! Meldingen er sendt.", id: info.messageId });
    } catch (err) {
        if (err?.issues) {
            return res.status(400).json({ message: "Ugyldig input." });
        }
        console.error(err);
        return res.status(500).json({
            message: isDev ? `Serverfeil: ${err?.code || err?.name || "ukjent"}` : "Serverfeil.",
            detail: isDev ? (err?.response?.data || err?.message || String(err)) : undefined,
        });
    }
});

const port = Number(process.env.PORT || 3000);
app.listen(port, () => console.log("Contact API listening on", port));