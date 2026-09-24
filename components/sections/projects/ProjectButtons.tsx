import Link from "next/link";
import {
  ArrowUpRight,
  FileText,
} from "lucide-react";
import { FaGithub } from "react-icons/fa";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface Props {
  githubUrl?: string;
  demoUrl?: string;
  pdfUrl?: string;
  source: "github" | "local";
}

export function ProjectButtons({
  githubUrl,
  demoUrl,
  pdfUrl,
  source,
}: Props) {
  return (
    <section className="mt-8 flex flex-wrap gap-3">
      {/* Live Demo */}
      {demoUrl && (
        <Link
          href={demoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            buttonVariants({ size: "lg" }),
            "h-12 gap-2"
          )}
        >
          Live Demo
          <ArrowUpRight className="h-4 w-4" />
        </Link>
      )}

      {/* GitHub */}
      {source === "github" && githubUrl && (
        <Link
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            buttonVariants({ variant: "outline", size: "lg" }),
            "h-12 gap-2"
          )}
        >
          <FaGithub className="h-4 w-4" />
          GitHub
          <ArrowUpRight className="h-4 w-4" />
        </Link>
      )}

      {/* PDF */}
      {source === "local" && pdfUrl && (
        <Link
          href={pdfUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            buttonVariants({ variant: "outline", size: "lg" }),
            "h-12 gap-2"
          )}
        >
          <FileText className="h-4 w-4" />
          View Report
          <ArrowUpRight className="h-4 w-4" />
        </Link>
      )}
    </section>
  );
}