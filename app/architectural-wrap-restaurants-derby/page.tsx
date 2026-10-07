import type { Metadata } from "next";
import Link from "next/link";
import { getServiceSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Restaurant Interior Vinyl Wrapping Derby | Bar, Counter & Surface Wrap | WRPX",
  description:
    "Restaurant interior vinyl wrapping in Derby — counter fascias, bar fronts, booth panels, kitchen pass surrounds and fitted furniture. Out-of-hours installation across Derby DE1 Cathedral Quarter, Friar Gate, Pride Park DE24, Normanton Road DE23 and across Derbyshire. No trading disruption.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/architectural-wrap-restaurants-derby/",
  },
};

const serviceSchema = getServiceSchema(
  "Restaurant interior vinyl wrapping Derby — counters, bars and fitted surfaces",
  "Architectural vinyl wrapping for restaurant, bar and café interiors across Derby and Derbyshire. Counter fascias, bar fronts, booth dividers, kitchen pass-through panels and fitted furniture wrapped in commercial-grade film. Cathedral Quarter DE1, Sadler Gate, Friar Gate DE1, Pride Park DE24, Normanton Road DE23, Mickleover DE3 and across Derbyshire. Out-of-hours installation works around trading hours."
);

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.wrpx.co.uk/" },
    {
      "@type": "ListItem",
      position: 2,
      name: "Architectural Vinyl Film",
      item: "https://www.wrpx.co.uk/architectural-vinyl-film/",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Restaurant Interior Vinyl Wrapping",
      item: "https://www.wrpx.co.uk/architectural-wrap-restaurants/",
    },
    {
      "@type": "ListItem",
      position: 4,
      name: "Derby",
      item: "https://www.wrpx.co.uk/architectural-wrap-restaurants-derby/",
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do you wrap restaurant interiors in Derby city centre?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — we cover Derby and all Derbyshire postcode districts for restaurant and bar interior vinyl wrapping. Cathedral Quarter DE1, Sadler Gate, Iron Gate, Friar Gate, Pride Park DE24, Normanton Road DE23, Kedleston Road DE22, Mickleover DE3, Spondon DE21, Long Eaton NG10 and across the East Midlands. Derby is approximately 45 minutes from our South Yorkshire base on the M1 and A38. We can usually survey within a week and have current availability for overnight installation programmes in Derby.",
      },
    },
    {
      "@type": "Question",
      name: "Can you install without closing the Derby restaurant or bar?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We work overnight or early morning as standard across Derby restaurants and bars. A counter fascia or bar front can be wrapped in a single overnight session. For larger programmes — booths, multiple areas, full-room refreshes — we phase across successive overnight windows. No closure, no trading disruption. Cathedral Quarter and Sadler Gate restaurants typically offer a Monday or Tuesday closed day — we schedule installation for those days when possible.",
      },
    },
    {
      "@type": "Question",
      name: "Which Derby restaurant and bar surfaces can be vinyl wrapped?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Counter fascias and service pass-throughs, bar fronts and back-bar panels, booth dividers and seat surrounds, banquette seating panels, host station desks, internal door faces and feature wall panels. Surfaces need to be flat or near-flat and in sound condition — we assess at survey before any commitment.",
      },
    },
    {
      "@type": "Question",
      name: "What film finishes suit Derby's restaurant and bar market?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Derby's independent restaurant market in the Cathedral Quarter — Sadler Gate, Iron Gate, Friar Gate and the surrounding medieval street grid — tends toward natural materials and period-appropriate aesthetics, making brushed concrete, dark oak woodgrain, aged brass and satin charcoal popular film choices for bar fronts, counter fascias and booth surrounds. Pride Park and the A52 corporate dining market trends toward cleaner, more contemporary finishes — gloss or satin in dark greys, white and monochromes. Normanton Road's diverse restaurant market covers a broad range from traditional woodgrain to high-gloss statement finishes. Vinyl film can replicate all of these at a fraction of the cost of genuine materials.",
      },
    },
    {
      "@type": "Question",
      name: "Can you wrap Derby restaurant furniture and booth seating surrounds?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Fixed booth dividers, banquette surrounds, booth seat backs and fixed furniture panels are all wrappable in commercial-grade film. In Derby's Cathedral Quarter independent restaurants — where booth dining is common and refreshing aged fitted seating surrounds without replacing the structure is the priority — vinyl wrapping is cost-effective and can be completed overnight without any structural alteration to the fitting.",
      },
    },
    {
      "@type": "Question",
      name: "Can you cover multiple Derby or Derbyshire venues on the same programme?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. For Derby restaurant groups or pub companies operating multiple sites across Derby and Derbyshire, we plan multi-site programmes to cover all venues on the same visit or across a co-ordinated schedule. Same specification, same film, same installation standard across every site — with consistent photographic documentation at each venue for your project record.",
      },
    },
  ],
};

