import type { Metadata } from "next";
import Link from "next/link";
import { getServiceSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Hotel Window Film Sheffield | Solar Control, Privacy Film & Manifestation | WRPX",
  description:
    "Hotel window film in Sheffield — solar control film for overheating city-centre guest rooms, frosted privacy film for bathrooms and ground-floor windows, Part M glass manifestation for corridors and lobbies. WRPX covers Sheffield S1 city centre, Park Square S1, the Hallamshire corridor S10 and all Sheffield hotel postcodes. Free survey.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/window-film/hotel-window-film-sheffield/",
  },
};

const serviceSchema = getServiceSchema(
  "Hotel window film Sheffield — solar control, frosted privacy film and glass manifestation",
  "Window film installation for hotels across Sheffield and South Yorkshire. Solar control film for guest bedrooms and glazed communal areas, frosted privacy film for en-suite bathrooms and ground-floor windows, Part M glass manifestation for corridors and lobby screens. Sheffield S1 city centre, Park Square, the Hallamshire corridor S10, Sheffield Arena S9 and all Sheffield hotel postcodes. Installed around guest occupancy with minimal disruption."
);

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.wrpx.co.uk/" },
    { "@type": "ListItem", position: 2, name: "Window Film", item: "https://www.wrpx.co.uk/window-film/" },
    { "@type": "ListItem", position: 3, name: "Hotel Window Film", item: "https://www.wrpx.co.uk/window-film/hotel-window-film/" },
    { "@type": "ListItem", position: 4, name: "Sheffield", item: "https://www.wrpx.co.uk/window-film/hotel-window-film-sheffield/" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do you install solar control film in Sheffield hotels?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — solar control film is one of the most frequent requests we receive from Sheffield hotel operators and fit-out contractors. Sheffield city-centre hotels — particularly the glass-facade towers on the inner ring road S1 and the taller branded hotels around Park Square — have south and west-facing guest rooms that overheat significantly from spring through autumn. Solar control film reduces solar heat gain by up to 80%, lowering room temperature without replacing glazing or blocking the city view with external blinds. We can survey and install from our South Yorkshire base with minimal lead time.",
      },
    },
    {
      "@type": "Question",
      name: "What types of window film do Sheffield hotel bathrooms need?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Frosted privacy film is the standard specification for hotel en-suite bathroom windows across Sheffield. Plain frosted film prevents overlooking while maintaining daylight. Etched-effect decorative frosted film is used in boutique Sheffield properties — including the converted heritage buildings in the Cultural Industries Quarter S1 and the Devonshire Quarter — where the finish needs to match a premium interior aesthetic. Film is installed using moisture-resistant adhesive suited to bathroom environments.",
      },
    },
    {
      "@type": "Question",
      name: "What is glass manifestation and is it required in Sheffield hotels?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Glass manifestation is required under Building Regulations Part M — bands or repeated marks at 850mm and 1500mm heights on large glass panels to make the glazing visible and prevent collision. Full-height corridor glazing, glass lobby screens, and glass partitions in Sheffield hotel conference and function rooms commonly require compliant manifestation. WRPX installs both plain and patterned manifestation to Part M specification.",
      },
    },
    {
      "@type": "Question",
      name: "Can you install hotel window film around guest occupancy in Sheffield?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — and being based in South Yorkshire means we can do this with much shorter mobilisation than a national contractor. We work room by room in an operating Sheffield hotel, co-ordinating with housekeeping to install in unoccupied rooms and move systematically through the building. A typical en-suite bathroom window takes 30–45 minutes. We also offer overnight and early-morning access for lobby glazing and common areas where daytime disruption is not acceptable.",
      },
    },
    {
      "@type": "Question",
      name: "Do you cover Sheffield Arena hotels and out-of-city hotel clusters?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — Utilita Arena Sheffield (formerly Sheffield Arena) S9 is approximately 10 minutes from the S1 city centre, and the hotels serving the Arena, Don Valley and Lower Don Valley commercial areas are within our regular Sheffield programme. Meadowhall S9, the M1 corridor hotels and the Hallamshire hospital cluster S10 hotels are all within the same Sheffield day zone.",
      },
    },
  ],
};

