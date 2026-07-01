import { isJarvisRole, type JarvisRole, type JarvisUserStatus } from "@/lib/jarvis-roles";
import type { JarvisUser } from "@/lib/jarvis-types";
import { getSupabaseAdmin } from "@/lib/supabase";

type ClerkProfile = {
  clerkUserId: string;
  email: string;
  name: string | null;
};

export async function countJarvisUsers() {
  const supabase = getSupabaseAdmin();
  const { count, error } = await supabase
    .from("jarvis_users")
    .select("*", { count: "exact", head: true });

  if (error) throw error;
  return count ?? 0;
}

export async function getJarvisUserByClerkId(clerkUserId: string) {
  const supabase = getSupabaseAdmin();
  const { data, error } = await supabase
    .from("jarvis_users")
    .select("*")
    .eq("clerk_user_id", clerkUserId)
    .maybeSingle();

  if (error) throw error;
  return (data as JarvisUser | null) ?? null;
}

export async function upsertJarvisUserFromClerk(profile: ClerkProfile) {
  const supabase = getSupabaseAdmin();
  const now = new Date().toISOString();
  const existing = await getJarvisUserByClerkId(profile.clerkUserId);

  if (existing) {
    const { data, error } = await supabase
      .from("jarvis_users")
      .update({
        email: profile.email,
        name: profile.name,
        last_seen_at: now,
        updated_at: now,
        status: existing.status === "invited" ? "active" : existing.status,
      })
      .eq("id", existing.id)
      .select("*")
      .single();

    if (error) throw error;
    return data as JarvisUser;
  }

  const userCount = await countJarvisUsers();
  const role: JarvisRole = userCount === 0 ? "owner" : "readonly";
  const status: JarvisUserStatus = userCount === 0 ? "active" : "invited";

  const { data, error } = await supabase
    .from("jarvis_users")
    .insert({
      clerk_user_id: profile.clerkUserId,
      email: profile.email,
      name: profile.name,
      role,
      status,
      last_seen_at: now,
      updated_at: now,
    })
    .select("*")
    .single();

  if (error) throw error;
  return data as JarvisUser;
}

export async function updateJarvisUserRole(
  userId: string,
  role: JarvisRole
) {
  if (!isJarvisRole(role)) {
    throw new Error("Invalid role");
  }

  const supabase = getSupabaseAdmin();
  const { data, error } = await supabase
    .from("jarvis_users")
    .update({ role, updated_at: new Date().toISOString() })
    .eq("id", userId)
    .select("*")
    .single();

  if (error) throw error;
  return data as JarvisUser;
}
