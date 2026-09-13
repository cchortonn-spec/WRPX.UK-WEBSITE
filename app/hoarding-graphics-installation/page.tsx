import type { Metadata } from "next";
import Link from "next/link";
import { FaqAccordion } from "@/components/FaqAccordion";
import { getServiceSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Hoarding Graphics Installation — Construction Hoarding & Temporary Hoarding Systems | WRPX",
  description:
    "Professional hoarding graphics installation across Yorkshire and the Midlands — construction site hoardings, temporary hoarding systems (including Kwik-Klik), printed hoarding wraps, branded site screens and event hoarding. Subcontract installation for sign companies, print management firms and project managers.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/hoarding-graphics-installation/",
  },
};

const serviceSchema = getServiceSchema(
  "Hoarding graphics installation — construction hoardings, temporary hoarding systems and branded site screens",
  "Professional installation of hoarding graphics, printed hoarding wraps and temporary hoarding systems for construction sites, retail developments, event venues and commercial projects across Yorkshire and the Midlands. Includes Kwik-Klik and other temporary hoarding panel systems. Subcontract installation for sign companies, print management firms and project managers."
);

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.wrpx.co.uk/" },
    { "@type": "ListItem", position: 2, name: "Commercial Installation", item: "https://www.wrpx.co.uk/commercial-installation/" },
    { "@type": "ListItem", position: 3, name: "Hoarding Graphics Installation", item: "https://www.wrpx.co.uk/hoarding-graphics-installation/" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What hoarding graphics installation services do you provide?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We install printed graphics to hoarding panels — both permanent ply/steel construction hoardings and temporary panel systems such as Kwik-Klik. This includes full-hoarding printed wrap application, vinyl graphics to pre-painted panels, digitally printed hoarding board application and panel-by-panel vinyl graphics on temporary systems. We are an installation-only service — you supply the printed material, we install it on site to spec.",
      },
    },
    {
      "@type": "Question",
      name: "Do you work with temporary hoarding systems like Kwik-Klik?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Temporary modular hoarding systems including Kwik-Klik are a standard part of our hoarding installation work. These systems are commonly used for retail and leisure fit-out projects, pop-up brand activations, event boundaries and construction works in public areas where a permanent hoarding is not appropriate. Graphics are typically printed to fit individual panels or as a continuous wrap across multiple panels — both approaches are straightforward for our installation team.",
      },
    },
    {
      "@type": "Question",
      name: "Can you work on construction site hoardings?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Construction site hoarding graphics installation is a standard part of our commercial work. We are site-safe (CSCS cards, PPE, method statements and risk assessments available), coordinate access with your site manager, and work within your site induction and permit requirements. For large hoardings around major developments, we plan panel-by-panel application sequences to manage seams, graphic alignment and access logistics.",
      },
    },
    {
      "@type": "Question",
      name: "Do you install hoarding graphics white-label for sign companies and print firms?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. White-label installation is standard for sign companies, print management firms and project managers. We attend under your brand, deliver to your specification, and provide photographic completion records. We do not engage with your client directly — all communication goes through you. For hoarding programmes covering multiple sites or extending across a city or region, we offer a single point of contact for all installation logistics.",
      },
    },
    {
      "@type": "Question",
      name: "What areas do you cover for hoarding installation?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "WRPX covers South Yorkshire (Sheffield, Doncaster, Rotherham, Barnsley), West Yorkshire (Leeds, Bradford, Wakefield, Huddersfield), Nottinghamshire and the wider East Midlands corridor for hoarding installation work. For large programmes or time-sensitive construction projects outside this core area, contact us — we plan hoarding programmes around your project timeline and location.",
      },
    },
  ],
};

