import { useRef, useState } from "react";
import { Turnstile } from "@marsidev/react-turnstile";
import { FaInstagram, FaPhone, FaEnvelope } from "react-icons/fa";
import "../../styles/pages/contact.css";
import c1 from "../../assets/gallery/g5.avif";

export default function ContactForm() {
    const [token, setToken] = useState(null);
    const [sending, setSending] = useState(false);
    const [result, setResult] = useState(null);
    const startedAt = useRef(Date.now());

    const debug = (...args) => { if (import.meta.env.DEV) console.log('[ContactForm]', ...args); };

    const handleFormFocus = () => { startedAt.current = Date.now(); };

    async function handleSubmit(e) {
        e.preventDefault();
        debug('submit fired');
        setSending(true);
        setResult(null);

        debug('token at submit:', token);
        if (!token) {
            debug('no token → early return');
            setSending(false);
            setResult({ ok: false, msg: "Bekreft captcha først." });
            return;
        }

        const form = new FormData(e.currentTarget);
        const payload = {
            name: form.get("name")?.toString().trim() || "",
            email: form.get("email")?.toString().trim() || "",
            message: form.get("message")?.toString().trim() || "",

            // anti-bot
            hp: form.get("company")?.toString().trim() || "", // honeypot
            tookMs: Date.now() - startedAt.current, // tempo-sjekk
            cfToken: token, // turnstile token
        }
        debug('payload', payload);

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload),
            });

            const data = await res.json().catch(() => ({}));
            setResult({ ok: res.ok, msg: data?.message || (res.ok ? "Takk! Meldingen er sendt." : "Noe gikk galt.") });

            if (res.ok) e.currentTarget.reset();
        } catch {
            setResult({ ok: false, msg: "Kunne ikke kontakte serveren." });
        } finally {
            setSending(false);
            setToken(null); // Krever ny captcha hvis bruker vil sende på nytt
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
                            <h1 className="contact-h1">Kontakt.</h1>
                            <p className="contact-intro">
                                Har du noen spørsmål? Fyll ut kontaktskjemaet så kommer jeg tilbake til deg så fort som mulig.
                            </p>
                        </div>

                        {/* Høyre: kontaktinfo i to kolonner */}
                        <div className="contact-info">
                            <div className="contact-socials">
                                <a href="/prices">Se priser</a>

                                <a href="https://www.instagram.com/theresehommedal/" target="_blank" rel="noopener noreferrer">
                                    <FaInstagram className="icon-20" />
                                    @theresehommedal
                                </a>
                                <a href="/makeup">Se min portofølje</a>
                                <a href="tel:+4792402601">
                                    <FaPhone className="icon-20" />
                                    <span>+47 92 40 26 01</span>
                                </a>
                            </div>


                        </div>
                    </div>
                    {/* Skjema */}
                    <form
                        onSubmit={handleSubmit}
                        onFocus={handleFormFocus}
                        className="contact-form"
                        aria-busy={sending}
                        aria-live="polite"
                    >
                        <div className="form-two-col">
                            <div className="form-col">
                                <input name="name" type="text" required placeholder="Navn*" autoComplete="name" className="contact-input field-name" />
                                <input name="email" type="email" required placeholder="E-post*" autoComplete="email" className="contact-input field-email" />
                                <input name="address" type="text" placeholder="Adresse" className="contact-input field-address" />
                                <input name="contactRef" type="text" placeholder="Instagram / Telefon " className="contact-input field-contactref" />
                                <div className="contact-media">
                                    <img src={c1} alt="Editorial mood" />
                                </div>
                            </div>
                            <div className="form-col">
                                <input name="subject" type="text" placeholder="Emne*" className="contact-input field-subject" />
                                <select name="service" defaultValue="" className="contact-input field-service">
                                    <option value="" disabled>Hvilken tjeneste er du interessert i?</option>
                                    <option value="brud">Brud</option>
                                    <option value="makeup">Makeup</option>
                                    <option value="hår">Hår</option>
                                    <option value="samarbeid">Samarbeid</option>
                                    <option value="annet">Annet</option>
                                </select>
                                <textarea name="message" rows={8} required minLength={10} placeholder="Melding" className="contact-textarea field-message" />


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

                                <button type="submit" disabled={sending || !token} onClick={() => debug('button clicked')} className="contact-btn">
                                    {sending ? "Sender..." : "Send"}
                                </button>

                                {(!token && !sending) && <p className="contact-hint">Løs CAPTCHA først.</p>}

                                {import.meta.env.DEV && (
                                    <div className="contact-dev">
                                        <div>DEV · token present: {String(!!token)}</div>
                                        <div>DEV · button disabled: {String(sending || !token)}</div>
                                        <div>DEV · site key: {String(import.meta.env.VITE_TURNSTILE_SITE_KEY || 'Mangler')}</div>
                                    </div>
                                )}

                                {result && (
                                    <p role="status" aria-live="polite" className={result.ok ? "contact-status contact-status--ok" : "contact-status contact-status--err"}>
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