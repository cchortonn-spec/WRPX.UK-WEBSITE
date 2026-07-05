import { NextResponse } from "next/server";
import {
  getJarvisSession,
  jarvisUnauthorized,
} from "@/lib/jarvis-clerk-auth";
import { getWhatsAppTemplates } from "@/lib/whatsapp-templates";

export const runtime = "nodejs";

export async function GET() {
  const session = await getJarvisSession();
  if (!session) {
    return jarvisUnauthorized();
  }

  return NextResponse.json({ templates: getWhatsAppTemplates() });
}
