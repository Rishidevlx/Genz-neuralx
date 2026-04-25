import { motion } from "motion/react";
import Hero from "../components/Hero";
import ProblemSolution from "../components/ProblemSolution";
import Stats from "../components/Stats";
import Services from "../components/Services";
import Results from "../components/Results";
import CaseStudies from "../components/CaseStudies";
import Process from "../components/Process";
import Testimonials from "../components/Testimonials";
import FAQ from "../components/FAQ";
import Contact from "../components/Contact";
import PrimaryCTA from "../components/PrimaryCTA";

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Hero />
      <ProblemSolution />
      <Stats />
      <Services />
      <Results />
      <CaseStudies />
      <Process />
      <Testimonials />
      <PrimaryCTA />
      <FAQ />
      <Contact />
    </motion.div>
  );
}
