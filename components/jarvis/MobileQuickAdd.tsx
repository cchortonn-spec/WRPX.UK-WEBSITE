"use client";

type MobileQuickAddProps = {
  onAddLead: () => void;
  onAddTask?: () => void;
};

export function MobileQuickAdd({ onAddLead, onAddTask }: MobileQuickAddProps) {
  return (
    <div className="jarvis-quick-add jarvis-mobile-only">
      <button
        type="button"
        className="jarvis-quick-add-button"
        aria-label="Quick add"
        onClick={onAddLead}
      >
        +
      </button>
      {onAddTask ? (
        <button
          type="button"
          className="jarvis-quick-add-secondary"
          onClick={onAddTask}
        >
          Add task
        </button>
      ) : null}
    </div>
  );
}
