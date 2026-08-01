import {
  Code2,
  GitBranch,
  Brain,
  GraduationCap,
} from "lucide-react";

const stats = [
  {
    icon: Code2,
    value: "8+",
    label: "Projects Built",
  },
  {
    icon: GitBranch,
    value: "300+",
    label: "GitHub Contributions",
  },
  {
    icon: Brain,
    value: "50+",
    label: "Algorithms Solved",
  },
  {
    icon: GraduationCap,
    value: "Computer Science",
    label: "Graduate",
  },
];

export function HeroStats() {
  return (
    <div className="grid grid-cols-2 gap-6 border-t border-border pt-8 lg:grid-cols-4">
      {stats.map((stat) => (
        <div key={stat.label} className="space-y-2">
          <stat.icon className="h-5 w-5 text-primary" />

          <div className="text-3xl font-bold text-foreground">
            {stat.value}
          </div>

          <div className="text-sm text-muted-foreground">
            {stat.label}
          </div>
        </div>
      ))}
    </div>
  );
}