import type { Metadata } from "next";
import Link from "next/link";
import { getServiceSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Office Interior Vinyl Wrapping | Desks, Partitions & Surfaces | WRPX",
  description:
    "Vinyl wrapping for office interiors across South Yorkshire and the East Midlands — reception desks, kitchen units, meeting room panels, door surrounds and built-in furniture. Commercial-grade film, minimal disruption, same-day or out-of-hours access.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/architectural-wrap-offices/",
  },
};

const serviceSchema = getServiceSchema(
  "Office interior vinyl wrapping — desks, panels and surfaces",
  "Architectural vinyl wrapping for office interiors across South Yorkshire and the East Midlands. Reception desks, kitchen and breakout surfaces, meeting room wall panels, door fascias and built-in office furniture wrapped in commercial-grade architectural film. Works around your office schedule — evenings, weekends or phased daytime installation."
);

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.wrpx.co.uk/" },
    { "@type": "ListItem", position: 2, name: "Architectural Vinyl Film", item: "https://www.wrpx.co.uk/architectural-vinyl-film/" },
    { "@type": "ListItem", position: 3, name: "Office Interior Vinyl Wrapping", item: "https://www.wrpx.co.uk/architectural-wrap-offices/" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What office surfaces can be vinyl wrapped?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Flat and near-flat surfaces work well: reception desk fascias and tops, kitchen and breakout unit doors and drawer fronts, meeting room furniture panels, built-in joinery surrounds, internal door faces and frames, and feature wall panels. Heavily textured, curved or fabric surfaces are not suitable for film.",
      },
    },
    {
      "@type": "Question",
      name: "Can you work around office hours?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We commonly work evenings and weekends for live offices where daytime access would disrupt staff. For phased programmes — floors or zones done sequentially — we can also work daytime with a clear access window. We agree the schedule with your facilities or fit-out team before starting.",
      },
    },
    {
      "@type": "Question",
      name: "How long does office vinyl wrapping last?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Commercial-grade architectural film on office surfaces typically lasts 7–10 years. High-contact surfaces like desk edges and kitchen unit doors may show wear sooner depending on traffic. We specify film durability by application and surface type at survey.",
      },
    },
    {
      "@type": "Question",
      name: "Can you match a brand colour or specific RAL/Pantone?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Architectural film is available across a very wide colour range, including solid corporate colours, woodgrains, stone effects, brushed metals and satins. We can match to RAL references and advise on the closest available Pantone equivalent. A physical sample is always recommended before committing to a full programme.",
      },
    },
    {
      "@type": "Question",
      name: "Can you subcontract for our fit-out company?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — white-label by default. We attend under your fit-out company's instructions, carry your documentation, and report back to your project manager. The office occupier sees your company throughout. We provide photographic sign-off at completion.",
      },
    },
  ],
};

const faqItems = [
  {
    q: "What office surfaces can be vinyl wrapped?",
    a: "Flat and near-flat surfaces work well: reception desk fascias and tops, kitchen and breakout unit doors and drawer fronts, meeting room furniture panels, built-in joinery surrounds, internal door faces and frames, and feature wall panels. Heavily textured, curved or fabric surfaces are not suitable for film.",
  },
  {
    q: "Can you work around office hours?",
    a: "Yes. We commonly work evenings and weekends for live offices where daytime access would disrupt staff. For phased programmes — floors or zones done sequentially — we can also work daytime with a clear access window. We agree the schedule with your facilities or fit-out team before starting.",
  },
  {
    q: "How long does office vinyl wrapping last?",
    a: "Commercial-grade architectural film on office surfaces typically lasts 7–10 years. High-contact surfaces like desk edges and kitchen unit doors may show wear sooner depending on traffic. We specify film durability by application and surface type at survey.",
  },
  {
    q: "Can you match a brand colour or specific RAL/Pantone?",
    a: "Architectural film is available across a very wide colour range, including solid corporate colours, woodgrains, stone effects, brushed metals and satins. We can match to RAL references and advise on the closest available Pantone equivalent. A physical sample is always recommended before committing to a full programme.",
  },
  {
    q: "Can you subcontract for our fit-out company?",
    a: "Yes — white-label by default. We attend under your fit-out company's instructions, carry your documentation, and report back to your project manager. The office occupier sees your company throughout. We provide photographic sign-off at completion.",
  },
];

