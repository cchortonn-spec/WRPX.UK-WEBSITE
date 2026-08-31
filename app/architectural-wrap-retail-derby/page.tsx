import type { Metadata } from "next";
import Link from "next/link";
import { getServiceSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Retail Interior Vinyl Wrapping Derby | Shop Counters, Fixtures & Panels | WRPX",
  description:
    "Retail interior vinyl wrapping across Derby — counter fascias, gondola end-panels, display plinths, fitting room panels and branded fixture surfaces. Overnight installation across Intu Derby, St Peter's Quarter, Cathedral Quarter, Sadler Gate and Derby city centre retail. No trading disruption.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/architectural-wrap-retail-derby/",
  },
};

const serviceSchema = getServiceSchema(
  "Retail interior vinyl wrapping Derby — counters, fixtures and branded surfaces",
  "Architectural vinyl wrapping for retail interiors across Derby and Derbyshire. Counter fascias, gondola end-panels, display plinths, fitting room panels, shop-front panel boards and branded fixture surfaces wrapped in commercial-grade film. Intu Derby on Victoria Street, St Peter's Quarter DE1, Cathedral Quarter DE1, Sadler Gate, Pride Park DE24 commercial zone and across Derby and Derbyshire retail. Overnight and out-of-hours installation, no trading disruption."
);

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.wrpx.co.uk/" },
    { "@type": "ListItem", position: 2, name: "Architectural Vinyl Film", item: "https://www.wrpx.co.uk/architectural-vinyl-film/" },
    { "@type": "ListItem", position: 3, name: "Retail Interior Vinyl Wrapping", item: "https://www.wrpx.co.uk/architectural-wrap-retail/" },
    { "@type": "ListItem", position: 4, name: "Derby", item: "https://www.wrpx.co.uk/architectural-wrap-retail-derby/" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do you wrap retail interiors across Derby and Intu Derby?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — we cover Derby city centre and the wider Derbyshire retail area. Intu Derby on Victoria Street DE1, St Peter's Quarter, Cathedral Quarter, Sadler Gate, Cornmarket and the independent retail on Iron Gate and Wardwick. We also cover Pride Park DE24 commercial zone, Kingsway Retail Park and retail parks across the Derby postcode area. DE1 through DE24 are all within our coverage zone.",
      },
    },
    {
      "@type": "Question",
      name: "Can retail wrapping be done without closing the Derby shop?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We work overnight or during early-morning pre-trading windows as standard. A counter fascia or shop-front panel can typically be completed in a single overnight session. For Intu Derby installations, we work within the centre's management schedules — overnight contractor access, clean-site departure by opening. For independent Derby retail, we coordinate directly with you on access timing.",
      },
    },
    {
      "@type": "Question",
      name: "Which retail surfaces can be vinyl wrapped in Derby?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Shop-front panel boards and bulkhead fascias, counter and cash desk fascias, gondola end-panels and display plinths, fitting room door faces and partition panels, built-in shelving back-panels, branded feature walls and till desk fronts. Surfaces need to be flat or near-flat and in sound condition — we assess at survey before any commitment.",
      },
    },
    {
      "@type": "Question",
      name: "Do you work on multi-site programmes across Derby and the East Midlands?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — multi-site retail rollouts across Derby and the East Midlands are a core capability. Derby sits between Nottingham (14 miles north-east) and Burton-upon-Trent (10 miles south-west), making it a natural hub for East Midlands retail programmes. We provide consistent film specification, installation standard and scheduling across all sites and work white-label for retail fit-out contractors and brand rollout teams as standard.",
      },
    },
    {
      "@type": "Question",
      name: "Can WRPX work to Intu Derby management requirements?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — we are experienced working within managed shopping centre environments. Intu Derby requires overnight working and contractor coordination for most retail fit-out activity. We work within these constraints as standard: overnight permits, no-trace departure, waste removal coordination, security sign-in and photographic documentation provided as part of every Derby shopping centre installation.",
      },
    },
  ],
};

