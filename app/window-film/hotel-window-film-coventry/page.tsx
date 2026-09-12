import type { Metadata } from "next";
import Link from "next/link";
import { getServiceSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Hotel Window Film Coventry | Solar Control, Privacy Film & Manifestation | WRPX",
  description:
    "Hotel window film in Coventry — solar control film to reduce bedroom and lounge overheating, frosted privacy film for bathrooms and ground-floor rooms, and Part M glass manifestation. WRPX covers Coventry city centre CV1, the Ricoh Arena CV6, the A45 hotel corridor, Belgrade Hotel and all Coventry hotel postcodes. Free survey.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/window-film/hotel-window-film-coventry/",
  },
};

const serviceSchema = getServiceSchema(
  "Hotel window film Coventry — solar control, frosted privacy film and glass manifestation",
  "Window film installation for hotels across Coventry and Warwickshire. Solar control film for bedroom and communal area glazing, frosted privacy film for bathroom and ground-floor room windows, Part M glass manifestation for corridor and lobby glazing. Coventry city centre CV1, Ricoh Arena CV6, A45 hotel corridor, Warwick CV34, Kenilworth CV8 and Royal Leamington Spa CV31. Installed around guest occupancy — minimal disruption."
);

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.wrpx.co.uk/" },
    { "@type": "ListItem", position: 2, name: "Window Film", item: "https://www.wrpx.co.uk/window-film/" },
    { "@type": "ListItem", position: 3, name: "Hotel Window Film", item: "https://www.wrpx.co.uk/window-film/hotel-window-film/" },
    { "@type": "ListItem", position: 4, name: "Coventry", item: "https://www.wrpx.co.uk/window-film/hotel-window-film-coventry/" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do you install solar control film in Coventry hotels?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — solar control and heat-reduction film is one of the most common hotel window film requests in Coventry. South- and west-facing hotel bedrooms — particularly in the modern glass-facade hotels on the Ring Road CV1, the A45 corridor toward the NEC, and business hotels near the Ricoh Arena CV6 — overheat significantly in summer. Solar control film reduces solar heat gain by up to 80%, lowering room temperature and reducing air conditioning load without replacing the glazing or fitting external shading.",
      },
    },
    {
      "@type": "Question",
      name: "What types of window film are used in Coventry hotel bathrooms?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Frosted privacy film is the standard application for hotel bathrooms across Coventry. Plain frosted film on bathroom windows prevents overlooking while still allowing daylight. Etched-effect decorative frosted film is specified on boutique Coventry properties — particularly hotels in the Cathedral Quarter CV1 and converted Victorian properties in Kenilworth CV8 and Leamington Spa CV31 — where aesthetics matter alongside privacy. Film is applied using moisture-resistant adhesive appropriate for wet bathroom environments.",
      },
    },
    {
      "@type": "Question",
      name: "What is glass manifestation and do Coventry hotels need it?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Glass manifestation is required under Building Regulations Part M — a band or repeated marks at 850mm and 1500mm heights on large glass panels to make the glass visible and prevent collision. Full-height corridor glazing, glass lobby screens and glass partition walls in Coventry hotel function rooms all commonly require compliant manifestation. WRPX installs both plain and patterned manifestation across Coventry hotels.",
      },
    },
    {
      "@type": "Question",
      name: "Can you install hotel window film around guest occupancy in Coventry?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — we work room by room or floor by floor in an operating Coventry hotel, co-ordinating with housekeeping to install in unoccupied rooms and move systematically through the building. A typical en-suite bathroom window takes 30–45 minutes. We can also work overnight or early morning where preferred — particularly useful for Coventry city-centre hotels with high weekday business traveller occupancy.",
      },
    },
    {
      "@type": "Question",
      name: "Do you cover Warwick, Kenilworth and Leamington Spa hotels?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — Warwick CV34, Kenilworth CV8 and Royal Leamington Spa CV31 are all within our regular Coventry area programme. The A46 and A452 connect these towns efficiently, and a single Coventry area day from South Yorkshire can comfortably cover city-centre Coventry, the Warwick Castle hotel zone and Leamington Spa Regency hotels in sequence.",
      },
    },
  ],
};

