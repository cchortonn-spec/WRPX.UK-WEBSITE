import type { Metadata } from "next";
import Link from "next/link";
import { FaqAccordion } from "@/components/FaqAccordion";
import { getServiceSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Subcontract Vinyl Installer Whitby — Sign & Print Company Installation Partner | WRPX",
  description:
    "Subcontract vinyl installation across Whitby and the YO21 North Yorkshire coast zone for sign companies, print houses and fit-out contractors. WRPX covers Whitby town centre, the harbour, Church Street, West Cliff and the A171 coastal corridor. Naturally combined with Scarborough (20 miles south) on the same North Yorkshire coast programme.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/subcontract-vinyl-installer-whitby/",
  },
};

const serviceSchema = getServiceSchema(
  "Subcontract vinyl installer Whitby — sign company and print house installation partner",
  "Professional subcontract vinyl installation for sign companies, print management firms and fit-out contractors across Whitby and the YO21 North Yorkshire coast zone. White-label available. WRPX covers Whitby town centre YO21, the harbour and Church Street district, West Cliff, Skinner Street, the A171 Scarborough–Whitby coastal road and the wider North Yorkshire Moors and coast business economy."
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
      name: "Subcontract Installer Whitby",
      item: "https://www.wrpx.co.uk/subcontract-vinyl-installer-whitby/",
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How far is WRPX from Whitby?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Whitby is approximately 2 hours from our South Yorkshire base. The standard route is A1(M) north to junction 44 (Wetherby), A64 east to Malton, A169 north to Pickering, then A171 north-east to Whitby — a clean A-road run through the North York Moors National Park. Alternatively: A64 to Scarborough and A171 north to Whitby. Whitby combines efficiently with Scarborough (20 miles south via A171) or Pickering (30 miles south via A169) on a two-location North Yorkshire coast day programme.",
      },
    },
    {
      "@type": "Question",
      name: "Do you work white-label in Whitby?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — white-label is standard on all Whitby and YO21 zone work. We arrive in unbranded vehicles, carry out every installation under your brand and provide full photographic documentation — before, during and completed sign-off — in your agreed format on the day. No WRPX branding appears on site, on vehicles or on any documentation.",
      },
    },
    {
      "@type": "Question",
      name: "Can you combine Whitby with Scarborough or Pickering on the same programme?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — Whitby sits 20 miles north of Scarborough via the A171 and 30 miles north of Pickering via the A169. A single North Yorkshire coast day from South Yorkshire covers Pickering or Malton on the way up and Scarborough and Whitby on the coast. A two-location combined programme — Scarborough first, then Whitby on the A171 north — runs efficiently without overnight stays.",
      },
    },
    {
      "@type": "Question",
      name: "What types of vinyl installation do you cover in Whitby?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Window graphics, frosted and decorative window film, wall wraps, floor graphics, shop front and fascia vinyls, wayfinding vinyls, hoarding graphics, interior graphics and hospitality venue graphics. Whitby has a strong tourism and hospitality economy — the harbour area, Church Street, Grape Lane and the West Cliff Victorian hotel district generate consistent demand for shopfront vinyls, interior branding graphics, seasonal promotional vinyls, hotel room frosted film and window graphics for the independent retail and hospitality sector.",
      },
    },
    {
      "@type": "Question",
      name: "Do you cover the Whitby harbour area and Church Street?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — the harbour area, Church Street, Grape Lane, the lower town and West Cliff are all within our Whitby programme. Church Street and the harbour area are pedestrianised or restricted-access in parts, but we work with whatever access and delivery arrangements the site requires — van access, hand-carry or trolley delivery to premises. The compact geography of Whitby town centre means multiple installations in the harbour area can be programmed efficiently on the same visit.",
      },
    },
  ],
};

