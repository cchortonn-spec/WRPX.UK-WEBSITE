import type { Metadata } from "next";
import Link from "next/link";
import { getServiceSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Hotel Interior Vinyl Wrapping | Kitchen, Furniture & Surface Wrap | WRPX",
  description:
    "Hotel interior vinyl wrapping across South Yorkshire and the East Midlands — kitchen surfaces, furniture, reception desks, doors and corridors. Commercial fit-out specification, minimal disruption, photographic sign-off.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/architectural-wrap-hotels/",
  },
};

const serviceSchema = getServiceSchema(
  "Hotel interior vinyl wrapping — surfaces, furniture and fit-out",
  "Architectural vinyl wrapping for hotel interiors across South Yorkshire and the East Midlands. Kitchen surfaces, bedroom furniture, reception desks, corridor doors and communal areas wrapped in commercial-grade architectural film. Installation during void periods, out-of-hours access, photographic sign-off."
);

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.wrpx.co.uk/" },
    { "@type": "ListItem", position: 2, name: "Architectural Vinyl Film", item: "https://www.wrpx.co.uk/architectural-vinyl-film/" },
    { "@type": "ListItem", position: 3, name: "Hotel Interior Vinyl Wrapping", item: "https://www.wrpx.co.uk/architectural-wrap-hotels/" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What hotel surfaces can be vinyl wrapped?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most flat and near-flat interior surfaces: kitchen unit doors and drawers in staff or guest kitchenettes, bedroom furniture panels, wardrobe doors, reception desk fascias, corridor doors, lift lobby panels, built-in joinery and wall panels. Film is not suited to heavily textured surfaces or curved mouldings.",
      },
    },
    {
      "@type": "Question",
      name: "Can you work around guests or do you need full void access?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Both. For room-by-room programmes, we work a floor or wing at a time to minimise occupancy impact. For larger programmes, a full void or low-occupancy window is more efficient. We agree the access schedule with your operations team before we start.",
      },
    },
    {
      "@type": "Question",
      name: "How long does hotel vinyl wrapping last?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Commercial-grade architectural film in hotel interiors typically lasts 7–10 years under normal use. High-contact surfaces such as door edges and reception desks may show wear sooner depending on traffic levels. We specify film grade by application at survey.",
      },
    },
    {
      "@type": "Question",
      name: "Can you work as a subcontractor for our fit-out team?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — white-label by default. We attend under your fit-out contractor's instructions, carry your paperwork, and report back to your project manager. Photographic documentation provided at sign-off. The hotel operator or brand sees your company throughout.",
      },
    },
    {
      "@type": "Question",
      name: "Do you cover hotel programmes outside South Yorkshire?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We cover South Yorkshire, the East Midlands, West Yorkshire and the wider M1/A1(M) corridor regularly. For multi-property hotel group programmes further afield, contact us to discuss scope.",
      },
    },
  ],
};

const faqItems = [
  {
    q: "What hotel surfaces can be vinyl wrapped?",
    a: "Most flat and near-flat interior surfaces: kitchen unit doors and drawers in staff or guest kitchenettes, bedroom furniture panels, wardrobe doors, reception desk fascias, corridor doors, lift lobby panels, built-in joinery and wall panels. Film is not suited to heavily textured surfaces or curved mouldings.",
  },
  {
    q: "Can you work around guests or do you need full void access?",
    a: "Both. For room-by-room programmes, we work a floor or wing at a time to minimise occupancy impact. For larger programmes, a full void or low-occupancy window is more efficient. We agree the access schedule with your operations team before we start.",
  },
  {
    q: "How long does hotel vinyl wrapping last?",
    a: "Commercial-grade architectural film in hotel interiors typically lasts 7–10 years under normal use. High-contact surfaces such as door edges and reception desks may show wear sooner depending on traffic levels. We specify film grade by application at survey.",
  },
  {
    q: "Can you work as a subcontractor for our fit-out team?",
    a: "Yes — white-label by default. We attend under your fit-out contractor's instructions, carry your paperwork, and report back to your project manager. Photographic documentation provided at sign-off. The hotel operator or brand sees your company throughout.",
  },
  {
    q: "Do you cover hotel programmes outside South Yorkshire?",
    a: "Yes. We cover South Yorkshire, the East Midlands, West Yorkshire and the wider M1/A1(M) corridor regularly. For multi-property hotel group programmes further afield, contact us to discuss scope.",
  },
];

