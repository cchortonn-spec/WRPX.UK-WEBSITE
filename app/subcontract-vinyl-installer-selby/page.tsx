import type { Metadata } from "next";
import Link from "next/link";
import { FaqAccordion } from "@/components/FaqAccordion";
import { getServiceSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Subcontract Vinyl Installer Selby — Sign & Print Company Installation Partner | WRPX",
  description:
    "Subcontract vinyl installation across Selby and the YO8 North Yorkshire zone for sign companies, print houses and fit-out contractors. WRPX covers Selby town centre, the A19 and A63 corridors, and the wider lower Ouse Valley commercial market. Naturally combined with York (14 miles north) or Goole and Hull (east via A63) on the same programme.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/subcontract-vinyl-installer-selby/",
  },
};

const serviceSchema = getServiceSchema(
  "Subcontract vinyl installer Selby — sign company and print house installation partner",
  "Professional subcontract vinyl installation for sign companies, print management firms and fit-out contractors across Selby and the YO8 North Yorkshire zone. White-label available. WRPX covers Selby town centre YO8, the A19 York–Selby corridor, the A63 east toward Goole and Hull, and the wider lower Ouse Valley commercial market."
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
      name: "Subcontract Installer Selby",
      item: "https://www.wrpx.co.uk/subcontract-vinyl-installer-selby/",
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How far is WRPX from Selby?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Selby is approximately 45 minutes from our South Yorkshire base. The most direct route is the A1(M) north to junction 42 at Garforth, then the A63 east through Selby — or alternatively the A1(M) north to junction 34 at Ferrybridge, then east on the A63 directly into Selby. From either approach, the A63 corridor through the Selby district is a fast and well-signposted route. Selby town centre YO8 is approximately 14 miles south of York and 11 miles north-west of Goole, making it an excellent anchor for combined A19 or A63 corridor programmes.",
      },
    },
    {
      "@type": "Question",
      name: "Do you work white-label in Selby?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — white-label is standard on all Selby and YO8 zone work. We arrive in unbranded vehicles, carry out every installation under your brand and provide full photographic documentation — before, during and completed sign-off — in your agreed format on the day. No WRPX branding appears on site, on vehicles or on any documentation.",
      },
    },
    {
      "@type": "Question",
      name: "Can you combine Selby with York or Goole on the same programme?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — Selby is ideally positioned for combined corridor programmes. York YO1 is approximately 14 miles north via the A19 — under 25 minutes. Goole DN14 is approximately 11 miles east via the A63 — approximately 18 minutes. A Selby-anchored programme covering York (A19 north), Selby town centre, and Goole or Howden on the A63 east is one of the most efficient lower-Ouse Valley day programmes we can run from South Yorkshire. Tadcaster LS24 is approximately 10 miles north-west via the A63 and B1223 — also combinable on a Selby-centred programme.",
      },
    },
    {
      "@type": "Question",
      name: "What types of vinyl installation do you cover in Selby?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Window graphics, frosted and decorative window film, wall wraps, floor graphics, shop front and fascia vinyls, wayfinding vinyls, hoarding graphics, interior graphics and hospitality venue graphics. Selby town centre has a mix of independent retailers, national chains, professional services and hospitality businesses with consistent window graphics, fascia vinyl and interior signage installation requirements. The Selby district also has a substantial agricultural, food processing and logistics sector — facilities management, warehousing, distribution and food production sites in the Selby Coalfield regeneration zone generate commercial graphics and wayfinding installation requirements.",
      },
    },
    {
      "@type": "Question",
      name: "Do you cover the A19 corridor and the Selby Coalfield regeneration zone?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. The A19 corridor running north from Selby to York — passing through Escrick, Crockey Hill and Naburn — is a route we cover as part of the wider North Yorkshire programme. The Selby Coalfield regeneration zone — the former Selby Coalfield sites across the Selby district, now predominantly industrial, logistics and food production occupiers — is accessible from the town centre and the A19/A63 corridor and can be included in a Selby programme alongside town-centre retail and commercial installations.",
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
    desc: "North Yorkshire city — 14 miles north via A19",
  },
  {
    href: "/subcontract-vinyl-installer-wetherby/",
    label: "Wetherby LS22",
    desc: "West Yorkshire — 15 miles north-west via A63 and A1",
  },
  {
    href: "/subcontract-vinyl-installer-wakefield/",
    label: "Wakefield WF1",
    desc: "West Yorkshire — 16 miles south-west via M62 and A1",
  },
  {
    href: "/subcontract-vinyl-installer-beverley/",
    label: "Beverley HU17",
    desc: "East Riding — A63 east to M62, then north on A164",
  },
];

