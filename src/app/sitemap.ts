import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://predictxsports.com",
      lastModified: "2026-07-18",
      changeFrequency: "weekly",
      priority: 1,
      images: [
        "https://predictxsports.com/illustrations/predictx-hero.png",
        "https://predictxsports.com/mockups/predictx-mockup-1.png",
        "https://predictxsports.com/mockups/predictx-mockup-7.png",
        "https://predictxsports.com/mockups/predictx-mockup-8.png",
      ],
    },
    {
      url: "https://predictxsports.com/privacy-policy",
      lastModified: "2026-05-01",
      changeFrequency: "yearly",
      priority: 0.5,
    },
    {
      url: "https://predictxsports.com/terms-and-conditions",
      lastModified: "2026-05-01",
      changeFrequency: "yearly",
      priority: 0.5,
    },
    {
      url: "https://predictxsports.com/delete-account",
      lastModified: "2026-05-01",
      changeFrequency: "yearly",
      priority: 0.5,
    },
  ];
}
