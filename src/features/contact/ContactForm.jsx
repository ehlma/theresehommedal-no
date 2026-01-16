import { useEffect, useRef, useState } from "react";
import { Turnstile } from "@marsidev/react-turnstile";
import { FaInstagram, FaPhone } from "react-icons/fa";
import "../../styles/pages/contact.css";
import c1 from "../../assets/gallery/g5.avif";

export default function ContactForm() {
    const [token, setToken] = useState(null);
    const [sending, setSending] = useState(false);
    const [result, setResult] = useState(null);
    const startedAt = useRef(0);

    // Start “tempo”-klokka ved mount
    useEffect(() => {
        startedAt.current = Date.now();
    }, []);

    // Start klokka første gang brukeren interagerer
    const markStarted = () => {
        if (!startedAt.current) startedAt.current = Date.now();
    };

    async function handleSubmit(e) {
        e.preventDefault();
        const formEl = e.currentTarget;        // <- ta vare på form før await
        setSending(true);
        setResult(null);

        if (!token) {
            setSending(false);
            setResult({ ok: false, msg: "Bekreft CAPTCHA først." });
            return;
        }

        const form = new FormData(formEl);
        const payload = {
            name: form.get("name")?.toString().trim() || "",
            email: form.get("email")?.toString().trim() || "",
            message: form.get("message")?.toString().trim() || "",
            hp: form.get("company")?.toString().trim() || "",
            tookMs: Date.now() - startedAt.current,
            cfToken: token,
        };

        try {
            const url = import.meta.env.DEV
                ? "http://localhost:3000/api/contact"
                : "https://api.theresehommedal.no/api/contact";

            const res = await fetch(url, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload),
            });

            // Les rå tekst først, prøv så JSON
            const raw = await res.text();
            let data = null;
            try { data = raw ? JSON.parse(raw) : null; } catch { }

            if (!res.ok) {
                setResult({
                    ok: false,
                    msg: (data && data.message) || `Serverfeil (${res.status}). Prøv igjen.`,
                });
                return;
            }

            setResult({ ok: true, msg: (data && data.message) || "Takk! Meldingen er sendt." });
            formEl.reset();                        // <- bruk den lagrede referansen
        } catch (err) {
            setResult({
                ok: false,
                msg: `Fikk ikke kontakt med serveren (${err?.message || "ukjent feil"}). ` +
                    `Meldingen kan være sendt – sjekk innboksen din og prøv igjen ved behov.`,
            });
        } finally {
            setSending(false);
            setToken(null);
            startedAt.current = Date.now();
        }
    }


    return (
        <div className="contact">
            {/* Mørk brun bakgrunn */}
            <section className="contact-canvas">
                {/* Hvitt sentrert panel */}
                <div className="contact-panel">
                    {/* Topp-rutenett: venstre tittel / høyre info-kolonner */}
                    <div className="contact-head">
                        {/* Venstre: tittel og intro */}
                        <div className="contact-hero-copy">
                            <h1 className="heading-1 heading-1--dark">Kontakt</h1>
                            <p className="contact-intro">
                                Har du noen spørsmål? Fyll ut kontaktskjemaet så kommer jeg tilbake til deg så fort som mulig.
                            </p>
                        </div>

                        {/* Høyre: kontaktinfo i to kolonner */}
                        <div className="contact-info">
                            <div className="contact-socials">
                                <a href="/prices">Se priser</a>
                                <a
                                    href="https://www.instagram.com/theresehommedal/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <FaInstagram className="icon-20" />
                                    @theresehommedal
                                </a>
                                <a href="/makeup">Se min portefølje</a>
                                <a href="tel:+4791565638">
                                    <FaPhone className="icon-20" />
                                    <span>+47 91 56 56 38</span>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Skjema */}
                    <form
                        onSubmit={handleSubmit}
                        onFocusCapture={markStarted}
                        onInputCapture={markStarted}
                        className="contact-form"
                        aria-busy={sending}
                        aria-live="polite"
                    >
                        <div className="form-two-col">
                            <div className="form-col">
                                <input
                                    name="name"
                                    type="text"
                                    required
                                    placeholder="Navn*"
                                    autoComplete="name"
                                    className="contact-input field-name"
                                />
                                <input
                                    name="email"
                                    type="email"
                                    required
                                    placeholder="E-post*"
                                    autoComplete="email"
                                    className="contact-input field-email"
                                />
                                <input
                                    name="address"
                                    type="text"
                                    placeholder="Adresse"
                                    className="contact-input field-address"
                                />
                                <input
                                    name="contactRef"
                                    type="text"
                                    placeholder="Instagram / Telefon"
                                    className="contact-input field-contactref"
                                />
                                <div className="contact-media">
                                    <img src={c1} alt="Editorial mood" />
                                </div>
                            </div>

                            <div className="form-col">
                                <input
                                    name="subject"
                                    type="text"
                                    placeholder="Emne*"
                                    className="contact-input field-subject"
                                />
                                <textarea
                                    name="message"
                                    rows={8}
                                    required
                                    minLength={10}
                                    placeholder="Melding"
                                    className="contact-textarea field-message"
                                />

                                {/* honeypot */}
                                <div aria-hidden="true" className="contact-honeypot">
                                    <label>Company</label>
                                    <input name="company" type="text" tabIndex={-1} autoComplete="off" />
                                </div>

                                <Turnstile
                                    siteKey={import.meta.env.VITE_TURNSTILE_SITE_KEY}
                                    onSuccess={(tok) => setToken(tok)}
                                    onExpire={() => setToken(null)}
                                    onError={() => setToken(null)}
                                    options={{ appearance: "interaction-only" }}
                                />

                                <p className="contact-dev">
                                    * For andre og større samarbeid, ta kontakt med @lindawickmann ved @lwagency.
                                </p>

                                <button type="submit" disabled={sending || !token} className="contact-btn">
                                    {sending ? "Sender..." : "Send"}
                                </button>

                                {(!token && !sending && !result) && (
                                    <p className="contact-hint">Løs CAPTCHA først.</p>
                                )}

                                {result && (
                                    <p
                                        role="status"
                                        aria-live="polite"
                                        className={
                                            result.ok
                                                ? "contact-status contact-status--ok"
                                                : "contact-status contact-status--err"
                                        }
                                    >
                                        {result.msg}
                                    </p>
                                )}
                            </div>
                        </div>
                    </form>
                </div>
            </section>
        </div>
    );
}
