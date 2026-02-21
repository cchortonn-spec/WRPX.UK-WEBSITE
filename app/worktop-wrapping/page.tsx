import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/lib/site-config";
import { getServiceSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Worktop Wrapping South Yorkshire | Stone, Marble & Wood Effect",
  description:
    "Wrap your worktops in marble, stone or wood-effect vinyl for a fraction of replacement cost. Heat and scratch resistant. South Yorkshire specialist.",
  alternates: { canonical: "https://wrpx.co.uk/worktop-wrapping/" },
};

export default function WorktopWrappingPage() {
  const serviceSchema = getServiceSchema(
    "Worktop Wrapping",
    "Worktop vinyl wrapping in marble, stone or wood-effect. Heat and scratch resistant. South Yorkshire."
  );

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <section className="relative h-[40vh] min-h-[280px] w-full overflow-hidden">
        <Image
          src="/images/gallery/Y923a9kw8pCgp9gZUeYFaH.jpg"
          alt="Worktop wrapping South Yorkshire"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 flex items-center justify-center px-4">
          <h1 className="text-center text-3xl font-bold tracking-tight text-white drop-shadow-lg md:text-4xl">
            Worktop Wrapping South Yorkshire
          </h1>
        </div>
      </section>

      <section className="px-4 py-16">
        <div className="container mx-auto max-w-3xl space-y-8">
          <div className="card-float p-8">
            <p className="text-muted leading-relaxed">
              Wrap your worktops in marble, stone or wood-effect vinyl for a
              fraction of the cost of replacement. Heat-resistant and
              scratch-resistant finishes. We do worktops on their own or as part
              of a full kitchen wrap. Same {siteConfig.guaranteeYears}-year
              guarantee.
            </p>
          </div>

          <div className="card-float p-8">
            <h2 className="text-xl font-semibold text-foreground">
              Finishes and durability
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Marble, stone and wood-effect films are available. They&apos;re
              designed for worktop use — heat and scratch resistant. We use
              branded film and proper prep so the finish lasts.
            </p>
          </div>

          <div className="text-center pt-4">
            <Link href="/contact/" className="btn-primary inline-block">
              Get a Free Quote
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
