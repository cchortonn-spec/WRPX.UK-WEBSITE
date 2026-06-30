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
  "kitchen_cupboards",
  "kitchen_worktops",
  "cupboards_and_worktops",
  "window_film",
  "furniture_wrapping",
  "architectural_vinyl",
  "commercial_wrap",
  "other",
] as const;

export type JobType = (typeof JOB_TYPES)[number];

export const PRIORITIES = ["low", "medium", "high", "urgent"] as const;

export type Priority = (typeof PRIORITIES)[number];

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
  | "gold";

export type LeadStage = {
  id: string;
  label: string;
  color: StageColor;
};

export const LEAD_STAGES: LeadStage[] = [
  { id: "new_lead", label: "New Lead", color: "lime" },
  { id: "waiting_for_reply", label: "Waiting for Reply", color: "grey" },
  { id: "waiting_for_photos", label: "Waiting for Photos", color: "amber" },
  {
    id: "waiting_for_colour_style",
    label: "Waiting for Colour / Style",
    color: "yellow",
  },
  { id: "waiting_for_job_type", label: "Waiting for Job Type", color: "yellow" },
  { id: "ready_for_estimate", label: "Ready for Estimate", color: "green" },
  { id: "survey_needed", label: "Survey Needed", color: "blue" },
  { id: "survey_booked", label: "Survey Booked", color: "blue" },
  { id: "measured", label: "Measured", color: "teal" },
  { id: "pricing", label: "Pricing", color: "purple" },
  { id: "quote_sent", label: "Quote Sent", color: "pink" },
  { id: "follow_up_due", label: "Follow Up Due", color: "orange" },
  { id: "won", label: "Won", color: "green" },
  { id: "deposit_due", label: "Deposit Due", color: "red" },
  { id: "deposit_paid", label: "Deposit Paid", color: "green" },
  { id: "material_ordered", label: "Material Ordered", color: "olive" },
  { id: "install_booked", label: "Install Booked", color: "blue" },
  { id: "in_progress", label: "In Progress", color: "lime" },
  { id: "completed", label: "Completed", color: "green" },
  { id: "final_invoice_sent", label: "Final Invoice Sent", color: "amber" },
  { id: "paid", label: "Paid", color: "green" },
  { id: "review_requested", label: "Review Requested", color: "purple" },
  { id: "closed", label: "Closed", color: "grey" },
  { id: "lost", label: "Lost / Not Suitable", color: "red" },
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
  kitchen_cupboards: "Kitchen cupboards",
  kitchen_worktops: "Kitchen worktops",
  cupboards_and_worktops: "Cupboards and worktops",
  window_film: "Window film",
  furniture_wrapping: "Furniture wrapping",
  architectural_vinyl: "Architectural vinyl",
  commercial_wrap: "Commercial wrap",
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
  photos_received: boolean;
  ai_summary: string | null;
  ai_next_action: string | null;
  last_customer_message_at: string | null;
  last_follow_up_at: string | null;
  created_at: string;
  updated_at: string;
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

export type JarvisLeadDetail = JarvisLead & {
  notes: JarvisLeadNote[];
  tasks: JarvisTask[];
};

export type JarvisBriefing = {
  greeting: string;
  summary: string;
  priorities: string[];
  stats: {
    qualified_leads: number;
    follow_ups_due: number;
    quotes_sent: number;
    deposit_due: number;
    installs_upcoming: number;
    invoices_overdue: number;
    needs_connor: number;
    waiting_on_customer: number;
    new_leads: number;
    open_tasks: number;
    tasks_due_today: number;
  };
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
