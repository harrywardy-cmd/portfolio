import { ImageResponse } from "next/og";

export const alt = "Harry Ward | Software Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#030712",
          color: "#f9fafb",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            fontSize: 28,
            letterSpacing: 6,
            textTransform: "uppercase",
            color: "#60a5fa",
          }}
        >
          Portfolio
        </div>

        <div style={{ marginTop: 24, fontSize: 88, fontWeight: 700 }}>
          Harry Ward
        </div>

        <div style={{ marginTop: 16, fontSize: 40, color: "#9ca3af" }}>
          Software Engineer
        </div>
      </div>
    ),
    size
  );
}
