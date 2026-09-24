import { RefreshCw } from "lucide-react";

interface ProjectImprovementsProps {
  improvements: string[];
}

export function ProjectImprovements({
  improvements,
}: ProjectImprovementsProps) {
  return (
    <section>
      <h2 className="text-3xl font-bold tracking-tight">
        What I&apos;d Do Differently
      </h2>

      <ul className="mt-8 space-y-3">
        {improvements.map((improvement) => (
          <li
            key={improvement}
            className="flex items-start gap-3 rounded-2xl border bg-card p-5"
          >
            <RefreshCw className="mt-1 h-5 w-5 shrink-0 text-amber-500" />

            <p className="leading-7">{improvement}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
