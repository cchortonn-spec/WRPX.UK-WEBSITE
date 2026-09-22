import type { Metadata } from "next";
import Link from "next/link";
import { FaqAccordion } from "@/components/FaqAccordion";
import { getServiceSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Subcontract Vinyl Installer Tadcaster — Sign & Print Company Installation Partner | WRPX",
  description:
    "Subcontract vinyl installation across Tadcaster and the LS24 corridor for sign companies, print houses and fit-out contractors. WRPX covers Tadcaster market town, the A63 Selby–Leeds corridor, the A64 York–Leeds axis and the A1(M) junction 43 commercial zone. Naturally combined with Selby (east), Wetherby (west) or York (north-east) on the same programme.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/subcontract-vinyl-installer-tadcaster/",
  },
};

const serviceSchema = getServiceSchema(
  "Subcontract vinyl installer Tadcaster — sign company and print house installation partner",
  "Professional subcontract vinyl installation for sign companies, print management firms and fit-out contractors across Tadcaster and the LS24 corridor. White-label available. WRPX covers Tadcaster town centre LS24, the A63 Selby–Tadcaster–Leeds corridor, the A64 York–Leeds axis and the A1(M) junction 43 zone. Naturally combined with Selby, Wetherby or York on the same programme."
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
      name: "Subcontract Installer Tadcaster",
      item: "https://www.wrpx.co.uk/subcontract-vinyl-installer-tadcaster/",
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How far is WRPX from Tadcaster?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Tadcaster LS24 is approximately 35 to 45 minutes from our South Yorkshire base. The most direct route from Sheffield is the M1 north to junction 44 (Lofthouse), then the A1(M) north to junction 43 (Aberford/Garforth), then the A656 or A64 north-east to Tadcaster — a clean motorway approach with no complex town-centre junctions. Alternatively, the M1 north to junction 46 (Leeds south) and then the A64 east through Garforth and Aberford to Tadcaster is approximately 40 to 45 minutes total. Tadcaster sits on the A63/A64 axis at the intersection of several important Yorkshire corridors — the A63 runs east to Selby YO8 (approximately 9 miles) and west toward Leeds, while the A64 runs north-east to York YO1 (approximately 12 miles). The A1(M) is only around 5 miles south of Tadcaster via the A659 or A64.",
      },
    },
    {
      "@type": "Question",
      name: "Do you work white-label in Tadcaster?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — white-label is standard on all Tadcaster and LS24 corridor work. We arrive in unbranded vehicles, carry out every installation under your brand and provide full photographic documentation — before, during and completed sign-off — in your agreed format on the day. No WRPX branding appears on site, on vehicles or on any documentation. For sign companies and print houses managing Tadcaster or wider North Yorkshire clients, we operate as a fully invisible extension of your delivery team.",
      },
    },
    {
      "@type": "Question",
      name: "Can you combine Tadcaster with Selby, Wetherby or York on the same programme?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — Tadcaster is ideally placed for combined A63/A64 corridor programmes. Selby YO8 is approximately 9 miles east via the A63 — under 15 minutes. Wetherby LS22 is approximately 8 miles west via the A659 — under 15 minutes. York YO1 is approximately 12 miles north-east via the A64 — around 20 minutes. A Tadcaster-anchored programme covering Selby (east), Tadcaster (centre), Wetherby (west) and York (north-east) connects four separate market towns across the A63/A64 axis in a single co-ordinated day from South Yorkshire. Tadcaster is also a natural mid-point for programmes linking the West Yorkshire (Leeds/Wetherby) and East Yorkshire (Selby/York) markets.",
      },
    },
    {
      "@type": "Question",
      name: "What types of vinyl installation do you cover in Tadcaster?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Window graphics, frosted and decorative window film, wall wraps, floor graphics, shop front and fascia vinyls, wayfinding vinyls, hoarding graphics, interior graphics and hospitality venue graphics. Tadcaster town centre — primarily Bridge Street, Kirkgate and the surrounding streets — carries independent retailers, estate agents, professional services, hospitality and brewery-related businesses with consistent window graphics and fascia vinyl requirements. The wider Tadcaster area includes the major brewing complex on the north of the town (Molson Coors LS24, Sam Smith&apos;s Old Brewery LS24), light industrial and logistics units on the Tadcaster Business Park, and agricultural and equine businesses along the A64 corridor — all of which generate commercial graphics, directional vinyls and signage installation requirements.",
      },
    },
    {
      "@type": "Question",
      name: "Can you work overnight or out-of-hours in Tadcaster?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Overnight, early-morning and weekend installation is available across Tadcaster and the LS24 corridor. Many Tadcaster town centre retailers and hospitality businesses prefer out-of-hours installation to avoid disruption to trading. We co-ordinate access with your client contact, carry out the work, document and report back to you — no client management required on the day unless you want it.",
      },
    },
  ],
};

