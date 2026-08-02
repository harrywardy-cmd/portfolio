import Image from "next/image";

import { Badge } from "@/components/ui/badge";
import { ProjectButtons } from "@/components/sections/projects/ProjectButtons";
import { projectMetadata } from "@/content/projectMetadata";
import type { PortfolioProject } from "@/types/projects";

interface Props {
  project: PortfolioProject;
}

export function ProjectHero({ project }: Props) {
  const metadata = projectMetadata[project.slug];

  if (!metadata) {
    return null;
  }

  const image = metadata.image ?? "/images/projects/project-placeholder.png";

  return (
    <section className="grid gap-12 lg:grid-cols-2 lg:items-center">
      {/* Content */}
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
          Project
        </p>

        <h1 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
          {metadata.title}
        </h1>

        <p className="mt-6 text-lg leading-8 text-muted-foreground">
          {metadata.overview}
        </p>

        {/* Technologies */}
        <div className="mt-8 flex flex-wrap gap-2">
          {metadata.technologies.map((tech) => (
            <Badge key={tech} variant="secondary">
              {tech}
            </Badge>
          ))}
        </div>

        {/* Buttons */}
        <div className="mt-10">
          <ProjectButtons
            githubUrl={project.githubUrl}
            demoUrl={project.demo ?? metadata.demo}
            pdfUrl={project.pdf ?? metadata.pdf}
            source={project.source}
          />
        </div>
      </div>

      {/* Hero Image */}
      <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-lg">
        <div className="relative aspect-[16/10]">
          <Image
            src={image}
            alt={metadata.title}
            fill
            priority
            className="object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>
      </div>
    </section>
  );
}
