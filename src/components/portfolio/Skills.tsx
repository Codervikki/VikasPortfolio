import { motion } from "motion/react";
import { Section, SectionHeader } from "./Section";
import {
  Code2,
  Server,
  Database,
  Terminal,
  Brain,
  Wrench,
} from "lucide-react";

const groups = [
  {
    Icon: Code2,
    title: "Frontend",
    items: ["React.js", "Next.js", "JavaScript", "Tailwind CSS", "HTML5", "CSS3", "Material UI"],
  },
  {
    Icon: Server,
    title: "Backend",
    items: ["Node.js", "Express.js", "Flask", "REST APIs", "JWT Auth"],
  },
  {
    Icon: Database,
    title: "Database",
    items: ["MongoDB", "SQL"],
  },
  {
    Icon: Terminal,
    title: "Languages",
    items: ["Python", "C++", "JavaScript"],
  },
  {
    Icon: Brain,
    title: "Core Concepts",
    items: ["DSA", "OOP", "DBMS", "Auth Systems", "API Integration"],
  },
  {
    Icon: Wrench,
    title: "Tools",
    items: ["Git", "GitHub", "VS Code"],
  },
];

export function Skills() {
  return (
    <Section id="skills">
      <SectionHeader
        eyebrow="Skills"
        title={<>My <span className="text-gradient">Tech Stack</span></>}
        description="The tools and technologies I use to build modern, scalable web applications."
      />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {groups.map((g, idx) => (
          <motion.div
            key={g.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: idx * 0.05 }}
            className="group relative glass rounded-2xl p-6 overflow-hidden hover:border-primary/40 transition-colors"
          >
            <div className="absolute -top-12 -right-12 h-32 w-32 rounded-full bg-primary/10 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative">
              <div className="h-11 w-11 grid place-items-center rounded-xl bg-gradient-primary text-primary-foreground mb-4 glow-primary">
                <g.Icon size={20} />
              </div>
              <h3 className="font-display text-lg font-semibold mb-3">{g.title}</h3>
              <div className="flex flex-wrap gap-2">
                {g.items.map((it) => (
                  <span
                    key={it}
                    className="text-xs px-3 py-1 rounded-full bg-surface-elevated border border-border/60 text-muted-foreground hover:text-foreground hover:border-primary/40 transition-colors"
                  >
                    {it}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
