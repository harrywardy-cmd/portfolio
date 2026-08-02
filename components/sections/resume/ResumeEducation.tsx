import {
  Award,
  BookOpen,
  GraduationCap,
} from "lucide-react";

const education = [
  {
    title: "Bachelor of Computer Science",
    institution: "Swinburne University of Technology",
    period: "2021 – 2024",
    icon: <GraduationCap className="h-6 w-6 text-primary" />,
    description:
      "Completed a Bachelor of Computer Science with a major in Software Development and a minor in Games & Interactivity. Built a strong foundation in software engineering, algorithms, databases, cloud computing, artificial intelligence, and scalable application development.",
  },
  {
    title: "Continuous Professional Development",
    institution: "Personal Learning & Projects",
    period: "Ongoing",
    icon: <BookOpen className="h-6 w-6 text-green-500" />,
    description:
      "Continuously expanding my software engineering knowledge through full-stack projects, algorithm practice, technical reading, AI development, and modern web technologies while applying new skills in real-world applications.",
  },
];

const highlights = [
  "Software Development",
  "Advanced Web Development",
  "Cloud Computing",
  "Artificial Intelligence",
  "Creating Secure & Scalable Software",
  "Software Testing & Reliability",
  "Data Structures & Algorithms",
  "Games & Interactivity",
];

export function ResumeEducation() {
  return (
    <section className="space-y-10">
      {/* Header */}
      <div className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
          Education
        </p>

        <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
          Academic Background
        </h2>

        <p className="mt-4 text-lg leading-8 text-muted-foreground">
          My university education provided a strong foundation in software
          engineering, while continuous self-directed learning keeps my skills
          aligned with modern technologies, development practices, and industry
          trends.
        </p>
      </div>

      {/* Education Cards */}
      <div className="grid gap-6 lg:grid-cols-2">
        {education.map((item) => (
          <article
            key={item.title}
            className="
              group
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
            <div className="flex items-start gap-4">
              <div
                className="
                  flex
                  h-12
                  w-12
                  shrink-0
                  items-center
                  justify-center
                  rounded-2xl
                  bg-primary/10
                  transition-transform
                  duration-300
                  group-hover:scale-110
                "
              >
                {item.icon}
              </div>

              <div className="flex-1">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <h3 className="text-xl font-semibold">
                      {item.title}
                    </h3>

                    <p className="mt-1 text-primary">
                      {item.institution}
                    </p>
                  </div>

                  <span className="inline-flex w-fit rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                    {item.period}
                  </span>
                </div>

                <p className="mt-4 leading-7 text-muted-foreground">
                  {item.description}
                </p>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Coursework */}
      <div
        className="
          rounded-3xl
          border
          border-border/60
          bg-card
          p-8
          shadow-sm
        "
      >
        <div className="flex items-center gap-3">
          <Award className="h-6 w-6 text-primary" />

          <h3 className="text-2xl font-semibold">
            Relevant Coursework
          </h3>
        </div>

        <p className="mt-3 text-muted-foreground">
          Throughout my degree I studied a broad range of software engineering
          and computer science topics that continue to influence how I design,
          build, and maintain modern applications.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          {highlights.map((highlight) => (
            <span
              key={highlight}
              className="
                rounded-full
                border
                border-border
                bg-background
                px-4
                py-2
                text-sm
                font-medium
                transition-colors
                hover:border-primary/40
              "
            >
              {highlight}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}