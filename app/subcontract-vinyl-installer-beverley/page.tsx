import type { Metadata } from "next";
import Link from "next/link";
import { FaqAccordion } from "@/components/FaqAccordion";
import { getServiceSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Subcontract Vinyl Installer Beverley — Sign & Print Company Installation Partner | WRPX",
  description:
    "Subcontract vinyl installation across Beverley and the HU17 East Yorkshire zone for sign companies, print houses and fit-out contractors. WRPX covers Beverley town centre, the Saturday Market, the A164 and A1174 corridors, and the wider East Riding Humber market. Naturally combined with Driffield (12 miles north) or Hull (9 miles south) on the same East Yorkshire programme.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/subcontract-vinyl-installer-beverley/",
  },
};

const serviceSchema = getServiceSchema(
  "Subcontract vinyl installer Beverley — sign company and print house installation partner",
  "Professional subcontract vinyl installation for sign companies, print management firms and fit-out contractors across Beverley and the HU17 East Yorkshire zone. White-label available. WRPX covers Beverley town centre HU17, the A164 Humber–Driffield corridor, the A1174 Beverley to Hull route, and the wider East Riding market town economy."
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
      name: "Subcontract Installer Beverley",
      item: "https://www.wrpx.co.uk/subcontract-vinyl-installer-beverley/",
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How far is WRPX from Beverley?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Beverley is approximately 1 hour 20 minutes from our South Yorkshire base. The most efficient route is the A1(M) north to the M62 junction, then east on the M62 to the A164 north into Beverley HU17. The A164 runs directly from the M62 junction at Brough into Beverley — a clean and fast dual-carriageway and A-road run with no significant town-centre congestion until Beverley itself. From Beverley, the A164 continues north to Driffield YO25 (12 miles, approximately 18 minutes) and connects south to Hull HU1 via the A1174 (9 miles, approximately 15 minutes).",
      },
    },
    {
      "@type": "Question",
      name: "Do you work white-label in Beverley?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — white-label is standard on all Beverley and HU17 zone work. We arrive in unbranded vehicles, carry out every installation under your brand and provide full photographic documentation — before, during and completed sign-off — in your agreed format on the day. No WRPX branding appears on site, on vehicles or on any documentation.",
      },
    },
    {
      "@type": "Question",
      name: "Can you combine Beverley with Driffield or Hull on the same programme?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — Beverley is ideally positioned for combined East Yorkshire programmes. Driffield YO25 is approximately 12 miles north via the A164 — under 20 minutes. Hull HU1 is approximately 9 miles south via the A1174 — approximately 15 minutes. A Beverley-anchored East Yorkshire programme covering Driffield (Wolds inland), Beverley (market town) and Hull (major city) on the same day is one of the most efficient and commercially dense day programmes we can run from South Yorkshire. York YO1 is approximately 28 miles north-west via the A1079 — under 40 minutes.",
      },
    },
    {
      "@type": "Question",
      name: "What types of vinyl installation do you cover in Beverley?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Window graphics, frosted and decorative window film, wall wraps, floor graphics, shop front and fascia vinyls, wayfinding vinyls, hoarding graphics, interior graphics and hospitality venue graphics. Beverley is a prosperous East Riding market town with a diverse and premium commercial economy — the town centre around Saturday Market, Wednesday Market, the Butcher Row and Toll Gavel has a high concentration of independent retailers, estate agents, solicitors, cafés and hospitality businesses. The high street quality and tourism economy in Beverley supports consistent, higher-value sign and graphics installation requirements.",
      },
    },
    {
      "@type": "Question",
      name: "Do you cover the A164 corridor and the wider East Riding Humber market?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. The A164 corridor running north from the M62 at Brough into Beverley and on to Driffield is a route we cover as part of the wider East Riding commercial programme. The Humber corridor — Brough HU15, North Ferriby HU14, Swanland HU14, Hessle HU13 — is accessible from the same M62 approach route and can be combined with Beverley on a single East Yorkshire programme. Market Weighton YO43 on the A1079 (connecting Beverley to York) adds another stop to the same corridor.",
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
    href: "/subcontract-vinyl-installer-driffield/",
    label: "Driffield YO25",
    desc: "East Riding Wolds market town — 12 miles north via A164",
  },
  {
    href: "/subcontract-vinyl-installer-hull/",
    label: "Hull HU1",
    desc: "East Riding city — 9 miles south via A1174",
  },
  {
    href: "/subcontract-vinyl-installer-bridlington/",
    label: "Bridlington YO15",
    desc: "East Yorkshire coast — 27 miles north via A164 and A614",
  },
  {
    href: "/subcontract-vinyl-installer-york/",
    label: "York YO1",
    desc: "North Yorkshire — 28 miles north-west via A1079",
  },
];

