import React from "react";
import { motion } from "motion/react";
import { 
  Target, 
  Layers, 
  Rocket, 
  Cpu, 
  Globe, 
  Zap, 
  ShieldCheck, 
  Users,
  Lightbulb,
  Workflow
} from "lucide-react";

const sections = [
  {
    id: "overview",
    label: "Corporate Overview",
    title: "Intelligence & Innovation",
    content: "GENZ Neural X is a forward-thinking technology company specializing in AI-powered products, automation systems, and scalable digital solutions. We operate at the intersection of innovation and performance, helping businesses build intelligent systems that drive consistent growth.\n\nFrom web and app development to CRM and advanced software solutions, we focus on creating digital infrastructures that are not just functional, but optimized for real business outcomes.",
    icon: Cpu,
    stats: [
      { label: "AI Integrated", value: "100%" },
      { label: "Execution Speed", value: "10x" }
    ]
  },
  {
    id: "identity",
    label: "Strategic Identity",
    title: "Your Growth Partner",
    content: "We are an AI-driven growth and technology partner focused on building end-to-end digital systems for modern businesses. GENZ Neural X combines advanced development, automation, and performance-driven strategies to deliver scalable and result-oriented solutions.\n\nOur approach is not limited to development — we design systems that convert, automate, and scale, helping businesses move beyond traditional methods into intelligent growth models.",
    icon: Target,
    tags: ["Development", "Automation", "Strategy", "Scaling"]
  },
  {
    id: "ecosystem",
    label: "Enterprise Ecosystem",
    title: "Unified Digital Architecture",
    content: "GENZ Neural X delivers a complete ecosystem of digital solutions, including AI product development, automation systems, and custom software services tailored for business growth.\n\nOur clients benefit from streamlined operations, improved conversion rates, faster execution, and scalable systems designed for long-term success. By combining technology, strategy, and execution, we help businesses build a strong and future-ready digital presence.",
    icon: Layers,
    features: ["AI Product Dev", "Workflow Automation", "Custom Software", "Growth Strategy"]
  },
  {
    id: "advantage",
    label: "Competitive Advantage",
    title: "Why Neural X?",
    content: "At GENZ Neural X, we don’t just build technology — we engineer growth systems that deliver measurable business outcomes.\n\nOur unique approach combines AI innovation, strategic thinking, and modern development practices to create solutions that are reliable, scalable, and conversion-focused. We work as an extension of your team, ensuring every solution contributes directly to your business growth and long-term success.",
    icon: Zap,
    highlights: ["Result Oriented", "AI Driven", "Scalable Design"]
  },
  {
    id: "vision",
    label: "Strategic Vision",
    title: "The Future Defined",
    content: "To empower businesses worldwide by delivering AI-driven systems, innovative digital solutions, and scalable technologies that accelerate growth and efficiency.\n\nWe aim to bridge the gap between advanced technology and real-world business needs, becoming a trusted partner for organizations looking to build, automate, and scale in the digital era.",
    icon: Globe
  }
];

const founders = [
  {
    name: "Freeza",
    role: "Founder",
    description: "Freeza founded the company with a strong vision to transform businesses through innovative technology and AI-driven solutions. His focus is not just on delivering services, but on building scalable digital systems that help businesses grow efficiently.\n\nWith expertise in AI products, automation, and modern development technologies, he believes that real success comes from smart solutions, continuous innovation, and result-oriented execution.",
    icon: Cpu
  },
  {
    name: "Muthurasu",
    role: "Co-Founder",
    description: "Muthurasu plays a key role in shaping the company’s strategy and creative direction. With deep knowledge in digital solutions and user-focused development, he ensures every project is impactful and aligned with client goals.\n\nHis strength lies in combining technology with practical business needs turning ideas into powerful web, app, and software solutions that deliver real-world results.",
    icon: Zap
  }
];

