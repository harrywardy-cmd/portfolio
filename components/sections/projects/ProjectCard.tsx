import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { FaGithub } from "react-icons/fa";

import { Badge } from "@/components/ui/badge";
import { projectMetadata } from "@/content/projectMetadata";
import type { GitHubRepository } from "@/types/github";

interface ProjectCardProps {
  project: GitHubRepository;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const metadata = projectMetadata[project.name.toLowerCase()];

  const image = metadata?.image ?? "/images/projects/project-placeholder.png";
  const liveDemo = metadata?.demo || project.homepage || null;

  const slug = project.name.toLowerCase();

  return (
    <article
      className="
        group
        flex
        h-full
        flex-col
        overflow-hidden
        rounded-2xl
        border
        border-border/60
        bg-card
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-primary/30
        hover:shadow-xl
      "
    >
      {/* Image */}
      <div className="p-3">
        <Link href={`/projects/${slug}`} className="block">
          <div className="relative aspect-[16/9] overflow-hidden rounded-xl bg-muted">
            <Image
              src={image}
              alt={project.name}
              fill
              sizes="(max-width:768px) 100vw, (max-width:1280px) 50vw, 33vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/5 to-transparent opacity-70 transition-opacity duration-300 group-hover:opacity-90" />

            {metadata?.featured && (
              <Badge
                className="
                  absolute
                  right-3
                  top-3
                  rounded-full
                  bg-primary
                  px-2.5
                  py-1
                  text-[10px]
                  font-semibold
                  shadow-md
                "
              >
                <Sparkles className="mr-1 h-3 w-3" />
                Featured
              </Badge>
            )}
          </div>
        </Link>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col px-5 pb-5">
        <div>
          <Link href={`/projects/${slug}`} className="inline-block">
            <h3 className="text-lg font-semibold transition-colors duration-300 hover:text-primary">
              {metadata?.title ?? project.name}
            </h3>
          </Link>

          <p className="mt-2 line-clamp-2 text-sm leading-6 text-muted-foreground">
            {project.description ??
              "No description available for this project."}
          </p>
        </div>

        {/* Technologies */}
        {metadata?.technologies && (
          <div className="mt-4 flex flex-wrap gap-1.5">
            {metadata.technologies.slice(0, 4).map((tech) => (
              <Badge
                key={tech}
                variant="secondary"
                className="h-5 rounded-md px-2 text-[10px] font-medium"
              >
                {tech}
              </Badge>
            ))}
          </div>
        )}

        {/* Footer */}
        <div className="mt-auto pt-5">
          <div className="border-t border-border/60 pt-4">
            <div className="flex items-center justify-between">
              {liveDemo ? (
                <Link
                  href={liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/link inline-flex items-center gap-1 text-sm font-medium transition-colors hover:text-primary"
                >
                  Live Demo
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover/link:translate-x-1 group-hover/link:-translate-y-1" />
                </Link>
              ) : (
                <span className="text-sm text-muted-foreground">Private</span>
              )}

              <Link
                href={project.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="group/link inline-flex items-center gap-1 text-sm font-medium transition-colors hover:text-primary"
              >
                <FaGithub className="h-4 w-4" />
                GitHub
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover/link:translate-x-1 group-hover/link:-translate-y-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
