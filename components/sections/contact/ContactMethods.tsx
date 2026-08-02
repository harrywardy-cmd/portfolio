import Link from "next/link";
import { ArrowUpRight, Mail, MapPin } from "lucide-react";

import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const contactMethods = [
  {
    title: "Email",
    value: "harrywardy303@gmail.com",
    description:
      "The best way to reach me for opportunities, collaborations, or general enquiries.",
    href: "mailto:harrywardy303@gmail.com",
    icon: <Mail className="h-6 w-6 text-primary" />,
  },
  {
    title: "LinkedIn",
    value: "Harry Ward",
    description:
      "Connect with me professionally and follow my software engineering journey.",
    href: "https://www.linkedin.com/in/harry-ward-b2b9b4319",
    icon: <FaLinkedinIn className="h-6 w-6 text-blue-500" />,
  },
  {
    title: "GitHub",
    value: "harrywardy-cmd",
    description:
      "Explore my projects, algorithms, and open-source contributions.",
    href: "https://github.com/harrywardy-cmd",
    icon: <FaGithub className="h-6 w-6 text-foreground" />,
  },
  {
    title: "Location",
    value: "Melbourne, Victoria",
    description:
      "Based in Melbourne and open to remote, hybrid, and on-site opportunities.",
    href: null,
    icon: <MapPin className="h-6 w-6 text-green-500" />,
  },
];

export function ContactMethods() {
  return (
    <section className="space-y-10">
      {/* Header */}
      <div className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
          Contact Details
        </p>

        <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
          Let's Connect
        </h2>

        <p className="mt-4 text-lg leading-8 text-muted-foreground">
          Whether you have a software engineering opportunity, project idea, or
          simply want to connect, I'd love to hear from you.
        </p>
      </div>

      {/* Cards */}
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {contactMethods.map((method) => (
          <article
            key={method.title}
            className="
              group
              flex
              h-full
              flex-col
              rounded-3xl
              border
              border-border/60
              bg-card
              p-6
              shadow-sm
              transition-all
              duration-300
              hover:-translate-y-1
              hover:border-primary/40
              hover:shadow-lg
            "
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10">
              {method.icon}
            </div>

            <h3 className="mt-6 text-xl font-semibold">{method.title}</h3>

            <p className="mt-2 font-medium text-primary break-words">
              {method.value}
            </p>

            <p className="mt-4 flex-grow leading-7 text-muted-foreground">
              {method.description}
            </p>

            {method.href && (
              <Link
                href={method.href}
                target={method.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  method.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                className="
                  mt-6
                  inline-flex
                  items-center
                  gap-2
                  font-medium
                  text-primary
                  transition-colors
                  hover:underline
                "
              >
                Get in Touch
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </Link>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
