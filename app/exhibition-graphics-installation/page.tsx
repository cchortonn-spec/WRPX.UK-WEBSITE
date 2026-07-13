import type { Metadata } from "next";
import Link from "next/link";
import { getServiceSchema } from "@/lib/schema";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Exhibition Graphics Installation — Trade Show & Event Stand Vinyl | WRPX",
  description:
    "Subcontract exhibition graphics installation for event designers, agencies and exhibition companies across Yorkshire and the Midlands. Shell scheme vinyl, custom stand graphics, floor graphics — you design and print, WRPX installs.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/exhibition-graphics-installation/",
  },
};

const serviceSchema = getServiceSchema(
  "Exhibition graphics installation — trade show and event stand vinyl installation",
  "Professional subcontract vinyl installation for trade show stands, exhibition shell schemes, event graphics and branded stand surfaces. Yorkshire and East Midlands coverage. WRPX installs the graphics you supply — shell scheme panels, custom stand surfaces, floor vinyls, wall graphics."
);

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://www.wrpx.co.uk/",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Commercial Installation",
      item: "https://www.wrpx.co.uk/commercial-installation/",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Exhibition Graphics Installation",
      item: "https://www.wrpx.co.uk/exhibition-graphics-installation/",
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do you install graphics on exhibition stands you haven't built?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — this is exactly the kind of job we take on. If your stand has been built by a structural contractor and you need a specialist vinyl installer to apply the graphics, we come in at the graphics stage. You supply the printed vinyl and brief us on specification and placement; we prepare surfaces, install and sign off. We do not supply or build exhibition structures.",
      },
    },
    {
      "@type": "Question",
      name: "What types of exhibition graphics do you install?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Shell scheme panel graphics (self-adhesive vinyl to modular exhibition panels), custom stand surface graphics (large-format vinyl to bespoke stand walls and panels), floor graphics (branded, directional or promotional vinyl for exhibition floors), vehicle livery at motor shows and branded furniture wraps. We install graphics you supply — we do not print.",
      },
    },
    {
      "@type": "Question",
      name: "Can you work to exhibition build and breakdown schedules?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — exhibition timelines are non-negotiable in a way that most other installation jobs are not. We understand that access to the show floor is timed, breakdown must be complete by a fixed time, and the stand needs to be show-ready before doors open. We plan around venue build schedules and arrive prepared to work efficiently within the access window you have.",
      },
    },
    {
      "@type": "Question",
      name: "Which exhibition venues do you cover?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We cover venues across Yorkshire and the East Midlands — including Harrogate Convention Centre, Sheffield Arena and Sheffield Hallam FM Arena, Leeds venues, the East Midlands Conference Centre (Nottingham) and Derby venues. For events at venues further south or north (Manchester, Birmingham, London), discuss travel and scheduling with us directly.",
      },
    },
    {
      "@type": "Question",
      name: "Do you handle de-installation at the end of a show?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — de-installation (stripping vinyl from panels and surfaces at breakdown) is available as part of a full exhibition graphics package. We remove graphics cleanly, dispose of stripped vinyl and return panels in the condition specified by the venue. Brief us on de-install requirements when you book.",
      },
    },
  ],
};

