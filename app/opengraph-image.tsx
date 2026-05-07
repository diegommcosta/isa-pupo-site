import { ImageResponse } from "next/og";

export const alt = "Isa Pupo | Psicoterapia Jungiana & Integrativa";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const dynamic = "force-dynamic";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#2D3322",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px 100px",
        }}
      >
        <div
          style={{
            color: "#BC2F0A",
            fontSize: 28,
            letterSpacing: 8,
            textTransform: "uppercase",
            display: "flex",
          }}
        >
          Psicoterapia
        </div>
        <div
          style={{
            color: "#EFDDD1",
            fontSize: 140,
            fontWeight: 700,
            lineHeight: 1.05,
            marginTop: 24,
            display: "flex",
          }}
        >
          Isa Pupo
        </div>
        <div
          style={{
            color: "#EDBF9F",
            fontSize: 44,
            marginTop: 16,
            display: "flex",
          }}
        >
          Jungiana & Integrativa
        </div>
        <div
          style={{
            width: 80,
            height: 4,
            background: "#BC2F0A",
            marginTop: 40,
          }}
        />
        <div
          style={{
            color: "#6E7C59",
            fontSize: 32,
            marginTop: 24,
            lineHeight: 1.4,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <span>Cuidando da sua jornada interior</span>
          <span>com acolhimento e profundidade.</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
