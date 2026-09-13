import type { Metadata } from "next";
import Link from "next/link";
import { getServiceSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Hotel Window Film Leeds | Solar Control, Privacy Film & Manifestation | WRPX",
  description:
    "Hotel window film in Leeds — solar control film for overheating city-centre guest rooms, frosted privacy film for en-suite bathrooms and ground-floor windows, Part M glass manifestation for corridors and lobby glazing. WRPX covers Leeds city centre LS1, the First Direct Arena LS2, Headingley LS6 and all Leeds hotel postcodes. Free survey.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/window-film/hotel-window-film-leeds/",
  },
};

const serviceSchema = getServiceSchema(
  "Hotel window film Leeds — solar control, frosted privacy film and glass manifestation",
  "Window film installation for hotels across Leeds and West Yorkshire. Solar control film for guest bedrooms and glazed communal areas, frosted privacy film for en-suite bathrooms and ground-floor windows, Part M glass manifestation for corridors and lobby screens. Leeds city centre LS1, the First Direct Arena LS2, Headingley LS6, Victoria Gate LS2 and all Leeds hotel postcodes. Installed around guest occupancy with minimal disruption."
);

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.wrpx.co.uk/" },
    { "@type": "ListItem", position: 2, name: "Window Film", item: "https://www.wrpx.co.uk/window-film/" },
    { "@type": "ListItem", position: 3, name: "Hotel Window Film", item: "https://www.wrpx.co.uk/window-film/hotel-window-film/" },
    { "@type": "ListItem", position: 4, name: "Leeds", item: "https://www.wrpx.co.uk/window-film/hotel-window-film-leeds/" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do you install solar control film in Leeds hotels?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — solar control film is a significant and growing part of our Leeds hotel work. Leeds city centre has a large concentration of modern glass-facade hotels in LS1 and LS2 — particularly around the Headrow, Boar Lane and the Victoria Gate development — where south and west-facing guest rooms overheat from spring through autumn. Solar control film reduces heat gain by up to 80%, keeping guest rooms comfortable without replacing glazing or fitting external shading that would obstruct views or alter the building appearance.",
      },
    },
    {
      "@type": "Question",
      name: "What types of window film do Leeds hotel bathrooms need?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Frosted privacy film is the standard specification for en-suite bathroom windows across Leeds hotels. Plain frosted film prevents overlooking while maintaining natural daylight. Etched-effect and satin frosted film is used in boutique and luxury Leeds hotels — including the Dakota and similar design-led properties — where the finish must be indistinguishable from sandblasted glass. Film is applied using moisture-resistant adhesive appropriate for bathroom environments.",
      },
    },
    {
      "@type": "Question",
      name: "Do you cover Leeds Headingley hotels near the cricket ground?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — Headingley LS6, the area around Headingley Cricket Ground and the surrounding student and visitor accommodation belt is within our regular Leeds programme. Hotels and guesthouses in the Headingley, Hyde Park LS6 and the Kirkstall Road LS5 corridor are all covered on the same Leeds day programme.",
      },
    },
    {
      "@type": "Question",
      name: "Can you install window film in Leeds hotels around guest occupancy?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — we work room by room in an operating Leeds hotel, co-ordinating with housekeeping to install in unoccupied rooms and moving systematically through the building. En-suite bathroom windows typically take 30–45 minutes. For glazed common areas — lobbies, restaurants and meeting room glazing — we prefer overnight or early-morning access to avoid working in front of guests. We programme around your occupancy pattern.",
      },
    },
    {
      "@type": "Question",
      name: "Do you cover Leeds Bradford Airport hotels?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — the airport hotel cluster in the LS19 Yeadon zone is within our Leeds day programme. These properties serve the international and domestic flight market and have a distinct mix of frosted privacy requirements for bedroom glazing and solar control demand in the glazed lounge and dining areas. Approximately 20 minutes from Leeds city centre via the A65, they combine efficiently with city-centre Leeds hotel work on the same programme.",
      },
    },
  ],
};

