import type { Metadata } from "next";
import Link from "next/link";
import { trainingProgram } from "@/lib/training-program";
import { PricingCallout } from "@/components/training/PricingCallout";
import { TrainingRelatedLinks } from "@/components/training/TrainingRelatedLinks";
import { TrainingHubCta } from "@/components/training/TrainingHubCta";

export const metadata: Metadata = {
  title: "Kitchen Wrapping Training Leeds | Learn to Wrap — WRPX West Yorkshire",
  description:
    "Kitchen wrapping training accessible from Leeds and West Yorkshire. WRPX runs 5-day live kitchen installs in South Yorkshire — 30 minutes from Leeds city centre. Learn wrap application, prep and pricing, then leave with branding, a website, 12 months SEO and ongoing support. £1,699 all-in.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/kitchen-wrapping-training-leeds/",
  },
  openGraph: {
    title: "Kitchen Wrapping Training Leeds | WRPX West Yorkshire",
    description:
      "Leeds-accessible kitchen wrapping training on real live installs with WRPX. Full business setup included — branding, website, 12 months SEO and trade support. 30 minutes from Leeds.",
    url: "https://www.wrpx.co.uk/kitchen-wrapping-training-leeds/",
    type: "website",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Kitchen wrapping training Leeds — WRPX live-job training programme",
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
    { "@type": "City", name: "Leeds" },
    { "@type": "State", name: "West Yorkshire" },
    { "@type": "State", name: "Yorkshire" },
  ],
  description:
    "5-day kitchen wrapping training on a real live install with WRPX — accessible from Leeds and West Yorkshire. Includes prep, primers, sealants, application, measure and price coaching, branding help, website + live domain, 12 months local SEO and ongoing phone/WhatsApp support. £1,699 all-in.",
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
      name: "Leeds",
      item: "https://www.wrpx.co.uk/kitchen-wrapping-training-leeds/",
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is WRPX kitchen wrapping training available to people based in Leeds?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — Leeds trainees are very welcome and we regularly work with people from West Yorkshire. Training takes place on live WRPX kitchen wrapping installs in South Yorkshire, approximately 30 minutes from Leeds city centre via the M621 and M1. From Leeds, the commute to South Yorkshire is straightforward on the motorway — a clean run on the M621 south, picking up the M1 towards Sheffield and the South Yorkshire area. Many trainees from Leeds choose to stay overnight locally for the 5-day programme rather than commute daily.",
      },
    },
    {
      "@type": "Question",
      name: "How far is the training from Leeds?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our kitchen wrapping installs are primarily in Sheffield and the South Yorkshire area — approximately 30 minutes from Leeds city centre via the M621 south to the M1. From Bradford LS it is a similar distance heading south on the M62 and M1. From Harrogate HG1 it is approximately 45 minutes south via the A61 or A658 connecting to the M621. From York YO1 it is approximately 1 hour via the A64 west and then the M1. Budget accommodation in Sheffield is easy to find for trainees from Leeds who prefer to stay for the week rather than commute.",
      },
    },
    {
      "@type": "Question",
      name: "Is this classroom training or hands-on training?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Hands-on from day one. You join Connor and the WRPX team on a real kitchen install in a real client's kitchen — typically in Sheffield or the South Yorkshire area. There is no classroom, no training bay, no mannequin kitchens. Five days on a live job is what trains you for the actual work — not for a certificate on a controlled surface.",
      },
    },
    {
      "@type": "Question",
      name: "Is kitchen wrapping a good business to launch from Leeds or West Yorkshire?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Leeds and West Yorkshire represent one of the strongest markets in the UK for kitchen wrapping. The region has a large and diverse housing stock — a mix of owner-occupier terraces, semi-detached and detached properties across LS, BD, HD and WF postcodes — with strong demand for affordable kitchen renovation from homeowners who want a new look without the cost of full replacement. Leeds city centre itself has a growing apartment and serviced accommodation market, and the surrounding areas including Bradford, Wakefield, Huddersfield and Harrogate all represent distinct local markets for a well-positioned kitchen wrapper. If your website targets kitchen wrapping in Leeds, Bradford or West Yorkshire, you are targeting some of the highest-volume kitchen wrapping search areas outside London.",
      },
    },
    {
      "@type": "Question",
      name: "What do I get at the end of the 5 days?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You leave with the wrap skill, branding help (name and logo direction), trade supplier introductions and account setup support, a done-for-you website with live domain, 12 months of local SEO updates targeting your towns and cities in West Yorkshire and beyond, an ongoing phone and WhatsApp support line, and a WRPX Certificate of Completion (if approved). The package is designed so you leave with a real business ready to take enquiries — not just a technique.",
      },
    },
    {
      "@type": "Question",
      name: "How do I apply for a place from Leeds?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Message Connor on WhatsApp or call. Places open around live WRPX kitchen installs — so availability depends on the install schedule. If you are based in Leeds or West Yorkshire and want to start a kitchen wrapping business, get in touch now and we will let you know the next intake. We do not hold long waitlists — when a place is available and you are ready, we move quickly.",
      },
    },
  ],
};