const faqItems = [
  {
    q: "How far is WRPX from Whitby?",
    a: "Whitby is approximately 2 hours from our South Yorkshire base. The standard route is A1(M) north to junction 44 (Wetherby), A64 east to Malton, A169 north to Pickering, then A171 north-east to Whitby — a clean A-road run through the North York Moors National Park. Alternatively: A64 to Scarborough and A171 north to Whitby. Whitby combines efficiently with Scarborough (20 miles south via A171) or Pickering (30 miles south via A169) on a two-location North Yorkshire coast day programme.",
  },
  {
    q: "Do you work white-label in Whitby?",
    a: "Yes — white-label is standard on all Whitby and YO21 zone work. We arrive in unbranded vehicles, carry out every installation under your brand and provide full photographic documentation — before, during and completed sign-off — in your agreed format on the day. No WRPX branding appears on site, on vehicles or on any documentation.",
  },
  {
    q: "Can you combine Whitby with Scarborough or Pickering on the same programme?",
    a: "Yes — Whitby sits 20 miles north of Scarborough via the A171 and 30 miles north of Pickering via the A169. A single North Yorkshire coast day from South Yorkshire covers Pickering or Malton on the way up and Scarborough and Whitby on the coast. A two-location combined programme — Scarborough first, then Whitby on the A171 north — runs efficiently without overnight stays.",
  },
  {
    q: "What types of vinyl installation do you cover in Whitby?",
    a: "Window graphics, frosted and decorative window film, wall wraps, floor graphics, shop front and fascia vinyls, wayfinding vinyls, hoarding graphics, interior graphics and hospitality venue graphics. Whitby has a strong tourism and hospitality economy — the harbour area, Church Street, Grape Lane and the West Cliff Victorian hotel district generate consistent demand for shopfront vinyls, interior branding graphics, seasonal promotional vinyls, hotel room frosted film and window graphics for the independent retail and hospitality sector.",
  },
  {
    q: "Do you cover the Whitby harbour area and Church Street?",
    a: "Yes — the harbour area, Church Street, Grape Lane, the lower town and West Cliff are all within our Whitby programme. Church Street and the harbour area are pedestrianised or restricted-access in parts, but we work with whatever access and delivery arrangements the site requires — van access, hand-carry or trolley delivery to premises. The compact geography of Whitby town centre means multiple installations in the harbour area can be programmed efficiently on the same visit.",
  },
];

const nearbyPages = [
  { href: "/subcontract-vinyl-installer-scarborough/", label: "Scarborough YO11", desc: "20 miles south via A171" },
  { href: "/subcontract-vinyl-installer-pickering/", label: "Pickering YO18", desc: "30 miles south via A169" },
  { href: "/subcontract-vinyl-installer-malton/", label: "Malton YO17", desc: "40 miles south-west via A169 and A64" },
  { href: "/subcontract-vinyl-installer-helmsley/", label: "Helmsley YO62", desc: "25 miles south-west via A171 and B1257" },
];

