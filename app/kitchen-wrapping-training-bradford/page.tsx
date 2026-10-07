import type { Metadata } from "next";
import Link from "next/link";
import { trainingProgram } from "@/lib/training-program";
import { PricingCallout } from "@/components/training/PricingCallout";
import { TrainingRelatedLinks } from "@/components/training/TrainingRelatedLinks";
import { TrainingHubCta } from "@/components/training/TrainingHubCta";

export const metadata: Metadata = {
  title: "Kitchen Wrapping Training Bradford | Learn to Wrap — WRPX West Yorkshire",
  description:
    "Kitchen wrapping training accessible from Bradford and West Yorkshire. WRPX runs 5-day live kitchen installs in South Yorkshire — approximately 30 to 35 minutes from Bradford via the M606 and M1. Real job training, not a classroom: learn prep, application, pricing and finishing. Leave with branding, a website, 12 months SEO and ongoing support. £1,699 all-in.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/kitchen-wrapping-training-bradford/",
  },
  openGraph: {
    title: "Kitchen Wrapping Training Bradford | WRPX West Yorkshire",
    description:
      "Bradford-accessible kitchen wrapping training on real live installs with WRPX. Full business setup included — branding, website, 12 months SEO and trade support. Approximately 30 to 35 minutes from Bradford via the M606 and M1.",
    url: "https://www.wrpx.co.uk/kitchen-wrapping-training-bradford/",
    type: "website",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Kitchen wrapping training Bradford — WRPX live-job training programme",
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
    { "@type": "City", name: "Bradford" },
    { "@type": "State", name: "West Yorkshire" },
  ],
  description:
    "5-day kitchen wrapping training on a real live install with WRPX — accessible from Bradford and West Yorkshire. Includes prep, primers, sealants, application, measure and price coaching, branding help, website + live domain, 12 months local SEO and ongoing phone/WhatsApp support. £1,699 all-in.",
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
      name: "Bradford",
      item: "https://www.wrpx.co.uk/kitchen-wrapping-training-bradford/",
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is WRPX kitchen wrapping training available to people based in Bradford?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — Bradford trainees are very welcome. Training takes place on live WRPX kitchen wrapping installs in South Yorkshire, approximately 30 to 35 minutes from Bradford city centre via the M606 south to the M1 south. From Bradford BD1, the M606 is accessible from the A6036 Bradford Ring Road via the Cleckheaton Road junction in under 10 minutes, connecting to the M1 at junction 26 (Tingley) and then south to South Yorkshire. Bradford is one of the closest major cities to our South Yorkshire training base — many Bradford trainees commute daily rather than staying overnight.",
      },
    },
    {
      "@type": "Question",
      name: "How far is the training from Bradford?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our kitchen wrapping installs are primarily in Sheffield and South Yorkshire. From Bradford city centre BD1, South Yorkshire is approximately 30 to 35 minutes via the M606 south to the M1, then south on the M1 to junction 36 (Barnsley) or junction 33 (Sheffield). From Shipley BD18 and Bingley BD16, the route south adds only a few minutes. From Keighley BD21 and Skipton BD23, the A629 south to Halifax and then the M62 west to M1 north is the typical approach — approximately 45 to 55 minutes. From Cleckheaton BD19, the M62 junction 26 directly links to the M1, making it one of the fastest Bradford district routes to South Yorkshire. Bradford is positioned so close to South Yorkshire that daily commuting to training is genuinely practical for most BD postcode trainees.",
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
      name: "Is kitchen wrapping a good business to launch from Bradford or West Yorkshire?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Bradford is an excellent base for a kitchen wrapping business. The city has a population of over 540,000 in the metropolitan district — one of the largest in England outside London — and an exceptionally diverse housing stock. Victorian and Edwardian back-to-back and through-terrace housing is extensive across Manningham BD8, Toller BD9, Heaton BD9, Allerton BD15, Thornton BD13 and Great Horton BD7. Inter-war and post-war semi-detached housing is widespread in Wibsey BD6, Buttershaw BD6, Bowling BD4, Bierley BD4 and Fagley BD2. Bradford is also undergoing significant city centre regeneration — the Broadway shopping development, the Darley Street Market, and the wider Bradford city centre transformation project BD1 are driving apartment conversion and new-build leasehold development, generating fresh kitchen wrapping demand from apartment owners who cannot structurally modify fitted kitchens under lease terms. Keighley BD21, Shipley BD18 and Bingley BD16 add further suburban volume. A kitchen wrapper with a well-built website targeting Bradford and BD postcodes is entering one of the largest and most underserved residential markets in the north of England.",
      },
    },
    {
      "@type": "Question",
      name: "What do I get at the end of the 5 days?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You leave with the wrap skill, branding help (name and logo direction), trade supplier introductions and account setup support, a done-for-you website with live domain, 12 months of local SEO updates targeting your towns and cities in Bradford and West Yorkshire, an ongoing phone and WhatsApp support line, and a WRPX Certificate of Completion (if approved). The package is built so you leave with a real business ready to take enquiries — not just a technique.",
      },
    },
    {
      "@type": "Question",
      name: "How do I apply for a place from Bradford?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Message Connor on WhatsApp or call. Places open around live WRPX kitchen installs — so availability depends on the install schedule. If you are based in Bradford or West Yorkshire and want to start a kitchen wrapping business, get in touch now and we will let you know the next intake. We do not hold long waitlists — when a place is available and you are ready, we move quickly.",
      },
    },
  ],
};

const faqItems = faqSchema.mainEntity.map((item) => ({
  q: item.name,
  a: item.acceptedAnswer.text,
}));

