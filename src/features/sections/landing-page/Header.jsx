import "../../../styles/sections/header.css";
import { useState } from "react";

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    const navLinks = [
        { label: "Hjem", href: "/" },
        { label: "Brud", href: "/bride" },
        { label: "Galleri", href: "/gallery" },
        { label: "Samarbeid", href: "/collaboration" },
        { label: "Om meg", href: "/about" },
        { label: "Priser", href: "/prices" },
        { label: "Kontakt", href: "/contact" },
    ];

    return (
        <header className="header">
            <nav className="header-nav">
                <div className="header-inner">
                    <div className="header-left">
                        {/* Logo + hamburger */}
                        <div className="header-brand">
                            <a href="/" className="header-logo font-heading">
                                Therese Hommedal
                            </a>

                            <button
                                type="button"
                                className={`header-toggle ${menuOpen ? "header-toggle--open" : ""}`}
                                aria-label={menuOpen ? "Lukk meny" : "Åpne meny"}
                                aria-expanded={menuOpen}
                                onClick={() => setMenuOpen((open) => !open)}
                            >
                                <span className="header-toggle-bar" />
                                <span className="header-toggle-bar" />
                                <span className="header-toggle-bar" />

                            </button>
                        </div>

                        {/* Navigasjon */}
                        <ul
                            className={
                                "header-links" + (menuOpen ? " header-links--open" : "")
                            }
                        >
                            {navLinks.map((l) => (
                                <li key={l.label}>
                                    <a
                                        href={l.href}
                                        onClick={() => setMenuOpen(false)}
                                    >
                                        {l.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}
