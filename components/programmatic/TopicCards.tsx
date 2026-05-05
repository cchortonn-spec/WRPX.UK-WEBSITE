import Link from "next/link";
import type { TopicCard } from "@/lib/programmatic-pages";

type TopicCardsProps = {
  cards: TopicCard[];
  citySlug: string;
  cityName: string;
};

export default function TopicCards({ cards, citySlug, cityName }: TopicCardsProps) {
  return (
    <section className="border-b border-border px-4 py-12">
      <div className="container mx-auto max-w-6xl">
        <h2 className="mb-6 text-xs font-semibold uppercase tracking-widest text-accent">
          Related Services in {cityName}
        </h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {cards.map((card) => (
            <Link
              key={card.title}
              href={`/locations/${citySlug}/${card.serviceSlug}`}
              className="rounded-lg border border-border bg-card p-6 transition-colors hover:border-accent"
            >
              <p className="font-bold text-foreground">{card.title}</p>
              <p className="mt-1 text-sm text-muted">{card.desc}</p>
              <p className="mt-3 text-sm font-semibold text-accent">Explore</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
