import { FaLinkedinIn } from "react-icons/fa";

import { linkedInPosts } from "@/content/linkedin-posts";
import { formatPostDate } from "@/lib/blog";
import { getLinkedInEmbedUrl } from "@/lib/linkedin";
import { siteConfig } from "@/lib/site";

export function LinkedInPosts() {
  const posts = linkedInPosts
    .map((post) => ({ ...post, embedUrl: getLinkedInEmbedUrl(post.url) }))
    .filter((post) => post.embedUrl !== null)
    .sort((a, b) => b.date.localeCompare(a.date));

  if (posts.length === 0) {
    return null;
  }

  return (
    <section className="mt-20">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            LinkedIn
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight">
            From LinkedIn
          </h2>
        </div>

        <a
          href={siteConfig.links.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80"
        >
          <FaLinkedinIn />
          Follow on LinkedIn
        </a>
      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {posts.map((post) => (
          <figure key={post.url} className="space-y-3">
            <iframe
              src={post.embedUrl!}
              title={`LinkedIn post from ${formatPostDate(post.date)}`}
              loading="lazy"
              className="h-[560px] w-full rounded-2xl border border-border/60 bg-white"
              allowFullScreen
            />

            <figcaption className="text-sm text-muted-foreground">
              Posted {formatPostDate(post.date)} ·{" "}
              <a
                href={post.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                View on LinkedIn
              </a>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
