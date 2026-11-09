import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { getServiceSchema } from "@/lib/schema";
import { siteConfig } from "@/lib/site-config";
import { googleReviews } from "@/lib/google-reviews";
import { KitchenWrappingQuoteWizard } from "@/components/KitchenWrappingQuoteWizard";
import { QuoteResources, RESOURCES_HASH } from "@/components/QuoteResources";
import { FaqAccordion } from "@/components/FaqAccordion";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "Kitchen Wrapping Quote South Yorkshire | WRPX",
  description:
    "Kitchen wrapping quote South Yorkshire. Get a kitchen makeover without replacement, free survey and fixed price from WRPX. Sheffield, Doncaster, Barnsley, Rotherham.",
  alternates: { canonical: "https://www.wrpx.co.uk/kitchen-wrapping-quote/" },
};

const howItWorks = [
  { num: 1, title: "Tell us about your kitchen", body: "Doors, drawers, worktops" },
  { num: 2, title: "Add a few photos", body: "Phone photos are perfect" },
  { num: 3, title: "Get a fixed price", body: "No obligation, no pressure" },
] as const;

const startingPrices = [
  { name: "Full kitchen", price: "£1,099" },
  { name: "Worktops only", price: "£380" },
  { name: "Per door", price: "£45" },
] as const;

const BOOK_COVERS = [
  "/images/brochure-covers/3m-dinoc-sample-book-cover.jpg",
  "/images/brochure-covers/benif-sample-book-cover.jpg",
  "/images/brochure-covers/cover-styl-sample-book-cover.jpg",
] as const;

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
    title: "Don't worry about small chips or wear",
    body: "Light wear, faded doors and small chips are usually fine. We will tell you honestly if a surface needs extra prep or is not suitable.",
  },
] as const;

const faqItems = [
  {
    q: "How much does kitchen wrapping cost in South Yorkshire?",
    a: "Full kitchens start from £1,099 (around 10–12 doors), worktops only from £380 and individual doors from £45. Your final fixed price depends on door and drawer count, surface condition and finish, and is confirmed after your free survey.",
  },
  {
    q: "Is kitchen wrapping cheaper than fitting a new kitchen?",
    a: "Yes. A new kitchen typically costs £5,000–£15,000. Wrapping is usually 70–80% less because your existing units stay in place and only the visible surfaces are transformed.",
  },
  {
    q: "How long does a kitchen wrap makeover take?",
    a: "Most projects take around 1 to 3 days depending on kitchen size and scope. Your kitchen stays usable — there's no rip-out.",
  },
  {
    q: "Do I need to choose a finish before asking for a quote?",
    a: "No. Send your details and photos first. You can browse our sample books and visualiser any time, and we bring physical samples to your free survey so you can see them in your own lighting.",
  },
  {
    q: "Do you quote for kitchen wrapping near me?",
    a: "We cover South Yorkshire and nearby areas including Sheffield, Doncaster, Barnsley, Rotherham, Leeds, Huddersfield and Chesterfield.",
  },
];

