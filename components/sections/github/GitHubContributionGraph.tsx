import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function GitHubContributionGraph() {
  return (
    <section
      className="
        rounded-2xl
        border
        border-border/60
        bg-card
        p-5
      "
    >
      {/* Header */}
      <div className="mb-5 flex items-center justify-between">
        <div>
          <h3 className="text-sm font-semibold">
            GitHub Contribution Graph
          </h3>

          <p className="mt-1 text-xs text-muted-foreground">
            A snapshot of my coding activity over the past year.
          </p>
        </div>

        <Link
          href="https://github.com/harrywardy-cmd"
          target="_blank"
          rel="noopener noreferrer"
          className="
            group
            inline-flex
            items-center
            gap-1.5
            text-xs
            font-medium
            text-primary
            transition-colors
            hover:text-primary/80
          "
        >
          Learn more on GitHub

          <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>
      </div>

      {/* Graph */}
      <div className="overflow-x-auto">
        <Image
          src="https://ghchart.rshah.org/2563eb/harrywardy-cmd"
          alt="GitHub Contribution Graph"
          width={1800}
          height={240}
          unoptimized
          className="
            block
            w-full
            min-w-[1050px]
            h-auto
          "
        />
      </div>

      {/* Legend */}
      <div className="mt-4 flex items-center justify-end gap-2 text-[11px] text-muted-foreground">
        <span>Less</span>

        <div className="flex gap-1">
          <div className="h-2.5 w-2.5 rounded-[2px] bg-muted" />
          <div className="h-2.5 w-2.5 rounded-[2px] bg-sky-200 dark:bg-sky-900" />
          <div className="h-2.5 w-2.5 rounded-[2px] bg-sky-400" />
          <div className="h-2.5 w-2.5 rounded-[2px] bg-sky-600" />
          <div className="h-2.5 w-2.5 rounded-[2px] bg-sky-800" />
        </div>

        <span>More</span>
      </div>
    </section>
  );
}