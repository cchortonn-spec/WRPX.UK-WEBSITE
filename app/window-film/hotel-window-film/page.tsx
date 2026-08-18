import type { Metadata } from "next";
import Link from "next/link";
import { FaqAccordion } from "@/components/FaqAccordion";

export const metadata: Metadata = {
  title: "Window Film for Hotels | Privacy Film & Solar Control | WRPX",
  description:
    "Professional window film installation for hotels across South Yorkshire and the East Midlands — frosted privacy film for guest rooms and bathrooms, solar control film for glazed lounges and corridors. Out-of-hours access, minimal guest disruption.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/window-film/hotel-window-film/",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What types of window film are used in hotel guest rooms?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Frosted or etched-effect privacy film is the most common application in en-suite bathroom windows and glazed shower screens. Solar control film is used in south and west-facing guest rooms to reduce overheating without replacing the glazing. Decorative manifestation film is used on internal glass partitions for branding and safety purposes.",
      },
    },
    {
      "@type": "Question",
      name: "Can you install window film room by room in a working hotel?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We can work room by room or floor by floor in an operating hotel — co-ordinating with housekeeping to install in unoccupied rooms and move systematically through the building. A typical en-suite bathroom window takes 30–45 minutes. We can also work overnight or early morning where preferred.",
      },
    },
    {
      "@type": "Question",
      name: "Does window film look as good as etched or sandblasted glass?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Quality frosted film from 3M or Avery Dennison is indistinguishable from etched glass to a normal observer. The finish is uniform and clean. It is not the same as low-quality privacy film available in DIY stores.",
      },
    },
    {
      "@type": "Question",
      name: "How long does hotel window film last?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "In a hotel environment, quality window film typically lasts 7–12 years depending on orientation, film type and the quality of the glass substrate. En-suite bathroom applications last well due to limited UV exposure. South-facing solar control film has a slightly shorter service life in high-UV environments.",
      },
    },
    {
      "@type": "Question",
      name: "Can you work under our fit-out contractor or facilities team?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — white-label by default. We attend under your instructions, carry your paperwork, and report back to your project manager. The hotel operator sees your team throughout. Photographic documentation at completion.",
      },
    },
  ],
};

const faqItems = [
  {
    q: "What types of window film are used in hotel guest rooms?",
    a: "Frosted or etched-effect privacy film is the most common application in en-suite bathroom windows and glazed shower screens. Solar control film is used in south and west-facing guest rooms to reduce overheating without replacing the glazing. Decorative manifestation film is used on internal glass partitions for branding and safety purposes.",
  },
  {
    q: "Can you install window film room by room in a working hotel?",
    a: "Yes. We can work room by room or floor by floor in an operating hotel — co-ordinating with housekeeping to install in unoccupied rooms and move systematically through the building. A typical en-suite bathroom window takes 30–45 minutes. We can also work overnight or early morning where preferred.",
  },
  {
    q: "Does window film look as good as etched or sandblasted glass?",
    a: "Quality frosted film from 3M or Avery Dennison is indistinguishable from etched glass to a normal observer. The finish is uniform and clean. It is not the same as low-quality privacy film available in DIY stores.",
  },
  {
    q: "How long does hotel window film last?",
    a: "In a hotel environment, quality window film typically lasts 7–12 years depending on orientation, film type and the quality of the glass substrate. En-suite bathroom applications last well due to limited UV exposure. South-facing solar control film has a slightly shorter service life in high-UV environments.",
  },
  {
    q: "Can you work under our fit-out contractor or facilities team?",
    a: "Yes — white-label by default. We attend under your instructions, carry your paperwork, and report back to your project manager. The hotel operator sees your team throughout. Photographic documentation at completion.",
  },
];

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.wrpx.co.uk/" },
    { "@type": "ListItem", position: 2, name: "Window Film", item: "https://www.wrpx.co.uk/window-film/" },
    { "@type": "ListItem", position: 3, name: "Window Film for Hotels", item: "https://www.wrpx.co.uk/window-film/hotel-window-film/" },
  ],
};

