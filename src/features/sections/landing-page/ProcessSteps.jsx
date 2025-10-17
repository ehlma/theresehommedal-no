import "@/styles/sections/process.css"
import "@/index.css"

const steps = [
    {title: "Forespørsel", text: "Sjekk dato, sted og behov. Du får raskt svar."},
    {title: "Prøve", text: "Vi tester looken og finjusterer til den sitter perfekt."},
    {title: "Den store dagen", text: "Presis oppmøre, rolig flyt - varig, fotoklar makeup."},
];

export default function ProcessSteps() {
    return (
        <section className="process">
            <div className="container-fluid">
                <header className="process-header">
                    <p className="eyebrow">Prosess</p>
                    <h2 className="heading-2">Slik jobber jeg - steg for steg</h2>
                </header>

                <div className="timeline">
                    <ul className="timeline__list">
                        {steps.map((s, i) => (
                            <li className="timeline__item" key={s.title}>
                                <span className="timeline__node">
                                    <span className="timeline__num">
                                        {String(i + 1).padStart(2, "0")}
                                    </span>
                                </span>

                                <div className="timeline__card">
                                    <h3 className="heading-4">{s.title}</h3>
                                    <p className="text-body">{s.text}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    )
}