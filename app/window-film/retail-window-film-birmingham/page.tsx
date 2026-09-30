import type { Metadata } from "next";
import Link from "next/link";
import { getServiceSchema } from "@/lib/schema";
import { FaqAccordion } from "@/components/FaqAccordion";

export const metadata: Metadata = {
  title: "Retail Window Film Birmingham | Frosted, Solar Control & Manifestation for Shops | WRPX",
  description:
    "Retail window film across Birmingham — frosted privacy film for fitting rooms and staff areas, solar-control glazing film for glazed shop fronts, branded decorative vinyl and DDA-compliant glass manifestation. Bullring & Grand Central, Mailbox, Great Western Arcade, Selfridges, New Street, Broad Street, Brindleyplace and all Birmingham retail postcodes. Trading-hours installation available.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/window-film/retail-window-film-birmingham/",
  },
};

const serviceSchema = getServiceSchema(
  "Retail window film Birmingham — frosted, solar control and glass manifestation for shops",
  "Window film installation for retail premises across Birmingham and the wider West Midlands. Frosted privacy film for fitting rooms, changing areas and staff glazing, solar-control film for glazed shop fronts and retail units, branded decorative film and DDA-compliant glass manifestation. Bullring B5, Grand Central B2, Mailbox B1, Great Western Arcade B2, Selfridges B5, New Street B2, Broad Street B1, Brindleyplace B1, Merry Hill DY5, Fort Shopping Park B24, Star City B7 and all Birmingham retail postcodes. Installation available during trading hours or outside trading hours."
);

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.wrpx.co.uk/" },
    { "@type": "ListItem", position: 2, name: "Window Film", item: "https://www.wrpx.co.uk/window-film/" },
    { "@type": "ListItem", position: 3, name: "Retail Window Film", item: "https://www.wrpx.co.uk/window-film/retail-window-film/" },
    { "@type": "ListItem", position: 4, name: "Birmingham", item: "https://www.wrpx.co.uk/window-film/retail-window-film-birmingham/" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do you install frosted window film for Birmingham retail units?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — frosted and privacy window film is a consistent retail application across Birmingham. Typical applications are fitting room and changing area glazing in clothing retailers (full-height frosted for complete privacy or lower-panel frosted with clear above), staff area partitions and back-office glazing within retail units, and street-facing glazed frontages where a frosted band improves the display arrangement or reduces glare on merchandise. Birmingham city-centre retail — New Street B2, Corporation Street B2, Colmore Row B3, Broad Street B1 and Brindleyplace B1 — has a high proportion of glazed frontages where frosted or decorative vinyl film adds commercial value. Bullring units frequently require frosted film for internal partitions, trial rooms and staff areas adjacent to the main floor.",
      },
    },
    {
      "@type": "Question",
      name: "Can you install solar control window film at the Bullring or Grand Central?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. The Bullring B5 — one of the UK's most iconic city-centre shopping destinations — has significant glazed sections including the Selfridges building facade glazing, atrium sections connecting the two main mall buildings, and individual unit frontages. Grand Central B2 at New Street Station has extensive glazed atrium areas and concourse-level retail glazing facing into the station. Solar-control film applied to the interior face of glazed surfaces reduces solar heat gain by 40 to 79%, keeping retail floor temperatures comfortable during high-occupancy trading periods and reducing reliance on air conditioning. We work to Bullring and Grand Central management guidelines and schedule installation outside trading hours or during early-morning slots where centre management requires off-hours access.",
      },
    },
    {
      "@type": "Question",
      name: "Do you cover Birmingham retail outside the city centre — Merry Hill, Fort, Sutton Coldfield?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — we cover all Birmingham and West Midlands retail postcodes, not just the city-centre B1/B2/B3/B5 core. Merry Hill DY5 in Dudley — approximately 270 stores across 1.5 million square feet — is one of the largest out-of-town retail centres in the Midlands and a regular service location for retail window film. Fort Shopping Park B24 in Erdington (north Birmingham), Star City B7 retail and leisure park, Great Western Retail Park B1, Touchwood Solihull B91, Bullring Mell Square Solihull B91, Sutton Coldfield town centre B72/B73, Kings Heath B14, Moseley B13, Harborne B17 and all district high streets and retail parks across the B, DY, WS and WV postcode areas fall within our standard Birmingham service area. WRPX is based in South Yorkshire, approximately 1 hour from Birmingham city centre via the M1 and M6 — Birmingham is a primary service market.",
      },
    },
    {
      "@type": "Question",
      name: "Can the film include our branding or logo on Birmingham retail glazing?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Frosted and decorative film for Birmingham retail units can incorporate cut logos, text, patterns or full printed designs. This is popular for New Street and Corporation Street shop-front glazing where a frosted band with a cut logo maintains brand presence while providing lower-window privacy or reducing direct solar glare on merchandise. For multi-site Birmingham retailers — units across the city centre, Bullring, Merry Hill, Fort Shopping Park and district high streets across the West Midlands — we can specify and supply a consistent design across all locations. We advise on the best approach (cut vinyl, printed frosted film or standard frosted product) based on your specification, substrate and budget.",
      },
    },
    {
      "@type": "Question",
      name: "What is DDA-compliant glass manifestation and do Birmingham retail units need it?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Glass manifestation is required under Building Regulations Approved Document M (and the Equality Act 2010 in commercial premises) for full-height glazed panels and doors that are not otherwise visually apparent. The requirement is two horizontal bands of manifestation — typically at 850–1000mm and 1400–1600mm above floor level — to alert people with visual impairments that a glazed surface is present. Birmingham retail units with full-height glazed shop fronts, internal glass partitions or glazed internal doors are likely to require manifestation. This applies to units across the Bullring, Grand Central, Mailbox, Great Western Arcade, Merry Hill and all stand-alone city-centre and high-street units across Birmingham and the wider West Midlands. We install frosted vinyl manifestation strips, etched-effect bands, dot pattern manifestation and branded manifestation options — all to the correct specification for Building Regulations compliance.",
      },
    },
    {
      "@type": "Question",
      name: "Can installation be done while the Birmingham retail unit is trading?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — most retail window film installations in Birmingham are carried out during trading hours. Interior film application is quiet, clean work that causes no disruption to customers or floor staff. For Birmingham city-centre units in the Bullring and Grand Central where centre management requires out-of-hours installation, and for Mailbox B1 units where certain centre-specific access rules apply, early-morning and overnight slots are available. A typical Birmingham retail unit shop front — 4 to 10 panes of glass — can be fully filmed in 2 to 5 hours depending on the glazing area. We co-ordinate directly with your store or centre management team to fit around peak trading periods and any centre-specific access restrictions.",
      },
    },
  ],
};

