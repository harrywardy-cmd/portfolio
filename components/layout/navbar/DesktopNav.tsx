"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

import { navLinks } from "./nav-links";

export function DesktopNav() {
  const pathname = usePathname();

  return (
    <nav className="hidden items-center gap-10 md:flex">
      {navLinks.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className={cn(
            "relative text-sm font-medium text-zinc-400 transition-all duration-300 hover:-translate-y-0.5 hover:text-white",
            pathname === link.href && "text-white"
          )}
        >
          {link.title}
        </Link>
      ))}
    </nav>
  );
}