import { Container } from "@/components/layout/Container";

import { ResumeHero } from "./ResumeHero";
import { ResumeExperience } from "./ResumeExperience";
import { ResumeEducation } from "./ResumeEducation";
import { ResumeSkills } from "./ResumeSkills";
import { ResumeProjects } from "./ResumeProjects";
import { ResumeCTA } from "./ResumeCTA";

export function ResumePage() {
  return (
    <main className="py-20 lg:py-24">
      <Container>
        <div className="space-y-24">
          {/* Hero */}
          <ResumeHero />

          {/* Professional Experience */}
          <ResumeExperience />

          {/* Education */}
          <ResumeEducation />

          {/* Technical Skills */}
          <ResumeSkills />

          {/* Featured Projects */}
          <ResumeProjects />

          {/* Call To Action */}
          <ResumeCTA />
        </div>
      </Container>
    </main>
  );
}