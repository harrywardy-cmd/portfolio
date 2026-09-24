import { expect, test } from "@playwright/test";

test.describe("blog", () => {
  test("lists published posts and opens one", async ({ page }) => {
    await page.goto("/blog");

    const post = page.getByRole("link", {
      name: /How the Live Stats on This Site Work/,
    });

    await expect(post).toBeVisible();
    await post.click();

    await expect(page).toHaveURL(/\/blog\/how-the-live-stats-work$/);
    await expect(
      page.getByRole("heading", {
        level: 1,
        name: "How the Live Stats on This Site Work",
      })
    ).toBeVisible();
    await expect(page.locator("article pre").first()).toBeVisible();
  });

  test("is listed in the sitemap", async ({ request }) => {
    const sitemap = await (await request.get("/sitemap.xml")).text();

    expect(sitemap).toContain("/blog/how-the-live-stats-work");
  });
});
