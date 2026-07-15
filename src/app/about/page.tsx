import { Container } from "@/components/layout/container";
import { PageHeader } from "@/components/layout/page-header";
import { SectionHeading } from "@/components/layout/section-heading";
import { GlassCard } from "@/components/ui/glass-card";
import { aboutHighlights, aboutTimeline } from "@/data/site";

export default function AboutPage() {
  return (
    <main id="main-content">
      <PageHeader
        eyebrow="About"
        title="EVORIX is where school talent meets future-facing energy."
        description="Built as an annual interschool platform, EVORIX gives students a professional, memorable environment to compete, perform, collaborate, and represent their schools with pride."
      />

      <section className="py-16">
        <Container className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <GlassCard>
            <h2 className="text-2xl font-bold text-white">Vision</h2>
            <p className="mt-4 leading-8 text-slate-300">
              To become a respected interschool fest where students discover their
              strengths, learn from peers, and experience competition as a
              celebration of skill, discipline, and imagination.
            </p>
          </GlassCard>
          <GlassCard>
            <h2 className="text-2xl font-bold text-white">Mission</h2>
            <p className="mt-4 leading-8 text-slate-300">
              EVORIX creates well-organized event tracks across academics,
              technology, culture, stage performance, and leadership while
              ensuring clear rules, accessible communication, and a welcoming
              campus experience for visiting schools.
            </p>
          </GlassCard>
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <SectionHeading
            eyebrow="What Makes It Unique"
            title="A polished fest experience, not just a list of competitions."
            description="The event design balances energy with structure so students feel excited, schools feel informed, and coordinators can run each zone with confidence."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {aboutHighlights.map((item) => {
              const Icon = item.icon;

              return (
                <GlassCard key={item.title}>
                  <div className="grid size-11 place-items-center rounded-md bg-cyan-300/12 text-cyan-100">
                    <Icon className="size-5" />
                  </div>
                  <h3 className="mt-5 text-xl font-bold text-white">{item.title}</h3>
                  <p className="mt-3 leading-7 text-slate-300">{item.description}</p>
                </GlassCard>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="py-16">
        <Container className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <SectionHeading
            align="left"
            eyebrow="Organizing School"
            title="Hosted by a school community prepared for scale."
            description="The organizing school provides faculty oversight, student leadership teams, venue coordination, event judges, hospitality support, and communication channels for all invited schools."
          />
          <GlassCard>
            <dl className="grid gap-5 sm:grid-cols-2">
              {[
                ["Host", "EVORIX Organizing School"],
                ["Campus Zones", "Main Stage, STEM Labs, Art Studio, Seminar Hall"],
                ["Coordination", "Faculty convenors and student leads"],
                ["Safety", "Help desk, first-aid point, and venue marshals"],
              ].map(([label, value]) => (
                <div key={label}>
                  <dt className="text-sm uppercase tracking-[0.16em] text-slate-400">
                    {label}
                  </dt>
                  <dd className="mt-2 font-semibold text-white">{value}</dd>
                </div>
              ))}
            </dl>
          </GlassCard>
        </Container>
      </section>

      <section className="py-16 pb-24">
        <Container>
          <SectionHeading
            eyebrow="Previous Editions"
            title="A timeline ready for real legacy data."
            description="These placeholder milestones show how the page will present previous EVORIX editions once official numbers and photos are finalized."
          />
          <div className="relative mx-auto mt-12 max-w-4xl before:absolute before:bottom-0 before:left-4 before:top-0 before:w-px before:bg-white/10">
            {aboutTimeline.map((item) => (
              <div key={item.year} className="relative mb-6 pl-12">
                <span className="absolute left-[0.55rem] top-6 size-3 rounded-full bg-purple-300 shadow-[0_0_16px_rgba(167,139,250,0.7)]" />
                <GlassCard>
                  <p className="font-mono text-sm text-cyan-100">{item.year}</p>
                  <h3 className="mt-2 text-2xl font-bold text-white">{item.title}</h3>
                  <p className="mt-1 text-sm font-semibold uppercase tracking-[0.16em] text-purple-200">
                    {item.stat}
                  </p>
                  <p className="mt-3 leading-7 text-slate-300">{item.description}</p>
                </GlassCard>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </main>
  );
}
