import { OG_SIZE, renderCover } from "@/lib/og";

export const alt = "Harry Ward | Software Engineer";
export const size = OG_SIZE;
export const contentType = "image/png";

export default function OpengraphImage() {
  return renderCover({
    eyebrow: "Portfolio",
    title: "Harry Ward",
    description:
      "Software Engineer building scalable web applications, AI-powered tools, and modern developer experiences.",
  });
}
