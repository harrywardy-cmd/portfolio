import type { MDXComponents } from "mdx/types";
import Link from "next/link";

// Required by @next/mdx. Post styling comes from the `prose` wrapper
// in app/blog/[slug]/page.tsx; this swaps in Next.js links and makes
// code blocks keyboard-scrollable.
const components: MDXComponents = {
  // Wide code scrolls sideways, so it must be reachable by keyboard.
  pre: (props) => <pre tabIndex={0} {...props} />,
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
