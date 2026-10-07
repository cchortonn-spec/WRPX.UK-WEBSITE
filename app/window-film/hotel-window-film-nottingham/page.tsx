import type { Metadata } from "next";
import Link from "next/link";
import { getServiceSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Hotel Window Film Nottingham | Solar Control, Privacy Film & Manifestation | WRPX",
  description:
    "Hotel window film in Nottingham — solar control film for glazed city-centre guest rooms, frosted privacy film for en-suite bathrooms and ground-floor windows, Part M glass manifestation for corridors and lobby glazing. WRPX covers Nottingham city centre NG1, the Lace Market NG1, Trent Bridge NG2 and all Nottingham hotel postcodes. Free survey.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/window-film/hotel-window-film-nottingham/",
  },
};

const serviceSchema = getServiceSchema(
  "Hotel window film Nottingham — solar control, frosted privacy film and glass manifestation",
  "Window film installation for hotels across Nottingham and the East Midlands. Solar control film for guest bedrooms and glazed communal areas, frosted privacy film for en-suite bathrooms and ground-floor windows, Part M glass manifestation for corridors and lobby screens. Nottingham city centre NG1, the Lace Market NG1, Trent Bridge NG2, the Broadmarsh and Canal Quarter NG1, the University Park area NG7 and all Nottingham hotel postcodes. Installed around guest occupancy with minimal disruption."
);

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.wrpx.co.uk/" },
    { "@type": "ListItem", position: 2, name: "Window Film", item: "https://www.wrpx.co.uk/window-film/" },
    {
      "@type": "ListItem",
      position: 3,
      name: "Hotel Window Film",
      item: "https://www.wrpx.co.uk/window-film/hotel-window-film/",
    },
    {
      "@type": "ListItem",
      position: 4,
      name: "Nottingham",
      item: "https://www.wrpx.co.uk/window-film/hotel-window-film-nottingham/",
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do you install solar control film in Nottingham hotels?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — solar control film is a major part of our Nottingham hotel work. Nottingham city centre has a large stock of modern glass-facade hotels around NG1 and NG2, particularly in the Lace Market, the Broadmarsh area and the new Canal Quarter development. South and west-facing guest rooms in these properties overheat from spring through autumn. Solar control film reduces heat gain by up to 80%, keeping guest rooms comfortable without replacing glazing or fitting external shading systems that obstruct views or alter the building appearance.",
      },
    },
    {
      "@type": "Question",
      name: "What window film do Nottingham hotel bathrooms typically need?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Frosted privacy film is the standard specification for en-suite bathroom windows across Nottingham hotels. Plain frosted film prevents overlooking while preserving natural light. Etched-effect and satin frosted film is used in boutique and design-led Nottingham hotels — particularly those in converted Lace Market warehouses and the Georgian Quarter around Standard Hill — where the finish must be indistinguishable from genuine sandblasted glass. Film is applied with moisture-resistant adhesive appropriate for bathroom environments.",
      },
    },
    {
      "@type": "Question",
      name: "How far is WRPX from Nottingham?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nottingham is approximately 40–50 minutes from our South Yorkshire base via the M1 southbound to junction 26. Nottingham is one of our closest major hotel cities — closer than Leeds or Manchester. We can survey and programme Nottingham hotel installations with short lead times and return for phased programmes without significant mobilisation overhead.",
      },
    },
    {
      "@type": "Question",
      name: "Can you install window film in Nottingham hotels while they are open?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — we work room by room in an operating Nottingham hotel, co-ordinating with housekeeping to install in unoccupied rooms. En-suite bathroom windows typically take 30–45 minutes. For glazed common areas — lobbies, bars and meeting rooms — we prefer overnight or early-morning access to avoid working in front of guests. We programme around your occupancy pattern and can phase work across multiple visits to avoid disruption.",
      },
    },
    {
      "@type": "Question",
      name: "Do you cover Nottingham hotels near the universities and Trent Bridge?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — the University of Nottingham area (NG7) and the Trent Bridge zone (NG2, NG9, NG11) are both within our regular Nottingham programme. Accommodation properties near the two universities generate consistent frosted privacy film demand for student-facing guest rooms and shared bathrooms. The Trent Bridge and West Bridgford corridor has a growing boutique hotel and B&B market with solar control and privacy requirements on south-facing elevations near the river.",
      },
    },
  ],
};

