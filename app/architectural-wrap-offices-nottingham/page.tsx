import type { Metadata } from "next";
import Link from "next/link";
import { getServiceSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Office Architectural Vinyl Wrap Nottingham | Surfaces, Furniture & Fit-Out | WRPX",
  description:
    "Office architectural vinyl wrapping in Nottingham — breakout kitchen surfaces, reception desks, meeting room furniture, partition panels and office interior surfaces wrapped to commercial specification. WRPX covers NG1 city centre, Lace Market, Canal Quarter, Nottingham Business Park and the wider Nottinghamshire office market.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/architectural-wrap-offices-nottingham/",
  },
};

const serviceSchema = getServiceSchema(
  "Office architectural vinyl wrap Nottingham — surfaces, furniture and fit-out",
  "Architectural vinyl wrapping for office interiors in Nottingham and Nottinghamshire. Breakout kitchen surfaces, reception desks, meeting room furniture, partition panels and office interior fit-out wrapped in commercial-grade architectural film. NG1 city centre, Lace Market creative district, Canal Quarter, Nottingham Business Park, Boots campus at Beeston and across the East Midlands."
);

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.wrpx.co.uk/" },
    { "@type": "ListItem", position: 2, name: "Architectural Vinyl Film", item: "https://www.wrpx.co.uk/architectural-vinyl-film/" },
    { "@type": "ListItem", position: 3, name: "Office Architectural Wrap", item: "https://www.wrpx.co.uk/architectural-wrap-offices/" },
    { "@type": "ListItem", position: 4, name: "Nottingham Offices", item: "https://www.wrpx.co.uk/architectural-wrap-offices-nottingham/" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Which Nottingham office areas do you cover for architectural wrapping?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We cover all Nottingham office areas — the NG1 city centre core including Experian, Capital One and the major professional services occupiers; the Lace Market creative and media district; the Canal Quarter waterfront; Nottingham Business Park and the A60 out-of-town corridor; Boots campus in Beeston NG9; Nottingham Science Park; and out-of-town parks on the M1 and A52 corridors. We cover the full NG postcode zone and wider Nottinghamshire.",
      },
    },
    {
      "@type": "Question",
      name: "Can you work in an occupied Nottingham office?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — vinyl wrapping is a dry, low-fume process. For occupied Nottingham offices, we schedule around your working day: breakout kitchen works during out-of-hours windows, smaller reception or meeting room jobs during low-occupancy periods. We agree the access plan with your FM team or project manager before mobilisation — no surprises on installation day.",
      },
    },
    {
      "@type": "Question",
      name: "What office surfaces can be vinyl wrapped in Nottingham?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Breakout kitchen unit doors and drawer fronts, reception desk fascias and front panels, boardroom and meeting room table edges and panels, storage unit doors, partition wall panels, bathroom vanity cabinets and office joinery. The Lace Market and Nottingham&apos;s converted warehouse offices often have bespoke joinery details — we assess at survey and confirm what is suitable before any commitment.",
      },
    },
    {
      "@type": "Question",
      name: "Can you match our Nottingham office interior specification?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — architectural film is available in hundreds of finishes including solid colours, woodgrains, stone effects, brushed metal, satin and matte. If you have a brand colour reference or a finish specification from your interior designer, send it across and we will match as closely as possible from our film range.",
      },
    },
    {
      "@type": "Question",
      name: "How long does office vinyl wrapping take in Nottingham?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A standard breakout kitchen refresh (8–12 unit doors and drawer fronts) typically takes a half day. A full reception desk fascia wrap takes 3–5 hours depending on complexity. Larger fit-out scopes with multiple areas are scoped at survey. Most Nottingham office jobs complete within one to two days.",
      },
    },
  ],
};

