import type { Metadata } from "next";
import Link from "next/link";
import { FaqAccordion } from "@/components/FaqAccordion";
import { getServiceSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Subcontract Vinyl Installer Malton — Sign & Print Company Installation Partner | WRPX",
  description:
    "Subcontract vinyl installation across Malton and the YO17 Ryedale zone for sign companies, print houses and fit-out contractors. WRPX covers Malton town centre, Norton-on-Derwent, the A64 York–Scarborough corridor and the wider Ryedale area. Naturally combined with York (25 miles west) or Pickering (15 miles north) on the same programme.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/subcontract-vinyl-installer-malton/",
  },
};

const serviceSchema = getServiceSchema(
  "Subcontract vinyl installer Malton — sign company and print house installation partner",
  "Professional subcontract vinyl installation for sign companies, print management firms and fit-out contractors across Malton and the YO17 Ryedale zone. White-label available. WRPX covers Malton town centre YO17, Norton-on-Derwent YO17, the A64 York–Scarborough corridor, the Derwent Valley and the wider Ryedale rural and food-sector business economy."
);

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.wrpx.co.uk/" },
    { "@type": "ListItem", position: 2, name: "Commercial Installation", item: "https://www.wrpx.co.uk/commercial-installation/" },
    { "@type": "ListItem", position: 3, name: "Yorkshire Subcontract Hub", item: "https://www.wrpx.co.uk/subcontract-vinyl-installation-yorkshire/" },
    { "@type": "ListItem", position: 4, name: "Subcontract Installer Malton", item: "https://www.wrpx.co.uk/subcontract-vinyl-installer-malton/" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How far is WRPX from Malton?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Malton is approximately 1 hour 20 minutes from our South Yorkshire base. The standard route is A1(M) north to junction 44 (Wetherby), then A64 east through York and on to Malton YO17 — a straightforward A64 corridor run. Malton sits on the A64 between York (25 miles west) and Scarborough (25 miles east), making it the natural midpoint on the A64 corridor and efficient to combine with York, Pickering or the North Yorkshire coast on the same programme.",
      },
    },
    {
      "@type": "Question",
      name: "Do you work white-label in Malton?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — white-label is standard on all Malton and YO17 zone work. We arrive in unbranded vehicles, carry out every installation under your brand and provide full photographic documentation — before, during and completed sign-off — in your agreed format on the day. No WRPX branding appears on site, on vehicles or on any documentation.",
      },
    },
    {
      "@type": "Question",
      name: "Can you combine Malton with York or Pickering on the same programme?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — Malton sits between York and Scarborough on the A64, and north to Pickering on the A169. York YO1 is 25 miles west of Malton via the A64 — a straightforward combination. Pickering YO18 is 15 miles north via the A169. A single day from South Yorkshire can cover York and Malton on the A64 corridor heading east, then continue north to Pickering if there is additional work in the programme.",
      },
    },
    {
      "@type": "Question",
      name: "What types of vinyl installation do you cover in Malton?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Window graphics, frosted and decorative window film, wall wraps, floor graphics, shop front and fascia vinyls, wayfinding vinyls, hoarding graphics, interior graphics and hospitality venue graphics. Installation only — you supply the printed or cut material, we assess the surface and install to spec. Malton is known as the food capital of Yorkshire, with a strong artisan food and drink sector, independent retail, hospitality businesses and the Malton Artisan Food Market — all generating consistent demand for branding graphics, shopfront vinyls and interior promotional material.",
      },
    },
    {
      "@type": "Question",
      name: "Do you cover the Ryedale villages and the A64 corridor near Malton?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — the wider Malton catchment includes Norton-on-Derwent YO17 (adjacent town, effectively the same area), Kirkbymoorside YO62 (14 miles north), Helmsley YO62 (20 miles north-west), the A64 hotel and business park corridor between Malton and York, and the Derwent Valley rural business zone. Agricultural businesses, food producers, rural hotel and holiday accommodation and the Ryedale district commercial market all generate consistent subcontract installation demand in this zone.",
      },
    },
  ],
};

