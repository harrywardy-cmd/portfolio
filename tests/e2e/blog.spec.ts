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

  test("shows reading time for every post", async ({ page }) => {
    await page.goto("/blog");

    const posts = page.locator("a[href^=\"/blog/\"]");

    await expect(posts).toHaveCount(3);

    for (const post of await posts.all()) {
      await expect(post).toContainText(/\d+ min read/);
    }
  });

  test("publishes an RSS feed and preview images", async ({ page, request }) => {
    const feed = await request.get("/rss.xml");

    expect(feed.headers()["content-type"]).toContain("application/rss+xml");
    expect(await feed.text()).toContain("How the Live Stats on This Site Work");

    await page.goto("/blog/how-the-live-stats-work");

    const image = await page
      .locator("meta[property=\"og:image\"]")
      .getAttribute("content");
    const response = await request.get(new URL(image!).pathname);

    expect(response.headers()["content-type"]).toBe("image/png");
  });

  test("is listed in the sitemap", async ({ request }) => {
    const sitemap = await (await request.get("/sitemap.xml")).text();

    expect(sitemap).toContain("/blog/how-the-live-stats-work");
  });
});
