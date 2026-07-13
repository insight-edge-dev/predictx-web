import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const legalRoutes = [
    "/privacy-policy",
    "/terms-and-conditions",
    "/delete-account",
  ];

  return [
    {
      url: "https://predictxsports.com",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    ...legalRoutes.map((route) => ({
      url: `https://predictxsports.com${route}`,
      lastModified: new Date(),
      changeFrequency: "yearly" as const,
      priority: 0.4,
    })),
  ];
}
