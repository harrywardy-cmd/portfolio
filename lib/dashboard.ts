import { getProjects } from "./github";
import { getContributionCount } from "./github-graphql";
import { getAlgorithmCount } from "./leetcode";

async function getProjectCount(): Promise<number> {
  const projects = await getProjects();

  return projects.length;
}

export interface HeroStatsData {
  projects: number;
  contributions: number;
  algorithms: number;
  degree: string;
}

export async function getHeroStats(): Promise<HeroStatsData> {
  const [projects, contributions, algorithms] = await Promise.all([
    getProjectCount(),
    getContributionCount(),
    getAlgorithmCount(),
  ]);

  return {
    projects,
    contributions,
    algorithms,
    degree: "B.CompSci",
  };
}