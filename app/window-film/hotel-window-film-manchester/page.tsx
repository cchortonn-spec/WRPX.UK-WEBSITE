import type { Metadata } from "next";
import Link from "next/link";
import { getServiceSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Hotel Window Film Manchester | Solar Control, Privacy Film & Manifestation | WRPX",
  description:
    "Hotel window film in Manchester — solar control film for glazed city-centre guest rooms, frosted privacy film for en-suite bathrooms and ground-floor windows, Part M glass manifestation for corridors and lobby glazing. WRPX covers Manchester city centre M1–M3, Spinningfields M3, Ancoats M4, MediaCityUK M50 and all Manchester hotel postcodes. Free survey.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/window-film/hotel-window-film-manchester/",
  },
};

const serviceSchema = getServiceSchema(
  "Hotel window film Manchester — solar control, frosted privacy film and glass manifestation",
  "Window film installation for hotels across Manchester and the Greater Manchester area. Solar control film for guest bedrooms and glazed communal areas, frosted privacy film for en-suite bathrooms and ground-floor windows, Part M glass manifestation for corridors and lobby screens. Manchester city centre M1 Piccadilly, Deansgate M3, Spinningfields M3, Ancoats M4, Northern Quarter M4, MediaCityUK M50 and all Manchester hotel postcodes. Installed around guest occupancy with minimal disruption."
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
      name: "Manchester",
      item: "https://www.wrpx.co.uk/window-film/hotel-window-film-manchester/",
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do you install solar control film in Manchester hotels?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — solar control film is a core part of our Manchester hotel work. Manchester city centre has an exceptionally large concentration of modern glass-tower and glass-facade hotels in the M1, M2 and M3 zones — particularly around Piccadilly, Deansgate and the Spinningfields district. South and west-facing guest rooms in these high-rise properties accumulate significant heat gain from spring through autumn. Solar control film reduces heat gain by up to 80%, keeping guest rooms comfortable without replacing glazing or adding external shading that obstructs views or affects the building appearance.",
      },
    },
    {
      "@type": "Question",
      name: "What frosted film is used in Manchester hotel bathrooms?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Frosted privacy film is the standard specification for en-suite bathroom windows across Manchester hotels. Plain frosted film prevents overlooking while preserving natural daylight in tight city-centre plots. Etched-effect and satin frosted film is used in boutique and design-led Manchester hotels — particularly those in Northern Quarter M4, Ancoats M4 and Spinningfields M3 conversions — where the film finish must be indistinguishable from genuine acid-etched or sandblasted glass. Film is applied with moisture-resistant adhesive appropriate for bathroom environments.",
      },
    },
    {
      "@type": "Question",
      name: "How far is WRPX from Manchester?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Manchester is approximately 1 hour from our South Yorkshire base via the M1 and M60 ring road. Manchester hotel work is efficient — a full programme day covering multiple hotels in the M1–M4 city-centre zone is straightforward from South Yorkshire. We can survey and programme Manchester hotel installations without significant mobilisation overhead.",
      },
    },
    {
      "@type": "Question",
      name: "Can you install window film in Manchester hotels around guest occupancy?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — we work room by room in an operating Manchester hotel, co-ordinating with housekeeping to install in unoccupied rooms as they become available. En-suite bathroom windows typically take 30–45 minutes. For glazed common areas — lobbies, bars, restaurants and meeting rooms — we offer overnight or early-morning access to avoid working in front of guests. Manchester hotels with high midweek corporate and conference occupancy are well suited to early-morning lobby installations.",
      },
    },
    {
      "@type": "Question",
      name: "Do you cover MediaCityUK hotels and airport hotels near Manchester?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — the MediaCityUK cluster in Salford Quays M50 and the Manchester Airport hotel zone in M90 and the surrounding SK9/WA15 corridor are both within our Manchester day programme. MediaCityUK hotels have a high proportion of glass-facade glazing with consistent solar control demand. Airport hotels serving Manchester Airport have a distinct mix of glazed lounges and dining areas with solar control requirements and en-suite bathroom frosted film demand. Both zones combine efficiently with city-centre Manchester on the same programme.",
      },
    },
  ],
};

