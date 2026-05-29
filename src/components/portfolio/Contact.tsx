import { useState, type FormEvent } from "react";
import { motion } from "motion/react";
import { Mail, MapPin, Phone, Github, Linkedin, Code2, Send } from "lucide-react";
import { Section, SectionHeader } from "./Section";
import { toast } from "sonner";

const info = [
  { Icon: Mail, label: "Email", value: "dhoulakhandivikas2006@gmail.com" },
  { Icon: Phone, label: "Phone", value: "+91 9368648203" },
  { Icon: MapPin, label: "Location", value: "Dehradun, India" },
];

const socials = [
  { Icon: Github, href: "https://github.com/Codervikki", label: "GitHub" },
  { Icon: Linkedin, href: "https://www.linkedin.com/in/vikasdhoulakhandi/", label: "LinkedIn" },
  { Icon: Code2, href: "https://leetcode.com/u/Vikass_s/", label: "LeetCode" },
];

export function Contact() {
  const [sending, setSending] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      (e.target as HTMLFormElement).reset();
      toast.success("Message sent! I'll reply soon.");
    }, 900);
  };

  return (
    <Section id="contact">
      <SectionHeader
        eyebrow="Contact"
        title={<>Let's <span className="text-gradient">Work Together</span></>}
        description="Have a project, role, or idea in mind? Drop me a message — I usually reply within a day."
      />
      <div className="grid lg:grid-cols-5 gap-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-2 space-y-3"
        >
          {info.map((i) => (
            <div key={i.label} className="glass rounded-xl p-4 flex items-center gap-4 hover:border-primary/40 transition-colors">
              <div className="h-11 w-11 grid place-items-center rounded-xl bg-gradient-primary text-primary-foreground glow-primary">
                <i.Icon size={18} />
              </div>
              <div>
                <div className="text-xs text-muted-foreground">{i.label}</div>
                <div className="font-medium">{i.value}</div>
              </div>
            </div>
          ))}
          <div className="glass rounded-xl p-5">
            <div className="text-xs text-muted-foreground mb-3">Find me on</div>
            <div className="flex gap-3">
              {socials.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="h-11 w-11 grid place-items-center rounded-xl bg-surface-elevated border border-border/60 text-muted-foreground hover:text-foreground hover:border-primary/60 hover:shadow-[var(--shadow-glow)] transition-all"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          onSubmit={onSubmit}
          className="lg:col-span-3 glass rounded-2xl p-6 sm:p-8 space-y-4"
        >
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="text-xs text-muted-foreground">Name</label>
              <input
                required
                name="name"
                className="mt-1.5 w-full rounded-lg bg-surface-elevated border border-border/60 px-4 py-3 text-sm focus:outline-none focus:border-primary/60 focus:ring-2 focus:ring-primary/20 transition-all"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="text-xs text-muted-foreground">Email</label>
              <input
                required
                type="email"
                name="email"
                className="mt-1.5 w-full rounded-lg bg-surface-elevated border border-border/60 px-4 py-3 text-sm focus:outline-none focus:border-primary/60 focus:ring-2 focus:ring-primary/20 transition-all"
                placeholder="you@email.com"
              />
            </div>
          </div>
          <div>
            <label className="text-xs text-muted-foreground">Subject</label>
            <input
              name="subject"
              className="mt-1.5 w-full rounded-lg bg-surface-elevated border border-border/60 px-4 py-3 text-sm focus:outline-none focus:border-primary/60 focus:ring-2 focus:ring-primary/20 transition-all"
              placeholder="Project idea, role, collaboration…"
            />
          </div>
          <div>
            <label className="text-xs text-muted-foreground">Message</label>
            <textarea
              required
              name="message"
              rows={5}
              className="mt-1.5 w-full rounded-lg bg-surface-elevated border border-border/60 px-4 py-3 text-sm focus:outline-none focus:border-primary/60 focus:ring-2 focus:ring-primary/20 transition-all resize-none"
              placeholder="Tell me a bit about it…"
            />
          </div>
          <button
            type="submit"
            disabled={sending}
            className="group inline-flex items-center gap-2 bg-gradient-primary text-primary-foreground font-medium px-6 py-3 rounded-full glow-primary hover:scale-[1.02] transition-transform disabled:opacity-60"
          >
            {sending ? "Sending…" : "Send Message"}
            <Send size={15} className="transition-transform group-hover:translate-x-0.5" />
          </button>
        </motion.form>
      </div>
    </Section>
  );
}
