import { getFeaturedProjects } from "@/lib/github";

import { ProjectCard } from "./ProjectCard";

export async function ProjectsGrid() {
  // Only display the first 3 featured projects
  const projects = (await getFeaturedProjects()).slice(0, 3);

  return (
    <div className="mt-12">
      <div
        className="
          mx-auto
          grid
          max-w-7xl
          grid-cols-1
          gap-6
          lg:grid-cols-3
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