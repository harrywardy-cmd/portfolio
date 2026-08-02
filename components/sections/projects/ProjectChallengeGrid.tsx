import { TriangleAlert } from "lucide-react";

interface ProjectChallengeGridProps {
  challenges: string[];
}

export function ProjectChallengeGrid({
  challenges,
}: ProjectChallengeGridProps) {
  return (
    <section>
      <h2 className="text-3xl font-bold tracking-tight">
        Challenges
      </h2>

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {challenges.map((challenge) => (
          <div
            key={challenge}
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
              <TriangleAlert className="mt-1 h-6 w-6 text-orange-500" />

              <p className="font-medium">
                {challenge}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}