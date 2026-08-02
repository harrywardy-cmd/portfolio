import {
  Award,
  Headphones,
  ShieldCheck,
  Users,
} from "lucide-react";

const achievements = [
  {
    title: "80+ Support Requests Weekly",
    description:
      "Consistently resolve a high volume of technical support requests across software, hardware, networking, and enterprise systems.",
    icon: <Headphones className="h-6 w-6 text-blue-500" />,
  },
  {
    title: "Enterprise IT Support",
    description:
      "Provide technical assistance to employees across multiple business systems, ensuring reliable day-to-day operations.",
    icon: <ShieldCheck className="h-6 w-6 text-green-500" />,
  },
  {
    title: "Cross-Team Collaboration",
    description:
      "Work closely with internal teams to investigate issues, troubleshoot incidents, and deliver effective technical solutions.",
    icon: <Users className="h-6 w-6 text-purple-500" />,
  },
  {
    title: "Continuous Professional Development",
    description:
      "Actively expand software engineering skills through modern web development projects, algorithm practice, and continuous learning outside of work.",
    icon: <Award className="h-6 w-6 text-orange-500" />,
  },
];

export function ExperienceAchievements() {
  return (
    <section className="space-y-10">
      {/* Header */}
      <div className="mx-auto max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
          Achievements
        </p>

        <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
          Professional Impact
        </h2>

        <p className="mt-5 text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
          Throughout my career I've focused on delivering reliable technical
          support while continuously developing my software engineering
          knowledge. These achievements reflect both my professional experience
          and my commitment to continuous improvement.
        </p>
      </div>

      {/* Achievement Cards */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {achievements.map((achievement) => (
          <article
            key={achievement.title}
            className="
              group
              flex
              h-full
              gap-5
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
              {achievement.icon}
            </div>

            <div className="flex flex-1 flex-col">
              <h3 className="text-xl font-semibold tracking-tight">
                {achievement.title}
              </h3>

              <p className="mt-3 leading-7 text-muted-foreground">
                {achievement.description}
              </p>
            </div>
          </article>
        ))}
      </div>

      {/* Summary Card */}
      <div
        className="
          rounded-3xl
          border
          border-primary/20
          bg-gradient-to-br
          from-primary/10
          via-primary/5
          to-card
          p-8
          text-center
        "
      >
        <Award className="mx-auto h-10 w-10 text-primary" />

        <h3 className="mt-4 text-2xl font-bold">
          Always Learning, Always Improving
        </h3>

        <p className="mx-auto mt-4 max-w-3xl leading-8 text-muted-foreground">
          My professional experience has taught me the importance of reliable
          support, effective communication, and problem solving. Combined with
          my passion for software engineering and continuous learning, I'm
          committed to building solutions that create real value for users and
          businesses.
        </p>
      </div>
    </section>
  );
}