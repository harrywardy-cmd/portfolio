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
          <ProjectCard
            key={project.slug}
            project={project}
          />
        ))}
      </div>
    </div>
  );
}