export default function HotelWindowFilmPage() {
  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Breadcrumb */}
      <section className="border-b border-border bg-card px-4 py-3">
        <div className="container mx-auto max-w-4xl">
          <nav className="text-sm text-muted">
            <Link href="/" className="text-accent hover:underline">Home</Link>
            <span className="mx-2">›</span>
            <Link href="/window-film/" className="text-accent hover:underline">Window Film</Link>
            <span className="mx-2">›</span>
            <span className="text-foreground">Window Film for Hotels</span>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="border-b border-border bg-card py-16 md:py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <h1 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Window film for hotels — privacy, solar control and decorative glass treatment
          </h1>
          <p className="mt-5 text-lg text-muted leading-relaxed">
            Hotels need window film to work across two very different problems: privacy in en-suite bathrooms and guest rooms, and heat and glare control in south-facing glazed areas. WRPX installs both — frosted and etched-effect privacy film, and solar control film — across hotel properties in South Yorkshire and the East Midlands, with room-by-room or floor-by-floor scheduling to minimise guest disruption.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact/" className="btn-primary">
              Request a Hotel Survey →
            </Link>
            <Link href="/window-film/" className="btn-secondary">
              Window Film Overview
            </Link>
          </div>
        </div>
      </section>

      {/* Two types of hotel film */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-2xl font-semibold text-foreground md:text-3xl">
            The two types of window film hotels need
          </h2>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="card-float p-8">
              <h3 className="text-xl font-semibold text-foreground">Frosted and privacy film</h3>
              <p className="mt-4 text-muted leading-relaxed">
                En-suite bathrooms, glazed shower screens, ground-floor guest room windows and glazed partition walls all need privacy without blocking daylight. Frosted and etched-effect film provides total privacy from the outside while keeping rooms light. It is indistinguishable from sandblasted or etched glass at normal viewing distance — a quality finish for a guest-facing environment.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-muted">
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-accent">✓</span>
                  <span>En-suite bathroom windows and shower screens</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-accent">✓</span>
                  <span>Ground-floor guest room glazing</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-accent">✓</span>
                  <span>Internal glazed partitions (lobby, spa, wellness areas)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-accent">✓</span>
                  <span>Decorative and branding applications</span>
                </li>
              </ul>
              <Link href="/window-film/frosted-window-film/" className="mt-6 inline-block text-sm text-accent hover:underline">
                Frosted window film details →
              </Link>
            </div>
            <div className="card-float p-8">
              <h3 className="text-xl font-semibold text-foreground">Solar control film</h3>
              <p className="mt-4 text-muted leading-relaxed">
                South-facing glazed hotel lobbies, dining rooms and conservatory-style lounges overheat in summer — reducing guest comfort and increasing HVAC costs. Solar control film reduces solar heat gain by 40–79% and cuts UV transmission, protecting furnishings and flooring. The room stays cooler and brighter without replacing glazing or relying on blinds that block the view.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-muted">
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-accent">✓</span>
                  <span>Glazed lobbies and reception areas</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-accent">✓</span>
                  <span>South and west-facing guest rooms</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-accent">✓</span>
                  <span>Conservatory and orangery dining areas</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-accent">✓</span>
                  <span>Spa and pool glazed enclosures</span>
                </li>
              </ul>
              <Link href="/window-film/solar-control-film/" className="mt-6 inline-block text-sm text-accent hover:underline">
                Solar control film details →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Installation in working hotels */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Installation in an operational hotel
          </h2>
          <div className="space-y-6 text-muted leading-relaxed">
            <p>
              Most hotel window film programmes run in operational properties — not during full closure. We have worked in operational hotels before and understand what this involves: advance scheduling with housekeeping, working in rooms as they fall vacant, keeping corridors clear and equipment out of guest sight lines.
            </p>
            <p>
              <strong className="text-foreground">Room-by-room programmes.</strong> For a full en-suite bathroom programme, we work systematically through the room schedule — installing in rooms as they check out and before the next check-in. A standard en-suite bathroom window takes 30–45 minutes. Two installers can complete 10–15 rooms in a working day depending on access.
            </p>
            <p>
              <strong className="text-foreground">Overnight and early-morning access.</strong> For glazed common areas — lobbies, dining rooms, lounge spaces — we prefer overnight or early-morning access to avoid installing in front of guests. We co-ordinate the access window with your operations team.
            </p>
            <p>
              <strong className="text-foreground">White-label.</strong> We attend under your fit-out contractor&apos;s or facilities team&apos;s instructions. The hotel brand and operator see your company throughout. Photographic sign-off provided at completion.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-3xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Hotel window film questions
          </h2>
          <FaqAccordion items={faqItems} />
        </div>
      </section>

      {/* Related */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Related services for hotels
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <Link href="/architectural-wrap-hotels/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Hotel interior vinyl wrapping</h3>
              <p className="mt-2 text-sm text-muted">Kitchen surfaces, bedroom furniture and reception desk wrapping for hotel refurbishments.</p>
            </Link>
            <Link href="/window-film/frosted-window-film/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Frosted window film</h3>
              <p className="mt-2 text-sm text-muted">Privacy film for bathrooms, partitions and ground-floor glazing.</p>
            </Link>
            <Link href="/window-film/solar-control-film/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Solar control film</h3>
              <p className="mt-2 text-sm text-muted">Heat and glare reduction for glazed lounges, conservatories and south-facing rooms.</p>
            </Link>
            <Link href="/hospitality-graphics-installation/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Hospitality graphics installation</h3>
              <p className="mt-2 text-sm text-muted">Subcontract vinyl graphics installation for hotel and restaurant fit-out contractors.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-20">
        <div className="container mx-auto max-w-3xl">
          <div className="card-float border-2 border-accent/40 p-10 text-center md:p-12">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              Planning a hotel window film programme?
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              We survey hotel window film programmes across South Yorkshire and the East Midlands. Tell us the property, what you need and we&apos;ll advise on specification and scheduling.
            </p>
            <Link href="/contact/" className="btn-primary mt-8 inline-block">
              Request a Hotel Survey →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
