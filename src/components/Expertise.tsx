import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Lottie from "lottie-react";
import { 
  Code2, 
  Terminal, 
  Layers, 
  Cpu, 
  BrainCircuit, 
  Binary, 
  Smartphone, 
  Building2, 
  Workflow, 
  Cloud, 
  Palette, 
  TrendingUp, 
  PenTool, 
  Shapes,
  ArrowRight,
  Zap,
  CheckCircle2,
  ChevronDown,
  Plus,
  Minus
} from "lucide-react";

// Import Lottie JSON files
import codingDev from "../assest/Coding Development.json";
import codingSlide from "../assest/Coding Slide.json";
import aiChatbot from "../assest/Ai chatbot.json";
import cloudServer from "../assest/Data Cloud Server Animation.json";
import designer from "../assest/Designer.json";

const categories = [
  {
    id: "dev",
    title: "Development Systems",
    label: "Core Engineering",
    description: "High-performance digital infrastructure built for speed, scalability, and conversions.",
    lottie: codingSlide,
    items: [
      {
        title: "Frontend Engineering",
        desc: "Build high-performance, responsive interfaces designed for modern user experiences.",
        includes: ["HTML5", "Advanced CSS", "Modern JavaScript"],
        outcome: "Clean UI + Better user engagement",
        icon: Code2
      },
      {
        title: "Backend Systems",
        desc: "Develop secure, scalable server-side systems and APIs that power business applications.",
        includes: ["Node.js", "API Development", "Database Systems"],
        outcome: "Strong and reliable backend",
        icon: Terminal
      },
      {
        title: "Full Stack Solutions",
        desc: "End-to-end application development combining frontend, backend, and database systems.",
        includes: ["Full Stack Architecture", "MERN Stack", "System Design"],
        outcome: "Complete scalable applications",
        icon: Layers
      },
      {
        title: "Application Development",
        desc: "Create modern mobile and web applications tailored to business needs.",
        includes: ["Android / iOS Apps", "Cross Platform Apps", "UI-based Development"],
        outcome: "Scalable digital products",
        icon: Smartphone
      }
    ]
  },
  {
    id: "ai",
    title: "AI & Automation",
    label: "Intelligence Systems",
    description: "Build AI-powered solutions that automate workflows and enhance decision-making through data.",
    lottie: aiChatbot,
    items: [
      {
        title: "AI & Intelligent Systems",
        desc: "Build AI-powered solutions that automate workflows and enhance decision-making.",
        includes: ["AI Automation", "Machine Learning", "Smart Integrations"],
        outcome: "Intelligent business systems",
        icon: BrainCircuit
      },
      {
        title: "Machine Learning Systems",
        desc: "Develop predictive models and data-driven systems for business insights.",
        includes: ["Data Analysis", "ML Models", "Predictive Systems"],
        outcome: "Data-driven growth",
        icon: Cpu
      },
      {
        title: "Python & Automation Systems",
        desc: "Build automation tools and backend systems using Python-based technologies.",
        includes: ["Automation Scripts", "Backend Systems", "AI Integration"],
        outcome: "Reduced manual work",
        icon: Workflow
      }
    ]
  },
  {
    id: "software",
    title: "Software & Infrastructure",
    label: "Enterprise Solutions",
    description: "Build efficient, high-performance systems with strong programming foundations and cloud scale.",
    lottie: cloudServer,
    items: [
      {
        title: "Core Programming Systems",
        desc: "Build efficient, high-performance systems with strong programming foundations.",
        includes: ["System Logic", "Performance Optimization", "Core Development"],
        outcome: "Stable and optimized systems",
        icon: Binary
      },
      {
        title: "Enterprise Software Development",
        desc: "Develop enterprise-level applications with scalable architecture and performance.",
        includes: ["Business Logic Systems", "API Integration", "Scalable Architecture"],
        outcome: "Enterprise-ready solutions",
        icon: Building2
      },
      {
        title: "Cloud & Infrastructure",
        desc: "Deploy and manage scalable cloud-based systems for modern applications.",
        includes: ["Cloud Deployment", "DevOps", "Server Management"],
        outcome: "Reliable and scalable infrastructure",
        icon: Cloud
      }
    ]
  },
  {
    id: "design",
    title: "Design & Growth",
    label: "Creative Strategy",
    description: "Design user-centric interfaces and complete digital growth systems for business scale.",
    lottie: designer,
    items: [
      {
        title: "UI/UX Engineering",
        desc: "Design user-centric interfaces focused on usability and engagement.",
        includes: ["UI Design", "UX Research", "Prototyping"],
        outcome: "Better user experience",
        icon: Palette
      },
      {
        title: "Digital Growth Systems",
        desc: "Build complete digital growth systems that generate leads and conversions.",
        includes: ["SEO & Performance Marketing", "Lead Funnels", "Conversion Optimization"],
        outcome: "Consistent business growth \ud83d\udcc8",
        icon: TrendingUp
      },
      {
        title: "Content & Brand Strategy",
        desc: "Create impactful content and brand communication strategies.",
        includes: ["Content Strategy", "Copywriting", "Brand Messaging"],
        outcome: "Strong brand presence",
        icon: PenTool
      },
      {
        title: "Creative & Visual Design",
        desc: "Design high-quality visuals for branding, marketing, and digital presence.",
        includes: ["Graphic Design", "Brand Identity", "Creative Assets"],
        outcome: "Professional brand look",
        icon: Shapes
      }
    ]
  }
];

