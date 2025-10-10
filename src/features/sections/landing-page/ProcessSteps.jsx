const steps = [
    {title: "Forespørsel", text: "Sjekk dato, sted og behov. Du får raskt svar."},
    {title: "Prøve", text: "Vi tester looken og finjusterer til den sitter perfekt."},
    {title: "Den store dagen", text: "Presis oppmøre, rolig flyt - varig, fotoklar makeup."},
];

export default function ProcessSteps() {
    return (
        <section>
            <div>
                <header className="text-center">
                    <p>
                        Prosess
                    </p>
                    <h2>
                        Slik jobber vi - steg for steg
                    </h2>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                    {steps.map((s, i) => (
                        <div key={s.title} className="rounded-2xl ring-1 ring-black/5 bg-white">
                            <div>
                                <h3>{s.title}</h3>
                                <p>{s.text}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}