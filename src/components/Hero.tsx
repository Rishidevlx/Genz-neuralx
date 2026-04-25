import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowUpRight, Zap } from "lucide-react";
import logo from "../assest/GENZ_logo-removebg-preview.png";

export default function Hero() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-cyber-teal/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-cyber-teal/10 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col justify-center"
        >
          <div className="flex items-center mb-6">
            <span className="px-3 py-1.5 rounded-full bg-cyber-teal/10 border border-cyber-teal/30 text-cyber-teal text-[10px] md:text-xs font-black uppercase tracking-[0.2em] animate-pulse">
              Built for Scale
            </span>
          </div>

          <h1 className="font-display text-5xl md:text-7xl font-black leading-tight mb-8 tracking-tighter uppercase text-ink">
            Transform Your Business with <span className="text-gradient">AI-Powered</span> Digital <span className="text-cyber-teal">Systems</span>
          </h1>

          <p className="text-ink/60 text-lg md:text-xl max-w-[600px] mb-10 leading-relaxed">
            GENZ Neural X delivers end-to-end solutions including web development, mobile apps, CRM systems, and intelligent automation all engineered to streamline operations and drive consistent growth.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            <button
              onClick={() => window.dispatchEvent(new Event('open-contact-modal'))}
              className="btn-primary text-base px-8 py-4 whitespace-nowrap"
            >
              Get My Custom Growth Plan
            </button>
            <button
              onClick={() => window.dispatchEvent(new Event('open-contact-modal'))}
              className="btn-outline text-base px-8 py-4 whitespace-nowrap"
            >
              Book Free Strategy Call
            </button>
          </div>

          <div className="flex items-center gap-6 text-[10px] font-black uppercase tracking-[0.3em] text-ink/30">
            <span className="flex items-center gap-2">
              <div className="w-1 h-1 bg-cyber-teal rounded-full" />
              Custom-built
            </span>
            <span className="flex items-center gap-2">
              <div className="w-1 h-1 bg-cyber-teal rounded-full" />
              No templates
            </span>
            <span className="flex items-center gap-2">
              <div className="w-1 h-1 bg-cyber-teal rounded-full" />
              No guesswork
            </span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative aspect-square flex items-center justify-center"
        >
          {/* Ultra-Enhanced Neural X Core Animation */}
          <motion.div
            animate={{
              y: [0, -20, 0],
              rotate: [0, 5, -5, 0]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="relative w-full max-w-[500px] aspect-square flex items-center justify-center scale-90 md:scale-100"
          >
            {/* Background Glow */}
            <div className="absolute inset-0 bg-cyber-teal/5 rounded-full blur-[100px] animate-pulse" />

            {/* 1. Outer Orbiting Rings (Solar System Feel) */}
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={`ring-${i}`}
                animate={{ rotate: 360 }}
                transition={{ duration: 15 + i * 5, repeat: Infinity, ease: "linear" }}
                className="absolute border border-cyber-teal/10 rounded-full"
                style={{
                  width: `${50 + (i + 1) * 15}%`,
                  height: `${50 + (i + 1) * 15}%`,
                }}
              >
                {/* Orbiting Purple Bubbles */}
                <motion.div
                  animate={{ scale: [1, 1.5, 1] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: i * 0.5 }}
                  className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-4 bg-purple-500/30 rounded-full blur-sm"
                  style={{
                    boxShadow: '0 0 15px rgba(168,85,247,0.5)'
                  }}
                />
              </motion.div>
            ))}

            {/* 2. Secondary Orbiting Elements (Dashed) */}
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="absolute w-[85%] h-[85%] border-[2px] border-dashed border-cyber-teal/5 rounded-full"
            />

            {/* 3. The Central Logo (The Sun of the System) */}
            <div className="relative z-10 w-80 h-80 flex items-center justify-center">
              {/* Dynamic Glow Behind Logo */}
              <motion.div
                animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute w-full h-full bg-cyber-teal/10 rounded-full blur-[100px]"
              />

              {/* Logo with 3D Tilt and Float */}
              <motion.div
                style={{
                  rotateX: -mousePos.y,
                  rotateY: mousePos.x,
                  transformStyle: "preserve-3d"
                }}
                className="relative group/logo cursor-pointer"
              >
                <motion.img
                  src={logo}
                  alt="GENZ Neural X"
                  animate={{
                    y: [0, -15, 0],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="w-56 md:w-72 h-auto object-contain relative z-10 filter drop-shadow-[0_0_30px_rgba(74,222,128,0.4)] group-hover/logo:scale-110 transition-transform duration-700"
                />

                {/* Inner Orbit Light Trace */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-[-40px] border-2 border-dashed border-cyber-teal/20 rounded-full scale-125 pointer-events-none"
                />
              </motion.div>
            </div>

            {/* 4. Floating Neural Particles (Atmospheric) */}
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={`particle-${i}`}
                className="absolute w-1.5 h-1.5 bg-cyber-teal/30 rounded-full"
                animate={{
                  x: [0, Math.random() * 500 - 250],
                  y: [0, Math.random() * 500 - 250],
                  opacity: [0, 0.8, 0],
                  scale: [0, 2.5, 0]
                }}
                transition={{
                  duration: 5 + Math.random() * 5,
                  repeat: Infinity,
                  delay: i * 0.2
                }}
                style={{
                  top: "50%",
                  left: "50%"
                }}
              />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
