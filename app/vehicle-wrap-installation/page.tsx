import type { Metadata } from "next";
import Link from "next/link";
import { getServiceSchema } from "@/lib/schema";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Vehicle Wrap Installation — Install-Only Subcontract | WRPX South Yorkshire",
  description:
    "Vehicle wrap installation subcontract for print companies, sign companies and fleet managers across Yorkshire. You supply the wrap — we install it. South Yorkshire base, Sheffield to Nottingham coverage.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/vehicle-wrap-installation/",
  },
};

const serviceSchema = getServiceSchema(
  "Vehicle wrap installation — install-only subcontract",
  "Professional vehicle wrap installation as a subcontract service for print companies, sign companies and fleet managers across South Yorkshire and the North. Installation-only: you supply the wrap, WRPX installs it."
);

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do you supply or print vehicle wraps?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No — WRPX is an installation-only partner. You or your supplier provides the printed wrap; we handle surface preparation and application.",
      },
    },
    {
      "@type": "Question",
      name: "What types of vehicles do you install wraps on?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We install wraps on vans, cars, HGVs, trailers, minibuses and specialist vehicles. Full wraps, partial wraps and vinyl cut graphics are all within scope.",
      },
    },
    {
      "@type": "Question",
      name: "Can you handle fleet programmes across multiple sites?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We work with print companies and fleet managers running multi-vehicle programmes. We provide photographic documentation and a consistent installation standard across every vehicle.",
      },
    },
    {
      "@type": "Question",
      name: "Do you work under white-label terms?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We work under your brand when required — your paperwork, your name on comms. Your client doesn't need to know WRPX is involved.",
      },
    },
  ],
};

