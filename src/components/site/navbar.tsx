"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { navLinks } from "@/data/site";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-slate-950/55 backdrop-blur-2xl">
      <Container className="flex h-16 items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
          aria-label="EVORIX home"
        >
          <span className="grid size-9 place-items-center rounded-md border border-cyan-300/35 bg-cyan-300/12 text-sm font-black text-cyan-100 shadow-[0_0_24px_rgba(103,232,249,0.22)]">
            '26
          </span>
          <span className="text-lg font-black tracking-[0.16em] text-white">
            EVORIX
          </span>
        </Link>

        <nav aria-label="Primary navigation" className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;

            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isActive ? "page" : undefined}
                className={cn(
                  "rounded-md px-3 py-2 text-sm font-medium transition hover:bg-white/8 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300",
                  isActive ? "bg-cyan-300/10 text-cyan-100" : "text-slate-300",
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:block">
          <Button asChild size="sm" variant="secondary">
            <Link href="/login">School Login</Link>
          </Button>
        </div>

        <button
          className="grid size-10 place-items-center rounded-md border border-white/10 text-white lg:hidden"
          type="button"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((value) => !value)}
        >
          {isOpen ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </Container>

      <div
        className={cn(
          "grid transition-all duration-300 lg:hidden",
          isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
        )}
      >
        <div className="overflow-hidden">
          <Container className="pb-5">
            <nav className="grid gap-2 rounded-lg border border-white/10 bg-white/[0.055] p-3 backdrop-blur-2xl">
              {[...navLinks, { label: "School Login", href: "/login" }].map((link) => {
                const isActive = pathname === link.href;

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    aria-current={isActive ? "page" : undefined}
                    className={cn(
                      "rounded-md px-3 py-3 text-sm font-medium hover:bg-white/10",
                      isActive ? "bg-cyan-300/10 text-cyan-100" : "text-slate-200",
                    )}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>
          </Container>
        </div>
      </div>
    </header>
  );
}
