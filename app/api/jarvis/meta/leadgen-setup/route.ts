import { NextResponse } from "next/server";
import {
  fetchManagedPages,
  getPageLeadgenSubscription,
  subscribePageToLeadgen,
} from "@/lib/meta-page-setup";
import {
  getJarvisSession,
  jarvisForbidden,
  jarvisUnauthorized,
} from "@/lib/jarvis-clerk-auth";
import { canEditLead } from "@/lib/jarvis-permissions";

export const runtime = "nodejs";

export async function GET() {
  const session = await getJarvisSession();
  if (!session) return jarvisUnauthorized();
  if (!canEditLead(session.user)) return jarvisForbidden();

  const configuredPageId = process.env.META_PAGE_ID?.trim() || null;

  try {
    const pages = await fetchManagedPages();
    const wrpxPage =
      pages.find((page) => page.name.toLowerCase() === "wrpx") ??
      pages.find((page) => page.name.toLowerCase().includes("wrpx")) ??
      null;

    const pageId = configuredPageId ?? wrpxPage?.id ?? null;
    let leadgenSubscribed = false;

    if (pageId) {
      try {
        leadgenSubscribed = await getPageLeadgenSubscription(pageId);
      } catch {
        // Subscription check can fail if token lacks access — setup POST may still work
      }
    }

    return NextResponse.json({
      pages,
      suggestedPageId: pageId,
      suggestedPageName: wrpxPage?.name ?? null,
      leadgenSubscribed,
      webhookUrl: "https://www.wrpx.co.uk/api/meta/leadgen/webhook/",
    });
  } catch (error) {
    return NextResponse.json({
      pages: [],
      suggestedPageId: configuredPageId,
      suggestedPageName: null,
      leadgenSubscribed: false,
      webhookUrl: "https://www.wrpx.co.uk/api/meta/leadgen/webhook/",
      error:
        error instanceof Error
          ? error.message
          : "Could not list Facebook pages from Meta",
      hint:
        "In Graph API Explorer: GET me/accounts → copy the WRPX page id → paste it below and click Connect.",
    });
  }
}

export async function POST(request: Request) {
  const session = await getJarvisSession();
  if (!session) return jarvisUnauthorized();
  if (!canEditLead(session.user)) return jarvisForbidden();

  try {
    const body = await request.json().catch(() => ({}));
    let pageId =
      typeof body.pageId === "string" ? body.pageId.trim() : "";

    if (!pageId) {
      pageId = process.env.META_PAGE_ID?.trim() ?? "";
    }

    if (!pageId) {
      const pages = await fetchManagedPages();
      const wrpxPage =
        pages.find((page) => page.name.toLowerCase() === "wrpx") ??
        pages.find((page) => page.name.toLowerCase().includes("wrpx"));
      pageId = wrpxPage?.id ?? "";
    }

    if (!pageId) {
      return NextResponse.json(
        {
          error:
            "WRPX page id required. Run GET me/accounts in Graph API Explorer and paste the id.",
        },
        { status: 400 }
      );
    }

    await subscribePageToLeadgen(pageId);
    const leadgenSubscribed = await getPageLeadgenSubscription(pageId);

    return NextResponse.json({
      ok: true,
      pageId,
      leadgenSubscribed,
      message:
        "WRPX page connected to Jarvis for Facebook Lead Ads. Submit a new test lead on your form.",
    });
  } catch (error) {
    console.error("Meta leadgen setup error:", error);
    return NextResponse.json(
      {
        error:
          error instanceof Error
            ? error.message
            : "Could not connect WRPX page to Jarvis",
        hint:
          "If this fails, use Graph API Explorer: switch User Token to WRPX page, POST {page-id}/subscribed_apps?subscribed_fields=leadgen",
      },
      { status: 500 }
    );
  }
}
