import type { Metadata } from "next";
import Link from "next/link";
import { getServiceSchema } from "@/lib/schema";
import { FaqAccordion } from "@/components/FaqAccordion";

export const metadata: Metadata = {
  title: "Retail Window Film Coventry | Frosted, Solar Control & Manifestation for Shops | WRPX",
  description:
    "Retail window film across Coventry — frosted privacy film for fitting rooms and staff areas, solar-control glazing film for glazed shop fronts, branded decorative vinyl and DDA-compliant glass manifestation. West Orchards, Upper Precinct, Broadgate, Gallagher Retail Park, Arena Retail Park and all Coventry CV retail postcodes. Trading-hours installation available.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/window-film/retail-window-film-coventry/",
  },
};

const serviceSchema = getServiceSchema(
  "Retail window film Coventry — frosted, solar control and glass manifestation for shops",
  "Window film installation for retail premises across Coventry and Warwickshire. Frosted privacy film for fitting rooms, changing areas and staff glazing, solar-control film for glazed shop fronts and retail units, branded decorative film and DDA-compliant glass manifestation. West Orchards Shopping Centre CV1, Upper Precinct CV1, Broadgate CV1, Lower Precinct CV1, Gallagher Retail Park CV6, Arena Retail Park CV6, Central Retail Park CV6 and all Coventry retail postcodes. Installation available during or outside trading hours."
);

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.wrpx.co.uk/" },
    { "@type": "ListItem", position: 2, name: "Window Film", item: "https://www.wrpx.co.uk/window-film/" },
    { "@type": "ListItem", position: 3, name: "Retail Window Film", item: "https://www.wrpx.co.uk/window-film/retail-window-film/" },
    { "@type": "ListItem", position: 4, name: "Coventry", item: "https://www.wrpx.co.uk/window-film/retail-window-film-coventry/" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do you install frosted window film for Coventry retail units?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — frosted and privacy window film is a consistent retail application across Coventry. Typical uses are fitting room and changing area glazing in clothing retailers (full-height frosted for complete privacy or lower-panel frosted with clear glass above), staff area partitions and back-office glazing within units, and street-facing glazed frontages where a frosted band improves the display arrangement or reduces glare on merchandise. Coventry city-centre retail — Broadgate CV1, Upper Precinct CV1 and the pedestrianised areas around West Orchards CV1 — has a high proportion of glazed frontages where frosted or decorative vinyl film adds commercial value.",
      },
    },
    {
      "@type": "Question",
      name: "Can you install solar control window film at West Orchards or the Coventry Precinct?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. West Orchards Shopping Centre CV1 — Coventry's principal covered shopping centre — has glazed frontages and atrium sections that require careful solar management. Solar-control film applied to these glazed surfaces reduces solar heat gain by 40 to 79%, keeping retail floor temperatures manageable during busy trading periods and reducing dependence on air conditioning. The Upper Precinct CV1 and Lower Precinct CV1 have exposed south-facing glazed frontages that benefit significantly from solar-control film during peak summer trading. We work to West Orchards and Precinct management guidelines and confirm access arrangements with centre management before mobilisation.",
      },
    },
    {
      "@type": "Question",
      name: "Do you cover Coventry retail outside the city centre — Gallagher, Arena, Central?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — we cover all Coventry and Warwickshire retail postcodes, not just the city-centre CV1 core. Gallagher Retail Park CV6 on the A444 north of the city is a significant out-of-town destination with national multiples requiring window film for solar control, frosted film for fitting rooms and DDA manifestation. Arena Retail Park CV6 and Central Retail Park CV6 carry similar glazed frontage profiles. Retail in the wider Warwickshire area — Kenilworth CV8 high street, Leamington Spa CV31/CV32 (Royal Priors, Regent Court), Warwick CV34, Rugby CV21 and Nuneaton CV11 — are all within our standard Coventry service radius. WRPX is based in South Yorkshire, approximately 1 hour 15 minutes from Coventry via the M1 south and M6 south at Junction 2.",
      },
    },
    {
      "@type": "Question",
      name: "Can the film include our branding or logo on Coventry retail glazing?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Frosted and decorative film for Coventry retail units can incorporate cut logos, text, patterns or full printed designs. This is popular for Broadgate and Upper Precinct shop-front glazing where a frosted band with a cut logo maintains brand presence while providing lower-window privacy or reducing direct solar glare on merchandise. For multi-site Coventry retailers — units across the city centre, West Orchards, Gallagher Retail Park and Warwickshire district high streets — we can specify and supply a consistent design across all locations. We advise on the best approach (cut vinyl, printed frosted film or standard frosted product) based on your specification, substrate and budget.",
      },
    },
    {
      "@type": "Question",
      name: "What is DDA-compliant glass manifestation and do Coventry retail units need it?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Glass manifestation is required under Building Regulations Approved Document M (and the Equality Act 2010 in commercial premises) for full-height glazed panels and doors that are not otherwise visually apparent. The requirement is two horizontal bands of manifestation — typically at 850–1000mm and 1400–1600mm above floor level — to alert people with visual impairments that a glazed surface is present. Coventry retail units with full-height glazed shop fronts, internal glass partitions or glazed internal doors are likely to require manifestation. This applies to units in West Orchards, the Precincts, Gallagher Retail Park and across all stand-alone city-centre and high-street Coventry units. We install frosted vinyl manifestation strips, etched-effect bands, dot pattern manifestation and branded manifestation options — all to the correct specification for Building Regulations compliance.",
      },
    },
    {
      "@type": "Question",
      name: "Can installation be done while the Coventry retail unit is trading?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — most retail window film installations in Coventry are carried out during trading hours. Interior film application is quiet, clean work that causes no disruption to customers or floor staff. For West Orchards units where centre management requires out-of-hours installation, early-morning and overnight slots are available. A typical Coventry retail unit shop front — 4 to 10 panes of glass — can be fully filmed in 2 to 5 hours depending on the glazing area. We co-ordinate directly with your store or centre management team to fit around peak trading periods and any centre-specific access restrictions.",
      },
    },
  ],
};

