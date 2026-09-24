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

/** Every technology for a project, from its card and its write-up. */
export function getProjectTechnologies(project: PortfolioProject): string[] {
  return Array.from(
    new Set([
      ...project.technologies,
      ...(projectMetadata[project.slug]?.technologies ?? []),
    ])
  );
}

/** All technologies across projects, most used first. */
export function getAllTechnologies(list: PortfolioProject[]): string[] {
  const counts = new Map<string, number>();

  for (const project of list) {
    for (const technology of getProjectTechnologies(project)) {
      counts.set(technology, (counts.get(technology) ?? 0) + 1);
    }
  }

  return [...counts.keys()].sort(
    (a, b) => counts.get(b)! - counts.get(a)! || a.localeCompare(b)
  );
}

export interface ProjectFilters {
  /** A category such as "Web", or "All". */
  category: string;
  /** Free-text search across title, description and technologies. */
  query: string;
  /** An exact technology, or "" for any. */
  technology: string;
}

export function filterProjects(
  list: PortfolioProject[],
  { category, query, technology }: ProjectFilters
): PortfolioProject[] {
  const terms = query.toLowerCase().split(/\s+/).filter(Boolean);

  return list.filter((project) => {
    const technologies = getProjectTechnologies(project);

    if (category !== "All" && !project.categories.includes(category)) {
      return false;
    }

    if (technology && !technologies.includes(technology)) {
      return false;
    }

    const haystack = [project.title, project.description, ...technologies]
      .join(" ")
      .toLowerCase();

    // Every search word must appear somewhere.
    return terms.every((term) => haystack.includes(term));
  });
}
