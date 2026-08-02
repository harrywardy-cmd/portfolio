import Link from "next/link";
import { ArrowLeft, Construction } from "lucide-react";

import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/button";

export default function BlogPage() {
  return (
    <main className="py-24">
      <Container>
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-primary/10 text-primary">
            <Construction className="h-10 w-10" />
          </div>

          <h1 className="mt-8 text-5xl font-bold tracking-tight">
            Blog Coming Soon
          </h1>

          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            I'm currently working on a technical blog where I'll share
            software engineering projects, algorithms, system design,
            and lessons learned throughout my development journey.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Button>
              <Link href="/projects">
                View Projects
              </Link>
            </Button>

            <Button
              variant="outline"
            >
              <Link href="/">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back Home
              </Link>
            </Button>
          </div>
        </div>
      </Container>
    </main>
  );
}