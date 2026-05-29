import { useEffect, useState } from "react";
import { motion } from "motion/react";
import {
  Github, Linkedin, Mail, Code2, ArrowRight, Download, Sparkles, MapPin, MousePointer2,
} from "lucide-react";
import portrait from "@/assets/vikas-portrait.jpg";

const roles = [
  "Full Stack Developer",
  "React & Next.js Developer",
  "REST API Developer",
  "BCA Student",
];

const orbitTech = ["React", "Next", "Node", "Mongo", "Flask", "TS"];

const marquee = [
  "React.js", "Next.js", "Node.js", "Express", "MongoDB",
  "TypeScript", "Tailwind", "Flask", "Python", "REST APIs", "JWT", "Git",
];

function useTypewriter(words: string[], speed = 80, pause = 1500) {
  const [text, setText] = useState("");
  const [i, setI] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[i % words.length];
    const t = setTimeout(
      () => {
        if (!deleting) {
          const next = word.slice(0, text.length + 1);
          setText(next);
          if (next === word) setTimeout(() => setDeleting(true), pause);
        } else {
          const next = word.slice(0, text.length - 1);
          setText(next);
          if (next === "") {
            setDeleting(false);
            setI((p) => p + 1);
          }
        }
      },
      deleting ? speed / 2 : speed,
    );
    return () => clearTimeout(t);
  }, [text, deleting, i, words, speed, pause]);

  return text;
}

