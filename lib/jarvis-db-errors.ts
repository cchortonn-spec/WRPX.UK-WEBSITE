type SupabaseErrorLike = {
  code?: string;
  message?: string;
};

export const JARVIS_PHASE_2_MIGRATION =
  "supabase/migrations/005_jarvis_phase_2_leads.sql";

export const JARVIS_PHASE_2_MIGRATION_MESSAGE =
  "Database needs the Phase 2 migration. Open Supabase → SQL Editor, paste and run the file supabase/migrations/005_jarvis_phase_2_leads.sql, then try again.";

export function isMissingSchemaColumnError(error: SupabaseErrorLike | null) {
  if (!error) return false;
  if (error.code === "PGRST204") return true;
  return (
    typeof error.message === "string" &&
    error.message.includes("Could not find the") &&
    error.message.includes("schema cache")
  );
}

export function formatJarvisDbError(
  error: SupabaseErrorLike | null,
  fallback: string
) {
  if (isMissingSchemaColumnError(error)) {
    return JARVIS_PHASE_2_MIGRATION_MESSAGE;
  }

  return fallback;
}
