import { CheckCircle2 } from "lucide-react";

interface ProjectFeatureGridProps {
  features: string[];
}

export function ProjectFeatureGrid({
  features,
}: ProjectFeatureGridProps) {
  return (
    <section>
      <h2 className="text-3xl font-bold tracking-tight">
        Key Features
      </h2>

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {features.map((feature) => (
          <div
            key={feature}
            className="
              rounded-2xl
              border
              bg-card
              p-5
              transition
              hover:border-primary/40
              hover:shadow-md
            "
          >
            <div className="flex items-start gap-3">
              <CheckCircle2 className="mt-1 h-6 w-6 text-primary" />

              <p className="font-medium">
                {feature}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}