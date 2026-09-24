import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

// Automated WCAG 2.1 A/AA checks. These catch a large share of common
// problems (contrast, labels, landmarks, names), not everything.
const pages = [
  "/",
  "/projects",
  "/projects/calorie-compass",
  "/algorithms",
  "/blog",
  "/blog/how-the-live-stats-work",
  "/experience",
  "/resume",
  "/contact",
];

for (const theme of ["light", "dark"] as const) {
  test.describe(`accessibility (${theme})`, () => {
    // The site defaults to dark, so set the saved choice next-themes reads.
    test.beforeEach(async ({ page }) => {
      await page.addInitScript((value) => {
        localStorage.setItem("theme", value);
      }, theme);
    });

    for (const path of pages) {
      test(`${path} has no detectable violations`, async ({ page }) => {
        await page.goto(path);

        const isDark = await page
          .locator("html")
          .evaluate((html) => html.classList.contains("dark"));

        expect(isDark).toBe(theme === "dark");

        const { violations } = await new AxeBuilder({ page })
          .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"])
          .analyze();

        const summary = violations.map(
          (violation) =>
            `${violation.id} (${violation.impact}): ${violation.help}\n` +
            violation.nodes
              .slice(0, 3)
              .map((node) => `    ${node.target.join(" ")}`)
              .join("\n")
        );

        expect(summary).toEqual([]);
      });
    }
  });
}
