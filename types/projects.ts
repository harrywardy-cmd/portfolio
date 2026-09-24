export interface PortfolioProject {
  slug: string;

  title: string;

  description: string;

  technologies: string[];

  githubUrl?: string;

  demo?: string;

  pdf?: string;

  image?: string;

  featured: boolean;

  /** Still being built — shown with an "In Progress" badge. */
  inProgress?: boolean;

  source: "github" | "local";

  categories: string[];
}