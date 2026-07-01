"use client";

import { StagePill } from "@/components/jarvis/StagePill";
import {
  JOB_TYPE_LABELS,
  LEAD_STAGES,
  SOURCE_LABELS,
  formatCurrency,
  getFollowUpBadge,
  type JarvisLead,
  type LeadStageId,
} from "@/lib/jarvis-types";

type LeadCardProps = {
  lead: JarvisLead;
  onClick: () => void;
  onStageChange?: (stage: LeadStageId) => void;
  compact?: boolean;
};

function formatShortDate(value: string | null) {
  if (!value) return "—";
  return new Date(value).toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
  });
}

export function LeadCard({ lead, onClick, onStageChange, compact }: LeadCardProps) {
  const followUpBadge = getFollowUpBadge(lead);
  const amount = formatCurrency(lead.estimated_amount ?? lead.quoted_amount);

  return (
    <article className="jarvis-lead-card" onClick={onClick}>
      <div className="jarvis-lead-card-header">
        <h3 className="jarvis-lead-card-name">{lead.name}</h3>
        {lead.priority === "urgent" || lead.priority === "high" ? (
          <span className={`jarvis-pill jarvis-pill-${lead.priority === "urgent" ? "red" : "amber"}`}>
            {lead.priority}
          </span>
        ) : null}
      </div>

      <p className="jarvis-lead-card-meta">
        {SOURCE_LABELS[lead.source]}
        {lead.job_type ? ` · ${JOB_TYPE_LABELS[lead.job_type]}` : ""}
      </p>

      <div className="jarvis-lead-card-badges">
        <StagePill stageId={lead.status} />
        {lead.photos_received ? (
          <span className="jarvis-pill jarvis-pill-teal">Photos</span>
        ) : null}
        {followUpBadge ? (
          <span
            className={`jarvis-pill ${
              followUpBadge === "Overdue" ? "jarvis-pill-red" : "jarvis-pill-amber"
            }`}
          >
            {followUpBadge}
          </span>
        ) : null}
        {lead.lead_temperature === "hot" ? (
          <span className="jarvis-pill jarvis-pill-lime">Hot</span>
        ) : null}
      </div>

      <div className="jarvis-lead-card-footer">
        <span className="jarvis-muted">Last contact {formatShortDate(lead.last_contacted_at ?? lead.updated_at)}</span>
        {amount ? <span className="jarvis-lead-card-amount">{amount}</span> : null}
      </div>

      {!compact && onStageChange ? (
        <select
          className="jarvis-select jarvis-lead-card-stage"
          value={lead.status}
          onClick={(event) => event.stopPropagation()}
          onChange={(event) => onStageChange(event.target.value as LeadStageId)}
        >
          {LEAD_STAGES.map((stage) => (
            <option key={stage.id} value={stage.id}>
              {stage.label}
            </option>
          ))}
        </select>
      ) : null}
    </article>
  );
}
