import { Container } from "@/components/layout/Container";

import { AlgorithmsHero } from "./AlgorithmsHero";
import { AlgorithmsStats } from "./AlgorithmsStats";
import { AlgorithmsTopics } from "./AlgorithmsTopics";
import { AlgorithmsFeaturedSolutions } from "./AlgorithmsFeaturedSolutions";
import { AlgorithmsTimeline } from "./AlgorithmsTimeline";
import { AlgorithmsCTA } from "./AlgorithmsCTA";

export function AlgorithmsPage() {
  return (
    <main className="py-20 lg:py-24">
      <Container>
        <div className="space-y-24">
          {/* Hero */}
          <AlgorithmsHero />

          {/* Statistics */}
          <AlgorithmsStats />

          {/* Topics */}
          <AlgorithmsTopics />

          {/* Featured Solutions */}
          <AlgorithmsFeaturedSolutions />

          {/* Journey Timeline */}
          <AlgorithmsTimeline />

          {/* Call to Action */}
          <AlgorithmsCTA />
        </div>
      </Container>
    </main>
  );
}