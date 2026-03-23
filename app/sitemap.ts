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
    "architectural-vinyl-film",
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
    "commercial/window-graphics",
    "commercial/wall-wraps",
    "commercial/floor-graphics",
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
  const windowFilm = [
    "window-film",
    "window-film/frosted-window-film",
    "window-film/privacy-window-film",
    "window-film/one-way-mirror-film",
    "window-film/window-tinting",
    "window-film/commercial-window-film",
    "window-film/residential-window-film",
    "window-film/glass-manifestation",
    "window-film/solar-control-film",
    "window-film/window-film-cost",
    "window-film/window-film-sheffield",
    "window-film/window-film-doncaster",
    "window-film/window-film-barnsley",
    "window-film/window-film-rotherham",
    "window-film/window-film-leeds",
    "window-film/window-film-chesterfield",
    "window-film/window-film-huddersfield",
  ];
  const blogPaths = blogPosts.map((post) => `blog/${post.slug}`);
  const paths = [...core, ...locations, ...commercialLocations, ...windowFilm, ...blogPaths];

  return paths.map((path) => ({
    url: path ? `${base}/${path}/` : `${base}/`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: path === "" ? 1 : path === "kitchen-wrapping" || path === "kitchen-wrapping-cost" || path === "window-film" ? 0.9 : path === "blog" ? 0.85 : 0.8,
  }));
}
