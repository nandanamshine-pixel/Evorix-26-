"use client";

import { X } from "lucide-react";
import { useMemo, useState } from "react";

import { Button } from "@/components/ui/button";
import { galleryItems } from "@/data/site";
import { cn } from "@/lib/utils";

const years = ["All", ...Array.from(new Set(galleryItems.map((item) => item.year)))];

export function GalleryGrid() {
  const [year, setYear] = useState("All");
  const [selectedTitle, setSelectedTitle] = useState<string | null>(null);

  const filteredItems = useMemo(
    () => galleryItems.filter((item) => year === "All" || item.year === year),
    [year],
  );

  const selectedItem = galleryItems.find((item) => item.title === selectedTitle);

  return (
    <div>
      <div className="mb-8 flex flex-wrap gap-2">
        {years.map((item) => (
          <Button
            key={item}
            type="button"
            size="sm"
            variant={year === item ? "default" : "secondary"}
            onClick={() => setYear(item)}
          >
            {item}
          </Button>
        ))}
      </div>

      <div className="columns-1 gap-5 sm:columns-2 lg:columns-3">
        {filteredItems.map((item, index) => (
          <button
            key={item.title}
            type="button"
            onClick={() => setSelectedTitle(item.title)}
            className={cn(
              "relative mb-5 block w-full break-inside-avoid overflow-hidden rounded-lg border border-white/10 bg-[linear-gradient(145deg,rgba(103,232,249,0.15),rgba(167,139,250,0.16),rgba(15,23,42,0.95))] text-left transition hover:-translate-y-1 hover:border-cyan-300/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300",
              item.height,
            )}
          >
            <div className="noise-overlay absolute inset-0" />
            <div className="flex h-full flex-col justify-end p-5">
              <span className="w-fit rounded-md bg-slate-950/55 px-3 py-1 text-xs font-semibold text-cyan-100 backdrop-blur-xl">
                {item.year}
              </span>
              <p className="mt-3 text-xl font-bold text-white">{item.title}</p>
              <p className="text-sm text-slate-300">{item.category} - Frame {index + 1}</p>
            </div>
          </button>
        ))}
      </div>

      {selectedItem ? (
        <div
          className="fixed inset-0 z-50 grid place-items-center bg-slate-950/85 p-5 backdrop-blur-xl"
          role="dialog"
          aria-modal="true"
          aria-label={`${selectedItem.title} gallery preview`}
          onClick={() => setSelectedTitle(null)}
        >
          <div
            className="relative w-full max-w-4xl overflow-hidden rounded-lg border border-white/10 bg-slate-950"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              aria-label="Close gallery preview"
              onClick={() => setSelectedTitle(null)}
              className="absolute right-4 top-4 z-10 grid size-10 place-items-center rounded-md bg-slate-950/75 text-white"
            >
              <X className="size-5" />
            </button>
            <div className="grid min-h-[24rem] place-items-center bg-[linear-gradient(135deg,rgba(103,232,249,0.18),rgba(167,139,250,0.16),rgba(15,23,42,0.95))] p-10 text-center">
              <div>
                <p className="font-mono text-sm text-cyan-100">{selectedItem.year}</p>
                <h2 className="mt-3 text-4xl font-black text-white">{selectedItem.title}</h2>
                <p className="mt-3 text-slate-300">{selectedItem.category} image placeholder</p>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
