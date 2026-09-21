import type { Metadata } from "next";
import Link from "next/link";
import { trainingProgram } from "@/lib/training-program";
import { PricingCallout } from "@/components/training/PricingCallout";
import { TrainingRelatedLinks } from "@/components/training/TrainingRelatedLinks";
import { TrainingHubCta } from "@/components/training/TrainingHubCta";

export const metadata: Metadata = {
  title: "Kitchen Wrapping Training Derby | Learn to Wrap — WRPX East Midlands",
  description:
    "Kitchen wrapping training accessible from Derby and the East Midlands. WRPX runs 5-day live kitchen installs in South Yorkshire — approximately 45 minutes from Derby via the A38 and M1. Real job training, not a classroom: learn prep, application, pricing and finishing. Leave with branding, a website, 12 months SEO and ongoing support. £1,699 all-in.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/kitchen-wrapping-training-derby/",
  },
  openGraph: {
    title: "Kitchen Wrapping Training Derby | WRPX East Midlands",
    description:
      "Derby-accessible kitchen wrapping training on real live installs with WRPX. Full business setup included — branding, website, 12 months SEO and trade support. Approximately 45 minutes from Derby via the A38 and M1.",
    url: "https://www.wrpx.co.uk/kitchen-wrapping-training-derby/",
    type: "website",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Kitchen wrapping training Derby — WRPX live-job training programme",
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
    { "@type": "City", name: "Derby" },
    { "@type": "State", name: "Derbyshire" },
    { "@type": "State", name: "East Midlands" },
  ],
  description:
    "5-day kitchen wrapping training on a real live install with WRPX — accessible from Derby and the East Midlands. Includes prep, primers, sealants, application, measure and price coaching, branding help, website + live domain, 12 months local SEO and ongoing phone/WhatsApp support. £1,699 all-in.",
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
      name: "Derby",
      item: "https://www.wrpx.co.uk/kitchen-wrapping-training-derby/",
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is WRPX kitchen wrapping training available to people based in Derby?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — Derby trainees are very welcome. Training takes place on live WRPX kitchen wrapping installs in South Yorkshire, approximately 45 minutes from Derby city centre. The most direct route is the A38 north from Derby to the M1, then north on the M1 to South Yorkshire. From Derby DE1 and Darley Abbey DE22, the A38 north runs directly to the M1 at junction 28 (Alfreton/Somercotes), and from there it is a straightforward drive north on the M1 to junction 36 (Barnsley) or junction 33 (Sheffield). Derby is in the East Midlands, putting South Yorkshire comfortably within daily commuting distance for the five training days.",
      },
    },
    {
      "@type": "Question",
      name: "How far is the WRPX training base from Derby?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Approximately 45 minutes from Derby city centre DE1 via the A38 north to the M1, then north on the M1 to South Yorkshire. From Spondon DE21, Chaddesden DE21 or Alvaston DE24, the A52 east or the A38 north brings you to the M1 at junction 25 (Nottingham south) or junction 28 (Alfreton) depending on the route. From Long Eaton NG10 and Ilkeston DE7, the M1 at junction 25 is very close — approximately 35 to 40 minutes to South Yorkshire from those areas. From Swadlincote DE11 or Burton upon Trent DE14, add around 15 to 20 minutes to reach the M1 via the A38 or A511. Derby is genuinely accessible for daily commuting to South Yorkshire training — most trainees from the DE and NG10 postcode areas make the journey in under an hour.",
      },
    },
    {
      "@type": "Question",
      name: "Is this classroom training or hands-on training?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Hands-on from day one. You join Connor and the WRPX team on a real kitchen install in a real client kitchen — typically in Sheffield or South Yorkshire. There is no classroom, no training bay, no mock kitchens. Five days on a live job is what prepares you for the actual work. The problems you encounter on a live install — adhesion issues on aged laminate, primer on MDF edges, fitting around existing appliances — are the problems you will encounter on your first solo job in Derby. Classroom training cannot replicate that experience.",
      },
    },
    {
      "@type": "Question",
      name: "Is kitchen wrapping a good business to launch from Derby or Derbyshire?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Derby is an excellent base for a kitchen wrapping business. Derby city has a population of over 260,000, and the wider Derby urban area reaches well above 350,000 including Belper DE56, Heanor DE75, Ilkeston DE7, Long Eaton NG10, Ripley DE5 and Alfreton DE55. The city has a diverse and extensive housing stock: Victorian and Edwardian terraces throughout Normanton DE23, Peartree DE23, Pear Tree DE24, Spondon DE21, Alvaston DE24, Chaddesden DE21 and New Normanton — housing that is reaching the age where wrapping is often the most cost-effective kitchen improvement. Inter-war semi-detached and post-war estates extend through Sunnyhill DE23, Shelton Lock DE24, Boulton DE24, Stenson Fields DE24, Mickleover DE3 and Littleover DE23, adding substantial residential volume. Rolls-Royce, Toyota, Alstom, Bombardier and a large Toyota manufacturing base in Derby mean a significant proportion of dual-income households — a demographic that consistently over-indexes on kitchen improvement spend. Leasehold apartment conversions in the Pride Park DE24 and Derby city centre DE1 regeneration zones add a further segment where kitchen wrapping is often the only practical option. Local specialist competition in kitchen wrapping search results across Derby and DE postcodes is limited — a trained wrapper with a live website targeting DE and NG10 postcodes is entering a large market early.",
      },
    },
    {
      "@type": "Question",
      name: "What do I get at the end of the 5 days?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You leave with the wrap skill, branding help (name and logo direction), trade supplier introductions and account setup support, a done-for-you website with live domain, 12 months of local SEO updates targeting your towns and cities in Derby and Derbyshire, an ongoing phone and WhatsApp support line, and a WRPX Certificate of Completion (if approved). The package is built so you leave with a real business ready to take enquiries — not just a technique.",
      },
    },
    {
      "@type": "Question",
      name: "How do I apply for a place from Derby?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Message Connor on WhatsApp or call. Places open around live WRPX kitchen installs — so availability depends on the install schedule. If you are based in Derby or Derbyshire and want to start a kitchen wrapping business, get in touch now and we will let you know the next intake. We do not hold long waitlists — when a place is available and you are ready, we move quickly.",
      },
    },
  ],
};

