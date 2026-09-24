import { ProjectCard } from "./ProjectCard";

import type { PortfolioProject } from "@/types/projects";

interface ProjectsGridProps {
  /** Already filtered by ProjectsView. */
  projects: PortfolioProject[];
  onClearFilters: () => void;
}

export function ProjectsGrid({
  projects,
  onClearFilters,
}: ProjectsGridProps) {
  // Empty state
  if (projects.length === 0) {
    return (
      <div className="py-20 text-center">
        <h3 className="text-2xl font-semibold">
          No projects found
        </h3>

        <p className="mt-3 text-muted-foreground">
          Try a different search, technology or category.
        </p>

        <button
          type="button"
          onClick={onClearFilters}
          className="mt-6 text-sm font-semibold text-primary hover:text-primary/80"
        >
          Clear filters
        </button>
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
        {projects.map((project) => (
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