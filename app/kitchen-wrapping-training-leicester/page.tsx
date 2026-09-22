import type { Metadata } from "next";
import Link from "next/link";
import { trainingProgram } from "@/lib/training-program";
import { PricingCallout } from "@/components/training/PricingCallout";
import { TrainingRelatedLinks } from "@/components/training/TrainingRelatedLinks";
import { TrainingHubCta } from "@/components/training/TrainingHubCta";

export const metadata: Metadata = {
  title: "Kitchen Wrapping Training Leicester | Learn to Wrap — WRPX East Midlands",
  description:
    "Kitchen wrapping training accessible from Leicester and the East Midlands. WRPX runs 5-day live kitchen installs in South Yorkshire — approximately 55 minutes from Leicester via the M1. Real job training, not a classroom: learn prep, application, pricing and finishing. Leave with branding, a website, 12 months SEO and ongoing support. £1,699 all-in.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/kitchen-wrapping-training-leicester/",
  },
  openGraph: {
    title: "Kitchen Wrapping Training Leicester | WRPX East Midlands",
    description:
      "Leicester-accessible kitchen wrapping training on real live installs with WRPX. Full business setup included — branding, website, 12 months SEO and trade support. Approximately 55 minutes from Leicester via the M1.",
    url: "https://www.wrpx.co.uk/kitchen-wrapping-training-leicester/",
    type: "website",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Kitchen wrapping training Leicester — WRPX live-job training programme",
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
    { "@type": "City", name: "Leicester" },
    { "@type": "State", name: "Leicestershire" },
    { "@type": "State", name: "East Midlands" },
  ],
  description:
    "5-day kitchen wrapping training on a real live install with WRPX — accessible from Leicester and the East Midlands. Includes prep, primers, sealants, application, measure and price coaching, branding help, website + live domain, 12 months local SEO and ongoing phone/WhatsApp support. £1,699 all-in.",
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
      name: "Leicester",
      item: "https://www.wrpx.co.uk/kitchen-wrapping-training-leicester/",
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is WRPX kitchen wrapping training available to people based in Leicester?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — Leicester trainees are very welcome. Training takes place on live WRPX kitchen wrapping installs in South Yorkshire, approximately 55 minutes from Leicester city centre via the M1. The most direct route is the M1 north from Junction 21 (Leicester north-west) or Junction 21a (Leicester south), continuing north through the East Midlands and into South Yorkshire. From Leicester LE1 and the city centre, the M1 at Junction 21 is accessible via the A563 or A46 — a straightforward drive with no complex junctions once on the motorway. Leicester is the East Midlands&apos; largest city and sits on one of the fastest motorway corridors in the country for reaching South Yorkshire.",
      },
    },
    {
      "@type": "Question",
      name: "How far is the WRPX training base from Leicester?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Approximately 55 minutes from Leicester city centre LE1 via the M1 north to South Yorkshire. From Belgrave LE4 and Birstall LE4, the A6 north or A563 leads to the M1 at Junction 21a — adding a few minutes to the city centre time but avoiding the ring road entirely. From Wigston LE18 and Oadby LE2, the A6 or A5199 north to the ring road, then the M1 at Junction 21 or 21a. From Loughborough LE11 and Shepshed LE12, the M1 at Junction 23 (Loughborough) makes the drive to South Yorkshire approximately 45 to 50 minutes — closer than the city itself. From Market Harborough LE16 and Lutterworth LE17, the M1 at Junction 20 is nearby — approximately 65 to 70 minutes to South Yorkshire. Leicester is one of the better-connected East Midlands cities for reaching South Yorkshire quickly.",
      },
    },
    {
      "@type": "Question",
      name: "Is this classroom training or hands-on training?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Hands-on from day one. You join Connor and the WRPX team on a real kitchen install in a real client kitchen — typically in Sheffield or South Yorkshire. There is no classroom, no training bay, no mock kitchens. Five days on a live job is what prepares you for the actual work. The problems you encounter on a live install — adhesion issues on aged laminate, primer on MDF edges, fitting around existing appliances — are the problems you will encounter on your first solo job in Leicester. Classroom training cannot replicate that preparation.",
      },
    },
    {
      "@type": "Question",
      name: "Is kitchen wrapping a good business to launch from Leicester or Leicestershire?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Leicester is one of the strongest East Midlands markets for a kitchen wrapping business. The city has a population of approximately 350,000, and the wider Leicester urban area including Loughborough LE11, Hinckley LE10, Wigston LE18, Oadby LE2, Blaby LE8 and Market Harborough LE16 adds substantially to the residential base. The housing stock is exceptionally varied and wrapping-friendly: the Belgrave Road LE4 and North Evington LE5 corridors carry extensive Victorian and Edwardian terraced housing — homes now reaching the age where kitchen wrapping is the most cost-effective improvement option. Clarendon Park LE2 and Stoneygate LE2 contain solid Victorian terraces with a higher-income owner-occupier demographic. Knighton LE2, Oadby LE2 and Blaby LE8 have substantial inter-war and post-war semi-detached stock where aged fitted kitchens are widespread. Leicester&apos;s diverse economy — anchored by the University of Leicester, De Montfort University, Next plc headquarters, major NHS trusts and a large manufacturing and logistics sector — means a broad income demographic across the city. Kitchen wrapping search results across Leicester and LE postcodes are currently sparse. A trained wrapper with a live website targeting LE1 through LE18 postcodes is entering one of the UK&apos;s larger regional cities at an early stage.",
      },
    },
    {
      "@type": "Question",
      name: "What do I get at the end of the 5 days?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You leave with the wrap skill, branding help (name and logo direction), trade supplier introductions and account setup support, a done-for-you website with live domain, 12 months of local SEO updates targeting your towns and cities in Leicester and Leicestershire, an ongoing phone and WhatsApp support line, and a WRPX Certificate of Completion (if approved). The package is built so you leave with a real business ready to take enquiries — not just a technique.",
      },
    },
    {
      "@type": "Question",
      name: "How do I apply for a place from Leicester?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Message Connor on WhatsApp or call. Places open around live WRPX kitchen installs — so availability depends on the install schedule. If you are based in Leicester or Leicestershire and want to start a kitchen wrapping business, get in touch now and we will let you know the next intake. We do not hold long waitlists — when a place is available and you are ready, we move quickly.",
      },
    },
  ],
};

