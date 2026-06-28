"use client";

import { useCallback, useEffect, useState } from "react";
import { getCountryName, normalizeReferrer } from "@/lib/analytics-helpers";
import type { AnalyticsEventType, DashboardStats } from "@/lib/analytics-types";

const EVENT_LABELS: Record<AnalyticsEventType, string> = {
  phone_click: "Phone click",
  email_click: "Email click",
  whatsapp_click: "WhatsApp click",
  quote_form: "Quote form",
  contact_form: "Contact form",
  page_view: "Page view",
};

const LEAD_EVENTS: AnalyticsEventType[] = [
  "phone_click",
  "email_click",
  "whatsapp_click",
  "quote_form",
  "contact_form",
];

function formatDate(value: string) {
  return new Date(value).toLocaleString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

function formatShortDate(value: string) {
  return new Date(value).toLocaleDateString("en-GB", {
    weekday: "short",
    day: "numeric",
    month: "short",
  });
}

function SummaryCard({
  label,
  value,
  detail,
}: {
  label: string;
  value: number | string;
  detail: string;
}) {
  return (
    <div className="dashboard-summary-card">
      <p className="dashboard-summary-label">{label}</p>
      <p className="dashboard-summary-value">{value}</p>
      <p className="dashboard-summary-detail">{detail}</p>
    </div>
  );
}

function Panel({
  title,
  description,
  children,
  className = "",
}: {
  title: string;
  description?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section className={`dashboard-panel ${className}`.trim()}>
      <div className="dashboard-panel-header">
        <h2 className="dashboard-panel-title">{title}</h2>
        {description ? <p className="dashboard-panel-description">{description}</p> : null}
      </div>
      {children}
    </section>
  );
}

export default function DashboardClient() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [stats, setStats] = useState<DashboardStats | null>(null);

  const loadStats = useCallback(async () => {
    const response = await fetch("/api/dashboard/stats/", { cache: "no-store" });

    if (response.status === 401) {
      setIsAuthenticated(false);
      setStats(null);
      return false;
    }

    if (!response.ok) {
      throw new Error("Could not load analytics");
    }

    const data = (await response.json()) as DashboardStats;
    setStats(data);
    setIsAuthenticated(true);
    return true;
  }, []);

  useEffect(() => {
    loadStats()
      .catch(() => setError("Could not load analytics right now."))
      .finally(() => setIsLoading(false));
  }, [loadStats]);

  useEffect(() => {
    if (!isAuthenticated) {
      return;
    }

    const interval = window.setInterval(() => {
      void loadStats().catch(() => {
        setError("Live refresh failed. Data may be out of date.");
      });
    }, 30000);

    return () => window.clearInterval(interval);
  }, [isAuthenticated, loadStats]);

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
      await loadStats();
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
      <div className="dashboard-page">
        <div className="dashboard-shell">
          <p className="dashboard-muted">Loading dashboard...</p>
        </div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <div className="dashboard-page">
        <div className="dashboard-shell dashboard-login-shell">
          <div className="dashboard-login-card">
            <p className="dashboard-eyebrow">WRPX internal</p>
            <h1 className="dashboard-title">Analytics dashboard</h1>
            <p className="dashboard-muted">
              Enter your password to view live website activity.
            </p>

            <form onSubmit={handleLogin} className="dashboard-login-form">
              <label htmlFor="dashboard-password" className="dashboard-label">
                Password
              </label>
              <input
                id="dashboard-password"
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                className="dashboard-input"
                autoComplete="current-password"
                required
              />
              {error ? <p className="dashboard-error">{error}</p> : null}
              <button
                type="submit"
                className="btn-primary dashboard-login-button"
                disabled={isLoggingIn}
              >
                {isLoggingIn ? "Checking..." : "View analytics"}
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }

  const hourlyMax = Math.max(...(stats?.hourlyActivity.map((item) => item.count) ?? [1]), 1);
  const dailyMax = Math.max(...(stats?.dailyActivity.map((item) => item.count) ?? [1]), 1);

  return (
    <div className="dashboard-page">
      <div className="dashboard-shell">
        <div className="dashboard-header">
          <div>
            <p className="dashboard-eyebrow">WRPX live analytics</p>
            <h1 className="dashboard-title">Website activity</h1>
            <p className="dashboard-muted">
              Last updated {stats ? formatDate(stats.lastUpdated) : "just now"} ·
              refreshes every 30 seconds · {stats?.summary.total_events ?? 0} total
              events tracked
            </p>
          </div>
          <button
            type="button"
            onClick={handleLogout}
            className="btn-secondary dashboard-logout-button"
          >
            Log out
          </button>
        </div>

        {error ? <p className="dashboard-error dashboard-error-banner">{error}</p> : null}

        <div className="dashboard-summary-grid">
          <SummaryCard
            label="Page views today"
            value={stats?.summary.page_views_today ?? 0}
            detail={`${stats?.summary.page_views_this_week ?? 0} this week · ${stats?.summary.total_page_views ?? 0} all time`}
          />
          <SummaryCard
            label="Leads today"
            value={stats?.summary.leads_today ?? 0}
            detail={`${stats?.summary.leads_this_week ?? 0} this week · ${stats?.summary.total_leads ?? 0} all time`}
          />
          <SummaryCard
            label="UK visitors"
            value={stats?.summary.uk_visitors ?? 0}
            detail={`${stats?.summary.international_visitors ?? 0} international visits`}
          />
          <SummaryCard
            label="Top page right now"
            value={
              stats?.topPages[0]?.page_title ??
              (stats?.topPages[0]?.page_url || "—")
            }
            detail={
              stats?.topPages[0]
                ? `${stats.topPages[0].count} views · ${stats.topPages[0].percentage}% of traffic`
                : "No page views yet"
            }
          />
        </div>

        <div className="dashboard-stat-grid">
          {LEAD_EVENTS.map((type) => (
            <div key={type} className="dashboard-stat-card">
              <p className="dashboard-stat-label">{EVENT_LABELS[type]}</p>
              <p className="dashboard-stat-value">
                {stats?.totals.allTime[type]?.toLocaleString("en-GB") ?? 0}
              </p>
              <p className="dashboard-stat-sublabel">
                {stats?.totals.today[type] ?? 0} today · {stats?.totals.thisWeek[type] ?? 0}{" "}
                this week
              </p>
            </div>
          ))}
        </div>

        <Panel
          title="Most viewed pages"
          description="Ranked by total page views. Shows how much traffic each page gets, plus any calls, emails, or forms from that page."
          className="dashboard-panel-wide"
        >
          {stats?.topPages.length ? (
            <div className="dashboard-table-wrap">
              <table className="dashboard-table dashboard-table-rich">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Page</th>
                    <th>URL</th>
                    <th>Views</th>
                    <th>Today</th>
                    <th>This week</th>
                    <th>Share</th>
                    <th>Leads</th>
                  </tr>
                </thead>
                <tbody>
                  {stats.topPages.map((page, index) => (
                    <tr key={page.page_url}>
                      <td className="dashboard-rank">{index + 1}</td>
                      <td>
                        <strong>{page.page_title}</strong>
                      </td>
                      <td className="dashboard-url">{page.page_url}</td>
                      <td>{page.count}</td>
                      <td>{page.today}</td>
                      <td>{page.this_week}</td>
                      <td>
                        <span className="dashboard-pill">{page.percentage}%</span>
                      </td>
                      <td>{page.leads > 0 ? page.leads : "—"}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <p className="dashboard-empty">No page views recorded yet.</p>
          )}
        </Panel>

        <Panel
          title="Pages that generate leads"
          description="Which pages people were on when they called, emailed, or submitted a form."
        >
          {stats?.leadsByPage.length ? (
            <div className="dashboard-table-wrap">
              <table className="dashboard-table dashboard-table-rich">
                <thead>
                  <tr>
                    <th>Page</th>
                    <th>Phone</th>
                    <th>Email</th>
                    <th>WhatsApp</th>
                    <th>Quote</th>
                    <th>Contact</th>
                    <th>Total</th>
                  </tr>
                </thead>
                <tbody>
                  {stats.leadsByPage.map((page) => (
                    <tr key={page.page_url}>
                      <td>
                        <strong>{page.page_title}</strong>
                        <div className="dashboard-url">{page.page_url}</div>
                      </td>
                      <td>{page.phone || "—"}</td>
                      <td>{page.email || "—"}</td>
                      <td>{page.whatsapp || "—"}</td>
                      <td>{page.quote_form || "—"}</td>
                      <td>{page.contact_form || "—"}</td>
                      <td>
                        <span className="dashboard-pill dashboard-pill-accent">
                          {page.total}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <p className="dashboard-empty">No leads recorded yet.</p>
          )}
        </Panel>

        <div className="dashboard-grid">
          <Panel
            title="Traffic sources"
            description="Where visitors came from before landing on your site."
          >
            {stats?.topReferrers.length ? (
              <ul className="dashboard-bar-list">
                {stats.topReferrers.map((item) => {
                  const max = stats.topReferrers[0]?.count ?? 1;
                  return (
                    <li key={item.referrer} className="dashboard-bar-item">
                      <div className="dashboard-bar-row">
                        <span className="dashboard-bar-label">{item.referrer}</span>
                        <span className="dashboard-bar-meta">
                          {item.count} · {item.percentage}%
                        </span>
                      </div>
                      <div className="dashboard-bar-track">
                        <div
                          className="dashboard-bar-fill"
                          style={{ width: `${(item.count / max) * 100}%` }}
                        />
                      </div>
                    </li>
                  );
                })}
              </ul>
            ) : (
              <p className="dashboard-empty">No referrer data yet. Most visits may be direct.</p>
            )}
          </Panel>

          <Panel title="Devices" description="How people are browsing your site.">
            {stats?.devices.length ? (
              <ul className="dashboard-bar-list">
                {stats.devices.map((item) => {
                  const max = stats.devices[0]?.count ?? 1;
                  return (
                    <li key={item.device} className="dashboard-bar-item">
                      <div className="dashboard-bar-row">
                        <span className="dashboard-bar-label dashboard-capitalize">
                          {item.device}
                        </span>
                        <span className="dashboard-bar-meta">
                          {item.count} · {item.percentage}%
                        </span>
                      </div>
                      <div className="dashboard-bar-track">
                        <div
                          className="dashboard-bar-fill"
                          style={{ width: `${(item.count / max) * 100}%` }}
                        />
                      </div>
                    </li>
                  );
                })}
              </ul>
            ) : (
              <p className="dashboard-empty">No device data yet.</p>
            )}
          </Panel>

          <Panel title="Countries" description="Visitor locations based on IP address.">
            {stats?.countries.length ? (
              <ul className="dashboard-bar-list">
                {stats.countries.map((item) => {
                  const max = stats.countries[0]?.count ?? 1;
                  return (
                    <li key={item.country} className="dashboard-bar-item">
                      <div className="dashboard-bar-row">
                        <span className="dashboard-bar-label">
                          {item.country_name}{" "}
                          <span className="dashboard-muted-inline">({item.country})</span>
                        </span>
                        <span className="dashboard-bar-meta">
                          {item.count} · {item.percentage}%
                        </span>
                      </div>
                      <div className="dashboard-bar-track">
                        <div
                          className="dashboard-bar-fill"
                          style={{ width: `${(item.count / max) * 100}%` }}
                        />
                      </div>
                    </li>
                  );
                })}
              </ul>
            ) : (
              <p className="dashboard-empty">No country data yet.</p>
            )}
          </Panel>

          <Panel title="Cities" description="More specific visitor locations when available.">
            {stats?.cities.length ? (
              <ul className="dashboard-detail-list">
                {stats.cities.map((item) => (
                  <li key={`${item.city}-${item.country}`} className="dashboard-detail-item">
                    <span>
                      {item.city}
                      {item.country ? `, ${getCountryName(item.country)}` : ""}
                    </span>
                    <span className="dashboard-pill">{item.count}</span>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="dashboard-empty">No city data yet.</p>
            )}
          </Panel>
        </div>

        <div className="dashboard-grid">
          <Panel
            title="Busiest times of day"
            description="When activity happens across your whole site (UK time on server)."
          >
            <div className="dashboard-hour-grid">
              {stats?.hourlyActivity.map((hour) => (
                <div key={hour.hour} className="dashboard-hour-cell">
                  <div
                    className="dashboard-hour-bar"
                    style={{ height: `${(hour.count / hourlyMax) * 100}%` }}
                    title={`${hour.count} events`}
                  />
                  <span className="dashboard-hour-label">{hour.label}</span>
                </div>
              ))}
            </div>
          </Panel>

          <Panel
            title="Activity by day"
            description="Daily totals split into page views vs leads (calls, emails, forms)."
          >
            {stats?.dailyActivity.length ? (
              <div className="dashboard-timeline">
                {stats.dailyActivity.map((day) => (
                  <div key={day.date} className="dashboard-timeline-row dashboard-timeline-row-rich">
                    <div className="dashboard-timeline-date-block">
                      <span className="dashboard-timeline-date">{formatShortDate(day.date)}</span>
                      <span className="dashboard-timeline-sub">
                        {day.page_views} views · {day.leads} leads
                      </span>
                    </div>
                    <div className="dashboard-bar-track dashboard-timeline-track">
                      <div
                        className="dashboard-bar-fill"
                        style={{ width: `${(day.count / dailyMax) * 100}%` }}
                      />
                    </div>
                    <span className="dashboard-timeline-count">{day.count}</span>
                  </div>
                ))}
              </div>
            ) : (
              <p className="dashboard-empty">No activity recorded yet.</p>
            )}
          </Panel>
        </div>

        <Panel
          title="Recent activity log"
          description="The last 50 events in real time — every page view, click, and form submission."
        >
          {stats?.recentEvents.length ? (
            <div className="dashboard-table-wrap">
              <table className="dashboard-table dashboard-table-rich">
                <thead>
                  <tr>
                    <th>When</th>
                    <th>Event</th>
                    <th>Page</th>
                    <th>Source</th>
                    <th>Device</th>
                    <th>Location</th>
                  </tr>
                </thead>
                <tbody>
                  {stats.recentEvents.map((event) => (
                    <tr key={event.id}>
                      <td>{formatDate(event.created_at)}</td>
                      <td>
                        <span className="dashboard-event-pill">
                          {EVENT_LABELS[event.event_type]}
                        </span>
                      </td>
                      <td>
                        <div>{event.page_url}</div>
                      </td>
                      <td>
                        {event.referrer
                          ? normalizeReferrer(event.referrer)
                          : "Direct"}
                      </td>
                      <td className="dashboard-capitalize">{event.device}</td>
                      <td>
                        {[event.city, event.country ? getCountryName(event.country) : null]
                          .filter(Boolean)
                          .join(", ") || "Unknown"}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <p className="dashboard-empty">No events yet.</p>
          )}
        </Panel>
      </div>
    </div>
  );
}
