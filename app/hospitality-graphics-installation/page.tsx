import type { Metadata } from "next";
import Link from "next/link";
import { getServiceSchema } from "@/lib/schema";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Hospitality Graphics Installation — Hotels, Restaurants & Leisure Venues | WRPX",
  description:
    "Subcontract vinyl graphics installation for fit-out contractors, sign companies and brand rollout managers working in hotels, restaurants, bars and leisure venues. WRPX installs under your brand — overnight access, tight handovers, white-label, photographic sign-off.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/hospitality-graphics-installation/",
  },
};

const serviceSchema = getServiceSchema(
  "Hospitality graphics installation — hotels, restaurants, bars and leisure venues",
  "Subcontract vinyl graphics installation for fit-out contractors, sign companies and brand rollout managers working in hotels, restaurants, bars and leisure venues across South Yorkshire and the East Midlands. White-label, overnight access, photographic sign-off."
);

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.wrpx.co.uk/" },
    { "@type": "ListItem", position: 2, name: "Commercial Installation", item: "https://www.wrpx.co.uk/commercial-installation/" },
    { "@type": "ListItem", position: 3, name: "Hospitality Graphics Installation", item: "https://www.wrpx.co.uk/hospitality-graphics-installation/" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What types of hospitality vinyl graphics do you install?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We install branded wall vinyls, feature wall murals, window graphics and privacy film, floor graphics, menu board vinyl, bar and counter vinyls, exterior fascia graphics and hotel corridor wayfinding. We are installation-only — you supply the printed or cut material, we assess the surface and install to spec.",
      },
    },
    {
      "@type": "Question",
      name: "Can you work overnight or out of hours on licensed premises?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — overnight and early-morning access is standard for hospitality installation work. Licensed premises, hotels and restaurant chains typically require installation outside trading hours. We co-ordinate with your site contact to schedule around the venue's operation, including pre-opening fit-out and post-close access windows.",
      },
    },
    {
      "@type": "Question",
      name: "Can you work under our brand on hospitality fit-out contracts?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — white-label by default. We attend under your instructions, carry your paperwork and report back to your project manager. The hotel, restaurant or venue operator sees your company throughout. Photographic documentation provided at completion under your agreed sign-off format.",
      },
    },
    {
      "@type": "Question",
      name: "Can you handle opening-day deadline pressure on new restaurant or hotel fit-outs?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — an opening day is a fixed date and vinyl installation is almost always the last trade on site. We understand the timeline pressure and treat handover as a hard commitment. If there is a substrate issue or access problem that creates a risk to the opening date, we flag it immediately rather than discovering it on the day.",
      },
    },
  ],
};