const faqItems = [
  {
    q: "Do you install solar control film in Leeds hotels?",
    a: "Yes — solar control film is a significant and growing part of our Leeds hotel work. Leeds city centre has a large concentration of modern glass-facade hotels in LS1 and LS2 — particularly around the Headrow, Boar Lane and the Victoria Gate development — where south and west-facing guest rooms overheat from spring through autumn. Solar control film reduces heat gain by up to 80%, keeping guest rooms comfortable without replacing glazing or fitting external shading that would obstruct views or alter the building appearance.",
  },
  {
    q: "What types of window film do Leeds hotel bathrooms need?",
    a: "Frosted privacy film is the standard specification for en-suite bathroom windows across Leeds hotels. Plain frosted film prevents overlooking while maintaining natural daylight. Etched-effect and satin frosted film is used in boutique and luxury Leeds hotels — including the Dakota and similar design-led properties — where the finish must be indistinguishable from sandblasted glass. Film is applied using moisture-resistant adhesive appropriate for bathroom environments.",
  },
  {
    q: "Do you cover Leeds Headingley hotels near the cricket ground?",
    a: "Yes — Headingley LS6, the area around Headingley Cricket Ground and the surrounding student and visitor accommodation belt is within our regular Leeds programme. Hotels and guesthouses in the Headingley, Hyde Park LS6 and the Kirkstall Road LS5 corridor are all covered on the same Leeds day programme.",
  },
  {
    q: "Can you install window film in Leeds hotels around guest occupancy?",
    a: "Yes — we work room by room in an operating Leeds hotel, co-ordinating with housekeeping to install in unoccupied rooms and moving systematically through the building. En-suite bathroom windows typically take 30–45 minutes. For glazed common areas — lobbies, restaurants and meeting room glazing — we prefer overnight or early-morning access to avoid working in front of guests. We programme around your occupancy pattern.",
  },
  {
    q: "Do you cover Leeds Bradford Airport hotels?",
    a: "Yes — the airport hotel cluster in the LS19 Yeadon zone is within our Leeds day programme. These properties serve the international and domestic flight market and have a distinct mix of frosted privacy requirements for bedroom glazing and solar control demand in the glazed lounge and dining areas. Approximately 20 minutes from Leeds city centre via the A65, they combine efficiently with city-centre Leeds hotel work on the same programme.",
  },
];

