import { collabs, imgUrl } from "@/data/collabs";
import LogoRow from "@/features/sections/landing-page/LogoRow";

export default function CollaborationPage () {
  document.title = "Samarbeid - Therese Hommedal"


  // Tittel per slug
  const slugLabels = {
    "oslo-runway": "Oslo Runway",
    "costume-awards": "Costume Awards",
    "costume-mag": "Costume Magasin",
    "camilla-ohrling": "Camilla Øhrling Jewelry",
    "kreativ-shoot": "Kreativ shoot",
  }; 

  // Filtrer ut duplikater
  const unique = collabs.filter((x) => !x.duplicateOf);

  // Grupper etter partnerSlug
  const groups = unique.reduce((acc, item) => {
    const key = item.partnerSlug;
    if (!acc[key]) acc[key] = { title: item.parnterName, items: [] };
    acc[key].items.push(item);
    return acc;
  }, {});

  const order = [
    "oslo-runway",
    "costume-mag",
    "costume-awards",
    "camilla-ohrling",
    "kreativ-shoot",
  ];


    return (
      <section className="collab container-fluid">
      <header className="collab-hero">
        <h1 className="heading-2 font-heading">Samarbeid & omtale</h1>
        <p className="text-body mt-2 max-w-prose">
          Utvalgte samarbeid – runway, kampanje og editorials. Fokus på hud,
          struktur og tidløshet.
        </p>
      </header>

      {order
        .filter((slug) => groups[slug])
        .map((slug) => {
          const { title, items } = groups[slug];
          return (
            <section key={slug} className="collab-section">
              <div className="collab-section-header">
                <p className="collab-eyebrow">{slugLabels[slug] ?? slug}</p>
                <h2 className="heading-3 font-heading">{title}</h2>
              </div>

              <div className="collab-gallery">
                {items.map((img) => (
                  <figure key={img.id} className="collab-card">
                    <img
                      className="collab-card__img"
                      src={imgUrl(img.file)}
                      alt={[
                        title,
                        img.designer && `Designer: ${img.designer}`,
                        img.photographer && `Foto: ${img.photographer}`,
                      ]
                        .filter(Boolean)
                        .join(" ")}
                      loading="lazy"
                      decoding="async"
                    />
                    {(img.designer || img.photographer || img.notes) && (
                      <figcaption className="collab-card__overlay">
                        {img.designer && 
                          <div className="overlay-line">Designer: {img.designer}</div>
                        }
                        {img.photographer && 
                          <div className="overlay-line"> Foto: {img.photographer}</div>
                        }
                        {img.notes && <div className="overlay-line"> {img.notes}</div>}
                      </figcaption>
                    )}
                  </figure>
                ))}
              </div>
            </section>
          );
        })}
        <LogoRow/>
    </section>
    )
  }
  