export default function HospitalityGraphicsInstallationPage() {
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
            Hospitality &amp; Leisure · Subcontract Installation
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Hospitality Graphics Installation — Hotels, Restaurants &amp; Leisure Venues
          </h1>
          <p className="mt-6 text-lg text-muted leading-relaxed">
            WRPX is a specialist vinyl installation partner for{" "}
            <strong className="text-foreground">fit-out contractors, sign companies and brand rollout managers</strong>{" "}
            delivering graphics programmes in hotels, restaurants, bars, cafes and leisure venues.
            We install branded wall vinyls, feature murals, window graphics, floor vinyls and bar
            counter graphics — overnight access, opening-day ready, white-label, photographic sign-off
            on every install.
          </p>
          <ul className="mt-6 space-y-2 text-muted">
            <li className="flex gap-2">
              <span className="text-accent">✓</span>
              <span>
                <strong className="text-foreground">Opening-day reliability</strong>{" "}
                — hospitality opening dates are fixed; we treat the handover date as a hard commitment
              </span>
            </li>
            <li className="flex gap-2">
              <span className="text-accent">✓</span>
              <span>Overnight and out-of-hours access — standard for licensed premises and trading venues</span>
            </li>
            <li className="flex gap-2">
              <span className="text-accent">✓</span>
              <span>White-label by default — venue operator sees your company, not ours</span>
            </li>
            <li className="flex gap-2">
              <span className="text-accent">✓</span>
              <span>
                <strong className="text-foreground">
                  {siteConfig.yearsInBusiness}+ years
                </strong>{" "}
                professional vinyl application — substrate assessment, not just fitting
              </span>
            </li>
          </ul>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Link href="/contact/" className="btn-primary inline-block text-center">
              Discuss a hospitality graphics project
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

      {/* Why hospitality is different */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <div className="card-float p-8 md:p-10">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              Why hospitality installation requires a different approach
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Hospitality fit-out runs to fixed deadlines that commercial installation does not.
              A restaurant opening date is publicly announced, staff are contracted from that day
              and the operator has taken bookings. A hotel chain soft launch is in the marketing
              calendar. When the vinyl installer is the last trade on site — and they almost always
              are — a missed day or a substrate problem that surfaces at 10pm the night before
              handover creates consequences that go well beyond a snagging list.
            </p>
            <p className="mt-4 text-muted leading-relaxed">
              Licensed premises create access constraints that catch out installers who do not work
              in this sector. Pubs, bars and restaurants cannot have tradespeople present during
              service hours without disrupting operations. Overnight and early-morning access is
              not the exception — it is the standard. We schedule to the venue&apos;s operating
              pattern, not to our convenience.
            </p>
            <p className="mt-4 text-muted leading-relaxed">
              Hospitality substrate variety is significant. A single fit-out project may include
              textured plaster walls, MDF panelling, painted brick, glass partitions, tiled
              splashbacks, PVC-edged bar counters and aluminium fascia panels. Each surface has
              different adhesion characteristics. We assess surfaces before committing to
              installation, flag compatibility issues to your team in advance and do not force
              material onto a surface that will fail within months — not the way a busy kitchen
              environment will test it.
            </p>
            <p className="mt-4 text-muted leading-relaxed">
              We are installation-only. You design, print and supply the material. We assess the
              substrate, install to spec and hand back a full photographic completion record. The
              hotel or restaurant operator sees your company throughout.
            </p>
          </div>
        </div>
      </section>

      {/* What we install */}
      <section className="border-y border-border bg-card px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-center text-2xl font-semibold text-foreground md:text-3xl">
            Hospitality graphic types we install on subcontract
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Branded wall vinyls &amp; feature murals</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Large-format brand walls, statement murals, venue identity graphics and decorative
                feature vinyls for hotel lobbies, restaurant dining rooms, bar feature walls and
                leisure reception areas. Applied to painted plaster, MDF panelling, brick and
                composite surfaces. Surface conditions assessed and reported before installation starts.
              </p>
              <p className="mt-3 text-sm">
                <Link href="/wall-wrap-installation-yorkshire/" className="text-accent hover:underline">
                  Wall wrap installation detail
                </Link>
              </p>
            </div>
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Window graphics &amp; privacy film</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Frosted film, branded window graphics, privacy manifestation and promotional campaign
                vinyls for restaurant frontages, hotel public-area glazing, bar windows and leisure
                venue entrance glass. Installed clean with edge-to-edge finish — no bubbles, no
                peeling edges.
              </p>
              <p className="mt-3 text-sm">
                <Link href="/window-graphics-installation-yorkshire/" className="text-accent hover:underline">
                  Window graphics installation detail
                </Link>
              </p>
            </div>
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Floor graphics &amp; decorative vinyls</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Branded floor vinyls, decorative patterns, wayfinding floor graphics and anti-slip
                film for hotel corridors, restaurant floors, bar areas and leisure venue concourses.
                Laminated and rated for heavy foot traffic. Anti-slip specification available where
                required in wet areas or kitchen-adjacent zones.
              </p>
              <p className="mt-3 text-sm">
                <Link href="/floor-vinyl-installation-yorkshire/" className="text-accent hover:underline">
                  Floor vinyl installation detail
                </Link>
              </p>
            </div>
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Bar &amp; counter graphics</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Vinyl graphics applied to bar fronts, counter fascias, PVC-edged panels and
                cabinetry surfaces in restaurant and bar environments. Substrate assessment is
                critical here — PVC edge banding, lacquered MDF and certain high-pressure laminates
                require specific primers or adhesion promoters. We flag compatibility before
                committing to the install, not after.
              </p>
            </div>
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Hotel corridor &amp; wayfinding vinyls</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Room number vinyls, directional graphics, floor and zone identification for hotel
                corridors, conference centres and leisure facilities. Applied to a range of wall
                surfaces common in hotel construction — painted plaster, vinyl-faced wallcovering,
                timber panelling. Installed to a consistent standard across every floor and wing.
              </p>
              <p className="mt-3 text-sm">
                <Link href="/wayfinding-graphics-installation/" className="text-accent hover:underline">
                  Wayfinding graphics installation detail
                </Link>
              </p>
            </div>
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Multi-site franchise &amp; chain rollouts</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Restaurant groups, pub chains, hotel brands and gym operators rolling out a new
                design across multiple sites. One installation partner, consistent specification
                across every site, consolidated photo documentation across the whole programme.
                South Yorkshire, East Midlands and Humber sites all covered under a single
                subcontract arrangement.
              </p>
              <p className="mt-3 text-sm">
                <Link href="/multi-site-rollout-installation/" className="text-accent hover:underline">
                  Multi-site rollout installation
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who this is for */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <div className="card-float p-8 md:p-10">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              Who this service is for
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              This is a B2B subcontract service. The right buyer is a business that wins hospitality
              graphics supply or fit-out contracts and needs an experienced vinyl installer to handle
              the installation component on site.
            </p>
            <ul className="mt-6 space-y-4 text-muted">
              <li className="flex gap-3">
                <span className="mt-0.5 text-accent">→</span>
                <div>
                  <strong className="text-foreground">Fit-out and refurbishment contractors</strong>{" "}
                  — vinyl graphics as a subcontract package within a wider hotel, restaurant or leisure
                  venue fit-out. We slot in at the right stage of your programme and clear site before
                  the operator arrives.
                </div>
              </li>
              <li className="flex gap-3">
                <span className="mt-0.5 text-accent">→</span>
                <div>
                  <strong className="text-foreground">Sign companies and signage contractors</strong>{" "}
                  — you design and manufacture the graphics; WRPX installs the vinyl elements at the
                  venue under your brand, working to your timeline and sign-off process.
                </div>
              </li>
              <li className="flex gap-3">
                <span className="mt-0.5 text-accent">→</span>
                <div>
                  <strong className="text-foreground">Print management and large-format print houses</strong>{" "}
                  — you supply the printed material through a framework or brand rollout agreement;
                  WRPX handles installation at each site across the estate.
                </div>
              </li>
              <li className="flex gap-3">
                <span className="mt-0.5 text-accent">→</span>
                <div>
                  <strong className="text-foreground">Brand and interior design agencies</strong>{" "}
                  — delivering a hospitality brand environment project; WRPX installs the vinyl
                  elements white-label, feeding back photo completion records to your team before
                  the operator walkthrough.
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Coverage */}
      <section className="border-y border-border bg-card px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <div className="card-float p-8 md:p-10">
            <h2 className="text-xl font-semibold text-foreground">
              Hospitality graphics coverage area
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              We install hospitality graphics on a subcontract basis across South Yorkshire, West
              Yorkshire and the East Midlands — covering hotels, restaurants, bars and leisure venues
              in Sheffield, Rotherham, Doncaster, Barnsley, Leeds, Wakefield, Huddersfield, Nottingham,
              Derby and surrounding areas.
            </p>
            <p className="mt-4 text-muted">
              <strong className="text-foreground">
                Sheffield · Leeds · Doncaster · Rotherham · Barnsley · Nottingham · Derby · Hull
              </strong>{" "}
              and the wider South Yorkshire, West Yorkshire and East Midlands hospitality estate.
            </p>
            <div className="mt-6 flex flex-wrap gap-3 text-sm">
              <Link href="/commercial-installation/" className="text-accent hover:underline">
                Commercial installation overview
              </Link>
              <Link href="/wayfinding-graphics-installation/" className="text-accent hover:underline">
                Wayfinding graphics installation
              </Link>
              <Link href="/multi-site-rollout-installation/" className="text-accent hover:underline">
                Multi-site rollout installation
              </Link>
              <Link href="/retail-fitout-graphics-installation/" className="text-accent hover:underline">
                Retail fit-out graphics installation
              </Link>
              <Link href="/sign-company-installation-partner/" className="text-accent hover:underline">
                Sign company installation partner
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl font-semibold text-foreground">
            FAQ — hospitality vinyl graphics installation
          </h2>
          <dl className="mt-8 space-y-6">
            {[
              {
                q: "What types of hospitality vinyl graphics do you install?",
                a: "Branded wall vinyls, feature murals, window graphics and privacy film, floor vinyls, bar and counter graphics, hotel corridor and room signage vinyls, menu board vinyls and multi-site franchise rollouts. We are installation-only — you supply the material, we install to spec.",
              },
              {
                q: "Can you work overnight or out of hours at licensed premises?",
                a: "Yes — overnight and early-morning access is standard for hospitality work. Pubs, bars and restaurants require installation outside service hours. We co-ordinate with your site contact and schedule around the venue's trading pattern.",
              },
              {
                q: "Can you work under our brand on hospitality fit-out contracts?",
                a: "Yes — white-label by default. We attend under your instructions, carry your paperwork and report back to your project manager. The hotel, restaurant or venue sees your company throughout. Photographic documentation provided at completion.",
              },
              {
                q: "What about opening-day deadlines on new restaurant or hotel fit-outs?",
                a: "Opening dates are fixed and we treat them as a hard commitment. Vinyl installation is typically the last trade on site. If a substrate issue or access problem creates risk to the opening date, we flag it immediately — not on the morning of handover.",
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
              Hospitality graphics installation — let&apos;s discuss your project
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Tell us the venue, the scope, your access windows and your opening or handover date.
              We&apos;ll confirm availability and give you a clear installation quote for the
              vinyl element of your programme.
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
              <Link href="/commercial-installation/" className="text-accent hover:underline">
                Commercial installation overview
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
