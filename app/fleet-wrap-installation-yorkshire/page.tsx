import type { Metadata } from "next";
import Link from "next/link";
import { getServiceSchema } from "@/lib/schema";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Fleet Wrap Installation Yorkshire — Professional Fleet Vehicle Wrapping | WRPX",
  description:
    "Fleet vehicle wrap installation across Yorkshire and the Midlands. WRPX installs fleet wraps to a consistent standard across every vehicle — vans, cars, HGVs and trailers. Photographic sign-off per vehicle.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/fleet-wrap-installation-yorkshire/",
  },
};

const serviceSchema = getServiceSchema(
  "Fleet wrap installation Yorkshire — professional fleet vehicle wrapping",
  "Professional fleet vehicle wrap installation across Yorkshire and the Midlands. Consistent installation standard across every vehicle. Photographic sign-off per vehicle. South Yorkshire base."
);

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do you supply the vehicle wrap or just install it?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We are installation-only. You or your supplier provides the printed wrap — WRPX handles surface preparation and installation. This keeps your fleet programme clean: one supplier for print, one specialist for installation.",
      },
    },
    {
      "@type": "Question",
      name: "What types of fleet vehicles do you wrap?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We wrap vans (all sizes), cars, HGVs, trailers, minibuses and specialist vehicles. Full wraps, partial wraps, cut vinyl graphics and contour-cut decal application.",
      },
    },
    {
      "@type": "Question",
      name: "How do you maintain a consistent finish across a large fleet?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We follow the same preparation and installation checklist on every vehicle — same surface condition check, same application temperature protocol, same sign-off standard. For large programmes, we provide a photographic record per vehicle so you can verify consistency.",
      },
    },
    {
      "@type": "Question",
      name: "Can you work with our existing wrap supplier?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We work with any supplier-provided wrap material. If you have an existing print partner, we slot in as the installation function. We can advise on print spec and material choice if that's useful, but we don't require you to use a specific supplier.",
      },
    },
    {
      "@type": "Question",
      name: "Can you remove old wraps before installing new ones?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — we handle wrap removal, surface preparation and new installation as a complete process. We assess surface condition after removal and flag any paintwork concerns before the new wrap goes on.",
      },
    },
    {
      "@type": "Question",
      name: "What Yorkshire and Midlands areas do you cover for fleet work?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "South Yorkshire base — Sheffield, Doncaster, Rotherham, Barnsley, Leeds, Huddersfield, Wakefield, Chesterfield, Nottingham and the M1 corridor. Wider UK coverage for large fleet programmes is discussed on a project basis.",
      },
    },
  ],
};

