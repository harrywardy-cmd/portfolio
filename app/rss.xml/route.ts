import { getPosts } from "@/lib/blog";
import { siteConfig } from "@/lib/site";

// Built once at build time, like the rest of the blog.
export const dynamic = "force-static";

function escapeXml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export async function GET() {
  const posts = await getPosts();

  const items = posts
    .map((post) => {
      const url = escapeXml(`${siteConfig.url}/blog/${post.slug}`);

      return `
    <item>
      <title>${escapeXml(post.title)}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <description>${escapeXml(post.description)}</description>
      <pubDate>${new Date(`${post.date}T00:00:00Z`).toUTCString()}</pubDate>${(
        post.tags ?? []
      )
        .map((tag) => `\n      <category>${escapeXml(tag)}</category>`)
        .join("")}
    </item>`;
    })
    .join("");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${escapeXml(`${siteConfig.name} — Blog`)}</title>
    <link>${siteConfig.url}/blog</link>
    <description>Notes on the projects I build, the problems I solve, and what I learn along the way.</description>
    <language>en-au</language>
    <atom:link href="${siteConfig.url}/rss.xml" rel="self" type="application/rss+xml" />${items}
  </channel>
</rss>
`;

  return new Response(xml, {
    headers: { "Content-Type": "application/rss+xml; charset=utf-8" },
  });
}
