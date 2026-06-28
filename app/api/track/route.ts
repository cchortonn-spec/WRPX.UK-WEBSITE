import { NextResponse } from "next/server";
import { z } from "zod";
import { ANALYTICS_EVENT_TYPES } from "@/lib/analytics-types";
import { getSupabaseAdmin } from "@/lib/supabase";

export const runtime = "nodejs";

const trackSchema = z.object({
  event_type: z.enum(ANALYTICS_EVENT_TYPES),
  page_url: z.string().min(1).max(2048),
  referrer: z.string().max(2048).optional().nullable(),
  device: z.enum(["mobile", "desktop", "tablet", "unknown"]).optional(),
});

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
    city,
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
    const body = await request.json();
    const parsed = trackSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json({ error: "Invalid event payload" }, { status: 400 });
    }

    const { event_type, page_url, referrer, device } = parsed.data;
    const { country, city } = getGeoFromHeaders(request);
    const userAgent = request.headers.get("user-agent");
    const resolvedDevice =
      device ?? detectDeviceFromUserAgent(userAgent);

    const supabase = getSupabaseAdmin();
    const { error } = await supabase.from("events").insert({
      event_type,
      page_url,
      referrer: referrer || null,
      device: resolvedDevice,
      country,
      city,
    });

    if (error) {
      console.error("Failed to save analytics event:", error);
      return NextResponse.json({ error: "Failed to save event" }, { status: 500 });
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Analytics track error:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
