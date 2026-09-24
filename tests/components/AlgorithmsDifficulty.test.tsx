import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";

import { AlgorithmsDifficulty } from "@/components/sections/algorithms/AlgorithmsDifficulty";

const text = (html: string) =>
  html.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ");

describe("AlgorithmsDifficulty", () => {
  it("shows counts, percentages and proportional bars", () => {
    const html = renderToStaticMarkup(
      <AlgorithmsDifficulty stats={{ easy: 58, medium: 24, hard: 3 }} />
    );

    expect(text(html)).toContain("85 accepted");
    expect(text(html)).toContain("Easy 58 68%");
    expect(text(html)).toContain("Medium 24 28%");
    expect(text(html)).toContain("Hard 3 4%");
    expect(html).toContain('aria-label="58 Easy, 24 Medium, 3 Hard"');
    expect(html).toContain(`width:${(58 / 85) * 100}%`);
  });

  it("hides empty difficulties from the bar", () => {
    const html = renderToStaticMarkup(
      <AlgorithmsDifficulty stats={{ easy: 4, medium: 0, hard: 0 }} />
    );

    expect(html.match(/style="width:/g)).toHaveLength(1);
  });

  it("renders nothing with no solved problems", () => {
    expect(
      renderToStaticMarkup(
        <AlgorithmsDifficulty stats={{ easy: 0, medium: 0, hard: 0 }} />
      )
    ).toBe("");
  });
});
