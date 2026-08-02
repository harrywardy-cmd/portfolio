import Link from "next/link";

import { Container } from "../Container";
import { DesktopNav } from "./DesktopNav";
import { MobileNav } from "./MobileNav";
import { Logo } from "./Logo";

import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

import { FaGithub, FaLinkedinIn, FaDownload } from "react-icons/fa";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/80 backdrop-blur-2xl transition-all duration-300">
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
              className="hidden h-10 w-10 rounded-full text-muted-foreground transition-all duration-300 hover:-translate-y-0.5 hover:bg-accent hover:text-foreground md:flex"
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
              className="hidden h-10 w-10 rounded-full text-muted-foreground transition-all duration-300 hover:-translate-y-0.5 hover:bg-accent hover:text-[#0A66C2] md:flex"
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
            <Button className="group h-12 rounded-xl px-7 font-semibold shadow-lg transition-all duration-300 hover:-translate-y-0.5">
              <Link
                href="app\resume\Harry_Ward_Updated_Resume(2026).pdf"
                target="_blank"
                download
                className="inline-flex items-center gap-2 whitespace-nowrap"
              >
                <span>Resume</span>

                <FaDownload
                  className="
        text-[12px]
        opacity-90
        transition-transform
        duration-300
        group-hover:translate-y-0.5
      "
                />
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
