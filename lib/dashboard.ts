import { cache } from "react";

import { getProjects } from "./github";
import {
  getContributionStats,
  type ContributionStats,
} from "./github-graphql";
import { getLeetCodeStats, type LeetCodeStats } from "./leetcode";

/*
 * Live stats shared across the site. Every fetch is cached for 5 minutes
 * (ISR), so numbers update automatically as GitHub and LeetCode change.
 * Each value is `null` when its API could not be reached.
 */

export interface HeroStatsData {
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

// `cache` dedupes calls within a render: POST requests (GraphQL) aren't
// memoized by Next.js, so without it each component would refetch.
/** Number of public, non-fork, non-archived GitHub repositories. */
export const getProjectCount = cache(
  (): Promise<number | null> =>
    settle(
      "projects",
      getProjects().then((projects) => projects.length)
    )
);

export const getGitHubStats = cache(
  (): Promise<ContributionStats | null> =>
    settle("contributions", getContributionStats())
);

export const getAlgorithmStats = cache(
  (): Promise<LeetCodeStats | null> =>
    settle("algorithms", getLeetCodeStats())
);

export async function getHeroStats(): Promise<HeroStatsData> {
  const [projects, github, algorithms] = await Promise.all([
    getProjectCount(),
    getGitHubStats(),
    getAlgorithmStats(),
  ]);

  return {
    projects,
    contributions: github?.total ?? null,
    algorithms: algorithms?.solved ?? null,
    degree: "B.CompSci",
  };
}

/**
 * LeetCode's solved count only ever goes up, so this is a safe floor for
 * prose ("Solved 85+ problems") when the live number is unavailable.
 */
export const MIN_ALGORITHMS_SOLVED = 85;

/**
 * Formats a live count as "85+". When unavailable, uses `fallback`
 * if given, otherwise "—".
 */
export function formatCount(
  value: number | null | undefined,
  fallback?: number
): string {
  const count = value ?? fallback;

  return count == null ? "—" : `${count}+`;
}

/** The next round milestone above a count, e.g. 85 → 100, 100 → 150. */
export function nextMilestone(value: number, step = 50): number {
  return (Math.floor(value / step) + 1) * step;
}
