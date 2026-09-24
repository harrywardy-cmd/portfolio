import { describe, expect, it } from "vitest";

import {
  getLatestRepository,
  getProjects,
  getRecentCommits,
} from "@/lib/github";

import { jsonResponse, mockFetch } from "../helpers";

const repo = (
  name: string,
  updated_at: string,
  extra: { fork?: boolean; archived?: boolean } = {}
) => ({ name, updated_at, fork: false, archived: false, ...extra });

describe("getProjects", () => {
  it("drops forks and archived repos and sorts newest first", async () => {
    mockFetch(
      jsonResponse([
        repo("old", "2025-01-01T00:00:00Z"),
        repo("forked", "2026-06-01T00:00:00Z", { fork: true }),
        repo("new", "2026-09-01T00:00:00Z"),
        repo("archived", "2026-08-01T00:00:00Z", { archived: true }),
      ])
    );

    const projects = await getProjects();

    expect(projects.map((project) => project.name)).toEqual(["new", "old"]);
  });

  it("throws on an HTTP error", async () => {
    mockFetch(jsonResponse({ message: "rate limited" }, 403));

    await expect(getProjects()).rejects.toThrow("403");
  });
});

describe("getLatestRepository", () => {
  it("returns the most recently updated project", async () => {
    mockFetch(
      jsonResponse([
        repo("older", "2025-01-01T00:00:00Z"),
        repo("latest", "2026-09-01T00:00:00Z"),
      ])
    );

    await expect(getLatestRepository()).resolves.toMatchObject({
      name: "latest",
    });
  });

  it("throws when there are no public projects", async () => {
    mockFetch(jsonResponse([]));

    await expect(getLatestRepository()).rejects.toThrow(
      "No public repositories"
    );
  });
});

describe("getRecentCommits", () => {
  it("requests the given repository and limit", async () => {
    const fetchMock = mockFetch(jsonResponse([]));

    await getRecentCommits("portfolio", 3);

    expect(fetchMock.mock.calls[0][0]).toBe(
      "https://api.github.com/repos/harrywardy-cmd/portfolio/commits?per_page=3"
    );
  });
});
