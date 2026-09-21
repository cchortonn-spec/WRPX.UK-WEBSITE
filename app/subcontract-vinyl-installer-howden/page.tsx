import type { Metadata } from "next";
import Link from "next/link";
import { FaqAccordion } from "@/components/FaqAccordion";
import { getServiceSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Subcontract Vinyl Installer Howden — Sign & Print Company Installation Partner | WRPX",
  description:
    "Subcontract vinyl installation across Howden and the East Riding DN14 corridor for sign companies, print houses and fit-out contractors. WRPX covers Howden market town, the A614 Humber corridor, Boothferry and the wider East Riding commercial market. Naturally combined with Goole (west) or Beverley (north-east) on the same programme.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/subcontract-vinyl-installer-howden/",
  },
};

const serviceSchema = getServiceSchema(
  "Subcontract vinyl installer Howden — sign company and print house installation partner",
  "Professional subcontract vinyl installation for sign companies, print management firms and fit-out contractors across Howden and the East Riding DN14 corridor. White-label available. WRPX covers Howden town centre DN14, the A614 Humber corridor, Boothferry Road retail and commercial, and the wider East Riding market between Goole and Market Weighton."
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
      name: "Subcontract Installer Howden",
      item: "https://www.wrpx.co.uk/subcontract-vinyl-installer-howden/",
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How far is WRPX from Howden?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Howden is approximately 45 to 55 minutes from our South Yorkshire base. The most direct route is the M18 north from South Yorkshire, joining the M62 east at junction 35 (Thorne) and then east to junction 36 (Goole). From Goole, the A614 east runs directly to Howden DN14 — approximately 9 miles or under 15 minutes. Howden sits on the A614 between Goole to the west and Newport to the east, with the Humber Bridge approach at North Cave and Brough a few miles further east. The M62 provides the fast motorway spine to this part of East Yorkshire, making Howden a clean extension of any Goole-anchored East Riding programme.",
      },
    },
    {
      "@type": "Question",
      name: "Do you work white-label in Howden?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — white-label is standard on all Howden and East Riding zone work. We arrive in unbranded vehicles, carry out every installation under your brand and provide full photographic documentation — before, during and completed sign-off — in your agreed format on the day. No WRPX branding appears on site, on vehicles or on any documentation.",
      },
    },
    {
      "@type": "Question",
      name: "Can you combine Howden with Goole or Selby on the same programme?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — Howden is ideally placed for combined East Riding programmes. Goole DN14 is approximately 9 miles west of Howden via the A614 — under 15 minutes. Selby YO8 is approximately 15 miles north-west of Howden via the A63 and A19 — under 25 minutes. Beverley HU17 is approximately 20 miles east of Howden via the A614 and A164 — around 25 to 30 minutes. A Howden-anchored programme covering Goole (west), Howden town (centre) and Beverley (east) links three distinct East Riding and Humber corridor markets on a single co-ordinated route. Howden also lies on a natural corridor that can extend south into North Lincolnshire via the Humber Bridge or north into the Yorkshire Wolds via Market Weighton YO43.",
      },
    },
    {
      "@type": "Question",
      name: "What types of vinyl installation do you cover in Howden?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Window graphics, frosted and decorative window film, wall wraps, floor graphics, shop front and fascia vinyls, wayfinding vinyls, hoarding graphics, interior graphics and hospitality venue graphics. Howden is a small East Riding market town with a compact high street — Bridgegate and the surrounding streets carry independent retailers, estate agents, professional services and hospitality businesses with consistent window graphics and fascia vinyl requirements. The wider Howden area also includes Boothferry Road commercial properties, light industrial and agricultural business premises on the A614 corridor, and the Howden Enterprise Park DN14, which generates commercial graphics and signage requirements including warehouse directional vinyls and internal wayfinding graphics.",
      },
    },
    {
      "@type": "Question",
      name: "Do you cover the A614 corridor between Goole and Beverley?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. The A614 corridor between Goole and Beverley — passing through Howden, Newport and Market Weighton YO43 — is a route we cover as part of our East Riding and Humber corridor subcontract programme. Installations along this corridor can be combined on the same day: Goole DN14 as the motorway anchor point, Howden as the mid-corridor town, Market Weighton YO43 and Beverley HU17 as the eastern extensions. This allows sign companies and print houses managing East Riding clients to schedule a single-day programme covering multiple locations without separate WRPX trips for each town.",
      },
    },
    {
      "@type": "Question",
      name: "Can you work overnight or out-of-hours in Howden?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Overnight, early-morning and weekend installation is available across Howden and the wider East Riding zone. Many Howden high street retailers and hospitality businesses prefer out-of-hours installation to avoid any disruption to trading. We co-ordinate access with your client contact, carry out the work, document and report back to you — no client management required on the day unless you want it.",
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
    href: "/subcontract-vinyl-installer-goole/",
    label: "Goole DN14",
    desc: "M62 J36 port town — 9 miles west via A614",
  },
  {
    href: "/subcontract-vinyl-installer-selby/",
    label: "Selby YO8",
    desc: "Lower Ouse Valley market town — via A63 north-west",
  },
  {
    href: "/subcontract-vinyl-installer-beverley/",
    label: "Beverley HU17",
    desc: "East Riding market town — 20 miles east via A614 and A164",
  },
  {
    href: "/subcontract-vinyl-installer-pocklington/",
    label: "Pocklington YO42",
    desc: "East Riding market town — A1079 corridor north of Howden",
  },
];

