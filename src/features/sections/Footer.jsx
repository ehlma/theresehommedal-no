import "@/styles/footer.css";

export default function Footer() {
    return (
        <section className="footer">
            <div className="footer-container">
                <div className="footer-brand">
                    <a href="/" className="footer-logo">
                        Therese Hommedal
                    </a>
                    <p className="footer-tagline">Makeupartist</p>
                </div>

                {/* Navigsjon */}
                <nav className="footer-nav">
                    <a href="/about">Om meg</a>
                    <a href="/makeup">Galleri</a>
                    <a href="/prices">Priser</a>
                    <a href="/contact">Kontakt</a>
                </nav>

                {/* SoMe */}
                <div className="footer-socials">
                    <a
                        href="https://www.instagram.com/theresehommedal/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Instagram
                    </a>

                    <a
                        href="/contact"
                        // target="_blank"
                        rel="noopener noreferrer"
                    >
                        Ta kontakt
                    </a>
                </div>

                {/* Bunntekst */}
                <div className="footer-bottom">
                    <p>© {new Date().getFullYear()} Therese Hommedal</p>
                    <p className="footer-credit">
                        Utviklet av Ehlma Consulting
                    </p>
                </div>
            </div>
        </section>
    );
}