import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  FileText,
  Sparkles,
} from "lucide-react";
import { FaGithub } from "react-icons/fa";

import { Badge } from "@/components/ui/badge";
import { projectMetadata } from "@/content/projectMetadata";
import type { PortfolioProject } from "@/types/projects";

interface ProjectCardProps {
  project: PortfolioProject;
}

export function ProjectCard({
  project,
}: ProjectCardProps) {
  const metadata = projectMetadata[project.slug];

  const image =
    metadata?.image ??
    project.image ??
    "/images/projects/project-placeholder.png";

  const liveDemo =
    project.demo ??
    metadata?.demo ??
    null;

  return (
    <article
      className="
        group
        flex
        h-full
        w-full
        min-h-[580px]
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
        <Link
          href={`/projects/${project.slug}`}
          className="block"
        >
          <div
            className="
              relative
              h-56
              w-full
              overflow-hidden
              rounded-xl
              bg-muted
            "
          >
            <Image
              src={image}
              alt={project.title}
              fill
              sizes="(max-width:768px) 100vw, (max-width:1280px) 50vw, 33vw"
              className="
                object-cover
                object-center
                transition-transform
                duration-500
                group-hover:scale-105
              "
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/5 to-transparent" />

            {project.featured && (
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
          <Link
            href={`/projects/${project.slug}`}
            className="inline-block"
          >
            <h3 className="text-xl font-semibold transition-colors duration-300 hover:text-primary">
              {project.title}
            </h3>
          </Link>

          <p
            className="
              mt-2
              min-h-[4.75rem]
              line-clamp-3
              text-sm
              leading-6
              text-muted-foreground
            "
          >
            {project.description}
          </p>
        </div>

        {/* Technologies */}
        {metadata?.technologies && (
          <div
            className="
              mt-5
              min-h-[3.5rem]
              flex
              flex-wrap
              gap-1.5
              overflow-hidden
            "
          >
            {metadata.technologies
              .slice(0, 4)
              .map((tech) => (
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
        <div className="mt-auto pt-6">
          <div className="border-t border-border/60 pt-5">
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
              ) : project.pdf ? (
                <Link
                  href={project.pdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/link inline-flex items-center gap-1 text-sm font-medium transition-colors hover:text-primary"
                >
                  <FileText className="h-4 w-4" />
                  View Report
                </Link>
              ) : (
                <span className="text-sm text-muted-foreground">
                  Private
                </span>
              )}

              {project.githubUrl && (
                <Link
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/link inline-flex items-center gap-1 text-sm font-medium transition-colors hover:text-primary"
                >
                  <FaGithub className="h-4 w-4" />
                  GitHub
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover/link:translate-x-1 group-hover/link:-translate-y-1" />
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}