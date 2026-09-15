import type { Metadata } from "next";
import Link from "next/link";
import { FaqAccordion } from "@/components/FaqAccordion";
import { getServiceSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Subcontract Vinyl Installer Scarborough — Sign & Print Company Installation Partner | WRPX",
  description:
    "Subcontract vinyl installation across Scarborough and the YO11 North Yorkshire coast zone for sign companies, print houses and fit-out contractors. WRPX covers Scarborough town centre, South Bay, North Bay, Whitby Road and the A64 coast corridor. Naturally combined with Malton (25 miles west) or Whitby (20 miles north) on the same programme.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/subcontract-vinyl-installer-scarborough/",
  },
};

const serviceSchema = getServiceSchema(
  "Subcontract vinyl installer Scarborough — sign company and print house installation partner",
  "Professional subcontract vinyl installation for sign companies, print management firms and fit-out contractors across Scarborough and the YO11 North Yorkshire coast zone. White-label available. WRPX covers Scarborough town centre YO11, South Bay, North Bay, the A64 York–Scarborough corridor, the A165 Filey road and the wider North Yorkshire coast business and tourism economy."
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
      name: "Subcontract Installer Scarborough",
      item: "https://www.wrpx.co.uk/subcontract-vinyl-installer-scarborough/",
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How far is WRPX from Scarborough?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Scarborough is approximately 1 hour 45 minutes from our South Yorkshire base. The standard route is A1(M) north to junction 44 (Wetherby), A64 east through York and Malton, and on to Scarborough YO11 at the coast — a clean motorway-and-A-road run. Scarborough sits at the eastern terminus of the A64 York–Scarborough corridor, 25 miles east of Malton and 50 miles east of York. It combines naturally with Malton YO17 (25 miles west) or Bridlington YO15 (via the A165 south) on a full coast-and-corridor day programme.",
      },
    },
    {
      "@type": "Question",
      name: "Do you work white-label in Scarborough?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — white-label is standard on all Scarborough and YO11 zone work. We arrive in unbranded vehicles, carry out every installation under your brand and provide full photographic documentation — before, during and completed sign-off — in your agreed format on the day. No WRPX branding appears on site, on vehicles or on any documentation.",
      },
    },
    {
      "@type": "Question",
      name: "Can you combine Scarborough with Malton or Whitby on the same programme?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — Scarborough sits at the end of the A64 corridor, 25 miles east of Malton. A single day from South Yorkshire can cover York and Malton on the A64 heading east, then continue to Scarborough at the coast. Whitby YO21 is approximately 20 miles north of Scarborough via the A171 — a straightforward coastal extension. For larger programmes, a two-day North Yorkshire coast run covering Scarborough, Whitby and the inland corridor is efficient from South Yorkshire.",
      },
    },
    {
      "@type": "Question",
      name: "What types of vinyl installation do you cover in Scarborough?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Window graphics, frosted and decorative window film, wall wraps, floor graphics, shop front and fascia vinyls, wayfinding vinyls, hoarding graphics, interior graphics and hospitality venue graphics. Scarborough has a large and diverse commercial economy — the South Bay and town centre retail zone, the Westborough and Newborough retail core, the North Bay tourist and amusement zone, a large hospitality and hotel sector, conference venues including the Spa complex, and a significant independent retail, restaurant and entertainment market along the seafront and town centre.",
      },
    },
    {
      "@type": "Question",
      name: "Do you cover hotels and hospitality venues in Scarborough?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — Scarborough has one of the largest concentrations of seafront and town-centre hotels, B&Bs and guesthouses in Yorkshire. These properties generate consistent demand for frosted privacy film on guest room and bathroom windows, solar control film on south and west-facing sea-view rooms, window graphics for ground-floor shopfront and reception glazing, and interior branding and wayfinding graphics. The North Bay hotel cluster, the South Bay Grand Hotel corridor and the Westborough town-centre hotels are all within our regular Scarborough programme.",
      },
    },
  ],
};

