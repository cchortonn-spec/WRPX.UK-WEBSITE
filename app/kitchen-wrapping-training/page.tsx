import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/lib/site-config";
import { trainingProgram } from "@/lib/training-program";
import { getCourseSchema, getFaqPageSchema } from "@/lib/schema";
import { FaqAccordion } from "@/components/FaqAccordion";
import { OfferStack } from "@/components/training/OfferStack";
import { PricingCallout } from "@/components/training/PricingCallout";
import { EarningsPotential } from "@/components/training/EarningsPotential";
import { TrainingRelatedLinks } from "@/components/training/TrainingRelatedLinks";
import {
  TrainingPhoto,
  TrainingPhotoGrid,
} from "@/components/training/TrainingPhoto";
import { WhatsAppButton } from "@/components/WhatsAppButton";

const trainingHeroDesktop = {
  src: "/images/Marble-worktop-potefract/marble-effect-worktop-wrap-pontefract-01.jpeg",
  alt: "Real WRPX kitchen wrap — grey cabinets, marble-effect worktops and copper handles",
} as const;

const trainingHeroMobile = {
  src: "/images/gallery/kitchen-wrap-grey-rotherham-01.png",
  alt: "Real WRPX grey kitchen wrap with marble splashback — Rotherham",
} as const;

/** Real WRPX job photos only — matched to each section */
const trainingPhotos = {
  desireFinished: {
    src: "/images/gallery/kitchen-wrap-grey-rotherham-01.png",
    alt: "Finished grey kitchen wrap with marble splashback and under-cabinet lighting",
    caption:
      "A real finished WRPX kitchen — the look clients book you for.",
  },
  liveJob: {
    src: "/images/Marble-worktop-potefract/marble-effect-worktop-wrap-pontefract-01.jpeg",
    alt: "Finished WRPX kitchen wrap in Pontefract — grey cabinets and marble-effect worktops",
    caption:
      "A real client kitchen after wrapping — this is the standard of work you train toward.",
  },
  worktopDetail: {
    src: "/images/Marble-worktop-potefract/marble-effect-worktop-wrap-pontefract-02.jpeg",
    alt: "Marble-effect worktop and grey cabinet wrap around a hob on a WRPX job",
    caption:
      "Worktops, splashbacks and cabinets on a real WRPX install — finish that holds up day to day.",
  },
  finishedDoors: {
    src: "/images/home/kitchen-home-new-02.png",
    alt: "Sage green wrapped kitchen doors and drawers with wood-effect worktop",
    caption: "Doors, drawers and a full run — proper kitchen, proper finish.",
  },
  splashbackDetail: {
    src: "/images/Kitchen-navy-marble-doncaster/navy-marble-kitchen-wrap-doncaster-after-01.jpeg",
    alt: "Navy cabinet and marble-effect wrap kitchen completed by WRPX in Doncaster",
    caption:
      "Another real WRPX kitchen — navy wrap, marble-effect surfaces, client-ready.",
  },
} as const;

export const metadata: Metadata = {
  title: "Kitchen Wrapping Training | 5-Day Live Job + Business Setup | WRPX",
  description:
    "Walk out of 5 days with your own kitchen wrapping business. Live install training with Connor — plus branding, website, 12 months SEO and support. £1,699 all-in.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/kitchen-wrapping-training/",
  },
  openGraph: {
    title: "Walk out with your own kitchen wrapping business | WRPX",
    description:
      "Real 5-day kitchen install + full business launch. Website, SEO, branding, suppliers and support. £1,699.",
    url: "https://www.wrpx.co.uk/kitchen-wrapping-training/",
    type: "website",
  },
};

