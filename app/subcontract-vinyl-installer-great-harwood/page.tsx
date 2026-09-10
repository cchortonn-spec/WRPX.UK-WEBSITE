import type { Metadata } from "next";
import Link from "next/link";
import { FaqAccordion } from "@/components/FaqAccordion";
import { getServiceSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Subcontract Vinyl Installer Great Harwood — Sign & Print Company Installation Partner | WRPX",
  description:
    "Subcontract vinyl installation across Great Harwood and the BB6 Ribble Valley zone for sign companies, print houses and fit-out contractors. WRPX covers Great Harwood town centre, the A680 and B6535 corridors, and links naturally with Accrington BB5 (4 miles south) and Clitheroe BB7 (8 miles north) on the same programme.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/subcontract-vinyl-installer-great-harwood/",
  },
};

const serviceSchema = getServiceSchema(
  "Subcontract vinyl installer Great Harwood — sign company and print house installation partner",
  "Professional subcontract vinyl installation for sign companies, print management firms and fit-out contractors across Great Harwood and the BB6 zone. White-label available. WRPX covers Great Harwood town centre, the A680 and B6535 corridors, and the wider East Lancashire / Ribble Valley market between Accrington and Clitheroe."
);

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.wrpx.co.uk/" },
    { "@type": "ListItem", position: 2, name: "Commercial Installation", item: "https://www.wrpx.co.uk/commercial-installation/" },
    { "@type": "ListItem", position: 3, name: "Yorkshire Subcontract Hub", item: "https://www.wrpx.co.uk/subcontract-vinyl-installation-yorkshire/" },
    { "@type": "ListItem", position: 4, name: "Subcontract Installer Great Harwood", item: "https://www.wrpx.co.uk/subcontract-vinyl-installer-great-harwood/" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How far is WRPX from Great Harwood?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Great Harwood is approximately 1 hour 20 minutes from our South Yorkshire base. The typical route is M62 west then M66 north to junction 1, then A680 through Accrington BB5 into Great Harwood BB6 — approximately 65 miles door to door. Great Harwood sits in the Ribble Valley between Accrington BB5 (4 miles south via A680) and Clitheroe BB7 (8 miles north via B6246). We frequently combine Great Harwood with Accrington and Clitheroe on the same East Lancashire day.",
      },
    },
    {
      "@type": "Question",
      name: "Do you work white-label in Great Harwood?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — white-label is standard on all Great Harwood and BB6 zone work. We arrive in unbranded vehicles, carry out every installation under your brand and provide full photographic documentation — before, during and completed sign-off — in your agreed format on the day. No WRPX branding appears on site, on vehicles or on any documentation.",
      },
    },
    {
      "@type": "Question",
      name: "Can you combine Great Harwood with Accrington and Clitheroe on the same day?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — and this is the most efficient way to cover the East Lancashire Ribble Valley corridor. Great Harwood BB6 sits between Accrington BB5 (4 miles south via A680) and Clitheroe BB7 (8 miles north via B6246). A single East Lancashire day from South Yorkshire via M62/M66 can productively cover Accrington, Great Harwood and Clitheroe — and potentially extend to Longridge PR3 or Barnoldswick BB18 if there is additional work on the same programme.",
      },
    },
    {
      "@type": "Question",
      name: "What types of vinyl installation do you cover in Great Harwood?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Window graphics, frosted and decorative window film, wall wraps, floor graphics, shop front and fascia vinyls, wayfinding vinyls, hoarding graphics, office interior graphics and retail and hospitality graphics. Installation only — you supply the printed or cut material, we assess the surface and install to spec. Great Harwood's commercial core includes Queen Street and the town centre retail area, plus light industrial and commercial premises on the edge of town.",
      },
    },
    {
      "@type": "Question",
      name: "Do you cover the industrial and commercial estates around Great Harwood?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — Great Harwood has a number of light industrial and commercial premises beyond the town centre, including the Martholme Industrial Estate and commercial properties on the A680 corridor. We cover these alongside the town centre retail and hospitality premises. The Altham Industrial Estate (approximately 2 miles south-west, between Great Harwood and Accrington) is also within easy reach on the same visit.",
      },
    },
  ],
};

