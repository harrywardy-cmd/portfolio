import fs from "node:fs";
import path from "node:path";

import { describe, expect, it } from "vitest";

import { projects } from "@/content/projects";
import {
  filterProjects,
  findProjectByRepository,
  getAllTechnologies,
  getProjectImage,
} from "@/lib/projects";

describe("findProjectByRepository", () => {
  it("matches repository names case-insensitively", () => {
    expect(findProjectByRepository("python-calculator")?.slug).toBe(
      "python-calculator"
    );
    expect(findProjectByRepository("JEFFLS-CONNECT")?.slug).toBe(
      "jeffls-connect"
    );
  });

  it("returns undefined for unlisted repositories", () => {
    expect(findProjectByRepository("not-a-project")).toBeUndefined();
  });
});

describe("getProjectImage", () => {
  it("uses the screenshot when a project has one", () => {
    expect(getProjectImage("calorie-compass")).toBe(
      "/images/projects/calorie-compass.png"
    );
  });

  it("falls back to the generated cover", () => {
    expect(getProjectImage("music-app")).toBe(
      "/projects/music-app/opengraph-image"
    );
  });

  it("only points at images that exist", () => {
    for (const { slug } of projects) {
      const image = getProjectImage(slug);

      if (image.startsWith("/images/")) {
        expect(
          fs.existsSync(path.join("public", image)),
          `${slug} → ${image}`
        ).toBe(true);
      }
    }
  });
});

describe("project documents", () => {
  it("only link to PDFs that exist", () => {
    for (const { slug, pdf } of projects) {
      if (pdf) {
        expect(fs.existsSync(path.join("public", pdf)), `${slug} → ${pdf}`).toBe(
          true
        );
      }
    }
  });
});

describe("filterProjects", () => {
  const all = { category: "All", query: "", technology: "" };
  const slugs = (filters: Partial<typeof all>) =>
    filterProjects(projects, { ...all, ...filters }).map((p) => p.slug);

  it("returns every project with no filters", () => {
    expect(slugs({})).toHaveLength(projects.length);
  });

  it("filters by category", () => {
    const result = slugs({ category: "Python" });

    expect(result).toContain("python-calculator");
    expect(result).not.toContain("calorie-compass");
  });

  it("searches title, description and technologies, case-insensitively", () => {
    expect(slugs({ query: "CALORIE" })).toEqual(["calorie-compass"]);
    // "Gemini API" only appears in the Calorie Compass write-up.
    expect(slugs({ query: "gemini" })).toEqual(["calorie-compass"]);
  });

  it("requires every search word to match", () => {
    expect(slugs({ query: "python flask" })).toEqual(["python-api"]);
    expect(slugs({ query: "python zzz-no-match" })).toEqual([]);
  });

  it("filters by exact technology, including write-up technologies", () => {
    const result = slugs({ technology: "Prisma" });

    expect(result).toEqual(
      expect.arrayContaining(["calorie-compass", "jeffls-connect"])
    );
    expect(result).not.toContain("portfolio");
  });

  it("combines filters", () => {
    expect(slugs({ category: "Web", technology: "Python" })).toEqual([]);
  });
});

describe("getAllTechnologies", () => {
  it("lists each technology once, most used first", () => {
    const technologies = getAllTechnologies(projects);

    expect(new Set(technologies).size).toBe(technologies.length);
    expect(technologies[0]).toBe("Python");
  });
});
