"use client";

import { useMemo, useState } from "react";
import { Search, X } from "lucide-react";

import { filterProjects, getAllTechnologies } from "@/lib/projects";
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
  const [query, setQuery] = useState("");
  const [technology, setTechnology] = useState("");

  const technologies = useMemo(
    () => getAllTechnologies(projects),
    [projects]
  );

  const filteredProjects = filterProjects(projects, {
    category: selectedFilter,
    query,
    technology,
  });

  const isFiltered =
    selectedFilter !== "All" || query !== "" || technology !== "";

  function clearFilters() {
    setSelectedFilter("All");
    setQuery("");
    setTechnology("");
  }

  return (
    <div className="space-y-12">
      <ProjectsHeader headingLevel="h1" />

      <div className="space-y-6">
        <div className="flex flex-col gap-3 sm:flex-row">
          {/* Search */}
          <div className="relative flex-1">
            <label htmlFor="project-search" className="sr-only">
              Search projects
            </label>

            <Search
              aria-hidden="true"
              className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
            />

            <input
              id="project-search"
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search by name, description or technology"
              className="h-11 w-full rounded-xl border border-border bg-card pl-11 pr-4 text-sm outline-none transition focus-visible:border-primary focus-visible:ring-3 focus-visible:ring-primary/20"
            />
          </div>

          {/* Technology */}
          <div>
            <label htmlFor="project-technology" className="sr-only">
              Filter by technology
            </label>

            <select
              id="project-technology"
              value={technology}
              onChange={(event) => setTechnology(event.target.value)}
              className="h-11 w-full rounded-xl border border-border bg-card px-4 text-sm outline-none transition focus-visible:border-primary focus-visible:ring-3 focus-visible:ring-primary/20 sm:w-56"
            >
              <option value="">All technologies</option>

              {technologies.map((name) => (
                <option key={name} value={name}>
                  {name}
                </option>
              ))}
            </select>
          </div>
        </div>

        <ProjectsFilter
          selectedFilter={selectedFilter}
          onFilterChange={setSelectedFilter}
        />

        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <p aria-live="polite">
            Showing {filteredProjects.length} of {projects.length} projects
          </p>

          {isFiltered && (
            <button
              type="button"
              onClick={clearFilters}
              className="inline-flex items-center gap-1 font-medium text-primary hover:text-primary/80"
            >
              <X className="h-3.5 w-3.5" />
              Clear filters
            </button>
          )}
        </div>
      </div>

      <ProjectsGrid
        projects={filteredProjects}
        onClearFilters={clearFilters}
      />
    </div>
  );
}
