import type { Metadata } from "next";
import Link from "next/link";
import { getServiceSchema } from "@/lib/schema";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Subcontract Vinyl Installer Birmingham — Sign & Print Company Installation Partner | WRPX",
  description:
    "Subcontract vinyl installation across Birmingham and the West Midlands for sign companies, print houses and fit-out contractors. WRPX installs what you supply — white-label, photographic sign-off, M6 corridor from South Yorkshire into Birmingham.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/subcontract-vinyl-installer-birmingham/",
  },
};

const serviceSchema = getServiceSchema(
  "Subcontract vinyl installer Birmingham — sign company and print house installation partner",
  "Professional subcontract vinyl installation for sign companies, print management firms and fit-out contractors across Birmingham and the West Midlands. White-label available. WRPX installs what you supply — M6 corridor from South Yorkshire, covering Birmingham city centre, Solihull, the Black Country and surrounding commercial areas."
);

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.wrpx.co.uk/" },
    { "@type": "ListItem", position: 2, name: "Commercial Installation", item: "https://www.wrpx.co.uk/commercial-installation/" },
    { "@type": "ListItem", position: 3, name: "Yorkshire Subcontract Hub", item: "https://www.wrpx.co.uk/subcontract-vinyl-installation-yorkshire/" },
    { "@type": "ListItem", position: 4, name: "Subcontract Installer Birmingham", item: "https://www.wrpx.co.uk/subcontract-vinyl-installer-birmingham/" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How far is WRPX from Birmingham?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Birmingham is approximately 90–110 minutes from our South Yorkshire base via the M1 and M6, depending on traffic. We cover Birmingham city centre, the Jewellery Quarter, the Digbeth creative quarter, Edgbaston, Solihull, the NEC and Birmingham Airport corridor, Sutton Coldfield, the Black Country commercial area and the wider West Midlands B postcode zone. Where programmes combine Birmingham with Coventry, Leicester or Nottingham, we run them as a single extended corridor trip.",
      },
    },
    {
      "@type": "Question",
      name: "Do you work under our brand on Birmingham jobs?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — white-label by default. We attend in unbranded or re-branded vehicles under your instructions. Your Birmingham client sees your company throughout the installation. We provide full photographic documentation under your agreed sign-off format at job completion.",
      },
    },
    {
      "@type": "Question",
      name: "What vinyl graphics do you install on subcontract in Birmingham?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Window graphics, wall wraps, floor graphics, shop front and fascia vinyls, vehicle wraps and fleet livery, wayfinding vinyls, exhibition and event graphics, office and corporate interior graphics, retail and hospitality graphics, and multi-site rollout programmes across the West Midlands. We are installation-only — you supply the printed or cut material, we assess the surface and install to spec.",
      },
    },
    {
      "@type": "Question",
      name: "Can you cover Birmingham alongside Coventry and Nottingham in the same programme?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — Birmingham sits at the western end of the M6/M1 corridor. It combines naturally with Coventry (30 minutes east on the M6/A45), Leicester, Loughborough and Nottingham for multi-city Midlands programmes. If your brief covers Birmingham, Coventry, the East Midlands and further north into South Yorkshire, we can cover the full corridor under one subcontract arrangement with consolidated documentation.",
      },
    },
    {
      "@type": "Question",
      name: "Do you install graphics at Birmingham's major retail and commercial destinations?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — we cover Birmingham city centre retail zones including the Bullring and Grand Central, Mailbox and Brindleyplace office and retail, the NEC exhibition centre (corporate and exhibition graphics), Solihull Touchwood and Mell Square, Birmingham Business Park (Airport corridor), Fort Dunlop and the wider B postcode commercial and industrial estates. Brand rollouts, corporate fit-outs and retail graphics programmes across these locations handled under one subcontract.",
      },
    },
  ],
};

