import brideHeader from "../assets/about/brideTh3.jpg";
import brideCard from "../assets/about/brideTh2.jpg";

export default function AboutPage() {
    document.title = "Om meg – Therese Hommedal";

    return (
        <div className="bg-white -mt-4">
            {/* Full-bleed headerbilde */}
            <div className="relative">
                <img
                    src={brideHeader}
                    alt="Therese Hommedal – portrett"
                    className="w-full h-[40vh] sm:h-[48vh] md:h-[56vh] lg:h-[64vh] object-cover"
                    loading="eager"
                    decoding="async"
                />
            </div>

            {/* Tekst + kort med pin på høyre side */}
            <section className="px-4 ">
                <div className="mx-auto max-w-6xl py-12">
                    <div className="grid items-start gap-8 lg:gap-12 md:grid-cols-[minmax(0,1fr)_320px] lg:grid-cols-[minmax(0,1fr)_360px]">
                        {/* Venstre: tekst */}
                        <div className="max-w-3xl">
                            <h2 className="mt-2 text-lg text-neutral-900">Om meg</h2>
                            <h1 className="text-6xl font-light leading-none text-neutral-900">
                                THERESE HOMMEDAL
                            </h1>

                            <p className="mt-6 text-neutral-700">
                                Jeg er utdannet makeupartist ved
                                LW School of Makeup. Jeg jobber
                                med et rent og tidløst uttrykk der hud står i fokus – fra naturlig
                                brudeglød til mer redaksjonelle looker. Jeg tilbyr også hårstyling
                                som kompletterer makeupen.
                            </p>

                            <p className="mt-4 text-neutral-700">
                                Jeg har jobbet med bruder og forlovere, samt i samarbeid med
                                Vogue Scandinavia,
                                Oslo Runway (Oslo Fashion Week),
                                Costume Awards og
                                FREYA smykker. Jeg sminker til
                                runway,
                                photoshoots,
                                fester og
                                bryllup, både i studio og on
                                location.
                            </p>

                            <p className="mt-4 text-neutral-700">
                                Jeg tror på skreddersøm: hver look tilpasses personlighet, hud og
                                anledning – med produkter og teknikker som tåler lys, bevegelse og
                                lange dager.
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

                        {/* Høyre: kort med pin */}
                        <div className="relative md:pt-4 lg:pt-6">
                            <div className="relative mx-auto w-[260px] sm:w-[300px] lg:w-[340px] rotate-[2deg] bg-white p-2 rounded-xl shadow-2xl ring-1 ring-black/10">
                                <img
                                    src={brideCard}
                                    alt="Behind the scenes – brud"
                                    className="block w-full h-auto rounded-lg"
                                    loading="lazy"
                                    decoding="async"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
