import type { Metadata } from "next";
import Link from "next/link";
import { FaqAccordion } from "@/components/FaqAccordion";
import { getServiceSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Subcontract Vinyl Installer Bedale — Sign & Print Company Installation Partner | WRPX",
  description:
    "Subcontract vinyl installation across Bedale and the DL8 North Yorkshire zone for sign companies, print houses and fit-out contractors. WRPX covers Bedale Market Place, the A684 corridor to Leyburn and Northallerton. Naturally combined with Northallerton (10 miles east) or Leyburn (10 miles west) on the same programme.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/subcontract-vinyl-installer-bedale/",
  },
};

const serviceSchema = getServiceSchema(
  "Subcontract vinyl installer Bedale — sign company and print house installation partner",
  "Professional subcontract vinyl installation for sign companies, print management firms and fit-out contractors across Bedale and the DL8 zone. White-label available. WRPX covers Bedale Market Place, the A684 corridor, Crakehall DL8, Well DL8 and the wider North Yorkshire market town zone between Northallerton and Leyburn."
);

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.wrpx.co.uk/" },
    { "@type": "ListItem", position: 2, name: "Commercial Installation", item: "https://www.wrpx.co.uk/commercial-installation/" },
    { "@type": "ListItem", position: 3, name: "Yorkshire Subcontract Hub", item: "https://www.wrpx.co.uk/subcontract-vinyl-installation-yorkshire/" },
    { "@type": "ListItem", position: 4, name: "Subcontract Installer Bedale", item: "https://www.wrpx.co.uk/subcontract-vinyl-installer-bedale/" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How far is WRPX from Bedale?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Bedale is approximately 1 hour 20 minutes from our South Yorkshire base. The typical route is A1(M) north to J50 at Leeming Bar, then A684 west for approximately 4 miles into Bedale DL8 — around 75 miles door to door. Bedale sits on the A684 between Northallerton (10 miles east) and Leyburn (10 miles west), making it the natural midpoint stop on the North Yorkshire Dales corridor. We frequently combine Bedale with Northallerton or Leyburn — or all three — on the same northbound day.",
      },
    },
    {
      "@type": "Question",
      name: "Do you work white-label in Bedale?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — white-label is standard on all Bedale and DL8 zone work. We arrive in unbranded vehicles, carry out every installation under your brand and provide full photographic documentation — before, during and completed sign-off — in your agreed format on the day. No WRPX branding appears on site, on vehicles or on any documentation.",
      },
    },
    {
      "@type": "Question",
      name: "Can you combine Bedale with Northallerton and Leyburn on the same day?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — and this is the most efficient way to cover the North Yorkshire A684 corridor. Northallerton DL7 is 10 miles east of Bedale via the A684, and Leyburn DL8 is 10 miles west. All three are reached from A1(M) J50 at Leeming Bar — a single northbound day from South Yorkshire can cover Northallerton, Bedale and Leyburn without unnecessary backtracking. We can also extend south to Ripon or Boroughbridge if there is additional work on the same programme.",
      },
    },
    {
      "@type": "Question",
      name: "What types of vinyl installation do you cover in Bedale?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Window graphics, frosted and decorative window film, wall wraps, floor graphics, shop front and fascia vinyls, wayfinding vinyls, hoarding graphics, office interior graphics and retail and hospitality graphics. Installation only — you supply the printed or cut material, we assess the surface and install to spec. Bedale's commercial core centres on Market Place DL8, with independent retail, food and drink, professional services and agricultural businesses.",
      },
    },
    {
      "@type": "Question",
      name: "Do you cover Crakehall and other villages near Bedale?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — Crakehall DL8 is approximately 2 miles south-west of Bedale and can be included on the same visit without additional mobilisation cost. Well DL8 and Patrick Brompton DL8 are similarly reachable. The A684 corridor provides good access to the wider Bedale hinterland, which includes significant agricultural, equine and rural hospitality businesses with consistent demand for branding and graphics work.",
      },
    },
  ],
};

const faqItems = [
  {
    q: "How far is WRPX from Bedale?",
    a: "Bedale is approximately 1 hour 20 minutes from our South Yorkshire base. The typical route is A1(M) north to J50 at Leeming Bar, then A684 west for approximately 4 miles into Bedale DL8 — around 75 miles door to door. Bedale sits on the A684 between Northallerton (10 miles east) and Leyburn (10 miles west), making it the natural midpoint stop on the North Yorkshire Dales corridor. We frequently combine Bedale with Northallerton or Leyburn — or all three — on the same northbound day.",
  },
  {
    q: "Do you work white-label in Bedale?",
    a: "Yes — white-label is standard on all Bedale and DL8 zone work. We arrive in unbranded vehicles, carry out every installation under your brand and provide full photographic documentation — before, during and completed sign-off — in your agreed format on the day. No WRPX branding appears on site, on vehicles or on any documentation.",
  },
  {
    q: "Can you combine Bedale with Northallerton and Leyburn on the same day?",
    a: "Yes — and this is the most efficient way to cover the North Yorkshire A684 corridor. Northallerton DL7 is 10 miles east of Bedale via the A684, and Leyburn DL8 is 10 miles west. All three are reached from A1(M) J50 at Leeming Bar — a single northbound day from South Yorkshire can cover Northallerton, Bedale and Leyburn without unnecessary backtracking. We can also extend south to Ripon or Boroughbridge if there is additional work on the same programme.",
  },
  {
    q: "What types of vinyl installation do you cover in Bedale?",
    a: "Window graphics, frosted and decorative window film, wall wraps, floor graphics, shop front and fascia vinyls, wayfinding vinyls, hoarding graphics, office interior graphics and retail and hospitality graphics. Installation only — you supply the printed or cut material, we assess the surface and install to spec. Bedale's commercial core centres on Market Place DL8, with independent retail, food and drink, professional services and agricultural businesses.",
  },
  {
    q: "Do you cover Crakehall and other villages near Bedale?",
    a: "Yes — Crakehall DL8 is approximately 2 miles south-west of Bedale and can be included on the same visit without additional mobilisation cost. Well DL8 and Patrick Brompton DL8 are similarly reachable. The A684 corridor provides good access to the wider Bedale hinterland, which includes significant agricultural, equine and rural hospitality businesses with consistent demand for branding and graphics work.",
  },
];

