import { ImageResponse } from "next/og";

export const alt = "TwinB | Product & Growth Engineering";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#F9F9F8",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
        }}
      >
        {/* Top: logo wordmark */}
        <div style={{ display: "flex", alignItems: "center" }}>
          <span
            style={{
              fontSize: 28,
              fontWeight: 600,
              color: "#1A1A1A",
              letterSpacing: "-0.02em",
            }}
          >
            TwinB
          </span>
        </div>

        {/* Middle: headline */}
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <p
            style={{
              fontSize: 16,
              color: "#666666",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              margin: 0,
            }}
          >
            Product &amp; Growth Engineering
          </p>
          <h1
            style={{
              fontSize: 72,
              fontWeight: 500,
              color: "#1A1A1A",
              lineHeight: 1.02,
              letterSpacing: "-0.03em",
              margin: 0,
              maxWidth: 900,
            }}
          >
            We turn fast built products into scalable systems.
          </h1>
        </div>

        {/* Bottom: URL */}
        <div style={{ display: "flex" }}>
          <span style={{ fontSize: 20, color: "#666666" }}>twinb.me</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
