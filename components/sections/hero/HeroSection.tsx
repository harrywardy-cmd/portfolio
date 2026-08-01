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
    <section className="relative overflow-hidden py-20 lg:py-28">
      <Container>
        <div className="grid items-start gap-16 lg:grid-cols-[1.05fr_0.95fr]">
          {/* Left */}
          <div className="space-y-8">
            <HeroBadge />

            <HeroHeading />

            <HeroDescription />

            <HeroButtons />

            <HeroSocials />

            <HeroStats />
          </div>

          {/* Right */}
          <CurrentlyBuildingCard />
        </div>
      </Container>
    </section>
  );
}