import { NextResponse } from "next/server";
import { z } from "zod";
import { decodeCity } from "@/lib/analytics-helpers";
import { ANALYTICS_EVENT_TYPES } from "@/lib/analytics-types";
import { getSupabaseAdmin } from "@/lib/supabase";

export const runtime = "nodejs";

const trackSchema = z.object({
  event_type: z.enum(ANALYTICS_EVENT_TYPES),
  page_url: z.string().min(1).max(2048),
  referrer: z.string().max(2048).optional().nullable(),
  device: z.enum(["mobile", "desktop", "tablet", "unknown"]).optional(),
  session_id: z.string().min(8).max(80).optional().nullable(),
  source: z.string().max(100).optional().nullable(),
  link_location: z.string().max(40).optional().nullable(),
});

// Crawlers, uptime monitors and speed-test tools. They are not customers, so they are not counted.
const BOT_PATTERN =
  /bot|crawl|spider|slurp|headless|lighthouse|pagespeed|gtmetrix|pingdom|uptime|monitor|facebookexternalhit|vercel-screenshot|python-requests|curl\/|wget|httpclient|axios|node-fetch|go-http-client/i;

function getGeoFromHeaders(request: Request) {
  const country =
    request.headers.get("x-vercel-ip-country") ??
    request.headers.get("cf-ipcountry") ??
    null;

  const city =
    request.headers.get("x-vercel-ip-city") ??
    request.headers.get("cf-ipcity") ??
    null;

  return {
    country: country && country !== "XX" ? country : null,
    city: decodeCity(city),
  };
}

function detectDeviceFromUserAgent(userAgent: string | null) {
  if (!userAgent) {
    return "unknown" as const;
  }

  const ua = userAgent.toLowerCase();
  if (/ipad|tablet|playbook|silk/.test(ua)) {
    return "tablet" as const;
  }
  if (/mobi|android|iphone|ipod|blackberry|windows phone/.test(ua)) {
    return "mobile" as const;
  }
  return "desktop" as const;
}

export async function POST(request: Request) {
  try {
    const userAgent = request.headers.get("user-agent");
    if (!userAgent || BOT_PATTERN.test(userAgent)) {
      // Pretend it worked so bots do not retry, but store nothing.
      return NextResponse.json({ ok: true, ignored: true });
    }

    const body = await request.json();
    const parsed = trackSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json({ error: "Invalid event payload" }, { status: 400 });
    }

    const { event_type, page_url, referrer, device, session_id, source, link_location } =
      parsed.data;
    const { country, city } = getGeoFromHeaders(request);
    const resolvedDevice = device ?? detectDeviceFromUserAgent(userAgent);

    const supabase = getSupabaseAdmin();
    const baseRow = {
      event_type,
      page_url,
      referrer: referrer || null,
      device: resolvedDevice,
      country,
      city,
    };

    const { error } = await supabase.from("events").insert({
      ...baseRow,
      session_id: session_id || null,
      source: source || null,
      link_location: link_location || null,
    });

    if (error) {
      // If the new columns have not been added to the database yet (see
      // supabase/migrations/009_events_sessions.sql), save the basic event instead
      // of losing it.
      const missingColumn =
        error.code === "PGRST204" || /session_id|source|link_location/i.test(error.message ?? "");

      if (missingColumn) {
        const retry = await supabase.from("events").insert(baseRow);
        if (!retry.error) {
          return NextResponse.json({ ok: true, degraded: true });
        }
        console.error("Failed to save analytics event (retry):", retry.error);
        return NextResponse.json({ error: "Failed to save event" }, { status: 500 });
      }

      console.error("Failed to save analytics event:", error);
      return NextResponse.json({ error: "Failed to save event" }, { status: 500 });
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Analytics track error:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
