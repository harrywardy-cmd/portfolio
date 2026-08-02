import { Sparkles } from "lucide-react";

export function HeroBadge() {
  return (
    <div
      className="
        inline-flex
        max-w-full
        items-center
        gap-2
        rounded-full
        border
        border-primary/15
        bg-primary/5
        px-4
        py-2
        text-sm
        font-medium
        text-primary
        shadow-sm
        backdrop-blur-sm
        transition-all
        duration-300
        hover:-translate-y-0.5
        hover:border-primary/30
        hover:bg-primary/10
        hover:shadow-md
        sm:gap-2.5
        sm:px-5
        sm:py-2.5
      "
    >
      <Sparkles className="h-4 w-4 shrink-0" />

      <span className="truncate">
        Hi, I&apos;m Harry 👋
      </span>
    </div>
  );
}