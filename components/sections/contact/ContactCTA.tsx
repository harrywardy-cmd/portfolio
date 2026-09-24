import Link from "next/link";
import {
  ArrowRight,
  Download,
  Mail,
} from "lucide-react";
import { FaGithub } from "react-icons/fa";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/lib/site";

export function ContactCTA() {
  return (
    <section
      className="
        relative
        overflow-hidden
        rounded-3xl
        border
        border-primary/20
        bg-gradient-to-br
        from-primary/10
        via-primary/5
        to-card
        p-8
        lg:p-12
      "
    >
      {/* Background Glow */}
      <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />

      <div className="absolute -bottom-24 -left-20 h-72 w-72 rounded-full bg-primary/5 blur-3xl" />

      <div className="relative flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
        {/* Content */}
        <div className="max-w-2xl">
          <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
            🚀 Let&apos;s Work Together
          </div>

          <h2 className="mt-6 text-4xl font-bold tracking-tight lg:text-5xl">
            Thanks for Visiting My Portfolio
          </h2>

          <p className="mt-5 text-lg leading-8 text-muted-foreground">
            Whether you&apos;re hiring, looking for a collaborator, or simply want to
            connect, I&apos;d love to hear from you. Feel free to reach out or explore
            more of my work below.
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-col gap-4 sm:flex-row lg:flex-col xl:flex-row">
          {/* Email */}
          <a
            href={siteConfig.links.email}
            className={cn(
              buttonVariants({ size: "lg" }),
              "group h-12 rounded-xl px-7 font-semibold shadow-lg transition-all duration-300 hover:-translate-y-0.5 gap-2"
            )}
          >
            <Mail className="h-4 w-4" />

            <span>Email Me</span>

            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>

          {/* Resume */}
          <a
            href="/documents/Harry_Ward_Updated_Resume2026.pdf"
            download
            className={cn(
              buttonVariants({ variant: "outline", size: "lg" }),
              "group h-12 rounded-xl border-border px-7 font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/40 gap-2"
            )}
          >
            <Download className="h-4 w-4" />

            <span>Download Resume</span>

            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>

          {/* GitHub */}
          <Link
            href={siteConfig.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              buttonVariants({ variant: "secondary", size: "lg" }),
              "group h-12 rounded-xl px-7 font-semibold transition-all duration-300 hover:-translate-y-0.5 gap-2"
            )}
          >
            <FaGithub className="h-4 w-4" />

            <span>View GitHub</span>

            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}