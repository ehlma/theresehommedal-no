import camillaLogo from "../../assets/logos/camillaohrling.webp";
import costumeLogo from "../../assets/logos/costumeawards.svg";
import fenjaLogo from "../../assets/logos/fenja.avif";
import johaugLogo from "../../assets/logos/johaug.png";
import lindaLogo from "../../assets/logos/lindawickmann.webp"
import oslorunLogo from "../../assets/logos/oslorunway.svg";
import woodlingLogo from "../../assets/logos/woodling.jpg";

const logos = [
    camillaLogo,
    costumeLogo,
    fenjaLogo,
    johaugLogo,
    lindaLogo,
    oslorunLogo,
    woodlingLogo
];

function Collab () {

    return(
        <section className="bg-[#f5f0e8] py-8 overflow-hidden">
            <div className="relative mx-auto max-w-7xl">
                <div className="flex gap-12 animate-scroll">
                    {[...logos, ...logos].map((logo, i) => (
                        <div
                            key={i}
                            className="flex shrink-0 items-center justify-center h-16 min-w-[140px] sm:min-w-[180px] opacity-80"
                        >
                            <img
                                src={logo}
                                alt={`Logo ${i + 1}`}
                                className="max-h-12 object-contain grayscale hover:grayscale-0 transition"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Collab;



