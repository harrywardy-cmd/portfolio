import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { Container } from "@/components/layout/Container";
import { BackButton } from "@/components/ui/BackButton";
import { formatPostDate, getPost, getPosts } from "@/lib/blog";

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export const dynamicParams = false;

export async function generateStaticParams() {
  const posts = await getPosts();

  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;

  const post = await getPost(slug);

  if (!post) {
    return {};
  }

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      type: "article",
      publishedTime: post.date,
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;

  const post = await getPost(slug);

  if (!post) {
    notFound();
  }

  const { Content } = post;

  return (
    <div className="py-20 lg:py-24">
      <Container>
        <article className="mx-auto max-w-3xl">
          <BackButton />

          <header className="mt-8">
            <time
              dateTime={post.date}
              className="text-sm text-muted-foreground"
            >
              {formatPostDate(post.date)}
            </time>

            <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
              {post.title}
            </h1>

            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              {post.description}
            </p>
          </header>

          <div className="prose prose-neutral mt-12 max-w-none dark:prose-invert prose-headings:tracking-tight prose-a:text-primary prose-pre:rounded-xl prose-pre:border prose-pre:border-border/60">
            <Content />
          </div>
        </article>
      </Container>
    </div>
  );
}
