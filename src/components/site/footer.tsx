import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";

import { Container } from "@/components/layout/container";

const socialLinks = [
  { label: "Instagram", href: "#", icon: Instagram },
  { label: "YouTube", href: "#", icon: Youtube },
  { label: "Facebook", href: "#", icon: Facebook },
  { label: "LinkedIn", href: "#", icon: Linkedin },
];

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950/80 py-10">
      <Container className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-lg font-black tracking-[0.18em] text-white">EVORIX</p>
          <p className="mt-2 text-sm text-slate-400">
            Annual interschool fest celebrating talent, technology, and teamwork.
          </p>
        </div>
        <div className="flex items-center gap-3">
          {socialLinks.map((link) => {
            const Icon = link.icon;

            return (
              <a
                key={link.label}
                href={link.href}
                aria-label={link.label}
                className="grid size-10 place-items-center rounded-md border border-white/10 bg-white/5 text-slate-300 transition hover:border-cyan-300/50 hover:text-cyan-100"
              >
                <Icon className="size-4" />
              </a>
            );
          })}
        </div>
        <p className="text-sm text-slate-500">
          Copyright {new Date().getFullYear()} EVORIX. All rights reserved.
        </p>
      </Container>
    </footer>
  );
}
