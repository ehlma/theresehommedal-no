import Hero from "../features/sections/landing-page/Hero.jsx"; 
import Bride from "../features/sections/Bride.jsx";
import Collab from "../features/sections/Collab.jsx";
// import ServiceCards from "src/features/sections/landing-page/ServiceCards.jsx";
// import EditorialPanel from "src/features/sections/landing-page/EditorialPanel.jsx";
// import ProcessSteps from "src/features/sections/landing-page/ProcessSteps.jsx";
// import CallToAction from "src/features/sections/landing-page/CallToAction.jsx";
import ServiceCards from "../features/sections/landing-page/ServiceCards.jsx";
import EditorialPanel from "../features/sections/landing-page/EditorialPanel.jsx";
import ProcessSteps from "../features/sections/landing-page/ProcessSteps.jsx";
import CallToAction from "../features/sections/landing-page/CallToAction.jsx";
import LogoRow from "@/features/sections/landing-page/LogoRow.jsx";

export default function HomePage() {
  return (
    <>
      <Hero />
      {/* <Bride />
      <Collab /> */}
      {/* flere seksjoner */}
      {/* <section id="makeup" className="min-h-[40vh]"></section>
      <section id="about" className="min-h-[40vh]"></section> */}

      <ServiceCards/>
      <EditorialPanel/>
      <LogoRow/>
      <ProcessSteps/>
      <CallToAction/>
    </>
  );
}