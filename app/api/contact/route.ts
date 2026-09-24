import { NextResponse } from "next/server";
import { Resend } from "resend";

import { createRateLimiter, getClientIp } from "@/lib/rate-limit";
import { siteConfig } from "@/lib/site";

const MAX_LENGTHS = {
  name: 100,
  email: 254,
  company: 100,
  subject: 200,
  message: 5000,
} as const;

type Field = keyof typeof MAX_LENGTHS;

// Hidden form field that real visitors never fill in; bots usually do.
const HONEYPOT_FIELD = "website";

// At most 5 messages per IP every 10 minutes.
const isRateLimited = createRateLimiter({ limit: 5, windowMs: 10 * 60_000 });

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function badRequest(error: string) {
  return NextResponse.json({ error }, { status: 400 });
}

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    console.error("[contact] RESEND_API_KEY is not set.");

    return NextResponse.json(
      { error: "The contact form is currently unavailable." },
      { status: 503 }
    );
  }

  if (isRateLimited(getClientIp(request))) {
    return NextResponse.json(
      { error: "Too many messages. Please try again in a few minutes." },
      { status: 429 }
    );
  }

  let body: Record<string, unknown>;

  try {
    body = await request.json();
  } catch {
    return badRequest("Invalid request body.");
  }

  // Pretend to succeed so bots don't learn they were caught.
  if (body[HONEYPOT_FIELD]) {
    return NextResponse.json({ success: true });
  }

  // Normalise every field to a trimmed string.
  const fields = Object.fromEntries(
    (Object.keys(MAX_LENGTHS) as Field[]).map((key) => [
      key,
      typeof body[key] === "string" ? body[key].trim() : "",
    ])
  ) as Record<Field, string>;

  const { name, email, company, subject, message } = fields;

  if (!name || !email || !subject || !message) {
    return badRequest("Please fill in all required fields.");
  }

  if (!EMAIL_PATTERN.test(email)) {
    return badRequest("Please enter a valid email address.");
  }

  const tooLong = (Object.keys(MAX_LENGTHS) as Field[]).find(
    (key) => fields[key].length > MAX_LENGTHS[key]
  );

  if (tooLong) {
    return badRequest(`The ${tooLong} field is too long.`);
  }

  const resend = new Resend(apiKey);

  const { error } = await resend.emails.send({
    from: "Portfolio Contact <onboarding@resend.dev>",
    to: siteConfig.email,
    replyTo: email,
    // Strip newlines so the subject can't inject extra headers.
    subject: `[Portfolio] ${subject.replace(/[\r\n]+/g, " ")}`,
    text: [
      `Name: ${name}`,
      `Email: ${email}`,
      `Company: ${company || "Not provided"}`,
      `Subject: ${subject}`,
      "",
      message,
    ].join("\n"),
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px;">
        <h2>New Portfolio Contact</h2>

        <p><strong>Name:</strong> ${escapeHtml(name)}</p>

        <p><strong>Email:</strong> ${escapeHtml(email)}</p>

        <p><strong>Company:</strong> ${escapeHtml(company || "Not provided")}</p>

        <p><strong>Subject:</strong> ${escapeHtml(subject)}</p>

        <hr />

        <h3>Message</h3>

        <p style="white-space: pre-wrap;">${escapeHtml(message)}</p>
      </div>
    `,
  });

  if (error) {
    console.error("[contact] Resend error:", error);

    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 502 }
    );
  }

  return NextResponse.json({ success: true });
}
