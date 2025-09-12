export default function PricesPage() {
    document.title = "Priser – Therese Hommedal";
  
    // — Data
    const brud = [
      { t: "Sminke og hår – brud", p: 8500 },
      { t: "Sminke – brud", p: 6000 },
      { t: "Hår – brud", p: 4000 },
    ];
    const pakker = [
      { t: "Sminke brud + 2 forlovere", p: 12000 },
      { t: "Hår brud + 2 forlovere", p: 8000 },
    ];
    const forlover = [
      { t: "Hår og sminke – forlover", p: 4000 },
      { t: "Sminke – forlover", p: 3000 },
      { t: "Hår – forlover", p: "2000–2500" },
    ];
  
    const fmt = (v) =>
      typeof v === "number"
        ? `${new Intl.NumberFormat("no-NO").format(v)} kr`
        : `${v} kr`;
  
    const Block = ({ title, items }) => (
      <section className="mt-8 first:mt-0">
        <h2 className="text-sm uppercase tracking-[0.2em] text-neutral-500">
          {title}
        </h2>
        <ul className="mt-3 divide-y divide-neutral-200">
          {items.map((it) => (
            <li
              key={it.t}
              className="grid grid-cols-[1fr_auto] items-baseline py-3"
            >
              <span className="text-neutral-900">{it.t}</span>
              <span className="font-medium text-neutral-900">{fmt(it.p)}</span>
            </li>
          ))}
        </ul>
      </section>
    );
  
    // — Bare styling: ingen sendelogikk, vi stopper submit
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
        <div className="max-w-6xl mx-auto px-4 py-12 ">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* VENSTRE: PRISER */}
            <div>
              <h1 className="font-tangerine text-5xl leading-none text-neutral-900">
                Priser brud
              </h1>
              <p className="mt-2 text-neutral-600">
                Oversikt over brude- og forloverpriser.
              </p>
  
              <div className="mt-8">
                <Block title="Brud" items={brud} />
                <Block title="Pakker" items={pakker} />
                <Block title="Forlover" items={forlover} />
                <p className="mt-6 text-sm text-neutral-500">
                  Reise utenfor Oslo i tillegg.
                </p>
              </div>
            </div>
  
            {/* HØYRE: KONTAKT (kun UI) */}
            <div className="lg:pl-8 xl:pl-12">
              <h2 className="font-tangerine text-5xl leading-none text-neutral-900 mt-4">
                Let’s chat!
              </h2>
                <p className="mt-2 text-neutral-600">
                    For andre tjenester eller forespørsler, fyll ut kontaktskjemaet under.
              </p>
              <p className="mt-2 text-neutral-600">
                Jeg svarer så fort jeg kan.
              </p>
  
              <form onSubmit={stopSubmit} className="mt-6 space-y-4" noValidate>
                {/* Navn + E-post */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <input className={inputCls} placeholder="Navn" />
                  <input className={inputCls} placeholder="E-post" />
                </div>
  
                <input className={inputCls} placeholder="Adresse (valgfritt)" />
  
                <select className={inputCls} defaultValue="">
                    <option value="" disabled>
                    Hvilken tjeneste er du interessert i?
                  </option>
                  <option>Brud</option>
                  <option>Makeup</option>
                  <option>Hår</option>
                  <option>Samarbeid</option>
                  <option>Annet</option>
                </select>
  
                <input
                  className={inputCls}
                  placeholder="Instagram / telefon (valgfritt)"
                />
  
                <input className={inputCls} placeholder="Emne" />
  
                <textarea
                  rows="6"
                  className={pillAreaCls}
                  placeholder="Melding"
                />
  
                <div className="flex items-center gap-3">
                  <button type="submit" className={btnCls}>
                    Send
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
  