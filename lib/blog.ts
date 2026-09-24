import fs from "node:fs";
import path from "node:path";

import type { ComponentType } from "react";

import { loadPost } from "./blog-content";

/**
 * Blog posts live in `content/blog/<slug>.mdx` and export their metadata:
 *
 *   export const metadata = {
 *     title: "…",
 *     description: "…",
 *     date: "2026-09-24",
 *     draft: true, // hidden in production until set to false
 *   };
 */
export interface PostMetadata {
  title: string;
  description: string;
  /** ISO date, e.g. "2026-09-24". */
  date: string;
  tags?: string[];
  draft?: boolean;
}

export interface Post extends PostMetadata {
  slug: string;
  /** Estimated minutes to read. */
  readingTime: number;
}

const POSTS_DIRECTORY = path.join(process.cwd(), "content", "blog");

// Drafts are visible while developing so they can be previewed.
const SHOW_DRAFTS = process.env.NODE_ENV === "development";

const WORDS_PER_MINUTE = 200;

/**
 * Estimated reading time for an MDX source, counting prose only: the
 * metadata export and fenced code blocks are left out.
 */
export function getReadingTime(source: string): number {
  const prose = source
    .replace(/^export const metadata = \{[\s\S]*?\n\};?/m, "")
    .replace(/```[\s\S]*?```/g, "");

  const words = prose.split(/\s+/).filter((word) => /\w/.test(word)).length;

  return Math.max(1, Math.round(words / WORDS_PER_MINUTE));
}

function readSource(slug: string): string {
  return fs.readFileSync(path.join(POSTS_DIRECTORY, `${slug}.mdx`), "utf8");
}

function getSlugs(): string[] {
  if (!fs.existsSync(POSTS_DIRECTORY)) {
    return [];
  }

  return fs
    .readdirSync(POSTS_DIRECTORY)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => file.replace(/\.mdx$/, ""));
}

/** Published posts, newest first. */
export async function getPosts(): Promise<Post[]> {
  const posts = await Promise.all(
    getSlugs().map(async (slug) => ({
      slug,
      ...(await loadPost(slug)).metadata,
      readingTime: getReadingTime(readSource(slug)),
    }))
  );

  return posts
    .filter((post) => SHOW_DRAFTS || !post.draft)
    .sort((a, b) => b.date.localeCompare(a.date));
}

/** A published post and its rendered content, or `undefined`. */
export async function getPost(
  slug: string
): Promise<(Post & { Content: ComponentType }) | undefined> {
  if (!getSlugs().includes(slug)) {
    return undefined;
  }

  const { default: Content, metadata } = await loadPost(slug);

  if (metadata.draft && !SHOW_DRAFTS) {
    return undefined;
  }

  return {
    slug,
    ...metadata,
    readingTime: getReadingTime(readSource(slug)),
    Content,
  };
}

export function formatPostDate(date: string): string {
  return new Date(`${date}T00:00:00Z`).toLocaleDateString("en-AU", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
}
