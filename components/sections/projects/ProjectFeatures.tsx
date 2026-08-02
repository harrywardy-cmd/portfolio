import { CheckCircle2 } from "lucide-react";

import { projectMetadata } from "@/content/projectMetadata";

interface Props {
  slug: string;
}

export function ProjectFeatures({
  slug,
}: Props) {
  const metadata = projectMetadata[slug];

  return (
    <section className="space-y-6">
      <h2 className="text-3xl font-semibold">
        Key Features
      </h2>

      <div className="grid gap-4 md:grid-cols-2">
        {metadata.features.map((feature) => (
          <div
            key={feature}
            className="flex items-start gap-3 rounded-2xl border p-5"
          >
            <CheckCircle2 className="mt-0.5 h-5 w-5 text-primary" />

            <p>{feature}</p>
          </div>
        ))}
      </div>
    </section>
  );
}