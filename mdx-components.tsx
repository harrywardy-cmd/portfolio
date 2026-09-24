import type { MDXComponents } from "mdx/types";
import Link from "next/link";

// Required by @next/mdx. Post styling comes from the `prose` wrapper
// in app/blog/[slug]/page.tsx; this only swaps in Next.js links.
const components: MDXComponents = {
  a: ({ href = "", ...props }) =>
    href.startsWith("/") ? (
      <Link href={href} {...props} />
    ) : (
      <a href={href} target="_blank" rel="noopener noreferrer" {...props} />
    ),
};

export function useMDXComponents(): MDXComponents {
  return components;
}
