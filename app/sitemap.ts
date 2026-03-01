import type { MetadataRoute } from "next";

const BASE_URL = "https://twinb.me";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: BASE_URL, priority: 1.0, changeFrequency: "monthly" },
    { url: `${BASE_URL}/ai-engineering`, priority: 0.9, changeFrequency: "monthly" },
    { url: `${BASE_URL}/ai-transformation`, priority: 0.9, changeFrequency: "monthly" },
    { url: `${BASE_URL}/about`, priority: 0.6, changeFrequency: "monthly" },
    { url: `${BASE_URL}/contact`, priority: 0.6, changeFrequency: "yearly" },
  ];
}