const faqItems = faqSchema.mainEntity.map((item) => ({
  q: item.name,
  a: item.acceptedAnswer.text,
}));

export default function RetailWindowFilmCoventryPage() {
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
            <span className="text-foreground">Coventry</span>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="border-b border-border bg-card py-16 md:py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <p className="text-sm font-medium uppercase tracking-wide text-accent">
            Retail Window Film · Coventry &amp; Warwickshire
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Retail window film — Coventry
          </h1>
          <p className="mt-5 text-lg text-muted leading-relaxed">
            Window film installation for retail premises across Coventry and Warwickshire.
            Frosted privacy film for fitting rooms and staff areas, solar-control film for
            glazed shop fronts, branded decorative vinyl and DDA-compliant glass
            manifestation. West Orchards, Upper Precinct, Broadgate, Gallagher Retail Park,
            Arena Retail Park and all Coventry CV postcodes. Trading-hours installation
            available. Approximately 1 hour 15 minutes from our South Yorkshire base via
            the M1 and M6 south.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact/" className="btn-primary">
              Request a Coventry Quote →
            </Link>
            <Link href="/window-film/retail-window-film/" className="btn-secondary">
              Retail Window Film Overview
            </Link>
          </div>
        </div>
      </section>

      {/* Coventry retail context */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Coventry retail — window film applications
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              Coventry is a major West Midlands retail city with a city-centre core
              that has undergone significant investment and redevelopment. The West
              Orchards Shopping Centre CV1 — Coventry&apos;s principal covered centre
              — anchors the city-centre retail offer alongside the Upper Precinct CV1
              and Lower Precinct CV1, which were part of the post-war city centre
              rebuild and continue to host a significant range of national retail names.
              The pedestrianised Broadgate CV1 and surrounding high street retail
              extends the city-centre footprint.
            </p>
            <p>
              The out-of-town retail geography adds substantial capacity. Gallagher
              Retail Park CV6 on the A444 Foleshill Road north of the city is one
              of the larger out-of-town retail parks in the West Midlands, hosting
              national multiples with significant glazed frontages. Arena Retail Park
              CV6 adjacent to the Coventry Building Society Arena and Central Retail
              Park CV6 extend the northern retail geography. To the south-east,
              Eastern Green and Canley carry further district retail.
            </p>
            <p>
              The wider Warwickshire retail picture — Leamington Spa CV31/CV32
              (Royal Priors Shopping Centre, Regent Court, Parade high street),
              Kenilworth CV8 high street, Warwick CV34, Rugby CV21/CV22 and Nuneaton
              CV11 — all fall within the standard WRPX Coventry service radius.
              Window film applications across this landscape follow the same three
              main categories: frosted and privacy film for fitting rooms and
              partitions, solar-control for south-facing glazed frontages, and
              DDA-compliant manifestation for full-height glazed doors and panels.
            </p>
            <p>
              WRPX is based in South Yorkshire, approximately 1 hour 15 minutes
              from Coventry city centre via the M1 south and M6 south at Junction 2
              (Coventry south) or Junction 3 (Coventry/Kenilworth). Coventry is one
              of our closest and most accessible Midlands retail service markets.
            </p>
          </div>
        </div>
      </section>

      {/* Film types */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-2xl font-semibold text-foreground md:text-3xl">
            Window film types for Coventry retail
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Frosted privacy film
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Fitting rooms, changing areas, staff glazing and internal partitions.
                Full-height or partial-height application — the most common retail
                window film request we receive across Coventry.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Solar-control film
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Reduces solar heat gain by 40 to 79% on glazed shop fronts and
                atrium sections. Effective for south-facing Upper Precinct units
                and west-facing Gallagher Retail Park frontages.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Glass manifestation
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                DDA-compliant manifestation bands for full-height glazed shop
                fronts, internal glass partitions and glazed doors across
                Coventry retail. Frosted strips, etched-effect, dot pattern
                or branded options.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Branded decorative vinyl
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Cut logos, text, patterns or full printed designs on frosted
                or clear vinyl. Consistent branding across multi-site Coventry
                and Warwickshire retail locations from a single specification.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Anti-graffiti film
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Sacrificial film protecting glazing from surface etching —
                relevant for ground-floor Coventry city-centre retail fronts
                on high-footfall pedestrianised streets around Broadgate
                and the Precincts.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                One-way mirror film
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Reflective daytime privacy film for staff areas, security
                glazing and back-office windows — maintains outward visibility
                from inside while blocking inward visibility from the retail floor.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Major locations */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Coventry retail locations we cover
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              <strong className="text-foreground">West Orchards Shopping Centre CV1</strong>
              — full coverage across West Orchards, including individual unit frontages
              and internal glazing. Solar-control, frosted, manifestation and branded
              film for any unit. We work to West Orchards management guidelines and
              confirm access arrangements directly with centre management before
              mobilisation.
            </p>
            <p>
              <strong className="text-foreground">Upper Precinct, Lower Precinct
              and Broadgate CV1</strong> — the Precinct shopping areas and the
              pedestrianised Broadgate city centre are well-established service
              locations for retail window film across Coventry. We are familiar with
              city-centre access requirements and the standard glazing types on
              Coventry Precinct units.
            </p>
            <p>
              <strong className="text-foreground">Gallagher Retail Park CV6</strong>
              — on the A444 Foleshill Road north of the city, Gallagher Retail Park
              has a significant number of national retailers with large glazed
              frontages requiring solar control, frosted film for fitting rooms and
              DDA manifestation. Full coverage for all Gallagher units.
            </p>
            <p>
              <strong className="text-foreground">Arena Retail Park and Central
              Retail Park CV6</strong> — adjacent to the Coventry Building Society
              Arena, both retail parks have glazed frontages across the national
              multiple retailers. Full coverage for all units within both parks.
            </p>
            <p>
              <strong className="text-foreground">Leamington Spa and wider
              Warwickshire</strong> — the Royal Priors Shopping Centre CV31,
              Regent Court CV32 and the Parade CV31 high street in Leamington Spa;
              Kenilworth CV8, Warwick CV34, Rugby CV21, Nuneaton CV11 and all
              Warwickshire district retail high streets. Full coverage across the
              wider Warwickshire retail area from our Coventry service base.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-3xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Coventry retail window film — common questions
          </h2>
          <FaqAccordion items={faqItems} />
        </div>
      </section>

      {/* Related */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Related window film services for Coventry
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <Link href="/window-film/retail-window-film/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Retail window film — full overview</h3>
              <p className="mt-2 text-sm text-muted">National retail window film service page — frosted, solar control, manifestation and branding for shops nationwide.</p>
            </Link>
            <Link href="/window-film/retail-window-film-birmingham/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Retail window film Birmingham</h3>
              <p className="mt-2 text-sm text-muted">Window film for Birmingham retail — Bullring, Grand Central, Mailbox and West Midlands units.</p>
            </Link>
            <Link href="/window-film/retail-window-film-leicester/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Retail window film Leicester</h3>
              <p className="mt-2 text-sm text-muted">Window film for Leicester retail — Highcross, Haymarket, Fosse Park and Leicestershire units.</p>
            </Link>
            <Link href="/window-film/frosted-film-coventry/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Frosted window film Coventry</h3>
              <p className="mt-2 text-sm text-muted">Frosted and privacy film for Coventry commercial and residential glazing.</p>
            </Link>
            <Link href="/window-film/solar-control-film-coventry/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Solar control film Coventry</h3>
              <p className="mt-2 text-sm text-muted">Solar-control glazing film for Coventry commercial buildings — heat reduction and glare control.</p>
            </Link>
            <Link href="/architectural-wrap-retail-coventry/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Architectural wrap for retail Coventry</h3>
              <p className="mt-2 text-sm text-muted">Vinyl wrapping for Coventry retail interiors — shopfit surfaces, counters, display units and fixtures.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-4 py-20">
        <div className="container mx-auto max-w-3xl">
          <div className="card-float border-2 border-accent/40 p-10 text-center md:p-12">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              Coventry retail window film enquiry
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Tell us the retail location, the glazing type and what you need — frosted,
              solar control, manifestation or branded film. We&apos;ll quote and schedule
              around your trading hours. WRPX is approximately 1 hour 15 minutes from
              Coventry via the M1 and M6 south.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link href="/contact/" className="btn-primary">
                Request a Coventry Quote →
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
