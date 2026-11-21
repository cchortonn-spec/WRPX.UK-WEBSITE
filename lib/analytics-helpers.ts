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

const INTERNAL_ANALYTICS_PREFIXES = ["/dashboard", "/jarvis"];

export function isInternalAnalyticsPath(pathname: string) {
  return INTERNAL_ANALYTICS_PREFIXES.some(
    (prefix) => pathname === prefix || pathname.startsWith(`${prefix}/`)
  );
}

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

// ---------- UK time ----------
// The server runs in UTC, so day and hour buckets are worked out in UK time here.

const UK_FORMAT = new Intl.DateTimeFormat("en-GB", {
  timeZone: "Europe/London",
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
  hour: "2-digit",
  hourCycle: "h23",
  weekday: "short",
});

const WEEKDAY_INDEX: Record<string, number> = {
  Mon: 0,
  Tue: 1,
  Wed: 2,
  Thu: 3,
  Fri: 4,
  Sat: 5,
  Sun: 6,
};

export type UkTime = {
  /** "YYYY-MM-DD" in UK time. */
  dateKey: string;
  hour: number;
  /** Monday = 0 … Sunday = 6. */
  weekday: number;
};

export function ukTime(date: Date): UkTime {
  const parts: Record<string, string> = {};
  for (const part of UK_FORMAT.formatToParts(date)) {
    parts[part.type] = part.value;
  }
  return {
    dateKey: `${parts.year}-${parts.month}-${parts.day}`,
    hour: Number(parts.hour) % 24,
    weekday: WEEKDAY_INDEX[parts.weekday] ?? 0,
  };
}

/** Moves a "YYYY-MM-DD" key forwards or backwards by whole days. */
export function shiftDateKey(dateKey: string, days: number) {
  const [year, month, day] = dateKey.split("-").map(Number);
  const date = new Date(Date.UTC(year, month - 1, day + days));
  return date.toISOString().slice(0, 10);
}

// ---------- Traffic sources ----------

/** Turns a website address into a short, readable source name. */
export function simplifySource(hostOrName: string) {
  const value = hostOrName.trim().toLowerCase().replace(/^www\./, "");
  if (!value || value === "direct / unknown") return "direct";
  if (value.includes("google.")) return "google";
  if (value.includes("bing.")) return "bing";
  if (value.includes("duckduckgo")) return "duckduckgo";
  if (value.includes("yahoo.")) return "yahoo";
  if (value.includes("ecosia")) return "ecosia";
  if (value.includes("instagram")) return "instagram";
  if (/(^|\.)(facebook|fb)\.com$|^l\.facebook|^m\.facebook|^lm\.facebook/.test(value)) return "facebook";
  if (value === "t.co" || value.includes("twitter.") || value === "x.com") return "x";
  if (value.includes("linkedin") || value === "lnkd.in") return "linkedin";
  if (value.includes("tiktok")) return "tiktok";
  if (value.includes("youtube") || value === "youtu.be") return "youtube";
  if (value.includes("pinterest")) return "pinterest";
  if (value.includes("whatsapp") || value === "wa.me") return "whatsapp";
  return value;
}

/** City names arrive web-encoded from the host ("St%20Albans"). */
export function decodeCity(city: string | null) {
  if (!city) return null;
  try {
    return decodeURIComponent(city);
  } catch {
    return city;
  }
}

// ---------- Page types (used for page-specific advice) ----------

export type PageKind =
  | "home"
  | "quote"
  | "contact"
  | "gallery"
  | "blog"
  | "cost"
  | "training"
  | "location"
  | "commercial"
  | "service"
  | "other";

export function classifyPage(pageUrl: string): PageKind {
  const path = pageUrl.split("?")[0].replace(/\/+$/, "") || "/";
  if (path === "/") return "home";
  if (path.startsWith("/kitchen-wrapping-quote")) return "quote";
  if (path.startsWith("/contact")) return "contact";
  if (path.startsWith("/gallery")) return "gallery";
  if (path.startsWith("/blog")) return "blog";
  if (path.startsWith("/kitchen-wrapping-cost")) return "cost";
  if (path.includes("training")) return "training";
  if (
    /commercial|architectural|subcontract|white-label|print-company|shop-front|hospitality|sports-leisure|floor-vinyl|window-film/.test(
      path
    )
  ) {
    return "commercial";
  }
  if (/^\/(kitchen-wrapping|worktop-wrapping|furniture-wrapping|window-film)-[a-z-]+$/.test(path)) {
    return "location";
  }
  if (/wrapping|splashback|appliance|wardrobe|bathroom|furniture|worktop|kitchen/.test(path)) {
    return "service";
  }
  return "other";
}
