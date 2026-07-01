import { NextResponse } from "next/server";
import {
  getJarvisSession,
  jarvisUnauthorized,
} from "@/lib/jarvis-clerk-auth";
import { ROLE_LABELS } from "@/lib/jarvis-roles";

export const runtime = "nodejs";

export async function GET() {
  const session = await getJarvisSession();
  if (!session) {
    return jarvisUnauthorized();
  }

  return NextResponse.json({
    user: session.user,
    roleLabel: ROLE_LABELS[session.user.role],
  });
}
