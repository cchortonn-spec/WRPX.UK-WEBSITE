"use client";

import { useCallback, useEffect, useState } from "react";
import { StagePill } from "@/components/jarvis/StagePill";
import {
  JOB_TYPES,
  JOB_TYPE_LABELS,
  LEAD_STAGES,
  SOURCE_LABELS,
  type JarvisLeadDetail,
  type LeadStageId,
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

    if (!response.ok) {
      throw new Error("Could not load lead");
    }

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

    if (!response.ok) {
      throw new Error("Could not update lead");
    }

    const data = await response.json();
    setLead((current) =>
      current ? { ...current, ...(data.lead as JarvisLeadDetail) } : current
    );
    onUpdated();
  }

  async function handleStageChange(status: LeadStageId) {
    try {
      await updateLead({ status });
    } catch {
      setError("Could not update stage.");
    }
  }

  async function handleAddNote(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!noteText.trim()) return;

    setIsSavingNote(true);
    setError("");

    try {
      const response = await fetch(`/api/jarvis/leads/${leadId}/notes/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ body: noteText }),
      });

      if (!response.ok) {
        throw new Error("Could not add note");
      }

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
    setError("");

    try {
      const response = await fetch("/api/jarvis/tasks/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: taskTitle,
          related_lead_id: leadId,
        }),
      });

      if (!response.ok) {
        throw new Error("Could not create task");
      }

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
    try {
      await fetch(`/api/jarvis/tasks/${taskId}/`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: "completed" }),
      });
      await loadLead();
      onUpdated();
    } catch {
      setError("Could not complete task.");
    }
  }

  return (
    <>
      <div className="jarvis-drawer-backdrop" onClick={onClose} />
      <aside className="jarvis-drawer" role="dialog" aria-label="Lead details">
        <div className="jarvis-drawer-header">
          <div>
            {lead ? (
              <>
                <h2 className="jarvis-panel-title">{lead.name}</h2>
                <p className="jarvis-muted" style={{ marginTop: "0.35rem" }}>
                  {SOURCE_LABELS[lead.source]}
                  {lead.phone ? ` · ${lead.phone}` : ""}
                </p>
                <div style={{ marginTop: "0.5rem" }}>
                  <StagePill stageId={lead.status} />
                </div>
              </>
            ) : (
              <h2 className="jarvis-panel-title">Lead details</h2>
            )}
          </div>
          <button
            type="button"
            className="jarvis-button jarvis-button-ghost"
            onClick={onClose}
            aria-label="Close drawer"
          >
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
                <p className="jarvis-drawer-section-title">Stage</p>
                <select
                  className="jarvis-select"
                  value={lead.status}
                  onChange={(event) =>
                    handleStageChange(event.target.value as LeadStageId)
                  }
                >
                  {LEAD_STAGES.map((stage) => (
                    <option key={stage.id} value={stage.id}>
                      {stage.label}
                    </option>
                  ))}
                </select>
              </section>

              <section>
                <p className="jarvis-drawer-section-title">Job type</p>
                <select
                  className="jarvis-select"
                  value={lead.job_type ?? ""}
                  onChange={async (event) => {
                    try {
                      await updateLead({
                        job_type: event.target.value || null,
                      });
                    } catch {
                      setError("Could not update job type.");
                    }
                  }}
                >
                  <option value="">Not set</option>
                  {JOB_TYPES.map((type) => (
                    <option key={type} value={type}>
                      {JOB_TYPE_LABELS[type]}
                    </option>
                  ))}
                </select>
              </section>

              <section>
                <p className="jarvis-drawer-section-title">AI summary</p>
                <textarea
                  className="jarvis-textarea"
                  value={lead.ai_summary ?? ""}
                  placeholder="Jarvis summary will appear here..."
                  onChange={(event) =>
                    setLead({ ...lead, ai_summary: event.target.value })
                  }
                  onBlur={async () => {
                    try {
                      await updateLead({ ai_summary: lead.ai_summary });
                    } catch {
                      setError("Could not save summary.");
                    }
                  }}
                />
              </section>

              <section>
                <p className="jarvis-drawer-section-title">Next action</p>
                <input
                  className="jarvis-input"
                  value={lead.ai_next_action ?? ""}
                  placeholder="e.g. Ask for photos"
                  onChange={(event) =>
                    setLead({ ...lead, ai_next_action: event.target.value })
                  }
                  onBlur={async () => {
                    try {
                      await updateLead({ ai_next_action: lead.ai_next_action });
                    } catch {
                      setError("Could not save next action.");
                    }
                  }}
                />
              </section>

              <section>
                <p className="jarvis-drawer-section-title">Notes</p>
                {lead.notes.length === 0 ? (
                  <p className="jarvis-muted">No notes yet.</p>
                ) : (
                  <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                    {lead.notes.map((note) => (
                      <div key={note.id} className="jarvis-note">
                        <p>{note.body}</p>
                        <p className="jarvis-note-time">{formatDate(note.created_at)}</p>
                      </div>
                    ))}
                  </div>
                )}

                <form
                  onSubmit={handleAddNote}
                  className="jarvis-form"
                  style={{ marginTop: "0.75rem" }}
                >
                  <textarea
                    className="jarvis-textarea"
                    value={noteText}
                    onChange={(event) => setNoteText(event.target.value)}
                    placeholder="Add a note..."
                  />
                  <button
                    type="submit"
                    className="jarvis-button jarvis-button-secondary"
                    disabled={isSavingNote}
                  >
                    {isSavingNote ? "Saving..." : "Add note"}
                  </button>
                </form>
              </section>

              <section>
                <p className="jarvis-drawer-section-title">Tasks</p>
                {lead.tasks.length === 0 ? (
                  <p className="jarvis-muted">No tasks yet.</p>
                ) : (
                  <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                    {lead.tasks.map((task) => (
                      <div key={task.id} className="jarvis-task-item">
                        <input
                          type="checkbox"
                          checked={task.status === "completed"}
                          onChange={() => handleCompleteTask(task.id)}
                          aria-label={`Complete task: ${task.title}`}
                        />
                        <div>
                          <p
                            style={{
                              textDecoration:
                                task.status === "completed" ? "line-through" : "none",
                              color: "var(--jarvis-text)",
                            }}
                          >
                            {task.title}
                          </p>
                          {task.due_at ? (
                            <p className="jarvis-note-time">
                              Due {formatDate(task.due_at)}
                            </p>
                          ) : null}
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                <form
                  onSubmit={handleAddTask}
                  className="jarvis-form"
                  style={{ marginTop: "0.75rem" }}
                >
                  <input
                    className="jarvis-input"
                    value={taskTitle}
                    onChange={(event) => setTaskTitle(event.target.value)}
                    placeholder="New task..."
                  />
                  <button
                    type="submit"
                    className="jarvis-button jarvis-button-secondary"
                    disabled={isSavingTask}
                  >
                    {isSavingTask ? "Saving..." : "Add task"}
                  </button>
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
