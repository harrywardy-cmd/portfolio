"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <Button
        variant="ghost"
        size="icon"
        className="hidden h-10 w-10 rounded-full md:flex"
      />
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <Button
      variant="ghost"
      size="icon"
      aria-label="Toggle Theme"
      className="group hidden h-10 w-10 rounded-full text-zinc-400 transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/5 hover:text-white md:flex"
      onClick={() => setTheme(isDark ? "light" : "dark")}
    >
      <div
        className={`transition-transform duration-500 ${
          isDark ? "rotate-0" : "rotate-180"
        }`}
      >
        {isDark ? (
          <Moon className="h-4 w-4" />
        ) : (
          <Sun className="h-4 w-4" />
        )}
      </div>
    </Button>
  );
}