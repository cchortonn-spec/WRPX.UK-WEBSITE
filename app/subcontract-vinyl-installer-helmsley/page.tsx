import type { Metadata } from "next";
import Link from "next/link";
import { FaqAccordion } from "@/components/FaqAccordion";
import { getServiceSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Subcontract Vinyl Installer Helmsley — Sign & Print Company Installation Partner | WRPX",
  description:
    "Subcontract vinyl installation across Helmsley and the YO62 North York Moors zone for sign companies, print houses and fit-out contractors. WRPX covers Helmsley Market Place, the A170 corridor between Thirsk and Pickering, and the North York Moors National Park visitor economy area. Naturally combined with Thirsk (12 miles west) on the same programme.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/subcontract-vinyl-installer-helmsley/",
  },
};

const serviceSchema = getServiceSchema(
  "Subcontract vinyl installer Helmsley — sign company and print house installation partner",
  "Professional subcontract vinyl installation for sign companies, print management firms and fit-out contractors across Helmsley and the YO62 North York Moors zone. White-label available. WRPX covers Helmsley Market Place YO62, the A170 Thirsk–Pickering corridor, and the wider North Yorkshire visitor and hospitality economy east of Thirsk."
);

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.wrpx.co.uk/" },
    { "@type": "ListItem", position: 2, name: "Commercial Installation", item: "https://www.wrpx.co.uk/commercial-installation/" },
    { "@type": "ListItem", position: 3, name: "Yorkshire Subcontract Hub", item: "https://www.wrpx.co.uk/subcontract-vinyl-installation-yorkshire/" },
    { "@type": "ListItem", position: 4, name: "Subcontract Installer Helmsley", item: "https://www.wrpx.co.uk/subcontract-vinyl-installer-helmsley/" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How far is WRPX from Helmsley?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Helmsley is approximately 1 hour 25 minutes from our South Yorkshire base. The typical route is A1(M) north to junction 49 at Dishforth, A61 north to Thirsk, then the A170 east for approximately 12 miles to Helmsley YO62. Helmsley sits at the north-western gateway to the North York Moors National Park on the A170 between Thirsk (12 miles west) and Pickering (12 miles east) — making it the natural first stop on the North York Moors A170 corridor heading east from the A1(M).",
      },
    },
    {
      "@type": "Question",
      name: "Do you work white-label in Helmsley?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — white-label is standard on all Helmsley and YO62 zone work. We arrive in unbranded vehicles, carry out every installation under your brand and provide full photographic documentation — before, during and completed sign-off — in your agreed format on the day. No WRPX branding appears on site, on vehicles or on any documentation.",
      },
    },
    {
      "@type": "Question",
      name: "Can you combine Helmsley with Thirsk on the same programme?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — and this is the most efficient way to cover the A170 corridor. Thirsk YO7 is 12 miles west of Helmsley via the A170. A single eastbound day from South Yorkshire via the A1(M) and A61 into Thirsk, then continuing east to Helmsley, covers both market towns efficiently. Northallerton DL7 is 12 miles north of Thirsk via the A168 and can be added as a further stop on the same northbound day if there is additional work in the programme.",
      },
    },
    {
      "@type": "Question",
      name: "What types of vinyl installation do you cover in Helmsley?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Window graphics, frosted and decorative window film, wall wraps, floor graphics, shop front and fascia vinyls, wayfinding vinyls, hoarding graphics, interior graphics and hospitality venue graphics. Installation only — you supply the printed or cut material, we assess the surface and install to spec. Helmsley's commercial core centres on the Market Place YO62, with a strong visitor economy driven by the North York Moors National Park, Helmsley Castle and the wider rural tourism trade.",
      },
    },
    {
      "@type": "Question",
      name: "Do you cover the North York Moors villages near Helmsley?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — the wider Helmsley catchment includes Kirkbymoorside YO62 (8 miles east via A170), Sutton Bank and the Hambleton Hills, Rievaulx (3 miles north-west with the Rievaulx Abbey visitor economy), and Oswaldkirk, Ampleforth and the surrounding Ryedale villages. All are within the same day zone. Country hotels, farm businesses, holiday accommodation and the Ampleforth Abbey and College complex in the area generate consistent demand for branding, interior graphics and rural business vinyl work.",
      },
    },
  ],
};

