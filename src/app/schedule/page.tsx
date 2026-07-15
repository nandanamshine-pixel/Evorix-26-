import { Container } from "@/components/layout/container";
import { PageHeader } from "@/components/layout/page-header";
import { ScheduleBoard } from "@/components/schedule/schedule-board";

export default function SchedulePage() {
  return (
    <main id="main-content">
      <PageHeader
        eyebrow="Schedule"
        title="A two-day timeline designed for fast scanning."
        description="Filter the placeholder schedule by venue or category. The layout is ready for official reporting times, venue updates, and event-specific instructions."
      />
      <section className="py-16 pb-24">
        <Container>
          <ScheduleBoard />
        </Container>
      </section>
    </main>
  );
}
