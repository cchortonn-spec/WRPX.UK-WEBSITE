import type { Metadata } from "next";
import Link from "next/link";
import { trainingProgram } from "@/lib/training-program";
import { PricingCallout } from "@/components/training/PricingCallout";
import { TrainingRelatedLinks } from "@/components/training/TrainingRelatedLinks";
import { TrainingHubCta } from "@/components/training/TrainingHubCta";

export const metadata: Metadata = {
  title: "Kitchen Wrapping Training Birmingham | Learn to Wrap — WRPX West Midlands",
  description:
    "Kitchen wrapping training accessible from Birmingham and the West Midlands. WRPX runs 5-day live kitchen installs in South Yorkshire — approximately 1 hour 15 minutes from Birmingham city centre via the M1. Real job training, not a classroom: learn prep, application, pricing and finishing. Leave with branding, a website, 12 months SEO and ongoing support. £1,699 all-in.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/kitchen-wrapping-training-birmingham/",
  },
  openGraph: {
    title: "Kitchen Wrapping Training Birmingham | WRPX West Midlands",
    description:
      "Birmingham-accessible kitchen wrapping training on real live installs with WRPX. Full business setup included — branding, website, 12 months SEO and trade support. Approximately 1 hour 15 minutes from Birmingham.",
    url: "https://www.wrpx.co.uk/kitchen-wrapping-training-birmingham/",
    type: "website",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Kitchen wrapping training Birmingham — WRPX live-job training programme",
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
    { "@type": "City", name: "Birmingham" },
    { "@type": "State", name: "West Midlands" },
    { "@type": "State", name: "West Midlands England" },
  ],
  description:
    "5-day kitchen wrapping training on a real live install with WRPX — accessible from Birmingham and the West Midlands. Includes prep, primers, sealants, application, measure and price coaching, branding help, website + live domain, 12 months local SEO and ongoing phone/WhatsApp support. £1,699 all-in.",
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
      name: "Birmingham",
      item: "https://www.wrpx.co.uk/kitchen-wrapping-training-birmingham/",
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is WRPX kitchen wrapping training available to people based in Birmingham?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — Birmingham trainees are very welcome. Training takes place on live WRPX kitchen wrapping installs in South Yorkshire, approximately 1 hour 15 minutes from Birmingham city centre via the M6 north to the M1 north. From Birmingham B1 to Sheffield the route is predominantly motorway — the M6 north from the Gravelly Hill interchange to the M1 at Catthorpe, then the M1 north into South Yorkshire. It is a clean, straightforward motorway run with no significant urban crawl once clear of the Birmingham ring road.",
      },
    },
    {
      "@type": "Question",
      name: "How far is the training from Birmingham?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our kitchen wrapping installs are primarily in Sheffield and South Yorkshire — approximately 1 hour 15 minutes from Birmingham city centre via the M6 north and M1. From Solihull B91, the M42 north to the M1 is a slightly different but similarly fast route — around 1 hour 15 to 1 hour 20 minutes. From Wolverhampton WV1, the M6 north is the direct route — approximately 1 hour 20 minutes. From Coventry CV1, the M6 junction connects quickly to the M1 northbound — approximately 1 hour 10 minutes. From the Staffordshire edge of the West Midlands conurbation — Lichfield WS13, Cannock WS11, Tamworth B79 — the M42 north to the M1 is the most efficient route, shaving time off the Birmingham city-centre figure. Many Birmingham trainees choose to stay overnight in Sheffield for the 5 days — straightforward and cost-effective with budget hotels in Sheffield city centre.",
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
      name: "Is kitchen wrapping a good business to launch from Birmingham or the West Midlands?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Birmingham is one of the UK's largest kitchen wrapping markets outside London. The city has an enormous and varied housing stock — from Victorian terraces in Moseley B13, Kings Heath B14 and Handsworth B20 to purpose-built apartment blocks in the city centre B1–B5 and the large semi-detached market across Solihull B91, Sutton Coldfield B72, Edgbaston B15 and Hall Green B28. The apartment and leasehold market in Birmingham city centre — particularly around the Jewellery Quarter B18, Digbeth B12 and Brindleyplace B1 — generates significant kitchen wrapping demand from owners who cannot replace fitted kitchens under their lease. The outer West Midlands conurbation — Wolverhampton, Coventry, Dudley, Walsall, Sandwell — adds substantial additional residential demand. A kitchen wrapping business targeting Birmingham, Solihull, the Black Country and the wider West Midlands from a well-built website can capture search traffic across one of the densest residential markets in the country.",
      },
    },
    {
      "@type": "Question",
      name: "What do I get at the end of the 5 days?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You leave with the wrap skill, branding help (name and logo direction), trade supplier introductions and account setup support, a done-for-you website with live domain, 12 months of local SEO updates targeting your towns and cities in the West Midlands and beyond, an ongoing phone and WhatsApp support line, and a WRPX Certificate of Completion (if approved). The package is designed so you leave with a real business ready to take enquiries — not just a technique.",
      },
    },
    {
      "@type": "Question",
      name: "How do I apply for a place from Birmingham?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Message Connor on WhatsApp or call. Places open around live WRPX kitchen installs — so availability depends on the install schedule. If you are based in Birmingham or the West Midlands and want to start a kitchen wrapping business, get in touch now and we will let you know the next intake. We do not hold long waitlists — when a place is available and you are ready, we move quickly.",
      },
    },
  ],
};

const faqItems = faqSchema.mainEntity.map((item) => ({
  q: item.name,
  a: item.acceptedAnswer.text,
}));

