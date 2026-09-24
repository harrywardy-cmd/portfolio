import { beforeEach, describe, expect, it, vi } from "vitest";

import { POST } from "@/app/api/contact/route";

const send = vi.hoisted(() => vi.fn());

vi.mock("resend", () => ({
  Resend: class {
    emails = { send };
  },
}));

const validBody = {
  name: "Jane Smith",
  email: "jane@example.com",
  company: "Acme",
  subject: "Graduate role",
  message: "Hi Harry!",
};

// The route rate-limits per IP, so give each request its own by default.
let requestCount = 0;

function post(body: unknown, ip = `203.0.113.${++requestCount}`) {
  return POST(
    new Request("http://localhost/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Forwarded-For": ip,
      },
      body: typeof body === "string" ? body : JSON.stringify(body),
    })
  );
}

describe("POST /api/contact", () => {
  beforeEach(() => {
    vi.stubEnv("RESEND_API_KEY", "re_test");
    vi.spyOn(console, "error").mockImplementation(() => {});
    send.mockReset();
    send.mockResolvedValue({ data: { id: "email_1" }, error: null });
  });

  it("sends the email and returns success", async () => {
    const response = await post(validBody);

    expect(response.status).toBe(200);
    await expect(response.json()).resolves.toEqual({ success: true });

    expect(send).toHaveBeenCalledOnce();
    expect(send.mock.calls[0][0]).toMatchObject({
      to: "harrywardy303@gmail.com",
      replyTo: "jane@example.com",
      subject: "[Portfolio] Graduate role",
    });
  });

  it("escapes HTML in user input", async () => {
    await post({
      ...validBody,
      name: '<script>alert("x")</script>',
      message: "<img src=x onerror=alert(1)>",
    });

    const { html } = send.mock.calls[0][0];

    expect(html).not.toContain("<script>");
    expect(html).not.toContain("<img");
    expect(html).toContain("&lt;script&gt;alert(&quot;x&quot;)&lt;/script&gt;");
  });

  it("strips newlines from the subject", async () => {
    await post({ ...validBody, subject: "Hello\r\nBcc: spam@example.com" });

    expect(send.mock.calls[0][0].subject).toBe(
      "[Portfolio] Hello Bcc: spam@example.com"
    );
  });

  it("trims fields and treats company as optional", async () => {
    await post({ ...validBody, name: "  Jane  ", company: undefined });

    const { text } = send.mock.calls[0][0];

    expect(text).toContain("Name: Jane\n");
    expect(text).toContain("Company: Not provided");
  });

  it.each([
    ["name", { ...validBody, name: "   " }, "required"],
    ["message", { ...validBody, message: undefined }, "required"],
    ["email", { ...validBody, email: "not-an-email" }, "valid email"],
    ["length", { ...validBody, message: "a".repeat(5001) }, "message field is too long"],
    ["types", { ...validBody, subject: 42 }, "required"],
  ])("rejects invalid input (%s)", async (_label, body, error) => {
    const response = await post(body);

    expect(response.status).toBe(400);
    expect((await response.json()).error).toContain(error);
    expect(send).not.toHaveBeenCalled();
  });

  it("rejects a malformed body", async () => {
    const response = await post("not json");

    expect(response.status).toBe(400);
    expect(send).not.toHaveBeenCalled();
  });

  it("returns 503 when the API key is missing", async () => {
    vi.stubEnv("RESEND_API_KEY", "");

    const response = await post(validBody);

    expect(response.status).toBe(503);
    expect(send).not.toHaveBeenCalled();
  });

  it("silently drops submissions that fill in the honeypot", async () => {
    const response = await post({ ...validBody, website: "https://spam.example" });

    expect(response.status).toBe(200);
    await expect(response.json()).resolves.toEqual({ success: true });
    expect(send).not.toHaveBeenCalled();
  });

  it("rate-limits repeated messages from one IP", async () => {
    const ip = "198.51.100.7";

    for (let i = 0; i < 5; i++) {
      expect((await post(validBody, ip)).status).toBe(200);
    }

    const response = await post(validBody, ip);

    expect(response.status).toBe(429);
    expect(send).toHaveBeenCalledTimes(5);

    // Other visitors are unaffected.
    expect((await post(validBody)).status).toBe(200);
  });

  it("returns 502 when Resend reports an error", async () => {
    send.mockResolvedValue({
      data: null,
      error: { name: "validation_error", message: "Invalid from" },
    });

    const response = await post(validBody);

    expect(response.status).toBe(502);
  });
});