const faqItems = [
  {
    q: "How far is WRPX from Scarborough?",
    a: "Scarborough is approximately 1 hour 45 minutes from our South Yorkshire base. The standard route is A1(M) north to junction 44 (Wetherby), A64 east through York and Malton, and on to Scarborough YO11 at the coast — a clean motorway-and-A-road run. Scarborough sits at the eastern terminus of the A64 York–Scarborough corridor, 25 miles east of Malton and 50 miles east of York. It combines naturally with Malton YO17 (25 miles west) or Bridlington YO15 (via the A165 south) on a full coast-and-corridor day programme.",
  },
  {
    q: "Do you work white-label in Scarborough?",
    a: "Yes — white-label is standard on all Scarborough and YO11 zone work. We arrive in unbranded vehicles, carry out every installation under your brand and provide full photographic documentation — before, during and completed sign-off — in your agreed format on the day. No WRPX branding appears on site, on vehicles or on any documentation.",
  },
  {
    q: "Can you combine Scarborough with Malton or Whitby on the same programme?",
    a: "Yes — Scarborough sits at the end of the A64 corridor, 25 miles east of Malton. A single day from South Yorkshire can cover York and Malton on the A64 heading east, then continue to Scarborough at the coast. Whitby YO21 is approximately 20 miles north of Scarborough via the A171 — a straightforward coastal extension. For larger programmes, a two-day North Yorkshire coast run covering Scarborough, Whitby and the inland corridor is efficient from South Yorkshire.",
  },
  {
    q: "What types of vinyl installation do you cover in Scarborough?",
    a: "Window graphics, frosted and decorative window film, wall wraps, floor graphics, shop front and fascia vinyls, wayfinding vinyls, hoarding graphics, interior graphics and hospitality venue graphics. Scarborough has a large and diverse commercial economy — the South Bay and town centre retail zone, the Westborough and Newborough retail core, the North Bay tourist and amusement zone, a large hospitality and hotel sector, conference venues including the Spa complex, and a significant independent retail, restaurant and entertainment market along the seafront and town centre.",
  },
  {
    q: "Do you cover hotels and hospitality venues in Scarborough?",
    a: "Yes — Scarborough has one of the largest concentrations of seafront and town-centre hotels, B&Bs and guesthouses in Yorkshire. These properties generate consistent demand for frosted privacy film on guest room and bathroom windows, solar control film on south and west-facing sea-view rooms, window graphics for ground-floor shopfront and reception glazing, and interior branding and wayfinding graphics. The North Bay hotel cluster, the South Bay Grand Hotel corridor and the Westborough town-centre hotels are all within our regular Scarborough programme.",
  },
];

const nearbyPages = [
  { href: "/subcontract-vinyl-installer-malton/", label: "Malton YO17", desc: "25 miles west via A64" },
  { href: "/subcontract-vinyl-installer-whitby/", label: "Whitby YO21", desc: "20 miles north via A171" },
  { href: "/subcontract-vinyl-installer-bridlington/", label: "Bridlington YO15", desc: "22 miles south via A165" },
  { href: "/subcontract-vinyl-installer-york/", label: "York YO1", desc: "50 miles west via A64" },
];

