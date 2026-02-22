import { siteConfig } from "./site-config";

const base = "";

export const nav = {
  main: [
    { label: "Kitchen Wrapping", href: `${base}/kitchen-wrapping/` },
    { label: "Worktop Wrapping", href: `${base}/worktop-wrapping/` },
    { label: "Furniture Wrapping", href: `${base}/furniture-wrapping/` },
    { label: "Gallery", href: `${base}/gallery/` },
    { label: "Our Process", href: `${base}/our-process/` },
    { label: "FAQ", href: `${base}/faq/` },
    { label: "Blog", href: `${base}/blog/` },
    { label: "Contact", href: `${base}/contact/` },
  ] as const,
  locations: siteConfig.areas.map((city) => ({
    label: city,
    href: `${base}/kitchen-wrapping-${city.toLowerCase()}/`,
  })),
};
