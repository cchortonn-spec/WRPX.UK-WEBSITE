"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { Sparkline, TrendChart } from "@/components/dashboard/charts";
import { getCountryName, normalizeReferrer } from "@/lib/analytics-helpers";
import { markOwnerBrowser } from "@/lib/track-client";
import {
  DASHBOARD_RANGES,
  type AnalyticsEvent,
  type DashboardRange,
  type DashboardStats,
  type Insight,
  type Kpi,
  type PageStat,
  type PageStatus,
  type Priority,
} from "@/lib/analytics-types";

const RANGE_LABELS: Record<DashboardRange, string> = {
  today: "Today",
  "7d": "7 days",
  "30d": "30 days",
  all: "All time",
};

const EVENT_LABELS: Record<string, string> = {
  phone_click: "Tapped Call",
  email_click: "Tapped Email",
  whatsapp_click: "Tapped WhatsApp",
  quote_form: "Sent a kitchen quote",
  contact_form: "Sent a contact enquiry",
  page_view: "Viewed a page",
};

const STATUS_LABELS: Record<PageStatus, string> = {
  converting: "Converting",
  attention: "Needs attention",
  growing: "Growing",
  low_data: "Not enough data yet",
  ok: "Steady",
};

const INSIGHT_LABELS: Record<Insight["kind"], string> = {
  win: "Win",
  warning: "Needs attention",
  opportunity: "Opportunity",
  info: "Good to know",
};

const PRIORITY_LABELS: Record<Priority, string> = {
  high: "High priority",
  medium: "Worth doing",
  low: "Nice to have",
};

const LOCATION_LABELS: Record<string, string> = {
  floating: "Floating buttons",
  sticky: "Sticky mobile bar",
  header: "Header",
  footer: "Footer",
  content: "Inside the page",
  unknown: "Older clicks (not recorded)",
};

const UK = "Europe/London";

function formatWhen(value: string) {
  return new Date(value).toLocaleString("en-GB", {
    timeZone: UK,
    day: "numeric",
    month: "short",
    hour: "2-digit",
    minute: "2-digit",
  });
}

