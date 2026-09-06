import type { Metadata } from "next";
import Link from "next/link";
import { FaqAccordion } from "@/components/FaqAccordion";
import { getServiceSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Subcontract Vinyl Installer Northallerton — Sign & Print Company Installation Partner | WRPX",
  description:
    "Subcontract vinyl installation across Northallerton and the DL7 zone for sign companies, print houses and fit-out contractors. WRPX covers Northallerton town centre, Tesco Extra DL7, the A1(M) J50 corridor and the North Yorkshire county town market. Easily combined with Ripon, Knaresborough or Darlington on the same programme.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/subcontract-vinyl-installer-northallerton/",
  },
};

const serviceSchema = getServiceSchema(
  "Subcontract vinyl installer Northallerton — sign company and print house installation partner",
  "Professional subcontract vinyl installation for sign companies, print management firms and fit-out contractors across Northallerton and the DL7 zone. White-label available. WRPX covers Northallerton town centre, the High Street DL7, Tesco Extra retail park, the A1(M) J50 corridor and the wider North Yorkshire county town area."
);

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.wrpx.co.uk/" },
    { "@type": "ListItem", position: 2, name: "Commercial Installation", item: "https://www.wrpx.co.uk/commercial-installation/" },
    { "@type": "ListItem", position: 3, name: "Yorkshire Subcontract Hub", item: "https://www.wrpx.co.uk/subcontract-vinyl-installation-yorkshire/" },
    { "@type": "ListItem", position: 4, name: "Subcontract Installer Northallerton", item: "https://www.wrpx.co.uk/subcontract-vinyl-installer-northallerton/" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How far is WRPX from Northallerton?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Northallerton is approximately 1 hour 10 minutes from our South Yorkshire base. The most direct route is the A1(M) north to junction 50 at Leeming Bar, then the A684 west into Northallerton town centre — approximately 65 miles door to door. Northallerton is the county town of North Yorkshire, sitting on the A1(M) between Ripon (15 miles south) and Darlington (17 miles north).",
      },
    },
    {
      "@type": "Question",
      name: "Do you work white-label in Northallerton?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — white-label is standard on all Northallerton and DL7 zone work. We arrive in unbranded vehicles, carry out every installation under your brand and provide full photographic documentation — before, during and completed sign-off — in your agreed format on the day. No WRPX branding appears on site, on vehicles or on any documentation.",
      },
    },
    {
      "@type": "Question",
      name: "Can you combine Northallerton with Ripon or Knaresborough on the same programme?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — Northallerton sits on the A1(M) corridor 15 miles north of Ripon HG4 and 28 miles north of Knaresborough HG5. For sign companies with work running up the A1(M) from Knaresborough through Ripon to Northallerton, a single northbound visit covers all three North Yorkshire towns without separate mobilisations. Darlington DL1 is a further 17 miles north, which we also cover.",
      },
    },
    {
      "@type": "Question",
      name: "What types of vinyl installation do you cover in Northallerton?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Window graphics, frosted and decorative window film, wall wraps, floor graphics, shop front and fascia vinyls, wayfinding vinyls, hoarding graphics, office interior graphics and retail and hospitality graphics. Installation only — you supply the printed or cut material, we assess the surface and install to spec. Northallerton's commercial core centres on the High Street DL7, the Tesco Extra retail park north of town and the A684 / A167 business zones.",
      },
    },
    {
      "@type": "Question",
      name: "Do you cover the surrounding North Yorkshire market towns near Northallerton?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — Northallerton serves as the county town of North Yorkshire and sits in the centre of a cluster of smaller market towns. Thirsk YO7 is 12 miles south-east via the A168. Bedale DL8 is 7 miles west via the A684. Richmond DL10 is 15 miles north-west. Stokesley TS9 is 12 miles north-east via the A172. A combined visit can cover Northallerton and one or two neighbouring towns without separate mobilisations.",
      },
    },
  ],
};

