"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Briefcase, Mail, MapPin } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const stats = [
  {
    icon: <Briefcase className="h-5 w-5 text-primary" />,
    value: "Open",
    label: "Opportunities",
  },
  {
    icon: <MapPin className="h-5 w-5 text-green-500" />,
    value: "Melbourne",
    label: "Victoria, Australia",
  },
  {
    icon: <Mail className="h-5 w-5 text-orange-500" />,
    value: "<24h",
    label: "Typical Response",
  },
];

export function ContactHero() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    await navigator.clipboard.writeText("harrywardy303@gmail.com");

    setCopied(true);

    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="grid gap-16 lg:grid-cols-2 lg:items-center">
      {/* Left */}
      <div>
        <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
          📬 Contact
        </div>

        <h1 className="mt-6 text-5xl font-bold tracking-tight lg:text-6xl">
          Let's Connect
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
          Thanks for stopping by! Whether you have a software engineering
          opportunity, want to collaborate on a project, or simply want to chat
          about technology, I'd love to hear from you.
        </p>

        {/* Skills */}
        <div className="mt-8 flex flex-wrap gap-2">
          {[
            "Software Engineering",
            "Full-Stack Development",
            "Next.js",
            "React",
            "TypeScript",
            "Problem Solving",
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
        <div className="mt-10 flex flex-col gap-4 sm:flex-row"></div>
      </div>

      {/* Right */}
      <div className="rounded-3xl border border-border/60 bg-card p-8 shadow-sm">
        <div className="mb-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Contact Information
          </p>

          <h2 className="mt-3 text-3xl font-bold">Get in Touch</h2>
        </div>

        <div className="space-y-5">
          <div
            className="
    group
    rounded-2xl
    border
    border-border/60
    p-5
    transition-all
    duration-300
    hover:border-primary/40
    hover:shadow-md
  "
          >
            <div className="flex items-center gap-3">
              <Mail className="h-5 w-5 text-primary" />

              <h3 className="font-semibold">Email</h3>
            </div>

            <p
              onClick={copyEmail}
              className="
    mt-3
    cursor-pointer
    break-all
    text-muted-foreground
    transition-colors
    duration-300
    hover:text-primary
    hover:underline
  "
            >
              {copied ? "Copied to clipboard! ✓" : "harrywardy303@gmail.com"}
            </p>
          </div>

          <Link
            href="https://www.linkedin.com/in/harry-ward-b2b9b4319"
            target="_blank"
            rel="noopener noreferrer"
            className="group block rounded-2xl border border-border/60 p-5 transition-all duration-300 hover:border-primary/40 hover:shadow-md"
          >
            <div className="flex items-center gap-3">
              <FaLinkedinIn className="h-5 w-5 text-blue-500" />

              <h3 className="font-semibold">LinkedIn</h3>
            </div>

            <p className="mt-3 text-muted-foreground">
              linkedin.com/in/harry-ward-b2b9b4319
            </p>
          </Link>

          <Link
            href="https://github.com/harrywardy-cmd"
            target="_blank"
            rel="noopener noreferrer"
            className="group block rounded-2xl border border-border/60 p-5 transition-all duration-300 hover:border-primary/40 hover:shadow-md"
          >
            <div className="flex items-center gap-3">
              <FaGithub className="h-5 w-5" />

              <h3 className="font-semibold">GitHub</h3>
            </div>

            <p className="mt-3 text-muted-foreground">
              github.com/harrywardy-cmd
            </p>
          </Link>

          <div className="rounded-2xl border border-primary/20 bg-primary/5 p-5">
            <div className="flex items-center gap-3">
              <MapPin className="h-5 w-5 text-primary" />

              <h3 className="font-semibold text-primary">Location</h3>
            </div>

            <p className="mt-3 leading-7 text-muted-foreground">
              Melbourne, Victoria, Australia
              <br />
              Open to remote, hybrid, and on-site software engineering
              opportunities across Australia.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
