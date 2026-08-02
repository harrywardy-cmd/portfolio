import {
  Briefcase,
  Code2,
  GraduationCap,
  MapPin,
  User,
} from "lucide-react";

interface QuickFact {
  icon: React.ReactNode;
  label: string;
  value: string;
}

const quickFacts: QuickFact[] = [
  {
    icon: <MapPin className="h-4 w-4" />,
    label: "Location",
    value: "Melbourne, Australia",
  },
  {
    icon: <User className="h-4 w-4" />,
    label: "Work Rights",
    value: "Australian Citizen",
  },
  {
    icon: <Briefcase className="h-4 w-4" />,
    label: "Current Role",
    value: "IT Service Desk Analyst",
  },
  {
    icon: <GraduationCap className="h-4 w-4" />,
    label: "Education",
    value: "Bachelor of Computer Science",
  },
  {
    icon: <Code2 className="h-4 w-4" />,
    label: "Focus",
    value: "Backend • Full Stack • AI",
  },
];

export function GitHubQuickFacts() {
  return (
    <aside
      className="
        rounded-3xl
        border
        border-border/60
        bg-card
        p-6
        shadow-sm
      "
    >
      <div className="mb-6">
        <h3 className="text-xl font-semibold">
          Quick Facts
        </h3>

        <p className="mt-2 text-sm text-muted-foreground">
          A quick overview of my background and engineering interests.
        </p>
      </div>

      <div className="space-y-5">
        {quickFacts.map((fact) => (
          <div
            key={fact.label}
            className="flex items-start gap-4"
          >
            <div
              className="
                flex
                h-10
                w-10
                shrink-0
                items-center
                justify-center
                rounded-xl
                bg-primary/10
                text-primary
              "
            >
              {fact.icon}
            </div>

            <div>
              <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                {fact.label}
              </p>

              <p className="mt-1 text-sm font-medium leading-6">
                {fact.value}
              </p>
            </div>
          </div>
        ))}
      </div>
    </aside>
  );
}