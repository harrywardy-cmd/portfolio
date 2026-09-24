import type { Metadata } from "next";
import { ProjectsPage } from "@/components/sections/projects/ProjectsPage";

export const metadata: Metadata = {
  title: "Projects",
};

export default function Projects() {
  return <ProjectsPage />;
}