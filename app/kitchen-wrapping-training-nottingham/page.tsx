import type { Metadata } from "next";
import Link from "next/link";
import { trainingProgram } from "@/lib/training-program";
import { PricingCallout } from "@/components/training/PricingCallout";
import { TrainingRelatedLinks } from "@/components/training/TrainingRelatedLinks";
import { TrainingHubCta } from "@/components/training/TrainingHubCta";

export const metadata: Metadata = {
  title: "Kitchen Wrapping Training Nottingham | Learn to Wrap — WRPX East Midlands",
  description:
    "Kitchen wrapping training accessible from Nottingham and the East Midlands. WRPX runs 5-day live kitchen installs in South Yorkshire — approximately 55 minutes from Nottingham city centre via the M1 north. Real job training, not a classroom: learn prep, application, pricing and finishing. Leave with branding, a website, 12 months SEO and ongoing support. £1,699 all-in.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/kitchen-wrapping-training-nottingham/",
  },
  openGraph: {
    title: "Kitchen Wrapping Training Nottingham | WRPX East Midlands",
    description:
      "Nottingham-accessible kitchen wrapping training on real live installs with WRPX. Full business setup included — branding, website, 12 months SEO and trade support. Approximately 55 minutes from Nottingham via the M1.",
    url: "https://www.wrpx.co.uk/kitchen-wrapping-training-nottingham/",
    type: "website",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Kitchen wrapping training Nottingham — WRPX live-job training programme",
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
    { "@type": "City", name: "Nottingham" },
    { "@type": "State", name: "East Midlands" },
    { "@type": "State", name: "Nottinghamshire" },
  ],
  description:
    "5-day kitchen wrapping training on a real live install with WRPX — accessible from Nottingham and the East Midlands. Includes prep, primers, sealants, application, measure and price coaching, branding help, website + live domain, 12 months local SEO and ongoing phone/WhatsApp support. £1,699 all-in.",
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
      name: "Nottingham",
      item: "https://www.wrpx.co.uk/kitchen-wrapping-training-nottingham/",
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is WRPX kitchen wrapping training available to people based in Nottingham?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — Nottingham trainees are very welcome. Training takes place on live WRPX kitchen wrapping installs in South Yorkshire, approximately 55 minutes from Nottingham city centre via the M1 northbound. From Nottingham NG1 the route is straightforward: the A52 or A610 west to the M1 at junction 26 or 28, then north on the M1 into South Yorkshire. It is a predominantly motorway run with no significant urban congestion outside Nottingham itself.",
      },
    },
    {
      "@type": "Question",
      name: "How far is the training from Nottingham?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our kitchen wrapping installs are primarily in Sheffield and South Yorkshire — approximately 55 minutes from Nottingham city centre via the M1 north. From Beeston NG9, the M1 junction is only minutes away via the A52 — journey time is similar or slightly shorter. From West Bridgford NG2, the A52 and A453 approach the M1 from the south of the city. From Mansfield NG18, the A617 or A38 to the M1 provides a slightly more direct northbound route — around 45 minutes. From Derby DE1, the M1 junction at East Midlands is approximately 50 minutes to South Yorkshire. Nottingham is one of the closest East Midlands cities to our training territory — many Nottingham trainees choose to commute daily or stay overnight in Sheffield for a few nights.",
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
      name: "Is kitchen wrapping a good business to launch from Nottingham or the East Midlands?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nottingham is an excellent base for a kitchen wrapping business. The city has a large and varied housing stock — Victorian and Edwardian terraces across inner-city areas such as Lenton NG7, Sherwood NG5, Mapperley NG3 and Sneinton NG2, large semi-detached and detached housing in West Bridgford NG2, Edwalton NG12, Arnold NG5 and Carlton NG4, and a growing apartment market in the city centre NG1 and the Lace Market NG1 quarter. The leasehold apartment market in Nottingham city centre — particularly around the Lace Market, Hockley and Sneinton Market — generates significant demand from owners who cannot replace fitted kitchens under their lease terms. Beyond the city, the wider Nottinghamshire and East Midlands market — Mansfield, Newark, Loughborough, Leicester, Derby — adds substantial additional residential demand. A kitchen wrapping business targeting Nottingham and the wider East Midlands from a well-built website can capture search traffic across one of the most densely populated and affordable housing markets in the UK.",
      },
    },
    {
      "@type": "Question",
      name: "What do I get at the end of the 5 days?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You leave with the wrap skill, branding help (name and logo direction), trade supplier introductions and account setup support, a done-for-you website with live domain, 12 months of local SEO updates targeting your towns and cities in Nottinghamshire and the East Midlands, an ongoing phone and WhatsApp support line, and a WRPX Certificate of Completion (if approved). The package is designed so you leave with a real business ready to take enquiries — not just a technique.",
      },
    },
    {
      "@type": "Question",
      name: "How do I apply for a place from Nottingham?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Message Connor on WhatsApp or call. Places open around live WRPX kitchen installs — so availability depends on the install schedule. If you are based in Nottingham or the East Midlands and want to start a kitchen wrapping business, get in touch now and we will let you know the next intake. We do not hold long waitlists — when a place is available and you are ready, we move quickly.",
      },
    },
  ],
};

const faqItems = faqSchema.mainEntity.map((item) => ({
  q: item.name,
  a: item.acceptedAnswer.text,
}));

