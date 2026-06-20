import { Routes, Route, Navigate } from "react-router-dom";
import Header from "./features/sections/landing-page/Header.jsx";
import PricesPage from "./pages/PricesPage.jsx";
import BridePage from "./pages/BridePage.jsx";
import MakeupPage from "./pages/GalleryPage.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import ContactPage from "./pages/ContactPage.jsx";
import CollaborationPage from "./pages/CollaborationPage.jsx";
import HomePage from "./pages/HomePage.jsx";
import Footer from "./features/sections/Footer.jsx";

export default function App() {
  return (
    <>
      <Header />
      <main className="pt-16">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/bride" element={<BridePage />} />
          <Route path="/prices" element={<PricesPage />} />
          <Route path="/gallery" element={<MakeupPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/collaboration" element={<CollaborationPage />} />

          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      <Footer />
    </>
  );
}
