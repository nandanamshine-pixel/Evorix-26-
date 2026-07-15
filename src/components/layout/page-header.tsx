import { Container } from "@/components/layout/container";
import { Badge } from "@/components/ui/badge";

type PageHeaderProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function PageHeader({ eyebrow, title, description }: PageHeaderProps) {
  return (
    <section className="relative overflow-hidden pt-32 pb-16">
      <div className="noise-overlay absolute inset-0 -z-10" />
      <Container>
        <div className="max-w-4xl">
          <Badge>{eyebrow}</Badge>
          <h1 className="mt-6 text-5xl font-black leading-tight text-white sm:text-6xl">
            {title}
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">
            {description}
          </p>
        </div>
      </Container>
    </section>
  );
}
