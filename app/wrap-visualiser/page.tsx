import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FaqAccordion } from "@/components/FaqAccordion";
import { VisualiserLink } from "@/components/VisualiserLink";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Wrap Visualiser | See Your Kitchen Wrapped Before You Buy | WRPX",
  description:
    "Preview a kitchen, cupboard or furniture wrap on your own photo with the Cover Styl visualiser, then ask WRPX for a fixed quote. South Yorkshire.",
  alternates: { canonical: "https://www.wrpx.co.uk/wrap-visualiser/" },
};

const previewCards = [
  {
    title: "Kitchens",
    text: "Doors, drawer fronts and the run of units, so you can picture the whole room in a new finish.",
    image:
      "/images/Kitchen-navy-marble-doncaster/navy-marble-kitchen-wrap-doncaster-after-01.jpeg",
    alt: "Navy kitchen wrap with a marble-effect worktop in Doncaster",
    label: "Kitchen wrap",
    serviceHref: "/kitchen-wrapping/",
    serviceLabel: "Kitchen wrapping",
    location: "preview-kitchens",
  },
  {
    title: "Cupboards & doors",
    text: "Wardrobes, larders and cupboard doors. Useful when you want a new look without replacing the carcasses.",
    image:
      "/images/Built-in-wardrobes-Chesterfield/built-in-wardrobe-chesterfield-after-01.jpeg",
    alt: "Built-in wardrobe wrap in Chesterfield",
    label: "Cupboards",
    serviceHref: "/bedroom-wardrobe-wrapping/",
    serviceLabel: "Wardrobe wrapping",
    location: "preview-cupboards",
  },
  {
    title: "Furniture",
    text: "Sideboards, fitted storage and other flat furniture. See a finish on the piece before you commit.",
    image:
      "/images/Built-in-wardrobes-Chesterfield/built-in-wardrobe-chesterfield-after-10.jpeg",
    alt: "Fitted furniture wrap in Chesterfield",
    label: "Furniture",
    serviceHref: "/furniture-wrapping/",
    serviceLabel: "Furniture wrapping",
    location: "preview-furniture",
  },
] as const;

const transformations = [
  {
    place: "Sheffield",
    title: "Matt black kitchen",
    before:
      "/images/Kitchen-wrap-sheffield-black/black-kitchen-wrap-sheffield-before-01.jpeg",
    after:
      "/images/Kitchen-wrap-sheffield-black/black-kitchen-wrap-sheffield-after-05.jpeg",
    beforeAlt: "Sheffield kitchen before a matt black wrap",
    afterAlt: "Sheffield kitchen after a matt black wrap",
  },
  {
    place: "Doncaster",
    title: "Navy and marble",
    before:
      "/images/Kitchen-navy-marble-doncaster/navy-marble-kitchen-wrap-doncaster-before-01.jpeg",
    after:
      "/images/Kitchen-navy-marble-doncaster/navy-marble-kitchen-wrap-doncaster-after-02.jpeg",
    beforeAlt: "Doncaster kitchen before a navy and marble wrap",
    afterAlt: "Doncaster kitchen after a navy and marble wrap",
  },
  {
    place: "Chesterfield",
    title: "Built-in wardrobes",
    before:
      "/images/Built-in-wardrobes-Chesterfield/built-in-wardrobe-chesterfield-before-01.jpeg",
    after:
      "/images/Built-in-wardrobes-Chesterfield/built-in-wardrobe-chesterfield-after-04.jpeg",
    beforeAlt: "Chesterfield wardrobes before wrapping",
    afterAlt: "Chesterfield wardrobes after wrapping",
  },
] as const;

const finishSamples = [
  {
    src: "/images/vinyl-finish-samples/kitchen-wrap-sample-book-light-finishes-range.png",
    alt: "Light kitchen wrap finishes from a sample book",
  },
  {
    src: "/images/vinyl-finish-samples/kitchen-wrap-finish-sample-book-neutral-tones.png",
    alt: "Neutral kitchen wrap finish swatches",
  },
  {
    src: "/images/vinyl-finish-samples/kitchen-vinyl-sample-book-colour-texture-range.png",
    alt: "Colour and texture pages from a kitchen vinyl sample book",
  },
] as const;

