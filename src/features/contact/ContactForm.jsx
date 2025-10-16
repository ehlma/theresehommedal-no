import { useRef, useState } from "react";
import { Turnstile } from "@marsidev/react-turnstile";
import "../../styles/pages/contact.css";
import c1 from "../../assets/gallery/g12.avif";

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
            {/* Sticky bakgrunnsbilde bak alt innhold */}
            <div className="contact-hero">
                <img
                    src={c1} // din bildefil
                    alt="Editorial makeup – bakgrunn"
                    className="contact-hero-img"
                    loading="eager"
                    decoding="async"
                />
                <div className="contact-hero-gradient" />
            </div>

            {/* Scene oppå bildet – kun skjema scroller */}
            <section className="contact-stage">
                <div className="contact-center">
                    <div className="contact-card">
                        <header className="contact-card-head">
                            <p className="contact-eyebrow">Kontakt</p>
                            <h1 className="contact-title">Inquire Here</h1>
                            <p className="contact-dek">
                                Fyll ut skjemaet så kommer jeg tilbake til deg innen 24&nbsp;timer.
                            </p>
                        </header>

                        {/* SKJEMA */}
                        <form
                            onSubmit={handleSubmit}
                            onFocus={handleFormFocus}
                            className="contact-form contact-stack"
                            aria-busy={sending}
                            aria-live="polite"
                        >
                            {/* Grid som lager 2 kolonner på md+ */}
                            <div className="contact-grid">
                                {/* Topp-rad */}
                                <input
                                    name="name"
                                    type="text"
                                    required
                                    placeholder="Navn"
                                    autoComplete="name"
                                    className="contact-input field-name"
                                />
                                <input
                                    name="email"
                                    type="email"
                                    required
                                    placeholder="E-post"
                                    autoComplete="email"
                                    className="contact-input field-email"
                                />

                                {/* Høyre kolonne under e-post: Emne + Melding */}
                                <input
                                    name="subject"
                                    type="text"
                                    placeholder="Emne"
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

                                {/* Venstre kolonne under navn: Adresse, Tjeneste, Instagram/telefon */}
                                <input
                                    name="address"
                                    type="text"
                                    placeholder="Adresse (valgfritt)"
                                    className="contact-input field-address"
                                />
                                <select
                                    name="service"
                                    defaultValue=""
                                    className="contact-input field-service"
                                >
                                    <option value="" disabled>Hvilken tjeneste er du interessert i?</option>
                                    <option value="brud">Brud</option>
                                    <option value="makeup">Makeup</option>
                                    <option value="hår">Hår</option>
                                    <option value="samarbeid">Samarbeid</option>
                                    <option value="annet">Annet</option>
                                </select>
                                <input
                                    name="contactRef"
                                    type="text"
                                    placeholder="Instagram / telefon (valgfritt)"
                                    className="contact-input field-contactref"
                                />
                            </div>

                            {/* honeypot (skjult for mennesker) */}
                            <div aria-hidden="true" className="contact-honeypot">
                                <label>Company</label>
                                <input name="company" type="text" tabIndex={-1} autoComplete="off" />
                            </div>

                            {/* turnstile */}
                            <Turnstile
                                siteKey={import.meta.env.VITE_TURNSTILE_SITE_KEY}
                                onSuccess={(tok) => setToken(tok)}
                                onExpire={() => setToken(null)}
                                onError={() => setToken(null)}
                                options={{ appearance: "interaction-only" }}
                            />

                            <button
                                type="submit"
                                disabled={sending || !token}
                                onClick={() => debug('button clicked')}
                                className="contact-btn"
                            >
                                {sending ? "Sender..." : "Send"}
                            </button>

                            {(!token && !sending) && (
                                <p className="contact-hint">Løs CAPTCHA først.</p>
                            )}

                            {import.meta.env.DEV && (
                                <div className="contact-dev">
                                    <div>DEV · token present: {String(!!token)}</div>
                                    <div>DEV · button disabled: {String(sending || !token)}</div>
                                    <div>DEV · site key: {String(import.meta.env.VITE_TURNSTILE_SITE_KEY || 'Mangler')}</div>
                                </div>
                            )}

                            {result && (
                                <p
                                    role="status"
                                    aria-live="polite"
                                    className={result.ok ? "contact-status contact-status--ok" : "contact-status contact-status--err"}
                                >
                                    {result.msg}
                                </p>
                            )}
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );


}