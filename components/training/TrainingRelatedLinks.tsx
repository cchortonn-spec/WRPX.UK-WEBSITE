import Link from "next/link";
import { trainingProgram } from "@/lib/training-program";

const HUB_HREF = "/kitchen-wrapping-training/";

type TrainingRelatedLinksProps = {
  /** Current page path — excluded from the grid */
  currentHref: string;
};

export function TrainingRelatedLinks({ currentHref }: TrainingRelatedLinksProps) {
  const isHub = currentHref === HUB_HREF;
  const pages = trainingProgram.relatedPages.filter(
    (page) => page.href !== currentHref
  );

  return (
    <section className="border-t border-border px-4 py-12">
      <div className="container mx-auto max-w-3xl space-y-8">
        {!isHub ? (
          <Link
            href={HUB_HREF}
            className="training-hub-cta block transition hover:border-accent/50"
          >
            <p className="text-xs font-semibold uppercase tracking-widest text-accent">
              Start here
            </p>
            <p className="mt-2 text-xl font-bold text-foreground">
              Kitchen Wrapping Training — full offer
            </p>
            <p className="mt-2 text-sm text-muted leading-relaxed">
              Live 5-day install, business setup, {trainingProgram.priceDisplay}{" "}
              all-in, and how to apply. This is the main sales page.
            </p>
            <p className="mt-4 text-sm font-semibold text-accent">
              Go to the training homepage →
            </p>
          </Link>
        ) : null}

        <div>
          <h2 className="mb-6 text-xs font-semibold uppercase tracking-widest text-accent">
            {isHub ? "Explore the training offer" : "More training pages"}
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {pages.map((page) => (
              <Link
                key={page.href}
                href={page.href}
                className="card-float block p-6 transition hover:border-accent/50"
              >
                <p className="font-semibold text-foreground">{page.title}</p>
                <p className="mt-2 text-sm text-muted">{page.description}</p>
                <p className="mt-3 text-sm font-semibold text-accent">Read more</p>
              </Link>
            ))}
          </div>
        </div>

        <p className="text-sm text-muted">
          Looking for our installation service instead?{" "}
          <Link href="/kitchen-wrapping/" className="text-accent hover:underline">
            Kitchen wrapping
          </Link>
        </p>
      </div>
    </section>
  );
}
