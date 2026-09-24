import Link from "next/link";

import { Container } from "../Container";
import { DesktopNav } from "./DesktopNav";
import { MobileNav } from "./MobileNav";
import { Logo } from "./Logo";
import { navLinks } from "./nav-links";

import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { getPosts } from "@/lib/blog";
import { siteConfig } from "@/lib/site";

export async function Navbar() {
  // Only link to the blog once there is something to read.
  const hasPosts = (await getPosts()).length > 0;

  const links = hasPosts
    ? navLinks
    : navLinks.filter((link) => link.href !== "/blog");

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/80 backdrop-blur-2xl transition-all duration-300">
      <Container>
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Logo />

          {/* Desktop Navigation */}
          <DesktopNav links={links} />

          {/* Right Actions */}
          <div className="flex items-center gap-3">
            {/* GitHub */}
            <Button
              variant="ghost"
              size="icon"
              className="hidden h-10 w-10 rounded-full text-muted-foreground transition-all duration-300 hover:-translate-y-0.5 hover:bg-accent hover:text-foreground md:flex"
              nativeButton={false}
              render={
                <Link
                  href={siteConfig.links.github}
                  target="_blank"
                  aria-label="GitHub"
                />
              }
            >
              <FaGithub className="text-[18px]" />
            </Button>

            {/* LinkedIn */}
            <Button
              variant="ghost"
              size="icon"
              className="hidden h-10 w-10 rounded-full text-muted-foreground transition-all duration-300 hover:-translate-y-0.5 hover:bg-accent hover:text-[#0A66C2] md:flex"
              nativeButton={false}
              render={
                <Link
                  href={siteConfig.links.linkedin}
                  target="_blank"
                  aria-label="LinkedIn"
                />
              }
            >
              <FaLinkedinIn className="text-[17px]" />
            </Button>

            {/* Resume */}
            <Button
              className="group h-12 rounded-xl px-7 font-semibold shadow-lg transition-all duration-300 hover:-translate-y-0.5 gap-2"
              nativeButton={false}
              render={<Link href="/resume" />}
            >
              <span>Resume</span>
            </Button>

            {/* Theme Toggle */}
            <ThemeToggle />

            {/* Mobile Menu */}
            <MobileNav links={links} />
          </div>
        </div>
      </Container>
    </header>
  );
}