const faqItems = faqSchema.mainEntity.map((item) => ({
  q: item.name,
  a: item.acceptedAnswer.text,
}));

export default function ArchitecturalWrapRestaurantsDerbyPage() {
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
            <Link href="/architectural-vinyl-film/" className="text-accent hover:underline">Architectural Vinyl Film</Link>
            <span className="mx-2">›</span>
            <Link href="/architectural-wrap-restaurants/" className="text-accent hover:underline">Restaurant Interior Wrapping</Link>
            <span className="mx-2">›</span>
            <span className="text-foreground">Derby</span>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="border-b border-border bg-card py-16 md:py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <p className="text-sm font-medium uppercase tracking-wide text-accent">
            Architectural Vinyl Wrapping · Derby Restaurants &amp; Bars
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Restaurant interior vinyl wrapping — Derby
          </h1>
          <p className="mt-5 text-lg text-muted leading-relaxed">
            WRPX wraps restaurant and bar interiors across Derby — counter fascias,
            bar fronts, booth panels, kitchen pass surrounds and fitted furniture,
            all in commercial-grade vinyl film. Cathedral Quarter DE1, Friar Gate,
            Pride Park DE24, Normanton Road DE23 and across Derbyshire — overnight
            installation as standard, no trading disruption.
            South Yorkshire base: Derby is approximately 45 minutes north on the M1 and A38.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact/" className="btn-primary">
              Request a Derby Restaurant Survey →
            </Link>
            <Link href="/architectural-wrap-restaurants/" className="btn-secondary">
              Restaurant Wrapping Overview
            </Link>
          </div>
        </div>
      </section>

      {/* Why wrap */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Why Derby restaurants choose vinyl wrapping over replacement
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              Derby&apos;s restaurant market — particularly in the Cathedral Quarter DE1
              and Normanton Road DE23 — is largely owner-operated. When a bar front,
              counter fascia or booth surround needs refreshing, the choice is usually
              between replacement at significant cost and structural disruption, or
              vinyl wrapping at a fraction of the price with no structural alteration
              required and no trading closure. For most Derby independent restaurants,
              wrapping is the clear answer: same visual result, fraction of the cost,
              done overnight.
            </p>
            <p>
              Cathedral Quarter restaurant operators — with Victorian commercial
              buildings that often have planning or listed building constraints on
              structural alterations — find wrapping particularly useful for interior
              surface refreshes. Wrapping is a reversible, non-structural surface
              treatment: no permissions required, no structural alteration, no
              specialist contractor. It can be specified and delivered quickly,
              which is important for restaurants working to seasonal or event-driven
              timelines.
            </p>
            <p>
              For the Pride Park DE24 and A52 corridor corporate dining market —
              units that need to keep pace with brand refreshes or new tenant
              specifications — vinyl wrapping allows fast specification changes across
              counters, bar fronts and fitted surfaces without unit closure or
              significant capex.
            </p>
          </div>
        </div>
      </section>

      {/* Surfaces */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-2xl font-semibold text-foreground md:text-3xl">
            Surfaces we wrap in Derby restaurants and bars
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="card-float p-6">
              <h3 className="font-semibold text-foreground">Counter fascias</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Service counter front panels — the most common restaurant wrap job in Derby.
                Wrapped in woodgrain, concrete effect, gloss or satin finish. Overnight
                turnaround. No structural modification.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="font-semibold text-foreground">Bar fronts and back-bar panels</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Bar front fascias, back-bar panel faces, back-bar feature sections and
                under-bar panels. Commonly wrapped in natural oak, dark walnut, brushed
                metal effect or statement gloss finishes.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="font-semibold text-foreground">Booth dividers and seat surrounds</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Fixed booth partition panels, booth seat-back surrounds and banquette
                side panels. Wrapping refreshes the look without dismantling the booth
                structure — an overnight job with no disruption to the dining room layout.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="font-semibold text-foreground">Kitchen pass-through surrounds</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Pass-through aperture frames and surrounds — frequently left unfinished or
                with outdated laminate. Wrapped to match or complement the front-of-house
                counter and bar specification, tying the interior together.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="font-semibold text-foreground">Feature wall panels and door faces</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Internal door faces, feature wall panels and wall-mounted fitted units.
                A cost-effective way to add a material finish — concrete, stone, metal —
                to a feature wall without wet trades or genuine materials.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="font-semibold text-foreground">Host desks and furniture</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Host station desks, maître d&apos; podiums and fixed furniture with flat
                or near-flat panelled faces. Wrapped to match the front-of-house counter
                specification for a consistent interior standard from entrance to bar.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Derby market zones */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Derby restaurant and bar districts we cover
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="card-float p-5">
              <h3 className="font-semibold text-foreground">Cathedral Quarter DE1 — Sadler Gate, Iron Gate, Friar Gate</h3>
              <p className="mt-2 text-sm text-muted">Derby&apos;s primary independent restaurant district — pedestrianised Victorian street grid with owner-operated restaurants and bars. Counter fascia, bar front and booth wrap is the most common requirement in this district. Period-appropriate film choices — dark oak, aged brass, brushed slate — are particularly popular here, fitting the historic character of the buildings.</p>
            </div>
            <div className="card-float p-5">
              <h3 className="font-semibold text-foreground">Normanton Road DE23</h3>
              <p className="mt-2 text-sm text-muted">Derby&apos;s most diverse suburban restaurant strip — South Asian, Middle Eastern, Caribbean and international restaurants on Victorian commercial buildings running south from the inner ring road through Normanton. Counter fascias and service counter fronts are the primary wrap requirement, with a wide range of finish preferences across the diverse restaurant operators in this area.</p>
            </div>
            <div className="card-float p-5">
              <h3 className="font-semibold text-foreground">Pride Park DE24 and A52 Corridor</h3>
              <p className="mt-2 text-sm text-muted">Corporate and business park restaurant and cafe market around Pride Park stadium, the Wyvern retail strip and the A52 business corridor. Modern units with contemporary fittings — clean film finishes in gloss or satin monochromes and light oak are the standard specification in these locations. Brand-consistent multi-site programmes available for groups with Derby Pride Park and Sheffield or Nottingham locations.</p>
            </div>
            <div className="card-float p-5">
              <h3 className="font-semibold text-foreground">Kedleston Road DE22 and Mickleover DE3</h3>
              <p className="mt-2 text-sm text-muted">Western Derby suburban restaurant and cafe market — University of Derby-adjacent and residential suburb venues. Victorian and inter-war commercial buildings with standard shopfront fittings. Counter wrap, bar fascia and fixed furniture wrap on a schedule to suit trading days — typically Monday closed-day installation across this zone.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            How restaurant wrapping works — Derby process
          </h2>
          <div className="grid gap-6 sm:grid-cols-3">
            <div className="card-float p-6">
              <div className="mb-4 text-2xl font-bold text-accent">01</div>
              <h3 className="font-semibold text-foreground">Survey</h3>
              <p className="mt-2 text-sm text-muted">We visit the Derby venue, measure all surfaces, assess substrate condition and agree specification and film choices. Usually completed in under an hour. No commitment at survey stage.</p>
            </div>
            <div className="card-float p-6">
              <div className="mb-4 text-2xl font-bold text-accent">02</div>
              <h3 className="font-semibold text-foreground">Schedule</h3>
              <p className="mt-2 text-sm text-muted">We agree an overnight or closed-day installation window around your Derby venue&apos;s trading hours. For phased programmes across multiple areas, we plan the sequence to avoid any disruption to service.</p>
            </div>
            <div className="card-float p-6">
              <div className="mb-4 text-2xl font-bold text-accent">03</div>
              <h3 className="font-semibold text-foreground">Install and hand over</h3>
              <p className="mt-2 text-sm text-muted">We arrive after last orders or on your closed day, complete the installation, and leave the venue clean and ready for morning service. Photographic documentation included on completion.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-3xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Derby restaurant interior wrapping — common questions
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
            Related services for Derby restaurants
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <Link href="/architectural-wrap-restaurants/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Restaurant interior wrapping — full overview</h3>
              <p className="mt-2 text-sm text-muted">All restaurant and bar interior vinyl wrapping applications, surfaces, film choices and installation process.</p>
            </Link>
            <Link href="/architectural-wrap-offices-derby/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Office vinyl wrapping Derby</h3>
              <p className="mt-2 text-sm text-muted">Architectural vinyl wrapping for Derby office interiors — reception counters, breakout furniture, meeting room panels and feature walls.</p>
            </Link>
            <Link href="/window-film/restaurant-window-film-derby/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Restaurant window film Derby</h3>
              <p className="mt-2 text-sm text-muted">Frosted privacy film, solar control film and glass manifestation for Derby restaurants — Cathedral Quarter, Pride Park and across Derbyshire.</p>
            </Link>
            <Link href="/window-film/solar-control-film-derby/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Solar control film Derby</h3>
              <p className="mt-2 text-sm text-muted">Heat and glare reduction for Derby commercial properties — offices, restaurants, retail and hospitality venues.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-20">
        <div className="container mx-auto max-w-3xl">
          <div className="card-float border-2 border-accent/40 p-10 text-center md:p-12">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              Ready to refresh your Derby restaurant interior?
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              We survey Derby restaurants — approximately 45 minutes from South Yorkshire
              on the M1 and A38. Tell us the venue, the surfaces and your timeline —
              we&apos;ll put a specification and quote together and plan installation around
              your trading hours.
            </p>
            <Link href="/contact/" className="btn-primary mt-8 inline-block">
              Request a Derby Restaurant Wrap Survey →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
