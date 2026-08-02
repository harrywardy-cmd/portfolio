import Image from "next/image";
import Link from "next/link";
import { formatDistanceToNow } from "date-fns";

import { ArrowUpRight, GitCommitHorizontal } from "lucide-react";

import { FaGithub } from "react-icons/fa";

import { Badge } from "@/components/ui/badge";

import { getLatestRepository, getRecentCommits } from "@/lib/github";

export async function CurrentlyBuildingCard() {
  const repo = await getLatestRepository();

  const commits = await getRecentCommits(repo.name);

  return (
    <div className="group rounded-3xl border border-border/60 bg-card p-7 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-primary/20 hover:shadow-2xl">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-emerald-500" />

          <h3 className="font-semibold text-foreground">Currently Building</h3>
        </div>

        <Link
          href="https://github.com/harrywardy-cmd"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-xs text-muted-foreground transition-colors hover:text-primary"
        >
          Live from GitHub
          <FaGithub className="text-sm" />
        </Link>
      </div>

      {/* Repository */}
      <div className="mt-7 grid grid-cols-[1fr_170px] gap-5">
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-primary">
            {repo.name}
          </h2>

          <p className="mt-3 line-clamp-4 text-sm leading-7 text-muted-foreground">
            {repo.description ??
              "Building modern software with Next.js, TypeScript and Tailwind CSS."}
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            {repo.language && <Badge>{repo.language}</Badge>}

            <Badge variant="secondary">GitHub API</Badge>

            <Badge variant="secondary">Live Data</Badge>
          </div>
        </div>

        {/* Repository Preview */}
        <div className="overflow-hidden rounded-xl border border-border bg-muted">
          <Image
            src="/images/projects/portfolio-preview.png"
            alt={repo.name}
            width={320}
            height={180}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      </div>

      {/* Divider */}
      <div className="my-7 border-t border-border/60" />

      {/* Recent Activity */}
      <div>
        <div className="mb-5 flex items-center justify-between">
          <h4 className="font-medium text-foreground">Recent Activity</h4>

          <Link
            href={`${repo.html_url}/commits`}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 text-sm text-primary transition-colors hover:text-primary/80"
          >
            View all activity
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        <div className="space-y-4">
          {commits.map((commit) => (
            <div
              key={commit.sha}
              className="flex items-start justify-between gap-4"
            >
              <div className="flex min-w-0 items-start gap-3">
                <GitCommitHorizontal className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" />

                <p className="truncate text-sm text-foreground">
                  {commit.commit.message}
                </p>
              </div>

              <span className="shrink-0 text-xs text-muted-foreground">
                {formatDistanceToNow(new Date(commit.commit.author.date), {
                  addSuffix: true,
                })}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
