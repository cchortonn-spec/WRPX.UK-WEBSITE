import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/lib/site-config";
import { getServiceSchema } from "@/lib/schema";
import { faqItems } from "@/lib/faq-data";
import { googleReviews } from "@/lib/google-reviews";
import { photosByName } from "@/lib/portfolio";
import { BeforeAfterShowcase } from "@/components/BeforeAfterShowcase";
import { VideoReels } from "@/components/VideoReels";
import { GoogleReviewsBar } from "@/components/GoogleReviewsBar";
import { FaqAccordion } from "@/components/FaqAccordion";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "Kitchen Wrapping Service South Yorkshire | Doors, Frames & Worktops",
  description:
    "Kitchen wrapping South Yorkshire — doors, worktops, frames in 1–3 days. From £1,099 full kitchen. Free survey, fixed quote. Sheffield, Leeds, Doncaster & more.",
  alternates: { canonical: "https://www.wrpx.co.uk/kitchen-wrapping/" },
};

const QUOTE_HREF = "/kitchen-wrapping-quote/";
const NAVY = "/images/Kitchen-navy-marble-doncaster/navy-marble-kitchen-wrap-doncaster";
const BLACK = "/images/Kitchen-wrap-sheffield-black/black-kitchen-wrap-sheffield";

const stats = [
  { value: "70–80%", label: "less than a new kitchen" },
  { value: "1–3 days", label: "typical install, no rip-out" },
  { value: `${siteConfig.guaranteeYears} years`, label: "named guarantee" },
  { value: "£1,099", label: "full kitchens from" },
];

const transformations = [
  {
    title: "Cream to matte black",
    place: "Sheffield",
    line: "Full kitchen wrap in matte black with a marble-effect worktop.",
    before: { src: `${BLACK}-before-01.jpeg`, alt: "Cream kitchen in Sheffield before vinyl wrapping" },
    after: { src: `${BLACK}-after-01.jpeg`, alt: "Matte black kitchen wrap in Sheffield after" },
  },
  {
    title: "Grey gloss to navy & marble",
    place: "Doncaster",
    line: "Navy wood-effect doors with white marble worktops and splashback.",
    before: { src: `${NAVY}-before-01.jpeg`, alt: "Grey gloss kitchen in Doncaster before vinyl wrapping" },
    after: { src: `${NAVY}-after-04.jpeg`, alt: "Navy wood-effect kitchen wrap with marble worktop and splashback in Doncaster after" },
  },
];

const included = [
  "Doors",
  "Drawer fronts",
  "Carcass faces",
  "End panels",
  "Plinths",
  "Cornice & pelmet",
  "Worktops",
  "Splashbacks & tiles",
];

const prices = [
  {
    name: "Door wrapping",
    amount: "£45",
    unit: "per door",
    features: ["Individual doors or full sets", "Matt, gloss, woodgrain or marble", "Doors wrapped in our workshop"],
    href: "/kitchen-door-wrapping/",
    cta: "Door wrapping",
  },
  {
    name: "Full kitchen",
    amount: "£1,099",
    unit: "10–12 doors, frames & plinths",
    features: ["Doors, drawers, carcass faces & end panels", "Plinths, cornice and pelmet", "Usually 1–3 days, no rip-out"],
    href: QUOTE_HREF,
    cta: "Get my free quote",
    featured: true,
  },
  {
    name: "Worktops only",
    amount: "£380",
    unit: "worktop wrap",
    features: ["Marble, stone or wood-effect", "Heat- and scratch-resistant finishes", "A fraction of replacement cost"],
    href: "/worktop-wrapping/",
    cta: "Worktop wrapping",
  },
];

const SWATCH_DIR = "/images/vinyl-finish-samples/coverstyl";

