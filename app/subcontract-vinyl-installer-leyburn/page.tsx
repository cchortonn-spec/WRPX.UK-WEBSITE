import type { Metadata } from "next";
import Link from "next/link";
import { FaqAccordion } from "@/components/FaqAccordion";
import { getServiceSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Subcontract Vinyl Installer Leyburn — Sign & Print Company Installation Partner | WRPX",
  description:
    "Subcontract vinyl installation across Leyburn and the DL8 Wensleydale zone for sign companies, print houses and fit-out contractors. WRPX covers Leyburn Market Place, the A684 Wensleydale corridor, Middleham (5 miles south) and Bedale (10 miles east). Easily combined with Richmond or Northallerton on the same programme.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/subcontract-vinyl-installer-leyburn/",
  },
};

const serviceSchema = getServiceSchema(
  "Subcontract vinyl installer Leyburn — sign company and print house installation partner",
  "Professional subcontract vinyl installation for sign companies, print management firms and fit-out contractors across Leyburn and the DL8 Wensleydale zone. White-label available. WRPX covers Leyburn Market Place, the A684 Wensleydale corridor, Middleham, Bedale and the wider North Yorkshire Dales market town zone between Richmond and Northallerton."
);

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.wrpx.co.uk/" },
    { "@type": "ListItem", position: 2, name: "Commercial Installation", item: "https://www.wrpx.co.uk/commercial-installation/" },
    { "@type": "ListItem", position: 3, name: "Yorkshire Subcontract Hub", item: "https://www.wrpx.co.uk/subcontract-vinyl-installation-yorkshire/" },
    { "@type": "ListItem", position: 4, name: "Subcontract Installer Leyburn", item: "https://www.wrpx.co.uk/subcontract-vinyl-installer-leyburn/" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How far is WRPX from Leyburn?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Leyburn is approximately 1 hour 30 minutes from our South Yorkshire base. The typical route is A1(M) north to J53 at Scotch Corner, then A6108 west for 12 miles into Leyburn DL8 — approximately 85 miles door to door. Leyburn sits in Wensleydale, 8 miles west of Richmond via the A684. We frequently combine Leyburn with a Richmond DL10 visit on the same northbound day — Scotch Corner is the natural junction for both.",
      },
    },
    {
      "@type": "Question",
      name: "Do you work white-label in Leyburn?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — white-label is standard on all Leyburn and DL8 zone work. We arrive in unbranded vehicles, carry out every installation under your brand and provide full photographic documentation — before, during and completed sign-off — in your agreed format on the day. No WRPX branding appears on site, on vehicles or on any documentation.",
      },
    },
    {
      "@type": "Question",
      name: "Can you combine Leyburn with Richmond on the same programme?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — and this is the most efficient way to cover the North Yorkshire Dales corridor. Leyburn DL8 is 8 miles west of Richmond DL10 via the A684. We reach both from A1(M) J53 at Scotch Corner — Richmond is 12 miles west of J53, Leyburn a further 8 miles west. A single day combining Richmond and Leyburn avoids two separate mobilisations from South Yorkshire. Northallerton is a further 12 miles east of Richmond via the A684/A6136, making a three-stop North Yorkshire day viable.",
      },
    },
    {
      "@type": "Question",
      name: "What types of vinyl installation do you cover in Leyburn?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Window graphics, frosted and decorative window film, wall wraps, floor graphics, shop front and fascia vinyls, wayfinding vinyls, hoarding graphics, office interior graphics and retail and hospitality graphics. Installation only — you supply the printed or cut material, we assess the surface and install to spec. Leyburn's commercial core centres on Market Place DL8 and the Shawl area, with independent retail, hospitality and agricultural trade businesses.",
      },
    },
    {
      "@type": "Question",
      name: "Do you cover Middleham and the Wensleydale villages near Leyburn?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — Middleham DL8 is 5 miles south of Leyburn via the A6108, and we can include Middleham on the same visit as Leyburn at no additional mobilisation cost. Middleham has a significant equine industry (racing stables) which generates consistent demand for livery, branding and hospitality graphics. The A684 Wensleydale corridor through Bainbridge, Askrigg and Hawes is reachable for large-scale projects requiring a dedicated day.",
      },
    },
  ],
};

const faqItems = [
  {
    q: "How far is WRPX from Leyburn?",
    a: "Leyburn is approximately 1 hour 30 minutes from our South Yorkshire base. The typical route is A1(M) north to J53 at Scotch Corner, then A6108 west for 12 miles into Leyburn DL8 — approximately 85 miles door to door. Leyburn sits in Wensleydale, 8 miles west of Richmond via the A684. We frequently combine Leyburn with a Richmond DL10 visit on the same northbound day — Scotch Corner is the natural junction for both.",
  },
  {
    q: "Do you work white-label in Leyburn?",
    a: "Yes — white-label is standard on all Leyburn and DL8 zone work. We arrive in unbranded vehicles, carry out every installation under your brand and provide full photographic documentation — before, during and completed sign-off — in your agreed format on the day. No WRPX branding appears on site, on vehicles or on any documentation.",
  },
  {
    q: "Can you combine Leyburn with Richmond on the same programme?",
    a: "Yes — and this is the most efficient way to cover the North Yorkshire Dales corridor. Leyburn DL8 is 8 miles west of Richmond DL10 via the A684. We reach both from A1(M) J53 at Scotch Corner — Richmond is 12 miles west of J53, Leyburn a further 8 miles west. A single day combining Richmond and Leyburn avoids two separate mobilisations from South Yorkshire. Northallerton is a further 12 miles east of Richmond via the A684/A6136, making a three-stop North Yorkshire day viable.",
  },
  {
    q: "What types of vinyl installation do you cover in Leyburn?",
    a: "Window graphics, frosted and decorative window film, wall wraps, floor graphics, shop front and fascia vinyls, wayfinding vinyls, hoarding graphics, office interior graphics and retail and hospitality graphics. Installation only — you supply the printed or cut material, we assess the surface and install to spec. Leyburn's commercial core centres on Market Place DL8 and the Shawl area, with independent retail, hospitality and agricultural trade businesses.",
  },
  {
    q: "Do you cover Middleham and the Wensleydale villages near Leyburn?",
    a: "Yes — Middleham DL8 is 5 miles south of Leyburn via the A6108, and we can include Middleham on the same visit as Leyburn at no additional mobilisation cost. Middleham has a significant equine industry (racing stables) which generates consistent demand for livery, branding and hospitality graphics. The A684 Wensleydale corridor through Bainbridge, Askrigg and Hawes is reachable for large-scale projects requiring a dedicated day.",
  },
];