const faqItems = [
  {
    q: "Do you wrap retail interiors across Derby and Intu Derby?",
    a: "Yes — we cover Derby city centre and the wider Derbyshire retail area. Intu Derby on Victoria Street DE1, St Peter's Quarter, Cathedral Quarter, Sadler Gate, Cornmarket and the independent retail on Iron Gate and Wardwick. We also cover Pride Park DE24 commercial zone, Kingsway Retail Park and retail parks across the Derby postcode area. DE1 through DE24 are all within our coverage zone.",
  },
  {
    q: "Can retail wrapping be done without closing the Derby shop?",
    a: "Yes. We work overnight or during early-morning pre-trading windows as standard. A counter fascia or shop-front panel can typically be completed in a single overnight session. For Intu Derby installations, we work within the centre's management schedules — overnight contractor access, clean-site departure by opening. For independent Derby retail, we coordinate directly with you on access timing.",
  },
  {
    q: "Which retail surfaces can be vinyl wrapped in Derby?",
    a: "Shop-front panel boards and bulkhead fascias, counter and cash desk fascias, gondola end-panels and display plinths, fitting room door faces and partition panels, built-in shelving back-panels, branded feature walls and till desk fronts. Surfaces need to be flat or near-flat and in sound condition — we assess at survey before any commitment.",
  },
  {
    q: "Do you work on multi-site programmes across Derby and the East Midlands?",
    a: "Yes — multi-site retail rollouts across Derby and the East Midlands are a core capability. Derby sits between Nottingham (14 miles north-east) and Burton-upon-Trent (10 miles south-west), making it a natural hub for East Midlands retail programmes. We provide consistent film specification, installation standard and scheduling across all sites and work white-label for retail fit-out contractors and brand rollout teams as standard.",
  },
  {
    q: "Can WRPX work to Intu Derby management requirements?",
    a: "Yes — we are experienced working within managed shopping centre environments. Intu Derby requires overnight working and contractor coordination for most retail fit-out activity. We work within these constraints as standard: overnight permits, no-trace departure, waste removal coordination, security sign-in and photographic documentation provided as part of every Derby shopping centre installation.",
  },
];