const photoTips = [
  "Use daylight if you can. A window in the shot helps the colour read more honestly.",
  "Stand back so the whole run of doors, or the whole piece of furniture, is in the picture.",
  "Hold the camera straight, rather than tilting up at the wall units.",
  "Clear the worktop a little if it is easy. Less clutter makes the finish easier to judge.",
] as const;

const faqItems = [
  {
    q: "What does the wrap visualiser do?",
    a: "You upload a photo of your kitchen, cupboards or furniture and preview a Cover Styl finish on it. It is a way to picture the look before you ask WRPX for a quote.",
  },
  {
    q: "Is the preview the exact finished job?",
    a: "No. It is a guide for colour and texture. The finish we install is confirmed at your free survey, with physical samples in your own light.",
  },
  {
    q: "What can I try it on?",
    a: "Kitchens, cupboard doors and furniture. If it is a flat surface we can usually wrap, you can preview a finish on it first.",
  },
  {
    q: "Do I stay on the WRPX website?",
    a: "The visualiser opens in a new tab on Cover Styl’s page. This page stays open behind it, so you can come back and request a quote.",
  },
  {
    q: "What should I do when I find a finish I like?",
    a: "Send a kitchen quote, or message us on WhatsApp, and tell us the look you chose. We bring samples to the survey so you can check it in the room.",
  },
] as const;

const stats = [
  {
    value: `${siteConfig.guaranteeYears}-year`,
    label: "Guarantee on eligible wrapping, named on the work.",
  },
  {
    value: "1–3 days",
    label: "Typical install for a kitchen. No rip-out.",
  },
  {
    value: "From £850",
    label: "A full kitchen, after a free survey and a fixed quote.",
  },
  {
    value: "Free survey",
    label: "We check the surfaces and confirm the finish in your home.",
  },
] as const;