export default function KitchenWrappingTrainingNottinghamPage() {
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
            <span className="text-foreground">Nottingham</span>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="border-b border-border bg-card py-16 md:py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <p className="text-sm font-medium uppercase tracking-wide text-accent">
            Kitchen Wrapping Training · Nottingham &amp; East Midlands
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Kitchen wrapping training — Nottingham
          </h1>
          <p className="mt-5 text-lg text-muted leading-relaxed">
            WRPX runs kitchen wrapping training on real live installs in South Yorkshire
            — approximately 55 minutes from Nottingham city centre via the M1 north.
            Five days on an actual kitchen job with Connor&apos;s team: prep, application,
            pricing and finishing under real conditions. Leave with the skill, a brand,
            a website, 12 months of SEO targeting Nottinghamshire and the East Midlands,
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

      {/* Travel from Nottingham */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Getting to training from Nottingham
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              Training takes place on live WRPX kitchen wrapping installs in Sheffield and
              South Yorkshire — our home territory. From Nottingham city centre, South
              Yorkshire is approximately 55 minutes north via the M1. The route is simple:
              from Nottingham NG1, the A52 or A610 leads west to the M1 at junction 26
              (Eastwood/Heanor) or junction 28 (Sutton-in-Ashfield), then north on the
              M1 into South Yorkshire — junction 33 for Sheffield and the surrounding
              area. Once on the M1 northbound, it is a clear motorway run with no
              significant urban congestion.
            </p>
            <p>
              From Beeston NG9, the A52 takes you directly to the M1 at junction 26 or
              25 — under 5 minutes from Beeston to the motorway. From West Bridgford NG2
              and Edwalton NG12 in the south of Nottingham, the A453 to the M1 southbound
              approach or the A60 to junction 28 are both efficient routes. From Mansfield
              NG18, the A617 provides a more direct approach — joining the M1 at junction
              29 and then heading north into South Yorkshire, a journey of around 40 to 45
              minutes.
            </p>
            <p>
              Many Nottingham trainees choose to stay overnight in Sheffield for a few
              nights of the 5-day programme rather than commuting daily. Sheffield has a
              strong range of budget hotels — Travelodge and Premier Inn in Sheffield S1
              are well-priced and well-placed for South Yorkshire install sites. The M1
              from Nottingham into South Yorkshire is one of the most straightforward
              training commutes from any East Midlands city: no toll, no complex interchange,
              predominantly dual carriageway the whole way.
            </p>
          </div>
        </div>
      </section>

      {/* Nottingham market opportunity */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Kitchen wrapping in Nottingham and the East Midlands — the market
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              Nottingham is one of the most active kitchen wrapping markets in the East
              Midlands. The city has a large and genuinely diverse housing stock —
              Victorian terraces and inter-war semis across Lenton NG7, Sherwood NG5,
              Mapperley NG3 and Forest Fields NG7, large semis and detached properties
              in West Bridgford NG2, Edwalton NG12, Arnold NG5 and Carlton NG4, and
              a growing apartment and new-build sector across the city centre NG1
              and the regenerating Waterside area.
            </p>
            <p>
              Nottingham city centre — particularly the Lace Market NG1, Hockley and
              the Sneinton Market quarter — has an active apartment market with a
              strong young professional demographic. In leasehold apartments, kitchen
              wrapping is often the only viable renovation option for owners who
              cannot replace fitted kitchens under the terms of their lease. The
              student accommodation market in Lenton NG7, Beeston NG9 and Dunkirk NG7
              — serving the University of Nottingham and Nottingham Trent — generates
              consistent demand from landlords upgrading buy-to-let kitchens on a
              cost-effective basis.
            </p>
            <p>
              The suburbs and satellite towns around Nottingham extend the market
              significantly: Ruddington NG11, Keyworth NG12, Radcliffe on Trent NG12,
              Bingham NG13, Hucknall NG15 and Eastwood NG16 each represent local
              kitchen wrapping demand within 10 to 20 minutes of Nottingham city
              centre. A kitchen wrapper targeting Nottingham with a well-built website
              can extend coverage naturally to Mansfield NG18, Newark NG24, Loughborough
              LE11 and Derby DE1 — collectively one of the highest-density housing
              markets in the Midlands.
            </p>
            <p>
              There is currently very limited competition in the kitchen wrapping search
              results across Nottingham and Nottinghamshire. A trained wrapper with a
              live website and local SEO targeting Nottingham city centre and the
              surrounding NG postcodes is entering a market with strong demand and
              minimal local specialist competition — an early-mover opportunity that
              diminishes as the trade becomes more established.
            </p>
          </div>
        </div>
      </section>

      {/* What is included */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-2xl font-semibold text-foreground md:text-3xl">
            What the {trainingProgram.priceDisplay} Nottingham training includes
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                5 days on a live kitchen install
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Real client kitchen in South Yorkshire — approximately 55 minutes from
                Nottingham. Real problems, real conditions, from day one — not a training
                mock-up.
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
                confidence — so you&apos;re not guessing every job in Nottingham
                or Mansfield.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Brand name and logo direction
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                A professional brand identity so you look like a real business from
                the first call a Nottingham or Derby homeowner makes.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Done-for-you website + live domain
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                A branded site ready to take enquiries — with your domain live so when
                someone in Nottingham or West Bridgford searches kitchen wrapping near
                them, you&apos;re there.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                12 months of local SEO updates
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                We target your towns and cities — Nottingham, West Bridgford, Arnold,
                Mansfield, Derby, wherever your market is — so enquiries start coming
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
            Nottingham kitchen wrapping training — common questions
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
          <TrainingRelatedLinks currentHref="/kitchen-wrapping-training-nottingham/" />
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
              Based in Nottingham — ready to start, or want to talk first?
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Places open around our South Yorkshire kitchen installs — approximately
              55 minutes from Nottingham via the M1. If you&apos;re serious about
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