export default function SubcontractVinylInstallerWhitby() {
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
              href="/commercial-installation/"
              className="text-accent hover:underline"
            >
              Commercial Installation
            </Link>
            <span className="mx-2">›</span>
            <Link
              href="/subcontract-vinyl-installation-yorkshire/"
              className="text-accent hover:underline"
            >
              Yorkshire Subcontract Hub
            </Link>
            <span className="mx-2">›</span>
            <span className="text-foreground">Whitby</span>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="border-b border-border bg-card py-16 md:py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <p className="text-sm font-medium uppercase tracking-wide text-accent">
            Subcontract Vinyl Installation · Whitby YO21
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Subcontract vinyl installer — Whitby
          </h1>
          <p className="mt-5 text-lg text-muted leading-relaxed">
            WRPX provides subcontract vinyl installation across Whitby and the North
            Yorkshire coast YO21 zone for sign companies, print houses and fit-out
            contractors. White-label as standard. Whitby sits on the A171 coast road,
            20 miles north of Scarborough — efficiently combined with Scarborough on
            the same North Yorkshire coast programme from South Yorkshire.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact/" className="btn-primary">
              Discuss Whitby Subcontract Work →
            </Link>
            <Link
              href="/subcontract-vinyl-installation-yorkshire/"
              className="btn-secondary"
            >
              Yorkshire Subcontract Hub
            </Link>
          </div>
        </div>
      </section>

      {/* Whitby context */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Whitby — harbour town on the North Yorkshire coast
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              Whitby is a historic fishing port and major tourism destination on the
              North Yorkshire coast, set at the mouth of the River Esk where it meets
              the North Sea. The town is known for its Gothic atmosphere, the ruins of
              Whitby Abbey on the East Cliff, and a strong independent retail,
              hospitality and food economy centred on the harbour quayside, Church
              Street and the Victorian West Cliff district.
            </p>
            <p>
              Whitby has a compact but active commercial economy — the harbour area and
              Church Street are densely packed with independent shops, restaurants, fish
              and chip restaurants, galleries, gift shops, hotels, B&Bs and hospitality
              venues. The West Cliff district adds a second commercial core of hotels,
              guesthouses and retail along the clifftop. The wider Whitby catchment
              includes the Esk Valley villages, Sleights, Ruswarp and the coastal
              hamlets north to Staithes.
            </p>
            <p>
              For sign companies and print houses covering the North Yorkshire coast,
              Whitby is the northern endpoint on the A171 coastal road. The most efficient
              route from South Yorkshire runs A1(M) north to Wetherby, A64 east to Malton,
              A169 north to Pickering, then A171 north-east to Whitby — covering the
              inland A64 corridor on the way out and arriving at Whitby via the Moors.
              The return leg via Scarborough on the A171 south adds Scarborough to the
              same programme for a full coast day.
            </p>
            <p>
              Whitby has no resident specialist vinyl installer and limited subcontract
              coverage from regional sign companies — it is not on a major motorway
              corridor and sits at the geographic edge of most Yorkshire-based sign
              company coverage areas. That gap creates a consistent opportunity for
              sign companies and print management firms who have Whitby clients and
              need a reliable subcontract installer who will actually turn up.
            </p>
          </div>
        </div>
      </section>

      {/* What we install */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-2xl font-semibold text-foreground md:text-3xl">
            What we install in Whitby
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Harbour and Church Street shopfronts
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Cut vinyl lettering, window graphics, fascia vinyls and seasonal
                promotional window graphics for the independent shops, restaurants and
                hospitality venues on Whitby&apos;s harbour quayside, Church Street,
                Grape Lane and the lower town.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Hotel and guesthouse window graphics and film
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Frosted privacy film for guest room and bathroom windows, solar control
                film for sea-view and west-facing rooms, window vinyls for reception
                and ground-floor lobby glazing — across the West Cliff and East Cliff
                hotel and guesthouse stock.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Interior hospitality graphics
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Wall graphics, feature wall vinyls, menu board vinyls, wayfinding
                graphics and interior branding for Whitby restaurants, hotels, food
                businesses and the hospitality and tourism economy in the town and
                wider Esk Valley.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Seasonal and event promotional graphics
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Temporary and seasonal vinyls for Whitby Goth Weekend, the Whitby
                Regatta, the Whitby Folk Festival and other major events that generate
                significant temporary graphics demand from venue operators, event
                organisers and sponsors across the town.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Retail and commercial premises
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Window graphics, wall wraps, frosted glass partitions and interior
                vinyls for Whitby retail, professional services offices and the
                commercial premises along the Skinner Street and Flowergate retail
                corridor.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Coastal hinterland and rural businesses
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Branding vinyls, holiday cottage and rural accommodation graphics,
                farm shop vinyls and rural business branding for the Esk Valley,
                Ruswarp, Sleights, Robin Hood&apos;s Bay and the North Yorkshire
                coast villages in the Whitby catchment.
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

      {/* FAQ */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-3xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Whitby subcontract installation — common questions
          </h2>
          <FaqAccordion items={faqItems} />
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-20">
        <div className="container mx-auto max-w-3xl">
          <div className="card-float border-2 border-accent/40 p-10 text-center md:p-12">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              Got Whitby work coming up?
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Send us the job details — location, surface, material size and access
              requirements. We&apos;ll confirm availability and provide a subcontract rate
              the same day. White-label as standard. No WRPX branding on site or on any
              documentation.
            </p>
            <Link href="/contact/" className="btn-primary mt-8 inline-block">
              Discuss Whitby Subcontract Work →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
