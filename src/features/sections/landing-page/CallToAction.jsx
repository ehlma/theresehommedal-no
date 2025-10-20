import "@/styles/sections/cta.css"

export default function CallToAction() {
    return (
        <section className="cta">
            <div className="cta-container container-fluid">
                <h2 className="heading-2 cta-heading">
                    Finn din look - <br className="sm:hidden"/> utforsk, kontakt eller book direkte
                </h2>

                <p className="text-body cta-subtext">
                    Velg hva du ønsker å gjøre videre. Du kan se porteføljen for inspirasjon, kontakte meg direkte, eller sjekke priser.
                </p>
                
                <div className="cta-action">
                    <a href="/gallery" className="btn ">Se galleri</a>
                    <a href="/contact" className="btn ">Ta kontakt</a>
                    <a href="/prices" className="btn ">Se priser</a>
                </div>
            </div>
        </section>
    )
}