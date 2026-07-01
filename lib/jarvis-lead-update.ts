import type { FollowUpAction } from "@/lib/jarvis-types";

export function applyFollowUpAction(action: FollowUpAction) {
  const now = new Date();
  const updates: Record<string, unknown> = {};

  if (action === "tomorrow") {
    const date = new Date(now);
    date.setDate(date.getDate() + 1);
    updates.follow_up_date = date.toISOString();
    updates.follow_up_status = "due";
  }

  if (action === "3_days") {
    const date = new Date(now);
    date.setDate(date.getDate() + 3);
    updates.follow_up_date = date.toISOString();
    updates.follow_up_status = "due";
  }

  if (action === "next_week") {
    const date = new Date(now);
    date.setDate(date.getDate() + 7);
    updates.follow_up_date = date.toISOString();
    updates.follow_up_status = "due";
  }

  if (action === "mark_sent") {
    updates.follow_up_status = "sent";
    updates.last_follow_up_sent_at = now.toISOString();
    updates.last_follow_up_at = now.toISOString();
  }

  if (action === "clear") {
    updates.follow_up_date = null;
    updates.follow_up_status = "not_set";
  }

  return updates;
}
