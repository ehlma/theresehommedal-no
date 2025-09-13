import imgBg from "../../assets/bride/brideHome1.jpg";
import imgInset from "../../assets/bride/brideHome2.jpeg";

export default function Bride() {
  return (
    <section id="bride" className="bg-white">
      <div className="max-w-6xl mx-auto px-4 py-20">
        <div className="grid md:grid-cols-[1.2fr_0.8fr] items-center gap-12 lg:gap-24">

          {/* Venstre: ytre = ingen klipp, indre = klipp hovedbildet */}
          <div className="relative">
            {/* indre wrapper som klipper hovedbildet for runde hjørner */}
            <div className="rounded-3xl overflow-hidden">
              <img
                src={imgBg}
                alt="Detaljbilde brud"
                className="w-full h-[56vh] md:h-[64vh] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/25 to-transparent" />
              <div className="absolute left-6 bottom-6 md:left-8 md:bottom-8 text-white">
                <p className="text-4xl sm:text-5xl md:text-6xl font-light leading-[0.95] tracking-wide">
                  BRUDE<br />MAKEUP
                </p>
              </div>
            </div>

            {/* Lille inset bildet */}
            <img
              src={imgInset}
              alt="Brud i bil"
              className="
                hidden md:block
                absolute top-1/2 -translate-y-1/2
                right-[-3rem] lg:right-[-4.5rem]
                w-64 h-80 object-cover
                rounded-2xl shadow-2xl ring-1 ring-black/10 bg-white
                z-10
              "
            />
          </div>

          {/* Høyre: tekst */}
          <div className="max-w-md">
            <h3 className="text-2xl font-medium text-neutral-900">
              Brud: Naturlig og holdbar glød
            </h3>
            <p className="mt-4 text-neutral-600">
              Skreddersydd brudesminke som holder hele dagen – med fokus på din stil
              og hud. Prøvetime anbefales for å lande uttrykket i god tid.
            </p>
            <ul className="mt-6 space-y-2 text-neutral-700">
              <li>• Prøvetime og planlegging</li>
              <li>• On-location i Oslo og omegn</li>
              <li>• Kan kombineres med hårstyling</li>
            </ul>
            <a
                href="/bride"
                className="inline-flex items-center rounded-full border border-neutral-900 px-5 py-2 mr-4 text-sm uppercase tracking-wide transition hover:bg-neutral-900 hover:text-white"
            >
                Se mer
            </a>
            <a
              href="/prices"
              className="mt-8 inline-flex items-center rounded-full border border-neutral-900 px-5 py-2 text-sm uppercase tracking-wide transition hover:bg-neutral-900 hover:text-white"
            >
              Se priser
            </a>
          </div>

        </div>

        {/* Mobil: vis inset under */}
        <div className="md:hidden mt-6 flex justify-center">
          <img
            src={imgInset}
            alt="Detalj av brudesminke"
            className="w-64 h-80 object-cover rounded-2xl shadow-2xl ring-1 ring-black/10 bg-white"
          />
        </div>
      </div>
    </section>
  );
}
