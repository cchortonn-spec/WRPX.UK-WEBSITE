import type { Metadata } from "next";
import Link from "next/link";
import { getServiceSchema } from "@/lib/schema";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Multi-Site Rollout Installation — Vinyl Graphics Across Multiple Locations | WRPX",
  description:
    "Coordinated vinyl graphics installation across multiple retail, commercial or hospitality locations. Brand rollouts, seasonal campaigns, new openings — consistent finish and consolidated documentation. South Yorkshire base, M1 corridor and Yorkshire coverage.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/multi-site-rollout-installation/",
  },
};

const serviceSchema = getServiceSchema(
  "Multi-site rollout installation — vinyl graphics across multiple locations",
  "Coordinated vinyl graphics installation across multiple retail, commercial or hospitality sites for brand rollouts, seasonal campaigns and new openings. Consistent finish standard, consolidated photo documentation per site. South Yorkshire base, Yorkshire and M1 corridor coverage."
);

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How many sites can you cover in a single programme?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We handle programmes across 2–20 sites across South Yorkshire, Yorkshire and the M1 corridor. Larger national programmes are discussed on a project basis — we can cover the South Yorkshire and Yorkshire element while your programme manager coordinates wider regions.",
      },
    },
    {
      "@type": "Question",
      name: "Can you hit the same launch date across all locations?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — with sufficient lead time. When your campaign has a fixed go-live date, we plan the install schedule working backward from that date. Brief us early so we can hold consecutive days across your locations.",
      },
    },
    {
      "@type": "Question",
      name: "What types of graphics do you install across multi-site programmes?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Window graphics, wall wraps, floor vinyls, shop front graphics, POS vinyl, fascia vinyls and vehicle wraps. We install what you supply — installation-only, or coordinated through your print partner.",
      },
    },
    {
      "@type": "Question",
      name: "How do you document multi-site installations?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Photo pack per site — pre-install surface condition, installation in progress and completed sign-off. Consolidated records across all locations in the programme. You receive a complete installation history for your client and internal records.",
      },
    },
    {
      "@type": "Question",
      name: "Can you work white-label for sign companies or agencies managing the programme?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We work under your brand — your paperwork, your name on comms. Your client doesn't need to know WRPX is involved. This is the standard operating model for agency and sign company programmes.",
      },
    },
    {
      "@type": "Question",
      name: "What happens if a surface at one of the sites isn't suitable?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We assess surfaces on arrival and flag any conditions that would compromise the install before anything goes up. For multi-site programmes, surface condition notes are included in the photo documentation per site. We do not apply graphics to unsuitable surfaces without client sign-off on the risk.",
      },
    },
  ],
};

