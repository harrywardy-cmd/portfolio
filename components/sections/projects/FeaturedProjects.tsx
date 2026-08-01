import { Container } from "@/components/layout/Container";

import { ProjectsGrid } from "./ProjectsGrid";
import { ProjectsHeader } from "./ProjectsHeader";

export function FeaturedProjects() {
  return (
    <section className="py-24">
      <Container>
        <ProjectsHeader />

        <ProjectsGrid />
      </Container>
    </section>
  );
}