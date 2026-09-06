import type { Metadata } from "next";
import Link from "next/link";
import { FaqAccordion } from "@/components/FaqAccordion";
import { getServiceSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Subcontract Vinyl Installer Lytham St Annes — Sign & Print Company Installation Partner | WRPX",
  description:
    "Subcontract vinyl installation across Lytham St Annes and the FY8 zone for sign companies, print houses and fit-out contractors. WRPX covers Lytham town centre, St Annes-on-Sea, the Fylde coast and the A584 corridor. Easily combined with Blackpool, Preston or the wider Lancashire coast on the same programme.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/subcontract-vinyl-installer-lytham-st-annes/",
  },
};

const serviceSchema = getServiceSchema(
  "Subcontract vinyl installer Lytham St Annes — sign company and print house installation partner",
  "Professional subcontract vinyl installation for sign companies, print management firms and fit-out contractors across Lytham St Annes and the FY8 zone. White-label available. WRPX covers Lytham town centre, St Annes-on-Sea FY8, the Fylde coast A584 corridor and all commercial and retail premises across Lytham St Annes."
);

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.wrpx.co.uk/" },
    { "@type": "ListItem", position: 2, name: "Commercial Installation", item: "https://www.wrpx.co.uk/commercial-installation/" },
    { "@type": "ListItem", position: 3, name: "Yorkshire Subcontract Hub", item: "https://www.wrpx.co.uk/subcontract-vinyl-installation-yorkshire/" },
    { "@type": "ListItem", position: 4, name: "Subcontract Installer Lytham St Annes", item: "https://www.wrpx.co.uk/subcontract-vinyl-installer-lytham-st-annes/" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How far is WRPX from Lytham St Annes?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Lytham St Annes is approximately 1 hour 30 minutes from our South Yorkshire base. The most direct route is the M62 west to junction 29, then the M65 west to junction 1, then the M55 west to junction 4, then the A583 south-west to St Annes — approximately 80 miles door to door. Lytham St Annes FY8 sits 7 miles south of Blackpool FY1 via the A584 Promenade coast road.",
      },
    },
    {
      "@type": "Question",
      name: "Do you work white-label in Lytham St Annes?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — white-label is standard on all Lytham St Annes and FY8 zone work. We arrive in unbranded vehicles, carry out every installation under your brand and provide full photographic documentation — before, during and completed sign-off — in your agreed format on the day. No WRPX branding appears on site, on vehicles or on any documentation.",
      },
    },
    {
      "@type": "Question",
      name: "Can you combine Lytham St Annes with Blackpool on the same programme?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — Lytham St Annes FY8 is 7 miles south of Blackpool FY1 via the A584 Fylde coast road — the natural pairing for any Lancashire Fylde coast programme. A single visit covers Lytham St Annes and Blackpool town centre without separate mobilisations. Preston is 12 miles east via the A583 and M55 — also accessible on the same visit for sign companies with work across the Fylde and central Lancashire.",
      },
    },
    {
      "@type": "Question",
      name: "What types of vinyl installation do you cover in Lytham St Annes?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Window graphics, frosted and decorative window film, wall wraps, floor graphics, shop front and fascia vinyls, wayfinding vinyls, hoarding graphics, office interior graphics and retail and hospitality graphics. Installation only — you supply the printed or cut material, we assess the surface and install to spec. Lytham town centre has a strong independent retail offer on Clifton Street, and St Annes town centre on St Annes Square — both active markets for shop front and window graphics.",
      },
    },
    {
      "@type": "Question",
      name: "Do you cover the Fylde coast beyond Lytham St Annes?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — from Lytham St Annes we cover the surrounding Fylde coast area including Kirkham PR4 (7 miles north-east via the B5259), Freckleton PR4 (4 miles north-east), Warton PR4 (5 miles north-east) and the wider rural Fylde zone. We also cover the southern Blackpool FY4 and FY3 postcode areas alongside Lytham St Annes FY8 work — no separate mobilisation needed for the immediate Fylde coast area.",
      },
    },
  ],
};

