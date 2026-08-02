import {
  CalendarDays,
  CheckCircle2,
  Code2,
  Trophy,
} from "lucide-react";

const milestones = [
  {
    title: "Started the Journey",
    description:
      "Began solving LeetCode and NeetCode problems to strengthen my understanding of algorithms, data structures, and computer science fundamentals.",
    icon: <CalendarDays className="h-5 w-5" />,
  },
  {
    title: "Built Daily Consistency",
    description:
      "Committed to solving coding problems every day, developing discipline while steadily improving problem-solving skills.",
    icon: <Code2 className="h-5 w-5" />,
  },
  {
    title: "Expanded Technical Knowledge",
    description:
      "Worked through trees, graphs, heaps, dynamic programming, greedy algorithms, recursion, and other advanced interview topics.",
    icon: <CheckCircle2 className="h-5 w-5" />,
  },
  {
    title: "100+ Problems Solved",
    description:
      "Continued refining algorithmic thinking, writing clean solutions, and preparing for software engineering interviews through consistent practice.",
    icon: <Trophy className="h-5 w-5" />,
  },
];

export function AlgorithmsTimeline() {
  return (
    <section className="space-y-10">
      {/* Header */}
      <div className="mx-auto max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
          Journey
        </p>

        <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
          A Journey of Consistency
        </h2>

        <p className="mt-5 text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
          Every problem solved has strengthened my analytical thinking,
          deepened my understanding of computer science concepts, and improved
          my ability to tackle real-world software engineering challenges.
        </p>
      </div>

      {/* Timeline */}
      <div className="relative mx-auto max-w-4xl">
        {/* Vertical Line */}
        <div className="absolute left-5 top-0 h-full w-px bg-border" />

        <div className="space-y-8">
          {milestones.map((milestone) => (
            <div
              key={milestone.title}
              className="relative flex gap-6"
            >
              {/* Icon */}
              <div
                className="
                  relative
                  z-10
                  flex
                  h-10
                  w-10
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-border
                  bg-card
                  text-primary
                  shadow-sm
                "
              >
                {milestone.icon}
              </div>

              {/* Content */}
              <div
                className="
                  flex-1
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
                <h3 className="text-xl font-semibold">
                  {milestone.title}
                </h3>

                <p className="mt-3 leading-7 text-muted-foreground">
                  {milestone.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}