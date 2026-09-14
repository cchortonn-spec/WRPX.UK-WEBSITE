import type { Metadata } from "next";
import Link from "next/link";
import { FaqAccordion } from "@/components/FaqAccordion";
import { getServiceSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Subcontract Vinyl Installer Pickering — Sign & Print Company Installation Partner | WRPX",
  description:
    "Subcontract vinyl installation across Pickering and the YO18 North York Moors zone for sign companies, print houses and fit-out contractors. WRPX covers Pickering Market Place, the A170 corridor, the North York Moors Railway terminus and the wider Ryedale area. Naturally combined with Helmsley (12 miles west) on the same programme.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/subcontract-vinyl-installer-pickering/",
  },
};

const serviceSchema = getServiceSchema(
  "Subcontract vinyl installer Pickering — sign company and print house installation partner",
  "Professional subcontract vinyl installation for sign companies, print management firms and fit-out contractors across Pickering and the YO18 North York Moors zone. White-label available. WRPX covers Pickering Market Place YO18, the A170 Helmsley–Scarborough corridor, the North York Moors Railway and the wider Ryedale and Vale of Pickering visitor economy area."
);

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.wrpx.co.uk/" },
    { "@type": "ListItem", position: 2, name: "Commercial Installation", item: "https://www.wrpx.co.uk/commercial-installation/" },
    { "@type": "ListItem", position: 3, name: "Yorkshire Subcontract Hub", item: "https://www.wrpx.co.uk/subcontract-vinyl-installation-yorkshire/" },
    { "@type": "ListItem", position: 4, name: "Subcontract Installer Pickering", item: "https://www.wrpx.co.uk/subcontract-vinyl-installer-pickering/" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How far is WRPX from Pickering?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Pickering is approximately 1 hour 35 minutes from our South Yorkshire base. The most direct route is A1(M) north to junction 49 at Dishforth, A61 north to Thirsk, then the A170 east through Helmsley (12 miles west of Pickering) to Pickering YO18. Alternatively, the A64 from York east to the A169 junction at Malton and then north to Pickering is a comparable route. Pickering sits at the southern gateway to the North York Moors National Park on the A170, directly between Helmsley to the west and the Whitby road (A169) to the north.",
      },
    },
    {
      "@type": "Question",
      name: "Do you work white-label in Pickering?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — white-label is standard on all Pickering and YO18 zone work. We arrive in unbranded vehicles, carry out every installation under your brand and provide full photographic documentation — before, during and completed sign-off — in your agreed format on the day. No WRPX branding appears on site, on vehicles or on any documentation.",
      },
    },
    {
      "@type": "Question",
      name: "Can you combine Pickering with Helmsley on the same programme?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — and this is the standard way to cover the A170 North York Moors corridor. Helmsley YO62 is 12 miles west of Pickering via the A170. A single eastbound day from South Yorkshire via the A1(M) and A61 into Thirsk, then east through Helmsley to Pickering, covers both market towns efficiently. Kirkbymoorside YO62 (7 miles west of Pickering via A170) can also be added as an intermediate stop on the same corridor day.",
      },
    },
    {
      "@type": "Question",
      name: "What types of vinyl installation do you cover in Pickering?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Window graphics, frosted and decorative window film, wall wraps, floor graphics, shop front and fascia vinyls, wayfinding vinyls, hoarding graphics, interior graphics and hospitality venue graphics. Installation only — you supply the printed or cut material, we assess the surface and install to spec. Pickering's commercial base includes Market Place retail and hospitality businesses, the North York Moors Railway terminus (a significant visitor economy anchor), agricultural merchants and the wider Ryedale rural business community.",
      },
    },
    {
      "@type": "Question",
      name: "Do you cover the Ryedale and Vale of Pickering villages near Pickering?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — the wider Pickering catchment includes Kirkbymoorside YO62 (7 miles west via A170), Thornton-le-Dale YO18 (3 miles east — one of the most visited villages in North Yorkshire), Whitby (via A169 north, 25 miles) and the Vale of Pickering agricultural and rural business zone. Country hotels, holiday parks, farm businesses and the visitor economy along the Moors and Vale corridor generate consistent demand for interior graphics, window film, branding vinyls and seasonal promotional graphics.",
      },
    },
  ],
};

