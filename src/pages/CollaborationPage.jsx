export default function CollaborationPage () {
    document.title = "Samarbeid – Therese Hommedal";
  
    const partners = [
      "Vogue Scandinavia",
      "Oslo Runway (Oslo Fashion Week)",
      "Costume Awards",
      "FREYA smykker",
    ];
  
    return (
      <div className="bg-white">
        <div className="max-w-5xl mx-auto px-4 py-12">
          <h1 className="font-tangerine text-6xl leading-none text-neutral-900">Samarbeid</h1>
          <p className="mt-2 text-neutral-600">
            Jeg gjør makeup og hår til kommersielle og kreative prosjekter – fra runway og editorials
            til kampanjer, events og branded content. Jeg kan jobbe både i team og solo on-location.
          </p>
  
          <h2 className="mt-8 text-sm uppercase tracking-[0.2em] text-neutral-500">Utvalgte samarbeid</h2>
          <ul className="mt-3 grid sm:grid-cols-2 gap-2">
            {partners.map((p) => (
              <li key={p} className="rounded-full border border-neutral-300 px-4 py-2 text-sm text-neutral-800">
                {p}
              </li>
            ))}
          </ul>
  
          <div className="mt-10">
            <a
              href="/kontakt"
              className="inline-flex items-center rounded-full border border-neutral-900 px-5 py-2 text-sm uppercase tracking-wide transition hover:bg-neutral-900 hover:text-white"
            >
              Ta kontakt
            </a>
          </div>
        </div>
      </div>
    );
  }
  