import type { ComponentType } from "react";

import type { PostMetadata } from "./blog";

export interface PostModule {
  default: ComponentType;
  metadata: PostMetadata;
}

/** Loads a compiled MDX post. Kept separate so tests can replace it. */
export function loadPost(slug: string): Promise<PostModule> {
  return import(`@/content/blog/${slug}.mdx`);
}
