import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { getGitHubStats } from "@/lib/dashboard";
import type {
  ContributionDay,
  ContributionLevel,
} from "@/lib/github-graphql";
import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

const LEVEL_CLASSES: Record<ContributionLevel, string> = {
  NONE: "bg-muted",
  FIRST_QUARTILE: "bg-sky-200 dark:bg-sky-900",
  SECOND_QUARTILE: "bg-sky-400 dark:bg-sky-700",
  THIRD_QUARTILE: "bg-sky-600 dark:bg-sky-500",
  FOURTH_QUARTILE: "bg-sky-800 dark:bg-sky-300",
};

const LEVELS = Object.keys(LEVEL_CLASSES) as ContributionLevel[];

const DAY_LABELS = ["", "Mon", "", "Wed", "", "Fri", ""];

const parseDate = (date: string) => new Date(`${date}T00:00:00Z`);

function formatDay({ date, count }: ContributionDay): string {
  const day = parseDate(date).toLocaleDateString("en-AU", {
    day: "numeric",
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  });

  return `${count === 0 ? "No" : count} contribution${count === 1 ? "" : "s"} on ${day}`;
}

/**
 * Month label for each week column, shown where a new month starts.
 * A label is skipped if the next one is under three weeks away, so a
 * partial first month doesn't overlap the next label.
 */
function getMonthLabels(weeks: ContributionDay[][]): (string | null)[] {
  const starts: number[] = [];
  let previousMonth = -1;

  weeks.forEach((week, index) => {
    const month = parseDate(week[0].date).getUTCMonth();

    if (month !== previousMonth) {
      starts.push(index);
      previousMonth = month;
    }
  });

  const labels: (string | null)[] = weeks.map(() => null);

  starts.forEach((index, i) => {
    const next = starts[i + 1] ?? weeks.length;

    if (next - index >= 3) {
      labels[index] = parseDate(weeks[index][0].date).toLocaleDateString(
        "en-AU",
        { month: "short", timeZone: "UTC" }
      );
    }
  });

  return labels;
}

export async function GitHubContributionGraph() {
  const github = await getGitHubStats();

  return (
    <section className="rounded-2xl border border-border/60 bg-card p-5">
      {/* Header */}
      <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h3 className="text-sm font-semibold">
            GitHub Contribution Graph
          </h3>

          <p className="mt-1 text-xs text-muted-foreground">
            {github
              ? `${github.lastYear} contributions in the last year.`
              : "A snapshot of my coding activity over the past year."}
          </p>
        </div>

        <Link
          href={siteConfig.links.github}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-1.5 text-xs font-medium text-primary transition-colors hover:text-primary/80"
        >
          Learn more on GitHub

          <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>
      </div>

      {github ? (
        <ContributionCalendar weeks={github.weeks} />
      ) : (
        <p className="py-10 text-center text-sm text-muted-foreground">
          Contribution data is temporarily unavailable.
        </p>
      )}
    </section>
  );
}

function ContributionCalendar({ weeks }: { weeks: ContributionDay[][] }) {
  const monthLabels = getMonthLabels(weeks);

  // One grid for labels and days: column 1 holds weekday labels, row 1 holds
  // month labels, and each day sits at (week + 2, weekday + 2). Columns
  // stretch to fill the card and fall back to scrolling on small screens.
  return (
    <>
      {/* Scrolls sideways on small screens, so it must be keyboard-focusable. */}
      <div
        tabIndex={0}
        role="region"
        aria-label="Contribution graph"
        className="overflow-x-auto rounded-md pb-2 outline-none focus-visible:ring-2 focus-visible:ring-ring"
      >
        <div
          role="img"
          aria-label="GitHub contributions over the last year"
          className="grid min-w-[720px] gap-[3px] text-[10px] leading-none text-muted-foreground"
          style={{
            gridTemplateColumns: `2rem repeat(${weeks.length}, minmax(0, 1fr))`,
          }}
        >
          {monthLabels.map(
            (label, index) =>
              label && (
                <span
                  key={`month-${index}`}
                  aria-hidden="true"
                  className="mb-1 whitespace-nowrap"
                  style={{ gridColumn: index + 2, gridRow: 1 }}
                >
                  {label}
                </span>
              )
          )}

          {DAY_LABELS.map(
            (label, index) =>
              label && (
                <span
                  key={label}
                  aria-hidden="true"
                  className="self-center"
                  style={{ gridColumn: 1, gridRow: index + 2 }}
                >
                  {label}
                </span>
              )
          )}

          {weeks.map((week, weekIndex) =>
            week.map((day) => (
              <span
                key={day.date}
                title={formatDay(day)}
                className={cn(
                  "aspect-square w-full rounded-[2px]",
                  LEVEL_CLASSES[day.level]
                )}
                style={{
                  gridColumn: weekIndex + 2,
                  gridRow: parseDate(day.date).getUTCDay() + 2,
                }}
              />
            ))
          )}
        </div>
      </div>

      {/* Legend */}
      <div className="mt-4 flex items-center justify-end gap-2 text-[11px] text-muted-foreground">
        <span>Less</span>

        <div className="flex gap-1">
          {LEVELS.map((level) => (
            <div
              key={level}
              className={cn("h-2.5 w-2.5 rounded-[2px]", LEVEL_CLASSES[level])}
            />
          ))}
        </div>

        <span>More</span>
      </div>
    </>
  );
}
