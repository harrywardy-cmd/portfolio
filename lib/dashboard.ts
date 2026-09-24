import { getProjects } from "./github";
import { getContributionCount } from "./github-graphql";
import { getAlgorithmCount } from "./leetcode";

export interface HeroStatsData {
  /** `null` when the upstream API could not be reached. */
  projects: number | null;
  contributions: number | null;
  algorithms: number | null;
  degree: string;
}

/**
 * Resolves to `null` instead of rejecting, so one failing API
 * (rate limit, outage, missing token) can't take down the page.
 */
async function settle<T>(
  label: string,
  promise: Promise<T>
): Promise<T | null> {
  try {
    return await promise;
  } catch (error) {
    console.error(`[dashboard] ${label}:`, error);

    return null;
  }
}

export async function getHeroStats(): Promise<HeroStatsData> {
  const [projects, contributions, algorithms] = await Promise.all([
    settle(
      "projects",
      getProjects().then((projects) => projects.length)
    ),
    settle("contributions", getContributionCount()),
    settle("algorithms", getAlgorithmCount()),
  ]);

  return {
    projects,
    contributions,
    algorithms,
    degree: "B.CompSci",
  };
}
