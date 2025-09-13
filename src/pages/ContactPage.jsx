export default function ContactPage() {
    document.title = "Kontakt – Therese Hommedal";
  
    // Kun styling – ingen sendelogikk nå
    const stopSubmit = (e) => e.preventDefault();
  
    const inputCls =
      "w-full rounded-full border border-neutral-300 px-4 py-2.5 bg-white " +
      "placeholder:text-neutral-400 outline-none focus:ring-2 focus:ring-neutral-900/10";
    const pillAreaCls =
      "w-full rounded-[2rem] border border-neutral-300 px-4 py-3 bg-white " +
      "placeholder:text-neutral-400 outline-none focus:ring-2 focus:ring-neutral-900/10";
    const btnCls =
      "inline-flex items-center rounded-full border border-neutral-900 px-5 py-2 " +
      "text-sm uppercase tracking-wide transition hover:bg-neutral-900 hover:text-white";
  
    return (
      <div className="bg-white">
        <div className="max-w-5xl mx-auto px-4 py-12">
          <h1 className="font-tangerine text-6xl leading-none text-neutral-900">Kontakt</h1>
          <p className="mt-2 text-neutral-600">
            Send meg en melding – jeg svarer så fort jeg kan.
          </p>
  
          <form onSubmit={stopSubmit} className="mt-8 max-w-2xl space-y-4" noValidate>
            {/* Navn + E-post */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <input className={inputCls} placeholder="Navn" />
              <input className={inputCls} placeholder="E-post" />
            </div>
  
            <input className={inputCls} placeholder="Adresse (valgfritt)" />
  
            <select className={inputCls} defaultValue="">
              <option value="" disabled>Hvilken tjeneste er du interessert i?</option>
              <option>Brud</option>
              <option>Makeup</option>
              <option>Hår</option>
              <option>Samarbeid</option>
              <option>Annet</option>
            </select>
  
            <input className={inputCls} placeholder="Instagram / telefon (valgfritt)" />
            <input className={inputCls} placeholder="Emne" />
  
            <textarea rows="6" className={pillAreaCls} placeholder="Melding" />
  
            <div className="flex items-center gap-3">
              <button type="submit" className={btnCls}>Send</button>
              {/* valgfri fallback */}
              <a className="text-sm text-neutral-600 underline" href="mailto:therese.hommedal@gmail.com">
                Send e-post i stedet
              </a>
            </div>
          </form>
        </div>
      </div>
    );
  }
  