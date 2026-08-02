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
    <section className="flex flex-wrap gap-4">
      {/* Live Demo */}
      {demoUrl && (
        <Button size="lg">
          <Link
            href={demoUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Live Demo
            <ArrowUpRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      )}

      {/* GitHub */}
      {source === "github" && githubUrl && (
        <Button
          size="lg"
          variant="outline"
        >
          <Link
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="mr-2 h-4 w-4" />
            GitHub
          </Link>
        </Button>
      )}

      {/* PDF Report */}
      {source === "local" && pdfUrl && (
        <Button
          size="lg"
          variant="outline"
        >
          <Link
            href={pdfUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FileText className="mr-2 h-4 w-4" />
            View Report
          </Link>
        </Button>
      )}
    </section>
  );
}