import Image from "next/image";

import type { GitHubRepository } from "@/types/github";
import { projectMetadata } from "@/content/projectMetadata";
import { Badge } from "@/components/ui/badge";

interface Props {
  project: GitHubRepository;
}

export function ProjectHero({
  project,
}: Props) {
  const metadata =
    projectMetadata[project.name.toLowerCase()];

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
          src={metadata.image}
          alt={metadata.title}
          fill
          className="object-cover"
        />
      </div>
    </section>
  );
}