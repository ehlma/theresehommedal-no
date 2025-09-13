export default function PricesPage() {
    document.title = "Priser – Therese Hommedal";
  
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
  
    const fmt = (v) => (typeof v === "number" ? `${new Intl.NumberFormat("no-NO").format(v)} kr` : `${v} kr`);
  
    const Block = ({ title, items }) => (
      <section className="mt-8 first:mt-0">
        <h2 className="text-sm uppercase tracking-[0.2em] text-neutral-500">{title}</h2>
        <ul className="mt-3 divide-y divide-neutral-200">
          {items.map((it) => (
            <li key={it.t} className="grid grid-cols-[1fr_auto] items-baseline py-3">
              <span className="text-neutral-900">{it.t}</span>
              <span className="font-medium text-neutral-900">{fmt(it.p)}</span>
            </li>
          ))}
        </ul>
      </section>
    );
  
    return (
      <div className="bg-white">
        <div className="max-w-5xl mx-auto px-4 py-12">
          <div className="grid gap-12 lg:grid-cols-[340px_minmax(0,1fr)] lg:gap-16 xl:gap-24">
            {/* VENSTRE: PRISER */}
            <div className="justify-self-start">
              <h1 className="font-tangerine text-5xl leading-none text-neutral-900">Priser brud</h1>
              <p className="mt-2 text-neutral-600">Oversikt over brude- og forloverpriser.</p>
  
              <div className="mt-8">
                <Block title="Brud" items={brud} />
                <Block title="Pakker" items={pakker} />
                <Block title="Forlover" items={forlover} />
                <p className="mt-6 text-sm text-neutral-500">Reise utenfor Oslo i tillegg.</p>
              </div>
            </div>
  
            {/* HØYRE: callout til kontakt */}
            <div className="lg:pl-8 xl:pl-12">
              <div className="rounded-2xl border border-neutral-200 p-6">
                <h2 className="text-lg font-medium text-neutral-900">Har du spørsmål eller vil booke?</h2>
                <p className="mt-2 text-neutral-600">
                  Bruk kontaktskjemaet – jeg svarer så fort jeg kan.
                </p>
                <a
                  href="/contact"
                  className="mt-4 inline-flex items-center rounded-full border border-neutral-900 px-5 py-2 text-sm uppercase tracking-wide transition hover:bg-neutral-900 hover:text-white"
                >
                  Gå til kontaktskjema
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  