import type { Metadata } from "next";
import Link from "next/link";
import { getServiceSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Retail Window Film Sheffield | Frosted, Solar Control & Manifestation for Shops | WRPX",
  description:
    "Retail window film across Sheffield — frosted privacy film for fitting rooms and staff areas, solar-control glazing film for south-facing shop fronts, branded decorative vinyl and DDA-compliant glass manifestation. Meadowhall, the Moor, Fargate, Ecclesall Road and all Sheffield retail postcodes. Trading-hours installation available.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/window-film/retail-window-film-sheffield/",
  },
};

const serviceSchema = getServiceSchema(
  "Retail window film Sheffield — frosted, solar control and glass manifestation for shops",
  "Window film installation for retail premises across Sheffield. Frosted privacy film for fitting rooms, changing areas and staff glazing, solar-control film for south-facing Meadowhall and city-centre shop fronts, branded decorative film and DDA-compliant glass manifestation. Sheffield S1 city centre, Meadowhall S9, Fargate, the Moor, Ecclesall Road S11 and all Sheffield retail areas. Installation available during trading hours or overnight."
);

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.wrpx.co.uk/" },
    { "@type": "ListItem", position: 2, name: "Window Film", item: "https://www.wrpx.co.uk/window-film/" },
    { "@type": "ListItem", position: 3, name: "Retail Window Film", item: "https://www.wrpx.co.uk/window-film/retail-window-film/" },
    { "@type": "ListItem", position: 4, name: "Sheffield", item: "https://www.wrpx.co.uk/window-film/retail-window-film-sheffield/" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do you install frosted window film for Sheffield retail units?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — frosted and privacy window film is one of the most common retail window film applications we carry out in Sheffield. The typical applications are fitting room and changing room glazing (full-height frosted for complete privacy, or lower-panel frosted with clear above), staff area partitions and office glazing within retail units, and street-facing shop-front glazing where partial frosting improves the display arrangement or reduces glare on screens and product. Sheffield city-centre retail — S1 Fargate, the Moor, Campo Lane, the retail units off Pinstone Street — has a high proportion of glazed frontages where frosted or decorative vinyl film adds commercial value without significant cost.",
      },
    },
    {
      "@type": "Question",
      name: "Can you install solar control window film at Meadowhall?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Meadowhall S9 has a significant number of south and west-facing retail units with glazed frontages onto the mall and external glazing that receive direct solar gain through the summer months. Solar-control film installed on the interior face of the glass reduces solar heat gain by 40 to 79%, keeping retail floor temperatures comfortable without relying on air conditioning alone. This is particularly relevant for Meadowhall units in the Oasis and Atrium sections where overhead and angled glazing creates concentrated heat zones. We work to Meadowhall centre management guidelines and can schedule installation outside centre trading hours where required.",
      },
    },
    {
      "@type": "Question",
      name: "Do you cover Sheffield retail outside the city centre — Ecclesall Road, Hillsborough, Woodseats?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — we cover all Sheffield retail postcodes, not just the city centre. Ecclesall Road S11 is a key location: independent retailers, cafés-with-retail areas and boutique shops along the full length of Ecclesall Road from Hunters Bar to Millhouses regularly require frosted privacy film for staff areas, solar-control film for the south-west-facing shop fronts, and glass manifestation for full-height glazed frontages. Woodseats S8, Hillsborough S6, Attercliffe S9, Abbeydale Road S7, London Road S2 and the Sharrow Vale Road S11 retail strip are all within our standard Sheffield coverage. WRPX is based in South Yorkshire — Sheffield is our home market and we can typically attend for survey within a day or two of contact.",
      },
    },
    {
      "@type": "Question",
      name: "Can the film include our branding or logo?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Frosted and decorative film for Sheffield retail units can incorporate cut logos, text, patterns or full printed designs. This is popular for shop-front glazing where a frosted band with a cut logo maintains brand presence while providing lower-window privacy. For multi-site Sheffield retailers we can specify and supply a consistent design across all units. We advise on the best approach — cut vinyl, printed frosted film or standard frosted — based on your specification and budget.",
      },
    },
    {
      "@type": "Question",
      name: "What is DDA-compliant glass manifestation and do Sheffield retail units need it?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Glass manifestation is a legal requirement under Building Regulations Approved Document M (and the Equality Act 2010 in commercial premises) for full-height glazed panels and doors that are not otherwise visually apparent. The requirement is for two horizontal bands of manifestation — typically at 850–1000mm and 1400–1600mm above floor level — to alert people with visual impairments that a glass surface is present. Sheffield retail units with full-height glazed shop fronts, internal glass partitions or glazed internal doors are likely to require manifestation under the current regulations. We install frosted vinyl manifestation strips, etched-effect bands, dot pattern manifestation and branded manifestation options — all to the correct specification for Building Regulations compliance.",
      },
    },
    {
      "@type": "Question",
      name: "Can installation be done while the retail unit is trading?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — most retail window film installations in Sheffield are carried out during trading hours. Interior film application is quiet, clean work that does not disturb customers or staff. For city-centre Sheffield units on Fargate and the Moor, and for Meadowhall units where centre management requires out-of-hours scheduling, overnight and early-morning installation is available. A typical Sheffield retail unit shop front — 4 to 8 panes of glass — can usually be fully filmed in 2 to 4 hours. We co-ordinate the schedule with your store management and fit around your peak trading periods.",
      },
    },
  ],
};