export default function SubcontractVinylInstallerHowdenPage() {
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
            <span className="text-foreground">Howden</span>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="border-b border-border bg-card py-16 md:py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <p className="text-sm font-medium uppercase tracking-wide text-accent">
            Subcontract Vinyl Installation · Howden &amp; DN14 East Riding
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Subcontract vinyl installer — Howden
          </h1>
          <p className="mt-5 text-lg text-muted leading-relaxed">
            WRPX provides subcontract vinyl installation for sign companies, print houses
            and fit-out contractors across Howden and the DN14 East Riding corridor.
            White-label, fully documented, reported back to you. Howden is approximately
            45 to 55 minutes from our South Yorkshire base via the M18, M62 and A614 —
            positioned as the mid-point between Goole (west) and Beverley (east) on
            the main East Riding A614 corridor route.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact/" className="btn-primary">
              Discuss a Howden Installation →
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
            Route and access — Howden from South Yorkshire
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              From South Yorkshire, Howden is reached via the M18 north to junction 6
              (Thorne), then east on the M62 to junction 36 (Goole), then east on the
              A614 for approximately 9 miles to Howden. The M62 junction 36 at Goole
              is a clean exit — no complex interchange — and the A614 east from Goole
              runs directly through the flat East Riding farmland into Howden town
              centre DN14. Total journey from Sheffield is typically 45 to 55 minutes
              in normal conditions.
            </p>
            <p>
              Howden sits at the junction of the A614 (east–west) and the A63 (the
              main trunk road north toward Selby and York). This position makes it a
              natural staging point for East Riding programmes: Goole is 9 miles west,
              Selby is 15 miles north-west, Market Weighton YO43 is approximately 10
              miles north on the A614, and Beverley HU17 is approximately 20 miles east.
              A Howden-anchored programme can realistically cover three to four East
              Riding locations in a single day from South Yorkshire.
            </p>
            <p>
              Howden is also linked south via the B1228 Boothferry Road and the A614
              toward the Humber Bridge approach at Brough and North Cave — accessible
              routes for programmes that extend into North Lincolnshire or East
              Yorkshire&apos;s Humber south bank. Hull HU1 is approximately 30 miles
              east of Howden via the A63 — a natural extension of any
              Howden or Goole programme as a second anchor point.
            </p>
          </div>
        </div>
      </section>

      {/* Local market */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Howden — local commercial market
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              Howden is a small East Riding market town of approximately 3,000 residents
              built around a compact medieval street grid centred on the Howden Minster
              and the market place. The town centre — primarily Bridgegate, Hailgate and
              the surrounding lanes — carries a mix of independent retailers, estate
              agents, professional services and hospitality businesses typical of a small
              English market town. Window graphics, frosted film, fascia vinyls and
              internal shop graphics are the most common vinyl installation requirements
              in Howden&apos;s town centre commercial market.
            </p>
            <p>
              The wider Howden area extends across significant agricultural land with
              a growing light industrial and logistics presence. Howden Enterprise Park
              DN14 — the main business park on the north-eastern fringe of Howden —
              has a mix of light industrial units, trade counters and logistics-adjacent
              businesses that generate commercial graphics requirements: warehouse
              directional vinyls, health and safety signage, floor graphics, and
              exterior unit graphics and fascias. The A614 Boothferry corridor between
              Goole and Howden also has roadside commercial and agricultural properties
              with recurring vinyl requirements.
            </p>
            <p>
              For sign companies and print houses managing East Riding clients, Howden
              is often included within a Goole or Hull programme but rarely visited
              independently. WRPX can carry out Howden installations as a standalone
              or as part of a co-ordinated corridor programme — reporting back under
              your brand with full photographic documentation either way.
            </p>
          </div>
        </div>
      </section>

      {/* What we cover */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-2xl font-semibold text-foreground md:text-3xl">
            Vinyl installation types — Howden and DN14 corridor
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="card-float p-6">
              <h3 className="font-semibold text-foreground">Window graphics and frosted film</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Cut-vinyl window graphics, printed window graphics, frosted privacy film
                and etched-effect decorative film for Howden high street retailers,
                professional services and hospitality businesses on Bridgegate and
                surrounding streets.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="font-semibold text-foreground">Fascia and shopfront vinyls</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Cut-vinyl lettering, printed flat panel vinyls and full-colour shopfront
                graphics for Howden town centre businesses and retail units on Bridgegate,
                Hailgate and the market place area.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="font-semibold text-foreground">Wall wraps and interior graphics</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Wall graphics, feature wall vinyls, reception branding, wayfinding
                and safety signage for Howden Enterprise Park businesses and the
                wider DN14 light industrial and logistics market.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="font-semibold text-foreground">Warehouse and industrial graphics</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Directional floor graphics, health and safety vinyls, bay-marker
                graphics and unit exterior branding for logistics, trade counter and
                industrial premises on Howden Enterprise Park and the A614 corridor.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="font-semibold text-foreground">Floor graphics and wayfinding</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Anti-slip floor graphics, directional floor vinyls and entrance floor
                graphics for retail, hospitality and commercial premises across Howden
                and the DN14 East Riding zone.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="font-semibold text-foreground">Multi-site corridor programmes</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Howden combined with Goole (west) and/or Beverley or Market Weighton
                (east) on the same programme — same specification and documentation
                across all sites in a single visit from South Yorkshire.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* White-label and documentation */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            White-label installation — how WRPX works as your Howden partner
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              When WRPX installs in Howden for a sign company or print house, the client
              sees your brand — not ours. We arrive in unbranded vehicles, introduce
              ourselves as your installation team if asked, and carry out the work to
              your specification and standard. Every installation is documented with
              before, during and completed photography in the format you need — whether
              that&apos;s a folder of numbered images, a site-specific report or a
              straightforward email sign-off.
            </p>
            <p>
              You don&apos;t need to be on site in Howden. We manage access directly
              with your client contact, carry out the installation and report back to
              you. If there are any issues — a surface that&apos;s not wrappable, a
              measurement discrepancy, a client change — we contact you, not the client,
              so you stay in control of the relationship.
            </p>
            <p>
              For sign companies with recurring East Riding work, we can build a running
              schedule — Howden on one day of a Goole and East Riding week, or as a
              standalone stop en route to or from Beverley or Hull. The goal is to make
              your East Riding programme run without the logistics overhead of managing
              multiple separate installation contacts.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-3xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Howden subcontract vinyl installation — common questions
          </h2>
          <FaqAccordion items={faqItems} />
        </div>
      </section>

      {/* Nearby pages */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Nearby East Riding locations we also cover
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {nearbyPages.map(({ href, label, desc }) => (
              <Link
                key={href}
                href={href}
                className="card-float p-5 hover:border-accent/60 transition-colors"
              >
                <h3 className="font-semibold text-foreground">{label}</h3>
                <p className="mt-1 text-sm text-muted">{desc}</p>
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
              Need a vinyl installer in Howden or the DN14 corridor?
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              WRPX covers Howden and the East Riding corridor as a subcontract
              installation partner — white-label, fully documented, reported back
              to you. Get in touch to discuss the job and we&apos;ll confirm
              availability and programme it in.
            </p>
            <Link href="/contact/" className="btn-primary mt-8 inline-block">
              Discuss a Howden Installation →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
