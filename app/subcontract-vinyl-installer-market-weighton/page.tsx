import type { Metadata } from "next";
import Link from "next/link";
import { FaqAccordion } from "@/components/FaqAccordion";
import { getServiceSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Subcontract Vinyl Installer Market Weighton — Sign & Print Company Installation Partner | WRPX",
  description:
    "Subcontract vinyl installation across Market Weighton and the East Riding A1079 corridor for sign companies, print houses and fit-out contractors. WRPX covers Market Weighton YO43, the A1079 York–Beverley axis and surrounding East Yorkshire market towns. Naturally combined with Pocklington (9 miles west), Beverley (12 miles east) or Driffield (14 miles north) on the same programme.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/subcontract-vinyl-installer-market-weighton/",
  },
};

const serviceSchema = getServiceSchema(
  "Subcontract vinyl installer Market Weighton — sign company and print house installation partner",
  "Professional subcontract vinyl installation for sign companies, print management firms and fit-out contractors across Market Weighton and the East Riding A1079 corridor. White-label available. WRPX covers Market Weighton town centre YO43, the A1079 York–Beverley axis, Holme-on-Spalding-Moor YO43 and surrounding East Yorkshire villages. Naturally combined with Pocklington YO42, Beverley HU17 or Driffield YO25 on the same programme."
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
      name: "Subcontract Installer Market Weighton",
      item: "https://www.wrpx.co.uk/subcontract-vinyl-installer-market-weighton/",
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How far is WRPX from Market Weighton?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Market Weighton YO43 is approximately 55 to 65 minutes from our South Yorkshire base. The most direct route is the M1 north to junction 37 (Barnsley) then the M18 east to junction 1 at Rotherham, then the M18 north to junction 6 at Goole DN14, then the A614 north through Howden to the B1230 and A1079 east to Market Weighton — approximately 55 miles. Alternatively, the M1 north to junction 39 (Wakefield south) then the M62 east to junction 37 (Howden), A614 north through Howden and then A1079 east is a very similar run. From the South Yorkshire base, Market Weighton sits in the East Riding corridor beyond Howden and Pocklington — accessible via two clean motorway-A-road combinations without complex junctions.",
      },
    },
    {
      "@type": "Question",
      name: "Do you work white-label in Market Weighton?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — white-label is standard on all Market Weighton and East Riding A1079 corridor work. We arrive in unbranded vehicles, carry out every installation under your brand and provide full photographic documentation — before, during and completed sign-off — in your agreed format on the day. No WRPX branding appears on site, on vehicles or on any documentation. For sign companies and print houses managing East Riding clients, we operate as a fully invisible extension of your delivery team.",
      },
    },
    {
      "@type": "Question",
      name: "Can you combine Market Weighton with Pocklington, Beverley or Driffield on the same programme?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — Market Weighton is very efficiently placed for combined East Riding corridor programmes. Pocklington YO42 is approximately 9 miles west via the A1079 — under 15 minutes. Beverley HU17 is approximately 12 miles east via the A1079 and A164 — around 20 minutes. Driffield YO25 is approximately 14 miles north via the A614 through Market Weighton — approximately 20 to 25 minutes. A Market Weighton-anchored programme covering Pocklington (west), Market Weighton (centre) and Beverley (east) connects three separate East Yorkshire towns across approximately 21 miles of the A1079 corridor in a single co-ordinated day from South Yorkshire. Adding Driffield to the north via the A614 extends this to a four-town programme. Holme-on-Spalding-Moor YO43 is 5 miles north-west of Market Weighton via the A1079 and is within the same day zone without meaningful additional time.",
      },
    },
    {
      "@type": "Question",
      name: "What types of vinyl installation do you cover in Market Weighton?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Window graphics, frosted and decorative window film, wall wraps, floor graphics, shop front and fascia vinyls, wayfinding vinyls, hoarding graphics, interior graphics and hospitality venue graphics. Market Weighton town centre — primarily the High Street YO43 and the surrounding central streets — carries independent retailers, agricultural merchants, local food and drink premises and professional services businesses with consistent window graphics and fascia vinyl requirements. The wider East Riding rural area around Market Weighton — Sancton YO43, North Newbald YO43, Londesborough YO43, Brough HU15 (11 miles south-east via A1034) and the farmsteads and rural estates of the Wolds — produces agricultural, estate and rural business graphics work within practical reach on the same day as Market Weighton town.",
      },
    },
    {
      "@type": "Question",
      name: "Where does Market Weighton sit on the East Riding subcontract map?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Market Weighton YO43 is a small East Yorkshire market town at the junction of the A1079 York–Beverley corridor and the A614 north–south axis through Howden and Goole to Driffield. It functions as a natural mid-corridor staging point for East Riding day programmes running between Pocklington (A1079 west), Beverley and Hull (A1079/A164 east), and the Driffield/Bridlington coast corridor (A614 north). For sign companies servicing clients across East Yorkshire, including the agricultural belt, Brough HU15, the A1079 market towns and the larger centres of Beverley and Hull, Market Weighton works efficiently as a standalone stop or as the pivot point of a multi-town East Riding day run.",
      },
    },
  ],
};

