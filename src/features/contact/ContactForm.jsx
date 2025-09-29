import { useRef, useState } from "react";
import { Turnstile } from "@marsidev/react-turnstile";

export default function ContactForm() {
    const [token, setToken] = useState(null);
    const [sending, setSending] = useState(false);
    const [result, setResult] = useState(null);
    const startedAt = useRef(Date.now());
    const handleFormFocus = () => { startedAt.current = Date.now(); };

    async function handleSubmit(e) {
        e.preventDefault();
        setSending(true);
        setResult(null);
        if (!token) { setSending(false); setResult({ ok: false, msg: "Bekreft captcha først." }); return; }
        
        const form = new FormData(e.currentTarget);
        const payload = {
            name: form.get("name")?.toString().trim(),
            email: form.get("email")?.toString().trim(),
            message: form.get("message")?.toString().trim(),

            // anti-bot
            hp: form.get("company")?.toString().trim(), // honeypot
            tookMs: Date.now() - startedAt.current, // tempo-sjekk
            cfToken: token, // turnstile token
        }

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(payload),
            });

            const data = await res.json().catch(() => ({}));
            setResult({ ok: res.ok, msg: data?.message || (res.ok ? "Takk! Meldingen er sendt." : "Noe gikk galt.") });
        } catch {
            setResult({ ok: false, msg: "Kunne ikke kontakte serveren."});
        } finally {
            setSending(false);
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit} onFocus={handleFormFocus} className="space-y-4 max-w-xl">
                <label className="block">
                    <span className="block mb-1">Navn</span>
                    <input name="name" type="text" required autoComplete="name" className="w-full border rounded p-2" />
                </label>

                <label className="block">
                    <span className="block mb-1">E-post</span>
                    <input name="email" type="email" required autoComplete="email" className="w-full border rounded p-2" />
                </label>

                <label className="block">
                    <span className="block mb-1">Melding</span>
                    <textarea name="message" rows={6} required minLength={10} className="w-full border rounded p-2" />
                </label>

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

                <button disabled={sending || !token} className="px-4 py-2 rounded bg-black text-white disabled:opacity-50">
                    {sending ? "Sender..." : "Send"}
                </button>

                {result && (
                    <p role="status" aria-live="polite" className={result.ok ? "text-green-600" : "text-red-600"}>{result.msg}</p>
                )}
            </form>
        </>
    )
}