import { ProjectCard } from "./ProjectCard";

import type { PortfolioProject } from "@/types/projects";

interface ProjectsGridProps {
  projects: PortfolioProject[];
  filter: string;
}

export function ProjectsGrid({
  projects,
  filter,
}: ProjectsGridProps) {
  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter((project) =>
          project.categories.includes(filter)
        );

  // Empty state
  if (filteredProjects.length === 0) {
    return (
      <div className="py-20 text-center">
        <h3 className="text-2xl font-semibold">
          No projects found
        </h3>

        <p className="mt-3 text-muted-foreground">
          Try selecting another category.
        </p>
      </div>
    );
  }

  return (
    <div className="mt-12">
      <div
        className="
          mx-auto
          grid
          max-w-7xl
          grid-cols-1
          gap-8
          md:grid-cols-2
          xl:grid-cols-3
          items-stretch
        "
      >
        {filteredProjects.map((project) => (
          <div
            key={project.slug}
            className="
              animate-in
              fade-in
              duration-500
            "
          >
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </div>
  );
}