const faqItems = [
  {
    q: "What hoarding graphics installation services do you provide?",
    a: "We install printed graphics to hoarding panels — both permanent ply/steel construction hoardings and temporary panel systems such as Kwik-Klik. This includes full-hoarding printed wrap application, vinyl graphics to pre-painted panels, digitally printed hoarding board application and panel-by-panel vinyl graphics on temporary systems. We are an installation-only service — you supply the printed material, we install it on site to spec.",
  },
  {
    q: "Do you work with temporary hoarding systems like Kwik-Klik?",
    a: "Yes. Temporary modular hoarding systems including Kwik-Klik are a standard part of our hoarding installation work. These systems are commonly used for retail and leisure fit-out projects, pop-up brand activations, event boundaries and construction works in public areas where a permanent hoarding is not appropriate. Graphics are typically printed to fit individual panels or as a continuous wrap across multiple panels — both approaches are straightforward for our installation team.",
  },
  {
    q: "Can you work on construction site hoardings?",
    a: "Yes. Construction site hoarding graphics installation is a standard part of our commercial work. We are site-safe (CSCS cards, PPE, method statements and risk assessments available), coordinate access with your site manager, and work within your site induction and permit requirements. For large hoardings around major developments, we plan panel-by-panel application sequences to manage seams, graphic alignment and access logistics.",
  },
  {
    q: "Do you install hoarding graphics white-label for sign companies and print firms?",
    a: "Yes. White-label installation is standard for sign companies, print management firms and project managers. We attend under your brand, deliver to your specification, and provide photographic completion records. We do not engage with your client directly — all communication goes through you. For hoarding programmes covering multiple sites or extending across a city or region, we offer a single point of contact for all installation logistics.",
  },
  {
    q: "What areas do you cover for hoarding installation?",
    a: "WRPX covers South Yorkshire (Sheffield, Doncaster, Rotherham, Barnsley), West Yorkshire (Leeds, Bradford, Wakefield, Huddersfield), Nottinghamshire and the wider East Midlands corridor for hoarding installation work. For large programmes or time-sensitive construction projects outside this core area, contact us — we plan hoarding programmes around your project timeline and location.",
  },
];

