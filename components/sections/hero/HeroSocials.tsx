import Link from "next/link";

import {
  FaEnvelope,
  FaGithub,
  FaLinkedinIn,
} from "react-icons/fa";

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
    href: "mailto:harrywardy303@gmail.com",
    icon: FaEnvelope,
    label: "Email",
  },
];

export function HeroSocials() {
  return (
    <>
      {socials.map((social) => {
        const Icon = social.icon;

        return (
          <Link
            key={social.label}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.label}
            className="
              group
              inline-flex
              h-11
              w-11
              shrink-0
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
            <Icon className="text-[16px] transition-transform duration-300 group-hover:scale-110" />
          </Link>
        );
      })}
    </>
  );
}