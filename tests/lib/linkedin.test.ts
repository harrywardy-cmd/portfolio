import { describe, expect, it } from "vitest";

import { linkedInPosts } from "@/content/linkedin-posts";
import { getLinkedInEmbedUrl } from "@/lib/linkedin";

const EMBED = "https://www.linkedin.com/embed/feed/update/";

describe("getLinkedInEmbedUrl", () => {
  it.each([
    [
      "an embed URL",
      `${EMBED}urn:li:share:7234567890123456789`,
      `${EMBED}urn:li:share:7234567890123456789`,
    ],
    [
      "a feed update link",
      "https://www.linkedin.com/feed/update/urn:li:activity:7234567890123456789/",
      `${EMBED}urn:li:activity:7234567890123456789`,
    ],
    [
      "an encoded ugcPost link",
      "https://www.linkedin.com/feed/update/urn%3Ali%3AugcPost%3A7234567890123456789",
      `${EMBED}urn:li:ugcPost:7234567890123456789`,
    ],
    [
      'a "Copy link to post" URL',
      "https://www.linkedin.com/posts/harry-ward-b2b9b4319_nextjs-activity-7234567890123456789-AbCd?utm_source=share",
      `${EMBED}urn:li:activity:7234567890123456789`,
    ],
  ])("converts %s", (_label, url, expected) => {
    expect(getLinkedInEmbedUrl(url)).toBe(expected);
  });

  it.each([
    ["a profile link", "https://www.linkedin.com/in/harry-ward-b2b9b4319"],
    ["another site", "https://example.com/feed/update/urn:li:activity:1"],
    ["a lookalike domain", "https://notlinkedin.com/posts/x-activity-1-a"],
    ["not a URL", "activity-7234567890123456789"],
  ])("rejects %s", (_label, url) => {
    expect(getLinkedInEmbedUrl(url)).toBeNull();
  });
});

describe("linkedInPosts", () => {
  it("only contains links that can be embedded", () => {
    for (const post of linkedInPosts) {
      expect(getLinkedInEmbedUrl(post.url), post.url).not.toBeNull();
      expect(post.date).toMatch(/^\d{4}-\d{2}-\d{2}$/);
    }
  });
});
