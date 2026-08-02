import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/button";

import { ProjectCard } from "./ProjectCard";
import { ProjectsHeader } from "./ProjectsHeader";

import { getFeaturedPortfolioProjects } from "@/lib/projects";

export async function FeaturedProjects() {
  const projects =
    await getFeaturedPortfolioProjects();

  return (
    <section
      id="projects"
      className="relative py-20 lg:py-24"
    >
      <Container>
        <div className="space-y-12">
          <ProjectsHeader />

          <div
            className="
              mx-auto
              grid
              max-w-7xl
              grid-cols-1
              gap-8
              md:grid-cols-2
              xl:grid-cols-3
            "
          >
            {projects.map((project) => (
              <ProjectCard
                key={project.slug}
                project={project}
              />
            ))}
          </div>

          {/* View All Projects */}
          <div className="flex justify-center pt-6">
            <Button
              size="lg"
              className="group"
            >
              <Link
                href="/projects"
                className="inline-flex items-center gap-2"
              >
                View All Projects

                <ArrowRight
                  className="
                    h-4
                    w-4
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                  "
                />
              </Link>
            </Button>
          </div>
        </div>

        <div className="mt-20 border-t border-border/60" />
      </Container>
    </section>
  );
}