const faqItems = [
  {
    q: "Do you install solar control film in Nottingham hotels?",
    a: "Yes — solar control film is a major part of our Nottingham hotel work. Nottingham city centre has a large stock of modern glass-facade hotels around NG1 and NG2, particularly in the Lace Market, the Broadmarsh area and the new Canal Quarter development. South and west-facing guest rooms in these properties overheat from spring through autumn. Solar control film reduces heat gain by up to 80%, keeping guest rooms comfortable without replacing glazing or fitting external shading systems that obstruct views or alter the building appearance.",
  },
  {
    q: "What window film do Nottingham hotel bathrooms typically need?",
    a: "Frosted privacy film is the standard specification for en-suite bathroom windows across Nottingham hotels. Plain frosted film prevents overlooking while preserving natural light. Etched-effect and satin frosted film is used in boutique and design-led Nottingham hotels — particularly those in converted Lace Market warehouses and the Georgian Quarter around Standard Hill — where the finish must be indistinguishable from genuine sandblasted glass. Film is applied with moisture-resistant adhesive appropriate for bathroom environments.",
  },
  {
    q: "How far is WRPX from Nottingham?",
    a: "Nottingham is approximately 40–50 minutes from our South Yorkshire base via the M1 southbound to junction 26. Nottingham is one of our closest major hotel cities — closer than Leeds or Manchester. We can survey and programme Nottingham hotel installations with short lead times and return for phased programmes without significant mobilisation overhead.",
  },
  {
    q: "Can you install window film in Nottingham hotels while they are open?",
    a: "Yes — we work room by room in an operating Nottingham hotel, co-ordinating with housekeeping to install in unoccupied rooms. En-suite bathroom windows typically take 30–45 minutes. For glazed common areas — lobbies, bars and meeting rooms — we prefer overnight or early-morning access to avoid working in front of guests. We programme around your occupancy pattern and can phase work across multiple visits to avoid disruption.",
  },
  {
    q: "Do you cover Nottingham hotels near the universities and Trent Bridge?",
    a: "Yes — the University of Nottingham area (NG7) and the Trent Bridge zone (NG2, NG9, NG11) are both within our regular Nottingham programme. Accommodation properties near the two universities generate consistent frosted privacy film demand for student-facing guest rooms and shared bathrooms. The Trent Bridge and West Bridgford corridor has a growing boutique hotel and B&B market with solar control and privacy requirements on south-facing elevations near the river.",
  },
];

