"use client";

import { LeadCard } from "@/components/jarvis/LeadCard";
import { StagePill } from "@/components/jarvis/StagePill";
import {
  LEAD_STAGES,
  type JarvisLead,
  type LeadStageId,
} from "@/lib/jarvis-types";

type LeadPipelineProps = {
  leads: JarvisLead[];
  onSelectLead: (id: string) => void;
  onStageChange: (leadId: string, stage: LeadStageId) => void;
};

export function LeadPipeline({
  leads,
  onSelectLead,
  onStageChange,
}: LeadPipelineProps) {
  return (
    <div className="jarvis-pipeline">
      {LEAD_STAGES.map((stage) => {
        const columnLeads = leads.filter((lead) => lead.status === stage.id);

        return (
          <section key={stage.id} className="jarvis-pipeline-column">
            <header className="jarvis-pipeline-column-header">
              <StagePill stageId={stage.id} />
              <span className="jarvis-muted">{columnLeads.length}</span>
            </header>
            <div className="jarvis-pipeline-column-body">
              {columnLeads.length === 0 ? (
                <p className="jarvis-pipeline-empty">No leads</p>
              ) : (
                columnLeads.map((lead) => (
                  <div key={lead.id} className="jarvis-pipeline-card-wrap">
                    <LeadCard
                      lead={lead}
                      compact
                      onClick={() => onSelectLead(lead.id)}
                    />
                    <select
                      className="jarvis-select jarvis-pipeline-stage-select"
                      value={lead.status}
                      onClick={(event) => event.stopPropagation()}
                      onChange={(event) =>
                        onStageChange(lead.id, event.target.value as LeadStageId)
                      }
                    >
                      {LEAD_STAGES.map((option) => (
                        <option key={option.id} value={option.id}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                  </div>
                ))
              )}
            </div>
          </section>
        );
      })}
    </div>
  );
}
