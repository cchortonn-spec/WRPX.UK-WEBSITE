import type { Metadata } from "next";
import Link from "next/link";
import { FaqAccordion } from "@/components/FaqAccordion";
import { getServiceSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Christmas Hotel Graphics Installation — Seasonal Vinyl for Hotels & Hospitality | WRPX",
  description:
    "Christmas window graphics, festive lobby vinyl and seasonal wall graphics for hotels across Yorkshire and the East Midlands. White-label installation for hotel Christmas decoration suppliers, FM contractors and hospitality print companies. Book now — Christmas slots fill by October.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/christmas-hotel-graphics/",
  },
};

const serviceSchema = getServiceSchema(
  "Christmas hotel graphics installation — seasonal vinyl for hotels and hospitality",
  "Christmas window graphics, festive lobby vinyl, seasonal wall graphics and multi-room installation rollouts for hotels, hotel groups, serviced apartments and hospitality venues across Yorkshire and the East Midlands. Subcontract installation for hotel Christmas decoration suppliers, hospitality FM contractors and print management firms. White-label available."
);

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.wrpx.co.uk/" },
    { "@type": "ListItem", position: 2, name: "Christmas Window Graphics", item: "https://www.wrpx.co.uk/christmas-window-graphics/" },
    { "@type": "ListItem", position: 3, name: "Christmas Hotel Graphics", item: "https://www.wrpx.co.uk/christmas-hotel-graphics/" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "When should a hotel book Christmas graphics installation?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "August and September is the right time to book for a late October or November installation. Hotels typically want Christmas graphics in place before the first Christmas party bookings arrive in November. Christmas decoration suppliers and print companies are already quoting Christmas programmes now — confirming installation capacity in August gives you the run of November dates before they fill.",
      },
    },
    {
      "@type": "Question",
      name: "What types of Christmas graphics do you install in hotels?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Window vinyl graphics (printed or cut vinyl), frosted festive privacy film, etched-effect seasonal window patterns, lobby wall graphics and seasonal wall vinyl, lift lobby and corridor graphics, event space wall vinyl for Christmas party season, glass manifestation with seasonal designs, and temporary window graphics for restaurant and bar frontages. We also install graphics supplied by hotel Christmas decoration companies as a subcontract installer.",
      },
    },
    {
      "@type": "Question",
      name: "Do you install as a subcontractor for hotel Christmas decoration suppliers?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — white-label installation for Christmas decoration companies, hospitality FM contractors and print management firms is a core part of what we do. If you supply the printed or cut graphics, we provide the installation — arriving under your brief, reporting back to your project manager, providing photographic sign-off per site. No WRPX branding on site. This is the model for most of our hotel Christmas work.",
      },
    },
    {
      "@type": "Question",
      name: "Can you handle a multi-hotel Christmas rollout across Yorkshire?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — multi-site consistency is core to our commercial work. For hotel groups running the same Christmas campaign across multiple properties, we work to a standard brief, document each hotel photographically and report back to the central project manager with per-property completion status. Yorkshire and the East Midlands is our primary region — Sheffield, Leeds, Doncaster, York, Nottingham, Derby, Leicester.",
      },
    },
    {
      "@type": "Question",
      name: "Do you remove Christmas graphics after the season?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — January removal is a standard part of most hotel Christmas graphics programmes. We schedule removal visits in the first or second week of January, typically timed around quiet periods in the hotel diary. Glass is left clean with no adhesive residue. For hotels running the same design year on year, the same brief and schedule applies the following November.",
      },
    },
  ],
};

const faqItems = [
  {
    q: "When should a hotel book Christmas graphics installation?",
    a: "August and September is the right time to book for a late October or November installation. Hotels typically want Christmas graphics in place before the first Christmas party bookings arrive in November. Christmas decoration suppliers and print companies are already quoting Christmas programmes now — confirming installation capacity in August gives you the run of November dates before they fill.",
  },
  {
    q: "What types of Christmas graphics do you install in hotels?",
    a: "Window vinyl graphics (printed or cut vinyl), frosted festive privacy film, etched-effect seasonal window patterns, lobby wall graphics and seasonal wall vinyl, lift lobby and corridor graphics, event space wall vinyl for Christmas party season, glass manifestation with seasonal designs, and temporary window graphics for restaurant and bar frontages. We also install graphics supplied by hotel Christmas decoration companies as a subcontract installer.",
  },
  {
    q: "Do you install as a subcontractor for hotel Christmas decoration suppliers?",
    a: "Yes — white-label installation for Christmas decoration companies, hospitality FM contractors and print management firms is a core part of what we do. If you supply the printed or cut graphics, we provide the installation — arriving under your brief, reporting back to your project manager, providing photographic sign-off per site. No WRPX branding on site. This is the model for most of our hotel Christmas work.",
  },
  {
    q: "Can you handle a multi-hotel Christmas rollout across Yorkshire?",
    a: "Yes — multi-site consistency is core to our commercial work. For hotel groups running the same Christmas campaign across multiple properties, we work to a standard brief, document each hotel photographically and report back to the central project manager with per-property completion status. Yorkshire and the East Midlands is our primary region — Sheffield, Leeds, Doncaster, York, Nottingham, Derby, Leicester.",
  },
  {
    q: "Do you remove Christmas graphics after the season?",
    a: "January removal is a standard part of most hotel Christmas graphics programmes. We schedule removal visits in the first or second week of January, typically timed around quiet periods in the hotel diary. Glass is left clean with no adhesive residue. For hotels running the same design year on year, the same brief and schedule applies the following November.",
  },
];

