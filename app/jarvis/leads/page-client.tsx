"use client";

import { useCallback, useEffect, useState } from "react";
import { LeadDrawer } from "@/components/jarvis/LeadDrawer";
import { NewLeadForm } from "@/components/jarvis/NewLeadForm";
import { StagePill } from "@/components/jarvis/StagePill";
import {
  LEAD_SOURCES,
  LEAD_STAGES,
  SOURCE_LABELS,
  type JarvisLead,
  type LeadSource,
  type LeadStageId,
} from "@/lib/jarvis-types";

function formatDate(value: string) {
  return new Date(value).toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

export default function JarvisLeadsClient() {
  const [leads, setLeads] = useState<JarvisLead[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const [statusFilter, setStatusFilter] = useState<LeadStageId | "">("");
  const [sourceFilter, setSourceFilter] = useState<LeadSource | "">("");
  const [showNewLead, setShowNewLead] = useState(false);
  const [selectedLeadId, setSelectedLeadId] = useState<string | null>(null);

  const loadLeads = useCallback(async () => {
    const params = new URLSearchParams();
    if (statusFilter) params.set("status", statusFilter);
    if (sourceFilter) params.set("source", sourceFilter);

    const query = params.toString();
    const response = await fetch(
      `/api/jarvis/leads/${query ? `?${query}` : ""}`,
      { cache: "no-store" }
    );

    if (!response.ok) {
      throw new Error("Could not load leads");
    }

    const data = await response.json();
    setLeads(data.leads as JarvisLead[]);
  }, [statusFilter, sourceFilter]);

  useEffect(() => {
    loadLeads()
      .catch(() => setError("Could not load leads right now."))
      .finally(() => setIsLoading(false));
  }, [loadLeads]);

  const newLeadButton = (
    <button
      type="button"
      className="jarvis-button jarvis-button-primary"
      onClick={() => setShowNewLead(true)}
    >
      + New lead
    </button>
  );

  return (
    <>
      <div className="jarvis-filters">
        <select
          className="jarvis-select"
          value={statusFilter}
          onChange={(event) =>
            setStatusFilter(event.target.value as LeadStageId | "")
          }
          aria-label="Filter by stage"
        >
          <option value="">All stages</option>
          {LEAD_STAGES.map((stage) => (
            <option key={stage.id} value={stage.id}>
              {stage.label}
            </option>
          ))}
        </select>

        <select
          className="jarvis-select"
          value={sourceFilter}
          onChange={(event) =>
            setSourceFilter(event.target.value as LeadSource | "")
          }
          aria-label="Filter by source"
        >
          <option value="">All sources</option>
          {LEAD_SOURCES.map((source) => (
            <option key={source} value={source}>
              {SOURCE_LABELS[source]}
            </option>
          ))}
        </select>

        {newLeadButton}
      </div>

      <section className="jarvis-panel">
        <div className="jarvis-panel-header">
          <h2 className="jarvis-panel-title">All leads</h2>
          <span className="jarvis-muted">{leads.length} total</span>
        </div>

        {isLoading ? (
          <p className="jarvis-empty">Loading leads...</p>
        ) : error ? (
          <p className="jarvis-empty jarvis-error">{error}</p>
        ) : leads.length === 0 ? (
          <p className="jarvis-empty">
            No leads yet. Click &quot;New lead&quot; to add your first one.
          </p>
        ) : (
          <div className="jarvis-table-wrap">
            <table className="jarvis-table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Stage</th>
                  <th>Source</th>
                  <th>Next action</th>
                  <th>Updated</th>
                </tr>
              </thead>
              <tbody>
                {leads.map((lead) => (
                  <tr
                    key={lead.id}
                    className="jarvis-table-row"
                    onClick={() => setSelectedLeadId(lead.id)}
                  >
                    <td style={{ color: "var(--jarvis-text)" }}>{lead.name}</td>
                    <td>
                      <StagePill stageId={lead.status} />
                    </td>
                    <td>{SOURCE_LABELS[lead.source]}</td>
                    <td>{lead.ai_next_action || "—"}</td>
                    <td>{formatDate(lead.updated_at)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </section>

      {showNewLead ? (
        <NewLeadForm
          onClose={() => setShowNewLead(false)}
          onCreated={() => {
            void loadLeads();
          }}
        />
      ) : null}

      {selectedLeadId ? (
        <LeadDrawer
          leadId={selectedLeadId}
          onClose={() => setSelectedLeadId(null)}
          onUpdated={() => {
            void loadLeads();
          }}
        />
      ) : null}
    </>
  );
}
