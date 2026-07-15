import { Container } from "@/components/layout/container";
import { PageHeader } from "@/components/layout/page-header";
import { Accordion } from "@/components/ui/accordion";
import { faqCategories } from "@/data/site";

export default function FAQPage() {
  return (
    <main id="main-content">
      <PageHeader
        eyebrow="FAQ"
        title="Everything visiting schools need before registration."
        description="Clear answers for coordinators, participants, and families about the official Google Form, eligibility, schedules, certificates, food, payments, and fest rules."
      />
      <section className="py-16 pb-24">
        <Container className="max-w-5xl">
          <Accordion items={faqCategories} />
        </Container>
      </section>
    </main>
  );
}
