import { motion } from "motion/react";
import logo from "../assest/GENZ_logo-removebg-preview.png";

export default function Preloader() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="fixed inset-0 z-[100] bg-white flex items-center justify-center"
    >
      <div className="flex flex-col items-center gap-6">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            duration: 1,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="w-24 h-24 sm:w-32 sm:h-32 mb-4"
        >
          <img src={logo} alt="GENZ Neural X" className="w-full h-full object-contain drop-shadow-[0_0_20px_rgba(0,0,0,0.1)]" />
        </motion.div>
        
        <div className="overflow-hidden">
          <motion.span
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 1,
              delay: 0.2,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="block font-display font-black text-2xl tracking-[0.3em] uppercase text-ink"
          >
            GENZ Neural X
          </motion.span>
        </div>
        
        <motion.div 
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 1.5, delay: 0.5, ease: "easeInOut" }}
          className="h-px bg-cyber-teal mt-2"
        />
      </div>
    </motion.div>
  );
}
