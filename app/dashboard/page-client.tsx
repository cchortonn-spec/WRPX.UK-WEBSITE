"use client";

import { useCallback, useEffect, useState } from "react";
import type { AnalyticsEventType, DashboardStats } from "@/lib/analytics-types";

const EVENT_LABELS: Record<AnalyticsEventType, string> = {
  phone_click: "Phone clicks",
  email_click: "Email clicks",
  quote_form: "Quote forms",
  contact_form: "Contact forms",
  page_view: "Page views",
};

const LEAD_EVENTS: AnalyticsEventType[] = [
  "phone_click",
  "email_click",
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

function formatEventType(value: AnalyticsEventType) {
  return EVENT_LABELS[value];
}

function normalizeReferrer(referrer: string) {
  try {
    const url = new URL(referrer);
    return url.hostname.replace(/^www\./, "");
  } catch {
    return referrer;
  }
}

function StatCard({
  label,
  value,
  sublabel,
}: {
  label: string;
  value: number;
  sublabel?: string;
}) {
  return (
    <div className="dashboard-stat-card">
      <p className="dashboard-stat-label">{label}</p>
      <p className="dashboard-stat-value">{value.toLocaleString("en-GB")}</p>
      {sublabel ? <p className="dashboard-stat-sublabel">{sublabel}</p> : null}
    </div>
  );
}

function BarList({
  title,
  items,
  valueKey,
}: {
  title: string;
  items: Array<{ count: number; [key: string]: string | number }>;
  valueKey: string;
}) {
  const max = Math.max(...items.map((item) => item.count), 1);

  return (
    <section className="dashboard-panel">
      <h2 className="dashboard-panel-title">{title}</h2>
      {items.length === 0 ? (
        <p className="dashboard-empty">No data yet.</p>
      ) : (
        <ul className="dashboard-bar-list">
          {items.map((item) => (
            <li key={String(item[valueKey])} className="dashboard-bar-item">
              <div className="dashboard-bar-row">
                <span className="dashboard-bar-label">{String(item[valueKey])}</span>
                <span className="dashboard-bar-count">{item.count}</span>
              </div>
              <div className="dashboard-bar-track">
                <div
                  className="dashboard-bar-fill"
                  style={{ width: `${(item.count / max) * 100}%` }}
                />
              </div>
            </li>
          ))}
        </ul>
      )}
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

  const leadTotalThisWeek = LEAD_EVENTS.reduce(
    (sum, type) => sum + (stats?.totals.thisWeek[type] ?? 0),
    0
  );

  return (
    <div className="dashboard-page">
      <div className="dashboard-shell">
        <div className="dashboard-header">
          <div>
            <p className="dashboard-eyebrow">WRPX live analytics</p>
            <h1 className="dashboard-title">Website activity</h1>
            <p className="dashboard-muted">
              Last updated{" "}
              {stats ? formatDate(stats.lastUpdated) : "just now"} · refreshes
              every 30 seconds
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

        <div className="dashboard-stat-grid">
          {LEAD_EVENTS.map((type) => (
            <StatCard
              key={type}
              label={EVENT_LABELS[type]}
              value={stats?.totals.allTime[type] ?? 0}
              sublabel={`${stats?.totals.thisWeek[type] ?? 0} this week`}
            />
          ))}
          <StatCard
            label="Total leads this week"
            value={leadTotalThisWeek}
            sublabel="Calls, emails, and forms"
          />
        </div>

        <div className="dashboard-grid">
          <BarList
            title="Most viewed pages"
            items={stats?.topPages ?? []}
            valueKey="page_url"
          />
          <BarList
            title="Top traffic sources"
            items={stats?.topReferrers ?? []}
            valueKey="referrer"
          />
          <BarList
            title="Mobile vs desktop"
            items={stats?.devices ?? []}
            valueKey="device"
          />
          <BarList
            title="Countries"
            items={stats?.countries ?? []}
            valueKey="country"
          />
        </div>

        <section className="dashboard-panel">
          <h2 className="dashboard-panel-title">Activity by day</h2>
          {stats?.dailyActivity.length ? (
            <div className="dashboard-timeline">
              {stats.dailyActivity.map((day) => {
                const max = Math.max(
                  ...stats.dailyActivity.map((item) => item.count),
                  1
                );

                return (
                  <div key={day.date} className="dashboard-timeline-row">
                    <span className="dashboard-timeline-date">{day.date}</span>
                    <div className="dashboard-bar-track dashboard-timeline-track">
                      <div
                        className="dashboard-bar-fill"
                        style={{ width: `${(day.count / max) * 100}%` }}
                      />
                    </div>
                    <span className="dashboard-timeline-count">{day.count}</span>
                  </div>
                );
              })}
            </div>
          ) : (
            <p className="dashboard-empty">No activity recorded yet.</p>
          )}
        </section>

        <section className="dashboard-panel">
          <h2 className="dashboard-panel-title">Recent activity</h2>
          {stats?.recentEvents.length ? (
            <div className="dashboard-table-wrap">
              <table className="dashboard-table">
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
                      <td>{formatEventType(event.event_type)}</td>
                      <td>{event.page_url}</td>
                      <td>
                        {event.referrer
                          ? normalizeReferrer(event.referrer)
                          : "Direct"}
                      </td>
                      <td>{event.device}</td>
                      <td>
                        {[event.city, event.country].filter(Boolean).join(", ") ||
                          "Unknown"}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <p className="dashboard-empty">No events yet.</p>
          )}
        </section>
      </div>
    </div>
  );
}
