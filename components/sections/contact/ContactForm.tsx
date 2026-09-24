"use client";

import { useState } from "react";
import { Send } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);
    setError("");
    setSuccess(false);

    const form = e.currentTarget;

    const formData = new FormData(form);

    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      company: formData.get("company"),
      subject: formData.get("subject"),
      message: formData.get("message"),
      website: formData.get("website"),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const result = await response.json().catch(() => null);

        setError(
          result?.error ?? "Something went wrong. Please try again."
        );

        return;
      }

      setSuccess(true);
      form.reset();
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="space-y-10">
      {/* Header */}
      <div className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
          Send a Message
        </p>

        <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
          I&apos;d Love to Hear From You
        </h2>

        <p className="mt-4 text-lg leading-8 text-muted-foreground">
          Whether you&apos;re reaching out about a software engineering opportunity,
          collaboration, or simply want to connect, feel free to send me a
          message. I&apos;ll get back to you as soon as possible.
        </p>
      </div>

      <div className="rounded-3xl border border-border/60 bg-card p-6 shadow-sm lg:p-8">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Honeypot: hidden from people, but bots fill it in */}
          <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
            <label htmlFor="website">Website</label>
            <input
              id="website"
              name="website"
              type="text"
              tabIndex={-1}
              autoComplete="off"
            />
          </div>

          {/* Name & Email */}
          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>

              <Input
                id="name"
                name="name"
                placeholder="John Smith"
                autoComplete="name"
                maxLength={100}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>

              <Input
                id="email"
                type="email"
                name="email"
                placeholder="john@example.com"
                autoComplete="email"
                maxLength={254}
                required
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
              autoComplete="organization"
              maxLength={100}
            />
          </div>

          {/* Subject */}
          <div className="space-y-2">
            <Label htmlFor="subject">Subject</Label>

            <Input
              id="subject"
              name="subject"
              placeholder="Graduate Software Engineer Opportunity"
              maxLength={200}
              required
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
              maxLength={5000}
              required
            />
          </div>

          {/* Submit */}
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-muted-foreground">
              I&apos;ll aim to respond within 24 hours.
            </p>

            <Button
              type="submit"
              size="lg"
              disabled={loading}
              className="group rounded-xl px-8"
            >
              <Send className="mr-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />

              {loading ? "Sending..." : "Send Message"}
            </Button>
            <div className="mt-4" aria-live="polite">
              {success && (
                <p className="text-sm font-medium text-green-600">
                  ✅ Your message has been sent successfully!
                </p>
              )}

              {error && (
                <p className="text-sm font-medium text-red-600">{error}</p>
              )}
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
