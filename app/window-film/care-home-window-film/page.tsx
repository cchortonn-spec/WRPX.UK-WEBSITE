import type { Metadata } from "next";
import Link from "next/link";
import { FaqAccordion } from "@/components/FaqAccordion";

export const metadata: Metadata = {
  title: "Window Film for Care Homes — Privacy Film, Solar Control & DDA Manifestation | WRPX",
  description:
    "Professional window film installation in care homes, nursing homes and residential care facilities — resident privacy film for bedroom windows, solar control for south-facing lounges, DDA glass manifestation. Care home managers, group operators and FM contractors across South Yorkshire and the East Midlands.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/window-film/care-home-window-film/",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What window film applications are most useful in care homes?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The three most common applications are: frosted privacy film for ground-floor and overlooked resident bedroom windows (maintaining light while protecting resident dignity), solar control film for south-facing lounges, day rooms and dining areas that overheat in summer, and DDA-compliant glass manifestation on glazed doors and corridor screens. Decorative etched-effect film on communal area glazing is also popular for improving the residential feel of the building.",
      },
    },
    {
      "@type": "Question",
      name: "Can window film be installed without disturbing residents?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We work with your care home manager to schedule installation around resident routines. Bedroom windows are typically done room by room, coordinated with care staff. Communal areas can be worked during quieter periods — mid-morning after breakfast activities, or early evening. We keep noise, fumes and disruption to an absolute minimum. Film adhesive is water-based and odour-free once applied. For larger programmes across a group of homes, we phase work to avoid overrunning any single site.",
      },
    },
    {
      "@type": "Question",
      name: "Will solar control film help with overheating in care home lounges?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. South and west-facing lounges and day rooms in care homes are among the most common environments where solar control film delivers a noticeable quality-of-life improvement. Solar control film reduces solar heat gain by 40-79% depending on specification — making the room comfortably usable in summer without blocking the view or significantly reducing natural light. In winter the same film helps retain heat, reducing energy costs. We recommend a survey to assess aspect, glass type and occupancy hours before specifying film.",
      },
    },
    {
      "@type": "Question",
      name: "Is DDA glass manifestation required in care homes?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Building Regulations Part M and BS 8300 require contrasting manifestation marks on glazed doors and full-height glazed screens in all buildings where the Equality Act applies — which includes registered care homes. The standard requires a 50mm-wide contrasting band at 850-1000mm and at 1400-1600mm above floor level. Many care homes have non-compliant glazed internal doors that weren't picked up at original inspection. We install manifestation film to spec as a standalone compliance job or alongside other window film work.",
      },
    },
    {
      "@type": "Question",
      name: "Do you work with care home groups and FM contractors?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We work as a white-label installation partner for care home operators managing multi-site programmes, FM contractors with care sector clients, and fit-out firms working on refurbishments. For groups we offer consistent specification across all sites, a single point of contact for programme management, and standardised photographic completion records. We do not retain direct care home client relationships from your contracts — we work under your brand throughout.",
      },
    },
  ],
};

const faqItems = [
  {
    q: "What window film applications are most useful in care homes?",
    a: "The three most common applications are: frosted privacy film for ground-floor and overlooked resident bedroom windows (maintaining light while protecting resident dignity), solar control film for south-facing lounges, day rooms and dining areas that overheat in summer, and DDA-compliant glass manifestation on glazed doors and corridor screens. Decorative etched-effect film on communal area glazing is also popular for improving the residential feel of the building.",
  },
  {
    q: "Can window film be installed without disturbing residents?",
    a: "Yes. We work with your care home manager to schedule installation around resident routines. Bedroom windows are typically done room by room, coordinated with care staff. Communal areas can be worked during quieter periods — mid-morning after breakfast activities, or early evening. We keep noise, fumes and disruption to an absolute minimum. Film adhesive is water-based and odour-free once applied. For larger programmes across a group of homes, we phase work to avoid overrunning any single site.",
  },
  {
    q: "Will solar control film help with overheating in care home lounges?",
    a: "Yes. South and west-facing lounges and day rooms in care homes are among the most common environments where solar control film delivers a noticeable quality-of-life improvement. Solar control film reduces solar heat gain by 40-79% depending on specification — making the room comfortably usable in summer without blocking the view or significantly reducing natural light. In winter the same film helps retain heat, reducing energy costs. We recommend a survey to assess aspect, glass type and occupancy hours before specifying film.",
  },
  {
    q: "Is DDA glass manifestation required in care homes?",
    a: "Building Regulations Part M and BS 8300 require contrasting manifestation marks on glazed doors and full-height glazed screens in all buildings where the Equality Act applies — which includes registered care homes. The standard requires a 50mm-wide contrasting band at 850-1000mm and at 1400-1600mm above floor level. Many care homes have non-compliant glazed internal doors that weren't picked up at original inspection. We install manifestation film to spec as a standalone compliance job or alongside other window film work.",
  },
  {
    q: "Do you work with care home groups and FM contractors?",
    a: "Yes. We work as a white-label installation partner for care home operators managing multi-site programmes, FM contractors with care sector clients, and fit-out firms working on refurbishments. For groups we offer consistent specification across all sites, a single point of contact for programme management, and standardised photographic completion records. We do not retain direct care home client relationships from your contracts — we work under your brand throughout.",
  },
];

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.wrpx.co.uk/" },
    { "@type": "ListItem", position: 2, name: "Window Film", item: "https://www.wrpx.co.uk/window-film/" },
    { "@type": "ListItem", position: 3, name: "Window Film for Care Homes", item: "https://www.wrpx.co.uk/window-film/care-home-window-film/" },
  ],
};

