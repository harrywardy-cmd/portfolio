import {
  Brain,
  Code2,
  GitBranch,
  GraduationCap,
} from "lucide-react";

import { getHeroStats } from "@/lib/dashboard";

const formatCount = (value: number | null) =>
  value === null ? "—" : `${value}+`;

export async function HeroStats() {
  const dashboard = await getHeroStats();

  const stats = [
    {
      icon: Code2,
      value: formatCount(dashboard.projects),
      label: "Projects Built",
    },
    {
      icon: GitBranch,
      value: formatCount(dashboard.contributions),
      label: "GitHub Contributions",
    },
    {
      icon: Brain,
      value: formatCount(dashboard.algorithms),
      label: "Algorithms Solved",
    },
    {
      icon: GraduationCap,
      value: dashboard.degree,
      label: "Graduate",
    },
  ];

  return (
    <div className="grid grid-cols-2 gap-x-8 gap-y-6 border-t border-border/60 pt-8 lg:grid-cols-4">
      {stats.map((stat) => {
        const Icon = stat.icon;

        return (
          <div
            key={stat.label}
            className="flex items-start gap-3"
          >
            <Icon className="mt-1 h-5 w-5 shrink-0 text-primary" />

            <div>
              <p className="text-2xl font-bold leading-none text-foreground">
                {stat.value}
              </p>

              <p className="mt-1 text-sm leading-5 text-muted-foreground">
                {stat.label}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}