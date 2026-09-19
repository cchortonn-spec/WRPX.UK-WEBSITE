import type { Metadata } from "next";
import Link from "next/link";
import { FaqAccordion } from "@/components/FaqAccordion";
import { getServiceSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Subcontract Vinyl Installer Pocklington — Sign & Print Company Installation Partner | WRPX",
  description:
    "Subcontract vinyl installation across Pocklington and the YO42 East Riding zone for sign companies, print houses and fit-out contractors. WRPX covers Pocklington market town, the A1079 York–Beverley corridor, and the wider East Riding rural market. Naturally combined with York (14 miles west) or Beverley (15 miles east) on the same programme.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/subcontract-vinyl-installer-pocklington/",
  },
};

const serviceSchema = getServiceSchema(
  "Subcontract vinyl installer Pocklington — sign company and print house installation partner",
  "Professional subcontract vinyl installation for sign companies, print management firms and fit-out contractors across Pocklington and the YO42 East Riding zone. White-label available. WRPX covers Pocklington town centre YO42, the A1079 York–Beverley corridor, Market Weighton YO43, and the wider East Riding rural commercial market."
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
      name: "Subcontract Installer Pocklington",
      item: "https://www.wrpx.co.uk/subcontract-vinyl-installer-pocklington/",
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How far is WRPX from Pocklington?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Pocklington is approximately 55 to 65 minutes from our South Yorkshire base. The most direct route is the M18 north to the M62 east, then north on the A63 toward Market Weighton and east to Pocklington via the A1079 — or alternatively the A1(M) north to Wetherby, then east on the A64 to York and the A1079 east from York to Pocklington. The A1079 corridor connects Pocklington directly to York (14 miles west) and to Beverley and Hull to the east via the B1246 and A164.",
      },
    },
    {
      "@type": "Question",
      name: "Do you work white-label in Pocklington?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — white-label is standard on all Pocklington and YO42 zone work. We arrive in unbranded vehicles, carry out every installation under your brand and provide full photographic documentation — before, during and completed sign-off — in your agreed format on the day. No WRPX branding appears on site, on vehicles or on any documentation.",
      },
    },
    {
      "@type": "Question",
      name: "Can you combine Pocklington with York or Beverley on the same programme?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — Pocklington is ideally positioned as the midpoint anchor on the A1079 York–Beverley corridor. York YO1 is approximately 14 miles west via the A1079 — under 25 minutes. Beverley HU17 is approximately 15 miles east via the B1246 and A164 — approximately 25 minutes. A Pocklington-centred programme covering York (west), Pocklington town (centre) and Beverley (east) is one of the cleanest corridor day programmes we can run from South Yorkshire — three distinct markets on a single east–west route. Market Weighton YO43 is approximately 7 miles west of Pocklington on the A1079 — also easily combined on the same day.",
      },
    },
    {
      "@type": "Question",
      name: "What types of vinyl installation do you cover in Pocklington?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Window graphics, frosted and decorative window film, wall wraps, floor graphics, shop front and fascia vinyls, wayfinding vinyls, hoarding graphics, interior graphics and hospitality venue graphics. Pocklington town centre has a mix of independent retailers, professional services, estate agents and hospitality businesses on the Market Place and surrounding streets — with consistent window graphics, fascia vinyl and interior signage installation requirements. The wider Pocklington area has a significant agricultural machinery, food production and rural estate economy — farms, agri-businesses and rural estates generate periodic commercial graphics and signage requirements that differ from standard retail work.",
      },
    },
    {
      "@type": "Question",
      name: "Do you cover the A1079 corridor and the Market Weighton area?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. The full A1079 corridor — running west from Beverley and Hull through Market Weighton, Pocklington and on to York — is a route we cover as part of the wider East Riding programme. Market Weighton YO43, the small market town on the A1079 approximately 7 miles west of Pocklington, is a natural stop on the same day. The B1246 south toward Driffield and the A614 link the Pocklington area to the Driffield YO25 market, which we also cover — meaning the full East Riding corridor from York to Driffield and Beverley can be covered on a single-day programme anchored from Pocklington.",
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
    href: "/subcontract-vinyl-installer-york/",
    label: "York YO1",
    desc: "North Yorkshire city — 14 miles west via A1079",
  },
  {
    href: "/subcontract-vinyl-installer-beverley/",
    label: "Beverley HU17",
    desc: "East Riding market town — 15 miles east via B1246 and A164",
  },
  {
    href: "/subcontract-vinyl-installer-driffield/",
    label: "Driffield YO25",
    desc: "East Riding market town — south via B1246 and A164",
  },
  {
    href: "/subcontract-vinyl-installer-selby/",
    label: "Selby YO8",
    desc: "Lower Ouse Valley — A63 west then A1(M) south",
  },
];

