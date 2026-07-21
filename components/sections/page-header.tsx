import { Badge } from "@/components/ui/badge";
export function PageHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <section className="border-b border-border bg-muted/60">
      <div className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:py-20">
        <Badge>{eyebrow}</Badge>
        <h1 className="mt-5 max-w-4xl text-4xl font-bold tracking-tight text-heading sm:text-5xl">
          {title}
        </h1>
        <p className="mt-5 max-w-3xl text-lg leading-8 text-body"> {description} </p>
      </div>
    </section>
  );
}
