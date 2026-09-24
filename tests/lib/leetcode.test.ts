import { describe, expect, it } from "vitest";

import { getLeetCodeStats } from "@/lib/leetcode";

import { jsonResponse, mockFetch, requestBody } from "../helpers";

const profile = {
  data: {
    matchedUser: {
      submitStats: {
        acSubmissionNum: [
          { difficulty: "All", count: 85 },
          { difficulty: "Easy", count: 58 },
          { difficulty: "Medium", count: 24 },
          { difficulty: "Hard", count: 3 },
        ],
      },
      userCalendar: { streak: 8, totalActiveDays: 69 },
      tagProblemCounts: {
        advanced: [{ problemsSolved: 2 }, { problemsSolved: 0 }],
        intermediate: [{ problemsSolved: 5 }],
        fundamental: [{ problemsSolved: 10 }, { problemsSolved: 0 }],
      },
    },
  },
};

describe("getLeetCodeStats", () => {
  it("parses solved counts, activity and topics", async () => {
    const fetchMock = mockFetch(jsonResponse(profile));

    await expect(getLeetCodeStats()).resolves.toEqual({
      solved: 85,
      easy: 58,
      medium: 24,
      hard: 3,
      activeDays: 69,
      streak: 8,
      topics: 3,
    });

    expect(requestBody(fetchMock).variables).toEqual({
      username: "harryward",
    });
  });

  it("defaults missing calendar and tag data to zero", async () => {
    mockFetch(
      jsonResponse({
        data: {
          matchedUser: {
            ...profile.data.matchedUser,
            userCalendar: null,
            tagProblemCounts: null,
          },
        },
      })
    );

    const stats = await getLeetCodeStats();

    expect(stats).toMatchObject({ activeDays: 0, streak: 0, topics: 0 });
  });

  it("throws when the user does not exist", async () => {
    mockFetch(jsonResponse({ data: { matchedUser: null } }));

    await expect(getLeetCodeStats()).rejects.toThrow("not found");
  });

  it("throws on an HTTP error", async () => {
    mockFetch(jsonResponse({}, 429));

    await expect(getLeetCodeStats()).rejects.toThrow("429");
  });
});
