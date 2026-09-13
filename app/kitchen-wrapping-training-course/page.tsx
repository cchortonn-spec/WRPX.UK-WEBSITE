import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/lib/site-config";
import { trainingProgram } from "@/lib/training-program";
import { getCourseSchema } from "@/lib/schema";
import { CurriculumTimeline } from "@/components/training/CurriculumTimeline";
import { PricingCallout } from "@/components/training/PricingCallout";
import { TrainingRelatedLinks } from "@/components/training/TrainingRelatedLinks";
import { TrainingHubCta } from "@/components/training/TrainingHubCta";

export const metadata: Metadata = {
  title: "Kitchen Wrapping Training Plan | 5-Day Live Install | WRPX",
  description:
    "Day-by-day kitchen wrapping training: live job immersion, prep, primers, sealants, cleaning products, microfibres, measuring, pricing and business launch. WRPX.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/kitchen-wrapping-training-course/",
  },
  openGraph: {
    title: "5-Day Kitchen Wrapping Training Plan | WRPX",
    description:
      "Real-job training plan — prep to pricing to finishing. Plus business launch on day 5.",
    url: "https://www.wrpx.co.uk/kitchen-wrapping-training-course/",
    type: "website",
  },
};

export default function KitchenWrappingTrainingCoursePage() {
  const courseUrl = `${siteConfig.domain}/kitchen-wrapping-training-course/`;
  const courseSchema = getCourseSchema({
    name: `${trainingProgram.shortName} — 5-Day Plan`,
    description:
      "Day-by-day kitchen wrapping training on a live install: vinyl fundamentals, surface prep, primers, sealants, application, measuring, pricing and business launch.",
    url: courseUrl,
    price: trainingProgram.price,
    durationDays: trainingProgram.durationDays,
  });

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }}
      />

      <section className="relative h-[40vh] min-h-[260px] w-full overflow-hidden">
        <Image
          src="/images/gallery/kitchen-wrap-before-after-south-yorkshire.jpg"
          alt="Kitchen wrapping 5-day training plan — live install"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/65" />
        <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-accent">
            Training plan
          </p>
          <h1 className="max-w-3xl text-3xl font-bold tracking-tight text-white drop-shadow-lg md:text-4xl">
            5-Day Kitchen Wrapping Training — Live Job Plan
          </h1>
          <p className="mt-4 max-w-xl text-white/85">
            Prep, primers, sealants, products, measuring, pricing and finishing
            — taught on a real kitchen install.
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
              Built around a real install — not a training bay
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Every day puts you on (or alongside) a live WRPX kitchen job.
              You learn how we correctly prepare and finish work, which
              primers and sealants we use, which cleaning products and
              microfibre cloths perform best, where to source them, and how
              costs stack up on a real quote.
            </p>
          </div>

          <div>
            <h2 className="mb-6 text-xl font-semibold text-foreground">
              Day by day
            </h2>
            <CurriculumTimeline />
          </div>

          <div className="card-float p-8">
            <h2 className="text-xl font-semibold text-foreground">
              Products, tools & finish standards we cover
            </h2>
            <ul className="mt-4 space-y-3 text-muted">
              <li>
                <strong className="text-foreground">Preparation</strong> —
                cleaning products that leave a bond-ready surface; what ruins
                adhesion
              </li>
              <li>
                <strong className="text-foreground">Primers</strong> — when
                they&apos;re needed, where to apply, and how much to use
              </li>
              <li>
                <strong className="text-foreground">Sealants</strong> — correct
                products for edges and moisture-prone areas
              </li>
              <li>
                <strong className="text-foreground">Microfibre cloths</strong> —
                which grades we trust and where to buy them
              </li>
              <li>
                <strong className="text-foreground">Tools</strong> — squeegees,
                knives, heat guns and the kit we actually carry every day
              </li>
              <li>
                <strong className="text-foreground">Costs</strong> — realistic
                material and consumable costs so your pricing holds up
              </li>
            </ul>
            <p className="mt-4 text-muted leading-relaxed">
              Want the full sales page with price, package and how to apply?{" "}
              <Link
                href="/kitchen-wrapping-training/"
                className="text-accent hover:underline"
              >
                Go to the kitchen wrapping training homepage
              </Link>
              .
            </p>
          </div>

          <PricingCallout />

          <TrainingHubCta />
        </div>
      </section>

      <TrainingRelatedLinks currentHref="/kitchen-wrapping-training-course/" />
    </div>
  );
}
