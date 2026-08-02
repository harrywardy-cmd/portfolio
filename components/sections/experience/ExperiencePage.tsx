import { Container } from "@/components/layout/Container";

import { ExperienceHero } from "./ExperienceHero";
import { ExperienceTimeline } from "./ExperienceTimeline";
import { ExperienceSkills } from "./ExperienceSkills";
import { ExperienceAchievements } from "./ExperienceAchievements";
import { ExperienceCTA } from "./ExperienceCTA";

export function ExperiencePage() {
  return (
    <main className="py-20 lg:py-24">
      <Container>
        <div className="space-y-24">
          {/* Hero */}
          <ExperienceHero />

          {/* Career Timeline */}
          <ExperienceTimeline />

          {/* Technical Skills */}
          <ExperienceSkills />

          {/* Key Achievements */}
          <ExperienceAchievements />

          {/* Call to Action */}
          <ExperienceCTA />
        </div>
      </Container>
    </main>
  );
}