export default function KitchenWrappingQuotePage() {
  const serviceSchema = getServiceSchema(
    "Kitchen Wrapping Quote",
    "Request a kitchen wrapping quote in South Yorkshire for cabinet doors, drawer fronts, panels and worktops."
  );

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

  const rating = Number.isInteger(googleReviews.rating)
    ? `${googleReviews.rating}.0`
    : String(googleReviews.rating);

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

      {/* Hero */}
      <section className="kw-hero qp-hero" aria-label="Kitchen wrapping quote">
        <Image
          src="/images/Marble-worktop-potefract/marble-effect-worktop-wrap-pontefract-01.jpeg"
          alt="Bright marble-effect kitchen wrap with light cabinets — Pontefract, WRPX"
          fill
          priority
          quality={85}
          sizes="100vw"
          className="kw-hero-image"
        />
        <div className="kw-hero-scrim" aria-hidden="true" />

        <div className="kw-hero-inner">
          <div>
            <p className="kw-eyebrow">
              <span className="kw-eyebrow-dot" aria-hidden="true" />
              Free quote · no obligation
            </p>
            <h1 className="kw-hero-title qp-hero-title">
              Your kitchen wrapping quote,{" "}
              <span className="kw-gradient-text">in about 2 minutes</span>
            </h1>
            <p className="kw-hero-lead">
              Answer a few quick questions, add some photos and we&apos;ll come back
              with a clear, fixed price.
            </p>

            <ol className="qp-how">
              {howItWorks.map((item) => (
                <li key={item.num}>
                  <span className="qp-how-num">{item.num}</span>
                  <span>
                    <strong>{item.title}</strong>
                    <span className="qp-how-body">{item.body}</span>
                  </span>
                </li>
              ))}
            </ol>

            <div className="kw-hero-actions">
              <a href="#quote" className="kw-btn-primary">
                Start my quote <span aria-hidden="true">↓</span>
              </a>
              <a href={RESOURCES_HASH} className="kw-btn-ghost qp-btn-glass">
                <BookIcon /> Brochures &amp; visualiser
              </a>
            </div>

            <ul className="kw-hero-trust">
              <li>
                <span className="kw-stars" aria-hidden="true">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <StarIcon key={i} />
                  ))}
                </span>
                {rating} on Google
              </li>
              <li>
                <CheckIcon /> {siteConfig.guaranteeYears}-year guarantee
              </li>
              <li>
                <CheckIcon /> Fully insured
              </li>
            </ul>
          </div>

          <div className="qp-price-card hidden lg:block">
            <p className="kw-kicker">Prices from</p>
            <ul className="qp-price-list">
              {startingPrices.map((item) => (
                <li key={item.name}>
                  <span>{item.name}</span>
                  <strong>{item.price}</strong>
                </li>
              ))}
            </ul>
            <p className="qp-price-note">
              Typically 70–80% less than a new kitchen. Fixed price confirmed at your free
              survey.
            </p>
          </div>
        </div>
      </section>

      {/* Quote wizard */}
      <section id="quote" className="kw-section qp-quote-section">
        <div className="kw-container qp-quote-grid">
          <KitchenWrappingQuoteWizard />

          <aside className="qp-aside" aria-label="Help choosing your finish">
            <div className="qp-aside-card qp-inspire">
              <a href={RESOURCES_HASH} className="qp-inspire-covers" aria-label="Open the sample books">
                {BOOK_COVERS.map((cover) => (
                  <span key={cover} className="qp-inspire-cover">
                    <Image src={cover} alt="" fill sizes="96px" className="object-cover" />
                  </span>
                ))}
              </a>
              <p className="kw-kicker mt-5">Need inspiration?</p>
              <h2 className="mt-1 text-lg font-bold text-foreground">
                Browse 3 sample books &amp; try the visualiser
              </h2>
              <p className="mt-2 text-sm text-muted">
                Hundreds of real 3M, BENIF and Cover Styl finishes — view online or
                download.
              </p>
              <a href={RESOURCES_HASH} className="kw-btn-ghost kw-btn-block mt-4">
                <BookIcon /> Open sample books
              </a>
              <Link href="/wrap-visualiser/" className="qp-aside-link">
                Try the wrap visualiser <span aria-hidden="true">→</span>
              </Link>
            </div>

            <div className="qp-aside-card">
              <p className="font-semibold text-foreground">Rather chat it through?</p>
              <p className="mt-1 text-sm text-muted">
                Send us a photo on WhatsApp or give us a ring.
              </p>
              <div className="mt-4 grid grid-cols-2 gap-2">
                <WhatsAppButton label="WhatsApp" className="kw-btn-whatsapp w-full justify-center px-3" />
                <a href={`tel:${siteConfig.phoneE164}`} className="kw-btn-ghost kw-btn-block px-3">
                  Call us
                </a>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* Tips */}
      <section className="kw-section home-section-alt reveal">
        <div className="kw-container">
          <h2 className="section-heading text-2xl font-semibold text-foreground md:text-4xl">
            Tips for a fast, accurate quote
          </h2>
          <p className="kw-section-lead">
            Two minutes with your phone and a tape measure is all it takes.
          </p>
          <ol className="kw-steps">
            {quoteTips.map((tip) => (
              <li key={tip.num} className="kw-step">
                <span className="step-badge">{tip.num}</span>
                <h3 className="mt-4 font-semibold text-foreground">{tip.title}</h3>
                <p className="mt-2 text-sm text-muted">{tip.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Not ready yet */}
      <section className="kw-section-tight reveal">
        <div className="kw-container">
          <div className="kw-cta-band">
            <div>
              <p className="text-lg font-semibold text-foreground md:text-xl">
                Not quite ready for a quote?
              </p>
              <p className="mt-1 text-sm text-muted">
                See what&apos;s possible first — browse the{" "}
                <a href={RESOURCES_HASH} className="link-subtle">sample books</a>, try the{" "}
                <Link href="/wrap-visualiser/" className="link-subtle">wrap visualiser</Link> or
                look through{" "}
                <Link href="/gallery/" className="link-subtle">our latest jobs</Link>.
              </p>
            </div>
            <a href={RESOURCES_HASH} className="kw-btn-ghost shrink-0">
              <BookIcon /> Get inspired
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="kw-section reveal">
        <div className="kw-container max-w-3xl">
          <h2 className="section-heading text-2xl font-semibold text-foreground md:text-4xl">
            Kitchen wrapping quote FAQs
          </h2>
          <p className="kw-section-lead mb-8">
            We quote for complete kitchen wraps, cabinet-only wraps and worktop wraps across
            South Yorkshire, including Sheffield, Doncaster, Barnsley, Rotherham, Leeds,
            Huddersfield and Chesterfield.
          </p>
          <FaqAccordion items={faqItems} />
          <p className="mt-6 text-center text-sm text-muted">
            More detail on our{" "}
            <Link href="/kitchen-wrapping/" className="link-subtle">kitchen wrapping page</Link>,{" "}
            <Link href="/kitchen-wrapping-cost/" className="link-subtle">cost guide</Link> and{" "}
            <Link href="/architectural-vinyl-finishes/" className="link-subtle">
              architectural vinyl finishes
            </Link>
            .
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="kw-section reveal">
        <div className="kw-container">
          <div className="kw-final">
            <p className="kw-eyebrow">
              <span className="kw-eyebrow-dot" aria-hidden="true" />
              Free survey · no obligation
            </p>
            <h2 className="kw-final-title">
              Prefer to <span className="kw-gradient-text">talk it through?</span>
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-muted">
              {siteConfig.yearsInBusiness}+ years in the vinyl wrapping trade. WhatsApp us a
              photo, give us a call, or book your free survey.
            </p>
            <div className="kw-final-actions">
              <a href="#quote" className="kw-btn-primary">
                Start my quote <span aria-hidden="true">↑</span>
              </a>
              <WhatsAppButton className="kw-btn-whatsapp" />
              <Link href="/contact/" className="kw-btn-ghost">
                Book a free survey
              </Link>
            </div>
          </div>
        </div>
      </section>

      <QuoteResources />
    </div>
  );
}

function StarIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true">
      <path
        d="M12 2l2.9 6.26L22 9.27l-5 4.87L18.2 22 12 18.56 5.8 22l1.2-7.86-5-4.87 7.1-1.01L12 2z"
        fill="currentColor"
      />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4 shrink-0 text-accent" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="m5 12 5 5 9-10" />
    </svg>
  );
}

function BookIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4 5a2 2 0 0 1 2-2h13v16H6a2 2 0 0 0-2 2z" />
      <path d="M4 21V5M9 7h6" />
    </svg>
  );
}