const faqItems = [
  {
    q: "How far is WRPX from Malton?",
    a: "Malton is approximately 1 hour 20 minutes from our South Yorkshire base. The standard route is A1(M) north to junction 44 (Wetherby), then A64 east through York and on to Malton YO17 — a straightforward A64 corridor run. Malton sits on the A64 between York (25 miles west) and Scarborough (25 miles east), making it the natural midpoint on the A64 corridor and efficient to combine with York, Pickering or the North Yorkshire coast on the same programme.",
  },
  {
    q: "Do you work white-label in Malton?",
    a: "Yes — white-label is standard on all Malton and YO17 zone work. We arrive in unbranded vehicles, carry out every installation under your brand and provide full photographic documentation — before, during and completed sign-off — in your agreed format on the day. No WRPX branding appears on site, on vehicles or on any documentation.",
  },
  {
    q: "Can you combine Malton with York or Pickering on the same programme?",
    a: "Yes — Malton sits between York and Scarborough on the A64, and north to Pickering on the A169. York YO1 is 25 miles west of Malton via the A64 — a straightforward combination. Pickering YO18 is 15 miles north via the A169. A single day from South Yorkshire can cover York and Malton on the A64 corridor heading east, then continue north to Pickering if there is additional work in the programme.",
  },
  {
    q: "What types of vinyl installation do you cover in Malton?",
    a: "Window graphics, frosted and decorative window film, wall wraps, floor graphics, shop front and fascia vinyls, wayfinding vinyls, hoarding graphics, interior graphics and hospitality venue graphics. Installation only — you supply the printed or cut material, we assess the surface and install to spec. Malton is known as the food capital of Yorkshire, with a strong artisan food and drink sector, independent retail, hospitality businesses and the Malton Artisan Food Market — all generating consistent demand for branding graphics, shopfront vinyls and interior promotional material.",
  },
  {
    q: "Do you cover the Ryedale villages and the A64 corridor near Malton?",
    a: "Yes — the wider Malton catchment includes Norton-on-Derwent YO17 (adjacent town, effectively the same area), Kirkbymoorside YO62 (14 miles north), Helmsley YO62 (20 miles north-west), the A64 hotel and business park corridor between Malton and York, and the Derwent Valley rural business zone. Agricultural businesses, food producers, rural hotel and holiday accommodation and the Ryedale district commercial market all generate consistent subcontract installation demand in this zone.",
  },
];

const nearbyPages = [
  { href: "/subcontract-vinyl-installer-york/", label: "York YO1", desc: "25 miles west via A64" },
  { href: "/subcontract-vinyl-installer-pickering/", label: "Pickering YO18", desc: "15 miles north via A169" },
  { href: "/subcontract-vinyl-installer-helmsley/", label: "Helmsley YO62", desc: "20 miles north-west via A170" },
  { href: "/subcontract-vinyl-installer-harrogate/", label: "Harrogate HG1", desc: "30 miles west via A64 and A661" },
];

