import { Badge } from "@/components/ui/badge";
import { projectMetadata } from "@/content/projectMetadata";

interface Props {
  slug: string;
}

export function ProjectTechStack({
  slug,
}: Props) {
  const metadata = projectMetadata[slug];

  return (
    <section className="space-y-6">
      <h2 className="text-3xl font-semibold">
        Technology Stack
      </h2>

      <div className="flex flex-wrap gap-3">
        {metadata.technologies.map((tech) => (
          <Badge
            key={tech}
            className="px-4 py-2"
          >
            {tech}
          </Badge>
        ))}
      </div>
    </section>
  );
}