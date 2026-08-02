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
      {filters.map((filter) => (
        <button
          key={filter}
          onClick={() =>
            onFilterChange(filter)
          }
          className={`
            rounded-full
            px-4
            py-2
            text-sm
            font-medium
            transition-all

            ${
              selectedFilter === filter
                ? "bg-primary text-primary-foreground"
                : "border border-border hover:border-primary hover:text-primary"
            }
          `}
        >
          {filter}
        </button>
      ))}
    </div>
  );
}