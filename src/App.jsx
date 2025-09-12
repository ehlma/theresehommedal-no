import { Routes, Route, Navigate } from "react-router-dom";
import Header from "./features/sections/Header.jsx";
import Hero from "./features/sections/Hero.jsx";
import PricesPage from "./pages/PricesPage.jsx"; // <- egen side

function Home() {
  // LEGG landingssiden/seksjonene her:
  return (
    <>
      <Hero />
      <section id="bride" className="min-h-[40vh]"></section>
      <section id="makeup" className="min-h-[40vh]"></section>
      <section id="about" className="min-h-[40vh]"></section>
    </>
  );
}

export default function App() {
  return (
    <>
      <Header />
      <main className="pt-16">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/priser" element={<PricesPage />} />
          {/* Fallback så du slipper blank side ved feil URL */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
    </>
  );
}