export default function SubcontractVinylInstallerBirminghamPage() {
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

      {/* Hero */}
      <section className="border-b border-border bg-card py-16 md:py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <p className="text-sm font-medium uppercase tracking-wide text-accent">
            Subcontract · Birmingham &amp; West Midlands
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Subcontract Vinyl Installer — Birmingham &amp; West Midlands
          </h1>
          <p className="mt-6 text-lg text-muted leading-relaxed">
            WRPX is a specialist vinyl installation partner for{" "}
            <strong className="text-foreground">sign companies, print management firms and fit-out contractors</strong>{" "}
            with installation work across Birmingham, Solihull, the Black Country and the wider West Midlands.
            We install window graphics, wall wraps, vehicle wraps, shop fronts, floor graphics, retail
            graphics and wayfinding systems — on your instructions, under your brand, with full photographic
            documentation on every install.
          </p>
          <ul className="mt-6 space-y-2 text-muted">
            <li className="flex gap-2">
              <span className="text-accent">✓</span>
              <span>
                <strong className="text-foreground">M6 West Midlands corridor</strong>{" "}
                — Birmingham covered as part of extended corridor runs connecting to Coventry, Leicester and the East Midlands
              </span>
            </li>
            <li className="flex gap-2">
              <span className="text-accent">✓</span>
              <span>White-label available — your client, your brand, our installation</span>
            </li>
            <li className="flex gap-2">
              <span className="text-accent">✓</span>
              <span>Photo reporting per site — before, during and completed sign-off</span>
            </li>
            <li className="flex gap-2">
              <span className="text-accent">✓</span>
              <span>
                <strong className="text-foreground">
                  {siteConfig.yearsInBusiness}+ years
                </strong>{" "}
                professional vinyl application — material knowledge, not just fitting
              </span>
            </li>
          </ul>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Link href="/contact/" className="btn-primary inline-block text-center">
              Discuss a Birmingham subcontract job
            </Link>
            <p className="text-sm text-muted">
              Call{" "}
              <a href={`tel:${siteConfig.phoneE164}`} className="text-accent hover:underline">
                {siteConfig.phone}
              </a>{" "}
              or{" "}
              <a href={`mailto:${siteConfig.email}`} className="text-accent hover:underline">
                {siteConfig.email}
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* Why Birmingham */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <div className="card-float p-8 md:p-10">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              Birmingham — the M6 hub at the centre of the national commercial map
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Birmingham is the UK&apos;s second city and the economic hub of the West Midlands — a
              region with more commercial premises, retail destinations and office buildings than any
              comparable area outside London. For sign companies, print management firms and fit-out
              contractors running installation programmes that touch the Midlands, Birmingham is
              typically unavoidable. It sits at the junction of the M6, M5, M42 and M45 — the motorway
              confluence that makes it accessible from Yorkshire, the East Midlands, the South West and
              the North West in a single journey.
            </p>
            <p className="mt-4 text-muted leading-relaxed">
              From our South Yorkshire base, Birmingham is reached via the M1 and M6 in 90–110 minutes.
              That travel time places Birmingham within the same corridor run as Coventry (30 minutes
              east on the A45/M45), Leicester, Nottingham and Sheffield — meaning WRPX can cover a
              programme spanning South Yorkshire to Birmingham under one subcontract arrangement rather
              than requiring separate regional installers for each city. For sign companies managing
              multi-site retail or corporate rollouts, this corridor coverage is a practical advantage
              that directly reduces co-ordination complexity and the risk of inconsistent installation
              standards across sites.
            </p>
            <p className="mt-4 text-muted leading-relaxed">
              The commercial geography of Birmingham is substantial. The city centre alone contains the
              Bullring and Grand Central retail complex, the Mailbox and Brindleyplace mixed-use districts,
              the Jewellery Quarter office cluster, the Digbeth creative and media quarter, and one of
              the densest concentrations of commercial premises in the UK outside Central London. Beyond
              the city centre, Solihull and the NEC corridor to the south-east, the Birmingham Business
              Park at the airport, Fort Dunlop and the Black Country industrial and commercial belt to
              the west all add to a geography that generates continuous demand for brand graphics, retail
              signage, office interior graphics, vehicle livery and wayfinding systems.
            </p>
            <p className="mt-4 text-muted leading-relaxed">
              We are installation-only. You supply the material — printed, cut, laminated and ready to
              apply. We prepare the surface, install to spec and deliver a signed-off photo pack. Your
              Birmingham client never knows we were there.
            </p>
          </div>
        </div>
      </section>

      {/* What we install */}
      <section className="border-y border-border bg-card px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-center text-2xl font-semibold text-foreground md:text-3xl">
            What we install on subcontract across Birmingham
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Window graphics &amp; vinyl signage</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Full-colour window graphics, frosted film, one-way vision film, promotional vinyls
                and branded window installs across Birmingham city centre retail frontages, Bullring,
                Grand Central, Mailbox, Brindleyplace, Solihull town centre and the wider West
                Midlands commercial corridor. Clean application, straight cuts, edge-to-edge finish.
              </p>
              <p className="mt-3 text-sm">
                <Link href="/window-graphics-installation-yorkshire/" className="text-accent hover:underline">
                  Window graphics installation detail
                </Link>
              </p>
            </div>
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Shop fronts &amp; fascia vinyls</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Brand vinyls, promotional graphics and full rebrands on Birmingham shop fronts,
                fascias and external retail surfaces. City centre, Bullring concourse, Solihull,
                Fort Dunlop and Black Country commercial strips — consistent installation standard
                whether it is a single site refresh or a multi-location West Midlands brand programme.
              </p>
              <p className="mt-3 text-sm">
                <Link href="/shop-front-graphics-installation/" className="text-accent hover:underline">
                  Shop front graphics installation
                </Link>
              </p>
            </div>
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Wall wraps &amp; large-format graphics</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Branded murals, feature wall vinyls and large-format wall graphics for commercial,
                office and hospitality interiors across Birmingham and the West Midlands. Substrate
                assessed before installation — painted plaster, MDF, block, glazed partitions,
                concrete — any issues flagged before material is committed.
              </p>
              <p className="mt-3 text-sm">
                <Link href="/wall-wrap-installation-yorkshire/" className="text-accent hover:underline">
                  Wall wrap installation detail
                </Link>
              </p>
            </div>
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Floor graphics &amp; anti-slip vinyls</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Retail floor graphics, wayfinding floor vinyls, anti-slip safety vinyls and
                promotional floor graphics for Birmingham retail environments, office receptions,
                hospitality venues and commercial fit-outs. Substrate and foot-traffic assessment
                standard — correct spec for each surface every time.
              </p>
              <p className="mt-3 text-sm">
                <Link href="/floor-vinyl-installation-yorkshire/" className="text-accent hover:underline">
                  Floor vinyl installation detail
                </Link>
              </p>
            </div>
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Fleet &amp; vehicle wrap installation</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Fleet livery, vehicle wrap and partial wrap installation for Birmingham and
                West Midlands businesses — automotive sector, logistics, trade and commercial
                vehicle fleets. The West Midlands has one of the strongest commercial vehicle
                fleet bases in the UK. We install wraps to the vinyl manufacturer&apos;s
                specification, with photo documentation per vehicle.
              </p>
              <p className="mt-3 text-sm">
                <Link href="/fleet-wrap-installation-yorkshire/" className="text-accent hover:underline">
                  Fleet wrap installation detail
                </Link>
              </p>
            </div>
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Exhibition &amp; NEC graphics</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Exhibition graphics installation at the NEC Birmingham — one of the UK&apos;s
                largest exhibition venues. Shell scheme graphics, feature wall vinyls, floor
                graphics and temporary brand graphics for trade shows and exhibitions. NEC
                access and build schedules managed as standard. Tight show build windows,
                surface protection requirements and demounting all covered.
              </p>
              <p className="mt-3 text-sm">
                <Link href="/exhibition-graphics-installation/" className="text-accent hover:underline">
                  Exhibition graphics installation
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who we work with */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <div className="card-float p-8 md:p-10">
            <h2 className="text-xl font-semibold text-foreground">
              Who uses WRPX as a Birmingham installation partner
            </h2>
            <ul className="mt-6 space-y-3 text-muted">
              <li className="flex items-start gap-2">
                <span className="mt-1 text-accent">✓</span>
                <span>Sign companies with Birmingham and West Midlands clients who need a reliable subcontract installer — they handle design and manufacture, WRPX installs under their brand on site</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 text-accent">✓</span>
                <span>Print management firms supplying large-format material to B postcode clients, needing a trusted trade installer for the site work without managing it directly</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 text-accent">✓</span>
                <span>Fit-out contractors managing commercial, retail and office fit-outs in Birmingham who need a vinyl installation specialist slotted into the programme at the right stage</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 text-accent">✓</span>
                <span>Marketing agencies and brand consultancies running West Midlands campaigns — Birmingham alongside Coventry, Leicester, Nottingham and beyond under a single subcontract</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 text-accent">✓</span>
                <span>Exhibition and events companies requiring graphics installed at the NEC Birmingham and other West Midlands venues — tight build windows, venue access procedures and surface protection all managed</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 text-accent">✓</span>
                <span>National retail brands running store rollouts across the West Midlands — Bullring, Grand Central, Solihull Touchwood, Fort Dunlop, Merry Hill — all covered under one consistent subcontract relationship</span>
              </li>
            </ul>
            <p className="mt-6 text-sm italic text-muted">
              &quot;Your client sees your brand. WRPX installs to your spec, under your name. You get
              the photo pack — they get the finished job.&quot;
            </p>
          </div>
        </div>
      </section>

      {/* Coverage */}
      <section className="border-y border-border bg-card px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <div className="card-float p-8 md:p-10">
            <h2 className="text-xl font-semibold text-foreground">
              Birmingham, West Midlands &amp; M6 corridor coverage
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Birmingham is reached via the M1 and M6 as part of extended Midlands corridor runs.
              We cover Birmingham city centre, Jewellery Quarter, Digbeth, Brindleyplace, Mailbox,
              Bullring, Grand Central, Edgbaston, Solihull, NEC and Birmingham Airport corridor,
              Birmingham Business Park, Sutton Coldfield, the Black Country (Wolverhampton, Dudley,
              Walsall, West Bromwich), and Merry Hill. Where programmes justify it, we combine
              Birmingham with Coventry, Leicester, Nottingham or further north into South Yorkshire
              in the same extended corridor run.
            </p>
            <p className="mt-4 text-muted">
              <strong className="text-foreground">
                Birmingham · Solihull · NEC · Black Country · Coventry · Leicester · Nottingham
              </strong>{" "}
              and the wider West Midlands and M6/M1 corridor.
            </p>
            <div className="mt-6 flex flex-wrap gap-3 text-sm">
              <Link href="/subcontract-vinyl-installer-coventry/" className="text-accent hover:underline">
                Coventry subcontract
              </Link>
              <Link href="/subcontract-vinyl-installer-leicester/" className="text-accent hover:underline">
                Leicester subcontract
              </Link>
              <Link href="/subcontract-vinyl-installer-nottingham/" className="text-accent hover:underline">
                Nottingham subcontract
              </Link>
              <Link href="/sheffield-nottingham-corridor-installation/" className="text-accent hover:underline">
                Sheffield–Nottingham corridor
              </Link>
              <Link href="/sign-company-installation-partner/" className="text-accent hover:underline">
                Sign company partners
              </Link>
              <Link href="/commercial-installation/" className="text-accent hover:underline">
                Commercial installation overview
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl font-semibold text-foreground">
            FAQ — subcontract installation in Birmingham
          </h2>
          <dl className="mt-8 space-y-6">
            {[
              {
                q: "How far is WRPX from Birmingham?",
                a: "Birmingham is approximately 90–110 minutes from our South Yorkshire base via the M1 and M6. We cover Birmingham city centre, Bullring and Grand Central, Mailbox, Brindleyplace, Jewellery Quarter, the NEC and Airport corridor, Solihull, Sutton Coldfield, the Black Country and the wider B postcode commercial area as part of extended West Midlands corridor runs.",
              },
              {
                q: "Do you work under our brand with Birmingham clients?",
                a: "Yes — white-label by default. Unbranded vans, your paperwork on site. Your Birmingham client sees your brand throughout. Photographic sign-off provided at completion.",
              },
              {
                q: "Can you handle Birmingham alongside Coventry and Nottingham in the same programme?",
                a: "Yes — Birmingham sits at the western end of the M6/M1 Midlands corridor and connects naturally to Coventry (30 minutes), Leicester, Loughborough, Nottingham and beyond. We cover the full corridor from South Yorkshire to Birmingham under one subcontract arrangement with consolidated documentation.",
              },
              {
                q: "Do you install exhibition graphics at the NEC Birmingham?",
                a: "Yes — the NEC is one of the UK's largest exhibition and events venues and generates significant demand for shell scheme graphics, feature wall vinyls, floor graphics and temporary brand graphics. We cover NEC build windows, manage surface protection requirements and co-ordinate with NEC contractor access procedures as standard.",
              },
            ].map(({ q, a }) => (
              <div key={q} className="card-float bg-background p-6">
                <dt className="font-semibold text-foreground">{q}</dt>
                <dd className="mt-2 text-muted leading-relaxed">{a}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border px-4 pb-20 pt-16">
        <div className="container mx-auto max-w-3xl">
          <div className="card-float border-2 border-accent/40 p-10 text-center md:p-12">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              Subcontract installation in Birmingham — let&apos;s talk
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Tell us the job, the site and your timeline. We&apos;ll confirm availability and
              give you a straight installation quote.
            </p>
            <p className="mt-4 text-muted">
              <strong>Call: {siteConfig.phone}</strong> ·{" "}
              <a href={`mailto:${siteConfig.email}`} className="text-accent hover:underline">
                {siteConfig.email}
              </a>
            </p>
            <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <Link href="/contact/" className="btn-primary inline-block">
                Contact WRPX
              </Link>
              <Link href="/subcontract-vinyl-installer-coventry/" className="text-accent hover:underline">
                Coventry subcontract page
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
