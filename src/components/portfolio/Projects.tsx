import { motion } from "motion/react";
import { Section, SectionHeader } from "./Section";
import { Github, ExternalLink, Wallet, ShoppingCart, Train } from "lucide-react";

const projects = [
  {
    Icon: Wallet,
    title: "SmartBank",
    tag: "Banking & Finance",
    desc: "Full-stack banking platform with JWT auth, secure REST APIs, transaction management and responsive dashboards.",
    stack: ["React.js", "Node.js", "Express", "MongoDB", "JWT"],
    accent: "from-violet-500 to-fuchsia-500",
  },
  {
    Icon: ShoppingCart,
    title: "SnapCart",
    tag: "Grocery Platform",
    desc: "Multi-user grocery web app with Admin, Customer and Delivery dashboards. Cart system + order tracking.",
    stack: ["Next.js", "React", "Tailwind", "Material UI"],
    accent: "from-sky-500 to-cyan-400",
  },
  {
    Icon: Train,
    title: "Railway Reservation",
    tag: "Booking System",
    desc: "Reservation platform supporting booking, cancellation and payment simulation with role-based authentication.",
    stack: ["Python", "Flask", "SQL", "Auth"],
    accent: "from-indigo-500 to-blue-500",
  },
];

export function Projects() {
  return (
    <Section id="projects">
      <SectionHeader
        eyebrow="Projects"
        title={<>Featured <span className="text-gradient">Work</span></>}
        description="A selection of full-stack projects I've designed and built end-to-end."
      />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p, idx) => (
          <motion.article
            key={p.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: idx * 0.08 }}
            className="group relative glass rounded-2xl overflow-hidden hover:border-primary/40 transition-all hover:-translate-y-1"
          >
            <div className={`relative h-44 bg-gradient-to-br ${p.accent} overflow-hidden`}>
              <div className="absolute inset-0 grid-bg opacity-30" />
              <div className="absolute inset-0 grid place-items-center">
                <p.Icon size={64} className="text-white/90 drop-shadow-lg group-hover:scale-110 transition-transform" />
              </div>
              <div className="absolute top-3 left-3 text-[10px] uppercase tracking-wider text-white/90 bg-black/30 backdrop-blur px-2 py-1 rounded-full">
                {p.tag}
              </div>
            </div>
            <div className="p-6">
              <h3 className="font-display text-xl font-semibold mb-2">{p.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
              <div className="flex flex-wrap gap-1.5 mt-4">
                {p.stack.map((s) => (
                  <span key={s} className="text-[10px] px-2 py-1 rounded bg-surface-elevated border border-border/60 text-muted-foreground">
                    {s}
                  </span>
                ))}
              </div>
              <div className="flex items-center gap-3 mt-5 pt-5 border-t border-border/40">
                <a href="#" className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors">
                  <Github size={15} /> Code
                </a>
                <a href="#" className="inline-flex items-center gap-1.5 text-sm text-primary hover:text-foreground transition-colors">
                  <ExternalLink size={15} /> Live Demo
                </a>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}
