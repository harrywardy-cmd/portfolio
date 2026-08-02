import Link from "next/link";
import { ArrowRight, Download } from "lucide-react";

import { Button } from "@/components/ui/button";

export function HeroButtons() {
  return (
    <>
      {/* Primary */}
      <Button
        size="lg"
        className="group h-11 rounded-xl px-6 font-semibold shadow-lg shadow-primary/20 transition-all duration-300 hover:-translate-y-0.5"
      >
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 whitespace-nowrap"
        >
          View Projects
          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </Button>

      {/* Secondary */}
      <Button
        size="lg"
        variant="outline"
        className="group h-11 rounded-xl border-border bg-card px-6 font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/40 hover:bg-accent"
      >
        <Link
          href="/documents/Harry_Ward_Updated_Resume2026.pdf"
          download="Harry_Ward_Updated_Resume2026.pdf"
          className="inline-flex items-center gap-2 whitespace-nowrap"
        >
          <span>Download Resume</span>

          <Download className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5" />
        </Link>
      </Button>
    </>
  );
}
