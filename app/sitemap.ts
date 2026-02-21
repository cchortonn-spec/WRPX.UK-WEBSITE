import { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";

const base = siteConfig.domain;

export default function sitemap(): MetadataRoute.Sitemap {
  const core = [
    "",
    "kitchen-wrapping",
    "worktop-wrapping",
    "furniture-wrapping",
    "gallery",
    "our-process",
    "faq",
    "contact",
  ];
  const locations = siteConfig.areas.map((city) =>
    `kitchen-wrapping-${city.toLowerCase()}`
  );
  const paths = [...core, ...locations];

  return paths.map((path) => ({
    url: path ? `${base}/${path}/` : `${base}/`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: path === "" ? 1 : path === "kitchen-wrapping" ? 0.9 : 0.8,
  }));
}
