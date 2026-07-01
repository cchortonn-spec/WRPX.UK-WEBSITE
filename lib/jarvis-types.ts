export const LEAD_SOURCES = [
  "facebook",
  "website",
  "whatsapp",
  "email",
  "referral",
  "manual",
] as const;

export type LeadSource = (typeof LEAD_SOURCES)[number];

export const CONTACT_TYPES = [
  "domestic",
  "commercial",
  "supplier",
  "subcontractor",
  "partner",
] as const;

export type ContactType = (typeof CONTACT_TYPES)[number];

export const JOB_TYPES = [
  "unknown",
  "cupboards",
  "worktops",
  "cupboards_and_worktops",
  "commercial_architectural_wrap",
  "window_film",
  "furniture",
  "doors",
  "worktops_and_splashbacks",
  "other",
] as const;

export type JobType = (typeof JOB_TYPES)[number];

export const PRIORITIES = ["low", "normal", "high", "urgent"] as const;

export type Priority = (typeof PRIORITIES)[number];

export const PRICING_ROUTES = [
  "unknown",
  "estimate_from_photos",
  "survey_needed",
  "measured_quote",
  "commercial_scope_needed",
] as const;

export type PricingRoute = (typeof PRICING_ROUTES)[number];

export const FOLLOW_UP_STATUSES = [
  "not_set",
  "due",
  "sent",
  "snoozed",
  "complete",
] as const;

export type FollowUpStatus = (typeof FOLLOW_UP_STATUSES)[number];

export const LEAD_TEMPERATURES = ["unknown", "cold", "warm", "hot"] as const;

export type LeadTemperature = (typeof LEAD_TEMPERATURES)[number];

export const PHOTO_TYPES = [
  "general",
  "full_room",
  "cupboards",
  "worktops",
  "damage",
  "commercial_area",
  "measurements",
  "end_panels",
  "plinths",
  "doors",
  "other",
] as const;

export type PhotoType = (typeof PHOTO_TYPES)[number];

export const TASK_STATUSES = ["open", "completed", "cancelled"] as const;

export type TaskStatus = (typeof TASK_STATUSES)[number];

export type StageColor =
  | "lime"
  | "grey"
  | "amber"
  | "yellow"
  | "green"
  | "blue"
  | "teal"
  | "purple"
  | "pink"
  | "orange"
  | "red"
  | "olive"
  | "gold"
  | "cyan"
  | "violet"
  | "slate";

export type LeadStage = {
  id: string;
  label: string;
  color: StageColor;
};

export const LEAD_STAGES: LeadStage[] = [
  { id: "new_lead", label: "New Lead", color: "grey" },
  { id: "waiting_for_photos", label: "Waiting for Photos", color: "amber" },
  { id: "photos_received", label: "Photos Received", color: "teal" },
  {
    id: "waiting_for_colour_job_type",
    label: "Waiting for Colour / Job Type",
    color: "orange",
  },
  { id: "ready_to_price", label: "Ready to Price", color: "lime" },
  { id: "estimate_sent", label: "Estimate Sent", color: "green" },
  { id: "survey_booked", label: "Survey Booked", color: "cyan" },
  { id: "measured", label: "Measured", color: "violet" },
  { id: "quote_sent", label: "Quote Sent", color: "pink" },
  { id: "follow_up", label: "Follow Up", color: "orange" },
  { id: "won", label: "Won", color: "green" },
  { id: "lost", label: "Lost", color: "red" },
  { id: "not_suitable", label: "Not Suitable", color: "slate" },
];

export const LEAD_STAGE_IDS = LEAD_STAGES.map((stage) => stage.id);

export type LeadStageId = (typeof LEAD_STAGE_IDS)[number];

export const SOURCE_LABELS: Record<LeadSource, string> = {
  facebook: "Facebook",
  website: "Website",
  whatsapp: "WhatsApp",
  email: "Email",
  referral: "Referral",
  manual: "Manual",
};

export const JOB_TYPE_LABELS: Record<JobType, string> = {
  unknown: "Unknown",
  cupboards: "Cupboards",
  worktops: "Worktops",
  cupboards_and_worktops: "Cupboards + Worktops",
  commercial_architectural_wrap: "Commercial architectural wrap",
  window_film: "Window film",
  furniture: "Furniture",
  doors: "Doors",
  worktops_and_splashbacks: "Worktops + splashbacks",
  other: "Other",
};

export const PRICING_ROUTE_LABELS: Record<PricingRoute, string> = {
  unknown: "Unknown",
  estimate_from_photos: "Estimate from photos",
  survey_needed: "Survey needed",
  measured_quote: "Measured quote",
  commercial_scope_needed: "Commercial scope needed",
};

export const PRIORITY_LABELS: Record<Priority, string> = {
  low: "Low",
  normal: "Normal",
  high: "High",
  urgent: "Urgent",
};

export const LEAD_TEMPERATURE_LABELS: Record<LeadTemperature, string> = {
  unknown: "Unknown",
  cold: "Cold",
  warm: "Warm",
  hot: "Hot",
};

export const FOLLOW_UP_STATUS_LABELS: Record<FollowUpStatus, string> = {
  not_set: "Not set",
  due: "Due",
  sent: "Sent",
  snoozed: "Snoozed",
  complete: "Complete",
};

