import { Badge } from "@/components/ui/badge";
import { projectMetadata } from "@/content/projectMetadata";

interface Props {
  slug: string;
}

export function ProjectTechStack({
  slug,
}: Props) {
  const metadata = projectMetadata[slug];

  if (!metadata) {
    return null;
  }

  return (
    <section className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">
          Technology Stack
        </h2>

        <p className="mt-2 text-muted-foreground">
          Technologies, frameworks, and tools used to build
          this project.
        </p>
      </div>

      <div className="flex flex-wrap gap-3">
        {metadata.technologies.map((tech) => (
          <Badge
            key={tech}
            variant="secondary"
            className="
              rounded-full
              px-4
              py-2
              text-sm
              font-medium
              transition-colors
              hover:bg-primary
              hover:text-primary-foreground
            "
          >
            {tech}
          </Badge>
        ))}
      </div>
    </section>
  );
}