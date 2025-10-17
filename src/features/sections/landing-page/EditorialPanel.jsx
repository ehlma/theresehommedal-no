import EditorialA from "../../../assets/bride/b4.avif";
import EditorialB from "../../../assets/collabs/c7.avif";
import LogoRow from "./LogoRow";

import "@/styles/sections/editorial.css";

export default function EditorialPanel() {
    return (
        <section className="editorial">
            <div className="container-fluid">
                {/* Rad 1: tekst venstre, bilde høyre */}
                <div className="editorial__row">
                    <div className="editorial__text">
                        <p className="eyebrow">Tilnærming</p>
                        <h2 className="heading-2">Tidløs makeup, skapt for å vare - og for å være deg.</h2>
                        <p className="body-text">
                            Jeg jobber hud-first, med lett hånd og presisjon, for et uttrykk som fremhever dine trekk. Resultatet er komfortabelt, fotovennlig og holder hele dagen.
                        </p>
                        <a className="link-btn" href="/about">
                            <span>Om meg</span>
                        </a>
                    </div>

                    <div className="editorial__media shape-a">
                        <img src={EditorialA} alt="Editorial makeup" loading="lazy" decoding="async"/>
                    </div>
                </div>
                
                {/* <LogoRow/> */}

                {/* bilde i "maske" */}
                <div className="editorial__row editorial__row-reverse">
                    <div className="editorial__media shape-b">
                        <img src={EditorialB} alt="#" loading="lazy" decoding="async"/>
                    </div>

                    <div className="editorial-text">
                        <p className="eyebrow">Tempor aliquip</p>
                        <h2 className="heading-2">Aliqua duis</h2>
                        <p className="body-text">
                            Ullamco aliquip nostrud ullamco aliqua exercitation laborum est occaecat. Magna enim veniam ipsum elit exercitation aliquip aliquip amet. Non ea ea et id minim irure elit sunt nisi ut pariatur. 
                        </p>

                        <a className="link-btn" href="#">
                            <span>mollit exercitation</span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}