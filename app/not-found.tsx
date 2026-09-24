import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { Container } from "@/components/layout/Container";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function NotFound() {
  return (
    <div className="py-24">
      <Container>
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            404
          </p>

          <h1 className="mt-4 text-5xl font-bold tracking-tight">
            Page Not Found
          </h1>

          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            The page you&apos;re looking for doesn&apos;t exist or has been
            moved.
          </p>

          <Link
            href="/"
            className={cn(
              buttonVariants(),
              "group mt-10 rounded-xl px-6 gap-2"
            )}
          >
            <ArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" />

            <span>Back Home</span>
          </Link>
        </div>
      </Container>
    </div>
  );
}
