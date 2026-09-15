import type { Metadata } from "next";
import Link from "next/link";
import { getServiceSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Hotel Window Film Derby | Solar Control, Privacy Film & Manifestation | WRPX",
  description:
    "Hotel window film in Derby — solar control film for overheating city-centre guest rooms and Pride Park hotels, frosted privacy film for en-suite bathrooms and ground-floor windows, Part M glass manifestation for corridors and lobby glazing. WRPX covers Derby city centre DE1, Pride Park DE24, Friar Gate DE1 and all Derby hotel postcodes. Free survey.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/window-film/hotel-window-film-derby/",
  },
};

const serviceSchema = getServiceSchema(
  "Hotel window film Derby — solar control, frosted privacy film and glass manifestation",
  "Window film installation for hotels across Derby and Derbyshire. Solar control film for guest bedrooms and glazed communal areas, frosted privacy film for en-suite bathrooms and ground-floor windows, Part M glass manifestation for corridors and lobby screens. Derby city centre DE1, Pride Park DE24, Friar Gate DE1, the Cathedral Quarter DE1 and all Derby hotel postcodes. Installed around guest occupancy with minimal disruption."
);

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.wrpx.co.uk/" },
    { "@type": "ListItem", position: 2, name: "Window Film", item: "https://www.wrpx.co.uk/window-film/" },
    { "@type": "ListItem", position: 3, name: "Hotel Window Film", item: "https://www.wrpx.co.uk/window-film/hotel-window-film/" },
    { "@type": "ListItem", position: 4, name: "Derby", item: "https://www.wrpx.co.uk/window-film/hotel-window-film-derby/" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do you install solar control film in Derby hotels?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — solar control film is a growing requirement in Derby hotels, particularly in properties around Pride Park DE24 and the modern glass-facade hotels near Derby city centre. Pride Park hotels serving Derby County FC's ground and the stadium business district have significant south and west-facing glazing on guest room elevations and glazed communal areas. Solar control film reduces heat gain by up to 80%, keeping guest rooms comfortable through the summer months without external shading, glazing replacement or air conditioning upgrades.",
      },
    },
    {
      "@type": "Question",
      name: "What frosted film is suitable for Derby hotel en-suite bathrooms?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Plain frosted film is the standard specification for en-suite bathroom windows across Derby hotels — preventing overlooking while maintaining natural daylight. For boutique and design-led Derby properties in the Cathedral Quarter DE1 and Friar Gate DE1 conservation area, etched-effect and satin frosted film provides a finish indistinguishable from sandblasted or acid-etched glass. Film is applied using moisture-resistant adhesive appropriate for bathroom environments and the humidity levels in hotel en-suite spaces.",
      },
    },
    {
      "@type": "Question",
      name: "Do you cover Derby Pride Park hotels near the football stadium?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — Pride Park DE24 is one of our primary Derby hotel zones. The hotel cluster around Pride Park Stadium, the Westfield Retail Park and the business park east of the city centre includes branded corporate hotels and budget properties with consistent solar control, privacy film and glass manifestation requirements. Pride Park is approximately 8 minutes from Derby city centre and is included in all Derby hotel survey and installation programmes.",
      },
    },
    {
      "@type": "Question",
      name: "Can you install window film in Derby hotels around guest occupancy?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — we work room by room in an operating Derby hotel, co-ordinating with housekeeping to install in unoccupied rooms as they check out. En-suite bathroom windows typically take 30–45 minutes. For glazed common areas — lobbies, restaurants and meeting room glazing — we prefer overnight or early-morning access to avoid working in front of guests. Derby hotels with high midweek business occupancy are particularly suited to weekend installations or early-morning lobby work before front-of-house activity begins.",
      },
    },
    {
      "@type": "Question",
      name: "How far is WRPX from Derby?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Derby is approximately 35–40 minutes from our South Yorkshire base via the M1 south to junction 25 and the A52 into Derby city centre. Derby is a regular part of our East Midlands day programme — there is no mobilisation overhead that makes small hotel programmes unviable. We survey Derby hotels and provide a fixed scope with programme tailored to occupancy within a short lead time.",
      },
    },
  ],
};

