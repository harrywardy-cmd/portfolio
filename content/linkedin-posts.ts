/**
 * LinkedIn posts shown on the blog page, newest first.
 *
 * LinkedIn doesn't let other sites read a personal profile's posts
 * automatically, so each post is added here by hand. On LinkedIn, open
 * the post's "⋯" menu and either:
 *
 * - "Copy link to post", or
 * - "Embed this post" and copy the `src` URL from the code it shows.
 *
 * Either link works. Posts must be public to display.
 */
export const linkedInPosts: {
  url: string;
  /** ISO date the post was published, e.g. "2026-09-24". */
  date: string;
}[] = [];