export default function ExhibitionGraphicsInstallationPage() {
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
            Subcontract · Exhibition &amp; Event Graphics
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Exhibition Graphics Installation
          </h1>
          <p className="mt-6 text-lg text-muted leading-relaxed">
            WRPX provides specialist vinyl installation for{" "}
            <strong className="text-foreground">trade show stands, exhibition shell schemes, event graphics and branded stand surfaces</strong>{" "}
            across Yorkshire and the East Midlands. We work for event designers, agencies, print
            companies and exhibition contractors who need a reliable installation-only partner on
            show day.
          </p>
          <p className="mt-4 text-muted leading-relaxed">
            You design the stand and produce the graphics. We install the vinyl — shell scheme panels,
            custom stand surfaces, floor graphics, vehicle wraps on the stand. One installer, show-floor
            ready, working to your brief and your venue&apos;s build schedule.
          </p>
          <ul className="mt-6 space-y-2 text-muted">
            <li className="flex gap-2">
              <span className="text-accent">✓</span>
              <span>
                <strong className="text-foreground">Installation-only</strong> — you supply printed
                vinyl, we prepare surfaces and install to specification
              </span>
            </li>
            <li className="flex gap-2">
              <span className="text-accent">✓</span>
              <span>Venue build-schedule aware — we work within your access window, not around it</span>
            </li>
            <li className="flex gap-2">
              <span className="text-accent">✓</span>
              <span>Photo documentation — installation sign-off per panel and surface area</span>
            </li>
            <li className="flex gap-2">
              <span className="text-accent">✓</span>
              <span>De-installation at breakdown available — clean removal, panels returned to spec</span>
            </li>
          </ul>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Link href="/contact/" className="btn-primary inline-block text-center">
              Discuss an exhibition install
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

      {/* Why exhibition graphics is different */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <div className="card-float p-8 md:p-10">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              Why exhibition graphics installation is a specialist job
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Exhibition graphics installation is not like installing a shopfront or a wall mural.
              The context changes everything — you have a fixed access window on the show floor, a
              stand that may be partially built by another contractor, surfaces that may not have been
              tested in advance, and a client who needs the stand to be show-ready to the minute.
            </p>
            <p className="mt-4 text-muted leading-relaxed">
              Shell scheme panels have their own surface characteristics — the panel material and
              finish varies by exhibition contractor and affects adhesion. Custom-built stand walls
              may have primed MDF, powder-coated aluminium or raw composite panels that each need
              different preparation. Floor graphics at venues need to comply with anti-slip
              specifications, and many venues require specific floor graphic materials.
            </p>
            <p className="mt-4 text-muted leading-relaxed">
              We have the vinyl installation background to handle all of this. We work from a brief,
              not from instructions issued on the morning of build. If you supply clear material spec,
              panel dimensions and access details, we arrive prepared to install — not to diagnose.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="border-y border-border bg-card px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-center text-2xl font-semibold text-foreground md:text-3xl">
            Exhibition graphic types we install
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Shell scheme panel graphics</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Self-adhesive vinyl applied to modular exhibition shell scheme panels. We work with
                the panel specifications provided by your exhibition contractor — panel dimensions,
                surface type and any restrictions on adhesive type. Graphics installed bubble-free
                with clean edges to panel borders.
              </p>
              <p className="mt-3 text-sm text-muted">
                Common shell scheme suppliers we&apos;ve worked with: GES, Octanorm, Tecna and
                bespoke contractor panel systems.
              </p>
            </div>
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Custom stand surface graphics</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Large-format vinyl applied to bespoke exhibition stand walls, fascias, podiums and
                panels. MDF, aluminium composite, foamex and fabric-faced panels all handled.
                Surface assessment before installation — we flag substrate issues before applying
                graphics rather than discovering problems on-site with a full audience watching.
              </p>
            </div>
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Exhibition floor graphics</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Branded floor vinyl, directional wayfinding, exhibition aisle graphics and promotional
                floor overlays. We use anti-slip laminate as standard — critical for venue compliance
                and client liability. Venue floor type assessed (exhibition carpet, screed, polished
                concrete) before installation.
              </p>
              <p className="mt-3 text-sm">
                <Link href="/floor-vinyl-installation-yorkshire/" className="text-accent hover:underline">
                  Floor vinyl installation detail
                </Link>
              </p>
            </div>
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Branded wall graphics &amp; murals</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Feature wall graphics, large-format branded murals and decorative vinyl for exhibition
                stand interiors and branded event environments. Same standards as our permanent
                commercial wall wrap installations — clean edges, no bubbles, consistent colour across
                multiple panels.
              </p>
              <p className="mt-3 text-sm">
                <Link href="/wall-wrap-installation-yorkshire/" className="text-accent hover:underline">
                  Wall wrap installation detail
                </Link>
              </p>
            </div>
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Vehicle livery at motor shows</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Vehicle wrap or livery installation at motor shows, automotive exhibitions and brand
                activations. Partial wraps, full wraps or cut vinyl livery applied to show vehicles
                on site. Photographic sign-off per vehicle — before and after.
              </p>
              <p className="mt-3 text-sm">
                <Link href="/vehicle-wrap-installation/" className="text-accent hover:underline">
                  Vehicle wrap installation
                </Link>
              </p>
            </div>
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">De-installation &amp; breakdown</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Clean removal of vinyl graphics from exhibition panels and surfaces at show
                breakdown. Panels returned to the condition specified by the exhibition contractor.
                Stripped vinyl disposed of responsibly. Brief us on panel condition requirements
                when you book — shell scheme damage claims start with poor vinyl removal.
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
              Who uses WRPX for exhibition graphics installation
            </h2>
            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              <div>
                <h3 className="font-medium text-foreground">Exhibition design companies</h3>
                <p className="mt-2 text-sm text-muted leading-relaxed">
                  Exhibition stand designers and contractors who design and build stands but do not
                  have in-house vinyl installation. You build the structure; we apply the graphics.
                  Clean handover, no overlap.
                </p>
              </div>
              <div>
                <h3 className="font-medium text-foreground">Event marketing agencies</h3>
                <p className="mt-2 text-sm text-muted leading-relaxed">
                  Agencies managing trade show appearances for clients — from stand design through
                  graphics production and on-site installation. We are the installation arm of your
                  exhibition workflow, white-label as required.
                </p>
              </div>
              <div>
                <h3 className="font-medium text-foreground">Print companies</h3>
                <p className="mt-2 text-sm text-muted leading-relaxed">
                  Large-format print houses who produce exhibition graphics for their clients but
                  don&apos;t install. You print the vinyl; we install it at the venue. Trade-only
                  pricing, consolidated billing available for regular show programmes.
                </p>
              </div>
              <div>
                <h3 className="font-medium text-foreground">Exhibiting brands (direct)</h3>
                <p className="mt-2 text-sm text-muted leading-relaxed">
                  Brands or businesses who exhibit regularly and manage their own show logistics.
                  If you have your graphics produced and just need a reliable installer on show day,
                  we can attend and fit directly on your brief.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Venues */}
      <section className="border-y border-border bg-card px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <div className="card-float bg-background p-8 md:p-10">
            <h2 className="text-xl font-semibold text-foreground">
              Exhibition venues we cover
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Our operating area covers Yorkshire and the East Midlands — the cluster of venues
              most active for regional trade shows, industry exhibitions and brand activations.
              Specific venues we cover as standard:
            </p>
            <ul className="mt-4 space-y-2 text-sm text-muted">
              <li className="flex gap-2">
                <span className="text-accent">·</span>
                <span><strong className="text-foreground">Harrogate Convention Centre</strong> — one of the UK&apos;s busiest regional conference and exhibition venues (Harrogate International Centre)</span>
              </li>
              <li className="flex gap-2">
                <span className="text-accent">·</span>
                <span><strong className="text-foreground">Sheffield venues</strong> — Sheffield Arena, Sheffield City Hall, Ponds Forge, Meadowhall event spaces</span>
              </li>
              <li className="flex gap-2">
                <span className="text-accent">·</span>
                <span><strong className="text-foreground">Leeds venues</strong> — Leeds First Direct Arena, Royal Armouries, Pavilions of Harrogate (Leeds show season)</span>
              </li>
              <li className="flex gap-2">
                <span className="text-accent">·</span>
                <span><strong className="text-foreground">East Midlands Conference Centre</strong> — Nottingham University campus, one of the main East Midlands exhibition venues</span>
              </li>
              <li className="flex gap-2">
                <span className="text-accent">·</span>
                <span><strong className="text-foreground">Derby venues</strong> — Derbyshire county and Derby city exhibition spaces</span>
              </li>
            </ul>
            <p className="mt-4 text-sm text-muted">
              Venues outside this area (Manchester, Birmingham, London) — discuss travel, scheduling
              and rates directly. We do take on out-of-area exhibition jobs for regular clients and
              programmes with sufficient lead time.
            </p>
            <div className="mt-6 flex flex-wrap gap-3 text-sm">
              <Link href="/commercial-installation/" className="text-accent hover:underline">
                Commercial installation overview
              </Link>
              <Link href="/multi-site-rollout-installation/" className="text-accent hover:underline">
                Multi-site rollout installation
              </Link>
              <Link href="/sign-company-installation-partner/" className="text-accent hover:underline">
                Sign company partner page
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* How to brief us */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl font-semibold text-foreground text-center mb-10">
            How to brief an exhibition graphics installation
          </h2>
          <div className="grid gap-6 sm:grid-cols-2">
            {[
              {
                step: "01",
                title: "Venue and show details",
                body: "Tell us the venue name, build schedule start time, access end time, and show open date. If the venue has specific installation rules (accreditation required, working hours restrictions, tool restrictions), include these upfront.",
              },
              {
                step: "02",
                title: "Stand and surface specification",
                body: "Shell scheme contractor name and panel system (if applicable). For custom stands: panel dimensions, substrate material and any surface coatings. For floor graphics: venue floor type (carpet, screed, polished concrete) and any anti-slip requirements specified by the venue.",
              },
              {
                step: "03",
                title: "Graphic files and material specification",
                body: "Material type, laminate specification, and how the graphics will arrive (rolled, flat-packed, with or without application tape). Dimensions of each graphic and intended placement. We do not print — you supply materials, we install.",
              },
              {
                step: "04",
                title: "De-installation requirements",
                body: "If you need de-installation at breakdown, let us know upfront. Include breakdown schedule, panel condition requirements from the exhibition contractor, and any venue-specific rules about how graphics must be removed.",
              },
            ].map(({ step, title, body }) => (
              <div key={step} className="card-float bg-card p-6">
                <p className="text-3xl font-bold text-accent/60">{step}</p>
                <h3 className="mt-2 font-semibold text-foreground">{title}</h3>
                <p className="mt-2 text-sm text-muted leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-y border-border bg-card px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl font-semibold text-foreground">
            FAQ — exhibition graphics installation
          </h2>
          <dl className="mt-8 space-y-6">
            {[
              {
                q: "Do you install graphics on stands you haven't built?",
                a: "Yes — this is exactly the kind of job we take on. If a structural contractor has built the stand and you need a specialist to apply the vinyl graphics, we come in at the graphics stage. You supply the printed material and brief us on spec and placement; we surface-assess, install and sign off.",
              },
              {
                q: "Do you work to exhibition build schedules?",
                a: "Yes. Exhibition timelines are non-negotiable — the show opens at a fixed time regardless of what's happened on the build floor. We plan around venue access windows and arrive prepared to work efficiently within your schedule. If build overruns affect our access slot, let us know as early as possible so we can adapt.",
              },
              {
                q: "Can you handle de-installation at breakdown?",
                a: "Yes — clean vinyl removal from panels and surfaces at show breakdown is available as part of a full exhibition package. We remove graphics to the standard specified by the exhibition contractor, dispose of stripped vinyl and return panels in the correct condition. Brief us on de-install requirements when you book.",
              },
              {
                q: "Do you work white-label for agencies at exhibitions?",
                a: "Yes — white-label is available for agency clients. We attend under your instructions, carrying your documentation. Your exhibiting client sees your agency name throughout, not WRPX.",
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
      <section className="px-4 pb-20 pt-16">
        <div className="container mx-auto max-w-3xl">
          <div className="card-float border-2 border-accent/40 p-10 text-center md:p-12">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              Exhibition graphics installation — get a quote
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Tell us the venue, show date, stand type and graphic spec. We&apos;ll confirm
              availability and give you a straight installation quote.
            </p>
            <p className="mt-4 text-muted">
              <strong>Call: {siteConfig.phone}</strong> ·{" "}
              <a href={`mailto:${siteConfig.email}`} className="text-accent hover:underline">
                {siteConfig.email}
              </a>
            </p>
            <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <Link href="/contact/" className="btn-primary inline-block">
                Get an exhibition installation quote
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
