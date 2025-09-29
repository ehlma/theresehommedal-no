import { useRef, useState } from "react";
import { Turnstile } from "@marsidev/react-turnstile";

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
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(payload),
            });

            const data = await res.json().catch(() => ({}));
            setResult({ ok: res.ok, msg: data?.message || (res.ok ? "Takk! Meldingen er sendt." : "Noe gikk galt.") });

            if (res.ok) e.currentTarget.reset();
        } catch {
            setResult({ ok: false, msg: "Kunne ikke kontakte serveren."});
        } finally {
            setSending(false);
            setToken(null); // Krever ny captcha hvis bruker vil sende på nytt
        }
    }

    return (
        <>
            <form
                onSubmit={handleSubmit}
                onFocus={handleFormFocus}
                className="mt-8 max-w-2xl space-y-4"
                aria-busy={sending}
                aria-live="polite"
            >
                {/* Navn + E‑post */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <input
                        name="name"
                        type="text"
                        required
                        placeholder="Navn"
                        autoComplete="name"
                        className="w-full rounded-full border border-neutral-300 px-4 py-2.5 bg-white placeholder:text-neutral-400 outline-none focus:ring-2 focus:ring-neutral-900/10"
                    />
                    <input
                        name="email"
                        type="email"
                        required
                        placeholder="E-post"
                        autoComplete="email"
                        className="w-full rounded-full border border-neutral-300 px-4 py-2.5 bg-white placeholder:text-neutral-400 outline-none focus:ring-2 focus:ring-neutral-900/10"
                    />
                </div>

                {/* Adresse (valgfritt) */}
                <input
                    name="address"
                    type="text"
                    placeholder="Adresse (valgfritt)"
                    className="w-full rounded-full border border-neutral-300 px-4 py-2.5 bg-white placeholder:text-neutral-400 outline-none focus:ring-2 focus:ring-neutral-900/10"
                />

                {/* Tjenestevalg */}
                <select
                    name="service"
                    defaultValue=""
                    className="w-full rounded-full border border-neutral-300 px-4 py-2.5 bg-white placeholder:text-neutral-400 outline-none focus:ring-2 focus:ring-neutral-900/10"
                >
                    <option value="" disabled>Hvilken tjeneste er du interessert i?</option>
                    <option value="brud">Brud</option>
                    <option value="makeup">Makeup</option>
                    <option value="hår">Hår</option>
                    <option value="samarbeid">Samarbeid</option>
                    <option value="annet">Annet</option>
                </select>

                {/* Instagram / telefon (valgfritt) */}
                <input
                    name="contactRef"
                    type="text"
                    placeholder="Instagram / telefon (valgfritt)"
                    className="w-full rounded-full border border-neutral-300 px-4 py-2.5 bg-white placeholder:text-neutral-400 outline-none focus:ring-2 focus:ring-neutral-900/10"
                />

                {/* Emne */}
                <input
                    name="subject"
                    type="text"
                    placeholder="Emne"
                    className="w-full rounded-full border border-neutral-300 px-4 py-2.5 bg-white placeholder:text-neutral-400 outline-none focus:ring-2 focus:ring-neutral-900/10"
                />

                {/* Melding */}
                <textarea
                    name="message"
                    rows={6}
                    required
                    minLength={10}
                    placeholder="Melding"
                    className="w-full rounded-[2rem] border border-neutral-300 px-4 py-3 bg-white placeholder:text-neutral-400 outline-none focus:ring-2 focus:ring-neutral-900/10"
                />

                {/* honeypot (skjult for mennesker) */}
                <div aria-hidden="true" style={{position: "absolute", left: "-9999px"}}>
                    <label>Company</label>
                    <input name="company" type="text" tabIndex={-1} autoComplete="off"/>
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
                    className="inline-flex items-center rounded-full border border-neutral-900 px-5 py-2 text-sm uppercase tracking-wide transition hover:bg-neutral-900 hover:text-white disabled:opacity-50"
                >
                    {sending ? "Sender..." : "Send"}
                </button>
                {(!token && !sending) && (<p className="text-sm text-gray-500">Løs CAPTCHA først.</p>)}
                {import.meta.env.DEV && (
                    <div className="text-xs text-gray-500 space-y-1">
                      <div>DEV · token present: {String(!!token)}</div>
                      <div>DEV · button disabled: {String(sending || !token)}</div>
                      <div>DEV · site key: {String(import.meta.env.VITE_TURNSTILE_SITE_KEY || 'Mangler')}</div>
                    </div>
                )}

                {result && (
                    <p role="status" aria-live="polite" className={result.ok ? "text-green-600" : "text-red-600"}>{result.msg}</p>
                )}
            </form>
        </>
    )
}