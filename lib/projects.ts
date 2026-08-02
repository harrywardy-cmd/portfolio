import { projects } from "@/content/projects";

import type { PortfolioProject } from "@/types/projects";

export async function getPortfolioProjects(): Promise<PortfolioProject[]> {
  return projects;
}

export async function getFeaturedPortfolioProjects(): Promise<PortfolioProject[]> {
  return projects.filter((project) => project.featured);
}