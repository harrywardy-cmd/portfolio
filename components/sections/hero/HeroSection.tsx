import { HeroBadge } from "./HeroBadge";
import { HeroHeading } from "./HeroHeading";
import { HeroDescription } from "./HeroDescription";
import { HeroButtons } from "./HeroButtons";
import { HeroSocials } from "./HeroSocials";
import { HeroStats } from "./HeroStats";
import { CurrentlyBuildingCard } from "./CurrentlyBuildingCard";

import { Container } from "@/components/layout/Container";

export function HeroSection() {
  return (
    <section className="relative isolate overflow-hidden pt-24 pb-20 lg:pt-20 lg:pb-24">
      {/* Background */}
      <div className="absolute inset-0 -z-30 bg-background" />

      {/* Blue Glow */}
      <div className="absolute left-1/2 top-24 -z-20 h-[450px] w-[450px] -translate-x-1/2 rounded-full bg-primary/10 blur-[120px] sm:h-[550px] sm:w-[550px] lg:h-[650px] lg:w-[650px] lg:blur-[140px]" />

      {/* Grid */}
      <div
        className="
          absolute inset-0 -z-10
          opacity-[0.015]
          dark:opacity-[0.025]
          [background-image:linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)]
          [background-size:48px_48px]
        "
      />

      {/* Bottom Fade */}
      <div className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-b from-transparent to-background" />

      <Container>
        <div className="grid items-start gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">
          {/* Left */}
          <div className="max-w-3xl pt-2 lg:pt-6">
            <HeroBadge />

            <div className="mt-5">
              <HeroHeading />
            </div>

            <div className="mt-6 max-w-full lg:max-w-lg">
              <HeroDescription />
            </div>

            {/* Hero Actions */}
            <div className="mt-8 flex flex-row flex-wrap items-center gap-3">
              <HeroButtons />
            </div>

            <div className="mt-8 flex flex-row flex-wrap items-center gap-3">

              <HeroSocials />
            </div>

            <div className="mt-10 border-t border-border/60 pt-8">
              <HeroStats />
            </div>
          </div>

          {/* Right */}
          <div className="relative pt-2">
            <CurrentlyBuildingCard />
          </div>
        </div>
      </Container>
    </section>
  );
}
