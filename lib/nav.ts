import { siteConfig } from "./site-config";

const base = "";

export const nav = {
  /** Dropdown: services */
  services: [
    { label: "Kitchen Wrapping", href: `${base}/kitchen-wrapping/` },
    { label: "Cost Guide", href: `${base}/kitchen-wrapping-cost/` },
    { label: "Worktop Wrapping", href: `${base}/worktop-wrapping/` },
    { label: "Furniture Wrapping", href: `${base}/furniture-wrapping/` },
    { label: "Window Film", href: `${base}/window-film/` },
    { label: "Commercial & Retail", href: `${base}/commercial-installation/` },
  ] as const,
  /** Single links between dropdowns */
  main: [
    { label: "Gallery", href: `${base}/gallery/` },
    { label: "Contact", href: `${base}/contact/` },
  ] as const,
  /** Dropdown: about / info */
  about: [
    { label: "Our Process", href: `${base}/our-process/` },
    { label: "FAQ", href: `${base}/faq/` },
    { label: "Blog", href: `${base}/blog/` },
    { label: "About", href: `${base}/about/` },
  ] as const,
  locations: siteConfig.areas.map((city) => ({
    label: city,
    href: `${base}/kitchen-wrapping-${city.toLowerCase()}/`,
  })),
};
