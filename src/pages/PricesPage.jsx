// src/pages/PricesPage.jsx
import makeup12 from "../assets/bride/IMG_7045.jpg";
import { FaInstagram, FaPhone, FaEnvelope } from "react-icons/fa";
import "../styles/pages/prices.css";

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
        <div className="prices-sec-head">
            <h2 className="prices-sec-title">{children}</h2>
            <div className="prices-sec-divider" />
        </div>
    );

    const Row = ({ t, p }) => (
        <div className="prices-row">
            <span className="prices-row-title">{t}</span>
            <div className="prices-row-dots" />
            <span className="prices-row-price">{fmt(p)}</span>
        </div>
    );

    const List = ({ items }) => (
        <div className="prices-list">
            {items.map((it) => (
                <Row key={it.t} t={it.t} p={it.p} />
            ))}
        </div>
    );

    return (
        <div className="prices">
            {/* Venstre – sticky bilde (lg+) */}
            <div className="prices-left">
                <img
                    src={makeup12}
                    alt="Makeup – referanse"
                    className="prices-left-img"
                    loading="eager"
                    decoding="async"
                />
                <div className="prices-left-overlay" />
            </div>

            {/* Høyre – prisinnhold */}
            <div className="prices-right">
                <header className="prices-header">
                    <h1 className="prices-title">Prisliste.</h1>
                    <p className="prices-subtitle">Brud- og forloverpriser</p>
                </header>

                <main className="prices-main">
                    <SectionHead>Brud</SectionHead>
                    <List items={brud} />

                    <SectionHead>Pakker</SectionHead>
                    <List items={pakker} />

                    <SectionHead>Forlover</SectionHead>
                    <List items={forlover} />

                    <p className="prices-footnote">
                        * Reise utenfor Oslo i tillegg. Ta kontakt for tilgjengelighet.
                    </p>
                    <p className="prices-footnote">
                        * For andre og større samarbeid, ta kontakt med @lindawickmann ved @lwagency.
                    </p>

                    <div className="prices-contacts">
                        <a href="/contact" className="prices-cta">
                            <FaEnvelope className="icon-20" />
                            Kontaktskjema
                        </a>

                        <a
                            href="https://www.instagram.com/theresehommedal/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="prices-link"
                        >
                            <FaInstagram className="icon-20" />
                            <span>@theresehommedal</span>
                        </a>

                        <a href="tel:+4792402601" className="prices-link">
                            <FaPhone className="icon-20" />
                            <span>+47 92 40 26 01</span>
                        </a>
                    </div>
                </main>
            </div>

            {/* Mobil/Tablet – bilde under innholdet */}
            <div className="prices-bottom-image">
                <img
                    src={makeup12}
                    alt="Makeup – referanse"
                    className="prices-bottom-image-img"
                    loading="lazy"
                    decoding="async"
                />
                <div className="prices-left-overlay" />
            </div>
        </div>
    );
}
