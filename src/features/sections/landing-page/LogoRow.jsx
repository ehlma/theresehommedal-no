// src/features/sections/landing-page/LogoRow.jsx
import costume from "@/assets/logos/costumeawards.svg";
import fenja from "@/assets/logos/fenja.avif";
import johaug from "@/assets/logos/johaug.png";
import linda from "@/assets/logos/lindaWick.png";
import oslorunway from "@/assets/logos/oslorunway.svg";
import woodling from "@/assets/logos/woodling.png";

export default function LogoRow() {
  const logos = [
    { name: "Costume", src: costume },
    { name: "Fenja", src: fenja },
    { name: "Johaug", src: johaug },
    { name: "Linda", src: linda },
    { name: "Oslo Runway", src: oslorunway },
    { name: "Woodling", src: woodling },
  ];

  return (
    <section className="py-14 md:py-20 bg-[#f8f6f3]">
      <div className="max-w-6xl mx-auto px-4 md:px-8 text-center">
        <p className="font-inter tracking-[0.2em] text-[11px] uppercase text-neutral-500 mb-6">
          Samarbeid & Omtale
        </p>

        <div className="flex flex-wrap justify-center items-center gap-x-10 gap-y-6 opacity-70">
          {logos.map((logo) => (
            <img
              key={logo.name}
              src={logo.src}
              alt={logo.name}
              className="h-6 md:h-8 object-contain grayscale"
              loading="lazy"
              decoding="async"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
