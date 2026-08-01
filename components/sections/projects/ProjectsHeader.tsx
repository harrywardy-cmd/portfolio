import Link from "next/link";
import {
  ArrowRight,
  Sparkles,
} from "lucide-react";

export function ProjectsHeader() {
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

        <Link
          href="/projects"
          className="group inline-flex items-center gap-2 text-sm font-medium text-primary transition-colors hover:text-primary/80"
        >
          View all projects

          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </div>

      {/* Section Heading */}
      <div className="max-w-3xl">
        <h2 className="text-4xl font-bold tracking-tight text-foreground md:text-5xl">
          Software I've Built
        </h2>

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