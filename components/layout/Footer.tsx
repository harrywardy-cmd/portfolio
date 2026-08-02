import Link from "next/link";
import { ArrowUpRight, Mail } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

import { Container } from "./Container";

export function Footer() {
  return (
    <footer className="border-t border-border/60 bg-background">
      <Container>
        <div className="py-16">
          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary font-bold text-primary-foreground">
                  HW
                </div>

                <div>
                  <h3 className="text-lg font-semibold">
                    Harry Ward
                  </h3>

                  <p className="text-sm text-muted-foreground">
                    Software Engineer
                  </p>
                </div>
              </div>

              <p className="mt-6 leading-7 text-muted-foreground">
                Passionate about building modern web applications,
                solving challenging problems, and continuously
                learning through software engineering.
              </p>
            </div>

            {/* Navigation */}
            <div>
              <h4 className="font-semibold">
                Navigation
              </h4>

              <nav className="mt-5 flex flex-col gap-3">
                {[
                  ["Home", "/"],
                  ["Projects", "/projects"],
                  ["Resume", "/resume"],
                  ["Contact", "/contact"],
                ].map(([label, href]) => (
                  <Link
                    key={label}
                    href={href}
                    className="text-muted-foreground transition-colors hover:text-primary"
                  >
                    {label}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Resources */}
            <div>
              <h4 className="font-semibold">
                Resources
              </h4>

              <nav className="mt-5 flex flex-col gap-3">
                <Link
                  href="https://github.com/harrywardy-cmd"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  GitHub
                </Link>

                <Link
                  href="https://www.linkedin.com/in/harry-ward-b2b9b4319"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  LinkedIn
                </Link>

                <Link
                  href="/projects/algorithms-datastructures"
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  Algorithms
                </Link>

                <span className="text-muted-foreground/60">
                  Blog (Coming Soon)
                </span>
              </nav>
            </div>

            {/* Connect */}
            <div>
              <h4 className="font-semibold">
                Let's Connect
              </h4>

              <div className="mt-5 flex gap-3">
                {[
                  {
                    href: "https://github.com/harrywardy-cmd",
                    icon: <FaGithub className="h-5 w-5" />,
                  },
                  {
                    href: "https://www.linkedin.com/in/harry-ward-b2b9b4319",
                    icon: <FaLinkedinIn className="h-5 w-5" />,
                  },
                  {
                    href: "mailto:harrywardy303@gmail.com",
                    icon: <Mail className="h-5 w-5" />,
                  },
                ].map(({ href, icon }) => (
                  <Link
                    key={href}
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="
                      flex
                      h-11
                      w-11
                      items-center
                      justify-center
                      rounded-xl
                      border
                      border-border
                      bg-card
                      text-muted-foreground
                      transition-all
                      duration-300
                      hover:-translate-y-0.5
                      hover:border-primary/40
                      hover:bg-accent
                      hover:text-primary
                    "
                  >
                    {icon}
                  </Link>
                ))}
              </div>

              <p className="mt-6 text-sm leading-6 text-muted-foreground">
                Built with Next.js, TypeScript,
                Tailwind CSS and shadcn/ui.
              </p>
            </div>
          </div>

          <div className="mt-16 flex flex-col gap-4 border-t border-border/60 pt-8 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between">
            <p>
              © {new Date().getFullYear()} Harry Ward. All rights
              reserved.
            </p>

            <Link
              href="https://github.com/harrywardy-cmd/portfolio"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 transition-colors hover:text-primary"
            >
              View Portfolio Source

              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}