"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { ConfirmDeleteDialog } from "@/components/jarvis/ConfirmDeleteDialog";
import {
  CHANNEL_LABELS,
  type JarvisConversationDetail,
  type JarvisMessage,
} from "@/lib/jarvis-types";

type ConversationThreadProps = {
  conversationId: string;
  compact?: boolean;
  onUpdated?: () => void;
  onDeleted?: () => void;
};

function formatMessageTime(value: string) {
  return new Date(value).toLocaleString("en-GB", {
    day: "2-digit",
    month: "short",
    hour: "2-digit",
    minute: "2-digit",
  });
}

const STATUS_LABELS: Record<string, string> = {
  pending: "Sending…",
  sent: "Sent",
  delivered: "Delivered",
  read: "Read",
  failed: "Failed to send",
};

function MessageStatusDot({ status }: { status: string }) {
  const className =
    status === "failed"
      ? "jarvis-msg-status jarvis-msg-status-failed"
      : status === "delivered"
        ? "jarvis-msg-status jarvis-msg-status-delivered"
        : status === "read"
          ? "jarvis-msg-status jarvis-msg-status-read"
          : "jarvis-msg-status jarvis-msg-status-sent";

  return (
    <span className={className} title={STATUS_LABELS[status] ?? status}>
      {status === "failed" ? "✕" : status === "read" ? "✓✓" : "✓"}
    </span>
  );
}

function MessageBubble({ message }: { message: JarvisMessage }) {
  const isOutbound = message.direction === "outbound";

  return (
    <div
      className={`jarvis-message-bubble ${
        isOutbound
          ? "jarvis-message-bubble-outbound"
          : "jarvis-message-bubble-inbound"
      }`}
    >
      {message.body ? <p>{message.body}</p> : null}
      {message.media_url ? (
        <a
          href={message.media_url}
          target="_blank"
          rel="noopener noreferrer"
          className="jarvis-message-media"
        >
          {message.media_type?.startsWith("image") ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={message.media_url} alt="Attachment" />
          ) : (
            "View attachment"
          )}
        </a>
      ) : null}
      <div className="jarvis-message-footer">
        <time className="jarvis-message-time" dateTime={message.created_at}>
          {formatMessageTime(message.created_at)}
        </time>
        {isOutbound ? <MessageStatusDot status={message.status} /> : null}
      </div>
    </div>
  );
}

