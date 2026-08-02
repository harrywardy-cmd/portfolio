import {
  Briefcase,
  Building2,
  Wrench,
} from "lucide-react";

const experiences = [
  {
    company: "Grill'd",
    role: "IT Service Desk Analyst",
    period: "Current",
    icon: <Building2 className="h-5 w-5 text-primary" />,
    highlights: [
      "Resolve 80+ enterprise technical support requests each week across software, hardware, networking, and business systems.",
      "Provide technical support for Microsoft 365, Windows, macOS, Active Directory, Azure AD, and enterprise applications.",
      "Collaborate with internal Digital and Technology teams to investigate issues and improve operational efficiency.",
      "Deliver high-quality customer support while maintaining strong communication and troubleshooting skills.",
    ],
  },
  {
    company: "Professional Development",
    role: "Software Engineering",
    period: "Ongoing",
    icon: <Wrench className="h-5 w-5 text-green-500" />,
    highlights: [
      "Built multiple full-stack applications using Next.js, React, TypeScript, Tailwind CSS, Firebase, and REST APIs.",
      "Solved 75+ algorithm and data structure problems through consistent LeetCode and NeetCode practice.",
      "Developed a modern portfolio integrating GitHub APIs, dynamic content, reusable components, and responsive design.",
      "Continuously study software architecture, clean code principles, and modern frontend development.",
    ],
  },
];

export function ResumeExperience() {
  return (
    <section className="space-y-10">
      {/* Header */}
      <div className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
          Experience
        </p>

        <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
          Professional Experience
        </h2>

        <p className="mt-4 text-lg leading-8 text-muted-foreground">
          My experience combines enterprise IT support with continuous software
          engineering development, giving me practical technical knowledge and
          a strong foundation in modern software development.
        </p>
      </div>

      {/* Timeline */}
      <div className="relative">
        {/* Vertical Line */}
        <div className="absolute left-5 top-0 h-full w-px bg-border" />

        <div className="space-y-8">
          {experiences.map((experience) => (
            <div
              key={experience.role}
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
                  shadow-sm
                "
              >
                {experience.icon}
              </div>

              {/* Card */}
              <article
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
                <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                  <div>
                    <h3 className="text-2xl font-semibold">
                      {experience.role}
                    </h3>

                    <p className="mt-1 text-primary">
                      {experience.company}
                    </p>
                  </div>

                  <span className="inline-flex w-fit rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
                    {experience.period}
                  </span>
                </div>

                <ul className="mt-6 space-y-4">
                  {experience.highlights.map((highlight) => (
                    <li
                      key={highlight}
                      className="flex items-start gap-3"
                    >
                      <Briefcase className="mt-1 h-4 w-4 shrink-0 text-primary" />

                      <span className="leading-7 text-muted-foreground">
                        {highlight}
                      </span>
                    </li>
                  ))}
                </ul>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}