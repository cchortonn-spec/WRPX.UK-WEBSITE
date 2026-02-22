import { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";
import { blogPosts } from "@/lib/blog-posts";

const base = siteConfig.domain;

export default function sitemap(): MetadataRoute.Sitemap {
  const core = [
    "",
    "kitchen-wrapping",
    "kitchen-wrapping-cost",
    "worktop-wrapping",
    "furniture-wrapping",
    "gallery",
    "our-process",
    "faq",
    "blog",
    "contact",
    "privacy",
  ];
  const locations = siteConfig.areas.map((city) =>
    `kitchen-wrapping-${city.toLowerCase()}`
  );
  const blogPaths = blogPosts.map((post) => `blog/${post.slug}`);
  const paths = [...core, ...locations, ...blogPaths];

  return paths.map((path) => ({
    url: path ? `${base}/${path}/` : `${base}/`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: path === "" ? 1 : path === "kitchen-wrapping" || path === "kitchen-wrapping-cost" ? 0.9 : path === "blog" ? 0.85 : 0.8,
  }));
}
