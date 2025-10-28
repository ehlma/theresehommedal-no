import { useEffect, useState, useRef } from "react";
import { makeupPhotos } from "../data/galleryImages";
import "../styles/pages/gallery.css";

export default function MakeupPage() {
    document.title = "Makeup – Therese Hommedal";

    const [scrolled, setScrolled] = useState(false);
    const containerRef = useRef(null);

    useEffect(() => {
        const onScroll = () => {
            // terskel: juster om du vil at den skal trigge tidligere/senere
            setScrolled(window.scrollY > 40);
        };
        onScroll(); // sett initial state hvis man kommer inn midt i sida
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const Polaroid = ({ src, alt, title, stylist, designer, photographer, model }) => (
        <figure className="polaroid">
            <img
                src={src}
                alt={alt}
                className="polaroid-img"
                loading="lazy"
                decoding="async"
            />
            <figcaption className="polaroid-caption">
                {title && (
                    <div>
                        <span className="polaroid-title">{title}</span>
                    </div>
                )}
                {photographer && (
                    <div>
                        Foto: <span>{photographer}</span>
                    </div>
                )}
                {stylist && (
                    <div>
                        Stylist: <span>{stylist}</span>
                    </div>
                )}
                {designer && (
                    <div>
                        Designer: <span>{designer}</span>
                    </div>
                )}
                {model && (
                    <div>
                        Modell: <span>{model}</span>
                    </div>
                )}
            </figcaption>
        </figure>
    );

    return (
        <section className="gallery-section" ref={containerRef}>
            {/* ① Overlay-tittel (horisontal, over bildene helt øverst) */}
            <div className={`gallery-title-overlay ${scrolled ? "is-hidden" : "is-visible"}`}>
                <h1 className="gallery-title-overlay-text">GALLERI</h1>
            </div>

            <div className="gallery-container">
                {/* ② Sticky vertikal tittel til venstre */}
                <div className="gallery-title-wrap">
                    <h1 className={`gallery-title-vertical ${scrolled ? "is-visible" : "is-hidden"}`}>
                        GALLERI
                    </h1>
                </div>

                {/* ③ Innholdet (masonry) */}
                <div className="gallery-content">
                    {makeupPhotos.map((p, i) => (
                        <Polaroid key={i} {...p} />
                    ))}
                </div>
            </div>
        </section>
    );
}