const faqItems = [
  {
    q: "Do you install solar control film in Manchester hotels?",
    a: "Yes — solar control film is a core part of our Manchester hotel work. Manchester city centre has an exceptionally large concentration of modern glass-tower and glass-facade hotels in the M1, M2 and M3 zones — particularly around Piccadilly, Deansgate and the Spinningfields district. South and west-facing guest rooms in these high-rise properties accumulate significant heat gain from spring through autumn. Solar control film reduces heat gain by up to 80%, keeping guest rooms comfortable without replacing glazing or adding external shading that obstructs views or affects the building appearance.",
  },
  {
    q: "What frosted film is used in Manchester hotel bathrooms?",
    a: "Frosted privacy film is the standard specification for en-suite bathroom windows across Manchester hotels. Plain frosted film prevents overlooking while preserving natural daylight in tight city-centre plots. Etched-effect and satin frosted film is used in boutique and design-led Manchester hotels — particularly those in Northern Quarter M4, Ancoats M4 and Spinningfields M3 conversions — where the film finish must be indistinguishable from genuine acid-etched or sandblasted glass. Film is applied with moisture-resistant adhesive appropriate for bathroom environments.",
  },
  {
    q: "How far is WRPX from Manchester?",
    a: "Manchester is approximately 1 hour from our South Yorkshire base via the M1 and M60 ring road. Manchester hotel work is efficient — a full programme day covering multiple hotels in the M1–M4 city-centre zone is straightforward from South Yorkshire. We can survey and programme Manchester hotel installations without significant mobilisation overhead.",
  },
  {
    q: "Can you install window film in Manchester hotels around guest occupancy?",
    a: "Yes — we work room by room in an operating Manchester hotel, co-ordinating with housekeeping to install in unoccupied rooms as they become available. En-suite bathroom windows typically take 30–45 minutes. For glazed common areas — lobbies, bars, restaurants and meeting rooms — we offer overnight or early-morning access to avoid working in front of guests. Manchester hotels with high midweek corporate and conference occupancy are well suited to early-morning lobby installations.",
  },
  {
    q: "Do you cover MediaCityUK hotels and airport hotels near Manchester?",
    a: "Yes — the MediaCityUK cluster in Salford Quays M50 and the Manchester Airport hotel zone in M90 and the surrounding SK9/WA15 corridor are both within our Manchester day programme. MediaCityUK hotels have a high proportion of glass-facade glazing with consistent solar control demand. Airport hotels serving Manchester Airport have a distinct mix of glazed lounges and dining areas with solar control requirements and en-suite bathroom frosted film demand. Both zones combine efficiently with city-centre Manchester on the same programme.",
  },
];

