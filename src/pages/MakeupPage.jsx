import { makeupPhotos } from "../data/makeupPageImages";

export default function MakeupPage() {
    document.title = "Makeup – Therese Hommedal";

    // Polaroid 
    const Polaroid = ({ src, alt, photographer, model }) => (
        <figure className="break-inside-avoid mb-5 bg-white p-3 shadow-xl ring-1 ring-black/10">
            <img
                src={src}
                alt={alt}
                className="block w-full object-cover"
                loading="lazy"
                decoding="async"
            />
            <figcaption className="mt-3 text-[11px] leading-4 text-neutral-700">
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
        <div className="bg-[#7C6E64] -mt-4">
            <div className="max-w-6xl mx-auto px-4 py-12">
                <h1 className="font-tangerine text-6xl leading-none text-white">
                    Makeup
                </h1>
                <p className="mt-2 text-neutral-100">
                    Moodboard av tidligere jobber.
                </p>

                <div className="mt-8 columns-1 sm:columns-2 lg:columns-3 gap-5">
                    {makeupPhotos.map((p, i) => (
                        <Polaroid key={i} {...p} />
                    ))}
                </div>
            </div>
        </div>
    );
}
