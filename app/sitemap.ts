import type { MetadataRoute } from "next";

import { projects } from "@/content/projects";
import { linkedInPosts } from "@/content/linkedin-posts";
import { projectMetadata } from "@/content/projectMetadata";
import { getPosts } from "@/lib/blog";
import { siteConfig } from "@/lib/site";

const routes = [
  "",
  "/projects",
  "/experience",
  "/algorithms",
  "/resume",
  "/contact",
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await getPosts();

  const projectRoutes = projects
    .filter((project) => projectMetadata[project.slug])
    .map((project) => `/projects/${project.slug}`);

  const blogRoutes = [
    ...(posts.length > 0 || linkedInPosts.length > 0 ? ["/blog"] : []),
    ...posts.map((post) => `/blog/${post.slug}`),
  ];

  return [...routes, ...projectRoutes, ...blogRoutes].map((route) => ({
    url: `${siteConfig.url}${route}`,
  }));
}
