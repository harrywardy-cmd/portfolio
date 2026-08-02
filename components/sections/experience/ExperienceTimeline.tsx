import {
  Briefcase,
  Code2,
  GraduationCap,
  Laptop,
} from "lucide-react";

const timeline = [
  {
    title: "Bachelor of Computer Science",
    period: "Education",
    description:
      "Completed a Bachelor of Computer Science with a focus on Software Development, building strong foundations in programming, algorithms, databases, and software engineering principles.",
    icon: <GraduationCap className="h-5 w-5" />,
  },
  {
    title: "IT Service Desk Analyst",
    period: "Current Role",
    description:
      "Provide technical support across enterprise software, hardware, networking, Microsoft 365, and business systems while resolving more than 80 support requests each week.",
    icon: <Briefcase className="h-5 w-5" />,
  },
  {
    title: "Software Engineering Portfolio",
    period: "Continuous Learning",
    description:
      "Designed and developed modern full-stack applications using React, Next.js, TypeScript, Tailwind CSS, Firebase, and REST APIs while continuously improving UI/UX and software architecture skills.",
    icon: <Laptop className="h-5 w-5" />,
  },
  {
    title: "Algorithms & Interview Preparation",
    period: "Ongoing",
    description:
      "Solved more than 75+ LeetCode and NeetCode problems, strengthening problem-solving skills and mastering data structures, algorithms, and technical interview concepts.",
    icon: <Code2 className="h-5 w-5" />,
  },
];

export function ExperienceTimeline() {
  return (
    <section className="space-y-10">
      {/* Header */}
      <div className="mx-auto max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
          Career Journey
        </p>

        <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
          Growing Through Experience
        </h2>

        <p className="mt-5 text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
          My journey combines professional IT experience with continuous
          software engineering learning, allowing me to build practical
          technical skills while developing modern applications and preparing
          for a career in software engineering.
        </p>
      </div>

      {/* Timeline */}
      <div className="relative mx-auto max-w-5xl">
        {/* Vertical Line */}
        <div className="absolute left-5 top-0 h-full w-px bg-border" />

        <div className="space-y-8">
          {timeline.map((item) => (
            <div
              key={item.title}
              className="relative flex gap-6"
            >
              {/* Timeline Icon */}
              <div
                className="
                  relative
                  z-10
                  flex
                  h-10
                  w-10
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-border
                  bg-card
                  text-primary
                  shadow-sm
                "
              >
                {item.icon}
              </div>

              {/* Card */}
              <div
                className="
                  flex-1
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
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <h3 className="text-xl font-semibold">
                    {item.title}
                  </h3>

                  <span className="inline-flex w-fit rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                    {item.period}
                  </span>
                </div>

                <p className="mt-4 leading-7 text-muted-foreground">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}