const faqItems = faqSchema.mainEntity.map((item) => ({
  q: item.name,
  a: item.acceptedAnswer.text,
}));

export default function KitchenWrappingTrainingDerbyPage() {
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
            <span className="text-foreground">Derby</span>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="border-b border-border bg-card py-16 md:py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <p className="text-sm font-medium uppercase tracking-wide text-accent">
            Kitchen Wrapping Training · Derby &amp; East Midlands
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Kitchen wrapping training — Derby
          </h1>
          <p className="mt-5 text-lg text-muted leading-relaxed">
            WRPX runs kitchen wrapping training on real live installs in South Yorkshire
            — approximately 45 minutes from Derby via the A38 and M1.
            Five days on an actual kitchen job with Connor&apos;s team: prep, application,
            pricing and finishing under real conditions. Leave with the skill, a brand,
            a website, 12 months of SEO targeting Derby and Derbyshire,
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

      {/* Travel from Derby */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Getting to training from Derby
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              Training takes place on live WRPX kitchen wrapping installs in Sheffield and
              South Yorkshire. From Derby city centre DE1, South Yorkshire is approximately
              45 minutes north via the A38 and M1. The route is straightforward: from
              Derby, take the A38 north towards Alfreton — the A38 runs continuously north
              through the Derbyshire coalfield towns before connecting to the M1 at
              junction 28 (Alfreton/Somercotes). From there the M1 runs directly north
              into South Yorkshire, with junction 36 (Barnsley) approximately 25 minutes
              from the junction 28 entry point and junction 33 (Sheffield) a few minutes
              beyond that.
            </p>
            <p>
              From Spondon DE21, Chaddesden DE21 and Alvaston DE24 — the eastern Derby
              residential suburbs — the A52 east connects to the M1 at junction 25
              (Nottingham south), from where the M1 north to South Yorkshire is direct.
              This route adds a few minutes to the total but avoids Derby city centre
              entirely. From Long Eaton NG10 and Sandiacre NG10, junction 25 on the M1
              is very close — these trainees are often only 35 to 40 minutes from South
              Yorkshire, making daily commuting particularly easy.
            </p>
            <p>
              From Belper DE56, Ripley DE5 and Heanor DE75 — north Derbyshire — the
              A38 or A610 south to junction 26 on the M1 (Nottingham west) or continuing
              north to junction 28 is the typical approach. From Swadlincote DE11 and
              Burton upon Trent DE14, the A38 north through Derby city and then continuing
              north on the A38 or M1 is the standard route — approximately 60 to 70
              minutes total, still within a comfortable daily commute for five days.
            </p>
            <p>
              For Derby trainees who prefer to stay overnight, Sheffield city centre S1
              has strong budget accommodation options including Travelodge and Premier
              Inn within a short walk of the city centre — both typically under £60 per
              night midweek.
            </p>
          </div>
        </div>
      </section>

      {/* Derby market opportunity */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Kitchen wrapping in Derby and Derbyshire — the market
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              Derby city has a population of over 260,000, and the wider Derby urban area
              extends to well above 350,000 when Belper DE56, Heanor DE75, Ilkeston DE7,
              Long Eaton NG10 and Ripley DE5 are included — all realistic service areas
              for a kitchen wrapper based in Derby. The city&apos;s housing stock spans
              almost every period of English residential construction.
            </p>
            <p>
              Victorian and Edwardian terraced housing is extensive through Normanton DE23,
              Peartree DE23, Pear Tree DE24, Spondon DE21, Alvaston DE24, Chaddesden DE21
              and New Normanton. This cohort — houses built roughly between 1870 and 1920
              — now carries fitted kitchens that are typically at least one renovation
              cycle old. The cost of a full kitchen replacement in these properties is
              significant relative to homeowner income, making wrapping the most attractive
              improvement option in many cases.
            </p>
            <p>
              Inter-war and post-war semi-detached housing is widespread across Sunnyhill
              DE23, Shelton Lock DE24, Boulton DE24, Stenson Fields DE24, Mickleover DE3
              and Littleover DE23. This segment — often with original late-1970s or
              1980s fitted kitchens — is one of the highest-volume categories for
              kitchen wrapping enquiries: the kitchen is sound but dated, replacement
              is expensive, and wrapping delivers a result homeowners are consistently
              pleased with.
            </p>
            <p>
              Derby&apos;s industrial and manufacturing economy — anchored by Rolls-Royce
              aerospace, Toyota, Alstom/Bombardier rail, and a large cluster of precision
              engineering businesses — means a higher-than-average proportion of skilled
              manual and technical workers with dual incomes and house-proud spending
              habits. This demographic consistently over-indexes on kitchen improvement
              spend. The Pride Park DE24 development zone and Derby city centre DE1
              regeneration have added a growing leasehold apartment segment where
              wrapping is often the only practical option for kitchen improvement under
              lease restrictions.
            </p>
            <p>
              Specialist kitchen wrapping search results across Derby and DE postcodes
              are currently thin. A kitchen wrapper with a live website targeting Derby,
              Normanton, Mickleover, Spondon, Alvaston and nearby towns is entering one
              of the larger East Midlands residential markets at a very early stage of
              competition.
            </p>
          </div>
        </div>
      </section>

      {/* What is included */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-2xl font-semibold text-foreground md:text-3xl">
            What the {trainingProgram.priceDisplay} Derby training includes
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                5 days on a live kitchen install
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Real client kitchen in South Yorkshire — approximately 45 minutes from
                Derby via the A38 and M1. Real problems, real conditions, from day one —
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
                confidence — so you&apos;re not guessing every job in Derby
                or Normanton.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Brand name and logo direction
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                A professional brand identity so you look like a real business from
                the first call a Derby or Mickleover homeowner makes.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Done-for-you website + live domain
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                A branded site ready to take enquiries — with your domain live so when
                someone in Derby or Long Eaton searches kitchen wrapping near
                them, you&apos;re there.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                12 months of local SEO updates
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                We target your towns and cities — Derby, Normanton, Mickleover, Spondon,
                Long Eaton, Ilkeston, wherever your market is — so enquiries start
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
            Derby kitchen wrapping training — common questions
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
          <TrainingRelatedLinks currentHref="/kitchen-wrapping-training-derby/" />
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
              Based in Derby — ready to start, or want to talk first?
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Places open around our South Yorkshire kitchen installs — approximately
              45 minutes from Derby via the A38 and M1. If you&apos;re serious about
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
