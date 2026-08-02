import {
  Cloud,
  Code2,
  Database,
  Laptop,
  Network,
  Server,
  Settings,
  Wrench,
} from "lucide-react";

const skillGroups = [
  {
    title: "Programming",
    icon: <Code2 className="h-6 w-6 text-primary" />,
    skills: [
      "TypeScript",
      "JavaScript",
      "Python",
      "Java",
      "SQL",
    ],
  },
  {
    title: "Frontend",
    icon: <Laptop className="h-6 w-6 text-blue-500" />,
    skills: [
      "React",
      "Next.js",
      "Tailwind CSS",
      "shadcn/ui",
      "HTML",
      "CSS",
    ],
  },
  {
    title: "Backend & Databases",
    icon: <Database className="h-6 w-6 text-green-500" />,
    skills: [
      "Node.js",
      "Firebase",
      "REST APIs",
      "MySQL",
    ],
  },
  {
    title: "IT & Enterprise",
    icon: <Network className="h-6 w-6 text-orange-500" />,
    skills: [
      "Microsoft 365",
      "Azure AD",
      "Windows",
      "macOS",
      "Networking",
      "Active Directory",
    ],
  },
  {
    title: "Development Tools",
    icon: <Settings className="h-6 w-6 text-purple-500" />,
    skills: [
      "Git",
      "GitHub",
      "VS Code",
      "Postman",
      "Vercel",
    ],
  },
  {
    title: "Professional Skills",
    icon: <Wrench className="h-6 w-6 text-red-500" />,
    skills: [
      "Problem Solving",
      "Troubleshooting",
      "Communication",
      "Customer Support",
      "Documentation",
      "Team Collaboration",
    ],
  },
];

export function ExperienceSkills() {
  return (
    <section className="space-y-10">
      {/* Header */}
      <div className="mx-auto max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
          Skills
        </p>

        <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
          Technologies & Professional Skills
        </h2>

        <p className="mt-5 text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
          My experience combines modern software engineering technologies with
          enterprise IT support, allowing me to confidently develop
          applications while solving real-world technical challenges.
        </p>
      </div>

      {/* Skill Cards */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 xl:grid-cols-3">
        {skillGroups.map((group) => (
          <div
            key={group.title}
            className="
              group
              flex
              h-full
              flex-col
              rounded-3xl
              border
              border-border/60
              bg-card
              p-6
              shadow-sm
              transition-all
              duration-300
              hover:-translate-y-1
              hover:border-primary/40
              hover:shadow-lg
            "
          >
            <div className="flex items-center gap-3">
              {group.icon}

              <h3 className="text-xl font-semibold">
                {group.title}
              </h3>
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="
                    rounded-full
                    border
                    border-border
                    bg-background
                    px-3
                    py-1.5
                    text-sm
                    font-medium
                    transition-colors
                    duration-300
                    group-hover:border-primary/40
                  "
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Summary */}
      <div
        className="
          rounded-3xl
          border
          border-primary/20
          bg-primary/5
          p-8
          text-center
        "
      >
        <Server className="mx-auto h-10 w-10 text-primary" />

        <h3 className="mt-4 text-2xl font-bold">
          Bridging IT & Software Engineering
        </h3>

        <p className="mx-auto mt-4 max-w-3xl leading-8 text-muted-foreground">
          My background combines enterprise IT support with modern software
          development, giving me practical experience troubleshooting complex
          technical issues while building scalable web applications and
          continuously expanding my engineering knowledge.
        </p>
      </div>
    </section>
  );
}