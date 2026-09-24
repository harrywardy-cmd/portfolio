import { beforeEach, describe, expect, it, vi } from "vitest";

import { getContributionStats } from "@/lib/github-graphql";

import { jsonResponse, mockFetch, requestBody } from "../helpers";

const days = (...counts: number[]) =>
  counts.map((contributionCount) => ({ contributionCount }));

function calendarResponse() {
  return jsonResponse({
    data: {
      user: {
        contributionsCollection: {
          contributionYears: [2026, 2025],
          contributionCalendar: {
            totalContributions: 670,
            // Streak runs across a week boundary: 2 + 3 = 5 days.
            weeks: [
              { contributionDays: days(1, 0, 4, 1, 0, 2, 2) },
              { contributionDays: days(1, 3, 1, 0, 1) },
            ],
          },
        },
      },
    },
  });
}

function yearlyTotalsResponse() {
  return jsonResponse({
    data: {
      user: {
        y2026: { contributionCalendar: { totalContributions: 560 } },
        y2025: { contributionCalendar: { totalContributions: 231 } },
      },
    },
  });
}

describe("getContributionStats", () => {
  beforeEach(() => {
    vi.stubEnv("GITHUB_TOKEN", "test-token");
  });

  it("sums every year and finds the longest streak", async () => {
    const fetchMock = mockFetch(calendarResponse(), yearlyTotalsResponse());

    await expect(getContributionStats()).resolves.toEqual({
      total: 791,
      lastYear: 670,
      longestStreak: 5,
    });

    // The second query asks for one aliased collection per year.
    const { query } = requestBody(fetchMock, 1);

    expect(query).toContain("y2026: contributionsCollection");
    expect(query).toContain("y2025: contributionsCollection");
  });

  it("sends the token and username", async () => {
    const fetchMock = mockFetch(calendarResponse(), yearlyTotalsResponse());

    await getContributionStats();

    const [, init] = fetchMock.mock.calls[0];

    expect(init?.headers).toMatchObject({
      Authorization: "Bearer test-token",
    });
    expect(requestBody(fetchMock).variables).toEqual({
      login: "harrywardy-cmd",
    });
  });

  it("throws without a token instead of calling the API", async () => {
    vi.stubEnv("GITHUB_TOKEN", "");
    const fetchMock = mockFetch();

    await expect(getContributionStats()).rejects.toThrow("GITHUB_TOKEN");
    expect(fetchMock).not.toHaveBeenCalled();
  });

  it("throws on GraphQL errors", async () => {
    mockFetch(jsonResponse({ errors: [{ message: "Bad credentials" }] }));

    await expect(getContributionStats()).rejects.toThrow("Bad credentials");
  });
});
