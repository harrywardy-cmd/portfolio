import type {
  GitHubCommit,
  GitHubRepository,
} from "@/types/github";

import { siteConfig } from "./site";

const GITHUB_API = "https://api.github.com";

const REVALIDATE_TIME = 300;

const headers: HeadersInit = {
  Accept: "application/vnd.github+json",
};

// Optional GitHub Personal Access Token
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

const USERNAME = siteConfig.github.username;

/**
 * Returns the user's most recently updated public repository.
 */
export async function getLatestRepository(): Promise<GitHubRepository> {
  const response = await fetch(
    `${GITHUB_API}/users/${USERNAME}/repos?sort=updated&per_page=1`,
    fetchOptions
  );

  if (!response.ok) {
    throw new Error(
      `Failed to fetch repositories (${response.status})`
    );
  }

  const repos: GitHubRepository[] = await response.json();

  if (repos.length === 0) {
    throw new Error("No public repositories found.");
  }

  return repos[0];
}

/**
 * Returns the latest commit for a repository.
 */
export async function getLatestCommit(
  repository: string
): Promise<GitHubCommit> {
  const response = await fetch(
    `${GITHUB_API}/repos/${USERNAME}/${repository}/commits?per_page=1`,
    fetchOptions
  );

  if (!response.ok) {
    throw new Error(
      `Failed to fetch commits for "${repository}" (${response.status})`
    );
  }

  const commits: GitHubCommit[] = await response.json();

  if (commits.length === 0) {
    throw new Error(
      `Repository "${repository}" has no commits.`
    );
  }

  return commits[0];
}