export default function Expertise() {
  const [expandedItem, setExpandedItem] = useState<string | null>(null);

  return (
    <div className="bg-obsidian min-h-screen text-ink pb-32">
      {/* 1. Split Layout Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden px-6">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]" />
        
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="section-label mb-8">Technical Mastery</div>
            <h1 className="text-6xl md:text-8xl font-display font-black tracking-tighter uppercase mb-8 leading-[0.85]">
              Engineering <br />
              <span className="text-gradient">Possibilities</span>
            </h1>
            <p className="text-ink/60 text-xl md:text-2xl max-w-xl leading-relaxed mb-12">
              We don't just build software. We engineer intelligent systems that automate growth, 
              streamline operations, and drive consistent results.
            </p>
            <button 
              onClick={() => document.getElementById('expertise-sections')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-primary flex items-center gap-2 group"
            >
              Explore Solutions <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative hidden lg:block"
          >
            <div className="absolute inset-0 bg-cyber-teal/20 blur-[120px] rounded-full animate-pulse" />
            <motion.div 
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative bg-[#1a1a1a] aspect-square rounded-[60px] flex items-center justify-center p-12 border-[2px] border-white/10 ring-1 ring-white/5 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5),0_0_80px_rgba(168,85,247,0.1)] hover:scale-105 transition-all duration-500 group overflow-hidden"
            >
               {/* Glass Box Inner Highlight */}
               <div className="absolute inset-0 border border-white/10 rounded-[60px] pointer-events-none" />
               <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/5 to-transparent pointer-events-none" />
               
               <Lottie animationData={codingDev} loop={true} className="w-full h-full scale-125 drop-shadow-2xl" />
               
               {/* Technical HUD glow */}
               <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/5 to-transparent rounded-[60px] pointer-events-none" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 2. & 3. Zig-Zag Category Sections */}
      <div id="expertise-sections" className="space-y-48 mt-32">
        {categories.map((cat, index) => (
          <section key={cat.id} className="px-6 max-w-7xl mx-auto pb-32">
            <div className={`grid lg:grid-cols-2 gap-20 items-center ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
              
              {/* Text Content */}
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className={index % 2 !== 0 ? 'lg:order-2' : ''}
              >
                <div className="section-label mb-6 !bg-cyber-teal/5 !text-cyber-teal/60 !border-cyber-teal/20">
                  {cat.label}
                </div>
                <h2 className="text-5xl md:text-6xl font-display font-black uppercase tracking-tighter mb-8 leading-none">
                  {cat.title}
                </h2>
                <p className="text-ink/60 text-lg md:text-xl mb-12 leading-relaxed">
                  {cat.description}
                </p>

                {/* Expandable List UI */}
                <div className="space-y-4">
                  {cat.items.map((item) => (
                    <div key={item.title} className="glass-card !p-0 !rounded-3xl border-black/5 overflow-hidden transition-all duration-300 hover:border-cyber-teal/30">
                      <button
                        onClick={() => setExpandedItem(expandedItem === item.title ? null : item.title)}
                        className="w-full p-6 flex items-center justify-between text-left group"
                      >
                        <div className="flex items-center gap-6">
                          <div className="w-12 h-12 rounded-xl bg-black/5 flex items-center justify-center border border-black/5 group-hover:border-cyber-teal/20 transition-colors">
                            <item.icon className="w-6 h-6 text-ink/30 group-hover:text-cyber-teal transition-colors" />
                          </div>
                          <h3 className="text-xl font-bold uppercase tracking-tight group-hover:text-cyber-teal transition-colors">
                            {item.title}
                          </h3>
                        </div>
                        <div className={`transition-transform duration-500 ${expandedItem === item.title ? 'rotate-180 text-cyber-teal' : 'text-ink/20'}`}>
                          <ChevronDown className="w-6 h-6" />
                        </div>
                      </button>

                      <AnimatePresence>
                        {expandedItem === item.title && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                          >
                            <div className="px-6 pb-8 pt-2">
                              <div className="ml-[72px] space-y-6">
                                <p className="text-ink/50 leading-relaxed text-sm">
                                  {item.desc}
                                </p>
                                <div className="flex flex-wrap gap-2">
                                  {item.includes.map((tag) => (
                                    <span key={tag} className="px-3 py-1 rounded-lg bg-cyber-teal/5 text-[9px] font-black uppercase tracking-widest text-cyber-teal/60 border border-cyber-teal/10">
                                      {tag}
                                    </span>
                                  ))}
                                </div>
                                <div className="pt-4 border-t border-black/5">
                                  <div className="text-[9px] font-black uppercase tracking-widest text-ink/20 mb-1">Impact Outcome</div>
                                  <div className="text-sm font-bold text-ink/70">{item.outcome}</div>
                                </div>
                                <button 
                                  onClick={() => window.dispatchEvent(new Event('open-contact-modal'))}
                                  className="mt-4 text-xs font-black uppercase tracking-widest text-cyber-teal flex items-center gap-2 group/btn"
                                >
                                  Enroll Now <ArrowRight className="w-3 h-3 group-hover/btn:translate-x-1 transition-transform" />
                                </button>
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Visual Content (Lottie) */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9, x: index % 2 === 0 ? 50 : -50 }}
                whileInView={{ opacity: 1, scale: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1 }}
                className={`relative aspect-[4/5] overflow-visible group ${index % 2 !== 0 ? 'lg:order-1' : ''}`}
              >
                <motion.div 
                  animate={{ y: [0, -20, 0] }}
                  transition={{ duration: 5 + index, repeat: Infinity, ease: "easeInOut" }}
                  className="relative glass-card h-full w-full rounded-[60px] flex items-center justify-center p-8 border border-cyber-teal/10 hover:border-cyber-teal/30 hover:scale-105 transition-all duration-500 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.15)]"
                >
                   <Lottie animationData={cat.lottie} loop={true} className="w-full h-full max-h-[400px]" />
                </motion.div>
                
                {/* Technical Node Labels */}
                <div className="absolute bottom-6 left-6 right-6 z-30">
                   <div className="text-[10px] font-mono font-black text-cyber-teal/40 tracking-[0.4em] uppercase mb-2">Technical Animation Node</div>
                   <div className="h-px w-full bg-cyber-teal/10" />
                </div>
              </motion.div>
            </div>
          </section>
        ))}
      </div>

      {/* 5. Final CTA Section */}
      <section className="mt-48 px-6 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative glass-card p-12 md:p-20 overflow-hidden rounded-[60px] text-center border-cyber-teal/20"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-cyber-teal/[0.05] via-transparent to-transparent" />
          
          <div className="relative z-10 max-w-3xl mx-auto">
            <Zap className="w-12 h-12 text-cyber-teal mx-auto mb-8 animate-pulse" />
            <h2 className="text-4xl md:text-6xl font-display font-black uppercase tracking-tighter mb-8 leading-tight">
              Build Your Custom <br />
              <span className="text-gradient">AI Growth System</span>
            </h2>
            <p className="text-ink/60 text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
              We design and deploy end-to-end intelligent systems that combine 
              development, automation, and growth strategies tailored for your business.
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-6">
              <button 
                onClick={() => window.dispatchEvent(new Event('open-contact-modal'))}
                className="btn-primary text-lg px-12 py-6 w-full md:w-auto"
              >
                Book Free Consultation
              </button>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
