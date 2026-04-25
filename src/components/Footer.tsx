import { motion } from "motion/react";
import { ArrowUpRight, Linkedin, Mail, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../assest/GENZ_logo-removebg-preview.png";

export default function Footer() {
  return (
    <footer className="py-24 px-6 border-t border-black/5 relative overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-96 bg-blue-600/10 blur-[120px] -z-10" />
      
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 mb-20">
          <div>
            <h2 className="font-display text-5xl md:text-7xl font-bold mb-8 leading-tight">
              Ready to build <br />
              <span className="text-gradient">your growth engine?</span>
            </h2>
            <button 
              onClick={() => window.dispatchEvent(new Event('open-contact-modal'))}
              className="btn-primary text-xl px-10 py-5"
            >
              Book a Strategy Call <ArrowUpRight className="w-6 h-6" />
            </button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-12">
            <div>
              <h4 className="font-display font-bold mb-6 text-sm uppercase tracking-widest text-ink/40">Company</h4>
              <ul className="space-y-4 text-ink/60">
                <li><Link to="/company" className="hover:text-ink transition-colors">About Us</Link></li>
                <li><Link to="/expertise" className="hover:text-ink transition-colors">Expertise</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-display font-bold mb-6 text-sm uppercase tracking-widest text-ink/40">Social</h4>
              <ul className="space-y-4 text-ink/60">
                <li className="flex items-center gap-2 hover:text-ink transition-colors cursor-pointer">
                  <a href="https://www.linkedin.com/company/gen-z-neural-x/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                    <Linkedin className="w-4 h-4" /> LinkedIn
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-span-2 md:col-span-1">
              <h4 className="font-display font-bold mb-6 text-sm uppercase tracking-widest text-ink/40">Contact</h4>
              <div className="space-y-4">
                <a 
                  href="mailto:genzdevoff@gmail.com"
                  className="flex items-center gap-3 text-ink/60 hover:text-ink transition-colors"
                >
                  <Mail className="w-4 h-4 text-cyber-teal" /> genzdevoff@gmail.com
                </a>
                <a 
                  href="https://maps.google.com/?q=6/1195+Indira+Nagar,+Narasapuram+Road,+Sivakasi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-ink/60 hover:text-ink transition-colors leading-relaxed"
                >
                  <MapPin className="w-4 h-4 text-cyber-teal flex-shrink-0 mt-1" />
                  6/1195 Indira Nagar, <br /> Narasapuram Road, Sivakasi
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Massive Branded Footer Text */}
      <div className="mt-20 pointer-events-none select-none overflow-hidden text-center">
        <motion.h1 
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-[25vw] font-display font-black leading-none tracking-tighter uppercase text-ink/5 -mb-[2vw]"
        >
          GenZ
        </motion.h1>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-black/5 gap-6">
        <div className="flex items-center gap-4">
          <Link to="/" className="flex items-center gap-4">
            <img src={logo} alt="GENZ Neural X" className="h-8 w-auto grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-500" />
            <span className="font-display font-black tracking-tighter uppercase text-xl text-ink/50">GENZ Neural X</span>
          </Link>
        </div>
        
        <p className="text-ink/30 text-sm">
          © 2026 GENZ Neural X. All rights reserved.
        </p>

        <p className="text-ink/30 text-sm">
          Developed by <a href="https://www.linkedin.com/in/rishiaravindha" target="_blank" rel="noopener noreferrer" className="text-cyber-teal font-bold hover:underline transition-all">Rishi Aravindha </a>
        </p>

        <div className="flex gap-8 text-xs text-ink/30 uppercase tracking-widest">
          <a href="#" className="hover:text-ink transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-ink transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
