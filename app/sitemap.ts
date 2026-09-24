import type { MetadataRoute } from "next";

import { projects } from "@/content/projects";
import { projectMetadata } from "@/content/projectMetadata";
import { siteConfig } from "@/lib/site";

const routes = [
  "",
  "/projects",
  "/experience",
  "/algorithms",
  "/resume",
  "/contact",
  "/blog",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const projectRoutes = projects
    .filter((project) => projectMetadata[project.slug])
    .map((project) => `/projects/${project.slug}`);

  return [...routes, ...projectRoutes].map((route) => ({
    url: `${siteConfig.url}${route}`,
  }));
}
