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

/**
 * Repository names that should appear in the featured
 * projects section.
 */
const FEATURED_PROJECTS = [
  "portfolio",
  "calorie-compass",
  "crud-app",
  "lazuli-web",
];

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

  const repositories: GitHubRepository[] =
    await response.json();

  return repositories;
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
 * Returns the repositories marked as featured.
 */
export async function getFeaturedProjects(): Promise<GitHubRepository[]> {
  const projects = await getProjects();

  return FEATURED_PROJECTS
    .map((name) =>
      projects.find(
        (project) => project.name.toLowerCase() === name
      )
    )
    .filter(
      (project): project is GitHubRepository =>
        project !== undefined
    );
}

/**
 * Returns a single repository by slug.
 */
export async function getProject(
  slug: string
): Promise<GitHubRepository | undefined> {
  const projects = await getProjects();

  return projects.find(
    (repository) =>
      repository.name.toLowerCase() ===
      slug.toLowerCase()
  );
}

/**
 * Returns the total number of projects.
 */
export async function getProjectCount(): Promise<number> {
  const projects = await getProjects();

  return projects.length;
}

/**
 * Returns the total number of public repositories.
 */
export async function getRepositoryCount(): Promise<number> {
  const repositories = await getRepositories();

  return repositories.length;
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

/**
 * Converts a GitHub commit date into a readable relative time.
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

