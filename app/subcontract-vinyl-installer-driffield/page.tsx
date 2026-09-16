import type { Metadata } from "next";
import Link from "next/link";
import { FaqAccordion } from "@/components/FaqAccordion";
import { getServiceSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Subcontract Vinyl Installer Driffield — Sign & Print Company Installation Partner | WRPX",
  description:
    "Subcontract vinyl installation across Driffield and the YO25 East Riding zone for sign companies, print houses and fit-out contractors. WRPX covers Driffield town centre, the A614 corridor, Wolds Gateway and the wider East Riding of Yorkshire inland market. Naturally combined with Bridlington (15 miles east) or Beverley (12 miles south) on the same East Yorkshire programme.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/subcontract-vinyl-installer-driffield/",
  },
};

const serviceSchema = getServiceSchema(
  "Subcontract vinyl installer Driffield — sign company and print house installation partner",
  "Professional subcontract vinyl installation for sign companies, print management firms and fit-out contractors across Driffield and the YO25 East Riding zone. White-label available. WRPX covers Driffield town centre YO25, the A614 Selby–Driffield corridor, the A163 Bridlington–Driffield route and the wider East Riding of Yorkshire inland agricultural and market town economy."
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
      name: "Subcontract Installer Driffield",
      item: "https://www.wrpx.co.uk/subcontract-vinyl-installer-driffield/",
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How far is WRPX from Driffield?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Driffield is approximately 1 hour 30 minutes from our South Yorkshire base. The most efficient route is the A1(M) north to the M62 junction, then east on the M62 to the A614 north — a clean motorway and dual-carriageway run that enters the East Riding of Yorkshire and continues north through Market Weighton and into Driffield YO25. Alternatively, the A19 north through Selby and connecting to the A614 via the A1079 is a secondary route that adds a few minutes but passes through a number of East Riding market towns on the same corridor. Driffield can also be reached via Beverley HU17 — south via the A1174 and A164 from the M62 and then north on the A164 into Driffield.",
      },
    },
    {
      "@type": "Question",
      name: "Do you work white-label in Driffield?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — white-label is standard on all Driffield and YO25 zone work. We arrive in unbranded vehicles, carry out every installation under your brand and provide full photographic documentation — before, during and completed sign-off — in your agreed format on the day. No WRPX branding appears on site, on vehicles or on any documentation.",
      },
    },
    {
      "@type": "Question",
      name: "Can you combine Driffield with Bridlington or Beverley on the same programme?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — Driffield is very well positioned for combined East Yorkshire programmes. Bridlington YO15 is approximately 15 miles east via the A614 and B1249 — a direct 20-minute run from Driffield town centre. Beverley HU17 is approximately 12 miles south via the A164 — under 20 minutes. York YO1 is approximately 30 miles west via the A166 — under 45 minutes. A Driffield-anchored East Yorkshire programme covering Bridlington (coast), Beverley (Humber market) and any inland Wolds stops is a strong one-day programme from South Yorkshire.",
      },
    },
    {
      "@type": "Question",
      name: "What types of vinyl installation do you cover in Driffield?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Window graphics, frosted and decorative window film, wall wraps, floor graphics, shop front and fascia vinyls, wayfinding vinyls, hoarding graphics, interior graphics and hospitality venue graphics. Driffield is a traditional East Riding market town with a diverse commercial economy — the town centre on Exchange Street and Middle Street, the out-of-town agricultural and trade supply sector, light industrial units on the A614 corridor, and a strong rural services and professional services market. Agricultural supply companies, estate agents, solicitors, vets, and the East Riding farming economy all generate regular sign and graphics work across the YO25 postcode.",
      },
    },
    {
      "@type": "Question",
      name: "Do you cover the A614 corridor and East Riding agricultural market?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. The A614 corridor running north from the M62 through Market Weighton YO43 and into Driffield YO25 is a route we cover as part of the wider East Riding commercial programme. Agricultural supply businesses, rural estate agents, veterinary practices and farm equipment suppliers along this corridor generate consistent sign and graphics installation requirements. We can include stops along the A614 on any Driffield programme — Market Weighton, Pocklington YO42 (on the A1079) and the wider Wolds Gateway area are all within the same programme zone.",
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
    href: "/subcontract-vinyl-installer-bridlington/",
    label: "Bridlington YO15",
    desc: "East Yorkshire coast — 15 miles east via A614 and B1249",
  },
  {
    href: "/subcontract-vinyl-installer-scarborough/",
    label: "Scarborough YO11",
    desc: "North Yorkshire coast — 37 miles north via A614 and A170",
  },
  {
    href: "/subcontract-vinyl-installer-york/",
    label: "York YO1",
    desc: "North Yorkshire — 30 miles west via A166",
  },
  {
    href: "/subcontract-vinyl-installer-hull/",
    label: "Hull HU1",
    desc: "East Riding — 25 miles south via A164 and A1079",
  },
];

