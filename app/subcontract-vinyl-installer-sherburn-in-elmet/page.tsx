import type { Metadata } from "next";
import Link from "next/link";
import { FaqAccordion } from "@/components/FaqAccordion";
import { getServiceSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Subcontract Vinyl Installer Sherburn-in-Elmet — Sign & Print Company Installation Partner | WRPX",
  description:
    "Subcontract vinyl installation across Sherburn-in-Elmet and the LS25 corridor for sign companies, print houses and fit-out contractors. WRPX covers Sherburn-in-Elmet market town, Sherburn Enterprise Park, the A63 Leeds–Hull corridor, the A1(M) junction 42 zone and the A64 axis. Naturally combined with Tadcaster (8 miles west), Selby (10 miles east) or Wetherby (10 miles north-west) on the same programme.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/subcontract-vinyl-installer-sherburn-in-elmet/",
  },
};

const serviceSchema = getServiceSchema(
  "Subcontract vinyl installer Sherburn-in-Elmet — sign company and print house installation partner",
  "Professional subcontract vinyl installation for sign companies, print management firms and fit-out contractors across Sherburn-in-Elmet and the LS25 corridor. White-label available. WRPX covers Sherburn-in-Elmet town centre LS25, Sherburn Enterprise Park LS25, the A63 Leeds–Hull corridor, the A1(M) junction 42 zone and the A64 axis. Naturally combined with Tadcaster, Selby or Wetherby on the same programme."
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
      name: "Subcontract Installer Sherburn-in-Elmet",
      item: "https://www.wrpx.co.uk/subcontract-vinyl-installer-sherburn-in-elmet/",
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How far is WRPX from Sherburn-in-Elmet?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sherburn-in-Elmet LS25 is approximately 40 to 50 minutes from our South Yorkshire base. The most direct route from Sheffield is the M1 north to junction 46 (Leeds south), then the A63 east through Garforth and South Milford to Sherburn-in-Elmet — a relatively straight run on dual carriageway and A-road from the motorway. Alternatively, the A1(M) north to junction 44 (Aberford/Garforth), then the A642 south-east or the back roads through Aberford to Sherburn — adding a few minutes but avoiding the M1/A63 interchange. The A1(M) junction 42 at Bramham is approximately 7 miles north-west of Sherburn via the A1(M) and A64, making the Bramham approach a viable option for runs arriving from the A1(M) corridor. Sherburn-in-Elmet is one of those Yorkshire market towns that sits very efficiently on the A63 axis — accessible from South Yorkshire without complex junctions.",
      },
    },
    {
      "@type": "Question",
      name: "Do you work white-label in Sherburn-in-Elmet?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — white-label is standard on all Sherburn-in-Elmet and LS25 corridor work. We arrive in unbranded vehicles, carry out every installation under your brand and provide full photographic documentation — before, during and completed sign-off — in your agreed format on the day. No WRPX branding appears on site, on vehicles or on any documentation. For sign companies and print houses managing Sherburn or wider A63 corridor clients, we operate as a fully invisible extension of your delivery team.",
      },
    },
    {
      "@type": "Question",
      name: "Can you combine Sherburn-in-Elmet with Tadcaster, Selby or Wetherby on the same programme?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — Sherburn-in-Elmet is exceptionally well-placed for combined corridor programmes. Tadcaster LS24 is approximately 8 miles west via the A162 or the back roads through Barkston Ash — under 15 minutes. Selby YO8 is approximately 10 miles east via the A63 — around 15 minutes. Wetherby LS22 is approximately 10 miles north-west via the A162 north and then A58/A659 — around 20 minutes. A Sherburn-anchored programme covering Tadcaster (west), Sherburn (centre), and Selby (east) connects three separate Yorkshire market towns across the A63 axis in a single co-ordinated day from South Yorkshire. Adding Wetherby to the north extends this into a four-town programme without significantly increasing total drive time. Sherburn-in-Elmet is one of the better pivot points on the A63 for multi-stop Yorkshire day runs.",
      },
    },
    {
      "@type": "Question",
      name: "What types of vinyl installation do you cover in Sherburn-in-Elmet?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Window graphics, frosted and decorative window film, wall wraps, floor graphics, shop front and fascia vinyls, wayfinding vinyls, hoarding graphics, interior graphics and hospitality venue graphics. Sherburn-in-Elmet town centre — primarily Low Street, Kirkgate, Finkle Hill and the surrounding streets — carries independent retailers, estate agents, professional services businesses and local food and drink venues with consistent window graphics and fascia vinyl requirements. Sherburn Enterprise Park LS25 on the southern edge of the town generates commercial graphics, directional vinyls, fascia installations and unit identification work for the business units and warehousing on site. The surrounding rural area — Barkston Ash, South Milford, Church Fenton and the villages of the Selby district — produces agricultural and rural estate graphics work, yard signage and logistics vehicle graphics within easy reach.",
      },
    },
    {
      "@type": "Question",
      name: "Do you cover Sherburn Enterprise Park and the surrounding LS25 industrial areas?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Sherburn Enterprise Park LS25 is one of the larger industrial and business estates in the Selby district, housing a mix of light industrial units, logistics, distribution and commercial premises. Unit identification graphics, directional vinyls, fascia and window graphics for businesses on the park are within scope for subcontract installation — accessible from the A63 without entering the town centre. The wider LS25 postcode also covers Garforth LS25 to the north-west (a larger suburb of Leeds on the A63 with its own retail and commercial strip) and Kippax LS25 — both of which we cover on the same programme without significant additional travel.",
      },
    },
  ],
};

