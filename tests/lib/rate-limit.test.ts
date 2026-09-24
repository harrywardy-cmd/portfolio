import { describe, expect, it } from "vitest";

import { createRateLimiter, getClientIp } from "@/lib/rate-limit";

describe("createRateLimiter", () => {
  it("allows up to the limit within a window", () => {
    const isRateLimited = createRateLimiter({ limit: 2, windowMs: 1000 });

    expect(isRateLimited("a", 0)).toBe(false);
    expect(isRateLimited("a", 100)).toBe(false);
    expect(isRateLimited("a", 200)).toBe(true);
  });

  it("tracks each key separately", () => {
    const isRateLimited = createRateLimiter({ limit: 1, windowMs: 1000 });

    expect(isRateLimited("a", 0)).toBe(false);
    expect(isRateLimited("b", 0)).toBe(false);
    expect(isRateLimited("a", 0)).toBe(true);
  });

  it("resets once the window has passed", () => {
    const isRateLimited = createRateLimiter({ limit: 1, windowMs: 1000 });

    expect(isRateLimited("a", 0)).toBe(false);
    expect(isRateLimited("a", 500)).toBe(true);
    expect(isRateLimited("a", 1000)).toBe(false);
  });
});

describe("getClientIp", () => {
  const request = (headers: Record<string, string>) =>
    new Request("http://localhost", { headers });

  it("uses the first X-Forwarded-For address", () => {
    expect(
      getClientIp(request({ "x-forwarded-for": "203.0.113.1, 10.0.0.1" }))
    ).toBe("203.0.113.1");
  });

  it("falls back to X-Real-IP, then 'unknown'", () => {
    expect(getClientIp(request({ "x-real-ip": "203.0.113.2" }))).toBe(
      "203.0.113.2"
    );
    expect(getClientIp(request({}))).toBe("unknown");
  });
});
