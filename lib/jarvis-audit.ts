import { getSupabaseAdmin } from "@/lib/supabase";
import type { JarvisUser } from "@/lib/jarvis-types";

type AuditInput = {
  actor: JarvisUser | null;
  action: string;
  entityType?: string;
  entityId?: string;
  summary: string;
  metadata?: Record<string, unknown>;
};

export async function logJarvisAudit(input: AuditInput) {
  try {
    const supabase = getSupabaseAdmin();
    await supabase.from("jarvis_audit_logs").insert({
      actor_user_id: input.actor?.id ?? null,
      actor_clerk_user_id: input.actor?.clerk_user_id ?? null,
      action: input.action,
      entity_type: input.entityType ?? null,
      entity_id: input.entityId ?? null,
      summary: input.summary,
      metadata: input.metadata ?? null,
    });
  } catch (error) {
    console.error("Jarvis audit log error:", error);
  }
}
