import { EventsBrowser } from "@/components/events/events-browser";
import { Container } from "@/components/layout/container";
import { PageHeader } from "@/components/layout/page-header";

export default function EventsPage() {
  return (
    <main id="main-content">
      <PageHeader
        eyebrow="Events"
        title="Explore every competition track planned for EVORIX."
        description="Search and filter the official EVORIX event lineup. Each card is structured for final rules, eligibility, venue, timing, and prize details when the organizing team releases them."
      />
      <section className="py-16 pb-24">
        <Container>
          <EventsBrowser />
        </Container>
      </section>
    </main>
  );
}
