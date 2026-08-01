import Link from "next/link";
import {
  ArrowUpRight,
  Clock3,
  GitCommitHorizontal,
} from "lucide-react";
import { FaGithub } from "react-icons/fa";

import { Badge } from "@/components/ui/badge";

import { getLatestCommit, getLatestRepository } from "@/lib/github";

export async function CurrentlyBuildingCard() {
  const repo = await getLatestRepository();
  const commit = await getLatestCommit(repo.name);

  return (
    <div className="rounded-3xl border border-border bg-card p-8 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      {/* Header */}
      <div className="mb-8 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="h-3 w-3 animate-pulse rounded-full bg-emerald-500" />

          <h3 className="font-semibold text-foreground">
            Currently Building
          </h3>
        </div>

        <Link
          href="https://github.com/harrywardy-cmd"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
        >
          Live from GitHub

          <FaGithub className="h-4 w-4" />
        </Link>
      </div>

      {/* Repository */}
      <div className="space-y-5">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-primary">
            {repo.name}
          </h2>

          <p className="mt-3 leading-7 text-muted-foreground">
            {repo.description ??
              "Building modern software with Next.js, TypeScript and Tailwind CSS."}
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          {repo.language && (
            <Badge>{repo.language}</Badge>
          )}

          <Badge variant="secondary">GitHub API</Badge>

          <Badge variant="secondary">Live Data</Badge>
        </div>
      </div>

      {/* Divider */}
      <div className="my-8 border-t border-border" />

      {/* Latest Commit */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <GitCommitHorizontal className="h-4 w-4 text-primary" />

          <span className="text-sm font-medium text-foreground">
            Latest Commit
          </span>
        </div>

        <div className="rounded-2xl border border-border bg-muted/40 p-4">
          <p className="font-medium text-foreground">
            {commit.commit.message}
          </p>

          <div className="mt-3 flex items-center gap-2 text-sm text-muted-foreground">
            <Clock3 className="h-4 w-4" />

            {new Date(commit.commit.author.date).toLocaleDateString(
              "en-AU",
              {
                day: "numeric",
                month: "short",
                year: "numeric",
              }
            )}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-8 flex justify-end">
        <Link
          href={repo.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2 text-sm font-medium text-primary transition-all hover:gap-3"
        >
          View Repository

          <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:rotate-45" />
        </Link>
      </div>
    </div>
  );
}