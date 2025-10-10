import CollabPhoto from "../../../assets/collabs/6W5_PHzI.jpeg";

export default function EditorialPanel() {
    return (
        <section>
            <div>
                {/* tekst */}
                <p className="font-inter uppercase text-neutral-500">
                    Tilnærming
                </p>
                <h2 className="font-playfair text-neutral-900 text-3xl">
                    Tidløs makeup, skapt for å vare - og for å være deg.
                </h2>
                <p className="font-inter text-neutral-700">
                    Jeg jobber hud-flrst, med lett hånd og presisjon, for et uttrykk som fremhever dine trekk. Resultatet er komfortablet, fotovennlig og holder hele dagen.
                </p>


                {/* bilde i "maske" */}
                <div className="">
                    <div className="rounded-[2.5rem] overflow-hidden ring-1 ring-black/5 shadow-sm">
                        <img src={CollabPhoto} alt="Editorial makeup" className="w-full object-cover"/>
                    </div>
                </div>
            </div>
        </section>
    )
}