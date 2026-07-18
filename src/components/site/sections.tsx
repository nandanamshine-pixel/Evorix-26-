"use client";

import { useEffect, useState } from "react";
import { ArrowRight, Clock3, Send } from "lucide-react";

import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/layout/section-heading";
import { MotionDiv, MotionSection, fadeUp } from "@/components/motion/motion-provider";
import { Button } from "@/components/ui/button";
import { GlassCard } from "@/components/ui/glass-card";
import {
  contactItems,
  faqs,
  registrationUrl,
  sponsors,
  stats,
} from "@/data/site";

const sectionMotion = {
  initial: "hidden",
  whileInView: "visible",
  viewport: { once: true, amount: 0.2 },
};

const countdownTarget = new Date("2026-08-06T00:00:00");

function getTimeLeft(targetDate: Date) {
  const diff = targetDate.getTime() - Date.now();

  if (diff <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  const totalSeconds = Math.floor(diff / 1000);
  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  return { days, hours, minutes, seconds };
}

export function LandingSections() {
  const [timeLeft, setTimeLeft] = useState(() => getTimeLeft(countdownTarget));

  useEffect(() => {
    const timer = window.setInterval(() => {
      setTimeLeft(getTimeLeft(countdownTarget));
    }, 1000);

    return () => window.clearInterval(timer);
  }, []);

  const countdownValues = [
    { value: String(timeLeft.days).padStart(2, "0"), label: "days" },
    { value: String(timeLeft.hours).padStart(2, "0"), label: "hours" },
    { value: String(timeLeft.minutes).padStart(2, "0"), label: "minutes" },
    { value: String(timeLeft.seconds).padStart(2, "0"), label: "seconds" },
  ];

  return (
    <>
      <MotionSection id="about" className="py-24" {...sectionMotion} variants={fadeUp}>
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <SectionHeading
              align="left"
              eyebrow="About EVORIX"
              title="A school fest built for bold student energy."
              description="EVORIX '26 is the debut of Carmel School, Peyad's flagship one-day interschool fest, bringing together young minds for a dynamic celebration of innovation, creativity, leadership, and collaboration. Designed to deliver a professional and memorable experience, EVORIX empowers students to showcase their talents, embrace healthy competition, and build lasting connections across schools."
            />
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat) => (
                <GlassCard key={stat.label}>
                  <p className="text-3xl font-black text-white">{stat.value}</p>
                  <p className="mt-2 text-sm uppercase tracking-[0.16em] text-slate-400">
                    {stat.label}
                  </p>
                </GlassCard>
              ))}
            </div>
          </div>
        </Container>
      </MotionSection>

      <MotionSection id="schedule" className="py-24" {...sectionMotion} variants={fadeUp}>
        <Container>
          <GlassCard className="overflow-hidden p-0">
            <div className="grid gap-8 p-8 md:grid-cols-[1fr_1.2fr] md:p-10 lg:p-12">
              <div>
                <div className="grid size-12 place-items-center rounded-md bg-purple-300/12 text-purple-100">
                  <Clock3 className="size-5" />
                </div>
                <h2 className="mt-6 text-3xl font-bold text-white sm:text-4xl">
                  Countdown to EVORIX begins soon.
                </h2>
                <p className="mt-4 leading-8 text-slate-300">
                  The final fest date will be announced by the school coordination
                  team. This space is ready for a live countdown once registration
                  details are confirmed.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                {countdownValues.map(({ value, label }) => (
                  <div
                    key={label}
                    className="rounded-lg border border-white/10 bg-slate-950/55 p-5 text-center"
                  >
                    <p className="font-mono text-4xl font-black text-cyan-100">{value}</p>
                    <p className="mt-2 text-xs uppercase tracking-[0.18em] text-slate-400">
                      {label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </GlassCard>
        </Container>
      </MotionSection>

      <MotionSection id="registration" className="py-24" {...sectionMotion} variants={fadeUp}>
        <Container>
          <GlassCard className="grid gap-8 p-8 md:grid-cols-[1fr_auto] md:items-center md:p-10 lg:p-12">
            <div>
              <SectionHeading
                align="left"
                eyebrow="Registration"
                title="Register through the official EVORIX Google Form."
                description="Schools must submit participation details using the official form. Early registration helps the organising team confirm event slots, reporting instructions, and coordinator communication."
              />
              <div className="mt-6 grid gap-3 text-sm text-slate-300 sm:grid-cols-3">
                <span className="rounded-md border border-white/10 bg-slate-950/45 px-4 py-3">
                  Eligibility: Participants from invited schools
                </span>
                <span className="rounded-md border border-white/10 bg-slate-950/45 px-4 py-3">
                  Deadline: 2nd August
                </span>
                <span className="rounded-md border border-white/10 bg-slate-950/45 px-4 py-3">
                  Queries: evorixcarmel@gmail.com
                </span>
              </div>
            </div>
            <Button asChild size="lg" className="w-full md:w-auto">
              <a href={registrationUrl} target="_blank" rel="noreferrer">
                Register Now <ArrowRight className="size-5" />
              </a>
            </Button>
          </GlassCard>
        </Container>
      </MotionSection>

      <MotionSection id="sponsors" className="py-24" {...sectionMotion} variants={fadeUp}>
        <Container>
          <SectionHeading
            eyebrow="Sponsors"
            title="Partner spaces ready for the EVORIX ecosystem."
            description="Sponsor blocks are prepared for school-approved partners who want to support student excellence, innovation, and interschool collaboration."
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {sponsors.map((sponsor) => (
              <div
                key={sponsor}
                className="grid h-32 place-items-center rounded-lg border border-white/10 bg-white/[0.045] text-center text-sm font-semibold uppercase tracking-[0.18em] text-slate-300 backdrop-blur-xl"
              >
                {sponsor}
              </div>
            ))}
          </div>
        </Container>
      </MotionSection>

      <MotionSection id="faq" className="py-24" {...sectionMotion} variants={fadeUp}>
        <Container>
          <SectionHeading
            eyebrow="FAQ"
            title="Answers to common queries about EVORIX."
            description="If more queries arise, please do contact the EVORIX team through the official email address. The team shall respond to queries."
          />
          <div className="mx-auto mt-12 grid max-w-4xl gap-4">
            {faqs.map((faq) => (
              <GlassCard key={faq.question}>
                <h3 className="text-lg font-bold text-white">{faq.question}</h3>
                <p className="mt-3 leading-7 text-slate-300">{faq.answer}</p>
              </GlassCard>
            ))}
          </div>
        </Container>
      </MotionSection>

      <MotionSection id="contact" className="py-24" {...sectionMotion} variants={fadeUp}>
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-start">
            <SectionHeading
              align="left"
              eyebrow="Contact"
              title="Ready for visiting schools and coordinators."
              description="Official contact channels are provided below for school coordinators, faculty convenors, and student leads. The EVORIX team will respond to queries about registration, event slots, and participation requirements."
            />
            <GlassCard id="register">
              <div className="grid gap-5">
                {contactItems.map((item) => {
                  const Icon = item.icon;

                  return (
                    <div key={item.label} className="flex gap-4">
                      <div className="grid size-10 shrink-0 place-items-center rounded-md bg-cyan-300/12 text-cyan-100">
                        <Icon className="size-4" />
                      </div>
                      <div>
                        <p className="text-sm uppercase tracking-[0.16em] text-slate-400">
                          {item.label}
                        </p>
                        <p className="mt-1 font-semibold text-white">{item.value}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
              <Button asChild className="mt-8 w-full" size="lg">
                <a href="mailto:evorixcarmel@gmail.com">
                  Contact the EVORIX Team <Send className="size-4" />
                </a>
              </Button>
              <Button asChild className="mt-3 w-full" size="lg" variant="secondary">
                <a href="/events">
                  View Event Tracks <ArrowRight className="size-4" />
                </a>
              </Button>
            </GlassCard>
          </div>
        </Container>
      </MotionSection>
    </>
  );
}
