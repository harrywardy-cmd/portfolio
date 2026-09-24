import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BackButton } from "@/components/ui/BackButton";
import { ProjectFeatureGrid } from "@/components/sections/projects/ProjectFeatureGrid";
import { Container } from "@/components/layout/Container";
import { ProjectHero } from "@/components/sections/projects/ProjectHero";
import { projects } from "@/content/projects";
import { projectMetadata } from "@/content/projectMetadata";
import { ProjectChallengeGrid } from "@/components/sections/projects/ProjectChallengeGrid";
import { ProjectLessonsGrid } from "@/components/sections/projects/ProjectLessonsGrid";
import { ProjectTechStack } from "@/components/sections/projects/ProjectTechStack";

interface ProjectPageProps {
  params: Promise<{
    slug: string;
  }>;
}

// Only projects with detail content get a page; everything else 404s.
export const dynamicParams = false;

export function generateStaticParams() {
  return projects
    .filter((project) => projectMetadata[project.slug])
    .map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;

  const project = projects.find((project) => project.slug === slug);

  if (!project) {
    return {};
  }

  return {
    title: project.title,
    description: project.description,
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;

  const project = projects.find((project) => project.slug === slug);

  if (!project) {
    notFound();
  }

  const metadata = projectMetadata[slug];

  if (!metadata) {
    notFound();
  }

  return (
    <div className="py-20 lg:py-24">
      <Container>
        <BackButton />
        <ProjectHero project={project} />

        {/* Project Details */}
        <div className="mt-20 space-y-16">
          {/* Overview */}
          <section>
            <h2 className="text-3xl font-bold tracking-tight">Overview</h2>

            <p className="mt-6 leading-8 text-muted-foreground">
              {metadata.overview}
            </p>
          </section>

          {/* Problem */}
          {metadata.problem && (
            <section>
              <h2 className="text-3xl font-bold tracking-tight">The Problem</h2>

              <div className="mt-6 rounded-2xl border bg-card p-6">
                <p className="leading-8 text-muted-foreground">
                  {metadata.problem}
                </p>
              </div>
            </section>
          )}

          {/* Solution */}
          {metadata.solution && (
            <section>
              <h2 className="text-3xl font-bold tracking-tight">
                The Solution
              </h2>

              <div className="mt-6 rounded-2xl border bg-card p-6">
                <p className="leading-8 text-muted-foreground">
                  {metadata.solution}
                </p>
              </div>
            </section>
          )}

          {/* Features */}
          <ProjectFeatureGrid features={metadata.features} />

          {/* Challenges */}
          <ProjectChallengeGrid challenges={metadata.challenges} />

          {/* Lessons */}
          <ProjectLessonsGrid lessons={metadata.lessons} />

          {/* Technology Stack */}
          <ProjectTechStack slug={slug} />
        </div>
      </Container>
    </div>
  );
}
