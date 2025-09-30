import Hero from "../features/sections/Hero.jsx";
import Bride from "../features/sections/Bride.jsx";
import Collab from "../features/sections/Collab.jsx";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Bride />
      <Collab />
      {/* flere seksjoner */}
      <section id="makeup" className="min-h-[40vh]"></section>
      <section id="about" className="min-h-[40vh]"></section>
    </>
  );
}