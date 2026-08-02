import Image from "next/image";

import { Badge } from "@/components/ui/badge";
import { projectMetadata } from "@/content/projectMetadata";
import type { PortfolioProject } from "@/types/projects";

interface Props {
  project: PortfolioProject;
}

export function ProjectHero({
  project,
}: Props) {
  const metadata =
    projectMetadata[project.slug];

  if (!metadata) {
    return null;
  }

  const image =
    metadata.image ??
    "/images/projects/project-placeholder.png";

  return (
    <section className="space-y-8">
      <div>
        <h1 className="text-5xl font-bold">
          {metadata.title}
        </h1>

        <p className="mt-4 max-w-3xl text-lg text-muted-foreground">
          {metadata.overview}
        </p>
      </div>

      <div className="flex flex-wrap gap-2">
        {metadata.technologies.map((tech) => (
          <Badge key={tech}>{tech}</Badge>
        ))}
      </div>

      <div className="relative aspect-video overflow-hidden rounded-3xl border">
        <Image
          src={image}
          alt={metadata.title}
          fill
          className="object-cover"
        />
      </div>
    </section>
  );
}