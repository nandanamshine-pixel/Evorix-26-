import { Container } from "@/components/layout/container";
import { PageHeader } from "@/components/layout/page-header";
import { ScheduleBoard } from "@/components/schedule/schedule-board";

export default function SchedulePage() {
  return (
    <main id="main-content">
      <PageHeader
        eyebrow="Schedule"
        title="Schedule for EVORIX 2026"
        description="Checkout the schedule for EVORIX 2026 below. Updates on exact time, order, and location shall be updated soon. Please check back for updates :)."
      />
      <section className="py-16 pb-24">
        <Container>
          <ScheduleBoard />
        </Container>
      </section>
    </main>
  );
}
