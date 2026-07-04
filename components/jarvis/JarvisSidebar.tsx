"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_ITEMS = [
  { href: "/jarvis", label: "Home", enabled: true },
  { href: "/jarvis/leads", label: "Leads", enabled: true },
  { href: "/jarvis/inbox", label: "Inbox", enabled: true },
  { href: "/jarvis/projects", label: "Projects", enabled: false },
  { href: "/jarvis/quotes", label: "Quotes", enabled: false },
  { href: "/jarvis/invoices", label: "Invoices", enabled: false },
  { href: "/jarvis/calendar", label: "Calendar", enabled: false },
  { href: "/jarvis/materials", label: "Materials", enabled: false },
  { href: "/jarvis/analytics", label: "Analytics", enabled: false },
  { href: "/jarvis/settings", label: "Settings", enabled: false },
];

export function JarvisSidebar() {
  const pathname = usePathname();

  return (
    <aside className="jarvis-sidebar">
      <div className="jarvis-brand">
        <p className="jarvis-brand-eyebrow">WRPX</p>
        <p className="jarvis-brand-title">Jarvis</p>
      </div>

      <nav className="jarvis-nav" aria-label="Jarvis navigation">
        {NAV_ITEMS.map((item) => {
          const isActive =
            item.href === "/jarvis"
              ? pathname === "/jarvis"
              : pathname?.startsWith(item.href);

          if (!item.enabled) {
            return (
              <span
                key={item.href}
                className="jarvis-nav-link jarvis-nav-link-disabled"
              >
                {item.label}
                <span className="jarvis-nav-badge">Soon</span>
              </span>
            );
          }

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`jarvis-nav-link ${isActive ? "jarvis-nav-link-active" : ""}`}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