export default function SubcontractVinylInstallerBeverleyPage() {
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
            <span className="text-foreground">Beverley</span>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="border-b border-border bg-card py-16 md:py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <p className="text-sm font-medium uppercase tracking-wide text-accent">
            Subcontract Vinyl Installation · Beverley &amp; East Riding HU17
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Subcontract vinyl installer — Beverley
          </h1>
          <p className="mt-5 text-lg text-muted leading-relaxed">
            WRPX provides subcontract vinyl installation for sign companies, print houses
            and fit-out contractors across Beverley and the HU17 East Yorkshire zone.
            White-label, fully documented, reported back to you. Beverley is 1 hour 20
            minutes from our South Yorkshire base via the M62 and A164 — naturally
            combined with Driffield (12 miles north) or Hull (9 miles south) on the
            same East Yorkshire programme.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact/" className="btn-primary">
              Discuss a Beverley Installation →
            </Link>
            <Link href="/subcontract-vinyl-installation-yorkshire/" className="btn-secondary">
              Yorkshire Subcontract Hub
            </Link>
          </div>
        </div>
      </section>

      {/* Beverley market context */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Beverley and the East Riding — the commercial market
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              Beverley is one of the most commercially active market towns in East
              Yorkshire — a prosperous and historically significant town with a strong
              independent retail sector, a high concentration of professional services,
              a thriving hospitality market and a significant tourism economy anchored
              by Beverley Minster and the medieval town centre. The commercial quality
              of Beverley&apos;s town centre consistently supports higher-value sign and
              graphics installation requirements than many comparable-sized market towns.
            </p>
            <p>
              The town centre around Saturday Market, Wednesday Market, the Butcher Row,
              Toll Gavel and Highgate has a dense concentration of independent retailers,
              estate agents, solicitors, cafés, pubs and restaurants — all of which
              generate consistent window graphics, fascia vinyl, interior signage and
              wayfinding installation requirements. The quality of Beverley&apos;s retail
              environment means that shopfront and window presentation standards are high:
              sign companies working in this market are typically delivering premium
              specification, not budget installs.
            </p>
            <p>
              Beyond the town centre, the Beverley HU17 postcode extends across a
              substantial residential and rural hinterland — a mix of executive housing
              developments, rural estates and the high-value Beverley and East Riding
              property market. This supports interior graphics, wayfinding and hospitality
              venue installations in the broader HU17 zone. The tourism and leisure
              economy — racecourse signage, hospitality venue graphics, seasonal event
              promotion — adds a further layer of consistent installation demand.
            </p>
            <p>
              WRPX has extended its East Yorkshire subcontract coverage progressively
              north and east from our base — Bridlington, Driffield, Scarborough and
              Whitby are all now on our programme map. Beverley completes the
              Humber–Wolds inland corridor from the M62 junction to the East Yorkshire
              coast, connecting naturally to Driffield inland and Hull south on the
              same day programme.
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
              From our South Yorkshire base, Beverley is most efficiently reached via
              the A1(M) north to the M62 junction at Ferrybridge, then east on the M62
              to the A164 north from Brough. The A164 runs directly from the M62 at
              Brough into Beverley town centre — a predominantly dual-carriageway run
              with clear signage and no significant urban crawl until the Beverley bypass.
              Journey time is approximately 1 hour 20 minutes in normal conditions.
            </p>
            <p>
              <strong className="text-foreground">Beverley + Hull (Humber programme).</strong>{" "}
              Hull HU1 is 9 miles south of Beverley via the A1174 — approximately 15
              minutes. Beverley morning and Hull afternoon is an efficient one-day
              programme covering the premium East Riding market town and the large
              commercial city market in the same trip. Hull&apos;s city-centre commercial
              stock is substantial — retail, hospitality, office and industrial
              installation requirements across HU1–HU9 postcodes.
            </p>
            <p>
              <strong className="text-foreground">Beverley + Driffield (Wolds programme).</strong>{" "}
              Driffield YO25 is 12 miles north of Beverley via the A164 — approximately
              18 minutes. A Beverley and Driffield combined programme covers the two
              principal East Riding market towns on the same corridor. With Bridlington
              YO15 a further 15 miles east of Driffield, the three-town East Yorkshire
              programme (Beverley + Driffield + Bridlington) is achievable as a long
              single day from South Yorkshire.
            </p>
            <p>
              <strong className="text-foreground">Beverley + York (A1079 programme).</strong>{" "}
              York YO1 is approximately 28 miles north-west of Beverley via the A1079
              — under 40 minutes. The A1079 Beverley–York road passes through Market
              Weighton YO43 and Pocklington YO42, both of which can be included as
              stops on a York-bound programme from Beverley.
            </p>
          </div>
        </div>
      </section>

      {/* What we install */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-2xl font-semibold text-foreground md:text-3xl">
            What we install in Beverley and the HU17 zone
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="card-float p-6">
              <h3 className="font-semibold text-foreground">Shop front and fascia vinyl</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Cut and printed vinyl on Beverley town-centre shopfronts, fascia boards
                and stallrisers — independent retailers, estate agents, cafés and
                hospitality venues on Saturday Market, Wednesday Market, Toll Gavel
                and Butcher Row.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="font-semibold text-foreground">Window graphics and frosted film</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Cut-vinyl window graphics, frosted privacy film and decorative window
                vinyl for Beverley commercial premises — professional services, retail,
                hospitality and the premium property market. High specification standards
                typical of Beverley&apos;s town-centre commercial environment.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="font-semibold text-foreground">Wall graphics and interior vinyl</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Wall wraps, wayfinding vinyls and interior graphics for Beverley offices,
                solicitors, estate agents, hospitality venues, hotels and the tourism
                and leisure sector in the HU17 zone.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="font-semibold text-foreground">Hospitality and venue graphics</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Window vinyl, interior wall graphics and wayfinding for Beverley&apos;s
                hotels, pubs, restaurants and event venues — including the Beverley
                racecourse hospitality market and the tourism accommodation sector
                in the wider HU17 zone.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="font-semibold text-foreground">Professional services signage</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Estate agent window graphics, solicitor and law firm fascia vinyls,
                financial services office interiors and professional services branding
                across Beverley town centre — a higher-value segment of the local
                installation market.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="font-semibold text-foreground">Temporary and promotional graphics</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Short-term promotional vinyl, event graphics and seasonal window
                campaigns for Beverley retail and hospitality businesses — including
                the Beverley Folk Festival, the Beverley & East Riding Early Music
                Festival and other seasonal events that drive high visitor footfall.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How we work */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            How we work with sign and print companies in Beverley
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
              <strong className="text-foreground">Premium market standard.</strong>{" "}
              Beverley&apos;s commercial environment expects high installation quality —
              we understand that premium town-centre clients have higher finish
              expectations. We match the specification and presentation standard that
              the Beverley market demands, protecting your client relationship and
              your reputation.
            </p>
            <p>
              <strong className="text-foreground">Flexible programme structure.</strong>{" "}
              We can lead a Beverley programme — starting there and working the A164
              corridor north to Driffield or south to Hull — or slot Beverley as a
              stop on a broader East Yorkshire programme. Tell us what&apos;s on the
              programme and we&apos;ll work out the most efficient route order.
            </p>
            <p>
              <strong className="text-foreground">Transparent mobilisation model.</strong>{" "}
              Day rates for East Riding programmes are clear before we start — no
              surprise call-out charges. We build the route costs into the quote
              upfront so you can price your Beverley client correctly.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-3xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Beverley subcontract installation — common questions
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
              Got an installation in Beverley or East Riding?
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Tell us the location, job type and timescale — we&apos;ll come back
              with a day rate and a route plan. Beverley combines naturally with
              Driffield, Hull and the wider East Yorkshire programme.
            </p>
            <Link href="/contact/" className="btn-primary mt-8 inline-block">
              Discuss a Beverley Installation →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
