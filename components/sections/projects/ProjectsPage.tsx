import { Container } from "@/components/layout/Container";

import { ProjectsGrid } from "./ProjectsGrid";
import { ProjectsHeader } from "./ProjectsHeader";

export function ProjectsPage() {
  return (
    <section className="py-20">
      <Container>
        <div className="space-y-12">
          <ProjectsHeader />

          <ProjectsGrid featuredOnly={false} />
        </div>
      </Container>
    </section>
  );
}