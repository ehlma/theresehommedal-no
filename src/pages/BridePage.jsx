// src/pages/BridePage.jsx
import img1 from "../assets/bride/0.jpg";
import img2 from "../assets/bride/5bebo0Wg.jpeg";
import img3 from "../assets/bride/8.jpg";
import img4 from "../assets/bride/CoYoVg_w.jpeg"; // <— viktig: .jpeg
import img5 from "../assets/bride/IMG_7045.jpg";

export default function BridePage() {
  document.title = "Brud – Therese Hommedal";

  const btnPrimary =
    "inline-flex items-center rounded-full border border-neutral-900 px-5 py-2 " +
    "text-sm uppercase tracking-wide transition hover:bg-neutral-900 hover:text-white";
  const btnGhost =
    "inline-flex items-center rounded-full border border-neutral-300 px-5 py-2 " +
    "text-sm uppercase tracking-wide text-neutral-700 hover:border-neutral-900";

  return (
    <div className="bg-white">
      {/* HEADER / INTRO */}
      <section className="relative">
        <div className="max-w-6xl mx-auto px-4 pt-12 pb-8 text-center">
          <h1 className="font-tangerine text-6xl md:text-7xl leading-none text-neutral-900">
            Brude makeup & hår
          </h1>
          <p className="mx-auto mt-4 max-w-3xl text-neutral-600">
            Jeg tilbyr både sminke og hår til bruder og brudefølge. Om bryllupet holdes
            utenfor Oslo-omegn, kommer reisekostnader i tillegg til prisen. Før den store
            dagen gjennomfører vi en prøvetime hvor vi sammen finner ut hvilket uttrykk
            som passer best. Dersom det blir behov for justeringer, kan flere prøvetimer
            være aktuelle. Jeg jobber med alle typer uttrykk – fra naturlig «no-makeup»
            look til mer glamorøse stiler – alltid med fokus på holdbarhet slik at looken
            varer hele dagen og natten.
          </p>
          <div className="mt-6 flex justify-center gap-3">
            <a href="/prices" className={btnPrimary}>Se priser</a>
            <a href="/contact" className={btnGhost}>Kontakt</a>
          </div>
        </div>
      </section>

      {/* BLOKK 1 — Bilde venstre, tekst høyre + skript-tittel over bildet */}
      <section className="bg-[#f5f0e8]">
        <div className="max-w-6xl mx-auto px-4 py-12 md:py-16">
          <div className="grid items-center gap-10 md:grid-cols-2">
            {/* Image with overlay title */}
            <div className="relative">
              <img
                src={img2}
                alt="Brud – klassisk og tidløs look"
                className="w-full h-[420px] md:h-[500px] object-cover rounded-2xl shadow-2xl ring-1 ring-black/10 bg-white"
              />
              {/* Script label */}
              <span
                className="pointer-events-none absolute -left-4 -top-10 md:-left-10 md:-top-14
                           font-tangerine text-5xl md:text-7xl text-neutral-800/80 select-none"
                aria-hidden="true"
              >
                Den klassiske bruden
              </span>
            </div>

            {/* Text */}
            <div className="max-w-xl">
              <h2 className="text-sm uppercase tracking-[0.22em] text-neutral-500">
                Tidløst & naturlig
              </h2>
              <p className="mt-3 text-neutral-700">
                Jeg sørger for at looken din matcher både kjolen, personligheten og
                stemningen i bryllupet. Brudesminke skal føles komfortabel, men samtidig
                gi det lille ekstra som holder hele dagen og natten.
              </p>
              <ul className="mt-6 space-y-2 text-neutral-800">
                <li>• Prøvetime i forkant</li>
                <li>• Sminke og hår for brud og forlovere</li>
                <li>• On-location i Oslo og omegn</li>
                <li>• Langvarig resultat – tåler både tårer og dans</li>
              </ul>
              <div className="mt-8 flex gap-3">
                <a href="/prices" className={btnPrimary}>Se priser</a>
                <a href="/contact" className={btnGhost}>Kontakt</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BLOKK 2 — Tekst venstre, bilde høyre + skript-tittel på høyre side */}
      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-4 py-12 md:py-16">
          <div className="grid items-center gap-10 md:grid-cols-2">
            {/* Text */}
            <div className="max-w-xl order-2 md:order-1">
              <h2 className="text-sm uppercase tracking-[0.22em] text-neutral-500">
                Skreddersydd til din dag
              </h2>
              <p className="mt-3 text-neutral-700">
                Fra naturlig «no-makeup» til mer glamorøse uttrykk – vi lander
                looken i god tid og tilpasser den hud, hår og antrekk. Jeg bruker
                produkter og teknikker som tåler lys, bevegelse og lange dager.
              </p>
              <div className="mt-8 flex gap-3">
                <a href="/prices" className={btnPrimary}>Se priser</a>
                <a href="/contact" className={btnGhost}>Kontakt</a>
              </div>
            </div>

            {/* Image with overlay title */}
            <div className="relative order-1 md:order-2">
              <img
                src={img5}
                alt="Brud – myk glam"
                className="w-full h-[420px] md:h-[500px] object-cover rounded-2xl shadow-2xl ring-1 ring-black/10 bg-white"
              />
              <span
                className="pointer-events-none absolute -right-6 -bottom-10 md:-right-10 md:-bottom-14
                           font-tangerine text-5xl md:text-7xl text-neutral-800/80 select-none text-right"
                aria-hidden="true"
              >
                Skreddersydd glød
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* BILDESTRIPE / LITEN COLLAGE (gir luft + variasjon) */}
      <section className="bg-[#f5f0e8]">
        <div className="max-w-6xl mx-auto px-4 py-12">
          <div className="grid gap-4 md:grid-cols-3">
            <img
              src={img3}
              alt="Detalj – brudesminke"
              className="h-72 md:h-64 w-full object-cover rounded-2xl shadow-xl ring-1 ring-black/10 bg-white"
            />
            <img
              src={img4}
              alt="Brud – moderne elegant"
              className="h-72 md:h-64 w-full object-cover rounded-2xl shadow-xl ring-1 ring-black/10 bg-white"
            />
            <img
              src={img1}
              alt="Forlover – harmonert uttrykk"
              className="h-72 md:h-64 w-full object-cover rounded-2xl shadow-xl ring-1 ring-black/10 bg-white"
            />
          </div>
          <div className="mt-10 flex justify-center gap-3">
            <a href="/prices" className={btnPrimary}>Se priser</a>
            <a href="/contact" className={btnGhost}>Kontakt</a>
          </div>
        </div>
      </section>
    </div>
  );
}
