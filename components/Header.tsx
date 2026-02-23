"use client";

import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/lib/site-config";
import { nav } from "@/lib/nav";
import { useState } from "react";

function Dropdown({
  label,
  links,
  open,
  onToggle,
  onClose,
}: {
  label: string;
  links: readonly { label: string; href: string }[];
  open: boolean;
  onToggle: () => void;
  onClose: () => void;
}) {
  return (
    <div className="relative">
      <button
        type="button"
        onClick={onToggle}
        className="text-sm text-muted hover:text-foreground"
        aria-expanded={open}
        aria-haspopup="true"
      >
        {label}
      </button>
      {open && (
        <>
          <div
            className="fixed inset-0 z-40"
            aria-hidden
            onClick={onClose}
          />
          <ul
            className="absolute left-0 top-full z-50 mt-1 min-w-[180px] rounded-md border border-border bg-card py-2 shadow-lg"
            role="menu"
          >
            {links.map((item) => (
              <li key={item.href} role="none">
                <Link
                  href={item.href}
                  className="block px-4 py-2 text-sm text-card-foreground hover:bg-background hover:text-accent"
                  role="menuitem"
                  onClick={onClose}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}

export function Header() {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [locationsOpen, setLocationsOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const closeAll = () => {
    setServicesOpen(false);
    setAboutOpen(false);
    setLocationsOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="container mx-auto flex min-h-20 max-w-6xl items-center justify-between gap-4 px-4 py-3 md:min-h-28">
        <Link href="/" className="logo-link flex shrink-0 items-center transition-colors duration-200 hover:text-accent-pink active:text-accent-pink">
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
          className="hidden shrink-0 text-muted hover:text-foreground sm:block"
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

        <nav className="hidden items-center gap-5 lg:flex" aria-label="Main">
          <Dropdown
            label="Services"
            links={nav.services}
            open={servicesOpen}
            onToggle={() => {
              setAboutOpen(false);
              setLocationsOpen(false);
              setServicesOpen((v) => !v);
            }}
            onClose={closeAll}
          />
          <Link
            href={nav.main[0].href}
            className="text-sm text-muted hover:text-foreground"
          >
            {nav.main[0].label}
          </Link>
          <Dropdown
            label="About"
            links={nav.about}
            open={aboutOpen}
            onToggle={() => {
              setServicesOpen(false);
              setLocationsOpen(false);
              setAboutOpen((v) => !v);
            }}
            onClose={closeAll}
          />
          <Dropdown
            label="Locations"
            links={nav.locations}
            open={locationsOpen}
            onToggle={() => {
              setServicesOpen(false);
              setAboutOpen(false);
              setLocationsOpen((v) => !v);
            }}
            onClose={closeAll}
          />
          <Link
            href={nav.main[1].href}
            className="text-sm text-muted hover:text-foreground"
          >
            {nav.main[1].label}
          </Link>
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
              <li className="pt-2 text-sm font-medium text-muted">Services</li>
              {nav.services.map((item) => (
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
              <li>
                <Link
                  href={nav.main[0].href}
                  className="block py-2 text-card-foreground hover:text-accent"
                  onClick={() => setMobileOpen(false)}
                >
                  {nav.main[0].label}
                </Link>
              </li>
              <li className="pt-2 text-sm font-medium text-muted">About</li>
              {nav.about.map((item) => (
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
              <li className="pt-2 text-sm font-medium text-muted">Locations</li>
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
              <li>
                <Link
                  href={nav.main[1].href}
                  className="block py-2 text-card-foreground hover:text-accent"
                  onClick={() => setMobileOpen(false)}
                >
                  {nav.main[1].label}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </header>
  );
}