const faqItems = [
  {
    q: "Is WRPX kitchen wrapping training available to people based in Leeds?",
    a: "Yes — Leeds trainees are very welcome and we regularly work with people from West Yorkshire. Training takes place on live WRPX kitchen wrapping installs in South Yorkshire, approximately 30 minutes from Leeds city centre via the M621 and M1. From Leeds, the commute to South Yorkshire is straightforward on the motorway — a clean run on the M621 south, picking up the M1 towards Sheffield and the South Yorkshire area. Many trainees from Leeds choose to stay overnight locally for the 5-day programme rather than commute daily.",
  },
  {
    q: "How far is the training from Leeds?",
    a: "Our kitchen wrapping installs are primarily in Sheffield and the South Yorkshire area — approximately 30 minutes from Leeds city centre via the M621 south to the M1. From Bradford LS it is a similar distance heading south on the M62 and M1. From Harrogate HG1 it is approximately 45 minutes south via the A61 or A658 connecting to the M621. From York YO1 it is approximately 1 hour via the A64 west and then the M1. Budget accommodation in Sheffield is easy to find for trainees from Leeds who prefer to stay for the week rather than commute.",
  },
  {
    q: "Is this classroom training or hands-on training?",
    a: "Hands-on from day one. You join Connor and the WRPX team on a real kitchen install in a real client's kitchen — typically in Sheffield or the South Yorkshire area. There is no classroom, no training bay, no mannequin kitchens. Five days on a live job is what trains you for the actual work — not for a certificate on a controlled surface.",
  },
  {
    q: "Is kitchen wrapping a good business to launch from Leeds or West Yorkshire?",
    a: "Leeds and West Yorkshire represent one of the strongest markets in the UK for kitchen wrapping. The region has a large and diverse housing stock — a mix of owner-occupier terraces, semi-detached and detached properties across LS, BD, HD and WF postcodes — with strong demand for affordable kitchen renovation from homeowners who want a new look without the cost of full replacement. Leeds city centre itself has a growing apartment and serviced accommodation market, and the surrounding areas including Bradford, Wakefield, Huddersfield and Harrogate all represent distinct local markets for a well-positioned kitchen wrapper. If your website targets kitchen wrapping in Leeds, Bradford or West Yorkshire, you are targeting some of the highest-volume kitchen wrapping search areas outside London.",
  },
  {
    q: "What do I get at the end of the 5 days?",
    a: "You leave with the wrap skill, branding help (name and logo direction), trade supplier introductions and account setup support, a done-for-you website with live domain, 12 months of local SEO updates targeting your towns and cities in West Yorkshire and beyond, an ongoing phone and WhatsApp support line, and a WRPX Certificate of Completion (if approved). The package is designed so you leave with a real business ready to take enquiries — not just a technique.",
  },
  {
    q: "How do I apply for a place from Leeds?",
    a: "Message Connor on WhatsApp or call. Places open around live WRPX kitchen installs — so availability depends on the install schedule. If you are based in Leeds or West Yorkshire and want to start a kitchen wrapping business, get in touch now and we will let you know the next intake. We do not hold long waitlists — when a place is available and you are ready, we move quickly.",
  },
];

