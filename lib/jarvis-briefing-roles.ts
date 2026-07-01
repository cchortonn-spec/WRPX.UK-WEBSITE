import type { JarvisBriefing, JarvisUser } from "@/lib/jarvis-types";
import {
  canViewAnalytics,
  canViewFullBriefing,
  canViewInstallerBriefing,
  canViewOfficeBriefing,
} from "@/lib/jarvis-permissions";

export function filterBriefingForRole(
  briefing: JarvisBriefing,
  user: JarvisUser
): JarvisBriefing {
  if (canViewFullBriefing(user)) {
    return briefing;
  }

  if (canViewOfficeBriefing(user)) {
    return {
      ...briefing,
      greeting: briefing.greeting.replace("Connor", user.name ?? "there"),
      summary: "Here are today's leads and follow-ups that need attention.",
      stats: {
        waiting_for_photos: briefing.stats.waiting_for_photos,
        photos_received: briefing.stats.photos_received,
        ready_to_price: briefing.stats.ready_to_price,
        follow_ups_due: briefing.stats.follow_ups_due,
        overdue_follow_ups: briefing.stats.overdue_follow_ups,
        estimates_sent: briefing.stats.estimates_sent,
        quotes_sent: briefing.stats.quotes_sent,
        hot_leads: briefing.stats.hot_leads,
        new_leads: briefing.stats.new_leads,
        open_tasks: briefing.stats.open_tasks,
        tasks_due_today: briefing.stats.tasks_due_today,
      },
      priorities: briefing.priorities.filter(
        (item) =>
          !item.toLowerCase().includes("profit") &&
          !item.toLowerCase().includes("marketing")
      ),
    };
  }

  if (canViewInstallerBriefing(user)) {
    return {
      ...briefing,
      greeting: `Good day${user.name ? ` ${user.name}` : ""}.`,
      summary: "Here are your assigned jobs and tasks for today.",
      priorities:
        briefing.stats.tasks_due_today > 0
          ? [`${briefing.stats.tasks_due_today} task${briefing.stats.tasks_due_today === 1 ? "" : "s"} due today.`]
          : ["No urgent tasks right now."],
      stats: {
        waiting_for_photos: 0,
        photos_received: 0,
        ready_to_price: 0,
        follow_ups_due: 0,
        overdue_follow_ups: 0,
        estimates_sent: 0,
        quotes_sent: 0,
        hot_leads: 0,
        new_leads: 0,
        open_tasks: briefing.stats.open_tasks,
        tasks_due_today: briefing.stats.tasks_due_today,
      },
      lead_priorities: [],
    };
  }

  if (canViewAnalytics(user)) {
    return briefing;
  }

  return {
    ...briefing,
    summary: "Here is your Jarvis overview.",
    lead_priorities: briefing.lead_priorities.slice(0, 3),
  };
}
