import { getPost, getPosts } from "@/lib/blog";
import { OG_SIZE, renderCover } from "@/lib/og";

export const alt = "Blog post by Harry Ward";
export const size = OG_SIZE;
export const contentType = "image/png";

export async function generateStaticParams() {
  const posts = await getPosts();

  return posts.map((post) => ({ slug: post.slug }));
}

export default async function BlogPostOpengraphImage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const post = await getPost(slug);

  return renderCover({
    eyebrow: post ? `Blog · ${post.readingTime} min read` : "Blog",
    title: post?.title ?? "Blog",
    description: post?.description,
    tags: post?.tags,
  });
}
