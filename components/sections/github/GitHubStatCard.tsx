import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface GitHubStatCardProps {
  title: string;
  value: string;
  description: string;
  href?: string;
  linkLabel?: string;
  icon?: React.ReactNode;
}

export function GitHubStatCard({
  title,
  value,
  description,
  href,
  linkLabel,
  icon,
}: GitHubStatCardProps) {
  return (
    <article
      className="
        group
        flex
        h-full
        flex-col
        rounded-2xl
        border
        border-border/60
        bg-card
        p-6
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-primary/30
        hover:shadow-xl
      "
    >
      {/* Header */}
      <div className="mb-6 flex items-start justify-between">
        <div>
          <p className="text-sm font-medium text-muted-foreground">
            {title}
          </p>

          <h3 className="mt-3 text-3xl font-bold tracking-tight">
            {value}
          </h3>
        </div>

        {icon && (
          <div
            className="
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-xl
              bg-primary/10
              text-primary
            "
          >
            {icon}
          </div>
        )}
      </div>

      {/* Description */}
      <p className="text-sm leading-6 text-muted-foreground">
        {description}
      </p>

      {/* Footer */}
      {href && linkLabel && (
        <div className="mt-auto pt-6">
          <Link
            href={href}
            className="
              inline-flex
              items-center
              gap-2
              text-sm
              font-semibold
              text-primary
              transition-colors
              hover:text-primary/80
            "
          >
            {linkLabel}

            <ArrowRight
              className="
                h-4
                w-4
                transition-transform
                duration-300
                group-hover:translate-x-1
              "
            />
          </Link>
        </div>
      )}
    </article>
  );
}