export default function KitchenWrappingTrainingLeedsPage() {
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
            <span className="text-foreground">Leeds</span>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="border-b border-border bg-card py-16 md:py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <p className="text-sm font-medium uppercase tracking-wide text-accent">
            Kitchen Wrapping Training · Leeds &amp; West Yorkshire
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Kitchen wrapping training — Leeds
          </h1>
          <p className="mt-5 text-lg text-muted leading-relaxed">
            WRPX runs kitchen wrapping training on real live installs in South Yorkshire
            — approximately 30 minutes from Leeds city centre via the M621 and M1. Five
            days on an actual kitchen job with Connor&apos;s team: prep, application,
            pricing and finishing under real conditions. Leave with the skill, a brand,
            a website, 12 months of SEO targeting West Yorkshire and beyond, and a
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

      {/* Travel from Leeds */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Getting to training from Leeds
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              Training takes place on live WRPX kitchen wrapping installs in Sheffield and
              South Yorkshire — our home territory. From Leeds city centre, South Yorkshire
              is approximately 30 minutes south via the M621 and M1. It is one of the most
              direct motorway connections between any major Yorkshire city and our base.
            </p>
            <p>
              From Bradford, the journey is similar — M62 east to the M621 junction, then
              south on the M1. From Wakefield WF1 it is even shorter — under 20 minutes
              south on the M1. From Harrogate HG1, the A61 and A658 connect to the M621
              for an approximately 45-minute drive. From York YO1, the A64 west connects
              to the M1 at approximately 1 hour.
            </p>
            <p>
              Many trainees from Leeds and West Yorkshire stay overnight in Sheffield for
              the 5 days rather than commuting daily. Sheffield has good budget hotel and
              B&amp;B options in the city centre — easy to find and straightforward to book
              for a working week. Staying over means you start fresh on site each morning
              rather than adding a motorway commute to a long install day.
            </p>
            <p>
              If you prefer to commute, the M621 to M1 route from Leeds is reliable outside
              rush hours. We work to a normal trade day on the install — typically 8am to
              5pm — so early start from Leeds is very manageable.
            </p>
          </div>
        </div>
      </section>

      {/* West Yorkshire market opportunity */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Kitchen wrapping in Leeds and West Yorkshire — the market
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              Leeds and West Yorkshire represent one of the strongest regional markets in
              the UK for kitchen wrapping. The region has a large, dense housing stock across
              LS, BD, HD and WF postcodes — a mix of owner-occupier terraces, semis and
              detached properties where kitchen wrapping sits firmly in the &ldquo;affordable
              renovation&rdquo; spend bracket that is growing year on year.
            </p>
            <p>
              Leeds city centre and the inner-ring apartment market — particularly the
              riverside and waterfront developments in LS1, LS9 and LS10 — represent a
              separate but significant demand source for kitchen wrapping. Flat owners with
              integrated kitchens rarely want full replacement: wrapping is often the only
              renovation option that makes sense financially and practically in a leasehold
              apartment.
            </p>
            <p>
              The wider West Yorkshire area — Bradford, Wakefield, Huddersfield, Halifax
              and Harrogate — each represent distinct local markets with their own kitchen
              wrapping demand. A well-positioned Leeds or Bradford kitchen wrapper with a
              website targeting these areas is covering some of the highest-volume kitchen
              wrapping search territory outside London.
            </p>
            <p>
              Skilled kitchen wrappers who can finish a job cleanly and hold a small book
              of returning clients are genuinely in short supply across West Yorkshire.
              The combination of high demand and limited local supply is exactly the
              environment a new kitchen wrapping business with proper SEO can grow into
              quickly.
            </p>
          </div>
        </div>
      </section>

      {/* What is included */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-2xl font-semibold text-foreground md:text-3xl">
            What the {trainingProgram.priceDisplay} Leeds training includes
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                5 days on a live kitchen install
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Real client kitchen in South Yorkshire — 30 minutes from Leeds. Real
                problems, real conditions, from day one — not a training mock-up.
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
                confidence — so you&apos;re not guessing every job in Leeds or Bradford.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Brand name and logo direction
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                A professional brand identity so you look like a real business from the
                first call a Leeds homeowner makes.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Done-for-you website + live domain
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                A branded site ready to take enquiries — with your domain live so when
                someone in Leeds or Bradford searches kitchen wrapping near them, you&apos;re
                there.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                12 months of local SEO updates
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                We target your towns and cities — Leeds, Bradford, Wakefield, Harrogate,
                wherever your market is — so enquiries can start coming while you get
                sharp on the tools.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Supplier introductions and account help
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                We introduce you to the suppliers we use and help you open a trade account
                — so you buy like a professional from day one.
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
            Leeds kitchen wrapping training — common questions
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
          <TrainingRelatedLinks currentHref="/kitchen-wrapping-training-leeds/" />
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
              Based in Leeds — ready to start, or want to talk first?
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Places open around our South Yorkshire kitchen installs — 30 minutes from
              Leeds. If you&apos;re serious about training, message Connor on WhatsApp or
              call — we&apos;ll tell you when the next intake is and what to expect.
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
