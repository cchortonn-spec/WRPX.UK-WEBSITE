import type { Metadata } from "next";
import Link from "next/link";
import { getServiceSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Retail Interior Vinyl Wrapping Leicester | Shop Counters, Fixtures & Panels | WRPX",
  description:
    "Retail interior vinyl wrapping across Leicester — counter fascias, gondola end-panels, display plinths, fitting room panels and branded fixture surfaces. Overnight installation across Highcross Shopping Centre, Fosse Park, Braunstone Gate and Leicester city centre retail. No trading disruption.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/architectural-wrap-retail-leicester/",
  },
};

const serviceSchema = getServiceSchema(
  "Retail interior vinyl wrapping Leicester — counters, fixtures and branded surfaces",
  "Architectural vinyl wrapping for retail interiors across Leicester and Leicestershire. Counter fascias, gondola end-panels, display plinths, fitting room panels, shop-front panel boards and branded fixture surfaces wrapped in commercial-grade film. Highcross Shopping Centre LE1, Fosse Park LE3, Braunstone Gate LE3, the Lanes LE1, Market Street and Gallowtree Gate city centre, Oadby LE2 retail. Overnight and out-of-hours installation, no trading disruption."
);

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.wrpx.co.uk/" },
    { "@type": "ListItem", position: 2, name: "Architectural Vinyl Film", item: "https://www.wrpx.co.uk/architectural-vinyl-film/" },
    { "@type": "ListItem", position: 3, name: "Retail Interior Vinyl Wrapping", item: "https://www.wrpx.co.uk/architectural-wrap-retail/" },
    { "@type": "ListItem", position: 4, name: "Leicester", item: "https://www.wrpx.co.uk/architectural-wrap-retail-leicester/" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do you wrap retail interiors across Leicester and Highcross?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — we cover Leicester city centre and the wider Leicestershire retail area. Highcross Shopping Centre LE1, the Lanes LE1, Market Street, Gallowtree Gate, Granby Street and the independent retail on Braunstone Gate LE3. We also cover Fosse Park LE3, Oadby LE2 and out-of-town retail parks across the Leicester postcode area. LE1 through LE8 are all within our coverage zone.",
      },
    },
    {
      "@type": "Question",
      name: "Can retail wrapping be done without closing the Leicester shop?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We work overnight or during early-morning pre-trading windows as standard. A counter fascia or shop-front panel can typically be completed in a single overnight session. For Highcross installations, we work within the centre's management schedules — overnight contractor access, clean-site departure by opening. For independent Leicester retail on Braunstone Gate or the Lanes, we coordinate directly with you on access timing.",
      },
    },
    {
      "@type": "Question",
      name: "Which retail surfaces can be vinyl wrapped in Leicester?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Shop-front panel boards and bulkhead fascias, counter and cash desk fascias, gondola end-panels and display plinths, fitting room door faces and partition panels, built-in shelving back-panels, branded feature walls and till desk fronts. Surfaces need to be flat or near-flat and in sound condition — we assess at survey before any commitment.",
      },
    },
    {
      "@type": "Question",
      name: "Do you work on multi-site programmes across Leicester and the East Midlands?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — multi-site retail rollouts across Leicester and the East Midlands are a core capability. Leicester sits between Nottingham (27 miles north on the A46) and Derby (28 miles north-west on the A6), making it the southern anchor of our East Midlands retail programme coverage. We provide consistent film specification, installation standard and scheduling across all sites and work white-label for retail fit-out contractors and brand rollout teams as standard.",
      },
    },
    {
      "@type": "Question",
      name: "Can WRPX work to Highcross centre management requirements?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — we are experienced working within managed shopping centre environments. Highcross requires overnight working and contractor coordination for most retail fit-out activity. We work within these constraints as standard: overnight permits, no-trace departure, waste removal coordination, security sign-in and photographic documentation provided as part of every Highcross installation.",
      },
    },
  ],
};

