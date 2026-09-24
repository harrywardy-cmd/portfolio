import Image from "next/image";
import Link from "next/link";
import { formatDistanceToNow } from "date-fns";
import { ArrowUpRight, GitCommitHorizontal } from "lucide-react";
import { FaGithub } from "react-icons/fa";

import { Badge } from "@/components/ui/badge";
import { getLatestRepository, getRecentCommits } from "@/lib/github";
import { siteConfig } from "@/lib/site";

async function getCurrentlyBuilding() {
  try {
    const repo = await getLatestRepository();
    const commits = await getRecentCommits(repo.name);

    return { repo, commits };
  } catch (error) {
    console.error("[CurrentlyBuildingCard]", error);

    return null;
  }
}

export async function CurrentlyBuildingCard() {
  const data = await getCurrentlyBuilding();

  if (!data) {
    return <CurrentlyBuildingFallback />;
  }

  const { repo, commits } = data;

  return (
    <div className="group w-full overflow-hidden rounded-3xl border border-border/60 bg-card p-6 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-primary/20 hover:shadow-2xl lg:p-8">
      {/* Header */}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <span className="h-2.5 w-2.5 shrink-0 animate-pulse rounded-full bg-emerald-500" />

          <h3 className="text-lg font-semibold text-foreground">
            Currently Building
          </h3>
        </div>

        <Link
          href={siteConfig.links.github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex w-fit items-center gap-2 text-xs text-muted-foreground transition-colors hover:text-primary"
        >
          <span>Live from GitHub</span>

          <FaGithub className="text-sm" />
        </Link>
      </div>

      {/* Repository */}
      <div className="mt-8 grid items-stretch gap-8 lg:grid-cols-[1fr_240px]">
        {/* Content */}
        <div className="min-w-0">
          <h2 className="break-words text-3xl font-bold tracking-tight text-primary">
            {repo.name}
          </h2>

          <p className="mt-4 text-base leading-8 text-muted-foreground">
            {repo.description ??
              "Building modern software with Next.js, TypeScript and Tailwind CSS."}
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {repo.language && <Badge>{repo.language}</Badge>}

            <Badge variant="secondary">GitHub API</Badge>

            <Badge variant="secondary">Live Data</Badge>
          </div>
        </div>

        {/* Preview */}
        <div className="relative order-first min-h-64 overflow-hidden rounded-2xl border border-border/60 bg-muted lg:order-last lg:min-h-full">
          <Image
            src="/images/projects/portfolio-preview.png"
            alt={repo.name}
            fill
            sizes="(max-width: 1024px) 100vw, 240px"
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      </div>

      {/* Divider */}
      <div className="my-8 border-t border-border/60" />

      {/* Recent Activity */}
      <div>
        <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <h4 className="text-lg font-semibold text-foreground">
            Recent Activity
          </h4>

          <Link
            href={`${repo.html_url}/commits`}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex w-fit items-center gap-2 text-sm text-primary transition-colors hover:text-primary/80"
          >
            View all activity

            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        <div className="space-y-5">
          {commits.map((commit) => (
            <div
              key={commit.sha}
              className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between"
            >
              <div className="flex min-w-0 items-start gap-3">
                <GitCommitHorizontal className="mt-1 h-4 w-4 shrink-0 text-emerald-500" />

                <p className="break-words text-sm leading-6 text-foreground">
                  {commit.commit.message.split("\n")[0]}
                </p>
              </div>

              <span className="shrink-0 text-xs text-muted-foreground">
                {formatDistanceToNow(
                  new Date(commit.commit.author.date),
                  {
                    addSuffix: true,
                  }
                )}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function CurrentlyBuildingFallback() {
  return (
    <div className="w-full rounded-3xl border border-border/60 bg-card p-6 shadow-xl lg:p-8">
      <h3 className="text-lg font-semibold text-foreground">
        Currently Building
      </h3>

      <p className="mt-4 text-base leading-8 text-muted-foreground">
        Live GitHub activity is temporarily unavailable. You can still
        browse my latest work directly on GitHub.
      </p>

      <Link
        href={siteConfig.links.github}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 inline-flex items-center gap-2 text-sm text-primary transition-colors hover:text-primary/80"
      >
        <FaGithub className="text-base" />
        View GitHub profile
        <ArrowUpRight className="h-4 w-4" />
      </Link>
    </div>
  );
}