export default function SubcontractVinylInstallerMalton() {
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
            <span className="text-foreground">Malton</span>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="border-b border-border bg-card py-16 md:py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <p className="text-sm font-medium uppercase tracking-wide text-accent">
            Subcontract Vinyl Installation · Malton YO17
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Subcontract vinyl installer — Malton
          </h1>
          <p className="mt-5 text-lg text-muted leading-relaxed">
            WRPX provides subcontract vinyl installation across Malton and the Ryedale
            YO17 zone for sign companies, print houses and fit-out contractors. White-label
            as standard. Malton sits on the A64 between York (25 miles west) and the North
            Yorkshire coast (25 miles east) — the natural midpoint on the A64 corridor,
            efficiently combined with York or Pickering on the same programme from South Yorkshire.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact/" className="btn-primary">
              Discuss Malton Subcontract Work →
            </Link>
            <Link href="/subcontract-vinyl-installation-yorkshire/" className="btn-secondary">
              Yorkshire Subcontract Hub
            </Link>
          </div>
        </div>
      </section>

      {/* Malton context */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Malton — Yorkshire&apos;s food capital on the A64 corridor
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              Malton is a North Yorkshire market town on the River Derwent, positioned on
              the A64 between York to the west and Scarborough to the east — the main
              arterial route along the Yorkshire coast corridor. Together with Norton-on-Derwent,
              which sits directly across the Derwent and is effectively a single commercial
              area, Malton forms the main market town for the Ryedale district.
            </p>
            <p>
              Malton has a strong identity as the food capital of Yorkshire, centred on
              the Malton Artisan Food Market and a growing cluster of food producers,
              independent food and drink retailers, restaurants and hospitality businesses
              in the town centre. This food economy generates consistent demand for
              shopfront branding, interior graphics, menu boards, promotional vinyls and
              seasonal decorative graphics across the town.
            </p>
            <p>
              Beyond the town centre, the Malton area serves as the commercial hub for
              a broad agricultural and rural business zone — horse racing at Malton and
              Norton (one of the largest racing training centres outside Newmarket),
              agricultural merchants, food producers, country hotels and the rural
              hospitality economy along the Derwent Valley and the Vale of Pickering.
            </p>
            <p>
              For sign companies covering the A64 corridor, Malton is the natural stop
              between York and the coast. A single eastbound day from South Yorkshire via
              the A1(M) and A64 — stopping at York and then continuing to Malton — covers
              the full inland A64 corridor efficiently. Pickering YO18 is 15 miles north
              via the A169, making a combined Malton and Pickering day straightforward.
            </p>
          </div>
        </div>
      </section>

      {/* What we install */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-2xl font-semibold text-foreground md:text-3xl">
            What we install in Malton
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Shop front and food business vinyls</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Cut vinyl lettering, window graphics, fascia vinyls and promotional window
                graphics for Malton food businesses, Market Place retail, the Old Malton Road
                commercial corridor and Norton-on-Derwent town centre businesses.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Interior and hospitality graphics</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Wall graphics, feature wall vinyls, menu board vinyls, wayfinding graphics and
                interior branding for Malton restaurants, hotels, food halls and hospitality
                businesses across the Ryedale area.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Window graphics and frosted film</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Window vinyls, frosted and etched-effect privacy film, decorative window film
                and manifestation for Malton and Norton commercial premises, professional
                services businesses and the rural business community in the surrounding
                Ryedale and Derwent Valley zone.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Horse racing and equine sector graphics</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Branding vinyls, stable yard graphics, office and reception vinyls, event
                graphics and interior branding for the horse racing training yards and equine
                businesses in the Malton and Norton racing zone — one of the UK&apos;s principal
                racehorse training areas.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Agricultural and food producer graphics</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Branding vinyls, farm shop interior graphics, food market stall and display
                vinyls, vehicle graphics and rural business signage for the agricultural
                and food producer community in the Vale of Pickering and Derwent Valley.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">A64 corridor commercial premises</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Office interior vinyls, window graphics, frosted glass partition film and
                reception desk branding for business park and commercial premises on the
                A64 York–Scarborough corridor in the Malton zone.
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
            Malton subcontract installation — common questions
          </h2>
          <FaqAccordion items={faqItems} />
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-20">
        <div className="container mx-auto max-w-3xl">
          <div className="card-float border-2 border-accent/40 p-10 text-center md:p-12">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              Got Malton work coming up?
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Send us the job details — location, surface, material size and access
              requirements. We&apos;ll confirm availability and provide a subcontract rate the
              same day. White-label as standard. No WRPX branding on site or on any
              documentation.
            </p>
            <Link href="/contact/" className="btn-primary mt-8 inline-block">
              Discuss Malton Subcontract Work →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
