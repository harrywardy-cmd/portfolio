"use client";

import { useEffect } from "react";
import { RotateCcw } from "lucide-react";

import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="py-24">
      <Container>
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <h1 className="text-5xl font-bold tracking-tight">
            Something Went Wrong
          </h1>

          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            An unexpected error occurred while loading this page. Please try
            again.
          </p>

          <Button
            onClick={reset}
            className="group mt-10 rounded-xl px-6 gap-2"
          >
            <RotateCcw className="h-4 w-4 transition-transform duration-300 group-hover:-rotate-45" />

            <span>Try Again</span>
          </Button>
        </div>
      </Container>
    </div>
  );
}
