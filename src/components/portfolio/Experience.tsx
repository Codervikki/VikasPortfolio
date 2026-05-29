import { motion } from "motion/react";
import { Section, SectionHeader } from "./Section";
import { Briefcase, MapPin, Calendar } from "lucide-react";

export function Experience() {
  return (
    <Section id="experience">
      <SectionHeader
        eyebrow="Experience"
        title={<>Where I've <span className="text-gradient">Worked</span></>}
        description="Hands-on experience strengthening my engineering foundations."
      />
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto glass rounded-2xl p-8 relative overflow-hidden"
      >
        <div className="absolute -top-20 -right-20 h-56 w-56 rounded-full bg-accent/10 blur-3xl" />
        <div className="relative flex flex-col sm:flex-row gap-6">
          <div className="h-14 w-14 grid place-items-center rounded-2xl bg-gradient-primary text-primary-foreground glow-primary shrink-0">
            <Briefcase size={22} />
          </div>
          <div className="flex-1">
            <div className="flex flex-wrap items-start justify-between gap-2">
              <div>
                <h3 className="font-display text-xl font-semibold">Python Programming Intern</h3>
                <div className="text-primary font-medium">CodSoft</div>
              </div>
              <span className="text-xs px-3 py-1 rounded-full bg-gradient-primary text-primary-foreground">
                Internship
              </span>
            </div>
            <div className="flex flex-wrap gap-4 mt-3 text-xs text-muted-foreground">
              <span className="inline-flex items-center gap-1.5"><Calendar size={13} /> Feb 2026 – Mar 2026</span>
              <span className="inline-flex items-center gap-1.5"><MapPin size={13} /> Remote</span>
            </div>
            <ul className="mt-5 space-y-2 text-sm text-muted-foreground">
              {[
                "Worked on Python-based development tasks and scripting solutions.",
                "Built practical programming utilities with a focus on correctness.",
                "Improved problem-solving and clean-coding habits.",
                "Explored backend logic, file I/O, and modular code design.",
              ].map((line) => (
                <li key={line} className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-gradient-primary shrink-0" />
                  {line}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </motion.div>
    </Section>
  );
}
