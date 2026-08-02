"use client";

import { Send } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export function ContactForm() {
  return (
    <section className="space-y-10">
      {/* Header */}
      <div className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
          Send a Message
        </p>

        <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
          I'd Love to Hear From You
        </h2>

        <p className="mt-4 text-lg leading-8 text-muted-foreground">
          Whether you're reaching out about a software engineering opportunity,
          collaboration, or simply want to connect, feel free to send me a
          message. I'll get back to you as soon as possible.
        </p>
      </div>

      <div
        className="
          rounded-3xl
          border
          border-border/60
          bg-card
          p-6
          shadow-sm
          lg:p-8
        "
      >
        <form className="space-y-6">
          {/* Name & Email */}
          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>

              <Input
                id="name"
                name="name"
                placeholder="John Smith"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>

              <Input
                id="email"
                type="email"
                name="email"
                placeholder="john@example.com"
              />
            </div>
          </div>

          {/* Company */}
          <div className="space-y-2">
            <Label htmlFor="company">
              Company
              <span className="ml-1 text-muted-foreground">(Optional)</span>
            </Label>

            <Input
              id="company"
              name="company"
              placeholder="Company Name"
            />
          </div>

          {/* Subject */}
          <div className="space-y-2">
            <Label htmlFor="subject">Subject</Label>

            <Input
              id="subject"
              name="subject"
              placeholder="Graduate Software Engineer Opportunity"
            />
          </div>

          {/* Message */}
          <div className="space-y-2">
            <Label htmlFor="message">Message</Label>

            <Textarea
              id="message"
              name="message"
              rows={8}
              placeholder="Hi Harry,

I'd love to discuss a software engineering opportunity with you..."
              className="resize-none"
            />
          </div>

          {/* Submit */}
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-muted-foreground">
              I'll aim to respond within 24 hours.
            </p>

            <Button
              type="submit"
              size="lg"
              className="group rounded-xl px-8"
            >
              <Send className="mr-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />

              Send Message
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
}