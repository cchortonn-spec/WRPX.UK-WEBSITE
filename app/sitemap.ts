import { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";
import { blogPosts } from "@/lib/blog-posts";
import { getAllPageCombinations } from "@/lib/programmatic-pages";

const base = siteConfig.domain;

export default function sitemap(): MetadataRoute.Sitemap {
  const core = [
    "",
    "kitchen-wrapping",
    "kitchen-wrapping-quote",
    "kitchen-wrapping-cost",
    "kitchen-door-wrapping",
    "bathroom-cabinet-wrapping",
    "bedroom-wardrobe-wrapping",
    "worktop-wrapping",
    "furniture-wrapping",
    "architectural-vinyl-film",
    "architectural-vinyl-finishes",
    "gallery",
    "our-process",
    "faq",
    "blog",
    "about",
    "contact",
    "privacy",
    "white-label-graphics-installation",
    "locations",
  ];
  const locations = [
    ...siteConfig.areas.map((city) => `kitchen-wrapping-${city.toLowerCase()}`),
    "kitchen-wrapping-wakefield",
    "kitchen-wrapping-york",
    "kitchen-wrapping-nottingham",
    "kitchen-wrapping-bradford",
    "kitchen-wrapping-manchester",
  ];
  const worktopLocations = [
    "worktop-wrapping-sheffield",
    "worktop-wrapping-doncaster",
    "worktop-wrapping-barnsley",
    "worktop-wrapping-rotherham",
    "worktop-wrapping-leeds",
    "worktop-wrapping-chesterfield",
    "worktop-wrapping-huddersfield",
  ];
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
    "vehicle-wrap-installation",
    "sign-company-installation-partner",
    "sheffield-nottingham-corridor-installation",
    "print-company-installation-partner",
    "marketing-agency-installation-partner",
    "multi-site-rollout-installation",
    "subcontract-vinyl-installation-yorkshire",
    "subcontract-vinyl-installer-sheffield",
    "subcontract-vinyl-installer-doncaster",
    "subcontract-vinyl-installer-leeds",
    "subcontract-vinyl-installer-rotherham",
    "subcontract-vinyl-installer-barnsley",
    "subcontract-vinyl-installer-nottingham",
    "subcontract-vinyl-installer-wakefield",
    "subcontract-vinyl-installer-huddersfield",
    "subcontract-vinyl-installer-chesterfield",
    "subcontract-vinyl-installer-bradford",
    "subcontract-vinyl-installer-york",
    "subcontract-vinyl-installer-derby",
    "subcontract-vinyl-installer-mansfield",
    "fleet-wrap-installation-yorkshire",
    "floor-vinyl-installation-yorkshire",
    "shop-front-graphics-installation",
    "window-graphics-installation-yorkshire",
    "wall-wrap-installation-yorkshire",
    "exhibition-graphics-installation",
    "subcontract-vinyl-installer-harrogate",
    "subcontract-vinyl-installer-lincoln",
    "retail-fitout-graphics-installation",
    "wayfinding-graphics-installation",
    "subcontract-vinyl-installer-newark",
    "subcontract-vinyl-installer-grimsby",
    "subcontract-vinyl-installer-hull",
    "healthcare-graphics-installation",
    "education-graphics-installation",
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
    "window-film/window-film-york",
    "window-film/window-film-nottingham",
    "window-film/window-film-wakefield",
    "window-film/window-film-bradford",
    "window-film/window-film-manchester",
  ];
  const newServicePages = [
    "kitchen-island-wrapping",
    "splashback-wrapping",
    "appliance-wrapping",
  ];

  const furnitureLocations = siteConfig.areas.map((city) =>
    `furniture-wrapping-${city.toLowerCase()}`
  );

  const programmaticCities = [
    "sheffield",
    "doncaster",
    "rotherham",
    "barnsley",
    "leeds",
    "huddersfield",
    "chesterfield",
    "wakefield",
    "bradford",
    "nottingham",
  ];
  const programmaticServices = [
    "kitchen-vinyl-wrapping",
    "worktop-vinyl-wrapping",
    "cupboard-door-wrapping",
    "window-film-installation",
    "commercial-vinyl-graphics",
    "architectural-vinyl-film",
  ];
  const programmaticPaths = programmaticCities.flatMap((city) =>
    programmaticServices.map((service) => `locations/${city}/${service}`)
  );

  const blogPaths = blogPosts.map((post) => `blog/${post.slug}`);
  const paths = [
    ...core,
    ...locations,
    ...worktopLocations,
    ...commercialLocations,
    ...windowFilm,
    ...newServicePages,
    ...furnitureLocations,
    ...programmaticPaths,
    ...blogPaths,
  ];

  const highPriorityPaths = new Set([
    "kitchen-wrapping",
    "kitchen-wrapping-cost",
    "kitchen-door-wrapping",
    "window-film",
    "worktop-wrapping",
    "bathroom-cabinet-wrapping",
    "bedroom-wardrobe-wrapping",
  ]);

  return paths.map((path) => ({
    url: path ? `${base}/${path}/` : `${base}/`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: path === "" ? 1
      : highPriorityPaths.has(path) ? 0.9
      : path === "blog" ? 0.85
      : path.startsWith("blog/") ? 0.75
      : path.startsWith("locations/") ? 0.7
      : path.startsWith("worktop-wrapping-") ? 0.8
      : 0.8,
  }));
}
