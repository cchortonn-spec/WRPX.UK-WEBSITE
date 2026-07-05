"use client";

import { useCallback, useEffect, useState } from "react";
import { ConversationThread } from "@/components/jarvis/ConversationThread";
import {
  CHANNEL_LABELS,
  CONVERSATION_CHANNELS,
  type ConversationChannel,
  type JarvisConversation,
} from "@/lib/jarvis-types";

function formatRelativeTime(value: string | null) {
  if (!value) return "No messages yet";
  const date = new Date(value);
  const now = new Date();
  const diffMs = now.getTime() - date.getTime();
  const diffMins = Math.floor(diffMs / 60000);

  if (diffMins < 1) return "Just now";
  if (diffMins < 60) return `${diffMins}m ago`;
  const diffHours = Math.floor(diffMins / 60);
  if (diffHours < 24) return `${diffHours}h ago`;
  const diffDays = Math.floor(diffHours / 24);
  if (diffDays < 7) return `${diffDays}d ago`;

  return date.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
  });
}

export default function JarvisInboxClient() {
  const [conversations, setConversations] = useState<JarvisConversation[]>([]);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [channelFilter, setChannelFilter] = useState<ConversationChannel | "">(
    ""
  );
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const [showNewForm, setShowNewForm] = useState(false);
  const [newName, setNewName] = useState("");
  const [newPhone, setNewPhone] = useState("");
  const [newChannel, setNewChannel] = useState<ConversationChannel>("manual");
  const [newMessage, setNewMessage] = useState("");
  const [isCreating, setIsCreating] = useState(false);

  const loadConversations = useCallback(async () => {
    const params = new URLSearchParams();
    if (channelFilter) params.set("channel", channelFilter);
    const query = params.toString();

    const response = await fetch(
      `/api/jarvis/conversations${query ? `?${query}` : ""}`,
      { cache: "no-store" }
    );

    if (!response.ok) throw new Error("Could not load conversations");
    const data = await response.json();
    setConversations(data.conversations as JarvisConversation[]);
  }, [channelFilter]);

  useEffect(() => {
    loadConversations()
      .catch(() => setError("Could not load inbox right now."))
      .finally(() => setIsLoading(false));
  }, [loadConversations]);

  async function handleCreateConversation(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!newName.trim()) return;

    setIsCreating(true);
    try {
      const response = await fetch("/api/jarvis/conversations/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contact_name: newName,
          contact_phone: newPhone || null,
          channel: newChannel,
          initial_message: newMessage || null,
        }),
      });
      if (!response.ok) throw new Error();
      const data = await response.json();
      setShowNewForm(false);
      setNewName("");
      setNewPhone("");
      setNewMessage("");
      setNewChannel("manual");
      await loadConversations();
      setSelectedId(data.conversation.id);
    } catch {
      setError("Could not create conversation.");
    } finally {
      setIsCreating(false);
    }
  }

  const selectedConversation = conversations.find((c) => c.id === selectedId);

  return (
    <div className="jarvis-inbox">
      <div className="jarvis-inbox-toolbar">
        <div className="jarvis-inbox-filters">
          <label htmlFor="inbox-channel-filter" className="jarvis-label">
            Channel
          </label>
          <select
            id="inbox-channel-filter"
            className="jarvis-select"
            value={channelFilter}
            onChange={(e) =>
              setChannelFilter(e.target.value as ConversationChannel | "")
            }
          >
            <option value="">All channels</option>
            {CONVERSATION_CHANNELS.map((channel) => (
              <option key={channel} value={channel}>
                {CHANNEL_LABELS[channel]}
              </option>
            ))}
          </select>
        </div>
        <button
          type="button"
          className="jarvis-button jarvis-button-primary"
          onClick={() => setShowNewForm((current) => !current)}
        >
          {showNewForm ? "Cancel" : "New conversation"}
        </button>
      </div>

      {showNewForm ? (
        <form
          onSubmit={handleCreateConversation}
          className="jarvis-panel jarvis-inbox-new-form"
        >
          <p className="jarvis-drawer-section-title">Start a conversation</p>
          <div className="jarvis-form jarvis-form-flush">
            <div>
              <label htmlFor="new-conv-name" className="jarvis-label">
                Contact name
              </label>
              <input
                id="new-conv-name"
                className="jarvis-input"
                value={newName}
                onChange={(e) => setNewName(e.target.value)}
                placeholder="Customer name"
                required
              />
            </div>
            <div>
              <label htmlFor="new-conv-phone" className="jarvis-label">
                Phone (optional)
              </label>
              <input
                id="new-conv-phone"
                className="jarvis-input"
                value={newPhone}
                onChange={(e) => setNewPhone(e.target.value)}
                placeholder="07..."
              />
            </div>
            <div>
              <label htmlFor="new-conv-channel" className="jarvis-label">
                Channel
              </label>
              <select
                id="new-conv-channel"
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
            <div>
              <label htmlFor="new-conv-message" className="jarvis-label">
                First message (optional)
              </label>
              <textarea
                id="new-conv-message"
                className="jarvis-textarea"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                placeholder="Log or draft the first message"
              />
            </div>
            <button
              type="submit"
              className="jarvis-button jarvis-button-secondary"
              disabled={isCreating}
            >
              {isCreating ? "Creating..." : "Create conversation"}
            </button>
          </div>
        </form>
      ) : null}

      {error ? <p className="jarvis-error">{error}</p> : null}

      <div className="jarvis-inbox-layout">
        <aside
          className={`jarvis-inbox-list ${
            selectedId ? "jarvis-inbox-list-hidden-mobile" : ""
          }`}
        >
          {isLoading ? (
            <p className="jarvis-muted">Loading inbox...</p>
          ) : conversations.length === 0 ? (
            <p className="jarvis-muted">
              No conversations yet. Create one to get started.
            </p>
          ) : (
            <ul className="jarvis-inbox-items">
              {conversations.map((conversation) => (
                <li key={conversation.id}>
                  <button
                    type="button"
                    className={`jarvis-inbox-item ${
                      selectedId === conversation.id
                        ? "jarvis-inbox-item-active"
                        : ""
                    }`}
                    onClick={() => setSelectedId(conversation.id)}
                  >
                    <div className="jarvis-inbox-item-top">
                      <span className="jarvis-inbox-item-name">
                        {conversation.contact_name}
                      </span>
                      <span className="jarvis-inbox-item-time">
                        {formatRelativeTime(conversation.last_message_at)}
                      </span>
                    </div>
                    <div className="jarvis-inbox-item-bottom">
                      <span className="jarvis-pill jarvis-pill-grey">
                        {CHANNEL_LABELS[conversation.channel]}
                      </span>
                      <span className="jarvis-inbox-item-preview">
                        {conversation.last_message_preview || "No messages"}
                      </span>
                      {conversation.unread_count > 0 ? (
                        <span className="jarvis-inbox-unread">
                          {conversation.unread_count}
                        </span>
                      ) : null}
                    </div>
                  </button>
                </li>
              ))}
            </ul>
          )}
        </aside>

        <section
          className={`jarvis-inbox-thread ${
            selectedId ? "jarvis-inbox-thread-visible-mobile" : ""
          }`}
        >
          {selectedId ? (
            <>
              <button
                type="button"
                className="jarvis-button jarvis-button-ghost jarvis-inbox-back"
                onClick={() => setSelectedId(null)}
              >
                ← Back to inbox
              </button>
              <ConversationThread
                conversationId={selectedId}
                onUpdated={loadConversations}
                onDeleted={() => {
                  setSelectedId(null);
                  void loadConversations();
                }}
              />
            </>
          ) : (
            <div className="jarvis-inbox-placeholder">
              <p className="jarvis-panel-title">Select a conversation</p>
              <p className="jarvis-muted">
                Choose a thread from the list
                {selectedConversation ? ` with ${selectedConversation.contact_name}` : ""}
                , or start a new one.
              </p>
            </div>
          )}
        </section>
      </div>
    </div>
  );
}
