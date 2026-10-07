import type { Metadata } from "next";
import Link from "next/link";
import { trainingProgram } from "@/lib/training-program";
import { PricingCallout } from "@/components/training/PricingCallout";
import { TrainingRelatedLinks } from "@/components/training/TrainingRelatedLinks";
import { TrainingHubCta } from "@/components/training/TrainingHubCta";

export const metadata: Metadata = {
  title: "Kitchen Wrapping Training London | Learn to Wrap — WRPX Live Job Training",
  description:
    "Kitchen wrapping training accessible from London. WRPX runs 5-day live kitchen installs in South Yorkshire — approximately 2 hours 30 minutes from London via the M1. Not a classroom: real job training on an actual kitchen. Leave with branding, a website, 12 months SEO and ongoing support. £1,699 all-in.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/kitchen-wrapping-training-london/",
  },
  openGraph: {
    title: "Kitchen Wrapping Training London | WRPX Live Job Training",
    description:
      "London-accessible kitchen wrapping training on real live installs with WRPX. Full business setup included — branding, website, 12 months SEO and trade support. Approximately 2 hours 30 minutes from London via the M1.",
    url: "https://www.wrpx.co.uk/kitchen-wrapping-training-london/",
    type: "website",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Kitchen wrapping training London — WRPX live-job training programme",
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
    { "@type": "City", name: "London" },
    { "@type": "State", name: "Greater London" },
  ],
  description:
    "5-day kitchen wrapping training on a real live install with WRPX — accessible from London by road or rail. Includes prep, primers, sealants, application, measure and price coaching, branding help, website + live domain, 12 months local SEO and ongoing phone/WhatsApp support. £1,699 all-in.",
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
      name: "London",
      item: "https://www.wrpx.co.uk/kitchen-wrapping-training-london/",
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is WRPX kitchen wrapping training available to people based in London?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — Londoners are welcome. Training takes place on live WRPX kitchen wrapping installs in South Yorkshire, approximately 2 hours 30 minutes from central London by road via the M1, or around 2 hours by direct train from London St Pancras or King&apos;s Cross to Sheffield. The M1 is accessible directly from North London via the A1(M) or from the M25 orbital at junction 6a/7/21. For trainees from South London (SE, SW, BR, CR postcodes) or East London (E, N, Waltham Forest), the M1 via the North Circular A406 or the A1 northbound is the standard route. Most London trainees who want to avoid daily 5-hour round trips either stay in Sheffield for the week — midweek hotel accommodation in Sheffield city centre typically costs under £60 a night — or drive up and down on a day basis from North London, which is a long day but very manageable for motivated trainees.",
      },
    },
    {
      "@type": "Question",
      name: "How long does it take to travel from London to the WRPX training base?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Approximately 2 hours 30 minutes to 3 hours by road depending on where in London you are starting. From North London — Islington N1, Highbury N5, Stoke Newington N16, Walthamstow E17 — the A1/A1(M) northbound to South Yorkshire is around 2 hours 30 minutes in clear traffic. From South London — Brixton SW2, Clapham SW4, Camberwell SE5, Peckham SE15 — add approximately 30 to 45 minutes across the city to the North Circular before picking up the M1. From East London — Hackney E8, Bethnal Green E2, Stratford E15, Ilford IG1 — the A12 north to the North Circular A406, then north via the A1 or M1, gives a 2 hour 45 minute to 3 hour run to Sheffield. By train, London St Pancras to Sheffield is typically 2 hours 5 minutes on East Midlands Railway with a direct service. Sheffield has good accommodation within walking distance of the city centre, and most London trainees who stay for the week find the cost modest relative to the commute.",
      },
    },
    {
      "@type": "Question",
      name: "Is this classroom training or hands-on training?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Hands-on from day one. You join Connor and the WRPX team on a real kitchen install in a real client kitchen — typically in Sheffield or South Yorkshire. There is no classroom, no training bay, no mock kitchens. Five days on a live job is what prepares you for the actual work. The problems you encounter on a live install — adhesion failure on aged laminate, primer on bare MDF edges, cutting around existing appliances and cornices, finishing at a difficult angle — are the same problems you will face on your first solo job in London. No classroom setting can replicate that preparation, which is precisely why WRPX structures training this way.",
      },
    },
    {
      "@type": "Question",
      name: "Is kitchen wrapping a good business to launch in London?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "London is arguably the strongest single market for kitchen wrapping in the UK. The city has approximately 8 million residents and some of the densest concentrations of Victorian and Edwardian terrace housing in England — particularly across North London (Islington N1, Highbury N5, Hackney N16, Stoke Newington N16, Haringey N8/N15/N17, Tottenham N17, Walthamstow E17), East London (Bethnal Green E2, Hackney E8, Leyton E10, Bow E3, Forest Gate E7, Manor Park E12), and South East London (Lewisham SE13, New Cross SE14, Brockley SE4, Peckham SE15, Catford SE6, Forest Hill SE23). These are areas where fitted kitchens installed in the 1980s and 1990s are well past the point where the cost of wrapping — versus full kitchen replacement — is a clear and obvious saving for owner-occupiers. South West London (Brixton SW2, Clapham SW4, Balham SW12, Tooting SW17, Streatham SW16) and West London (Acton W3, Hanwell W7, Ealing W5, Chiswick W4) carry large volumes of Victorian and Edwardian semi-detached properties where the kitchen improvement spend demographic is consistently strong. London kitchen wrapping demand is real and growing — the market is large, the housing stock is well-suited, and a trained wrapper with a live, optimised website can carve out a strong local book in any borough.",
      },
    },
    {
      "@type": "Question",
      name: "What do I get at the end of the 5 days?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You leave with the wrap skill, branding help (name and logo direction), trade supplier introductions and account setup support, a done-for-you website with live domain, 12 months of local SEO updates targeting your London boroughs, postcodes and areas, an ongoing phone and WhatsApp support line, and a WRPX Certificate of Completion (if approved). The package is built so you leave with a real business ready to take enquiries — not just a technique.",
      },
    },
    {
      "@type": "Question",
      name: "How do I apply for a place from London?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Message Connor on WhatsApp or call. Places open around live WRPX kitchen installs — so availability depends on the install schedule. If you are based anywhere in London or the Home Counties and want to start a kitchen wrapping business, get in touch now and we will let you know the next intake. We do not hold long waitlists — when a place is available and you are ready, we move quickly.",
      },
    },
  ],
};