const nearbyPages = [
  { href: "/subcontract-vinyl-installer-richmond/", label: "Richmond DL10", desc: "8 miles east via A684" },
  { href: "/subcontract-vinyl-installer-northallerton/", label: "Northallerton DL7", desc: "20 miles east via A684 and A6136" },
  { href: "/subcontract-vinyl-installer-ripon/", label: "Ripon HG4", desc: "20 miles south-east via A6108 and A61" },
  { href: "/subcontract-vinyl-installer-harrogate/", label: "Harrogate HG1", desc: "30 miles south-east via A61" },
];

export default function SubcontractVinylInstallerLeyburnPage() {
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
            <span className="text-foreground">Leyburn</span>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="border-b border-border bg-card py-16 md:py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <p className="text-sm font-medium uppercase tracking-wide text-accent">
            Subcontract Vinyl Installation · Leyburn DL8
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Subcontract vinyl installer — Leyburn
          </h1>
          <p className="mt-5 text-lg text-muted leading-relaxed">
            WRPX provides subcontract vinyl installation across Leyburn and the DL8
            Wensleydale zone for sign companies, print houses and fit-out contractors.
            White-label as standard. Leyburn is 8 miles west of Richmond via the A684 —
            easily combined with Richmond or Northallerton on the same northbound day from
            South Yorkshire. Call or email to discuss Leyburn work.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact/" className="btn-primary">
              Discuss Leyburn Subcontract Work →
            </Link>
            <Link href="/subcontract-vinyl-installation-yorkshire/" className="btn-secondary">
              Yorkshire Subcontract Hub
            </Link>
          </div>
        </div>
      </section>

      {/* Leyburn context */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Leyburn — Wensleydale market town on the A684
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              Leyburn is the largest market town in Wensleydale, sitting at the junction of
              the A684 Wensleydale corridor and the A6108 south to Ripon. The town serves
              as the main commercial hub for the upper and middle Wensleydale area — a wide
              rural hinterland that includes numerous villages, farms, estates and country
              hospitality businesses with consistent graphics and signage requirements.
            </p>
            <p>
              Leyburn Market Place DL8 is the commercial heart of the town, with independent
              retail, food and hospitality businesses, agricultural services and professional
              offices. The town draws significant visitor traffic given its position as a
              gateway to the Yorkshire Dales National Park, generating demand for tourism
              graphics, hospitality branding and seasonal promotional materials.
            </p>
            <p>
              For sign companies covering the North Yorkshire Dales area, Leyburn is the
              natural complement to a Richmond DL10 day. Both towns are reached from A1(M)
              J53 at Scotch Corner — Richmond is 12 miles west of J53, Leyburn a further
              8 miles west on the A684. A single day out of South Yorkshire covers both
              without additional mobilisation costs. Middleham DL8 — the famous racehorse
              training centre 5 miles south — adds a further stop at no extra travel cost.
            </p>
          </div>
        </div>
      </section>

      {/* What we install */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-2xl font-semibold text-foreground md:text-3xl">
            What we install in Leyburn
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Window graphics and frosted film</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Shop front window graphics, frosted and etched-effect privacy film, decorative
                window vinyl and manifestation for Leyburn Market Place retail, hospitality
                and professional office premises.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Wall wraps and interior graphics</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Wall graphics, feature wall wraps, pub, restaurant and hospitality interior
                branding graphics and office interior vinyl across Leyburn and Wensleydale
                commercial premises.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Shop front and fascia vinyls</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Shop front cut vinyl lettering, fascia graphics and promotional window
                graphics for Leyburn Market Place and High Street retail and food and
                drink businesses.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Country hospitality graphics</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Branding graphics, room identification vinyls and interior feature wall
                graphics for country hotels, pubs, tea rooms and holiday accommodation
                across the Leyburn and Wensleydale area — a recurring requirement given
                the visitor economy.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Agricultural and equine branding</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Branding vinyls, door and vehicle graphics for agricultural businesses,
                racing stables at Middleham and equine facilities across the Wensleydale
                area — a specific and consistent work type in this part of North Yorkshire.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Hoarding and event graphics</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Construction hoarding graphics, event and promotional graphics and temporary
                vinyl installations for Leyburn and the surrounding Wensleydale market
                towns and event venues.
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
            Leyburn subcontract installation — common questions
          </h2>
          <FaqAccordion items={faqItems} />
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-20">
        <div className="container mx-auto max-w-3xl">
          <div className="card-float border-2 border-accent/40 p-10 text-center md:p-12">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              Got Leyburn work coming up?
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Send us the job details — location, surface, material size and access
              requirements. We&apos;ll confirm availability and provide a subcontract rate the
              same day. White-label as standard. No WRPX branding on site or on any
              documentation.
            </p>
            <Link href="/contact/" className="btn-primary mt-8 inline-block">
              Discuss Leyburn Subcontract Work →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
