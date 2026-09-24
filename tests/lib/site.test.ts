import { beforeEach, describe, expect, it, vi } from "vitest";

// `siteConfig.url` is resolved when the module loads, so re-import it per test.
async function loadSiteUrl() {
  const { siteConfig } = await import("@/lib/site");

  return siteConfig.url;
}

describe("siteConfig.url", () => {
  beforeEach(() => {
    vi.resetModules();
    vi.stubEnv("NEXT_PUBLIC_SITE_URL", "");
    vi.stubEnv("VERCEL_PROJECT_PRODUCTION_URL", "");
  });

  it("prefers NEXT_PUBLIC_SITE_URL and strips a trailing slash", async () => {
    vi.stubEnv("NEXT_PUBLIC_SITE_URL", "https://harryward.dev/");
    vi.stubEnv("VERCEL_PROJECT_PRODUCTION_URL", "portfolio.vercel.app");

    await expect(loadSiteUrl()).resolves.toBe("https://harryward.dev");
  });

  it("falls back to the Vercel production URL", async () => {
    vi.stubEnv("VERCEL_PROJECT_PRODUCTION_URL", "portfolio.vercel.app");

    await expect(loadSiteUrl()).resolves.toBe("https://portfolio.vercel.app");
  });

  it("falls back to localhost", async () => {
    await expect(loadSiteUrl()).resolves.toBe("http://localhost:3000");
  });
});
