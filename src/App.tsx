import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Preloader from "./components/Preloader";
import ContactModal from "./components/ContactModal";
import WhatsAppFloating from "./components/WhatsAppFloating";
import Home from "./pages/Home";
import CompanyPage from "./pages/CompanyPage";
import ExpertisePage from "./pages/ExpertisePage";

function AppContent() {
  const [isLoading, setIsLoading] = useState(() => {
    return !sessionStorage.getItem("hasLoadedBefore");
  });
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (isLoading) {
      const timer = setTimeout(() => {
        setIsLoading(false);
        sessionStorage.setItem("hasLoadedBefore", "true");
      }, 2500);
      return () => clearTimeout(timer);
    }
  }, [isLoading]);

  useEffect(() => {
    const handleOpenModal = () => setIsContactModalOpen(true);
    window.addEventListener('open-contact-modal', handleOpenModal);
    return () => window.removeEventListener('open-contact-modal', handleOpenModal);
  }, []);

  return (
    <main className="min-h-screen bg-obsidian selection:bg-cyber-teal selection:text-obsidian">
      <AnimatePresence mode="wait">
        {isLoading && <Preloader key="preloader" />}
      </AnimatePresence>

      {!isLoading && (
        <>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/company" element={<CompanyPage />} />
            <Route path="/expertise" element={<ExpertisePage />} />
          </Routes>
          <Footer />
        </>
      )}

      {/* Global Contact Modal */}
      <ContactModal isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)} />
      
      {/* Floating Elements */}
      <WhatsAppFloating />
    </main>
  );
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}
