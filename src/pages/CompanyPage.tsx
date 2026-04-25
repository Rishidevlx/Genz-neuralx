import { useEffect } from "react";
import { motion } from "motion/react";
import Company from "../components/Company";

export default function CompanyPage() {
  // Ensure we start at the top of the page
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-20" // Space for fixed navbar
    >
      <Company />
    </motion.div>
  );
}