const faqItems = [
  {
    q: "Do you install solar control film in Derby hotels?",
    a: "Yes — solar control film is a growing requirement in Derby hotels, particularly in properties around Pride Park DE24 and the modern glass-facade hotels near Derby city centre. Pride Park hotels serving Derby County FC's ground and the stadium business district have significant south and west-facing glazing on guest room elevations and glazed communal areas. Solar control film reduces heat gain by up to 80%, keeping guest rooms comfortable through the summer months without external shading, glazing replacement or air conditioning upgrades.",
  },
  {
    q: "What frosted film is suitable for Derby hotel en-suite bathrooms?",
    a: "Plain frosted film is the standard specification for en-suite bathroom windows across Derby hotels — preventing overlooking while maintaining natural daylight. For boutique and design-led Derby properties in the Cathedral Quarter DE1 and Friar Gate DE1 conservation area, etched-effect and satin frosted film provides a finish indistinguishable from sandblasted or acid-etched glass. Film is applied using moisture-resistant adhesive appropriate for bathroom environments and the humidity levels in hotel en-suite spaces.",
  },
  {
    q: "Do you cover Derby Pride Park hotels near the football stadium?",
    a: "Yes — Pride Park DE24 is one of our primary Derby hotel zones. The hotel cluster around Pride Park Stadium, the Westfield Retail Park and the business park east of the city centre includes branded corporate hotels and budget properties with consistent solar control, privacy film and glass manifestation requirements. Pride Park is approximately 8 minutes from Derby city centre and is included in all Derby hotel survey and installation programmes.",
  },
  {
    q: "Can you install window film in Derby hotels around guest occupancy?",
    a: "Yes — we work room by room in an operating Derby hotel, co-ordinating with housekeeping to install in unoccupied rooms as they check out. En-suite bathroom windows typically take 30–45 minutes. For glazed common areas — lobbies, restaurants and meeting room glazing — we prefer overnight or early-morning access to avoid working in front of guests. Derby hotels with high midweek business occupancy are particularly suited to weekend installations or early-morning lobby work before front-of-house activity begins.",
  },
  {
    q: "How far is WRPX from Derby?",
    a: "Derby is approximately 35–40 minutes from our South Yorkshire base via the M1 south to junction 25 and the A52 into Derby city centre. Derby is a regular part of our East Midlands day programme — there is no mobilisation overhead that makes small hotel programmes unviable. We survey Derby hotels and provide a fixed scope with programme tailored to occupancy within a short lead time.",
  },
];

