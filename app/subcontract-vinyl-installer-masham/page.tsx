import type { Metadata } from "next";
import Link from "next/link";
import { FaqAccordion } from "@/components/FaqAccordion";
import { getServiceSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Subcontract Vinyl Installer Masham — Sign & Print Company Installation Partner | WRPX",
  description:
    "Subcontract vinyl installation across Masham and the HG4 Wensleydale zone for sign companies, print houses and fit-out contractors. WRPX covers Masham Market Place, the A6108 corridor between Ripon and Leyburn. Naturally combined with Ripon (12 miles south) or Leyburn (14 miles north) on the same programme.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/subcontract-vinyl-installer-masham/",
  },
};

const serviceSchema = getServiceSchema(
  "Subcontract vinyl installer Masham — sign company and print house installation partner",
  "Professional subcontract vinyl installation for sign companies, print management firms and fit-out contractors across Masham and the Wensleydale HG4 zone. White-label available. WRPX covers Masham Market Place HG4, the A6108 corridor between Ripon and Leyburn, and the wider North Yorkshire brewery and visitor economy area."
);

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.wrpx.co.uk/" },
    { "@type": "ListItem", position: 2, name: "Commercial Installation", item: "https://www.wrpx.co.uk/commercial-installation/" },
    { "@type": "ListItem", position: 3, name: "Yorkshire Subcontract Hub", item: "https://www.wrpx.co.uk/subcontract-vinyl-installation-yorkshire/" },
    { "@type": "ListItem", position: 4, name: "Subcontract Installer Masham", item: "https://www.wrpx.co.uk/subcontract-vinyl-installer-masham/" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How far is WRPX from Masham?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Masham is approximately 1 hour 25 minutes from our South Yorkshire base. The typical route is A1(M) north to Leeming Bar J50, then south-west on the A6108 for approximately 10 miles to Masham HG4. Alternatively A1(M) north to Ripon, then A6108 north for 12 miles. Masham sits on the A6108 between Ripon (12 miles south) and Leyburn (14 miles north), making it the natural midpoint stop on the Wensleydale corridor — efficiently combined with either on the same northbound day.",
      },
    },
    {
      "@type": "Question",
      name: "Do you work white-label in Masham?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — white-label is standard on all Masham and Wensleydale HG4 zone work. We arrive in unbranded vehicles, carry out every installation under your brand and provide full photographic documentation — before, during and completed sign-off — in your agreed format on the day. No WRPX branding appears on site, on vehicles or on any documentation.",
      },
    },
    {
      "@type": "Question",
      name: "Can you combine Masham with Ripon and Leyburn on the same day?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — and this is the most efficient way to cover the A6108 Wensleydale corridor. Ripon HG4 is 12 miles south of Masham via the A6108, and Leyburn DL8 is 14 miles north. A single northbound day from South Yorkshire via the A1(M) can productively cover Ripon, Masham and Leyburn in sequence. Bedale DL8 is a further 8 miles north-east of Leyburn, and Boroughbridge YO51 is reachable south of Ripon on the same routing if there is additional work in the programme.",
      },
    },
    {
      "@type": "Question",
      name: "What types of vinyl installation do you cover in Masham?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Window graphics, frosted and decorative window film, wall wraps, floor graphics, shop front and fascia vinyls, wayfinding vinyls, hoarding graphics, interior graphics and hospitality and brewery venue graphics. Installation only — you supply the printed or cut material, we assess the surface and install to spec. Masham's commercial core centres on its large cobbled Market Place HG4, with the Theakston and Black Sheep breweries, independent hospitality, food and drink, and rural businesses forming the main client base.",
      },
    },
    {
      "@type": "Question",
      name: "Do you cover Healey and other villages near Masham?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — Healey HG4 is approximately 3 miles south-east and can be included on the same Masham visit without significant additional travel. The wider Masham hinterland includes Fearby HG4, Swinton HG4 and Wensleydale villages to the north — all within the same day zone. The North Yorkshire tourism and visitor economy in this area generates consistent demand for hospitality graphics, interior branding and rural business signage.",
      },
    },
  ],
};

const faqItems = [
  {
    q: "How far is WRPX from Masham?",
    a: "Masham is approximately 1 hour 25 minutes from our South Yorkshire base. The typical route is A1(M) north to Leeming Bar J50, then south-west on the A6108 for approximately 10 miles to Masham HG4. Alternatively A1(M) north to Ripon, then A6108 north for 12 miles. Masham sits on the A6108 between Ripon (12 miles south) and Leyburn (14 miles north), making it the natural midpoint stop on the Wensleydale corridor — efficiently combined with either on the same northbound day.",
  },
  {
    q: "Do you work white-label in Masham?",
    a: "Yes — white-label is standard on all Masham and Wensleydale HG4 zone work. We arrive in unbranded vehicles, carry out every installation under your brand and provide full photographic documentation — before, during and completed sign-off — in your agreed format on the day. No WRPX branding appears on site, on vehicles or on any documentation.",
  },
  {
    q: "Can you combine Masham with Ripon and Leyburn on the same day?",
    a: "Yes — and this is the most efficient way to cover the A6108 Wensleydale corridor. Ripon HG4 is 12 miles south of Masham via the A6108, and Leyburn DL8 is 14 miles north. A single northbound day from South Yorkshire via the A1(M) can productively cover Ripon, Masham and Leyburn in sequence. Bedale DL8 is a further 8 miles north-east of Leyburn, and Boroughbridge YO51 is reachable south of Ripon on the same routing if there is additional work in the programme.",
  },
  {
    q: "What types of vinyl installation do you cover in Masham?",
    a: "Window graphics, frosted and decorative window film, wall wraps, floor graphics, shop front and fascia vinyls, wayfinding vinyls, hoarding graphics, interior graphics and hospitality and brewery venue graphics. Installation only — you supply the printed or cut material, we assess the surface and install to spec. Masham's commercial core centres on its large cobbled Market Place HG4, with the Theakston and Black Sheep breweries, independent hospitality, food and drink, and rural businesses forming the main client base.",
  },
  {
    q: "Do you cover Healey and other villages near Masham?",
    a: "Yes — Healey HG4 is approximately 3 miles south-east and can be included on the same Masham visit without significant additional travel. The wider Masham hinterland includes Fearby HG4, Swinton HG4 and Wensleydale villages to the north — all within the same day zone. The North Yorkshire tourism and visitor economy in this area generates consistent demand for hospitality graphics, interior branding and rural business signage.",
  },
];

