import Link from "next/link";

import {
  FaGithub,
  FaLinkedinIn,
  FaEnvelope,
} from "react-icons/fa";

export function HeroSocials() {
  const socials = [
    {
      href: "https://github.com/harrywardy-cmd",
      icon: FaGithub,
      label: "GitHub",
    },
    {
      href: "https://www.linkedin.com/in/harry-ward-b2b9b4319",
      icon: FaLinkedinIn,
      label: "LinkedIn",
    },
    {
      href: "mailto:your@email.com",
      icon: FaEnvelope,
      label: "Email",
    },
  ];

  return (
    <div className="flex items-center gap-4">
      {socials.map((social) => (
        <Link
          key={social.label}
          href={social.href}
          target="_blank"
          className="flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-card text-muted-foreground transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:text-primary"
          aria-label={social.label}
        >
          <social.icon />
        </Link>
      ))}
    </div>
  );
}