const faqItems = faqSchema.mainEntity.map((item) => ({
  q: item.name,
  a: item.acceptedAnswer.text,
}));

export default function RetailWindowFilmSheffieldPage() {
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
            <Link href="/window-film/retail-window-film/" className="text-accent hover:underline">Retail Window Film</Link>
            <span className="mx-2">›</span>
            <span className="text-foreground">Sheffield</span>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="border-b border-border bg-card py-16 md:py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <p className="text-sm font-medium uppercase tracking-wide text-accent">
            Retail Window Film · Sheffield &amp; South Yorkshire
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Retail window film — Sheffield
          </h1>
          <p className="mt-5 text-lg text-muted leading-relaxed">
            Window film for retail premises across Sheffield — frosted privacy film for
            fitting rooms and staff areas, solar-control glazing for south-facing shop
            fronts and Meadowhall units, branded decorative vinyl and DDA-compliant glass
            manifestation. Sheffield city centre S1, Meadowhall S9, Ecclesall Road S11,
            Hillsborough S6, Woodseats S8 and all Sheffield retail postcodes. Installation
            available during trading hours or overnight.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact/" className="btn-primary">
              Get a Sheffield Quote →
            </Link>
            <Link href="/window-film/retail-window-film/" className="btn-secondary">
              Retail Window Film Overview
            </Link>
          </div>
        </div>
      </section>

      {/* Sheffield retail landscape */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Sheffield&apos;s retail landscape
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              Sheffield has a diverse retail landscape spread across the city centre, the
              Meadowhall shopping centre and a series of well-established suburban retail
              streets. The city centre — S1 — centres on the Fargate pedestrian zone,
              the Moor retail strip south of the train station, the retail units on
              Pinstone Street, Orchard Square and the recently developed Heart of the City
              II scheme. These are predominantly glazed-frontage retail units where window
              film applications are common.
            </p>
            <p>
              Meadowhall S9 — a regional shopping centre with over 280 units and
              approximately 25 million visitors a year — is the largest single retail
              destination in South Yorkshire. Meadowhall units include units in the
              Oasis, Atrium, High Street and Arcade zones, with a mixture of facing
              directions and glazing types. South-facing and atrium-adjacent units
              frequently have solar gain problems through the summer months — solar
              control window film is one of the most cost-effective single interventions
              available for these units.
            </p>
            <p>
              Ecclesall Road S11 — Sheffield&apos;s primary independent retail and hospitality
              corridor — runs from Hunters Bar in the north to Millhouses in the south.
              Independent retailers, boutique clothing shops, beauty and wellness businesses,
              and food and drink operators along this stretch regularly require frosted
              privacy film for changing areas, staff offices and back-of-house glazing,
              as well as glass manifestation for the full-height glazed frontages common
              to the Victorian and Edwardian terraces that line the road.
            </p>
            <p>
              WRPX is based in South Yorkshire — Sheffield is our home market. We can
              typically attend for an initial survey visit within a day or two of contact,
              and schedule installation to work around your trading hours, centre management
              requirements or overnight access windows.
            </p>
          </div>
        </div>
      </section>

      {/* Film types */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-2xl font-semibold text-foreground md:text-3xl">
            Window film types for Sheffield retail
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Frosted privacy film</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Fitting rooms, changing cubicles, staff offices and back-of-house glazing.
                Full-height, half-height or banded frosted panels — specified to give
                the privacy level you need without blocking light entirely.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Solar control film</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Reduces solar heat gain by 40–79% on south and west-facing Sheffield
                shop fronts and Meadowhall units. Keeps retail floor temperatures
                comfortable — reduces reliance on air conditioning in summer.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">DDA glass manifestation</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Frosted bands, dot patterns and branded manifestation strips to meet
                Building Regulations Approved Document M requirements on full-height
                glazed panels and internal glass doors.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Branded decorative vinyl</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Cut logos, text and patterns in frosted or opaque vinyl for branded
                shop-front glazing. Multi-site consistency for Sheffield retailers
                with more than one location.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Anti-glare film</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Reduces screen glare and reflections on POS terminals, fitting room
                mirrors and product display areas — particularly relevant for glazed
                south-facing Sheffield retail units in the summer months.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Promotional and seasonal film</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Short-term printed or frosted vinyl for seasonal campaigns, sale
                periods and promotional windows — installed and removed cleanly
                without damage to existing glazing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sheffield retail coverage */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Sheffield retail areas we cover
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              <strong className="text-foreground">Sheffield city centre S1:</strong> Fargate
              pedestrian zone, the Moor (Debenhams block through to M&amp;S and Primark),
              Pinstone Street retail units, Orchard Square, Leopold Square, the retail
              units in the Heart of the City II development around Pound&apos;s Park and
              Barker&apos;s Pool, and the independent retailers along Division Street and
              West Street adjacent to the city centre.
            </p>
            <p>
              <strong className="text-foreground">Meadowhall S9:</strong> All zones including
              Oasis, Atrium, High Street, Arcade and the Meadowhall Retail Park on
              Meadowhall Road. Installation scheduled to meet centre management requirements
              — overnight and early-morning slots available.
            </p>
            <p>
              <strong className="text-foreground">Ecclesall Road S11:</strong> The full
              length from Hunters Bar (junction with Sharrow Vale Road) south to Millhouses,
              including the boutique shops and independent retailers across the S11 postcode.
            </p>
            <p>
              <strong className="text-foreground">Suburban retail:</strong> Woodseats S8,
              Hillsborough S6 (Hillsborough Corner and the retail strip on Langsett Road),
              Attercliffe S9, London Road S2, Abbeydale Road S7, Sharrow Vale Road S11,
              Crystal Peaks S20 shopping centre, Halfway S20 retail parks and all further
              Sheffield retail postcodes.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-3xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Sheffield retail window film — common questions
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
            Related window film and vinyl services in Sheffield
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <Link href="/window-film/retail-window-film/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Retail window film — full overview</h3>
              <p className="mt-2 text-sm text-muted">National service page covering all retail window film applications, film types, multi-site work and process.</p>
            </Link>
            <Link href="/window-film/frosted-film-sheffield/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Frosted window film Sheffield</h3>
              <p className="mt-2 text-sm text-muted">Frosted and privacy film across all Sheffield premises — offices, retail, residential and commercial glazing.</p>
            </Link>
            <Link href="/window-film/solar-control-film-sheffield/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Solar control film Sheffield</h3>
              <p className="mt-2 text-sm text-muted">Heat-reduction and solar control window film for Sheffield commercial and retail premises.</p>
            </Link>
            <Link href="/window-film/restaurant-window-film-sheffield/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Restaurant window film Sheffield</h3>
              <p className="mt-2 text-sm text-muted">Frosted privacy film and solar control for Sheffield restaurants, bars and hospitality venues.</p>
            </Link>
            <Link href="/window-film/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Window film — all services</h3>
              <p className="mt-2 text-sm text-muted">Full range of commercial and residential window film — frosted, solar, decorative and manifestation.</p>
            </Link>
            <Link href="/architectural-wrap-retail-sheffield/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Retail vinyl wrapping Sheffield</h3>
              <p className="mt-2 text-sm text-muted">Architectural vinyl wrapping for retail interiors — counters, display units, fitting room panels and shopfit surfaces.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-card px-4 py-20">
        <div className="container mx-auto max-w-3xl">
          <div className="card-float border-2 border-accent/40 p-10 text-center md:p-12">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              Window film for your Sheffield retail unit?
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Tell us the unit, the glazing and what you need — we&apos;ll survey and price
              it. WRPX is based in South Yorkshire — Sheffield is our home market, so
              survey visits are typically fast to arrange.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link href="/contact/" className="btn-primary">
                Get a Sheffield Quote →
              </Link>
              <Link href="/window-film/retail-window-film/" className="btn-secondary">
                Retail Window Film Overview
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