const nearbyPages = [
  { href: "/subcontract-vinyl-installer-ripon/", label: "Ripon HG4", desc: "12 miles south via A6108" },
  { href: "/subcontract-vinyl-installer-leyburn/", label: "Leyburn DL8", desc: "14 miles north via A6108" },
  { href: "/subcontract-vinyl-installer-bedale/", label: "Bedale DL8", desc: "18 miles north-east via A6108 and A684" },
  { href: "/subcontract-vinyl-installer-boroughbridge/", label: "Boroughbridge YO51", desc: "22 miles south via A6108 and A1(M)" },
];

export default function SubcontractVinylInstallerMashamPage() {
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
            <span className="text-foreground">Masham</span>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="border-b border-border bg-card py-16 md:py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <p className="text-sm font-medium uppercase tracking-wide text-accent">
            Subcontract Vinyl Installation · Masham HG4
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Subcontract vinyl installer — Masham
          </h1>
          <p className="mt-5 text-lg text-muted leading-relaxed">
            WRPX provides subcontract vinyl installation across Masham and the Wensleydale
            HG4 zone for sign companies, print houses and fit-out contractors. White-label
            as standard. Masham sits on the A6108 between Ripon (12 miles south) and Leyburn
            (14 miles north) — the natural midpoint on the Wensleydale corridor, efficiently
            combined with either on the same day from South Yorkshire.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact/" className="btn-primary">
              Discuss Masham Subcontract Work →
            </Link>
            <Link href="/subcontract-vinyl-installation-yorkshire/" className="btn-secondary">
              Yorkshire Subcontract Hub
            </Link>
          </div>
        </div>
      </section>

      {/* Masham context */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Masham — Wensleydale market town on the A6108
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              Masham is a North Yorkshire market town in the Harrogate district, positioned
              on the A6108 between Ripon to the south and Leyburn to the north. The town
              is known nationally for the Theakston and Black Sheep breweries, both of which
              operate visitor centres and hospitality facilities from the town — giving Masham
              a strong visitor economy and a brewery-driven commercial character that generates
              consistent demand for branding, graphics and interior vinyl work.
            </p>
            <p>
              Masham Market Place HG4 is one of the largest cobbled market squares in North
              Yorkshire — lined with independent food and drink businesses, hotels, tearooms,
              craft and gift retail, and professional services. The surrounding Wensleydale
              hinterland extends north towards Leyburn and Hawes, providing a broad rural
              catchment of country hotels, holiday accommodation, farm businesses and
              agricultural enterprises with ongoing branding and signage requirements.
            </p>
            <p>
              For sign companies covering the A6108 Wensleydale and Ripon corridor, Masham
              is the natural midpoint stop between Ripon and Leyburn. All three are reached
              from A1(M) Leeming Bar J50 or via Ripon — a single northbound day from South
              Yorkshire can productively cover Ripon, Masham and Leyburn in sequence, with
              Bedale DL8 accessible as a further stop to the north-east.
            </p>
          </div>
        </div>
      </section>

      {/* What we install */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-2xl font-semibold text-foreground md:text-3xl">
            What we install in Masham
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Window graphics and frosted film</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Shop front window graphics, frosted and etched-effect privacy film, decorative
                window vinyl and manifestation for Masham Market Place retail, food and drink,
                and professional services premises.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Brewery and hospitality venue graphics</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Interior branding graphics, wall wraps, feature walls, window graphics and
                wayfinding vinyls for the Theakston and Black Sheep visitor centres and the
                wider Masham hospitality trade — bars, restaurants, hotels and tearooms.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Wall wraps and interior graphics</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Wall graphics, feature wall wraps and interior branding for Masham and
                Wensleydale hospitality, retail and office premises. Visitor economy
                businesses frequently require interior graphics refresh work for seasonal
                trading periods.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Shop front and fascia vinyls</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Shop front cut vinyl lettering, fascia graphics and promotional window
                graphics for Masham Market Place and Wensleydale commercial premises.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Rural hospitality and country house graphics</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Branding graphics, room identification vinyls, interior feature walls and
                directional signage for country hotels, holiday cottages and rural hospitality
                businesses across the wider Masham and Wensleydale area.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Office and professional services graphics</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Office interior vinyls, frosted glass partition film, reception desk graphics
                and wayfinding vinyls for Masham professional services, agricultural
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
            Masham subcontract installation — common questions
          </h2>
          <FaqAccordion items={faqItems} />
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-20">
        <div className="container mx-auto max-w-3xl">
          <div className="card-float border-2 border-accent/40 p-10 text-center md:p-12">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              Got Masham work coming up?
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Send us the job details — location, surface, material size and access
              requirements. We&apos;ll confirm availability and provide a subcontract rate the
              same day. White-label as standard. No WRPX branding on site or on any
              documentation.
            </p>
            <Link href="/contact/" className="btn-primary mt-8 inline-block">
              Discuss Masham Subcontract Work →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
