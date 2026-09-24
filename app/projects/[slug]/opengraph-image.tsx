import { projects } from "@/content/projects";
import { OG_SIZE, renderCover } from "@/lib/og";

export const alt = "Project by Harry Ward";
export const size = OG_SIZE;
export const contentType = "image/png";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default async function ProjectOpengraphImage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const project = projects.find((project) => project.slug === slug);

  return renderCover({
    eyebrow: project?.inProgress ? "Project · In progress" : "Project",
    title: project?.title ?? "Project",
    description: project?.description,
    tags: project?.technologies,
  });
}
