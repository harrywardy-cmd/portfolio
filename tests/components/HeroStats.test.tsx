import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it, vi } from "vitest";

import { HeroStats } from "@/components/sections/hero/HeroStats";
import { getHeroStats } from "@/lib/dashboard";

vi.mock("@/lib/dashboard", async (importOriginal) => ({
  ...(await importOriginal<typeof import("@/lib/dashboard")>()),
  getHeroStats: vi.fn(),
}));

/** Renders an async server component to plain text. */
async function renderText() {
  const html = renderToStaticMarkup(await HeroStats());

  return html.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ");
}

describe("HeroStats", () => {
  it("shows live counts", async () => {
    vi.mocked(getHeroStats).mockResolvedValue({
      projects: 17,
      contributions: 802,
      algorithms: 85,
      degree: "B.CompSci",
    });

    const text = await renderText();

    expect(text).toContain("17+ Projects Built");
    expect(text).toContain("802+ GitHub Contributions");
    expect(text).toContain("85+ Algorithms Solved");
    expect(text).toContain("B.CompSci Graduate");
  });

  it("shows a dash for unavailable counts", async () => {
    vi.mocked(getHeroStats).mockResolvedValue({
      projects: 17,
      contributions: null,
      algorithms: null,
      degree: "B.CompSci",
    });

    const text = await renderText();

    expect(text).toContain("17+ Projects Built");
    expect(text).toContain("— GitHub Contributions");
    expect(text).toContain("— Algorithms Solved");
  });
});
