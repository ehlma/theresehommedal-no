// src/pages/MakeupPage.jsx

// Importer bildene (bruk riktige filendelser fra mappa di)
import m1 from "../assets/makeup/makeup1.png";
import m2 from "../assets/makeup/makeup2.png";
import m3 from "../assets/makeup/makeup3.png";
import m4 from "../assets/makeup/makeup4.jpg";
import m5 from "../assets/makeup/makeup5.png";
import m6 from "../assets/makeup/makeup6.png";
import m7 from "../assets/makeup/makeup7.png";

export default function MakeupPage() {
  document.title = "Makeup – Therese Hommedal";

  const pics = { a: m1, b: m2, c: m3, d: m4, e: m5, f: m6, g: m7 };

  // Kort med hvit ramme og skygge (uten “dot” og uten cropping)
  const Card = ({ src, alt = "", className = "" }) => (
    <div
      className={
        "absolute bg-white p-2 rounded-xl shadow-2xl ring-1 ring-black/10 " +
        "transition-transform duration-200 hover:-translate-y-1 " +
        className
      }
    >
      <img
        src={src}
        alt={alt}
        className="block rounded-lg w-full h-auto" // behold hele bildet, ingen cropping
        loading="lazy"
        decoding="async"
      />
    </div>
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

        {/* Mobil: 2-kol grid uten cropping */}
        <div className="mt-8 grid grid-cols-2 gap-3 md:hidden">
          {[pics.a, pics.b, pics.c, pics.d, pics.e, pics.f, pics.g].map(
            (src, i) => (
              <div
                key={i}
                className="bg-white p-2 rounded-xl shadow ring-1 ring-black/10"
              >
                <img src={src} alt="" className="rounded-lg w-full h-auto" />
              </div>
            )
          )}
        </div>

        {/* Desktop: overlappende collage */}
        <div className="relative hidden md:block mt-10">
          {/* høyde på “lerretet” – øk/reduser ved behov */}
          <div className="relative min-h-[1100px] lg:min-h-[1200px]">
            {/* Ytre kort – flyttet litt ut i kantene */}
            <Card
              src={pics.a}
              className="w-72 lg:w-80 top-6 left-0 rotate-[-2deg] z-10"
            />
            <Card
              src={pics.b}
              className="w-72 lg:w-80 top-0 right-[10%] rotate-[-1.5deg] z-10"
            />
            <Card
              src={pics.c}
              className="w-80 lg:w-[22rem] top-[45%] left-[10%] rotate-[-0.5deg] z-10"
            />
            <Card
              src={pics.d}
              className="w-64 lg:w-72 top-[40%] right-[2%] rotate-[-1deg] z-10"
            />
            <Card
              src={pics.e}
              className="w-64 lg:w-72 bottom-[-2%] right-[2%] rotate-[2deg] z-10"
            />
            <Card
              src={pics.f}
              className="w-80 lg:w-[22rem] bottom-22 left-[42%] rotate-[1deg] z-10"
            />

            {/* makeup7 → midten og øverst, uten å dekke ansikter */}
            <Card
              src={pics.g}
              className="w-80 lg:w-[24rem] left-[45%] -translate-x-1/2 rotate-[2deg] z-30"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
