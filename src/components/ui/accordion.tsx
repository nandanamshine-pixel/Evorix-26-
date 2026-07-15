"use client";

import {
  CheckCircle2,
  ChevronDown,
  CircleDollarSign,
  MapPin,
  Phone,
  School,
  ShieldCheck,
  Trophy,
  Utensils,
  Users,
} from "lucide-react";
import type * as React from "react";
import { useState } from "react";

import { GlassCard } from "@/components/ui/glass-card";
import { cn } from "@/lib/utils";

type AccordionItem = {
  question: string;
  answer: string;
  icon?: string;
};

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  School,
  Users,
  CircleDollarSign,
  Utensils,
  Trophy,
  CheckCircle2,
  MapPin,
  Phone,
  ShieldCheck,
};

export function Accordion({ items }: { items: AccordionItem[] }) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="grid gap-4">
      {items.map((item, index) => {
        const Icon = item.icon ? iconMap[item.icon] : null;
        const isOpen = openIndex === index;

        return (
          <GlassCard key={item.question} className="p-0">
            <h2>
              <button
                type="button"
                aria-expanded={isOpen}
                className="flex w-full items-center gap-4 p-5 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
                onClick={() => setOpenIndex(isOpen ? -1 : index)}
              >
                {Icon ? (
                  <span className="grid size-10 shrink-0 place-items-center rounded-md bg-cyan-300/12 text-cyan-100">
                    <Icon className="size-4" />
                  </span>
                ) : null}
                <span className="flex-1 text-base font-bold text-white">
                  {item.question}
                </span>
                <ChevronDown
                  className={cn("size-5 text-slate-400 transition", isOpen && "rotate-180")}
                />
              </button>
            </h2>
            <div
              className={cn(
                "grid transition-all duration-300",
                isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
              )}
            >
              <div className="overflow-hidden">
                <p className="px-5 pb-5 leading-7 text-slate-300 sm:pl-[4.75rem]">
                  {item.answer}
                </p>
              </div>
            </div>
          </GlassCard>
        );
      })}
    </div>
  );
}
