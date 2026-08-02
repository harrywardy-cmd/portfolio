"use client";

const filters = [
  "All",
  "Web",
  "Python",
  "AI",
  "Cloud",
  "Algorithms",
  "Game Design",
  "University",
];

interface ProjectsFilterProps {
  selectedFilter: string;
  onFilterChange: (filter: string) => void;
}

export function ProjectsFilter({
  selectedFilter,
  onFilterChange,
}: ProjectsFilterProps) {
  return (
    <div className="flex flex-wrap gap-3">
      {filters.map((filter) => {
        const active =
          selectedFilter === filter;

        return (
          <button
            key={filter}
            onClick={() =>
              onFilterChange(filter)
            }
            className={`
              rounded-full
              border
              px-4
              py-2
              text-sm
              font-medium
              transition-all
              duration-300

              ${
                active
                  ? "border-primary bg-primary text-primary-foreground shadow-md"
                  : "border-border bg-card hover:border-primary hover:bg-accent hover:text-primary"
              }
            `}
          >
            {filter}
          </button>
        );
      })}
    </div>
  );
}