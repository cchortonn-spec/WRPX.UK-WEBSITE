import type { Metadata } from "next";
import Link from "next/link";
import { FaqAccordion } from "@/components/FaqAccordion";
import { getServiceSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Subcontract Vinyl Installer Hawes — Sign & Print Company Installation Partner | WRPX",
  description:
    "Subcontract vinyl installation across Hawes and the Upper Wensleydale DL8 zone for sign companies, print houses and fit-out contractors. WRPX covers Hawes market town, the A684 corridor from Leyburn to Hawes, and the wider Upper Wensleydale and Dales visitor economy area. Naturally combined with Leyburn (15 miles east) on the same programme.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/subcontract-vinyl-installer-hawes/",
  },
};

const serviceSchema = getServiceSchema(
  "Subcontract vinyl installer Hawes — sign company and print house installation partner",
  "Professional subcontract vinyl installation for sign companies, print management firms and fit-out contractors across Hawes and the Upper Wensleydale DL8 zone. White-label available. WRPX covers Hawes market town DL8, the A684 corridor between Leyburn and Hawes, the Wensleydale Creamery visitor economy and the wider Yorkshire Dales National Park area."
);

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.wrpx.co.uk/" },
    { "@type": "ListItem", position: 2, name: "Commercial Installation", item: "https://www.wrpx.co.uk/commercial-installation/" },
    { "@type": "ListItem", position: 3, name: "Yorkshire Subcontract Hub", item: "https://www.wrpx.co.uk/subcontract-vinyl-installation-yorkshire/" },
    { "@type": "ListItem", position: 4, name: "Subcontract Installer Hawes", item: "https://www.wrpx.co.uk/subcontract-vinyl-installer-hawes/" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How far is WRPX from Hawes?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Hawes is approximately 1 hour 50 minutes from our South Yorkshire base. The typical route is A1(M) north to Leeming Bar junction 50, then A684 west through Leyburn — approximately 15 miles — and continuing A684 west for a further 15 miles to Hawes DL8. Hawes is the western terminus of the A684 Wensleydale corridor, positioned beyond Leyburn and Masham. It sits within the Yorkshire Dales National Park — a dedicated day from South Yorkshire covers the full Wensleydale corridor west to Hawes.",
      },
    },
    {
      "@type": "Question",
      name: "Do you work white-label in Hawes?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — white-label is standard on all Hawes and Upper Wensleydale DL8 zone work. We arrive in unbranded vehicles, carry out every installation under your brand and provide full photographic documentation — before, during and completed sign-off — in your agreed format on the day. No WRPX branding appears on site, on vehicles or on any documentation.",
      },
    },
    {
      "@type": "Question",
      name: "Can you combine Hawes with Leyburn and Masham on the same programme?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — the A684 Wensleydale corridor runs east from Hawes through Leyburn to Leeming Bar on the A1(M). Leyburn DL8 is 15 miles east of Hawes via A684, and Masham HG4 is a further 14 miles south of Leyburn via A6108. A single westbound day from South Yorkshire via the A1(M) and A684 can productively cover Leyburn and Hawes in sequence — or with an extension add Masham on the return leg. Bedale DL8 is accessible from Leeming Bar on the same routing.",
      },
    },
    {
      "@type": "Question",
      name: "What types of vinyl installation do you cover in Hawes?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Window graphics, frosted and decorative window film, wall wraps, floor graphics, shop front and fascia vinyls, wayfinding vinyls, interior graphics and visitor economy venue graphics. Installation only — you supply the printed or cut material, we assess the surface and install to spec. Hawes is a busy Dales market town centred on the Wensleydale Creamery visitor centre, the Tuesday market and a strong independent hospitality and outdoor trade economy. The wider area generates consistent demand for hospitality branding, interior graphics and rural business vinyl work.",
      },
    },
    {
      "@type": "Question",
      name: "Do you cover Askrigg, Bainbridge and other Upper Wensleydale villages?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — Askrigg DL8 (4 miles east of Hawes), Bainbridge DL8 (5 miles east), Gayle DL8 (1 mile south) and the wider Upper Wensleydale villages are all within the same day zone. The Yorkshire Dales National Park and the extensive self-catering, hotel and outdoor activity business base in the area generates consistent demand for branding, wayfinding and interior graphic work. We can include surrounding Dales villages at no additional mobilisation charge on a Hawes-anchored visit.",
      },
    },
  ],
};

