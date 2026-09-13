import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { trainingProgram } from "@/lib/training-program";
import { PricingCallout } from "@/components/training/PricingCallout";
import { TrainingRelatedLinks } from "@/components/training/TrainingRelatedLinks";
import { TrainingHubCta } from "@/components/training/TrainingHubCta";

export const metadata: Metadata = {
  title: "Kitchen Wrapping Training Cost | £1,699 All-Inclusive | WRPX",
  description:
    "How much does kitchen wrap training cost? WRPX is £1,699 all-in — 5-day live job training, branding, website, 12 months SEO, suppliers, certificate and support. Nothing else to pay.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/kitchen-wrapping-training-cost/",
  },
  openGraph: {
    title: "Kitchen Wrapping Training Cost — £1,699 | WRPX",
    description:
      "One price. Full business launch included. See exactly what the £1,699 covers.",
    url: "https://www.wrpx.co.uk/kitchen-wrapping-training-cost/",
    type: "website",
  },
};

export default function KitchenWrappingTrainingCostPage() {
  return (
    <div>
      <section className="relative h-[40vh] min-h-[260px] w-full overflow-hidden">
        <Image
          src="/images/gallery/kitchen-wrap-full-kitchen-south-yorkshire.jpg"
          alt="Kitchen wrapping training cost and inclusions"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/65" />
        <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-accent">
            Pricing
          </p>
          <h1 className="max-w-3xl text-3xl font-bold tracking-tight text-white drop-shadow-lg md:text-4xl">
            Kitchen Wrapping Training Cost — {trainingProgram.priceDisplay}
          </h1>
          <p className="mt-4 max-w-xl text-white/85">
            One investment. Training plus a complete business setup. Nothing
            else to pay for the package as described.
          </p>
          <Link
            href="/kitchen-wrapping-training/"
            className="mt-6 btn-primary inline-block"
          >
            View the full training offer
          </Link>
        </div>
      </section>

      <section className="px-4 py-16">
        <div className="container mx-auto max-w-3xl space-y-10">
          <TrainingHubCta compact />

          <PricingCallout />

          <div className="card-float p-8">
            <h2 className="text-xl font-semibold text-foreground">
              What the {trainingProgram.priceDisplay} covers
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              This isn&apos;t a short technique workshop. The price is set as an
              investment into a working business — skill on a live job, plus
              everything you need to start taking enquiries.
            </p>
            <ul className="mt-6 divide-y divide-border">
              {trainingProgram.costBreakdown.map((row) => (
                <li
                  key={row.item}
                  className="flex flex-col gap-1 py-4 first:pt-0 last:pb-0 sm:flex-row sm:items-start sm:justify-between sm:gap-6"
                >
                  <span className="font-medium text-foreground">{row.item}</span>
                  <span className="text-sm text-muted sm:max-w-xs sm:text-right">
                    {row.valueNote}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="card-float p-8">
            <h2 className="text-xl font-semibold text-foreground">
              Why it&apos;s framed as an investment
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              You&apos;re not paying for a certificate day alone. You leave with
              branding direction, supplier accounts in motion, a live website
              aimed at your local towns, {trainingProgram.seoMonthsIncluded}{" "}
              months of SEO updates, and a support line you can use when you
              hit a sticky job. That&apos;s how you go from &quot;I can wrap&quot;
              to &quot;I have work booked in.&quot;
            </p>
            <p className="mt-4 text-muted leading-relaxed">
              For the full pitch — live install, business launch and how to
              apply — go to the{" "}
              <Link
                href="/kitchen-wrapping-training/"
                className="text-accent hover:underline"
              >
                kitchen wrapping training homepage
              </Link>
              .
            </p>
          </div>

          <div className="card-float p-8">
            <h2 className="text-xl font-semibold text-foreground">
              Nothing hidden
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              {trainingProgram.priceDisplay} upfront. No upsells for the
              website, SEO package, branding help or support line as described
              on this page. Tools and materials for your own future jobs are
              your trade costs — we show you exactly what we use and where to
              get them.
            </p>
          </div>

          <TrainingHubCta />
        </div>
      </section>

      <TrainingRelatedLinks currentHref="/kitchen-wrapping-training-cost/" />
    </div>
  );
}