const faqItems = faqSchema.mainEntity.map((item) => ({
  q: item.name,
  a: item.acceptedAnswer.text,
}));

const nearbyPages = [
  {
    href: "/subcontract-vinyl-installer-selby/",
    label: "Selby YO8",
    desc: "A63 east — market town on the Ouse, ~9 miles",
  },
  {
    href: "/subcontract-vinyl-installer-wetherby/",
    label: "Wetherby LS22",
    desc: "A659 west — A1(M) junction town, ~8 miles",
  },
  {
    href: "/subcontract-vinyl-installer-york/",
    label: "York YO1",
    desc: "A64 north-east — major city, ~12 miles",
  },
  {
    href: "/subcontract-vinyl-installer-harrogate/",
    label: "Harrogate HG1",
    desc: "A661 north — spa town, ~15 miles",
  },
];

export default function SubcontractVinylInstallerTadcasterPage() {
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
            <span className="text-foreground">Tadcaster</span>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="border-b border-border bg-card py-16 md:py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <p className="text-sm font-medium uppercase tracking-wide text-accent">
            Subcontract Vinyl Installation · Tadcaster &amp; LS24 Corridor
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Subcontract vinyl installer — Tadcaster
          </h1>
          <p className="mt-5 text-lg text-muted leading-relaxed">
            WRPX provides subcontract vinyl installation for sign companies, print houses
            and fit-out contractors across Tadcaster and the LS24 corridor.
            White-label, fully documented, reported back to you. Tadcaster is approximately
            35 to 45 minutes from our South Yorkshire base via the M1 and A1(M) —
            positioned as a natural mid-point between Selby (east) and Wetherby (west)
            on the A63 corridor, and between Leeds and York on the A64.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact/" className="btn-primary">
              Discuss a Tadcaster Installation →
            </Link>
            <Link href="/subcontract-vinyl-installation-yorkshire/" className="btn-secondary">
              Yorkshire Subcontract Hub
            </Link>
          </div>
        </div>
      </section>

      {/* Route and access */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Route and access — Tadcaster from South Yorkshire
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              From South Yorkshire, Tadcaster LS24 is reached via the M1 north to junction
              44 (Lofthouse interchange), then the A1(M) north to junction 43 (Aberford
              and Garforth), then the A656 or A64 north-east to Tadcaster. The A1(M) is
              the fastest approach: from Sheffield, the total journey is typically 35 to
              45 minutes in normal conditions — a clean motorway run through Barnsley and
              Wakefield onto the A1(M) north, then a short cross-country leg to Tadcaster.
              No complex town-centre approach junctions.
            </p>
            <p>
              An alternative route from Sheffield or Leeds is the M1 north to junction
              46 (Leeds south), then the A64 east through Garforth, Aberford and Micklefield
              LS25 to Tadcaster LS24. This route is convenient from the south Leeds M1
              approach and typically takes 40 to 45 minutes from Sheffield city centre.
            </p>
            <p>
              Tadcaster sits at the intersection of the A63 (Selby–Leeds) and A64
              (York–Leeds) corridors, with the A1(M) motorway approximately 5 miles
              south via the A659. This position makes it a natural staging point for
              broader North Yorkshire programmes: Selby YO8 is 9 miles east on the A63,
              Wetherby LS22 is 8 miles west on the A659, York YO1 is 12 miles north-east
              on the A64, and Harrogate HG1 is approximately 15 miles north via the A661
              and A59. A Tadcaster-anchored programme can realistically cover three to
              four North Yorkshire market towns in a single day from South Yorkshire.
            </p>
          </div>
        </div>
      </section>

      {/* Local market */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Tadcaster — local commercial market
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              Tadcaster is a small North Yorkshire market town on the River Wharfe with
              a population of approximately 7,500 and a strong commercial identity built
              around brewing. The town is home to two major brewing operations: Samuel
              Smith&apos;s Old Brewery LS24 — one of Yorkshire&apos;s oldest and most
              distinctive independent breweries — and the Molson Coors LS24 facility
              (previously John Smith&apos;s, previously Coors Brewers), one of the largest
              brewing operations in England. Both generate ongoing commercial and
              hospitality graphics requirements, as does the town&apos;s active hospitality
              sector — pubs, inns and restaurants benefiting from proximity to the
              racing calendar at York Racecourse (approximately 12 miles north).
            </p>
            <p>
              The town centre — primarily Bridge Street, Kirkgate, High Street and the
              surrounding lanes — carries independent retailers, estate agents, professional
              services, hospitality venues and rural business services typical of a North
              Yorkshire market town. Window graphics, frosted film, fascia vinyls and
              interior commercial graphics are the most common vinyl installation
              requirements in Tadcaster&apos;s town centre. The Tadcaster Business Park
              on the north fringe of the town has a mix of light industrial units, trade
              counters and logistics-adjacent businesses that generate warehouse
              directional vinyls, health and safety graphics and interior wayfinding.
            </p>
            <p>
              The wider LS24 corridor — extending along the A64 through Newton Kyme,
              Ulleskelf and Church Fenton toward Sherburn in Elmet LS25 and Barkston
              Ash — has significant equine, agricultural and rural business activity
              generating commercial graphics and vehicle livery requirements. For sign
              companies managing clients across North Yorkshire, Tadcaster is often
              an add-on to a Wetherby or York programme — WRPX can carry out Tadcaster
              installations as a standalone or as part of a co-ordinated corridor day.
            </p>
          </div>
        </div>
      </section>

      {/* What we cover */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-2xl font-semibold text-foreground md:text-3xl">
            Vinyl installation types — Tadcaster and LS24 corridor
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="card-float p-6">
              <h3 className="font-semibold text-foreground">Window graphics and frosted film</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Cut-vinyl window graphics, printed window graphics, frosted privacy film
                and etched-effect decorative film for Tadcaster town centre retailers,
                professional services and hospitality businesses on Bridge Street
                and Kirkgate.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="font-semibold text-foreground">Fascia and shopfront vinyls</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Applied fascia vinyl for Tadcaster high street businesses — new fit-outs,
                rebrands and refreshes. Installed under your brand with full documentation
                for your client file.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="font-semibold text-foreground">Warehouse and industrial vinyls</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Directional signage, health and safety vinyls, floor graphics, racking
                end and bay identification, and exterior unit vinyls for Tadcaster
                Business Park and the wider LS24 light industrial and brewing
                complex.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="font-semibold text-foreground">Wall wraps and interior graphics</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Full-wall vinyl wraps, branded interior graphics and hospitality venue
                graphics across Tadcaster&apos;s pub and restaurant sector — including
                brewery hospitality and visitor areas along the A64 north into York.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="font-semibold text-foreground">Hoarding graphics</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Printed and cut-vinyl hoarding graphics for development, construction
                and redevelopment sites in Tadcaster and across the LS24 corridor —
                applied and removed to schedule.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="font-semibold text-foreground">Multi-site corridor programmes</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Tadcaster naturally combines with Selby, Wetherby, York and Harrogate
                on the same day programme. For sign companies managing multiple North
                Yorkshire market town clients, this is the most efficient approach —
                one WRPX visit, multiple locations covered.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            How subcontract work with WRPX operates
          </h2>
          <div className="grid gap-6 sm:grid-cols-3">
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Your brand, our hands</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                We arrive in unbranded vehicles and work under your brand throughout.
                No WRPX name on site, on documentation or in contact with your client.
                Standard white-label across all Tadcaster work.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Full photographic documentation</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Before, during and completed sign-off photography in your agreed format.
                Delivered on the day to your project manager or directly into your
                documentation system. No chasing required.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Reliable, repeatable</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Same standard, same process, same reporting format each time. You know
                what you get from WRPX on a Tadcaster job — and on the next Wetherby
                or York job on the same programme.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-3xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Tadcaster subcontract — common questions
          </h2>
          <FaqAccordion items={faqItems} />
        </div>
      </section>

      {/* Nearby pages */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-xl font-semibold text-foreground">
            Nearby installer pages — A63 and A64 corridor
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {nearbyPages.map((page) => (
              <Link
                key={page.href}
                href={page.href}
                className="card-float p-5 hover:border-accent/50 transition-colors"
              >
                <p className="font-medium text-foreground">{page.label}</p>
                <p className="mt-1 text-sm text-muted">{page.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-4 py-20">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
            Tadcaster job — ready to discuss?
          </h2>
          <p className="mt-4 text-muted leading-relaxed">
            Tell us about the install — location, vinyl type, access requirements and
            timing. We&apos;ll come back with a clear price and confirm availability.
            White-label, documented and delivered to your standard.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link href="/contact/" className="btn-primary">
              Get in Touch →
            </Link>
            <Link href="/subcontract-vinyl-installation-yorkshire/" className="btn-secondary">
              Yorkshire Subcontract Hub
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
