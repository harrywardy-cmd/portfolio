import Link from "next/link";
import {
  ArrowUpRight,
  Briefcase,
  Download,
  GraduationCap,
  MapPin,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const stats = [
  {
    icon: <Briefcase className="h-5 w-5 text-primary" />,
    value: "1+",
    label: "Years Experience",
  },
  {
    icon: <GraduationCap className="h-5 w-5 text-green-500" />,
    value: "BCompSci",
    label: "Software Development",
  },
  {
    icon: <MapPin className="h-5 w-5 text-orange-500" />,
    value: "Melbourne",
    label: "Victoria, Australia",
  },
];

export function ResumeHero() {
  return (
    <section className="grid gap-16 lg:grid-cols-2 lg:items-center">
      {/* Left */}
      <div>
        <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
          📄 Resume
        </div>

        <h1 className="mt-6 text-5xl font-bold tracking-tight lg:text-6xl">
          Harry Ward
        </h1>

        <p className="mt-3 text-2xl font-semibold text-primary">
          Software Engineer
        </p>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
          Passionate software engineer with experience supporting enterprise
          technology environments while building modern full-stack web
          applications. I enjoy solving complex problems, learning new
          technologies, and creating software that delivers meaningful user
          experiences.
        </p>

        {/* Skills */}
        <div className="mt-8 flex flex-wrap gap-2">
          {[
            "Next.js",
            "React",
            "TypeScript",
            "Python",
            "Firebase",
            "Tailwind CSS",
            "GitHub",
          ].map((skill) => (
            <Badge key={skill} variant="secondary">
              {skill}
            </Badge>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="
                rounded-2xl
                border
                border-border/60
                bg-card
                p-5
                shadow-sm
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-primary/40
                hover:shadow-lg
              "
            >
              <div className="flex items-center gap-2">
                {stat.icon}

                <span className="text-2xl font-bold">{stat.value}</span>
              </div>

              <p className="mt-2 text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Buttons */}
        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <Button size="lg" className="group rounded-xl px-7">
            <a
              href="/documents/Harry_Ward_Updated_Resume2026.pdf"
              download
              className="inline-flex items-center gap-2 whitespace-nowrap"
            >
              <Download className="h-4 w-4" />

              <span>Download PDF</span>

              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
          </Button>

          <Button variant="outline" size="lg" className="group rounded-xl px-7">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 whitespace-nowrap"
            >
              <span>Contact Me</span>

              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Link>
          </Button>
        </div>
      </div>

      {/* Right */}
      <div className="rounded-3xl border border-border/60 bg-card p-8 shadow-sm">
        <div className="mb-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Professional Summary
          </p>

          <h2 className="mt-3 text-3xl font-bold">At a Glance</h2>
        </div>

        <div className="space-y-5">
          <div className="rounded-2xl border border-border/60 p-5 transition-all duration-300 hover:border-primary/40 hover:shadow-md">
            <h3 className="font-semibold">Enterprise IT Experience</h3>

            <p className="mt-2 leading-7 text-muted-foreground">
              Supporting enterprise users across Microsoft technologies,
              networking, hardware, software, and business systems.
            </p>
          </div>

          <div className="rounded-2xl border border-border/60 p-5 transition-all duration-300 hover:border-primary/40 hover:shadow-md">
            <h3 className="font-semibold">Full-Stack Development</h3>

            <p className="mt-2 leading-7 text-muted-foreground">
              Building responsive applications using Next.js, React, TypeScript,
              Tailwind CSS, Firebase, and REST APIs with a focus on clean
              architecture and user experience.
            </p>
          </div>

          <div className="rounded-2xl border border-border/60 p-5 transition-all duration-300 hover:border-primary/40 hover:shadow-md">
            <h3 className="font-semibold">Continuous Learning</h3>

            <p className="mt-2 leading-7 text-muted-foreground">
              Solved over <strong>1,172+</strong> algorithm and data structure
              problems while continuously expanding my software engineering
              knowledge through projects, technical learning, and hands-on
              development.
            </p>
          </div>

          <div className="rounded-2xl border border-primary/20 bg-primary/5 p-5">
            <h3 className="font-semibold text-primary">Career Objective</h3>

            <p className="mt-2 leading-7 text-muted-foreground">
              Seeking a graduate or junior software engineering role where I can
              contribute to impactful products, collaborate with talented teams,
              and continue growing as a software engineer.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
