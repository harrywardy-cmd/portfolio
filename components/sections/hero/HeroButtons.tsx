import Link from "next/link";
import { ArrowRight, Download } from "lucide-react";

import { Button } from "@/components/ui/button";

export function HeroButtons() {
  return (
    <div className="flex flex-wrap gap-4">
      <Button size="lg" className="group rounded-xl px-8">
        <Link
          href="/projects"
          className="flex items-center gap-2"
        >
          View My Projects

          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </Button>

      <Button
        size="lg"
        variant="outline"
        className="rounded-xl px-8"
      >
        <Link
          href="/resume"
          className="flex items-center gap-2"
        >
          Download Resume

          <Download className="h-4 w-4" />
        </Link>
      </Button>
    </div>
  );
}