export default function SubcontractVinylInstallerScarborough() {
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
            <span className="text-foreground">Scarborough</span>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="border-b border-border bg-card py-16 md:py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <p className="text-sm font-medium uppercase tracking-wide text-accent">
            Subcontract Vinyl Installation · Scarborough YO11
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Subcontract vinyl installer — Scarborough
          </h1>
          <p className="mt-5 text-lg text-muted leading-relaxed">
            WRPX provides subcontract vinyl installation across Scarborough and the North
            Yorkshire coast YO11 zone for sign companies, print houses and fit-out
            contractors. White-label as standard. Scarborough sits at the eastern terminus
            of the A64 York–Scarborough corridor — 25 miles east of Malton, 50 miles east
            of York — the natural endpoint for a coast-and-corridor day from South Yorkshire.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact/" className="btn-primary">
              Discuss Scarborough Subcontract Work →
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

      {/* Scarborough context */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Scarborough — Yorkshire&apos;s largest coastal town
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              Scarborough is the largest town on the Yorkshire coast and one of the UK&apos;s
              oldest seaside resorts. The town sits at the foot of the North York Moors
              National Park, with a major tourism economy centred on the South Bay beach
              and castle headland, a large independent retail and hospitality sector in
              the Westborough and Newborough retail core, and a significant conference and
              event market anchored by the Scarborough Spa complex on the South Bay.
            </p>
            <p>
              Beyond tourism, Scarborough is the commercial and service centre for a large
              rural hinterland across the Ryedale, Filey, Bridlington and East Yorkshire
              coast — including agricultural businesses, food producers, rural hotels and
              holiday accommodation, and the independent commercial market of the surrounding
              North Yorkshire villages and coast communities.
            </p>
            <p>
              For sign companies covering the A64 corridor and the North Yorkshire coast,
              Scarborough is the natural endpoint on the A64 east from York and Malton. A
              single eastbound day from South Yorkshire via the A1(M) and A64 — stopping at
              York, Malton and then Scarborough — covers the full A64 corridor efficiently.
              Whitby YO21, approximately 20 miles north via the A171, extends the same
              programme up the coast.
            </p>
            <p>
              Scarborough has a large and active print, graphics and hospitality sector that
              generates consistent demand for professional subcontract vinyl installation —
              particularly from national print management companies, brand agencies and
              fit-out contractors who need reliable local coverage for retail and hospitality
              rollout projects on the North Yorkshire coast.
            </p>
          </div>
        </div>
      </section>

      {/* What we install */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-2xl font-semibold text-foreground md:text-3xl">
            What we install in Scarborough
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Retail and shopfront vinyls
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Cut vinyl lettering, window graphics, fascia vinyls and promotional window
                graphics for Scarborough town centre retail — Westborough, Newborough, the
                Pavilion Shopping Centre and the South Bay seafront commercial strip.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Hotel and hospitality graphics
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Window graphics, frosted privacy film, solar control film for sea-view
                rooms, interior wall graphics, wayfinding and branding vinyls for
                Scarborough&apos;s large hotel and B&B stock — North Bay, South Bay, and
                the Grand Hotel corridor.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Window graphics and frosted film
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Window vinyls, frosted and etched-effect privacy film, decorative window
                film and Part M glass manifestation for Scarborough commercial premises,
                professional services businesses and the tourism and hospitality sector.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Amusement, entertainment and leisure venues
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Interior and exterior vinyls, wall graphics, promotional and seasonal
                vinyls for Scarborough&apos;s amusement arcades, entertainment venues, bowling
                alleys, cinemas and the leisure economy along the North Bay seafront.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Conference and event venue graphics
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Temporary and permanent graphics for the Scarborough Spa, the Royal Hall
                and other conference and event venues — including hoarding graphics,
                directional and wayfinding vinyls and event promotional graphics.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Coastal hinterland and rural businesses
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Branding vinyls, farm shop and rural deli graphics, holiday park
                signage vinyls, coastal attraction graphics and rural business
                branding for the Scarborough catchment area — Filey, Burniston,
                Cloughton and the North Yorkshire Moors villages.
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
            Scarborough subcontract installation — common questions
          </h2>
          <FaqAccordion items={faqItems} />
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-20">
        <div className="container mx-auto max-w-3xl">
          <div className="card-float border-2 border-accent/40 p-10 text-center md:p-12">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              Got Scarborough work coming up?
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Send us the job details — location, surface, material size and access
              requirements. We&apos;ll confirm availability and provide a subcontract rate
              the same day. White-label as standard. No WRPX branding on site or on any
              documentation.
            </p>
            <Link href="/contact/" className="btn-primary mt-8 inline-block">
              Discuss Scarborough Subcontract Work →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
