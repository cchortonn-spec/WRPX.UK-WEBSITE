import type { Metadata } from "next";
import Link from "next/link";
import { getServiceSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Office Interior Vinyl Wrapping Derby | Desks, Panels & Surfaces | WRPX",
  description:
    "Office interior vinyl wrapping in Derby — reception desks, breakout kitchen surfaces, meeting room panels and built-in office furniture. WRPX covers Derby city centre DE1, Friar Gate DE1, Pride Park DE24, Raynesway DE21 and all Derby and Derbyshire office locations. Overnight and weekend installation.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/architectural-wrap-offices-derby/",
  },
};

const serviceSchema = getServiceSchema(
  "Office interior vinyl wrapping Derby — desks, panels and surfaces",
  "Architectural vinyl wrapping for office interiors in Derby and Derbyshire. Reception desk fascias, breakout kitchen unit doors and drawer fronts, meeting room wall panels and furniture, built-in joinery and internal door faces. Derby city centre DE1, Friar Gate DE1, Pride Park DE24, Raynesway DE21 and all Derby and Derbyshire commercial locations. Works around your schedule — evenings, weekends or phased installation."
);

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.wrpx.co.uk/" },
    { "@type": "ListItem", position: 2, name: "Architectural Vinyl Film", item: "https://www.wrpx.co.uk/architectural-vinyl-film/" },
    { "@type": "ListItem", position: 3, name: "Office Interior Vinyl Wrapping", item: "https://www.wrpx.co.uk/architectural-wrap-offices/" },
    { "@type": "ListItem", position: 4, name: "Derby Offices", item: "https://www.wrpx.co.uk/architectural-wrap-offices-derby/" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do you install office vinyl wrapping in Derby?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — we travel to Derby from our South Yorkshire base. Derby is approximately 45 to 55 minutes via the M1 south to junction 25 (Nottingham/Derby), then west on the A52 directly into Derby. We cover all Derby office locations: Friar Gate DE1, Derby city centre DE1, Pride Park DE24, Raynesway DE21 business corridor, Spondon DE21, Mickleover DE3 and the wider Derbyshire commercial market including Burton-on-Trent DE14 and Ashbourne DE6.",
      },
    },
    {
      "@type": "Question",
      name: "Can you work around our Derby office schedule?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — evening and weekend installation is standard for occupied Derby offices. Reception desks and communal breakout areas are typically done out of hours to avoid disruption. For phased programmes across multiple floors or zones — particularly in the larger Pride Park DE24 or Raynesway DE21 office units — we agree a full programme schedule with your Derby facilities manager or fit-out project manager before any work begins.",
      },
    },
    {
      "@type": "Question",
      name: "What office surfaces in Derby can be vinyl wrapped?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Flat and near-flat surfaces: reception desk fascias and tops, breakout kitchen unit doors and drawer fronts, meeting room furniture panels, wall panels, built-in joinery surrounds, internal door faces and frames, and feature wall panels. Heavily textured, curved or fabric surfaces are not suitable for film — we assess suitability at survey before any Derby programme begins.",
      },
    },
    {
      "@type": "Question",
      name: "Do you work white-label for Derby fit-out contractors?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — white-label is available for all Derby office work. We attend under your fit-out company name, carry your paperwork, report to your project manager and provide photographic sign-off in your required format. The end client sees your company throughout the Derby programme.",
      },
    },
    {
      "@type": "Question",
      name: "How long does office vinyl wrapping take in Derby?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A standard reception desk fascia takes 2–4 hours. A breakout kitchen with 15–20 unit doors takes a full day. Larger Derby office fit-outs spanning multiple floors or zones — as is common in the Pride Park and Raynesway business park estates — are scoped individually at survey and given a realistic programme timeline before any commitment.",
      },
    },
  ],
};

const faqItems = faqSchema.mainEntity.map((item) => ({
  q: item.name,
  a: item.acceptedAnswer.text,
}));

