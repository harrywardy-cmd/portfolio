import { beforeEach, describe, expect, it, vi } from "vitest";

import {
  formatCount,
  getHeroStats,
  getLatestProject,
  nextMilestone,
} from "@/lib/dashboard";
import { getLatestRepository, getProjects } from "@/lib/github";
import { getContributionStats } from "@/lib/github-graphql";
import { getLeetCodeStats } from "@/lib/leetcode";

vi.mock("@/lib/github", () => ({
  getProjects: vi.fn(),
  getLatestRepository: vi.fn(),
}));
vi.mock("@/lib/github-graphql", () => ({ getContributionStats: vi.fn() }));
vi.mock("@/lib/leetcode", () => ({ getLeetCodeStats: vi.fn() }));

describe("formatCount", () => {
  it("adds a plus sign to live counts", () => {
    expect(formatCount(85)).toBe("85+");
    expect(formatCount(0)).toBe("0+");
  });

  it("shows a dash when the count is unavailable", () => {
    expect(formatCount(null)).toBe("—");
    expect(formatCount(undefined)).toBe("—");
  });

  it("uses the fallback when the count is unavailable", () => {
    expect(formatCount(null, 85)).toBe("85+");
    expect(formatCount(120, 85)).toBe("120+");
  });
});

describe("nextMilestone", () => {
  it.each([
    [0, 50],
    [49, 50],
    [85, 100],
    [100, 150],
    [149, 150],
  ])("%i → %i", (value, milestone) => {
    expect(nextMilestone(value)).toBe(milestone);
  });

  it("supports a custom step", () => {
    expect(nextMilestone(85, 25)).toBe(100);
  });
});

describe("getHeroStats", () => {
  beforeEach(() => {
    vi.spyOn(console, "error").mockImplementation(() => {});
  });

  it("combines live stats from every source", async () => {
    vi.mocked(getProjects).mockResolvedValue(new Array(17).fill({}));
    vi.mocked(getContributionStats).mockResolvedValue({
      total: 802,
      lastYear: 670,
      longestStreak: 25,
      weeks: [],
    });
    vi.mocked(getLeetCodeStats).mockResolvedValue({
      solved: 85,
      easy: 58,
      medium: 24,
      hard: 3,
      activeDays: 69,
      streak: 8,
      topics: 27,
    });

    await expect(getHeroStats()).resolves.toEqual({
      projects: 17,
      contributions: 802,
      algorithms: 85,
      degree: "B.CompSci",
    });
  });

  it("returns null for failing sources without throwing", async () => {
    vi.mocked(getProjects).mockRejectedValue(new Error("rate limited"));
    vi.mocked(getContributionStats).mockRejectedValue(new Error("no token"));
    vi.mocked(getLeetCodeStats).mockRejectedValue(new Error("down"));

    await expect(getHeroStats()).resolves.toEqual({
      projects: null,
      contributions: null,
      algorithms: null,
      degree: "B.CompSci",
    });
    expect(console.error).toHaveBeenCalledTimes(3);
  });
});

describe("getLatestProject", () => {
  const repository = (name: string, description: string | null = null) =>
    ({
      name,
      description,
      html_url: `https://github.com/harrywardy-cmd/${name}`,
    }) as Awaited<ReturnType<typeof getLatestRepository>>;

  it("links to the portfolio page when the repo is a listed project", async () => {
    vi.mocked(getLatestRepository).mockResolvedValue(
      repository("Python-Calculator")
    );

    await expect(getLatestProject()).resolves.toMatchObject({
      title: "Python Calculator",
      href: "/projects/python-calculator",
    });
  });

  it("links to GitHub for repos that aren't listed", async () => {
    vi.mocked(getLatestRepository).mockResolvedValue(
      repository("scratch-repo", "Experiments")
    );

    await expect(getLatestProject()).resolves.toEqual({
      title: "scratch-repo",
      description: "Experiments",
      href: "https://github.com/harrywardy-cmd/scratch-repo",
    });
  });

  it("returns null when GitHub is unavailable", async () => {
    vi.spyOn(console, "error").mockImplementation(() => {});
    vi.mocked(getLatestRepository).mockRejectedValue(new Error("down"));

    await expect(getLatestProject()).resolves.toBeNull();
  });
});
