import React, { useEffect } from "react";
import Expertise from "../components/Expertise";
import { motion } from "motion/react";

export default function ExpertisePage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Expertise />
    </motion.div>
  );
}