export default function ArchitecturalWrapOfficesDerbyPage() {
  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Breadcrumb */}
      <section className="border-b border-border bg-card px-4 py-3">
        <div className="container mx-auto max-w-4xl">
          <nav className="text-sm text-muted">
            <Link href="/" className="text-accent hover:underline">Home</Link>
            <span className="mx-2">›</span>
            <Link href="/architectural-vinyl-film/" className="text-accent hover:underline">Architectural Vinyl Film</Link>
            <span className="mx-2">›</span>
            <Link href="/architectural-wrap-offices/" className="text-accent hover:underline">Office Interior Vinyl Wrapping</Link>
            <span className="mx-2">›</span>
            <span className="text-foreground">Derby</span>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="border-b border-border bg-card py-16 md:py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <p className="text-sm font-medium uppercase tracking-wide text-accent">
            Architectural Vinyl Wrapping · Derby Offices
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Office vinyl wrapping — Derby
          </h1>
          <p className="mt-5 text-lg text-muted leading-relaxed">
            WRPX wraps office reception desks, breakout kitchen units, meeting room panels
            and built-in furniture for businesses across Derby — from Pride Park DE24
            business park units to Friar Gate DE1 city-centre offices. Work carried out
            around your schedule: evenings, weekends or phased installation during fit-out.
            South Yorkshire base: Derby is approximately 45 to 55 minutes south on the M1
            and A52.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact/" className="btn-primary">
              Discuss a Derby Office Project →
            </Link>
            <Link href="/architectural-wrap-offices/" className="btn-secondary">
              Office Wrapping Overview
            </Link>
          </div>
        </div>
      </section>

      {/* Derby office market context */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Derby&apos;s office market — where we work
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              Derby&apos;s office market is driven by two distinct zones: the city-centre
              historic core and the out-of-town business park corridor. Friar Gate DE1 —
              Derby&apos;s most architecturally distinctive office quarter, built around
              a Georgian streetscape north-west of the city centre — houses a range of
              professional services firms, solicitors and accountancy practices in converted
              period townhouses and purpose-built commercial infill. Reception areas and
              breakout kitchens in Friar Gate offices frequently benefit from vinyl wrapping
              programmes that refresh high-use surfaces without structural alteration to
              listed or period interiors.
            </p>
            <p>
              Pride Park DE24 — Derby&apos;s principal out-of-town business park, developed
              around the former Midland Railway engineering works site — is one of the
              largest business parks in the East Midlands. Major occupiers include Rolls-Royce
              Holdings, Toyota Manufacturing UK, Bombardier Transportation (now Alstom),
              and a cluster of engineering, logistics and professional services businesses.
              Office units in Pride Park DE24 range from large corporate headquarters to
              mid-size multi-tenanted office blocks — all with consistent vinyl wrapping
              demand for reception desks, breakout kitchens and ageing panel surfaces.
            </p>
            <p>
              Raynesway DE21 — the industrial and commercial corridor east of Derby city
              centre, running along the A6 toward Spondon — houses a mix of manufacturing,
              engineering and commercial office operations. Spondon DE21, Chaddesden DE21
              and Oakwood DE21 add further suburban commercial volume. Mickleover DE3
              and Littleover DE23 to the west of the city have a concentration of
              professional services and healthcare-adjacent offices. WRPX covers the full
              Derby and Derbyshire commercial office market from our South Yorkshire base —
              approximately 45 to 55 minutes via the M1 and A52.
            </p>
          </div>
        </div>
      </section>

      {/* What we wrap */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-2xl font-semibold text-foreground md:text-3xl">
            Office surfaces we wrap in Derby
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Reception desk fascias</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                The most common Derby office vinyl wrap project. A reception desk fascia
                that looks tired, discoloured or mismatched to a rebrand can be wrapped
                in a day — no removal, no rebuild, no trading disruption.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Breakout kitchen units</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Office kitchen unit doors, drawer fronts and exposed panels can be wrapped
                overnight or at weekends, delivering a consistent and modern finish without
                the disruption and cost of a full kitchen refurbishment.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Meeting room panels and furniture</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Meeting room table faces, credenza panels, storage unit doors and built-in
                joinery surfaces. Particularly effective in Derby offices where meeting room
                furniture from a previous refurbishment needs to match a new corporate
                colour scheme.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Internal door faces and frames</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Internal timber door faces and surrounding joinery can be wrapped across a
                Derby office floor or building — consistent colour and finish achieved without
                door replacement or painting disruption.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Feature wall panels</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Timber, MDF or laminate wall panels in reception, corridor and meeting areas.
                Wrapping can introduce brand colours, wood-effect finishes or plain contemporary
                textures across a Derby office interior in a single programme.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Phased and white-label programmes</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                We work white-label for Derby fit-out contractors and facilities management
                companies — attending under your company name, reporting back to your project
                manager, and providing full photographic documentation in your format.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Out-of-hours */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Out-of-hours installation — around your Derby office
          </h2>
          <div className="space-y-6 text-muted leading-relaxed">
            <p>
              Vinyl wrapping is a low-disruption process — no paint fumes, no major noise,
              no structural work. Even so, we default to out-of-hours installation for
              occupied Derby offices. Reception desks and breakout kitchens are typically
              done in the evening or over a weekend. For Pride Park DE24 business park
              units or Friar Gate DE1 professional offices, evening start times of 6pm
              onwards allow a full installation shift before the following morning.
            </p>
            <p>
              For larger multi-floor Derby programmes — particularly in the larger Pride
              Park office blocks — we agree a phased programme schedule with your
              facilities manager before any work begins. Each zone is completed, signed
              off and ready before the next is started, so no floor or department is
              disrupted for an extended period.
            </p>
            <p>
              For fit-out projects in vacant or part-occupied Derby offices, daytime
              installation is available and we integrate with the broader fit-out
              programme timeline — typically liaising directly with the main contractor&apos;s
              project manager on the Derby site.
            </p>
          </div>
        </div>
      </section>

      {/* Why vinyl wrapping vs replacement */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Vinyl wrapping vs replacing office surfaces in Derby
          </h2>
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="card-float border-accent/30 p-7">
              <h3 className="mb-4 text-lg font-semibold text-accent">Vinyl wrapping</h3>
              <ul className="space-y-3 text-sm text-muted">
                <li className="flex gap-2">
                  <span className="text-accent">✓</span>
                  Reception desk wrapped in a day — office open the next morning
                </li>
                <li className="flex gap-2">
                  <span className="text-accent">✓</span>
                  Fraction of the cost of replacement cabinetry or joinery
                </li>
                <li className="flex gap-2">
                  <span className="text-accent">✓</span>
                  No waste — existing substrate stays in place, no disposal required
                </li>
                <li className="flex gap-2">
                  <span className="text-accent">✓</span>
                  Reversible — wrap can be removed cleanly if the look changes
                </li>
                <li className="flex gap-2">
                  <span className="text-accent">✓</span>
                  White-label for Derby fit-out and facilities management companies
                </li>
              </ul>
            </div>
            <div className="card-float p-7">
              <h3 className="mb-4 text-lg font-semibold text-foreground">Full replacement</h3>
              <ul className="space-y-3 text-sm text-muted">
                <li className="flex gap-2">
                  <span className="text-muted">–</span>
                  Reception desk removal and rebuild — days of disruption
                </li>
                <li className="flex gap-2">
                  <span className="text-muted">–</span>
                  Significantly higher cost — new substrate, labour, disposal
                </li>
                <li className="flex gap-2">
                  <span className="text-muted">–</span>
                  Construction waste — skip required, disposal cost
                </li>
                <li className="flex gap-2">
                  <span className="text-muted">–</span>
                  Permanent change — no reversal without another full replacement
                </li>
                <li className="flex gap-2">
                  <span className="text-muted">–</span>
                  Lead time — new joinery typically 4–8 weeks from order
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-3xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Derby office vinyl wrapping — common questions
          </h2>
          <div className="space-y-4">
            {faqItems.map(({ q, a }) => (
              <details key={q} className="card-float group overflow-hidden">
                <summary className="cursor-pointer list-none px-6 py-4 font-medium text-foreground [&::-webkit-details-marker]:hidden">
                  {q}
                </summary>
                <div className="border-t border-border px-6 py-4 text-muted">{a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Related services for Derby offices and commercial properties
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <Link href="/architectural-wrap-offices/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Office vinyl wrapping — full overview</h3>
              <p className="mt-2 text-sm text-muted">All office vinyl wrapping applications, surfaces, film types and process — national coverage.</p>
            </Link>
            <Link href="/window-film/frosted-film-derby/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Frosted window film Derby</h3>
              <p className="mt-2 text-sm text-muted">Frosted and privacy window film for Derby offices, meeting rooms and commercial premises.</p>
            </Link>
            <Link href="/window-film/solar-control-film-derby/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Solar control film Derby</h3>
              <p className="mt-2 text-sm text-muted">Heat and glare reduction film for Derby office glazing — Pride Park, Friar Gate and all Derby office zones.</p>
            </Link>
            <Link href="/architectural-wrap-hotels-derby/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Hotel interior vinyl wrapping Derby</h3>
              <p className="mt-2 text-sm text-muted">Vinyl wrapping for Derby hotel interiors — bedroom furniture, reception areas and corridor surfaces.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-20">
        <div className="container mx-auto max-w-3xl">
          <div className="card-float border-2 border-accent/40 p-10 text-center md:p-12">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              Planning a Derby office vinyl wrapping project?
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              We survey Derby offices quickly — approximately 45 to 55 minutes from
              South Yorkshire on the M1 and A52. Tell us the project and we&apos;ll
              advise on surfaces, film specification and programme planning.
            </p>
            <Link href="/contact/" className="btn-primary mt-8 inline-block">
              Discuss Your Derby Office Project →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
