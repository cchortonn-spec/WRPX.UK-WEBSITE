"use client";

import { useCallback, useEffect, useState } from "react";
import type {
  JarvisAnalyticsInsight,
  JarvisAnalyticsInsightsResponse,
  JarvisBriefing,
} from "@/lib/jarvis-types";

function StatCard({ label, value }: { label: string; value: number }) {
  return (
    <div className="jarvis-stat-card">
      <p className="jarvis-stat-label">{label}</p>
      <p className="jarvis-stat-value">{value}</p>
    </div>
  );
}

function PriorityPill({ priority }: { priority: "low" | "medium" | "high" }) {
  const className =
    priority === "high"
      ? "jarvis-pill jarvis-pill-lime"
      : priority === "medium"
        ? "jarvis-pill jarvis-pill-amber"
        : "jarvis-pill jarvis-pill-grey";
  return <span className={className}>{priority}</span>;
}

function InsightCard({ insight }: { insight: JarvisAnalyticsInsight }) {
  return (
    <article className={`jarvis-insight-card jarvis-insight-card-${insight.priority}`}>
      <div className="jarvis-insight-header">
        <h3 className="jarvis-insight-title">{insight.title}</h3>
        <PriorityPill priority={insight.priority} />
      </div>
      <p className="jarvis-insight-summary">{insight.summary}</p>
      <p className="jarvis-insight-recommendation">
        <strong>Recommendation:</strong> {insight.recommendation}
      </p>
    </article>
  );
}

export default function JarvisHomeClient() {
  const [briefing, setBriefing] = useState<JarvisBriefing | null>(null);
  const [insights, setInsights] = useState<JarvisAnalyticsInsight[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const loadData = useCallback(async () => {
    const [briefingResponse, insightsResponse] = await Promise.all([
      fetch("/api/jarvis/briefing/", { cache: "no-store" }),
      fetch("/api/jarvis/analytics-insights/", { cache: "no-store" }),
    ]);

    if (!briefingResponse.ok) throw new Error("Could not load briefing");

    const briefingData = (await briefingResponse.json()) as JarvisBriefing;
    setBriefing(briefingData);

    if (insightsResponse.ok) {
      const insightsData =
        (await insightsResponse.json()) as JarvisAnalyticsInsightsResponse;
      setInsights(insightsData.insights);
    }
  }, []);

  useEffect(() => {
    loadData()
      .catch(() => setError("Could not load Jarvis briefing right now."))
      .finally(() => setIsLoading(false));
  }, [loadData]);

  if (isLoading) return <p className="jarvis-muted">Loading briefing...</p>;
  if (error || !briefing) return <p className="jarvis-error">{error || "Briefing unavailable."}</p>;

  return (
    <>
      <section className="jarvis-briefing-card">
        <h2 className="jarvis-briefing-greeting">{briefing.greeting}</h2>
        <p className="jarvis-briefing-summary">{briefing.summary}</p>
        <ol className="jarvis-briefing-list">
          {briefing.priorities.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ol>
      </section>

      <section className="jarvis-stat-grid">
        <StatCard label="Waiting for photos" value={briefing.stats.waiting_for_photos} />
        <StatCard label="Photos received" value={briefing.stats.photos_received} />
        <StatCard label="Ready to price" value={briefing.stats.ready_to_price} />
        <StatCard label="Follow-ups due" value={briefing.stats.follow_ups_due} />
        <StatCard label="Overdue follow-ups" value={briefing.stats.overdue_follow_ups} />
        <StatCard label="Estimates sent" value={briefing.stats.estimates_sent} />
        <StatCard label="Quotes sent" value={briefing.stats.quotes_sent} />
        <StatCard label="Hot leads" value={briefing.stats.hot_leads} />
        <StatCard label="New leads today" value={briefing.stats.new_leads} />
        <StatCard label="Open tasks" value={briefing.stats.open_tasks} />
        <StatCard label="Tasks due today" value={briefing.stats.tasks_due_today} />
      </section>

      <section className="jarvis-insights-section">
        <div className="jarvis-insights-header">
          <h2 className="jarvis-panel-title">Jarvis Lead Priorities</h2>
          <p className="jarvis-muted">Leads that need your attention first.</p>
        </div>
        {briefing.lead_priorities.length === 0 ? (
          <p className="jarvis-muted">No lead priorities right now.</p>
        ) : (
          <div className="jarvis-insights-grid">
            {briefing.lead_priorities.map((item) => (
              <article key={item.lead_id} className="jarvis-insight-card jarvis-insight-card-high">
                <h3 className="jarvis-insight-title">{item.name}</h3>
                <p className="jarvis-insight-summary">{item.reason}</p>
              </article>
            ))}
          </div>
        )}
      </section>

      <section className="jarvis-insights-section">
        <div className="jarvis-insights-header">
          <h2 className="jarvis-panel-title">Jarvis SEO &amp; Lead Insights</h2>
          <p className="jarvis-muted">Recommendations from your website analytics this week.</p>
        </div>
        {insights.length === 0 ? (
          <p className="jarvis-muted">No analytics insights available yet.</p>
        ) : (
          <div className="jarvis-insights-grid">
            {insights.map((insight) => (
              <InsightCard key={insight.id} insight={insight} />
            ))}
          </div>
        )}
      </section>
    </>
  );
}
