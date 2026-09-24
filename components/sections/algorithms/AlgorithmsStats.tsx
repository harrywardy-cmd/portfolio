import {
  Brain,
  Code2,
  Flame,
  Trophy,
} from "lucide-react";

import {
  formatCount,
  getAlgorithmStats,
  MIN_ALGORITHMS_SOLVED,
  nextMilestone,
} from "@/lib/dashboard";
import type { LeetCodeStats } from "@/lib/leetcode";

const getStats = (algorithms: LeetCodeStats | null) => [
  {
    title: "Problems Solved",
    value: formatCount(algorithms?.solved),
    description: "Completed across LeetCode and NeetCode.",
    icon: <Code2 className="h-6 w-6 text-blue-500" />,
  },
  {
    title: "Active Days",
    value: formatCount(algorithms?.activeDays),
    description: "Days of consistent LeetCode practice.",
    icon: <Flame className="h-6 w-6 text-orange-500" />,
  },
  {
    title: "Topics Covered",
    value: formatCount(algorithms?.topics),
    description: "Core algorithms and data structures.",
    icon: <Brain className="h-6 w-6 text-purple-500" />,
  },
  {
    title: "Goal",
    value: `${nextMilestone(
      algorithms?.solved ?? MIN_ALGORITHMS_SOLVED
    )}`,
    description: "Working towards mastering interview preparation.",
    icon: <Trophy className="h-6 w-6 text-green-500" />,
  },
];

export async function AlgorithmsStats() {
  const stats = getStats(await getAlgorithmStats());

  return (
    <section className="space-y-10">
      {/* Section Header */}
      <div className="mx-auto max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
          Statistics
        </p>

        <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
          Building Strong Computer Science Fundamentals
        </h2>

        <p className="mt-5 text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
          Consistent algorithm practice has strengthened my problem-solving,
          analytical thinking, and understanding of the data structures used
          throughout modern software engineering.
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat) => (
          <div
            key={stat.title}
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
            {/* Header */}
            <div className="flex items-center justify-between gap-4">
              <h3 className="text-sm font-medium text-muted-foreground">
                {stat.title}
              </h3>

              <div className="shrink-0 transition-transform duration-300 group-hover:scale-110">
                {stat.icon}
              </div>
            </div>

            {/* Value */}
            <p className="mt-6 text-3xl font-bold tracking-tight sm:text-4xl">
              {stat.value}
            </p>

            {/* Description */}
            <p className="mt-3 flex-grow text-sm leading-6 text-muted-foreground sm:text-base sm:leading-7">
              {stat.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}