const faqItems = [
  {
    q: "Do you install solar control film in Coventry hotels?",
    a: "Yes — solar control and heat-reduction film is one of the most common hotel window film requests in Coventry. South- and west-facing hotel bedrooms — particularly in the modern glass-facade hotels on the Ring Road CV1, the A45 corridor toward the NEC, and business hotels near the Ricoh Arena CV6 — overheat significantly in summer. Solar control film reduces solar heat gain by up to 80%, lowering room temperature and reducing air conditioning load without replacing the glazing or fitting external shading.",
  },
  {
    q: "What types of window film are used in Coventry hotel bathrooms?",
    a: "Frosted privacy film is the standard application for hotel bathrooms across Coventry. Plain frosted film on bathroom windows prevents overlooking while still allowing daylight. Etched-effect decorative frosted film is specified on boutique Coventry properties — particularly hotels in the Cathedral Quarter CV1 and converted Victorian properties in Kenilworth CV8 and Leamington Spa CV31 — where aesthetics matter alongside privacy. Film is applied using moisture-resistant adhesive appropriate for wet bathroom environments.",
  },
  {
    q: "What is glass manifestation and do Coventry hotels need it?",
    a: "Glass manifestation is required under Building Regulations Part M — a band or repeated marks at 850mm and 1500mm heights on large glass panels to make the glass visible and prevent collision. Full-height corridor glazing, glass lobby screens and glass partition walls in Coventry hotel function rooms all commonly require compliant manifestation. WRPX installs both plain and patterned manifestation across Coventry hotels.",
  },
  {
    q: "Can you install hotel window film around guest occupancy in Coventry?",
    a: "Yes — we work room by room or floor by floor in an operating Coventry hotel, co-ordinating with housekeeping to install in unoccupied rooms and move systematically through the building. A typical en-suite bathroom window takes 30–45 minutes. We can also work overnight or early morning where preferred — particularly useful for Coventry city-centre hotels with high weekday business traveller occupancy.",
  },
  {
    q: "Do you cover Warwick, Kenilworth and Leamington Spa hotels?",
    a: "Yes — Warwick CV34, Kenilworth CV8 and Royal Leamington Spa CV31 are all within our regular Coventry area programme. The A46 and A452 connect these towns efficiently, and a single Coventry area day from South Yorkshire can comfortably cover city-centre Coventry, the Warwick Castle hotel zone and Leamington Spa Regency hotels in sequence.",
  },
];

