import heroImg from "../../assets/makeup/heroImage.jpg";

export default function Hero() {
  return (
    <section id="hero" className="relative bg-neutral-100">
      <div className="max-w-6xl mx-auto px-4 pt-10 pb-16">
        <div className="grid md:grid-cols-2 items-center gap-10">
          {/* Tekst */}
          <div>
            <h1 className="font-tangerine text-6xl md:text-7xl leading-none text-neutral-900">
              Therese Hommedal
            </h1>
            <p className="mt-2 text-sm uppercase tracking-[0.25em] text-neutral-600">
              Makeupartist
            </p>

            <a
              href="#about"
              className="mt-6 inline-flex items-center rounded-full border border-neutral-900 px-5 py-2 text-sm uppercase tracking-wide transition hover:bg-neutral-900 hover:text-white"
            >
              Om meg
            </a>
          </div>

          {/* Bilde med kant-fade for “utvidet” følelse */}
          <div className="relative">
            <img
              src={heroImg}
              alt="Portrett av Therese Hommedal"
              className="w-full max-w-[520px] mx-auto rounded-lg shadow-xl"
              style={{
                WebkitMaskImage:
                  "linear-gradient(to right, transparent 0, black 8%, black 92%, transparent 100%)",
                maskImage:
                  "linear-gradient(to right, transparent 0, black 8%, black 92%, transparent 100%)",
              }}
            />
          </div>
        </div>
      </div>

      {/* Subtil “ambient” bakgrunnsglød bak bildet */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(900px_400px_at_75%_50%,rgba(0,0,0,0.06),transparent_65%)]"
      />
    </section>
  );
}
