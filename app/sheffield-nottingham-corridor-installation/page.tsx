import type { Metadata } from "next";
import Link from "next/link";
import { getServiceSchema } from "@/lib/schema";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Sheffield–Nottingham Corridor Vinyl Installation | WRPX South Yorkshire",
  description:
    "Commercial vinyl graphics installation across the Sheffield–Nottingham M1 corridor. Window graphics, wall wraps, vehicle wraps, shop fronts and multi-site rollouts — one team from Sheffield to the East Midlands.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/sheffield-nottingham-corridor-installation/",
  },
};

const serviceSchema = getServiceSchema(
  "Sheffield–Nottingham corridor vinyl and graphics installation",
  "Commercial vinyl graphics installation across the Sheffield to Nottingham M1 corridor. WRPX covers window graphics, wall wraps, floor graphics, shop fronts, vehicle wraps and multi-site rollout programmes from South Yorkshire through the East Midlands."
);

const corridorCities = [
  { city: "Sheffield", note: "South Yorkshire base — same-day availability for Sheffield city and surrounding areas" },
  { city: "Rotherham", note: "5 miles from Sheffield — part of every South Yorkshire programme" },
  { city: "Barnsley", note: "North of the corridor — retail parks and town centre commercial premises" },
  { city: "Doncaster", note: "East Yorkshire link — major retail parks, distribution and commercial estates" },
  { city: "Chesterfield", note: "M1 junction — bridging South Yorkshire and the East Midlands" },
  { city: "Nottingham", note: "Southern extent of the primary operating territory — Victoria Centre, city centre and out-of-town retail" },
];