const faqItems = [
  {
    q: "How far is WRPX from Lytham St Annes?",
    a: "Lytham St Annes is approximately 1 hour 30 minutes from our South Yorkshire base. The most direct route is the M62 west to junction 29, then the M65 west to junction 1, then the M55 west to junction 4, then the A583 south-west to St Annes — approximately 80 miles door to door. Lytham St Annes FY8 sits 7 miles south of Blackpool FY1 via the A584 Promenade coast road.",
  },
  {
    q: "Do you work white-label in Lytham St Annes?",
    a: "Yes — white-label is standard on all Lytham St Annes and FY8 zone work. We arrive in unbranded vehicles, carry out every installation under your brand and provide full photographic documentation — before, during and completed sign-off — in your agreed format on the day. No WRPX branding appears on site, on vehicles or on any documentation.",
  },
  {
    q: "Can you combine Lytham St Annes with Blackpool on the same programme?",
    a: "Yes — Lytham St Annes FY8 is 7 miles south of Blackpool FY1 via the A584 Fylde coast road — the natural pairing for any Lancashire Fylde coast programme. A single visit covers Lytham St Annes and Blackpool town centre without separate mobilisations. Preston is 12 miles east via the A583 and M55 — also accessible on the same visit for sign companies with work across the Fylde and central Lancashire.",
  },
  {
    q: "What types of vinyl installation do you cover in Lytham St Annes?",
    a: "Window graphics, frosted and decorative window film, wall wraps, floor graphics, shop front and fascia vinyls, wayfinding vinyls, hoarding graphics, office interior graphics and retail and hospitality graphics. Installation only — you supply the printed or cut material, we assess the surface and install to spec. Lytham town centre has a strong independent retail offer on Clifton Street, and St Annes town centre on St Annes Square — both active markets for shop front and window graphics.",
  },
  {
    q: "Do you cover the Fylde coast beyond Lytham St Annes?",
    a: "Yes — from Lytham St Annes we cover the surrounding Fylde coast area including Kirkham PR4 (7 miles north-east via the B5259), Freckleton PR4 (4 miles north-east), Warton PR4 (5 miles north-east) and the wider rural Fylde zone. We also cover the southern Blackpool FY4 and FY3 postcode areas alongside Lytham St Annes FY8 work — no separate mobilisation needed for the immediate Fylde coast area.",
  },
];

const nearbyPages = [
  { href: "/subcontract-vinyl-installer-blackpool/", city: "Blackpool", postcode: "FY1", desc: "Blackpool town centre — 7 miles north via A584" },
  { href: "/subcontract-vinyl-installer-garstang/", city: "Garstang", postcode: "PR3", desc: "Garstang — 18 miles north-east via A585 and A6" },
  { href: "/subcontract-vinyl-installer-longridge/", city: "Longridge", postcode: "PR3", desc: "Longridge — 20 miles north-east via M55 and B6243" },
  { href: "/subcontract-vinyl-installer-burnley/", city: "Burnley", postcode: "BB11", desc: "Burnley — 30 miles east via M65" },
];