const faqItems = [
  {
    q: "Which Nottingham office areas do you cover for architectural wrapping?",
    a: "We cover all Nottingham office areas — the NG1 city centre core including Experian, Capital One and the major professional services occupiers; the Lace Market creative and media district; the Canal Quarter waterfront; Nottingham Business Park and the A60 out-of-town corridor; Boots campus in Beeston NG9; Nottingham Science Park; and out-of-town parks on the M1 and A52 corridors. We cover the full NG postcode zone and wider Nottinghamshire.",
  },
  {
    q: "Can you work in an occupied Nottingham office?",
    a: "Yes — vinyl wrapping is a dry, low-fume process. For occupied Nottingham offices, we schedule around your working day: breakout kitchen works during out-of-hours windows, smaller reception or meeting room jobs during low-occupancy periods. We agree the access plan with your FM team or project manager before mobilisation — no surprises on installation day.",
  },
  {
    q: "What office surfaces can be vinyl wrapped in Nottingham?",
    a: "Breakout kitchen unit doors and drawer fronts, reception desk fascias and front panels, boardroom and meeting room table edges and panels, storage unit doors, partition wall panels, bathroom vanity cabinets and office joinery. The Lace Market and Nottingham's converted warehouse offices often have bespoke joinery details — we assess at survey and confirm what is suitable before any commitment.",
  },
  {
    q: "Can you match our Nottingham office interior specification?",
    a: "Yes — architectural film is available in hundreds of finishes including solid colours, woodgrains, stone effects, brushed metal, satin and matte. If you have a brand colour reference or a finish specification from your interior designer, send it across and we will match as closely as possible from our film range.",
  },
  {
    q: "How long does office vinyl wrapping take in Nottingham?",
    a: "A standard breakout kitchen refresh (8–12 unit doors and drawer fronts) typically takes a half day. A full reception desk fascia wrap takes 3–5 hours depending on complexity. Larger fit-out scopes with multiple areas are scoped at survey. Most Nottingham office jobs complete within one to two days.",
  },
];

