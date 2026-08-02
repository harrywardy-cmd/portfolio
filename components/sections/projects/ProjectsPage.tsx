import { Container } from "@/components/layout/Container";

import { ProjectsView } from "./ProjectsView";

import { getPortfolioProjects } from "@/lib/projects";

export async function ProjectsPage() {
  const projects =
    await getPortfolioProjects();

  return (
    <section className="py-20">
      <Container>
        <ProjectsView
          projects={projects}
        />
      </Container>
    </section>
  );
}