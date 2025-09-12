export default function BridePage() {
    document.title = "Brud – Therese Hommedal";
    return (
      <div className="bg-white">
        <div className="max-w-3xl mx-auto px-4 py-12">
          <h1 className="font-tangerine text-6xl leading-none text-neutral-900">Brude makeup</h1>
          <p className="mt-4 text-neutral-600">
            Informasjon om prøvetime, tidsbruk, hva som inngår og hvordan jeg jobber på bryllupsdagen.
          </p>
  
          <div className="mt-8 flex gap-3">
            <a href="/priser" className="inline-flex items-center rounded-full border border-neutral-900 px-5 py-2 text-sm uppercase tracking-wide transition hover:bg-neutral-900 hover:text-white">
              Se priser
            </a>
            <a href="/#bride" className="inline-flex items-center rounded-full border border-neutral-300 px-5 py-2 text-sm uppercase tracking-wide text-neutral-700 hover:border-neutral-900">
              Til forsiden
            </a>
          </div>
        </div>
      </div>
    );
  }
  