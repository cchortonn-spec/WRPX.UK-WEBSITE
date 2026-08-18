import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { getServiceSchema } from "@/lib/schema";
import { siteConfig } from "@/lib/site-config";
import { KitchenWrappingQuoteWizard } from "@/components/KitchenWrappingQuoteWizard";
import { WrpxTrustPanel } from "@/components/WrpxTrustPanel";
import { HeroTrustBar } from "@/components/HeroTrustBar";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "Kitchen Wrapping Quote South Yorkshire | WRPX",
  description:
    "Kitchen wrapping quote South Yorkshire. Get a kitchen makeover without replacement, free survey and fixed price from WRPX. Sheffield, Doncaster, Barnsley, Rotherham.",
  alternates: { canonical: "https://www.wrpx.co.uk/kitchen-wrapping-quote/" },
};

const quoteTips = [
  {
    num: 1,
    title: "Take wide shots and close-ups",
    body: "A full-room photo plus close-ups of doors, drawers, corners and any damaged areas help us quote accurately first time.",
  },
  {
    num: 2,
    title: "Count doors and drawers",
    body: "Count every door and drawer front you want wrapping, including corner units, larder doors and appliance doors if they are being wrapped.",
  },
  {
    num: 3,
    title: "Measure worktops including the sink and hob",
    body: "Run a tape along the full worktop length, including around the sink and hob. Round up to the nearest 10cm if you are unsure.",
  },
  {
    num: 4,
    title: "Do not worry about small chips or wear",
    body: "Light wear, faded doors and small chips are usually fine. We will tell you honestly if a surface needs extra prep or is not suitable.",
  },
] as const;

export default function KitchenWrappingQuotePage() {
  const serviceSchema = getServiceSchema(
    "Kitchen Wrapping Quote",
    "Request a kitchen wrapping quote in South Yorkshire for cabinet doors, drawer fronts, panels and worktops."
  );
  const faqItems = [
    {
      q: "How much does kitchen wrapping cost in South Yorkshire?",
      a: "Most quotes depend on door count, drawer count, surface condition and finish choice. Typical full kitchens start from around £850, with final fixed pricing confirmed after survey.",
    },
    {
      q: "Is kitchen wrapping cheaper than fitting a new kitchen?",
      a: "Yes. Kitchen wrapping is usually significantly cheaper than full replacement because your existing units stay in place and only visible surfaces are transformed.",
    },
    {
      q: "How long does a kitchen wrap makeover take?",
      a: "Most projects take around 1 to 3 days depending on kitchen size and scope.",
    },
    {
      q: "Do you quote for kitchen wrapping near me?",
      a: "We cover South Yorkshire and nearby areas including Sheffield, Doncaster, Barnsley, Rotherham, Leeds, Huddersfield and Chesterfield.",
    },
  ] as const;

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <section className="quote-hero">
        <div className="quote-hero-media">
          <Image
            src="/images/Marble-worktop-potefract/marble-effect-worktop-wrap-pontefract-01.jpeg"
            alt="Bright marble-effect kitchen wrap with light cabinets — Pontefract, WRPX"
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
          <div className="quote-hero-scrim" aria-hidden="true" />
        </div>
        <div className="quote-hero-content">
          <p className="quote-hero-eyebrow">Kitchen wrapping quote · South Yorkshire</p>
          <h1 className="quote-hero-title">Get your kitchen wrapping quote</h1>
          <p className="quote-hero-subtitle">
            Tell us about your doors, drawers and worktops. It takes around 2 minutes
            and helps us price your job accurately first time — no obligation, no
            pressure.
          </p>
        </div>
      </section>

      <HeroTrustBar />

      <section className="reveal px-4 py-10 md:py-14">
        <div className="container mx-auto max-w-5xl">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,22rem)] lg:items-start">
            <KitchenWrappingQuoteWizard />
            <WrpxTrustPanel variant="aside" className="lg:sticky lg:top-24" />
          </div>
        </div>
      </section>

      <section className="home-section-alt reveal px-4 py-14">
        <div className="container mx-auto max-w-5xl">
          <h2 className="section-heading mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Tips for a fast, accurate quote
          </h2>
          <div className="grid gap-5 sm:grid-cols-2">
            {quoteTips.map((tip) => (
              <div key={tip.num} className="card-float flex gap-4 p-6 md:p-7">
                <span className="step-badge">{tip.num}</span>
                <div>
                  <h3 className="font-semibold text-foreground">{tip.title}</h3>
                  <p className="mt-2 text-sm text-muted">{tip.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="reveal px-4 py-14">
        <div className="container mx-auto max-w-5xl space-y-6">
          <article className="card-float p-6 md:p-8">
            <h2 className="text-xl font-semibold text-foreground">
              Kitchen wrapping quote for doors, drawers and worktops
            </h2>
            <p className="mt-3 leading-relaxed text-muted">
              We quote for complete kitchen wraps, cabinet-only wraps and worktop
              wraps. If you are comparing kitchen wrapping vs new kitchen costs, this
              form gives you a clear fixed-price route without pressure.
            </p>
          </article>

          <article className="card-float p-6 md:p-8">
            <h2 className="text-xl font-semibold text-foreground">Areas we cover</h2>
            <p className="mt-3 leading-relaxed text-muted">
              We provide kitchen wrapping quotes across South Yorkshire including
              Sheffield, Doncaster, Barnsley, Rotherham, Leeds, Huddersfield and
              Chesterfield.
            </p>
            <p className="mt-3 text-sm text-muted">
              For service details, see our{" "}
              <Link href="/kitchen-wrapping/" className="link-subtle">
                kitchen wrapping page
              </Link>{" "}
              and{" "}
              <Link href="/kitchen-wrapping-cost/" className="link-subtle">
                kitchen wrapping cost guide
              </Link>
              . You can also preview finish options on our{" "}
              <Link href="/architectural-vinyl-finishes/" className="link-subtle">
                architectural vinyl finishes page
              </Link>
              .
            </p>
          </article>

          <article className="card-float p-6 md:p-8">
            <h2 className="text-xl font-semibold text-foreground">
              Kitchen wrapping quote FAQs
            </h2>
            <ul className="mt-4 space-y-4">
              {faqItems.map((item) => (
                <li key={item.q}>
                  <p className="font-medium text-foreground">{item.q}</p>
                  <p className="mt-1 text-sm leading-relaxed text-muted">{item.a}</p>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section className="home-cta-glow reveal px-4 py-16">
        <div className="container mx-auto max-w-3xl">
          <div className="card-float p-10 text-center md:p-14">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              Prefer to talk it through?
            </h2>
            <p className="mt-4 text-muted">
              {siteConfig.yearsInBusiness}+ years in the vinyl wrapping industry.
              Free survey, no obligation. WhatsApp us a photo or book a visit and we
              will take it from there.
            </p>
            <div className="mt-8 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:justify-center">
              <WhatsAppButton className="w-full justify-center sm:w-auto" />
              <Link href="/contact/" className="btn-accent-text w-full text-center sm:w-auto">
                Book Your Free Survey
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