const faqItems = faqSchema.mainEntity.map((item) => ({
  q: item.name,
  a: item.acceptedAnswer.text,
}));

export default function KitchenWrappingTrainingLeicesterPage() {
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
            <span className="text-foreground">Leicester</span>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="border-b border-border bg-card py-16 md:py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <p className="text-sm font-medium uppercase tracking-wide text-accent">
            Kitchen Wrapping Training · Leicester &amp; East Midlands
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Kitchen wrapping training — Leicester
          </h1>
          <p className="mt-5 text-lg text-muted leading-relaxed">
            WRPX runs kitchen wrapping training on real live installs in South Yorkshire
            — approximately 55 minutes from Leicester via the M1.
            Five days on an actual kitchen job with Connor&apos;s team: prep, application,
            pricing and finishing under real conditions. Leave with the skill, a brand,
            a website, 12 months of SEO targeting Leicester and Leicestershire,
            and a support line. {trainingProgram.priceDisplay} all-in.
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

      {/* Travel from Leicester */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Getting to training from Leicester
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              Training takes place on live WRPX kitchen wrapping installs in Sheffield and
              South Yorkshire. From Leicester city centre LE1, South Yorkshire is
              approximately 55 minutes north via the M1. The route is direct: from
              Leicester, take the ring road to Junction 21 or 21a of the M1 — both are
              accessible from the A563 orbital or the A46 — then north on the M1 through
              Loughborough, Nottingham, and into South Yorkshire. Junction 36 (Barnsley)
              is approximately 45 minutes from Junction 21, and Junction 33 (Sheffield)
              a few minutes beyond.
            </p>
            <p>
              From Belgrave LE4 and Birstall LE4 — the northern Leicester residential
              suburbs — the A6 north or A563 connects to the M1 at Junction 21a,
              avoiding the city centre entirely and shaving a few minutes off the total
              journey. From Oadby LE2 and Wigston LE18, the A6 or A5199 north brings
              you to the ring road and then M1 Junction 21. From Loughborough LE11,
              Junction 23 on the M1 is very close — trainees from Loughborough and
              Shepshed LE12 are often only 45 to 50 minutes from South Yorkshire,
              making daily commuting straightforward.
            </p>
            <p>
              From Hinckley LE10 and Nuneaton CV11, the A5 or M69 east to the M1 at
              Junction 21 is the typical approach — approximately 65 to 70 minutes total,
              still within a realistic daily commute for a five-day programme. From
              Market Harborough LE16, the A508 or A6 north to the M1 at Junction 20
              (Lutterworth) and then north provides a clean motorway run.
            </p>
            <p>
              For Leicester trainees who prefer to stay overnight, Sheffield city centre S1
              has strong budget accommodation options — Travelodge and Premier Inn
              within a short walk of the city centre, typically under £60 per night midweek.
              This removes the daily commute entirely and is worth considering if you want
              to arrive sharp for a 7am or 8am site start.
            </p>
          </div>
        </div>
      </section>

      {/* Leicester market opportunity */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Kitchen wrapping in Leicester and Leicestershire — the market
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              Leicester is one of England&apos;s larger regional cities with a population of
              approximately 350,000, and the wider Leicestershire catchment — including
              Loughborough LE11, Hinckley LE10, Wigston LE18, Oadby LE2, Blaby LE8,
              Shepshed LE12 and Market Harborough LE16 — makes the realistic service
              area for a Leicester-based kitchen wrapper significantly larger.
            </p>
            <p>
              The Belgrave Road LE4 corridor and North Evington LE5 carry one of the
              UK&apos;s largest concentrations of Victorian and Edwardian terraced housing
              outside London. Houses built roughly between 1880 and 1920 — now well into
              their second or third kitchen renovation cycle — are exactly the stock
              where kitchen wrapping delivers the strongest return for homeowners.
              Full kitchen replacement costs are significant relative to property values
              in these areas, making wrapping the most attractive improvement option in
              many cases.
            </p>
            <p>
              Clarendon Park LE2 and Stoneygate LE2 contain solid Victorian terrace
              streets with a higher owner-occupier and professional income demographic
              — a cohort that consistently over-indexes on kitchen improvement spend.
              Knighton LE2 and Oadby LE2 carry substantial inter-war and post-war
              semi-detached housing where late-1970s and 1980s fitted kitchens are
              widespread — prime wrapping territory. Blaby LE8 and Wigston LE18 add
              further post-war suburban volume.
            </p>
            <p>
              Leicester&apos;s economy is anchored by the University of Leicester LE1,
              De Montfort University LE1, Next plc headquarters, major NHS trusts and
              a large manufacturing and logistics sector. This produces a wide income
              range across the city — but the middle band of owner-occupiers with aging
              kitchens and renovation budgets is large and consistent across LE postcodes.
            </p>
            <p>
              Specialist kitchen wrapping search results across Leicester and LE postcodes
              are currently very sparse. A kitchen wrapper with a live, optimised website
              targeting Leicester, Belgrave, Clarendon Park, Oadby, Wigston and nearby
              towns is entering one of the UK&apos;s larger regional markets at a genuinely
              early stage of local competition.
            </p>
          </div>
        </div>
      </section>

      {/* What is included */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-2xl font-semibold text-foreground md:text-3xl">
            What the {trainingProgram.priceDisplay} Leicester training includes
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                5 days on a live kitchen install
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Real client kitchen in South Yorkshire — approximately 55 minutes from
                Leicester via the M1. Real problems, real conditions, from day one —
                not a training mock-up.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Prep, primers, sealants and tools
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                The products we use every day — what to buy, where to get it, and how
                to apply it so a job lasts and doesn&apos;t come back.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Measure and price coaching
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                How to survey a kitchen, price it for your skill level and quote with
                confidence — so you&apos;re not guessing every job in Leicester
                or Clarendon Park.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Brand name and logo direction
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                A professional brand identity so you look like a real business from
                the first call a Leicester or Oadby homeowner makes.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Done-for-you website + live domain
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                A branded site ready to take enquiries — with your domain live so when
                someone in Leicester or Loughborough searches kitchen wrapping near
                them, you&apos;re there.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                12 months of local SEO updates
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                We target your towns and cities — Leicester, Belgrave, Clarendon Park,
                Oadby, Wigston, Loughborough, wherever your market is — so enquiries start
                coming while you get sharp on the tools.
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
                live architectural vinyl installation training with WRPX — not an
                official accreditation or industry licence.
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
            Leicester kitchen wrapping training — common questions
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
          <TrainingRelatedLinks currentHref="/kitchen-wrapping-training-leicester/" />
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
              Based in Leicester — ready to start, or want to talk first?
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Places open around our South Yorkshire kitchen installs — approximately
              55 minutes from Leicester via the M1. If you&apos;re serious about
              training, message Connor on WhatsApp or call — we&apos;ll tell you when
              the next intake is and what to expect.
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
