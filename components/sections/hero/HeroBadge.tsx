import { Sparkles } from "lucide-react";

export function HeroBadge() {
  return (
<div className="inline-flex items-center gap-2.5 rounded-full border border-primary/15 bg-primary/5 px-5 py-2.5 text-sm font-medium text-primary shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/30 hover:bg-primary/10 hover:shadow-md">
      <Sparkles className="h-4 w-4" />

      <span>Hi, I&apos;m Harry 👋</span>
    </div>
  );
}