const finishes = [
  { code: "K1", name: "Black mat", type: "Solid colour", file: "coverstyl-k1-black-mat.jpg" },
  { code: "RM06", name: "Anthracite gray", type: "Solid colour", file: "coverstyl-rm06-anthracite-gray.jpg" },
  { code: "M9", name: "Midnight blue", type: "Solid colour", file: "coverstyl-m9-midnight-blue.jpg" },
  { code: "NH21", name: "Soft green", type: "Solid colour", file: "coverstyl-nh21-soft-green.jpg" },
  { code: "RM26", name: "Creamy white", type: "Solid colour", file: "coverstyl-rm26-creamy-white.jpg" },
  { code: "NH80", name: "Sand oak", type: "Woodgrain", file: "coverstyl-nh80-sand-oak.jpg" },
  { code: "AA14", name: "Original oak", type: "Woodgrain", file: "coverstyl-aa14-original-oak.jpg" },
  { code: "NH72", name: "Timeless walnut", type: "Woodgrain", file: "coverstyl-nh72-timeless-walnut.jpg" },
  { code: "NE31", name: "Statuary white", type: "Marble", file: "coverstyl-ne31-statuary-white.jpg" },
  { code: "U50", name: "Nero marquina", type: "Marble", file: "coverstyl-u50-nero-marquina.jpg" },
  { code: "NH54", name: "Gray cement", type: "Concrete", file: "coverstyl-nh54-gray-cement.jpg" },
  { code: "NH34", name: "Gray raw granite", type: "Stone", file: "coverstyl-nh34-gray-raw-granite.jpg" },
];

const galleryPhotos = photosByName(
  "navy-marble-kitchen-wrap-doncaster-after-01",
  "black-kitchen-wrap-sheffield-after-02",
  "marble-effect-worktop-wrap-pontefract-01",
  "grey-stone-worktop-wrap-sheffield-01",
  "kitchen-wrap-grey-rotherham-01",
  "white-gloss-kitchen-wrap-doncaster-01",
);

const comparison = [
  {
    name: "Kitchen wrap",
    best: true,
    rows: [
      ["Cost", "From £1,099 — 70–80% less than new"],
      ["Time", "1–3 days"],
      ["Disruption", "No rip-out — kitchen stays usable"],
      ["Finish", "Scratch, impact & heat resistant"],
      ["Guarantee", `${siteConfig.guaranteeYears}-year named guarantee`],
    ],
  },
  {
    name: "New kitchen",
    rows: [
      ["Cost", "Typically £5,000–£15,000"],
      ["Time", "Weeks — design, order lead times, then fitting"],
      ["Disruption", "Full rip-out, plus trades for plumbing, electrics and tiling"],
      ["Finish", "Brand-new units and layout"],
      ["Guarantee", "Varies by fitter"],
    ],
  },
  {
    name: "Paint spraying",
    rows: [
      ["Cost", "Often more than wrapping"],
      ["Time", "Several days, plus curing time before normal use"],
      ["Disruption", "Sanding, masking off the room, and paint fumes"],
      ["Finish", "Can chip, and touch-ups are hard to colour-match"],
      ["Guarantee", "Varies by sprayer"],
    ],
  },
];

const steps = [
  { num: 1, title: "Free survey", body: "We assess doors, frames and surfaces, bring samples, and give you an honest report on suitability." },
  { num: 2, title: "Surface preparation", body: "Cleaning, degreasing, light sanding where needed. This is where quality is won or lost." },
  { num: 3, title: "Wrapping", body: "Doors removed and wrapped in our workshop; frames and carcass wrapped in-situ." },
  { num: 4, title: "Refit & walkround", body: "Doors rehung, hardware refitted, and a full walkround with you before we sign off." },
];

const cities = [
  ["Sheffield", "/kitchen-wrapping-sheffield/"],
  ["Leeds", "/kitchen-wrapping-leeds/"],
  ["Doncaster", "/kitchen-wrapping-doncaster/"],
  ["Rotherham", "/kitchen-wrapping-rotherham/"],
  ["Barnsley", "/kitchen-wrapping-barnsley/"],
  ["Huddersfield", "/kitchen-wrapping-huddersfield/"],
  ["Chesterfield", "/kitchen-wrapping-chesterfield/"],
  ["Wakefield", "/kitchen-wrapping-wakefield/"],
  ["York", "/kitchen-wrapping-york/"],
  ["Bradford", "/kitchen-wrapping-bradford/"],
  ["Nottingham", "/kitchen-wrapping-nottingham/"],
  ["Manchester", "/kitchen-wrapping-manchester/"],
] as const;

const relatedServices = [
  { title: "Kitchen door wrapping", body: "Individual doors or full sets from £45 per door", href: "/kitchen-door-wrapping/" },
  { title: "Worktop wrapping", body: "Marble, stone and wood-effect heat-resistant vinyl from £380", href: "/worktop-wrapping/" },
  { title: "Bathroom cabinet wrapping", body: "Moisture-resistant vinyl for vanity units and bathroom furniture", href: "/bathroom-cabinet-wrapping/" },
  { title: "Bedroom wardrobe wrapping", body: "Fitted wardrobes and bedroom storage refreshed", href: "/bedroom-wardrobe-wrapping/" },
];

