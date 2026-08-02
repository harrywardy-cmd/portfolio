import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { Container } from "@/components/layout/Container";

import { ProjectButtons } from "./ProjectButtons";
import { ProjectFeatures } from "./ProjectFeatures";
import { ProjectHero } from "./ProjectHero";
import { ProjectOverview } from "./ProjectOverview";
import { ProjectTechStack } from "./ProjectTechStack";

import { projectMetadata } from "@/content/projectMetadata";
import type { PortfolioProject } from "@/types/projects";

interface ProjectPageProps {
  project: PortfolioProject;
}

export function ProjectPage({ project }: ProjectPageProps) {
  const metadata = projectMetadata[project.slug];

  if (!metadata) {
    return (
      <Container className="py-20">
        <div className="mx-auto max-w-5xl">
          <h1 className="text-3xl font-bold">Project not found</h1>

          <p className="mt-4 text-muted-foreground">
            No metadata has been configured for this project yet.
          </p>

          <Link
            href="/projects"
            className="mt-8 inline-flex items-center gap-2 text-primary hover:underline"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Projects
          </Link>
        </div>
      </Container>
    );
  }

  return (
    <main>
      <Container className="py-20">
        <div className="mx-auto max-w-5xl space-y-20">
          {/* Back Navigation */}
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Projects
          </Link>

          {/* Hero */}
          <ProjectHero project={project} />

          {/* Overview */}
          <ProjectOverview slug={project.slug} />

          {/* Features */}
          <ProjectFeatures slug={project.slug} />

          {/* Technology Stack */}
          <ProjectTechStack slug={project.slug} />

          {/* Actions */}
          <ProjectButtons
            githubUrl={project.githubUrl}
            demoUrl={project.demo}
            pdfUrl={project.pdf}
            source={project.source}
          />
        </div>
      </Container>
    </main>
  );
}