export default function ChristmasHotelGraphicsPage() {
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

      {/* Hero */}
      <section className="border-b border-border bg-card py-16 md:py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <p className="text-sm font-medium uppercase tracking-wide text-accent">
            Seasonal · Christmas Graphics for Hotels &amp; Hospitality
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Christmas hotel graphics installation
          </h1>
          <p className="mt-5 text-lg text-muted leading-relaxed">
            Window vinyl, festive lobby graphics, seasonal wall vinyl and multi-room rollouts
            for hotels and hospitality venues across Yorkshire and the East Midlands. White-label
            installation for hotel Christmas decoration suppliers, FM contractors and hospitality
            print companies. Book now — November installation dates are filling from September.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact/" className="btn-primary">
              Book Christmas Installation →
            </Link>
            <Link href="/christmas-window-graphics/" className="btn-secondary">
              Christmas Window Graphics
            </Link>
          </div>
        </div>
      </section>

      {/* Urgency notice */}
      <section className="bg-accent/10 border-b border-accent/20 px-4 py-8">
        <div className="container mx-auto max-w-4xl">
          <p className="text-foreground font-medium">
            <span className="text-accent font-bold">It&apos;s August.</span>{" "}
            Hotels that confirm Christmas graphics installation now secure November slots. Hotels
            that leave it to October find the installer&apos;s diary is full. Christmas decoration
            suppliers are quoting programmes right now — if you&apos;re sourcing installation
            capacity for a hotel account this season, now is the time to confirm.
          </p>
        </div>
      </section>

      {/* What we install */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-2xl font-semibold text-foreground md:text-3xl">
            Hotel Christmas graphics we install
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
            <div className="card-float p-6">
              <h3 className="font-semibold text-foreground">Christmas window graphics</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Printed and cut vinyl for hotel entrance windows, bar and restaurant frontages,
                lobby glazing and function room windows. Seasonal patterns — snowflakes, botanical
                designs, branded Christmas artwork — applied to glass or as film. Clean removal
                in January included.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="font-semibold text-foreground">Frosted seasonal window film</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Etched-effect and frosted film with seasonal cut-out patterns. Elegant and
                understated — popular for boutique hotels and restaurants where a printed
                graphic is too heavy. Applied quickly, removed cleanly. Available as perforated
                or partial coverage to maintain sightlines.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="font-semibold text-foreground">Lobby and reception wall graphics</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Large-format seasonal wall vinyl for hotel lobbies, reception areas and lift
                lobbies. Feature walls, full-height Christmas scenes, brand-led seasonal designs.
                Temporary — applied before the season, removed cleanly in January with no
                damage to paint or plaster.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="font-semibold text-foreground">Event space and function room vinyl</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Christmas party season generates high demand for event space graphics — seasonal
                wall vinyl, frosted privacy film on glass partitions, branded window graphics for
                private dining rooms. We schedule function room installation around booking
                calendars to avoid disruption to existing events.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="font-semibold text-foreground">Corridor and lift lobby graphics</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Seasonal graphics in hotel corridors and lift lobbies create a consistent festive
                environment throughout the building rather than just in the public-facing spaces.
                Particularly effective in hotel groups running a consistent brand aesthetic across
                multiple properties.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="font-semibold text-foreground">Bar and restaurant graphics</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Window graphics and interior wall vinyl for hotel bars and restaurants — seasonal
                menu boards, frosted window patterns, branded festive designs. Coordinated with
                F&amp;B management schedule to minimise disruption during trading hours.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who we work with */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Who we work with on hotel Christmas programmes
          </h2>
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-foreground">Hotel Christmas decoration suppliers</h3>
                <p className="mt-2 text-sm text-muted leading-relaxed">
                  Christmas decoration companies supplying hotels often include window graphics and
                  vinyl as part of their package but use subcontract installation for the application.
                  We work white-label — you supply the printed or cut material, we install under your
                  brief, report back with photo sign-off, and the hotel sees your company at every stage.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Hospitality FM contractors</h3>
                <p className="mt-2 text-muted text-sm leading-relaxed">
                  FM contractors managing hotel portfolios often co-ordinate seasonal graphics
                  installation alongside other maintenance programmes. We integrate with the FM
                  schedule, work to the same access protocols as other contractors on the property,
                  and provide the documentation format the FM team requires.
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-foreground">Print management and sign companies</h3>
                <p className="mt-2 text-sm text-muted leading-relaxed">
                  Print management firms and sign companies with hotel Christmas accounts often
                  produce the graphics but need a reliable installer. We provide installation-only
                  on supplied material — white-label, photographic sign-off, multi-site consistency
                  across a hotel group programme.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Hotel operations direct</h3>
                <p className="mt-2 text-sm text-muted leading-relaxed">
                  Hotels commissioning Christmas graphics directly — either self-designed or
                  from a designer — can supply print-ready artwork for us to procure and install,
                  or supply the printed material themselves. We advise on specification, schedule
                  the install around hotel operations, and include removal in January.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Geographic coverage */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Hotels we cover
          </h2>
          <p className="text-muted leading-relaxed mb-8">
            Our primary Christmas hotel graphics region is Yorkshire and the East Midlands — cities
            and towns with significant hotel stock within practical range of our South Yorkshire base.
          </p>
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 text-sm">
            {[
              { city: "Sheffield", note: "City centre, Meadowhall, airport corridor" },
              { city: "Leeds", note: "City centre hotels, First Direct Arena hotel zone" },
              { city: "York", note: "City centre heritage hotels and boutique properties" },
              { city: "Doncaster", note: "Town centre and Doncaster Racecourse hotels" },
              { city: "Harrogate", note: "Spa hotels and conference centre properties" },
              { city: "Nottingham", note: "City centre, Trent Bridge and university area" },
              { city: "Derby", note: "City centre and Pride Park hotel corridor" },
              { city: "Leicester", note: "City centre and university hotel stock" },
              { city: "Rotherham", note: "Town centre and Magna complex area" },
            ].map(({ city, note }) => (
              <div key={city} className="card-float p-4">
                <p className="font-semibold text-foreground">{city}</p>
                <p className="mt-1 text-muted">{note}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-muted text-sm">
            Outside this list? Contact us — we cover a wide geographic range for the right programme.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-3xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Hotel Christmas graphics questions
          </h2>
          <FaqAccordion items={faqItems} />
        </div>
      </section>

      {/* Related pages */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Related seasonal and hospitality services
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
            <Link href="/christmas-window-graphics/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Christmas window graphics</h3>
              <p className="mt-2 text-sm text-muted">Retail, restaurants and commercial premises</p>
            </Link>
            <Link href="/christmas-subcontract-installer/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Christmas subcontract installer</h3>
              <p className="mt-2 text-sm text-muted">For print companies and agencies</p>
            </Link>
            <Link href="/hospitality-graphics-installation/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Hospitality graphics installation</h3>
              <p className="mt-2 text-sm text-muted">Year-round hospitality vinyl installation</p>
            </Link>
            <Link href="/window-film/hotel-window-film/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Hotel window film</h3>
              <p className="mt-2 text-sm text-muted">Solar control, privacy and decorative film for hotels</p>
            </Link>
            <Link href="/architectural-wrap-hotels/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Architectural vinyl wrap — hotels</h3>
              <p className="mt-2 text-sm text-muted">Interior surface wrapping for hotel refurbishment</p>
            </Link>
            <Link href="/multi-site-rollout-installation/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Multi-site rollout installation</h3>
              <p className="mt-2 text-sm text-muted">Consistent installation across hotel groups</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-20">
        <div className="container mx-auto max-w-3xl">
          <div className="card-float border-2 border-accent/40 p-10 text-center md:p-12">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              Book Christmas hotel graphics installation
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Tell us the hotel, the scope — window graphics, lobby vinyl, function room, or
              full property rollout — and whether you&apos;re supplying material or need us to
              procure. We&apos;ll come back with availability and a quote. White-label as standard.
            </p>
            <Link href="/contact/" className="btn-primary mt-8 inline-block">
              Get a Christmas Hotel Graphics Quote →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