const faqItems = [
  {
    q: "Do you wrap retail interiors across Leicester and Highcross?",
    a: "Yes — we cover Leicester city centre and the wider Leicestershire retail area. Highcross Shopping Centre LE1, the Lanes LE1, Market Street, Gallowtree Gate, Granby Street and the independent retail on Braunstone Gate LE3. We also cover Fosse Park LE3, Oadby LE2 and out-of-town retail parks across the Leicester postcode area. LE1 through LE8 are all within our coverage zone.",
  },
  {
    q: "Can retail wrapping be done without closing the Leicester shop?",
    a: "Yes. We work overnight or during early-morning pre-trading windows as standard. A counter fascia or shop-front panel can typically be completed in a single overnight session. For Highcross installations, we work within the centre's management schedules — overnight contractor access, clean-site departure by opening. For independent Leicester retail on Braunstone Gate or the Lanes, we coordinate directly with you on access timing.",
  },
  {
    q: "Which retail surfaces can be vinyl wrapped in Leicester?",
    a: "Shop-front panel boards and bulkhead fascias, counter and cash desk fascias, gondola end-panels and display plinths, fitting room door faces and partition panels, built-in shelving back-panels, branded feature walls and till desk fronts. Surfaces need to be flat or near-flat and in sound condition — we assess at survey before any commitment.",
  },
  {
    q: "Do you work on multi-site programmes across Leicester and the East Midlands?",
    a: "Yes — multi-site retail rollouts across Leicester and the East Midlands are a core capability. Leicester sits between Nottingham (27 miles north on the A46) and Derby (28 miles north-west on the A6), making it the southern anchor of our East Midlands retail programme coverage. We provide consistent film specification, installation standard and scheduling across all sites and work white-label for retail fit-out contractors and brand rollout teams as standard.",
  },
  {
    q: "Can WRPX work to Highcross centre management requirements?",
    a: "Yes — we are experienced working within managed shopping centre environments. Highcross requires overnight working and contractor coordination for most retail fit-out activity. We work within these constraints as standard: overnight permits, no-trace departure, waste removal coordination, security sign-in and photographic documentation provided as part of every Highcross installation.",
  },
];