export default function HotelWindowFilmCoventryPage() {
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
            <span className="text-foreground">Coventry</span>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="border-b border-border bg-card py-16 md:py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <p className="text-sm font-medium uppercase tracking-wide text-accent">
            Window Film · Coventry Hotels
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Hotel window film — Coventry
          </h1>
          <p className="mt-5 text-lg text-muted leading-relaxed">
            WRPX installs solar control film, frosted privacy film and Part M glass
            manifestation for hotels across Coventry and Warwickshire. Coventry city
            centre CV1, Ricoh Arena CV6, A45 hotel corridor, Warwick CV34 and Royal
            Leamington Spa CV31 — work scheduled around guest occupancy with minimal
            disruption.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact/" className="btn-primary">
              Request a Coventry Hotel Survey →
            </Link>
            <Link href="/window-film/hotel-window-film/" className="btn-secondary">
              Hotel Window Film Overview
            </Link>
          </div>
        </div>
      </section>

      {/* Coventry hotel context */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Coventry&apos;s hotel estate — where window film is needed
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              Coventry has a substantial hotel market driven by two distinct demand bases:
              the business and conference sector centred on the city-centre CV1 and the
              Ricoh Arena CV6, and the leisure and heritage sector anchored by Warwick
              Castle CV34, the Royal Leamington Spa spa and regency hotel offer CV31, and
              Kenilworth Castle CV8. Both markets have active window film demand — for
              different reasons.
            </p>
            <p>
              City-centre Coventry business hotels and the large branded hotels on the Ring
              Road and A45 corridor include a significant proportion of modern glass-facade
              buildings where south and west-facing guest rooms overheat during the
              spring-to-autumn period. Solar control film is the primary need in these
              properties — reducing bedroom and lounge temperatures without replacing
              glazing or installing external shading systems that would change the building
              appearance.
            </p>
            <p>
              The Warwick, Kenilworth and Leamington Spa hotel market is dominated by
              independent and boutique properties, many in converted Victorian and Georgian
              buildings with smaller-paned sash windows. In these properties, frosted
              privacy film for bathroom windows and ground-floor guest room windows is the
              most consistent need — along with etched-effect decorative film for internal
              glass screens in function rooms and restaurants.
            </p>
            <p>
              WRPX is based in South Yorkshire, approximately 90 miles north of Coventry
              via the M1 and M6 — roughly 90 minutes. We programme Coventry and Warwickshire
              hotel work as a dedicated regional day, covering city-centre and out-of-town
              properties efficiently on the same visit.
            </p>
          </div>
        </div>
      </section>

      {/* Film types for hotels */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-2xl font-semibold text-foreground md:text-3xl">
            Window film applications for Coventry hotels
          </h2>
          <div className="grid gap-8 lg:grid-cols-3">
            <div className="card-float p-8">
              <h3 className="text-xl font-semibold text-foreground">Solar control film</h3>
              <p className="mt-4 text-muted leading-relaxed">
                Reduces solar heat gain in Coventry hotel bedrooms, lounges and glazed
                corridors by 40–80%. Particularly effective in the modern glass-facade
                business hotels around the Ring Road CV1 and the A45 corridor. Keeps
                guest rooms comfortable without air conditioning upgrades or external
                shading that would change the building&apos;s appearance.
              </p>
              <Link href="/window-film/solar-control-film/" className="mt-6 inline-block text-sm text-accent hover:underline">
                Solar control film details →
              </Link>
            </div>
            <div className="card-float p-8">
              <h3 className="text-xl font-semibold text-foreground">Frosted privacy film</h3>
              <p className="mt-4 text-muted leading-relaxed">
                En-suite bathroom windows, ground-floor guest room windows overlooked from
                car parks or public areas, and internal glass screens in hotel restaurants
                and function rooms. Etched-effect decorative frosted film is specified in
                Warwick and Leamington Spa boutique properties where a high-quality finish
                matters alongside privacy.
              </p>
              <Link href="/window-film/frosted-window-film/" className="mt-6 inline-block text-sm text-accent hover:underline">
                Frosted window film details →
              </Link>
            </div>
            <div className="card-float p-8">
              <h3 className="text-xl font-semibold text-foreground">Glass manifestation</h3>
              <p className="mt-4 text-muted leading-relaxed">
                Part M compliance for full-height corridor glazing, glass lobby screens
                and glass partition walls in Coventry hotel function rooms and conference
                spaces. Applied as dots or stripe bands at the correct height bands.
                We assess compliance requirements at survey and provide a scope report
                before any installation.
              </p>
              <Link href="/window-film/glass-manifestation/" className="mt-6 inline-block text-sm text-accent hover:underline">
                Glass manifestation details →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Hotels covered */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Coventry and Warwickshire hotels we cover
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="card-float p-5">
              <h3 className="font-semibold text-foreground">Coventry city centre CV1</h3>
              <p className="mt-2 text-sm text-muted">Branded business hotels, boutique properties in the Cathedral Quarter and city-centre hotels serving the Belgrade Theatre, Coventry University and the conference market. Solar control for modern glazed elevations, privacy film for bathrooms, manifestation for lobby and corridor glazing.</p>
            </div>
            <div className="card-float p-5">
              <h3 className="font-semibold text-foreground">Ricoh Arena and A45 corridor CV6</h3>
              <p className="mt-2 text-sm text-muted">Business and event hotels near the Ricoh Arena, the A45 corridor toward the NEC and the Coventry eastern fringe. Modern glass-facade properties with active solar control film demand across south and west-facing bedroom elevations.</p>
            </div>
            <div className="card-float p-5">
              <h3 className="font-semibold text-foreground">Warwick CV34 and Kenilworth CV8</h3>
              <p className="mt-2 text-sm text-muted">Boutique and independent hotels near Warwick Castle and Kenilworth Castle — converted Victorian and Georgian properties with privacy film and etched-effect decorative film requirements in bathrooms, function rooms and restaurant spaces.</p>
            </div>
            <div className="card-float p-5">
              <h3 className="font-semibold text-foreground">Royal Leamington Spa CV31 &amp; CV32</h3>
              <p className="mt-2 text-sm text-muted">Regency and spa hotels in Leamington Spa — quality independent properties with frosted privacy film for bathroom windows, etched-effect glass film for spa treatment areas and restaurant screens, and solar control for south-facing guest rooms.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How we work */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            How we work in Coventry hotels
          </h2>
          <div className="space-y-6 text-muted leading-relaxed">
            <p>
              <strong className="text-foreground">Room-by-room around occupancy.</strong>{" "}
              We install room by room in an operating hotel — co-ordinating with housekeeping
              to work in unoccupied rooms and move systematically through the building. En-suite
              bathroom windows take approximately 30–45 minutes per window. Larger solar
              control programmes can be programmed to low-occupancy periods such as midweek
              business travel troughs or post-season shoulder periods.
            </p>
            <p>
              <strong className="text-foreground">Out-of-hours and early-morning access.</strong>{" "}
              For Coventry city-centre hotels where daytime disruption is unacceptable, we
              can work overnight or from early morning to install window film in public areas,
              corridors and conference spaces before the hotel day begins. Installation in
              guest rooms is then completed during normal housekeeping cycles.
            </p>
            <p>
              <strong className="text-foreground">White-label for fit-out contractors.</strong>{" "}
              We work white-label for fit-out contractors and facilities management companies
              delivering hotel refurbishment programmes across Coventry and Warwickshire. We
              attend under your company name, carry your paperwork and report to your project
              manager throughout. Photographic sign-off at completion.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-3xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Coventry hotel window film — common questions
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
            Related services for Coventry hotels
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <Link href="/window-film/hotel-window-film/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Hotel window film — full overview</h3>
              <p className="mt-2 text-sm text-muted">National service page covering all hotel window film applications, film types and process.</p>
            </Link>
            <Link href="/window-film/hotel-window-film-birmingham/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Hotel window film Birmingham</h3>
              <p className="mt-2 text-sm text-muted">Solar control, privacy film and manifestation for Birmingham hotels and the wider West Midlands hotel market.</p>
            </Link>
            <Link href="/window-film/frosted-film-coventry/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Frosted window film Coventry</h3>
              <p className="mt-2 text-sm text-muted">Frosted and etched-effect privacy film for Coventry commercial and residential premises.</p>
            </Link>
            <Link href="/architectural-wrap-hotels-coventry/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Architectural vinyl wrapping for Coventry hotels</h3>
              <p className="mt-2 text-sm text-muted">Vinyl wrapping for hotel interior surfaces — kitchen areas, bar fronts, corridor doors and fitted furniture.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-20">
        <div className="container mx-auto max-w-3xl">
          <div className="card-float border-2 border-accent/40 p-10 text-center md:p-12">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              Planning window film for a Coventry hotel?
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              We survey Coventry and Warwickshire hotels and provide a fixed-price scope
              with a programme tailored to your occupancy pattern. Tell us the property
              and the issue — we&apos;ll come and look.
            </p>
            <Link href="/contact/" className="btn-primary mt-8 inline-block">
              Request a Coventry Hotel Survey →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