const faqItems = faqSchema.mainEntity.map((item) => ({
  q: item.name,
  a: item.acceptedAnswer.text,
}));

export default function SubcontractVinylInstallerSherburnInElmetPage() {
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
            <span className="text-foreground">Sherburn-in-Elmet</span>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="border-b border-border bg-card py-16 md:py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <p className="text-sm font-medium uppercase tracking-wide text-accent">
            Subcontract Vinyl Installation · Sherburn-in-Elmet LS25
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Subcontract vinyl installer — Sherburn-in-Elmet
          </h1>
          <p className="mt-5 text-lg text-muted leading-relaxed">
            WRPX provides white-label subcontract vinyl installation for sign companies,
            print houses and fit-out contractors across Sherburn-in-Elmet and the LS25
            corridor. We cover Sherburn town centre, Sherburn Enterprise Park, the A63
            Leeds–Hull axis and the A1(M) junction 42 zone — and combine naturally
            with Tadcaster (8 miles west), Selby (10 miles east) and Wetherby
            (10 miles north-west) on the same day programme.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact/" className="btn-primary">
              Discuss a Sherburn-in-Elmet Job →
            </Link>
            <Link href="/subcontract-vinyl-installation-yorkshire/" className="btn-secondary">
              Yorkshire Subcontract Overview
            </Link>
          </div>
        </div>
      </section>

      {/* Geography and access */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Sherburn-in-Elmet — location and corridor access
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              Sherburn-in-Elmet LS25 sits at an efficient point on the A63 Leeds to
              Hull corridor, approximately 12 miles east of Leeds city centre and
              11 miles west of Selby. The A63 runs as a dual carriageway between
              Leeds and Garforth LS25 before continuing as a single-carriageway A-road
              east through South Milford to Sherburn and onwards to Selby — giving
              clean motorway-quality access from the M1 and M62 at the western end
              of the day.
            </p>
            <p>
              From the A1(M), junction 44 at Bramham is approximately 7 miles
              north-west of Sherburn via the A162 south through Aberford or the
              A64/A1(M) approach roads — making the A1(M) corridor equally accessible.
              Junction 42 at Ferrybridge is approximately 11 miles south-east via the
              A1(M) and A63, giving a straightforward approach from the Wakefield and
              Pontefract direction as well.
            </p>
            <p>
              Sherburn Enterprise Park LS25 — on the southern edge of town off
              Pasture Road — carries business units, light industrial premises and
              warehousing that generate consistent commercial graphics and
              installation requirements. The wider LS25 postcode zone extends north
              to cover Garforth LS25 — a large Leeds suburb on the A63/M1 junction
              46 corridor with its own retail parade and commercial strip — and Kippax
              LS25, a former mining village with a town-centre retail and commercial
              offer 4 miles north-east of Garforth.
            </p>
            <p>
              For multi-stop Yorkshire programmes, Sherburn-in-Elmet anchors an
              efficient A63 axis run: Tadcaster LS24 west, Sherburn LS25 centre,
              Selby YO8 east — three market towns on approximately 18 miles of the
              A63. Adding Wetherby LS22 to the north via the A162 and A58 extends
              the day to four towns. South Milford LS25, Barkston Ash LS24 and
              Church Fenton LS24 all fall within the same corridor.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-2xl font-semibold text-foreground md:text-3xl">
            Vinyl installation services across Sherburn-in-Elmet
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Window graphics</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Printed and cut-vinyl window graphics for retail, hospitality and
                professional services units on Low Street, Kirkgate and Finkle Hill.
                Installation to your sign company&apos;s spec and sign-off format.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Frosted and privacy film</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Frosted film, etched-effect vinyl and one-way mirror film for
                professional services, offices and commercial premises across
                Sherburn-in-Elmet and Garforth LS25.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Fascia and shop front vinyls</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Vinyl graphics to sign trays, flat fascia panels, and external
                surfaces for businesses in Sherburn town centre and on Sherburn
                Enterprise Park. Unbranded vehicles, full documentation.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Wall wraps and interior graphics</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Interior wall graphics, feature walls, wayfinding vinyl and branded
                wall wraps for commercial units, logistics hubs and business premises
                across the LS25 corridor.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Floor graphics</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Slip-rated floor graphics for retail, logistics and commercial
                premises — including directional arrows, safety vinyls and branded
                floor graphics on smooth and textured substrates.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Hoarding graphics</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Vinyl graphics to construction hoardings, temporary hoarding systems
                and retail fit-out hoardings across Sherburn Enterprise Park and the
                wider LS25 development corridor.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* White label */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            White-label installation for sign companies and print houses
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              WRPX operates as a fully invisible extension of your team on every
              Sherburn-in-Elmet job. Unbranded vehicles arrive on site. Installers
              carry no WRPX identification. All communication before, during and after
              the job uses your job reference format and documentation template.
              Photographic sign-off — before, during and completed — is delivered
              in your format on the day.
            </p>
            <p>
              For sign companies managing clients across the A63 corridor and the
              wider Yorkshire market, WRPX provides the installation capacity and
              geographic coverage to take on Sherburn-in-Elmet, Tadcaster, Selby
              and the surrounding towns without the overhead of maintaining your
              own installation team on the ground in East Yorkshire. Multi-site
              A63 corridor programmes are co-ordinated as a single operation from
              South Yorkshire, with consistent delivery standards across every stop.
            </p>
          </div>
        </div>
      </section>

      {/* Nearby cities */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Nearby locations we combine with Sherburn-in-Elmet
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <Link
              href="/subcontract-vinyl-installer-tadcaster/"
              className="card-float p-5 hover:border-accent/50 transition-colors"
            >
              <p className="font-semibold text-foreground">Tadcaster LS24</p>
              <p className="mt-1 text-sm text-muted">8 miles west via A162 — natural A63 pair</p>
            </Link>
            <Link
              href="/subcontract-vinyl-installer-selby/"
              className="card-float p-5 hover:border-accent/50 transition-colors"
            >
              <p className="font-semibold text-foreground">Selby YO8</p>
              <p className="mt-1 text-sm text-muted">10 miles east via A63 — 15 minutes</p>
            </Link>
            <Link
              href="/subcontract-vinyl-installer-wetherby/"
              className="card-float p-5 hover:border-accent/50 transition-colors"
            >
              <p className="font-semibold text-foreground">Wetherby LS22</p>
              <p className="mt-1 text-sm text-muted">10 miles north-west via A162 — 20 minutes</p>
            </Link>
            <Link
              href="/subcontract-vinyl-installer-york/"
              className="card-float p-5 hover:border-accent/50 transition-colors"
            >
              <p className="font-semibold text-foreground">York YO1</p>
              <p className="mt-1 text-sm text-muted">20 miles north-east via A64 — 30 minutes</p>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-3xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Sherburn-in-Elmet subcontract installation — common questions
          </h2>
          <FaqAccordion items={faqItems} />
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-card px-4 py-20">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
            Job in Sherburn-in-Elmet or the LS25 corridor?
          </h2>
          <p className="mt-4 text-muted leading-relaxed">
            Tell us the site, the scope — window graphics, wall wrap, floor graphics,
            frosted film — and whether it&apos;s a standalone Sherburn job or part of a
            wider A63 corridor programme. We&apos;ll come back with a price and a
            mobilisation date.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link href="/contact/" className="btn-primary">
              Discuss This Job →
            </Link>
            <Link href="/subcontract-vinyl-installation-yorkshire/" className="btn-secondary">
              Full Yorkshire Coverage
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
