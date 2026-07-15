"use client";

import { Filter } from "lucide-react";
import { useMemo, useState } from "react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { GlassCard } from "@/components/ui/glass-card";
import { scheduleItems } from "@/data/site";

const venues = ["All", ...Array.from(new Set(scheduleItems.map((item) => item.venue)))];
const categories = ["All", ...Array.from(new Set(scheduleItems.map((item) => item.category)))];

export function ScheduleBoard() {
  const [venue, setVenue] = useState("All");
  const [category, setCategory] = useState("All");

  const filteredItems = useMemo(
    () =>
      scheduleItems.filter((item) => {
        return (
          (venue === "All" || item.venue === venue) &&
          (category === "All" || item.category === category)
        );
      }),
    [category, venue],
  );

return (
  <div>
    <GlassCard className="mb-8">
      <div className="mb-4 flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.16em] text-slate-300">
        <Filter className="size-4 text-cyan-200" />
        Schedule filters
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        <FilterRow label="Venue" values={venues} active={venue} onChange={setVenue} />
        <FilterRow
          label="Category"
          values={categories}
          active={category}
          onChange={setCategory}
        />
      </div>
    </GlassCard>

    <div>
      <h2 className="mb-5 text-2xl font-bold text-white">
        Event Timeline
      </h2>

      <div className="relative grid gap-4 before:absolute before:bottom-0 before:left-4 before:top-0 before:w-px before:bg-white/10">
        {filteredItems
          .sort((a, b) => a.time.localeCompare(b.time))
          .map((item) => (
            <div key={`${item.time}-${item.title}`} className="relative pl-10">
              <span className="absolute left-[0.55rem] top-6 size-3 rounded-full bg-cyan-300 shadow-[0_0_16px_rgba(103,232,249,0.7)]" />

              <GlassCard>
                <div className="flex flex-wrap items-center gap-3">
                  <Badge>{item.category}</Badge>
                  <p className="font-mono text-sm text-cyan-100">
                    {item.time}
                  </p>
                </div>

                <h3 className="mt-4 text-xl font-bold text-white">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm text-slate-300">
                  {item.venue}
                </p>
              </GlassCard>
            </div>
          ))}
      </div>
    </div>
  </div>
);
}

function FilterRow({
  label,
  values,
  active,
  onChange,
}: {
  label: string;
  values: string[];
  active: string;
  onChange: (value: string) => void;
}) {
  return (
    <div>
      <p className="mb-2 text-sm font-semibold text-white">{label}</p>
      <div className="flex flex-wrap gap-2">
        {values.map((value) => (
          <Button
            key={value}
            type="button"
            size="sm"
            variant={active === value ? "default" : "secondary"}
            onClick={() => onChange(value)}
          >
            {value}
          </Button>
        ))}
      </div>
    </div>
  );
}