export default function Company() {
  return (
    <div id="company" className="bg-obsidian text-ink overflow-hidden pb-32">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center pt-32 px-6">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyber-teal/5 blur-[120px] rounded-full -z-10" />
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="section-label mx-auto mb-8"
          >
            About GENZ Neural X
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-6xl md:text-8xl lg:text-9xl font-display font-black tracking-tighter uppercase mb-8 leading-[0.85]"
          >
            The <span className="text-gradient">Company</span> <br />
            Behind the <span className="text-cyber-teal italic">Systems</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-ink/60 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
          >
            Engineering growth through a unique blend of strategic vision, 
            technical automation, and AI performance.
          </motion.p>
        </div>
      </section>

      {/* Sections Loop */}
      <div className="max-w-7xl mx-auto px-6 space-y-32 md:space-y-48">
        {sections.map((section, i) => (
          <motion.section
            key={section.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className={`grid lg:grid-cols-2 gap-20 items-center ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
          >
            <div className={i % 2 === 1 ? 'lg:order-2' : ''}>
              <div className="section-label mb-6">{section.label}</div>
              <h2 className="text-4xl md:text-6xl font-display font-black uppercase tracking-tighter mb-8 leading-tight">
                {section.title.split(' ').map((word, idx) => (
                  <span key={idx} className={idx === section.title.split(' ').length - 1 ? 'text-cyber-teal' : ''}>
                    {word}{' '}
                  </span>
                ))}
              </h2>
              <div className="space-y-6">
                {section.content.split('\n\n').map((para, idx) => (
                  <p key={idx} className="text-ink/60 text-lg leading-relaxed">
                    {para}
                  </p>
                ))}
              </div>

              {/* Dynamic Extras per Section */}
              {section.stats && (
                <div className="grid grid-cols-2 gap-8 mt-12">
                  {section.stats.map((stat, idx) => (
                    <div key={idx} className="p-6 rounded-2xl bg-black/5 border border-black/10">
                      <div className="text-3xl font-display font-black text-cyber-teal mb-1">{stat.value}</div>
                      <div className="text-[10px] font-black uppercase tracking-widest text-ink/40">{stat.label}</div>
                    </div>
                  ))}
                </div>
              )}

              {section.tags && (
                <div className="flex flex-wrap gap-3 mt-10">
                  {section.tags.map((tag, idx) => (
                    <span key={idx} className="px-4 py-2 rounded-full bg-cyber-teal/5 border border-cyber-teal/20 text-[10px] font-black uppercase tracking-widest text-cyber-teal">
                      {tag}
                    </span>
                  ))}
                </div>
              )}

              {section.features && (
                <div className="grid grid-cols-2 gap-4 mt-10">
                  {section.features.map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-cyber-teal/10 flex items-center justify-center">
                        <ShieldCheck className="w-3 h-3 text-cyber-teal" />
                      </div>
                      <span className="text-sm font-bold uppercase tracking-tight text-ink/70">{feat}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className={`relative ${i % 2 === 1 ? 'lg:order-1' : ''}`}>
              <div className="relative aspect-square glass-card !p-0 rounded-[48px] overflow-hidden flex items-center justify-center group">
                <div className="absolute inset-0 bg-gradient-to-br from-cyber-teal/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <section.icon className="w-32 h-32 md:w-48 md:h-48 text-cyber-teal/10 group-hover:text-cyber-teal/20 transition-all duration-700 group-hover:scale-110" />
                
                {/* Decorative Elements */}
                <div className="absolute top-12 right-12 w-24 h-24 border border-black/5 rounded-full animate-spin-slow" />
                <div className="absolute bottom-12 left-12 w-12 h-12 border-2 border-dashed border-cyber-teal/20 rounded-xl rotate-12" />
                
                {/* Floating Badge */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="absolute bottom-12 right-12 px-6 py-4 bg-white border border-black/10 rounded-2xl shadow-xl flex items-center gap-4"
                >
                  <div className="w-10 h-10 rounded-xl bg-cyber-teal/10 flex items-center justify-center text-cyber-teal">
                    <Workflow className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[10px] font-black uppercase tracking-widest text-ink/30">Status</div>
                    <div className="text-xs font-black uppercase tracking-tight text-ink">Active System</div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.section>
        ))}
      </div>

      {/* Leadership / Architects Section */}
      <section className="py-32 px-6 max-w-7xl mx-auto mt-32">
        <div className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <div className="section-label">Leadership</div>
            <h2 className="text-5xl md:text-7xl font-display font-black tracking-tighter uppercase">
              The <span className="text-gradient">Growth</span> <br /> Architects
            </h2>
          </div>
          <p className="text-ink/40 max-w-md text-sm leading-relaxed">
            Engineering growth through a unique blend of strategic vision, technical automation, and creative performance.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {founders.map((founder, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="absolute -inset-4 border border-black/5 rounded-[40px] group-hover:border-cyber-teal/20 transition-colors duration-500" />
              <div className="relative glass-card p-10 h-full flex flex-col">
                <div className="flex items-start justify-between mb-8">
                  <div>
                    <h3 className="text-3xl font-black font-display uppercase tracking-tighter mb-2">{founder.name}</h3>
                    <div className="px-3 py-1 bg-cyber-teal/10 border border-cyber-teal/20 rounded-full inline-block">
                      <span className="text-cyber-teal text-[10px] font-black uppercase tracking-widest">{founder.role}</span>
                    </div>
                  </div>
                  <founder.icon className="w-10 h-10 text-ink/10 group-hover:text-cyber-teal transition-colors" />
                </div>
                <p className="text-ink/50 leading-relaxed text-sm mb-12 flex-1">
                  {founder.description}
                </p>
                <div className="flex items-center gap-4">
                  <div className="h-px flex-1 bg-black/10" />
                  <div className="text-[10px] font-black uppercase tracking-widest text-ink/20">System ID: 00{i + 1}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Final Vision Banner */}
      <section className="mt-48 py-32 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-cyber-teal shadow-[inset_0_0_100px_rgba(0,0,0,0.1)] opacity-[0.03]" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <h2 className="text-5xl md:text-7xl font-display font-black uppercase tracking-tighter leading-tight">
              Leading the <br />
              <span className="text-gradient">Next Generation</span> <br />
              of Business Growth
            </h2>
            <button 
              onClick={() => window.dispatchEvent(new Event('open-contact-modal'))}
              className="btn-primary text-xl px-12 py-6"
            >
              Start Your Journey <Rocket className="w-6 h-6 ml-2" />
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
