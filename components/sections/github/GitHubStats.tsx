import {
  Activity,
  BookOpen,
  Code2,
  Flame,
} from "lucide-react";

import { GitHubStatCard } from "./GitHubStatCard";

export function GitHubStats() {
  return (
    <div className="grid gap-5 md:grid-cols-2">
      <GitHubStatCard
        title="Current Project"
        value="AI Resume Analyzer"
        description="Building an AI-powered resume analysis platform."
        href="/projects"
        linkLabel="View Project"
        icon={<Activity className="h-5 w-5 text-primary" />}
      />

      <GitHubStatCard
        title="GitHub Streak"
        value="128 Days"
        description="Keep going!"
        href="https://github.com/harrywardy-cmd"
        linkLabel="View GitHub"
        icon={<Flame className="h-5 w-5 text-orange-500" />}
      />

      <GitHubStatCard
        title="Algorithms Solved"
        value="1172"
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