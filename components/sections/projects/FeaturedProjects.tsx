import { Container } from "@/components/layout/Container";

import { ProjectsGrid } from "./ProjectsGrid";
import { ProjectsHeader } from "./ProjectsHeader";

export function FeaturedProjects() {
  return (
    <section
      id="projects"
      className="relative py-20 lg:py-24"
    >
      <Container>
        <div className="space-y-12">
          <ProjectsHeader />

          <ProjectsGrid />
        </div>

        {/* Bottom Divider */}
        <div className="mt-20 border-t border-border/60" />
      </Container>
    </section>
  );
}