import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    title: "Developer Portfolio",
    description:
      "A modern portfolio built with Next.js, TypeScript, Tailwind CSS, and the GitHub API to showcase projects, algorithms, and live development activity.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "GitHub API",
    ],
    href: "/projects/portfolio",
  },
  {
    title: "Algorithms & Data Structures",
    description:
      "Over 75+ algorithm and data structure solutions covering interview preparation, computer science fundamentals, and advanced problem solving.",
    technologies: [
      "Python",
      "Algorithms",
      "LeetCode",
      "Data Structures",
    ],
    href: "/projects/algorithms-datastructures",
  },
  {
    title: "Calorie Compass",
    description:
      "A calorie tracking application built with React, TypeScript, and Firebase that helps users monitor nutrition and achieve their health goals.",
    technologies: [
      "React",
      "TypeScript",
      "Firebase",
      "Vite",
    ],
    href: "/projects/calorie-compass",
  },
];

export function ResumeProjects() {
  return (
    <section className="space-y-10">
      {/* Header */}
      <div className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
          Featured Projects
        </p>

        <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
          Projects That Demonstrate My Skills
        </h2>

        <p className="mt-4 text-lg leading-8 text-muted-foreground">
          These projects demonstrate my experience building responsive web
          applications, solving complex algorithmic problems, and designing
          scalable software using modern technologies.
        </p>
      </div>

      {/* Project Cards */}
      <div className="grid gap-6 lg:grid-cols-3">
        {projects.map((project) => (
          <article
            key={project.title}
            className="
              group
              flex
              h-full
              flex-col
              rounded-3xl
              border
              border-border/60
              bg-card
              p-6
              shadow-sm
              transition-all
              duration-300
              hover:-translate-y-1
              hover:border-primary/40
              hover:shadow-lg
            "
          >
            <div className="flex items-start justify-between gap-4">
              <h3 className="text-2xl font-semibold tracking-tight">
                {project.title}
              </h3>

              <ArrowUpRight
                className="
                  h-5
                  w-5
                  text-muted-foreground
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                  group-hover:-translate-y-1
                  group-hover:text-primary
                "
              />
            </div>

            <p className="mt-4 flex-grow leading-7 text-muted-foreground">
              {project.description}
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <Badge
                  key={tech}
                  variant="secondary"
                >
                  {tech}
                </Badge>
              ))}
            </div>

            <Button
              variant="ghost"
              className="mt-8 w-fit px-0 hover:bg-transparent"
            >
              <Link
                href={project.href}
                className="inline-flex items-center gap-2"
              >
                View Project

                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </Button>
          </article>
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="flex justify-center pt-4">
        <Button
          size="lg"
          className="group rounded-xl px-8"
        >
          <Link
            href="/projects"
            className="inline-flex items-center gap-2"
          >
            View All Projects

            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </Button>
      </div>
    </section>
  );
}