export function Hero() {
  const typed = useTypewriter(roles);

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden">
      {/* Aurora + grid + blobs */}
      <div className="absolute inset-0 grid-bg [mask-image:radial-gradient(ellipse_at_center,black_25%,transparent_75%)]" />
      <div className="absolute inset-0 radial-glow pointer-events-none" />
      <div className="absolute -top-24 -left-24 h-[480px] w-[480px] rounded-full bg-primary/25 blur-[120px] animate-blob" />
      <div className="absolute top-40 -right-24 h-[480px] w-[480px] rounded-full bg-accent/25 blur-[120px] animate-blob [animation-delay:-6s]" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[280px] w-[700px] rounded-full bg-primary/10 blur-[120px]" />

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 18 }).map((_, i) => (
          <motion.span
            key={i}
            className="absolute h-1 w-1 rounded-full bg-primary/60"
            style={{
              top: `${(i * 53) % 100}%`,
              left: `${(i * 37) % 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.2, 0.9, 0.2],
            }}
            transition={{
              duration: 4 + (i % 5),
              repeat: Infinity,
              delay: i * 0.2,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center w-full">
        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="order-2 lg:order-1"
        >
          <motion.div
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="inline-flex items-center gap-2 glass rounded-full pl-1.5 pr-4 py-1 text-xs text-muted-foreground mb-6"
          >
            <span className="inline-flex items-center gap-1.5 bg-emerald-500/15 text-emerald-400 rounded-full px-2.5 py-0.5 text-[10px] font-semibold">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              AVAILABLE
            </span>
            Open to Internships & Freelance
          </motion.div>

          <h1 className="text-[2.6rem] sm:text-5xl lg:text-[4.2rem] font-bold leading-[1.02] tracking-tight">
            <span className="block text-muted-foreground/80 text-2xl sm:text-3xl font-display font-medium mb-2">
              Hi there, I'm
            </span>
            <span className="text-gradient">Vikas</span>{" "}
            <span className="text-foreground">Dhoulakhandi</span>
            <Sparkles className="inline-block ml-2 text-accent animate-float" size={28} />
          </h1>

          <div className="mt-5 text-xl sm:text-2xl font-display text-muted-foreground h-9 flex items-center gap-2">
            <span className="text-primary">{">"}</span>
            <span className="text-foreground">{typed}</span>
            <span className="inline-block w-[2px] h-6 bg-primary animate-caret" />
          </div>

          <p className="mt-6 text-base text-muted-foreground max-w-xl leading-relaxed">
            BCA student crafting <span className="text-foreground/90">scalable web applications</span> with
            React, Next.js, Node.js, MongoDB and Flask. I love clean APIs, polished UIs, and shipping
            ideas end-to-end.
          </p>

          <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-muted-foreground">
            <span className="inline-flex items-center gap-1.5"><MapPin size={12} /> Dehradun, India</span>
            <span className="inline-flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" /> BCA @ Graphic Era Hill University
            </span>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="group relative inline-flex items-center gap-2 bg-gradient-primary text-primary-foreground font-medium px-6 py-3 rounded-full glow-primary hover:scale-[1.03] transition-transform overflow-hidden"
            >
              <span className="absolute inset-0 bg-white/20 translate-x-[-120%] group-hover:translate-x-[120%] transition-transform duration-700" />
              <span className="relative">View Projects</span>
              <ArrowRight size={16} className="relative transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#"
              className="group inline-flex items-center gap-2 glass px-6 py-3 rounded-full font-medium hover:border-primary/50 transition-colors"
            >
              <Download size={16} className="transition-transform group-hover:-translate-y-0.5" /> Resume
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium text-foreground border border-border hover:border-primary/60 hover:text-primary transition-colors"
            >
              Let's Talk
            </a>
          </div>

          <div className="mt-8 flex items-center gap-4">
            <div className="flex items-center gap-2">
              {[
                { Icon: Github, href: "https://github.com", label: "GitHub" },
                { Icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
                { Icon: Code2, href: "https://leetcode.com", label: "LeetCode" },
                { Icon: Mail, href: "mailto:vikas@example.com", label: "Email" },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="h-10 w-10 grid place-items-center rounded-full glass text-muted-foreground hover:text-foreground hover:scale-110 hover:shadow-[var(--shadow-glow)] transition-all"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
            <div className="h-8 w-px bg-border" />
            <div className="flex gap-5">
              {[
                { v: "5+", l: "Projects" },
                { v: "15+", l: "Tech" },
                { v: "1yr", l: "Coding" },
              ].map((s) => (
                <div key={s.l}>
                  <div className="font-display text-lg font-bold text-foreground leading-none">{s.v}</div>
                  <div className="text-[10px] uppercase tracking-wider text-muted-foreground mt-1">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* RIGHT — Portrait + orbit + code card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="order-1 lg:order-2 relative mx-auto"
        >
          <div className="relative w-[280px] h-[280px] sm:w-[360px] sm:h-[360px] lg:w-[460px] lg:h-[460px]">
            {/* Glow rings */}
            <div className="absolute inset-0 rounded-full bg-gradient-primary blur-3xl opacity-50 animate-pulse" />
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-6 rounded-full border border-dashed border-primary/30"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-12 rounded-full border border-border/40"
            />

            {/* Orbiting tech badges */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 hidden sm:block"
            >
              {orbitTech.map((t, i) => {
                const angle = (i / orbitTech.length) * Math.PI * 2;
                const r = 50; // % radius from center
                const x = 50 + Math.cos(angle) * r;
                const y = 50 + Math.sin(angle) * r;
                return (
                  <motion.div
                    key={t}
                    animate={{ rotate: -360 }}
                    transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
                    style={{ top: `${y}%`, left: `${x}%` }}
                    className="absolute -translate-x-1/2 -translate-y-1/2"
                  >
                    <div className="glass rounded-full px-3 py-1 text-[10px] font-semibold text-foreground/90 shadow-[var(--shadow-glow)]">
                      {t}
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* Portrait */}
            <div className="absolute inset-4 rounded-full bg-gradient-primary p-[2px]">
              <div className="h-full w-full rounded-full overflow-hidden bg-surface relative">
                <img
                  src={portrait}
                  alt="Vikas Dhoulakhandi"
                  width={1024}
                  height={1024}
                  className="h-full w-full object-cover object-center scale-[1.8] translate-y-6"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent" />
              </div>
            </div>

            {/* Floating cards */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-2 -right-2 sm:right-0 glass rounded-2xl px-4 py-3 flex items-center gap-2"
            >
              <div className="h-9 w-9 grid place-items-center rounded-xl bg-gradient-primary text-primary-foreground font-bold text-sm">
                5+
              </div>
              <div className="text-xs">
                <div className="font-semibold">Projects</div>
                <div className="text-muted-foreground">Shipped</div>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: -2.5 }}
              className="absolute -top-2 -left-2 sm:left-0 glass rounded-2xl px-3 py-2 flex items-center gap-2"
            >
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              <div className="text-xs">
                <div className="font-semibold">Open to work</div>
                <div className="text-muted-foreground">Remote / Hybrid</div>
              </div>
            </motion.div>

            {/* Mini terminal card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="hidden md:block absolute -left-16 bottom-10 glass rounded-xl p-3 w-52 font-mono text-[11px] shadow-[var(--shadow-glow)]"
            >
              <div className="flex items-center gap-1.5 mb-2">
                <span className="h-2 w-2 rounded-full bg-red-400/80" />
                <span className="h-2 w-2 rounded-full bg-yellow-400/80" />
                <span className="h-2 w-2 rounded-full bg-emerald-400/80" />
                <span className="ml-auto text-[9px] text-muted-foreground">vikas.sh</span>
              </div>
              <div className="text-muted-foreground"><span className="text-primary">$</span> whoami</div>
              <div className="text-foreground/90">→ full_stack_dev</div>
              <div className="text-muted-foreground mt-1"><span className="text-primary">$</span> status</div>
              <div className="text-emerald-400">→ building cool stuff ✨</div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Marquee tech ticker */}
      <div className="absolute bottom-0 inset-x-0 border-y border-border/40 bg-surface/40 backdrop-blur-sm overflow-hidden py-3">
        <div className="flex gap-10 animate-[marquee_28s_linear_infinite] whitespace-nowrap">
          {[...marquee, ...marquee].map((t, i) => (
            <span
              key={i}
              className="text-xs uppercase tracking-[0.25em] text-muted-foreground/70 flex items-center gap-10"
            >
              {t}
              <span className="h-1 w-1 rounded-full bg-primary/60" />
            </span>
          ))}
        </div>
      </div>

      {/* Scroll cue */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="hidden lg:flex absolute bottom-14 left-1/2 -translate-x-1/2 flex-col items-center gap-1 text-[10px] uppercase tracking-[0.3em] text-muted-foreground hover:text-foreground transition-colors"
      >
        <MousePointer2 size={14} className="animate-bounce" />
        Scroll
      </motion.a>
    </section>
  );
}
