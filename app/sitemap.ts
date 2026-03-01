import type { MetadataRoute } from "next";
import { workItems } from "@/lib/work-items";
import { articles } from "@/lib/insights";

const BASE_URL = "https://twinb.me";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: BASE_URL, priority: 1.0, changeFrequency: "monthly" },
    { url: `${BASE_URL}/ai-engineering`, priority: 0.9, changeFrequency: "monthly" },
    { url: `${BASE_URL}/ai-transformation`, priority: 0.9, changeFrequency: "monthly" },
    { url: `${BASE_URL}/work`, priority: 0.8, changeFrequency: "monthly" },
    { url: `${BASE_URL}/process`, priority: 0.7, changeFrequency: "monthly" },
    { url: `${BASE_URL}/insights`, priority: 0.7, changeFrequency: "weekly" },
    { url: `${BASE_URL}/about`, priority: 0.6, changeFrequency: "monthly" },
    { url: `${BASE_URL}/contact`, priority: 0.6, changeFrequency: "yearly" },
  ];

  const workRoutes: MetadataRoute.Sitemap = workItems.map((item) => ({
    url: `${BASE_URL}${item.href}`,
    priority: 0.7,
    changeFrequency: "yearly" as const,
  }));

  const insightRoutes: MetadataRoute.Sitemap = articles.map((article) => ({
    url: `${BASE_URL}/insights/${article.slug}`,
    priority: 0.6,
    changeFrequency: "yearly" as const,
  }));

  return [...staticRoutes, ...workRoutes, ...insightRoutes];
}