export default function ArchitecturalWrapRetailLeicesterPage() {
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
            <span className="text-foreground">Leicester</span>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="border-b border-border bg-card py-16 md:py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <p className="text-sm font-medium uppercase tracking-wide text-accent">
            Architectural Wrap · Leicester Retail
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Retail interior vinyl wrapping in Leicester
          </h1>
          <p className="mt-5 text-lg text-muted leading-relaxed">
            WRPX wraps retail interiors across Leicester and Leicestershire — counter fascias,
            gondola end-panels, display plinths, fitting room panels and branded fixture
            surfaces in commercial-grade architectural film. Overnight installation to
            shopping centre schedules. Highcross, Fosse Park, Braunstone Gate and across
            Leicester and Leicestershire retail.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact/" className="btn-primary">
              Request a Leicester Retail Survey →
            </Link>
            <Link href="/architectural-wrap-retail/" className="btn-secondary">
              Retail Wrapping Overview
            </Link>
          </div>
        </div>
      </section>

      {/* Leicester retail context */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Leicester&apos;s retail market — what we work on
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              Highcross Shopping Centre LE1 is Leicester&apos;s primary covered retail destination —
              a major two-level centre anchored by John Lewis and with over 120 units including
              national fashion, food court and leisure. Centre retail programmes require overnight
              working and contractor coordination: Highcross management requirements include
              contractor induction, access permits and clean-site departure by opening.
              WRPX manages all of this as part of every Highcross installation.
            </p>
            <p>
              The Lanes — Leicester&apos;s historic pedestrianised core connecting Silver Street,
              Loseby Lane and St Martin&apos;s — carries independent fashion, jewellery, artisan
              food and boutique retail in a tight, mixed-age building stock. Counter and fixture
              wrapping here is typically done overnight or pre-trading on weekday mornings.
              Gallowtree Gate and Market Street handle the main national high street brands,
              with the Haymarket Shopping Centre providing an additional covered retail cluster
              immediately north of the city core.
            </p>
            <p>
              Fosse Park LE3 — Leicester&apos;s dominant out-of-town retail park off the A563 —
              is one of the largest out-of-town retail parks in the UK, with over 50 units
              including major furniture, homewares, fashion and electronics anchors. Large-format
              retail units here run standardised brand fixtures that benefit from multi-site film
              specification: the same counter fascia spec replicated identically across Leicester
              and other East Midlands locations.
            </p>
            <p>
              Braunstone Gate LE3 runs west from the city centre into the West End — an
              independent strip with independent restaurants, fashion boutiques, homeware,
              wellness and professional services that generates regular demand for window film,
              interior wrapping and branded graphics. Oadby LE2, south-east of the city,
              adds an affluent suburban retail offer with professional services, homeware
              and boutique food and drink.
            </p>
          </div>
        </div>
      </section>

      {/* What we wrap */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-2xl font-semibold text-foreground md:text-3xl">
            What we wrap in Leicester retail interiors
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Counter and cash desk fascias</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Service counters and point-of-sale desks across Leicester retail premises.
                A single overnight wrap of a chipped or outdated counter front transforms
                the customer-facing surface — no structural works, no trading loss.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Shop-front panel boards and bulkheads</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Panel boards on Leicester shopfronts, internal bulkhead fascias and display
                header panels. Critical for Highcross tenants working within tight
                overnight installation windows.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Gondola end-panels and display plinths</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Gondola end-caps and free-standing display plinths in Leicester retail stores.
                Wrapping delivers a brand-aligned finish update at a fraction of the cost
                of new display furniture — completed overnight in Leicester.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Fitting room panels and surrounds</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Fitting room door faces, partition panels and interior surround panels
                in Leicester fashion and apparel retail. Film specified to handle the daily
                contact load of high-footfall environments.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Branded feature walls</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Feature wall panels and back-wall display areas in Leicester retail interiors.
                Brand colours, stone-effect, woodgrain and decorative film applied overnight
                as part of a seasonal brand refresh or store relaunch.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Fixture fascias and shelving panels</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Built-in shelving back-panels, retail fixture fascias and branded display
                unit surfaces. Consistent film specification across all Leicester fixtures for
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
            Multi-site Leicester and East Midlands retail rollouts
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              Branded retailers operating across multiple Leicester and East Midlands locations
              benefit from a single installation partner covering all sites on the same
              programme. We provide consistent film specification, consistent installation
              standard and consistent photographic documentation across every site —
              whether that is Highcross, a Fosse Park unit and a Braunstone Gate independent
              on the same programme, or a wider East Midlands rollout.
            </p>
            <p>
              For retail fit-out contractors managing Leicester refurbishment programmes on
              behalf of brand clients, we work white-label as standard. We arrive under
              your company name, coordinate directly with your site contact and centre
              management, and provide sign-off documentation in your required format.
              The retailer and centre management see your company throughout.
            </p>
            <p>
              Leicester sits at the southern end of our East Midlands corridor: Nottingham
              is 27 miles north on the A46, Derby is 28 miles north-west on the A6, and
              Coventry is 24 miles south on the A46. Multi-city East Midlands retail
              programmes covering Leicester, Nottingham and Derby are managed without
              separate mobilisation for each city.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-3xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Leicester retail vinyl wrapping — common questions
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
              <h3 className="font-semibold text-foreground">Retail window film Leicester</h3>
              <p className="mt-2 text-sm text-muted">Solar control, frosted privacy and decorative window film for Leicester retail premises.</p>
            </Link>
            <Link href="/window-film/frosted-film-leicester/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Frosted window film Leicester</h3>
              <p className="mt-2 text-sm text-muted">Privacy film, glass manifestation and etched-effect film for Leicester offices and retail.</p>
            </Link>
            <Link href="/architectural-wrap-retail-nottingham/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Retail wrapping Nottingham</h3>
              <p className="mt-2 text-sm text-muted">Retail interior wrapping across Nottingham — Victoria Centre, Intu Broadmarsh and Cornerhouse.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-20">
        <div className="container mx-auto max-w-3xl">
          <div className="card-float border-2 border-accent/40 p-10 text-center md:p-12">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              Planning a retail refresh in Leicester?
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              We survey and scope retail wrapping programmes across Leicester, Highcross,
              Fosse Park and the wider Leicestershire retail area. Tell us the surfaces,
              locations and scheduling constraints — we&apos;ll advise on film specification
              and overnight scheduling.
            </p>
            <Link href="/contact/" className="btn-primary mt-8 inline-block">
              Request a Leicester Retail Survey →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