export default function ArchitecturalWrapOfficesPage() {
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
            <span className="text-foreground">Office Interior Vinyl Wrapping</span>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="border-b border-border bg-card py-16 md:py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <h1 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Office interior vinyl wrapping — reception desks, breakout kitchens and fitted panels
          </h1>
          <p className="mt-5 text-lg text-muted leading-relaxed">
            Tired reception desk? Dated breakout kitchen units? Wrapping existing surfaces in commercial-grade architectural film refreshes the look without ripping out and replacing fitted joinery. We work across office fit-outs in South Yorkshire and the East Midlands — out of hours, in phases, or as part of your fit-out contractor&apos;s programme.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact/" className="btn-primary">
              Request an Office Survey →
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
            What we wrap in office environments
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Reception desks</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                The reception desk is the centrepiece of every office entrance. Wrapping a tired or damage-marked fascia in a fresh architectural film — brushed metal, stone-effect, solid corporate colour — transforms the first impression without the disruption of full replacement.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Breakout kitchen units</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Kitchen and breakout unit doors and drawer fronts take heavy daily use. Wrapping worn or chipped units in durable architectural film is faster and significantly cheaper than new kitchenettes — and the range of finishes available means the result looks intentional, not patched.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Meeting room panels</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Built-in meeting room furniture, wall panels, credenzas and AV joinery can all be wrapped. If you&apos;re refreshing a meeting suite and want consistency across a new finish specification, film is the most efficient way to bring every surface into alignment.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Internal doors and frames</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Internal office door faces and frames can be wrapped to update a tired colour scheme or match a new refurbishment spec. We assess substrate condition and suitability before committing, and specify fire-door compliant options where required.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Feature walls and panels</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Architectural film on flat wall panels creates a clean, premium feature wall without render or cladding. Woodgrain, concrete-effect, deep matte and brushed-metal finishes all work well in open-plan and collaborative areas.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Breakout and lounge furniture</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Flat panels on built-in banquettes, booth dividers and lounge furniture surrounds can be wrapped in the same film specification as the wider fit-out, giving a coherent finish across the whole office without bespoke manufactured items.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why wrapping vs replacement */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Why facilities and fit-out teams choose vinyl wrapping over replacement
          </h2>
          <div className="space-y-6 text-muted leading-relaxed">
            <p>
              <strong className="text-foreground">Speed to site.</strong> Replacement joinery means design, manufacture, delivery, strip-out and re-installation — typically weeks of lead time. Wrapping the same surfaces takes days from survey to completion, with no structural work and no building downtime.
            </p>
            <p>
              <strong className="text-foreground">Cost.</strong> For most office applications, vinyl wrapping costs 20–40% of the equivalent replacement. For a multi-floor programme across a mid-size office, the saving is significant. The same budget goes much further, or the same scope of work fits a tighter budget.
            </p>
            <p>
              <strong className="text-foreground">Minimal disruption.</strong> A single reception desk can be wrapped in a morning. A floor of breakout kitchenettes can be done overnight. We work around the office schedule — there is no reason for staff to be affected.
            </p>
            <p>
              <strong className="text-foreground">Brand-consistent finishes.</strong> Corporate colours, specific woodgrain specs, stone effects and brushed metals are all available. We advise on which film specification holds up to the level of use in each application and provide physical samples before commitment.
            </p>
            <p>
              <strong className="text-foreground">Reversible.</strong> Film can be removed at a future refurbishment, leaving the substrate intact. For leased offices, this is particularly useful — the surface can be returned to its original finish at lease end without damage to the joinery.
            </p>
          </div>
        </div>
      </section>

      {/* Working around your office */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Working around a live office
          </h2>
          <ol className="space-y-6">
            <li className="flex gap-4">
              <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-accent text-sm font-bold text-white">1</span>
              <div>
                <h3 className="font-semibold text-foreground">Survey and scope</h3>
                <p className="mt-1 text-muted leading-relaxed">
                  We visit to assess surfaces, substrate condition and access requirements. We confirm what is and is not suitable for film before any commitment, and identify any prep work needed.
                </p>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-accent text-sm font-bold text-white">2</span>
              <div>
                <h3 className="font-semibold text-foreground">Film and finish specification</h3>
                <p className="mt-1 text-muted leading-relaxed">
                  We advise on finish options aligned to your office brand standards or refurbishment specification. Physical samples provided for client sign-off before installation.
                </p>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-accent text-sm font-bold text-white">3</span>
              <div>
                <h3 className="font-semibold text-foreground">Access scheduling</h3>
                <p className="mt-1 text-muted leading-relaxed">
                  We agree the installation window with your facilities team — evenings, weekends, phased floor access, or a combination. The access plan is confirmed before mobilisation.
                </p>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-accent text-sm font-bold text-white">4</span>
              <div>
                <h3 className="font-semibold text-foreground">Installation</h3>
                <p className="mt-1 text-muted leading-relaxed">
                  Surfaces are cleaned, prepared and wrapped to specification. Every panel is checked before we leave each area.
                </p>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-accent text-sm font-bold text-white">5</span>
              <div>
                <h3 className="font-semibold text-foreground">Photographic sign-off</h3>
                <p className="mt-1 text-muted leading-relaxed">
                  Completed surfaces photographed and documented at handover. Works to your format — our snagging sheet, your project management system, or a joint record.
                </p>
              </div>
            </li>
          </ol>
        </div>
      </section>

      {/* Subcontract / white-label */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            White-label installation for fit-out companies
          </h2>
          <p className="text-muted leading-relaxed">
            If you are a fit-out contractor or refurbishment company specifying architectural film as part of a wider office project, we work white-label by default. We attend under your company name, carry your paperwork, and report to your project manager. The office occupier and client see your company throughout — not ours.
          </p>
          <p className="mt-6 text-muted leading-relaxed">
            We cover South Yorkshire, the East Midlands, West Yorkshire and the wider M1/A1(M) corridor. For multi-site office programmes across the Midlands and North of England, contact us to discuss scope and scheduling across locations.
          </p>
          <div className="mt-8">
            <Link href="/contact/" className="btn-primary">
              Discuss a Subcontract Programme →
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-3xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Office vinyl wrapping — common questions
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
            Office wrapping by city
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
            <Link href="/architectural-wrap-offices-sheffield/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Sheffield</h3>
              <p className="mt-2 text-sm text-muted">Office architectural wrap across Sheffield, St Paul&apos;s Quarter and South Yorkshire.</p>
            </Link>
            <Link href="/architectural-wrap-offices-leeds/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Leeds</h3>
              <p className="mt-2 text-sm text-muted">Office architectural wrap across Leeds, Wellington Place and West Yorkshire.</p>
            </Link>
            <Link href="/architectural-wrap-offices-nottingham/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Nottingham</h3>
              <p className="mt-2 text-sm text-muted">Office architectural wrap across Nottingham, Lace Market and Nottinghamshire.</p>
            </Link>
            <Link href="/architectural-wrap-offices-manchester/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Manchester</h3>
              <p className="mt-2 text-sm text-muted">Office architectural wrap across Manchester, Spinningfields and Greater Manchester.</p>
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
            <Link href="/window-film/office-solar-film/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Office solar control window film</h3>
              <p className="mt-2 text-sm text-muted">Heat and glare reduction for open-plan offices, meeting rooms and glazed atria.</p>
            </Link>
            <Link href="/architectural-wrap-hotels/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Hotel interior vinyl wrapping</h3>
              <p className="mt-2 text-sm text-muted">Bedroom furniture, reception desks and corridor surfaces for hotel refurbishments.</p>
            </Link>
            <Link href="/office-graphics-installation/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Office graphics installation</h3>
              <p className="mt-2 text-sm text-muted">Subcontract vinyl graphics, wall graphics and window graphics for office fit-outs.</p>
            </Link>
            <Link href="/architectural-vinyl-film/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Architectural vinyl film overview</h3>
              <p className="mt-2 text-sm text-muted">Full overview of architectural film services for commercial interiors.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-20">
        <div className="container mx-auto max-w-3xl">
          <div className="card-float border-2 border-accent/40 p-10 text-center md:p-12">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              Planning an office refurbishment or fit-out?
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              We survey and scope office vinyl wrapping programmes across South Yorkshire and the East Midlands. Tell us what surfaces you have and we&apos;ll give you a realistic scope and timeline.
            </p>
            <Link href="/contact/" className="btn-primary mt-8 inline-block">
              Request an Office Survey →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
