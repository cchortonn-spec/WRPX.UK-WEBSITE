import type { Metadata } from "next";
import Link from "next/link";
import { FaqAccordion } from "@/components/FaqAccordion";
import { getServiceSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Subcontract Vinyl Installer Goole — Sign & Print Company Installation Partner | WRPX",
  description:
    "Subcontract vinyl installation across Goole and the DN14 East Riding zone for sign companies, print houses and fit-out contractors. WRPX covers Goole port town, the M62 corridor junction, Humber estuary business parks and the wider East Riding commercial market. Naturally combined with Selby (west) or Howden (east) on the same programme.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/subcontract-vinyl-installer-goole/",
  },
};

const serviceSchema = getServiceSchema(
  "Subcontract vinyl installer Goole — sign company and print house installation partner",
  "Professional subcontract vinyl installation for sign companies, print management firms and fit-out contractors across Goole and the DN14 East Riding zone. White-label available. WRPX covers Goole town centre DN14, the M62 junction corridor, Humber port business parks, Howden DN14 and the wider East Riding commercial and logistics market."
);

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.wrpx.co.uk/" },
    {
      "@type": "ListItem",
      position: 2,
      name: "Commercial Installation",
      item: "https://www.wrpx.co.uk/commercial-installation/",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Yorkshire Subcontract Hub",
      item: "https://www.wrpx.co.uk/subcontract-vinyl-installation-yorkshire/",
    },
    {
      "@type": "ListItem",
      position: 4,
      name: "Subcontract Installer Goole",
      item: "https://www.wrpx.co.uk/subcontract-vinyl-installer-goole/",
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How far is WRPX from Goole?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Goole is approximately 40 to 50 minutes from our South Yorkshire base. The most direct route is the M18 north from South Yorkshire, joining the M62 east at junction 35 (Thorne), then east on the M62 to junction 36 (Goole) — exit onto the M62 slip and directly into Goole DN14 via the A614. The M62 junction 36 at Goole is one of the cleanest approach junctions on the motorway network — no complex interchange, direct slip onto the A614 and into Goole town within minutes of leaving the motorway.",
      },
    },
    {
      "@type": "Question",
      name: "Do you work white-label in Goole?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — white-label is standard on all Goole and DN14 zone work. We arrive in unbranded vehicles, carry out every installation under your brand and provide full photographic documentation — before, during and completed sign-off — in your agreed format on the day. No WRPX branding appears on site, on vehicles or on any documentation.",
      },
    },
    {
      "@type": "Question",
      name: "Can you combine Goole with Selby or Howden on the same programme?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — Goole sits at the western edge of the Humber corridor and is ideally placed for combined East Riding and North Yorkshire programmes. Selby YO8 is approximately 13 miles west of Goole via the A614 or the A63 — under 20 minutes. Howden DN14 is approximately 9 miles east of Goole along the A614 — under 15 minutes. Thorne DN8 is approximately 10 miles west-south-west via the M62 — around 15 minutes. A Goole-anchored programme covering Selby (west), Goole town (centre) and Howden (east) is one of the cleanest M62 corridor programmes we can run from South Yorkshire — three distinct markets on a single east–west motorway route.",
      },
    },
    {
      "@type": "Question",
      name: "What types of vinyl installation do you cover in Goole?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Window graphics, frosted and decorative window film, wall wraps, floor graphics, shop front and fascia vinyls, wayfinding vinyls, hoarding graphics, interior graphics and hospitality venue graphics. Goole town centre has a mix of independent retailers, professional services, estate agents and hospitality businesses on Boothferry Road and surrounding streets — with consistent window graphics, fascia vinyl and interior signage installation requirements. The wider Goole area has a significant port, logistics and light industrial economy driven by the Port of Goole — one of the UK's largest inland ports — which generates commercial graphics and signage requirements including warehouse directional graphics, health and safety signage vinyls and fleet-adjacent vinyl work that differs from standard town-centre retail.",
      },
    },
    {
      "@type": "Question",
      name: "Do you cover the M62 corridor and the Humber business park areas?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. The M62 corridor through Goole — running west to Selby and Pontefract and east to Howden and the Humber crossings — is a route we cover as part of the broader East Riding and North Lincolnshire programme. The Goole port estate and M62-adjacent business parks on the eastern fringe of Goole DN14 generate logistics, warehousing and light manufacturing installation requirements. Howden DN14 — the small market town on the A614 approximately 9 miles east of Goole — is a natural addition to any Goole programme. Hull HU1 is approximately 25 miles east via the A63 and M62, reachable as an extension of a Goole-anchored East Riding day.",
      },
    },
  ],
};

