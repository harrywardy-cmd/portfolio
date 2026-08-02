import Link from "next/link";
import { ArrowRight, Download, Mail } from "lucide-react";

import { Button } from "@/components/ui/button";

export function ExperienceCTA() {
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

      <div className="absolute -bottom-20 left-0 h-64 w-64 rounded-full bg-primary/5 blur-3xl" />

      <div className="relative flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
        {/* Content */}
        <div className="max-w-2xl">
          <div
            className="
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-primary/20
              bg-primary/10
              px-4
              py-1.5
              text-sm
              font-medium
              text-primary
            "
          >
            💼 Let's Connect
          </div>

          <h2 className="mt-6 text-4xl font-bold tracking-tight lg:text-5xl">
            Ready for My Next Challenge
          </h2>

          <p className="mt-5 text-lg leading-8 text-muted-foreground">
            I'm currently seeking graduate and junior software engineering
            opportunities where I can contribute to meaningful products,
            collaborate with talented teams, and continue growing as an
            engineer.
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-col gap-4 sm:flex-row lg:flex-col xl:flex-row">
          <Button
            size="lg"
            className="
              group
              h-12
              rounded-xl
              px-7
              font-semibold
              shadow-lg
              transition-all
              duration-300
              hover:-translate-y-0.5
            "
          >
            <a
              href="/documents/Harry_Ward_Updated_Resume2026.pdf"
              download
              className="inline-flex items-center gap-2 whitespace-nowrap"
            >
              <Download className="h-4 w-4" />

              <span>Download Resume</span>

              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </Button>

          <Button
            variant="outline"
            size="lg"
            className="
              group
              h-12
              rounded-xl
              border-border
              bg-background/80
              px-7
              font-semibold
              backdrop-blur
              transition-all
              duration-300
              hover:-translate-y-0.5
              hover:border-primary/40
            "
          >
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 whitespace-nowrap"
            >
              <Mail className="h-4 w-4" />

              <span>Get In Touch</span>

              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}