const faqItems = [
  {
    q: "How far is WRPX from Hawes?",
    a: "Hawes is approximately 1 hour 50 minutes from our South Yorkshire base. The typical route is A1(M) north to Leeming Bar junction 50, then A684 west through Leyburn — approximately 15 miles — and continuing A684 west for a further 15 miles to Hawes DL8. Hawes is the western terminus of the A684 Wensleydale corridor, positioned beyond Leyburn and Masham. It sits within the Yorkshire Dales National Park — a dedicated day from South Yorkshire covers the full Wensleydale corridor west to Hawes.",
  },
  {
    q: "Do you work white-label in Hawes?",
    a: "Yes — white-label is standard on all Hawes and Upper Wensleydale DL8 zone work. We arrive in unbranded vehicles, carry out every installation under your brand and provide full photographic documentation — before, during and completed sign-off — in your agreed format on the day. No WRPX branding appears on site, on vehicles or on any documentation.",
  },
  {
    q: "Can you combine Hawes with Leyburn and Masham on the same programme?",
    a: "Yes — the A684 Wensleydale corridor runs east from Hawes through Leyburn to Leeming Bar on the A1(M). Leyburn DL8 is 15 miles east of Hawes via A684, and Masham HG4 is a further 14 miles south of Leyburn via A6108. A single westbound day from South Yorkshire via the A1(M) and A684 can productively cover Leyburn and Hawes in sequence — or with an extension add Masham on the return leg. Bedale DL8 is accessible from Leeming Bar on the same routing.",
  },
  {
    q: "What types of vinyl installation do you cover in Hawes?",
    a: "Window graphics, frosted and decorative window film, wall wraps, floor graphics, shop front and fascia vinyls, wayfinding vinyls, interior graphics and visitor economy venue graphics. Installation only — you supply the printed or cut material, we assess the surface and install to spec. Hawes is a busy Dales market town centred on the Wensleydale Creamery visitor centre, the Tuesday market and a strong independent hospitality and outdoor trade economy. The wider area generates consistent demand for hospitality branding, interior graphics and rural business vinyl work.",
  },
  {
    q: "Do you cover Askrigg, Bainbridge and other Upper Wensleydale villages?",
    a: "Yes — Askrigg DL8 (4 miles east of Hawes), Bainbridge DL8 (5 miles east), Gayle DL8 (1 mile south) and the wider Upper Wensleydale villages are all within the same day zone. The Yorkshire Dales National Park and the extensive self-catering, hotel and outdoor activity business base in the area generates consistent demand for branding, wayfinding and interior graphic work. We can include surrounding Dales villages at no additional mobilisation charge on a Hawes-anchored visit.",
  },
];

const nearbyPages = [
  { href: "/subcontract-vinyl-installer-leyburn/", label: "Leyburn DL8", desc: "15 miles east via A684" },
  { href: "/subcontract-vinyl-installer-masham/", label: "Masham HG4", desc: "29 miles east via A684 and A6108" },
  { href: "/subcontract-vinyl-installer-richmond/", label: "Richmond DL10", desc: "22 miles north-east via A684 and A6108" },
  { href: "/subcontract-vinyl-installer-bedale/", label: "Bedale DL8", desc: "34 miles east via A684 and A684" },
];