export default function FleetWrapInstallationYorkshirePage() {
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
            Fleet installation · Yorkshire &amp; Midlands
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Fleet Vehicle Wrap Installation — Yorkshire &amp; the Midlands
          </h1>
          <p className="mt-6 text-lg text-muted leading-relaxed">
            WRPX provides professional{" "}
            <strong className="text-foreground">fleet vehicle wrap installation</strong> across
            Yorkshire and the Midlands. Whether you&apos;re rebranding an existing fleet, adding
            new vehicles to a programme, or running a seasonal campaign across a van fleet —
            we install to a consistent standard on every vehicle, with full photographic
            documentation.
          </p>
          <p className="mt-5 text-muted leading-relaxed">
            We are <strong className="text-foreground">installation-only</strong>: you supply the
            printed wrap, we handle surface preparation and application. If you work with a print
            supplier already, we slot in as the installation function without disrupting that
            relationship.
          </p>
          <ul className="mt-6 space-y-2 text-muted">
            <li className="flex gap-2">
              <span className="text-accent">✓</span>
              <span>
                <strong className="text-foreground">Same standard on every vehicle</strong> —
                not &quot;roughly similar&quot;
              </span>
            </li>
            <li className="flex gap-2">
              <span className="text-accent">✓</span>
              <span>Photo documentation per vehicle — before, during and completed</span>
            </li>
            <li className="flex gap-2">
              <span className="text-accent">✓</span>
              <span>Wrap removal + surface preparation + installation — full process</span>
            </li>
            <li className="flex gap-2">
              <span className="text-accent">✓</span>
              <span>
                Based in South Yorkshire — covering the{" "}
                <strong className="text-foreground">full Yorkshire and M1 corridor</strong>
              </span>
            </li>
            <li className="flex gap-2">
              <span className="text-accent">✓</span>
              <span>
                <strong className="text-foreground">
                  {siteConfig.yearsInBusiness}+ years
                </strong>{" "}
                professional vinyl application — not a new service line
              </span>
            </li>
          </ul>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Link href="/contact/" className="btn-primary inline-block text-center">
              Get a fleet wrap installation quote
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

      {/* The problem with fleet wrap consistency */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <div className="card-float p-8 md:p-10">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              Why fleet wrap consistency is harder than it looks
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              One vehicle looks perfect. Vehicle 12 has a seam that doesn&apos;t sit right. Vehicle
              17 was installed in the wrong temperature conditions and the adhesion will fail
              within six months. Fleet wrap quality problems are almost always about preparation and
              process — not the quality of the print itself.
            </p>
            <p className="mt-4 text-muted leading-relaxed">
              WRPX follows the same pre-installation checklist on every vehicle: surface condition
              assessment, contamination removal, application temperature verified, material acclimatised
              before installation. This isn&apos;t complicated — but it only happens when the installer
              actually does it rather than skipping preparation to hit a faster completion rate.
            </p>
            <p className="mt-4 text-muted leading-relaxed">
              We work with{" "}
              <strong className="text-foreground">
                3M, Avery Dennison, CoverStyl and Hexis
              </strong>{" "}
              materials. We understand how different vinyl formulations behave, which matters on a
              fleet programme where your print supplier may have used a material you haven&apos;t
              installed before.
            </p>
          </div>
        </div>
      </section>

      {/* What&apos;s included */}
      <section className="border-y border-border bg-card px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-center text-2xl font-semibold text-foreground md:text-3xl">
            What&apos;s included in a fleet wrap installation programme
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Surface preparation</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Every vehicle goes through the same preparation process: decontamination, clay bar
                where needed, panel condition check, temperature and humidity assessment before
                installation begins. Shortcuts here are where fleet programmes fail.
              </p>
            </div>
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Full and partial wrap installation</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Full wraps, partial wraps, cut vinyl graphics and contour-cut decal application.
                Vans, cars, HGVs, trailers and minibuses. Same preparation and installation
                standard regardless of vehicle type.
              </p>
            </div>
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Wrap removal</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Old wrap removed cleanly before new installation. We assess the paintwork after
                removal and flag any surface concerns before the new material goes on —
                protecting both you and your client from hidden surprises.
              </p>
            </div>
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Photographic sign-off</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Photo documentation per vehicle — before, during and completed. For fleet
                programmes, a consolidated photo record across every vehicle. Timestamped
                evidence of condition before and after each install.
              </p>
            </div>
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Programme coordination</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                We work to your fleet schedule — vehicles can be processed in batches to fit
                operational availability. We coordinate directly with your depot, fleet manager
                or logistics contact to minimise vehicle downtime.
              </p>
            </div>
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Post-installation support</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Snagging queries handled promptly. Eligible installations carry a named{" "}
                <strong className="text-foreground">
                  {siteConfig.guaranteeYears}-year guarantee
                </strong>{" "}
                on material defects, colour stability and adhesion.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who this is for */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
            Who uses WRPX for fleet wrap installation
          </h2>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <div className="card-float p-6">
              <h3 className="font-semibold text-foreground">Fleet managers &amp; operators</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Managing a van fleet that needs a rebrand or a new livery rollout? You don&apos;t
                need to find a design-and-print-and-install shop — if you already have the wrap
                artwork and a print supplier, WRPX provides the installation function cleanly.
                Fleet manager handles the schedule, we handle the vehicles.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="font-semibold text-foreground">Print companies &amp; sign companies</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                If you produce fleet wraps for Yorkshire-based clients and need a reliable
                installation partner in the region, WRPX works on a white-label subcontract
                basis. Your client, your relationship, our installation.
              </p>
              <p className="mt-3 text-sm">
                <Link href="/vehicle-wrap-installation/" className="text-accent hover:underline">
                  Trade installation detail
                </Link>
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="font-semibold text-foreground">Marketing agencies &amp; brand managers</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Running a fleet livery project for a client? We work with agencies on fleet
                programmes — you manage the client relationship, we deliver a consistent
                physical result and photographic documentation across every vehicle.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="font-semibold text-foreground">
                Vehicle leasing companies &amp; fleet refurbishers
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Vehicles coming off hire that need wrap removal, and new leases going out that
                need fresh graphics. We handle removal and reinstatement as a complete process
                and provide condition documentation for your records.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Coverage */}
      <section className="border-y border-border bg-card px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <div className="card-float bg-background p-8 md:p-10">
            <h2 className="text-xl font-semibold text-foreground">
              Yorkshire &amp; Midlands coverage
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Based in <strong className="text-foreground">South Yorkshire</strong>, WRPX covers
              fleet wrap installation across the{" "}
              <strong className="text-foreground">
                Yorkshire and M1 corridor
              </strong>:
            </p>
            <p className="mt-4 text-muted">
              <strong className="text-foreground">
                Sheffield · Rotherham · Barnsley · Doncaster · Leeds · Huddersfield · Wakefield ·
                Bradford · Chesterfield · Nottingham · Derby
              </strong>{" "}
              and surrounding towns along the M1. Wider UK coverage for large fleet programmes
              is discussed on a project basis.
            </p>
            <div className="mt-6 flex flex-wrap gap-3 text-sm">
              <Link href="/vehicle-wrap-installation/" className="text-accent hover:underline">
                Vehicle wrap installation (trade)
              </Link>
              <Link href="/commercial-installation-sheffield/" className="text-accent hover:underline">
                Sheffield
              </Link>
              <Link href="/commercial-installation-leeds/" className="text-accent hover:underline">
                Leeds
              </Link>
              <Link href="/sheffield-nottingham-corridor-installation/" className="text-accent hover:underline">
                Sheffield–Nottingham corridor
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl font-semibold text-foreground">
            Fleet wrap installation FAQ
          </h2>
          <dl className="mt-8 space-y-6">
            {[
              {
                q: "Do you supply the wrap or just install it?",
                a: "Installation-only. You or your print supplier provides the wrap. We handle surface prep and application. If you need help specifying print-ready artwork or choosing the right film for your vehicles, we can advise — but we don't require you to source from us.",
              },
              {
                q: "What vehicles can you wrap?",
                a: "Vans (all sizes), cars, HGVs, trailers, minibuses and specialist vehicles. Full wraps, partial wraps, cut vinyl graphics and contour-cut decals.",
              },
              {
                q: "How do you keep the finish consistent across a large fleet?",
                a: "Same checklist on every vehicle: decontamination, surface assessment, temperature check, material acclimatisation, then installation. Same sign-off standard, photo documentation per vehicle. Consistency comes from process, not luck.",
              },
              {
                q: "Can you remove old wraps before the new ones go on?",
                a: "Yes — full removal, surface prep and new installation as a complete process. We flag any paintwork concerns after removal before the new wrap goes on.",
              },
              {
                q: "What areas do you cover for fleet work?",
                a: "South Yorkshire base — Sheffield, Doncaster, Rotherham, Barnsley, Leeds, Huddersfield, Wakefield, Chesterfield, Nottingham and the M1 corridor. Wider UK for large programmes discussed case-by-case.",
              },
            ].map(({ q, a }) => (
              <div key={q} className="card-float bg-card p-6">
                <dt className="font-semibold text-foreground">{q}</dt>
                <dd className="mt-2 text-muted leading-relaxed">{a}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 pb-20 pt-16">
        <div className="container mx-auto max-w-3xl">
          <div className="card-float border-2 border-accent/40 p-10 text-center md:p-12">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              Fleet wrap installation — let&apos;s talk
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Tell us the fleet size, vehicle types, location(s) and your timeline. We&apos;ll
              confirm availability and give you a straight installation quote.
            </p>
            <p className="mt-4 text-muted">
              <strong>Call: {siteConfig.phone}</strong> ·{" "}
              <a href={`mailto:${siteConfig.email}`} className="text-accent hover:underline">
                {siteConfig.email}
              </a>
            </p>
            <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <Link href="/contact/" className="btn-primary inline-block">
                Get a fleet quote
              </Link>
              <Link href="/vehicle-wrap-installation/" className="text-accent hover:underline">
                Trade vehicle wrap installation
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
