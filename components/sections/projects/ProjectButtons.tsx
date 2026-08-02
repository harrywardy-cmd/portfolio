import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";

import { Button } from "@/components/ui/button";
import { projectMetadata } from "@/content/projectMetadata";

interface Props {
  slug: string;
  githubUrl: string;
}

export function ProjectButtons({
  slug,
  githubUrl,
}: Props) {
  const metadata = projectMetadata[slug];

  return (
    <section className="flex flex-wrap gap-4">
      {metadata.demo && (
        <Button  size="lg">
          <Link
            href={metadata.demo}
            target="_blank"
          >
            Live Demo

            <ArrowUpRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      )}

      <Button
        size="lg"
        variant="outline"
      >
        <Link
          href={githubUrl}
          target="_blank"
        >
          <FaGithub className="mr-2" />

          GitHub
        </Link>
      </Button>
    </section>
  );
}