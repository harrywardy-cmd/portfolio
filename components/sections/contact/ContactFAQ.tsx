"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Are you currently looking for opportunities?",
    answer:
      "Yes. I'm actively seeking graduate and junior software engineering roles where I can contribute to meaningful products, learn from experienced engineers, and continue developing my technical skills.",
  },
  {
    question: "Where are you based?",
    answer:
      "I'm based in Melbourne, Victoria, Australia. I'm open to on-site, hybrid, remote, and relocation opportunities depending on the role.",
  },
  {
    question: "What technologies do you work with?",
    answer:
      "I primarily work with TypeScript, JavaScript, React, Next.js, Tailwind CSS, Node.js, Python, Firebase, SQL, Git, and GitHub. I also have experience supporting enterprise Microsoft environments through my current IT role.",
  },
  {
    question: "Can I view your projects and GitHub?",
    answer:
      "Absolutely. My portfolio includes detailed project case studies, and my GitHub showcases full-stack applications, over 1,172 algorithm solutions, and ongoing software engineering projects.",
  },
  {
    question: "How quickly do you usually respond?",
    answer:
      "I typically respond to emails and LinkedIn messages within 24 hours. If your message is regarding a software engineering opportunity, I'll do my best to reply even sooner.",
  },
];

export function ContactFAQ() {
  return (
    <section className="space-y-10">
      {/* Header */}
      <div className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
          Frequently Asked Questions
        </p>

        <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
          Common Questions
        </h2>

        <p className="mt-4 text-lg leading-8 text-muted-foreground">
          A few quick answers to questions I commonly receive from recruiters,
          hiring managers, and fellow developers.
        </p>
      </div>

      {/* FAQ Cards */}
      <div className="grid gap-6 md:grid-cols-2">
        {faqs.map((faq) => (
          <article
            key={faq.question}
            className="
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
            <h3 className="text-lg font-semibold">
              {faq.question}
            </h3>

            <p className="mt-4 leading-7 text-muted-foreground">
              {faq.answer}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}