export default function KitchenWrappingPage() {
  const serviceSchema = getServiceSchema(
    "Kitchen Wrapping",
    "Full kitchen vinyl wrapping service covering doors, worktops, frames and panels."
  );
  const rating = Number.isInteger(googleReviews.rating)
    ? `${googleReviews.rating}.0`
    : String(googleReviews.rating);

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      {/* Hero */}
      <section className="kw-hero" aria-label="Kitchen wrapping">
        <Image
          src="/images/hero-immersive-kitchen-v2.jpg"
          alt="Modern dark kitchen with light stone island after a vinyl kitchen wrap"
          fill
          priority
          quality={90}
          sizes="100vw"
          className="kw-hero-image hidden md:block"
        />
        <Image
          src="/images/hero-immersive-kitchen-mobile.jpg"
          alt="Modern dark kitchen with light stone island after a vinyl kitchen wrap"
          fill
          priority
          quality={90}
          sizes="100vw"
          className="kw-hero-image md:hidden"
        />
        <div className="kw-hero-scrim" aria-hidden="true" />

        <div className="kw-hero-inner">
          <div>
            <p className="kw-eyebrow">
              <span className="kw-eyebrow-dot" aria-hidden="true" />
              Kitchen wrapping · South Yorkshire
            </p>
            <h1 className="kw-hero-title">
              Kitchen Wrapping —{" "}
              <span className="kw-gradient-text">a brand-new kitchen</span> in 1–3 days
            </h1>
            <p className="kw-hero-lead">
              Doors, frames, worktops and splashbacks wrapped in premium 3M and
              CoverStyl vinyl. No rip-out, no mess — typically 70–80% less than
              a new kitchen.
            </p>
            <div className="kw-hero-actions">
              <Link href={QUOTE_HREF} className="kw-btn-primary">
                Get my free quote <span aria-hidden="true">→</span>
              </Link>
              <WhatsAppButton className="kw-btn-whatsapp" />
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
              <li>
                <CheckIcon /> Free survey, fixed quote
              </li>
            </ul>
          </div>

          <figure className="kw-hero-card hidden lg:block">
            <div className="kw-hero-card-grid">
              <div className="kw-hero-card-photo">
                <Image
                  src={`${NAVY}-before-01.jpeg`}
                  alt="Grey gloss kitchen in Doncaster before wrapping"
                  fill
                  sizes="220px"
                  className="object-cover"
                />
                <span className="kw-tag">Before</span>
              </div>
              <div className="kw-hero-card-photo">
                <Image
                  src={`${NAVY}-after-01.jpeg`}
                  alt="Navy wood-effect kitchen wrap with marble worktop in Doncaster"
                  fill
                  sizes="220px"
                  className="object-cover"
                />
                <span className="kw-tag kw-tag-after">After</span>
              </div>
            </div>
            <figcaption className="kw-hero-card-caption">
              <strong>Real job · Doncaster</strong>
              Grey gloss to navy wood-effect with white marble worktops.
            </figcaption>
          </figure>
        </div>
      </section>

      {/* Key numbers */}
      <section className="kw-stats" aria-label="Kitchen wrapping at a glance">
        <div className="kw-stats-inner">
          {stats.map((stat) => (
            <div key={stat.label} className="kw-stat">
              <p className="kw-stat-value">{stat.value}</p>
              <p className="kw-stat-label">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      <BeforeAfterShowcase />

      {/* Real transformations */}
      <section className="kw-section reveal">
        <div className="kw-container">
          <h2 className="section-heading text-2xl font-semibold text-foreground md:text-4xl">
            Real kitchens. Real transformations.
          </h2>
          <p className="kw-section-lead">
            Same kitchens, same layouts — just wrapped. No new units, no rip-out.
          </p>
          <div className="kw-transform-grid">
            {transformations.map((job) => (
              <article key={job.title} className="kw-transform-card">
                <div className="kw-transform-pair">
                  <div className="kw-transform-photo">
                    <Image src={job.before.src} alt={job.before.alt} fill sizes="(max-width: 768px) 50vw, 300px" className="object-cover" />
                    <span className="kw-tag">Before</span>
                  </div>
                  <div className="kw-transform-photo">
                    <Image src={job.after.src} alt={job.after.alt} fill sizes="(max-width: 768px) 50vw, 300px" className="object-cover" />
                    <span className="kw-tag kw-tag-after">After</span>
                  </div>
                </div>
                <div className="kw-transform-body">
                  <p className="kw-transform-place">{job.place}</p>
                  <h3 className="kw-transform-title">{job.title}</h3>
                  <p className="text-sm text-muted">{job.line}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <VideoReels />

      {/* What's included */}
      <section className="kw-section home-section-alt reveal">
        <div className="kw-container kw-split">
          <div className="kw-split-media">
            <Image
              src="/images/gallery/kitchen-wrap-grey-rotherham-01.png"
              alt="Grey kitchen wrap in Rotherham — wrapped doors, frames and marble-effect splashback"
              fill
              sizes="(max-width: 1024px) 100vw, 480px"
              className="object-cover"
            />
            <span className="kw-split-badge">Every surface, one visit</span>
          </div>
          <div>
            <p className="kw-kicker">The full package</p>
            <h2 className="mt-2 text-2xl font-bold text-foreground md:text-4xl">
              What&apos;s included in a full kitchen wrap
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Every surface: doors, drawer fronts, carcass faces, end panels,
              plinths, cornice and pelmet. We use branded films such as 3M and
              CoverStyl for colour retention and durability, applied with
              trade-level surface preparation so adhesion and finish last.
            </p>
            <ul className="kw-checklist">
              {included.map((item) => (
                <li key={item}>
                  <span className="kw-check" aria-hidden="true">✓</span>
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="kw-mini-card">
                <h3 className="font-semibold text-foreground">Worktop wrapping</h3>
                <p className="mt-2 text-sm text-muted">
                  Marble, stone or wood-effect vinyl. Heat-resistant and
                  scratch-resistant finishes, at a fraction of the cost of
                  replacing worktops.
                </p>
              </div>
              <div className="kw-mini-card">
                <h3 className="font-semibold text-foreground">What we can wrap</h3>
                <p className="mt-2 text-sm text-muted">
                  Solid wood, melamine, vinyl-wrapped MDF and painted cabinets —
                  including islands, larders and tall units.
                </p>
              </div>
            </div>
            <p className="mt-4 text-sm text-muted">
              We won&apos;t wrap badly damaged or warped doors, loose veneer or
              flaking paint. If wrapping isn&apos;t right, we&apos;ll say so at
              the free survey so you don&apos;t waste money.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="kw-section reveal">
        <div className="kw-container">
          <h2 className="section-heading text-2xl font-semibold text-foreground md:text-4xl">
            Pricing — typical ranges
          </h2>
          <p className="kw-section-lead">
            Clear starting prices. Your quote is fixed after a free survey — no
            obligation, no surprises.
          </p>
          <div className="kw-price-grid">
            {prices.map((price) => (
              <div
                key={price.name}
                className={`kw-price-card${price.featured ? " kw-price-card-featured" : ""}`}
              >
                {price.featured && <span className="kw-price-badge">Most popular</span>}
                <p className="kw-price-name">{price.name}</p>
                <p className="kw-price-amount">
                  <span className="kw-price-from">from</span> {price.amount}
                </p>
                <p className="kw-price-unit">{price.unit}</p>
                <ul className="kw-price-features">
                  {price.features.map((feature) => (
                    <li key={feature}>
                      <span className="kw-check" aria-hidden="true">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  href={price.href}
                  className={price.featured ? "kw-btn-primary kw-btn-block" : "kw-btn-ghost kw-btn-block"}
                >
                  {price.cta} <span aria-hidden="true">→</span>
                </Link>
              </div>
            ))}
          </div>
          <p className="mt-8 text-center text-sm text-muted">
            Want the detail? See our{" "}
            <Link href="/kitchen-wrapping-cost/" className="link-subtle">
              kitchen wrapping cost guide
            </Link>{" "}
            for a full breakdown and price table.
          </p>
        </div>
      </section>

      {/* Finishes */}
      <section className="kw-section home-section-alt reveal">
        <div className="kw-container">
          <h2 className="section-heading text-2xl font-semibold text-foreground md:text-4xl">
            Finishes — matt, gloss, woodgrain, marble and more
          </h2>
          <p className="kw-section-lead">
            A few favourites from the Cover Styl pattern book — plus hundreds
            more from Cover Styl, 3M and other branded films. We bring samples
            to the survey so you can choose in your own light.
          </p>
          <div className="kw-swatch-grid">
            {finishes.map((finish) => (
              <div key={finish.code} className="kw-swatch">
                <div className="kw-swatch-chip">
                  <Image
                    src={`${SWATCH_DIR}/${finish.file}`}
                    alt={`Cover Styl ${finish.code} ${finish.name} vinyl wrap sample`}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 180px"
                    className="object-cover"
                  />
                </div>
                <div className="kw-swatch-label">
                  <p className="font-semibold text-foreground">{finish.name}</p>
                  <p className="text-xs text-muted">
                    Cover Styl {finish.code} · {finish.type}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="kw-cta-band">
            <div>
              <p className="text-lg font-semibold text-foreground md:text-xl">
                Picture a new finish on your own kitchen first
              </p>
              <p className="mt-1 text-sm text-muted">
                Try the{" "}
                <Link href="/wrap-visualiser/" className="link-subtle">wrap visualiser</Link>, browse our{" "}
                <Link href="/architectural-vinyl-finishes/" className="link-subtle">
                  architectural vinyl finishes sample books
                </Link>{" "}
                or read the{" "}
                <Link href="/blog/vinyl-wrap-kitchen-finishes/" className="link-subtle">
                  vinyl wrap kitchen finishes guide
                </Link>
                .
              </p>
            </div>
            <Link href="/wrap-visualiser/" className="kw-btn-ghost shrink-0">
              Open the visualiser <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Latest jobs */}
      <section className="kw-section reveal">
        <div className="kw-container">
          <h2 className="section-heading text-2xl font-semibold text-foreground md:text-4xl">
            Latest kitchen jobs
          </h2>
          <p className="kw-section-lead">
            Full wraps, worktops and tall units across Sheffield, Doncaster,
            Rotherham and Pontefract.
          </p>
          <div className="kw-gallery">
            {galleryPhotos.map((photo) => (
              <figure key={photo.src} className="kw-gallery-item">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(max-width: 768px) 50vw, 33vw"
                  className="kw-gallery-image"
                />
                <figcaption className="kw-gallery-caption">{photo.caption}</figcaption>
              </figure>
            ))}
          </div>
          <p className="mt-8 text-center">
            <Link href="/gallery/" className="kw-btn-ghost">
              See more of our work in the portfolio <span aria-hidden="true">→</span>
            </Link>
          </p>
        </div>
      </section>

      {/* Wrap vs new vs painting */}
      <section className="kw-section home-section-alt reveal">
        <div className="kw-container">
          <h2 className="section-heading text-2xl font-semibold text-foreground md:text-4xl">
            Wrap vs new kitchen vs painting
          </h2>
          <p className="kw-section-lead">
            Wrapping won&apos;t change your layout or carcasses — but for a dated,
            sound kitchen it&apos;s the fastest, best-value upgrade.
          </p>
          <div className="kw-compare-grid">
            {comparison.map((option) => (
              <div
                key={option.name}
                className={`kw-compare-card${option.best ? " kw-compare-card-best" : ""}`}
              >
                {option.best && <span className="kw-price-badge">Best value</span>}
                <h3 className="text-xl font-bold text-foreground">{option.name}</h3>
                <dl className="kw-compare-list">
                  {option.rows.map(([label, value]) => (
                    <div key={label}>
                      <dt>{label}</dt>
                      <dd>{value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            ))}
          </div>
          <p className="mt-8 text-center text-sm text-muted">
            Full comparisons:{" "}
            <Link href="/blog/kitchen-wrapping-vs-new-kitchen/" className="link-subtle">
              Kitchen wrapping vs new kitchen
            </Link>{" "}
            ·{" "}
            <Link href="/blog/kitchen-wrapping-vs-painting/" className="link-subtle">
              Kitchen wrapping vs painting
            </Link>
          </p>
        </div>
      </section>

      {/* Process */}
      <section className="kw-section reveal">
        <div className="kw-container">
          <h2 className="section-heading text-2xl font-semibold text-foreground md:text-4xl">
            Time &amp; disruption — 4 simple steps
          </h2>
          <p className="kw-section-lead">
            1–3 days depending on kitchen size. No rip-out — your kitchen stays
            functional during the install.
          </p>
          <ol className="kw-steps">
            {steps.map((step) => (
              <li key={step.num} className="kw-step">
                <span className="step-badge">{step.num}</span>
                <h3 className="mt-4 font-semibold text-foreground">{step.title}</h3>
                <p className="mt-2 text-sm text-muted">{step.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Guarantee */}
      <section className="kw-section home-section-alt reveal">
        <div className="kw-container kw-guarantee">
          <div className="kw-guarantee-seal">
            <ShieldIcon />
            <p className="kw-guarantee-years">{siteConfig.guaranteeYears}</p>
            <p className="kw-guarantee-label">year guarantee</p>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-foreground md:text-4xl">Guarantee</h2>
            <p className="mt-4 text-muted leading-relaxed">
              Every eligible kitchen wrapping job includes a named{" "}
              {siteConfig.guaranteeYears}-year guarantee on material defects,
              colour stability and adhesion when maintained as advised. What
              voids it: customer damage, improper cleaning or modifications.
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="kw-mini-card">
                <h3 className="font-semibold text-foreground">Life expectancy</h3>
                <p className="mt-2 text-sm text-muted">
                  {siteConfig.guaranteeYears}+ years with normal use. Films are
                  scratch, impact and heat resistant.
                </p>
              </div>
              <div className="kw-mini-card">
                <h3 className="font-semibold text-foreground">Fully insured</h3>
                <p className="mt-2 text-sm text-muted">
                  {siteConfig.yearsInBusiness}+ years in the trade. One local
                  specialist from survey to sign-off.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <GoogleReviewsBar />

      {/* FAQ */}
      <section className="kw-section reveal">
        <div className="kw-container max-w-3xl">
          <h2 className="section-heading mb-8 text-2xl font-semibold text-foreground md:text-4xl">
            Frequently asked questions
          </h2>
          <FaqAccordion items={faqItems.slice(0, 6)} />
          <p className="mt-6 text-center text-muted">
            <Link href="/faq/" className="link-subtle">
              More questions? See our full FAQ
            </Link>
          </p>
        </div>
      </section>

      {/* Areas + related services */}
      <section className="kw-section home-section-alt reveal">
        <div className="kw-container grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold text-foreground">We cover</h2>
            <p className="mt-3 text-muted">
              Browse city pages for kitchen wrapping. Each page includes local
              pricing, FAQs, postcode coverage and area-specific detail.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {cities.map(([label, href]) => (
                <Link key={href} href={href} className="kw-chip">
                  {label}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-foreground">Related services</h2>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {relatedServices.map((service) => (
                <Link key={service.href} href={service.href} className="kw-link-card">
                  <span className="font-semibold text-foreground">{service.title}</span>
                  <span className="mt-1 block text-xs text-muted">{service.body}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Training teaser */}
      <section className="kw-section-tight reveal">
        <div className="kw-container">
          <div className="kw-training">
            <div>
              <p className="kw-kicker">Want to learn this yourself?</p>
              <h2 className="mt-1 text-lg font-semibold text-foreground">
                5-day kitchen wrapping training + business launch
              </h2>
              <p className="mt-1 text-sm text-muted">
                Join us on a real install. Branding, a website, 12 months of
                local SEO and ongoing support — {siteConfig.yearsInBusiness}+
                years experience behind you.
              </p>
            </div>
            <p className="flex shrink-0 flex-wrap gap-x-4 gap-y-1 text-sm">
              <Link href="/kitchen-wrapping-training/" className="link-subtle">
                Explore kitchen wrapping training
              </Link>
              <Link href="/become-a-kitchen-wrapper/" className="link-subtle">
                Become a kitchen wrapper
              </Link>
            </p>
          </div>
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
              Love your kitchen again —{" "}
              <span className="kw-gradient-text">without the rip-out</span>
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-muted">
              Send a few photos and we&apos;ll come back with a clear price. Most
              kitchens are done in 1–3 days.
            </p>
            <div className="kw-final-actions">
              <Link href={QUOTE_HREF} className="kw-btn-primary">
                Get my free quote <span aria-hidden="true">→</span>
              </Link>
              <WhatsAppButton className="kw-btn-whatsapp" />
              <a href={`tel:${siteConfig.phoneE164}`} className="kw-btn-ghost">
                Call {siteConfig.phone}
              </a>
            </div>
          </div>
        </div>
      </section>
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
    <svg viewBox="0 0 24 24" className="h-4 w-4 text-accent" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="m5 12 5 5 9-10" />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg viewBox="0 0 24 24" className="kw-guarantee-icon" fill="none" aria-hidden="true">
      <path d="M12 3l8 3v6c0 5-3.5 8.5-8 9-4.5-.5-8-4-8-9V6l8-3z" stroke="currentColor" strokeWidth="1.5" />
      <path d="m9 12 2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