export default function WrapVisualiserPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  return (
    <div className="viz-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <section className="px-4 pb-6 pt-8 md:px-6 md:pt-12">
        <div className="container mx-auto max-w-6xl">
          <div className="viz-spread overflow-hidden md:rounded-none">
            <div className="viz-cream px-6 py-10 md:px-10 md:py-14">
              <p className="viz-eyebrow viz-eyebrow-sand">Wrap Visualiser</p>
              <h1 className="viz-heading viz-ink">
                See your kitchen wrapped{" "}
                <span className="viz-em">before</span> you buy
              </h1>
              <p className="viz-lead viz-ink-soft">
                Upload a photo of your kitchen, cupboards or furniture and
                preview a Cover Styl finish on it. When you like the look, ask
                WRPX for a fixed quote.
              </p>
              <div className="viz-actions">
                <VisualiserLink className="viz-btn-dark" location="hero">
                  Try the Visualiser
                </VisualiserLink>
                <Link href="/kitchen-wrapping-quote/" className="viz-btn-line">
                  Get a fixed quote
                </Link>
              </div>
            </div>

            <div className="viz-spine" aria-hidden="true" />

            <div className="viz-window min-h-[22rem] md:min-h-[34rem]">
              <Image
                src="/images/wrap-visualiser-hero-matt-ivory-kitchen-wide.jpg"
                alt="Matt ivory kitchen wrap with brushed brass handles installed by WRPX"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 900px) 100vw, 46vw"
              />
              <p className="viz-photo-label">
                Matt
                <br />
                ivory
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-8 md:px-6 md:py-12">
        <div className="container mx-auto max-w-6xl">
          <div className="viz-cream px-6 py-10 md:px-12 md:py-14">
            <p className="viz-eyebrow viz-eyebrow-sand">How it works</p>
            <h2 className="viz-heading viz-ink">
              Three steps, then{" "}
              <span className="viz-em">your photo</span>
            </h2>
            <ol className="mt-10 grid gap-8 md:grid-cols-3">
              <li>
                <span className="viz-step-num">1</span>
                <h3 className="mt-4 text-xl font-semibold viz-ink">
                  Upload your photo
                </h3>
                <p className="mt-2 leading-relaxed viz-ink-soft">
                  A picture of the kitchen, the cupboard run, or the piece of
                  furniture you want to change.
                </p>
              </li>
              <li>
                <span className="viz-step-num">2</span>
                <h3 className="mt-4 text-xl font-semibold viz-ink">
                  Choose your finish
                </h3>
                <p className="mt-2 leading-relaxed viz-ink-soft">
                  Pick from the Cover Styl range: painted colours, wood, stone
                  and more.
                </p>
              </li>
              <li>
                <span className="viz-step-num">3</span>
                <h3 className="mt-4 text-xl font-semibold viz-ink">
                  See the result
                </h3>
                <p className="mt-2 leading-relaxed viz-ink-soft">
                  Compare it with your original photo, then come back here for
                  a fixed WRPX quote.
                </p>
              </li>
            </ol>
            <div className="viz-actions">
              <VisualiserLink className="viz-btn-dark" location="how-it-works">
                Open the visualiser
              </VisualiserLink>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-10 md:px-6 md:py-16">
        <div className="container mx-auto max-w-6xl">
          <p className="viz-eyebrow viz-eyebrow-light">What can you preview?</p>
          <h2 className="viz-heading max-w-xl text-[#f6f1e8]">
            Kitchens, cupboards and{" "}
            <span className="viz-em">furniture</span>
          </h2>
          <p className="viz-lead text-[rgba(246,241,232,0.72)]">
            Start with the room you actually have. These are real WRPX jobs,
            shown so you can see the kind of surface the visualiser is for.
          </p>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {previewCards.map((card) => (
              <article key={card.title} className="flex flex-col">
                <div className="viz-window aspect-[4/5]">
                  <Image
                    src={card.image}
                    alt={card.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 33vw"
                  />
                  <p className="viz-photo-label">{card.label}</p>
                </div>
                <h3 className="mt-5 text-2xl font-semibold tracking-tight text-[#f6f1e8]">
                  {card.title}
                </h3>
                <p className="mt-2 flex-1 leading-relaxed text-[rgba(246,241,232,0.7)]">
                  {card.text}
                </p>
                <div className="viz-actions">
                  <VisualiserLink
                    className="btn-primary"
                    location={card.location}
                  >
                    Visualise it
                  </VisualiserLink>
                  <Link href={card.serviceHref} className="link-subtle text-sm">
                    {card.serviceLabel}
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-6 md:px-6 md:py-10">
        <div className="container mx-auto max-w-6xl">
          <p className="viz-eyebrow viz-eyebrow-light">Installed by WRPX</p>
          <h2 className="viz-heading max-w-2xl text-[#f6f1e8]">
            The visualiser is a guide.{" "}
            <span className="viz-em">This</span> is the finish.
          </h2>
          <p className="viz-lead text-[rgba(246,241,232,0.72)]">
            Use the tool to narrow the look. These are kitchens and wardrobes
            we have already wrapped across South Yorkshire.
          </p>
          <div className="mt-10 grid gap-10">
            {transformations.map((job) => (
              <article key={job.place}>
                <p className="viz-eyebrow viz-eyebrow-light">{job.place}</p>
                <h3 className="mt-2 text-2xl font-semibold text-[#f6f1e8]">
                  {job.title}
                </h3>
                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  <div className="viz-window aspect-[4/3]">
                    <Image
                      src={job.before}
                      alt={job.beforeAlt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <span className="viz-pair-tag viz-pair-tag-before">
                      Before
                    </span>
                  </div>
                  <div className="viz-window aspect-[4/3]">
                    <Image
                      src={job.after}
                      alt={job.afterAlt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <span className="viz-pair-tag viz-pair-tag-after">
                      After
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-8 md:px-6 md:py-12">
        <div className="container mx-auto max-w-6xl">
          <div className="viz-cream px-6 py-10 md:px-12 md:py-14">
            <p className="viz-eyebrow viz-eyebrow-sand">The finishes</p>
            <h2 className="viz-heading viz-ink">
              Browse the book, then{" "}
              <span className="viz-em">try it</span> on your room
            </h2>
            <p className="viz-lead viz-ink-soft">
              These pages are from the sample books we work with. The
              visualiser lets you place a finish onto your own photo.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {finishSamples.map((sample) => (
                <div
                  key={sample.src}
                  className="viz-window viz-window-sand aspect-[4/3]"
                >
                  <Image
                    src={sample.src}
                    alt={sample.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, 33vw"
                  />
                </div>
              ))}
            </div>
            <div className="viz-actions">
              <VisualiserLink className="viz-btn-dark" location="finishes">
                Try a finish on your photo
              </VisualiserLink>
              <Link
                href="/architectural-vinyl-finishes/"
                className="viz-btn-line"
              >
                Open the sample books
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="viz-charcoal px-4 py-14 md:px-6 md:py-20">
        <div className="container mx-auto max-w-6xl">
          <p className="viz-eyebrow viz-eyebrow-light">What you are buying</p>
          <h2 className="viz-heading max-w-xl">
            A new look,{" "}
            <span className="viz-em">without</span> a new kitchen
          </h2>
          <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.value}>
                <p className="viz-stat-value">{stat.value}</p>
                <p className="viz-stat-label">{stat.label}</p>
              </div>
            ))}
          </div>
          <div className="viz-note mt-12 max-w-xl">
            <p className="text-sm font-semibold uppercase tracking-[0.12em]">
              Worth knowing
            </p>
            <p className="mt-2 text-lg leading-relaxed">
              The picture helps you choose. The price is fixed after we see
              the kitchen, not from the preview alone.
            </p>
          </div>
        </div>
      </section>

      <section className="px-4 py-8 md:px-6 md:py-12">
        <div className="container mx-auto max-w-6xl">
          <div className="viz-cream px-6 py-10 md:grid md:grid-cols-[0.8fr_1.2fr] md:gap-12 md:px-12 md:py-14">
            <div>
              <p className="viz-eyebrow viz-eyebrow-sand">Photo tips</p>
              <h2 className="viz-heading viz-ink">
                A clearer photo, a{" "}
                <span className="viz-em">fairer</span> preview
              </h2>
            </div>
            <ul className="mt-8 space-y-4 md:mt-2">
              {photoTips.map((tip) => (
                <li
                  key={tip}
                  className="border-t border-[rgba(28,26,23,0.12)] pt-4 leading-relaxed viz-ink-soft"
                >
                  {tip}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="px-4 py-8 md:px-6 md:py-12">
        <div className="container mx-auto max-w-3xl">
          <p className="viz-eyebrow viz-eyebrow-light">Questions</p>
          <h2 className="viz-heading text-[#f6f1e8]">
            Before you <span className="viz-em">upload</span>
          </h2>
          <div className="mt-8">
            <FaqAccordion items={[...faqItems]} />
          </div>
        </div>
      </section>

      <section className="px-4 pb-20 pt-4 md:px-6">
        <div className="container mx-auto max-w-3xl">
          <div className="viz-cream px-6 py-12 text-center md:px-12">
            <h2 className="viz-heading viz-ink">
              Love the look? Get your{" "}
              <span className="viz-em">fixed quote</span>
            </h2>
            <p className="viz-lead mx-auto viz-ink-soft">
              Tell us the finish you liked. We survey the kitchen, confirm it
              will hold, and price the job before any work starts.
            </p>
            <div className="viz-actions justify-center">
              <Link href="/kitchen-wrapping-quote/" className="viz-btn-dark">
                Kitchen Quote
              </Link>
              <WhatsAppButton label="WhatsApp us" />
              <VisualiserLink className="viz-btn-line" location="footer">
                Try the Visualiser
              </VisualiserLink>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