export default function SubcontractVinylInstallerLythamStAnnesPage() {
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
            <span className="text-foreground">Subcontract Installer Lytham St Annes</span>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="border-b border-border bg-card py-16 md:py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <p className="text-sm font-medium uppercase tracking-wide text-accent">
            Subcontract Vinyl Installation · Lytham St Annes FY8
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Subcontract vinyl installer — Lytham St Annes and the FY8 zone
          </h1>
          <p className="mt-5 text-lg text-muted leading-relaxed">
            WRPX provides white-label subcontract vinyl installation for sign companies,
            print management firms and fit-out contractors with work in Lytham St Annes and
            the FY8 zone. We cover Lytham town centre, St Annes-on-Sea and the Fylde coast
            A584 corridor — easily combined with Blackpool, Preston or Garstang on the same
            programme.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact/" className="btn-primary">
              Get in Touch About Lytham St Annes Work →
            </Link>
            <Link href="/subcontract-vinyl-installation-yorkshire/" className="btn-secondary">
              Yorkshire Subcontract Hub
            </Link>
          </div>
        </div>
      </section>

      {/* Coverage and context */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Lytham St Annes and the FY8 zone — coverage and context
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              Lytham St Annes is a coastal town of approximately 43,000 people on the Fylde coast
              of Lancashire — 7 miles south of Blackpool and 12 miles west of Preston. It
              comprises two distinct commercial centres: Lytham town centre on Clifton Street,
              with a strong independent retail offer and a high proportion of professional
              services, hospitality and leisure businesses; and St Annes-on-Sea centred on
              St Annes Square, with a similar independent-dominated retail profile.
            </p>
            <p>
              The town has an unusually affluent retail and hospitality market for its size,
              driven by its position as the residential and leisure address of choice for
              professional commuters to Preston and Blackpool. Independent restaurants, wine
              bars, boutique retail and premium hospitality businesses across both Lytham and
              St Annes generate consistent demand for shop front vinyls, window film and
              interior graphics. This market is almost entirely served by Lancashire-based
              sign and print companies — there is currently no WRPX competitor with a
              dedicated Lytham St Annes subcontract page.
            </p>
            <p>
              The A584 Fylde coast road links Lytham St Annes directly to Blackpool FY1 and
              Blackpool Pleasure Beach FY4 — enabling efficient combined visits to the Blackpool
              and Lytham St Annes commercial zones. From St Annes, the M55 junction 4 is
              approximately 4 miles north-east, making Preston (12 miles) and the M6 corridor
              straightforward additions to any Fylde coast programme.
            </p>
          </div>
        </div>
      </section>

      {/* What we install */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-2xl font-semibold text-foreground md:text-3xl">
            What we install in Lytham St Annes
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Shop front and fascia vinyls</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Cut and printed vinyls on Lytham Clifton Street and St Annes Square shop fronts
                and fascias. Supplied by your sign or print company — we install to spec and
                provide photographic sign-off.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Window graphics and privacy film</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Printed window graphics, frosted privacy film, etched-effect decorative film and
                one-way privacy film across Lytham St Annes retail, restaurant, hospitality and
                professional services premises.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Wall graphics and wraps</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Printed wall graphic installation and architectural vinyl wall wraps across
                Lytham St Annes commercial, hospitality and retail premises on the FY8 zone.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Hospitality and restaurant graphics</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Internal graphics, decorative vinyls and window film installations for Lytham
                and St Annes restaurants, wine bars and hospitality businesses — a significant
                independent market in both town centres.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Office and professional services vinyls</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Glass partition vinyls, manifestation, frosted privacy film and internal branding
                for Lytham St Annes professional services offices — solicitors, financial advisers,
                estate agents and the Fylde coast corporate office market.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Floor graphics</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Anti-slip floor vinyl installation across Lytham St Annes retail, hospitality and
                commercial premises. Applied to specification with anti-slip overlaminate for
                foot-traffic zones.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How we work */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            How white-label subcontract installation works
          </h2>
          <div className="space-y-6 text-muted leading-relaxed">
            <p>
              <strong className="text-foreground">You supply, we install.</strong>{" "}
              Your sign or print company produces the material to spec — we collect it or
              you ship it direct to site — and we assess the surface, install to specification
              and photograph the finished result. No WRPX branding in front of your client.
            </p>
            <p>
              <strong className="text-foreground">White-label by default.</strong>{" "}
              We arrive in unbranded vehicles and carry your paperwork throughout the Lytham
              St Annes installation. All photographic documentation is formatted to your
              requirements and delivered to your project manager or account handler on the day.
            </p>
            <p>
              <strong className="text-foreground">Fylde coast combination programmes.</strong>{" "}
              Lytham St Annes pairs naturally with Blackpool — 7 miles north via the A584
              Promenade. For sign companies with Blackpool and Lytham accounts, a single
              visit covers both towns without separate mobilisations. Preston (M55, 12 miles)
              and Garstang PR3 can be added to the same programme for Lancashire-wide
              efficiency.
            </p>
          </div>
        </div>
      </section>

      {/* Nearby */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Nearby areas we also cover
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {nearbyPages.map(({ href, city, postcode, desc }) => (
              <Link key={href} href={href} className="card-float p-5 hover:border-accent/60 transition-colors">
                <h3 className="font-semibold text-foreground">{city} <span className="text-muted font-normal">({postcode})</span></h3>
                <p className="mt-2 text-sm text-muted">{desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-3xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Lytham St Annes subcontract installation — common questions
          </h2>
          <FaqAccordion items={faqItems} />
        </div>
      </section>

      {/* CTA */}
      <section className="bg-card px-4 py-20">
        <div className="container mx-auto max-w-3xl">
          <div className="card-float border-2 border-accent/40 p-10 text-center md:p-12">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              Sign company with work in Lytham St Annes?
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              We cover Lytham St Annes and the FY8 zone for white-label subcontract vinyl
              installation. Tell us the job — surface, material, location and access — and
              we&apos;ll confirm availability and pricing.
            </p>
            <Link href="/contact/" className="btn-primary mt-8 inline-block">
              Get in Touch About Lytham St Annes Work →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
