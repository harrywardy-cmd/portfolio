import { describe, expect, it, vi } from "vitest";

import { GET } from "@/app/rss.xml/route";

vi.mock("@/lib/blog", () => ({
  getPosts: vi.fn(async () => [
    {
      slug: "tips-&-tricks",
      title: "Tips & <Tricks>",
      description: 'Using "quotes" safely',
      date: "2026-09-24",
      tags: ["Next.js"],
      readingTime: 3,
    },
  ]),
}));

describe("RSS feed", () => {
  it("serves an RSS 2.0 feed of published posts", async () => {
    const response = await GET();

    expect(response.headers.get("content-type")).toContain(
      "application/rss+xml"
    );

    const xml = await response.text();

    expect(xml).toMatch(/^<\?xml version="1.0" encoding="UTF-8"\?>/);
    expect(xml).toContain('<rss version="2.0"');
    expect(xml).toContain("<title>Tips &amp; &lt;Tricks&gt;</title>");
    expect(xml).toContain(
      "<description>Using &quot;quotes&quot; safely</description>"
    );
    expect(xml).toContain("<pubDate>Thu, 24 Sep 2026 00:00:00 GMT</pubDate>");
    expect(xml).toContain("<category>Next.js</category>");
    expect(xml).toMatch(/<link>https?:\/\/[^<]+\/blog\/tips-&amp;-tricks<\/link>/);
  });
});
