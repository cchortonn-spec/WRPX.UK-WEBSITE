import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/lib/site-config";
import { getServiceSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Kitchen Wrapping Service | Doors, Frames & Worktops Wrapped",
  description:
    "Full kitchen wrap service covering doors, drawer fronts, carcass faces, plinths, cornice and worktops. Installed in 1–3 days. South Yorkshire based.",
  alternates: { canonical: "https://wrpx.co.uk/kitchen-wrapping/" },
};

export default function KitchenWrappingPage() {
  const serviceSchema = getServiceSchema(
    "Kitchen Wrapping",
    "Full kitchen vinyl wrapping service covering doors, worktops, frames and panels."
  );

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <section className="relative h-[50vh] min-h-[320px] w-full overflow-hidden">
        <Image
          src="/images/gallery/81OfA32zNwL.jpg"
          alt="Kitchen wrapping service South Yorkshire"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 flex items-center justify-center px-4">
          <h1 className="text-center text-3xl font-bold tracking-tight text-white drop-shadow-lg md:text-4xl lg:text-5xl">
            Kitchen Wrapping — Full Kitchen Transformation
          </h1>
        </div>
      </section>

      <section className="px-4 py-16">
        <div className="container mx-auto max-w-3xl space-y-8">
          <div className="card-float p-8">
            <h2 className="text-xl font-semibold text-foreground">
              What&apos;s included in a full kitchen wrap
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Every surface: doors, drawer fronts, carcass faces, end panels,
              plinths, cornice and pelmet. We use branded films such as 3M and
              CoverStyl for colour retention and durability. Film is applied with
              trade-level surface preparation so adhesion and finish last.
            </p>
          </div>

          <div className="card-float p-8">
            <h2 className="text-xl font-semibold text-foreground">
              Worktop wrapping
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Worktops can be wrapped in marble, stone or wood-effect vinyl.
              Heat-resistant and scratch-resistant finishes. A fraction of the
              cost of replacing worktops.
            </p>
          </div>

          <div className="card-float p-8">
            <h2 className="text-xl font-semibold text-foreground">
              What we can wrap
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Solid wood, melamine, vinyl-wrapped MDF and painted cabinets. We
              won&apos;t wrap damaged or warped doors, or surfaces that aren&apos;t
              suitable — we&apos;ll tell you upfront so you don&apos;t waste money.
            </p>
          </div>

          <div className="card-float p-8">
            <h2 className="text-xl font-semibold text-foreground">
              Time & disruption
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              1–3 days depending on kitchen size. No rip-out. Your kitchen stays
              functional during the install.
            </p>
          </div>

          <div className="card-float p-8">
            <h2 className="text-xl font-semibold text-foreground">
              Life expectancy
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              {siteConfig.guaranteeYears}+ years with normal use. Films are
              scratch, impact and heat resistant. We specify the exact guarantee
              on every job.
            </p>
          </div>

          <div className="card-float p-8">
            <h2 className="text-xl font-semibold text-foreground">Guarantee</h2>
            <p className="mt-4 text-muted leading-relaxed">
              {siteConfig.guaranteeYears}-year guarantee on material defects,
              colour and adhesion. Named on the work. What voids it: customer
              damage, improper cleaning or modifications.
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
