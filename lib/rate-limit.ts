/**
 * Minimal fixed-window rate limiter kept in memory.
 *
 * On serverless hosts each instance has its own memory, so this is a
 * best-effort limit rather than a global one — enough to stop a single
 * client hammering an endpoint. Use a shared store (e.g. Upstash Redis)
 * if a strict limit is ever needed.
 */
export function createRateLimiter({
  limit,
  windowMs,
}: {
  limit: number;
  windowMs: number;
}) {
  const hits = new Map<string, { count: number; resetAt: number }>();

  return function isRateLimited(key: string, now = Date.now()): boolean {
    // Drop expired entries so the map can't grow without bound.
    for (const [entryKey, entry] of hits) {
      if (entry.resetAt <= now) {
        hits.delete(entryKey);
      }
    }

    const entry = hits.get(key);

    if (!entry) {
      hits.set(key, { count: 1, resetAt: now + windowMs });

      return false;
    }

    entry.count += 1;

    return entry.count > limit;
  };
}

/** Best-effort client IP from standard proxy headers. */
export function getClientIp(request: Request): string {
  const forwardedFor = request.headers.get("x-forwarded-for");

  if (forwardedFor) {
    return forwardedFor.split(",")[0].trim();
  }

  return request.headers.get("x-real-ip") ?? "unknown";
}
