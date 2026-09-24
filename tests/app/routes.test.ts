import { describe, expect, it } from "vitest";

import { generateStaticParams } from "@/app/projects/[slug]/page";
import robots from "@/app/robots";
import sitemap from "@/app/sitemap";
import { projectMetadata } from "@/content/projectMetadata";
import { projects } from "@/content/projects";

describe("content", () => {
  it("has unique project slugs", () => {
    const slugs = projects.map((project) => project.slug);

    expect(new Set(slugs).size).toBe(slugs.length);
  });

  it("has detail metadata for every listed project (cards link to it)", () => {
    for (const { slug } of projects) {
      expect(projectMetadata, `projectMetadata["${slug}"]`).toHaveProperty([
        slug,
      ]);
    }
  });

  it("only has detail metadata for projects that are listed", () => {
    const slugs = new Set(projects.map((project) => project.slug));

    for (const slug of Object.keys(projectMetadata)) {
      expect(slugs, `projectMetadata["${slug}"]`).toContain(slug);
    }
  });
});

describe("generateStaticParams", () => {
  it("pre-renders every project that has detail metadata", () => {
    const params = generateStaticParams();

    expect(params.length).toBeGreaterThan(0);

    for (const { slug } of params) {
      expect(projectMetadata[slug]).toBeDefined();
    }
  });
});

describe("sitemap", () => {
  it("lists the main pages and every project page once", () => {
    const urls = sitemap().map((entry) => new URL(entry.url).pathname);

    expect(urls).toEqual(
      expect.arrayContaining(["/", "/projects", "/resume", "/contact"])
    );

    for (const { slug } of generateStaticParams()) {
      expect(urls).toContain(`/projects/${slug}`);
    }

    expect(new Set(urls).size).toBe(urls.length);
  });
});

describe("robots", () => {
  it("allows crawling, blocks the API and links the sitemap", () => {
    const result = robots();

    expect(result.rules).toMatchObject({ allow: "/", disallow: "/api/" });
    expect(result.sitemap).toMatch(/\/sitemap\.xml$/);
  });
});
