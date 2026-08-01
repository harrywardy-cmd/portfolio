"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import { usePathname } from "next/navigation";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";

import { cn } from "@/lib/utils";
import { navLinks } from "./nav-links";

export function MobileNav() {
  const pathname = usePathname();

  return (
    <Sheet>
      <SheetTrigger
        aria-label="Open navigation menu"
        className={cn(
          "inline-flex h-10 w-10 items-center justify-center rounded-full",
          "text-muted-foreground transition-all duration-300",
          "hover:-translate-y-0.5 hover:bg-accent hover:text-foreground",
          "md:hidden"
        )}
      >
        <Menu className="h-5 w-5" />
      </SheetTrigger>

      <SheetContent
        side="right"
        className="w-[320px] border-l border-border bg-background p-0"
      >
        <SheetHeader className="border-b border-border px-6 py-6">
          <SheetTitle className="text-left">
            <div className="flex items-center gap-3">
              {/* Logo */}
              <div className="text-3xl font-black leading-none tracking-tight">
                <span className="text-primary">H</span>
                <span className="text-sky-400 dark:text-sky-400">W</span>
              </div>

              {/* Name */}
              <div>
                <p className="font-semibold text-foreground">
                  Harry Ward
                </p>

                <p className="text-sm text-muted-foreground">
                  Software Engineer
                </p>
              </div>
            </div>
          </SheetTitle>
        </SheetHeader>

        <nav className="flex flex-col gap-1 px-4 py-6">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;

            return (
              <SheetClose key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    "flex items-center rounded-xl px-4 py-3 text-lg font-medium transition-all duration-200",
                    "hover:bg-accent hover:text-foreground",
                    isActive
                      ? "bg-primary/10 text-primary"
                      : "text-muted-foreground"
                  )}
                >
                  {link.title}
                </Link>
              </SheetClose>
            );
          })}
        </nav>
      </SheetContent>
    </Sheet>
  );
}