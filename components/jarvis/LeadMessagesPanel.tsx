"use client";

import { useCallback, useEffect, useState } from "react";
import { ConversationThread } from "@/components/jarvis/ConversationThread";
import {
  CHANNEL_LABELS,
  CONVERSATION_CHANNELS,
  type ConversationChannel,
  type JarvisConversation,
} from "@/lib/jarvis-types";

type LeadMessagesPanelProps = {
  leadId: string;
  leadName: string;
  leadPhone: string | null;
  leadEmail: string | null;
};

export function LeadMessagesPanel({
  leadId,
  leadName,
  leadPhone,
  leadEmail,
}: LeadMessagesPanelProps) {
  const [conversations, setConversations] = useState<JarvisConversation[]>([]);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const [isCreating, setIsCreating] = useState(false);
  const [newChannel, setNewChannel] = useState<ConversationChannel>("whatsapp");

  const loadConversations = useCallback(async () => {
    const response = await fetch(
      `/api/jarvis/conversations?lead_id=${leadId}`,
      { cache: "no-store" }
    );
    if (!response.ok) throw new Error("Could not load conversations");
    const data = await response.json();
    const items = data.conversations as JarvisConversation[];
    setConversations(items);
    if (items.length > 0 && !selectedId) {
      setSelectedId(items[0].id);
    }
  }, [leadId, selectedId]);

  useEffect(() => {
    loadConversations()
      .catch(() => setError("Could not load messages for this lead."))
      .finally(() => setIsLoading(false));
  }, [loadConversations]);

  async function handleStartConversation() {
    setIsCreating(true);
    try {
      const response = await fetch("/api/jarvis/conversations/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          lead_id: leadId,
          contact_name: leadName,
          contact_phone: leadPhone,
          contact_email: leadEmail,
          channel: newChannel,
        }),
      });
      if (!response.ok) throw new Error();
      const data = await response.json();
      await loadConversations();
      setSelectedId(data.conversation.id);
    } catch {
      setError("Could not start conversation.");
    } finally {
      setIsCreating(false);
    }
  }

  if (isLoading) {
    return <p className="jarvis-muted">Loading messages...</p>;
  }

  return (
    <section className="jarvis-lead-messages">
      {conversations.length === 0 ? (
        <div className="jarvis-lead-messages-empty">
          <p className="jarvis-muted">
            No conversations linked to this lead yet.
          </p>
          <div className="jarvis-form jarvis-form-flush">
            <div>
              <label htmlFor={`${leadId}-msg-channel`} className="jarvis-label">
                Channel
              </label>
              <select
                id={`${leadId}-msg-channel`}
                className="jarvis-select"
                value={newChannel}
                onChange={(e) =>
                  setNewChannel(e.target.value as ConversationChannel)
                }
              >
                {CONVERSATION_CHANNELS.map((channel) => (
                  <option key={channel} value={channel}>
                    {CHANNEL_LABELS[channel]}
                  </option>
                ))}
              </select>
            </div>
            <button
              type="button"
              className="jarvis-button jarvis-button-secondary"
              onClick={handleStartConversation}
              disabled={isCreating}
            >
              {isCreating ? "Starting..." : "Start conversation"}
            </button>
          </div>
        </div>
      ) : (
        <>
          {conversations.length > 1 ? (
            <div className="jarvis-lead-messages-tabs">
              {conversations.map((conversation) => (
                <button
                  key={conversation.id}
                  type="button"
                  className={`jarvis-button jarvis-button-ghost ${
                    selectedId === conversation.id
                      ? "jarvis-lead-messages-tab-active"
                      : ""
                  }`}
                  onClick={() => setSelectedId(conversation.id)}
                >
                  {CHANNEL_LABELS[conversation.channel]}
                </button>
              ))}
            </div>
          ) : null}
          {selectedId ? (
            <ConversationThread
              conversationId={selectedId}
              compact
              onUpdated={loadConversations}
            />
          ) : null}
        </>
      )}
      {error ? <p className="jarvis-error">{error}</p> : null}
    </section>
  );
}
