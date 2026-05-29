import { motion } from "motion/react";
import { Section, SectionHeader } from "./Section";
import {
  Layers, Smartphone, Palette, Server, Lock, Database, Atom,
} from "lucide-react";

const services = [
  { Icon: Layers, title: "Full Stack Development", desc: "End-to-end web apps from database to UI, built to scale." },
  { Icon: Smartphone, title: "Responsive Websites", desc: "Pixel-perfect interfaces that work beautifully on every device." },
  { Icon: Palette, title: "Frontend UI Design", desc: "Modern, accessible UIs crafted with React and Tailwind." },
  { Icon: Server, title: "REST API Development", desc: "Clean, documented APIs with predictable contracts." },
  { Icon: Lock, title: "Authentication Systems", desc: "Secure JWT, role-based access, and session management." },
  { Icon: Database, title: "Database Integration", desc: "MongoDB and SQL schemas designed for real workloads." },
  { Icon: Atom, title: "React & Next.js Apps", desc: "SSR, routing, and performance-tuned modern React apps." },
];

export function Services() {
  return (
    <Section id="services">
      <SectionHeader
        eyebrow="Services"
        title={<>What I Can <span className="text-gradient">Build For You</span></>}
        description="From idea to deployment — here's how I can help bring your product to life."
      />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {services.map((s, idx) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.45, delay: idx * 0.05 }}
            className="group relative glass rounded-2xl p-6 hover:border-primary/50 transition-all"
          >
            <div className="absolute inset-0 rounded-2xl bg-gradient-primary opacity-0 group-hover:opacity-[0.06] transition-opacity" />
            <div className="relative">
              <div className="h-12 w-12 rounded-xl bg-surface-elevated border border-border/60 grid place-items-center text-primary group-hover:bg-gradient-primary group-hover:text-primary-foreground group-hover:glow-primary transition-all mb-4">
                <s.Icon size={22} />
              </div>
              <h3 className="font-display text-lg font-semibold">{s.title}</h3>
              <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{s.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
