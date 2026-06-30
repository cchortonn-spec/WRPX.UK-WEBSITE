"use client";

type JarvisTopBarProps = {
  title: string;
  onLogout: () => void;
  action?: React.ReactNode;
};

export function JarvisTopBar({ title, onLogout, action }: JarvisTopBarProps) {
  return (
    <header className="jarvis-topbar">
      <h1 className="jarvis-topbar-title">{title}</h1>
      <div className="jarvis-topbar-actions">
        {action}
        <button
          type="button"
          className="jarvis-button jarvis-button-ghost"
          onClick={onLogout}
        >
          Log out
        </button>
      </div>
    </header>
  );
}