export default function HotelWindowFilmLeedsPage() {
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
            <span className="text-foreground">Leeds</span>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="border-b border-border bg-card py-16 md:py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <p className="text-sm font-medium uppercase tracking-wide text-accent">
            Window Film · Leeds Hotels
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Hotel window film — Leeds
          </h1>
          <p className="mt-5 text-lg text-muted leading-relaxed">
            WRPX installs solar control film, frosted privacy film and Part M glass
            manifestation for hotels across Leeds and West Yorkshire. City-centre LS1,
            the First Direct Arena LS2, Victoria Gate, Headingley LS6 and Leeds Bradford
            Airport LS19 — work scheduled around guest occupancy, programmed from our
            South Yorkshire base approximately 30 minutes from Leeds city centre.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact/" className="btn-primary">
              Request a Leeds Hotel Survey →
            </Link>
            <Link href="/window-film/hotel-window-film/" className="btn-secondary">
              Hotel Window Film Overview
            </Link>
          </div>
        </div>
      </section>

      {/* Leeds hotel context */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Leeds hotel market — where window film is needed
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              Leeds has one of the largest and most active hotel markets outside London,
              driven by a major financial and professional services sector, a large student
              population, two universities, significant conference activity and a growing
              leisure and weekend break market. The city-centre LS1 and LS2 hotel stock
              includes a wide range of branded corporate hotels, boutique independent
              properties and design-led operators — each with different but consistent
              window film needs.
            </p>
            <p>
              Modern glass-facade hotels in central Leeds — particularly around the Headrow,
              Boar Lane, Victoria Gate LS2 and the Arena Quarter near the First Direct Arena
              — have significant solar gain in south and west-facing guest rooms and glazed
              communal areas. Solar control film is the primary need in these properties,
              reducing heat gain by 40–80% without replacing glazing, blocking natural light
              or disturbing the exterior appearance that sets the hotel apart in a competitive
              city-centre market.
            </p>
            <p>
              Boutique and design-led Leeds hotels — including properties in the Calls LS2,
              the Waterfront LS2 and the emerging South Bank development — have a consistent
              requirement for high-quality frosted and etched-effect privacy film in en-suite
              bathrooms, ground-floor glazing and internal partitioned spaces. The specification
              in these properties is high: film must be indistinguishable from genuine
              sandblasted or acid-etched glass.
            </p>
            <p>
              WRPX is based in South Yorkshire, approximately 30 minutes south of Leeds city
              centre via the M1. Leeds hotel work is efficient — there is no mobilisation cost
              overhead that makes small programmes unviable. We can survey and programme
              installations with short lead times and respond quickly when window film issues
              arise during refurbishment projects.
            </p>
          </div>
        </div>
      </section>

      {/* Film types */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-2xl font-semibold text-foreground md:text-3xl">
            Window film applications for Leeds hotels
          </h2>
          <div className="grid gap-8 lg:grid-cols-3">
            <div className="card-float p-8">
              <h3 className="text-xl font-semibold text-foreground">Solar control film</h3>
              <p className="mt-4 text-muted leading-relaxed">
                Reduces solar heat gain in Leeds hotel bedrooms, glazed lounges and
                atrium spaces by 40–80%. Particularly effective in the modern glass-facade
                hotels around the Headrow, Boar Lane and the First Direct Arena. Guest
                rooms stay comfortable without external shading systems that would block
                views or change the building appearance.
              </p>
              <Link href="/window-film/solar-control-film/" className="mt-6 inline-block text-sm text-accent hover:underline">
                Solar control film details →
              </Link>
            </div>
            <div className="card-float p-8">
              <h3 className="text-xl font-semibold text-foreground">Frosted privacy film</h3>
              <p className="mt-4 text-muted leading-relaxed">
                En-suite bathroom windows, ground-floor guest room windows overlooked from
                streets or car parks, and internal glazed partitions in Leeds hotel bars,
                restaurants and meeting rooms. Etched-effect satin film for boutique
                properties in the Calls, the Waterfront LS2 and South Bank — a finish
                that passes as genuine sandblasted glass.
              </p>
              <Link href="/window-film/frosted-window-film/" className="mt-6 inline-block text-sm text-accent hover:underline">
                Frosted window film details →
              </Link>
            </div>
            <div className="card-float p-8">
              <h3 className="text-xl font-semibold text-foreground">Glass manifestation</h3>
              <p className="mt-4 text-muted leading-relaxed">
                Part M compliance for full-height corridor glazing, glass lobby screens
                and glazed conference partitions across Leeds hotels. Applied as dots,
                stripe bands or custom patterns at 850mm and 1500mm heights. We assess
                compliance requirements at survey and provide a written scope before any
                installation.
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
            Leeds hotel zones we cover
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="card-float p-5">
              <h3 className="font-semibold text-foreground">Leeds city centre LS1</h3>
              <p className="mt-2 text-sm text-muted">Branded corporate hotels, boutique properties and new-build operators across the central LS1 core. Glass-facade hotels with solar control demand, boutique conversions with privacy film and decorative glass requirements, and lobby and corridor manifestation across the full city-centre hotel stock.</p>
            </div>
            <div className="card-float p-5">
              <h3 className="font-semibold text-foreground">First Direct Arena and Victoria Gate LS2</h3>
              <p className="mt-2 text-sm text-muted">Hotels serving the First Direct Arena, the Victoria Gate development and the eastern city-centre cluster. Modern glass-facade properties with consistent solar control and privacy film demand — particularly on south-facing guest room elevations and glazed entrance lobbies.</p>
            </div>
            <div className="card-float p-5">
              <h3 className="font-semibold text-foreground">Headingley and North Leeds LS6/LS8</h3>
              <p className="mt-2 text-sm text-muted">Hotels and guesthouses serving Headingley Cricket Ground and the university belt north of the city. A mix of boutique, bed-and-breakfast and serviced accommodation with frosted privacy requirements for bathroom and ground-floor glazing. Efficiently combined with city-centre Leeds on the same day programme.</p>
            </div>
            <div className="card-float p-5">
              <h3 className="font-semibold text-foreground">Leeds Bradford Airport LS19</h3>
              <p className="mt-2 text-sm text-muted">Airport hotel cluster in the LS19 Yeadon zone — transit and stay properties with glazed lounge and dining areas requiring solar control film, and en-suite bathroom frosted privacy requirements. Approximately 20 minutes from Leeds city centre via the A65.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How we work */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            How we work in Leeds hotels
          </h2>
          <div className="space-y-6 text-muted leading-relaxed">
            <p>
              <strong className="text-foreground">Room-by-room around occupancy.</strong>{" "}
              We install room by room in an operating Leeds hotel — co-ordinating with
              housekeeping to work in unoccupied rooms as they check out. A standard en-suite
              bathroom window takes 30–45 minutes. Two installers can complete 10–15 rooms
              in a working day depending on access scheduling.
            </p>
            <p>
              <strong className="text-foreground">Overnight and early-morning access.</strong>{" "}
              For glazed common areas — lobbies, dining rooms and meeting spaces — we offer
              overnight or early-morning access to avoid working in front of guests. Leeds
              city-centre hotels with high weekday business traveller occupancy are
              particularly suited to early-morning lobby installations before hotel
              operations begin.
            </p>
            <p>
              <strong className="text-foreground">White-label for fit-out contractors.</strong>{" "}
              We work white-label for fit-out contractors and facilities management companies
              on Leeds hotel refurbishment programmes. We attend under your company name,
              carry your paperwork and report to your project manager. Photographic sign-off
              provided at completion.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-3xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Leeds hotel window film — common questions
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
            Related services for Leeds hotels
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <Link href="/window-film/hotel-window-film/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Hotel window film — full overview</h3>
              <p className="mt-2 text-sm text-muted">National service page covering all hotel window film applications, film types and installation process.</p>
            </Link>
            <Link href="/window-film/hotel-window-film-sheffield/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Hotel window film Sheffield</h3>
              <p className="mt-2 text-sm text-muted">Solar control, privacy film and manifestation for Sheffield hotels — our South Yorkshire home city.</p>
            </Link>
            <Link href="/window-film/solar-control-film-leeds/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Solar control film Leeds</h3>
              <p className="mt-2 text-sm text-muted">Solar control and heat-reduction film across Leeds commercial and residential properties.</p>
            </Link>
            <Link href="/architectural-wrap-hotels-leeds/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Hotel interior vinyl wrapping Leeds</h3>
              <p className="mt-2 text-sm text-muted">Vinyl wrapping for Leeds hotel interior surfaces — kitchen areas, bar fronts, corridor doors and fitted furniture.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-20">
        <div className="container mx-auto max-w-3xl">
          <div className="card-float border-2 border-accent/40 p-10 text-center md:p-12">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              Planning window film for a Leeds hotel?
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              We survey Leeds hotels and provide a fixed-price scope with a programme
              tailored to your occupancy pattern. We&apos;re 30 minutes from Leeds — tell
              us the property and the problem and we&apos;ll come and look.
            </p>
            <Link href="/contact/" className="btn-primary mt-8 inline-block">
              Request a Leeds Hotel Survey →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
