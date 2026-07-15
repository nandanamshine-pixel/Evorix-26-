import { ArrowRight, CalendarDays, Mail, School, ShieldCheck } from "lucide-react";

import { Container } from "@/components/layout/container";
import { PageHeader } from "@/components/layout/page-header";
import { SectionHeading } from "@/components/layout/section-heading";
import { Button } from "@/components/ui/button";
import { GlassCard } from "@/components/ui/glass-card";
import { registrationUrl } from "@/data/site";

const registrationSteps = [
  "School coordinator reviews the EVORIX event lineup.",
  "Coordinator collects participant details and event preferences.",
  "School submits the official Google Form once details are verified.",
  "EVORIX team shares confirmation and reporting instructions later.",
];

export default function RegistrationPage() {
  return (
    <main id="main-content">
      <PageHeader
        eyebrow="Registration"
        title="Official EVORIX registration happens through Google Forms."
        description="For this phase, registrations are intentionally handled through the approved external form. Authentication, dashboards, and backend registration management will come later."
      />

      <section className="py-16">
        <Container className="grid gap-8 lg:grid-cols-[1fr_0.85fr]">
          <GlassCard>
            <SectionHeading
              align="left"
              eyebrow="How To Register"
              title="Use the official form and submit early."
              description="Schools should register through the Google Form using accurate coordinator and participant details. The earlier the form is submitted, the easier it is for the team to plan event slots."
            />
            <ol className="mt-8 grid gap-4">
              {registrationSteps.map((step, index) => (
                <li key={step} className="flex gap-4 rounded-lg border border-white/10 bg-slate-950/45 p-4">
                  <span className="grid size-9 shrink-0 place-items-center rounded-md bg-cyan-300/12 font-mono text-sm font-bold text-cyan-100">
                    {index + 1}
                  </span>
                  <span className="leading-7 text-slate-300">{step}</span>
                </li>
              ))}
            </ol>
            <Button asChild size="lg" className="mt-8">
              <a href={registrationUrl} target="_blank" rel="noreferrer">
                Open Google Form <ArrowRight className="size-5" />
              </a>
            </Button>
          </GlassCard>

          <div className="grid gap-5">
            {[
              { title: "Eligibility Notes", value: "Placeholder: invited schools, approved categories, and school-nominated teams.", icon: School },
              { title: "Registration Deadline", value: "Placeholder: final date will be announced by the organising school.", icon: CalendarDays },
              { title: "Verification", value: "Placeholder: entries may be checked against school coordinator details.", icon: ShieldCheck },
              { title: "Registration Queries", value: "evorixcarmel@gmail.com", icon: Mail },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <GlassCard key={item.title}>
                  <div className="flex gap-4">
                    <div className="grid size-11 shrink-0 place-items-center rounded-md bg-purple-300/12 text-purple-100">
                      <Icon className="size-5" />
                    </div>
                    <div>
                      <h2 className="text-lg font-bold text-white">{item.title}</h2>
                      <p className="mt-2 leading-7 text-slate-300">{item.value}</p>
                    </div>
                  </div>
                </GlassCard>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="py-16 pb-24">
        <Container>
          <GlassCard className="text-center">
            <h2 className="text-3xl font-bold text-white">Secure your EVORIX slots early.</h2>
            <p className="mx-auto mt-4 max-w-2xl leading-8 text-slate-300">
              Early registration helps the EVORIX team prepare venues, reporting
              schedules, certificates, and event coordination for every school.
            </p>
            <Button asChild size="lg" className="mt-7">
              <a href={registrationUrl} target="_blank" rel="noreferrer">
                Register Now <ArrowRight className="size-5" />
              </a>
            </Button>
          </GlassCard>
        </Container>
      </section>
    </main>
  );
}
