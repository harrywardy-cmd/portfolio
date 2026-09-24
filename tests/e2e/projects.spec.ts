import { expect, test } from "@playwright/test";

test.describe("projects", () => {
  test("filters projects by category", async ({ page }) => {
    await page.goto("/projects");

    const python = page.getByRole("button", { name: "Python", exact: true });

    await python.click();
    await expect(python).toHaveAttribute("aria-pressed", "true");

    await expect(
      page.getByRole("heading", { name: "Python Calculator" })
    ).toBeVisible();
    await expect(
      page.getByRole("heading", { name: "Calorie Compass" })
    ).toHaveCount(0);

    await page.getByRole("button", { name: "All", exact: true }).click();
    await expect(
      page.getByRole("heading", { name: "Calorie Compass" })
    ).toBeVisible();
  });

  test("searches and filters by technology", async ({ page }) => {
    await page.goto("/projects");

    const count = page.getByText(/^Showing \d+ of \d+ projects$/);

    await page.getByLabel("Search projects").fill("gemini");

    await expect(count).toHaveText(/^Showing 1 of/);
    await expect(
      page.getByRole("heading", { name: "Calorie Compass" })
    ).toBeVisible();

    await page.getByRole("button", { name: "Clear filters" }).first().click();
    await expect(page.getByLabel("Search projects")).toHaveValue("");

    await page.getByLabel("Filter by technology").selectOption("Prisma");

    await expect(
      page.getByRole("heading", { name: "Calorie Compass" })
    ).toBeVisible();
    await expect(
      page.getByRole("heading", { name: "Python Calculator" })
    ).toHaveCount(0);

    await page.getByLabel("Search projects").fill("zzz-no-match");
    await expect(page.getByText("No projects found")).toBeVisible();
  });

  test("marks work-in-progress projects", async ({ page }) => {
    await page.goto("/projects");

    const card = page.locator("article", {
      has: page.getByRole("heading", { name: "Music App" }),
    });

    await expect(card.getByText("In Progress")).toBeVisible();
  });

  test("featured projects have a full write-up", async ({ page }) => {
    await page.goto("/projects/calorie-compass");

    await expect(
      page.getByRole("heading", { level: 1, name: "Calorie Compass" })
    ).toBeVisible();

    for (const section of [
      "Architecture",
      "Key Decisions",
      "What I'd Do Differently",
    ]) {
      await expect(
        page.getByRole("heading", { level: 2, name: section })
      ).toBeVisible();
    }

    await expect(
      page.getByRole("list", { name: "Architecture diagram" })
    ).toContainText("Next.js server");
  });

  test("unknown projects return 404", async ({ page }) => {
    const response = await page.goto("/projects/not-a-real-project");

    expect(response?.status()).toBe(404);
  });

  test("project reports open as PDFs", async ({ page, request }) => {
    await page.goto("/projects/serverless-event-driven-architecture");

    const href = await page
      .getByRole("link", { name: /View Report/ })
      .first()
      .getAttribute("href");

    const response = await request.get(href!);

    expect(response.ok()).toBe(true);
    expect(response.headers()["content-type"]).toContain("application/pdf");
  });
});
