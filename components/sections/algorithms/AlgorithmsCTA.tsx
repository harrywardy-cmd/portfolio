import Link from "next/link";
import {
  ArrowRight,
  BookOpen
} from "lucide-react";

import { Button } from "@/components/ui/button";

import { FaGithub } from "react-icons/fa";

export function AlgorithmsCTA() {
  return (
    <section
      className="
        relative
        overflow-hidden
        rounded-3xl
        border
        border-primary/20
        bg-gradient-to-br
        from-primary/10
        via-primary/5
        to-card
        p-8
        lg:p-12
      "
    >
      {/* Background Glow */}
      <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />

      <div className="absolute -bottom-20 left-0 h-64 w-64 rounded-full bg-primary/5 blur-3xl" />

      <div className="relative flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
        {/* Content */}
        <div className="max-w-2xl">
          <div
            className="
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-primary/20
              bg-primary/10
              px-4
              py-1.5
              text-sm
              font-medium
              text-primary
            "
          >
            <BookOpen className="h-4 w-4" />

            Keep Learning
          </div>

          <h2 className="mt-6 text-4xl font-bold tracking-tight lg:text-5xl">
            Explore My Complete Algorithms Repository
          </h2>

          <p className="mt-5 text-lg leading-8 text-muted-foreground">
            Browse over <strong>1,100+</strong> solutions covering arrays,
            trees, graphs, dynamic programming, greedy algorithms, binary
            search, and many more interview-focused topics. Every solution is
            written in Python and organised for easy navigation and continuous
            learning.
          </p>
        </div>

        {/* Actions */}
        <div className="flex flex-col gap-4 sm:flex-row lg:flex-col xl:flex-row">
          <Button
            size="lg"
            className="
              group
              h-12
              rounded-xl
              px-7
              font-semibold
              shadow-lg
              transition-all
              duration-300
              hover:-translate-y-0.5
            "
          >
            <Link
              href="https://github.com/harrywardy-cmd/algorithms-datastructures"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2"
            >
              <FaGithub className="h-5 w-5" />

              View GitHub Repository

              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </Button>

          <Button
            variant="outline"
            size="lg"
            className="
              group
              h-12
              rounded-xl
              border-border
              bg-background/80
              px-7
              font-semibold
              backdrop-blur
              transition-all
              duration-300
              hover:-translate-y-0.5
              hover:border-primary/40
            "
          >
            <Link
              href="/projects/algorithms-datastructures"
              className="inline-flex items-center gap-2"
            >
              View Project Case Study

              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}