const faqItems = [
  {
    q: "How far is WRPX from Northallerton?",
    a: "Northallerton is approximately 1 hour 10 minutes from our South Yorkshire base. The most direct route is the A1(M) north to junction 50 at Leeming Bar, then the A684 west into Northallerton town centre — approximately 65 miles door to door. Northallerton is the county town of North Yorkshire, sitting on the A1(M) between Ripon (15 miles south) and Darlington (17 miles north).",
  },
  {
    q: "Do you work white-label in Northallerton?",
    a: "Yes — white-label is standard on all Northallerton and DL7 zone work. We arrive in unbranded vehicles, carry out every installation under your brand and provide full photographic documentation — before, during and completed sign-off — in your agreed format on the day. No WRPX branding appears on site, on vehicles or on any documentation.",
  },
  {
    q: "Can you combine Northallerton with Ripon or Knaresborough on the same programme?",
    a: "Yes — Northallerton sits on the A1(M) corridor 15 miles north of Ripon HG4 and 28 miles north of Knaresborough HG5. For sign companies with work running up the A1(M) from Knaresborough through Ripon to Northallerton, a single northbound visit covers all three North Yorkshire towns without separate mobilisations. Darlington DL1 is a further 17 miles north, which we also cover.",
  },
  {
    q: "What types of vinyl installation do you cover in Northallerton?",
    a: "Window graphics, frosted and decorative window film, wall wraps, floor graphics, shop front and fascia vinyls, wayfinding vinyls, hoarding graphics, office interior graphics and retail and hospitality graphics. Installation only — you supply the printed or cut material, we assess the surface and install to spec. Northallerton's commercial core centres on the High Street DL7, the Tesco Extra retail park north of town and the A684 / A167 business zones.",
  },
  {
    q: "Do you cover the surrounding North Yorkshire market towns near Northallerton?",
    a: "Yes — Northallerton serves as the county town of North Yorkshire and sits in the centre of a cluster of smaller market towns. Thirsk YO7 is 12 miles south-east via the A168. Bedale DL8 is 7 miles west via the A684. Richmond DL10 is 15 miles north-west. Stokesley TS9 is 12 miles north-east via the A172. A combined visit can cover Northallerton and one or two neighbouring towns without separate mobilisations.",
  },
];

const nearbyPages = [
  { href: "/subcontract-vinyl-installer-ripon/", city: "Ripon", postcode: "HG4", desc: "Ripon city centre — 15 miles south via A1(M)" },
  { href: "/subcontract-vinyl-installer-knaresborough/", city: "Knaresborough", postcode: "HG5", desc: "Knaresborough town centre — 28 miles south via A1(M)" },
  { href: "/subcontract-vinyl-installer-darlington/", city: "Darlington", postcode: "DL1", desc: "Darlington town centre — 17 miles north via A1(M)" },
  { href: "/subcontract-vinyl-installer-harrogate/", city: "Harrogate", postcode: "HG1", desc: "Harrogate town centre — 18 miles south via A1(M) and A61" },
];

