const EMBED_BASE = "https://www.linkedin.com/embed/feed/update/";

/**
 * Converts a LinkedIn post link into its official embed URL.
 *
 * Accepts embed URLs, `/feed/update/urn:li:…` links and the
 * `/posts/…-activity-<id>-…` links from "Copy link to post".
 * Returns `null` for anything that isn't a recognisable post link.
 */
export function getLinkedInEmbedUrl(url: string): string | null {
  let parsed: URL;

  try {
    parsed = new URL(url);
  } catch {
    return null;
  }

  if (!/(^|\.)linkedin\.com$/.test(parsed.hostname)) {
    return null;
  }

  const path = decodeURIComponent(parsed.pathname);

  const urn = path.match(/urn:li:(share|ugcPost|activity):(\d+)/);

  if (urn) {
    return `${EMBED_BASE}urn:li:${urn[1]}:${urn[2]}`;
  }

  const activity = path.match(/activity-(\d+)/);

  if (activity) {
    return `${EMBED_BASE}urn:li:activity:${activity[1]}`;
  }

  return null;
}
