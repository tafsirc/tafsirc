import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site";

export const alt = siteConfig.title;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "72px",
          background: "linear-gradient(135deg, #0f172a 0%, #1e3a5f 50%, #0f172a 100%)",
          color: "#f8fafc",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "24px",
            marginBottom: "32px",
          }}
        >
          <div
            style={{
              width: "72px",
              height: "72px",
              borderRadius: "16px",
              background: "#3b82f6",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "36px",
              fontWeight: 700,
            }}
          >
            TC
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ fontSize: "52px", fontWeight: 700, lineHeight: 1.1 }}>
              {siteConfig.shortTitle}
            </span>
            <span style={{ fontSize: "28px", color: "#93c5fd", marginTop: "8px" }}>
              Full Stack AI Engineer
            </span>
          </div>
        </div>
        <p
          style={{
            fontSize: "26px",
            lineHeight: 1.5,
            color: "#cbd5e1",
            maxWidth: "900px",
          }}
        >
          Multi-LLM pipelines, distributed systems, and production web apps
          with TypeScript, Node.js, Next.js, and AWS.
        </p>
        <div
          style={{
            marginTop: "auto",
            fontSize: "22px",
            color: "#64748b",
          }}
        >
          {siteConfig.url.replace("https://", "")}
        </div>
      </div>
    ),
    { ...size },
  );
}
