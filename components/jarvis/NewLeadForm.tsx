"use client";

import { useState } from "react";
import { LEAD_SOURCES, SOURCE_LABELS, type LeadSource } from "@/lib/jarvis-types";

type NewLeadFormProps = {
  onClose: () => void;
  onCreated: (warning?: string) => void;
};

export function NewLeadForm({ onClose, onCreated }: NewLeadFormProps) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [source, setSource] = useState<LeadSource>("manual");
  const [notes, setNotes] = useState("");
  const [error, setError] = useState("");
  const [isSaving, setIsSaving] = useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSaving(true);
    setError("");

    try {
      const response = await fetch("/api/jarvis/leads/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          phone: phone || null,
          email: email || null,
          source,
          notes,
        }),
      });

      if (!response.ok) {
        const data = await response.json();
        setError(data.error ?? "Could not create lead");
        return;
      }

      const data = await response.json();

      onCreated(typeof data.warning === "string" ? data.warning : undefined);
      onClose();
    } catch {
      setError("Could not create lead. Please try again.");
    } finally {
      setIsSaving(false);
    }
  }

  return (
    <div className="jarvis-modal-backdrop" onClick={onClose}>
      <div
        className="jarvis-modal"
        onClick={(event) => event.stopPropagation()}
        role="dialog"
        aria-labelledby="new-lead-title"
      >
        <div className="jarvis-modal-header">
          <h2 id="new-lead-title" className="jarvis-panel-title">
            New lead
          </h2>
          <button
            type="button"
            className="jarvis-button jarvis-button-ghost"
            onClick={onClose}
            aria-label="Close"
          >
            ✕
          </button>
        </div>

        <form onSubmit={handleSubmit} className="jarvis-form jarvis-form-flush">
          <div>
            <label htmlFor="lead-name" className="jarvis-label">
              Name *
            </label>
            <input
              id="lead-name"
              className="jarvis-input"
              value={name}
              onChange={(event) => setName(event.target.value)}
              required
            />
          </div>

          <div>
            <label htmlFor="lead-phone" className="jarvis-label">
              Phone
            </label>
            <input
              id="lead-phone"
              className="jarvis-input"
              value={phone}
              onChange={(event) => setPhone(event.target.value)}
            />
          </div>

          <div>
            <label htmlFor="lead-email" className="jarvis-label">
              Email
            </label>
            <input
              id="lead-email"
              type="email"
              className="jarvis-input"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>

          <div>
            <label htmlFor="lead-source" className="jarvis-label">
              Source
            </label>
            <select
              id="lead-source"
              className="jarvis-select"
              value={source}
              onChange={(event) => setSource(event.target.value as LeadSource)}
            >
              {LEAD_SOURCES.map((item) => (
                <option key={item} value={item}>
                  {SOURCE_LABELS[item]}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="lead-notes" className="jarvis-label">
              Notes
            </label>
            <textarea
              id="lead-notes"
              className="jarvis-textarea"
              value={notes}
              onChange={(event) => setNotes(event.target.value)}
            />
          </div>

          {error ? <p className="jarvis-error">{error}</p> : null}

          <div className="jarvis-button-row">
            <button
              type="submit"
              className="jarvis-button jarvis-button-primary"
              disabled={isSaving}
            >
              {isSaving ? "Saving..." : "Create lead"}
            </button>
            <button
              type="button"
              className="jarvis-button jarvis-button-secondary"
              onClick={onClose}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