export default function VehicleWrapInstallationPage() {
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
            Install-only · Trade &amp; subcontract
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Vehicle Wrap Installation — Subcontract for Print &amp; Sign Companies
          </h1>
          <p className="mt-6 text-lg text-muted leading-relaxed">
            WRPX installs{" "}
            <strong className="text-foreground">vehicle wraps supplied by you or your client</strong>.
            We are a South Yorkshire-based{" "}
            <strong className="text-foreground">installation-only partner</strong> for print houses,
            sign companies and fleet managers who need a reliable, preparation-led installer on the ground
            across Yorkshire and the North.
          </p>
          <ul className="mt-6 space-y-2 text-muted">
            <li className="flex gap-2">
              <span className="text-accent">✓</span>
              <span>You supply the wrap — we handle surface prep and application</span>
            </li>
            <li className="flex gap-2">
              <span className="text-accent">✓</span>
              <span>White-label available — your brand in front of the client, always</span>
            </li>
            <li className="flex gap-2">
              <span className="text-accent">✓</span>
              <span>Fleet programmes and multi-vehicle runs handled from a single point of contact</span>
            </li>
            <li className="flex gap-2">
              <span className="text-accent">✓</span>
              <span>Photographic sign-off on every vehicle</span>
            </li>
          </ul>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Link href="/contact/" className="btn-primary inline-block text-center">
              Request a trade install quote
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

      {/* Why install-only */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <div className="card-float p-8 md:p-10">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              Why print companies and sign companies need an install-only partner
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Most vehicle wrap companies in Yorkshire offer design, print and installation as a bundle.
              That works for end clients — but it creates a problem for print houses and sign companies
              who already handle print production and just need a reliable installer to finish the job on
              site.
            </p>
            <p className="mt-4 text-muted leading-relaxed">
              WRPX is that installer. We don&apos;t print. We don&apos;t design. We prepare surfaces,
              apply the wrap you&apos;ve produced, and sign off with photographic documentation.
              Your client gets a professional result. You keep the client relationship and the margin.
            </p>
            <p className="mt-4 text-muted leading-relaxed">
              Our background is precision vinyl application across demanding surfaces — kitchens,
              furniture, architectural film — which translates directly into the preparation discipline
              vehicle wrapping requires. Proper cleaning, heat treatment, stretching and seam placement
              is what separates a wrap that lasts three years from one that starts lifting at the first
              car wash.
            </p>
          </div>
        </div>
      </section>

      {/* What we install */}
      <section className="border-y border-border bg-card px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-center text-2xl font-semibold text-foreground md:text-3xl">
            What we install
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Full vehicle wraps",
                body: "Complete vehicle wrap installation — cars, vans, minibuses, HGVs and trailers. You supply the printed panels; we handle the full application from heat prep to final trim.",
              },
              {
                title: "Partial wraps &amp; graphics",
                body: "Bonnet wraps, roof graphics, side panels and cab-only installs. We apply to the sections specified and leave clean, crisp edges throughout.",
              },
              {
                title: "Vinyl cut graphics &amp; lettering",
                body: "Vinyl lettering, cut graphics and colour-change film installs on single vehicles or fleets. Applied to the same preparation standard as a full wrap.",
              },
              {
                title: "Fleet programmes",
                body: "Multi-vehicle programmes for corporate fleets, delivery vehicles and branded transport. Consistent application across every vehicle — same standard, same finish, every time.",
              },
              {
                title: "Colour-change wraps",
                body: "Full or partial colour-change film application using cast vinyl from 3M, Avery Dennison and Hexis. Heat-formed around complex curves and panels.",
              },
              {
                title: "Removal &amp; re-wrap",
                body: "Safe removal of existing wraps, paint protection film and vinyl cut graphics before re-application. Surface condition assessed and treated before any new material goes on.",
              },
            ].map((item) => (
              <div key={item.title} className="card-float p-6">
                <h3
                  className="font-semibold text-foreground"
                  dangerouslySetInnerHTML={{ __html: item.title }}
                />
                <p className="mt-3 text-sm text-muted leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who this is for */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl font-semibold text-foreground md:text-3xl">Who this is for</h2>
          <ul className="mt-6 space-y-3 text-muted">
            {[
              "Print houses and large-format printers who produce vehicle wraps for end clients and need a Yorkshire-based installer to complete the job",
              "Sign companies subcontracting vehicle wrap installation capacity — either on overflow or because installation is outside your core team",
              "Marketing agencies running fleet branding campaigns and needing a reliable installer under white-label terms",
              "Fleet managers commissioning livery refreshes or rebrand programmes across company vehicles based in South Yorkshire and the North",
              "Vehicle wrap studios outside the region who need a local installer for clients in South Yorkshire without sending a crew from further afield",
            ].map((item) => (
              <li key={item} className="flex gap-2">
                <span className="mt-1 shrink-0 text-accent">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* How it works */}
      <section className="border-y border-border bg-card px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-center text-2xl font-semibold text-foreground md:text-3xl">
            How vehicle wrap subcontract works with WRPX
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                num: 1,
                title: "You brief us",
                body: "Tell us the vehicle spec, wrap panels supplied, install location and timeline. We confirm suitability and book.",
              },
              {
                num: 2,
                title: "Surface preparation",
                body: "Proper clean-down, degreasing and surface treatment before a panel goes near the vehicle. This step is non-negotiable — it's what makes the wrap last.",
              },
              {
                num: 3,
                title: "Application",
                body: "Wraps applied using heat and professional tools. Seams, edges and problem areas get the time they need — we don't rush application to hit a day rate.",
              },
              {
                num: 4,
                title: "Photo sign-off",
                body: "Photo documentation of every vehicle: before, during and after. We note any pre-existing surface damage before touching the vehicle.",
              },
              {
                num: 5,
                title: "Reporting back",
                body: "You receive a photo pack and any install notes. On fleet programmes, we maintain a consolidated record across every vehicle in the batch.",
              },
            ].map((step) => (
              <div key={step.num} className="card-float flex gap-4 bg-background p-6 md:p-8">
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

      {/* Coverage */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <div className="card-float p-8 md:p-10">
            <h2 className="text-xl font-semibold text-foreground">Coverage</h2>
            <p className="mt-4 text-muted leading-relaxed">
              Based in <strong className="text-foreground">South Yorkshire</strong>, we cover vehicle
              wrap installations across{" "}
              <strong className="text-foreground">
                Sheffield · Rotherham · Barnsley · Doncaster · Leeds · Huddersfield · Wakefield · Chesterfield ·
                Nottingham
              </strong>{" "}
              and the M1 corridor between Sheffield and the East Midlands.
            </p>
            <p className="mt-4 text-muted leading-relaxed">
              For fleet programmes based further afield, travel is discussed on a project basis. We
              don&apos;t turn down well-organised fleet programmes because of distance — but we do need
              the programme to be properly planned and the vehicles ready for install when we arrive.
            </p>
            <div className="mt-6 flex flex-wrap gap-3 text-sm">
              <Link href="/commercial-installation-sheffield/" className="text-accent hover:underline">
                Sheffield commercial installation
              </Link>
              <Link href="/commercial-installation-leeds/" className="text-accent hover:underline">
                Leeds commercial installation
              </Link>
              <Link href="/commercial-installation-nottingham/" className="text-accent hover:underline">
                Nottingham commercial installation
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
          <h2 className="text-2xl font-semibold text-foreground">Trade FAQ — vehicle wraps</h2>
          <dl className="mt-8 space-y-6">
            {[
              {
                q: "Do you supply or print vehicle wraps?",
                a: "No — WRPX is installation-only. You or your supplier provides the printed wrap. We handle surface preparation and application.",
              },
              {
                q: "What vehicles do you install wraps on?",
                a: "Vans, cars, HGVs, trailers, minibuses and specialist vehicles. Full wraps, partial wraps and vinyl cut graphics are all in scope.",
              },
              {
                q: "Can you handle a fleet programme across multiple vehicles?",
                a: "Yes. We work with print companies and fleet managers running multi-vehicle programmes. Photographic documentation and a consistent install standard across every vehicle.",
              },
              {
                q: "Do you work white-label?",
                a: "Yes. We work under your brand — your paperwork, your name on comms. Your client doesn't need to know WRPX is involved.",
              },
              {
                q: "How do lead times work?",
                a: "Share your fleet schedule early so we can block capacity. Same-week bookings are possible for single-vehicle installs; fleet programmes need more lead time to hold consecutive days.",
              },
            ].map(({ q, a }) => (
              <div key={q} className="card-float p-6">
                <dt className="font-semibold text-foreground">{q}</dt>
                <dd className="mt-2 text-muted leading-relaxed">{a}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Related services */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-xl font-semibold text-foreground">Related B2B services</h2>
          <ul className="mt-6 space-y-3 text-muted">
            <li>
              <Link href="/white-label-graphics-installation/" className="text-accent hover:underline">
                White-label retail graphics installation
              </Link>{" "}
              — window graphics, wall wraps, floor vinyls and shop fronts under your brand
            </li>
            <li>
              <Link href="/commercial-installation/" className="text-accent hover:underline">
                Commercial installation hub
              </Link>{" "}
              — full overview of WRPX commercial and trade services
            </li>
            <li>
              <Link href="/sign-company-installation-partner/" className="text-accent hover:underline">
                Sign company installation partner
              </Link>{" "}
              — subcontract install for sign manufacturers across South Yorkshire and the North
            </li>
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 pb-20">
        <div className="container mx-auto max-w-3xl">
          <div className="card-float border-2 border-accent/40 p-10 text-center md:p-12">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              Book a vehicle wrap installation
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Send vehicle spec, wrap panels supplied, install location and timeline. We&apos;ll
              confirm availability and quote installation — you supply the wrap; we deliver the finish.
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
                Full commercial service overview
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