export default function KitchenWrappingTrainingBradfordPage() {
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
            <span className="text-foreground">Bradford</span>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="border-b border-border bg-card py-16 md:py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <p className="text-sm font-medium uppercase tracking-wide text-accent">
            Kitchen Wrapping Training · Bradford &amp; West Yorkshire
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Kitchen wrapping training — Bradford
          </h1>
          <p className="mt-5 text-lg text-muted leading-relaxed">
            WRPX runs kitchen wrapping training on real live installs in South Yorkshire
            — approximately 30 to 35 minutes from Bradford via the M606 and M1.
            Five days on an actual kitchen job with Connor&apos;s team: prep, application,
            pricing and finishing under real conditions. Leave with the skill, a brand,
            a website, 12 months of SEO targeting Bradford and West Yorkshire,
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

      {/* Travel from Bradford */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Getting to training from Bradford
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              Training takes place on live WRPX kitchen wrapping installs in Sheffield and
              South Yorkshire — our home territory. From Bradford city centre BD1, South
              Yorkshire is approximately 30 to 35 minutes south via the M606 and M1.
              The route from Bradford is straightforward: the M606 branches south from the
              Bradford Ring Road at the Cleckheaton Road junction, connecting to the M62
              at junction 26 (Gildersome) and then to the M1 southbound at Tingley —
              the M1 runs directly into South Yorkshire from there, with junction 36
              (Barnsley) reached in approximately 20 minutes from the M1 entry and
              junction 33 (Sheffield) a few minutes further south.
            </p>
            <p>
              From Shipley BD18 and Saltaire BD18, the A650 or A657 south into Bradford
              connects quickly to the M606 ring road link. From Bingley BD16 and Keighley
              BD21, the A650 south to Bradford then M606 south adds approximately 10 to
              15 minutes to the journey. From Cleckheaton BD19, the M62 junction 26 is
              direct to the M1 — one of the cleanest South Yorkshire approach routes in
              the district. From Halifax HX1, the A629 or M62 west-to-M1 south at
              junction 26 is typical.
            </p>
            <p>
              Bradford is one of the closest major cities to our South Yorkshire training
              base. Many Bradford and West Yorkshire trainees commute daily for all 5 days
              — the journey is genuinely shorter than a lot of daily commutes in West
              Yorkshire. For those who prefer to stay over, Sheffield city centre S1 has
              strong budget hotel options including Travelodge and Premier Inn within a
              short walk of the city centre.
            </p>
          </div>
        </div>
      </section>

      {/* Bradford market opportunity */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Kitchen wrapping in Bradford and West Yorkshire — the market
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              Bradford Metropolitan District has a population of over 540,000 — the
              fourth-largest metropolitan district in England — and a housing stock that
              spans almost every decade of English residential building from the mid-Victorian
              period onward. The city&apos;s industrial heritage means a high concentration
              of Victorian and Edwardian terraced housing: Manningham BD8, Great Horton BD7,
              Heaton BD9, Allerton BD15, Thornton BD13, Lidget Green BD7 and Eccleshill BD2
              all have extensive through-terrace and back-to-back housing stock with fitted
              kitchens that are increasingly reaching the age where wrapping is the most
              cost-effective improvement.
            </p>
            <p>
              Inter-war semi-detached and 1950s–1970s council and private housing is
              widespread across Wibsey BD6, Buttershaw BD6, Tong BD4, Bierley BD4,
              Fagley BD2, Idle BD10 and Clayton BD14. This housing cohort — typically with
              original or 1980s-era fitted kitchens — represents one of the highest-volume
              segments for kitchen wrapping enquiries, where replacement is expensive and
              wrapping delivers an affordable, high-quality result.
            </p>
            <p>
              Bradford city centre BD1 is undergoing significant regeneration. The Broadway
              development, Darley Street Market, and broader Bradford city centre
              transformation are generating new apartment conversions and leasehold
              new-build development — a segment where kitchen wrapping is frequently the
              only practical kitchen improvement for leaseholders who cannot structurally
              modify units. The wider Bradford district catchment — Keighley BD21, Shipley
              BD18, Bingley BD16, Cleckheaton BD19, Dewsbury WF12, Brighouse HD6 —
              extends the addressable market considerably for a kitchen wrapper operating
              from a Bradford base.
            </p>
            <p>
              Local specialist competition in kitchen wrapping search results across Bradford
              and BD postcodes is currently limited. A trained wrapper with a live website
              and local SEO targeting BD postcodes has access to one of the largest
              residential markets in the north — and is entering it at an early stage before
              the trade becomes more widely established.
            </p>
          </div>
        </div>
      </section>

      {/* What is included */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-2xl font-semibold text-foreground md:text-3xl">
            What the {trainingProgram.priceDisplay} Bradford training includes
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                5 days on a live kitchen install
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Real client kitchen in South Yorkshire — approximately 30 to 35 minutes
                from Bradford via the M606 and M1. Real problems, real conditions, from day
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
                confidence — so you&apos;re not guessing every job in Bradford
                or Keighley.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Brand name and logo direction
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                A professional brand identity so you look like a real business from
                the first call a Bradford or Shipley homeowner makes.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Done-for-you website + live domain
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                A branded site ready to take enquiries — with your domain live so when
                someone in Bradford or Bingley searches kitchen wrapping near
                them, you&apos;re there.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                12 months of local SEO updates
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                We target your towns and cities — Bradford, Shipley, Keighley, Bingley,
                Cleckheaton, wherever your market is — so enquiries start coming
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
            Bradford kitchen wrapping training — common questions
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
          <TrainingRelatedLinks currentHref="/kitchen-wrapping-training-bradford/" />
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
              Based in Bradford — ready to start, or want to talk first?
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Places open around our South Yorkshire kitchen installs — approximately
              30 to 35 minutes from Bradford via the M606 and M1. If you&apos;re serious about
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