const faqItems = [
  {
    q: "Do you install solar control film in Sheffield hotels?",
    a: "Yes — solar control film is one of the most frequent requests we receive from Sheffield hotel operators and fit-out contractors. Sheffield city-centre hotels — particularly the glass-facade towers on the inner ring road S1 and the taller branded hotels around Park Square — have south and west-facing guest rooms that overheat significantly from spring through autumn. Solar control film reduces solar heat gain by up to 80%, lowering room temperature without replacing glazing or blocking the city view with external blinds. We can survey and install from our South Yorkshire base with minimal lead time.",
  },
  {
    q: "What types of window film do Sheffield hotel bathrooms need?",
    a: "Frosted privacy film is the standard specification for hotel en-suite bathroom windows across Sheffield. Plain frosted film prevents overlooking while maintaining daylight. Etched-effect decorative frosted film is used in boutique Sheffield properties — including the converted heritage buildings in the Cultural Industries Quarter S1 and the Devonshire Quarter — where the finish needs to match a premium interior aesthetic. Film is installed using moisture-resistant adhesive suited to bathroom environments.",
  },
  {
    q: "What is glass manifestation and is it required in Sheffield hotels?",
    a: "Glass manifestation is required under Building Regulations Part M — bands or repeated marks at 850mm and 1500mm heights on large glass panels to make the glazing visible and prevent collision. Full-height corridor glazing, glass lobby screens, and glass partitions in Sheffield hotel conference and function rooms commonly require compliant manifestation. WRPX installs both plain and patterned manifestation to Part M specification.",
  },
  {
    q: "Can you install hotel window film around guest occupancy in Sheffield?",
    a: "Yes — and being based in South Yorkshire means we can do this with much shorter mobilisation than a national contractor. We work room by room in an operating Sheffield hotel, co-ordinating with housekeeping to install in unoccupied rooms and move systematically through the building. A typical en-suite bathroom window takes 30–45 minutes. We also offer overnight and early-morning access for lobby glazing and common areas where daytime disruption is not acceptable.",
  },
  {
    q: "Do you cover Sheffield Arena hotels and out-of-city hotel clusters?",
    a: "Yes — Utilita Arena Sheffield (formerly Sheffield Arena) S9 is approximately 10 minutes from the S1 city centre, and the hotels serving the Arena, Don Valley and Lower Don Valley commercial areas are within our regular Sheffield programme. Meadowhall S9, the M1 corridor hotels and the Hallamshire hospital cluster S10 hotels are all within the same Sheffield day zone.",
  },
];

