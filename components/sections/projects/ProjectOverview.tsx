import { projectMetadata } from "@/content/projectMetadata";

interface Props {
  slug: string;
}

export function ProjectOverview({
  slug,
}: Props) {
  const metadata = projectMetadata[slug];

  return (
    <section className="space-y-4">
      <h2 className="text-3xl font-semibold">
        Overview
      </h2>

      <p className="leading-8 text-muted-foreground">
        {metadata.overview}
      </p>
    </section>
  );
}