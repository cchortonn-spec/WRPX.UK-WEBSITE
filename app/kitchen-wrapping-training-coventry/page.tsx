import type { Metadata } from "next";
import Link from "next/link";
import { trainingProgram } from "@/lib/training-program";
import { PricingCallout } from "@/components/training/PricingCallout";
import { TrainingRelatedLinks } from "@/components/training/TrainingRelatedLinks";
import { TrainingHubCta } from "@/components/training/TrainingHubCta";

export const metadata: Metadata = {
  title: "Kitchen Wrapping Training Coventry | Learn to Wrap — WRPX West Midlands",
  description:
    "Kitchen wrapping training accessible from Coventry and the West Midlands. WRPX runs 5-day live kitchen installs in South Yorkshire — approximately 90 minutes from Coventry via the M6 and M1. Real job training, not a classroom: learn prep, application, pricing and finishing. Leave with branding, a website, 12 months SEO and ongoing support. £1,699 all-in.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/kitchen-wrapping-training-coventry/",
  },
  openGraph: {
    title: "Kitchen Wrapping Training Coventry | WRPX West Midlands",
    description:
      "Coventry-accessible kitchen wrapping training on real live installs with WRPX. Full business setup included — branding, website, 12 months SEO and trade support. Approximately 90 minutes from Coventry via the M6 and M1.",
    url: "https://www.wrpx.co.uk/kitchen-wrapping-training-coventry/",
    type: "website",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Kitchen wrapping training Coventry — WRPX live-job training programme",
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
    { "@type": "City", name: "Coventry" },
    { "@type": "State", name: "West Midlands" },
    { "@type": "State", name: "Warwickshire" },
  ],
  description:
    "5-day kitchen wrapping training on a real live install with WRPX — accessible from Coventry and the West Midlands. Includes prep, primers, sealants, application, measure and price coaching, branding help, website + live domain, 12 months local SEO and ongoing phone/WhatsApp support. £1,699 all-in.",
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
      name: "Coventry",
      item: "https://www.wrpx.co.uk/kitchen-wrapping-training-coventry/",
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is WRPX kitchen wrapping training available to people based in Coventry?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — Coventry trainees are very welcome. Training takes place on live WRPX kitchen wrapping installs in South Yorkshire, approximately 90 minutes from Coventry city centre via the M6 north to the M1 north. From Coventry CV1, the most direct route is north on the A45 or A46 to the M6 at junction 2 (Coventry East) or junction 3 (Longford), then north on the M6 to junction 21A where it meets the M1 northbound into South Yorkshire. It is predominantly a motorway journey with no complex junctions.",
      },
    },
    {
      "@type": "Question",
      name: "How far is the training from Coventry?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our kitchen wrapping installs are primarily in Sheffield and South Yorkshire — approximately 85 to 95 minutes from Coventry city centre via the M6 and M1 north. From Coventry CV1, the A45 east connects directly to junction 2 of the M6 in approximately 10 minutes, then the M6 north to junction 21A where it joins the M1 northbound — a clear motorway run into South Yorkshire from there. From Nuneaton CV11, the A444 north leads quickly to the M69 and M1 at junction 21, which is marginally quicker. From Leamington Spa CV32 and Warwick CV34, the M40 north to the M6 provides another clean motorway route. Many Coventry trainees choose to stay overnight in Sheffield for two or three nights of the 5-day programme — Sheffield has strong budget hotel options including Travelodge and Premier Inn near the city centre.",
      },
    },
    {
      "@type": "Question",
      name: "Is this classroom training or hands-on training?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Hands-on from day one. You join Connor and the WRPX team on a real kitchen install in a real client kitchen — typically in Sheffield or South Yorkshire. There is no classroom, no training bay, no mock kitchens. Five days on a live job is what prepares you for the actual work — not a certificate earned on a controlled surface.",
      },
    },
    {
      "@type": "Question",
      name: "Is kitchen wrapping a good business to launch from Coventry or the West Midlands?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Coventry is an excellent base for a kitchen wrapping business. The city has a large and diverse housing stock — extensive Victorian and Edwardian terraces and inter-war semis in areas such as Earlsdon CV5, Chapelfields CV5, Radford CV6, Foleshill CV6 and Spon End CV1, 1960s and 1970s housing in Bell Green CV2 and Wood End CV2, and newer build in Binley Woods CV3 and Willenhall CV3. The city also has a substantial leasehold apartment and new-build market in the city centre CV1 and around the Friargate development zone. Coventry sits centrally within a large West Midlands catchment: Kenilworth CV8, Leamington Spa CV32, Warwick CV34, Rugby CV21, Nuneaton CV11, Bedworth CV12 — collectively one of the most densely populated residential markets in the Midlands. A kitchen wrapper with a well-built website targeting Coventry and the surrounding CV and B postcodes is entering a large market with growing demand and limited local specialist competition.",
      },
    },
    {
      "@type": "Question",
      name: "What do I get at the end of the 5 days?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You leave with the wrap skill, branding help (name and logo direction), trade supplier introductions and account setup support, a done-for-you website with live domain, 12 months of local SEO updates targeting your towns and cities in Coventry and the West Midlands, an ongoing phone and WhatsApp support line, and a WRPX Certificate of Completion (if approved). The package is built so you leave with a real business ready to take enquiries — not just a technique.",
      },
    },
    {
      "@type": "Question",
      name: "How do I apply for a place from Coventry?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Message Connor on WhatsApp or call. Places open around live WRPX kitchen installs — so availability depends on the install schedule. If you are based in Coventry or the West Midlands and want to start a kitchen wrapping business, get in touch now and we will let you know the next intake. We do not hold long waitlists — when a place is available and you are ready, we move quickly.",
      },
    },
  ],
};

