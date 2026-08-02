import { Container } from "@/components/layout/Container";

import { ProjectCard } from "./ProjectCard";

import { getFeaturedPortfolioProjects } from "@/lib/projects";

import { ProjectsHeader } from "./ProjectsHeader";

export async function FeaturedProjects() {
  const projects = await getFeaturedPortfolioProjects();

  return (
    <section
      id="projects"
      className="relative py-20 lg:py-24"
    >
      <Container>
        <div className="space-y-12">
          <ProjectsHeader />

          <div
            className="
              mx-auto
              grid
              max-w-7xl
              grid-cols-1
              gap-8
              md:grid-cols-2
              xl:grid-cols-3
            "
          >
            {projects.map((project) => (
              <ProjectCard
                key={project.slug}
                project={project}
              />
            ))}
          </div>
        </div>

        <div className="mt-20 border-t border-border/60" />
      </Container>
    </section>
  );
}