export function ConversationThread({
  conversationId,
  compact = false,
  onUpdated,
  onDeleted,
}: ConversationThreadProps) {
  const [conversation, setConversation] =
    useState<JarvisConversationDetail | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const [draft, setDraft] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [templates, setTemplates] = useState<
    Array<{
      id: string;
      label: string;
      description: string;
      parameterLabels: string[];
    }>
  >([]);
  const [selectedTemplateId, setSelectedTemplateId] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const loadConversation = useCallback(async () => {
    const response = await fetch(`/api/jarvis/conversations/${conversationId}/`, {
      cache: "no-store",
    });
    if (!response.ok) throw new Error("Could not load conversation");
    const data = await response.json();
    setConversation(data.conversation as JarvisConversationDetail);
  }, [conversationId]);

  useEffect(() => {
    setIsLoading(true);
    loadConversation()
      .catch(() => setError("Could not load conversation."))
      .finally(() => setIsLoading(false));
  }, [loadConversation]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [conversation?.messages]);

  useEffect(() => {
    if (conversation?.channel !== "whatsapp") return;
    fetch("/api/jarvis/whatsapp/templates/", { cache: "no-store" })
      .then((response) => (response.ok ? response.json() : null))
      .then((data) => {
        if (data?.templates) {
          setTemplates(data.templates);
        }
      })
      .catch(() => {
        // Templates are optional — freeform WhatsApp still works in 24h window
      });
  }, [conversation?.channel]);

  async function handleSendTemplate() {
    if (!selectedTemplateId || isSending) return;

    setIsSending(true);
    try {
      const response = await fetch(
        `/api/jarvis/conversations/${conversationId}/messages/`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            template_id: selectedTemplateId,
            template_params: [
              conversation?.contact_name.trim().split(/\s+/)[0] || "there",
            ],
          }),
        }
      );
      if (!response.ok) throw new Error();
      setSelectedTemplateId("");
      await loadConversation();
      onUpdated?.();
    } catch {
      setError("Could not send template.");
    } finally {
      setIsSending(false);
    }
  }

  async function handleSend(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!draft.trim() || isSending) return;

    setIsSending(true);
    try {
      const response = await fetch(
        `/api/jarvis/conversations/${conversationId}/messages/`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ body: draft }),
        }
      );
      if (!response.ok) throw new Error();
      setDraft("");
      await loadConversation();
      onUpdated?.();
    } catch {
      setError("Could not send message.");
    } finally {
      setIsSending(false);
    }
  }

  async function handleDeleteConversation() {
    const response = await fetch(`/api/jarvis/conversations/${conversationId}/`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ confirm: "DELETE" }),
    });
    if (!response.ok) throw new Error();
    onDeleted?.();
  }

  if (isLoading) {
    return <p className="jarvis-muted">Loading conversation...</p>;
  }

  if (error && !conversation) {
    return <p className="jarvis-error">{error}</p>;
  }

  if (!conversation) {
    return <p className="jarvis-muted">Conversation not found.</p>;
  }

  return (
    <div
      className={`jarvis-thread ${compact ? "jarvis-thread-compact" : ""}`}
    >
      <header className="jarvis-thread-header">
        <div>
          <h2 className="jarvis-thread-title">{conversation.contact_name}</h2>
          <p className="jarvis-muted">
            {CHANNEL_LABELS[conversation.channel]}
            {conversation.contact_phone
              ? ` · ${conversation.contact_phone}`
              : ""}
            {conversation.lead ? ` · Lead: ${conversation.lead.name}` : ""}
          </p>
        </div>
        <ConfirmDeleteDialog
          itemLabel={`conversation with ${conversation.contact_name}`}
          description="All messages in this thread will be removed from Jarvis. The customer can still message you on WhatsApp."
          onConfirm={handleDeleteConversation}
        />
      </header>

      <div className="jarvis-thread-messages">
        {conversation.messages.length === 0 ? (
          <p className="jarvis-muted jarvis-thread-empty">
            No messages yet. Send the first one below.
          </p>
        ) : (
          conversation.messages.map((message) => (
            <MessageBubble key={message.id} message={message} />
          ))
        )}
        <div ref={messagesEndRef} />
      </div>

      {conversation.channel === "whatsapp" && templates.length > 0 ? (
        <div className="jarvis-thread-templates">
          <label htmlFor={`${conversationId}-template`} className="jarvis-label">
            Send approved template
          </label>
          <div className="jarvis-thread-template-row">
            <select
              id={`${conversationId}-template`}
              className="jarvis-select"
              value={selectedTemplateId}
              onChange={(event) => setSelectedTemplateId(event.target.value)}
            >
              <option value="">Choose a template...</option>
              {templates.map((template) => (
                <option key={template.id} value={template.id}>
                  {template.label}
                </option>
              ))}
            </select>
            <button
              type="button"
              className="jarvis-button jarvis-button-secondary"
              disabled={isSending || !selectedTemplateId}
              onClick={handleSendTemplate}
            >
              {isSending ? "Sending..." : "Send template"}
            </button>
          </div>
          {selectedTemplateId ? (
            <p className="jarvis-muted">
              {
                templates.find((template) => template.id === selectedTemplateId)
                  ?.description
              }
            </p>
          ) : null}
        </div>
      ) : null}

      <form onSubmit={handleSend} className="jarvis-thread-compose">
        <textarea
          className="jarvis-textarea jarvis-thread-input"
          value={draft}
          onChange={(e) => setDraft(e.target.value)}
          placeholder="Type a message..."
          rows={compact ? 2 : 3}
        />
        <button
          type="submit"
          className="jarvis-button jarvis-button-primary"
          disabled={isSending || !draft.trim()}
        >
          {isSending ? "Sending..." : "Send"}
        </button>
      </form>

      {error ? <p className="jarvis-error">{error}</p> : null}
    </div>
  );
}
