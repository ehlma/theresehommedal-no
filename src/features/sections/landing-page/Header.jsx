import "../../../styles/sections/header.css";

export default function Header() {
    const navLinks = [
        { label: "Hjem", href: "/" },
        { label: "Brud", href: "/bride" },
        { label: "Galleri", href: "/makeup" },
        { label: "Samarbeid", href: "/collaboration" },
        { label: "Om meg", href: "/about" },
        { label: "Priser", href: "/prices" },
        { label: "Kontakt", href: "/contact" },
    ];

    return (
        <header className="header">
            <nav className="header-nav">
                <div className="header-inner">
                    {/* Venstre blokk med logo + linker */}
                    <div className="header-left">
                        <a href="/" className="header-logo font-heading ">
                            Therese Hommedal
                        </a>

                        <ul className="header-links">
                            {navLinks.map((l) => (
                                <li key={l.label}>
                                    <a href={l.href}>{l.label}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}
