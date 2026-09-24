import { projectMetadata } from "@/content/projectMetadata";
import { projects } from "@/content/projects";

import type { PortfolioProject } from "@/types/projects";

export async function getPortfolioProjects(): Promise<PortfolioProject[]> {
  return projects;
}

export async function getFeaturedPortfolioProjects(): Promise<PortfolioProject[]> {
  return projects.filter((project) => project.featured);
}
/**
 * Finds the portfolio project for a GitHub repository name
 * (matched case-insensitively against the project's GitHub URL).
 */
export function findProjectByRepository(
  repository: string
): PortfolioProject | undefined {
  const name = repository.toLowerCase();

  return projects.find(
    (project) =>
      project.githubUrl?.toLowerCase().split("/").pop() === name
  );
}

/**
 * Card and hero image for a project: its screenshot when there is one,
 * otherwise the generated cover from `app/projects/[slug]/opengraph-image`.
 */
export function getProjectImage(slug: string): string {
  const project = projects.find((project) => project.slug === slug);

  return (
    projectMetadata[slug]?.image ??
    project?.image ??
    `/projects/${slug}/opengraph-image`
  );
}