export default function SubcontractVinylInstallerSelbyPage() {
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
            <span className="text-foreground">Selby</span>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="border-b border-border bg-card py-16 md:py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <p className="text-sm font-medium uppercase tracking-wide text-accent">
            Subcontract Vinyl Installation · Selby &amp; Lower Ouse Valley YO8
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Subcontract vinyl installer — Selby
          </h1>
          <p className="mt-5 text-lg text-muted leading-relaxed">
            WRPX provides subcontract vinyl installation for sign companies, print houses
            and fit-out contractors across Selby and the YO8 North Yorkshire zone.
            White-label, fully documented, reported back to you. Selby is approximately
            45 minutes from our South Yorkshire base via the A1(M) and A63 — naturally
            combined with York (14 miles north on the A19) or Goole and the East Riding
            (east on the A63) on the same programme.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact/" className="btn-primary">
              Discuss a Selby Installation →
            </Link>
            <Link href="/subcontract-vinyl-installation-yorkshire/" className="btn-secondary">
              Yorkshire Subcontract Hub
            </Link>
          </div>
        </div>
      </section>

      {/* Selby market context */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Selby and the lower Ouse Valley — the commercial market
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              Selby is North Yorkshire&apos;s principal market town south of York —
              a district centre with a mix of independent retailers, national chains,
              professional services and hospitality businesses, set in an area
              undergoing sustained economic transition following the closure of the
              Selby Coalfield. The town has a well-established commercial core
              centred on Micklegate, Market Place and the pedestrianised Gowthorpe
              shopping street, generating consistent window graphics, fascia vinyl
              and interior signage installation requirements.
            </p>
            <p>
              The wider Selby district encompasses a significant and growing logistics,
              food production and light industrial sector. The former Selby Coalfield
              sites — particularly the land around Selby, Sherburn-in-Elmet LS25
              and Hambleton YO8 — have attracted substantial warehousing, distribution
              and food processing occupiers. These facilities generate commercial
              graphics, wayfinding vinyl, health and safety signage and facilities
              management installation requirements that differ from traditional retail
              and commercial sign work but are consistent and recurring in nature.
            </p>
            <p>
              Selby&apos;s position on the A19 and A63 corridors gives it a commercial
              catchment that extends well beyond the town boundary. The A19 north
              toward York passes through a string of villages — Escrick, Crockey Hill,
              Naburn — with commercial and hospitality premises requiring installation
              support. The A63 east toward Goole and west toward the M62 and M1
              connects Selby to the Humber commercial corridor in one direction and
              to the broader West and South Yorkshire market in the other.
            </p>
            <p>
              WRPX has built out its North and East Yorkshire subcontract coverage
              progressively — York, Beverley, Driffield, Bridlington, Scarborough and
              Whitby are all now on our programme map. Selby fills the gap south of
              York on the A19 corridor and creates a natural stepping-stone between
              the West Yorkshire M62 market and the York and East Riding zones.
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
              From our South Yorkshire base, Selby is most efficiently reached via
              the A1(M) north to junction 34 (Ferrybridge), then east on the A63
              directly into Selby — approximately 45 minutes in normal conditions.
              An alternative route via junction 42 at Garforth is slightly longer but
              avoids the Ferrybridge interchange entirely and is the better option when
              the A1(M)/M62 interchange is congested.
            </p>
            <p>
              <strong className="text-foreground">Selby + York (A19 programme).</strong>{" "}
              York YO1 is 14 miles north of Selby via the A19 — approximately 20 to
              25 minutes. A Selby morning and York afternoon programme is a clean and
              efficient pairing, covering the district market town and the much larger
              historic city centre in the same day. Alternatively, York first and Selby
              on the return south gives maximum flexibility in both cities.
            </p>
            <p>
              <strong className="text-foreground">Selby + Goole (A63 east programme).</strong>{" "}
              Goole DN14 is approximately 11 miles east of Selby via the A63 — under
              20 minutes. The A63 east corridor through the Selby and Howdenshire
              districts is a fast and direct route connecting the lower Ouse Valley
              to the Humber commercial market. Howden DN14 is on the same A63 corridor,
              approximately 15 miles east of Selby.
            </p>
            <p>
              <strong className="text-foreground">Selby + Tadcaster + Wetherby (A1 west programme).</strong>{" "}
              Tadcaster LS24 is approximately 10 miles north-west of Selby via the
              A63 and B1223 — a smaller but commercially active market town with a
              distinctive hospitality and food production sector (the Tadcaster
              brewing and food village economy). Wetherby LS22 is a further 8 miles
              north-west — a well-established A1 market town with a strong commercial
              and professional services sector.
            </p>
          </div>
        </div>
      </section>

      {/* What we install */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-2xl font-semibold text-foreground md:text-3xl">
            What we install in Selby and the YO8 zone
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="card-float p-6">
              <h3 className="font-semibold text-foreground">Shop front and fascia vinyl</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Cut and printed vinyl on Selby town-centre shopfronts, fascia boards
                and stallrisers — independent retailers, national chains and
                professional services on Gowthorpe, Market Place and Micklegate.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="font-semibold text-foreground">Window graphics and frosted film</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Cut-vinyl window graphics, frosted privacy film and decorative window
                vinyl for Selby commercial premises — retail, hospitality, professional
                services and the growing logistics and food production sector in the
                wider YO8 district.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="font-semibold text-foreground">Wall graphics and interior vinyl</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Wall wraps, wayfinding vinyls and interior graphics for Selby offices,
                professional services, hospitality venues and the logistics and
                industrial facilities in the Selby Coalfield regeneration zone.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="font-semibold text-foreground">Warehouse and logistics graphics</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Health and safety vinyl, floor graphics, wayfinding and directional
                signage for the warehousing, distribution and food production facilities
                in the Selby district — a specialist and growing sector of the local
                installation market.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="font-semibold text-foreground">Hoarding and temporary graphics</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Hoarding graphics for construction sites in the Selby regeneration
                and development zone — temporary branding panels, site identification
                graphics and construction hoarding vinyl for contractors and developers
                working across the Selby district.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="font-semibold text-foreground">Hospitality and venue graphics</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Window vinyl, interior wall graphics and wayfinding for Selby pubs,
                restaurants and hospitality venues — including the town-centre
                hospitality market and the rural pub and hotel sector in the
                surrounding Selby district villages.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How we work */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            How we work with sign and print companies in Selby
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
              Selby sits at the junction of two major corridors — the A19 north to
              York and the A63 east toward Goole and the Humber. We can anchor a
              day around Selby and add stops in either direction efficiently — tell
              us what&apos;s on the programme and we&apos;ll work out the most
              efficient route.
            </p>
            <p>
              <strong className="text-foreground">Industrial and logistics capability.</strong>{" "}
              The Selby district&apos;s growing logistics and food production sector
              requires a different approach to retail sign work — larger spaces,
              more complex wayfinding layouts, health and safety compliance vinyl.
              We have the capability and the experience to work in these environments
              alongside the standard retail and commercial install programme.
            </p>
            <p>
              <strong className="text-foreground">Transparent mobilisation model.</strong>{" "}
              Day rates for Selby and the A19/A63 corridor are clear before we start.
              We build the route costs into the quote upfront so you can price your
              Selby client correctly.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-3xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Selby subcontract installation — common questions
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
              Got an installation in Selby or the lower Ouse Valley?
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Tell us the location, job type and timescale — we&apos;ll come back
              with a day rate and a route plan. Selby combines naturally with York
              on the A19 north and Goole and the East Riding east on the A63.
            </p>
            <Link href="/contact/" className="btn-primary mt-8 inline-block">
              Discuss a Selby Installation →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
