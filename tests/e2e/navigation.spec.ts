import { expect, test } from "@playwright/test";

test.describe("home page", () => {
  test("shows the hero, live stats and dashboard", async ({ page }) => {
    await page.goto("/");

    await expect(page.getByRole("heading", { level: 1 })).toBeVisible();

    // Live stats show a number, or a dash if an API is unavailable.
    for (const label of [
      "Projects Built",
      "GitHub Contributions",
      "Algorithms Solved",
    ]) {
      // The hero lists these first; the GitHub dashboard repeats one below.
      const stat = page
        .getByText(label, { exact: true })
        .first()
        .locator("..");

      await expect(stat).toContainText(/(\d+\+|—)/);
    }

    await expect(page.getByText("Current Project", { exact: true })).toBeVisible();
    await expect(page.getByText("GitHub Contribution Graph")).toBeVisible();
  });

  test("links to a downloadable resume", async ({ page, request }) => {
    await page.goto("/");

    const links = page.getByRole("link", { name: /Download Resume/ });

    // Every "Download Resume" button must actually point at the PDF.
    await expect(links).not.toHaveCount(0);

    const hrefs = await links.evaluateAll((elements) =>
      elements.map((element) => element.getAttribute("href"))
    );

    for (const href of hrefs) {
      expect(href).toMatch(/\.pdf$/);

      const response = await request.get(href!);

      expect(response.ok()).toBe(true);
      expect(response.headers()["content-type"]).toContain("application/pdf");
    }
  });
});

test.describe("navigation", () => {
  test("desktop nav reaches every main page", async ({ page, isMobile }) => {
    test.skip(isMobile, "Desktop navigation is hidden on mobile");

    await page.goto("/");

    const nav = page.getByRole("banner");

    for (const [link, path] of [
      ["Projects", "/projects"],
      ["Algorithms", "/algorithms"],
      ["Blog", "/blog"],
      ["Experience", "/experience"],
    ] as const) {
      await nav.getByRole("link", { name: link, exact: true }).click();
      await expect(page).toHaveURL(path);
      await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
    }
  });

  test("mobile menu opens and navigates", async ({ page, isMobile }) => {
    test.skip(!isMobile, "The menu button only appears on small screens");

    await page.goto("/");

    await page.getByRole("button", { name: "Open navigation menu" }).click();

    await page
      .getByRole("navigation", { name: "Mobile navigation" })
      .getByRole("link", { name: "Projects", exact: true })
      .click();

    await expect(page).toHaveURL("/projects");
  });

  test("theme toggle switches between light and dark", async ({
    page,
    isMobile,
  }) => {
    test.skip(isMobile, "The theme toggle is in the desktop header");

    await page.goto("/");

    const html = page.locator("html");
    const toggle = page.getByRole("button", { name: "Toggle Theme" });

    const wasDark = await html.evaluate((el) => el.classList.contains("dark"));

    await toggle.click();
    await expect(html).toHaveClass(wasDark ? /^(?!.*\bdark\b)/ : /\bdark\b/);

    await toggle.click();
    await expect(html).toHaveClass(wasDark ? /\bdark\b/ : /^(?!.*\bdark\b)/);
  });

  test("unknown pages show the 404 page", async ({ page }) => {
    const response = await page.goto("/does-not-exist");

    expect(response?.status()).toBe(404);
    await expect(page.getByText("Page Not Found")).toBeVisible();
  });
});

test.describe("mobile layout", () => {
  for (const path of [
    "/",
    "/projects",
    "/projects/portfolio",
    "/algorithms",
    "/blog",
    "/blog/how-the-live-stats-work",
    "/experience",
    "/resume",
    "/contact",
  ]) {
    test(`${path} has no horizontal page scroll`, async ({ page, isMobile }) => {
      test.skip(!isMobile, "Only relevant on small screens");

      await page.goto(path);

      const { scrollWidth, clientWidth } = await page.evaluate(() => ({
        scrollWidth: document.documentElement.scrollWidth,
        clientWidth: document.documentElement.clientWidth,
      }));

      expect(scrollWidth).toBe(clientWidth);
    });
  }
});
