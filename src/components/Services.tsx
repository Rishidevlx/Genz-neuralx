import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { Sparkles, Cpu, Globe, Database, Settings, TrendingUp, Bot, Code, Layout, Link2, Zap, Target } from "lucide-react";

const services = [
  {
    title: "AI & Automation Systems",
    icon: Bot,
    items: [
      { name: "AI Solutions", desc: "Intelligent systems that automate workflows and reduce manual effort." },
      { name: "Process Automation", desc: "Streamlining business operations with smart automation tools." },
      { name: "AI Integrations", desc: "Connecting AI into your existing systems for better efficiency." }
    ]
  },
  {
    title: "Web & Application Development",
    icon: Globe,
    items: [
      { name: "Website Development", desc: "Modern, high-performance websites built for speed and conversions." },
      { name: "Application Development", desc: "Custom mobile and web apps designed for scalability." },
      { name: "UI/UX Engineering", desc: "Clean, user-focused designs that improve engagement and usability." }
    ]
  },
  {
    title: "Software & CRM Systems",
    icon: Database,
    items: [
      { name: "Custom Software", desc: "Tailored software solutions built for your business needs." },
      { name: "CRM Development", desc: "Smart CRM systems to manage leads, customers, and workflows." },
      { name: "Admin Dashboards", desc: "Centralized systems to monitor and control operations efficiently." }
    ]
  },
  {
    title: "System Integration & Optimization",
    icon: Settings,
    items: [
      { name: "Tool Integration", desc: "Connecting multiple tools into one seamless system." },
      { name: "Workflow Optimization", desc: "Improving efficiency with structured digital processes." },
      { name: "Performance Optimization", desc: "Enhancing speed, scalability, and system performance." }
    ]
  },
  {
    title: "Digital Growth & Marketing Systems",
    icon: TrendingUp,
    items: [
      { name: "Growth Strategy", desc: "Data-driven strategies for consistent business growth." },
      { name: "Lead Generation Systems", desc: "Automated funnels that attract and capture leads." },
      { name: "Conversion Optimization", desc: "Improving systems to turn visitors into customers." }
    ]
  }
];

export default function Services() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-65%"]);

  return (
    <section id="expertise" className="bg-obsidian">
      {/* Desktop Horizontal Scroll */}
      <div ref={targetRef} className="hidden md:block relative h-[500vh]">
        <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden pt-32 pb-10">
          <div className="max-w-7xl mx-auto px-6 w-full mb-12">
            <div className="section-label mt-8 md:mt-16">Our Services</div>
            <h2 className="text-5xl md:text-6xl font-display font-black tracking-tighter uppercase">
              Growth <span className="text-gradient">Solutions</span>
            </h2>
          </div>

          <motion.div style={{ x }} className="flex gap-8 px-[10%] items-stretch">
            {services.map((service, i) => (
              <div key={i}>
                <ServiceCard service={service} index={i} />
              </div>
            ))}
            
            {/* CTA CARD */}
             <div className="flex-shrink-0 w-[450px] glass-card p-10 flex flex-col justify-center items-center text-center border-cyber-teal/30 bg-cyber-teal/5 relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-cyber-teal/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <Sparkles className="w-16 h-16 text-cyber-teal mb-8 animate-pulse" />
                <h3 className="text-4xl font-display font-black uppercase tracking-tighter mb-4">
                  Get Your Custom <br/> <span className="text-gradient">AI Growth System</span>
                </h3>
                <p className="text-ink/60 text-sm leading-relaxed mb-10 max-w-[280px]">
                  Receive a complete system tailored to your business — from development to automation and growth.
                </p>
                <button 
                  onClick={() => window.dispatchEvent(new Event('open-contact-modal'))}
                  className="btn-primary"
                >
                  Book a Free Consultation
                </button>
             </div>
          </motion.div>

          {/* Scroll Progress Indicator */}
          <div className="absolute bottom-12 left-1/2 -translate-x-1/2 w-64 h-1 bg-black/5 rounded-full overflow-hidden">
            <motion.div 
              style={{ scaleX: scrollYProgress }} 
              className="h-full bg-cyber-teal origin-left"
            />
          </div>
        </div>
      </div>

      {/* Mobile Vertical Layout */}
      <div className="md:hidden py-24 px-6 space-y-16">
        <div className="mb-12">
          <div className="section-label mt-8">Our Services</div>
          <h2 className="text-4xl font-display font-black tracking-tighter uppercase">
            Growth <br /> <span className="text-gradient">Solutions</span>
          </h2>
        </div>
        
        <div className="space-y-8">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <ServiceCard service={service} index={i} isMobile />
            </motion.div>
          ))}
          
          {/* CTA CARD MOBILE */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-full glass-card p-10 flex flex-col justify-center items-center text-center border-cyber-teal/30 bg-cyber-teal/5"
          >
             <Sparkles className="w-12 h-12 text-cyber-teal mb-6" />
             <h3 className="text-3xl font-display font-black uppercase tracking-tighter mb-4">
               Get Your Custom <br/> <span className="text-gradient">AI Growth System</span>
             </h3>
             <p className="text-ink/60 text-sm leading-relaxed mb-8 max-w-[280px]">
               Receive a complete system tailored to your business — from development to automation and growth.
             </p>
             <button 
               onClick={() => window.dispatchEvent(new Event('open-contact-modal'))}
               className="btn-primary w-full"
             >
               Book a Free Consultation
             </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

interface ServiceCardProps {
  service: typeof services[number];
  index: number;
  isMobile?: boolean;
}

function ServiceCard({ service, index, isMobile = false }: ServiceCardProps) {
  return (
    <div
      className={`flex-shrink-0 ${isMobile ? "w-full" : "w-[450px]"} glass-card p-10 flex flex-col h-full min-h-[600px] group`}
    >
      <div className="w-16 h-16 rounded-2xl bg-black/5 flex items-center justify-center mb-10 border border-black/10 group-hover:scale-110 transition-transform">
        <service.icon className="w-8 h-8 text-cyber-teal" />
      </div>
      
      <h3 className="text-3xl font-black font-display uppercase tracking-tighter mb-8 leading-none">
        {service.title}
      </h3>

      <div className="space-y-8 flex-1">
        {service.items.map((item, j) => (
          <div key={j} className="group/item">
            <h4 className="text-cyber-teal text-xs font-black uppercase tracking-widest mb-2 group-hover/item:translate-x-1 transition-transform">
              {item.name}
            </h4>
            <p className="text-ink/40 text-sm leading-relaxed">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
      
      <div className="mt-10 pt-8 border-t border-black/5 flex justify-between items-center">
        <span className="text-[10px] font-black text-ink/20 uppercase tracking-widest">0{index + 1}</span>
        <div className="w-8 h-8 rounded-full border border-black/10 flex items-center justify-center text-ink/40 hover:text-cyber-teal hover:border-cyber-teal transition-colors cursor-pointer">
          →
        </div>
      </div>
    </div>
  );
}
