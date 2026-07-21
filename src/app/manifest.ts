import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    id: "/",
    name: "PredictX — AI Sports Predictions",
    short_name: "PredictX",
    description:
      "AI-powered football and cricket predictions, confidence signals, live scores, and match alerts.",
    start_url: "/",
    scope: "/",
    display: "standalone",
    background_color: "#f8f6f3",
    theme_color: "#2a1716",
    orientation: "portrait-primary",
    lang: "en-IN",
    categories: ["sports", "entertainment", "utilities"],
    icons: [
      {
        src: "/predictx-icon-192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/predictx-icon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/predictx-icon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
