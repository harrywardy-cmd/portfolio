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

  const commits: GitHubCommit[] = await response.json();

  if (commits.length === 0) {
    throw new Error(
      `Repository "${repository}" has no commits.`
    );
  }

  return commits;
}

/**
 * Converts a GitHub commit date into a human-readable relative time.
 */
export function getRelativeTime(date: string): string {
  const now = Date.now();
  const then = new Date(date).getTime();

  const seconds = Math.floor((now - then) / 1000);

  if (seconds < 60) {
    return "Just now";
  }

  const minutes = Math.floor(seconds / 60);

  if (minutes < 60) {
    return `${minutes} minute${minutes === 1 ? "" : "s"} ago`;
  }

  const hours = Math.floor(minutes / 60);

  if (hours < 24) {
    return `${hours} hour${hours === 1 ? "" : "s"} ago`;
  }

  const days = Math.floor(hours / 24);

  if (days === 1) {
    return "Yesterday";
  }

  if (days < 7) {
    return `${days} days ago`;
  }

  return new Date(date).toLocaleDateString("en-AU", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}