function formatDay(value: string) {
  return new Date(value).toLocaleDateString("en-GB", {
    timeZone: UK,
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

function timeAgo(value: string) {
  const seconds = Math.max(0, Math.round((Date.now() - new Date(value).getTime()) / 1000));
  if (seconds < 60) return "just now";
  const minutes = Math.round(seconds / 60);
  if (minutes < 60) return `${minutes} min ago`;
  const hours = Math.round(minutes / 60);
  if (hours < 24) return `${hours}h ago`;
  return `${Math.round(hours / 24)}d ago`;
}

function titleCase(value: string) {
  return value.charAt(0).toUpperCase() + value.slice(1);
}

function prettySource(source: string) {
  return source
    .split(" ")
    .map((part) => (part.startsWith("(") ? part : titleCase(part)))
    .join(" ");
}

/** Turns "this period vs last period" into a small coloured badge. */
function Delta({ kpi, unit = "%", comparison }: { kpi: Kpi; unit?: "%" | "pts"; comparison: string | null }) {
  if (kpi.previous === null || !comparison) {
    return <span className="dash-delta dash-delta-flat">Tracking from scratch</span>;
  }
  if (kpi.previous === 0 && kpi.value === 0) {
    return <span className="dash-delta dash-delta-flat">No change</span>;
  }
  if (kpi.previous === 0) {
    return <span className="dash-delta dash-delta-up">New {comparison}</span>;
  }

  const diff =
    unit === "pts" ? kpi.value - kpi.previous : ((kpi.value - kpi.previous) / kpi.previous) * 100;
  const rounded = Math.round(diff * 10) / 10;
  if (rounded === 0) {
    return <span className="dash-delta dash-delta-flat">Same {comparison}</span>;
  }
  const up = rounded > 0;
  return (
    <span className={`dash-delta ${up ? "dash-delta-up" : "dash-delta-down"}`}>
      {up ? "▲" : "▼"} {Math.abs(rounded)}
      {unit === "pts" ? " pts" : "%"} {comparison}
    </span>
  );
}

function KpiCard({
  label,
  value,
  kpi,
  spark,
  hero,
  unit,
  comparison,
  suffix,
  hint,
}: {
  label: string;
  value: string;
  kpi: Kpi;
  spark: number[];
  hero?: boolean;
  unit?: "%" | "pts";
  comparison: string | null;
  suffix?: string;
  hint: string;
}) {
  return (
    <div className={`dash-kpi ${hero ? "dash-kpi-hero" : ""}`}>
      <p className="dash-kpi-label">{label}</p>
      <p className="dash-kpi-value">
        {value}
        {suffix ? <span className="dash-kpi-suffix">{suffix}</span> : null}
      </p>
      <Delta kpi={kpi} unit={unit} comparison={comparison} />
      <p className="dash-kpi-hint">{hint}</p>
      <Sparkline values={spark} />
    </div>
  );
}

function Section({
  title,
  subtitle,
  children,
  className = "",
}: {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section className={`dash-section ${className}`.trim()}>
      <div className="dash-section-head">
        <h2>{title}</h2>
        {subtitle ? <p>{subtitle}</p> : null}
      </div>
      {children}
    </section>
  );
}

function BarList({
  rows,
  emptyText,
}: {
  rows: Array<{ label: string; value: number; note?: string }>;
  emptyText: string;
}) {
  if (rows.length === 0) return <p className="dash-empty">{emptyText}</p>;
  const max = Math.max(...rows.map((r) => r.value), 1);
  return (
    <ul className="dash-bars">
      {rows.map((row) => (
        <li key={row.label}>
          <div className="dash-bar-top">
            <span className="dash-bar-label">{row.label}</span>
            <span className="dash-bar-value">
              {row.value}
              {row.note ? <em>{row.note}</em> : null}
            </span>
          </div>
          <div className="dash-bar-track">
            <div className="dash-bar-fill" style={{ width: `${Math.max((row.value / max) * 100, 3)}%` }} />
          </div>
        </li>
      ))}
    </ul>
  );
}

function InsightCard({ insight }: { insight: Insight }) {
  return (
    <article className={`dash-insight dash-insight-${insight.kind}`}>
      <div className="dash-insight-top">
        <span className="dash-insight-kind">{INSIGHT_LABELS[insight.kind]}</span>
        <span className={`dash-priority dash-priority-${insight.priority}`}>
          {PRIORITY_LABELS[insight.priority]}
        </span>
      </div>
      <h3>{insight.title}</h3>
      <p className="dash-insight-evidence">{insight.evidence}</p>
      <p className="dash-insight-action">
        <strong>What to do:</strong> {insight.action}
      </p>
      {insight.page_url ? (
        <p className="dash-insight-page">
          Page: <code>{insight.page_title ?? insight.page_url}</code>
        </p>
      ) : null}
    </article>
  );
}

type PageSort = "views" | "leads" | "attention";

function PagesTable({ pages }: { pages: PageStat[] }) {
  const [sort, setSort] = useState<PageSort>("views");
  const [open, setOpen] = useState<string | null>(null);

  const sorted = useMemo(() => {
    const copy = [...pages];
    if (sort === "leads") copy.sort((a, b) => b.leads - a.leads || b.views - a.views);
    else if (sort === "attention") {
      copy.sort((a, b) => {
        const aw = a.status === "attention" ? 1 : 0;
        const bw = b.status === "attention" ? 1 : 0;
        return bw - aw || b.views - a.views;
      });
    } else copy.sort((a, b) => b.views - a.views);
    return copy.slice(0, 25);
  }, [pages, sort]);

  if (pages.length === 0) {
    return <p className="dash-empty">No page visits recorded in this period yet.</p>;
  }

  return (
    <>
      <div className="dash-chips" role="group" aria-label="Sort pages">
        {(
          [
            ["views", "Most viewed"],
            ["leads", "Most enquiries"],
            ["attention", "Needs attention first"],
          ] as Array<[PageSort, string]>
        ).map(([id, label]) => (
          <button
            key={id}
            type="button"
            className={`dash-chip ${sort === id ? "dash-chip-active" : ""}`}
            onClick={() => setSort(id)}
          >
            {label}
          </button>
        ))}
      </div>

      <div className="dash-pages">
        <div className="dash-page-row dash-page-head" aria-hidden="true">
          <span>Page</span>
          <span>Views</span>
          <span>Visitors</span>
          <span>Enquiries</span>
          <span>Converts</span>
          <span>Trend</span>
        </div>

        {sorted.map((page) => {
          const isOpen = open === page.page_url;
          return (
            <div key={page.page_url} className={`dash-page-block ${isOpen ? "dash-page-open" : ""}`}>
              <button
                type="button"
                className="dash-page-row dash-page-main"
                onClick={() => setOpen(isOpen ? null : page.page_url)}
                aria-expanded={isOpen}
              >
                <span className="dash-page-name">
                  <strong>{page.page_title}</strong>
                  <code>{page.page_url}</code>
                  <span className={`dash-status dash-status-${page.status}`}>
                    {STATUS_LABELS[page.status]}
                  </span>
                </span>
                <span data-label="Views">{page.views}</span>
                <span data-label="Visitors">{page.sessions}</span>
                <span data-label="Enquiries" className={page.leads > 0 ? "dash-text-pink" : ""}>
                  {page.leads}
                </span>
                <span data-label="Converts">{page.sessions > 0 ? `${page.conversion}%` : "–"}</span>
                <span
                  data-label="Trend"
                  className={
                    page.trend === null ? "" : page.trend > 0 ? "dash-text-up" : page.trend < 0 ? "dash-text-down" : ""
                  }
                >
                  {page.trend === null ? "–" : `${page.trend > 0 ? "▲" : page.trend < 0 ? "▼" : ""} ${Math.abs(page.trend)}%`}
                </span>
              </button>

              {isOpen ? (
                <div className="dash-page-detail">
                  <div className="dash-page-facts">
                    <span>
                      <b>{page.entries}</b> started their visit here
                    </span>
                    <span>
                      <b>{page.bounce_rate === null ? "–" : `${page.bounce_rate}%`}</b> left straight away
                    </span>
                    <span>
                      <b>{page.mobile_share}%</b> on mobile
                    </span>
                    {page.top_source ? (
                      <span>
                        Mostly from <b>{prettySource(page.top_source)}</b>
                      </span>
                    ) : null}
                  </div>

                  {page.recommendations.length === 0 ? (
                    <p className="dash-empty">Nothing to fix on this page right now.</p>
                  ) : (
                    <ul className="dash-recs">
                      {page.recommendations.map((rec) => (
                        <li key={rec.title} className={`dash-rec dash-rec-${rec.priority}`}>
                          <span className={`dash-priority dash-priority-${rec.priority}`}>
                            {PRIORITY_LABELS[rec.priority]}
                          </span>
                          <strong>{rec.title}</strong>
                          <p>{rec.detail}</p>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ) : null}
            </div>
          );
        })}
      </div>
    </>
  );
}

function ActivityRow({ event }: { event: AnalyticsEvent }) {
  const isLead = event.event_type !== "page_view";
  const place = [event.city, event.country ? getCountryName(event.country) : null].filter(Boolean).join(", ");
  return (
    <li className={isLead ? "dash-activity-lead" : ""}>
      <span className="dash-activity-dot" />
      <div>
        <p>
          <strong>{EVENT_LABELS[event.event_type] ?? event.event_type}</strong>
          <span> · {event.page_url}</span>
        </p>
        <p className="dash-activity-meta">
          {timeAgo(event.created_at)} · {event.device}
          {place ? ` · ${place}` : ""}
          {event.source && event.source !== "direct" ? ` · from ${prettySource(event.source)}` : ""}
          {!event.source && event.referrer ? ` · from ${normalizeReferrer(event.referrer)}` : ""}
        </p>
      </div>
    </li>
  );
}

export default function DashboardClient() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [range, setRange] = useState<DashboardRange>("7d");
  const [stats, setStats] = useState<DashboardStats | null>(null);

  const loadStats = useCallback(async (selected: DashboardRange) => {
    const response = await fetch(`/api/dashboard/stats/?range=${selected}`, { cache: "no-store" });

    if (response.status === 401) {
      setIsAuthenticated(false);
      setStats(null);
      return false;
    }
    if (!response.ok) throw new Error("Could not load analytics");

    const data = (await response.json()) as DashboardStats;
    setStats(data);
    setIsAuthenticated(true);
    setError("");
    return true;
  }, []);

  // Load on first visit and whenever the date range changes.
  useEffect(() => {
    setIsRefreshing(true);
    loadStats(range)
      .catch(() => setError("Could not load analytics right now."))
      .finally(() => {
        setIsLoading(false);
        setIsRefreshing(false);
      });
  }, [loadStats, range]);

  // Quietly refresh every 30 seconds so "live" stays live.
  useEffect(() => {
    if (!isAuthenticated) return;
    const interval = window.setInterval(() => {
      void loadStats(range).catch(() => setError("Live refresh failed. Numbers may be out of date."));
    }, 30000);
    return () => window.clearInterval(interval);
  }, [isAuthenticated, loadStats, range]);

  // Anyone who opens the dashboard is the owner: stop counting their own visits.
  useEffect(() => {
    if (isAuthenticated) markOwnerBrowser();
  }, [isAuthenticated]);

  async function handleLogin(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsLoggingIn(true);
    setError("");
    try {
      const response = await fetch("/api/dashboard/login/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });
      if (!response.ok) {
        setError("Incorrect password.");
        return;
      }
      setPassword("");
      await loadStats(range);
    } catch {
      setError("Login failed. Please try again.");
    } finally {
      setIsLoggingIn(false);
    }
  }

  async function handleLogout() {
    await fetch("/api/dashboard/logout/", { method: "POST" });
    setIsAuthenticated(false);
    setStats(null);
  }

  if (isLoading) {
    return (
      <div className="dash">
        <div className="dash-wrap">
          <p className="dash-empty">Loading your dashboard...</p>
        </div>
      </div>
    );
  }

  if (!isAuthenticated || !stats) {
    return (
      <div className="dash">
        <div className="dash-login">
          <div className="dash-login-card">
            <p className="dash-eyebrow">WRPX internal</p>
            <h1>Your dashboard</h1>
            <p className="dash-login-sub">Enter your password to see how the website is doing.</p>
            <form onSubmit={handleLogin} className="dash-login-form">
              <label htmlFor="dashboard-password">Password</label>
              <input
                id="dashboard-password"
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                autoComplete="current-password"
                required
              />
              {error ? <p className="dash-error">{error}</p> : null}
              <button type="submit" className="dash-btn" disabled={isLoggingIn}>
                {isLoggingIn ? "Signing in..." : "Open dashboard"}
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }

  const comparison = stats.comparisonLabel;
  const sessionsSeries = stats.series.map((p) => p.sessions);
  const conversionSeries = stats.series.map((p) => (p.sessions > 0 ? (p.leads / p.sessions) * 100 : 0));
  const totalLeads = stats.kpis.enquiries.value;
  const quietPeriod = stats.kpis.visitors.value === 0;

  const channelTiles = [
    { key: "whatsapp_click" as const, label: "WhatsApp", sub: "taps" },
    { key: "phone_click" as const, label: "Phone calls", sub: "taps" },
    { key: "email_click" as const, label: "Email", sub: "taps" },
    { key: "quote_form" as const, label: "Kitchen quotes", sub: "sent" },
    { key: "contact_form" as const, label: "Contact forms", sub: "sent" },
  ];

  const funnelSteps = [
    { label: "Visited the site", value: stats.funnel.visitors },
    { label: "Looked around (2+ pages)", value: stats.funnel.engaged },
    { label: "Got in touch", value: stats.funnel.enquired },
  ];
  const funnelMax = Math.max(stats.funnel.visitors, 1);

  const locationRows = stats.clickLocations.map((row) => ({
    label: LOCATION_LABELS[row.location] ?? titleCase(row.location),
    value: row.total,
    note: ` (${[row.whatsapp ? `${row.whatsapp} WhatsApp` : "", row.phone ? `${row.phone} call` : "", row.email ? `${row.email} email` : ""]
      .filter(Boolean)
      .join(", ")})`,
  }));

  const maxHour = Math.max(...stats.hourly.map((h) => h.views), 1);
  const maxDay = Math.max(...stats.weekdays.map((d) => d.views), 1);

  return (
    <div className="dash">
      <div className="dash-wrap">
        <header className="dash-header">
          <div>
            <p className="dash-eyebrow">WRPX · Website dashboard</p>
            <h1>How the website is doing</h1>
            <p className="dash-header-sub">
              {stats.rangeLabel}
              {stats.trackingSince ? ` · tracking since ${formatDay(stats.trackingSince)}` : ""}
            </p>
          </div>

          <div className="dash-header-right">
            <span className={`dash-live ${stats.liveNow > 0 ? "dash-live-on" : ""}`}>
              <i /> {stats.liveNow > 0 ? `${stats.liveNow} on the site now` : "No one on the site right now"}
            </span>
            <div className="dash-range" role="group" aria-label="Date range">
              {DASHBOARD_RANGES.map((r) => (
                <button
                  key={r}
                  type="button"
                  className={r === range ? "dash-range-active" : ""}
                  onClick={() => setRange(r)}
                >
                  {RANGE_LABELS[r]}
                </button>
              ))}
            </div>
            <button type="button" className="dash-btn dash-btn-ghost" onClick={handleLogout}>
              Log out
            </button>
          </div>
        </header>

        {error ? <p className="dash-error dash-error-bar">{error}</p> : null}

        {quietPeriod ? (
          <div className="dash-notice">
            <strong>Nothing recorded for this period yet.</strong> Tracking was reset for a fresh start, so numbers
            build up from here. Your own visits are ignored on any browser where you have opened this dashboard.
          </div>
        ) : null}

        <div className={`dash-kpis ${isRefreshing ? "dash-refreshing" : ""}`}>
          <KpiCard
            hero
            label="Enquiries"
            value={String(totalLeads)}
            kpi={stats.kpis.enquiries}
            spark={stats.series.map((p) => p.leads)}
            comparison={comparison}
            hint="Calls, WhatsApps, emails and forms"
          />
          <KpiCard
            label="Visitors"
            value={String(stats.kpis.visitors.value)}
            kpi={stats.kpis.visitors}
            spark={sessionsSeries}
            comparison={comparison}
            hint="Separate visits to the site"
          />
          <KpiCard
            label="Conversion"
            value={String(stats.kpis.conversionRate.value)}
            suffix="%"
            kpi={stats.kpis.conversionRate}
            unit="pts"
            spark={conversionSeries}
            comparison={comparison}
            hint="Visitors who got in touch"
          />
          <KpiCard
            label="Page views"
            value={String(stats.kpis.pageViews.value)}
            kpi={stats.kpis.pageViews}
            spark={stats.series.map((p) => p.views)}
            comparison={comparison}
            hint={`${stats.kpis.pagesPerVisit.value} pages per visit`}
          />
        </div>

        <Section
          title="Insights & recommendations"
          subtitle="Worked out automatically from your own numbers. Most important first."
        >
          {stats.insights.length === 0 ? (
            <p className="dash-empty">Not enough activity yet to say anything useful. Check back once more visitors arrive.</p>
          ) : (
            <div className="dash-insights">
              {stats.insights.map((insight) => (
                <InsightCard key={insight.id} insight={insight} />
              ))}
            </div>
          )}
        </Section>

        <div className="dash-grid-2">
          <Section
            title="Visitors & enquiries"
            subtitle={stats.seriesGranularity === "hour" ? "By hour, UK time" : "By day, UK time"}
            className="dash-span-2"
          >
            <TrendChart series={stats.series} />
          </Section>

          <Section title="How people get in touch" subtitle="Every route to a lead, this period">
            <ul className="dash-channels">
              {channelTiles.map((tile) => {
                const now = stats.leadCounts[tile.key];
                const before = stats.leadCountsPrevious?.[tile.key] ?? null;
                return (
                  <li key={tile.key} className={now > 0 ? "dash-channel-on" : ""}>
                    <span className="dash-channel-name">{tile.label}</span>
                    <span className="dash-channel-count">{now}</span>
                    <span className="dash-channel-sub">
                      {tile.sub}
                      {before !== null && comparison ? ` · was ${before} before` : ""}
                    </span>
                  </li>
                );
              })}
            </ul>
          </Section>
        </div>

        <div className="dash-grid-2">
          <Section title="From visit to enquiry" subtitle="Where people drop off">
            <ul className="dash-funnel">
              {funnelSteps.map((step, index) => (
                <li key={step.label}>
                  <div className="dash-funnel-top">
                    <span>{step.label}</span>
                    <strong>
                      {step.value}
                      {index > 0 && stats.funnel.visitors > 0 ? (
                        <em> {Math.round((step.value / funnelMax) * 100)}%</em>
                      ) : null}
                    </strong>
                  </div>
                  <div className="dash-bar-track dash-bar-track-lg">
                    <div
                      className="dash-bar-fill dash-bar-fill-pink"
                      style={{ width: `${Math.max((step.value / funnelMax) * 100, step.value > 0 ? 3 : 0)}%` }}
                    />
                  </div>
                </li>
              ))}
            </ul>
          </Section>

          <Section title="Which buttons get used" subtitle="Where on the page people tapped to contact you">
            <BarList rows={locationRows} emptyText="No contact button taps recorded in this period yet." />
          </Section>
        </div>

        <Section
          title="Page by page"
          subtitle="Tap a page for specific recommendations on how to get more enquiries from it"
        >
          <PagesTable pages={stats.pages} />
        </Section>

        <div className="dash-grid-3">
          <Section title="Where visitors come from">
            <BarList
              rows={stats.sources.slice(0, 8).map((s) => ({
                label: prettySource(s.source),
                value: s.sessions,
                note: s.enquirers > 0 ? ` · ${s.enquirers} enquired` : "",
              }))}
              emptyText="No visits yet."
            />
          </Section>
          <Section title="What they use">
            <BarList
              rows={stats.devices.map((d) => ({
                label: titleCase(d.device),
                value: d.sessions,
                note: d.enquirers > 0 ? ` · ${d.conversion}% enquired` : "",
              }))}
              emptyText="No visits yet."
            />
          </Section>
          <Section title="Where they are" subtitle={stats.ukShare > 0 ? `${stats.ukShare}% in the UK` : undefined}>
            <BarList
              rows={stats.cities.slice(0, 8).map((c) => ({ label: c.label, value: c.sessions }))}
              emptyText="No location data yet."
            />
          </Section>
        </div>

        <div className="dash-grid-2">
          <Section title="Busiest times of day" subtitle="Page views by hour, UK time">
            <div className="dash-hours">
              {stats.hourly.map((h) => (
                <div key={h.hour} className="dash-hour" title={`${h.label}: ${h.views} views`}>
                  <div className="dash-hour-bar" style={{ height: `${Math.max((h.views / maxHour) * 100, h.views > 0 ? 6 : 0)}%` }} />
                  <span>{h.hour % 6 === 0 ? h.label.replace(":00", "") : ""}</span>
                </div>
              ))}
            </div>
          </Section>
          <Section title="Busiest days" subtitle="Page views by day of the week">
            <div className="dash-days">
              {stats.weekdays.map((d) => (
                <div key={d.day} className="dash-day" title={`${d.label}: ${d.views} views`}>
                  <div className="dash-day-bar" style={{ height: `${Math.max((d.views / maxDay) * 100, d.views > 0 ? 6 : 0)}%` }} />
                  <span>{d.label.slice(0, 3)}</span>
                </div>
              ))}
            </div>
          </Section>
        </div>

        <Section title="Latest activity" subtitle="Newest first. Pink rows are enquiries.">
          {stats.recentEvents.length === 0 ? (
            <p className="dash-empty">Nothing yet.</p>
          ) : (
            <ul className="dash-activity">
              {stats.recentEvents.slice(0, 25).map((event) => (
                <ActivityRow key={event.id} event={event} />
              ))}
            </ul>
          )}
        </Section>

        <footer className="dash-footer">
          Updated {formatWhen(stats.lastUpdated)} · {stats.totalEventsInDatabase.toLocaleString("en-GB")} events recorded in total · refreshes
          every 30 seconds
        </footer>
      </div>
    </div>
  );
}
