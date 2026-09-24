import { Sparkles } from "lucide-react";

interface ProjectsHeaderProps {
  /** h1 on the projects page, h2 where it's a section of another page. */
  headingLevel?: "h1" | "h2";
}

export function ProjectsHeader({ headingLevel = "h2" }: ProjectsHeaderProps) {
  const Heading = headingLevel;

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Sparkles className="h-4 w-4 text-primary" />

          <span className="text-sm font-semibold text-foreground">
            Featured Projects
          </span>
        </div>

      </div>

      {/* Section Heading */}
      <div className="max-w-3xl">
        <Heading className="text-4xl font-bold tracking-tight text-foreground md:text-5xl">
          Software I&apos;ve Built
        </Heading>

        <p className="mt-4 max-w-2xl text-lg leading-8 text-muted-foreground">
          Production-ready web applications, AI-powered tools, and
          full-stack projects built with modern technologies and best
          engineering practices.
        </p>
      </div>

      {/* Divider */}
      <div className="border-b border-border/60" />
    </div>
  );
}