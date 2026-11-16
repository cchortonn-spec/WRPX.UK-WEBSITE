import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FaqAccordion } from "@/components/FaqAccordion";
import { BeforeAfterSlider } from "@/components/BeforeAfterSlider";
import { CostPricePicker } from "@/components/CostPricePicker";
import { CostWrapVideo } from "@/components/CostWrapVideo";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import {
  formatFrom,
  formatPounds,
  kitchenPriceGuide,
  kitchenPricing,
} from "@/lib/pricing";
import { siteConfig } from "@/lib/site-config";

const TITLE = "Kitchen Wrapping Cost UK | Prices From £1,100";
const DESCRIPTION =
  "How much does kitchen wrapping cost? Full kitchens with worktops from £1,100, Shaker from £1,450, worktops from £350. Supply and fit, free fixed quote.";
const OG_TITLE = "Kitchen Wrapping Cost UK: Real Prices From £1,100";
const OG_DESCRIPTION =
  "Full kitchens with worktops from £1,100, Shaker from £1,450 and worktops from £350. See real before and after jobs and get a free fixed quote.";
const OG_IMAGE =
  "/images/Kitchen-navy-marble-doncaster/navy-marble-kitchen-wrap-doncaster-after-01.jpeg";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "https://www.wrpx.co.uk/kitchen-wrapping-cost/" },
  openGraph: {
    title: OG_TITLE,
    description: OG_DESCRIPTION,
    url: "https://www.wrpx.co.uk/kitchen-wrapping-cost/",
    type: "website",
    images: [
      {
        url: `https://www.wrpx.co.uk${OG_IMAGE}`,
        width: 1200,
        height: 1600,
        alt: "Navy kitchen wrap with marble-effect worktops in Doncaster",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: OG_TITLE,
    description: OG_DESCRIPTION,
  },
};

const towns = [
  ["Sheffield", "/kitchen-wrapping-sheffield/"],
  ["Doncaster", "/kitchen-wrapping-doncaster/"],
  ["Rotherham", "/kitchen-wrapping-rotherham/"],
  ["Barnsley", "/kitchen-wrapping-barnsley/"],
  ["Chesterfield", "/kitchen-wrapping-chesterfield/"],
  ["Leeds", "/kitchen-wrapping-leeds/"],
  ["Bradford", "/kitchen-wrapping-bradford/"],
  ["Wakefield", "/kitchen-wrapping-wakefield/"],
  ["Huddersfield", "/kitchen-wrapping-huddersfield/"],
  ["York", "/kitchen-wrapping-york/"],
  ["Manchester", "/kitchen-wrapping-manchester/"],
  ["Nottingham", "/kitchen-wrapping-nottingham/"],
] as const;

const beforeAfterJobs = [
  {
    beforeSrc:
      "/images/Kitchen-navy-marble-doncaster/navy-marble-kitchen-wrap-doncaster-before-01.jpeg",
    afterSrc:
      "/images/Kitchen-navy-marble-doncaster/navy-marble-kitchen-wrap-doncaster-after-01.jpeg",
    beforeAlt: "kitchen in Doncaster ahead of a navy wrap",
    afterAlt: "navy kitchen wrap with marble-effect worktops in Doncaster",
    caption: "Doncaster. Navy kitchen wrap with marble-effect worktops and splashback.",
  },
  {
    beforeSrc:
      "/images/Kitchen-wrap-sheffield-black/black-kitchen-wrap-sheffield-before-01.jpeg",
    afterSrc:
      "/images/Kitchen-wrap-sheffield-black/black-kitchen-wrap-sheffield-after-02.jpeg",
    beforeAlt: "kitchen in Sheffield ahead of a black wrap",
    afterAlt: "full kitchen wrapped in black in Sheffield",
    caption: "Sheffield. Full kitchen wrapped in black.",
  },
  {
    beforeSrc:
      "/images/forest-green-kitchen-wrap-leeds/forest-green-kitchen-island-wrap-leeds-before-01.jpg",
    afterSrc:
      "/images/forest-green-kitchen-wrap-leeds/forest-green-kitchen-island-wrap-leeds-after-01.jpg",
    beforeAlt: "kitchen island in Leeds ahead of wrapping",
    afterAlt: "kitchen island wrapped in forest green in Leeds",
    caption: "Leeds. Kitchen island wrapped in forest green.",
  },
  {
    beforeSrc:
      "/images/marble-worktop-splashback-wrap-sheffield/marble-worktop-splashback-wrap-sheffield-before-01.jpg",
    afterSrc:
      "/images/marble-worktop-splashback-wrap-sheffield/marble-worktop-splashback-wrap-sheffield-after-01.jpg",
    beforeAlt: "worktop and splashback in Sheffield ahead of wrapping",
    afterAlt: "marble-effect worktop and splashback wrap in Sheffield",
    caption: "Sheffield. Worktop and splashback wrapped in a marble effect.",
  },
] as const;

const finishSwatches = [
  { src: "/images/vinyl-finish-samples/coverstyl/coverstyl-k1-black-mat.jpg", label: "Black matt" },
  {
    src: "/images/vinyl-finish-samples/coverstyl/coverstyl-m9-midnight-blue.jpg",
    label: "Midnight blue",
  },
  {
    src: "/images/vinyl-finish-samples/coverstyl/coverstyl-nh21-soft-green.jpg",
    label: "Soft green",
  },
  {
    src: "/images/vinyl-finish-samples/coverstyl/coverstyl-rm26-creamy-white.jpg",
    label: "Creamy white",
  },
  {
    src: "/images/vinyl-finish-samples/coverstyl/coverstyl-rm06-anthracite-gray.jpg",
    label: "Anthracite grey",
  },
  {
    src: "/images/vinyl-finish-samples/coverstyl/coverstyl-ne31-statuary-white.jpg",
    label: "Statuary white marble",
  },
  {
    src: "/images/vinyl-finish-samples/coverstyl/coverstyl-u50-nero-marquina.jpg",
    label: "Nero Marquina marble",
  },
  {
    src: "/images/vinyl-finish-samples/coverstyl/coverstyl-nh54-gray-cement.jpg",
    label: "Grey cement",
  },
  {
    src: "/images/vinyl-finish-samples/coverstyl/coverstyl-aa14-original-oak.jpg",
    label: "Original oak",
  },
  {
    src: "/images/vinyl-finish-samples/coverstyl/coverstyl-nh72-timeless-walnut.jpg",
    label: "Timeless walnut",
  },
] as const;

const sampleBooks = [
  {
    cover: "/images/brochure-covers/cover-styl-sample-book-cover.jpg",
    file: "/docs/vinyl-sample-books/cover-styl-architectural-vinyl-pattern-book.pdf",
    alt: "Cover Styl architectural vinyl sample book cover",
    label: "Cover Styl pattern book",
  },
  {
    cover: "/images/brochure-covers/3m-dinoc-sample-book-cover.jpg",
    file: "/docs/vinyl-sample-books/3m-dinoc-kitchen-wrap-finishes-sample-book.pdf",
    alt: "3M DI-NOC kitchen wrap finishes sample book cover",
    label: "3M DI-NOC finishes",
  },
  {
    cover: "/images/brochure-covers/benif-sample-book-cover.jpg",
    file: "/docs/vinyl-sample-books/benif-kitchen-vinyl-finishes-sample-book-2025.pdf",
    alt: "Benif kitchen vinyl finishes sample book cover",
    label: "Benif finishes",
  },
] as const;

const costFactors = [
  {
    title: "Kitchen size",
    text: `More units means more material and time. Larger kitchens start from around £${kitchenPricing.largerKitchen.toLocaleString("en-GB")}.`,
  },
  {
    title: "Doors and drawers",
    text: "Each door and drawer front is wrapped by hand, so the count matters most.",
  },
  {
    title: "Door style",
    text: "Flat doors are quickest. Shaker doors have more edges, so they cost a little more.",
  },
  {
    title: "Finish and brand",
    text: "We use Cover Styl, LX Hausys and 3M DI-NOC. Premium finishes cost a little more.",
  },
  {
    title: "Worktop length",
    text: `Longer runs, corners and upstands add time. Worktops start from around £${kitchenPricing.worktopsOnly.toLocaleString("en-GB")}.`,
  },
  {
    title: "Surface condition",
    text: `Chips and dents are filled first, from around £${kitchenPricing.doorRepair} per door.`,
  },
] as const;

function buildFaqs() {
  const p = kitchenPricing;
  return [
    {
      q: "How much does it cost to wrap a kitchen?",
      a: `A full kitchen wrap in the UK starts from around £${p.fullKitchen.toLocaleString("en-GB")}. That covers a typical kitchen of about 10 to 12 doors, including cupboard doors, drawer fronts, frames, plinths and worktops, supplied and fitted. Larger kitchens of 15 to 20 doors start from around £${p.largerKitchen.toLocaleString("en-GB")}. Your exact price depends on size, door style and finish, and you'll get a fixed quote before any work starts.`,
    },
    {
      q: "How much does it cost to wrap a Shaker kitchen?",
      a: `A Shaker-style kitchen with worktops starts from around £${p.shakerKitchen.toLocaleString("en-GB")} for about 10 to 12 doors. Shaker doors have a raised frame and more edges, so they take longer to wrap neatly than flat doors. If you only want the Shaker doors wrapped, without worktops, prices start from around £${p.shakerDoorsOnly.toLocaleString("en-GB")}.`,
    },
    {
      q: "How much does worktop wrapping cost?",
      a: `Worktop wrapping starts from around £${p.worktopsOnly}, supply and fit. It's one of the quickest and most affordable ways to change a kitchen, with marble, stone, concrete and wood effects available. The price depends on the length of the worktops, corners, cut-outs and upstands. Splashbacks and upstands on their own start from around £${p.splashback}.`,
    },
    {
      q: "What is the cost to wrap kitchen doors only?",
      a: `Wrapping the cupboard doors on a full kitchen, without the worktops, starts from around £${p.doorsOnlyFullKitchen} for flat doors (about 10 to 12 doors), or around £${p.shakerDoorsOnly.toLocaleString("en-GB")} for Shaker doors. For smaller jobs, single doors start from £${p.singleDoor}, drawer fronts from £${p.drawerFront} and end panels from £${p.endPanel}. It's a great option if your worktops are already in good shape.`,
    },
    {
      q: "How much does it cost to wrap a kitchen island?",
      a: `Wrapping a kitchen island, including the sides and top, starts from around £${p.island}. Islands are a popular way to add a contrast colour, such as a deep green or navy, against lighter cabinets. If you're wrapping the rest of the kitchen at the same time, we'll include the island in one fixed quote.`,
    },
    {
      q: "Is wrapping a kitchen cheaper than buying a new one?",
      a: `Yes, by a long way. A new kitchen typically costs £${p.newKitchenLow.toLocaleString("en-GB")} to £${p.newKitchenHigh.toLocaleString("en-GB")}, while a full kitchen wrap with worktops starts from around £${p.fullKitchen.toLocaleString("en-GB")}. That's about 70 to 80% less. Wrapping keeps your existing cabinets, so there's no rip-out, no building work and far less disruption. It works best when your cabinets are structurally sound.`,
    },
    {
      q: "What affects the price of a kitchen wrap?",
      a: `The main things are the size of your kitchen, the number of doors and drawers, the door style, the finish you choose, the length of your worktops and the condition of the surfaces. Shaker doors cost a little more than flat doors, and premium finishes such as 3M DI-NOC cost a little more too. Minor repairs start from around £${p.doorRepair} per door.`,
    },
    {
      q: "How long does a kitchen wrap last, and is it guaranteed?",
      a: "A good quality architectural vinyl, fitted properly, is made to last for many years in a busy kitchen. We use trusted brands like Cover Styl, LX Hausys and 3M DI-NOC, and every kitchen we wrap comes with a 5-year guarantee. Cleaning is simple: a soft cloth and mild soapy water is all it needs.",
    },
    {
      q: "How long does it take to wrap a kitchen?",
      a: "Most kitchens are wrapped in 1 to 3 days, depending on the size and what's included. Worktops on their own are often quicker. Because we wrap your existing cabinets in place, there's no rip-out and no waiting for new units, and you can usually keep using your kitchen around the work.",
    },
    {
      q: "Do you cover my area?",
      a: "We're based in South Yorkshire and wrap kitchens across the whole UK. We regularly work in Sheffield, Doncaster, Rotherham, Barnsley, Leeds and the surrounding areas, and travel further for full kitchen projects. Send us your postcode and a few photos, and we'll confirm everything in your fixed quote.",
    },
    {
      q: "How do I get an exact price?",
      a: "Send a few photos of your kitchen on WhatsApp, or fill in our quick quote form. We'll come back with a fixed price, or arrange a free survey if we need to measure up. The quote is free with no obligation, and the price we give you is the price you pay. There's no VAT to add.",
    },
  ] as const;
}

function CheckIcon() {
  return (
    <svg
      className="cost-check-icon"
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M16.7 5.3a1 1 0 0 1 0 1.4l-8 8a1 1 0 0 1-1.4 0l-4-4a1 1 0 1 1 1.4-1.4L8 12.6l7.3-7.3a1 1 0 0 1 1.4 0z"
        fill="currentColor"
      />
    </svg>
  );
}

function FactorIcon() {
  return (
    <svg className="cost-factor-icon" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
      <path d="M12 7v5l3 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export default function KitchenWrappingCostPage() {
  const faqs = buildFaqs();

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Kitchen wrapping",
    serviceType: "Kitchen vinyl wrapping (supply and fit)",
    provider: {
      "@type": "LocalBusiness",
      name: "WRPX",
      url: "https://www.wrpx.co.uk",
      email: siteConfig.email,
      telephone: siteConfig.phoneE164,
    },
    areaServed: {
      "@type": "Country",
      name: "United Kingdom",
    },
    offers: [
      {
        "@type": "Offer",
        name: "Full kitchen with worktops",
        priceCurrency: "GBP",
        priceSpecification: {
          "@type": "PriceSpecification",
          minPrice: kitchenPricing.fullKitchen,
          priceCurrency: "GBP",
        },
      },
      {
        "@type": "Offer",
        name: "Shaker kitchen with worktops",
        priceCurrency: "GBP",
        priceSpecification: {
          "@type": "PriceSpecification",
          minPrice: kitchenPricing.shakerKitchen,
          priceCurrency: "GBP",
        },
      },
      {
        "@type": "Offer",
        name: "Worktops only",
        priceCurrency: "GBP",
        priceSpecification: {
          "@type": "PriceSpecification",
          minPrice: kitchenPricing.worktopsOnly,
          priceCurrency: "GBP",
        },
      },
    ],
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.wrpx.co.uk/" },
      {
        "@type": "ListItem",
        position: 2,
        name: "Kitchen wrapping",
        item: "https://www.wrpx.co.uk/kitchen-wrapping/",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Kitchen wrapping cost",
        item: "https://www.wrpx.co.uk/kitchen-wrapping-cost/",
      },
    ],
  };

  return (
    <div className="cost-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* 6.1 Hero */}
      <section className="cost-hero border-b border-border bg-card">
        <div className="container mx-auto max-w-6xl px-4 py-12 md:py-16">
          <div className="cost-hero-grid">
            <div className="cost-hero-copy">
              <nav className="cost-breadcrumb" aria-label="Breadcrumb">
                <Link href="/">Home</Link>
                <span aria-hidden="true"> / </span>
                <Link href="/kitchen-wrapping/">Kitchen wrapping</Link>
                <span aria-hidden="true"> / </span>
                <span>Kitchen wrapping cost</span>
              </nav>
              <h1 className="mt-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
                How Much Does Kitchen Wrapping Cost in the UK?
              </h1>
              <p className="mt-5 text-lg text-muted leading-relaxed md:text-xl">
                A full kitchen wrap, including cupboard doors and worktops, starts from around{" "}
                <strong className="text-foreground">
                  {formatPounds(kitchenPricing.fullKitchen)}
                </strong>
                . That&apos;s about 70 to 80% less than a new kitchen, with no rip-out and usually
                just 1 to 3 days of work.
              </p>
              <p className="mt-3 text-muted leading-relaxed">
                Shaker kitchens start from around {formatPounds(kitchenPricing.shakerKitchen)}, and
                worktops alone from around {formatPounds(kitchenPricing.worktopsOnly)}. Every price
                is supply and fit, with no VAT to add.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/kitchen-wrapping-quote/" className="btn-primary">
                  Get my fixed quote
                </Link>
                <WhatsAppButton variant="outline" label="WhatsApp a photo" />
              </div>
              <ul className="cost-trust-row mt-8">
                {[
                  "5-year guarantee",
                  "Usually 1 to 3 days",
                  "No rip-out, no mess",
                  "Free survey and fixed quote",
                ].map((item) => (
                  <li key={item}>
                    <CheckIcon />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="cost-hero-media">
              <div className="cost-hero-photo">
                <Image
                  src={OG_IMAGE}
                  alt="Navy kitchen wrap with marble-effect worktops and splashback in Doncaster"
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 480px"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6.2 Prices at a glance */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-6xl">
          <h2 className="section-heading text-2xl font-semibold text-foreground md:text-3xl">
            Kitchen wrapping prices at a glance
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-muted leading-relaxed">
            Three simple starting points. Your fixed quote is based on your actual kitchen, so
            you&apos;ll know the exact price before any work starts.
          </p>
          <div className="cost-price-cards mt-10">
            <article className="cost-price-card">
              <div className="cost-price-card-photo">
                <Image
                  src="/images/door-styles/shaker-doors-drawers.png"
                  alt="Shaker-style kitchen door and drawer in a soft sage finish"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 90vw, 320px"
                />
              </div>
              <div className="cost-price-card-body">
                <h3 className="cost-price-card-title">Shaker kitchen</h3>
                <p className="cost-price-card-price">
                  {formatFrom(kitchenPricing.shakerKitchen)}
                </p>
                <p className="cost-price-card-sub">About 10 to 12 doors, with worktops</p>
                <ul>
                  <li>Shaker doors wrapped with crisp, clean edges</li>
                  <li>Drawer fronts, frames and plinths</li>
                  <li>Worktops wrapped to match or contrast</li>
                  <li>Supply and fit, 5-year guarantee</li>
                </ul>
                <Link
                  href="/kitchen-wrapping-quote/?type=complete&door=shaker"
                  className="btn-secondary mt-5 inline-block w-full text-center"
                >
                  Quote my Shaker kitchen
                </Link>
              </div>
            </article>

            <article className="cost-price-card cost-price-card--featured">
              <span className="cost-price-pill">Full makeover</span>
              <div className="cost-price-card-photo">
                <Image
                  src="/images/navy-kitchen-wrap-manchester/navy-kitchen-wrap-manchester-01.jpg"
                  alt="Navy flat-door kitchen wrap in Manchester"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 90vw, 320px"
                />
              </div>
              <div className="cost-price-card-body">
                <h3 className="cost-price-card-title">Full kitchen</h3>
                <p className="cost-price-card-price">{formatFrom(kitchenPricing.fullKitchen)}</p>
                <p className="cost-price-card-sub">About 10 to 12 doors, with worktops</p>
                <ul>
                  <li>Cupboard doors and drawer fronts</li>
                  <li>Frames, end panels and plinths</li>
                  <li>Worktops wrapped to match or contrast</li>
                  <li>Supply and fit, 5-year guarantee</li>
                </ul>
                <Link
                  href="/kitchen-wrapping-quote/?type=complete"
                  className="btn-primary mt-5 inline-block w-full text-center"
                >
                  Quote my kitchen
                </Link>
              </div>
            </article>

            <article className="cost-price-card">
              <div className="cost-price-card-photo">
                <Image
                  src="/images/white-marble-worktop-wrap-sheffield/white-marble-worktop-wrap-sheffield-01.jpg"
                  alt="White marble-effect worktop wrap in Sheffield"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 90vw, 320px"
                />
              </div>
              <div className="cost-price-card-body">
                <h3 className="cost-price-card-title">Worktops only</h3>
                <p className="cost-price-card-price">
                  {formatFrom(kitchenPricing.worktopsOnly)}
                </p>
                <p className="cost-price-card-sub">A fast, affordable refresh</p>
                <ul>
                  <li>Marble, stone, concrete or wood effects</li>
                  <li>Edges and upstands finished neatly</li>
                  <li>Usually done in a day</li>
                  <li>Supply and fit, 5-year guarantee</li>
                </ul>
                <Link
                  href="/kitchen-wrapping-quote/?type=worktop"
                  className="btn-secondary mt-5 inline-block w-full text-center"
                >
                  Quote my worktops
                </Link>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* 6.3 Price guide table */}
      <section className="border-y border-border bg-card px-4 py-16">
        <div className="container mx-auto max-w-3xl">
          <h2 className="section-heading text-2xl font-semibold text-foreground md:text-3xl">
            Kitchen wrapping price guide
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-muted leading-relaxed">
            Want more detail? Here&apos;s what kitchen wrapping costs for the most common jobs, from
            a few doors to a full kitchen. All prices are supply and fit.
          </p>
          <div className="cost-table mt-8">
            <div className="cost-table-head">
              <span>What</span>
              <span>From around</span>
            </div>
            {kitchenPriceGuide.map((row) => (
              <div key={row.label} className="cost-table-row">
                <span className="cost-table-label">{row.label}</span>
                <span className="cost-table-price">
                  {formatPounds(row.price)}
                  {row.unit ? ` ${row.unit}` : ""}
                </span>
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm text-muted leading-relaxed">
            These are starting prices to give you a rough idea. Your exact price depends on the
            size of your kitchen, the number of doors and drawers, the door style, the finish you
            choose and the condition of the surfaces. You&apos;ll get one fixed price after a free
            survey or from photos. Premium finishes, such as 3M DI-NOC and some stone and metallic
            effects, cost a little more. There&apos;s no VAT to add.
          </p>
          <p className="mt-4 text-sm">
            <Link href="/blog/worktop-wrapping-cost/" className="text-accent hover:underline">
              Just doing worktops? See our worktop wrapping cost guide
            </Link>
          </p>
        </div>
      </section>

      {/* 6.4 Before and after */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-6xl">
          <h2 className="section-heading text-2xl font-semibold text-foreground md:text-3xl">
            Real kitchens, before and after
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-muted leading-relaxed">
            Same kitchen, same layout, a completely new look. Drag the slider to see the
            difference.
          </p>
          <div className="mt-10">
            <BeforeAfterSlider
              priority={false}
              beforeSrc={beforeAfterJobs[0].beforeSrc}
              afterSrc={beforeAfterJobs[0].afterSrc}
              beforeAlt={beforeAfterJobs[0].beforeAlt}
              afterAlt={beforeAfterJobs[0].afterAlt}
              beforeWidth={768}
              beforeHeight={1024}
              afterWidth={768}
              afterHeight={1024}
            />
            <p className="mt-3 text-center text-sm text-muted">{beforeAfterJobs[0].caption}</p>
          </div>
          <div className="cost-ba-grid mt-8">
            {beforeAfterJobs.slice(1).map((job) => (
              <figure key={job.caption} className="cost-ba-item">
                <BeforeAfterSlider
                  priority={false}
                  beforeSrc={job.beforeSrc}
                  afterSrc={job.afterSrc}
                  beforeAlt={job.beforeAlt}
                  afterAlt={job.afterAlt}
                  beforeWidth={768}
                  beforeHeight={1024}
                  afterWidth={768}
                  afterHeight={1024}
                />
                <figcaption className="mt-3 text-sm text-muted">{job.caption}</figcaption>
              </figure>
            ))}
          </div>
          <p className="mt-8 text-center">
            <Link href="/gallery/" className="text-accent hover:underline">
              See more finished kitchens in our gallery
            </Link>
          </p>
        </div>
      </section>

      {/* 6.5 Find your starting price */}
      <section className="border-y border-border bg-card px-4 py-16">
        <div className="container mx-auto max-w-3xl">
          <h2 className="section-heading text-2xl font-semibold text-foreground md:text-3xl">
            Find your starting price
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-muted leading-relaxed">
            Pick the option closest to your kitchen and we&apos;ll show you where prices start.
          </p>
          <div className="mt-8">
            <CostPricePicker />
          </div>
        </div>
      </section>

      {/* 6.6 Comparison */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-6xl">
          <h2 className="section-heading text-2xl font-semibold text-foreground md:text-3xl">
            Wrapping vs a new kitchen vs spraying
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-muted leading-relaxed">
            Three ways to change how your kitchen looks. Here&apos;s how they compare.
          </p>
          <div className="cost-compare-grid mt-10">
            <article className="cost-compare-card cost-compare-card--best">
              <span className="cost-price-pill">Best value</span>
              <h3>Kitchen wrap</h3>
              <dl>
                <div>
                  <dt>Cost</dt>
                  <dd>{formatFrom(kitchenPricing.fullKitchen)} with worktops</dd>
                </div>
                <div>
                  <dt>Time</dt>
                  <dd>Usually 1 to 3 days</dd>
                </div>
                <div>
                  <dt>Mess</dt>
                  <dd>Minimal. No rip-out, no dust, kitchen usable most of the time</dd>
                </div>
                <div>
                  <dt>Finishes</dt>
                  <dd>Hundreds of colours, woods, marbles and textures</dd>
                </div>
                <div>
                  <dt>Guarantee</dt>
                  <dd>5 years</dd>
                </div>
              </dl>
            </article>
            <article className="cost-compare-card">
              <h3>New kitchen</h3>
              <dl>
                <div>
                  <dt>Cost</dt>
                  <dd>
                    Typically {formatPounds(kitchenPricing.newKitchenLow)} to{" "}
                    {formatPounds(kitchenPricing.newKitchenHigh)}
                  </dd>
                </div>
                <div>
                  <dt>Time</dt>
                  <dd>Often several weeks from order to finish</dd>
                </div>
                <div>
                  <dt>Mess</dt>
                  <dd>Full rip-out, trades and disruption</dd>
                </div>
                <div>
                  <dt>Finishes</dt>
                  <dd>Wide choice</dd>
                </div>
                <div>
                  <dt>Guarantee</dt>
                  <dd>Depends on the supplier</dd>
                </div>
              </dl>
            </article>
            <article className="cost-compare-card">
              <h3>Spraying</h3>
              <dl>
                <div>
                  <dt>Cost</dt>
                  <dd>Usually more than wrapping</dd>
                </div>
                <div>
                  <dt>Time</dt>
                  <dd>Usually longer than wrapping</dd>
                </div>
                <div>
                  <dt>Mess</dt>
                  <dd>Masking, prep and drying time</dd>
                </div>
                <div>
                  <dt>Finishes</dt>
                  <dd>Solid colours only</dd>
                </div>
                <div>
                  <dt>Guarantee</dt>
                  <dd>Depends on the company</dd>
                </div>
              </dl>
            </article>
          </div>
          <p className="mt-8 text-center text-muted leading-relaxed">
            If your cabinets are sound, wrapping gives you the look of a new kitchen for a
            fraction of the price.
          </p>
          <p className="mt-4 flex flex-wrap justify-center gap-x-4 gap-y-2 text-sm">
            <Link
              href="/blog/kitchen-wrapping-vs-new-kitchen/"
              className="text-accent hover:underline"
            >
              Kitchen wrapping vs a new kitchen
            </Link>
            <Link
              href="/blog/kitchen-wrapping-vs-painting/"
              className="text-accent hover:underline"
            >
              Kitchen wrapping vs painting
            </Link>
            <Link
              href="/blog/kitchen-wrapping-vs-kitchen-spraying/"
              className="text-accent hover:underline"
            >
              Kitchen wrapping vs spraying
            </Link>
          </p>
        </div>
      </section>

      {/* 6.7 What affects cost */}
      <section className="border-y border-border bg-card px-4 py-16">
        <div className="container mx-auto max-w-6xl">
          <h2 className="section-heading text-2xl font-semibold text-foreground md:text-3xl">
            What affects the cost of a kitchen wrap?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-muted leading-relaxed">
            Every kitchen is different. These are the things that move the price up or down.
          </p>
          <div className="cost-factors mt-10">
            {costFactors.map((item) => (
              <div key={item.title} className="cost-factor card-float">
                <FactorIcon />
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6.8 Finishes */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-6xl">
          <h2 className="section-heading text-2xl font-semibold text-foreground md:text-3xl">
            Choose your finish
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-muted leading-relaxed">
            Matt colours, real-looking woods, marbles and concrete. Most finishes are included in
            our starting prices. Premium ranges cost a little more.
          </p>
          <div className="cost-swatches mt-10">
            {finishSwatches.map((swatch) => (
              <figure key={swatch.src} className="cost-swatch">
                <div className="cost-swatch-img">
                  <Image
                    src={swatch.src}
                    alt={`Cover Styl ${swatch.label.toLowerCase()} kitchen wrap finish`}
                    fill
                    className="object-cover"
                    sizes="120px"
                  />
                </div>
                <figcaption>{swatch.label}</figcaption>
              </figure>
            ))}
          </div>
          <div className="cost-sample-books mt-10">
            {sampleBooks.map((book) => (
              <a
                key={book.file}
                href={book.file}
                target="_blank"
                rel="noopener noreferrer"
                className="cost-sample-book card-float"
              >
                <div className="cost-sample-book-cover">
                  <Image
                    src={book.cover}
                    alt={book.alt}
                    fill
                    className="object-cover"
                    sizes="160px"
                  />
                </div>
                <span>{book.label}</span>
              </a>
            ))}
          </div>
          <p className="mt-8 text-center">
            <Link href="/architectural-vinyl-finishes/" className="text-accent hover:underline">
              Explore all our vinyl finishes
            </Link>
          </p>
        </div>
      </section>

      {/* 6.9 Video */}
      <section className="border-y border-border bg-card px-4 py-16">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="section-heading text-2xl font-semibold text-foreground md:text-3xl">
            See a kitchen wrap come together
          </h2>
          <div className="mt-8">
            <CostWrapVideo
              src="/videos/navy-kitchen-wrap-manchester.mp4"
              poster="/videos/navy-kitchen-wrap-manchester.jpg"
              label="Navy kitchen wrap in Manchester"
            />
          </div>
          <p className="mt-4 text-muted leading-relaxed">
            A navy kitchen wrap in Manchester. Same cabinets, a whole new look, and no rip-out.
          </p>
        </div>
      </section>

      {/* 6.10 How it works */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-6xl">
          <h2 className="section-heading text-2xl font-semibold text-foreground md:text-3xl">
            How it works
          </h2>
          <ol className="cost-steps mt-10">
            <li>
              <span className="cost-step-num">1</span>
              <h3>Send us a few photos</h3>
              <p>
                WhatsApp a couple of pictures of your kitchen, or fill in the quote form. It takes
                two minutes.
              </p>
            </li>
            <li>
              <span className="cost-step-num">2</span>
              <h3>Get a fixed quote</h3>
              <p>
                We&apos;ll send a clear, fixed price, or book a free survey if we need to measure
                up. No surprises later.
              </p>
            </li>
            <li>
              <span className="cost-step-num">3</span>
              <h3>Pick your finish</h3>
              <p>
                Choose from matt colours, woods, marbles and concrete, with samples to help you
                decide.
              </p>
            </li>
            <li>
              <span className="cost-step-num">4</span>
              <h3>We fit it, usually in 1 to 3 days</h3>
              <p>
                Your kitchen is transformed in place, with no rip-out, and backed by a 5-year
                guarantee.
              </p>
            </li>
          </ol>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <Link href="/kitchen-wrapping-quote/" className="btn-primary">
              Get my fixed quote
            </Link>
            <WhatsAppButton variant="outline" label="WhatsApp a photo" />
          </div>
        </div>
      </section>

      {/* 6.11 Choosing a company */}
      <section className="border-y border-border bg-card px-4 py-16">
        <div className="container mx-auto max-w-3xl">
          <h2 className="section-heading text-2xl font-semibold text-foreground md:text-3xl">
            Choosing a kitchen wrapping company
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-muted leading-relaxed">
            A cheap quote isn&apos;t always the best value. Whoever you choose, check these five
            things before you book.
          </p>
          <ul className="cost-checklist mt-8">
            <li>
              <CheckIcon />
              <div>
                <strong>The material brand.</strong> Ask which vinyl is used. Architectural films
                from names like Cover Styl, LX Hausys and 3M DI-NOC are made for kitchens and last.
              </div>
            </li>
            <li>
              <CheckIcon />
              <div>
                <strong>What&apos;s included.</strong> Make sure the price covers doors, drawer
                fronts, frames, end panels, plinths and worktops if you want them, not just the
                doors.
              </div>
            </li>
            <li>
              <CheckIcon />
              <div>
                <strong>Prep work.</strong> Good results depend on cleaning, filling and repairing
                surfaces first. Ask if it&apos;s included.
              </div>
            </li>
            <li>
              <CheckIcon />
              <div>
                <strong>The guarantee.</strong> Find out how long it lasts and what it covers.
                Ours is 5 years.
              </div>
            </li>
            <li>
              <CheckIcon />
              <div>
                <strong>Real photos.</strong> Ask to see before and after photos of kitchens they
                have wrapped themselves.
              </div>
            </li>
          </ul>
        </div>
      </section>

      {/* 6.12 Internal link strip */}
      <section className="px-4 py-10">
        <div className="container mx-auto max-w-3xl text-center text-muted leading-relaxed">
          Planning your project? Read more about{" "}
          <Link href="/kitchen-wrapping/" className="text-accent hover:underline">
            kitchen wrapping
          </Link>
          ,{" "}
          <Link href="/kitchen-door-wrapping/" className="text-accent hover:underline">
            kitchen door wrapping
          </Link>
          ,{" "}
          <Link href="/worktop-wrapping/" className="text-accent hover:underline">
            worktop wrapping
          </Link>{" "}
          and{" "}
          <Link href="/kitchen-island-wrapping/" className="text-accent hover:underline">
            kitchen island wrapping
          </Link>
          .
        </div>
      </section>

      {/* 6.13 FAQs */}
      <section className="border-t border-border px-4 py-16">
        <div className="container mx-auto max-w-3xl">
          <h2 className="section-heading text-2xl font-semibold text-foreground md:text-3xl">
            Kitchen wrapping cost FAQs
          </h2>
          <div className="mt-8">
            <FaqAccordion items={[...faqs]} defaultOpenFirst />
          </div>
        </div>
      </section>

      {/* 6.14 Final CTA */}
      <section className="cost-cta-band">
        <Image
          src="/images/navy-kitchen-wrap-manchester/navy-kitchen-wrap-manchester-03.jpg"
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="cost-cta-overlay" />
        <div className="container relative z-10 mx-auto max-w-3xl px-4 py-20 text-center">
          <h2 className="text-2xl font-semibold text-white md:text-3xl">
            Get your free fixed quote
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-white/85 leading-relaxed">
            Send us a few photos and we&apos;ll tell you exactly what your kitchen will cost. No
            pressure, no obligation, and the price we quote is the price you pay.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link href="/kitchen-wrapping-quote/" className="btn-primary">
              Get my fixed quote
            </Link>
            <WhatsAppButton variant="outline" label="WhatsApp a photo" />
            <a href={`tel:${siteConfig.phoneE164}`} className="btn-secondary">
              Call {siteConfig.phone}
            </a>
          </div>
          <p className="mt-4 text-sm text-white/70">
            Or email{" "}
            <a href={`mailto:${siteConfig.email}`} className="underline hover:text-white">
              {siteConfig.email}
            </a>
          </p>
        </div>
      </section>

      {/* 6.16 Near you */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-2xl font-semibold text-foreground">Kitchen wrapping near you</h2>
          <p className="mt-4 text-muted leading-relaxed">
            Based in South Yorkshire, covering the whole UK. Local pages for the towns we wrap
            most often:
          </p>
          <div className="mt-6 flex flex-wrap gap-x-4 gap-y-2 text-sm">
            {towns.map(([label, href]) => (
              <Link key={href} href={href} className="text-accent hover:underline">
                {label}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
