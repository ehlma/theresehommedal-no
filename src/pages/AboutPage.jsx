import a1 from "../assets/about/a1.avif";
import a2 from "../assets/about/a2.avif";
import "../styles/pages/about.css";

export default function AboutPage() {
    document.title = "Om meg – Therese Hommedal";

    return (
        <div className="about">
            {/* Masthead / hero */}
            <section className="about-hero">
                <img
                    src={a2}
                    alt="Therese Hommedal – portrett"
                    className="about-hero__img"
                    loading="eager"
                    decoding="async"
                />
                <div className="about-hero__gradient" />
                <div className="about-hero__inner">
                    <span className="about-hero__eyebrow">Makeup Artist</span>
                    <h1 className="heading-1 heading-1--light">Therese Hommedal</h1>
                </div>
            </section>

            {/* Editorial spread */}
            <section className="about-spread">
                <div className="about-spread__wrap">
                    {/* Venstre: tekst */}
                    <div className="about-copy">
                        <div className="about-copy__meta">
                            <span className="about-copy__vtitle">Om meg</span>
                            <div className="about-copy__rule" />
                        </div>

                        <h2 className="about-copy__h">Alt fra BRYLLUP til CATWALK</h2>

                        <p className="about-copy__p">
                            Utdannet ved LW School of Makeup i 2023. Jeg jobber med et rent og tidløst uttrykk der hud står i fokus – fra naturlig brudeglød til redaksjonelle looker. Hårstyling tilbys for en helhetlig finish.
                        </p>
                        <p className="about-copy__p">
                            Erfaring med bruder og forlovere, og samarbeid med blant annet 3RD Management, Oslo Runway, Costume Awards og Camilla Øhrling Jewelery. Jeg sminker til runway, photoshoots, fester og bryllup – i studio og on location.
                        </p>
                        <p className="about-copy__p">
                            Hver look skreddersys etter personlighet, hud og anledning – med produkter og teknikker som tåler lys, bevegelse og lange dager.
                        </p>

                        <blockquote className="about-quote">
                            «Hud først. Alltid.»
                            <cite className="about-quote__cite">— Therese</cite>
                        </blockquote>

                        <div className="about-actions">
                            <a href="/prices" className="about-btn about-btn--dark">Se priser</a>
                            <a href="/makeup" className="about-btn about-btn--ghost">Galleri</a>
                        </div>
                    </div>

                    {/* Høyre: bilde som bryter gridet */}
                    <figure className="about-fig">
                        <div className="about-fig__card">
                            <img
                                src={a1}
                                alt="Behind the scenes – brud"
                                className="about-fig__img"
                                loading="lazy"
                                decoding="async"
                            />
                        </div>
                    </figure>
                </div>
            </section>
        </div>
    );
}
