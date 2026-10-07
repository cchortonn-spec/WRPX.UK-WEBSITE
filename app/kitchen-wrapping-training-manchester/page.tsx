import type { Metadata } from "next";
import Link from "next/link";
import { trainingProgram } from "@/lib/training-program";
import { PricingCallout } from "@/components/training/PricingCallout";
import { TrainingRelatedLinks } from "@/components/training/TrainingRelatedLinks";
import { TrainingHubCta } from "@/components/training/TrainingHubCta";

export const metadata: Metadata = {
  title: "Kitchen Wrapping Training Manchester | Learn to Wrap — WRPX North West",
  description:
    "Kitchen wrapping training accessible from Manchester and the North West. WRPX runs 5-day live kitchen installs in South Yorkshire — approximately 1 hour from Manchester city centre via the M1 or M62. Real job training, not a classroom: learn prep, application, pricing and finishing. Leave with branding, a website, 12 months SEO and ongoing support. £1,699 all-in.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/kitchen-wrapping-training-manchester/",
  },
  openGraph: {
    title: "Kitchen Wrapping Training Manchester | WRPX North West",
    description:
      "Manchester-accessible kitchen wrapping training on real live installs with WRPX. Full business setup included — branding, website, 12 months SEO and trade support. Approximately 1 hour from Manchester.",
    url: "https://www.wrpx.co.uk/kitchen-wrapping-training-manchester/",
    type: "website",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Kitchen wrapping training Manchester — WRPX live-job training programme",
  provider: {
    "@type": "LocalBusiness",
    name: "WRPX",
    url: "https://www.wrpx.co.uk",
    address: {
      "@type": "PostalAddress",
      addressRegion: "South Yorkshire",
      addressCountry: "GB",
    },
  },
  areaServed: [
    { "@type": "City", name: "Manchester" },
    { "@type": "State", name: "Greater Manchester" },
    { "@type": "State", name: "North West England" },
  ],
  description:
    "5-day kitchen wrapping training on a real live install with WRPX — accessible from Manchester and the North West. Includes prep, primers, sealants, application, measure and price coaching, branding help, website + live domain, 12 months local SEO and ongoing phone/WhatsApp support. £1,699 all-in.",
  offers: {
    "@type": "Offer",
    price: "1699",
    priceCurrency: "GBP",
    description: "Complete kitchen wrapping training and business launch package",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.wrpx.co.uk/" },
    {
      "@type": "ListItem",
      position: 2,
      name: "Kitchen Wrapping Training",
      item: "https://www.wrpx.co.uk/kitchen-wrapping-training/",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Manchester",
      item: "https://www.wrpx.co.uk/kitchen-wrapping-training-manchester/",
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is WRPX kitchen wrapping training available to people based in Manchester?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — Manchester trainees are very welcome. Training takes place on live WRPX kitchen wrapping installs in South Yorkshire, approximately 1 hour from Manchester city centre via the M60, M62 east and M1 south. From Salford and the M602 corridor, the M62 east is a clean motorway run that joins the M1 south towards Sheffield and the South Yorkshire area. From Stockport SK1, the route south via the A6 or M60 connects to the M1 in Derbyshire for a similar run time.",
      },
    },
    {
      "@type": "Question",
      name: "How far is the training from Manchester?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our kitchen wrapping installs are primarily in Sheffield and South Yorkshire — approximately 1 hour from Manchester city centre via the M60 east and M1 south. From Salford it is a similar distance via the M602 and M62 east. From Bolton BL1 it is approximately 1 hour 10 minutes via the M61 and M62. From Wigan WN1, the M6 south to the M62 east and M1 runs approximately 1 hour. From Stockport SK1, the route south via the M60 and A6/M1 is approximately 50 minutes. Many Manchester trainees choose to stay overnight in Sheffield for the 5 days — budget hotels in Sheffield city centre are easy to find and make the training week more relaxed.",
      },
    },
    {
      "@type": "Question",
      name: "Is this classroom training or hands-on training?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Hands-on from day one. You join Connor and the WRPX team on a real kitchen install in a real client's kitchen — typically in Sheffield or South Yorkshire. There is no classroom, no training bay, no mock kitchens. Five days on a live job is what trains you for the actual work — not for a certificate on a controlled surface.",
      },
    },
    {
      "@type": "Question",
      name: "Is kitchen wrapping a good business to launch from Manchester or the North West?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Manchester and Greater Manchester represent one of the largest markets in the UK for kitchen wrapping. The region has an enormous and diverse housing stock — a mix of terraced housing, semis and flats across M1–M35 postcodes, with strong demand across Salford, Trafford, Stockport, Bolton and Wigan. Manchester city centre itself has a huge apartment and new-build market where kitchen wrapping is often the only practical renovation option for leasehold owners. The wider North West — including Warrington, Bury, Oldham, Rochdale and the Cheshire commuter belt — all represent distinct local markets with growing kitchen wrapping demand. A well-positioned North West kitchen wrapper with a strong website is targeting one of the highest-volume regions in the UK outside London.",
      },
    },
    {
      "@type": "Question",
      name: "What do I get at the end of the 5 days?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You leave with the wrap skill, branding help (name and logo direction), trade supplier introductions and account setup support, a done-for-you website with live domain, 12 months of local SEO updates targeting your towns and cities in Greater Manchester and beyond, an ongoing phone and WhatsApp support line, and a WRPX Certificate of Completion (if approved). The package is designed so you leave with a real business ready to take enquiries — not just a technique.",
      },
    },
    {
      "@type": "Question",
      name: "How do I apply for a place from Manchester?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Message Connor on WhatsApp or call. Places open around live WRPX kitchen installs — so availability depends on the install schedule. If you are based in Manchester or the North West and want to start a kitchen wrapping business, get in touch now and we will let you know the next intake. We do not hold long waitlists — when a place is available and you are ready, we move quickly.",
      },
    },
  ],
};

