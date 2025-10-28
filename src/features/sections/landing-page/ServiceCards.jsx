

// src/features/sections/landing-page/ServiceCards.jsx
export default function ServiceCards() {
    return (
        <section className="services section">
            <div className="container-fluid">
                {/* Ett stort panel-kort */}
                <div className="panel services-panel services-panel--card p-6 md:p-10">
                    <header className="services-header">
                        <h2 className="heading-2">Makeup & styling for enhver anledning</h2>
                        <p className="text-body mt-3">
                            Skreddersydde pakker for brud, event og photoshoot.
                        </p>
                    </header>

                    {/* Tre tjenester inni samme kort */}
                    <div className="services-columns">
                        {/* Services / Brud */}
                        <div className="service-item">
                            <div>
                                <div className="services-icon">💍</div>
                                <h4 className="heading-4">Brud</h4>
                                <p className="text-body mt-2">
                                    Prøvetime og dagspakke for en varig, tidløs look.
                                </p>
                            </div>
                            <a href="/bride" className="link-btn mt-3">
                                <span>Utforsk pakker</span>
                            </a>
                        </div>

                        {/* Event */}
                        <div className="service-item">
                            <div>
                                <div className="services-icon">🥂</div>
                                <h4 className="heading-4">Event</h4>
                                <p className="text-body mt-2">
                                    Makeup for fest, scene og spesielle anledninger.
                                </p>
                            </div>
                            <a href="/makeup" className="link-btn mt-3">
                                <span>Min portefølje</span>
                            </a>
                        </div>

                        {/* Photoshoot */}
                        <div className="service-item">
                            <div>
                                <div className="services-icon">🎥</div>
                                <h4 className="heading-4">Photoshoot</h4>
                                <p className="text-body mt-2">
                                    Oppdrag for editorial, kampanje og on-set touchups.
                                </p>
                            </div>
                            <a href="/collaboration" className="link-btn mt-3">
                                <span>Om samarbeid</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
