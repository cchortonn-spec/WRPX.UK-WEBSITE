"use client";

import { useCallback, useEffect, useState } from "react";
import { LeadDrawer } from "@/components/jarvis/LeadDrawer";
import { LeadPipeline } from "@/components/jarvis/LeadPipeline";
import { MobileQuickAdd } from "@/components/jarvis/MobileQuickAdd";
import { NewLeadForm } from "@/components/jarvis/NewLeadForm";
import { StagePill } from "@/components/jarvis/StagePill";
import {
  LEAD_SOURCES,
  LEAD_STAGES,
  SOURCE_LABELS,
  formatCurrency,
  getFollowUpBadge,
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
  const [view, setView] = useState<"table" | "pipeline">("table");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const [statusFilter, setStatusFilter] = useState<LeadStageId | "">("");
  const [sourceFilter, setSourceFilter] = useState<LeadSource | "">("");
  const [showNewLead, setShowNewLead] = useState(false);
  const [selectedLeadId, setSelectedLeadId] = useState<string | null>(null);
  const [banner, setBanner] = useState("");

  const loadLeads = useCallback(async () => {
    const params = new URLSearchParams();
    if (statusFilter) params.set("status", statusFilter);
    if (sourceFilter) params.set("source", sourceFilter);
    const query = params.toString();

    const response = await fetch(
      `/api/jarvis/leads${query ? `?${query}` : ""}`,
      { cache: "no-store" }
    );

    if (!response.ok) throw new Error("Could not load leads");
    const data = await response.json();
    setLeads(data.leads as JarvisLead[]);
  }, [statusFilter, sourceFilter]);

  useEffect(() => {
    loadLeads()
      .catch(() => setError("Could not load leads right now."))
      .finally(() => setIsLoading(false));
  }, [loadLeads]);

  async function handleStageChange(leadId: string, status: LeadStageId) {
    await fetch(`/api/jarvis/leads/${leadId}/`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status }),
    });
    await loadLeads();
  }

  return (
    <>
      {banner ? (
        <div className="jarvis-banner jarvis-banner-warning" role="status">
          <p>{banner}</p>
          <button
            type="button"
            className="jarvis-button jarvis-button-ghost"
            onClick={() => setBanner("")}
            aria-label="Dismiss"
          >
            ✕
          </button>
        </div>
      ) : null}

      <div className="jarvis-page-toolbar">
        <div className="jarvis-segmented" role="group" aria-label="View mode">
          <button
            type="button"
            className={`jarvis-button jarvis-segment ${view === "table" ? "jarvis-segment-active" : ""}`}
            onClick={() => setView("table")}
          >
            Table view
          </button>
          <button
            type="button"
            className={`jarvis-button jarvis-segment ${view === "pipeline" ? "jarvis-segment-active" : ""}`}
            onClick={() => setView("pipeline")}
          >
            Pipeline view
          </button>
        </div>

        <div className="jarvis-toolbar-filters">
          <select
            className="jarvis-select jarvis-select-filter"
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
            className="jarvis-select jarvis-select-filter"
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

          <button
            type="button"
            className="jarvis-button jarvis-button-primary jarvis-desktop-only"
            onClick={() => setShowNewLead(true)}
          >
            New lead
          </button>
        </div>
      </div>

      {isLoading ? (
        <p className="jarvis-empty">Loading leads...</p>
      ) : error ? (
        <p className="jarvis-empty jarvis-error">{error}</p>
      ) : view === "pipeline" ? (
        <LeadPipeline
          leads={leads}
          onSelectLead={setSelectedLeadId}
          onStageChange={handleStageChange}
        />
      ) : (
        <section className="jarvis-panel">
          <div className="jarvis-panel-header">
            <h2 className="jarvis-panel-title">All leads</h2>
            <span className="jarvis-muted">{leads.length} total</span>
          </div>

          {leads.length === 0 ? (
            <p className="jarvis-empty">No leads yet. Add your first lead to get started.</p>
          ) : (
            <>
              <div className="jarvis-table-wrap jarvis-desktop-only">
                <table className="jarvis-table">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Stage</th>
                      <th>Source</th>
                      <th>Follow-up</th>
                      <th>Amount</th>
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
                        <td className="jarvis-table-name">{lead.name}</td>
                        <td><StagePill stageId={lead.status} /></td>
                        <td>{SOURCE_LABELS[lead.source]}</td>
                        <td>{getFollowUpBadge(lead) ?? "—"}</td>
                        <td>{formatCurrency(lead.estimated_amount ?? lead.quoted_amount) ?? "—"}</td>
                        <td>{formatDate(lead.updated_at)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="jarvis-mobile-cards">
                {leads.map((lead) => (
                  <button
                    key={lead.id}
                    type="button"
                    className="jarvis-mobile-lead-card"
                    onClick={() => setSelectedLeadId(lead.id)}
                  >
                    <strong>{lead.name}</strong>
                    <StagePill stageId={lead.status} />
                    <span className="jarvis-muted">
                      {getFollowUpBadge(lead) ?? SOURCE_LABELS[lead.source]}
                    </span>
                  </button>
                ))}
              </div>
            </>
          )}
        </section>
      )}

      <MobileQuickAdd onAddLead={() => setShowNewLead(true)} />

      {showNewLead ? (
        <NewLeadForm
          onClose={() => setShowNewLead(false)}
          onCreated={(warning) => {
            if (warning) setBanner(warning);
            void loadLeads();
          }}
        />
      ) : null}

      {selectedLeadId ? (
        <LeadDrawer
          leadId={selectedLeadId}
          onClose={() => setSelectedLeadId(null)}
          onUpdated={() => void loadLeads()}
          onDeleted={() => void loadLeads()}
        />
      ) : null}
    </>
  );
}
