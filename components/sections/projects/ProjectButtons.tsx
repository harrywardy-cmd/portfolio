import Link from "next/link";
import {
  ArrowUpRight,
  FileText,
} from "lucide-react";
import { FaGithub } from "react-icons/fa";

import { Button } from "@/components/ui/button";

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
        <Button
          size="lg"
          className="h-12"
        >
          <Link
            href={demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2"
          >
            Live Demo
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </Button>
      )}

      {/* GitHub */}
      {source === "github" && githubUrl && (
        <Button
          size="lg"
          variant="outline"
          className="h-12"
        >
          <Link
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2"
          >
            <FaGithub className="h-4 w-4" />
            GitHub
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </Button>
      )}

      {/* PDF */}
      {source === "local" && pdfUrl && (
        <Button
          size="lg"
          variant="outline"
          className="h-12"
        >
          <Link
            href={pdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2"
          >
            <FileText className="h-4 w-4" />
            View Report
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </Button>
      )}
    </section>
  );
}