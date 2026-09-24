import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it, vi } from "vitest";

import { GitHubContributionGraph } from "@/components/sections/github/GitHubContributionGraph";
import { getGitHubStats } from "@/lib/dashboard";
import type { ContributionDay } from "@/lib/github-graphql";

vi.mock("@/lib/dashboard", () => ({ getGitHubStats: vi.fn() }));

const day = (date: string, count: number): ContributionDay => ({
  date,
  count,
  level: count === 0 ? "NONE" : "FOURTH_QUARTILE",
});

async function render() {
  return renderToStaticMarkup(await GitHubContributionGraph());
}

describe("GitHubContributionGraph", () => {
  it("places each day in its weekday row", async () => {
    vi.mocked(getGitHubStats).mockResolvedValue({
      total: 10,
      lastYear: 3,
      longestStreak: 1,
      // 2026-09-23 is a Wednesday, so the week starts mid-column.
      weeks: [[day("2026-09-23", 1), day("2026-09-24", 0)]],
    });

    const html = await render();

    expect(html).toContain("3 contributions in the last year.");
    expect(html.match(/title="/g)).toHaveLength(2);
    expect(html).toMatch(
      /title="1 contribution on 23 Sept 2026"[^>]*grid-row:5/
    );
    expect(html).toMatch(
      /title="No contributions on 24 Sept 2026"[^>]*grid-row:6/
    );
  });

  it("labels months, skipping one too short to fit", async () => {
    const week = (date: string) => [day(date, 0)];

    vi.mocked(getGitHubStats).mockResolvedValue({
      total: 0,
      lastYear: 0,
      longestStreak: 0,
      weeks: [
        week("2026-08-30"), // Aug: 1 week before Sept starts
        week("2026-09-06"),
        week("2026-09-13"),
        week("2026-09-20"),
      ],
    });

    const html = await render();

    expect(html).not.toContain(">Aug<");
    expect(html).toContain(">Sept<");
  });

  it("shows a message when GitHub is unavailable", async () => {
    vi.mocked(getGitHubStats).mockResolvedValue(null);

    const html = await render();

    expect(html).toContain("Contribution data is temporarily unavailable.");
  });
});