export default function SubcontractVinylInstallerHawesPage() {
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
            <span className="text-foreground">Hawes</span>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="border-b border-border bg-card py-16 md:py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <p className="text-sm font-medium uppercase tracking-wide text-accent">
            Subcontract Vinyl Installation · Hawes DL8
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Subcontract vinyl installer — Hawes
          </h1>
          <p className="mt-5 text-lg text-muted leading-relaxed">
            WRPX provides subcontract vinyl installation across Hawes and Upper Wensleydale
            for sign companies, print houses and fit-out contractors. White-label as standard.
            Hawes is the western terminus of the A684 Wensleydale corridor — beyond Leyburn
            (15 miles east) — in the heart of the Yorkshire Dales National Park. Efficiently
            combined with Leyburn and Masham on the same westbound day from South Yorkshire.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact/" className="btn-primary">
              Discuss Hawes Subcontract Work →
            </Link>
            <Link href="/subcontract-vinyl-installation-yorkshire/" className="btn-secondary">
              Yorkshire Subcontract Hub
            </Link>
          </div>
        </div>
      </section>

      {/* Hawes context */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Hawes — Upper Wensleydale market town at the western end of the A684
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              Hawes is a North Yorkshire market town at the head of Wensleydale, positioned
              within the Yorkshire Dales National Park at the western terminus of the A684
              corridor. The A684 connects Hawes east through Askrigg, Bainbridge and Leyburn
              to Leeming Bar on the A1(M) — making it the natural western anchor of the
              full Wensleydale route. Masham HG4 lies south of Leyburn via the A6108, and
              both can be combined with Hawes on the same westbound day from South Yorkshire.
            </p>
            <p>
              Hawes market town is known nationally for the Wensleydale Creamery visitor
              centre — a significant year-round visitor attraction that anchors the wider
              Dales tourism economy in this part of Wensleydale. The town also hosts a
              traditional Tuesday livestock and general market, independent outdoor and
              countryside retailers, independent hospitality, tearooms and accommodation.
              The combination of visitor economy demand, outdoor trade branding and
              rural business graphic requirements generates consistent demand for vinyl
              installation in the area.
            </p>
            <p>
              The wider Upper Wensleydale area includes the villages of Askrigg, Bainbridge,
              Gayle, Hardraw and Simonstone — all within easy reach on the same day. Country
              hotels, holiday cottages, farm businesses, outdoor activity operators and the
              Yorkshire Dales National Park Authority estate in the area are all potential
              sources of vinyl installation work for sign companies covering this zone.
            </p>
          </div>
        </div>
      </section>

      {/* What we install */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-2xl font-semibold text-foreground md:text-3xl">
            What we install in Hawes
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Window graphics and frosted film</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Shop front window graphics, frosted and etched-effect privacy film, decorative
                window vinyl and manifestation for Hawes market town retail, food and drink,
                accommodation and visitor economy premises.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Visitor attraction and creamery graphics</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Interior branding graphics, wall wraps, interpretive panels, window graphics
                and wayfinding vinyls for the Wensleydale Creamery visitor centre and the
                wider Hawes and Upper Wensleydale visitor attraction estate.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Hospitality and hotel venue graphics</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Interior branding, feature wall wraps, bar graphics and wayfinding vinyls for
                Hawes hotels, inns, guesthouses and the wider Upper Wensleydale accommodation
                and hospitality trade.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Shop front and fascia vinyls</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Shop front cut vinyl lettering, fascia graphics and promotional window graphics
                for Hawes town centre and the surrounding Dales commercial premises — outdoor
                trade, food and drink, gifts and rural retail.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Rural and Dales business graphics</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Branding graphics, vehicle graphics, farm entrance signage vinyls and
                outbuilding graphics for agricultural businesses, holiday letting operators,
                outdoor activity companies and rural enterprises across Upper Wensleydale.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Wall wraps and interior graphics</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Wall graphics, feature wall wraps and interior branding for Hawes and
                Upper Wensleydale hospitality, retail and office premises. The visitor
                economy generates refresh demand around seasonal trading periods.
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
            Hawes subcontract installation — common questions
          </h2>
          <FaqAccordion items={faqItems} />
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-20">
        <div className="container mx-auto max-w-3xl">
          <div className="card-float border-2 border-accent/40 p-10 text-center md:p-12">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              Got Hawes work coming up?
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Send us the job details — location, surface, material size and access
              requirements. We&apos;ll confirm availability and provide a subcontract rate the
              same day. White-label as standard. No WRPX branding on site or on any
              documentation.
            </p>
            <Link href="/contact/" className="btn-primary mt-8 inline-block">
              Discuss Hawes Subcontract Work →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
