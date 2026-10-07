import type { Metadata } from "next";
import Link from "next/link";
import { getServiceSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Restaurant Window Film Coventry | Frosted Privacy, Solar Control & Manifestation | WRPX",
  description:
    "Restaurant and bar window film across Coventry — frosted privacy film for street-facing glazing, solar control film for south and west-facing dining rooms, decorative window vinyl and glass manifestation. Cathedral Quarter CV1, Belgrade Quarter CV1, Earlsdon CV5, Foleshill Road CV6, Spon End CV1 and all Coventry restaurant districts. Overnight and out-of-hours installation.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/window-film/restaurant-window-film-coventry/",
  },
};

const serviceSchema = getServiceSchema(
  "Restaurant window film Coventry — frosted privacy film, solar control and glass manifestation",
  "Window film installation for restaurants, bars and cafés across Coventry. Frosted privacy film for street-facing glazing in the Cathedral Quarter CV1 and Earlsdon CV5, solar control film for south and west-facing dining areas, decorative window vinyl for branding and glass manifestation for large glazed panels. Overnight and out-of-hours installation — no trading disruption. Covering all Coventry restaurant and hospitality districts including Belgrade Quarter CV1, Foleshill Road CV6, Spon End CV1 and Coventry University campus CV1."
);

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.wrpx.co.uk/" },
    { "@type": "ListItem", position: 2, name: "Window Film", item: "https://www.wrpx.co.uk/window-film/" },
    { "@type": "ListItem", position: 3, name: "Window Film for Restaurants", item: "https://www.wrpx.co.uk/window-film/restaurant-window-film/" },
    { "@type": "ListItem", position: 4, name: "Coventry", item: "https://www.wrpx.co.uk/window-film/restaurant-window-film-coventry/" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do you install frosted window film for Coventry restaurants?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — frosted and privacy window film is one of the most consistent applications we carry out for Coventry restaurants and bars. Earlsdon CV5 is Coventry&apos;s premier independent dining destination: Albany Road carries a concentrated strip of independent restaurants, cafés and bars in traditional Edwardian and inter-war parade shopfronts with large street-facing windows. Half-height frosted film is the standard specification on this strip — providing seated diner privacy from a busy pedestrian street without cutting natural light from the dining room. In the Cathedral Quarter CV1, around Cathedral Lane and the streets surrounding Coventry Cathedral, converted commercial buildings and modern bar and restaurant units use frosted film and etched-effect vinyl for privacy and branding. Foleshill Road CV6 — Coventry&apos;s most diverse food corridor, carrying a high density of South Asian restaurants, specialists in Pakistani, Indian, Bangladeshi and Caribbean cuisine — features traditional shopfront glazing across the length of the street where privacy film is regularly specified to manage street visibility on a busy thoroughfare.",
      },
    },
    {
      "@type": "Question",
      name: "Can you install solar control film in Coventry restaurants?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. South and west-facing Coventry restaurants — including Earlsdon CV5 Albany Road venues with south or south-west-facing glazing, Belgrade Quarter CV1 restaurants on Corporation Street with afternoon sun exposure, and Spon End CV1 and Spon Street restaurants in the historic timber-framed streets facing south — can overheat significantly through spring and summer. Solar control film reduces solar heat gain by 40–79%, keeping dining areas comfortable without blinds or external shading structures that block the street presence or alter the character of period shopfront buildings. For Spon Street CV1 — the surviving medieval street with listed timber-framed buildings — solar control film is frequently the only practical thermal management solution given the planning constraints around modifying the external appearance of listed or conservation-area buildings.",
      },
    },
    {
      "@type": "Question",
      name: "Do you work overnight or outside trading hours in Coventry?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — overnight and early-morning installation is available across Coventry. Interior window film applications typically take 30–60 minutes per window. An Earlsdon or Cathedral Quarter restaurant with 6–8 street-facing windows can usually be completed in a single overnight session or on a Monday closed day. We co-ordinate with your front-of-house team to minimise any disruption and leave the premises clean and ready for the following morning&apos;s service.",
      },
    },
    {
      "@type": "Question",
      name: "Do you cover Earlsdon, Foleshill Road, the Cathedral Quarter and the wider Coventry area?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — we cover all Coventry postcode districts for restaurant and bar window film. Earlsdon CV5 (Albany Road, Earlsdon Street), Cathedral Quarter CV1 (Cathedral Lane, Broadgate, Hay Lane), Belgrade Quarter CV1 (Corporation Street, Belgrade Theatre area), Foleshill Road CV6, Spon End CV1 and Spon Street CV1 (historic timber-framed buildings), Coventry University campus CV1, Far Gosford Street CV1, Hillfields CV1, Stoke CV2, Tile Hill CV4, University of Warwick CV4 campus restaurants, Canley CV4, and the wider Coventry CV1 through CV8 districts. From our South Yorkshire base, Coventry is approximately 1 hour 30 minutes south via the M1 and M6.",
      },
    },
    {
      "@type": "Question",
      name: "Can you add branding or logo graphics to Coventry restaurant windows?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Printed or cut-vinyl branding, logos, menus and decorative window graphics can be applied to Coventry restaurant windows as part of a frosted or clear vinyl application. We combine frosted privacy film with logo cut-outs or apply printed vinyl window graphics separately. Suitable for new venue openings on Earlsdon Albany Road or in the Cathedral Quarter, rebrands, seasonal promotions and permanent window branding across all Coventry hospitality districts — from Foleshill Road CV6 independent restaurants to Broadgate LE1 city-centre venues.",
      },
    },
  ],
};