export default function SubcontractVinylInstallerDriffieldPage() {
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
            <span className="text-foreground">Driffield</span>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="border-b border-border bg-card py-16 md:py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <p className="text-sm font-medium uppercase tracking-wide text-accent">
            Subcontract Vinyl Installation · Driffield &amp; East Riding YO25
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Subcontract vinyl installer — Driffield
          </h1>
          <p className="mt-5 text-lg text-muted leading-relaxed">
            WRPX provides subcontract vinyl installation for sign companies, print houses
            and fit-out contractors across Driffield and the YO25 East Riding zone.
            White-label, fully documented, reported back to you. Driffield is 1 hour 30
            minutes from our South Yorkshire base via the M62 and A614 — naturally
            combined with Bridlington (15 miles east) or Beverley (12 miles south) on
            the same East Yorkshire programme.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact/" className="btn-primary">
              Discuss a Driffield Installation →
            </Link>
            <Link href="/subcontract-vinyl-installation-yorkshire/" className="btn-secondary">
              Yorkshire Subcontract Hub
            </Link>
          </div>
        </div>
      </section>

      {/* Driffield market context */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Driffield and the East Riding — the commercial market
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              Driffield is the principal market town of the East Riding of Yorkshire
              Wolds — the &ldquo;Capital of the Wolds&rdquo; — a traditional agricultural
              and rural service centre with a compact town-centre commercial district and
              a significant surrounding hinterland of farms, rural estates, estate agents,
              agricultural supply businesses and rural professional services.
            </p>
            <p>
              The town centre on Exchange Street and Middle Street has a mix of independent
              retailers, estate agents, solicitors, banks, veterinary practices and
              hospitality businesses that generate consistent window graphics, fascia vinyl
              and interior sign installation requirements. The light industrial and trade
              supply units on the A614 south of the town centre — including agricultural
              machinery, builders&apos; merchants and rural trade suppliers — represent
              a separate but regular source of shop-front and signage vinyl work.
            </p>
            <p>
              The wider YO25 zone extends across the Wolds — a market that is geographically
              large but commercially productive. Rural business parks, estate agent offices
              serving a premium Wolds property market, equestrian and agricultural business
              premises, and rural holiday and tourism businesses all generate occasional but
              recurring graphics and vinyl installation requirements that are underserved by
              installers based in the Hull or York urban areas.
            </p>
            <p>
              WRPX has built out a full East Yorkshire and North Yorkshire subcontract
              footprint — Scarborough, Whitby, Bridlington are already on our programme
              map. Driffield extends that coverage inland across the East Riding Wolds,
              completing the natural A614 corridor coverage from the M62 to the East
              Yorkshire coast.
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
              From our South Yorkshire base, Driffield is most efficiently reached via
              the A1(M) north to the M62 junction, then east on the M62 to the A614
              north. This is a clean motorway and dual-carriageway run — no awkward
              A-road junctions or town-centre crawls until Driffield itself. Journey
              time is approximately 1 hour 30 minutes in normal conditions.
            </p>
            <p>
              The A614 corridor running south from Driffield through Market Weighton YO43
              to the M62 junction gives us a natural spine for a combined East Riding
              programme. Stops along the A614 — Pocklington YO42 (via the A1079),
              Market Weighton YO43 and the wider Wolds Gateway area — can be incorporated
              into the same day route without significant detour.
            </p>
            <p>
              <strong className="text-foreground">Driffield + Bridlington (coast programme).</strong>{" "}
              The A614 east from Driffield runs directly into Bridlington YO15 — 15 miles,
              approximately 20 minutes. A Driffield morning and Bridlington afternoon is
              an efficient single-day East Yorkshire coastal programme from South Yorkshire.
            </p>
            <p>
              <strong className="text-foreground">Driffield + Beverley (Humber programme).</strong>{" "}
              Beverley HU17 is 12 miles south of Driffield via the A164 — under 20 minutes.
              From Beverley, the A1174 connects to Hull HU1 in a further 9 miles. A
              Driffield and Beverley programme, with Hull if capacity allows, is a
              strong one-day East Riding programme covering the Wolds inland market
              and the Humber estuary commercial market on the same trip.
            </p>
          </div>
        </div>
      </section>

      {/* What we install */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-2xl font-semibold text-foreground md:text-3xl">
            What we install in Driffield and the YO25 zone
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="card-float p-6">
              <h3 className="font-semibold text-foreground">Shop front and fascia vinyl</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Cut and printed vinyl on Driffield town-centre shopfronts, fascia boards
                and stallrisers — estate agents, solicitors, retailers and hospitality
                venues on Exchange Street and Middle Street.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="font-semibold text-foreground">Window graphics and frosted film</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Cut-vinyl window graphics, frosted privacy film and decorative window
                vinyl for Driffield commercial premises — professional services, retail,
                hospitality and agricultural trade units on the A614 corridor.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="font-semibold text-foreground">Wall graphics and interior vinyl</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Wall wraps, wayfinding vinyls and interior graphics for Driffield offices,
                rural professional practices, agricultural supply showrooms and
                hospitality venues in the YO25 zone.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="font-semibold text-foreground">Agricultural and rural trade signage</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Vinyl installation for agricultural machinery suppliers, farm equipment
                businesses, rural estate agents and equestrian businesses across the
                East Riding Wolds hinterland — often combined with Driffield town-centre
                stops on the same day.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="font-semibold text-foreground">Fleet vehicle graphics</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Agricultural vehicle livery, rural contractor fleet graphics and trade
                vehicle vinyl for businesses in the wider YO25 and East Riding zone —
                tractors, vans, trailers and specialist agricultural vehicles.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="font-semibold text-foreground">Temporary and promotional graphics</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Short-term promotional vinyl, event graphics and seasonal window
                campaigns for Driffield retail and hospitality businesses — including
                the Driffield Show and other East Riding agricultural events.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How we work */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            How we work with sign and print companies in Driffield
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
              <strong className="text-foreground">Flexible day structure.</strong>{" "}
              We can lead-programme Driffield — starting there and working back south
              through the A614 corridor — or slot Driffield as a morning or afternoon
              stop on a broader East Yorkshire programme that starts or ends on the
              coast or in the Humber market. Tell us what&apos;s on the programme
              and we&apos;ll work out the best route order.
            </p>
            <p>
              <strong className="text-foreground">Transparent mobilisation model.</strong>{" "}
              Day rates for East Riding programmes are clear before we start —
              no surprise call-out charges or mobilisation fees that make small
              Driffield jobs unviable. We build the route costs into the quote
              upfront so you can price your client correctly.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-3xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Driffield subcontract installation — common questions
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
              Got an installation in Driffield or East Riding?
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Tell us the location, job type and timescale — we&apos;ll come back
              with a day rate and a route plan. Driffield combines naturally with
              Bridlington, Beverley and the wider East Yorkshire programme.
            </p>
            <Link href="/contact/" className="btn-primary mt-8 inline-block">
              Discuss a Driffield Installation →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
