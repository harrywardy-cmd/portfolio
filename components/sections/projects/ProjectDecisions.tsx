import type { ProjectMetadata } from "@/content/projectMetadata";

interface ProjectDecisionsProps {
  decisions: NonNullable<ProjectMetadata["decisions"]>;
}

export function ProjectDecisions({ decisions }: ProjectDecisionsProps) {
  return (
    <section>
      <h2 className="text-3xl font-bold tracking-tight">Key Decisions</h2>

      <ol className="mt-8 space-y-4">
        {decisions.map((decision, index) => (
          <li
            key={decision.title}
            className="flex gap-5 rounded-2xl border bg-card p-6"
          >
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-sm font-bold text-primary">
              {index + 1}
            </span>

            <div>
              <h3 className="font-semibold">{decision.title}</h3>

              <p className="mt-2 leading-7 text-muted-foreground">
                {decision.detail}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
