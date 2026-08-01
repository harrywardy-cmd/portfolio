import { Sparkles } from "lucide-react";

export function HeroBadge() {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 shadow-sm">
      <Sparkles className="h-4 w-4 text-primary" />

      <span className="text-sm font-medium text-muted-foreground">
        Hi, I&#39;m Harry
      </span>
    </div>
  );
}