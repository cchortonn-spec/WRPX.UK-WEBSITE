"use client";

import { useState } from "react";

type ConfirmDeleteDialogProps = {
  itemLabel: string;
  description: string;
  onConfirm: () => Promise<void>;
  compact?: boolean;
  onCancel?: () => void;
};

type Step = "idle" | "warning" | "confirm";

export function ConfirmDeleteDialog({
  itemLabel,
  description,
  onConfirm,
  compact = false,
  onCancel,
}: ConfirmDeleteDialogProps) {
  const [step, setStep] = useState<Step>("idle");
  const [typed, setTyped] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [error, setError] = useState("");

  function reset() {
    setStep("idle");
    setTyped("");
    setError("");
    onCancel?.();
  }

  async function handleDelete() {
    if (typed !== "DELETE" || isDeleting) return;

    setIsDeleting(true);
    setError("");
    try {
      await onConfirm();
      reset();
    } catch {
      setError("Could not delete. Please try again.");
    } finally {
      setIsDeleting(false);
    }
  }

  if (step === "idle") {
    return (
      <button
        type="button"
        className={
          compact ? "jarvis-delete-trigger-compact" : "jarvis-delete-trigger"
        }
        onClick={() => setStep("warning")}
      >
        Delete
      </button>
    );
  }

  if (step === "warning") {
    return (
      <div
        className={`jarvis-delete-panel ${compact ? "jarvis-delete-panel-compact" : ""}`}
      >
        <p className="jarvis-delete-title">Delete {itemLabel}?</p>
        <p className="jarvis-delete-description">{description}</p>
        <p className="jarvis-delete-note">This cannot be undone.</p>
        <div className="jarvis-button-row">
          <button
            type="button"
            className="jarvis-button jarvis-button-ghost"
            onClick={reset}
          >
            Cancel
          </button>
          <button
            type="button"
            className="jarvis-button jarvis-button-danger"
            onClick={() => setStep("confirm")}
          >
            Continue
          </button>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`jarvis-delete-panel jarvis-delete-panel-danger ${
        compact ? "jarvis-delete-panel-compact" : ""
      }`}
    >
      <p className="jarvis-delete-title">Final confirmation</p>
      <p className="jarvis-delete-description">
        Type <strong>DELETE</strong> below to permanently remove {itemLabel}.
      </p>
      <input
        className="jarvis-input jarvis-delete-input"
        value={typed}
        onChange={(event) => setTyped(event.target.value)}
        placeholder="Type DELETE"
        autoComplete="off"
        aria-label="Type DELETE to confirm"
      />
      <div className="jarvis-button-row">
        <button
          type="button"
          className="jarvis-button jarvis-button-ghost"
          onClick={reset}
          disabled={isDeleting}
        >
          Cancel
        </button>
        <button
          type="button"
          className="jarvis-button jarvis-button-danger"
          onClick={handleDelete}
          disabled={typed !== "DELETE" || isDeleting}
        >
          {isDeleting ? "Deleting..." : "Permanently delete"}
        </button>
      </div>
      {error ? <p className="jarvis-error">{error}</p> : null}
    </div>
  );
}
