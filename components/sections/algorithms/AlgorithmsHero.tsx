import Link from "next/link";
import {
  ArrowUpRight,
  Brain,
  Code2,
  Flame,
  Target,
  Trophy,
} from "lucide-react";
import { FaGithub } from "react-icons/fa";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const stats = [
  {
    icon: <Code2 className="h-5 w-5 text-primary" />,
    value: "75+",
    label: "Problems Solved",
  },
  {
    icon: <Flame className="h-5 w-5 text-orange-500" />,
    value: "120+",
    label: "Day Streak",
  },
  {
    icon: <Trophy className="h-5 w-5 text-green-500" />,
    value: "25+",
    label: "Topics Mastered",
  },
];

const highlights = [
  {
    icon: <Flame className="h-5 w-5 text-orange-500" />,
    title: "Consistency",
    description:
      "Built a long-term habit of solving coding problems daily, developing discipline and strong analytical thinking.",
  },
  {
    icon: <Brain className="h-5 w-5 text-primary" />,
    title: "Interview Preparation",
    description:
      "Covered arrays, trees, graphs, dynamic programming, recursion, greedy algorithms, and many other interview topics.",
  },
  {
    icon: <Target className="h-5 w-5 text-green-500" />,
    title: "Continuous Growth",
    description:
      "Every solution is documented and organised, creating a long-term knowledge base while continuously improving problem-solving skills.",
  },
];

export function AlgorithmsHero() {
  return (
    <section className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
      {/* Left */}
      <div>
        <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
          🚀 1,172+ Problems Solved
        </div>

        <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
          Algorithms & Data Structures
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
          A growing collection of algorithm and data structure solutions built
          through consistent LeetCode and NeetCode practice. This journey has
          strengthened my problem-solving skills, deepened my understanding of
          computer science fundamentals, and prepared me for software
          engineering interviews.
        </p>

        {/* Technologies */}
        <div className="mt-8 flex flex-wrap justify-start gap-2">
          {[
            "Python",
            "LeetCode",
            "NeetCode",
            "Algorithms",
            "Data Structures",
          ].map((tech) => (
            <Badge
              key={tech}
              variant="secondary"
            >
              {tech}
            </Badge>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="
                rounded-2xl
                border
                border-border/60
                bg-card
                p-5
                shadow-sm
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-primary/40
                hover:shadow-lg
              "
            >
              <div className="flex items-center gap-2">
                {stat.icon}

                <span className="text-2xl font-bold">
                  {stat.value}
                </span>
              </div>

              <p className="mt-2 text-sm text-muted-foreground">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Buttons */}
        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <Button
            size="lg"
            className="group rounded-xl px-6"
          >
            <Link
              href="https://github.com/harrywardy-cmd/algorithms-datastructures"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 whitespace-nowrap"
            >
              <FaGithub className="h-4 w-4" />

              <span>View Repository</span>

              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Link>
          </Button>

          <Button
            variant="outline"
            size="lg"
            className="group rounded-xl px-6"
          >
            <Link
              href="/projects/algorithms-datastructures"
              className="inline-flex items-center gap-2 whitespace-nowrap"
            >
              <span>View Case Study</span>

              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Link>
          </Button>
        </div>
      </div>

      {/* Right */}
      <div className="rounded-3xl border border-border/60 bg-card p-6 shadow-sm lg:p-8">
        <div className="mb-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Highlights
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight">
            What This Journey Built
          </h2>
        </div>

        <div className="space-y-5">
          {highlights.map((highlight) => (
            <div
              key={highlight.title}
              className="
                rounded-2xl
                border
                border-border/60
                p-5
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-primary/40
                hover:shadow-md
              "
            >
              <div className="flex items-start gap-4">
                <div className="mt-1 shrink-0">
                  {highlight.icon}
                </div>

                <div>
                  <h3 className="font-semibold">
                    {highlight.title}
                  </h3>

                  <p className="mt-2 leading-7 text-muted-foreground">
                    {highlight.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}