export default function CareHomeWindowFilmPage() {
  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Breadcrumb */}
      <section className="border-b border-border bg-card px-4 py-3">
        <div className="container mx-auto max-w-4xl">
          <nav className="text-sm text-muted">
            <Link href="/" className="text-accent hover:underline">Home</Link>
            <span className="mx-2">›</span>
            <Link href="/window-film/" className="text-accent hover:underline">Window Film</Link>
            <span className="mx-2">›</span>
            <span className="text-foreground">Window Film for Care Homes</span>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="border-b border-border bg-card py-16 md:py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <p className="text-sm font-medium uppercase tracking-wide text-accent">
            Window Film · Care Homes &amp; Residential Care
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Window film for care homes — resident privacy, solar control and DDA compliance
          </h1>
          <p className="mt-5 text-lg text-muted leading-relaxed">
            Care homes have three distinct window film needs: resident privacy for ground-floor and overlooked bedroom windows, solar heat control for south-facing lounges and day rooms, and DDA-compliant glass manifestation on glazed corridor doors. WRPX installs all three across care homes and nursing homes in South Yorkshire and the East Midlands — scheduled around resident routines, minimum disruption.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact/" className="btn-primary">
              Request a Care Home Survey →
            </Link>
            <Link href="/window-film/" className="btn-secondary">
              Window Film Overview
            </Link>
          </div>
        </div>
      </section>

      {/* Three applications */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-2xl font-semibold text-foreground md:text-3xl">
            Window film applications in care homes
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="card-float p-7">
              <h3 className="text-lg font-semibold text-foreground">Resident privacy film</h3>
              <p className="mt-4 text-sm text-muted leading-relaxed">
                Ground-floor bedroom windows in care homes are frequently overlooked from car parks,
                footpaths or adjacent buildings. Frosted and etched-effect privacy film gives residents
                complete visual privacy while retaining natural light. Indistinguishable from
                sandblasted glass at close range — far less clinical in appearance than net curtains or blinds.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-muted">
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-accent">✓</span>
                  <span>Ground-floor and overlooked bedroom windows</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-accent">✓</span>
                  <span>En-suite and bathroom windows</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-accent">✓</span>
                  <span>Communal lounge glazing facing public areas</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-accent">✓</span>
                  <span>Reception and interview room screens</span>
                </li>
              </ul>
              <Link href="/window-film/frosted-window-film/" className="mt-5 inline-block text-sm text-accent hover:underline">
                Frosted privacy film details →
              </Link>
            </div>

            <div className="card-float p-7">
              <h3 className="text-lg font-semibold text-foreground">Solar control film</h3>
              <p className="mt-4 text-sm text-muted leading-relaxed">
                South and west-facing lounges, dining rooms and day rooms in care homes are among
                the most uncomfortable spaces in summer heat. Solar control film reduces heat
                gain by 40–79% without darkening the room significantly. Residents stay cooler,
                HVAC loads drop, and blinds can remain open for natural light and views.
                In winter, the same film improves heat retention.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-muted">
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-accent">✓</span>
                  <span>South and west-facing lounges and day rooms</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-accent">✓</span>
                  <span>Dining room and activities room glazing</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-accent">✓</span>
                  <span>Conservatory extensions and garden-room areas</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-accent">✓</span>
                  <span>Staff office and admin areas</span>
                </li>
              </ul>
              <Link href="/window-film/solar-control-film/" className="mt-5 inline-block text-sm text-accent hover:underline">
                Solar control film details →
              </Link>
            </div>

            <div className="card-float p-7">
              <h3 className="text-lg font-semibold text-foreground">DDA glass manifestation</h3>
              <p className="mt-4 text-sm text-muted leading-relaxed">
                Building Regulations Part M and BS 8300 require contrasting marks on glazed
                doors and full-height screens in all public and registered buildings — care homes
                included. Non-compliance is common in older stock where glazed corridor doors were
                installed without manifestation. We install film-based manifestation to the current
                BS 8300 specification: contrasting 50mm band at 850–1000mm and 1400–1600mm.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-muted">
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-accent">✓</span>
                  <span>Corridor and bedroom glazed door panels</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-accent">✓</span>
                  <span>Full-height glazed screens in communal areas</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-accent">✓</span>
                  <span>Frosted or branded manifestation options</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-accent">✓</span>
                  <span>Remedial compliance programmes for existing buildings</span>
                </li>
              </ul>
              <Link href="/window-film/glass-manifestation/" className="mt-5 inline-block text-sm text-accent hover:underline">
                Glass manifestation details →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Installation approach */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Installation in an occupied care home
          </h2>
          <div className="space-y-6 text-muted leading-relaxed">
            <p>
              Installing window film in an occupied care home is different from a standard commercial job.
              Residents may be in their rooms, communal areas are in continuous use, and care staff
              have fixed routines that can&apos;t be pushed around. We work within those constraints
              as a matter of course — not as a special request.
            </p>
            <p>
              <strong className="text-foreground">Room-by-room scheduling.</strong> Bedroom window
              film is done one room at a time, coordinated with care staff so residents are in a
              communal area or have agreed to brief access. Typically 20–30 minutes per bedroom window.
              We clear up completely before moving to the next room.
            </p>
            <p>
              <strong className="text-foreground">Minimal noise and fumes.</strong> Film application
              uses water-based adhesive — no solvent fumes, no odour once applied. Tools are hand
              squeegees and heat guns (standard domestic hair-dryer temperature level). No drilling,
              no masonry work, no raised noise levels beyond normal conversation.
            </p>
            <p>
              <strong className="text-foreground">Group programmes.</strong> For care home operators
              managing multiple sites, we run rolling programmes across your estate — consistent
              specification on every site, one project manager throughout, and standardised photographic
              completion records sent per site on the day.
            </p>
            <p>
              <strong className="text-foreground">FM and refurbishment contractors.</strong> We work
              as a white-label installation partner for FM contractors and fit-out firms with care
              sector clients. You supply the schedule, we deliver to it.
            </p>
          </div>
        </div>
      </section>

      {/* Who we work with */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-2xl font-semibold text-foreground md:text-3xl">
            Who we work with
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
            <div className="card-float p-6">
              <h3 className="font-semibold text-foreground">Care home operators &amp; managers</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Direct enquiries from registered care home managers or group property teams. Survey, specification and installation included — you tell us the problem, we solve it with the right film.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="font-semibold text-foreground">Care home group operators</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Multi-site programmes for regional or national care home groups. Consistent specification across all sites in the group, single invoice per programme, standardised reporting format.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="font-semibold text-foreground">FM contractors &amp; fit-out firms</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                White-label subcontract installation for FM companies with care home clients. We attend under your brand, follow your site paperwork and report back to your project manager.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-3xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Care home window film questions
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
            <Link href="/window-film/frosted-window-film/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Frosted &amp; privacy window film</h3>
              <p className="mt-2 text-sm text-muted">Privacy film for resident bedrooms, bathrooms and communal glazing.</p>
            </Link>
            <Link href="/window-film/solar-control-film/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Solar control film</h3>
              <p className="mt-2 text-sm text-muted">Heat and glare reduction for south-facing lounges and day rooms.</p>
            </Link>
            <Link href="/window-film/glass-manifestation/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Glass manifestation (DDA / BS 8300)</h3>
              <p className="mt-2 text-sm text-muted">Compliant contrasting marks for glazed corridor doors and screens.</p>
            </Link>
            <Link href="/window-film/healthcare-window-film/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Window film for healthcare</h3>
              <p className="mt-2 text-sm text-muted">NHS, GP surgeries, private clinics and hospital environments.</p>
            </Link>
            <Link href="/architectural-wrap-care-homes/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Vinyl wrapping for care home interiors</h3>
              <p className="mt-2 text-sm text-muted">Wrap bedroom furniture, communal surfaces and corridor panels without replacing them.</p>
            </Link>
            <Link href="/window-film/commercial-window-film/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Commercial window film overview</h3>
              <p className="mt-2 text-sm text-muted">Full overview of commercial window film applications and sectors.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-20">
        <div className="container mx-auto max-w-3xl">
          <div className="card-float border-2 border-accent/40 p-10 text-center md:p-12">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              Planning a window film programme for your care home?
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              We survey care homes and nursing homes across South Yorkshire and the East Midlands.
              Tell us your site, the windows and what you need — privacy, solar control or
              DDA compliance — and we will spec the right film and schedule the work around residents.
            </p>
            <Link href="/contact/" className="btn-primary mt-8 inline-block">
              Request a Care Home Survey →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
