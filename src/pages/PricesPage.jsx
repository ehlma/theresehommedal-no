// src/pages/PricesPage.jsx
import makeup12 from "../assets/bride/IMG_7045.jpg";
import { FaInstagram, FaPhone, FaEnvelope } from "react-icons/fa";


export default function PricesPage() {
    document.title = "Priser – Therese Hommedal";

    // Data
    const brud = [
        { t: "Sminke og hår – brud", p: 8500 },
        { t: "Sminke – brud", p: 6000 },
        { t: "Hår – brud", p: 4000 },
    ];
    const pakker = [
        { t: "Sminke brud + 2 forlovere", p: 12000 },
        { t: "Hår brud + 2 forlovere", p: 8000 },
    ];
    const forlover = [
        { t: "Hår og sminke – forlover", p: 4000 },
        { t: "Sminke – forlover", p: 3000 },
        { t: "Hår – forlover", p: "2000–2500" },
    ];

    const fmt = (v) =>
        typeof v === "number"
            ? `${new Intl.NumberFormat("no-NO").format(v)} kr`
            : `${v} kr`;

    const SectionHead = ({ children }) => (
        <div className="mt-10 first:mt-0">
            <h2 className="font-serif text-xl text-stone-700">{children}</h2>
            <div className="mt-2 h-px w-full bg-stone-300/70" />
        </div>
    );

    const Row = ({ t, p }) => (
        <div className="grid grid-cols-[auto_1fr_auto] items-center gap-3 py-3">
            <span className="text-stone-800 uppercase tracking-[0.14em] text-[13px]">
                {t}
            </span>
            <div className="border-b border-dotted border-stone-300/80" />
            <span className="text-stone-700 tracking-wider text-[13px]">{fmt(p)}</span>
        </div>
    );

    const List = ({ items }) => (
        <div className="divide-y divide-transparent">
            {items.map((it) => (
                <Row key={it.t} t={it.t} p={it.p} />
            ))}
        </div>
    );

    return (
        <div className=" -mt-4  grid grid-rows-[auto_1fr_auto] lg:grid-rows-1 lg:grid-cols-3">
            {/* Venstre 1 kolonne sticky bilde */}
            <div className="relative hidden lg:block lg:sticky lg:top-12 lg:h-[calc(100vh-3rem)]">
                <img
                    src={makeup12}
                    alt="Makeup – referanse"
                    className="absolute inset-0 h-full w-full object-cover [object-position:50%_center]"
                    loading="eager"
                    decoding="async"
                />
                <div className="absolute inset-0 bg-black/15" />
            </div>
            {/* Høyre 2 kolonner: prisinnhold */}
            <div className="bg-[#F4EFE8] col-span-1 lg:col-span-2 flex flex-col">
                <header className="px-6 sm:px-10 pt-8">
                    <h1 className="font-serif text-4xl sm:text-5xl text-stone-800">
                        Prisliste.
                    </h1>
                    <p className="text-stone-500 mt-1 text-xs tracking-widest uppercase">
                        Brud- og forloverpriser
                    </p>
                </header>
                <main className="px-6 mt-8 sm:px-10 pb-8">
                    <SectionHead>Brud</SectionHead>
                    <List items={brud} />

                    <SectionHead>Pakker</SectionHead>
                    <List items={pakker} />

                    <SectionHead>Forlover</SectionHead>
                    <List items={forlover} />

                    <p className="text-[12px] mt-4 tracking-widest text-stone-600">
                        * Reise utenfor Oslo i tillegg. Ta kontakt for tilgjengelighet.
                    </p>
                    <p className="text-[12px] mt-4 tracking-widest text-stone-600">
                        * For andre og større samarbeid, ta kontakt med @lindawickmann ved @lwagency.
                    </p>
                    <div className="flex flex-wrap items-center justify-center gap-6 mt-6">
                        <a
                            href="/contact"
                            className="
                            gap-2
                            relative inline-flex items-center justify-center 
                            px-7 py-2.5 text-sm uppercase tracking-wide
                            text-stone-900 transition-all duration-300
                            hover:text-stone-500
                            after:content-[''] after:absolute after:bottom-0 after:left-1/2 
                            after:-translate-x-1/2 after:w-0 after:h-[1px] after:bg-stone-500 
                            after:transition-all after:duration-300 hover:after:w-[70%]
                          "
                        >
                            <FaEnvelope className="w-5 h-5" />

                            Kontaktskjema
                        </a>
                        {/* Instagram */}
                        <a
                            href="https://www.instagram.com/theresehommedal/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-stone-700 hover:text-stone-500 transition-colors duration-200"
                        >
                            <FaInstagram className="w-5 h-5" />
                            <span>@theresehommedal</span>
                        </a>

                        {/* Telefon */}
                        <a
                            href="tel:+4792402601"
                            className="flex items-center gap-2 text-stone-700 hover:text-stone-500 transition-colors duration-200"
                        >
                            <FaPhone className="w-5 h-5" />
                            <span>+47 92 40 26 01</span>
                        </a>
                    </div>
                </main>
            </div>

            {/* MOBIL/TABLET: bilde under innholdet */}
            <div className="relative lg:hidden h-64">
                <img
                    src={makeup12}
                    alt="Makeup – referanse"
                    className="absolute inset-0 h-full w-full object-cover"
                    loading="lazy"
                    decoding="async"
                />
                <div className="absolute inset-0 bg-black/15" />
            </div>
        </div >
    );
}
