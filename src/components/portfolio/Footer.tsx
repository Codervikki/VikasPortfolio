import { Github, Linkedin, Mail, Code2, Heart } from "lucide-react";

const links = ["Home", "About", "Skills", "Experience", "Projects", "Services", "Contact"];

export function Footer() {
  return (
    <footer className="relative border-t border-border/50 mt-10">
      <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-12 grid md:grid-cols-3 gap-8">
        <div>
          <div className="font-display text-xl font-bold">
            <span className="text-gradient">Vikas</span>
            <span>.dev</span>
          </div>
          <p className="text-sm text-muted-foreground mt-3 max-w-sm">
            Full Stack Developer crafting scalable, modern web experiences with React, Next.js & Node.
          </p>
        </div>
        <div>
          <div className="text-xs uppercase tracking-widest text-muted-foreground mb-3">Navigate</div>
          <ul className="grid grid-cols-2 gap-2">
            {links.map((l) => (
              <li key={l}>
                <a href={`#${l.toLowerCase()}`} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div className="text-xs uppercase tracking-widest text-muted-foreground mb-3">Connect</div>
          <div className="flex gap-3">
            {[Github, Linkedin, Code2, Mail].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="h-10 w-10 grid place-items-center rounded-full glass text-muted-foreground hover:text-foreground hover:shadow-[var(--shadow-glow)] transition-all"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-border/40">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-5 flex flex-wrap items-center justify-between gap-3 text-xs text-muted-foreground">
          <span>© {new Date().getFullYear()} Vikas Dhoulakhandi. All rights reserved.</span>
          <span className="inline-flex items-center gap-1.5">
            Built with <Heart size={12} className="text-primary fill-primary" /> using React & Tailwind CSS
          </span>
        </div>
      </div>
    </footer>
  );
}
