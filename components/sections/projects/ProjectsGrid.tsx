import {
  getFeaturedProjects,
  getProjects,
} from "@/lib/github";

import { ProjectCard } from "./ProjectCard";

interface ProjectsGridProps {
  featuredOnly?: boolean;
}

export async function ProjectsGrid({
  featuredOnly = true,
}: ProjectsGridProps) {
  const projects = featuredOnly
    ? await getFeaturedProjects()
    : await getProjects();

  return (
    <div className="mt-12">
      <div
        className="
          mx-auto
          grid
          max-w-7xl
          grid-cols-1
          gap-6
          md:grid-cols-2
          xl:grid-cols-3
        "
      >
        {projects.map((project) => (
          <div
            key={project.id}
            className="flex h-full"
          >
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </div>
  );
}