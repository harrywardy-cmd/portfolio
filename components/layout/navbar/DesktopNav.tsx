"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import { navLinks } from "./nav-links";

export function DesktopNav() {
  const pathname = usePathname();

  return (
    <nav className="hidden items-center gap-10 lg:flex">
      {navLinks.map((link) => {
        const isActive = pathname === link.href;

        return (
          <Link
            key={link.href}
            href={link.href}
            className={cn(
              "relative text-sm font-medium transition-all duration-300",
              "hover:-translate-y-0.5",
              "hover:text-foreground",
              isActive
                ? "text-primary"
                : "text-muted-foreground"
            )}
          >
            {link.title}

            {/* Active underline */}
            <span
              className={cn(
                "absolute -bottom-2 left-0 h-0.5 rounded-full bg-primary transition-all duration-300",
                isActive ? "w-full" : "w-0"
              )}
            />
          </Link>
        );
      })}
    </nav>
  );
}