const faqItems = [
  {
    q: "How far is WRPX from Pickering?",
    a: "Pickering is approximately 1 hour 35 minutes from our South Yorkshire base. The most direct route is A1(M) north to junction 49 at Dishforth, A61 north to Thirsk, then the A170 east through Helmsley (12 miles west of Pickering) to Pickering YO18. Alternatively, the A64 from York east to the A169 junction at Malton and then north to Pickering is a comparable route. Pickering sits at the southern gateway to the North York Moors National Park on the A170, directly between Helmsley to the west and the Whitby road (A169) to the north.",
  },
  {
    q: "Do you work white-label in Pickering?",
    a: "Yes — white-label is standard on all Pickering and YO18 zone work. We arrive in unbranded vehicles, carry out every installation under your brand and provide full photographic documentation — before, during and completed sign-off — in your agreed format on the day. No WRPX branding appears on site, on vehicles or on any documentation.",
  },
  {
    q: "Can you combine Pickering with Helmsley on the same programme?",
    a: "Yes — and this is the standard way to cover the A170 North York Moors corridor. Helmsley YO62 is 12 miles west of Pickering via the A170. A single eastbound day from South Yorkshire via the A1(M) and A61 into Thirsk, then east through Helmsley to Pickering, covers both market towns efficiently. Kirkbymoorside YO62 (7 miles west of Pickering via A170) can also be added as an intermediate stop on the same corridor day.",
  },
  {
    q: "What types of vinyl installation do you cover in Pickering?",
    a: "Window graphics, frosted and decorative window film, wall wraps, floor graphics, shop front and fascia vinyls, wayfinding vinyls, hoarding graphics, interior graphics and hospitality venue graphics. Installation only — you supply the printed or cut material, we assess the surface and install to spec. Pickering's commercial base includes Market Place retail and hospitality businesses, the North York Moors Railway terminus (a significant visitor economy anchor), agricultural merchants and the wider Ryedale rural business community.",
  },
  {
    q: "Do you cover the Ryedale and Vale of Pickering villages near Pickering?",
    a: "Yes — the wider Pickering catchment includes Kirkbymoorside YO62 (7 miles west via A170), Thornton-le-Dale YO18 (3 miles east — one of the most visited villages in North Yorkshire), Whitby (via A169 north, 25 miles) and the Vale of Pickering agricultural and rural business zone. Country hotels, holiday parks, farm businesses and the visitor economy along the Moors and Vale corridor generate consistent demand for interior graphics, window film, branding vinyls and seasonal promotional graphics.",
  },
];

const nearbyPages = [
  { href: "/subcontract-vinyl-installer-helmsley/", label: "Helmsley YO62", desc: "12 miles west via A170" },
  { href: "/subcontract-vinyl-installer-scarborough/", label: "Scarborough YO11", desc: "22 miles south-east via A170" },
  { href: "/subcontract-vinyl-installer-malton/", label: "Malton YO17", desc: "15 miles south via A169" },
  { href: "/subcontract-vinyl-installer-york/", label: "York YO1", desc: "25 miles south-west via A64 and A169" },
];