export default function SubcontractVinylInstallerPocklingtonPage() {
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
            <span className="text-foreground">Pocklington</span>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="border-b border-border bg-card py-16 md:py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <p className="text-sm font-medium uppercase tracking-wide text-accent">
            Subcontract Vinyl Installation · Pocklington &amp; A1079 Corridor YO42
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Subcontract vinyl installer — Pocklington
          </h1>
          <p className="mt-5 text-lg text-muted leading-relaxed">
            WRPX provides subcontract vinyl installation for sign companies, print houses
            and fit-out contractors across Pocklington and the YO42 East Riding zone.
            White-label, fully documented, reported back to you. Pocklington is approximately
            55 to 65 minutes from our South Yorkshire base — positioned at the midpoint of
            the A1079 York–Beverley corridor, making it a natural anchor for combined
            East Riding day programmes.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact/" className="btn-primary">
              Discuss a Pocklington Installation →
            </Link>
            <Link href="/subcontract-vinyl-installation-yorkshire/" className="btn-secondary">
              Yorkshire Subcontract Hub
            </Link>
          </div>
        </div>
      </section>

      {/* Pocklington market context */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Pocklington and the A1079 corridor — the commercial market
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              Pocklington is East Riding of Yorkshire&apos;s most commercially active
              inland market town between York and Beverley. The town has a well-established
              commercial core centred on the Market Place and the surrounding streets —
              a mix of independent retailers, estate agents, professional services,
              hospitality businesses and local services that generate consistent window
              graphics, fascia vinyl and interior signage installation requirements.
              Pocklington&apos;s market town character and the relative scarcity of
              national retail chains means independent operators dominate the commercial
              strip — a profile that generates more frequent, smaller-scale graphics
              and signage update work than a high-street dominated by national multiples.
            </p>
            <p>
              The wider Pocklington area has a distinctive and significant agricultural
              economy. East Riding has one of the largest farming sectors in England,
              and the Pocklington district — on the edge of the Yorkshire Wolds and
              the Vale of York — is home to arable farming enterprises, agricultural
              machinery dealers, grain merchants and agri-service businesses. These
              operations generate periodic graphics requirements: equipment dealership
              signage, depot and warehouse vinyl, fleet graphics for agricultural
              vehicles, and wayfinding for larger farm and agri-business sites.
              This sector work is consistent and less seasonal than retail, and
              rarely attracts competition from regional sign companies not already
              active in the East Riding rural market.
            </p>
            <p>
              Pocklington also has a growing residential and hospitality sector driven
              by its position as a desirable East Riding market town — characterful
              independent pubs, restaurants and cafés on and around the Market Place
              that generate hospitality venue graphics work. The airfield on the north
              side of the town — Pocklington Airfield, home to gliding clubs and light
              aviation — represents an unusual but genuine niche installation sector
              for specialist aviation graphics and club signage.
            </p>
            <p>
              WRPX has progressively built East Riding coverage from York and Beverley
              through Driffield, Bridlington, Scarborough and Whitby northward and
              Selby and Goole southward and westward. Pocklington fills the gap at
              the centre of the A1079 corridor — the key east–west route connecting
              York to Beverley and Hull across the East Riding interior.
            </p>
          </div>
        </div>
      </section>

      {/* Route and programme */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Route and programme options from South Yorkshire
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              From our South Yorkshire base, Pocklington is most efficiently reached
              via the M18 north to the M62 east, then north on the A63 toward Hull —
              leaving the A63 at Market Weighton or Beverley direction and heading
              east on the A1079 into Pocklington. Alternatively, the A1(M) north to
              junction 44 at York, then east on the A1079 from York to Pocklington
              — approximately 14 miles from York city centre. Total journey time
              from South Yorkshire is 55 to 65 minutes in normal conditions on
              either route.
            </p>
            <p>
              <strong className="text-foreground">Pocklington + York (A1079 west programme).</strong>{" "}
              York YO1 is 14 miles west of Pocklington via the A1079 — approximately
              20 to 25 minutes. A York morning and Pocklington afternoon pairing —
              or Pocklington first and York on the return — is a clean and efficient
              combination. York is a substantially larger market with a much denser
              retail and commercial core, while Pocklington offers the market-town
              independent commercial sector and the agricultural business niche.
            </p>
            <p>
              <strong className="text-foreground">Pocklington + Beverley (A1079/B1246 east programme).</strong>{" "}
              Beverley HU17 is approximately 15 miles east of Pocklington via the
              B1246 south to Market Weighton and then east on the A164, or via
              the A1079 east and A164 north — approximately 25 minutes. A
              Pocklington and Beverley day combination covers two distinct East Riding
              markets with a straightforward east–west corridor logic.
            </p>
            <p>
              <strong className="text-foreground">Pocklington + Market Weighton + Driffield (wolds corridor).</strong>{" "}
              Market Weighton YO43 is approximately 7 miles west of Pocklington on
              the A1079 — under 15 minutes. Driffield YO25 is approximately 12 miles
              north of Beverley via the A164 and is a natural extension of a Pocklington
              and Beverley day programme, adding a third East Riding market to a single
              corridor run.
            </p>
          </div>
        </div>
      </section>

      {/* What we install */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-2xl font-semibold text-foreground md:text-3xl">
            What we install in Pocklington and the YO42 zone
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="card-float p-6">
              <h3 className="font-semibold text-foreground">Shop front and fascia vinyl</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Cut and printed vinyl on Pocklington town-centre shopfronts, fascia
                boards and stallrisers — independent retailers, professional services
                and local businesses on the Market Place and surrounding streets.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="font-semibold text-foreground">Window graphics and frosted film</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Cut-vinyl window graphics, frosted privacy film and decorative window
                vinyl for Pocklington commercial premises — retail, hospitality,
                professional services and the agricultural business sector in
                the wider YO42 district.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="font-semibold text-foreground">Agricultural and rural business graphics</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Equipment dealership signage, depot and warehouse vinyl, fleet graphics
                and wayfinding for the agricultural machinery, agri-services and rural
                estate businesses around Pocklington and the East Riding Wolds —
                a specialist sector with consistent and recurring requirements.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="font-semibold text-foreground">Wall graphics and interior vinyl</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Wall wraps, wayfinding vinyls and interior graphics for Pocklington
                offices, professional services, hospitality venues and the rural
                commercial and agricultural sector in the wider YO42 district.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="font-semibold text-foreground">Hospitality and venue graphics</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Window vinyl, interior wall graphics and wayfinding for Pocklington
                pubs, restaurants, cafés and hospitality venues — the Market Place
                hospitality cluster and the rural pub and hotel sector in the
                surrounding East Riding villages.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="font-semibold text-foreground">Hoarding and temporary graphics</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Hoarding graphics for development sites in Pocklington and the wider
                East Riding — the town has seen steady residential and commercial
                development on its edges, generating site identification graphics,
                hoarding branding and temporary construction signage requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How we work */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            How we work with sign and print companies in Pocklington
          </h2>
          <div className="space-y-6 text-muted leading-relaxed">
            <p>
              <strong className="text-foreground">White-label as standard.</strong>{" "}
              We arrive in unbranded vehicles, present no WRPX identity to the client
              and report back to you with photographic sign-off in your format. The
              client&apos;s relationship is entirely with your company throughout.
            </p>
            <p>
              <strong className="text-foreground">Photographic documentation.</strong>{" "}
              Before, during and after — geotagged, timestamped and sent on the day.
              You get the evidence you need to close the job and invoice confidently
              without relying on our word alone.
            </p>
            <p>
              <strong className="text-foreground">Corridor programming.</strong>{" "}
              Pocklington sits at the midpoint of the A1079 York–Beverley corridor.
              We can anchor a day in Pocklington and efficiently combine York to the
              west, Beverley to the east, or Market Weighton and Driffield on a
              wolds loop — tell us what&apos;s on the programme and we&apos;ll work
              out the most efficient route.
            </p>
            <p>
              <strong className="text-foreground">Rural and agricultural capability.</strong>{" "}
              The Pocklington area&apos;s agricultural and rural business sector
              requires familiarity with working on farm sites, machinery dealerships
              and rural depots — larger spaces, less standard environments, and often
              a different access and scheduling approach to town-centre retail work.
              We have the experience and the flexibility to work in these environments
              alongside the standard retail and commercial install programme.
            </p>
            <p>
              <strong className="text-foreground">Transparent mobilisation model.</strong>{" "}
              Day rates for Pocklington and the A1079 corridor are clear before we start.
              We build the route costs into the quote upfront so you can price your
              Pocklington client correctly.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-3xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Pocklington subcontract installation — common questions
          </h2>
          <FaqAccordion items={faqItems} />
        </div>
      </section>

      {/* Nearby pages */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Nearby locations we cover
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {nearbyPages.map(({ href, label, desc }) => (
              <Link
                key={href}
                href={href}
                className="card-float p-5 hover:border-accent/60 transition-colors"
              >
                <h3 className="font-semibold text-foreground">{label}</h3>
                <p className="mt-2 text-sm text-muted">{desc}</p>
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
              Got an installation in Pocklington or the A1079 corridor?
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Tell us the location, job type and timescale — we&apos;ll come back
              with a day rate and a route plan. Pocklington combines naturally with
              York to the west and Beverley to the east on the A1079 corridor.
            </p>
            <Link href="/contact/" className="btn-primary mt-8 inline-block">
              Discuss a Pocklington Installation →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
