import { ImageResponse } from "next/og";
import { readFileSync } from "fs";
import { join } from "path";

export const alt = "Isa Pupo | Psicoterapia Jungiana & Integrativa";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const imgBuffer = readFileSync(
    join(process.cwd(), "public/imgs/sobre-mim.webp")
  );
  const imgSrc = `data:image/webp;base64,${imgBuffer.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          background: "#2D3322",
          width: "100%",
          height: "100%",
          display: "flex",
        }}
      >
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "60px 64px",
            gap: 16,
          }}
        >
          <div
            style={{
              color: "#BC2F0A",
              fontSize: 22,
              letterSpacing: 5,
              textTransform: "uppercase",
            }}
          >
            Psicoterapia
          </div>
          <div
            style={{
              color: "#EFDDD1",
              fontSize: 84,
              fontWeight: 700,
              lineHeight: 1.05,
            }}
          >
            Isa Pupo
          </div>
          <div
            style={{
              color: "#EDBF9F",
              fontSize: 28,
              marginTop: 4,
            }}
          >
            Jungiana & Integrativa
          </div>
          <div
            style={{
              width: 56,
              height: 3,
              background: "#BC2F0A",
              marginTop: 20,
            }}
          />
          <div
            style={{
              color: "#6E7C59",
              fontSize: 20,
              marginTop: 8,
              lineHeight: 1.5,
            }}
          >
            Cuidando da sua jornada interior
            {"\n"}com acolhimento e profundidade.
          </div>
        </div>

        <div
          style={{
            width: 420,
            display: "flex",
            overflow: "hidden",
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={imgSrc}
            alt=""
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "top center",
            }}
          />
        </div>
      </div>
    ),
    { ...size }
  );
}
