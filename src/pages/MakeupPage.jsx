// src/pages/MakeupPage.jsx

// Importer bildene
import m1 from "../assets/makeup/makeup1.png";
import m2 from "../assets/makeup/makeup2.png";
import m3 from "../assets/makeup/makeup3.png";
import m4 from "../assets/makeup/makeup4.jpg";
import m5 from "../assets/makeup/makeup5.png";
import m6 from "../assets/makeup/makeup6.png";
import m7 from "../assets/makeup/makeup7.png";

export default function MakeupPage() {
  document.title = "Makeup – Therese Hommedal";

  // Fyll inn faktiske navn etter behov
  const photos = [
    { src: m1, alt: "Makeup 1", photographer: "Fotograf", model: "Modell", size: "md" },
    { src: m2, alt: "Makeup 2", photographer: "Fotograf", model: "Modell", size: "lg" },
    { src: m3, alt: "Makeup 3", photographer: "Fotograf", model: "Modell", size: "sm" },
    { src: m4, alt: "Makeup 4", photographer: "Fotograf", model: "Modell", size: "md" },
    { src: m5, alt: "Makeup 5", photographer: "Fotograf", model: "Modell", size: "sm" },
    { src: m6, alt: "Makeup 6", photographer: "Fotograf", model: "Modell", size: "lg" },
    { src: m7, alt: "Makeup 7", photographer: "Fotograf", model: "Modell", size: "md" },
  ];

  // Størrelsesvarianter for variasjon i masonry
  const sizeClass = (s) =>
    s === "sm" ? "max-w-[14rem]"
      : s === "lg" ? "max-w-[22rem]"
        : "max-w-[18rem]";

  // Liten variasjon i rotasjon for «analog» følelse (uten at det blir kaos)
  const tiltByIndex = (i) => {
    const tilts = ["rotate-[-1.5deg]", "rotate-[0.5deg]", "rotate-[-0.5deg]", "rotate-[1deg]"];
    return tilts[i % tilts.length];
  };

  const Polaroid = ({
    src,
    alt = "",
    photographer = "",
    model = "",
    size = "md",
    i = 0,
  }) => (
    <figure
      className={[
        "break-inside-avoid mb-5 inline-block", // viktig for columns layout
        "bg-white p-3 rounded-xl shadow-2xl ring-1 ring-black/10",
        "transition-transform duration-200 hover:-translate-y-1",
        sizeClass(size),
        tiltByIndex(i),
      ].join(" ")}
    >
      <img
        src={src}
        alt={alt}
        className="block w-full h-auto rounded-lg"
        loading="lazy"
        decoding="async"
      />
      <figcaption className="mt-3 rounded-md text-[11px] leading-4 text-neutral-700">
        {photographer && (
          <div className="font-medium">
            Foto: <span className="font-normal">{photographer}</span>
          </div>
        )}
        {model && (
          <div>
            Modell: <span className="font-normal">{model}</span>
          </div>
        )}
      </figcaption>
    </figure>
  );

  return (
    <div className="bg-white">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <h1 className="font-tangerine text-6xl leading-none text-neutral-900">
          Makeup
        </h1>
        <p className="mt-2 text-neutral-600">
          Moodboard av tidligere jobber.
        </p>

        {/* Masonry med CSS columns */}
        <div className="mt-8 columns-1 xs:columns-2 lg:columns-3 gap-5">
          {photos.map((p, i) => (
            <Polaroid key={i} {...p} i={i} />
          ))}
        </div>
      </div>
    </div>
  );
}
