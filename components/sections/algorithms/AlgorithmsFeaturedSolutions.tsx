import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Code2,
} from "lucide-react";

import { Button } from "@/components/ui/button";

const featuredSolutions = [
  {
    title: "Jump Game",
    difficulty: "Medium",
    topic: "Greedy",
    href: "https://github.com/harrywardy-cmd/algorithms-datastructures",
  },
  {
    title: "House Robber",
    difficulty: "Medium",
    topic: "Dynamic Programming",
    href: "https://github.com/harrywardy-cmd/algorithms-datastructures",
  },
  {
    title: "Decode Ways",
    difficulty: "Medium",
    topic: "Dynamic Programming",
    href: "https://github.com/harrywardy-cmd/algorithms-datastructures",
  },
  {
    title: "Product of Array Except Self",
    difficulty: "Medium",
    topic: "Arrays",
    href: "https://github.com/harrywardy-cmd/algorithms-datastructures",
  },
  {
    title: "Rotate Image",
    difficulty: "Medium",
    topic: "Matrix",
    href: "https://github.com/harrywardy-cmd/algorithms-datastructures",
  },
  {
    title: "Gas Station",
    difficulty: "Medium",
    topic: "Greedy",
    href: "https://github.com/harrywardy-cmd/algorithms-datastructures",
  },
];

export function AlgorithmsFeaturedSolutions() {
  return (
    <section className="space-y-8">
      <div className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
          Featured Solutions
        </p>

        <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
          A Selection of Representative Problems
        </h2>

        <p className="mt-4 text-lg leading-8 text-muted-foreground">
          These problems showcase a variety of algorithmic techniques,
          including greedy algorithms, dynamic programming, arrays,
          matrices, and optimisation strategies developed throughout my
          coding journey.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {featuredSolutions.map((solution) => (
          <article
            key={solution.title}
            className="
              group
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
            <div className="flex items-center justify-between">
              <Code2 className="h-5 w-5 text-primary" />

              <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                {solution.difficulty}
              </span>
            </div>

            <h3 className="mt-5 text-xl font-semibold">
              {solution.title}
            </h3>

            <p className="mt-2 text-sm text-muted-foreground">
              {solution.topic}
            </p>

            <Link
              href={solution.href}
              target="_blank"
              rel="noopener noreferrer"
              className="
                mt-6
                inline-flex
                items-center
                gap-2
                font-medium
                text-primary
                transition-colors
                hover:underline
              "
            >
              View Solution

              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Link>
          </article>
        ))}
      </div>

      <div className="flex justify-center pt-4">
        <Button
          size="lg"
          className="group rounded-xl px-7"
        >
          <Link
            href="https://github.com/harrywardy-cmd/algorithms-datastructures"
            target="_blank"
            rel="noopener noreferrer"
          >
            Explore All 1,100+ Solutions

            <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </Button>
      </div>
    </section>
  );
}