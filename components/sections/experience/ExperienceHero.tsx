import Link from "next/link";
import {
  ArrowUpRight,
  Briefcase,
  Building2,
  Laptop,
  Wrench,
} from "lucide-react";
import { Download } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const stats = [
  {
    icon: <Briefcase className="h-5 w-5 text-primary" />,
    value: "1+",
    label: "Years Experience",
  },
  {
    icon: <Wrench className="h-5 w-5 text-orange-500" />,
    value: "80+",
    label: "Tickets Resolved Weekly",
  },
  {
    icon: <Laptop className="h-5 w-5 text-green-500" />,
    value: "Enterprise",
    label: "IT Environment",
  },
];

const highlights = [
  {
    icon: <Building2 className="h-5 w-5 text-primary" />,
    title: "IT Service Desk Analyst",
    description:
      "Supporting enterprise systems across software, hardware, networking, and Microsoft technologies while delivering technical support to internal teams.",
  },
  {
    icon: <Wrench className="h-5 w-5 text-orange-500" />,
    title: "Technical Problem Solving",
    description:
      "Resolve more than 80 technical support requests each week, troubleshooting issues efficiently while maintaining excellent customer service.",
  },
  {
    icon: <Laptop className="h-5 w-5 text-green-500" />,
    title: "Software Engineering Growth",
    description:
      "Outside of work I continue building full-stack applications, studying algorithms, and expanding my software engineering skills through personal projects.",
  },
];

export function ExperienceHero() {
  return (
    <section className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
      {/* Left */}
      <div>
        <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
          💼 Professional Experience
        </div>

        <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
          Building Software Through Real-World Experience
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
          I currently work as an <strong>IT Service Desk Analyst</strong>,
          supporting enterprise systems while continuously developing my
          software engineering skills through personal projects, algorithms, and
          modern web development.
        </p>

        {/* Technologies */}
        <div className="mt-8 flex flex-wrap gap-2">
          {[
            "Windows",
            "Microsoft 365",
            "Networking",
            "Azure AD",
            "React",
            "Next.js",
            "TypeScript",
          ].map((tech) => (
            <Badge key={tech} variant="secondary">
              {tech}
            </Badge>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
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
          <Button size="lg" className="group rounded-xl px-6">
            <a
              href="/documents/Harry_Ward_Updated_Resume2026.pdf"
              download
              className="inline-flex items-center gap-2 whitespace-nowrap"
            >
              <Download className="h-4 w-4" />

              <span>Download Resume</span>

              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
          </Button>

          <Button variant="outline" size="lg" className="group rounded-xl px-6">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 whitespace-nowrap"
            >
              <span>Get In Touch</span>

              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Link>
          </Button>
        </div>
      </div>

      {/* Right */}
      <div className="rounded-3xl border border-border/60 bg-card p-6 shadow-sm lg:p-8">
        <div className="mb-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Current Role
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight">
            What I Do Today
          </h2>
        </div>

        <div className="space-y-5">
          {highlights.map((highlight) => (
            <div
              key={highlight.title}
              className="
                rounded-2xl
                border
                border-border/60
                p-5
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-primary/40
                hover:shadow-md
              "
            >
              <div className="flex items-start gap-4">
                <div className="mt-1 shrink-0">{highlight.icon}</div>

                <div>
                  <h3 className="font-semibold">{highlight.title}</h3>

                  <p className="mt-2 leading-7 text-muted-foreground">
                    {highlight.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