const nearbyPages = [
  { href: "/subcontract-vinyl-installer-northallerton/", label: "Northallerton DL7", desc: "10 miles east via A684" },
  { href: "/subcontract-vinyl-installer-leyburn/", label: "Leyburn DL8", desc: "10 miles west via A684" },
  { href: "/subcontract-vinyl-installer-ripon/", label: "Ripon HG4", desc: "12 miles south via A6108" },
  { href: "/subcontract-vinyl-installer-boroughbridge/", label: "Boroughbridge YO51", desc: "20 miles south via A1(M)" },
];

export default function SubcontractVinylInstallerBedalePage() {
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
            <span className="text-foreground">Bedale</span>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="border-b border-border bg-card py-16 md:py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <p className="text-sm font-medium uppercase tracking-wide text-accent">
            Subcontract Vinyl Installation · Bedale DL8
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Subcontract vinyl installer — Bedale
          </h1>
          <p className="mt-5 text-lg text-muted leading-relaxed">
            WRPX provides subcontract vinyl installation across Bedale and the DL8 North
            Yorkshire zone for sign companies, print houses and fit-out contractors.
            White-label as standard. Bedale sits on the A684 between Northallerton (10 miles
            east) and Leyburn (10 miles west) — easily combined with either on the same day
            from South Yorkshire. Call or email to discuss Bedale work.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact/" className="btn-primary">
              Discuss Bedale Subcontract Work →
            </Link>
            <Link href="/subcontract-vinyl-installation-yorkshire/" className="btn-secondary">
              Yorkshire Subcontract Hub
            </Link>
          </div>
        </div>
      </section>

      {/* Bedale context */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Bedale — North Yorkshire market town on the A684
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              Bedale is a North Yorkshire market town in the Hambleton district, sitting on
              the A684 between Northallerton and Leyburn. The town is accessed from the A1(M)
              at Junction 50 — Leeming Bar — approximately 4 miles east. This position makes
              Bedale a highly efficient stop on the northbound A1(M) run from South Yorkshire,
              sitting naturally between the Northallerton DL7 and Leyburn DL8 subcontract zones
              we already cover.
            </p>
            <p>
              Bedale Market Place DL8 is a wide Georgian market square lined with independent
              retail, food and drink businesses, professional services and agricultural trade
              premises. The town serves as the main commercial hub for a large rural hinterland
              of North Yorkshire villages and farms, generating consistent demand for shop front
              graphics, interior branding, window film and hospitality graphics across the
              Bedale and Hambleton area.
            </p>
            <p>
              For sign companies covering the North Yorkshire Dales and Hambleton corridor,
              Bedale is the natural bridge stop between Northallerton and Leyburn. All three
              are accessible from the A1(M) J50 junction without significant deviation — a
              single day out of South Yorkshire via the A1(M) can productively cover all
              three market towns, with Ripon HG4 and Boroughbridge YO51 accessible as
              additional stops further south on the same routing.
            </p>
          </div>
        </div>
      </section>

      {/* What we install */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-2xl font-semibold text-foreground md:text-3xl">
            What we install in Bedale
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Window graphics and frosted film</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Shop front window graphics, frosted and etched-effect privacy film, decorative
                window vinyl and manifestation for Bedale Market Place retail, hospitality
                and professional office premises.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Wall wraps and interior graphics</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Wall graphics, feature wall wraps, pub, restaurant and hospitality interior
                branding graphics and office interior vinyl across Bedale and the wider
                Hambleton district commercial premises.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Shop front and fascia vinyls</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Shop front cut vinyl lettering, fascia graphics and promotional window
                graphics for Bedale Market Place and Wycar retail and food and drink
                businesses.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Rural hospitality and agricultural graphics</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Branding graphics, room identification vinyls and interior feature wall
                graphics for country hotels, pubs, tea rooms and holiday accommodation
                across the Bedale and Hambleton area — a consistent work type given the
                visitor economy and agricultural character of the district.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Office and professional services graphics</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Office interior vinyls, frosted glass partition film, reception desk
                graphics and wayfinding vinyls for Bedale professional services, solicitors,
                estate agents and other commercial premises on and around Market Place.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Hoarding and promotional graphics</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Construction hoarding graphics, event and promotional graphics and temporary
                vinyl installations for Bedale and the surrounding North Yorkshire market
                towns and agricultural show venues.
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
            Bedale subcontract installation — common questions
          </h2>
          <FaqAccordion items={faqItems} />
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-20">
        <div className="container mx-auto max-w-3xl">
          <div className="card-float border-2 border-accent/40 p-10 text-center md:p-12">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              Got Bedale work coming up?
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Send us the job details — location, surface, material size and access
              requirements. We&apos;ll confirm availability and provide a subcontract rate the
              same day. White-label as standard. No WRPX branding on site or on any
              documentation.
            </p>
            <Link href="/contact/" className="btn-primary mt-8 inline-block">
              Discuss Bedale Subcontract Work →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
