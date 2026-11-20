"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { nav } from "@/lib/nav";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { useState } from "react";
import { useImmersiveHero } from "@/lib/hero-config";
import { ChristmasBanner, ChristmasLights } from "@/components/ChristmasOverlay";

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

function MobileMenu({ onClose }: { onClose: () => void }) {
  const [kitchensOpen, setKitchensOpen] = useState(false);
  const [furnitureOpen, setFurnitureOpen] = useState(false);
  const [commercialOpen, setCommercialOpen] = useState(false);
  const [locationsOpen, setLocationsOpen] = useState(false);

  return (
    <div className="border-t border-border bg-card lg:hidden">
      <div className="container mx-auto max-w-6xl px-4 py-4">
        <ul className="space-y-3">
          <li>
            <Link
              href="/contact/"
              className="block py-2 text-base font-medium text-card-foreground hover:text-accent"
              onClick={onClose}
            >
              Contact
            </Link>
          </li>
          <li>
            <Link
              href="/gallery/"
              className="block py-2 text-base font-medium text-card-foreground hover:text-accent"
              onClick={onClose}
            >
              Gallery
            </Link>
          </li>
          <li>
            <Link
              href="/about/"
              className="block py-2 text-base font-medium text-card-foreground hover:text-accent"
              onClick={onClose}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/our-process/"
              className="block py-2 text-base font-medium text-card-foreground hover:text-accent"
              onClick={onClose}
            >
              Our Process
            </Link>
          </li>
          <li>
            <Link
              href="/blog/"
              className="block py-2 text-base font-medium text-card-foreground hover:text-accent"
              onClick={onClose}
            >
              Blog
            </Link>
          </li>

          <li className="border-t border-border pt-3">
            <button
              type="button"
              onClick={() => setKitchensOpen(!kitchensOpen)}
              className="flex w-full items-center justify-between py-2 text-base font-medium text-card-foreground"
              aria-expanded={kitchensOpen}
            >
              Kitchens
              <span className="text-muted">{kitchensOpen ? "−" : "+"}</span>
            </button>
            {kitchensOpen && (
              <ul className="mt-1 space-y-1 pl-4">
                <li>
                  <Link
                    href="/kitchen-wrapping/"
                    className="block py-1.5 text-sm text-card-foreground hover:text-accent"
                    onClick={onClose}
                  >
                    Kitchen Wrapping
                  </Link>
                </li>
                <li>
                  <Link
                    href="/kitchen-island-wrapping/"
                    className="block py-1.5 text-sm text-card-foreground hover:text-accent"
                    onClick={onClose}
                  >
                    Kitchen Island Wrapping
                  </Link>
                </li>
                <li>
                  <Link
                    href="/kitchen-door-wrapping/"
                    className="block py-1.5 text-sm text-card-foreground hover:text-accent"
                    onClick={onClose}
                  >
                    Kitchen Door Wrapping
                  </Link>
                </li>
                <li>
                  <Link
                    href="/splashback-wrapping/"
                    className="block py-1.5 text-sm text-card-foreground hover:text-accent"
                    onClick={onClose}
                  >
                    Splashback Wrapping
                  </Link>
                </li>
                <li>
                  <Link
                    href="/appliance-wrapping/"
                    className="block py-1.5 text-sm text-card-foreground hover:text-accent"
                    onClick={onClose}
                  >
                    Appliance Wrapping
                  </Link>
                </li>
                <li>
                  <Link
                    href="/worktop-wrapping/"
                    className="block py-1.5 text-sm text-card-foreground hover:text-accent"
                    onClick={onClose}
                  >
                    Worktop Wrapping
                  </Link>
                </li>
                <li>
                  <Link
                    href="/wrap-visualiser/"
                    className="block py-1.5 text-sm text-card-foreground hover:text-accent"
                    onClick={onClose}
                  >
                    Wrap Visualiser
                  </Link>
                </li>
                <li>
                  <Link
                    href="/kitchen-wrapping-quote/"
                    className="block py-1.5 text-sm text-card-foreground hover:text-accent"
                    onClick={onClose}
                  >
                    Get a Quote
                  </Link>
                </li>
                <li>
                  <Link
                    href="/kitchen-wrapping-cost/"
                    className="block py-1.5 text-sm text-card-foreground hover:text-accent"
                    onClick={onClose}
                  >
                    Cost Guide
                  </Link>
                </li>
              </ul>
            )}
          </li>

          <li className="border-t border-border pt-3">
            <button
              type="button"
              onClick={() => setFurnitureOpen(!furnitureOpen)}
              className="flex w-full items-center justify-between py-2 text-base font-medium text-card-foreground"
              aria-expanded={furnitureOpen}
            >
              Furniture & Interiors
              <span className="text-muted">{furnitureOpen ? "−" : "+"}</span>
            </button>
            {furnitureOpen && (
              <ul className="mt-1 space-y-1 pl-4">
                <li>
                  <Link
                    href="/bedroom-wardrobe-wrapping/"
                    className="block py-1.5 text-sm text-card-foreground hover:text-accent"
                    onClick={onClose}
                  >
                    Bedroom Wardrobe Wrapping
                  </Link>
                </li>
                <li>
                  <Link
                    href="/bathroom-cabinet-wrapping/"
                    className="block py-1.5 text-sm text-card-foreground hover:text-accent"
                    onClick={onClose}
                  >
                    Bathroom Cabinet Wrapping
                  </Link>
                </li>
                <li>
                  <Link
                    href="/furniture-wrapping/"
                    className="block py-1.5 text-sm text-card-foreground hover:text-accent"
                    onClick={onClose}
                  >
                    Furniture Wrapping
                  </Link>
                </li>
              </ul>
            )}
          </li>

          <li className="border-t border-border pt-3">
            <button
              type="button"
              onClick={() => setCommercialOpen(!commercialOpen)}
              className="flex w-full items-center justify-between py-2 text-base font-medium text-card-foreground"
              aria-expanded={commercialOpen}
            >
              Commercial & Business
              <span className="text-muted">{commercialOpen ? "−" : "+"}</span>
            </button>
            {commercialOpen && (
              <ul className="mt-1 space-y-1 pl-4">
                <li>
                  <Link
                    href="/architectural-vinyl-film/"
                    className="block py-1.5 text-sm text-card-foreground hover:text-accent"
                    onClick={onClose}
                  >
                    Architectural Vinyl Film
                  </Link>
                </li>
                <li>
                  <Link
                    href="/architectural-vinyl-finishes/"
                    className="block py-1.5 text-sm text-card-foreground hover:text-accent"
                    onClick={onClose}
                  >
                    Vinyl Finishes
                  </Link>
                </li>
                <li>
                  <Link
                    href="/window-film/"
                    className="block py-1.5 text-sm text-card-foreground hover:text-accent"
                    onClick={onClose}
                  >
                    Window Film
                  </Link>
                </li>
                <li>
                  <Link
                    href="/commercial-installation/"
                    className="block py-1.5 text-sm text-card-foreground hover:text-accent"
                    onClick={onClose}
                  >
                    Commercial & Retail
                  </Link>
                </li>
                <li>
                  <Link
                    href="/white-label-graphics-installation/"
                    className="block py-1.5 text-sm text-card-foreground hover:text-accent"
                    onClick={onClose}
                  >
                    White-Label Install
                  </Link>
                </li>
                <li>
                  <Link
                    href="/kitchen-wrapping-training/"
                    className="block py-1.5 text-sm text-card-foreground hover:text-accent"
                    onClick={onClose}
                  >
                    Kitchen Wrapping Training
                  </Link>
                </li>
              </ul>
            )}
          </li>

          <li className="border-t border-border pt-3">
            <button
              type="button"
              onClick={() => setLocationsOpen(!locationsOpen)}
              className="flex w-full items-center justify-between py-2 text-base font-medium text-card-foreground"
              aria-expanded={locationsOpen}
            >
              Locations
              <span className="text-muted">{locationsOpen ? "−" : "+"}</span>
            </button>
            {locationsOpen && (
              <ul className="mt-1 space-y-1 pl-4">
                {nav.locations.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="block py-1.5 text-sm text-card-foreground hover:text-accent"
                      onClick={onClose}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>

          <li className="border-t border-border pt-3">
            <Link
              href="/faq/"
              className="block py-2 text-base font-medium text-card-foreground hover:text-accent"
              onClick={onClose}
            >
              FAQ
            </Link>
          </li>
        </ul>
        <div className="mt-6 border-t border-border pt-6">
          <WhatsAppButton label="Chat on WhatsApp" className="w-full justify-center" />
        </div>
      </div>
    </div>
  );
}

export function Header() {
  const pathname = usePathname();
  const overHero = pathname === "/" && useImmersiveHero;
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
    <header
      className={
        overHero && !mobileOpen
          ? "site-header-over-hero backdrop-blur-xl backdrop-saturate-150"
          : "sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80"
      }
      style={
        overHero && !mobileOpen
          ? {
              WebkitBackdropFilter: "blur(40px) saturate(1.8)",
              backdropFilter: "blur(40px) saturate(1.8)",
            }
          : undefined
      }
    >
      <ChristmasBanner />
      <div className="site-header-bar container mx-auto flex min-h-20 max-w-6xl items-center justify-between gap-4 px-4 py-3 md:min-h-28">
        <Link href="/" className="logo-link flex shrink-0 items-center transition-colors duration-200 hover:text-accent-pink active:text-accent-pink">
          <Image
            src="/logo.png"
            alt="WRPX"
            width={360}
            height={108}
            className="site-header-logo h-16 w-auto md:h-24"
            priority
          />
        </Link>

        <button
          type="button"
          onClick={() => setMobileOpen(!mobileOpen)}
          className="site-header-menu-btn flex flex-col gap-1.5 rounded p-2 text-foreground transition-colors duration-200 hover:text-accent-pink active:text-accent-pink lg:hidden"
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

        <div className="hidden w-10 lg:block" aria-hidden="true" />
      </div>

      {mobileOpen && (
        <MobileMenu onClose={() => setMobileOpen(false)} />
      )}
      <ChristmasLights />
    </header>
  );
}