export default function ArchitecturalWrapRetailDerbyPage() {
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
            <Link href="/architectural-wrap-retail/" className="text-accent hover:underline">Retail Interior Vinyl Wrapping</Link>
            <span className="mx-2">›</span>
            <span className="text-foreground">Derby</span>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="border-b border-border bg-card py-16 md:py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <p className="text-sm font-medium uppercase tracking-wide text-accent">
            Architectural Wrap · Derby Retail
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Retail interior vinyl wrapping in Derby
          </h1>
          <p className="mt-5 text-lg text-muted leading-relaxed">
            WRPX wraps retail interiors across Derby and Derbyshire — counter fascias,
            gondola end-panels, display plinths, fitting room panels and branded fixture
            surfaces in commercial-grade architectural film. Overnight installation to
            shopping centre schedules. Intu Derby, St Peter&apos;s Quarter, Cathedral
            Quarter, Sadler Gate and across Derby and Derbyshire retail.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact/" className="btn-primary">
              Request a Derby Retail Survey →
            </Link>
            <Link href="/architectural-wrap-retail/" className="btn-secondary">
              Retail Wrapping Overview
            </Link>
          </div>
        </div>
      </section>

      {/* Derby retail context */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Derby&apos;s retail market — what we work on
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              Intu Derby on Victoria Street DE1 is the city&apos;s primary covered shopping
              centre — over 190 stores across a large multi-level format anchored by
              Marks &amp; Spencer and Debenhams. Centre retail programmes require overnight
              working and contractor coordination: Intu Derby&apos;s management requirements
              include contractor induction, overnight access permits and clean-site departure
              by opening. WRPX manages all of this as part of every Intu Derby installation.
            </p>
            <p>
              St Peter&apos;s Quarter — the pedestrianised retail core connecting St Peter&apos;s
              Street to the Cornmarket — generates a dense concentration of high street
              national brands and food-and-beverage operators. Counter and fixture wrapping
              here is typically overnight or pre-trading on weekday mornings. Cathedral
              Quarter DE1 carries a more independent and boutique character: independent
              fashion, artisan food, coffee and professional services on Iron Gate, Sadler
              Gate and Wardwick.
            </p>
            <p>
              Pride Park DE24 — Derby&apos;s primary out-of-town commercial zone, home to
              Derbyshire County Cricket Club, the Pride Park Stadium and a large concentration
              of trade counters, car showrooms and commercial units — generates regular
              demand for counter and fascia wrapping in trade and professional settings where
              brand presentation matters alongside functionality.
            </p>
            <p>
              Kingsway Retail Park on the A5250 and the Wyvern Retail Park on the A52
              corridor add the major out-of-town retail format to Derby&apos;s landscape.
              Large-format retail units here tend to run standardised brand fixtures that
              benefit from multi-site film specification — the same counter fascia spec
              replicated identically across Derby and other East Midlands locations.
            </p>
          </div>
        </div>
      </section>

      {/* What we wrap */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-2xl font-semibold text-foreground md:text-3xl">
            What we wrap in Derby retail interiors
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Counter and cash desk fascias</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Service counters and point-of-sale desks across Derby retail premises.
                A single overnight wrap of a chipped or outdated counter front transforms
                the customer-facing surface — no structural works, no trading loss.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Shop-front panel boards and bulkheads</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Panel boards on Derby shopfronts, internal bulkhead fascias and display
                header panels. Critical for Intu Derby tenants working within tight
                overnight installation windows on Victoria Street.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Gondola end-panels and display plinths</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Gondola end-caps and free-standing display plinths in Derby retail stores.
                Wrapping delivers a brand-aligned finish update at a fraction of the cost
                of new display furniture — completed overnight in Derby.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Fitting room panels and surrounds</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Fitting room door faces, partition panels and interior surround panels
                in Derby fashion and apparel retail. Film specified to handle the daily
                contact load of high-footfall environments.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Branded feature walls</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Feature wall panels and back-wall display areas in Derby retail interiors.
                Brand colours, stone-effect, woodgrain and decorative film applied overnight
                as part of a seasonal brand refresh or store relaunch.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Fixture fascias and shelving panels</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Built-in shelving back-panels, retail fixture fascias and branded display
                unit surfaces. Consistent film specification across all Derby fixtures for
                multi-unit brand rollouts requiring site-to-site consistency.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Multi-site */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Multi-site Derby and East Midlands retail rollouts
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              Branded retailers operating across multiple Derby and East Midlands locations
              benefit from a single installation partner covering all sites on the same
              programme. We provide consistent film specification, consistent installation
              standard and consistent photographic documentation across every site —
              whether that is Intu Derby, a Kingsway Retail Park unit and a Pride Park
              trade counter on the same programme, or a wider East Midlands rollout.
            </p>
            <p>
              For retail fit-out contractors managing Derby refurbishment programmes on
              behalf of brand clients, we work white-label as standard. We arrive under
              your company name, coordinate directly with your site contact and centre
              management, and provide sign-off documentation in your required format.
              The retailer and centre management see your company throughout.
            </p>
            <p>
              Derby sits at the centre of an East Midlands triangle: Nottingham is
              14 miles north-east on the A52, Leicester is 28 miles south on the A6,
              and Birmingham is 40 miles south-west on the A38. Multi-city East Midlands
              retail programmes covering Derby, Nottingham and Leicester are managed
              without separate mobilisation for each city.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-3xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Derby retail vinyl wrapping — common questions
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
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Related services
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <Link href="/architectural-wrap-retail/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Retail vinyl wrapping — full overview</h3>
              <p className="mt-2 text-sm text-muted">National service page covering all retail interior wrapping work, surfaces and process.</p>
            </Link>
            <Link href="/window-film/retail-window-film/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Retail window film Derby</h3>
              <p className="mt-2 text-sm text-muted">Solar control, frosted privacy and decorative window film for Derby retail premises.</p>
            </Link>
            <Link href="/window-film/frosted-film-derby/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Frosted window film Derby</h3>
              <p className="mt-2 text-sm text-muted">Privacy film, glass manifestation and etched-effect film for Derby offices and retail.</p>
            </Link>
            <Link href="/architectural-wrap-retail-nottingham/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Retail wrapping Nottingham</h3>
              <p className="mt-2 text-sm text-muted">Retail interior wrapping across Nottingham, Victoria Centre, Intu Broadmarsh and Cornerhouse.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-20">
        <div className="container mx-auto max-w-3xl">
          <div className="card-float border-2 border-accent/40 p-10 text-center md:p-12">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              Planning a retail refresh in Derby?
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              We survey and scope retail wrapping programmes across Derby, Intu Derby
              and the wider Derbyshire retail area. Tell us the surfaces, locations and
              scheduling constraints — we&apos;ll advise on film specification and
              overnight scheduling.
            </p>
            <Link href="/contact/" className="btn-primary mt-8 inline-block">
              Request a Derby Retail Survey →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
