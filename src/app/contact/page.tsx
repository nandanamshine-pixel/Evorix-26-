import { Facebook, Instagram, Linkedin, Mail, Phone, Send, Youtube } from "lucide-react";

import { Container } from "@/components/layout/container";
import { PageHeader } from "@/components/layout/page-header";
import { Button } from "@/components/ui/button";
import { GlassCard } from "@/components/ui/glass-card";
import { coordinators } from "@/data/site";

const socials = [
  { label: "Instagram", icon: Instagram },
  { label: "YouTube", icon: Youtube },
  { label: "Facebook", icon: Facebook },
  { label: "LinkedIn", icon: Linkedin },
];

export default function ContactPage() {
  return (
    <main id="main-content">
      <PageHeader
        eyebrow="Contact"
        title="Reach the EVORIX coordination team."
        description="Use the coordinator cards and frontend-only enquiry form while the official registration and backend workflows are being prepared."
      />
      <section className="py-16">
        <Container className="grid gap-8 lg:grid-cols-2">
          <CoordinatorGroup title="Faculty Coordinators" people={coordinators.faculty} />
        </Container>
      </section>

      <section className="py-16">
        <Container className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <GlassCard>
            <h2 className="text-2xl font-bold text-white">Send an enquiry</h2>
            <p className="mt-3 text-slate-300">
              This form is frontend-only for now. Backend submission and email
              routing can be added in the next implementation phase.
            </p>
            <form className="mt-6 grid gap-4">
              {[
                ["School name", "school"],
                ["Coordinator name", "name"],
                ["Phone number", "phone"],
              ].map(([label, name]) => (
                <label key={name} className="grid gap-2 text-sm font-semibold text-white">
                  {label}
                  <input
                    name={name}
                    className="h-12 rounded-md border border-white/10 bg-slate-950/60 px-4 text-sm text-white outline-none focus:border-cyan-300/60 focus:ring-2 focus:ring-cyan-300/20"
                  />
                </label>
              ))}
              <label className="grid gap-2 text-sm font-semibold text-white">
                Message
                <textarea
                  name="message"
                  rows={5}
                  className="rounded-md border border-white/10 bg-slate-950/60 px-4 py-3 text-sm text-white outline-none focus:border-cyan-300/60 focus:ring-2 focus:ring-cyan-300/20"
                />
              </label>
              <Button type="button" size="lg" className="mt-2 w-fit">
                Submit Enquiry <Send className="size-4" />
              </Button>
            </form>
          </GlassCard>

          <div className="grid gap-5">
            <GlassCard>
              <h2 className="text-2xl font-bold text-white">Campus map</h2>
              <div className="mt-5 grid h-72 place-items-center rounded-lg border border-white/10 bg-[linear-gradient(135deg,rgba(103,232,249,0.13),rgba(167,139,250,0.12),rgba(15,23,42,0.95))] text-center">
                <div>
                  <p className="text-lg font-bold text-white">Map Placeholder</p>
                  <p className="mt-2 text-sm text-slate-300">
                    https://maps.app.goo.gl/BAwftWVQku4h7B1F7
                  </p>
                </div>
              </div>
            </GlassCard>
            <GlassCard>
              <h2 className="text-2xl font-bold text-white">Emergency contact</h2>
              <p className="mt-3 text-slate-300">
                During fest hours, schools can contact the EVORIX help desk for
                first aid, venue support, lost items, and urgent coordination.
              </p>
              <a
                href="tel:+919746083150"
                className="mt-5 inline-flex items-center gap-2 text-lg font-bold text-cyan-100"
              >
                <Phone className="size-5" />
                +91 97460 83150
              </a>
            </GlassCard>
          </div>
        </Container>
      </section>

      <section className="py-16 pb-24">
        <Container>
          <GlassCard className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-2xl font-bold text-white">Follow EVORIX</h2>
              <p className="mt-2 text-slate-300">
                Social links are placeholders until official school handles are connected.
              </p>
            </div>
            <div className="flex gap-3">
              {socials.map((social) => {
                const Icon = social.icon;

                return (
                  <a
                    key={social.label}
                    href="#"
                    aria-label={social.label}
                    className="grid size-11 place-items-center rounded-md border border-white/10 bg-white/5 text-slate-300 transition hover:border-cyan-300/50 hover:text-cyan-100"
                  >
                    <Icon className="size-5" />
                  </a>
                );
              })}
            </div>
          </GlassCard>
        </Container>
      </section>
    </main>
  );
}

function CoordinatorGroup({
  title,
  people,
}: {
  title: string;
  people: Array<{ name: string; role: string; phone: string; email?: string }>;
}) {
  return (
    <GlassCard>
      <h2 className="text-2xl font-bold text-white">{title}</h2>
      <div className="mt-5 grid gap-4">
        {people.map((person) => (
          <div key={person.email ?? `${person.name}-${person.phone}`} className="rounded-lg border border-white/10 bg-slate-950/45 p-4">
            <p className="text-lg font-bold text-white">{person.name}</p>
            <p className="mt-1 text-sm text-purple-200">{person.role}</p>
            <div className="mt-4 grid gap-2 text-sm text-slate-300">
              <a href={`tel:${person.phone.replaceAll(" ", "")}`} className="flex items-center gap-2">
                <Phone className="size-4 text-cyan-200" />
                {person.phone}
              </a>
              {person.email ? (
                <a href={`mailto:${person.email}`} className="flex items-center gap-2">
                  <Mail className="size-4 text-cyan-200" />
                  {person.email}
                </a>
              ) : null}
            </div>
          </div>
        ))}
      </div>
    </GlassCard>
  );
}
