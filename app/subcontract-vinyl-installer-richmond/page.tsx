import type { Metadata } from "next";
import Link from "next/link";
import { FaqAccordion } from "@/components/FaqAccordion";
import { getServiceSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Subcontract Vinyl Installer Richmond — Sign & Print Company Installation Partner | WRPX",
  description:
    "Subcontract vinyl installation across Richmond and the DL10 zone for sign companies, print houses and fit-out contractors. WRPX covers Richmond town centre, the A6108 Swale valley corridor, the Catterick Garrison retail zone and the wider North Yorkshire Dales market. Easily combined with Northallerton, Darlington or Leyburn on the same programme.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/subcontract-vinyl-installer-richmond/",
  },
};

const serviceSchema = getServiceSchema(
  "Subcontract vinyl installer Richmond DL10 — sign company and print house installation partner",
  "Professional subcontract vinyl installation for sign companies, print management firms and fit-out contractors across Richmond and the DL10 zone. White-label available. WRPX covers Richmond town centre, the Catterick Garrison retail and commercial zone, the A6108 Swale valley corridor and the wider Richmondshire district."
);

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.wrpx.co.uk/" },
    { "@type": "ListItem", position: 2, name: "Commercial Installation", item: "https://www.wrpx.co.uk/commercial-installation/" },
    { "@type": "ListItem", position: 3, name: "Yorkshire Subcontract Hub", item: "https://www.wrpx.co.uk/subcontract-vinyl-installation-yorkshire/" },
    { "@type": "ListItem", position: 4, name: "Subcontract Installer Richmond", item: "https://www.wrpx.co.uk/subcontract-vinyl-installer-richmond/" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How far is WRPX from Richmond, North Yorkshire?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Richmond DL10 is approximately 1 hour 20 minutes from our South Yorkshire base. The most direct route is the A1(M) north to junction 53 at Scotch Corner, then the A6108 west into Richmond town centre — approximately 72 miles door to door. Richmond sits 12 miles west of Northallerton DL7 via the A684/A6108 and 8 miles west of Scotch Corner on the A1(M). Darlington DL1 is approximately 14 miles north-east.",
      },
    },
    {
      "@type": "Question",
      name: "Do you work white-label in Richmond?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — white-label is standard on all Richmond and DL10 zone work. We arrive in unbranded vehicles, carry out every installation under your brand and provide full photographic documentation — before, during and completed sign-off — in your agreed format on the day. No WRPX branding appears on site, on vehicles or on any documentation.",
      },
    },
    {
      "@type": "Question",
      name: "Can you combine Richmond with Northallerton or Darlington on the same programme?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — and this is the most efficient way to run the A1(M) north corridor. Richmond DL10 is reached via Scotch Corner junction 53, which also gives easy access to Darlington DL1 (14 miles north-east), Northallerton DL7 (12 miles south-east via A684) and Catterick Garrison DL9 (4 miles east on the A6136). A single northbound visit from South Yorkshire can cover Richmond, Catterick and Northallerton without separate mobilisations.",
      },
    },
    {
      "@type": "Question",
      name: "What types of vinyl installation do you cover in Richmond?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Window graphics, frosted and decorative window film, wall wraps, floor graphics, shop front and fascia vinyls, wayfinding vinyls, hoarding graphics, office interior graphics and retail and hospitality graphics. Installation only — you supply the printed or cut material, we assess the surface and install to spec. Richmond's commercial core centres on the Market Place DL10, Newbiggin and the Georgian town centre retail and hospitality streets.",
      },
    },
    {
      "@type": "Question",
      name: "Do you cover Catterick Garrison near Richmond?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — Catterick Garrison DL9 is 4 miles east of Richmond on the A6136 and is well within our Richmond coverage zone. The garrison's substantial retail and commercial areas — the Princess Royal Shopping Centre on Catterick Road, the garrison sports facilities and the cluster of hospitality units serving the large resident military population — all generate regular commercial graphics and vinyl installation requirements. We cover Catterick Garrison on the same Richmond-day programme.",
      },
    },
  ],
};

