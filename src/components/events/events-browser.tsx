"use client";

import { ExternalLink, Search, Sparkles } from "lucide-react";
import { useMemo, useState } from "react";

import { EventCard } from "@/components/events/event-card";
import { MotionDiv } from "@/components/motion/motion-provider";
import { Button } from "@/components/ui/button";
import { eventCategories, events, registrationUrl } from "@/data/site";
import { cn } from "@/lib/utils";

export function EventsBrowser() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");

  const filteredEvents = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return events.filter((event) => {
      const matchesCategory = category === "All" || event.category === category;
      const matchesQuery = [event.title, event.description, event.venue]
        .join(" ")
        .toLowerCase()
        .includes(normalizedQuery);

      return matchesCategory && matchesQuery;
    });
  }, [category, query]);

  return (
    <div>
      <MotionDiv
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
        className="mb-8 overflow-hidden rounded-lg border border-cyan-300/20 bg-[linear-gradient(135deg,rgba(103,232,249,0.12),rgba(167,139,250,0.14),rgba(15,23,42,0.88))] p-6 backdrop-blur-xl"
      >
        <div className="grid gap-5 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-md border border-cyan-300/25 bg-cyan-300/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-cyan-100">
              <Sparkles className="size-3.5" />
              Featured Event
            </div>
            <h2 className="mt-4 text-3xl font-black text-white">Genesis</h2>
            <p className="mt-3 max-w-3xl leading-8 text-slate-300">
              The official EVORIX lineup begins with Genesis, a flagship
              opening challenge prepared for final event details, rules, and
              school-specific instructions.
            </p>
          </div>
          <Button asChild size="lg">
            <a href={registrationUrl} target="_blank" rel="noreferrer">
              Register Now <ExternalLink className="size-4" />
            </a>
          </Button>
        </div>
      </MotionDiv>

      <div className="rounded-lg border border-white/10 bg-white/[0.045] p-4 backdrop-blur-xl">
        <div className="grid gap-4 lg:grid-cols-[1fr_auto] lg:items-center">
          <label className="relative block">
            <span className="sr-only">Search events</span>
            <Search className="absolute left-4 top-1/2 size-4 -translate-y-1/2 text-slate-400" />
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search by event, venue, or keyword"
              className="h-12 w-full rounded-md border border-white/10 bg-slate-950/60 pl-11 pr-4 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-300/60 focus:ring-2 focus:ring-cyan-300/20"
            />
          </label>
          <div className="flex flex-wrap gap-2" aria-label="Filter events by category">
            {eventCategories.map((item) => (
              <Button
                key={item}
                type="button"
                size="sm"
                variant={category === item ? "default" : "secondary"}
                onClick={() => setCategory(item)}
                className={cn(category !== item && "bg-white/[0.04]")}
              >
                {item}
              </Button>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {filteredEvents.map((event) => (
          <EventCard key={event.title} event={event} />
        ))}
      </div>

      {filteredEvents.length === 0 ? (
        <div className="mt-10 rounded-lg border border-white/10 bg-white/[0.045] p-8 text-center text-slate-300">
          No events match that filter yet.
        </div>
      ) : null}
    </div>
  );
}
