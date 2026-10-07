import type { Metadata } from "next";
import Link from "next/link";
import { getServiceSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Hotel Window Film Leicester | Solar Control, Privacy Film & Manifestation | WRPX",
  description:
    "Hotel window film in Leicester — solar control film for overheating city-centre guest rooms, frosted privacy film for en-suite bathrooms and ground-floor windows, Part M glass manifestation for corridors and lobby glazing. WRPX covers Leicester city centre LE1, Birstall LE4, Narborough Road LE3 and all Leicester hotel postcodes. Free survey.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/window-film/hotel-window-film-leicester/",
  },
};

const serviceSchema = getServiceSchema(
  "Hotel window film Leicester — solar control, frosted privacy film and glass manifestation",
  "Window film installation for hotels across Leicester and Leicestershire. Solar control film for guest bedrooms and glazed communal areas, frosted privacy film for en-suite bathrooms and ground-floor windows, Part M glass manifestation for corridors and lobby screens. Leicester city centre LE1, Birstall LE4, Narborough Road LE3, Highfields LE2 and all Leicester hotel postcodes. Installed around guest occupancy with minimal disruption."
);

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.wrpx.co.uk/" },
    { "@type": "ListItem", position: 2, name: "Window Film", item: "https://www.wrpx.co.uk/window-film/" },
    { "@type": "ListItem", position: 3, name: "Hotel Window Film", item: "https://www.wrpx.co.uk/window-film/hotel-window-film/" },
    { "@type": "ListItem", position: 4, name: "Leicester", item: "https://www.wrpx.co.uk/window-film/hotel-window-film-leicester/" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do you install solar control film in Leicester hotels?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — solar control film is a consistent requirement in Leicester hotels, particularly in city-centre LE1 properties with south and west-facing guest room glazing and the modern hotel stock around the Birstall LE4 retail and junction 21a corridor. Leicester city-centre hotels with significant glazed facades — including those on the inner ring road and along the De Montfort Street and Bath Lane corridors — experience guest room overheating through spring and summer. Solar control film reduces heat gain by 40–80% depending on specification, keeping rooms comfortable without external shading or glazing replacement. Leicester is approximately 50 minutes from our South Yorkshire base via the M1, making it a regular part of our East Midlands hotel programme.",
      },
    },
    {
      "@type": "Question",
      name: "What frosted film is used in Leicester hotel en-suite bathrooms?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Plain frosted film is the standard specification for en-suite bathroom windows across Leicester hotels — preventing overlooking from adjacent buildings, access roads and multi-storey car parks while maintaining natural daylight. For design-led and boutique hotels in Leicester&apos;s Cultural Quarter CV1 and the older city-centre stock around Granby Street LE1 and the New Walk Conservation Area, etched-effect and satin frosted film provides a finish indistinguishable from genuine sandblasted or acid-etched glass. Film is applied using moisture-resistant adhesive appropriate for bathroom humidity levels.",
      },
    },
    {
      "@type": "Question",
      name: "Do you cover Leicester hotels near Birstall and Junction 21a?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — the hotel cluster at Birstall LE4 near the M1 junction 21a and the Fosse Park retail destination is one of our primary Leicester zones. This area has a concentration of branded budget and mid-market hotels serving retail, light industrial and logistics workers alongside leisure guests for Leicester city events — Leicester City FC matches, the Mattioli Woods Welford Road rugby calendar and the city-centre entertainment offer. These Birstall hotels have consistent solar control requirements in south-facing guest room elevations and car-park-level bedroom windows requiring frosted privacy film.",
      },
    },
    {
      "@type": "Question",
      name: "Can you install window film in Leicester hotels around guest occupancy?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — we work room by room in an operating Leicester hotel, co-ordinating with housekeeping to install in unoccupied rooms as they check out. A standard en-suite bathroom window takes 30–45 minutes. For glazed common areas — lobbies, restaurant glazing and meeting room screens — we prefer overnight or early-morning access to avoid working in front of guests. Leicester city-centre hotels with high midweek conference and event occupancy are particularly suited to weekend installations or early-morning lobby work before front-of-house activity begins.",
      },
    },
    {
      "@type": "Question",
      name: "How far is WRPX from Leicester?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Leicester is approximately 50 minutes from our South Yorkshire base via the M1 south to junction 21 and the A5460 into Leicester city centre. The A46 Leicester orbital gives fast access to hotels across all Leicester postcodes and the county boundary — Birstall LE4 north, Narborough LE19 south-west, Highfields LE2 south-east and the A6 corridor. Leicester is a regular part of our East Midlands hotel programme — there is no mobilisation cost that makes small hotel programmes or single-building scopes unviable.",
      },
    },
  ],
};

