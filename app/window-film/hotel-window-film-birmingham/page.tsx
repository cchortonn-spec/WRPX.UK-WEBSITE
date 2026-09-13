import type { Metadata } from "next";
import Link from "next/link";
import { getServiceSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Hotel Window Film Birmingham | Solar Control, Privacy Film & Manifestation | WRPX",
  description:
    "Hotel window film in Birmingham — solar control film to reduce bedroom overheating, frosted privacy film for bathrooms and ground-floor rooms, and Part M glass manifestation. WRPX covers the Grand Hotel B3, Mailbox B1, Jewellery Quarter B1, NEC B40 and all Birmingham hotel postcodes. Free survey.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/window-film/hotel-window-film-birmingham/",
  },
};

const serviceSchema = getServiceSchema(
  "Hotel window film Birmingham — solar control, frosted privacy film and glass manifestation",
  "Window film installation for hotels across Birmingham and the West Midlands. Solar control film for bedroom and communal area glazing, frosted privacy film for bathroom and ground-floor room windows, Part M glass manifestation for corridor and lobby glazing. Grand Hotel B3, Mailbox B1, Jewellery Quarter B1 boutique hotels, Brindleyplace B1, NEC B40, Solihull B90 and all Birmingham hotel postcodes. Installed around guest occupancy — minimal disruption."
);

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.wrpx.co.uk/" },
    { "@type": "ListItem", position: 2, name: "Window Film", item: "https://www.wrpx.co.uk/window-film/" },
    { "@type": "ListItem", position: 3, name: "Hotel Window Film", item: "https://www.wrpx.co.uk/window-film/hotel-window-film/" },
    { "@type": "ListItem", position: 4, name: "Birmingham", item: "https://www.wrpx.co.uk/window-film/hotel-window-film-birmingham/" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do you install solar control film in Birmingham hotels?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — solar control and heat-reduction film is one of the most requested hotel window film applications across Birmingham. South- and west-facing Birmingham hotel bedrooms — particularly in the modern glass-facade hotels around Broad Street B1, Brindleyplace B1 and the NEC B40 — overheat significantly in summer. Solar control film reduces solar heat gain by up to 80%, lowering room temperature and reducing air conditioning load without replacing the glazing.",
      },
    },
    {
      "@type": "Question",
      name: "What types of window film are used in Birmingham hotel bathrooms?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Frosted privacy film is the standard application for hotel bathrooms across Birmingham. Plain frosted film on bathroom windows prevents overlooking while still allowing daylight. Etched-effect decorative frosted film is specified on boutique Birmingham properties — particularly the Jewellery Quarter B1 and Mailbox B1 hotels — where aesthetics matter alongside privacy. Film is applied using moisture-resistant adhesive appropriate for wet bathroom environments.",
      },
    },
    {
      "@type": "Question",
      name: "What is glass manifestation and do Birmingham hotels need it?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Glass manifestation is a requirement under Building Regulations Part M — a band or repeated marks at 850mm and 1500mm heights on large glass panels to make the glass visible and prevent collision. Full-height corridor glazing, glass lobby screens and glass partition walls in Birmingham hotel function rooms all commonly require compliant manifestation. WRPX installs both plain and patterned manifestation across Birmingham hotels.",
      },
    },
    {
      "@type": "Question",
      name: "Can you install hotel window film around guest occupancy in Birmingham?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — window film installation in hotel bedrooms is worked through void periods in exactly the same way as furniture wrapping. A single hotel bedroom window typically takes 45–90 minutes to film. For common areas — lobby glazing, restaurant windows, corridor screens — we work overnight or in very early morning to avoid guest disruption. We coordinate with the Birmingham hotel&apos;s front-of-house team on access scheduling.",
      },
    },
    {
      "@type": "Question",
      name: "Do you cover Birmingham out-of-town and airport hotels?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — we cover the full Birmingham hotel market including out-of-town properties. The NEC B40 and Birmingham Airport cluster, Solihull B90 business park hotels, the M6 and M42 corridor hotels and all properties south and east of the city centre are within our regular Birmingham coverage zone. Out-of-town budget and mid-market hotels in these locations often have larger glazing areas and benefit significantly from solar control film.",
      },
    },
  ],
};

