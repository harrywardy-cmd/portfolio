import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowUpRight,
  FileText,
} from "lucide-react";
import { FaGithub } from "react-icons/fa";

import { Container } from "@/components/layout/Container";
import { Badge } from "@/components/ui/badge";

import { projects } from "@/content/projects";
import { projectMetadata } from "@/content/projectMetadata";

interface ProjectPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function ProjectPage({
  params,
}: ProjectPageProps) {
  const { slug } = await params;

  const project = projects.find(
    (project) => project.slug === slug
  );

  if (!project) {
    notFound();
  }

  const metadata = projectMetadata[slug];

  if (!metadata) {
    notFound();
  }

  const image =
    metadata.image ??
    "/images/projects/project-placeholder.png";

  return (
    <main className="py-20 lg:py-24">
      <Container>
        <div className="mx-auto max-w-6xl">
          {/* Heading */}
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              Project
            </p>

            <h1 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
              {project.title}
            </h1>

            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              {metadata.overview}
            </p>

            {/* Tech Stack */}
            <div className="mt-8 flex flex-wrap gap-2">
              {metadata.technologies.map((technology) => (
                <Badge
                  key={technology}
                  variant="secondary"
                >
                  {technology}
                </Badge>
              ))}
            </div>

            {/* Actions */}
            <div className="mt-10 flex flex-wrap gap-4">
              {metadata.demo && (
                <Link
                  href={metadata.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-3 font-medium text-primary-foreground transition hover:opacity-90"
                >
                  Live Demo

                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              )}

              {project.githubUrl && (
                <Link
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-border px-5 py-3 font-medium transition hover:border-primary hover:text-primary"
                >
                  <FaGithub />

                  GitHub

                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              )}

              {metadata.pdf && (
                <Link
                  href={metadata.pdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-border px-5 py-3 font-medium transition hover:border-primary hover:text-primary"
                >
                  <FileText className="h-4 w-4" />

                  View Report

                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              )}
            </div>
          </div>

          {/* Screenshot */}
          <div className="mt-16 overflow-hidden rounded-3xl border border-border bg-card shadow-lg">
            <div className="relative aspect-[16/9]">
              <Image
                src={image}
                alt={project.title}
                fill
                priority
                className="object-cover"
              />
            </div>
          </div>

          {/* Overview */}
          <div className="mt-20 space-y-16">
            <section>
              <h2 className="text-2xl font-semibold">
                Overview
              </h2>

              <p className="mt-4 leading-8 text-muted-foreground">
                {metadata.overview}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold">
                Key Features
              </h2>

              <ul className="mt-4 list-disc space-y-2 pl-6 text-muted-foreground">
                {metadata.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold">
                Challenges
              </h2>

              <ul className="mt-4 list-disc space-y-2 pl-6 text-muted-foreground">
                {metadata.challenges.map((challenge) => (
                  <li key={challenge}>{challenge}</li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold">
                What I Learned
              </h2>

              <ul className="mt-4 list-disc space-y-2 pl-6 text-muted-foreground">
                {metadata.lessons.map((lesson) => (
                  <li key={lesson}>{lesson}</li>
                ))}
              </ul>
            </section>
          </div>
        </div>
      </Container>
    </main>
  );
}