const faqItems = faqSchema.mainEntity.map((item) => ({
  q: item.name,
  a: item.acceptedAnswer.text,
}));

export default function KitchenWrappingTrainingCoventryPage() {
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
            <span className="text-foreground">Coventry</span>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="border-b border-border bg-card py-16 md:py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <p className="text-sm font-medium uppercase tracking-wide text-accent">
            Kitchen Wrapping Training · Coventry &amp; West Midlands
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Kitchen wrapping training — Coventry
          </h1>
          <p className="mt-5 text-lg text-muted leading-relaxed">
            WRPX runs kitchen wrapping training on real live installs in South Yorkshire
            — approximately 90 minutes from Coventry via the M6 and M1 north.
            Five days on an actual kitchen job with Connor&apos;s team: prep, application,
            pricing and finishing under real conditions. Leave with the skill, a brand,
            a website, 12 months of SEO targeting Coventry and the West Midlands,
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

      {/* Travel from Coventry */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Getting to training from Coventry
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              Training takes place on live WRPX kitchen wrapping installs in Sheffield and
              South Yorkshire — our home territory. From Coventry city centre, South
              Yorkshire is approximately 85 to 95 minutes north via the M6 and M1.
              The route from Coventry CV1 is straightforward: the A45 east connects
              to the M6 at junction 2 (Coventry East) in under 10 minutes, then north
              on the M6 — through Rugby and the West Midlands motorway junction — to
              junction 21A where the M6 meets the M1 northbound. From junction 21A, the
              M1 north runs directly into South Yorkshire, entering at junction 29
              (Chesterfield) and continuing to junction 33 (Sheffield).
            </p>
            <p>
              From Nuneaton CV11 and Bedworth CV12, the A444 north leads to the M69
              and then the M1 at junction 21 — approaching from a slightly more easterly
              route that avoids the central M6 junction at Coventry and can be marginally
              quicker. From Leamington Spa CV32 and Warwick CV34, the M40 north is
              a clean route — north to junction 15 where it meets the M42, then east
              to the M6 and north on the M1. From Rugby CV21, the M1 is accessible
              via the A5 and A426 and is one of the most direct Midlands approach
              routes to South Yorkshire.
            </p>
            <p>
              Many Coventry trainees choose to stay overnight in Sheffield for two or
              three nights of the 5-day programme. Sheffield has strong budget hotel
              options — Travelodge and Premier Inn in Sheffield city centre S1 are
              well-priced and well-positioned for South Yorkshire install sites.
              The M6/M1 corridor from Coventry to Sheffield is one of the busiest
              and best-maintained motorway routes in England — no toll, no complex
              interchange beyond the M6/M1 junction, and predominantly clear of
              significant congestion outside peak hours.
            </p>
          </div>
        </div>
      </section>

      {/* Coventry market opportunity */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Kitchen wrapping in Coventry and the West Midlands — the market
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              Coventry is a large and underserved market for kitchen wrapping. The city
              has a population of over 370,000 and a housing stock that spans almost
              every era of English residential building — Victorian and Edwardian terraces
              in Earlsdon CV5, Chapelfields CV5 and Spon End CV1, a substantial inter-war
              semi-detached belt across Coundon CV6, Radford CV6 and Stivichall CV3,
              and a large 1960s and 1970s local authority and private sector build
              in Bell Green CV2, Wood End CV2 and Hillfields CV1. The post-war reconstruction
              of Coventry means the city has a higher-than-average proportion of homes
              built between 1950 and 1980 — a housing cohort with fitted kitchens now
              reaching the age where wrapping is often the most cost-effective
              improvement short of full replacement.
            </p>
            <p>
              The leasehold apartment market in Coventry city centre CV1 — particularly
              around the Cathedral Quarter, Friargate, the Canal Basin and the newer
              developments along the Ring Road — generates specific demand from apartment
              owners who cannot structurally alter their fitted kitchens under lease terms.
              The Coventry student accommodation market, driven by the University of
              Coventry (city centre) and Coventry University, adds a landlord
              refurbishment segment to the overall demand picture.
            </p>
            <p>
              The wider Coventry catchment is one of the most commercially dense in the
              Midlands. Kenilworth CV8, Leamington Spa CV32, Warwick CV34 and Stratford-upon-Avon
              CV37 to the south and south-east are affluent residential markets with
              high homeowner spending power on kitchen improvements. Nuneaton CV11,
              Bedworth CV12 and Rugby CV21 to the north and east add significant further
              volume. A kitchen wrapper targeting Coventry and the surrounding CV, B and
              LE postcodes from a well-built website has access to one of the widest
              and most varied residential markets in the Midlands.
            </p>
            <p>
              There is currently limited local specialist competition in the kitchen
              wrapping search results across Coventry and Warwickshire. A trained wrapper
              with a live website and local SEO targeting CV postcodes is entering a
              high-demand, low-competition market — the kind of early-mover position
              that closes quickly as the trade becomes more established.
            </p>
          </div>
        </div>
      </section>

      {/* What is included */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-2xl font-semibold text-foreground md:text-3xl">
            What the {trainingProgram.priceDisplay} Coventry training includes
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                5 days on a live kitchen install
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Real client kitchen in South Yorkshire — approximately 90 minutes from
                Coventry via the M6 and M1. Real problems, real conditions, from day
                one — not a training mock-up.
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
                confidence — so you&apos;re not guessing every job in Coventry
                or Leamington Spa.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Brand name and logo direction
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                A professional brand identity so you look like a real business from
                the first call a Coventry or Warwickshire homeowner makes.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Done-for-you website + live domain
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                A branded site ready to take enquiries — with your domain live so when
                someone in Coventry or Kenilworth searches kitchen wrapping near
                them, you&apos;re there.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                12 months of local SEO updates
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                We target your towns and cities — Coventry, Leamington Spa, Kenilworth,
                Nuneaton, Rugby, wherever your market is — so enquiries start coming
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
            Coventry kitchen wrapping training — common questions
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
          <TrainingRelatedLinks currentHref="/kitchen-wrapping-training-coventry/" />
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
              Based in Coventry — ready to start, or want to talk first?
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Places open around our South Yorkshire kitchen installs — approximately
              90 minutes from Coventry via the M6 and M1. If you&apos;re serious about
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