export default function HoardingGraphicsInstallationPage() {
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
            <span className="text-foreground">Hoarding Graphics Installation</span>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="border-b border-border bg-card py-16 md:py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <p className="text-sm font-medium uppercase tracking-wide text-accent">
            Commercial Installation · Hoarding Graphics &amp; Temporary Systems
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Hoarding graphics installation — construction hoardings, temporary systems and branded site screens
          </h1>
          <p className="mt-5 text-lg text-muted leading-relaxed">
            WRPX installs hoarding graphics for construction projects, retail fit-outs, event venues and brand activations across Yorkshire and the Midlands. Permanent construction site hoardings, temporary modular panel systems (including Kwik-Klik), printed hoarding wraps and vinyl-to-board application. Installation-only, white-label for sign companies and print management firms.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact/" className="btn-primary">
              Request a Hoarding Installation Quote →
            </Link>
            <Link href="/commercial-installation/" className="btn-secondary">
              Commercial Installation Overview
            </Link>
          </div>
        </div>
      </section>

      {/* Service types */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-2xl font-semibold text-foreground md:text-3xl">
            Hoarding installation services
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="card-float p-7">
              <h3 className="text-lg font-semibold text-foreground">Construction site hoarding wraps</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Digitally printed graphics applied to ply or steel construction hoardings around
                development sites. Full-face printed panels, vinyl graphics to pre-painted boards,
                or a mix across the site perimeter. Site-safe team, method statement and risk
                assessment supplied.
              </p>
            </div>
            <div className="card-float p-7">
              <h3 className="text-lg font-semibold text-foreground">Temporary hoarding systems</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Installation of graphics to modular temporary hoarding systems — Kwik-Klik panels
                and equivalent systems used for retail fit-out zones, event boundaries, pop-up
                brand activations and short-term construction screens. Panel-by-panel or
                continuous wrap approaches.
              </p>
            </div>
            <div className="card-float p-7">
              <h3 className="text-lg font-semibold text-foreground">Retail &amp; leisure fit-out hoarding</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Hoarding graphics for shopping centre unit fit-outs, new restaurant openings,
                hotel refurbishments and retail rebrands. Managed access around trading hours.
                Works alongside your fit-out programme — we coordinate with the site or
                centre management team.
              </p>
            </div>
            <div className="card-float p-7">
              <h3 className="text-lg font-semibold text-foreground">Event hoarding &amp; brand screens</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Temporary branded hoarding for events, festivals, pop-up retail and corporate
                activations. Fast installation and de-rig. Graphics applied same day for
                time-sensitive live events. De-rig on your schedule — leave site clean.
              </p>
            </div>
            <div className="card-float p-7">
              <h3 className="text-lg font-semibold text-foreground">Multi-site hoarding programmes</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                For print companies and project managers running branded hoarding programmes across
                multiple construction or retail sites — one installation partner, consistent
                standard, one set of completion documentation per site. Yorkshire and
                Midlands coverage from a single base.
              </p>
            </div>
            <div className="card-float p-7">
              <h3 className="text-lg font-semibold text-foreground">White-label for sign &amp; print companies</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                We install under your brand — unbranded vehicles, your paperwork, no WRPX identity
                on site. Photographic completion records in your format, delivered on the day.
                Trusted installation partner for sign companies and print management firms
                across the North and Midlands.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Kwik-Klik section */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Temporary hoarding systems — Kwik-Klik and modular panel systems
          </h2>
          <div className="space-y-6 text-muted leading-relaxed">
            <p>
              Temporary modular hoarding systems like{" "}
              <a
                href="https://kwik-klik.co.uk/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:underline"
              >
                Kwik-Klik
              </a>{" "}
              are increasingly common in retail, leisure and event contexts — lighter and faster to
              set up than traditional timber hoardings, and reusable. Graphics are typically printed
              to fit the individual panel dimensions of the system, creating a continuous branded
              boundary across the front face.
            </p>
            <p>
              <strong className="text-foreground">Panel-by-panel graphics.</strong> For systems where
              each panel takes its own printed graphic, we apply each panel sequentially, checking
              alignment and seam quality as we go. Panel graphics are usually flush-faced with a
              wrap to the edge or a clean trim at the panel boundary.
            </p>
            <p>
              <strong className="text-foreground">Continuous wrap across panels.</strong> For a
              seamless graphic that runs across multiple panels as if it were one surface, installation
              requires careful alignment of panel positions and sequential application with running
              registration marks. We have experience with this approach on retail fit-out projects
              where a continuous brand image is the priority.
            </p>
            <p>
              <strong className="text-foreground">De-rig and re-use.</strong> Temporary systems
              are designed to be reused — graphics are typically single-use. If you need us to
              de-rig graphics cleanly to preserve the panel substrate for the next use, we can
              do this as part of the project scope. Panels cleaned and ready for next deployment.
            </p>
          </div>
        </div>
      </section>

      {/* Who we work with */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-2xl font-semibold text-foreground md:text-3xl">
            Who commissions hoarding installation from WRPX
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
            <div className="card-float p-6">
              <h3 className="font-semibold text-foreground">Sign companies</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Production teams with construction or retail hoarding orders and no installation
                resource in South Yorkshire or the Midlands. We are your named installation
                partner — white-label, consistent, documented.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="font-semibold text-foreground">Print management companies</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Print managers sourcing installation for branded hoarding programmes. One
                installation quote covering the full programme, one point of contact for
                logistics, one invoice per project.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="font-semibold text-foreground">Project &amp; site managers</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Construction or retail project managers commissioning hoarding graphics as part of
                a larger site set-up programme. We co-ordinate with your site team and centre
                management where required.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="font-semibold text-foreground">Marketing &amp; brand agencies</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Agencies running event or activation hoarding on behalf of retail, hospitality or
                property clients. Installation and de-rig to your event schedule.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="font-semibold text-foreground">Property developers</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Developers branding construction hoardings around new residential or commercial
                builds. On-site contact, method statement and photographic record supplied.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="font-semibold text-foreground">Retail &amp; hospitality operators</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Operators managing their own fit-out hoarding for a new unit, rebrand or
                refurbishment. Direct commission or through your fit-out contractor.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-3xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Hoarding installation questions
          </h2>
          <FaqAccordion items={faqItems} />
        </div>
      </section>

      {/* Related */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Related services
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <Link href="/commercial-installation/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Commercial installation overview</h3>
              <p className="mt-2 text-sm text-muted">Full range of commercial vinyl and graphics installation services.</p>
            </Link>
            <Link href="/wall-wrap-installation-yorkshire/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Wall wrap installation Yorkshire</h3>
              <p className="mt-2 text-sm text-muted">Large-format wall graphics and wall wrap installation across Yorkshire.</p>
            </Link>
            <Link href="/window-graphics-installation-yorkshire/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Window graphics installation</h3>
              <p className="mt-2 text-sm text-muted">Window vinyl, frosted film and window graphics installation.</p>
            </Link>
            <Link href="/shop-front-graphics-installation/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Shop front graphics installation</h3>
              <p className="mt-2 text-sm text-muted">Shop front vinyl, fascia graphics and frontage installation.</p>
            </Link>
            <Link href="/multi-site-rollout-installation/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Multi-site rollout installation</h3>
              <p className="mt-2 text-sm text-muted">Consistent installation across multiple sites, one partner, standardised reporting.</p>
            </Link>
            <Link href="/print-company-installation-partner/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Print company installation partner</h3>
              <p className="mt-2 text-sm text-muted">White-label installation partnership for print management companies.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-20">
        <div className="container mx-auto max-w-3xl">
          <div className="card-float border-2 border-accent/40 p-10 text-center md:p-12">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              Need hoarding graphics installed in Yorkshire or the Midlands?
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Tell us the site, the system, the print spec and the programme dates — we will quote
              and schedule. Construction hoardings, temporary systems, multi-site rollouts and
              white-label for sign and print companies.
            </p>
            <Link href="/contact/" className="btn-primary mt-8 inline-block">
              Request a Hoarding Installation Quote →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