export default function KitchenWrappingTrainingBirminghamPage() {
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
            <span className="text-foreground">Birmingham</span>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="border-b border-border bg-card py-16 md:py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <p className="text-sm font-medium uppercase tracking-wide text-accent">
            Kitchen Wrapping Training · Birmingham &amp; West Midlands
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Kitchen wrapping training — Birmingham
          </h1>
          <p className="mt-5 text-lg text-muted leading-relaxed">
            WRPX runs kitchen wrapping training on real live installs in South Yorkshire
            — approximately 1 hour 15 minutes from Birmingham city centre via the M6
            and M1. Five days on an actual kitchen job with Connor&apos;s team: prep,
            application, pricing and finishing under real conditions. Leave with the
            skill, a brand, a website, 12 months of SEO targeting the West Midlands
            and beyond, and a support line. {trainingProgram.priceDisplay} all-in.
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

      {/* Travel from Birmingham */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Getting to training from Birmingham
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              Training takes place on live WRPX kitchen wrapping installs in Sheffield and
              South Yorkshire — our home territory. From Birmingham city centre, South
              Yorkshire is approximately 1 hour 15 minutes north via the M6 and M1. The
              route is predominantly motorway: from the Birmingham ring road, the M6 north
              takes you out of the West Midlands conurbation to the M1 interchange at
              Catthorpe, then the M1 north into South Yorkshire.
            </p>
            <p>
              From Solihull B91, the M42 north offers an alternative to the city-centre
              M6 approach — joining the M1 at Catthorpe junction with a slightly cleaner
              exit from the conurbation. Journey time is similar at around 1 hour 15 to
              1 hour 20 minutes. From Wolverhampton WV1, the M6 north from junction 10
              joins the same M1 northbound corridor — approximately 1 hour 20 minutes.
              From Coventry CV1, the M6 junction is close and the M1 north is quick —
              around 1 hour 10 minutes, one of the shorter commutes from a West Midlands
              city.
            </p>
            <p>
              Many trainees from Birmingham choose to stay overnight in Sheffield for the
              5 days rather than commuting daily. Sheffield city centre has a strong range
              of budget hotels and serviced apartments — Travelodge and Premier Inn
              locations in Sheffield S1 are well-priced and a short drive from South
              Yorkshire install sites.
            </p>
            <p>
              If you prefer to commute, the M6 north to M1 is a reliable motorway run.
              Training follows a normal trade day on the install — typically 8am to 5pm
              — so an early start from Birmingham works for those who prefer to drive
              each day over staying over.
            </p>
          </div>
        </div>
      </section>

      {/* Birmingham market opportunity */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Kitchen wrapping in Birmingham and the West Midlands — the market
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              Birmingham and the wider West Midlands represent one of the largest
              regional markets in the UK for kitchen wrapping. The city has one of the
              most diverse housing stocks in England — Victorian and Edwardian terraces
              across inner-city areas, large semis and detached houses in Solihull,
              Sutton Coldfield, Harborne and Edgbaston, and a rapidly growing apartment
              and new-build sector in the city centre and Jewellery Quarter.
            </p>
            <p>
              Birmingham city centre — B1, B2, B3 and the growing B12 Digbeth
              regeneration zone — has an expanding apartment market where kitchen
              wrapping is often the only viable kitchen renovation option for leasehold
              owners. The Jewellery Quarter B18 in particular has seen significant
              residential conversion with a strong young professional demographic that
              actively searches for kitchen upgrade options without full replacement.
            </p>
            <p>
              The inner and outer Birmingham suburbs — Moseley B13, Kings Heath B14,
              Harborne B17, Edgbaston B15, Hall Green B28, Handsworth B20, Perry Barr
              B42, Great Barr B43, Erdington B23 — each represent substantial local
              kitchen wrapping markets with high housing density and growing awareness
              of wrapping as an affordable alternative to full kitchen replacement.
            </p>
            <p>
              Beyond the city boundary, the wider West Midlands conurbation — Solihull,
              Wolverhampton, Coventry, Dudley, Walsall, Sandwell — and the Staffordshire
              and Warwickshire commuter belt add an enormous additional market. A kitchen
              wrapper with a website targeting multiple West Midlands and wider Midlands
              towns is operating in one of the highest-density residential markets in the
              country outside London.
            </p>
          </div>
        </div>
      </section>

      {/* What is included */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-2xl font-semibold text-foreground md:text-3xl">
            What the {trainingProgram.priceDisplay} Birmingham training includes
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                5 days on a live kitchen install
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Real client kitchen in South Yorkshire — approximately 1 hour 15 minutes
                from Birmingham. Real problems, real conditions, from day one — not a
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
                confidence — so you&apos;re not guessing every job in Birmingham
                or Solihull.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Brand name and logo direction
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                A professional brand identity so you look like a real business from the
                first call a Birmingham or Wolverhampton homeowner makes.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Done-for-you website + live domain
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                A branded site ready to take enquiries — with your domain live so when
                someone in Birmingham or Coventry searches kitchen wrapping near them,
                you&apos;re there.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                12 months of local SEO updates
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                We target your towns and cities — Birmingham, Solihull, Wolverhampton,
                Coventry, Dudley, wherever your market is — so enquiries start coming
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
            Birmingham kitchen wrapping training — common questions
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
          <TrainingRelatedLinks currentHref="/kitchen-wrapping-training-birmingham/" />
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
              Based in Birmingham — ready to start, or want to talk first?
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Places open around our South Yorkshire kitchen installs — approximately
              1 hour 15 minutes from Birmingham. If you&apos;re serious about training,
              message Connor on WhatsApp or call — we&apos;ll tell you when the next
              intake is and what to expect.
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