const faqItems = [
  {
    q: "Is WRPX kitchen wrapping training available to people based in Manchester?",
    a: "Yes — Manchester trainees are very welcome. Training takes place on live WRPX kitchen wrapping installs in South Yorkshire, approximately 1 hour from Manchester city centre via the M60, M62 east and M1 south. From Salford and the M602 corridor, the M62 east is a clean motorway run that joins the M1 south towards Sheffield and the South Yorkshire area. From Stockport SK1, the route south via the A6 or M60 connects to the M1 in Derbyshire for a similar run time.",
  },
  {
    q: "How far is the training from Manchester?",
    a: "Our kitchen wrapping installs are primarily in Sheffield and South Yorkshire — approximately 1 hour from Manchester city centre via the M60 east and M1 south. From Salford it is a similar distance via the M602 and M62 east. From Bolton BL1 it is approximately 1 hour 10 minutes via the M61 and M62. From Wigan WN1, the M6 south to the M62 east and M1 runs approximately 1 hour. From Stockport SK1, the route south via the M60 and A6/M1 is approximately 50 minutes. Many Manchester trainees choose to stay overnight in Sheffield for the 5 days — budget hotels in Sheffield city centre are easy to find and make the training week more relaxed.",
  },
  {
    q: "Is this classroom training or hands-on training?",
    a: "Hands-on from day one. You join Connor and the WRPX team on a real kitchen install in a real client's kitchen — typically in Sheffield or South Yorkshire. There is no classroom, no training bay, no mock kitchens. Five days on a live job is what trains you for the actual work — not for a certificate on a controlled surface.",
  },
  {
    q: "Is kitchen wrapping a good business to launch from Manchester or the North West?",
    a: "Manchester and Greater Manchester represent one of the largest markets in the UK for kitchen wrapping. The region has an enormous and diverse housing stock — a mix of terraced housing, semis and flats across M1–M35 postcodes, with strong demand across Salford, Trafford, Stockport, Bolton and Wigan. Manchester city centre itself has a huge apartment and new-build market where kitchen wrapping is often the only practical renovation option for leasehold owners. The wider North West — including Warrington, Bury, Oldham, Rochdale and the Cheshire commuter belt — all represent distinct local markets with growing kitchen wrapping demand. A well-positioned North West kitchen wrapper with a strong website is targeting one of the highest-volume regions in the UK outside London.",
  },
  {
    q: "What do I get at the end of the 5 days?",
    a: "You leave with the wrap skill, branding help (name and logo direction), trade supplier introductions and account setup support, a done-for-you website with live domain, 12 months of local SEO updates targeting your towns and cities in Greater Manchester and beyond, an ongoing phone and WhatsApp support line, and a WRPX Certificate of Completion (if approved). The package is designed so you leave with a real business ready to take enquiries — not just a technique.",
  },
  {
    q: "How do I apply for a place from Manchester?",
    a: "Message Connor on WhatsApp or call. Places open around live WRPX kitchen installs — so availability depends on the install schedule. If you are based in Manchester or the North West and want to start a kitchen wrapping business, get in touch now and we will let you know the next intake. We do not hold long waitlists — when a place is available and you are ready, we move quickly.",
  },
];