const faqItems = [
  {
    q: "How far is WRPX from Helmsley?",
    a: "Helmsley is approximately 1 hour 25 minutes from our South Yorkshire base. The typical route is A1(M) north to junction 49 at Dishforth, A61 north to Thirsk, then the A170 east for approximately 12 miles to Helmsley YO62. Helmsley sits at the north-western gateway to the North York Moors National Park on the A170 between Thirsk (12 miles west) and Pickering (12 miles east) — making it the natural first stop on the North York Moors A170 corridor heading east from the A1(M).",
  },
  {
    q: "Do you work white-label in Helmsley?",
    a: "Yes — white-label is standard on all Helmsley and YO62 zone work. We arrive in unbranded vehicles, carry out every installation under your brand and provide full photographic documentation — before, during and completed sign-off — in your agreed format on the day. No WRPX branding appears on site, on vehicles or on any documentation.",
  },
  {
    q: "Can you combine Helmsley with Thirsk on the same programme?",
    a: "Yes — and this is the most efficient way to cover the A170 corridor. Thirsk YO7 is 12 miles west of Helmsley via the A170. A single eastbound day from South Yorkshire via the A1(M) and A61 into Thirsk, then continuing east to Helmsley, covers both market towns efficiently. Northallerton DL7 is 12 miles north of Thirsk via the A168 and can be added as a further stop on the same northbound day if there is additional work in the programme.",
  },
  {
    q: "What types of vinyl installation do you cover in Helmsley?",
    a: "Window graphics, frosted and decorative window film, wall wraps, floor graphics, shop front and fascia vinyls, wayfinding vinyls, hoarding graphics, interior graphics and hospitality venue graphics. Installation only — you supply the printed or cut material, we assess the surface and install to spec. Helmsley's commercial core centres on the Market Place YO62, with a strong visitor economy driven by the North York Moors National Park, Helmsley Castle and the wider rural tourism trade.",
  },
  {
    q: "Do you cover the North York Moors villages near Helmsley?",
    a: "Yes — the wider Helmsley catchment includes Kirkbymoorside YO62 (8 miles east via A170), Sutton Bank and the Hambleton Hills, Rievaulx (3 miles north-west with the Rievaulx Abbey visitor economy), and Oswaldkirk, Ampleforth and the surrounding Ryedale villages. All are within the same day zone. Country hotels, farm businesses, holiday accommodation and the Ampleforth Abbey and College complex in the area generate consistent demand for branding, interior graphics and rural business vinyl work.",
  },
];

const nearbyPages = [
  { href: "/subcontract-vinyl-installer-thirsk/", label: "Thirsk YO7", desc: "12 miles west via A170" },
  { href: "/subcontract-vinyl-installer-northallerton/", label: "Northallerton DL7", desc: "20 miles north-west via A170 and A168" },
  { href: "/subcontract-vinyl-installer-york/", label: "York YO1", desc: "25 miles south via A64 and A1036" },
  { href: "/subcontract-vinyl-installer-ripon/", label: "Ripon HG4", desc: "18 miles south-west via A61" },
];

