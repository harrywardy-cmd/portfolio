import {
  Cloud,
  Code2,
  Database,
  GitBranch,
  Laptop,
  Network,
} from "lucide-react";

const skillGroups = [
  {
    title: "Programming Languages",
    icon: <Code2 className="h-6 w-6 text-primary" />,
    skills: [
      "TypeScript",
      "JavaScript",
      "Python",
      "Java",
      "C",
      "C++",
      "C#",
      "Kotlin",
      "PHP",
      "Ruby",
      "PowerShell",
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
      "HTML5",
      "CSS3",
      "JavaScript",
      "TypeScript",
      "XML",
    ],
  },
  {
    title: "Backend & Databases",
    icon: <Database className="h-6 w-6 text-green-500" />,
    skills: [
      "Node.js",
      "Express.js",
      "Firebase",
      "Prisma",
      "tRPC",
      "REST APIs",
      "MongoDB",
      "MySQL",
      "SQL",
    ],
  },
  {
    title: "Cloud & DevOps",
    icon: <Cloud className="h-6 w-6 text-sky-500" />,
    skills: [
      "Git",
      "GitHub",
      "GitHub Actions",
      "Vercel",
      "CI/CD",
    ],
  },
  {
    title: "Enterprise IT",
    icon: <Network className="h-6 w-6 text-orange-500" />,
    skills: [
      "Microsoft 365",
      "Azure Active Directory",
      "Windows",
      "macOS",
      "Networking",
      "Active Directory",
      "Enterprise Support",
      "Troubleshooting",
    ],
  },
  {
    title: "Professional Skills",
    icon: <GitBranch className="h-6 w-6 text-purple-500" />,
    skills: [
      "Problem Solving",
      "Communication",
      "Team Collaboration",
      "Customer Support",
      "Documentation",
      "Analytical Thinking",
      "Agile Development",
    ],
  },
];

export function ResumeSkills() {
  return (
    <section className="space-y-10">
      {/* Header */}
      <div className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
          Technical Skills
        </p>

        <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
          Technologies & Tools
        </h2>

        <p className="mt-4 text-lg leading-8 text-muted-foreground">
          A combination of software engineering technologies, enterprise IT
          experience, and professional skills developed through industry
          experience, personal projects, and continuous learning.
        </p>
      </div>

      {/* Skill Categories */}
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {skillGroups.map((group) => (
          <article
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
          </article>
        ))}
      </div>
    </section>
  );
}