export default function ArchitecturalWrapOfficesNottinghamPage() {
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
            <Link href="/architectural-wrap-offices/" className="text-accent hover:underline">Office Architectural Wrap</Link>
            <span className="mx-2">›</span>
            <span className="text-foreground">Nottingham</span>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="border-b border-border bg-card py-16 md:py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <p className="text-sm font-medium uppercase tracking-wide text-accent">
            Architectural Wrap · Nottingham Offices
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Office architectural vinyl wrapping in Nottingham
          </h1>
          <p className="mt-5 text-lg text-muted leading-relaxed">
            WRPX wraps office interior surfaces across Nottingham and the East Midlands — breakout
            kitchen units, reception desk fascias, meeting room furniture, storage joinery and
            partition panels. Commercial-grade architectural film in the finish your interior
            specification requires, installed in occupied or void office environments across NG1,
            the Lace Market, Canal Quarter and the wider Nottinghamshire office market.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact/" className="btn-primary">
              Request a Nottingham Office Survey →
            </Link>
            <Link href="/architectural-wrap-offices/" className="btn-secondary">
              Office Wrapping Overview
            </Link>
          </div>
        </div>
      </section>

      {/* Nottingham office context */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Nottingham&apos;s office market — where we work
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              Nottingham is the East Midlands&apos; largest commercial centre and its office stock
              spans a wide range of building types. The NG1 city centre core — where major occupiers
              including Experian, Capital One and the city&apos;s professional services firms are based —
              generates breakout kitchen and reception wrapping briefs as occupiers refresh within
              long leases rather than undertaking full fit-outs. The typical NG1 Grade A office
              floor plan, with open-plan areas and a central kitchen and reception zone, is well
              suited to targeted vinyl wrapping programmes.
            </p>
            <p>
              The Lace Market creative and media district — Nottingham&apos;s original lace trade quarter,
              now a dense concentration of design, digital, architecture and creative businesses in
              converted Victorian warehouse space — produces briefs where exposed brick and original
              industrial features define the aesthetic. Architectural film is effective here for
              updating kitchen units, joinery details and reception surfaces without clashing with
              the building&apos;s character. Matte black, dark woodgrain and concrete-effect finishes are
              typical specification choices.
            </p>
            <p>
              The Canal Quarter — the waterfront regeneration zone south of the Lace Market —
              includes newer Grade A commercial space alongside converted industrial buildings.
              Nottingham Business Park on the A60 north corridor and Boots&apos; campus in Beeston NG9
              represent the out-of-town corporate estate, with large-footprint occupiers generating
              multi-floor kitchen refresh programmes, particularly on lease renewal or as part of
              partial fit-out refurbishments.
            </p>
            <p>
              Out-of-town Nottingham business parks on the M1 and A52 corridors — Raynesway,
              Colwick, and the A46/A52 junction zone — contain logistics, professional services
              and public-sector occupiers. These generate breakout kitchen refreshes across multiple
              floors, and are accessible from our South Yorkshire base in around 50 minutes via the M1.
            </p>
          </div>
        </div>
      </section>

      {/* What we wrap */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-2xl font-semibold text-foreground md:text-3xl">
            What we wrap in Nottingham office interiors
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Breakout kitchen units</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                The most common office wrapping brief — kitchen unit doors and drawer fronts in
                staff breakout areas. Wrapping an 8–15 door kitchen takes half a day and transforms
                the room without replacement. Colour-matched to your interior palette, brand
                guidelines or interior designer specification.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Reception desk fascias</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                The reception desk is the first surface visitors see. Wrapping a tired or scratched
                fascia in architectural film — stone-effect, brushed metal or a brand-matched solid
                colour — is a high-impact, one-day refresh. No building works, no skip, no extended
                void in your Nottingham office.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Meeting room furniture</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Boardroom table edge banding, credenza panels, built-in storage doors and meeting
                room joinery. Flat and near-flat panel surfaces are well suited to film. We assess
                curved profiles and edge details at survey — no guesswork on arrival at your
                Nottingham office.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Partition and feature panels</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Demountable partition frames, glass partition manifestation panels, feature wall
                sections and built-in plywood or MDF panel runs. Large-format architectural film
                across these surfaces is one of the most cost-effective ways to deliver a finished
                interior look quickly on a Nottingham fit-out programme.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Storage and filing joinery</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Storage unit doors, filing cabinet side panels and built-in shelving doors. Older
                Nottingham office furniture that is structurally sound but visually dated can be
                wrapped to match a new interior scheme without replacement procurement lead times.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Office bathrooms and WCs</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Vanity cabinet doors, back panels, mirror surrounds and partition door faces. Office
                WC areas are often the most neglected in a partial refurbishment — film brings
                them into line with the rest of the specification at minimal additional cost to
                the overall Nottingham programme.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How we work */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            How we work in Nottingham offices
          </h2>
          <ol className="space-y-6">
            <li className="flex gap-4">
              <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-accent text-sm font-bold text-white">1</span>
              <div>
                <h3 className="font-semibold text-foreground">Survey</h3>
                <p className="mt-1 text-muted leading-relaxed">
                  We visit the Nottingham site to assess surfaces, substrate condition and access
                  requirements. We identify anything unsuitable for film and report it before any
                  commitment — no surprises on installation day. Survey typically takes 30–60
                  minutes for a standard office scope.
                </p>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-accent text-sm font-bold text-white">2</span>
              <div>
                <h3 className="font-semibold text-foreground">Film selection</h3>
                <p className="mt-1 text-muted leading-relaxed">
                  We advise on finish options aligned to your interior specification or brand
                  guidelines. We can supply samples for sign-off before ordering. Durability
                  expectations are confirmed by application — high-contact surfaces receive
                  appropriate film grade and finish.
                </p>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-accent text-sm font-bold text-white">3</span>
              <div>
                <h3 className="font-semibold text-foreground">Access scheduling</h3>
                <p className="mt-1 text-muted leading-relaxed">
                  We agree the access window with your FM team — standard office hours, out-of-hours
                  or a phased approach over multiple sessions. For occupied Nottingham offices, most
                  breakout kitchen works are scheduled outside core working hours. Smaller jobs
                  can often be completed without disruption during normal office operation.
                </p>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-accent text-sm font-bold text-white">4</span>
              <div>
                <h3 className="font-semibold text-foreground">Installation and sign-off</h3>
                <p className="mt-1 text-muted leading-relaxed">
                  Surfaces are cleaned, prepared and wrapped to specification. We inspect every
                  panel before leaving the site. Photographic documentation provided at sign-off
                  in whatever format your building management, FM contractor or fit-out programme
                  requires.
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
            Nottingham office wrapping — common questions
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

      {/* Related */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Related services
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <Link href="/architectural-wrap-offices/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Office architectural wrap — full overview</h3>
              <p className="mt-2 text-sm text-muted">National service page covering all office interior wrapping work, surfaces and process.</p>
            </Link>
            <Link href="/window-film/frosted-office-film/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Frosted office window film</h3>
              <p className="mt-2 text-sm text-muted">Privacy film and glass manifestation for Nottingham office glazing, meeting rooms and partitions.</p>
            </Link>
            <Link href="/window-film/solar-control-film-nottingham/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Solar control film Nottingham</h3>
              <p className="mt-2 text-sm text-muted">Heat reduction and glare control film for Nottingham south-facing commercial buildings and offices.</p>
            </Link>
            <Link href="/architectural-wrap-hotels-nottingham/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Hotel vinyl wrapping Nottingham</h3>
              <p className="mt-2 text-sm text-muted">Interior vinyl wrapping for Nottingham hotel operators and hospitality fit-out contractors.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-20">
        <div className="container mx-auto max-w-3xl">
          <div className="card-float border-2 border-accent/40 p-10 text-center md:p-12">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              Nottingham office refurbishment planned?
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              We survey and quote Nottingham office vinyl wrapping jobs within the week. Tell us the
              location, the surfaces and the access requirements — we&apos;ll give you a realistic scope
              and price.
            </p>
            <Link href="/contact/" className="btn-primary mt-8 inline-block">
              Request a Nottingham Office Survey →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
