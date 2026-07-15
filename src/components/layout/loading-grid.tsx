import { Container } from "@/components/layout/container";
import { Skeleton } from "@/components/ui/skeleton";

export function LoadingGrid() {
  return (
    <main className="pt-32">
      <Container>
        <Skeleton className="h-8 w-32" />
        <Skeleton className="mt-6 h-14 max-w-2xl" />
        <Skeleton className="mt-5 h-6 max-w-3xl" />
        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {Array.from({ length: 6 }).map((_, index) => (
            <Skeleton key={index} className="h-80" />
          ))}
        </div>
      </Container>
    </main>
  );
}
