import { auth, currentUser } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import { logJarvisAudit } from "@/lib/jarvis-audit";
import { upsertJarvisUserFromClerk } from "@/lib/jarvis-user";
import type { JarvisSession } from "@/lib/jarvis-types";

export function jarvisUnauthorized() {
  return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
}

export function jarvisForbidden(message = "You do not have permission to do that.") {
  return NextResponse.json({ error: message }, { status: 403 });
}

export async function getJarvisSession(): Promise<JarvisSession | null> {
  const { userId } = await auth();
  if (!userId) return null;

  const clerkUser = await currentUser();
  const email =
    clerkUser?.primaryEmailAddress?.emailAddress ??
    clerkUser?.emailAddresses[0]?.emailAddress;

  if (!email) return null;

  const name =
    clerkUser?.fullName?.trim() ||
    [clerkUser?.firstName, clerkUser?.lastName].filter(Boolean).join(" ") ||
    null;

  const user = await upsertJarvisUserFromClerk({
    clerkUserId: userId,
    email,
    name,
  });

  if (user.status !== "active") {
    return null;
  }

  return {
    clerkUserId: userId,
    email,
    name,
    user,
  };
}

export async function requireJarvisSession() {
  const session = await getJarvisSession();
  if (!session) return null;
  return session;
}

export async function logJarvisLogin(session: JarvisSession) {
  await logJarvisAudit({
    actor: session.user,
    action: "login",
    summary: `${session.user.email} signed in`,
  });
}
