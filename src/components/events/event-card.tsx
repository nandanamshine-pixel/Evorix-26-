"use client";

import {
  CalendarDays,
  Clock,
  ExternalLink,
  MapPin,
  Trophy,
  Users,
} from "lucide-react";

import { MotionDiv } from "@/components/motion/motion-provider";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { GlassCard } from "@/components/ui/glass-card";
import { events, registrationUrl } from "@/data/site";
import { cn } from "@/lib/utils";

type Event = (typeof events)[number] & {
  eligibility?: string;
  prize?: string;
  rules?: string[];
};

const bannerStyles: Record<string, string> = {
  radial:
    "bg-[radial-gradient(circle_at_30%_30%,rgba(103,232,249,0.45),transparent_28%),radial-gradient(circle_at_70%_65%,rgba(167,139,250,0.38),transparent_34%),linear-gradient(135deg,rgba(15,23,42,0.95),rgba(30,41,59,0.9))]",
  waves:
    "bg-[repeating-linear-gradient(120deg,rgba(103,232,249,0.18)_0_10px,transparent_10px_22px),linear-gradient(135deg,rgba(15,23,42,0.96),rgba(88,28,135,0.55))]",
  pulse:
    "bg-[radial-gradient(circle_at_center,rgba(244,114,182,0.36),transparent_30%),linear-gradient(135deg,rgba(15,23,42,0.96),rgba(103,232,249,0.16))]",
  circuit:
    "bg-[linear-gradient(90deg,rgba(103,232,249,0.16)_1px,transparent_1px),linear-gradient(rgba(167,139,250,0.14)_1px,transparent_1px),linear-gradient(135deg,rgba(2,6,23,0.98),rgba(8,47,73,0.7))] bg-[size:28px_28px,28px_28px,auto]",
  grid:
    "bg-[linear-gradient(45deg,rgba(103,232,249,0.18)_25%,transparent_25%),linear-gradient(-45deg,rgba(167,139,250,0.16)_25%,transparent_25%),linear-gradient(135deg,rgba(15,23,42,0.98),rgba(49,46,129,0.7))] bg-[size:32px_32px,32px_32px,auto]",
  maze:
    "bg-[repeating-linear-gradient(90deg,rgba(103,232,249,0.18)_0_6px,transparent_6px_18px),repeating-linear-gradient(0deg,rgba(167,139,250,0.16)_0_6px,transparent_6px_20px),linear-gradient(135deg,rgba(15,23,42,0.98),rgba(64,64,122,0.7))]",
  nodes:
    "bg-[radial-gradient(circle_at_20%_25%,rgba(103,232,249,0.38)_0_3px,transparent_4px),radial-gradient(circle_at_75%_45%,rgba(167,139,250,0.42)_0_4px,transparent_5px),radial-gradient(circle_at_45%_75%,rgba(244,114,182,0.28)_0_3px,transparent_4px),linear-gradient(135deg,rgba(15,23,42,0.97),rgba(30,41,59,0.86))]",
  prism:
    "bg-[conic-gradient(from_140deg_at_50%_50%,rgba(103,232,249,0.28),rgba(167,139,250,0.35),rgba(244,114,182,0.22),rgba(103,232,249,0.28))]",
  lens:
    "bg-[radial-gradient(circle_at_center,transparent_0_24%,rgba(103,232,249,0.28)_25%_27%,transparent_28%_45%,rgba(167,139,250,0.2)_46%_48%,transparent_49%),linear-gradient(135deg,rgba(15,23,42,0.98),rgba(8,47,73,0.72))]",
  deck:
    "bg-[linear-gradient(135deg,rgba(103,232,249,0.2),transparent_32%),linear-gradient(45deg,transparent_0_42%,rgba(167,139,250,0.32)_43%_58%,transparent_59%),linear-gradient(135deg,rgba(15,23,42,0.98),rgba(49,46,129,0.72))]",
  frames:
    "bg-[repeating-linear-gradient(90deg,rgba(255,255,255,0.13)_0_2px,transparent_2px_22px),linear-gradient(135deg,rgba(15,23,42,0.98),rgba(103,232,249,0.16),rgba(167,139,250,0.18))]",
};

export function EventCard({ event }: { event: Event }) {
  const Icon = event.icon;

  return (
    <MotionDiv
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="h-full"
    >
    <GlassCard className="flex h-full flex-col overflow-hidden p-0 transition-colors duration-300 hover:border-cyan-300/35">
      <div
        className={cn(
          "relative grid h-48 place-items-center overflow-hidden",
          bannerStyles[event.banner] ?? bannerStyles.radial,
        )}
      >
        <div className="noise-overlay absolute inset-0" />
        <div className="absolute inset-x-8 top-8 h-px bg-cyan-200/30" />
        <Icon className="relative size-14 text-cyan-100 drop-shadow-[0_0_22px_rgba(103,232,249,0.5)]" />
        <span className="absolute bottom-4 left-4 rounded-md border border-white/10 bg-slate-950/60 px-3 py-1 text-xs font-semibold text-white backdrop-blur-xl">
          EVORIX banner concept
        </span>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <Badge>{event.category}</Badge>
            <h2 className="mt-4 text-2xl font-bold text-white">{event.title}</h2>
          </div>
          <Icon className="mt-1 size-5 shrink-0 text-purple-200" />
        </div>
        <section className="mt-4">
          <p className="text-sm font-bold uppercase tracking-[0.14em] text-slate-400">
            Event Description
          </p>
          <p className="mt-2 leading-7 text-slate-300">{event.description}</p>
        </section>
        <dl className="mt-5 grid gap-3 text-sm text-slate-300">
          <div className="flex items-center gap-2">
            <Users className="size-4 text-cyan-200" />
            <dt className="sr-only">Eligibility</dt>
            <dd>{[event.eligibility, event.teamSize].filter(Boolean).join(" • ")}</dd>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="size-4 text-cyan-200" />
            <dt className="sr-only">Venue</dt>
            <dd>{event.venue}</dd>
          </div>
          <div className="flex items-center gap-2">
            <CalendarDays className="size-4 text-cyan-200" />
            <dt className="sr-only">Date</dt>
            <dd>{event.date}</dd>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="size-4 text-cyan-200" />
            <dt className="sr-only">Time</dt>
            <dd>{event.time}</dd>
          </div>
        </dl>
        {event.rules && event.rules.length > 0 ? (
          <section className="mt-5">
            <p className="text-sm font-bold uppercase tracking-[0.14em] text-slate-400">
              Rules
            </p>
            <ul className="mt-2 grid gap-2 text-sm leading-6 text-slate-300">
              {event.rules.map((rule) => (
                <li key={rule}>- {rule}</li>
              ))}
            </ul>
          </section>
        ) : null}
        <section className="mt-auto pt-5">
          <div className="flex items-center gap-2 text-sm font-semibold text-purple-100">
            <Trophy className="size-4" />
            {event.prize ?? "Prize details to be announced"}
          </div>
          <Button asChild className="mt-5 w-full" size="sm">
            <a href={registrationUrl} target="_blank" rel="noreferrer">
              Register <ExternalLink className="size-4" />
            </a>
          </Button>
        </section>
      </div>
    </GlassCard>
    </MotionDiv>
  );
}
