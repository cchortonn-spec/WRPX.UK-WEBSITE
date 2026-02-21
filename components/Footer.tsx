import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/lib/site-config";
import { nav } from "@/lib/nav";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-card">
      <div className="container mx-auto max-w-6xl px-4 py-12">
        <div className="grid gap-8 sm:grid-cols-3">
          <div>
            <h3 className="mb-3 text-sm font-semibold text-card-foreground">
              Services
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/kitchen-wrapping/" className="text-muted hover:text-accent">
                  Kitchen Wrapping
                </Link>
              </li>
              <li>
                <Link href="/worktop-wrapping/" className="text-muted hover:text-accent">
                  Worktop Wrapping
                </Link>
              </li>
              <li>
                <Link href="/furniture-wrapping/" className="text-muted hover:text-accent">
                  Furniture Wrapping
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-3 text-sm font-semibold text-card-foreground">
              Areas served
            </h3>
            <ul className="space-y-2">
              {nav.locations.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-muted hover:text-accent">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-3 text-sm font-semibold text-card-foreground">
              Contact
            </h3>
            <p className="text-muted">
              <a href={`tel:${siteConfig.phoneE164}`} className="hover:text-accent">
                {siteConfig.phone}
              </a>
            </p>
            <p className="mt-2 text-muted">
              <a href={`mailto:${siteConfig.email}`} className="hover:text-accent">
                {siteConfig.email}
              </a>
            </p>
            <p className="mt-2 text-sm text-muted">
              <Link href="/contact/" className="hover:text-accent">
                Free quote
              </Link>
            </p>
          </div>
        </div>
        <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-border pt-8 text-sm text-muted">
          <div className="flex items-center gap-4">
            <Link href="/">
              <Image
                src="/logo.png"
                alt="WRPX"
                width={80}
                height={24}
                className="h-6 w-auto opacity-90"
              />
            </Link>
            <span>© {year} {siteConfig.name}</span>
          </div>
          <Link href="/privacy/" className="hover:text-foreground">
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}
