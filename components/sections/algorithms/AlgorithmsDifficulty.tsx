import type { LeetCodeStats } from "@/lib/leetcode";
import { cn } from "@/lib/utils";

interface AlgorithmsDifficultyProps {
  stats: Pick<LeetCodeStats, "easy" | "medium" | "hard">;
}

export function AlgorithmsDifficulty({ stats }: AlgorithmsDifficultyProps) {
  const levels = [
    {
      label: "Easy",
      count: stats.easy,
      color: "bg-emerald-500",
      text: "text-emerald-600 dark:text-emerald-400",
    },
    {
      label: "Medium",
      count: stats.medium,
      color: "bg-amber-500",
      text: "text-amber-600 dark:text-amber-400",
    },
    {
      label: "Hard",
      count: stats.hard,
      color: "bg-rose-500",
      text: "text-rose-600 dark:text-rose-400",
    },
  ];

  const total = levels.reduce((sum, level) => sum + level.count, 0);

  if (total === 0) {
    return null;
  }

  return (
    <div className="rounded-3xl border border-border/60 bg-card p-6 shadow-sm">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
        <h3 className="text-lg font-semibold">Solved by Difficulty</h3>

        <p className="text-sm text-muted-foreground">
          Live from LeetCode · {total} accepted
        </p>
      </div>

      {/* Stacked bar */}
      <div
        role="img"
        aria-label={levels
          .map((level) => `${level.count} ${level.label}`)
          .join(", ")}
        className="mt-6 flex h-3 w-full gap-1 overflow-hidden rounded-full"
      >
        {levels
          .filter((level) => level.count > 0)
          .map((level) => (
            <div
              key={level.label}
              className={cn("h-full first:rounded-l-full last:rounded-r-full", level.color)}
              style={{ width: `${(level.count / total) * 100}%` }}
            />
          ))}
      </div>

      {/* Breakdown */}
      <dl className="mt-6 grid grid-cols-3 gap-4">
        {levels.map((level) => (
          <div key={level.label}>
            <dt className="flex items-center gap-2 text-sm text-muted-foreground">
              <span className={cn("size-2.5 rounded-full", level.color)} />
              {level.label}
            </dt>

            <dd className="mt-2 flex items-baseline gap-2">
              <span className={cn("text-2xl font-bold", level.text)}>
                {level.count}
              </span>

              <span className="text-sm text-muted-foreground">
                {Math.round((level.count / total) * 100)}%
              </span>
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
