import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Splashback Wrapping South Yorkshire | Vinyl Tile & Glass Splashback Wrap | WRPX",
  description:
    "Splashback wrapping South Yorkshire — transform tired tiles or glass splashbacks with premium vinyl. No retiling, no mess. Marble, metro, concrete finishes. Free survey, fixed quote.",
  alternates: { canonical: "https://www.wrpx.co.uk/splashback-wrapping/" },
  openGraph: {
    title: "Splashback Wrapping South Yorkshire | WRPX",
    description:
      "Splashback wrapping South Yorkshire — transform tired tiles with premium vinyl. No retiling. Free survey, fixed quote.",
    url: "https://www.wrpx.co.uk/splashback-wrapping/",
  },
};

export default function SplashbackWrappingPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Can vinyl be applied over existing ceramic tiles?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, in most cases. We assess the tile surface at the survey — the tiles need to be secure, flat and clean. Grout lines can show through thinner films, but we use specialist splashback vinyl that bridges the grout recess and leaves a smooth surface. Heavily textured or very deep grout lines may need to be levelled first.",
        },
      },
      {
        "@type": "Question",
        name: "Is splashback vinyl heat resistant?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. We use heat-resistant specialist films for splashback applications that are rated for proximity to hobs and ovens. We always assess the specific location — areas directly adjacent to a naked flame require a small buffer zone, which we'll flag at the survey.",
        },
      },
      {
        "@type": "Question",
        name: "How does splashback wrapping compare to retiling?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Dramatically less disruptive and much cheaper. Retiling involves removing old tiles (messy, risky for plasterwork), new tile adhesive, grout, drying time and reinstalling any fixtures. Splashback wrapping goes straight over the existing surface in a few hours, with no debris, no drying time, and immediate use.",
        },
      },
      {
        "@type": "Question",
        name: "How long does splashback wrapping last?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "With correct preparation and quality film, 5–8 years is typical. We back all our splashback wraps with our standard 5-year written guarantee covering adhesion and material defects.",
        },
      },
      {
        "@type": "Question",
        name: "Can I wrap a glass splashback?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Glass splashbacks are an excellent substrate for vinyl — the surface is smooth, flat and bonds well. The main consideration is any existing patterns or colour on printed glass — we assess this at the survey. Plain glass splashbacks wrap very cleanly.",
        },
      },
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Splashback Wrapping",
    provider: {
      "@type": "LocalBusiness",
      name: "WRPX",
      url: "https://www.wrpx.co.uk",
      telephone: siteConfig.phoneE164,
      areaServed: siteConfig.areaServed,
    },
    description:
      "Professional kitchen and bathroom splashback wrapping in South Yorkshire. Premium heat-resistant vinyl over tiles, glass and smooth surfaces. Free survey, 5-year guarantee.",
    areaServed: "South Yorkshire",
    serviceType: "Splashback Vinyl Wrapping",
  };

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      <section className="relative h-[40vh] min-h-[280px] w-full overflow-hidden">
        <Image
          src="/images/gallery/kitchen-wrap-grey-rotherham-01.png"
          alt="Splashback wrapping South Yorkshire — vinyl over kitchen tiles"
          fill
          className="object-cover object-top"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 flex items-center justify-center px-4">
          <div className="text-center">
            <h1 className="text-3xl font-bold tracking-tight text-white drop-shadow-lg md:text-4xl">
              Splashback Wrapping
            </h1>
            <p className="mt-2 text-lg text-white/90">
              No retiling — transform tiles or glass in hours
            </p>
          </div>
        </div>
      </section>

      <section className="px-4 py-16">
        <div className="container mx-auto max-w-3xl space-y-8">
          <div className="card-float p-8">
            <p className="text-muted leading-relaxed">
              Dated splashback tiles are one of the biggest visual problems in a
              renovated kitchen — and they don&apos;t need to be retiled. We
              apply heat-resistant architectural vinyl directly over your existing
              tiles or glass, leaving a smooth, seamless finish in marble, stone,
              metro tile effect, concrete, solid colour or any design from our
              full range. Free survey, fixed quote,{" "}
              {siteConfig.guaranteeYears}-year guarantee.
            </p>
          </div>

          <div className="card-float p-8">
            <h2 className="text-xl font-semibold text-foreground">
              Why wrap instead of retile?
            </h2>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <div className="rounded-lg border border-border p-4">
                <p className="font-semibold text-foreground text-sm">Splashback Wrapping</p>
                <ul className="mt-2 space-y-1 text-xs text-muted">
                  <li>✓ Same day — no drying time</li>
                  <li>✓ No mess, no broken tiles</li>
                  <li>✓ No risk to plasterwork</li>
                  <li>✓ Hundreds of finishes available</li>
                  <li>✓ From around £150–£400</li>
                  <li>✓ {siteConfig.guaranteeYears}-year written guarantee</li>
                </ul>
              </div>
              <div className="rounded-lg border border-border p-4">
                <p className="font-semibold text-foreground text-sm">Traditional Retiling</p>
                <ul className="mt-2 space-y-1 text-xs text-muted">
                  <li>✗ 2–4 days minimum</li>
                  <li>✗ Tile removal dust and debris</li>
                  <li>✗ Risk of plasterwork damage</li>
                  <li>✗ Grout maintenance ongoing</li>
                  <li>✗ From £500–£1,500+</li>
                  <li>✗ Separate tradesperson required</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="card-float p-8">
            <h2 className="text-xl font-semibold text-foreground">
              Splashback wrap finishes
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Our most popular splashback finishes reflect current kitchen trends:
            </p>
            <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3">
              {[
                { name: "Calacatta Marble", desc: "White, bold grey veining" },
                { name: "Metro Tile Effect", desc: "White bevelled tile pattern" },
                { name: "Concrete Effect", desc: "Industrial-modern grey tones" },
                { name: "Herringbone Stone", desc: "Natural stone tile pattern" },
                { name: "Solid White", desc: "Clean, timeless minimal look" },
                { name: "Anthracite", desc: "Dark statement finish" },
              ].map((f) => (
                <div key={f.name} className="rounded-lg border border-border p-3">
                  <p className="font-medium text-foreground text-sm">{f.name}</p>
                  <p className="text-xs text-muted mt-1">{f.desc}</p>
                </div>
              ))}
            </div>
            <p className="mt-4 text-sm text-muted">
              Full sample range brought to every survey. Custom digital prints also available on request.
            </p>
          </div>

          <div className="card-float p-8">
            <h2 className="text-xl font-semibold text-foreground">
              Surfaces we wrap
            </h2>
            <ul className="mt-4 space-y-2 text-muted text-sm">
              <li>✓ Ceramic and porcelain tiles (with or without grout texture)</li>
              <li>✓ Glass splashbacks (plain or coloured glass)</li>
              <li>✓ Smooth plaster or plasterboard (prepared surface)</li>
              <li>✓ MDF or wood panel splashbacks</li>
              <li>✓ Bathroom tile splashbacks and shower surrounds</li>
            </ul>
            <p className="mt-4 text-sm text-muted">
              Not every surface is suitable — we assess at the free survey and give you an honest answer.
            </p>
          </div>

          <div className="card-float p-8">
            <h2 className="text-xl font-semibold text-foreground">
              Combine with a full kitchen wrap
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Most clients book splashback wrapping alongside kitchen door and worktop wrapping —
              it transforms the whole kitchen in a single visit. If you&apos;re considering a full
              kitchen refresh, see our{" "}
              <Link href="/kitchen-wrapping/" className="text-accent hover:underline">kitchen wrapping page</Link>{" "}
              and{" "}
              <Link href="/worktop-wrapping/" className="text-accent hover:underline">worktop wrapping page</Link>{" "}
              for the full picture.
            </p>
          </div>

          <div className="card-float p-8">
            <h2 className="text-xl font-semibold text-foreground">
              Frequently asked questions
            </h2>
            <ul className="mt-4 space-y-6">
              {faqSchema.mainEntity.map((item, i) => (
                <li key={i}>
                  <p className="font-medium text-foreground">{item.name}</p>
                  <p className="mt-2 text-sm text-muted">{item.acceptedAnswer.text}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className="card-float p-8">
            <h2 className="text-xl font-semibold text-foreground">
              Areas covered
            </h2>
            <p className="mt-4 text-muted">
              We cover{" "}
              {siteConfig.areas.join(", ")} and all surrounding South Yorkshire areas.
            </p>
          </div>

          <div className="card-float p-8 text-center">
            <h2 className="text-xl font-semibold text-foreground">
              Get a free splashback survey
            </h2>
            <p className="mt-3 text-muted">
              Fixed quote, no obligation. We cover all of South Yorkshire.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
              <Link href="/contact/" className="btn-primary inline-block">
                Book Free Survey
              </Link>
              <a href={`tel:${siteConfig.phone}`} className="btn-secondary inline-block">
                Call {siteConfig.phone}
              </a>
            </div>
          </div>

          <div className="mt-4 text-sm text-muted">
            <p>
              Related:{" "}
              <Link href="/kitchen-wrapping/" className="text-accent hover:underline">Kitchen Wrapping</Link>
              {" · "}
              <Link href="/worktop-wrapping/" className="text-accent hover:underline">Worktop Wrapping</Link>
              {" · "}
              <Link href="/kitchen-island-wrapping/" className="text-accent hover:underline">Kitchen Island Wrapping</Link>
              {" · "}
              <Link href="/appliance-wrapping/" className="text-accent hover:underline">Appliance Wrapping</Link>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