const faqItems = [
  {
    q: "How far is WRPX from Richmond, North Yorkshire?",
    a: "Richmond DL10 is approximately 1 hour 20 minutes from our South Yorkshire base. The most direct route is the A1(M) north to junction 53 at Scotch Corner, then the A6108 west into Richmond town centre — approximately 72 miles door to door. Richmond sits 12 miles west of Northallerton DL7 via the A684/A6108 and 8 miles west of Scotch Corner on the A1(M). Darlington DL1 is approximately 14 miles north-east.",
  },
  {
    q: "Do you work white-label in Richmond?",
    a: "Yes — white-label is standard on all Richmond and DL10 zone work. We arrive in unbranded vehicles, carry out every installation under your brand and provide full photographic documentation — before, during and completed sign-off — in your agreed format on the day. No WRPX branding appears on site, on vehicles or on any documentation.",
  },
  {
    q: "Can you combine Richmond with Northallerton or Darlington on the same programme?",
    a: "Yes — and this is the most efficient way to run the A1(M) north corridor. Richmond DL10 is reached via Scotch Corner junction 53, which also gives easy access to Darlington DL1 (14 miles north-east), Northallerton DL7 (12 miles south-east via A684) and Catterick Garrison DL9 (4 miles east on the A6136). A single northbound visit from South Yorkshire can cover Richmond, Catterick and Northallerton without separate mobilisations.",
  },
  {
    q: "What types of vinyl installation do you cover in Richmond?",
    a: "Window graphics, frosted and decorative window film, wall wraps, floor graphics, shop front and fascia vinyls, wayfinding vinyls, hoarding graphics, office interior graphics and retail and hospitality graphics. Installation only — you supply the printed or cut material, we assess the surface and install to spec. Richmond's commercial core centres on the Market Place DL10, Newbiggin and the Georgian town centre retail and hospitality streets.",
  },
  {
    q: "Do you cover Catterick Garrison near Richmond?",
    a: "Yes — Catterick Garrison DL9 is 4 miles east of Richmond on the A6136 and is well within our Richmond coverage zone. The garrison's substantial retail and commercial areas — the Princess Royal Shopping Centre on Catterick Road, the garrison sports facilities and the cluster of hospitality units serving the large resident military population — all generate regular commercial graphics and vinyl installation requirements. We cover Catterick Garrison on the same Richmond-day programme.",
  },
];

const nearbyPages = [
  { href: "/subcontract-vinyl-installer-northallerton/", label: "Northallerton DL7", desc: "12 miles south-east via A684/A6108" },
  { href: "/subcontract-vinyl-installer-thirsk/", label: "Thirsk YO7", desc: "22 miles south via A168/A1(M)" },
];

