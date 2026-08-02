import { Lightbulb } from "lucide-react";

interface ProjectLessonsGridProps {
  lessons: string[];
}

export function ProjectLessonsGrid({
  lessons,
}: ProjectLessonsGridProps) {
  return (
    <section>
      <h2 className="text-3xl font-bold tracking-tight">
        Lessons Learned
      </h2>

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {lessons.map((lesson) => (
          <div
            key={lesson}
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
              <Lightbulb className="mt-1 h-6 w-6 text-green-500" />

              <p className="font-medium">
                {lesson}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}