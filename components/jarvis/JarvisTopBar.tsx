"use client";

import { useEffect, useState } from "react";
import { UserButton } from "@clerk/nextjs";
import { ROLE_LABELS } from "@/lib/jarvis-roles";
import type { JarvisRole } from "@/lib/jarvis-roles";

type JarvisTopBarProps = {
  title: string;
  action?: React.ReactNode;
};

export function JarvisTopBar({ title, action }: JarvisTopBarProps) {
  const [role, setRole] = useState<JarvisRole | null>(null);

  useEffect(() => {
    fetch("/api/jarvis/me/", { cache: "no-store" })
      .then((response) => (response.ok ? response.json() : null))
      .then((data) => {
        if (data?.user?.role) {
          setRole(data.user.role as JarvisRole);
        }
      })
      .catch(() => undefined);
  }, []);

  return (
    <header className="jarvis-topbar">
      <h1 className="jarvis-topbar-title">{title}</h1>
      <div className="jarvis-topbar-actions">
        {action}
        {role ? (
          <span className="jarvis-role-badge">{ROLE_LABELS[role]}</span>
        ) : null}
        <UserButton
          appearance={{
            elements: {
              userButtonAvatarBox: "jarvis-user-button-avatar",
              userButtonTrigger: "jarvis-user-button",
            },
          }}
        />
      </div>
    </header>
  );
}
