"use client";

import Link from "next/link";
import { Menu } from "lucide-react";

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
  return (
    <Sheet>
      <SheetTrigger
        aria-label="Open navigation menu"
        className={cn(
          "inline-flex h-10 w-10 items-center justify-center rounded-full",
          "text-zinc-400 transition-all duration-300",
          "hover:-translate-y-0.5 hover:bg-white/5 hover:text-white",
          "md:hidden"
        )}
      >
        <Menu className="h-5 w-5" />
      </SheetTrigger>

      <SheetContent
        side="right"
        className="w-[320px] border-l border-white/10 bg-[#030712] p-0"
      >
        <SheetHeader className="border-b border-white/10 px-6 py-6">
          <SheetTitle className="text-left">
            <div className="flex items-center gap-3">
              <div className="text-3xl font-black tracking-tight">
                <span className="text-blue-500">H</span>
                <span className="text-sky-400">W</span>
              </div>

              <div>
                <p className="font-semibold text-white">Harry Ward</p>
                <p className="text-sm text-zinc-400">
                  Software Engineer
                </p>
              </div>
            </div>
          </SheetTitle>
        </SheetHeader>

        <nav className="flex flex-col px-4 py-6">
          {navLinks.map((link) => (
            <SheetClose key={link.href}>
              <Link
                href={link.href}
                className="rounded-lg px-4 py-3 text-lg font-medium text-zinc-300 transition-all duration-200 hover:bg-white/5 hover:text-white"
              >
                {link.title}
              </Link>
            </SheetClose>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
}