export default function SheffieldNottinghamCorridorPage() {
  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      {/* Hero */}
      <section className="border-b border-border bg-card py-16 md:py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <p className="text-sm font-medium uppercase tracking-wide text-accent">
            M1 corridor · South Yorkshire to East Midlands
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Sheffield–Nottingham Corridor Vinyl Installation
          </h1>
          <p className="mt-6 text-lg text-muted leading-relaxed">
            WRPX is a South Yorkshire-based specialist in commercial vinyl installation — covering
            the full{" "}
            <strong className="text-foreground">Sheffield to Nottingham M1 corridor</strong> as a
            single operating territory. One team, one contact, one consistent finish quality from
            South Yorkshire through Derbyshire and into the East Midlands.
          </p>
          <p className="mt-6 text-muted leading-relaxed">
            For agencies, print management firms and brands running campaigns or rollout programmes
            that span this corridor, WRPX removes the &quot;which installer covers which
            region?&quot; problem. We do all of it — and the quality doesn&apos;t drop as we move
            south.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Link href="/contact/" className="btn-primary inline-block text-center">
              Discuss a corridor programme
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

      {/* Why corridor coverage matters */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <div className="card-float p-8 md:p-10">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              Why corridor coverage matters for multi-site programmes
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Many installation companies define their territory too narrowly, or they patch it together
              from two separate crews that never meet. The result: different preparation standards
              at different locations, inconsistent finish quality, and a rollout programme that looks
              identical in the brief but inconsistent on the ground.
            </p>
            <p className="mt-4 text-muted leading-relaxed">
              WRPX is based in South Yorkshire and covers the M1 corridor — Sheffield, Rotherham,
              Barnsley, Doncaster, Chesterfield and Nottingham — as one continuous territory. The
              same crew, the same prep process, the same sign-off procedure at every site. Brands and
              agencies running seasonal campaigns, store refreshes or new openings along this corridor
              get consistent execution from a single contact.
            </p>
            <p className="mt-4 text-muted leading-relaxed">
              For sign companies and print management firms, this means you have one reliable installer
              covering the region under your brand — rather than managing separate subcontractors for
              Sheffield and for Nottingham.
            </p>
          </div>
        </div>
      </section>

      {/* Corridor cities */}
      <section className="border-y border-border bg-card px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-center text-2xl font-semibold text-foreground md:text-3xl">
            Locations covered — Sheffield to Nottingham
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {corridorCities.map(({ city, note }) => (
              <div key={city} className="card-float bg-background p-6">
                <h3 className="font-semibold text-foreground">{city}</h3>
                <p className="mt-2 text-sm text-muted leading-relaxed">{note}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-center text-muted">
            Plus all towns, retail parks and commercial districts along the M1 between Sheffield and
            Nottingham — including Worksop, Mansfield, Hucknall and surrounding areas.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-center text-2xl font-semibold text-foreground md:text-3xl">
            Services across the corridor
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="card-float p-8">
              <h3 className="text-lg font-semibold text-foreground">
                Window graphics &amp; vinyl signage
              </h3>
              <p className="mt-3 text-muted leading-relaxed">
                Frosted vinyl, full-colour window graphics, one-way vision film and promotional campaign
                installs across Sheffield, Nottingham and every town between. Retail units, commercial
                premises and hospitality venues along the M1 corridor.
              </p>
              <p className="mt-3 text-sm">
                <Link href="/commercial/window-graphics/" className="text-accent hover:underline">
                  Window graphics service
                </Link>
              </p>
            </div>

            <div className="card-float p-8">
              <h3 className="text-lg font-semibold text-foreground">Wall wraps</h3>
              <p className="mt-3 text-muted leading-relaxed">
                Large-format wall graphics, branded murals and feature wall vinyls using premium 3M,
                Avery Dennison, CoverStyl and Hexis commercial vinyl. Surface preparation as standard —
                bubbles and lifting edges are the result of skipped prep.
              </p>
              <p className="mt-3 text-sm">
                <Link href="/commercial/wall-wraps/" className="text-accent hover:underline">
                  Wall wraps service
                </Link>
              </p>
            </div>

            <div className="card-float p-8">
              <h3 className="text-lg font-semibold text-foreground">Floor graphics</h3>
              <p className="mt-3 text-muted leading-relaxed">
                Promotional floor graphics, wayfinding and anti-slip commercial floor film across
                retail and hospitality environments along the corridor. Applied to the right anti-slip
                specification for the traffic levels of each environment.
              </p>
              <p className="mt-3 text-sm">
                <Link href="/commercial/floor-graphics/" className="text-accent hover:underline">
                  Floor graphics service
                </Link>
              </p>
            </div>

            <div className="card-float p-8">
              <h3 className="text-lg font-semibold text-foreground">Shop fronts &amp; fascias</h3>
              <p className="mt-3 text-muted leading-relaxed">
                Brand vinyls, promotional graphics and rebrand wraps on shop fronts and fascia boards
                at any point on the corridor. Fast turnaround, no scaffolding requirement for standard
                fascia work, stores left clean and ready to trade.
              </p>
            </div>

            <div className="card-float p-8">
              <h3 className="text-lg font-semibold text-foreground">Vehicle wraps</h3>
              <p className="mt-3 text-muted leading-relaxed">
                Full and partial vehicle wrap installation. Subcontract installation for print
                companies and fleet managers operating in the South Yorkshire and East Midlands
                corridor.
              </p>
              <p className="mt-3 text-sm">
                <Link href="/vehicle-wrap-installation/" className="text-accent hover:underline">
                  Vehicle wrap installation
                </Link>
              </p>
            </div>

            <div className="card-float p-8">
              <h3 className="text-lg font-semibold text-foreground">
                Multi-site rollout programmes
              </h3>
              <p className="mt-3 text-muted leading-relaxed">
                Seasonal campaigns, brand refreshes and new openings across multiple sites along the
                corridor — delivered to the same standard at every location. One contact throughout. The
                same finish from Sheffield to Nottingham.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who uses corridor coverage */}
      <section className="border-y border-border bg-card px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <div className="card-float bg-background p-8 md:p-10">
            <h2 className="text-2xl font-semibold text-foreground">
              Who uses corridor coverage
            </h2>
            <ul className="mt-6 space-y-3 text-muted">
              {[
                "Marketing agencies running multi-site retail campaigns across Yorkshire and the East Midlands who need one installer, not two",
                "Print management companies with client estates that span Sheffield, Doncaster and Nottingham — needing consistent installation quality across all sites",
                "National retailers with store programmes running across South Yorkshire and the Midlands corridor simultaneously",
                "Sign companies subcontracting installation for clients with locations from Sheffield to Nottingham",
                "Hospitality and leisure brands refreshing estate branding across venues along the M1",
              ].map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-1 shrink-0 text-accent">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* City links */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-xl font-semibold text-foreground">
            Dedicated commercial installation pages by city
          </h2>
          <p className="mt-4 text-muted leading-relaxed">
            Each major city on the corridor has its own commercial installation page with local
            detail and coverage notes:
          </p>
          <div className="mt-6 flex flex-wrap gap-4 text-sm">
            <Link href="/commercial-installation-sheffield/" className="text-accent hover:underline">
              Sheffield commercial installation
            </Link>
            <Link href="/commercial-installation-rotherham/" className="text-accent hover:underline">
              Rotherham commercial installation
            </Link>
            <Link href="/commercial-installation-barnsley/" className="text-accent hover:underline">
              Barnsley commercial installation
            </Link>
            <Link href="/commercial-installation-doncaster/" className="text-accent hover:underline">
              Doncaster commercial installation
            </Link>
            <Link href="/commercial-installation-chesterfield/" className="text-accent hover:underline">
              Chesterfield commercial installation
            </Link>
            <Link href="/commercial-installation-nottingham/" className="text-accent hover:underline">
              Nottingham commercial installation
            </Link>
          </div>
          <p className="mt-6 text-muted leading-relaxed">
            For the full service overview — all services, all sectors, coverage map and subcontract
            detail:
          </p>
          <Link href="/commercial-installation/" className="mt-3 inline-block text-accent hover:underline">
            Commercial installation hub →
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 pb-20">
        <div className="container mx-auto max-w-3xl">
          <div className="card-float border-2 border-accent/40 p-10 text-center md:p-12">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              Running a programme on the Sheffield–Nottingham corridor?
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Tell us your site list, services needed and timeline. We&apos;ll confirm which
              locations we can cover and quote the programme — direct client or subcontract via your
              sign company or agency, either way.
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
              <Link href="/sign-company-installation-partner/" className="text-accent hover:underline">
                Sign company subcontract detail
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
