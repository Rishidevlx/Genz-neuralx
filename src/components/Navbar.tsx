import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assest/GENZ_logo-removebg-preview.png";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  const navLinks = [
    { name: "Home", href: "/", isAnchor: !isHomePage },
    { name: "Company", href: "/company", isAnchor: false },
    { name: "Expertise", href: "/expertise", isAnchor: false },
  ];

  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 left-0 right-0 z-50 px-6 py-4 bg-obsidian/85 backdrop-blur-2xl border-b border-black/5"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center gap-4 group">
          <img src={logo} alt="GENZ Neural X" className="h-10 w-auto group-hover:scale-110 transition-transform" />
          <span className="text-gradient font-display font-black text-2xl tracking-tighter uppercase">GENZ Neural X</span>
        </Link>
        
        <div className="hidden md:flex items-center gap-10 text-[11px] font-black text-ink/40 uppercase tracking-[0.2em]">
          {navLinks.map((link) => (
            link.isAnchor ? (
              <a 
                key={link.name} 
                href={link.href} 
                className={`hover:text-ink transition-colors ${location.pathname + location.hash === link.href ? 'text-cyber-teal' : ''}`}
              >
                {link.name}
              </a>
            ) : (
              <Link 
                key={link.name} 
                to={link.href} 
                className={`hover:text-ink transition-colors ${location.pathname === link.href ? 'text-cyber-teal' : ''}`}
              >
                {link.name}
              </Link>
            )
          ))}
        </div>

        <div className="hidden md:flex items-center gap-2">
          <button 
            onClick={() => window.dispatchEvent(new Event('open-contact-modal'))}
            className="flex items-center gap-2 px-6 py-2.5 bg-ink text-white rounded-full font-bold text-sm hover:bg-cyber-teal transition-colors group shadow-lg shadow-cyber-teal/20"
          >
            Contact us <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Mobile Toggle Button */}
        <button 
          className="md:hidden text-ink hover:text-cyber-teal transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden absolute top-full left-0 right-0 bg-obsidian/95 backdrop-blur-3xl border-b border-black/5 shadow-2xl overflow-hidden"
          >
            <div className="flex flex-col items-center gap-8 py-10 text-sm font-black text-ink/50 uppercase tracking-[0.2em]">
              {navLinks.map((link) => (
                link.isAnchor ? (
                  <a 
                    key={link.name} 
                    href={link.href} 
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="hover:text-cyber-teal transition-colors"
                  >
                    {link.name}
                  </a>
                ) : (
                  <Link 
                    key={link.name} 
                    to={link.href} 
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="hover:text-cyber-teal transition-colors"
                  >
                    {link.name}
                  </Link>
                )
              ))}
              <button 
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  window.dispatchEvent(new Event('open-contact-modal'));
                }} 
                className="mt-4 px-8 py-4 bg-ink text-white rounded-full font-bold hover:scale-105 transition-transform shadow-lg shadow-cyber-teal/20"
              >
                Contact Us
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </motion.nav>
  );
}