export default function SubcontractVinylInstallerHelmsley() {
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
            <span className="text-foreground">Helmsley</span>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="border-b border-border bg-card py-16 md:py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <p className="text-sm font-medium uppercase tracking-wide text-accent">
            Subcontract Vinyl Installation · Helmsley YO62
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Subcontract vinyl installer — Helmsley
          </h1>
          <p className="mt-5 text-lg text-muted leading-relaxed">
            WRPX provides subcontract vinyl installation across Helmsley and the North York
            Moors YO62 zone for sign companies, print houses and fit-out contractors. White-label
            as standard. Helmsley sits on the A170 between Thirsk (12 miles west) and Pickering
            (12 miles east) — the natural gateway to the North York Moors National Park from
            the A1(M) corridor, efficiently combined with Thirsk on the same day from South Yorkshire.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact/" className="btn-primary">
              Discuss Helmsley Subcontract Work →
            </Link>
            <Link href="/subcontract-vinyl-installation-yorkshire/" className="btn-secondary">
              Yorkshire Subcontract Hub
            </Link>
          </div>
        </div>
      </section>

      {/* Helmsley context */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Helmsley — North York Moors market town on the A170
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              Helmsley is a North Yorkshire market town at the north-western edge of the
              North York Moors National Park, positioned on the A170 between Thirsk to the
              west and Pickering to the east. The town sits at the gateway to the national
              park — making it a significant visitor economy hub with a large concentration
              of hotels, restaurants, cafes, independent retail, holiday accommodation and
              rural businesses that generate consistent demand for branding, interior graphics
              and commercial vinyl work.
            </p>
            <p>
              Helmsley Market Place YO62 is the commercial heart of the town — a large
              cobbled square surrounded by independent food and drink businesses, gift retail,
              professional services and accommodation. The wider Helmsley area includes Rievaulx
              Abbey 3 miles to the north-west, Duncombe Park and its visitor estate, Ampleforth
              Abbey and College 7 miles south-east, and Sutton Bank 7 miles west — all generating
              visitor economy activity and rural business graphic demand.
            </p>
            <p>
              For sign companies covering the North York Moors and the A170 corridor,
              Helmsley is the natural first stop heading east from the A1(M). Thirsk YO7
              is 12 miles west via the A170, and a single eastbound day from South Yorkshire
              covers both market towns without separate mobilisation. The Hambleton Hills,
              Kirkbymoorside and Pickering to the east extend the A170 corridor further.
            </p>
          </div>
        </div>
      </section>

      {/* What we install */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-2xl font-semibold text-foreground md:text-3xl">
            What we install in Helmsley
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Window graphics and frosted film</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Shop front window graphics, frosted and etched-effect privacy film, decorative
                window vinyl and manifestation for Helmsley Market Place retail, food and drink,
                hospitality and professional services premises.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Hospitality and hotel venue graphics</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Interior branding graphics, wall wraps, feature walls, window graphics and
                wayfinding vinyls for Helmsley hotels, restaurants and the wider North York
                Moors visitor accommodation trade — from country house hotels to independent
                guesthouses and holiday cottages.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Wall wraps and interior graphics</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Wall graphics, feature wall wraps and interior branding for Helmsley and
                Ryedale hospitality, retail and office premises. Visitor economy businesses
                in the national park area frequently commission interior graphics refresh
                work around seasonal trading periods.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Shop front and fascia vinyls</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Shop front cut vinyl lettering, fascia graphics and promotional window
                graphics for Helmsley Market Place and surrounding Ryedale and North York
                Moors commercial premises.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Visitor attraction and heritage graphics</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Interpretive panels, wayfinding vinyls, entrance graphics and interior
                display vinyls for heritage and visitor attractions in the Helmsley area
                including the wider North York Moors National Park estate.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Office and professional services graphics</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Office interior vinyls, frosted glass partition film, reception desk graphics
                and wayfinding vinyls for Helmsley professional services, agricultural
                businesses and local commercial premises.
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
            Helmsley subcontract installation — common questions
          </h2>
          <FaqAccordion items={faqItems} />
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-20">
        <div className="container mx-auto max-w-3xl">
          <div className="card-float border-2 border-accent/40 p-10 text-center md:p-12">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              Got Helmsley work coming up?
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Send us the job details — location, surface, material size and access
              requirements. We&apos;ll confirm availability and provide a subcontract rate the
              same day. White-label as standard. No WRPX branding on site or on any
              documentation.
            </p>
            <Link href="/contact/" className="btn-primary mt-8 inline-block">
              Discuss Helmsley Subcontract Work →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