const faqItems = faqSchema.mainEntity.map((item) => ({
  q: item.name,
  a: item.acceptedAnswer.text,
}));

export default function RestaurantWindowFilmCoventryPage() {
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
            <Link href="/window-film/restaurant-window-film/" className="text-accent hover:underline">Window Film for Restaurants</Link>
            <span className="mx-2">›</span>
            <span className="text-foreground">Coventry</span>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="border-b border-border bg-card py-16 md:py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <p className="text-sm font-medium uppercase tracking-wide text-accent">
            Window Film · Coventry Restaurants &amp; Bars
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Restaurant window film — Coventry
          </h1>
          <p className="mt-5 text-lg text-muted leading-relaxed">
            WRPX installs frosted privacy film, solar control film, decorative window
            vinyl and glass manifestation for restaurants, bars and cafés across
            Coventry. Earlsdon CV5 Albany Road, Cathedral Quarter CV1, Foleshill Road CV6,
            Belgrade Quarter and beyond — work carried out overnight or on closed days
            with no trading disruption. South Yorkshire base: Coventry is approximately
            1 hour 30 minutes south on the M6 and M1.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact/" className="btn-primary">
              Request a Coventry Restaurant Survey →
            </Link>
            <Link href="/window-film/restaurant-window-film/" className="btn-secondary">
              Restaurant Window Film Overview
            </Link>
          </div>
        </div>
      </section>

      {/* Coventry restaurant market context */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Coventry&apos;s restaurant and bar market — where window film is needed
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              Coventry has a diverse and growing hospitality economy shaped by a
              large student population — Coventry University CV1 and the University
              of Warwick CV4 together bring well over 50,000 students to the city
              and its surroundings — and a substantial resident population of
              approximately 370,000 in the city and wider metropolitan area.
              The restaurant and bar landscape has changed significantly since the
              city&apos;s 2021 City of Culture designation brought new venue openings
              and investment into the Cathedral Quarter and Belgrade areas.
            </p>
            <p>
              Earlsdon CV5 is Coventry&apos;s most established independent restaurant
              and café destination. Albany Road is the spine of this neighbourhood:
              a concentrated parade of independent restaurants, wine bars, gastropubs,
              cafés and coffee shops in traditional Edwardian and inter-war shopfronts
              with characteristically wide, full-height street-facing windows.
              This is the strip where frosted privacy film — typically half-height
              on the lower section of each window — is most consistently in demand
              among the restaurants and bars that line both sides of the road.
              Earlsdon Street and Hartington Road add further independent food and
              drink businesses in comparable Edwardian terrace shopfronts.
            </p>
            <p>
              The Cathedral Quarter CV1 — the area surrounding Coventry Cathedral,
              including Cathedral Lane, Hay Lane, Broadgate and the nearby blocks —
              is the city centre&apos;s highest-profile bar and restaurant zone.
              Since the City of Culture investment, this area has seen new venue
              openings in converted commercial buildings with large glazed frontages
              where frosted film, solar control and decorative window graphics are
              in consistent demand. The adjacent Belgrade Quarter, centred on the
              Belgrade Theatre on Corporation Street, carries a bar and restaurant
              cluster with strong evening trade and a high density of glazed
              street-facing venues.
            </p>
            <p>
              Foleshill Road CV6 — stretching north from the ring road through
              Radford into Foleshill — is one of the most culturally diverse food
              streets in the Midlands. A high concentration of South Asian
              restaurants, specialists in Pakistani, Indian, Bangladeshi and
              Caribbean cuisine, plus cafés, sweet shops and bakeries, occupies
              traditional shopfront buildings the length of the corridor. Privacy
              film installations — half-height frosted, etched-effect or
              cut-to-shape — are consistent across this street. Beyond these key
              districts, Spon End CV1, Stoke CV2, Tile Hill CV4 and Far Gosford
              Street CV1 all carry active restaurant strips. WRPX covers all
              Coventry and Warwickshire postcode districts for restaurant and bar
              window film installation.
            </p>
          </div>
        </div>
      </section>

      {/* Film types */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-2xl font-semibold text-foreground md:text-3xl">
            Window film applications for Coventry restaurants
          </h2>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="card-float p-8">
              <h3 className="text-xl font-semibold text-foreground">Frosted and privacy film</h3>
              <p className="mt-4 text-muted leading-relaxed">
                Half-height frosted film on street-facing windows is the standard
                specification for Earlsdon Albany Road and Foleshill Road restaurants
                — particularly in venues on busy pedestrian and residential streets
                where seated diners are directly visible from the pavement. For
                Cathedral Quarter venues in converted commercial buildings with
                large-format original windows, full-height or patterned frosted film
                provides dining privacy without reducing the glazed street presence.
                On Spon Street CV1 — the surviving medieval street with listed
                timber-framed buildings — interior frosted film is frequently the
                only compliant option for solar control and privacy management.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-muted">
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-accent">✓</span>
                  <span>Half-height frosted — Earlsdon Albany Road and Foleshill Road street-facing dining</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-accent">✓</span>
                  <span>Full-height frosted — Cathedral Quarter converted buildings with large glazed frontages</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-accent">✓</span>
                  <span>Internal glazed partitions between dining areas and private dining rooms</span>
                </li>
              </ul>
              <Link href="/window-film/frosted-film-coventry/" className="mt-6 inline-block text-sm text-accent hover:underline">
                Frosted window film Coventry →
              </Link>
            </div>
            <div className="card-float p-8">
              <h3 className="text-xl font-semibold text-foreground">Solar control film</h3>
              <p className="mt-4 text-muted leading-relaxed">
                South and west-facing Coventry restaurants — Earlsdon CV5 Albany
                Road venues with south-west afternoon exposure, Belgrade Quarter CV1
                restaurants on Corporation Street facing south, and Cathedral Quarter
                venues on Broadgate or Hay Lane with direct sun from the west — can
                overheat significantly through spring and summer. Solar control film
                reduces solar heat gain by 40–79%, keeping dining areas comfortable
                without blinds that obstruct the street presence or external shading
                structures that alter the character of traditional shopfront buildings.
                For Spon Street listed buildings, solar control film is typically the
                only practical thermal management solution without expensive glazing
                replacement or planning-permission-required external shading.
              </p>
              <Link href="/window-film/solar-control-film-coventry/" className="mt-6 inline-block text-sm text-accent hover:underline">
                Solar control film Coventry →
              </Link>
            </div>
            <div className="card-float p-8">
              <h3 className="text-xl font-semibold text-foreground">Decorative window vinyl and branding</h3>
              <p className="mt-4 text-muted leading-relaxed">
                Cut-vinyl logos, frosted film with logo cut-outs, printed decorative
                window graphics and etched-effect patterned film for Coventry
                restaurants adding branding or seasonal promotion to street-facing
                glazing. Suitable for new venue openings in the Cathedral Quarter
                or on Earlsdon Albany Road, rebrands, and rolling promotional
                campaigns. For restaurant groups with multiple Coventry locations,
                we deliver consistent specification across all sites.
              </p>
            </div>
            <div className="card-float p-8">
              <h3 className="text-xl font-semibold text-foreground">Glass manifestation</h3>
              <p className="mt-4 text-muted leading-relaxed">
                Building regulations require safety manifestation on large glazed
                panels that could be mistaken for an open doorway or solid wall.
                In Coventry restaurants and bars, this applies most commonly to
                full-height glazed shopfronts in the Cathedral Quarter CV1,
                Belgrade Theatre area and new-build restaurants on Broadgate — and
                to full-glazed entrance doors across the city-centre CV1 core.
                Applied as a dot band, stripe or as part of a decorative branding
                design that satisfies compliance while enhancing the venue&apos;s
                street presence.
              </p>
              <Link href="/window-film/glass-manifestation/" className="mt-6 inline-block text-sm text-accent hover:underline">
                Glass manifestation details →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Installation logistics */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Coventry restaurant installation — how it works
          </h2>
          <div className="grid gap-6 sm:grid-cols-3">
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">No disruption to service</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Window film is applied to the interior surface. Most restaurant
                window installations complete in 30–60 minutes per window. An
                Earlsdon or Cathedral Quarter venue can typically be done overnight
                or on a Monday closed session.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Overnight and out-of-hours</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                We work to your Coventry restaurant&apos;s schedule — overnight after last
                service, early morning before opening, or on a closed day. Co-ordinated
                with your front-of-house team to leave premises clean and ready before
                the following morning&apos;s service.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Survey and quote</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                We survey your Coventry restaurant windows — measuring glazed areas,
                assessing substrate and confirming the film type and coverage —
                before issuing a clear, fixed-price quote. No obligation to proceed
                after survey.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-3xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Coventry restaurant window film — common questions
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

      {/* Related links */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-xl font-semibold text-foreground">
            Related window film services
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <Link href="/window-film/restaurant-window-film/" className="card-float p-5 hover:border-accent/50 transition-colors">
              <p className="font-medium text-foreground">Restaurant Window Film</p>
              <p className="mt-1 text-sm text-muted">National overview — all restaurant film types</p>
            </Link>
            <Link href="/window-film/frosted-film-coventry/" className="card-float p-5 hover:border-accent/50 transition-colors">
              <p className="font-medium text-foreground">Frosted Film Coventry</p>
              <p className="mt-1 text-sm text-muted">Privacy and frosted window film across CV postcodes</p>
            </Link>
            <Link href="/window-film/solar-control-film-coventry/" className="card-float p-5 hover:border-accent/50 transition-colors">
              <p className="font-medium text-foreground">Solar Control Film Coventry</p>
              <p className="mt-1 text-sm text-muted">Heat reduction for south and west-facing glazing</p>
            </Link>
            <Link href="/window-film/hotel-window-film-coventry/" className="card-float p-5 hover:border-accent/50 transition-colors">
              <p className="font-medium text-foreground">Hotel Window Film Coventry</p>
              <p className="mt-1 text-sm text-muted">Privacy, solar and decorative film for Coventry hotels</p>
            </Link>
            <Link href="/window-film/frosted-window-film/" className="card-float p-5 hover:border-accent/50 transition-colors">
              <p className="font-medium text-foreground">Frosted Window Film</p>
              <p className="mt-1 text-sm text-muted">Full frosted and privacy film product range</p>
            </Link>
            <Link href="/window-film/glass-manifestation/" className="card-float p-5 hover:border-accent/50 transition-colors">
              <p className="font-medium text-foreground">Glass Manifestation</p>
              <p className="mt-1 text-sm text-muted">Compliance and decorative manifestation</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-card px-4 py-20">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
            Coventry restaurant or bar — ready for a survey?
          </h2>
          <p className="mt-4 text-muted leading-relaxed">
            Tell us about your Coventry venue — glazing type, which windows you need
            filming, and whether you need privacy, solar control, branding or all three.
            We&apos;ll arrange a survey and come back with a clear, fixed-price quote.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link href="/contact/" className="btn-primary">
              Request a Survey →
            </Link>
            <Link href="/window-film/" className="btn-secondary">
              Window Film Overview
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