export default function SubcontractVinylInstallerRichmondPage() {
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
            <span className="text-foreground">Richmond</span>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="border-b border-border bg-card py-16 md:py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <p className="text-sm font-medium uppercase tracking-wide text-accent">
            Subcontract Vinyl Installation · Richmond DL10
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Subcontract vinyl installer in Richmond, North Yorkshire
          </h1>
          <p className="mt-5 text-lg text-muted leading-relaxed">
            WRPX provides subcontract vinyl installation across Richmond and the DL10 zone
            for sign companies, print houses and fit-out contractors. Window graphics, wall
            wraps, frosted film, retail graphics and commercial interior vinyls — white-label,
            fully documented, professional sign-off. Covering Richmond town centre, Catterick
            Garrison and the wider Richmondshire district.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact/" className="btn-primary">
              Discuss Richmond Installation Work →
            </Link>
            <Link href="/subcontract-vinyl-installation-yorkshire/" className="btn-secondary">
              Subcontract Installation Overview
            </Link>
          </div>
        </div>
      </section>

      {/* Richmond context */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Richmond and the Richmondshire area — the commercial geography
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              Richmond DL10 is a Georgian market town at the head of Swaledale in North
              Yorkshire, 8 miles west of Scotch Corner on the A1(M) via the A6108. The town
              serves as the commercial centre for Richmondshire district, with an active
              independent retail and hospitality offer on the Market Place and the surrounding
              Georgian streets. Despite its rural setting, Richmond has a substantial year-round
              commercial base driven by its market town role and proximity to the A1(M).
            </p>
            <p>
              Catterick Garrison DL9, 4 miles east of Richmond on the A6136, significantly
              amplifies the commercial market for the Richmondshire area. The garrison is one
              of the largest Army bases in the UK, with a self-contained retail and commercial
              area — including the Princess Royal Shopping Centre, a large supermarket, leisure
              facilities and a wide range of hospitality units — serving a permanent population
              of several thousand service personnel and their families. This creates consistent
              demand for commercial graphics and vinyl installation work in an area that sign
              companies based in Darlington, Northallerton or Leeds may find time-consuming to
              reach individually.
            </p>
            <p>
              The wider DL10 and Richmondshire commercial area extends along the A6136 east
              towards the A1(M) corridor at Scotch Corner, and north along the B6271 into the
              Swaledale villages. Leyburn DL8 is 8 miles west and serves as the commercial
              hub for Wensleydale — accessible on the same Richmond-day programme.
            </p>
          </div>
        </div>
      </section>

      {/* What we install */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-2xl font-semibold text-foreground md:text-3xl">
            What we install in Richmond and the Richmondshire area
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Window graphics and frosted film</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Shop front window graphics, frosted and etched-effect privacy film, promotional
                graphics and decorative window vinyl across Richmond Market Place and Catterick
                Garrison commercial areas. You supply the material; we install to spec.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Wall wraps and internal graphics</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Interior wall graphics, brand murals, wayfinding vinyls and feature wall wraps
                for retail, hospitality and commercial interiors across Richmond and the
                Richmondshire district. Installation to flat and lightly textured wall surfaces.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Garrison commercial graphics</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Catterick Garrison retail unit graphics, hospitality venue vinyls, sports facility
                graphics and commercial interior vinyls across the garrison commercial zone — a
                high-density commercial area that benefits from reliable, professional subcontract
                installation support.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Fascia and shopfront vinyls</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Applied graphics on shopfront fascias, flat panel signs and building-mounted vinyl
                applications across Richmond town centre on Market Place, Newbiggin and Frenchgate
                commercial streets.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Floor graphics and vinyls</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Anti-slip floor vinyl, directional floor graphics and promotional floor vinyls
                for retail and hospitality venues across Richmond and Catterick Garrison.
                Appropriate anti-slip rated films for public areas.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Hoarding and temporary graphics</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Temporary hoarding graphics for development sites across Richmond and the
                Richmondshire area. Printed and cut hoarding panel wraps installed to
                site-safe specification.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How we work */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            How subcontract installation works with WRPX
          </h2>
          <div className="space-y-6 text-muted leading-relaxed">
            <p>
              <strong className="text-foreground">Installation only.</strong>{" "}
              You supply the printed or cut material. We arrive on site in Richmond, assess
              the surface condition, install to the agreed specification and provide photographic
              documentation before and after. No design, no print, no material supply — just
              clean, professional installation under your brand.
            </p>
            <p>
              <strong className="text-foreground">White-label throughout.</strong>{" "}
              We arrive in unbranded vehicles and carry all paperwork under your company name.
              The Richmond client sees your brand from first contact to sign-off. We provide
              before and after photography in whatever format your project management system requires.
            </p>
            <p>
              <strong className="text-foreground">Combinable with the A1(M) north corridor.</strong>{" "}
              Richmond is most efficiently visited as part of a northbound A1(M) programme
              combining Richmond DL10, Catterick Garrison DL9, Northallerton DL7 and Thirsk YO7
              on the same run. We schedule these A1(M) corridor programmes with a single
              mobilisation from South Yorkshire — reducing your per-site travel cost on
              multi-location North Yorkshire programmes.
            </p>
            <p>
              <strong className="text-foreground">Reliable, documented, repeatable.</strong>{" "}
              Every Richmond installation is completed to a consistent standard, documented
              with site photography and reported back to you on the day. The same approach
              at every site — suitable for brand rollout, seasonal campaigns and multi-site
              refurbishment programmes across the North Yorkshire market town circuit.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-3xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Richmond subcontract installation — common questions
          </h2>
          <FaqAccordion items={faqItems} />
        </div>
      </section>

      {/* Nearby pages */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Nearby areas we cover on the same visit
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {nearbyPages.map(({ href, label, desc }) => (
              <Link key={href} href={href} className="card-float p-5 hover:border-accent/60 transition-colors">
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
              Sign company or print house with work in Richmond?
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Tell us about the job — surfaces, quantities, access and deadline — and we&apos;ll
              confirm availability and price. White-label, photographed, professionally done.
            </p>
            <Link href="/contact/" className="btn-primary mt-8 inline-block">
              Discuss Richmond Installation Work →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