export default function ArchitecturalWrapHotelsPage() {
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
            <Link href="/architectural-vinyl-film/" className="text-accent hover:underline">Architectural Vinyl Film</Link>
            <span className="mx-2">›</span>
            <span className="text-foreground">Hotel Interior Vinyl Wrapping</span>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="border-b border-border bg-card py-16 md:py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <h1 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Hotel interior vinyl wrapping — surfaces, furniture and fit-out
          </h1>
          <p className="mt-5 text-lg text-muted leading-relaxed">
            Architectural vinyl film gives hotel operators and fit-out contractors a faster, lower-cost route to refreshed interiors — without ripping out and replacing existing joinery and furniture. We wrap kitchen surfaces, bedroom furniture, reception desks, corridor doors and communal-area panels to commercial specification across South Yorkshire and the East Midlands.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact/" className="btn-primary">
              Request a Commercial Survey →
            </Link>
            <Link href="/architectural-vinyl-film/" className="btn-secondary">
              Architectural Film Overview
            </Link>
          </div>
        </div>
      </section>

      {/* What we wrap */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-2xl font-semibold text-foreground md:text-3xl">
            What we wrap in hotel and hospitality interiors
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Guest kitchenettes</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Apartment hotels and extended-stay rooms typically include small kitchen units. Wrapping the doors, drawer fronts and end panels refreshes the finish in a fraction of the time and cost of a full replacement.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Bedroom furniture panels</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Wardrobe doors, bedside unit fascias, headboard surrounds and desk panels are high-visibility surfaces. Film applied to a prepared substrate gives a consistent, brand-aligned finish across every room.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Reception desks</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                The reception desk is the first thing guests see. Wrapping a tired or damaged fascia in a new architectural film — stone-effect, brushed metal, solid colour — is a high-impact, low-disruption refresh.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Corridor doors and frames</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Fire-rated and standard corridor doors can be wrapped to update a tired aesthetic without door replacement. We assess each door and substrate for suitability and specify the correct film for fire-door compliance.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Bar and restaurant interiors</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Back bar panels, counter fascias, booth dividers and wall panels in hotel restaurants and bars can all be wrapped. We work out of hours to avoid disruption to service.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Communal and lobby areas</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Lift lobby wall panels, concierge desks, built-in seating surrounds and decorative columns. Architectural film in a consistent finish ties these areas together across a refurbishment programme.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why wrap vs replace */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Why hotel operators choose vinyl wrapping over replacement
          </h2>
          <div className="space-y-6 text-muted leading-relaxed">
            <p>
              <strong className="text-foreground">Speed.</strong> Replacing fitted joinery requires removal, lead time for new units, and re-installation — typically weeks of disruption per floor. Wrapping the same surfaces takes days. For a phased room-by-room programme, this difference is significant.
            </p>
            <p>
              <strong className="text-foreground">Cost.</strong> Commercial-grade architectural film is a fraction of the cost of new joinery or furniture. For a 50-room hotel, the saving is material — and the finish quality from a well-specified film is indistinguishable from new.
            </p>
            <p>
              <strong className="text-foreground">Disruption.</strong> We agree access windows in advance. For operational hotels, we work room by room or floor by floor. We can work overnight or early morning where necessary to avoid guest-facing disruption.
            </p>
            <p>
              <strong className="text-foreground">Finish range.</strong> Architectural film is available in hundreds of finishes — solid colours, woodgrains, stone effects, brushed metals, satins and mattes. We advise on which specification holds up to the level of use in your application.
            </p>
            <p>
              <strong className="text-foreground">Reversibility.</strong> Film can be removed cleanly at a future refurbishment — leaving the substrate intact for a different treatment. This matters for leased properties and hotel assets under brand licences with periodic refit requirements.
            </p>
          </div>
        </div>
      </section>

      {/* How we work */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            How a hotel vinyl wrapping programme works
          </h2>
          <ol className="space-y-6">
            <li className="flex gap-4">
              <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-accent text-sm font-bold text-white">1</span>
              <div>
                <h3 className="font-semibold text-foreground">Site survey</h3>
                <p className="mt-1 text-muted leading-relaxed">
                  We visit to assess the surfaces, substrate condition and access requirements across the programme. We identify anything not suitable for film and report it before any commitment.
                </p>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-accent text-sm font-bold text-white">2</span>
              <div>
                <h3 className="font-semibold text-foreground">Film specification</h3>
                <p className="mt-1 text-muted leading-relaxed">
                  We advise on finish options aligned to your brand guidelines or refurbishment specification. We supply samples and confirm durability expectations by application.
                </p>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-accent text-sm font-bold text-white">3</span>
              <div>
                <h3 className="font-semibold text-foreground">Programme scheduling</h3>
                <p className="mt-1 text-muted leading-relaxed">
                  We agree the access plan with your operations team — room sequence, floor phasing, any overnight windows. The schedule is confirmed before mobilisation.
                </p>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-accent text-sm font-bold text-white">4</span>
              <div>
                <h3 className="font-semibold text-foreground">Installation</h3>
                <p className="mt-1 text-muted leading-relaxed">
                  Surfaces are cleaned, prepared and wrapped to specification. We inspect every panel before leaving each room.
                </p>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-accent text-sm font-bold text-white">5</span>
              <div>
                <h3 className="font-semibold text-foreground">Sign-off</h3>
                <p className="mt-1 text-muted leading-relaxed">
                  Photographic documentation of completed surfaces provided at handover. We work to your sign-off format — our paperwork, your format, or a joint snagging record.
                </p>
              </div>
            </li>
          </ol>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-3xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Hotel vinyl wrapping — common questions
          </h2>
          <div className="space-y-4">
            {faqItems.map(({ q, a }) => (
              <details key={q} className="card-float group overflow-hidden">
                <summary className="cursor-pointer list-none px-6 py-4 font-medium text-foreground [&::-webkit-details-marker]:hidden">
                  {q}
                </summary>
                <div className="border-t border-border px-6 py-4 text-muted">{a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* City pages */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Hotel wrapping by city
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
            <Link href="/architectural-wrap-hotels-sheffield/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Sheffield</h3>
              <p className="mt-2 text-sm text-muted">Hotel interior wrapping across Sheffield and South Yorkshire.</p>
            </Link>
            <Link href="/architectural-wrap-hotels-leeds/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Leeds</h3>
              <p className="mt-2 text-sm text-muted">Hotel interior wrapping across Leeds, Granary Wharf and West Yorkshire.</p>
            </Link>
            <Link href="/architectural-wrap-hotels-nottingham/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Nottingham</h3>
              <p className="mt-2 text-sm text-muted">Hotel interior wrapping across Nottingham and the East Midlands.</p>
            </Link>
            <Link href="/architectural-wrap-hotels-manchester/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Manchester</h3>
              <p className="mt-2 text-sm text-muted">Hotel interior wrapping across Manchester, Northern Quarter and Greater Manchester.</p>
            </Link>
            <Link href="/architectural-wrap-hotels-leicester/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Leicester</h3>
              <p className="mt-2 text-sm text-muted">Hotel interior wrapping across Leicester, Highcross, M1 J21 corridor and Leicestershire.</p>
            </Link>
            <Link href="/architectural-wrap-hotels-birmingham/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Birmingham</h3>
              <p className="mt-2 text-sm text-muted">Hotel interior wrapping across Birmingham city centre, NEC B40, Solihull B90 and the West Midlands.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Related services
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <Link href="/architectural-wrap-student-accommodation/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Student accommodation wrapping</h3>
              <p className="mt-2 text-sm text-muted">Kitchen and furniture wrapping for student accommodation refurbishments.</p>
            </Link>
            <Link href="/window-film/hotel-window-film/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Hotel window film</h3>
              <p className="mt-2 text-sm text-muted">Frosted privacy film and solar control film for hotel guest rooms and glazed areas.</p>
            </Link>
            <Link href="/hospitality-graphics-installation/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Hospitality graphics installation</h3>
              <p className="mt-2 text-sm text-muted">Subcontract vinyl graphics installation for hotel and restaurant fit-out contractors.</p>
            </Link>
            <Link href="/architectural-vinyl-film/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Architectural vinyl film overview</h3>
              <p className="mt-2 text-sm text-muted">Full overview of architectural film services for commercial and residential interiors.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-20">
        <div className="container mx-auto max-w-3xl">
          <div className="card-float border-2 border-accent/40 p-10 text-center md:p-12">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              Planning a hotel refurbishment programme?
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              We survey and scope hotel vinyl wrapping programmes across South Yorkshire and the East Midlands. Tell us what you have and we&apos;ll give you a realistic picture.
            </p>
            <Link href="/contact/" className="btn-primary mt-8 inline-block">
              Discuss Your Hotel Programme →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
