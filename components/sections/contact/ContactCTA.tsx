import Link from "next/link";
import {
  ArrowRight,
  Download,
  Mail,
} from "lucide-react";
import { FaGithub } from "react-icons/fa";

import { Button } from "@/components/ui/button";

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
            🚀 Let's Work Together
          </div>

          <h2 className="mt-6 text-4xl font-bold tracking-tight lg:text-5xl">
            Thanks for Visiting My Portfolio
          </h2>

          <p className="mt-5 text-lg leading-8 text-muted-foreground">
            Whether you're hiring, looking for a collaborator, or simply want to
            connect, I'd love to hear from you. Feel free to reach out or explore
            more of my work below.
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-col gap-4 sm:flex-row lg:flex-col xl:flex-row">
          {/* Email */}
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
              href="mailto:harrywardy303@gmail.com"
              className="inline-flex items-center gap-2 whitespace-nowrap"
            >
              <Mail className="h-4 w-4" />

              <span>Email Me</span>

              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </Button>

          {/* Resume */}
          <Button
            variant="outline"
            size="lg"
            className="
              group
              h-12
              rounded-xl
              border-border
              px-7
              font-semibold
              transition-all
              duration-300
              hover:-translate-y-0.5
              hover:border-primary/40
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

          {/* GitHub */}
          <Button
            variant="secondary"
            size="lg"
            className="
              group
              h-12
              rounded-xl
              px-7
              font-semibold
              transition-all
              duration-300
              hover:-translate-y-0.5
            "
          >
            <Link
              href="https://github.com/harrywardy-cmd"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 whitespace-nowrap"
            >
              <FaGithub className="h-4 w-4" />

              <span>View GitHub</span>

              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}