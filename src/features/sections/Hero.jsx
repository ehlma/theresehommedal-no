import heroImg from "../../assets/makeup/heroImage.jpg";
import { FaInstagram } from "react-icons/fa";

export default function Hero() {
    return (
      <section id="hero" className="relative bg-neutral-100 -mt-16 pt-16">
        <div
          className="
            max-w-6xl mx-auto px-4
            md:h-[calc(100svh-64px)]            
            md:flex md:items-center md:gap-12
            py-12 md:py-0                  
          "
        >
          {/* Tekst */}
          <div className="w-full md:w-[44%]">
            <h1 className="font-tangerine text-6xl md:text-7xl leading-none text-neutral-900">
              Therese Hommedal
            </h1>
            <p className="mt-2 text-sm uppercase tracking-[0.25em] text-neutral-600">
              Makeupartist
            </p>
            <div className="mt-6 flex items-center gap-3">
                <a
                    href="/about"
                    className="inline-flex items-center rounded-full border border-neutral-900 px-5 py-2 text-sm uppercase tracking-wide transition hover:bg-neutral-900 hover:text-white"
                >
                    Om meg
                </a>

                {/* Instagram  */}
                <a
                    href="https://www.instagram.com/theresehommedal/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-neutral-900 text-neutral-900 transition hover:bg-neutral-900 hover:text-white"
                >
                    <FaInstagram className="h-5 w-5" />
                </a>
            </div>
          </div>
  
          {/* Bilde */}
          <div className="w-full md:w-[56%] md:h-full md:flex md:justify-end">
            <img
              src={heroImg}
              alt="Portrett av Therese Hommedal"
              className="
                md:h-full md:w-auto                
                md:max-h-[calc(100svh-68px)]
                rounded-lg shadow-xl
              "
              style={{
                WebkitMaskImage:
                  "linear-gradient(to right, transparent 0, black 6%, black 94%, transparent 100%)",
                maskImage:
                  "linear-gradient(to right, transparent 0, black 6%, black 94%, transparent 100%)",
              }}
            />
          </div>
        </div>
      </section>
    );
  }
  