const faqItems = [
  {
    q: "Do you install solar control film in Birmingham hotels?",
    a: "Yes — solar control and heat-reduction film is one of the most requested hotel window film applications across Birmingham. South- and west-facing Birmingham hotel bedrooms — particularly in the modern glass-facade hotels around Broad Street B1, Brindleyplace B1 and the NEC B40 — overheat significantly in summer. Solar control film reduces solar heat gain by up to 80%, lowering room temperature and reducing air conditioning load without replacing the glazing.",
  },
  {
    q: "What types of window film are used in Birmingham hotel bathrooms?",
    a: "Frosted privacy film is the standard application for hotel bathrooms across Birmingham. Plain frosted film on bathroom windows prevents overlooking while still allowing daylight. Etched-effect decorative frosted film is specified on boutique Birmingham properties — particularly the Jewellery Quarter B1 and Mailbox B1 hotels — where aesthetics matter alongside privacy. Film is applied using moisture-resistant adhesive appropriate for wet bathroom environments.",
  },
  {
    q: "What is glass manifestation and do Birmingham hotels need it?",
    a: "Glass manifestation is a requirement under Building Regulations Part M — a band or repeated marks at 850mm and 1500mm heights on large glass panels to make the glass visible and prevent collision. Full-height corridor glazing, glass lobby screens and glass partition walls in Birmingham hotel function rooms all commonly require compliant manifestation. WRPX installs both plain and patterned manifestation across Birmingham hotels.",
  },
  {
    q: "Can you install hotel window film around guest occupancy in Birmingham?",
    a: "Yes — window film installation in hotel bedrooms is worked through void periods in exactly the same way as furniture wrapping. A single hotel bedroom window typically takes 45–90 minutes to film. For common areas — lobby glazing, restaurant windows, corridor screens — we work overnight or in very early morning to avoid guest disruption. We coordinate with the Birmingham hotel's front-of-house team on access scheduling.",
  },
  {
    q: "Do you cover Birmingham out-of-town and airport hotels?",
    a: "Yes — we cover the full Birmingham hotel market including out-of-town properties. The NEC B40 and Birmingham Airport cluster, Solihull B90 business park hotels, the M6 and M42 corridor hotels and all properties south and east of the city centre are within our regular Birmingham coverage zone. Out-of-town budget and mid-market hotels in these locations often have larger glazing areas and benefit significantly from solar control film.",
  },
];

