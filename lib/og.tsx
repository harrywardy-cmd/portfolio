import { ImageResponse } from "next/og";

export const OG_SIZE = { width: 1200, height: 630 };

interface CoverOptions {
  eyebrow: string;
  title: string;
  description?: string;
  tags?: string[];
}

function truncate(text: string, length: number): string {
  return text.length > length ? `${text.slice(0, length - 1).trimEnd()}…` : text;
}

/**
 * Branded 1200×630 cover used for social previews and as the image for
 * projects that don't have a screenshot yet.
 */
export function renderCover({
  eyebrow,
  title,
  description,
  tags = [],
}: CoverOptions): ImageResponse {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          // Wide side margins keep text visible when cards crop the image to ~16:10.
          padding: "72px 150px",
          background:
            "radial-gradient(circle at 85% 15%, rgba(37, 99, 235, 0.35), transparent 55%), #030712",
          color: "#f9fafb",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 26,
              letterSpacing: 6,
              textTransform: "uppercase",
              color: "#60a5fa",
            }}
          >
            {eyebrow}
          </div>

          <div
            style={{
              marginTop: 24,
              fontSize: title.length > 28 ? 64 : 80,
              fontWeight: 700,
              lineHeight: 1.1,
            }}
          >
            {truncate(title, 60)}
          </div>

          {description && (
            <div
              style={{
                marginTop: 24,
                fontSize: 30,
                lineHeight: 1.4,
                color: "#9ca3af",
              }}
            >
              {truncate(description, 140)}
            </div>
          )}
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", gap: 12 }}>
            {tags.slice(0, 4).map((tag) => (
              <div
                key={tag}
                style={{
                  padding: "8px 18px",
                  borderRadius: 999,
                  border: "1px solid rgba(96, 165, 250, 0.4)",
                  background: "rgba(37, 99, 235, 0.15)",
                  fontSize: 22,
                  color: "#bfdbfe",
                }}
              >
                {tag}
              </div>
            ))}
          </div>

          <div style={{ fontSize: 26, color: "#9ca3af" }}>Harry Ward</div>
        </div>
      </div>
    ),
    OG_SIZE
  );
}
