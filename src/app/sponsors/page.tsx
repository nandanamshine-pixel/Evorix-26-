import { Container } from "@/components/layout/container";
import { PageHeader } from "@/components/layout/page-header";
import { Badge } from "@/components/ui/badge";
import { GlassCard } from "@/components/ui/glass-card";
import { sponsorGroups } from "@/data/site";

export default function SponsorsPage() {
  return (
    <main id="main-content">
      <PageHeader
        eyebrow="Sponsors"
        title="The Sponsor space for EVORIX"
        description="EVORIX sponsor sections"
      />
      <section className="py-16 pb-24">
        <Container className="grid gap-10">
          {sponsorGroups.map((group) => (
            <section key={group.tier} aria-labelledby={`${group.tier}-sponsors`}>
              <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <Badge>{group.tier}</Badge>
                  <h2 id={`${group.tier}-sponsors`} className="mt-3 text-3xl font-bold text-white">
                    {group.tier} Sponsors
                  </h2>
                </div>
                <p className="max-w-2xl leading-7 text-slate-300">{group.description}</p>
              </div>
              <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                {group.sponsors.map((sponsor) => (
                  <GlassCard key={sponsor} className="min-h-52">
                    <div className="grid h-24 place-items-center rounded-lg border border-white/10 bg-[linear-gradient(135deg,rgba(103,232,249,0.12),rgba(167,139,250,0.13))]">
                      <span className="text-lg font-black tracking-[0.18em] text-white">
                        {sponsor.split(" ").map((word) => word[0]).join("")}
                      </span>
                    </div>
                    <h3 className="mt-5 text-xl font-bold text-white">{sponsor}</h3>
                    <p className="mt-3 leading-7 text-slate-300">
                      Placeholder sponsor profile for approved brand messaging,
                      event support details, and partner recognition.
                    </p>
                  </GlassCard>
                ))}
              </div>
            </section>
          ))}
        </Container>
      </section>
    </main>
  );
}