export default function HotelWindowFilmSheffieldPage() {
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
            <Link href="/window-film/" className="text-accent hover:underline">Window Film</Link>
            <span className="mx-2">›</span>
            <Link href="/window-film/hotel-window-film/" className="text-accent hover:underline">Window Film for Hotels</Link>
            <span className="mx-2">›</span>
            <span className="text-foreground">Sheffield</span>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="border-b border-border bg-card py-16 md:py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <p className="text-sm font-medium uppercase tracking-wide text-accent">
            Window Film · Sheffield Hotels
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Hotel window film — Sheffield
          </h1>
          <p className="mt-5 text-lg text-muted leading-relaxed">
            WRPX installs solar control film, frosted privacy film and Part M glass
            manifestation for hotels across Sheffield and South Yorkshire. City-centre S1,
            Park Square, the Arena quarter S9, Meadowhall S9 and the Hallamshire corridor
            S10 — work scheduled around guest occupancy from our South Yorkshire base,
            without the mobilisation cost of a national contractor.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact/" className="btn-primary">
              Request a Sheffield Hotel Survey →
            </Link>
            <Link href="/window-film/hotel-window-film/" className="btn-secondary">
              Hotel Window Film Overview
            </Link>
          </div>
        </div>
      </section>

      {/* Sheffield hotel context */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Sheffield&apos;s hotel market — where window film is needed
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              Sheffield has a substantial and varied hotel market. The city-centre S1 core
              includes branded business hotels — several in modern glass-facade towers on
              the inner ring road and around Park Square — alongside boutique independent
              properties in converted heritage buildings in the Cultural Industries Quarter
              and the Devonshire Quarter. These two property types have different but
              equally active window film needs.
            </p>
            <p>
              Glass-facade business hotels in central Sheffield have a consistent solar
              overheating problem in south and west-facing guest rooms and glazed lounges.
              Sheffield sits in a valley basin that intensifies solar gain during the
              spring-to-autumn period. Solar control film — reducing heat gain by 40–80%
              without replacing glazing — is the primary need for these properties. It
              keeps guest rooms comfortable without requiring air-conditioning upgrades or
              external shading that would change the building appearance or reduce the
              city views guests pay for.
            </p>
            <p>
              Boutique Sheffield hotels — particularly those in converted Victorian mills,
              warehouses and civic buildings — have a consistent need for frosted and
              etched-effect privacy film in en-suite bathrooms, ground-floor guest room
              windows, and internal glazed partition walls in restaurants, bars and function
              spaces. The finish required in these properties is indistinguishable from
              genuine sandblasted or etched glass.
            </p>
            <p>
              WRPX is based in South Yorkshire — Sheffield hotels are local work, not a
              regional day out. There is no minimum job value to justify a Sheffield survey.
              We can respond, survey and programme installation with significantly shorter
              lead times than any national window film company.
            </p>
          </div>
        </div>
      </section>

      {/* Film types */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-2xl font-semibold text-foreground md:text-3xl">
            Window film applications for Sheffield hotels
          </h2>
          <div className="grid gap-8 lg:grid-cols-3">
            <div className="card-float p-8">
              <h3 className="text-xl font-semibold text-foreground">Solar control film</h3>
              <p className="mt-4 text-muted leading-relaxed">
                Reduces solar heat gain in Sheffield hotel bedrooms, glazed lounges and
                corridors by 40–80%. Particularly effective in the glass-facade city-centre
                hotels on the inner ring road S1 and the taller properties around Park
                Square with south and west-facing elevations. Guest rooms stay comfortable
                without external shading systems that would obstruct the city view.
              </p>
              <Link href="/window-film/solar-control-film/" className="mt-6 inline-block text-sm text-accent hover:underline">
                Solar control film details →
              </Link>
            </div>
            <div className="card-float p-8">
              <h3 className="text-xl font-semibold text-foreground">Frosted privacy film</h3>
              <p className="mt-4 text-muted leading-relaxed">
                En-suite bathroom windows, ground-floor guest room windows overlooked from
                car parks or city streets, and internal glazed partition walls in Sheffield
                hotel bars, restaurants and function rooms. Etched-effect decorative film
                is specified in the boutique properties of the Cultural Industries Quarter
                and the Devonshire Quarter where the finish must match a premium interior.
              </p>
              <Link href="/window-film/frosted-window-film/" className="mt-6 inline-block text-sm text-accent hover:underline">
                Frosted window film details →
              </Link>
            </div>
            <div className="card-float p-8">
              <h3 className="text-xl font-semibold text-foreground">Glass manifestation</h3>
              <p className="mt-4 text-muted leading-relaxed">
                Part M compliance for full-height corridor glazing, glass lobby screens
                and glass partitions in Sheffield hotel conference and function rooms.
                Applied as dots, stripe bands or custom patterns at the correct height
                bands. We assess compliance requirements at survey and provide a written
                scope before any installation.
              </p>
              <Link href="/window-film/glass-manifestation/" className="mt-6 inline-block text-sm text-accent hover:underline">
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
            Sheffield hotel zones we cover
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="card-float p-5">
              <h3 className="font-semibold text-foreground">Sheffield city centre S1</h3>
              <p className="mt-2 text-sm text-muted">Branded city-centre hotels, boutique properties in the Cultural Industries Quarter and the Devonshire Quarter. Glass-facade business hotels with active solar control demand, heritage conversions with frosted privacy and decorative film requirements, and glass lobby and corridor manifestation work across the hotel stock.</p>
            </div>
            <div className="card-float p-5">
              <h3 className="font-semibold text-foreground">Park Square and inner ring road S1/S3</h3>
              <p className="mt-2 text-sm text-muted">Higher-rise business hotels around Park Square and the inner ring road with significant glass-facade areas. South and west-facing guest rooms in these properties are among the most active solar control film installations in the Sheffield hotel market.</p>
            </div>
            <div className="card-float p-5">
              <h3 className="font-semibold text-foreground">Sheffield Arena and Don Valley S9</h3>
              <p className="mt-2 text-sm text-muted">Hotels serving the Utilita Arena Sheffield and the Don Valley commercial corridor. Modern properties with corporate glazing and event-driven occupancy — window film work frequently programmed around low-occupancy gaps between events and conference bookings.</p>
            </div>
            <div className="card-float p-5">
              <h3 className="font-semibold text-foreground">Hallamshire and university belt S10/S11</h3>
              <p className="mt-2 text-sm text-muted">Hotels and guest accommodation serving the Royal Hallamshire Hospital, the University of Sheffield and Hallam University corridors. A mix of boutique, serviced apartment and corporate stay properties with frosted privacy and solar control requirements.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How we work */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            How we work in Sheffield hotels
          </h2>
          <div className="space-y-6 text-muted leading-relaxed">
            <p>
              <strong className="text-foreground">Room-by-room around occupancy.</strong>{" "}
              We install room by room in an operating hotel — co-ordinating with housekeeping
              to work in unoccupied rooms as they check out and before the next check-in.
              A standard en-suite bathroom window takes 30–45 minutes. Two installers can
              complete 10–15 rooms in a working day depending on access and room schedule.
            </p>
            <p>
              <strong className="text-foreground">Local base — fast response.</strong>{" "}
              Being based in South Yorkshire means Sheffield hotels can be surveyed and
              programmed with very short lead times. There is no minimum contract value
              required to justify a Sheffield visit. Even a single problem window or a
              small frosted bathroom programme is straightforward from our base.
            </p>
            <p>
              <strong className="text-foreground">White-label for fit-out contractors.</strong>{" "}
              We work white-label for fit-out contractors and facilities management companies
              delivering hotel refurbishment programmes across Sheffield. We attend under
              your company name, carry your paperwork and report to your project manager
              throughout. Photographic sign-off at completion.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-3xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Sheffield hotel window film — common questions
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
            Related services for Sheffield hotels
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <Link href="/window-film/hotel-window-film/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Hotel window film — full overview</h3>
              <p className="mt-2 text-sm text-muted">National service page covering all hotel window film applications, film types and installation process.</p>
            </Link>
            <Link href="/window-film/solar-control-film-sheffield/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Solar control film Sheffield</h3>
              <p className="mt-2 text-sm text-muted">Solar control and heat-reduction window film across Sheffield commercial and residential properties.</p>
            </Link>
            <Link href="/window-film/frosted-film-sheffield/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Frosted window film Sheffield</h3>
              <p className="mt-2 text-sm text-muted">Frosted and etched-effect privacy film for Sheffield commercial and residential premises.</p>
            </Link>
            <Link href="/architectural-wrap-hotels-sheffield/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Hotel interior vinyl wrapping Sheffield</h3>
              <p className="mt-2 text-sm text-muted">Vinyl wrapping for Sheffield hotel interior surfaces — kitchen areas, bar fronts, corridor doors and fitted furniture.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-20">
        <div className="container mx-auto max-w-3xl">
          <div className="card-float border-2 border-accent/40 p-10 text-center md:p-12">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              Planning window film for a Sheffield hotel?
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              We&apos;re based in South Yorkshire — Sheffield hotel surveys are local work.
              Tell us the property and the problem and we&apos;ll come and look. Fixed-price
              scope with a programme tailored to your occupancy pattern.
            </p>
            <Link href="/contact/" className="btn-primary mt-8 inline-block">
              Request a Sheffield Hotel Survey →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