export default function HotelWindowFilmBirminghamPage() {
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
            <Link href="/window-film/hotel-window-film/" className="text-accent hover:underline">Hotel Window Film</Link>
            <span className="mx-2">›</span>
            <span className="text-foreground">Birmingham</span>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="border-b border-border bg-card py-16 md:py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <p className="text-sm font-medium uppercase tracking-wide text-accent">
            Window Film · Hotels · Birmingham
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Hotel window film in Birmingham
          </h1>
          <p className="mt-5 text-lg text-muted leading-relaxed">
            WRPX installs window film across Birmingham hotels — solar control film to reduce
            bedroom overheating on south- and west-facing elevations, frosted privacy film for
            bathroom and ground-floor room windows, and Part M glass manifestation for corridor
            and lobby glazing. Installed room by room around guest occupancy across all Birmingham
            postcodes and the West Midlands hotel market.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact/" className="btn-primary">
              Request a Birmingham Hotel Film Survey →
            </Link>
            <Link href="/window-film/hotel-window-film/" className="btn-secondary">
              Hotel Window Film Overview
            </Link>
          </div>
        </div>
      </section>

      {/* Film types */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-2xl font-semibold text-foreground md:text-3xl">
            Window film types for Birmingham hotels
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Solar control film</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Reduces solar heat gain through Birmingham hotel bedroom and communal area glazing
                by up to 80%. South- and west-facing rooms in modern glass-facade Birmingham hotels
                are the highest priority — solar film cuts overheating without replacing glass or
                installing external shading.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Frosted privacy film</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Plain frosted or etched-effect film on bathroom windows, ground-floor bedroom
                windows and any Birmingham hotel glazing that requires privacy without losing
                daylight. Applied using moisture-resistant adhesive for bathroom environments.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Glass manifestation (Part M)</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Compliant manifestation bands at 850mm and 1500mm for full-height corridor glazing,
                glass lobby screens and glass partition walls in Birmingham hotel function rooms and
                conference areas. Plain or patterned — combined with frosted film where privacy is
                also needed.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Thermal / low-E film</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Reduces heat loss through single-glazed and older double-glazed windows during
                winter — relevant for older Birmingham city-centre hotel properties including
                converted Victorian and Edwardian buildings in the Jewellery Quarter B1 and
                around Colmore Row B3.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">One-way privacy film</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Reflective film that allows guests to see out while preventing the view in from
                outside during daylight. Specified on ground-floor Birmingham hotel bedrooms,
                gym and leisure areas, and spa treatment rooms where privacy matters but view
                is still required.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Decorative window vinyl</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Branded, patterned or cut-to-design vinyl on Birmingham hotel glazing — entrance
                doors, lobby windows, restaurant and bar glazing. Frosted-effect vinyl, opaque
                coloured vinyl and digitally printed designs. Often specified alongside film on
                the same Birmingham hotel installation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Applications by hotel area */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Window film across Birmingham&apos;s hotel zones
          </h2>
          <div className="space-y-6 text-muted leading-relaxed">
            <p>
              <strong className="text-foreground">City centre — Broad Street B1, Brindleyplace B1 and Colmore Row B3.</strong>{" "}
              Modern glass-facade corporate hotels in these zones have large south- and west-facing
              bedroom elevations that generate significant summer overheating complaints. Solar
              control film is the highest-value single intervention — installed room by room through
              void periods, it eliminates the most common guest comfort complaint in Birmingham
              city-centre hotels without glazing replacement or structural alteration.
            </p>
            <p>
              <strong className="text-foreground">Jewellery Quarter B1 and Mailbox B1 boutique hotels.</strong>{" "}
              Smaller room counts but higher design expectations. Etched-effect frosted film
              on bathroom windows and feature glazing is more commonly specified here than plain
              frosted — the boutique Birmingham market expects a finish that reflects the hotel&apos;s
              design positioning. The Grand Hotel Birmingham B3 corridor is the top of this market
              in the city.
            </p>
            <p>
              <strong className="text-foreground">NEC B40 and Birmingham Airport cluster.</strong>{" "}
              High-volume budget and mid-market hotels serving the NEC exhibition and conference
              market. Large glazed facades and high room counts mean solar control film programmes
              here are significant in scope. Out-of-hours installation is standard — NEC event
              cycles mean these hotels are often at 100% occupancy during show weeks and need
              film installed in the gaps.
            </p>
            <p>
              <strong className="text-foreground">Solihull B90 and M42 corridor business park hotels.</strong>{" "}
              Mid-market corporate hotels serving Jaguar Land Rover, the M42 business parks and the
              Solihull commuter market. Standard solar control and frosted film programmes — worked
              through void periods with the hotel&apos;s housekeeping schedule. We cover Solihull B90
              and all B91–B93 postcodes as part of every Birmingham hotel programme.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-3xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Birmingham hotel window film — common questions
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
            Related services for Birmingham hotels
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <Link href="/window-film/hotel-window-film/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Hotel window film — full overview</h3>
              <p className="mt-2 text-sm text-muted">National service page covering all hotel window film applications, film types and process.</p>
            </Link>
            <Link href="/architectural-wrap-hotels-birmingham/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Hotel interior vinyl wrapping Birmingham</h3>
              <p className="mt-2 text-sm text-muted">Bedroom furniture, reception desks and communal area joinery wrapping for Birmingham hotels.</p>
            </Link>
            <Link href="/window-film/solar-control-film-birmingham/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Solar control film Birmingham</h3>
              <p className="mt-2 text-sm text-muted">Heat-reduction and glare-control film for Birmingham offices, hotels and commercial buildings.</p>
            </Link>
            <Link href="/window-film/frosted-film-birmingham/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Frosted window film Birmingham</h3>
              <p className="mt-2 text-sm text-muted">Privacy film, etched-effect film and glass manifestation across Birmingham and the West Midlands.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-20">
        <div className="container mx-auto max-w-3xl">
          <div className="card-float border-2 border-accent/40 p-10 text-center md:p-12">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              Need window film across your Birmingham hotel?
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Free survey across Birmingham and the West Midlands. We assess the glazing,
              specify the right film type for each elevation and application, and coordinate
              installation around your occupancy schedule.
            </p>
            <Link href="/contact/" className="btn-primary mt-8 inline-block">
              Request a Birmingham Hotel Film Survey →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
