import type {
  GitHubCommit,
  GitHubRepository,
} from "@/types/github";

import { siteConfig } from "./site";

const GITHUB_API = "https://api.github.com";
const USERNAME = siteConfig.github.username;

const REVALIDATE_TIME = 300;

const headers: HeadersInit = {
  Accept: "application/vnd.github+json",
};

// Optional GitHub Personal Access Token (raises the rate limit from 60 to 5000 req/hr)
if (process.env.GITHUB_TOKEN) {
  headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
}

const fetchOptions: RequestInit & {
  next: { revalidate: number };
} = {
  headers,
  next: {
    revalidate: REVALIDATE_TIME,
  },
};

/**
 * Fetches every public repository for the configured user.
 */
export async function getRepositories(): Promise<
  GitHubRepository[]
> {
  const response = await fetch(
    `${GITHUB_API}/users/${USERNAME}/repos?sort=updated&per_page=100`,
    fetchOptions
  );

  if (!response.ok) {
    throw new Error(
      `Failed to fetch repositories (${response.status})`
    );
  }

  return response.json();
}

/**
 * Returns repositories suitable for displaying as projects.
 */
export async function getProjects(): Promise<
  GitHubRepository[]
> {
  const repositories = await getRepositories();

  return repositories
    .filter((repository) => !repository.fork)
    .filter((repository) => !repository.archived)
    .sort(
      (a, b) =>
        new Date(b.updated_at).getTime() -
        new Date(a.updated_at).getTime()
    );
}

/**
 * Returns the most recently updated repository.
 */
export async function getLatestRepository(): Promise<GitHubRepository> {
  const projects = await getProjects();

  if (projects.length === 0) {
    throw new Error("No public repositories found.");
  }

  return projects[0];
}

/**
 * Returns the most recent commits for a repository.
 */
export async function getRecentCommits(
  repository: string,
  limit = 5
): Promise<GitHubCommit[]> {
  const response = await fetch(
    `${GITHUB_API}/repos/${USERNAME}/${repository}/commits?per_page=${limit}`,
    fetchOptions
  );

  if (!response.ok) {
    throw new Error(
      `Failed to fetch commits for "${repository}" (${response.status})`
    );
  }

  return response.json();
}
