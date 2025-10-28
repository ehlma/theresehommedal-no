//brud makeup
import b2 from "../assets/bride/b2.avif";
import b4 from "../assets/bride/b4.avif";
import b5 from "../assets/bride/b5.avif";
import b6 from "../assets/bride/b6.avif";
import b7 from "../assets/bride/b7.avif";
import b8 from "../assets/bride/b8.avif";
import b9 from "../assets/bride/b9.avif";
import b10 from "../assets/bride/b10.avif";

// Hår-galleri
import h1 from "../assets/bride/hair/h1.avif";
import h2 from "../assets/bride/hair/h2.avif";
import h3 from "../assets/bride/hair/h3.avif";
import h4 from "../assets/bride/hair/h4.avif";
import h5 from "../assets/bride/hair/h5.avif";
import h6 from "../assets/bride/hair/h6.avif";

export default function BridePage() {
    document.title = "Brud – Therese Hommedal";

    const btnPrimary =
        "inline-flex items-center rounded-full border border-neutral-900 px-5 py-2 text-sm uppercase tracking-wide transition hover:bg-neutral-900 hover:text-white";
    const btnGhost =
        "inline-flex items-center rounded-full border border-neutral-300 px-5 py-2 text-sm uppercase tracking-wide text-neutral-700 hover:border-neutral-900";

    const hair = [h1, h2, h3, h4, h5, h6];
    const gallery = [b5, b6, b7, b8, b9, b10];

    return (
        <div className="bg-white">
            {/* HERO / ABOUT THE SERVICE */}
            <section className="relative bg-gradient-to-b from-[#eee6da] to-white -mt-4">
                <div className="max-w-6xl mx-auto px-4 pt-12 pb-6 md:pb-10">
                    <div className="grid items-center gap-10 md:grid-cols-[1.2fr_0.8fr]">
                        {/* Tekst */}
                        <div className="max-w-xl">
                            <h1 className="font-parisienne text-6xl md:text-7xl leading-none text-neutral-900">
                                MAKEUP <br />& HÅR
                            </h1>

                            <p className="mt-5 text-neutral-700">
                                Jeg tilbyr både sminke og hår til bruder og brudefølge. Om bryllupet holdes
                                utenfor Oslo-omegn, kommer reisekostnader i tillegg til prisen. Før den store
                                dagen gjennomfører vi en prøvetime hvor vi sammen finner ut hvilket uttrykk som
                                passer best. Dersom det blir behov for justeringer, kan flere prøvetimer være
                                aktuelle. Jeg jobber med alle typer uttrykk – fra naturlig «no-makeup» look til
                                mer glamorøse stiler – alltid med fokus på holdbarhet slik at looken varer hele
                                dagen og natten.
                            </p>

                            <div className="mt-6 flex gap-3">
                                <a href="/prices" className={btnPrimary}>Se priser</a>
                                <a href="/contact" className={btnGhost}>Kontakt</a>
                            </div>
                        </div>

                        {/* Bilde */}
                        <div className="relative">
                            <img
                                src={b4}
                                alt="Brud – naturlig og tidløs look"
                                className="w-full h-[420px] md:h-[520px] object-cover rounded-2xl shadow-2xl ring-1 ring-black/10 bg-white"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* MEET / PROSESS – kort med tynn ramme og overlappende bilder */}
            <section className="relative bg-white">
                <div className="max-w-6xl mx-auto px-4 py-12 md:py-16">
                    <div className="relative border border-neutral-200 rounded-2xl p-6 md:p-10">
                        {/* Overlappende bilder venstre */}
                        <div className="hidden md:block absolute -left-6 -top-5 w-[240px]">
                            <img
                                src={b2}
                                alt="Brud i snø – stemning"
                                className="w-full h-[400px] object-cover rounded-xl shadow-xl ring-1 ring-black/10 bg-white"
                            />
                        </div>

                        {/* Innhold */}
                        <div className="md:ml-[260px]">
                            <h2 className="text-[13px] uppercase tracking-[0.24em] text-neutral-500">
                                Prosess & prøvetime
                            </h2>
                            <h3 className="mt-2 font-parisienne text-5xl md:text-6xl leading-none text-neutral-900">
                                Skreddersydd til din dag
                            </h3>
                            <p className="mt-5 text-neutral-700 max-w-2xl">
                                Vi starter med en prøvetime hvor vi tester hudforberedelse, base og uttrykk (fra
                                delikat «no-makeup» til soft glam). Har du referansebilder eller ønsker, tar vi
                                det inn i planleggingen. Ved behov setter vi opp en ekstra prøvetime for
                                finjusteringer. På bryllupsdagen kommer jeg on-location og sørger for et holdbart
                                resultat som tåler både tårer og dans.
                            </p>

                            <ul className="mt-6 grid gap-2 text-neutral-800 sm:grid-cols-2 max-w-2xl">
                                <li> Prøvetime i forkant</li>
                                <li> Sminke og hår for brud & forlovere</li>
                                <li> On-location i Oslo & omegn</li>
                                <li> Lang holdbarhet – fra morgen til kveld</li>
                            </ul>

                            <div className="mt-8 flex gap-3">
                                <a href="/prices" className={btnPrimary}>Se priser</a>
                                <a href="/contact" className={btnGhost}>Kontakt</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* STEP BY STEP- banner*/}
            <section className="bg-[#3a3530] text-[#F6EFE7]">
                <div className="max-w-6xl mx-auto px-4 py-10">
                    <div className="grid gap-10 md:grid-cols-3">
                        {[
                            {
                                n: "1.",
                                t: "Prøvetime",
                                d: "Vi starter med en prøvetime i god tid før bryllupet. Her tester vi hudforberedelse, base og ulike uttrykk – fra naturlig glød til mer glam – slik at du kan se hva som føles riktig."
                            },
                            {
                                n: "2.",
                                t: "Tilpasning",
                                d: "Ut fra prøvetimen gjør vi eventuelle justeringer. Looken tilpasses hudtone, hårtype, kjole og lysforhold, slik at uttrykket blir skreddersydd til deg og din dag."
                            },
                            {
                                n: "3.",
                                t: "Bryllupsdagen",
                                d: "På selve dagen kommer jeg on-location med en tydelig plan. Jeg sørger for en rolig gjennomføring for både brud og følge – og et resultat som holder hele dagen og natten."
                            }
                        ].map((it) => (
                            <div key={it.n} className="text-left">
                                <div className="text-6xl md:text-7xl leading-none font-light">{it.n}</div>
                                <div className="mt-2 text-xl">{it.t}</div>
                                <p className="mt-3 text-sm text-white/80 max-w-xs">{it.d}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* GALLERI – brud*/}
            <section className="bg-white">
                <div className="max-w-6xl mx-auto px-4 py-12 md:py-16">
                    {/* Mobil: tittel over */}
                    <h3 className="md:hidden font-parisienne text-5xl leading-none text-neutral-900 text-center">
                        BRUD <br /> & <br /> FORLOVERE
                    </h3>

                    {(() => {
                        // del bildene i to kolonner (venstre/høyre)
                        const leftCol = gallery.filter((_, i) => i % 2 === 0);
                        const rightCol = gallery.filter((_, i) => i % 2 === 1);

                        return (
                            <div className="mt-8 grid gap-6 md:grid-cols-[1fr_auto_1fr] items-start">
                                {/* VENSTRE KOLONNE */}
                                <div className="space-y-4">
                                    {leftCol.map((src, i) => (
                                        <img
                                            key={`L${i}`}
                                            src={src}
                                            alt={`Brud galleri ${i + 1}`}
                                            className="block w-full h-auto rounded-2xl shadow-2xl"
                                            loading="lazy"
                                            decoding="async"
                                        />
                                    ))}
                                </div>

                                {/* MIDTKOLONNE: STICKY TITTEL (mellom bildene) */}
                                <div className="hidden md:flex flex-col items-center self-start sticky top-24 px-2">
                                    <h3 className="font-parisienne text-6xl leading-tight text-neutral-900 text-right">
                                        BRUD <br /> OG <br /> FORLOVERE
                                    </h3>
                                </div>

                                {/* HØYRE KOLONNE */}
                                <div className="space-y-4">
                                    {rightCol.map((src, i) => (
                                        <img
                                            key={`R${i}`}
                                            src={src}
                                            alt={`Brud galleri ${i + 1 + leftCol.length}`}
                                            className="block w-full h-auto rounded-2xl shadow-2xl"
                                            loading="lazy"
                                            decoding="async"
                                        />
                                    ))}
                                </div>
                            </div>
                        );
                    })()}
                </div>
            </section>


            {/* HÅR  */}
            <section className="bg-gradient-to-b from-white to-[#eee6da]">
                <div className="max-w-6xl mx-auto px-4 py-12 md:py-16">
                    <div className="grid items-start gap-10 md:grid-cols-[1.2fr_0.8fr]">
                        {/* VENSTRE: Polaroid-grid 3x2 */}
                        <div className="grid grid-cols-3 gap-6">
                            {[h1, h2, h3, h4, h5, h6].map((src, i) => {
                                const rotations = [
                                    "-rotate-[2.5deg]",
                                    "rotate-[1.5deg]",
                                    "-rotate-[1.5deg]",
                                    "rotate-[2deg]",
                                    "-rotate-[3deg]",
                                    "rotate-[1deg]"
                                ];
                                return (
                                    <figure
                                        key={i}
                                        className={[
                                            "relative bg-white rounded-2xl shadow-2xl ring-1 ring-black/10",
                                            "p-2 pt-2.5", // hvit kant som ramme
                                            "transition-transform duration-200",
                                            rotations[i % rotations.length],
                                            "hover:rotate-0 hover:-translate-y-1"
                                        ].join(" ")}
                                    >
                                        <img
                                            src={src}
                                            alt={`Hår galleri ${i + 1}`}
                                            className="block h-full rounded-lg object-cover"
                                            loading="lazy"
                                            decoding="async"
                                        />
                                    </figure>
                                );
                            })}
                        </div>

                        {/* HØYRE: tittel + tekst + knapper */}
                        <div className="md:pl-6">
                            <h3 className="font-parisienne text-5xl leading-none text-neutral-900">
                                HÅR TIL BRUD <br /> & BRUDEFØLGE
                            </h3>

                            <p className="mt-4 text-neutral-700">
                                Enten du ønsker et klassisk oppsett, myke bølger eller en ren og sleek
                                bun, finner vi en frisyre som passer til både kjole, ansiktsform og
                                personlighet.<br /><br />
                                Før bryllupsdagen setter vi opp en prøvetime hvor vi
                                lander stil og tilbehør. På selve dagen kan jeg style både brud,
                                forlovere og øvrig følge, samt hjelpe med montering av slør eller hårpynt.<br />
                                Om du ønsker ekstra volum med clip-in extensions kan vi også tilrettelegge
                                for det.<br /> <br />
                                Jeg jobber on-location og lager en tidsplan som sikrer en rolig
                                og effektiv gjennomføring. Reiser utenfor Oslo-omegn faktureres i tillegg.
                            </p>

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
            </section>

        </div>
    );
}
