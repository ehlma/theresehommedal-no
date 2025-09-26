import img1 from "../assets/bride/0.jpg";
import img2 from "../assets/bride/5bebo0Wg.jpeg";
import img3 from "../assets/bride/8.jpg";
import img4 from "../assets/bride/CoYoVg_w.jpeg";
import img5 from "../assets/bride/IMG_7045.jpg";

export default function BridePage() {
  document.title = "Brud – Therese Hommedal";

  return (
    <div className="bg-white">
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Tittel og intro */}
        <h1 className="font-tangerine text-6xl leading-none text-neutral-900">
          Brude makeup & hår
        </h1>
        <div className="relative">
          <div className="grid grid-cols-2 gap-3">
            <p className="mt-4 text-neutral-600 max-w-3xl">
              Jeg tilbyr både sminke og hår til bruder og brudefølge.
              Om bryllupet holdes utenfor Oslo-omegn, kommer reisekostnader i tillegg til prisen.
              Før den store dagen gjennomfører vi en prøvetime hvor vi sammen finner ut hvilket uttrykk som passer best.<br />
              Dersom det blir behov for justeringer, kan flere prøvetimer være aktuelle.
              Jeg jobber med alle typer uttrykk – fra naturlig «no-makeup» look til mer glamorøse stiler – alltid med fokus på holdbarhet slik at looken varer hele dagen og natten.
            </p>
            <img
              src={img2}
              alt="Brudebilde 2"
              className="rounded-xl shadow-md object-cover w-full h-64"
            />
            <img
              src={img3}
              alt="Brudebilde 3"
              className="rounded-xl shadow-md object-cover w-full h-64"
            />
            <img
              src={img4}
              alt="Brudebilde 4"
              className="rounded-xl shadow-md object-cover w-full h-64"
            />
          </div>
        </div>

        {/* Grid med tekst og bilder */}
        <div className="mt-12 grid md:grid-cols-2 gap-10 items-start">
          {/* Tekstblokk */}
          {/* Collage med bilder */}
          <div className="relative">
            <img
              src={img5}
              alt="Brudebilde stort"
              className="mt-4 rounded-2xl shadow-xl object-cover w-full h-80"
            />
          </div>
          <div>
            <h2 className="text-2xl text-neutral-400">
              SKREDDERSYDD TIL DIN DAG
            </h2>
            <p className="mt-4 text-neutral-600">
              Jeg sørger for at looken din matcher både kjolen, personligheten og stemningen i bryllupet.
              Brudesminke skal føles komfortabel, men samtidig gi det lille ekstra som holder hele dagen og natten.
            </p>
            <ul className="mt-6 space-y-2 text-neutral-700">
              <li>✔ Prøvetime i forkant</li>
              <li>✔ Sminke og hår for brud og forlovere</li>
              <li>✔ On-location i Oslo og omegn</li>
              <li>✔ Langvarig resultat – tåler både tårer og dans</li>
            </ul>

            <div className="mt-8 flex gap-3">
              <a
                href="/prices"
                className="inline-flex items-center rounded-full border border-neutral-900 px-5 py-2 text-sm uppercase tracking-wide transition hover:bg-neutral-900 hover:text-white"
              >
                Se priser
              </a>
              <a
                href="/contact"
                className="inline-flex items-center rounded-full border border-neutral-300 px-5 py-2 text-sm uppercase tracking-wide text-neutral-700 hover:border-neutral-900"
              >
                Kontakt
              </a>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
