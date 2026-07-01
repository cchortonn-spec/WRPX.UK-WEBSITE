import type { JarvisLead, JarvisLeadInsight, JarvisLeadPriority } from "@/lib/jarvis-types";

const MS_PER_DAY = 1000 * 60 * 60 * 24;

function daysSince(date: string | null) {
  if (!date) return null;
  return Math.floor((Date.now() - new Date(date).getTime()) / MS_PER_DAY);
}

function daysUntil(date: string | null) {
  if (!date) return null;
  return Math.floor((new Date(date).getTime() - Date.now()) / MS_PER_DAY);
}

function hasColourScheme(lead: JarvisLead) {
  return Boolean(lead.colour_scheme?.trim() || lead.colour_style?.trim());
}

function hasJobType(lead: JarvisLead) {
  return Boolean(lead.job_type && lead.job_type !== "unknown");
}

function isReadyToPrice(lead: JarvisLead) {
  return (
    lead.photos_received &&
    hasColourScheme(lead) &&
    hasJobType(lead) &&
    lead.status !== "ready_to_price"
  );
}

function couldBeReadyToPrice(lead: JarvisLead) {
  return lead.photos_received && hasColourScheme(lead) && hasJobType(lead);
}

export function getLeadInsights(lead: JarvisLead): JarvisLeadInsight[] {
  const insights: JarvisLeadInsight[] = [];

  if (lead.photos_received && !hasColourScheme(lead)) {
    insights.push({
      type: "qualification",
      priority: "medium",
      message:
        "Photos received, but colour scheme is missing. Ask the customer what finish or style they have in mind.",
    });
  }

  if (hasColourScheme(lead) && !hasJobType(lead)) {
    insights.push({
      type: "qualification",
      priority: "medium",
      message:
        "Colour scheme is known, but job type is missing. Ask whether it is cupboards, worktops, both, or commercial.",
    });
  }

  if (
    lead.status === "waiting_for_photos" &&
    daysSince(lead.updated_at) !== null &&
    daysSince(lead.updated_at)! >= 2
  ) {
    insights.push({
      type: "follow_up",
      priority: "high",
      message:
        "This lead has been waiting for photos for more than 48 hours. Send a gentle follow-up.",
    });
  }

  if (lead.status === "estimate_sent") {
    const days = daysSince(lead.quote_sent_at ?? lead.updated_at);
    if (
      days !== null &&
      days >= 3 &&
      lead.follow_up_status !== "sent" &&
      lead.follow_up_status !== "complete"
    ) {
      insights.push({
        type: "follow_up",
        priority: "high",
        message: `Estimate sent ${days} days ago and has not been chased. Follow up today.`,
      });
    }
  }

  if (lead.status === "quote_sent") {
    const days = daysSince(lead.quote_sent_at ?? lead.updated_at);
    if (
      days !== null &&
      days >= 5 &&
      lead.follow_up_status !== "sent" &&
      lead.follow_up_status !== "complete"
    ) {
      insights.push({
        type: "follow_up",
        priority: "high",
        message: `Quote sent ${days} days ago and has not been chased. Follow up today.`,
      });
    }
  }

  if (
    (lead.lead_temperature === "hot" || lead.install_interest_level === "hot") &&
    !lead.ai_next_action?.trim()
  ) {
    insights.push({
      type: "warning",
      priority: "high",
      message: "Hot lead with no next action set. Decide the next step now.",
    });
  }

  if (couldBeReadyToPrice(lead) && lead.status !== "ready_to_price") {
    insights.push({
      type: "ready",
      priority: "high",
      message:
        "This lead is ready to price. Photos, job type and colour scheme are complete.",
    });
  }

  if (lead.status === "won" && lead.deposit_amount == null) {
    insights.push({
      type: "pricing",
      priority: "medium",
      message: "Lead is won but no deposit amount has been recorded.",
    });
  }

  if (
    (lead.status === "estimate_sent" || lead.status === "quote_sent") &&
    !lead.follow_up_date
  ) {
    insights.push({
      type: "follow_up",
      priority: "medium",
      message: "No follow-up date set after estimate/quote was sent.",
    });
  }

  return insights;
}

export function rankLeadPriorities(leads: JarvisLead[]): JarvisLeadPriority[] {
  const ranked: JarvisLeadPriority[] = [];

  for (const lead of leads) {
    const insights = getLeadInsights(lead);
    const followUpDays = daysUntil(lead.follow_up_date);

    if (
      lead.follow_up_date &&
      followUpDays !== null &&
      followUpDays < 0 &&
      lead.follow_up_status !== "complete"
    ) {
      ranked.push({
        lead_id: lead.id,
        name: lead.name,
        status: lead.status,
        reason: "Overdue follow-up",
        rank: 1,
        priority_score: 100,
      });
      continue;
    }

    if (
      (lead.lead_temperature === "hot" || lead.install_interest_level === "hot") &&
      !lead.ai_next_action?.trim()
    ) {
      ranked.push({
        lead_id: lead.id,
        name: lead.name,
        status: lead.status,
        reason: "Hot lead with no next action",
        rank: 2,
        priority_score: 90,
      });
      continue;
    }

    if (lead.status === "ready_to_price" || isReadyToPrice(lead)) {
      ranked.push({
        lead_id: lead.id,
        name: lead.name,
        status: lead.status,
        reason: "Ready to price",
        rank: 3,
        priority_score: 80,
      });
      continue;
    }

    if (
      lead.status === "photos_received" &&
      (!hasColourScheme(lead) || !hasJobType(lead))
    ) {
      ranked.push({
        lead_id: lead.id,
        name: lead.name,
        status: lead.status,
        reason: "Photos received but missing colour or job type",
        rank: 4,
        priority_score: 70,
      });
      continue;
    }

    if (
      lead.status === "waiting_for_photos" &&
      daysSince(lead.updated_at) !== null &&
      daysSince(lead.updated_at)! >= 2
    ) {
      ranked.push({
        lead_id: lead.id,
        name: lead.name,
        status: lead.status,
        reason: "Waiting for photos too long",
        rank: 5,
        priority_score: 60,
      });
      continue;
    }

    if (insights.some((i) => i.type === "follow_up" && i.message.includes("Quote"))) {
      ranked.push({
        lead_id: lead.id,
        name: lead.name,
        status: lead.status,
        reason: "Quote needs chasing",
        rank: 6,
        priority_score: 50,
      });
      continue;
    }

    if (
      insights.some((i) => i.type === "follow_up" && i.message.includes("Estimate"))
    ) {
      ranked.push({
        lead_id: lead.id,
        name: lead.name,
        status: lead.status,
        reason: "Estimate needs chasing",
        rank: 7,
        priority_score: 40,
      });
    }
  }

  return ranked.sort((a, b) => b.priority_score - a.priority_score);
}