export default function MultiSiteRolloutInstallationPage() {
  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero */}
      <section className="border-b border-border bg-card py-16 md:py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <p className="text-sm font-medium uppercase tracking-wide text-accent">
            Multi-site · Brand rollouts &amp; campaigns
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Multi-Site Rollout Installation — Yorkshire &amp; the M1 Corridor
          </h1>
          <p className="mt-6 text-lg text-muted leading-relaxed">
            Coordinated vinyl graphics installation across{" "}
            <strong className="text-foreground">multiple retail, commercial or hospitality locations</strong>.
            One team, consistent preparation rules, same finish standard and full photo documentation
            per site — whether you&apos;re running a seasonal campaign refresh, a brand rebrand or a
            series of new location openings across South Yorkshire and Yorkshire.
          </p>
          <ul className="mt-6 space-y-2 text-muted">
            <li className="flex gap-2">
              <span className="text-accent">✓</span>
              <span>
                <strong className="text-foreground">Same finish standard</strong> across every site —
                not &quot;best effort&quot; at each location
              </span>
            </li>
            <li className="flex gap-2">
              <span className="text-accent">✓</span>
              <span>
                Consolidated{" "}
                <strong className="text-foreground">photo documentation per site</strong> — complete
                installation history for your records and your client&apos;s
              </span>
            </li>
            <li className="flex gap-2">
              <span className="text-accent">✓</span>
              <span>
                <strong className="text-foreground">Launch-date coordination</strong> — we plan the
                install schedule around your campaign go-live
              </span>
            </li>
            <li className="flex gap-2">
              <span className="text-accent">✓</span>
              <span>
                <strong className="text-foreground">White-label available</strong> — for sign companies,
                print houses and agencies managing the programme
              </span>
            </li>
          </ul>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Link href="/contact/" className="btn-primary inline-block text-center">
              Discuss your rollout programme
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

      {/* What multi-site programmes involve */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <div className="card-float p-8 md:p-10">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              What multi-site rollout installation involves
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Multi-site graphics programmes are straightforward in concept and demanding in execution.
              The challenge is not any single installation — it&apos;s delivering the same standard
              across every location while managing logistics, surface conditions, access windows and
              installation timing to a fixed campaign schedule.
            </p>
            <p className="mt-4 text-muted leading-relaxed">
              Inconsistency is the most common failure mode. Site three looks different to site one
              because the installer rushed, or found the surface wasn&apos;t what was expected, or
              used a different application technique. For a brand rollout or seasonal campaign, that
              inconsistency is visible to anyone who visits multiple locations.
            </p>
            <p className="mt-4 text-muted leading-relaxed">
              WRPX runs multi-site programmes on fixed preparation rules — the same surface assessment,
              the same preparation treatment, the same application standard on every location. We
              document the surface condition before installation begins at each site, so any differences
              in the substrate are recorded, not ignored.
            </p>
          </div>
        </div>
      </section>

      {/* Programme types */}
      <section className="border-y border-border bg-card px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-center text-2xl font-semibold text-foreground md:text-3xl">
            Rollout programme types we handle
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="card-float bg-background p-8">
              <h3 className="text-lg font-semibold text-foreground">
                Seasonal campaign refreshes
              </h3>
              <p className="mt-3 text-muted leading-relaxed">
                Window graphics and in-store vinyl changed for seasonal campaigns — Christmas, summer,
                key retail moments. Installation coordinated across all locations to hit the campaign
                start date. Removal of previous graphics and prep for new material included.
              </p>
            </div>

            <div className="card-float bg-background p-8">
              <h3 className="text-lg font-semibold text-foreground">
                Brand rebrand rollouts
              </h3>
              <p className="mt-3 text-muted leading-relaxed">
                Complete brand vinyl refresh across retail, commercial or hospitality estates. New
                window graphics, wall vinyls, fascia vinyls and POS graphics installed to the new
                identity across multiple locations. Planned in phases or simultaneously.
              </p>
            </div>

            <div className="card-float bg-background p-8">
              <h3 className="text-lg font-semibold text-foreground">
                New location openings
              </h3>
              <p className="mt-3 text-muted leading-relaxed">
                Pre-opening graphics installation for new retail, restaurant, gym or commercial units.
                Site surveys, surface preparation and full installation ahead of opening day. Multiple
                new openings in the same period handled as a coordinated programme.
              </p>
            </div>

            <div className="card-float bg-background p-8">
              <h3 className="text-lg font-semibold text-foreground">
                Franchise brand rollouts
              </h3>
              <p className="mt-3 text-muted leading-relaxed">
                Branded graphics installation across franchise locations — consistent with the
                franchisor&apos;s brand standards at each site. Coordination with individual franchise
                operators for access, surface conditions and timelines.
              </p>
            </div>

            <div className="card-float bg-background p-8">
              <h3 className="text-lg font-semibold text-foreground">
                Fleet livery programmes
              </h3>
              <p className="mt-3 text-muted leading-relaxed">
                Vehicle wrap installation across fleet programmes — branded vans, cars and HGVs.
                Consistent application standard and photographic sign-off per vehicle. Coordinated
                installation schedule around your fleet availability.
              </p>
              <p className="mt-3 text-sm">
                <Link href="/vehicle-wrap-installation/" className="text-accent hover:underline">
                  Vehicle wrap installation detail
                </Link>
              </p>
            </div>

            <div className="card-float bg-background p-8">
              <h3 className="text-lg font-semibold text-foreground">
                Campaign activation graphics
              </h3>
              <p className="mt-3 text-muted leading-relaxed">
                Short-term promotional graphics for marketing activations — pop-ups, events, retail
                activations. Installed to campaign specification and removed cleanly after the activation
                period without surface damage.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How a rollout programme works with WRPX */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-center text-2xl font-semibold text-foreground md:text-3xl">
            How a rollout programme works with WRPX
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                num: 1,
                title: "Programme brief",
                body: "You share the site list, graphics specification, access windows and campaign go-live date. We assess coverage feasibility and confirm whether the schedule is achievable.",
              },
              {
                num: 2,
                title: "Install schedule",
                body: "We build a site-by-site install schedule working backward from the go-live date. Access, logistics and any site-specific conditions are built into the plan before install begins.",
              },
              {
                num: 3,
                title: "Pre-install surface assessment",
                body: "At each site, we assess the surface before any material is applied. Surface conditions are documented. Any substrate issues that could affect the install are flagged and agreed before we proceed.",
              },
              {
                num: 4,
                title: "Installation to fixed rules",
                body: "Same preparation treatment, same application method, same finish standard at every location. No shortcuts at site eight because the schedule is tight.",
              },
              {
                num: 5,
                title: "Photo documentation per site",
                body: "Before, during and after photography at each location. Surface condition pre-install, installation in progress and completed sign-off.",
              },
              {
                num: 6,
                title: "Consolidated programme records",
                body: "All site documentation collated into a single programme record. You have a complete installation history for every location — useful for client reporting, sign-off and any future snagging.",
              },
            ].map((step) => (
              <div key={step.num} className="card-float flex gap-4 bg-card p-6 md:p-8">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent text-sm font-bold text-accent-foreground">
                  {step.num}
                </span>
                <div>
                  <h3 className="font-semibold text-foreground">{step.title}</h3>
                  <p className="mt-2 text-sm text-muted leading-relaxed">{step.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who runs programmes through WRPX */}
      <section className="border-y border-border bg-card px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
            Who runs multi-site programmes through WRPX
          </h2>
          <ul className="mt-6 space-y-3 text-muted">
            {[
              "Sign companies with multi-site programmes across South Yorkshire and the M1 corridor — needing a reliable subcontract installer for the region without staffing up a second team",
              "Large-format print houses managing installation delivery for retail clients with multiple locations across Yorkshire",
              "Marketing agencies running brand campaigns across a client's retail or commercial estate — managed under white-label terms",
              "Retail brand managers commissioning seasonal campaign graphics across regional store networks",
              "Franchise groups rolling out a new brand identity or seasonal campaign across franchisee locations",
            ].map((item) => (
              <li key={item} className="flex gap-2">
                <span className="mt-1 shrink-0 text-accent">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Coverage */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <div className="card-float p-8 md:p-10">
            <h2 className="text-xl font-semibold text-foreground">Coverage</h2>
            <p className="mt-4 text-muted leading-relaxed">
              Based in <strong className="text-foreground">South Yorkshire</strong>, WRPX covers
              multi-site rollout programmes across:
            </p>
            <p className="mt-4 text-muted">
              <strong className="text-foreground">
                Sheffield · Rotherham · Barnsley · Doncaster · Leeds · Huddersfield · Wakefield ·
                Chesterfield · Nottingham · Derby · Lincoln
              </strong>{" "}
              and surrounding towns and retail parks along the M1.
            </p>
            <p className="mt-4 text-muted leading-relaxed">
              For programmes that extend beyond the Yorkshire and Midlands corridor — for example,
              regional rollouts that cover South Yorkshire as one of several clusters — wider coverage
              is discussed on a programme basis.
            </p>
            <div className="mt-6 flex flex-wrap gap-3 text-sm">
              <Link href="/commercial-installation-sheffield/" className="text-accent hover:underline">
                Sheffield
              </Link>
              <Link href="/commercial-installation-leeds/" className="text-accent hover:underline">
                Leeds
              </Link>
              <Link href="/commercial-installation-doncaster/" className="text-accent hover:underline">
                Doncaster
              </Link>
              <Link href="/commercial-installation-barnsley/" className="text-accent hover:underline">
                Barnsley
              </Link>
              <Link href="/commercial-installation-nottingham/" className="text-accent hover:underline">
                Nottingham
              </Link>
              <Link href="/sheffield-nottingham-corridor-installation/" className="text-accent hover:underline">
                Sheffield–Nottingham corridor
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-y border-border bg-card px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl font-semibold text-foreground">
            Multi-site rollout FAQ
          </h2>
          <dl className="mt-8 space-y-6">
            {[
              {
                q: "How many sites can you cover?",
                a: "Programmes across 2–20 sites across South Yorkshire, Yorkshire and the M1 corridor. Larger national programmes — where South Yorkshire is one cluster — discussed on a project basis.",
              },
              {
                q: "Can you hit the same launch date across all locations?",
                a: "Yes — with lead time. We build the install schedule working backward from your go-live date. Brief us as early as possible to hold consecutive installation days.",
              },
              {
                q: "What graphics do you install for rollout programmes?",
                a: "Window graphics, wall wraps, floor vinyls, shop fronts, fascia vinyls, POS graphics and vehicle wraps — whatever the programme specification requires.",
              },
              {
                q: "How do you document multi-site installations?",
                a: "Photo pack per site — pre-install, during and completed. Consolidated programme records across all locations. You have a complete installation history.",
              },
              {
                q: "Can you work white-label for sign companies and agencies?",
                a: "Yes. We work under your brand — unbranded vans, your paperwork on site. Your end client doesn't need to know WRPX is involved.",
              },
              {
                q: "What happens if a surface at one site is unsuitable?",
                a: "We flag it before installation begins. Surface condition is documented per site. We do not apply graphics to unsuitable surfaces without agreed sign-off on the risk or alternative approach.",
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

      {/* Related */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-xl font-semibold text-foreground">Related B2B services</h2>
          <ul className="mt-6 space-y-3 text-muted">
            <li>
              <Link href="/sign-company-installation-partner/" className="text-accent hover:underline">
                Sign company installation partner
              </Link>{" "}
              — subcontract install for sign manufacturers and sign companies
            </li>
            <li>
              <Link href="/print-company-installation-partner/" className="text-accent hover:underline">
                Print company installation partner
              </Link>{" "}
              — installation for large-format print houses and print management companies
            </li>
            <li>
              <Link href="/marketing-agency-installation-partner/" className="text-accent hover:underline">
                Marketing agency installation partner
              </Link>{" "}
              — white-label installation for agencies commissioning campaign graphics
            </li>
            <li>
              <Link href="/vehicle-wrap-installation/" className="text-accent hover:underline">
                Vehicle wrap installation
              </Link>{" "}
              — fleet livery and vehicle wrap installation for programmes
            </li>
            <li>
              <Link href="/commercial-installation/" className="text-accent hover:underline">
                Commercial installation hub
              </Link>{" "}
              — full overview of WRPX commercial and trade services
            </li>
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 pb-20 pt-8">
        <div className="container mx-auto max-w-3xl">
          <div className="card-float border-2 border-accent/40 p-10 text-center md:p-12">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              Plan your rollout programme with WRPX
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Tell us the programme — number of sites, locations, type of graphics and campaign
              go-live date. We&apos;ll confirm whether the schedule is achievable and give you a
              straight quote.
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
                Sign company installation partner
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
