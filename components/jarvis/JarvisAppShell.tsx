"use client";

import { useCallback, useEffect, useState } from "react";
import { JarvisSidebar } from "@/components/jarvis/JarvisSidebar";
import { JarvisTopBar } from "@/components/jarvis/JarvisTopBar";

type JarvisAppShellProps = {
  children: React.ReactNode;
  pageTitle?: string;
  topBarAction?: React.ReactNode;
};

export function JarvisAppShell({
  children,
  pageTitle = "Jarvis",
  topBarAction,
}: JarvisAppShellProps) {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const checkAuth = useCallback(async () => {
    const response = await fetch("/api/jarvis/briefing/", { cache: "no-store" });

    if (response.status === 401) {
      setIsAuthenticated(false);
      return false;
    }

    if (!response.ok) {
      throw new Error("Could not verify session");
    }

    setIsAuthenticated(true);
    return true;
  }, []);

  useEffect(() => {
    checkAuth()
      .catch(() => setError("Could not connect to Jarvis right now."))
      .finally(() => setIsLoading(false));
  }, [checkAuth]);

  async function handleLogin(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsLoggingIn(true);
    setError("");

    try {
      const response = await fetch("/api/jarvis/login/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });

      if (!response.ok) {
        const data = (await response.json().catch(() => null)) as {
          error?: string;
        } | null;
        setError(
          data?.error === "Jarvis password is not configured"
            ? "Jarvis is not set up on this server yet. Add JARVIS_PASSWORD in your hosting environment variables, then redeploy."
            : data?.error === "Incorrect password"
              ? "Incorrect password."
              : "Login failed. Please try again."
        );
        return;
      }

      setPassword("");
      await checkAuth();
    } catch {
      setError("Login failed. Please try again.");
    } finally {
      setIsLoggingIn(false);
    }
  }

  async function handleLogout() {
    await fetch("/api/jarvis/logout/", { method: "POST" });
    setIsAuthenticated(false);
  }

  if (isLoading) {
    return (
      <div className="jarvis-page">
        <div className="jarvis-login-shell">
          <p className="jarvis-muted">Loading Jarvis...</p>
        </div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <div className="jarvis-page">
        <div className="jarvis-login-shell">
          <div className="jarvis-login-card">
            <p className="jarvis-eyebrow">WRPX internal</p>
            <h1 className="jarvis-title">Jarvis</h1>
            <p className="jarvis-muted">
              Enter your password to open the business dashboard.
            </p>

            <form onSubmit={handleLogin} className="jarvis-form">
              <div>
                <label htmlFor="jarvis-password" className="jarvis-label">
                  Password
                </label>
                <input
                  id="jarvis-password"
                  type="password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  className="jarvis-input"
                  autoComplete="current-password"
                  required
                />
              </div>
              {error ? <p className="jarvis-error">{error}</p> : null}
              <button
                type="submit"
                className="jarvis-button jarvis-button-primary"
                disabled={isLoggingIn}
              >
                {isLoggingIn ? "Checking..." : "Open Jarvis"}
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="jarvis-page">
      <div className="jarvis-shell">
        <JarvisSidebar />
        <div className="jarvis-main">
          <JarvisTopBar
            title={pageTitle}
            onLogout={handleLogout}
            action={topBarAction}
          />
          <div className="jarvis-content">{children}</div>
        </div>
      </div>
    </div>
  );
}