export default function KitchenWrappingTrainingPage() {
  const courseUrl = `${siteConfig.domain}/kitchen-wrapping-training/`;
  const { hero, problem, desire, rationale, scarcity, guarantee, dayTeasers, close } =
    trainingProgram;

  const courseSchema = getCourseSchema({
    name: trainingProgram.name,
    description: trainingProgram.pitch,
    url: courseUrl,
    price: trainingProgram.price,
    durationDays: trainingProgram.durationDays,
  });
  const faqSchema = getFaqPageSchema(trainingProgram.faqs);

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* 1. Immersive hero */}
      <section className="training-hero" aria-label="Kitchen wrapping training offer">
        <div className="training-hero-media">
          <Image
            src={trainingHeroDesktop.src}
            alt={trainingHeroDesktop.alt}
            fill
            priority
            className="training-hero-image training-hero-image-desktop"
            sizes="100vw"
          />
          <Image
            src={trainingHeroMobile.src}
            alt={trainingHeroMobile.alt}
            fill
            priority
            className="training-hero-image training-hero-image-mobile"
            sizes="100vw"
          />
          <div className="training-hero-scrim" aria-hidden="true" />
        </div>
        <div className="training-hero-content">
          <p className="training-hero-eyebrow">{hero.eyebrow}</p>
          <h1 className="training-hero-title">{hero.headline}</h1>
          <p className="training-hero-subtitle">{hero.subhead}</p>
          <div className="training-hero-actions">
            <WhatsAppButton label={hero.ctaPrimary} className="justify-center" />
            <a
              href={`tel:${siteConfig.phoneE164}`}
              className="btn-secondary training-hero-call"
            >
              {hero.ctaSecondary} · {siteConfig.phone}
            </a>
          </div>
          <ul className="training-hero-proof">
            {hero.proof.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* 2. Problem */}
      <section className="training-section">
        <div className="container mx-auto max-w-3xl">
          <p className="training-eyebrow">{problem.eyebrow}</p>
          <h2 className="text-2xl font-bold tracking-tight text-foreground md:text-3xl">
            {problem.headline}
          </h2>
          {problem.body.map((para) => (
            <p key={para.slice(0, 40)} className="mt-4 text-muted leading-relaxed text-lg">
              {para}
            </p>
          ))}
        </div>
      </section>

      {/* 3. Desire + finished kitchen visual */}
      <section className="training-section training-section-alt">
        <div className="container mx-auto max-w-5xl">
          <div className="training-desire-split">
            <div>
              <p className="training-eyebrow">{desire.eyebrow}</p>
              <h2 className="text-2xl font-bold tracking-tight text-foreground md:text-3xl">
                {desire.headline}
              </h2>
              {desire.body.map((para) => (
                <p
                  key={para.slice(0, 40)}
                  className="mt-4 text-muted leading-relaxed text-lg"
                >
                  {para}
                </p>
              ))}
            </div>
            <TrainingPhoto
              src={trainingPhotos.desireFinished.src}
              alt={trainingPhotos.desireFinished.alt}
              caption={trainingPhotos.desireFinished.caption}
            />
          </div>
        </div>
      </section>

      {/* Live job photo break */}
      <section className="training-section">
        <div className="container mx-auto max-w-3xl">
          <TrainingPhoto
            src={trainingPhotos.liveJob.src}
            alt={trainingPhotos.liveJob.alt}
            caption={trainingPhotos.liveJob.caption}
          />
        </div>
      </section>

      {/* 4. Rationale */}
      <section className="training-section training-section-alt">
        <div className="container mx-auto max-w-3xl">
          <p className="training-eyebrow">{rationale.eyebrow}</p>
          <h2 className="text-2xl font-bold tracking-tight text-foreground md:text-3xl">
            {rationale.headline}
          </h2>
          {rationale.body.map((para) => (
            <p key={para.slice(0, 40)} className="mt-4 text-muted leading-relaxed">
              {para}
            </p>
          ))}
        </div>
      </section>

      {/* 5. Godfather offer stack */}
      <section className="training-section">
        <div className="container mx-auto max-w-3xl">
          <p className="training-eyebrow">The offer</p>
          <h2 className="mb-8 text-2xl font-bold tracking-tight text-foreground md:text-3xl">
            Everything you walk away with — stacked
          </h2>
          <OfferStack />
        </div>
      </section>

      {/* Worktop / finish standards */}
      <section className="training-section training-section-alt">
        <div className="container mx-auto max-w-3xl">
          <TrainingPhoto
            src={trainingPhotos.worktopDetail.src}
            alt={trainingPhotos.worktopDetail.alt}
            caption={trainingPhotos.worktopDetail.caption}
          />
        </div>
      </section>

      {/* 6. Price */}
      <section className="training-section">
        <div className="container mx-auto max-w-3xl">
          <PricingCallout />
        </div>
      </section>

      {/* 7. Guarantee + scarcity */}
      <section className="training-section training-section-alt">
        <div className="container mx-auto max-w-3xl space-y-4">
          <div className="training-guarantee">
            <p className="training-eyebrow">{guarantee.eyebrow}</p>
            <h2 className="text-xl font-semibold text-foreground md:text-2xl">
              {guarantee.headline}
            </h2>
            <p className="mt-3 text-muted leading-relaxed">{guarantee.body}</p>
          </div>
          <div className="training-scarcity">
            <p className="training-eyebrow">{scarcity.eyebrow}</p>
            <h2 className="text-xl font-semibold text-foreground md:text-2xl">
              {scarcity.headline}
            </h2>
            <p className="mt-3 text-muted leading-relaxed">{scarcity.body}</p>
            <div className="mt-5">
              <WhatsAppButton label={hero.ctaPrimary} className="justify-center sm:inline-flex" />
            </div>
          </div>
        </div>
      </section>

      {/* 8. 5-day teaser + photo grid */}
      <section className="training-section">
        <div className="container mx-auto max-w-5xl">
          <div className="mx-auto max-w-3xl">
            <p className="training-eyebrow">The 5 days</p>
            <h2 className="text-2xl font-bold tracking-tight text-foreground md:text-3xl">
              On a real kitchen job — not a training bay
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              You&apos;re thrown into a live WRPX install. Here&apos;s the arc —
              full detail lives on the{" "}
              <Link
                href="/kitchen-wrapping-training-course/"
                className="text-accent hover:underline"
              >
                5-day training plan
              </Link>
              .
            </p>
          </div>

          <div className="mt-8">
            <TrainingPhotoGrid
              photos={[
                {
                  src: trainingPhotos.liveJob.src,
                  alt: trainingPhotos.liveJob.alt,
                  label: "Full kitchen wrap",
                },
                {
                  src: trainingPhotos.worktopDetail.src,
                  alt: trainingPhotos.worktopDetail.alt,
                  label: "Worktops & splashbacks",
                },
                {
                  src: trainingPhotos.finishedDoors.src,
                  alt: trainingPhotos.finishedDoors.alt,
                  label: "Doors & drawers",
                },
              ]}
            />
          </div>

          <div className="mx-auto mt-8 max-w-3xl card-float px-6 py-2">
            {dayTeasers.map((day) => (
              <div key={day.day} className="training-day-teaser">
                <span className="training-day-badge">Day {day.day}</span>
                <p className="text-foreground leading-snug">{day.hook}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Real WRPX detail */}
      <section className="training-section training-section-alt">
        <div className="container mx-auto max-w-3xl">
          <TrainingPhoto
            src={trainingPhotos.splashbackDetail.src}
            alt={trainingPhotos.splashbackDetail.alt}
            caption={trainingPhotos.splashbackDetail.caption}
          />
        </div>
      </section>

      {/* 9. Earnings */}
      <section className="training-section">
        <div className="container mx-auto max-w-3xl">
          <EarningsPotential />
        </div>
      </section>

      {/* 10. Trust / Connor */}
      <section className="training-section training-section-alt">
        <div className="container mx-auto max-w-3xl">
          <p className="training-eyebrow">Work with us</p>
          <h2 className="text-2xl font-bold tracking-tight text-foreground md:text-3xl">
            Connor &amp; the WRPX team
          </h2>
          <p className="mt-4 text-muted leading-relaxed text-lg">
            We&apos;ve been in large-format graphic vinyl and architectural
            wrapping for years. You learn how we prep, finish, price and support
            jobs every day — then you get a business setup most classroom
            sessions never touch.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <WhatsAppButton label="Message Connor" className="justify-center" />
            <a
              href={`tel:${siteConfig.phoneE164}`}
              className="btn-secondary inline-flex items-center justify-center"
            >
              Call {siteConfig.phone}
            </a>
          </div>
        </div>
      </section>

      {/* 11. FAQ */}
      <section className="training-section">
        <div className="container mx-auto max-w-3xl">
          <p className="training-eyebrow">Objections</p>
          <h2 className="mb-6 text-2xl font-bold tracking-tight text-foreground md:text-3xl">
            Straight answers
          </h2>
          <FaqAccordion items={[...trainingProgram.faqs]} />
        </div>
      </section>

      {/* 12. Final close */}
      <section className="training-section training-section-alt">
        <div className="container mx-auto max-w-3xl">
          <div className="training-close">
            <h2 className="text-2xl font-bold tracking-tight text-foreground md:text-3xl">
              {close.headline}
            </h2>
            <p className="mt-4 text-muted leading-relaxed">{close.body}</p>
            <p className="mt-2 text-sm font-semibold text-accent">
              {trainingProgram.priceDisplay} · nothing else to pay for the package
            </p>
            <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
              <WhatsAppButton
                label={hero.ctaPrimary}
                className="w-full justify-center sm:w-auto"
              />
              <a
                href={`tel:${siteConfig.phoneE164}`}
                className="btn-secondary inline-flex w-full items-center justify-center sm:w-auto"
              >
                {hero.ctaSecondary} · {siteConfig.phone}
              </a>
            </div>
            <p className="mt-6 text-sm text-muted">
              <Link
                href="/kitchen-wrapping-training-cost/"
                className="text-accent hover:underline"
              >
                Full cost breakdown
              </Link>
              <span className="mx-2">·</span>
              <Link
                href="/become-a-kitchen-wrapper/"
                className="text-accent hover:underline"
              >
                Why become a kitchen wrapper
              </Link>
            </p>
          </div>
        </div>
      </section>

      <TrainingRelatedLinks currentHref="/kitchen-wrapping-training/" />
    </div>
  );
}