const faqItems = faqSchema.mainEntity.map((item) => ({
  q: item.name,
  a: item.acceptedAnswer.text,
}));

export default function KitchenWrappingTrainingLondonPage() {
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
            <span className="text-foreground">London</span>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="border-b border-border bg-card py-16 md:py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <p className="text-sm font-medium uppercase tracking-wide text-accent">
            Kitchen Wrapping Training · London &amp; Greater London
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Kitchen wrapping training — London
          </h1>
          <p className="mt-5 text-lg text-muted leading-relaxed">
            WRPX runs kitchen wrapping training on real live installs in South Yorkshire
            — approximately 2 hours 30 minutes from London by road via the M1, or 2 hours
            by direct train from St Pancras to Sheffield. Five days on an actual kitchen
            job with Connor&apos;s team: prep, application, pricing and finishing under real
            conditions. Leave with the skill, a brand, a website, 12 months of SEO
            targeting your London boroughs, and a support line.{" "}
            {trainingProgram.priceDisplay} all-in.
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

      {/* Travel from London */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Getting to training from London
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              Training takes place on live WRPX kitchen wrapping installs in Sheffield and
              South Yorkshire. From London, the two practical routes are by road via the
              M1 or by direct train from St Pancras or King&apos;s Cross to Sheffield.
            </p>
            <p>
              By road from North London — Islington N1, Highbury N5, Stoke Newington N16,
              Walthamstow E17, Tottenham N17, Wood Green N22 — the A1 northbound from
              Archway or Holloway Road picks up the A1(M) in Hertfordshire and continues
              north through Stevenage, Peterborough and Doncaster into South Yorkshire.
              Total time from North London is typically 2 hours 20 to 2 hours 40 minutes
              in off-peak conditions. The M1 alternative from the North Circular A406 at
              Brent Cross or Whetstone picks up at junction 2 and runs north via Luton,
              Northampton, Leicester and Nottingham into South Yorkshire — approximately
              2 hours 30 minutes from the M1 entry.
            </p>
            <p>
              From South London — Brixton SW2, Clapham SW4, Camberwell SE5, Peckham SE15,
              Lewisham SE13, Greenwich SE10, Forest Hill SE23 — cross the city via the
              South Circular A205 to the North Circular A406 at Hanger Lane, then north
              via the M1 or A1. Total time from South London is typically 2 hours 50 to
              3 hours 15 minutes depending on London traffic. The most reliable approach
              from South London is a 0530–0600 start to avoid the M25 and North London
              peak build-up, which makes the M1 clear by Luton.
            </p>
            <p>
              From East London — Hackney E8, Bethnal Green E2, Stratford E15, Ilford IG1,
              Forest Gate E7, Walthamstow E17 — the A12 northbound to the North Circular
              A406 at Wanstead or Redbridge, then the A1 north via Barnet is typically
              the cleanest route. From Ilford IG1 or Romford RM, the M11 northbound to
              the M25 and then A1(M) north is another option — approximately 2 hours
              45 minutes to South Yorkshire from East London.
            </p>
            <p>
              By train, East Midlands Railway runs direct services from London St Pancras
              to Sheffield with a journey time of approximately 2 hours 5 minutes. Avanti
              West Coast runs services from London Euston via the West Midlands with a
              change at Birmingham New Street or Derby — slightly longer than the direct
              St Pancras route. For trainees who want to remove the driving cost entirely,
              the train is a clean option with Sheffield city centre accommodation available
              from the station in under 10 minutes on foot.
            </p>
            <p>
              Most London trainees who do the full 5 days find that staying in Sheffield
              for the week is the most practical approach. Sheffield city centre has
              strong budget accommodation options — typically £50 to £70 per night midweek
              — which makes the commute cost minor relative to the training investment.
            </p>
          </div>
        </div>
      </section>

      {/* London market opportunity */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Kitchen wrapping in London — the market
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              London is the largest single market for kitchen wrapping in the UK. The city
              has approximately 8 million residents across 33 boroughs, with some of the
              densest concentrations of Victorian and Edwardian terrace housing in England
              — the exact stock where kitchen wrapping delivers the clearest financial
              case for owner-occupiers: a full kitchen upgrade for a fraction of the
              replacement cost.
            </p>
            <p>
              North London — Islington N1, Highbury N5, Hackney N16, Stoke Newington N16,
              Haringey N8, Crouch End N8, Hornsey N8, Tottenham N17, Walthamstow E17,
              Finsbury Park N4 — is one of the most concentrated bands of Victorian and
              Edwardian terrace housing in England. These are rows of two-up two-down
              terraces and bay-fronted Edwardian semis where the kitchen was last fitted
              in the 1980s or 1990s, the units are solid and functional, and the
              homeowner is looking for a significant visual improvement without the
              disruption and cost of a full replacement. Kitchen wrapping is precisely
              what this market wants.
            </p>
            <p>
              East London — Bethnal Green E2, Hackney E8, Leyton E10, Leytonstone E11,
              Forest Gate E7, Manor Park E12, Walthamstow E17, Bow E3, Stratford E15,
              Plaistow E13 — carries large volumes of Victorian terrace and inter-war
              semi-detached housing in areas that have gentrified significantly over the
              past 15 years. The owner-occupier demographic in E postcodes has shifted
              dramatically toward younger professionals and families with renovation
              budgets — people who bought a period terrace and want the kitchen to match
              the rest of the house without spending £15,000 on a replacement. Kitchen
              wrapping sits perfectly in this market segment.
            </p>
            <p>
              South East London — Lewisham SE13, Catford SE6, Brockley SE4, New Cross
              SE14, Peckham SE15, Nunhead SE15, Forest Hill SE23, Dulwich SE21, Herne
              Hill SE24 — follows the same pattern: Victorian terrace rows in areas
              that have gentrified, with an owner-occupier base now investing selectively
              in property improvements. SE postcodes carry tens of thousands of period
              kitchens in properties owned by people who care about the result.
            </p>
            <p>
              South West London — Brixton SW2, Stockwell SW9, Clapham SW4, Balham SW12,
              Tooting SW17, Streatham SW16, Mitcham CR4 — extends the same Victorian
              and Edwardian terrace belt south-west. West London — Acton W3, Hanwell W7,
              Ealing W5, Chiswick W4, Hammersmith W6 — carries Edwardian semi-detached
              properties with a high owner-occupier, professional household demographic
              and strong kitchen improvement spend patterns.
            </p>
            <p>
              Kitchen wrapping search results for London boroughs are fragmented. A
              well-trained wrapper with a live, optimised website targeting specific
              London postcodes and boroughs is not entering a saturated market — they
              are entering the largest residential property market in the UK at a
              stage where most kitchen wrapping operators are either unoptimised or
              covering multiple services without focus. London is the best single
              location in the country to build a kitchen wrapping business.
            </p>
          </div>
        </div>
      </section>

      {/* What is included */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-2xl font-semibold text-foreground md:text-3xl">
            What the {trainingProgram.priceDisplay} London training includes
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                5 days on a live kitchen install
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Real client kitchen in South Yorkshire — approximately 2 hours 30 minutes
                from London via the M1. Real problems, real conditions, from day one —
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
                confidence — so you&apos;re not guessing every job across London boroughs.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Brand name and logo direction
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                A professional brand identity so you look like a real business from
                the first call a North London or South London homeowner makes.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Done-for-you website + live domain
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                A branded site ready to take enquiries — with your domain live so when
                someone in Hackney, Islington or Lewisham searches kitchen wrapping near
                them, you&apos;re there.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                12 months of local SEO updates
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                We target your London boroughs and postcodes — N, E, SE, SW, W, wherever
                your market is — so enquiries start coming while you get sharp on the tools.
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
            London kitchen wrapping training — common questions
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
          <TrainingRelatedLinks currentHref="/kitchen-wrapping-training-london/" />
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
              Based in London — ready to start, or want to talk first?
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Places open around our South Yorkshire kitchen installs — approximately
              2 hours 30 minutes from London via the M1 or 2 hours by direct train from
              St Pancras to Sheffield. If you&apos;re serious about training, message Connor
              on WhatsApp or call — we&apos;ll tell you when the next intake is and what
              to expect.
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
