import type { ReactNode } from "react";

interface ExperienceCardProps {
  title: string;
  subtitle?: string;
  description: string;
  icon?: ReactNode;
}

export function ExperienceCard({
  title,
  subtitle,
  description,
  icon,
}: ExperienceCardProps) {
  return (
    <article
      className="
        group
        flex
        h-full
        gap-5
        rounded-3xl
        border
        border-border/60
        bg-card
        p-6
        shadow-sm
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-primary/40
        hover:shadow-lg
      "
    >
      {icon && (
        <div
          className="
            flex
            h-12
            w-12
            shrink-0
            items-center
            justify-center
            rounded-2xl
            bg-primary/10
            text-primary
            transition-transform
            duration-300
            group-hover:scale-110
          "
        >
          {icon}
        </div>
      )}

      <div className="flex flex-1 flex-col">
        {subtitle && (
          <p className="text-sm font-medium uppercase tracking-wide text-primary">
            {subtitle}
          </p>
        )}

        <h3 className="mt-1 text-xl font-semibold tracking-tight">
          {title}
        </h3>

        <p className="mt-3 flex-grow leading-7 text-muted-foreground">
          {description}
        </p>
      </div>
    </article>
  );
}