const faqItems = [
  {
    q: "How far is WRPX from Great Harwood?",
    a: "Great Harwood is approximately 1 hour 20 minutes from our South Yorkshire base. The typical route is M62 west then M66 north to junction 1, then A680 through Accrington BB5 into Great Harwood BB6 — approximately 65 miles door to door. Great Harwood sits in the Ribble Valley between Accrington BB5 (4 miles south via A680) and Clitheroe BB7 (8 miles north via B6246). We frequently combine Great Harwood with Accrington and Clitheroe on the same East Lancashire day.",
  },
  {
    q: "Do you work white-label in Great Harwood?",
    a: "Yes — white-label is standard on all Great Harwood and BB6 zone work. We arrive in unbranded vehicles, carry out every installation under your brand and provide full photographic documentation — before, during and completed sign-off — in your agreed format on the day. No WRPX branding appears on site, on vehicles or on any documentation.",
  },
  {
    q: "Can you combine Great Harwood with Accrington and Clitheroe on the same day?",
    a: "Yes — and this is the most efficient way to cover the East Lancashire Ribble Valley corridor. Great Harwood BB6 sits between Accrington BB5 (4 miles south via A680) and Clitheroe BB7 (8 miles north via B6246). A single East Lancashire day from South Yorkshire via M62/M66 can productively cover Accrington, Great Harwood and Clitheroe — and potentially extend to Longridge PR3 or Barnoldswick BB18 if there is additional work on the same programme.",
  },
  {
    q: "What types of vinyl installation do you cover in Great Harwood?",
    a: "Window graphics, frosted and decorative window film, wall wraps, floor graphics, shop front and fascia vinyls, wayfinding vinyls, hoarding graphics, office interior graphics and retail and hospitality graphics. Installation only — you supply the printed or cut material, we assess the surface and install to spec. Great Harwood's commercial core includes Queen Street and the town centre retail area, plus light industrial and commercial premises on the edge of town.",
  },
  {
    q: "Do you cover the industrial and commercial estates around Great Harwood?",
    a: "Yes — Great Harwood has a number of light industrial and commercial premises beyond the town centre, including the Martholme Industrial Estate and commercial properties on the A680 corridor. We cover these alongside the town centre retail and hospitality premises. The Altham Industrial Estate (approximately 2 miles south-west, between Great Harwood and Accrington) is also within easy reach on the same visit.",
  },
];

const nearbyPages = [
  { href: "/subcontract-vinyl-installer-accrington/", label: "Accrington BB5", desc: "4 miles south via A680" },
  { href: "/subcontract-vinyl-installer-clitheroe/", label: "Clitheroe BB7", desc: "8 miles north via B6246" },
  { href: "/subcontract-vinyl-installer-burnley/", label: "Burnley BB11", desc: "6 miles north-east via A679" },
  { href: "/subcontract-vinyl-installer-blackburn/", label: "Blackburn BB1", desc: "5 miles west via A6119" },
];

