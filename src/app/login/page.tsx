import { Container } from "@/components/layout/container";
import { PageHeader } from "@/components/layout/page-header";
import { Button } from "@/components/ui/button";
import { GlassCard } from "@/components/ui/glass-card";

export default function LoginPlaceholderPage() {
  return (
    <main id="main-content">
      <PageHeader
        eyebrow="School Login"
        title="Coordinator login will arrive in a later phase."
        description="Authentication, school dashboards, database workflows, and registration management are intentionally not implemented yet."
      />
      <section className="py-16 pb-24">
        <Container className="max-w-3xl">
          <GlassCard>
            <h2 className="text-2xl font-bold text-white">Coming soon</h2>
            <p className="mt-4 leading-8 text-slate-300">
              just a placeholder :|
            </p>
            <Button asChild className="mt-6">
              <a href="/events">Explore public events</a>
            </Button>
          </GlassCard>
        </Container>
      </section>
    </main>
  );
}
