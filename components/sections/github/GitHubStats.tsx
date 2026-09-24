import {
  Activity,
  BookOpen,
  Code2,
  Flame,
} from "lucide-react";

import { GitHubStatCard } from "./GitHubStatCard";
import {
  formatCount,
  getAlgorithmStats,
  getGitHubStats,
  getLatestProject,
} from "@/lib/dashboard";
import { siteConfig } from "@/lib/site";

export async function GitHubStats() {
  const [github, algorithms, latest] = await Promise.all([
    getGitHubStats(),
    getAlgorithmStats(),
    getLatestProject(),
  ]);

  return (
    <div className="grid gap-5 md:grid-cols-2">
      <GitHubStatCard
        title="Current Project"
        value={latest?.title ?? "—"}
        description={
          latest?.description ?? "Live GitHub activity is unavailable."
        }
        href={latest?.href ?? siteConfig.links.github}
        linkLabel="View Project"
        icon={<Activity className="h-5 w-5 text-primary" />}
      />

      <GitHubStatCard
        title="Longest Streak"
        value={github ? `${github.longestStreak} Days` : "—"}
        description="Consecutive days of GitHub contributions in the past year."
        href={siteConfig.links.github}
        linkLabel="View GitHub"
        icon={<Flame className="h-5 w-5 text-orange-500" />}
      />

      <GitHubStatCard
        title="Algorithms Solved"
        value={formatCount(algorithms?.solved)}
        description="LeetCode + NeetCode"
        href="/projects/algorithms-datastructures"
        linkLabel="View Repository"
        icon={<Code2 className="h-5 w-5 text-blue-500" />}
      />

      <GitHubStatCard
        title="Currently Learning"
        value="System Design"
        description="Designing scalable backend applications."
        icon={<BookOpen className="h-5 w-5 text-green-500" />}
      />
    </div>
  );
}