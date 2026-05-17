import { createClient } from "next-sanity";
import { createImageUrlBuilder } from "@sanity/image-url";

export const client = createClient({
  projectId: (process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? "placeholder").trim(),
  dataset: (process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production").trim(),
  apiVersion: "2024-01-01",
  useCdn: false,
  token: process.env.SANITY_API_READ_TOKEN,
});

const builder = createImageUrlBuilder(client);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function urlFor(source: any) {
  return builder.image(source);
}