export default function SubcontractVinylInstallerGreatHarwoodPage() {
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
            <Link href="/commercial-installation/" className="text-accent hover:underline">Commercial Installation</Link>
            <span className="mx-2">›</span>
            <Link href="/subcontract-vinyl-installation-yorkshire/" className="text-accent hover:underline">Yorkshire Subcontract Hub</Link>
            <span className="mx-2">›</span>
            <span className="text-foreground">Great Harwood</span>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="border-b border-border bg-card py-16 md:py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <p className="text-sm font-medium uppercase tracking-wide text-accent">
            Subcontract Vinyl Installation · Great Harwood BB6
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Subcontract vinyl installer — Great Harwood
          </h1>
          <p className="mt-5 text-lg text-muted leading-relaxed">
            WRPX provides subcontract vinyl installation across Great Harwood and the BB6
            Ribble Valley zone for sign companies, print houses and fit-out contractors.
            White-label as standard. Great Harwood sits between Accrington BB5 (4 miles
            south) and Clitheroe BB7 (8 miles north) — easily combined with either on the
            same East Lancashire day. Call or email to discuss Great Harwood work.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact/" className="btn-primary">
              Discuss Great Harwood Subcontract Work →
            </Link>
            <Link href="/subcontract-vinyl-installation-yorkshire/" className="btn-secondary">
              Yorkshire Subcontract Hub
            </Link>
          </div>
        </div>
      </section>

      {/* Great Harwood context */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Great Harwood — Ribble Valley East Lancashire
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              Great Harwood is a town in the Ribble Valley district of East Lancashire, sitting
              on the A680 between Accrington BB5 to the south and the lower reaches of Clitheroe
              BB7 to the north. The town is accessed from the M65 via Accrington, or directly
              from the M66 northbound via the A680 corridor — making it a natural mid-point stop
              on the Accrington–Clitheroe–Ribble Valley run from South Yorkshire.
            </p>
            <p>
              Great Harwood town centre is centred on Queen Street and the surrounding retail
              area, with a mix of independent retailers, food and drink businesses, professional
              services and community premises. The town has a strong East Lancashire mill town
              character — several of the commercial buildings retain original brick and stone
              fabric that presents specific substrate considerations for external vinyl
              installations, while interior commercial spaces are largely standard commercial
              fit-out.
            </p>
            <p>
              For sign companies covering the East Lancashire M65 corridor, Great Harwood BB6
              fills the gap between Accrington and Clitheroe that had previously required either
              a separate trip or leaving the corridor incomplete. Combined with Accrington BB5
              (4 miles south) and Clitheroe BB7 (8 miles north), Great Harwood completes the
              continuous Ribble Valley corridor coverage from Burnley in the north-east to
              Barnoldswick in the north-west.
            </p>
          </div>
        </div>
      </section>

      {/* What we install */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-2xl font-semibold text-foreground md:text-3xl">
            What we install in Great Harwood
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Window graphics and frosted film</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Shop front window graphics, frosted and etched-effect privacy film, decorative
                window vinyl and manifestation for Great Harwood town centre retail, hospitality
                and professional office premises.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Wall wraps and interior graphics</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Wall graphics, feature wall wraps, pub and restaurant interior branding and
                office interior vinyl across Great Harwood commercial premises and the
                wider BB6 zone.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Shop front and fascia vinyls</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Shop front cut vinyl lettering, fascia graphics and promotional window
                graphics for Great Harwood Queen Street and town centre retail and food
                and drink businesses.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Industrial and commercial estate graphics</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Unit graphics, hoarding vinyls, warehouse and workshop interior graphics
                for Martholme Industrial Estate and the A680 corridor commercial premises
                around Great Harwood.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Office and professional services graphics</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Office interior vinyls, frosted glass partition film, reception desk
                graphics and wayfinding vinyls for Great Harwood professional services
                and commercial premises.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Hoarding and promotional graphics</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Construction hoarding graphics, event and promotional graphics and temporary
                vinyl installations for Great Harwood and the surrounding Ribble Valley
                area.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Nearby pages */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Nearby towns we also cover
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {nearbyPages.map(({ href, label, desc }) => (
              <Link key={href} href={href} className="card-float p-5 hover:border-accent/60 transition-colors">
                <h3 className="font-semibold text-foreground">{label}</h3>
                <p className="mt-1 text-sm text-muted">{desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-3xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Great Harwood subcontract installation — common questions
          </h2>
          <FaqAccordion items={faqItems} />
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-20">
        <div className="container mx-auto max-w-3xl">
          <div className="card-float border-2 border-accent/40 p-10 text-center md:p-12">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              Got Great Harwood work coming up?
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Send us the job details — location, surface, material size and access
              requirements. We&apos;ll confirm availability and provide a subcontract rate the
              same day. White-label as standard. No WRPX branding on site or on any
              documentation.
            </p>
            <Link href="/contact/" className="btn-primary mt-8 inline-block">
              Discuss Great Harwood Subcontract Work →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
