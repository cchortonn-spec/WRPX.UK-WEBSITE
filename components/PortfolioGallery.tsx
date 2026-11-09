"use client";

import { useState } from "react";
import Image from "next/image";
import {
  portfolioCategories,
  type PortfolioCategory,
  type PortfolioPhoto,
} from "@/lib/portfolio";

type Filter = PortfolioCategory | "all";
type Tab = { id: Filter; label: string; count: number };

export function PortfolioGallery({ photos }: { photos: PortfolioPhoto[] }) {
  const [active, setActive] = useState<Filter>("all");

  const tabs: Tab[] = [
    { id: "all", label: "All work", count: photos.length } satisfies Tab,
    ...portfolioCategories.map((c): Tab => ({
      id: c.id,
      label: c.label,
      count: photos.filter((p) => p.categories.includes(c.id)).length,
    })),
  ].filter((t) => t.count > 0);

  const visible =
    active === "all" ? photos : photos.filter((p) => p.categories.includes(active));

  return (
    <>
      <section className="border-b border-border py-6">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="portfolio-tabs" role="toolbar" aria-label="Filter projects by type">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                type="button"
                className="portfolio-tab"
                aria-pressed={active === tab.id}
                onClick={(e) => {
                  setActive(tab.id);
                  e.currentTarget.scrollIntoView({ inline: "nearest", block: "nearest", behavior: "smooth" });
                }}
              >
                {tab.label}
                <span className="portfolio-tab-count">{tab.count}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-16">
        <div className="container mx-auto max-w-6xl">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {visible.map((item) => (
              <figure key={item.src} className="card-float overflow-hidden">
                <div className="relative aspect-[4/3]">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <figcaption className="border-t border-border bg-card p-4 text-sm text-muted">
                  <span className="font-medium text-foreground">{item.caption}</span>
                  {item.projectLine && (
                    <span className="mt-1 block text-muted">{item.projectLine}</span>
                  )}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
