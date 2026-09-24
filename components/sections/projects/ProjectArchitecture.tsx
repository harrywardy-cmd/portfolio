import { Fragment } from "react";
import { ArrowDown, ArrowRight } from "lucide-react";

import type { ProjectMetadata } from "@/content/projectMetadata";

interface ProjectArchitectureProps {
  architecture: NonNullable<ProjectMetadata["architecture"]>;
}

/**
 * Layered architecture diagram: layers flow left to right on large
 * screens and top to bottom on small ones.
 */
export function ProjectArchitecture({
  architecture,
}: ProjectArchitectureProps) {
  const { title = "Architecture", summary, layers } = architecture;

  return (
    <section>
      <h2 className="text-3xl font-bold tracking-tight">{title}</h2>

      <p className="mt-6 leading-8 text-muted-foreground">{summary}</p>

      <div
        role="list"
        aria-label={`${title} diagram`}
        className="mt-8 flex flex-col items-stretch gap-3 lg:flex-row"
      >
        {layers.map((layer, index) => (
          <Fragment key={layer.name}>
            {index > 0 && (
              <div
                aria-hidden="true"
                className="flex items-center justify-center text-primary"
              >
                <ArrowDown className="h-5 w-5 lg:hidden" />
                <ArrowRight className="hidden h-5 w-5 lg:block" />
              </div>
            )}

            <div
              role="listitem"
              className="flex-1 rounded-2xl border border-border/60 bg-card p-5"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-primary">
                {String(index + 1).padStart(2, "0")}
              </p>

              <h3 className="mt-2 text-lg font-semibold">{layer.name}</h3>

              {layer.description && (
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  {layer.description}
                </p>
              )}

              <ul className="mt-4 space-y-2">
                {layer.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-lg border border-border/60 bg-muted/50 px-3 py-2 text-sm"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Fragment>
        ))}
      </div>
    </section>
  );
}