const faqItems = faqSchema.mainEntity.map((item) => ({
  q: item.name,
  a: item.acceptedAnswer.text,
}));

export default function HotelWindowFilmLeicesterPage() {
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
            <span className="text-foreground">Leicester</span>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="border-b border-border bg-card py-16 md:py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <p className="text-sm font-medium uppercase tracking-wide text-accent">
            Window Film · Leicester Hotels
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Hotel window film — Leicester
          </h1>
          <p className="mt-5 text-lg text-muted leading-relaxed">
            WRPX installs solar control film, frosted privacy film and Part M glass
            manifestation for hotels across Leicester and Leicestershire. City-centre
            LE1, the Cultural Quarter, Birstall LE4 and the M1 junction 21a corridor
            — work scheduled around guest occupancy, programmed from our South Yorkshire
            base approximately 50 minutes from Leicester city centre via the M1.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact/" className="btn-primary">
              Request a Leicester Hotel Survey →
            </Link>
            <Link href="/window-film/hotel-window-film/" className="btn-secondary">
              Hotel Window Film Overview
            </Link>
          </div>
        </div>
      </section>

      {/* Leicester hotel context */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Leicester hotel market — where window film is needed
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              Leicester is a significant East Midlands city with a diverse and active hotel
              market. The city-centre LE1 hotel stock serves a mix of business travellers —
              driven by a substantial manufacturing, logistics and professional services
              sector — alongside event and leisure guests drawn to Leicester City FC at
              the King Power Stadium LE2 and the Mattioli Woods Welford Road rugby ground
              LE2. City-centre hotels range from branded corporate properties on the inner
              ring road to independently operated boutique hotels in the Granby Street
              and New Walk corridor.
            </p>
            <p>
              The Birstall LE4 zone north of Leicester, close to the M1 junction 21a
              and the Fosse Park retail destination, has its own hotel cluster. These
              properties — predominantly branded budget and mid-market hotels — serve
              the retail workforce, light industrial and logistics businesses in the
              M1 corridor, and the growing leisure market from the city events calendar.
              Birstall hotels have consistent solar control requirements on south-facing
              guest room elevations and frosted privacy film requirements for bathrooms
              overlooking car parks and service areas.
            </p>
            <p>
              Boutique and independently run Leicester hotels — particularly those in
              the Cultural Quarter LE1 and the New Walk Conservation Area — have a
              higher specification requirement for privacy film finishes. These
              properties attract a design-conscious guest demographic and sit in
              period buildings where the window treatment must match the hotel&apos;s
              interior character. Etched-effect and satin frosted film, applied
              correctly, is indistinguishable from genuine sandblasted or acid-etched
              glass in these environments.
            </p>
            <p>
              WRPX is based in South Yorkshire, approximately 50 minutes north of
              Leicester city centre via the M1 to junction 21. Leicester hotel work
              forms a regular part of our East Midlands programme — the A46 Leicester
              orbital gives direct access to hotels across all city postcodes and the
              county boundary from the M1 exit, making efficient multi-hotel programmes
              practical within a single working day.
            </p>
          </div>
        </div>
      </section>

      {/* Film types */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-2xl font-semibold text-foreground md:text-3xl">
            Window film applications for Leicester hotels
          </h2>
          <div className="grid gap-8 lg:grid-cols-3">
            <div className="card-float p-8">
              <h3 className="text-xl font-semibold text-foreground">Solar control film</h3>
              <p className="mt-4 text-muted leading-relaxed">
                Reduces solar heat gain in Leicester hotel guest rooms, glazed lounges
                and meeting spaces by 40–80%. Particularly effective in Birstall LE4
                hotels and modern city-centre properties with large south or west-facing
                guest room windows. Rooms stay comfortable through summer without
                replacing glazing or fitting external shading.
              </p>
              <Link href="/window-film/solar-control-film/" className="mt-6 inline-block text-sm text-accent hover:underline">
                Solar control film details →
              </Link>
            </div>
            <div className="card-float p-8">
              <h3 className="text-xl font-semibold text-foreground">Frosted privacy film</h3>
              <p className="mt-4 text-muted leading-relaxed">
                En-suite bathroom windows, ground-floor guest room glazing overlooked
                from car parks or streets, and internal glazed partitions in Leicester
                hotel bars, restaurants and meeting rooms. Etched-effect satin film
                for Cultural Quarter and New Walk boutique hotels where the finish must
                read as genuine sandblasted glass.
              </p>
              <Link href="/window-film/frosted-window-film/" className="mt-6 inline-block text-sm text-accent hover:underline">
                Frosted window film details →
              </Link>
            </div>
            <div className="card-float p-8">
              <h3 className="text-xl font-semibold text-foreground">Glass manifestation</h3>
              <p className="mt-4 text-muted leading-relaxed">
                Part M compliance for full-height corridor glazing, glass lobby screens
                and glazed conference partitions across Leicester hotels. Applied as dots,
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

      {/* Leicester hotel zones */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Leicester hotel zones we cover
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="card-float p-5">
              <h3 className="font-semibold text-foreground">Leicester city centre LE1</h3>
              <p className="mt-2 text-sm text-muted">Branded corporate hotels, boutique and independently operated properties in the LE1 core. Mixed solar control, privacy film and glass manifestation requirements across a range of building types — from converted Victorian commercial buildings on Granby Street to modern hotel builds on the inner ring road and the St Nicholas Circle zone.</p>
            </div>
            <div className="card-float p-5">
              <h3 className="font-semibold text-foreground">Cultural Quarter and New Walk LE1/LE2</h3>
              <p className="mt-2 text-sm text-muted">Boutique and design-led hotels in Leicester&apos;s Cultural Quarter and the New Walk Conservation Area. Higher specification requirement for etched-effect and satin frosted film — the finish must be indistinguishable from genuine sandblasted glass in properties with conservation area character and a design-conscious guest demographic.</p>
            </div>
            <div className="card-float p-5">
              <h3 className="font-semibold text-foreground">Birstall and M1 J21a LE4</h3>
              <p className="mt-2 text-sm text-muted">Hotels north of Leicester at Birstall LE4 serving Fosse Park retail, M1 corridor logistics and the city&apos;s events calendar. Consistent solar control on south-facing guest room elevations, frosted privacy film for bathrooms overlooking car parks and service roads, and Part M manifestation in glazed lobby and breakfast room areas.</p>
            </div>
            <div className="card-float p-5">
              <h3 className="font-semibold text-foreground">Narborough Road and LE19 south-west</h3>
              <p className="mt-2 text-sm text-muted">Hotels and travel lodges along the Narborough Road LE3 and Enderby LE19 corridor — budget and mid-market properties serving the Meridian Business Park, the MIRA Technology Park and the wider south-west Leicester commercial belt. Privacy film and solar control are the primary requirements in this zone.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How we work */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            How we work in Leicester hotels
          </h2>
          <div className="space-y-6 text-muted leading-relaxed">
            <p>
              <strong className="text-foreground">Room-by-room around occupancy.</strong>{" "}
              We install room by room in an operating Leicester hotel — co-ordinating with
              housekeeping to work in unoccupied rooms as guests check out. A standard
              en-suite bathroom window takes 30–45 minutes. Two installers can complete
              10–15 rooms in a working day depending on access scheduling and glazing
              complexity.
            </p>
            <p>
              <strong className="text-foreground">Overnight and early-morning access.</strong>{" "}
              For glazed common areas — lobbies, dining rooms and meeting spaces — we
              offer overnight or early-morning access to avoid working in front of guests.
              Leicester city-centre hotels with strong midweek conference occupancy are
              particularly suited to early-morning lobby installations before the day
              starts.
            </p>
            <p>
              <strong className="text-foreground">White-label for fit-out contractors.</strong>{" "}
              We work white-label for fit-out contractors and facilities management
              companies on Leicester hotel refurbishment programmes. We attend under your
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
            Leicester hotel window film — common questions
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
            Related services for Leicester hotels
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <Link href="/window-film/hotel-window-film/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Hotel window film — full overview</h3>
              <p className="mt-2 text-sm text-muted">National service page covering all hotel window film applications, film types and the installation process.</p>
            </Link>
            <Link href="/window-film/solar-control-film-leicester/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Solar control film Leicester</h3>
              <p className="mt-2 text-sm text-muted">Solar control and heat-reduction film across Leicester commercial and residential properties.</p>
            </Link>
            <Link href="/window-film/frosted-film-leicester/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Frosted window film Leicester</h3>
              <p className="mt-2 text-sm text-muted">Frosted and etched-effect privacy film for Leicester offices, commercial premises and residential properties.</p>
            </Link>
            <Link href="/architectural-wrap-hotels-leicester/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Hotel interior vinyl wrapping Leicester</h3>
              <p className="mt-2 text-sm text-muted">Vinyl wrapping for Leicester hotel interior surfaces — kitchen areas, bar fronts, corridor doors and fitted furniture.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-20">
        <div className="container mx-auto max-w-3xl">
          <div className="card-float border-2 border-accent/40 p-10 text-center md:p-12">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              Planning window film for a Leicester hotel?
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              We survey Leicester hotels and provide a fixed-price scope with a programme
              tailored to your occupancy pattern. We&apos;re 50 minutes from Leicester via
              the M1 — tell us the property and the problem and we&apos;ll come and look.
            </p>
            <Link href="/contact/" className="btn-primary mt-8 inline-block">
              Request a Leicester Hotel Survey →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