export const PHOTO_TYPE_LABELS: Record<PhotoType, string> = {
  general: "General",
  full_room: "Full room",
  cupboards: "Cupboards",
  worktops: "Worktops",
  damage: "Damage",
  commercial_area: "Commercial area",
  measurements: "Measurements",
  end_panels: "End panels",
  plinths: "Plinths",
  doors: "Doors",
  other: "Other",
};

export function getStageById(id: string) {
  return LEAD_STAGES.find((stage) => stage.id === id) ?? LEAD_STAGES[0];
}

export type JarvisContact = {
  id: string;
  contact_type: ContactType;
  name: string;
  company_name: string | null;
  phone: string | null;
  email: string | null;
  source: LeadSource | null;
  notes: string | null;
  created_at: string;
  updated_at: string;
};

export type JarvisLead = {
  id: string;
  contact_id: string | null;
  name: string;
  phone: string | null;
  email: string | null;
  source: LeadSource;
  status: LeadStageId;
  priority: Priority;
  job_type: JobType | null;
  colour_style: string | null;
  colour_scheme: string | null;
  photos_received: boolean;
  pricing_route: PricingRoute;
  follow_up_date: string | null;
  follow_up_status: FollowUpStatus;
  last_follow_up_sent_at: string | null;
  last_contacted_at: string | null;
  estimated_amount: number | null;
  quoted_amount: number | null;
  deposit_amount: number | null;
  quote_sent_at: string | null;
  survey_date: string | null;
  install_interest_level: LeadTemperature;
  pricing_notes: string | null;
  lead_temperature: LeadTemperature;
  ai_summary: string | null;
  ai_next_action: string | null;
  last_customer_message_at: string | null;
  last_follow_up_at: string | null;
  created_at: string;
  updated_at: string;
};

export type JarvisLeadPhoto = {
  id: string;
  lead_id: string;
  storage_path: string;
  file_name: string | null;
  file_type: string | null;
  file_size: number | null;
  uploaded_at: string;
  caption: string | null;
  photo_type: PhotoType;
  created_by: string | null;
};

export type JarvisLeadNote = {
  id: string;
  lead_id: string;
  body: string;
  created_at: string;
};

export type JarvisTask = {
  id: string;
  title: string;
  description: string | null;
  related_lead_id: string | null;
  priority: Priority;
  status: TaskStatus;
  due_at: string | null;
  completed_at: string | null;
  created_at: string;
};

export type JarvisLeadInsight = {
  message: string;
  priority: "low" | "medium" | "high";
  type: "qualification" | "follow_up" | "pricing" | "warning" | "ready";
};

export type JarvisLeadDetail = JarvisLead & {
  notes: JarvisLeadNote[];
  tasks: JarvisTask[];
  photos: JarvisLeadPhoto[];
  insights: JarvisLeadInsight[];
};

export type JarvisLeadPriority = {
  lead_id: string;
  name: string;
  status: LeadStageId;
  reason: string;
  rank: number;
  priority_score: number;
};

export type JarvisBriefing = {
  greeting: string;
  summary: string;
  priorities: string[];
  stats: {
    waiting_for_photos: number;
    photos_received: number;
    ready_to_price: number;
    follow_ups_due: number;
    overdue_follow_ups: number;
    estimates_sent: number;
    quotes_sent: number;
    hot_leads: number;
    new_leads: number;
    open_tasks: number;
    tasks_due_today: number;
  };
  lead_priorities: JarvisLeadPriority[];
  lastUpdated: string;
};

export const INSIGHT_TYPES = [
  "lead",
  "sales",
  "seo",
  "operations",
  "finance",
  "material",
] as const;

export type InsightType = (typeof INSIGHT_TYPES)[number];

export const INSIGHT_PRIORITIES = ["low", "medium", "high"] as const;

export type InsightPriority = (typeof INSIGHT_PRIORITIES)[number];

export type JarvisAnalyticsInsight = {
  id: string;
  insight_type: InsightType;
  title: string;
  summary: string;
  recommendation: string;
  priority: InsightPriority;
  related_page?: string;
  related_page_title?: string;
};

export type JarvisAnalyticsInsightsResponse = {
  insights: JarvisAnalyticsInsight[];
  lastUpdated: string;
};

export type FollowUpAction =
  | "tomorrow"
  | "3_days"
  | "next_week"
  | "mark_sent"
  | "clear";

export function formatCurrency(amount: number | null | undefined) {
  if (amount == null) return null;
  return new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "GBP",
    maximumFractionDigits: 0,
  }).format(amount);
}

export function getFollowUpBadge(lead: JarvisLead): string | null {
  if (!lead.follow_up_date || lead.follow_up_status === "complete") {
    return lead.follow_up_status === "not_set" ? "No follow-up set" : null;
  }

  const due = new Date(lead.follow_up_date);
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const dueDay = new Date(due);
  dueDay.setHours(0, 0, 0, 0);

  const diffDays = Math.round(
    (dueDay.getTime() - today.getTime()) / (1000 * 60 * 60 * 24)
  );

  if (diffDays < 0) return "Overdue";
  if (diffDays === 0) return "Due today";
  if (diffDays === 1) return "Follow-up tomorrow";
  return `Follow-up in ${diffDays} days`;
}
