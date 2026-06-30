import { NextResponse } from "next/server";
import { getJarvisAuthFromCookies } from "@/lib/jarvis-auth";
import type { JarvisBriefing } from "@/lib/jarvis-types";
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

    const { data: leads, error: leadsError } = await supabase
      .from("jarvis_leads")
      .select("id, status, created_at");

    if (leadsError) {
      console.error("Jarvis briefing leads error:", leadsError);
      return NextResponse.json(
        { error: "Could not load briefing" },
        { status: 500 }
      );
    }

    const { data: tasks, error: tasksError } = await supabase
      .from("jarvis_tasks")
      .select("id, status, due_at")
      .eq("status", "open");

    if (tasksError) {
      console.error("Jarvis briefing tasks error:", tasksError);
      return NextResponse.json(
        { error: "Could not load briefing" },
        { status: 500 }
      );
    }

    const allLeads = leads ?? [];
    const openTasks = tasks ?? [];
    const todayStart = startOfToday();
    const todayEnd = endOfToday();

    const countByStatus = (statuses: string[]) =>
      allLeads.filter((lead) => statuses.includes(lead.status)).length;

    const qualifiedLeads = countByStatus(["ready_for_estimate"]);
    const followUpsDue = countByStatus(["follow_up_due"]);
    const quotesSent = countByStatus(["quote_sent"]);
    const depositDue = countByStatus(["deposit_due"]);
    const installsUpcoming = countByStatus(["install_booked"]);
    const invoicesOverdue = countByStatus(["final_invoice_sent"]);
    const needsConnor = countByStatus([
      "ready_for_estimate",
      "survey_needed",
      "follow_up_due",
      "deposit_due",
      "pricing",
    ]);
    const waitingOnCustomer = countByStatus([
      "waiting_for_reply",
      "waiting_for_photos",
      "waiting_for_colour_style",
      "waiting_for_job_type",
      "quote_sent",
    ]);
    const newLeads = allLeads.filter(
      (lead) => lead.created_at >= todayStart && lead.created_at <= todayEnd
    ).length;

    const tasksDueToday = openTasks.filter(
      (task) =>
        task.due_at &&
        task.due_at >= todayStart &&
        task.due_at <= todayEnd
    ).length;

    const priorities: string[] = [];

    if (qualifiedLeads > 0) {
      priorities.push(
        `${qualifiedLeads} lead${qualifiedLeads === 1 ? "" : "s"} ready for estimate.`
      );
    }
    if (followUpsDue > 0) {
      priorities.push(
        `${followUpsDue} quote${followUpsDue === 1 ? "" : "s"} need chasing.`
      );
    }
    if (depositDue > 0) {
      priorities.push(
        `${depositDue} deposit${depositDue === 1 ? "" : "s"} still unpaid.`
      );
    }
    if (tasksDueToday > 0) {
      priorities.push(
        `${tasksDueToday} task${tasksDueToday === 1 ? "" : "s"} due today.`
      );
    }
    if (newLeads > 0) {
      priorities.push(
        `${newLeads} new lead${newLeads === 1 ? "" : "s"} arrived today.`
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
        qualified_leads: qualifiedLeads,
        follow_ups_due: followUpsDue,
        quotes_sent: quotesSent,
        deposit_due: depositDue,
        installs_upcoming: installsUpcoming,
        invoices_overdue: invoicesOverdue,
        needs_connor: needsConnor,
        waiting_on_customer: waitingOnCustomer,
        new_leads: newLeads,
        open_tasks: openTasks.length,
        tasks_due_today: tasksDueToday,
      },
      lastUpdated: new Date().toISOString(),
    };

    return NextResponse.json(briefing);
  } catch (error) {
    console.error("Jarvis briefing error:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
