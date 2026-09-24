import fs from "node:fs";

import { beforeEach, describe, expect, it, vi } from "vitest";

// Stand-ins for MDX modules, keyed by slug.
const posts = vi.hoisted(
  () =>
    ({}) as Record<
      string,
      { default: () => null; metadata: Record<string, unknown> }
    >
);

vi.mock("node:fs", async (importOriginal) => {
  const actual = await importOriginal<typeof import("node:fs")>();

  return {
    default: {
      ...actual,
      existsSync: () => true,
      readFileSync: () => "word ".repeat(450),
      readdirSync: vi.fn(() =>
        Object.keys(posts).map((slug) => `${slug}.mdx`)
      ),
    },
  };
});

vi.mock("@/lib/blog-content", () => ({
  loadPost: async (slug: string) => posts[slug],
}));

function addPost(slug: string, metadata: Record<string, unknown>) {
  posts[slug] = { default: () => null, metadata };
}

async function loadBlog() {
  vi.resetModules();

  return import("@/lib/blog");
}

describe("blog", () => {
  beforeEach(() => {
    for (const slug of Object.keys(posts)) {
      delete posts[slug];
    }

    vi.mocked(fs.readdirSync).mockClear();

    addPost("older", {
      title: "Older",
      description: "",
      date: "2026-01-10",
    });
    addPost("newer", {
      title: "Newer",
      description: "",
      date: "2026-05-02",
    });
    addPost("unfinished", {
      title: "Unfinished",
      description: "",
      date: "2026-09-01",
      draft: true,
    });
  });

  it("lists published posts newest first and hides drafts", async () => {
    const { getPosts } = await loadBlog();

    const slugs = (await getPosts()).map((post) => post.slug);

    expect(slugs).toEqual(["newer", "older"]);
  });

  it("shows drafts in development", async () => {
    vi.stubEnv("NODE_ENV", "development");

    const { getPosts } = await loadBlog();

    const slugs = (await getPosts()).map((post) => post.slug);

    expect(slugs).toEqual(["unfinished", "newer", "older"]);
  });

  it("returns a published post with its content", async () => {
    const { getPost } = await loadBlog();

    const post = await getPost("newer");

    expect(post).toMatchObject({
      slug: "newer",
      title: "Newer",
      readingTime: 2,
    });
    expect(post?.Content).toBeTypeOf("function");
  });

  it("does not return drafts or unknown posts", async () => {
    const { getPost } = await loadBlog();

    await expect(getPost("unfinished")).resolves.toBeUndefined();
    await expect(getPost("missing")).resolves.toBeUndefined();
  });

  it("estimates reading time from prose only", async () => {
    const { getReadingTime } = await loadBlog();

    const metadata = [
      "export const metadata = {",
      `  title: "${"skip ".repeat(500)}",`,
      "};",
      "",
    ].join("\n");

    const code = ["```ts", "code ".repeat(1000), "```", ""].join("\n");

    expect(getReadingTime(metadata + "word ".repeat(600) + code)).toBe(3);
    expect(getReadingTime("Just a few words.")).toBe(1);
  });

  it("formats dates without timezone drift", async () => {
    const { formatPostDate } = await loadBlog();

    expect(formatPostDate("2026-09-24")).toBe("24 September 2026");
  });
});