export default function KitchenWrappingTrainingManchesterPage() {
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
            <Link href="/" className="text-accent hover:underline">
              Home
            </Link>
            <span className="mx-2">›</span>
            <Link
              href="/kitchen-wrapping-training/"
              className="text-accent hover:underline"
            >
              Kitchen Wrapping Training
            </Link>
            <span className="mx-2">›</span>
            <span className="text-foreground">Manchester</span>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="border-b border-border bg-card py-16 md:py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <p className="text-sm font-medium uppercase tracking-wide text-accent">
            Kitchen Wrapping Training · Manchester &amp; North West
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Kitchen wrapping training — Manchester
          </h1>
          <p className="mt-5 text-lg text-muted leading-relaxed">
            WRPX runs kitchen wrapping training on real live installs in South Yorkshire
            — approximately 1 hour from Manchester city centre via the M60 and M1. Five
            days on an actual kitchen job with Connor&apos;s team: prep, application,
            pricing and finishing under real conditions. Leave with the skill, a brand,
            a website, 12 months of SEO targeting Greater Manchester and beyond, and a
            support line. {trainingProgram.priceDisplay} all-in.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="https://wa.me/447467922560"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Apply on WhatsApp →
            </Link>
            <Link href="/kitchen-wrapping-training/" className="btn-secondary">
              Full Training Overview
            </Link>
          </div>
        </div>
      </section>

      {/* Travel from Manchester */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Getting to training from Manchester
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              Training takes place on live WRPX kitchen wrapping installs in Sheffield and
              South Yorkshire — our home territory. From Manchester city centre, South Yorkshire
              is approximately 1 hour east via the M60 ring road connecting to the M1 south.
              The M62 east from Salford and the M602 corridor is a clean alternative route
              that joins the M1 close to the South Yorkshire boundary.
            </p>
            <p>
              From Salford M5 and Eccles, the M62 east is the most direct route — joining
              the M1 south at Lofthouse junction near Wakefield, then continuing south
              into Sheffield. From Bolton BL1, take the M61 south to the M62, then east
              to the M1 — approximately 1 hour 10 minutes. From Stockport SK1, the M60
              clockwise to the M60/A6 junction connects south to the M1 via Derbyshire —
              approximately 50 minutes.
            </p>
            <p>
              Many trainees from Manchester choose to stay overnight in Sheffield for the
              5 days rather than commuting daily. Sheffield has an excellent range of
              budget hotels and serviced apartments in the city centre — straightforward
              to book for a working week. The Travelodge and Premier Inn options in
              Sheffield city centre are well-priced and a short drive from South Yorkshire
              install sites.
            </p>
            <p>
              If you prefer to commute, the M60 to M1 route from Manchester is reliable
              outside rush hours. Training follows a normal trade day on the install —
              typically 8am to 5pm — so an early start from Manchester is manageable
              for those who prefer the daily drive over staying over.
            </p>
          </div>
        </div>
      </section>

      {/* Manchester market opportunity */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Kitchen wrapping in Manchester and the North West — the market
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              Greater Manchester and the wider North West represent one of the largest
              regional markets in the UK for kitchen wrapping. The region has a vast and
              densely populated housing stock — terraced housing, semis and modern flats
              spanning M1 to M35 postcodes and beyond — where kitchen wrapping sits firmly
              in the &ldquo;affordable renovation&rdquo; spend bracket that continues to
              grow year on year.
            </p>
            <p>
              Manchester city centre and the surrounding apartment market — particularly
              the Deansgate M3, Spinningfields M3, Northern Quarter M4, Salford Quays M50
              and Ancoats M4 developments — represent a huge demand source for kitchen
              wrapping. Leasehold apartment owners rarely want to replace integrated
              kitchens: wrapping is often the only renovation option that makes sense
              financially and practically in a managed building.
            </p>
            <p>
              The outer boroughs — Salford, Trafford, Stockport, Bolton, Wigan, Bury,
              Oldham, Rochdale — each represent distinct local kitchen wrapping markets
              with their own residential demand. The Cheshire commuter belt to the south
              — Altrincham WA14, Sale M33, Wilmslow SK9, Knutsford WA16 — adds a
              higher-value domestic renovation market where kitchen wrapping competes
              with spray-paint services and partial replacement.
            </p>
            <p>
              Skilled kitchen wrappers who can finish jobs cleanly and hold a returning
              client base are in short supply across Greater Manchester and the North West.
              The combination of high residential demand and limited local supply is
              exactly the environment a new kitchen wrapping business with proper SEO
              can grow into quickly — particularly if the website targets multiple
              Greater Manchester boroughs from the start.
            </p>
          </div>
        </div>
      </section>

      {/* What is included */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-2xl font-semibold text-foreground md:text-3xl">
            What the {trainingProgram.priceDisplay} Manchester training includes
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                5 days on a live kitchen install
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Real client kitchen in South Yorkshire — approximately 1 hour from
                Manchester. Real problems, real conditions, from day one — not a
                training mock-up.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Prep, primers, sealants and tools
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                The products we use every day — what to buy, where to get it, and how to
                apply it so a job lasts and doesn&apos;t come back.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Measure and price coaching
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                How to survey a kitchen, price it for your skill level and quote with
                confidence — so you&apos;re not guessing every job in Manchester
                or Salford.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Brand name and logo direction
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                A professional brand identity so you look like a real business from the
                first call a Manchester or Stockport homeowner makes.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Done-for-you website + live domain
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                A branded site ready to take enquiries — with your domain live so when
                someone in Manchester or Bolton searches kitchen wrapping near them,
                you&apos;re there.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                12 months of local SEO updates
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                We target your towns and cities — Manchester, Salford, Stockport,
                Bolton, Wigan, wherever your market is — so enquiries start coming
                while you get sharp on the tools.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Supplier introductions and account help
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                We introduce you to the suppliers we use and help you open a trade
                account — so you buy like a professional from day one.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Ongoing phone and WhatsApp support
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Stuck on a tool, product or tricky substrate after training? Message or
                call — we answer.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                WRPX Certificate of Completion
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Awarded on successful completion (if approved). Confirms you completed
                live architectural vinyl installation training with WRPX — not an official
                accreditation or industry licence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing callout */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <PricingCallout />
        </div>
      </section>

      {/* Live job vs classroom */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Live job training vs classroom training
          </h2>
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="card-float border-accent/30 p-7">
              <h3 className="mb-4 text-lg font-semibold text-accent">WRPX — live job</h3>
              <ul className="space-y-3 text-sm text-muted">
                <li className="flex gap-2">
                  <span className="text-accent">✓</span>
                  Real client kitchen — not a training mock-up
                </li>
                <li className="flex gap-2">
                  <span className="text-accent">✓</span>
                  Problems you only see on a live job — and how to solve them
                </li>
                <li className="flex gap-2">
                  <span className="text-accent">✓</span>
                  Pricing and survey coaching on a real job you helped complete
                </li>
                <li className="flex gap-2">
                  <span className="text-accent">✓</span>
                  Business setup included — brand, website, SEO, suppliers
                </li>
                <li className="flex gap-2">
                  <span className="text-accent">✓</span>
                  Support line after training — not a certificate and goodbye
                </li>
                <li className="flex gap-2">
                  <span className="text-accent">✓</span>
                  Subcontract pathway for overflow WRPX work (when available)
                </li>
              </ul>
            </div>
            <div className="card-float p-7">
              <h3 className="mb-4 text-lg font-semibold text-foreground">
                Classroom-only course
              </h3>
              <ul className="space-y-3 text-sm text-muted">
                <li className="flex gap-2">
                  <span className="text-muted">–</span>
                  Training bay or mock kitchen — controlled conditions, not real
                </li>
                <li className="flex gap-2">
                  <span className="text-muted">–</span>
                  Problems are staged — real installs are always different
                </li>
                <li className="flex gap-2">
                  <span className="text-muted">–</span>
                  Pricing theory — no real-job context to anchor it
                </li>
                <li className="flex gap-2">
                  <span className="text-muted">–</span>
                  Certificate issued — business setup is your own problem
                </li>
                <li className="flex gap-2">
                  <span className="text-muted">–</span>
                  No ongoing support once the course ends
                </li>
                <li className="flex gap-2">
                  <span className="text-muted">–</span>
                  No subcontract pathway or overflow work connection
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Who it is for */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Who this training is for
          </h2>
          <div className="grid gap-5 sm:grid-cols-3">
            {trainingProgram.whoItsFor.map((group) => (
              <div key={group.title} className="card-float p-6">
                <h3 className="font-semibold text-foreground">{group.title}</h3>
                <p className="mt-3 text-sm text-muted leading-relaxed">
                  {group.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-3xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Manchester kitchen wrapping training — common questions
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

      {/* Related links */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <TrainingRelatedLinks currentHref="/kitchen-wrapping-training-manchester/" />
        </div>
      </section>

      {/* Hub CTA */}
      <section className="px-4 pb-16">
        <div className="container mx-auto max-w-4xl">
          <TrainingHubCta />
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-4 py-20">
        <div className="container mx-auto max-w-3xl">
          <div className="card-float border-2 border-accent/40 p-10 text-center md:p-12">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              Based in Manchester — ready to start, or want to talk first?
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Places open around our South Yorkshire kitchen installs — approximately
              1 hour from Manchester. If you&apos;re serious about training, message
              Connor on WhatsApp or call — we&apos;ll tell you when the next intake
              is and what to expect.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                href="https://wa.me/447467922560"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Apply on WhatsApp →
              </Link>
              <Link href="/contact/" className="btn-secondary">
                Send an enquiry instead
              </Link>
            </div>
            <p className="mt-6 text-xs text-muted/70">
              {trainingProgram.earnings.disclaimer}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
