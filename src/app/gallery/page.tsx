import { GalleryGrid } from "@/components/gallery/gallery-grid";
import { Container } from "@/components/layout/container";
import { PageHeader } from "@/components/layout/page-header";

export default function GalleryPage() {
  return (
    <main id="main-content">
      <PageHeader
        eyebrow="Gallery"
        title="A responsive visual archive for EVORIX memories."
        description="This masonry-style gallery uses branded placeholders now and is ready for official event photography, year filters, and image previews."
      />
      <section className="py-16 pb-24">
        <Container>
          <GalleryGrid />
        </Container>
      </section>
    </main>
  );
}
