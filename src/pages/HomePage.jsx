import Hero from "../features/sections/landing-page/Hero.jsx";
// import ServiceCards from "src/features/sections/landing-page/ServiceCards.jsx";
// import EditorialPanel from "src/features/sections/landing-page/EditorialPanel.jsx";
// import ProcessSteps from "src/features/sections/landing-page/ProcessSteps.jsx";
// import CallToAction from "src/features/sections/landing-page/CallToAction.jsx";
import ServiceCards from "../features/sections/landing-page/ServiceCards.jsx";
import EditorialPanel from "../features/sections/landing-page/EditorialPanel.jsx";
import ProcessSteps from "../features/sections/landing-page/ProcessSteps.jsx";
import CallToAction from "../features/sections/landing-page/CallToAction.jsx";
import LogoRow from "@/features/sections/landing-page/LogoRow.jsx";
import Footer from "../features/sections/Footer.jsx";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServiceCards />
      <LogoRow />
      <EditorialPanel />
      
      <ProcessSteps />
      <CallToAction />
    </>
  );
}