export default function SubcontractVinylInstallerPickering() {
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
            <span className="text-foreground">Pickering</span>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="border-b border-border bg-card py-16 md:py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <p className="text-sm font-medium uppercase tracking-wide text-accent">
            Subcontract Vinyl Installation · Pickering YO18
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Subcontract vinyl installer — Pickering
          </h1>
          <p className="mt-5 text-lg text-muted leading-relaxed">
            WRPX provides subcontract vinyl installation across Pickering and the North York
            Moors YO18 zone for sign companies, print houses and fit-out contractors.
            White-label as standard. Pickering sits on the A170 between Helmsley (12 miles
            west) and the North Yorkshire coast — the natural next stop east on the North
            York Moors corridor from South Yorkshire.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact/" className="btn-primary">
              Discuss Pickering Subcontract Work →
            </Link>
            <Link href="/subcontract-vinyl-installation-yorkshire/" className="btn-secondary">
              Yorkshire Subcontract Hub
            </Link>
          </div>
        </div>
      </section>

      {/* Pickering context */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Pickering — gateway to the North York Moors
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              Pickering is a North Yorkshire market town at the southern edge of the North
              York Moors National Park. It serves as the gateway to the moors from the Vale
              of Pickering — positioned on the A170 between Helmsley to the west and the
              North Yorkshire coast to the east, and at the A169 junction that connects the
              Whitby road north through the national park. The town is the southern terminus
              of the North York Moors Railway, which runs north through Goathland to Whitby —
              a major visitor economy anchor.
            </p>
            <p>
              Pickering Market Place YO18 is the commercial centre of the town, surrounded
              by independent retail, food and drink businesses, accommodation and services.
              The wider Pickering area includes Thornton-le-Dale 3 miles east — regularly
              cited as one of the most visited villages in North Yorkshire — Kirby Misperton
              (home to Flamingo Land), and the agricultural Vale of Pickering stretching
              south. Country hotels, farm shops, holiday parks, rural businesses and the
              visitor economy along the Moors corridor generate consistent demand for
              branding graphics, interior vinyl work and seasonal promotional material.
            </p>
            <p>
              For sign companies covering the North York Moors and the A170 corridor,
              Pickering is the natural second stop east after Helmsley. A single day from
              South Yorkshire via the A1(M) and A61 to Thirsk, then east on the A170
              through Helmsley to Pickering, covers the full western North York Moors
              corridor without separate mobilisation costs.
            </p>
          </div>
        </div>
      </section>

      {/* What we install */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-2xl font-semibold text-foreground md:text-3xl">
            What we install in Pickering
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Window graphics and frosted film</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Shop front window graphics, frosted and etched-effect privacy film, decorative
                window vinyl and manifestation for Pickering Market Place retail, hospitality
                and professional services premises, plus rural businesses in the Ryedale zone.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Hospitality and visitor economy graphics</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Interior branding, wall wraps, feature walls, wayfinding vinyls and window
                graphics for Pickering hotels, guesthouses, restaurants and the wider North
                York Moors visitor economy — including the North York Moors Railway hospitality
                and heritage operation.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Wall wraps and interior graphics</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Wall graphics, feature wall wraps and interior branding for Pickering and Ryedale
                hospitality, retail and office premises. Visitor economy businesses in the moors
                area frequently commission interior graphics refresh work ahead of seasonal peaks.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Shop front and fascia vinyls</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Cut vinyl lettering, fascia graphics and promotional window graphics for Pickering
                Market Place and surrounding Vale of Pickering and North York Moors commercial premises.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Holiday park and leisure graphics</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Wayfinding systems, lodge and cabin branding, reception graphics, activity zone
                vinyls and seasonal promotional material for the holiday parks and leisure
                attractions in the Pickering and Kirby Misperton area.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Agricultural and rural business graphics</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Branding vinyls, office and showroom graphics, vehicle graphics and farm shop
                interior vinyls for agricultural merchants, rural businesses and food producers
                in the Vale of Pickering.
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
            Pickering subcontract installation — common questions
          </h2>
          <FaqAccordion items={faqItems} />
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-20">
        <div className="container mx-auto max-w-3xl">
          <div className="card-float border-2 border-accent/40 p-10 text-center md:p-12">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              Got Pickering work coming up?
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Send us the job details — location, surface, material size and access
              requirements. We&apos;ll confirm availability and provide a subcontract rate the
              same day. White-label as standard. No WRPX branding on site or on any
              documentation.
            </p>
            <Link href="/contact/" className="btn-primary mt-8 inline-block">
              Discuss Pickering Subcontract Work →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
