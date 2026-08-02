export interface PortfolioProject {
  slug: string;
  title: string;
  description: string;

  githubUrl?: string;
  demo?: string;
  pdf?: string;

  image?: string;

  featured: boolean;

  source: "github" | "local";
}