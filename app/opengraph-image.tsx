import { ImageResponse } from "next/og"

export const runtime = "edge"
export const alt = "Pranav Balaji — Software Engineer and Applied AI Builder"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "58px 64px",
          color: "#171716",
          background: "#F4F0E8",
          border: "1px solid #D5CFC4",
          fontFamily: "Georgia, serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            color: "#666861",
            fontFamily: "monospace",
            fontSize: 19,
            letterSpacing: "0.16em",
            textTransform: "uppercase",
          }}
        >
          <span>Portfolio / 2026</span>
          <span style={{ color: "#80601D" }}>SWE + Applied AI</span>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", color: "#80601D", fontSize: 20, marginBottom: 12 }}>
            Engineer / Builder / Student
          </div>
          <div style={{ display: "flex", fontSize: 104, lineHeight: 0.93, letterSpacing: "-0.055em" }}>
            Pranav Balaji
          </div>
          <div
            style={{
              display: "flex",
              maxWidth: 900,
              marginTop: 30,
              color: "#3E3F3B",
              fontFamily: "Arial, sans-serif",
              fontSize: 31,
              lineHeight: 1.3,
            }}
          >
            Software engineer building reliable systems and applied AI products.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            paddingTop: 24,
            borderTop: "1px solid #D5CFC4",
            color: "#666861",
            fontFamily: "monospace",
            fontSize: 18,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
          }}
        >
          <span>Purdue Computer Engineering</span>
          <span>pranavbalaji.org</span>
        </div>
      </div>
    ),
    size,
  )
}
