"use client";

import { useCallback, useEffect, useState } from "react";

type SetupState = {
  pages: Array<{ id: string; name: string }>;
  suggestedPageId: string | null;
  suggestedPageName: string | null;
  leadgenSubscribed: boolean;
  error?: string;
  hint?: string;
};

export function FacebookLeadSetupPanel() {
  const [setup, setSetup] = useState<SetupState | null>(null);
  const [pageId, setPageId] = useState("");
  const [status, setStatus] = useState("");
  const [isConnecting, setIsConnecting] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const loadSetup = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await fetch("/api/jarvis/meta/leadgen-setup/", {
        cache: "no-store",
      });
      const data = await response.json();
      setSetup(data);
      if (data.suggestedPageId) {
        setPageId(data.suggestedPageId);
      }
    } catch {
      setStatus("Could not load Facebook setup status.");
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    void loadSetup();
  }, [loadSetup]);

  async function handleConnect() {
    if (!pageId.trim()) {
      setStatus("Paste your WRPX page id first.");
      return;
    }

    setIsConnecting(true);
    setStatus("");
    try {
      const response = await fetch("/api/jarvis/meta/leadgen-setup/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ pageId: pageId.trim() }),
      });
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error ?? "Connect failed");
      }
      setStatus(data.message ?? "Connected.");
      await loadSetup();
    } catch (error) {
      setStatus(
        error instanceof Error ? error.message : "Could not connect Facebook page."
      );
    } finally {
      setIsConnecting(false);
    }
  }

  if (isLoading) {
    return <p className="jarvis-muted">Checking Facebook Lead Ads connection...</p>;
  }

  if (setup?.leadgenSubscribed) {
    return (
      <div className="jarvis-setup-panel jarvis-setup-panel-success">
        <p className="jarvis-setup-panel-title">Facebook Lead Ads connected</p>
        <p className="jarvis-muted">
          New form submissions should appear here automatically. Submit a new test
          lead if one is missing — old leads do not replay.
        </p>
      </div>
    );
  }

  return (
    <div className="jarvis-setup-panel">
      <p className="jarvis-setup-panel-title">Connect Facebook Lead Ads</p>
      <p className="jarvis-muted">
        Your form is live but WRPX page may not be linked to Jarvis yet. Finish
        Graph API Explorer Step 1, then connect here.
      </p>

      <ol className="jarvis-setup-steps">
        <li>
          In Graph API Explorer, click <strong>Submit</strong> on{" "}
          <code>GET me/accounts</code>
        </li>
        <li>
          Copy the <strong>id</strong> next to <strong>WRPX</strong>
        </li>
        <li>Paste it below and click Connect</li>
      </ol>

      {setup?.pages && setup.pages.length > 0 ? (
        <p className="jarvis-muted">
          Found pages:{" "}
          {setup.pages.map((page) => `${page.name} (${page.id})`).join(", ")}
        </p>
      ) : null}

      {setup?.error ? (
        <p className="jarvis-muted">{setup.error}. {setup.hint}</p>
      ) : null}

      <div className="jarvis-setup-row">
        <input
          className="jarvis-input"
          value={pageId}
          onChange={(event) => setPageId(event.target.value)}
          placeholder="WRPX page id from me/accounts"
        />
        <button
          type="button"
          className="jarvis-button jarvis-button-primary"
          disabled={isConnecting}
          onClick={handleConnect}
        >
          {isConnecting ? "Connecting..." : "Connect WRPX page"}
        </button>
      </div>

      {status ? <p className="jarvis-muted">{status}</p> : null}
    </div>
  );
}