const faqItems = faqSchema.mainEntity.map((item) => ({
  q: item["@type"] === "Question" ? item.name : "",
  a: item.acceptedAnswer.text,
}));

const nearbyPages = [
  {
    href: "/subcontract-vinyl-installer-selby/",
    label: "Selby YO8",
    desc: "Lower Ouse Valley market town — 13 miles west via A614 and A63",
  },
  {
    href: "/subcontract-vinyl-installer-beverley/",
    label: "Beverley HU17",
    desc: "East Riding market town — via A63 and A164 east",
  },
  {
    href: "/subcontract-vinyl-installer-hull/",
    label: "Hull HU1",
    desc: "East Riding city — 25 miles east via M62 and A63",
  },
  {
    href: "/subcontract-vinyl-installer-pocklington/",
    label: "Pocklington YO42",
    desc: "East Riding market town — A1079 corridor north of Goole",
  },
];

export default function SubcontractVinylInstallerGoolePage() {
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
            <span className="text-foreground">Goole</span>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="border-b border-border bg-card py-16 md:py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <p className="text-sm font-medium uppercase tracking-wide text-accent">
            Subcontract Vinyl Installation · Goole &amp; DN14 Humber Corridor
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Subcontract vinyl installer — Goole
          </h1>
          <p className="mt-5 text-lg text-muted leading-relaxed">
            WRPX provides subcontract vinyl installation for sign companies, print houses
            and fit-out contractors across Goole and the DN14 East Riding zone.
            White-label, fully documented, reported back to you. Goole is approximately
            40 to 50 minutes from our South Yorkshire base via the M18 and M62 —
            positioned at junction 36 of the M62, making it a clean anchor point for
            Humber corridor and East Riding programmes.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact/" className="btn-primary">
              Discuss a Goole Installation →
            </Link>
            <Link href="/subcontract-vinyl-installation-yorkshire/" className="btn-secondary">
              Yorkshire Subcontract Hub
            </Link>
          </div>
        </div>
      </section>

      {/* Route and access */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Route and access — Goole from South Yorkshire
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              From South Yorkshire, Goole is reached via the M18 north to junction 6
              (Thorne), then east on the M62 to junction 36 (Goole). The M62 junction 36
              slip exits directly onto the A614, which leads into Goole town centre
              DN14 in under 5 minutes — no complex junction, no town-centre congestion
              from the motorway. The total journey from Sheffield is typically 40 to 50
              minutes in normal conditions.
            </p>
            <p>
              Goole&apos;s M62 junction 36 position makes it a natural staging point for
              East Riding programmes running east toward Howden DN14, Market Weighton
              YO43, Beverley HU17 and Hull HU1. It also links west toward Selby YO8 via
              the A614 and north toward Pontefract WF8 via the M62 and M18 — making Goole
              an efficient midpoint anchor for programmes that span the M62 corridor
              east–west and the M18/A1(M) corridor north–south.
            </p>
            <p>
              For sign companies and print management firms with installation requirements
              in the East Riding and Humber corridor, Goole DN14 is often a viable
              delivery anchor — the same day that covers Goole can naturally extend to
              Howden east, Selby west, or both. We are experienced at programming full-day
              East Riding routes from our South Yorkshire base, with Goole regularly
              appearing as part of Selby + Goole + Howden corridor days.
            </p>
          </div>
        </div>
      </section>

      {/* What we install */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-2xl font-semibold text-foreground md:text-3xl">
            Vinyl installation work we cover in Goole
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Window graphics</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Cut-vinyl and printed window graphics for Goole town-centre retailers,
                professional services offices and hospitality venues. Seasonal
                promotions, permanent branding and frosted/etched-effect window film.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Shop front and fascia vinyls</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Fascia lettering, logo graphics, safety manifestation and decorative
                vinyl for Goole retail and commercial premises — applied cleanly,
                documented and signed off.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Wall graphics and wraps</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Interior wall graphics, printed wall wraps, frosted and decorative
                privacy film, and wayfinding vinyl for commercial, retail and
                hospitality venues across the Goole DN14 area.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Floor graphics</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Anti-slip-laminated floor graphics for Goole retail and commercial
                premises — branded floor vinyls, directional wayfinding and
                promotional floor graphics installed to specification.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Port and logistics graphics</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Health and safety vinyls, directional signage film, warehouse bay
                markings and commercial graphics for port-adjacent businesses —
                specifically relevant given the Port of Goole&apos;s significant
                commercial estate on the eastern fringe of Goole DN14.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Hoarding graphics</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Printed hoarding vinyl installation for construction and development
                sites across Goole and the wider DN14 area — including temporary
                hoarding systems for town-centre and port-adjacent development projects.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* White label */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            White-label installation in Goole — how it works
          </h2>
          <div className="space-y-6 text-muted leading-relaxed">
            <p>
              All Goole and DN14 zone work is available white-label. We arrive at the
              Goole site in plain or unbranded vehicles, work under your company name
              throughout, and provide full photographic documentation — site arrival,
              installation progress and completion sign-off — in the format your project
              manager or account team requires.
            </p>
            <p>
              For sign companies and print management firms sending work to Goole from
              further afield — Leeds, Sheffield, Hull or beyond — we function as your
              local installation team. We accept the delivery direct, attend site on your
              programme schedule, and report completion back to you with the photos and
              notes your end client expects from your company. The end client in Goole
              sees your brand throughout.
            </p>
            <p>
              We&apos;re straightforward to work with: clear communication before the
              install, accurate time-on-site reporting, and no surprises on the invoice.
              For regular Goole or Humber corridor accounts, we build a working
              relationship with your account team rather than treating each job in
              isolation.
            </p>
          </div>
        </div>
      </section>

      {/* Goole market context */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Goole and the DN14 market — context
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              Goole is a port town in the East Riding of Yorkshire with a population of
              approximately 20,000 — one of the UK&apos;s most significant inland ports, the
              Port of Goole handles around three million tonnes of cargo per year. The
              port&apos;s commercial estate on the eastern fringe of Goole DN14 includes
              warehousing, logistics and light manufacturing operations — a different
              commercial mix from a typical Yorkshire market town, with graphic installation
              requirements biased toward warehouse directional vinyls, H&amp;S compliance film,
              and branded fleet-adjacent graphics rather than purely retail window vinyls.
            </p>
            <p>
              Goole town centre on Boothferry Road and the surrounding streets has the
              standard independent retail, hospitality and professional services mix of
              a mid-size East Riding market town — estate agents, independent retailers,
              pubs and cafes. The M62 junction 36 position attracts distribution and
              logistics occupiers to the business park fringe, increasing the commercial
              volume beyond what the town&apos;s population alone would suggest.
            </p>
            <p>
              Howden DN14 — approximately 9 miles east on the A614 — is a distinctive
              small market town with a higher-than-average concentration of independent
              retailers and professional services for its size, generating consistent
              window and fascia graphics installation requirements. Snaith DN14, approximately
              6 miles west-south-west of Goole on the A645, is another small East Riding
              market town that can be combined on a Goole-anchored day. These are markets
              that rarely see dedicated local installer coverage — WRPX serving them from
              the Goole base provides consistent access that many sign companies lack.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-3xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Goole subcontract installation — common questions
          </h2>
          <FaqAccordion items={faqItems} />
        </div>
      </section>

      {/* Nearby zones */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Nearby zones — combine with Goole on the same programme
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {nearbyPages.map(({ href, label, desc }) => (
              <Link
                key={href}
                href={href}
                className="card-float p-5 hover:border-accent/60 transition-colors"
              >
                <h3 className="font-semibold text-foreground">{label}</h3>
                <p className="mt-1 text-sm text-muted">{desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-20">
        <div className="container mx-auto max-w-3xl">
          <div className="card-float border-2 border-accent/40 p-10 text-center md:p-12">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              Need vinyl installation in Goole or the Humber corridor?
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              We cover Goole, Howden, Selby and the wider DN14 and East Riding zone
              from South Yorkshire — approximately 40 to 50 minutes via the M18 and M62.
              Tell us the site, the work and your timeline and we&apos;ll confirm coverage
              and availability.
            </p>
            <Link href="/contact/" className="btn-primary mt-8 inline-block">
              Discuss a Goole Installation →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
