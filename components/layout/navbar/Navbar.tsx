import Link from "next/link";

import { Container } from "../Container";
import { DesktopNav } from "./DesktopNav";
import { MobileNav } from "./MobileNav";
import { Logo } from "./Logo";

import { Button } from "@/components/ui/button";

import { FaGithub, FaLinkedinIn, FaDownload } from "react-icons/fa";

import { ThemeToggle } from "@/components/ui/ThemeToggle";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/5 bg-[#030712]/80 backdrop-blur-2xl transition-all duration-300">
      <Container>
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Logo />

          {/* Desktop Navigation */}
          <DesktopNav />

          {/* Right Actions */}
          <div className="flex items-center gap-3">
            {/* GitHub */}
            <Button
              variant="ghost"
              size="icon"
              className="hidden h-10 w-10 rounded-full text-zinc-400 transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/5 hover:text-white md:flex"
            >
              <Link
                href="https://github.com/harrywardy-cmd"
                target="_blank"
                aria-label="GitHub"
              >
                <FaGithub className="text-[18px]" />
              </Link>
            </Button>

            {/* LinkedIn */}
            <Button
              variant="ghost"
              size="icon"
              className="hidden h-10 w-10 rounded-full text-zinc-400 transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/5 hover:text-[#0A66C2] md:flex"
            >
              <Link
                href="https://www.linkedin.com/in/harry-ward-b2b9b4319"
                target="_blank"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn className="text-[17px]" />
              </Link>
            </Button>

            {/* Resume */}
            <Button className="group h-12 rounded-xl bg-blue-600 px-7 font-semibold text-white shadow-lg shadow-blue-600/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-500 hover:shadow-blue-500/30">
              <Link
                href="/resume"
                className="inline-flex items-center gap-2 whitespace-nowrap"
              >
                <span>Resume</span>

                <FaDownload className="text-[12px] opacity-90 transition-transform duration-300 group-hover:translate-y-0.5" />
              </Link>
            </Button>

            {/* Theme Toggle */}
            <ThemeToggle />

            {/* Mobile Menu */}
            <MobileNav />
          </div>
        </div>
      </Container>
    </header>
  );
}