export default function SubcontractVinylInstallerNorthallertonPage() {
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
            <span className="text-foreground">Subcontract Installer Northallerton</span>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="border-b border-border bg-card py-16 md:py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <p className="text-sm font-medium uppercase tracking-wide text-accent">
            Subcontract Vinyl Installation · Northallerton DL7
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Subcontract vinyl installer — Northallerton and the DL7 zone
          </h1>
          <p className="mt-5 text-lg text-muted leading-relaxed">
            WRPX provides white-label subcontract vinyl installation for sign companies,
            print management firms and fit-out contractors with work in Northallerton and the
            DL7 zone. We cover Northallerton town centre, the High Street DL7, the Tesco Extra
            retail park and the A1(M) J50 corridor — easily combined with Ripon, Knaresborough
            or Darlington on the same programme.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact/" className="btn-primary">
              Get in Touch About Northallerton Work →
            </Link>
            <Link href="/subcontract-vinyl-installation-yorkshire/" className="btn-secondary">
              Yorkshire Subcontract Hub
            </Link>
          </div>
        </div>
      </section>

      {/* Coverage and context */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Northallerton and the DL7 zone — coverage and context
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              Northallerton is the county town of North Yorkshire — the administrative centre for
              the wider North Yorkshire Council area and a significant retail and commercial hub
              for the Vale of Mowbray and surrounding rural area. The High Street DL7 is one of
              the busiest market town high streets in North Yorkshire, with a strong independent
              retail mix alongside national chains — a regular market for shop front vinyls,
              window graphics and internal display installations.
            </p>
            <p>
              The A1(M) junction 50 at Leeming Bar sits just east of Northallerton — the principal
              motorway access point for the town and the wider DL7 zone. This makes Northallerton
              a natural extension of an A1(M) corridor programme working north from our South
              Yorkshire base: Ripon HG4 (15 miles south of Northallerton), Knaresborough HG5
              (28 miles south) and Darlington DL1 (17 miles north) are all accessible on the
              same route without significant backtracking.
            </p>
            <p>
              Northallerton Racecourse — one of North Yorkshire&apos;s principal leisure venues — and
              the growing retail offer at the Tesco Extra retail park north of the town centre
              both generate periodic graphics and display installation work. The town also serves
              as a significant administrative centre for NHS Hambleton and Richmondshire District
              — substantial office premises that regularly require window film and internal vinyl
              work.
            </p>
          </div>
        </div>
      </section>

      {/* What we install */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-2xl font-semibold text-foreground md:text-3xl">
            What we install in Northallerton
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Shop front and fascia vinyls</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Cut and printed vinyls on Northallerton High Street DL7 shop fronts and fascias.
                Supplied by your print or sign company — we install to spec and provide
                photographic sign-off.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Window graphics and frosted film</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Printed window graphics, frosted privacy film, etched-effect film and
                decorative vinyls across Northallerton retail, office and hospitality premises.
                Cut-to-shape and full-panel applications.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Wall graphics and wraps</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Printed wall graphic installation, architectural vinyl wall wraps and large-format
                display installations across Northallerton commercial, retail and healthcare
                premises on the DL7 postcode zone.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Office interior graphics</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Glass partition vinyls, wayfinding and directional vinyls, motivational wall
                graphics, meeting room identification and internal branding across Northallerton
                office and commercial premises.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Hoarding and temporary graphics</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Hoarding vinyls for construction and development sites across Northallerton and
                the North Yorkshire county area. Temporary promotional and event graphics for
                Northallerton Racecourse and retail park venues.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Floor graphics</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Anti-slip floor vinyl installation across Northallerton retail, hospitality and
                healthcare premises. Applied to specification with anti-slip overlaminate for
                foot-traffic areas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How we work */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            How white-label subcontract installation works
          </h2>
          <div className="space-y-6 text-muted leading-relaxed">
            <p>
              <strong className="text-foreground">You supply, we install.</strong>{" "}
              Your sign or print company produces the material to spec — we collect it or
              you ship it direct to site — and we assess the surface, install to specification
              and photograph the finished result. No WRPX branding in front of your client.
            </p>
            <p>
              <strong className="text-foreground">White-label by default.</strong>{" "}
              We arrive in unbranded vehicles and carry your paperwork throughout the Northallerton
              installation. All photographic documentation — before, during and sign-off — is
              formatted to your requirements and delivered to your project manager or account
              handler on the day.
            </p>
            <p>
              <strong className="text-foreground">A1(M) corridor programmes.</strong>{" "}
              Northallerton is the northernmost point of a natural A1(M) subcontract corridor
              from our South Yorkshire base. Sign companies with regular North Yorkshire work
              can schedule Northallerton, Ripon and Knaresborough in a single northbound day
              — reducing mobilisation cost significantly compared with three separate visits.
            </p>
          </div>
        </div>
      </section>

      {/* Nearby */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Nearby areas we also cover
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {nearbyPages.map(({ href, city, postcode, desc }) => (
              <Link key={href} href={href} className="card-float p-5 hover:border-accent/60 transition-colors">
                <h3 className="font-semibold text-foreground">{city} <span className="text-muted font-normal">({postcode})</span></h3>
                <p className="mt-2 text-sm text-muted">{desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-3xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Northallerton subcontract installation — common questions
          </h2>
          <FaqAccordion items={faqItems} />
        </div>
      </section>

      {/* CTA */}
      <section className="bg-card px-4 py-20">
        <div className="container mx-auto max-w-3xl">
          <div className="card-float border-2 border-accent/40 p-10 text-center md:p-12">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              Sign company with work in Northallerton?
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              We cover Northallerton and the DL7 zone for white-label subcontract vinyl
              installation. Tell us the job — surface, material, location and access — and
              we&apos;ll confirm availability and pricing.
            </p>
            <Link href="/contact/" className="btn-primary mt-8 inline-block">
              Get in Touch About Northallerton Work →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