export default function HotelWindowFilmManchesterPage() {
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
            <span className="text-foreground">Manchester</span>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="border-b border-border bg-card py-16 md:py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <p className="text-sm font-medium uppercase tracking-wide text-accent">
            Window Film · Manchester Hotels
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Hotel window film — Manchester
          </h1>
          <p className="mt-5 text-lg text-muted leading-relaxed">
            WRPX installs solar control film, frosted privacy film and Part M glass
            manifestation for hotels across Manchester and Greater Manchester. City-centre
            M1 Piccadilly, Deansgate M3, Spinningfields M3, Northern Quarter M4, Ancoats M4
            and MediaCityUK M50 — work scheduled around guest occupancy, programmed from
            our South Yorkshire base approximately 1 hour from Manchester city centre.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact/" className="btn-primary">
              Request a Manchester Hotel Survey →
            </Link>
            <Link href="/window-film/hotel-window-film/" className="btn-secondary">
              Hotel Window Film Overview
            </Link>
          </div>
        </div>
      </section>

      {/* Manchester hotel context */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Manchester hotel market — where window film is needed
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              Manchester has one of the UK&apos;s largest and most competitive hotel markets
              outside London, driven by a major financial and professional services sector,
              the media and technology industry centred on MediaCityUK and Salford Quays,
              two major universities, significant conference and exhibition activity at the
              Manchester Central convention complex, and a large leisure and events market
              anchored by two Premier League football clubs.
            </p>
            <p>
              The concentration of modern glass-tower and glass-curtain-wall hotels in
              Manchester city centre — particularly around Piccadilly M1, Deansgate M3,
              Spinningfields M3 and the southern M2 Castlefield zone — creates consistent
              demand for solar control film. South and west-facing guest rooms in these
              properties accumulate substantial heat gain during the summer months. Solar
              control film is the primary specification for these hotels, reducing heat
              gain by 40–80% without replacing glazing, blocking natural light or altering
              the exterior building appearance.
            </p>
            <p>
              Boutique and design-led Manchester hotels — concentrated in the Northern
              Quarter M4, Ancoats M4 and the emerging Mayfield development — have a
              consistent requirement for high-quality etched-effect and satin frosted
              privacy film in en-suite bathrooms, ground-floor street-level glazing and
              internal partitioned spaces. These properties have design-conscious
              specifications: film must be credibly indistinguishable from genuine
              sandblasted or acid-etched glass.
            </p>
            <p>
              WRPX is based in South Yorkshire, approximately 1 hour east of Manchester
              city centre via the M1 and M60. Manchester hotel work runs efficiently from
              our base — multiple hotels on a single city-centre day programme is
              straightforward, and we can survey and programme installations without
              significant mobilisation overhead.
            </p>
          </div>
        </div>
      </section>

      {/* Film types */}
      <section className="bg-card px-4 py-16">
          <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-2xl font-semibold text-foreground md:text-3xl">
            Window film applications for Manchester hotels
          </h2>
          <div className="grid gap-8 lg:grid-cols-3">
            <div className="card-float p-8">
              <h3 className="text-xl font-semibold text-foreground">Solar control film</h3>
              <p className="mt-4 text-muted leading-relaxed">
                Reduces solar heat gain in Manchester hotel bedrooms, glazed lounges and
                atrium spaces by 40–80%. Particularly effective in the glass-tower hotels
                around Piccadilly M1, Deansgate M3 and Spinningfields M3. Guest rooms
                stay comfortable without external shading systems that block views or
                change the building appearance.
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
                En-suite bathroom windows, ground-floor guest room glazing overlooked
                from streets and car parks, and internal glazed partitions in Manchester
                hotel bars and meeting rooms. Etched-effect satin film for Northern
                Quarter and Ancoats boutique hotels — a finish indistinguishable from
                genuine sandblasted glass.
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
                and glazed conference partitions across Manchester hotels. Applied as
                dots, stripe bands or custom patterns at 850mm and 1500mm heights. We
                assess compliance requirements at survey and provide a written scope
                before any installation.
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
            Manchester hotel zones we cover
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="card-float p-5">
              <h3 className="font-semibold text-foreground">
                Manchester Piccadilly and city centre M1
              </h3>
              <p className="mt-2 text-sm text-muted">
                The M1 Piccadilly cluster — branded corporate hotels and glass-tower
                operators serving the main rail interchange. High solar control demand
                in south and west-facing guest rooms. Full-height lobby glazing with
                manifestation requirements across the largest properties.
              </p>
            </div>
            <div className="card-float p-5">
              <h3 className="font-semibold text-foreground">
                Deansgate and Spinningfields M3
              </h3>
              <p className="mt-2 text-sm text-muted">
                The Deansgate M3 and Spinningfields M3 hotel cluster — glass-curtain-wall
                properties serving the financial district and legal quarter. Consistent
                solar control demand on west-facing elevations and glazed restaurant and
                lobby frontages. Boutique and design-led conversions with etched-effect
                frosted film requirements.
              </p>
            </div>
            <div className="card-float p-5">
              <h3 className="font-semibold text-foreground">
                Northern Quarter and Ancoats M4
              </h3>
              <p className="mt-2 text-sm text-muted">
                Boutique and independent hotels in the Northern Quarter and Ancoats
                regeneration zone — converted Victorian industrial buildings with a
                mix of frosted privacy film, decorative etched-effect film and solar
                control requirements in courtyard-facing and street-level glazing.
              </p>
            </div>
            <div className="card-float p-5">
              <h3 className="font-semibold text-foreground">
                MediaCityUK and Salford Quays M50
              </h3>
              <p className="mt-2 text-sm text-muted">
                Hotels serving the BBC, ITV, dock10 and the wider MediaCityUK campus —
                a high proportion of glass-facade properties with consistent solar
                control demand. Combined efficiently with city-centre Manchester on
                the same programme via the Metrolink or the A57.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How we work */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            How we work in Manchester hotels
          </h2>
          <div className="space-y-6 text-muted leading-relaxed">
            <p>
              <strong className="text-foreground">Room-by-room around occupancy.</strong>{" "}
              We install room by room in an operating Manchester hotel — co-ordinating
              with housekeeping to work in unoccupied rooms as they check out. A standard
              en-suite bathroom window takes 30–45 minutes. Two installers can complete
              10–15 rooms in a working day depending on access scheduling.
            </p>
            <p>
              <strong className="text-foreground">
                Overnight and early-morning access.
              </strong>{" "}
              For glazed common areas — lobbies, dining rooms, bars and meeting spaces —
              we offer overnight or early-morning access. Manchester city-centre hotels
              with high midweek corporate and conference occupancy benefit from
              early-morning lobby installations before hotel operations begin at 7am.
            </p>
            <p>
              <strong className="text-foreground">
                White-label for fit-out contractors.
              </strong>{" "}
              We work white-label for fit-out contractors and facilities management
              companies on Manchester hotel refurbishment programmes. We attend under
              your company name, carry your paperwork and report to your project manager.
              Photographic sign-off provided at completion.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-3xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Manchester hotel window film — common questions
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
            Related services for Manchester hotels
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
              href="/window-film/frosted-film-manchester/"
              className="card-float p-5 hover:border-accent/60 transition-colors"
            >
              <h3 className="font-semibold text-foreground">
                Frosted window film Manchester
              </h3>
              <p className="mt-2 text-sm text-muted">
                Frosted and etched-effect privacy film across Manchester commercial and
                residential properties.
              </p>
            </Link>
            <Link
              href="/window-film/solar-control-film-manchester/"
              className="card-float p-5 hover:border-accent/60 transition-colors"
            >
              <h3 className="font-semibold text-foreground">
                Solar control film Manchester
              </h3>
              <p className="mt-2 text-sm text-muted">
                Solar control and heat-reduction film for Manchester offices, hotels and
                commercial buildings.
              </p>
            </Link>
            <Link
              href="/architectural-wrap-hotels-manchester/"
              className="card-float p-5 hover:border-accent/60 transition-colors"
            >
              <h3 className="font-semibold text-foreground">
                Hotel interior vinyl wrapping Manchester
              </h3>
              <p className="mt-2 text-sm text-muted">
                Vinyl wrapping for Manchester hotel interior surfaces — bar fronts,
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
              Planning window film for a Manchester hotel?
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              We survey Manchester hotels and provide a fixed-price scope with a programme
              tailored to your occupancy pattern. We&apos;re 1 hour from Manchester — tell
              us the property and the problem and we&apos;ll come and look.
            </p>
            <Link href="/contact/" className="btn-primary mt-8 inline-block">
              Request a Manchester Hotel Survey →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
