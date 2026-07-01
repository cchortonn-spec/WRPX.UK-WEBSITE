"use client";

import { useCallback, useEffect, useState } from "react";
import { LeadPhotoGrid } from "@/components/jarvis/LeadPhotoGrid";
import { StagePill } from "@/components/jarvis/StagePill";
import {
  JOB_TYPES,
  JOB_TYPE_LABELS,
  LEAD_SOURCES,
  LEAD_STAGES,
  LEAD_TEMPERATURES,
  PRICING_ROUTES,
  PRICING_ROUTE_LABELS,
  PRIORITIES,
  PRIORITY_LABELS,
  SOURCE_LABELS,
  LEAD_TEMPERATURE_LABELS,
  formatCurrency,
  getFollowUpBadge,
  type FollowUpAction,
  type JarvisLeadDetail,
  type JobType,
  type LeadSource,
  type LeadStageId,
  type LeadTemperature,
  type PricingRoute,
  type Priority,
} from "@/lib/jarvis-types";

type LeadDrawerProps = {
  leadId: string;
  onClose: () => void;
  onUpdated: () => void;
};

function formatDate(value: string) {
  return new Date(value).toLocaleString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

export function LeadDrawer({ leadId, onClose, onUpdated }: LeadDrawerProps) {
  const [lead, setLead] = useState<JarvisLeadDetail | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const [noteText, setNoteText] = useState("");
  const [taskTitle, setTaskTitle] = useState("");
  const [isSavingNote, setIsSavingNote] = useState(false);
  const [isSavingTask, setIsSavingTask] = useState(false);

  const loadLead = useCallback(async () => {
    const response = await fetch(`/api/jarvis/leads/${leadId}/`, {
      cache: "no-store",
    });
    if (!response.ok) throw new Error("Could not load lead");
    const data = await response.json();
    setLead(data.lead as JarvisLeadDetail);
  }, [leadId]);

  useEffect(() => {
    loadLead()
      .catch(() => setError("Could not load lead details."))
      .finally(() => setIsLoading(false));
  }, [loadLead]);

  async function updateLead(updates: Record<string, unknown>) {
    const response = await fetch(`/api/jarvis/leads/${leadId}/`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updates),
    });
    if (!response.ok) throw new Error("Could not update lead");
    const data = await response.json();
    setLead((current) =>
      current ? { ...current, ...(data.lead as JarvisLeadDetail), insights: current.insights } : current
    );
    await loadLead();
    onUpdated();
  }

  async function followUpAction(action: FollowUpAction) {
    try {
      await updateLead({ follow_up_action: action });
    } catch {
      setError("Could not update follow-up.");
    }
  }

  async function handleAddNote(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!noteText.trim()) return;
    setIsSavingNote(true);
    try {
      const response = await fetch(`/api/jarvis/leads/${leadId}/notes/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ body: noteText }),
      });
      if (!response.ok) throw new Error();
      setNoteText("");
      await loadLead();
      onUpdated();
    } catch {
      setError("Could not add note.");
    } finally {
      setIsSavingNote(false);
    }
  }

  async function handleAddTask(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!taskTitle.trim()) return;
    setIsSavingTask(true);
    try {
      const response = await fetch("/api/jarvis/tasks/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title: taskTitle, related_lead_id: leadId }),
      });
      if (!response.ok) throw new Error();
      setTaskTitle("");
      await loadLead();
      onUpdated();
    } catch {
      setError("Could not create task.");
    } finally {
      setIsSavingTask(false);
    }
  }

  async function handleCompleteTask(taskId: string) {
    await fetch(`/api/jarvis/tasks/${taskId}/`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status: "completed" }),
    });
    await loadLead();
    onUpdated();
  }

  const followUpBadge = lead ? getFollowUpBadge(lead) : null;

  return (
    <>
      <div className="jarvis-drawer-backdrop" onClick={onClose} />
      <aside className="jarvis-drawer jarvis-drawer-mobile-full" role="dialog">
        <div className="jarvis-drawer-header">
          <div>
            {lead ? (
              <>
                <h2 className="jarvis-panel-title">{lead.name}</h2>
                <p className="jarvis-muted">
                  {SOURCE_LABELS[lead.source]}
                  {lead.phone ? ` · ${lead.phone}` : ""}
                </p>
                <div className="jarvis-lead-card-badges jarvis-drawer-badges">
                  <StagePill stageId={lead.status} />
                  {followUpBadge ? (
                    <span className="jarvis-pill jarvis-pill-amber">{followUpBadge}</span>
                  ) : null}
                </div>
              </>
            ) : (
              <h2 className="jarvis-panel-title">Lead details</h2>
            )}
          </div>
          <button type="button" className="jarvis-button jarvis-button-ghost" onClick={onClose}>
            ✕
          </button>
        </div>

        <div className="jarvis-drawer-body">
          {isLoading ? (
            <p className="jarvis-muted">Loading...</p>
          ) : error && !lead ? (
            <p className="jarvis-error">{error}</p>
          ) : lead ? (
            <>
              <section>
                <p className="jarvis-drawer-section-title">Lead Overview</p>
                <div className="jarvis-form jarvis-form-flush">
                  <div>
                    <label htmlFor={`${leadId}-name`} className="jarvis-label">Name</label>
                    <input
                      id={`${leadId}-name`}
                      className="jarvis-input"
                      value={lead.name}
                      onChange={(e) => setLead({ ...lead, name: e.target.value })}
                      onBlur={() => updateLead({ name: lead.name }).catch(() => setError("Save failed"))}
                    />
                  </div>
                  <div>
                    <label htmlFor={`${leadId}-source`} className="jarvis-label">Source</label>
                    <select
                      id={`${leadId}-source`}
                      className="jarvis-select"
                      value={lead.source}
                      onChange={(e) => updateLead({ source: e.target.value as LeadSource }).catch(() => setError("Save failed"))}
                    >
                      {LEAD_SOURCES.map((s) => (
                        <option key={s} value={s}>{SOURCE_LABELS[s]}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor={`${leadId}-stage`} className="jarvis-label">Stage</label>
                    <select
                      id={`${leadId}-stage`}
                      className="jarvis-select"
                      value={lead.status}
                      onChange={(e) => updateLead({ status: e.target.value as LeadStageId }).catch(() => setError("Save failed"))}
                    >
                      {LEAD_STAGES.map((s) => (
                        <option key={s.id} value={s.id}>{s.label}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor={`${leadId}-priority`} className="jarvis-label">Priority</label>
                    <select
                      id={`${leadId}-priority`}
                      className="jarvis-select"
                      value={lead.priority}
                      onChange={(e) => updateLead({ priority: e.target.value as Priority }).catch(() => setError("Save failed"))}
                    >
                      {PRIORITIES.map((p) => (
                        <option key={p} value={p}>{PRIORITY_LABELS[p]}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor={`${leadId}-temperature`} className="jarvis-label">Lead temperature</label>
                    <select
                      id={`${leadId}-temperature`}
                      className="jarvis-select"
                      value={lead.lead_temperature}
                      onChange={(e) =>
                        updateLead({
                          lead_temperature: e.target.value as LeadTemperature,
                          install_interest_level: e.target.value as LeadTemperature,
                        }).catch(() => setError("Save failed"))
                      }
                    >
                      {LEAD_TEMPERATURES.map((t) => (
                        <option key={t} value={t}>{LEAD_TEMPERATURE_LABELS[t]}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor={`${leadId}-next-action`} className="jarvis-label">Next action</label>
                    <input
                      id={`${leadId}-next-action`}
                      className="jarvis-input"
                      placeholder="What needs doing next?"
                      value={lead.ai_next_action ?? ""}
                      onChange={(e) => setLead({ ...lead, ai_next_action: e.target.value })}
                      onBlur={() => updateLead({ ai_next_action: lead.ai_next_action }).catch(() => setError("Save failed"))}
                    />
                  </div>
                </div>
              </section>

              <section>
                <p className="jarvis-drawer-section-title">Qualification</p>
                <div className="jarvis-form jarvis-form-flush">
                  <div>
                    <label htmlFor={`${leadId}-job-type`} className="jarvis-label">Job type</label>
                    <select
                      id={`${leadId}-job-type`}
                      className="jarvis-select"
                      value={lead.job_type ?? "unknown"}
                      onChange={(e) => updateLead({ job_type: e.target.value as JobType }).catch(() => setError("Save failed"))}
                    >
                      {JOB_TYPES.map((t) => (
                        <option key={t} value={t}>{JOB_TYPE_LABELS[t]}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor={`${leadId}-colour`} className="jarvis-label">Colour scheme</label>
                    <input
                      id={`${leadId}-colour`}
                      className="jarvis-input"
                      placeholder="e.g. Matt grey, woodgrain oak"
                      value={lead.colour_scheme ?? lead.colour_style ?? ""}
                      onChange={(e) => setLead({ ...lead, colour_scheme: e.target.value })}
                      onBlur={() => updateLead({ colour_scheme: lead.colour_scheme }).catch(() => setError("Save failed"))}
                    />
                  </div>
                  <div>
                    <label className="jarvis-label jarvis-label-checkbox">
                      <input
                        type="checkbox"
                        checked={lead.photos_received}
                        onChange={(e) => updateLead({ photos_received: e.target.checked }).catch(() => setError("Save failed"))}
                      />
                      Photos received
                    </label>
                  </div>
                  <div>
                    <label htmlFor={`${leadId}-pricing-route`} className="jarvis-label">Pricing route</label>
                    <select
                      id={`${leadId}-pricing-route`}
                      className="jarvis-select"
                      value={lead.pricing_route}
                      onChange={(e) => updateLead({ pricing_route: e.target.value as PricingRoute }).catch(() => setError("Save failed"))}
                    >
                      {PRICING_ROUTES.map((r) => (
                        <option key={r} value={r}>{PRICING_ROUTE_LABELS[r]}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor={`${leadId}-survey-date`} className="jarvis-label">Survey date</label>
                    <input
                      id={`${leadId}-survey-date`}
                      className="jarvis-input"
                      type="date"
                      value={lead.survey_date?.slice(0, 10) ?? ""}
                      onChange={(e) => updateLead({ survey_date: e.target.value || null }).catch(() => setError("Save failed"))}
                    />
                  </div>
                </div>
              </section>

              <section>
                <p className="jarvis-drawer-section-title">Photos</p>
                <LeadPhotoGrid leadId={leadId} photos={lead.photos} onUpdated={loadLead} />
              </section>

              <section>
                <p className="jarvis-drawer-section-title">Tasks & Follow-ups</p>
                <div className="jarvis-follow-up-actions">
                  <button type="button" className="jarvis-button jarvis-button-secondary" onClick={() => followUpAction("tomorrow")}>Tomorrow</button>
                  <button type="button" className="jarvis-button jarvis-button-secondary" onClick={() => followUpAction("3_days")}>3 days</button>
                  <button type="button" className="jarvis-button jarvis-button-secondary" onClick={() => followUpAction("next_week")}>Next week</button>
                  <button type="button" className="jarvis-button jarvis-button-secondary" onClick={() => followUpAction("mark_sent")}>Mark followed up</button>
                  <button type="button" className="jarvis-button jarvis-button-ghost" onClick={() => followUpAction("clear")}>Clear</button>
                </div>
                {lead.tasks.map((task) => (
                  <div key={task.id} className="jarvis-task-item">
                    <input type="checkbox" checked={task.status === "completed"} onChange={() => handleCompleteTask(task.id)} />
                    <div><p>{task.title}</p>{task.due_at ? <p className="jarvis-note-time">Due {formatDate(task.due_at)}</p> : null}</div>
                  </div>
                ))}
                <form onSubmit={handleAddTask} className="jarvis-form jarvis-form-flush">
                  <div>
                    <label htmlFor={`${leadId}-task`} className="jarvis-label">Task</label>
                    <input
                      id={`${leadId}-task`}
                      className="jarvis-input"
                      value={taskTitle}
                      onChange={(e) => setTaskTitle(e.target.value)}
                      placeholder="e.g. Call customer back"
                    />
                  </div>
                  <button type="submit" className="jarvis-button jarvis-button-secondary" disabled={isSavingTask}>{isSavingTask ? "Saving..." : "Add task"}</button>
                </form>
              </section>

              <section>
                <p className="jarvis-drawer-section-title">Pricing Snapshot</p>
                <div className="jarvis-form jarvis-form-flush">
                  <div>
                    <label htmlFor={`${leadId}-estimated`} className="jarvis-label">Estimated amount (£)</label>
                    <input
                      id={`${leadId}-estimated`}
                      className="jarvis-input"
                      type="number"
                      min="0"
                      step="0.01"
                      value={lead.estimated_amount ?? ""}
                      onChange={(e) => setLead({ ...lead, estimated_amount: e.target.value ? Number(e.target.value) : null })}
                      onBlur={() => updateLead({ estimated_amount: lead.estimated_amount }).catch(() => setError("Save failed"))}
                    />
                  </div>
                  <div>
                    <label htmlFor={`${leadId}-quoted`} className="jarvis-label">Quoted amount (£)</label>
                    <input
                      id={`${leadId}-quoted`}
                      className="jarvis-input"
                      type="number"
                      min="0"
                      step="0.01"
                      value={lead.quoted_amount ?? ""}
                      onChange={(e) => setLead({ ...lead, quoted_amount: e.target.value ? Number(e.target.value) : null })}
                      onBlur={() => updateLead({ quoted_amount: lead.quoted_amount }).catch(() => setError("Save failed"))}
                    />
                  </div>
                  <div>
                    <label htmlFor={`${leadId}-deposit`} className="jarvis-label">Deposit amount (£)</label>
                    <input
                      id={`${leadId}-deposit`}
                      className="jarvis-input"
                      type="number"
                      min="0"
                      step="0.01"
                      value={lead.deposit_amount ?? ""}
                      onChange={(e) => setLead({ ...lead, deposit_amount: e.target.value ? Number(e.target.value) : null })}
                      onBlur={() => updateLead({ deposit_amount: lead.deposit_amount }).catch(() => setError("Save failed"))}
                    />
                  </div>
                  <div>
                    <label htmlFor={`${leadId}-quote-sent`} className="jarvis-label">Quote sent date</label>
                    <input
                      id={`${leadId}-quote-sent`}
                      className="jarvis-input"
                      type="date"
                      value={lead.quote_sent_at?.slice(0, 10) ?? ""}
                      onChange={(e) => updateLead({ quote_sent_at: e.target.value || null }).catch(() => setError("Save failed"))}
                    />
                  </div>
                  <div>
                    <label htmlFor={`${leadId}-pricing-notes`} className="jarvis-label">Pricing notes</label>
                    <textarea
                      id={`${leadId}-pricing-notes`}
                      className="jarvis-textarea"
                      placeholder="Any pricing context or assumptions"
                      value={lead.pricing_notes ?? ""}
                      onChange={(e) => setLead({ ...lead, pricing_notes: e.target.value })}
                      onBlur={() => updateLead({ pricing_notes: lead.pricing_notes }).catch(() => setError("Save failed"))}
                    />
                  </div>
                  {(lead.estimated_amount || lead.quoted_amount) ? (
                    <p className="jarvis-muted">Estimate: {formatCurrency(lead.estimated_amount) ?? "—"} · Quote: {formatCurrency(lead.quoted_amount) ?? "—"}</p>
                  ) : null}
                </div>
              </section>

              <section>
                <p className="jarvis-drawer-section-title">Jarvis Summary</p>
                {lead.insights.length === 0 ? (
                  <p className="jarvis-muted">No insights for this lead yet.</p>
                ) : (
                  lead.insights.map((insight, index) => (
                    <div key={index} className="jarvis-insight-card jarvis-insight-card-medium">
                      <p className="jarvis-insight-summary">{insight.message}</p>
                    </div>
                  ))
                )}
                <div className="jarvis-form jarvis-form-flush">
                  <div>
                    <label htmlFor={`${leadId}-summary`} className="jarvis-label">Jarvis summary</label>
                    <textarea
                      id={`${leadId}-summary`}
                      className="jarvis-textarea"
                      placeholder="Summary notes for this lead"
                      value={lead.ai_summary ?? ""}
                      onChange={(e) => setLead({ ...lead, ai_summary: e.target.value })}
                      onBlur={() => updateLead({ ai_summary: lead.ai_summary }).catch(() => setError("Save failed"))}
                    />
                  </div>
                </div>
              </section>

              <section>
                <p className="jarvis-drawer-section-title">Notes</p>
                {lead.notes.map((note) => (
                  <div key={note.id} className="jarvis-note">
                    <p>{note.body}</p>
                    <p className="jarvis-note-time">{formatDate(note.created_at)}</p>
                  </div>
                ))}
                <form onSubmit={handleAddNote} className="jarvis-form jarvis-form-flush">
                  <div>
                    <label htmlFor={`${leadId}-note`} className="jarvis-label">Add note</label>
                    <textarea
                      id={`${leadId}-note`}
                      className="jarvis-textarea"
                      value={noteText}
                      onChange={(e) => setNoteText(e.target.value)}
                      placeholder="Write a note about this lead"
                    />
                  </div>
                  <button type="submit" className="jarvis-button jarvis-button-secondary" disabled={isSavingNote}>{isSavingNote ? "Saving..." : "Add note"}</button>
                </form>
              </section>

              {error ? <p className="jarvis-error">{error}</p> : null}
            </>
          ) : null}
        </div>
      </aside>
    </>
  );
}
