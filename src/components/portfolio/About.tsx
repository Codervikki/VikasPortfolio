import { motion } from "motion/react";
import { GraduationCap, Briefcase, Code2, Brain } from "lucide-react";
import { Section, SectionHeader } from "./Section";

const stats = [
  { value: "15+", label: "Technologies", Icon: Code2 },
  { value: "5+", label: "Projects Built", Icon: Briefcase },
  { value: "1", label: "Internship", Icon: GraduationCap },
  { value: "100+", label: "DSA Problems", Icon: Brain },
];

const timeline = [
  {
    year: "2024 — 2027",
    title: "Bachelor of Computer Application (BCA)",
    place: "Graphic Era Hill University, Dehradun",
    desc: "3-year program focused on programming, data structures, databases and modern web development.",
    Icon: GraduationCap,
  },
  {
    year: "Feb — Mar 2026",
    title: "Python Programming Intern",
    place: "CodSoft",
    desc: "Built Python-based scripts and backend logic. Strengthened problem-solving and OOP fundamentals.",
    Icon: Briefcase,
  },
];

export function About() {
  return (
    <Section id="about">
      <SectionHeader
        eyebrow="About Me"
        title={<>Designing Solutions, <span className="text-gradient">Not Just Visuals</span></>}
        description="I'm passionate about crafting scalable web applications — from polished interfaces to secure REST APIs and database design."
      />

      <div className="grid lg:grid-cols-5 gap-8">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-2 glass rounded-2xl p-6"
        >
          <h3 className="font-display text-xl font-semibold mb-3">Hello there 👋</h3>
          <p className="text-muted-foreground leading-relaxed text-sm">
            I'm Vikas — a BCA student who loves shipping end-to-end products. I enjoy translating
            ideas into clean React UIs, designing pragmatic data models, and writing APIs that
            stay maintainable as they grow.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed text-sm">
            Outside of building, you'll find me practicing DSA, exploring new frameworks, and
            contributing small open-source improvements.
          </p>
          <div className="grid grid-cols-2 gap-3 mt-6">
            {stats.map(({ value, label, Icon }) => (
              <div
                key={label}
                className="rounded-xl bg-surface-elevated/70 border border-border/60 p-4 hover:border-primary/40 transition-colors"
              >
                <Icon size={18} className="text-primary mb-2" />
                <div className="text-2xl font-bold font-display">{value}</div>
                <div className="text-xs text-muted-foreground">{label}</div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="lg:col-span-3"
        >
          <ol className="relative border-l border-border ml-3 space-y-8">
            {timeline.map((t) => (
              <li key={t.title} className="pl-8 relative">
                <span className="absolute -left-[17px] top-1 h-8 w-8 grid place-items-center rounded-full bg-gradient-primary text-primary-foreground glow-primary">
                  <t.Icon size={14} />
                </span>
                <div className="glass rounded-xl p-5 hover:translate-y-[-2px] transition-transform">
                  <div className="text-xs text-primary font-semibold mb-1">{t.year}</div>
                  <h4 className="font-display text-lg font-semibold">{t.title}</h4>
                  <div className="text-sm text-muted-foreground mb-2">{t.place}</div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{t.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </motion.div>
      </div>
    </Section>
  );
}
