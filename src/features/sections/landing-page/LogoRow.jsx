// src/features/sections/landing-page/LogoRow.jsx
import costume from "@/assets/logos/costumeawards.svg";
import fenja from "@/assets/logos/fenja.png";
import johaug from "@/assets/logos/johaug.png";
import linda from "@/assets/logos/lindaWick.png";
import oslorunway from "@/assets/logos/oslorunway.svg";
import woodling from "@/assets/logos/woodling.png";

export default function LogoRow() {
  const logos = [
    { name: "Fenja", src: fenja },
    { name: "Oslo Runway", src: oslorunway },
    { name: "Johaug", src: johaug },
    { name: "Costume", src: costume },
    { name: "Linda", src: linda },
    { name: "Woodling", src: woodling },
  ];

  // Uendelig loop (dobbeltliste)
  const doubled = [...logos, ...logos];

  return (
    <section className="logo-row">
      <div className="container-fluid">
        <p className="eyebrow logo-row__title">
          Samarbeid & Omtale
        </p>

        <div className="logo-row__viewport" aria-hidden>
          <div className="logo-row__track">
            <ul className="logo-row__group">
              {logos.map((l) => (
                <li className="logo-row__item" key={`gl-${l.name}`}>
                  <img
                    className="logo-row__img"
                    src={l.src}
                    alt={l.name}
                    loading="lazy"
                    decoding="async"
                  />
                </li> 
              ))}
            </ul>

            <ul className="logo-row__group">
              {logos.map((l) => (
                <li className="logo-row__item" key={`gl-${l.name}`}>
                  <img
                    className="logo-row__img"
                    src={l.src}
                    alt={l.name}
                    loading="lazy"
                    decoding="async"
                  />
                </li> 
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