const faqItems = faqSchema.mainEntity.map((item) => ({
  q: item.name,
  a: item.acceptedAnswer.text,
}));

export default function RetailWindowFilmBirminghamPage() {
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
            <span className="text-foreground">Birmingham</span>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="border-b border-border bg-card py-16 md:py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <p className="text-sm font-medium uppercase tracking-wide text-accent">
            Retail Window Film · Birmingham &amp; West Midlands
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Retail window film — Birmingham
          </h1>
          <p className="mt-5 text-lg text-muted leading-relaxed">
            Window film installation for retail premises across Birmingham and the West
            Midlands. Frosted privacy film for fitting rooms and staff areas, solar-control
            film for glazed shop fronts, branded decorative vinyl and DDA-compliant glass
            manifestation. Bullring, Grand Central, Mailbox, Great Western Arcade, Merry
            Hill and all Birmingham and West Midlands postcodes. Trading-hours installation
            available. Approximately 1 hour from our South Yorkshire base via the M1 and M6.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact/" className="btn-primary">
              Request a Birmingham Quote →
            </Link>
            <Link href="/window-film/retail-window-film/" className="btn-secondary">
              Retail Window Film Overview
            </Link>
          </div>
        </div>
      </section>

      {/* Birmingham retail context */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Birmingham retail — window film applications
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              Birmingham is the UK&apos;s second city and one of its most significant
              retail destinations. The city centre has multiple distinct retail clusters:
              the Bullring B5 (including the iconic Selfridges building, two connected
              mall sections and a large outdoor retail frontage on New Street), Grand
              Central B2 at New Street Station (premium retail on two levels above the
              station concourse), the Mailbox B1 (upscale retail and leisure), the Great
              Western Arcade B2 (Victorian covered arcade), and the New Street B2 and
              Corporation Street B2 high-street retail corridors.
            </p>
            <p>
              Broad Street B1 and Brindleyplace B1 extend the retail footprint into
              Birmingham&apos;s canalside leisure district — a mix of restaurant, leisure
              and retail units with significant glazing. Colmore Row B3 and the
              Colmore Business District serve the financial district retail trade. Beyond
              the city centre, Merry Hill DY5 in Dudley, Fort Shopping Park B24 in
              Erdington, Star City B7, Touchwood Solihull B91 and district high streets
              across the wider B postcode area complete a major retail geography.
            </p>
            <p>
              Window film applications across this retail landscape span three main
              categories: frosted and privacy film for fitting rooms, staff areas and
              internal partitions; solar-control film for south- and west-facing glazed
              shop fronts; and DDA-compliant glass manifestation for full-height glazed
              frontages and internal glazed panels.
            </p>
            <p>
              WRPX is based in South Yorkshire, approximately 1 hour from Birmingham
              city centre via the M1 south and M6 north. Birmingham is a primary service
              market — we carry out regular retail window film work across the West
              Midlands area with established access arrangements at major retail centres.
            </p>
          </div>
        </div>
      </section>

      {/* Film types */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-2xl font-semibold text-foreground md:text-3xl">
            Window film types for Birmingham retail
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Frosted privacy film
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Fitting rooms, changing areas, staff glazing and internal partitions.
                Full-height or partial-height application — the most common retail
                window film request we receive across Birmingham.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Solar-control film
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Reduces solar heat gain by 40 to 79% on glazed shop fronts and atrium
                sections. Effective for south-facing Bullring units and west-facing
                Broad Street and Brindleyplace glazing.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Glass manifestation
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                DDA-compliant manifestation bands for full-height glazed shop fronts,
                internal glass partitions and glazed doors across Birmingham retail.
                Frosted strips, etched-effect, dot pattern or branded options.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Branded decorative vinyl
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Cut logos, text, patterns or full printed designs on frosted or clear
                vinyl. Consistent branding across multi-site Birmingham and West
                Midlands retail locations from a single specification.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Anti-graffiti film
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Sacrificial film protecting glazing from surface etching and graffiti
                — relevant for ground-floor Birmingham city-centre retail fronts on
                high-footfall pedestrianised streets.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                One-way mirror film
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Reflective daytime privacy film for staff areas, security glazing
                and back-office windows — maintains outward visibility from inside
                while blocking inward visibility from the retail floor.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Major locations */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Birmingham retail locations we cover
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              <strong className="text-foreground">Bullring &amp; Grand Central B2/B5</strong> — full
              coverage across both mall sections of the Bullring, the Selfridges building
              frontage, and Grand Central retail above New Street Station. Solar-control,
              frosted, manifestation and branded film for any unit. We work to Bullring
              and Grand Central management guidelines and confirm access arrangements
              directly with centre management before mobilisation.
            </p>
            <p>
              <strong className="text-foreground">Mailbox B1 and Great Western Arcade B2</strong> — the
              Mailbox B1 upscale retail complex and the Great Western Arcade Victorian
              covered arcade both have specific glazing challenges — the Mailbox due to
              its large commercial floor plates, and the Great Western Arcade due to its
              heritage glazing roof. We are familiar with both sites and can advise on
              appropriate film specifications.
            </p>
            <p>
              <strong className="text-foreground">Merry Hill DY5</strong> — approximately 270
              stores across 1.5 million square feet in Dudley, one of the largest
              out-of-town retail centres in the Midlands. Full coverage for all Merry
              Hill units — frosted, solar control, manifestation and branded film.
              We work to Merry Hill management guidelines and confirm access before
              mobilisation.
            </p>
            <p>
              <strong className="text-foreground">West Midlands out-of-town retail</strong> —
              Fort Shopping Park B24 (Erdington), Star City B7, Great Western Retail
              Park B1, Touchwood Solihull B91, Sutton Coldfield town centre B72/B73,
              Kings Heath B14, Harborne B17, Moseley B13 and all district high streets
              across the B, DY, WS and WV postcode areas.
            </p>
            <p>
              For multi-site retailers with units spread across Birmingham city centre,
              Bullring, Merry Hill and out-of-town retail parks, we co-ordinate a rolling
              installation schedule across all locations — consistent film specification
              and installation standard at every site.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-3xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Birmingham retail window film — common questions
          </h2>
          <FaqAccordion items={faqItems} />
        </div>
      </section>

      {/* Related */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Related window film services for Birmingham
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <Link href="/window-film/retail-window-film/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Retail window film — full overview</h3>
              <p className="mt-2 text-sm text-muted">National retail window film service page — frosted, solar control, manifestation and branding for shops nationwide.</p>
            </Link>
            <Link href="/window-film/retail-window-film-manchester/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Retail window film Manchester</h3>
              <p className="mt-2 text-sm text-muted">Window film for Manchester retail — Manchester Arndale, Trafford Centre and city-centre units.</p>
            </Link>
            <Link href="/window-film/retail-window-film-nottingham/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Retail window film Nottingham</h3>
              <p className="mt-2 text-sm text-muted">Window film for Nottingham retail — intu Victoria Centre, Cornerhouse and city-centre units.</p>
            </Link>
            <Link href="/window-film/frosted-film-birmingham/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Frosted window film Birmingham</h3>
              <p className="mt-2 text-sm text-muted">Frosted and privacy film for Birmingham commercial and residential glazing.</p>
            </Link>
            <Link href="/window-film/solar-control-film-birmingham/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Solar control film Birmingham</h3>
              <p className="mt-2 text-sm text-muted">Solar-control glazing film for Birmingham commercial buildings — heat reduction and glare control.</p>
            </Link>
            <Link href="/architectural-wrap-retail-birmingham/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Architectural wrap for retail Birmingham</h3>
              <p className="mt-2 text-sm text-muted">Vinyl wrapping for Birmingham retail interiors — shopfit surfaces, counters, display units and fixtures.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-4 py-20">
        <div className="container mx-auto max-w-3xl">
          <div className="card-float border-2 border-accent/40 p-10 text-center md:p-12">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              Birmingham retail window film enquiry
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Tell us the retail location, the glazing type and what you need — frosted,
              solar control, manifestation or branded film. We&apos;ll quote and schedule
              around your trading hours. WRPX is approximately 1 hour from Birmingham
              via the M1 and M6.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link href="/contact/" className="btn-primary">
                Request a Birmingham Quote →
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
