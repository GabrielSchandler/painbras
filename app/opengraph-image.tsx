import { ImageResponse } from "next/og";
import { COMPANY, SITE } from "@/lib/constants";

export const runtime = "edge";
export const alt = `${COMPANY.shortName} — Painéis elétricos industriais`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OG() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          background: "#FAFAF7",
          fontFamily: "system-ui",
          color: "#0F0F10",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            fontSize: 22,
            letterSpacing: 4,
            textTransform: "uppercase",
            color: "#5B5B5F",
          }}
        >
          <div style={{ width: 48, height: 1, background: "#0F0F10" }} />
          Painéis elétricos industriais
        </div>

        <div>
          <div
            style={{
              fontSize: 92,
              fontWeight: 600,
              lineHeight: 0.98,
              letterSpacing: -3,
              maxWidth: 980,
            }}
          >
            Painéis elétricos para indústrias que não podem parar.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            fontSize: 20,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "baseline",
              gap: 4,
              fontSize: 36,
              fontWeight: 700,
              letterSpacing: -1,
            }}
          >
            Pain<span style={{ color: "#0F0F10" }}>Bras</span>
          </div>
          <div style={{ color: "#5B5B5F" }}>
            {SITE.url.replace(/^https?:\/\//, "")}
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
