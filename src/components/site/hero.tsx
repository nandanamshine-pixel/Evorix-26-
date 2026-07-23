"use client";

import { ArrowDown, ArrowRight, CalendarDays, Sparkles } from "lucide-react";

import { Container } from "@/components/layout/container";
import { MotionDiv, fadeUp } from "@/components/motion/motion-provider";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { registrationUrl } from "@/data/site";

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[92svh] items-center overflow-hidden pt-16"
      aria-labelledby="hero-title"
    >
      <div className="absolute inset-0 -z-20 bg-[linear-gradient(120deg,#050816,#10122b_46%,#06131f)]" />
      <MotionDiv
        aria-hidden="true"
        className="aurora-field absolute left-1/2 top-1/2 -z-10 h-[38rem] w-[38rem] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-70"
        animate={{ rotate: 360, scale: [1, 1.12, 1] }}
        transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
      />
      <MotionDiv
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 -z-10 h-1/2 bg-[linear-gradient(to_top,rgba(3,7,18,1),transparent)]"
      />
      <div aria-hidden="true" className="noise-overlay absolute inset-0 -z-10" />

      <Container className="relative grid gap-10 py-20 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <MotionDiv
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.75, ease: "easeOut" }}
        >
          <Badge className="gap-2">
            <Sparkles className="size-3.5" />
            Carmel School, Peyad
          </Badge>
          <h1
            id="hero-title"
            className="mt-6 max-w-4xl text-6xl font-black leading-[0.95] text-white sm:text-7xl lg:text-8xl"
          >
            EVORIX
          </h1>
          <p className="mt-6 max-w-2xl text-xl font-medium leading-8 text-slate-200 sm:text-2xl">
            Hosted by Carmel School, Peyad, EVORIX '26 is a one-day interschool celebration of innovation, 
            creativity, technology, leadership, and talent, 
            bringing together students from across the region to compete, collaborate, and inspire.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg">
              <a href={registrationUrl} target="_blank" rel="noreferrer">
                Register Now <ArrowRight className="size-5" />
              </a>
            </Button>
            <Button asChild size="lg" variant="secondary">
              <a href="/pay">Pay Now</a>
            </Button>
            <Button asChild size="lg" variant="secondary">
              <a href="/events">Explore Events</a>
            </Button>
          </div>
          <div className="mt-10 flex flex-wrap gap-3 text-sm text-slate-300">
            <span className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/7 px-4 py-2 backdrop-blur-xl">
              <CalendarDays className="size-4 text-cyan-200" />
              Official Google Form registration is open
            </span>
            <span className="rounded-md border border-white/10 bg-white/7 px-4 py-2 backdrop-blur-xl">
              Competitions across STEM, arts, culture, and commerce
            </span>
          </div>
        </MotionDiv>

        <MotionDiv
          className="relative min-h-[26rem]"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.1, ease: "easeOut" }}
          aria-hidden="true"
        >
          <div className="absolute inset-4 rounded-full border border-cyan-300/20" />
          <div className="absolute inset-14 rounded-full border border-purple-300/20" />
          <MotionDiv
            className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/15 bg-white/8 backdrop-blur-2xl"
            animate={{ rotate: -360 }}
            transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
          />
          <div className="absolute left-1/2 top-1/2 grid size-48 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-cyan-300/30 bg-slate-950/65 text-center shadow-[0_0_80px_rgba(103,232,249,0.22)] backdrop-blur-xl">
            <div>
              <p className="font-mono text-sm text-cyan-100">2026</p>
              <p className="mt-1 text-4xl font-black text-white">EVX</p>
              <p className="mt-1 text-xs uppercase tracking-[0.24em] text-slate-300">
                Exceed through excellence
              </p>
            </div>
          </div>
          {["Technology", "Cultural", "Design", "Debate"].map((label, index) => (
            <MotionDiv
              key={label}
              className="absolute rounded-md border border-white/10 bg-white/10 px-4 py-2 text-sm font-semibold text-white backdrop-blur-xl"
              style={{
                left: `${index % 2 === 0 ? 10 : 66}%`,
                top: `${18 + index * 18}%`,
              }}
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3 + index * 0.4, repeat: Infinity }}
            >
              {label}
            </MotionDiv>
          ))}
        </MotionDiv>
      </Container>

      <a
        href="#about"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 items-center gap-2 text-sm text-slate-300 sm:flex"
      >
        Scroll
        <ArrowDown className="size-4 animate-bounce text-cyan-200" />
      </a>
    </section>
  );
}
