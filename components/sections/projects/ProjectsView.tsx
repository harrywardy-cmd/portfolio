"use client";

import { useState } from "react";

import type { PortfolioProject } from "@/types/projects";

import { ProjectsFilter } from "./ProjectsFilter";
import { ProjectsGrid } from "./ProjectsGrid";
import { ProjectsHeader } from "./ProjectsHeader";

interface ProjectsViewProps {
  projects: PortfolioProject[];
}

export function ProjectsView({
  projects,
}: ProjectsViewProps) {
  const [selectedFilter, setSelectedFilter] =
    useState("All");

  return (
    <div className="space-y-12">
      <ProjectsHeader />

      <ProjectsFilter
        selectedFilter={selectedFilter}
        onFilterChange={setSelectedFilter}
      />

      <ProjectsGrid
        projects={projects}
        filter={selectedFilter}
      />
    </div>
  );
}