export default function HotelWindowFilmDerbyPage() {
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
            <span className="text-foreground">Derby</span>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="border-b border-border bg-card py-16 md:py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <p className="text-sm font-medium uppercase tracking-wide text-accent">
            Window Film · Derby Hotels
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Hotel window film — Derby
          </h1>
          <p className="mt-5 text-lg text-muted leading-relaxed">
            WRPX installs solar control film, frosted privacy film and Part M glass
            manifestation for hotels across Derby and Derbyshire. City-centre DE1,
            the Cathedral Quarter, Friar Gate and Pride Park DE24 — work scheduled
            around guest occupancy, programmed from our South Yorkshire base approximately
            35 minutes from Derby city centre via the M1.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact/" className="btn-primary">
              Request a Derby Hotel Survey →
            </Link>
            <Link href="/window-film/hotel-window-film/" className="btn-secondary">
              Hotel Window Film Overview
            </Link>
          </div>
        </div>
      </section>

      {/* Derby hotel context */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Derby hotel market — where window film is needed
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              Derby is a significant East Midlands city with an active hotel market driven
              by a large manufacturing and engineering sector — including Rolls-Royce, Toyota
              and a wide supply chain — alongside growing retail, leisure and event tourism.
              The city-centre DE1 hotel stock ranges from branded corporate properties around
              the Cathedral Quarter and Friar Gate to independent boutique hotels in the older
              conservation buildings that line the city&apos;s historic core.
            </p>
            <p>
              Pride Park DE24, east of the city centre, has its own hotel cluster. These
              properties serve the business park, the stadium events calendar at Derby County
              FC and the retail catchment around the Westfield complex. Pride Park hotels have
              a consistent demand for solar control film in south and west-facing guest rooms
              — the flat, low-rise building stock in this area catches significant afternoon
              sun — and frosted privacy film in bathrooms overlooking car parks and service areas.
            </p>
            <p>
              Boutique and individually styled Derby hotels — particularly those in the
              Cathedral Quarter and the Friar Gate conservation district — have a higher
              specification requirement for frosted privacy and etched-effect film. These
              properties sit in Grade II listed and conservation-area buildings where the
              window treatment must be indistinguishable from genuine sandblasted or
              acid-etched glass to satisfy both guest expectations and any planning or
              listed building requirements.
            </p>
            <p>
              WRPX is based in South Yorkshire, approximately 35 minutes north of Derby
              city centre via the M1 to junction 25 and the A52. Derby hotel work forms
              a regular part of our East Midlands programme — there is no mobilisation
              cost premium that makes small installations or single-floor programmes
              unviable.
            </p>
          </div>
        </div>
      </section>

      {/* Film types */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-2xl font-semibold text-foreground md:text-3xl">
            Window film applications for Derby hotels
          </h2>
          <div className="grid gap-8 lg:grid-cols-3">
            <div className="card-float p-8">
              <h3 className="text-xl font-semibold text-foreground">Solar control film</h3>
              <p className="mt-4 text-muted leading-relaxed">
                Reduces solar heat gain in Derby hotel bedrooms, glazed lounges and
                meeting spaces by 40–80%. Particularly effective in Pride Park DE24
                hotels and modern city-centre properties with large south or west-facing
                guest room windows. Guest rooms stay comfortable without replacing glazing
                or fitting external shading that would alter the building appearance.
              </p>
              <Link href="/window-film/solar-control-film/" className="mt-6 inline-block text-sm text-accent hover:underline">
                Solar control film details →
              </Link>
            </div>
            <div className="card-float p-8">
              <h3 className="text-xl font-semibold text-foreground">Frosted privacy film</h3>
              <p className="mt-4 text-muted leading-relaxed">
                En-suite bathroom windows, ground-floor guest room glazing overlooked
                from car parks or streets, and internal glazed partitions in Derby hotel
                bars, restaurants and meeting rooms. Etched-effect satin film for
                Cathedral Quarter and Friar Gate boutique hotels where the finish must
                pass as genuine sandblasted glass.
              </p>
              <Link href="/window-film/frosted-window-film/" className="mt-6 inline-block text-sm text-accent hover:underline">
                Frosted window film details →
              </Link>
            </div>
            <div className="card-float p-8">
              <h3 className="text-xl font-semibold text-foreground">Glass manifestation</h3>
              <p className="mt-4 text-muted leading-relaxed">
                Part M compliance for full-height corridor glazing, glass lobby screens
                and glazed conference partitions across Derby hotels. Applied as dots,
                stripe bands or custom patterns at 850mm and 1500mm heights. We assess
                compliance at survey and provide a written scope before installation.
              </p>
              <Link href="/window-film/glass-manifestation/" className="mt-6 inline-block text-sm text-accent hover:underline">
                Glass manifestation details →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Derby hotel zones */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Derby hotel zones we cover
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="card-float p-5">
              <h3 className="font-semibold text-foreground">Derby city centre DE1</h3>
              <p className="mt-2 text-sm text-muted">Branded corporate hotels, boutique and independently operated properties in the city-centre DE1 core. Mixed solar control, privacy film and glass manifestation requirements across a variety of building ages and styles — from converted Victorian and Edwardian commercial buildings to modern hotel builds on the inner ring road.</p>
            </div>
            <div className="card-float p-5">
              <h3 className="font-semibold text-foreground">Cathedral Quarter and Friar Gate DE1</h3>
              <p className="mt-2 text-sm text-muted">Boutique and design-led hotels in Derby&apos;s conservation area and Cathedral Quarter. Higher specification requirement for etched-effect and satin frosted film — the finish must be indistinguishable from genuine sandblasted glass in properties subject to conservation area expectations and the design-conscious guest demographic these hotels attract.</p>
            </div>
            <div className="card-float p-5">
              <h3 className="font-semibold text-foreground">Pride Park DE24</h3>
              <p className="mt-2 text-sm text-muted">Hotels east of the city serving Derby County FC&apos;s ground, the Pride Park business district and the Westfield Retail Park. Consistent solar control requirement on south and west-facing guest room elevations, frosted privacy film for bathrooms and ground-floor glazing overlooking car parks, and Part M manifestation in glazed lobby and corridor areas.</p>
            </div>
            <div className="card-float p-5">
              <h3 className="font-semibold text-foreground">Derby south and A38 corridor</h3>
              <p className="mt-2 text-sm text-muted">Hotels and travel lodges along the A38 south of Derby city centre and the Mickleover DE3 and Sinfin DE24 zones — budget and mid-market properties serving the Rolls-Royce aerospace complex, the Toyota manufacturing site and the wider south Derby commercial belt. Privacy film and solar control are the primary requirements in this zone.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How we work */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            How we work in Derby hotels
          </h2>
          <div className="space-y-6 text-muted leading-relaxed">
            <p>
              <strong className="text-foreground">Room-by-room around occupancy.</strong>{" "}
              We install room by room in an operating Derby hotel — co-ordinating with
              housekeeping to work in unoccupied rooms as guests check out. A standard
              en-suite bathroom window takes 30–45 minutes. Two installers can complete
              10–15 rooms in a working day depending on access scheduling and the
              complexity of the glazing.
            </p>
            <p>
              <strong className="text-foreground">Overnight and early-morning access.</strong>{" "}
              For glazed common areas — lobbies, dining rooms and meeting spaces — we
              offer overnight or early-morning access to avoid working in front of guests.
              Derby city-centre hotels with strong midweek business occupancy are
              particularly suited to early-morning lobby installations before the day
              starts.
            </p>
            <p>
              <strong className="text-foreground">White-label for fit-out contractors.</strong>{" "}
              We work white-label for fit-out contractors and facilities management
              companies on Derby hotel refurbishment programmes. We attend under your
              company name, carry your paperwork and report to your project manager.
              Photographic sign-off provided at completion.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-3xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Derby hotel window film — common questions
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
            Related services for Derby hotels
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <Link href="/window-film/hotel-window-film/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Hotel window film — full overview</h3>
              <p className="mt-2 text-sm text-muted">National service page covering all hotel window film applications, film types and the installation process.</p>
            </Link>
            <Link href="/window-film/solar-control-film-derby/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Solar control film Derby</h3>
              <p className="mt-2 text-sm text-muted">Solar control and heat-reduction film across Derby commercial and residential properties.</p>
            </Link>
            <Link href="/window-film/frosted-film-derby/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Frosted window film Derby</h3>
              <p className="mt-2 text-sm text-muted">Frosted and etched-effect privacy film for Derby offices, commercial premises and residential properties.</p>
            </Link>
            <Link href="/architectural-wrap-hotels-derby/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Hotel interior vinyl wrapping Derby</h3>
              <p className="mt-2 text-sm text-muted">Vinyl wrapping for Derby hotel interior surfaces — kitchen areas, bar fronts, corridor doors and fitted furniture.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-20">
        <div className="container mx-auto max-w-3xl">
          <div className="card-float border-2 border-accent/40 p-10 text-center md:p-12">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              Planning window film for a Derby hotel?
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              We survey Derby hotels and provide a fixed-price scope with a programme
              tailored to your occupancy pattern. We&apos;re 35 minutes from Derby via the
              M1 — tell us the property and the problem and we&apos;ll come and look.
            </p>
            <Link href="/contact/" className="btn-primary mt-8 inline-block">
              Request a Derby Hotel Survey →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
