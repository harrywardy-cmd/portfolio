import fs from "node:fs";
import path from "node:path";

import { describe, expect, it } from "vitest";

import { projects } from "@/content/projects";
import { findProjectByRepository, getProjectImage } from "@/lib/projects";

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
