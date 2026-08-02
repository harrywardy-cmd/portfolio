import Link from "next/link";
import {
  ArrowRight,
  Download,
  Sparkles,
} from "lucide-react";

import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/button";

export function CallToAction() {
  return (
    <section className="py-24">
      <Container>
        <div
          className="
            relative
            overflow-hidden
            rounded-3xl
            border
            border-primary/20
            bg-gradient-to-br
            from-primary/15
            via-primary/5
            to-card
            p-8
            lg:p-12
          "
        >
          {/* Background Glow */}
          <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
          <div className="absolute -bottom-24 left-0 h-60 w-60 rounded-full bg-primary/5 blur-3xl" />

          <div className="relative flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
            {/* Left */}
            <div className="max-w-2xl">
              <div
                className="
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  border
                  border-primary/20
                  bg-primary/10
                  px-4
                  py-1.5
                  text-sm
                  font-medium
                  text-primary
                "
              >
                <Sparkles className="h-4 w-4" />
                Available for Opportunities
              </div>

              <h2 className="mt-6 text-4xl font-bold tracking-tight lg:text-5xl">
                Let's build something great together.
              </h2>

              <p className="mt-5 text-lg leading-8 text-muted-foreground">
                I'm currently seeking graduate and junior software engineering
                opportunities where I can build meaningful products, solve
                challenging problems, and continue growing as an engineer.
              </p>
            </div>

            {/* Right */}
            <div className="flex flex-col gap-4 sm:flex-row lg:flex-col xl:flex-row">
              <Button
                size="lg"
                className="
                  group
                  h-12
                  rounded-xl
                  px-7
                  font-semibold
                  shadow-lg
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                "
              >
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2"
                >
                  Get In Touch

                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="
                  group
                  h-12
                  rounded-xl
                  border-border
                  bg-background/80
                  px-7
                  font-semibold
                  backdrop-blur
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  hover:border-primary/40
                "
              >
                <Link
                  href="/resume"
                  className="inline-flex items-center gap-2"
                >
                  Download Resume

                  <Download className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}