const COUNTRY_NAMES: Record<string, string> = {
  GB: "United Kingdom",
  US: "United States",
  IE: "Ireland",
  DE: "Germany",
  FR: "France",
  ES: "Spain",
  NL: "Netherlands",
  AU: "Australia",
  CA: "Canada",
};

const PAGE_TITLES: Record<string, string> = {
  "/": "Homepage",
  "/contact/": "Contact",
  "/about/": "About",
  "/gallery/": "Gallery",
  "/faq/": "FAQ",
  "/blog/": "Blog",
  "/kitchen-wrapping/": "Kitchen Wrapping",
  "/kitchen-wrapping-quote/": "Kitchen Quote Form",
  "/kitchen-wrapping-sheffield/": "Kitchen Wrapping Sheffield",
  "/kitchen-wrapping-doncaster/": "Kitchen Wrapping Doncaster",
  "/kitchen-wrapping-barnsley/": "Kitchen Wrapping Barnsley",
  "/kitchen-wrapping-rotherham/": "Kitchen Wrapping Rotherham",
  "/kitchen-wrapping-leeds/": "Kitchen Wrapping Leeds",
  "/kitchen-wrapping-huddersfield/": "Kitchen Wrapping Huddersfield",
  "/kitchen-wrapping-chesterfield/": "Kitchen Wrapping Chesterfield",
  "/commercial-installation/": "Commercial Installation",
  "/window-film/": "Window Film",
  "/locations/": "Locations Hub",
  "/privacy/": "Privacy Policy",
  "/our-process/": "Our Process",
};

export function getPageTitle(pageUrl: string) {
  const normalized = pageUrl.endsWith("/") ? pageUrl : `${pageUrl}/`;

  if (PAGE_TITLES[normalized]) {
    return PAGE_TITLES[normalized];
  }

  if (PAGE_TITLES[pageUrl]) {
    return PAGE_TITLES[pageUrl];
  }

  const slug = normalized.replace(/^\/|\/$/g, "");
  if (!slug) {
    return "Homepage";
  }

  return slug
    .split("/")
    .map((part) =>
      part
        .split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ")
    )
    .join(" · ");
}

export function getCountryName(code: string) {
  return COUNTRY_NAMES[code.toUpperCase()] ?? code;
}

export function normalizeReferrer(referrer: string) {
  try {
    const url = new URL(referrer);
    if (!url.hostname) {
      return "Direct / unknown";
    }
    return url.hostname.replace(/^www\./, "");
  } catch {
    return referrer || "Direct / unknown";
  }
}

export function formatPercent(count: number, total: number) {
  if (total === 0) {
    return "0%";
  }
  return `${Math.round((count / total) * 100)}%`;
}

export function formatHourLabel(hour: number) {
  return `${hour.toString().padStart(2, "0")}:00`;
}
