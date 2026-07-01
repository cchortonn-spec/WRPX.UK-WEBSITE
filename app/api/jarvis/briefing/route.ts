import { NextResponse } from "next/server";
import { getJarvisAuthFromCookies } from "@/lib/jarvis-auth";
import { rankLeadPriorities } from "@/lib/jarvis-lead-insights";
import type { JarvisBriefing, JarvisLead } from "@/lib/jarvis-types";
import { getSupabaseAdmin } from "@/lib/supabase";

export const runtime = "nodejs";

function unauthorized() {
  return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
}

function startOfToday() {
  const date = new Date();
  date.setHours(0, 0, 0, 0);
  return date.toISOString();
}

function endOfToday() {
  const date = new Date();
  date.setHours(23, 59, 59, 999);
  return date.toISOString();
}

function getGreeting() {
  const hour = new Date().getHours();
  if (hour < 12) return "Good morning Connor.";
  if (hour < 17) return "Good afternoon Connor.";
  return "Good evening Connor.";
}

export async function GET() {
  if (!(await getJarvisAuthFromCookies())) {
    return unauthorized();
  }

  try {
    const supabase = getSupabaseAdmin();

    const [{ data: leads, error: leadsError }, { data: tasks, error: tasksError }] =
      await Promise.all([
        supabase.from("jarvis_leads").select("*"),
        supabase
          .from("jarvis_tasks")
          .select("id, status, due_at")
          .eq("status", "open"),
      ]);

    if (leadsError || tasksError) {
      return NextResponse.json(
        { error: "Could not load briefing" },
        { status: 500 }
      );
    }

    const allLeads = (leads ?? []) as JarvisLead[];
    const openTasks = tasks ?? [];
    const todayStart = startOfToday();
    const todayEnd = endOfToday();
    const now = new Date();

    const countByStatus = (statuses: string[]) =>
      allLeads.filter((lead) => statuses.includes(lead.status)).length;

    const waitingForPhotos = countByStatus(["waiting_for_photos"]);
    const photosReceived = countByStatus(["photos_received"]);
    const readyToPrice = countByStatus(["ready_to_price"]);
    const estimatesSent = countByStatus(["estimate_sent"]);
    const quotesSent = countByStatus(["quote_sent"]);
    const hotLeads = allLeads.filter(
      (lead) => lead.lead_temperature === "hot" || lead.install_interest_level === "hot"
    ).length;

    const followUpsDue = allLeads.filter((lead) => {
      if (!lead.follow_up_date || lead.follow_up_status === "complete") return false;
      const due = new Date(lead.follow_up_date);
      due.setHours(0, 0, 0, 0);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      return due.getTime() === today.getTime();
    }).length;

    const overdueFollowUps = allLeads.filter((lead) => {
      if (!lead.follow_up_date || lead.follow_up_status === "complete") return false;
      return new Date(lead.follow_up_date) < now;
    }).length;

    const newLeads = allLeads.filter(
      (lead) => lead.created_at >= todayStart && lead.created_at <= todayEnd
    ).length;

    const tasksDueToday = openTasks.filter(
      (task) =>
        task.due_at && task.due_at >= todayStart && task.due_at <= todayEnd
    ).length;

    const leadPriorities = rankLeadPriorities(allLeads).slice(0, 8);

    const priorities: string[] = leadPriorities.map(
      (item) => `${item.name}: ${item.reason}`
    );

    if (overdueFollowUps > 0) {
      priorities.unshift(
        `${overdueFollowUps} overdue follow-up${overdueFollowUps === 1 ? "" : "s"}.`
      );
    }
    if (readyToPrice > 0) {
      priorities.push(
        `${readyToPrice} lead${readyToPrice === 1 ? "" : "s"} ready to price.`
      );
    }
    if (priorities.length === 0) {
      priorities.push("No urgent items right now. Jarvis is watching everything.");
    }

    const briefing: JarvisBriefing = {
      greeting: getGreeting(),
      summary: "I've reviewed everything. Here's what needs your attention.",
      priorities,
      stats: {
        waiting_for_photos: waitingForPhotos,
        photos_received: photosReceived,
        ready_to_price: readyToPrice,
        follow_ups_due: followUpsDue,
        overdue_follow_ups: overdueFollowUps,
        estimates_sent: estimatesSent,
        quotes_sent: quotesSent,
        hot_leads: hotLeads,
        new_leads: newLeads,
        open_tasks: openTasks.length,
        tasks_due_today: tasksDueToday,
      },
      lead_priorities: leadPriorities,
      lastUpdated: new Date().toISOString(),
    };

    return NextResponse.json(briefing);
  } catch (error) {
    console.error("Jarvis briefing error:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
