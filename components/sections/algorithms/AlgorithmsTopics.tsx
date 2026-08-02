import { Badge } from "@/components/ui/badge";

const topics = [
  "Arrays",
  "Strings",
  "Hash Maps",
  "Two Pointers",
  "Sliding Window",
  "Stack",
  "Queue",
  "Linked Lists",
  "Binary Search",
  "Trees",
  "Binary Search Trees",
  "Heaps",
  "Tries",
  "Graphs",
  "Depth-First Search",
  "Breadth-First Search",
  "Backtracking",
  "Recursion",
  "Greedy",
  "Dynamic Programming",
  "Intervals",
  "Bit Manipulation",
  "Math",
  "Prefix Sum",
  "Union Find",
  "Topological Sort",
  "Monotonic Stack",
  "System Design",
];

export function AlgorithmsTopics() {
  return (
    <section className="space-y-8">
      <div className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
          Topics
        </p>

        <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
          Problem Solving Across Computer Science
        </h2>

        <p className="mt-4 text-lg leading-8 text-muted-foreground">
          My algorithm practice spans a broad range of data structures,
          algorithmic techniques, and interview topics. These problems have
          strengthened my analytical thinking, coding proficiency, and ability
          to design efficient solutions.
        </p>
      </div>

      <div className="rounded-3xl border border-border/60 bg-card p-8 shadow-sm">
        <div className="flex flex-wrap gap-3">
          {topics.map((topic) => (
            <Badge
              key={topic}
              variant="secondary"
              className="
                rounded-full
                px-4
                py-2
                text-sm
                font-medium
                transition-all
                duration-300
                hover:-translate-y-0.5
                hover:bg-primary
                hover:text-primary-foreground
              "
            >
              {topic}
            </Badge>
          ))}
        </div>
      </div>
    </section>
  );
}