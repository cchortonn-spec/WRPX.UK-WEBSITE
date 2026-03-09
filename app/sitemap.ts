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
    "about",
    "contact",
    "privacy",
  ];
  const locations = siteConfig.areas.map((city) =>
    `kitchen-wrapping-${city.toLowerCase()}`
  );
  const commercialLocations = [
    "commercial-installation",
    "commercial-installation-sheffield",
    "commercial-installation-leeds",
    "commercial-installation-doncaster",
    "commercial-installation-manchester",
    "commercial-installation-rotherham",
    "commercial-installation-barnsley",
    "commercial-installation-chesterfield",
    "commercial-installation-huddersfield",
    "commercial-installation-york",
    "commercial-installation-nottingham",
  ];
  const blogPaths = blogPosts.map((post) => `blog/${post.slug}`);
  const paths = [...core, ...locations, ...commercialLocations, ...blogPaths];

  return paths.map((path) => ({
    url: path ? `${base}/${path}/` : `${base}/`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: path === "" ? 1 : path === "kitchen-wrapping" || path === "kitchen-wrapping-cost" ? 0.9 : path === "blog" ? 0.85 : 0.8,
  }));
}
