"use client";

import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsVisible(window.scrollY > 520);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      type="button"
      aria-label="Scroll to top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={cn(
        "fixed bottom-5 right-5 z-40 grid size-11 place-items-center rounded-md border border-cyan-300/30 bg-slate-950/75 text-cyan-100 shadow-2xl shadow-black/30 backdrop-blur-xl transition",
        isVisible ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0 pointer-events-none",
      )}
    >
      <ArrowUp className="size-5" />
    </button>
  );
}