const faqItems = faqSchema.mainEntity.map((item) => ({
  q: item.name,
  a: item.acceptedAnswer.text,
}));

export default function SubcontractVinylInstallerMarketWeightonPage() {
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
            <span className="text-foreground">Market Weighton</span>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="border-b border-border bg-card py-16 md:py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <p className="text-sm font-medium uppercase tracking-wide text-accent">
            Subcontract Vinyl Installation · Market Weighton YO43
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Subcontract vinyl installer — Market Weighton
          </h1>
          <p className="mt-5 text-lg text-muted leading-relaxed">
            WRPX provides white-label subcontract vinyl installation for sign companies,
            print houses and fit-out contractors across Market Weighton and the East Riding
            A1079 corridor. We cover Market Weighton town centre YO43, Holme-on-Spalding-Moor
            YO43 and the surrounding East Yorkshire area — and combine naturally with
            Pocklington (9 miles west), Beverley (12 miles east) and Driffield (14 miles north)
            on the same day programme.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact/" className="btn-primary">
              Discuss a Market Weighton Job →
            </Link>
            <Link href="/subcontract-vinyl-installation-yorkshire/" className="btn-secondary">
              Yorkshire Subcontract Overview
            </Link>
          </div>
        </div>
      </section>

      {/* Geography and access */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Market Weighton — location and corridor access
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              Market Weighton YO43 sits at the intersection of the A1079 York–Beverley
              corridor and the A614 north–south axis, approximately 12 miles east of
              York and 12 miles west of Beverley. The town is a small East Yorkshire
              market town serving the agricultural Wolds hinterland and the settlements
              along the A1079 axis — including Sancton YO43, North Newbald YO43 and
              Londesborough YO43 to the north.
            </p>
            <p>
              From South Yorkshire, the most practical route is via the M1 north to
              junction 37 or 38, then east on the M18 to junction 6 (Goole DN14),
              then north on the A614 through Howden and Holme-on-Spalding-Moor to
              Market Weighton — approximately 55 miles and 55 to 65 minutes from
              the WRPX base. The M62 east from Wakefield to junction 37 at Howden
              provides an equivalent approach from the west.
            </p>
            <p>
              Market Weighton is a natural mid-corridor staging point on the A1079
              between York and Hull. Pocklington YO42 — approximately 9 miles west
              via the A1079 — has its own commercial and agricultural market with
              established sign company clients. Beverley HU17 — 12 miles east on
              the A1079/A164 — is the principal East Riding market town with a large
              and active commercial and hospitality base. Driffield YO25 — 14 miles
              north via the A614 — anchors the Driffield–Bridlington agricultural
              and coast corridor.
            </p>
            <p>
              Holme-on-Spalding-Moor YO43 is 5 miles north-west of Market Weighton
              on the A1079 and falls within the same day zone. Brough HU15 — 11 miles
              south-east via the A1034 — is an East Riding commercial centre with
              logistics and industrial premises on the Humber bank, also reachable
              from a Market Weighton base without meaningful additional time on a
              multi-stop East Riding programme.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-2xl font-semibold text-foreground md:text-3xl">
            Vinyl installation services across Market Weighton
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Window graphics</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Printed and cut-vinyl window graphics for retail, hospitality and
                professional services units on Market Weighton High Street and
                surrounding central streets. Installation to your sign company&apos;s
                spec and sign-off format.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Frosted and privacy film</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Frosted film, etched-effect vinyl and one-way mirror film for
                professional services, offices and commercial premises across
                Market Weighton and the A1079 corridor.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Fascia and shop front vinyls</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Vinyl graphics to sign trays, flat fascia panels and external
                surfaces for businesses in Market Weighton town centre.
                Unbranded vehicles, full documentation.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Wall wraps and interior graphics</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Interior wall graphics, feature walls, wayfinding vinyl and branded
                wall wraps for commercial premises, agricultural businesses and
                rural estates across the YO43 corridor.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Floor graphics</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Slip-rated floor graphics for retail, agricultural and commercial
                premises — directional arrows, safety vinyls and branded floor
                graphics on smooth and textured substrates.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Hoarding graphics</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Vinyl graphics to construction hoardings and temporary hoarding
                systems for development sites and retail fit-out hoardings across
                the East Riding A1079 corridor.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* White label */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            White-label installation for sign companies and print houses
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              WRPX operates as a fully invisible extension of your team on every
              Market Weighton job. Unbranded vehicles arrive on site. Installers
              carry no WRPX identification. All communication before, during and after
              the job uses your job reference format and documentation template.
              Photographic sign-off — before, during and completed — is delivered
              in your format on the day.
            </p>
            <p>
              For sign companies managing clients across the East Riding A1079 corridor,
              WRPX provides the installation capacity and geographic coverage to take on
              Market Weighton, Pocklington, Beverley and the surrounding East Yorkshire
              market towns without the overhead of maintaining your own installation team
              in the East Riding. Multi-stop A1079 corridor programmes are co-ordinated
              as a single operation from South Yorkshire, with consistent delivery
              standards across every stop.
            </p>
          </div>
        </div>
      </section>

      {/* Nearby locations */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Nearby locations we combine with Market Weighton
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <Link
              href="/subcontract-vinyl-installer-pocklington/"
              className="card-float p-5 hover:border-accent/50 transition-colors"
            >
              <p className="font-semibold text-foreground">Pocklington YO42</p>
              <p className="mt-1 text-sm text-muted">9 miles west via A1079 — 15 minutes</p>
            </Link>
            <Link
              href="/subcontract-vinyl-installer-beverley/"
              className="card-float p-5 hover:border-accent/50 transition-colors"
            >
              <p className="font-semibold text-foreground">Beverley HU17</p>
              <p className="mt-1 text-sm text-muted">12 miles east via A1079/A164 — 20 minutes</p>
            </Link>
            <Link
              href="/subcontract-vinyl-installer-driffield/"
              className="card-float p-5 hover:border-accent/50 transition-colors"
            >
              <p className="font-semibold text-foreground">Driffield YO25</p>
              <p className="mt-1 text-sm text-muted">14 miles north via A614 — 20 minutes</p>
            </Link>
            <Link
              href="/subcontract-vinyl-installer-howden/"
              className="card-float p-5 hover:border-accent/50 transition-colors"
            >
              <p className="font-semibold text-foreground">Howden DN14</p>
              <p className="mt-1 text-sm text-muted">12 miles south via A614 — 18 minutes</p>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-3xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Market Weighton subcontract installation — common questions
          </h2>
          <FaqAccordion items={faqItems} />
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-card px-4 py-20">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
            Job in Market Weighton or the East Riding A1079 corridor?
          </h2>
          <p className="mt-4 text-muted leading-relaxed">
            Tell us the site, the scope — window graphics, wall wrap, floor graphics,
            frosted film — and whether it&apos;s a standalone Market Weighton job or part
            of a wider East Riding corridor programme. We&apos;ll come back with a price and
            a mobilisation date.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link href="/contact/" className="btn-primary">
              Discuss This Job →
            </Link>
            <Link href="/subcontract-vinyl-installation-yorkshire/" className="btn-secondary">
              Full Yorkshire Coverage
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
