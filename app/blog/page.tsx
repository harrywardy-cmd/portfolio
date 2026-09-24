import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Construction, Rss } from "lucide-react";

import { Container } from "@/components/layout/Container";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { LinkedInPosts } from "@/components/sections/blog/LinkedInPosts";
import { linkedInPosts } from "@/content/linkedin-posts";
import { formatPostDate, getPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Writing on software engineering projects, algorithms, system design, and lessons learned.",
};

export default async function BlogPage() {
  const posts = await getPosts();

  if (posts.length === 0 && linkedInPosts.length === 0) {
    return <BlogComingSoon />;
  }

  return (
    <div className="py-20 lg:py-24">
      <Container>
        <div className="mx-auto max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Blog
          </p>

          <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
            Writing
          </h1>

          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Notes on the projects I build, the problems I solve, and what I
            learn along the way.
          </p>

          <a
            href="/rss.xml"
            className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80"
          >
            <Rss className="h-4 w-4" />
            Subscribe via RSS
          </a>

          <div className="mt-12 space-y-6">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group block rounded-2xl border border-border/60 bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl"
              >
                <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                  <time dateTime={post.date}>{formatPostDate(post.date)}</time>

                  <span aria-hidden="true">·</span>

                  <span>{post.readingTime} min read</span>

                  {post.draft && (
                    <span className="rounded-full bg-amber-500/15 px-2.5 py-0.5 text-xs font-medium text-amber-600 dark:text-amber-400">
                      Draft
                    </span>
                  )}
                </div>

                <h2 className="mt-3 text-2xl font-semibold tracking-tight transition-colors group-hover:text-primary">
                  {post.title}
                </h2>

                <p className="mt-3 leading-7 text-muted-foreground">
                  {post.description}
                </p>

                <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                  Read post
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>

          <LinkedInPosts />
        </div>
      </Container>
    </div>
  );
}

function BlogComingSoon() {
  return (
    <div className="py-24">
      <Container>
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-primary/10 text-primary">
            <Construction className="h-10 w-10" />
          </div>

          <h1 className="mt-8 text-5xl font-bold tracking-tight">
            Blog Coming Soon
          </h1>

          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            I&apos;m currently working on a technical blog where I&apos;ll share
            software engineering projects, algorithms, system design, and
            lessons learned throughout my development journey.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/projects"
              className={cn(
                buttonVariants(),
                "group rounded-xl px-6 gap-2"
              )}
            >
              <span>View Projects</span>

              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>

            <Link
              href="/"
              className={cn(
                buttonVariants({ variant: "outline" }),
                "group rounded-xl px-6 gap-2"
              )}
            >
              <ArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" />

              <span>Back Home</span>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
}