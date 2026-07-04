"use client";

import { usePathname } from "next/navigation";
import { JarvisAppShell } from "@/components/jarvis/JarvisAppShell";

const PAGE_TITLES: Record<string, string> = {
  "/jarvis": "Home",
  "/jarvis/": "Home",
  "/jarvis/leads": "Leads",
  "/jarvis/leads/": "Leads",
  "/jarvis/inbox": "Inbox",
  "/jarvis/inbox/": "Inbox",
};

export function JarvisLayoutClient({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const pageTitle = PAGE_TITLES[pathname ?? ""] ?? "Jarvis";

  return <JarvisAppShell pageTitle={pageTitle}>{children}</JarvisAppShell>;
}