export default function HotelWindowFilmNottinghamPage() {
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
            <Link href="/" className="text-accent hover:underline">
              Home
            </Link>
            <span className="mx-2">›</span>
            <Link href="/window-film/" className="text-accent hover:underline">
              Window Film
            </Link>
            <span className="mx-2">›</span>
            <Link
              href="/window-film/hotel-window-film/"
              className="text-accent hover:underline"
            >
              Window Film for Hotels
            </Link>
            <span className="mx-2">›</span>
            <span className="text-foreground">Nottingham</span>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="border-b border-border bg-card py-16 md:py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <p className="text-sm font-medium uppercase tracking-wide text-accent">
            Window Film · Nottingham Hotels
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Hotel window film — Nottingham
          </h1>
          <p className="mt-5 text-lg text-muted leading-relaxed">
            WRPX installs solar control film, frosted privacy film and Part M glass
            manifestation for hotels across Nottingham and the East Midlands. City-centre
            NG1, the Lace Market, the Broadmarsh and Canal Quarter, Trent Bridge NG2 and
            the University Park zone NG7 — work scheduled around guest occupancy,
            programmed from our South Yorkshire base approximately 40 minutes from
            Nottingham city centre.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact/" className="btn-primary">
              Request a Nottingham Hotel Survey →
            </Link>
            <Link href="/window-film/hotel-window-film/" className="btn-secondary">
              Hotel Window Film Overview
            </Link>
          </div>
        </div>
      </section>

      {/* Nottingham hotel context */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Nottingham hotel market — where window film is needed
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              Nottingham has one of the most active hotel markets in the East Midlands,
              driven by a large commercial centre, two major universities, significant
              conference activity, a strong retail and leisure market and growing visitor
              tourism. The city-centre NG1 hotel stock includes a mix of branded corporate
              hotels, boutique conversions and design-led operators in converted Lace Market
              warehouses — each with distinct but consistent window film requirements.
            </p>
            <p>
              Modern glass-facade hotels in central Nottingham — particularly around the
              Broadmarsh area, the Canal Quarter development, Maid Marian Way and the
              southern NG1 waterfront — have significant solar gain in south and west-facing
              guest rooms and glazed communal areas. Solar control film is the primary need
              in these properties, reducing heat gain by 40–80% without replacing glazing,
              blocking natural light or changing the external building appearance.
            </p>
            <p>
              Boutique and design-led Nottingham hotels in the Lace Market NG1 — converted
              Victorian and Georgian warehouse buildings — have a consistent requirement for
              high-quality frosted and etched-effect privacy film in en-suite bathrooms and
              internal partitioned spaces. The specification in these properties is high:
              film must match the quality and finish of genuine sandblasted or acid-etched
              glass to sit within a design-led interior.
            </p>
            <p>
              WRPX is based in South Yorkshire, approximately 40–50 minutes north of
              Nottingham city centre via the M1. Nottingham is one of our closest major
              hotel markets — Nottingham hotel work is efficient and can be surveyed and
              installed with short lead times and minimal mobilisation overhead.
            </p>
          </div>
        </div>
      </section>

      {/* Film types */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-2xl font-semibold text-foreground md:text-3xl">
            Window film applications for Nottingham hotels
          </h2>
          <div className="grid gap-8 lg:grid-cols-3">
            <div className="card-float p-8">
              <h3 className="text-xl font-semibold text-foreground">Solar control film</h3>
              <p className="mt-4 text-muted leading-relaxed">
                Reduces solar heat gain in Nottingham hotel bedrooms, glazed lounges and
                atrium spaces by 40–80%. Particularly effective in the modern glass-facade
                hotels around the Broadmarsh, Canal Quarter and Maid Marian Way corridor.
                Guest rooms stay comfortable without external shading systems that block
                views or change the building appearance.
              </p>
              <Link
                href="/window-film/solar-control-film/"
                className="mt-6 inline-block text-sm text-accent hover:underline"
              >
                Solar control film details →
              </Link>
            </div>
            <div className="card-float p-8">
              <h3 className="text-xl font-semibold text-foreground">Frosted privacy film</h3>
              <p className="mt-4 text-muted leading-relaxed">
                En-suite bathroom windows, ground-floor guest room windows overlooked
                from streets or car parks, and internal glazed partitions in Nottingham
                hotel bars and meeting rooms. Etched-effect satin film for Lace Market
                boutique hotels converted from Victorian warehouses — a finish
                indistinguishable from genuine sandblasted glass.
              </p>
              <Link
                href="/window-film/frosted-window-film/"
                className="mt-6 inline-block text-sm text-accent hover:underline"
              >
                Frosted window film details →
              </Link>
            </div>
            <div className="card-float p-8">
              <h3 className="text-xl font-semibold text-foreground">Glass manifestation</h3>
              <p className="mt-4 text-muted leading-relaxed">
                Part M compliance for full-height corridor glazing, glass lobby screens
                and glazed conference partitions across Nottingham hotels. Applied as
                dots, stripe bands or custom patterns at 850mm and 1500mm heights. We
                assess compliance requirements at survey and provide a written scope
                before installation.
              </p>
              <Link
                href="/window-film/glass-manifestation/"
                className="mt-6 inline-block text-sm text-accent hover:underline"
              >
                Glass manifestation details →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Hotel zones covered */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Nottingham hotel zones we cover
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="card-float p-5">
              <h3 className="font-semibold text-foreground">
                Nottingham city centre NG1
              </h3>
              <p className="mt-2 text-sm text-muted">
                Branded corporate hotels, boutique conversions and new-build operators
                across the central NG1 core. Glass-facade hotels with solar control
                demand, Lace Market warehouse conversions with privacy and decorative
                film requirements, and lobby and corridor manifestation across the full
                city-centre stock.
              </p>
            </div>
            <div className="card-float p-5">
              <h3 className="font-semibold text-foreground">
                Lace Market and Broadmarsh NG1
              </h3>
              <p className="mt-2 text-sm text-muted">
                Boutique and design-led hotels in converted Victorian lace warehouses —
                a consistent requirement for high-specification etched-effect frosted
                film in en-suite bathrooms and internal glazing. The emerging Broadmarsh
                and Canal Quarter zone adds new-build glass-facade hotels with solar
                control and manifestation demand.
              </p>
            </div>
            <div className="card-float p-5">
              <h3 className="font-semibold text-foreground">
                Trent Bridge and West Bridgford NG2
              </h3>
              <p className="mt-2 text-sm text-muted">
                Hotels and boutique accommodation around the Trent Bridge cricket ground
                and the West Bridgford riverside corridor. South-facing elevations with
                consistent solar control demand during the cricket season and beyond.
                Boutique B&B and small hotel properties with frosted film requirements
                on bathroom and ground-floor guest room windows.
              </p>
            </div>
            <div className="card-float p-5">
              <h3 className="font-semibold text-foreground">
                University Park and Dunkirk NG7
              </h3>
              <p className="mt-2 text-sm text-muted">
                Accommodation properties near the University of Nottingham campus —
                a mix of student-facing B&B, guesthouse and serviced apartment stock
                with frosted privacy requirements for bedroom glazing and shared
                bathroom windows. Combined efficiently with city-centre Nottingham
                work on the same day programme.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How we work */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            How we work in Nottingham hotels
          </h2>
          <div className="space-y-6 text-muted leading-relaxed">
            <p>
              <strong className="text-foreground">Room-by-room around occupancy.</strong>{" "}
              We install room by room in an operating Nottingham hotel — co-ordinating
              with housekeeping to work in unoccupied rooms as they check out. A standard
              en-suite bathroom window takes 30–45 minutes. Two installers can complete
              10–15 rooms in a working day depending on access scheduling.
            </p>
            <p>
              <strong className="text-foreground">
                Overnight and early-morning access.
              </strong>{" "}
              For glazed common areas — lobbies, dining rooms and meeting spaces — we
              offer overnight or early-morning access to avoid working in front of guests.
              Nottingham city-centre hotels with high midweek business traveller occupancy
              are well suited to early-morning lobby installations before hotel operations
              begin.
            </p>
            <p>
              <strong className="text-foreground">
                White-label for fit-out contractors.
              </strong>{" "}
              We work white-label for fit-out contractors and facilities management
              companies on Nottingham hotel refurbishment programmes. We attend under your
              company name, carry your paperwork and report to your project manager.
              Photographic sign-off provided at completion.
            </p>
            <p>
              <strong className="text-foreground">40 minutes from South Yorkshire.</strong>{" "}
              Nottingham is one of our closest major hotel cities — fast to mobilise and
              easy to programme phased work without the logistics overhead that comes
              with more distant cities. No minimum programme size — happy to discuss
              single-room survey and installation requirements.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-3xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Nottingham hotel window film — common questions
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
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Related services for Nottingham hotels
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <Link
              href="/window-film/hotel-window-film/"
              className="card-float p-5 hover:border-accent/60 transition-colors"
            >
              <h3 className="font-semibold text-foreground">
                Hotel window film — full overview
              </h3>
              <p className="mt-2 text-sm text-muted">
                National service page covering all hotel window film applications, film
                types and the installation process.
              </p>
            </Link>
            <Link
              href="/window-film/hotel-window-film-sheffield/"
              className="card-float p-5 hover:border-accent/60 transition-colors"
            >
              <h3 className="font-semibold text-foreground">
                Hotel window film Sheffield
              </h3>
              <p className="mt-2 text-sm text-muted">
                Solar control, privacy film and manifestation for Sheffield hotels —
                our South Yorkshire home city.
              </p>
            </Link>
            <Link
              href="/window-film/solar-control-film-nottingham/"
              className="card-float p-5 hover:border-accent/60 transition-colors"
            >
              <h3 className="font-semibold text-foreground">
                Solar control film Nottingham
              </h3>
              <p className="mt-2 text-sm text-muted">
                Solar control and heat-reduction film across Nottingham commercial and
                residential properties.
              </p>
            </Link>
            <Link
              href="/architectural-wrap-hotels-nottingham/"
              className="card-float p-5 hover:border-accent/60 transition-colors"
            >
              <h3 className="font-semibold text-foreground">
                Hotel interior vinyl wrapping Nottingham
              </h3>
              <p className="mt-2 text-sm text-muted">
                Vinyl wrapping for Nottingham hotel interior surfaces — bar fronts,
                corridor doors, fitted furniture and reception areas.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-20">
        <div className="container mx-auto max-w-3xl">
          <div className="card-float border-2 border-accent/40 p-10 text-center md:p-12">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              Planning window film for a Nottingham hotel?
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              We survey Nottingham hotels and provide a fixed-price scope with a
              programme tailored to your occupancy pattern. We&apos;re 40 minutes from
              Nottingham — tell us the property and the problem and we&apos;ll come
              and look.
            </p>
            <Link href="/contact/" className="btn-primary mt-8 inline-block">
              Request a Nottingham Hotel Survey →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
