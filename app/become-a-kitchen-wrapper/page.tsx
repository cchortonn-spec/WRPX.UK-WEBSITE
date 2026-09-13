import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { trainingProgram } from "@/lib/training-program";
import { EarningsPotential } from "@/components/training/EarningsPotential";
import { PricingCallout } from "@/components/training/PricingCallout";
import { TrainingRelatedLinks } from "@/components/training/TrainingRelatedLinks";
import { TrainingHubCta } from "@/components/training/TrainingHubCta";
import { BusinessSetupChecklist } from "@/components/training/BusinessSetupChecklist";

export const metadata: Metadata = {
  title: "Become a Kitchen Wrapper | Build Your Own Wrap Business | WRPX",
  description:
    "Become a kitchen wrapper with WRPX: 5-day live training, branding, website + SEO, suppliers and support. Own your business in a high-demand market. £1,699.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/become-a-kitchen-wrapper/",
  },
  openGraph: {
    title: "Become a Kitchen Wrapper | WRPX Business Launch",
    description:
      "Career change into kitchen wrapping — skill plus a full business built for you. Be your own boss.",
    url: "https://www.wrpx.co.uk/become-a-kitchen-wrapper/",
    type: "website",
  },
};

export default function BecomeAKitchenWrapperPage() {
  return (
    <div>
      <section className="relative h-[50vh] min-h-[320px] w-full overflow-hidden">
        <Image
          src="/images/gallery/kitchen-wrap-full-kitchen-south-yorkshire.jpg"
          alt="Become a kitchen wrapper — build your own wrapping business with WRPX"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/65" />
        <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-accent">
            Career &amp; business
          </p>
          <h1 className="max-w-3xl text-3xl font-bold tracking-tight text-white drop-shadow-lg md:text-4xl lg:text-5xl">
            Become a Kitchen Wrapper — Build a Business, Not Just a Skill
          </h1>
          <p className="mt-4 max-w-2xl text-base text-white/85 md:text-lg">
            Be your own boss. Learn kitchen wrapping on a live job, then walk
            out with branding, a website and local SEO working for you.
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

          <div className="card-float p-8">
            <h2 className="text-xl font-semibold text-foreground">
              The market is open — and demand is rising
            </h2>
            <ul className="mt-4 space-y-3 text-muted">
              {trainingProgram.marketPoints.map((point) => (
                <li key={point} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  <span className="leading-relaxed">{point}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="mb-6 text-xl font-semibold text-foreground">
              Who this is for
            </h2>
            <div className="grid gap-4 sm:grid-cols-3">
              {trainingProgram.whoItsFor.map((audience) => (
                <div key={audience.title} className="card-float p-6">
                  <h3 className="font-semibold text-foreground">
                    {audience.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted leading-relaxed">
                    {audience.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <EarningsPotential />

          <div className="card-float p-8">
            <h2 className="text-xl font-semibold text-foreground">
              Skill without a business is half the story
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              You can be excellent at wrapping and still starve for work if
              nobody can find you. WRPX builds the commercial side with you:
              name and logo direction, supplier accounts, a done-for-you
              website, {trainingProgram.seoMonthsIncluded} months of SEO aimed
              at your towns and cities, and a phone line when you need answers
              on tools, products or technique.
            </p>
            <p className="mt-4 text-muted leading-relaxed">
              By the time you&apos;re done, you should be ready to onboard
              enquiries, book jobs, take overflow work from us when available,
              and keep learning with support a message away.
            </p>
          </div>

          <div>
            <h2 className="mb-6 text-xl font-semibold text-foreground">
              Everything in the business launch
            </h2>
            <BusinessSetupChecklist />
          </div>

          <div className="card-float p-8">
            <h2 className="text-xl font-semibold text-foreground">
              Work after training
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Your site and SEO are built to pull local kitchen wrapping
              enquiries. Separately, when WRPX has jobs we can&apos;t fulfil,
              approved trainees may be offered paid subcontract work when
              it&apos;s available.
            </p>
            <p className="mt-4 text-muted leading-relaxed">
              See the full package, price and how to apply on the{" "}
              <Link
                href="/kitchen-wrapping-training/"
                className="text-accent hover:underline"
              >
                kitchen wrapping training homepage
              </Link>
              .
            </p>
          </div>

          <PricingCallout note="One investment into your own kitchen wrapping business. Nothing else to pay for the package as described." />

          <TrainingHubCta />
        </div>
      </section>

      <TrainingRelatedLinks currentHref="/become-a-kitchen-wrapper/" />
    </div>
  );
}
