import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Construction } from "lucide-react";

import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Blog",
};

export default function BlogPage() {
  return (
    <div className="py-24">
      <Container>
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-primary/10 text-primary">
            <Construction className="h-10 w-10" />
          </div>

          <h1 className="mt-8 text-5xl font-bold tracking-tight">
            Blog Coming Soon
          </h1>

          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            I&apos;m currently working on a technical blog where I&apos;ll share
            software engineering projects, algorithms, system design, and
            lessons learned throughout my development journey.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Button
              className="group rounded-xl px-6 gap-2"
              nativeButton={false}
              render={<Link href="/projects" />}
            >
              <span>View Projects</span>

              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>

            <Button
              variant="outline"
              className="group rounded-xl px-6 gap-2"
              nativeButton={false}
              render={<Link href="/" />}
            >
              <ArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" />

              <span>Back Home</span>
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}