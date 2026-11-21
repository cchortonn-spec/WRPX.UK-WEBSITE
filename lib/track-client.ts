import { isInternalAnalyticsPath, simplifySource } from "@/lib/analytics-helpers";
import type { AnalyticsEventType } from "@/lib/analytics-types";

type TrackPayload = {
  event_type: AnalyticsEventType;
  page_url: string;
  referrer?: string | null;
  device?: "mobile" | "desktop" | "tablet" | "unknown";
  /** For clicks: which button was used (floating, sticky, header, footer, content). */
  link_location?: string;
};

const SESSION_KEY = "wrpx_session";
const OWNER_KEY = "wrpx_ignore";
/** A visit ends after this long with no activity. */
const SESSION_IDLE_MS = 30 * 60 * 1000;

type Session = {
  id: string;
  source: string;
  referrer: string | null;
  lastSeen: number;
};

let memorySession: Session | null = null;

/** True on a browser where the owner has opened the dashboard, so their own visits are not counted. */
export function isOwnerBrowser() {
  try {
    return window.localStorage.getItem(OWNER_KEY) === "1";
  } catch {
    return false;
  }
}

/** Called from the dashboard: stops this browser from being counted as a visitor. */
export function markOwnerBrowser() {
  try {
    window.localStorage.setItem(OWNER_KEY, "1");
  } catch {
    // Storage blocked: nothing we can do.
  }
}

function newId() {
  if (typeof crypto !== "undefined" && typeof crypto.randomUUID === "function") {
    return crypto.randomUUID();
  }
  return `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 12)}`;
}

function hostnameOf(url: string) {
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch {
    return null;
  }
}

/** Works out where a visit came from. Ad and campaign links (utm_/gclid/fbclid) win over the referrer. */
function detectSource(allowReferrer: boolean) {
  const params = new URLSearchParams(window.location.search);
  const utmSource = params.get("utm_source");
  const utmMedium = params.get("utm_medium") ?? "";

  let referrer: string | null = allowReferrer ? document.referrer || null : null;
  if (referrer && hostnameOf(referrer) === window.location.hostname.replace(/^www\./, "")) {
    referrer = null;
  }

  let source = "direct";
  if (utmSource) {
    source = simplifySource(utmSource);
    if (/cpc|ppc|paid|ads?/i.test(utmMedium)) source += " (paid)";
  } else if (params.get("gclid")) {
    source = "google (paid)";
  } else if (params.get("fbclid")) {
    source = "facebook";
  } else if (referrer) {
    const host = hostnameOf(referrer);
    if (host) source = simplifySource(host);
  }

  return { source, referrer };
}

/** One "visit": kept for the browser tab, renewed after 30 minutes of no activity. */
function getSession(): Session {
  const now = Date.now();
  let existing: Session | null = memorySession;

  try {
    const stored = window.sessionStorage.getItem(SESSION_KEY);
    if (stored) existing = JSON.parse(stored) as Session;
  } catch {
    // Storage blocked: fall back to memory for this page load.
  }

  let session: Session;
  if (existing && now - existing.lastSeen < SESSION_IDLE_MS) {
    session = { ...existing, lastSeen: now };
  } else {
    // Brand new visit. After an idle break the old referrer no longer applies.
    const { source, referrer } = detectSource(existing === null);
    session = { id: newId(), source, referrer, lastSeen: now };
  }

  memorySession = session;
  try {
    window.sessionStorage.setItem(SESSION_KEY, JSON.stringify(session));
  } catch {
    // ignore
  }
  return session;
}

function getDeviceType(): "mobile" | "desktop" | "tablet" | "unknown" {
  if (typeof window === "undefined") {
    return "unknown";
  }

  const width = window.innerWidth;
  if (width < 768) {
    return "mobile";
  }
  if (width < 1024) {
    return "tablet";
  }
  return "desktop";
}

export function trackEvent(payload: TrackPayload) {
  if (typeof window === "undefined") {
    return;
  }

  if (isInternalAnalyticsPath(window.location.pathname) || isOwnerBrowser()) {
    return;
  }

  const session = getSession();

  const body = JSON.stringify({
    ...payload,
    referrer: payload.referrer ?? session.referrer,
    device: payload.device ?? getDeviceType(),
    session_id: session.id,
    source: session.source,
  });

  if (navigator.sendBeacon) {
    const blob = new Blob([body], { type: "application/json" });
    navigator.sendBeacon("/api/track/", blob);
    return;
  }

  void fetch("/api/track/", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body,
    keepalive: true,
  });
}
