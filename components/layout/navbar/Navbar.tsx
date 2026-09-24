import Link from "next/link";

import { Container } from "../Container";
import { DesktopNav } from "./DesktopNav";
import { MobileNav } from "./MobileNav";
import { Logo } from "./Logo";
import { navLinks } from "./nav-links";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { linkedInPosts } from "@/content/linkedin-posts";
import { getPosts } from "@/lib/blog";
import { siteConfig } from "@/lib/site";

export async function Navbar() {
  // Only link to the blog once there is something to read.
  const hasPosts =
    (await getPosts()).length > 0 || linkedInPosts.length > 0;

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
            <Link
              href={siteConfig.links.github}
              target="_blank"
              aria-label="GitHub"
              className={cn(
                buttonVariants({ variant: "ghost", size: "icon" }),
                "hidden h-10 w-10 rounded-full text-muted-foreground transition-all duration-300 hover:-translate-y-0.5 hover:bg-accent hover:text-foreground md:flex"
              )}
            >
              <FaGithub className="text-[18px]" />
            </Link>

            {/* LinkedIn */}
            <Link
              href={siteConfig.links.linkedin}
              target="_blank"
              aria-label="LinkedIn"
              className={cn(
                buttonVariants({ variant: "ghost", size: "icon" }),
                "hidden h-10 w-10 rounded-full text-muted-foreground transition-all duration-300 hover:-translate-y-0.5 hover:bg-accent hover:text-[#0A66C2] md:flex"
              )}
            >
              <FaLinkedinIn className="text-[17px]" />
            </Link>

            {/* Resume */}
            <Link
              href="/resume"
              className={cn(
                buttonVariants(),
                "group h-12 rounded-xl px-7 font-semibold shadow-lg transition-all duration-300 hover:-translate-y-0.5 gap-2"
              )}
            >
              <span>Resume</span>
            </Link>

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
