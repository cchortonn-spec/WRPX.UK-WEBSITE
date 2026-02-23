"use client";

import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/lib/site-config";
import { nav } from "@/lib/nav";
import { useState } from "react";

export function Header() {
  const [locationsOpen, setLocationsOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="container mx-auto flex min-h-20 max-w-6xl items-center justify-between gap-4 px-4 py-3 md:min-h-28">
        <Link href="/" className="logo-link flex items-center transition-colors duration-200 hover:text-accent-pink active:text-accent-pink">
          <Image
            src="/logo.png"
            alt="WRPX"
            width={360}
            height={108}
            className="h-16 w-auto md:h-24"
            priority
          />
        </Link>

        <a
          href={`tel:${siteConfig.phoneE164}`}
          className="hidden text-muted hover:text-foreground sm:block"
        >
          {siteConfig.phone}
        </a>

        <button
          type="button"
          onClick={() => setMobileOpen(!mobileOpen)}
          className="flex flex-col gap-1.5 rounded p-2 text-foreground transition-colors duration-200 hover:text-accent-pink active:text-accent-pink lg:hidden"
          aria-expanded={mobileOpen}
          aria-label="Toggle menu"
        >
          <span className="block h-0.5 w-6 bg-current" />
          <span className="block h-0.5 w-6 bg-current" />
          <span className="block h-0.5 w-6 bg-current" />
        </button>

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Main">
          {nav.main.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-muted hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
          <div className="relative">
            <button
              type="button"
              onClick={() => setLocationsOpen(!locationsOpen)}
              className="text-sm text-muted hover:text-foreground"
              aria-expanded={locationsOpen}
              aria-haspopup="true"
            >
              Locations
            </button>
            {locationsOpen && (
              <>
                <div
                  className="fixed inset-0 z-40"
                  aria-hidden
                  onClick={() => setLocationsOpen(false)}
                />
                <ul
                  className="absolute right-0 top-full z-50 mt-1 min-w-[180px] rounded-md border border-border bg-card py-2 shadow-lg"
                  role="menu"
                >
                  {nav.locations.map((item) => (
                    <li key={item.href} role="none">
                      <Link
                        href={item.href}
                        className="block px-4 py-2 text-sm text-card-foreground hover:bg-background hover:text-accent"
                        role="menuitem"
                        onClick={() => setLocationsOpen(false)}
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </>
            )}
          </div>
        </nav>

        <Link
          href="/contact/"
          className="btn-primary hidden shrink-0 sm:inline-block"
        >
          Get a Free Quote
        </Link>
      </div>

      {mobileOpen && (
        <div className="border-t border-border bg-card lg:hidden">
          <div className="container mx-auto max-w-6xl px-4 py-4">
            <ul className="space-y-1">
              {nav.main.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="block py-2 text-card-foreground hover:text-accent"
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li className="pt-2 text-sm text-muted">Locations</li>
              {nav.locations.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="block py-1.5 pl-4 text-sm text-card-foreground hover:text-accent"
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </header>
  );
}
