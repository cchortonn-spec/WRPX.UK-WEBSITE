import type { Metadata } from "next";
import Link from "next/link";
import { FaqAccordion } from "@/components/FaqAccordion";
import { getServiceSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Vinyl Wrapping for Care Home Interiors — Bedroom Furniture, Communal Areas & Surfaces | WRPX",
  description:
    "Architectural vinyl wrapping for care home interiors across South Yorkshire and the East Midlands — bedroom furniture surfaces, communal lounge panels, corridor doors, nurses' station counters and dining room furniture wrapped and refreshed without replacement. Resident-sensitive scheduling, no construction noise.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/architectural-wrap-care-homes/",
  },
};

const serviceSchema = getServiceSchema(
  "Vinyl wrapping for care home interiors — bedroom furniture, communal areas and surfaces",
  "Architectural vinyl wrapping for care home and nursing home interiors across South Yorkshire and the East Midlands. Bedroom furniture surfaces, wardrobe door panels, communal lounge panels, corridor doors and skirting boards, nurses' station counter fascias, dining room furniture and reception areas wrapped in commercial-grade film. Resident-sensitive scheduling, no replacement, no construction noise."
);

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.wrpx.co.uk/" },
    { "@type": "ListItem", position: 2, name: "Architectural Vinyl Film", item: "https://www.wrpx.co.uk/architectural-vinyl-film/" },
    { "@type": "ListItem", position: 3, name: "Vinyl Wrapping for Care Home Interiors", item: "https://www.wrpx.co.uk/architectural-wrap-care-homes/" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Which surfaces in a care home can be vinyl wrapped?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Bedroom wardrobe door panels, bedside cabinet surfaces, chest of drawer fronts, corridor door panels, skirting board covers, nurses' station counter fascias, dining room table edges and chair backs, communal lounge unit fronts and media wall panels, reception desk fascias and entrance cladding panels. Any flat or near-flat substrate in sound condition can typically be wrapped. We assess at survey and advise on any surface that needs preparation or is unsuitable.",
      },
    },
    {
      "@type": "Question",
      name: "How is vinyl wrapping different from painting or replacement?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Painting requires masking, drying time and usually vacating the room. Replacement means construction work, noise, dust, disposal and budget sign-off. Vinyl wrapping goes over the existing surface with no wet trades, no dust, no disposal and no structural alteration. A wardrobe door can be wrapped in 20-30 minutes per door. The room can be used the same day. Film is available in wood-grain finishes, stone effects, solid colours and metallic — all indistinguishable from a new surface at normal viewing distance.",
      },
    },
    {
      "@type": "Question",
      name: "Can wrapping be done in occupied rooms?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, with a small window of access. Wrapping a full bedroom suite typically takes 2-3 hours. We coordinate with care staff to access each room when the resident is in a communal area or has agreed to brief supervised access. Adhesive is water-based and odour-free. Tools are hand squeegees and a low-temperature heat gun — no louder than normal conversation. Rooms are fully usable immediately after we leave. No wet paint, no drying time, no displaced residents overnight.",
      },
    },
    {
      "@type": "Question",
      name: "How long does care home vinyl wrapping last?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Commercial-grade architectural film has a rated life of 10-12 years in interior applications, assuming correct surface preparation. In care home environments with regular cleaning regimes, film holds well provided the correct cleaning products are used — standard multi-surface spray cleaners are fine; avoid abrasive pads and very high-concentration bleach solutions directly on film edges. We supply care instructions on completion. Spot repairs are straightforward if isolated damage occurs.",
      },
    },
    {
      "@type": "Question",
      name: "Can you work across multiple care homes for a group operator?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We run rolling programmes for care home groups — one specification, one project manager, consistent installation standard across every site. We work to your programme schedule, provide standardised photographic completion records per site, and invoice per site or per programme as preferred. For group refurbishment programmes we can start with a pilot site and roll out an agreed specification across the estate.",
      },
    },
  ],
};

const faqItems = [
  {
    q: "Which surfaces in a care home can be vinyl wrapped?",
    a: "Bedroom wardrobe door panels, bedside cabinet surfaces, chest of drawer fronts, corridor door panels, skirting board covers, nurses' station counter fascias, dining room table edges and chair backs, communal lounge unit fronts and media wall panels, reception desk fascias and entrance cladding panels. Any flat or near-flat substrate in sound condition can typically be wrapped. We assess at survey and advise on any surface that needs preparation or is unsuitable.",
  },
  {
    q: "How is vinyl wrapping different from painting or replacement?",
    a: "Painting requires masking, drying time and usually vacating the room. Replacement means construction work, noise, dust, disposal and budget sign-off. Vinyl wrapping goes over the existing surface with no wet trades, no dust, no disposal and no structural alteration. A wardrobe door can be wrapped in 20-30 minutes per door. The room can be used the same day. Film is available in wood-grain finishes, stone effects, solid colours and metallic — all indistinguishable from a new surface at normal viewing distance.",
  },
  {
    q: "Can wrapping be done in occupied rooms?",
    a: "Yes, with a small window of access. Wrapping a full bedroom suite typically takes 2-3 hours. We coordinate with care staff to access each room when the resident is in a communal area or has agreed to brief supervised access. Adhesive is water-based and odour-free. Tools are hand squeegees and a low-temperature heat gun — no louder than normal conversation. Rooms are fully usable immediately after we leave. No wet paint, no drying time, no displaced residents overnight.",
  },
  {
    q: "How long does care home vinyl wrapping last?",
    a: "Commercial-grade architectural film has a rated life of 10-12 years in interior applications, assuming correct surface preparation. In care home environments with regular cleaning regimes, film holds well provided the correct cleaning products are used — standard multi-surface spray cleaners are fine; avoid abrasive pads and very high-concentration bleach solutions directly on film edges. We supply care instructions on completion. Spot repairs are straightforward if isolated damage occurs.",
  },
  {
    q: "Can you work across multiple care homes for a group operator?",
    a: "Yes. We run rolling programmes for care home groups — one specification, one project manager, consistent installation standard across every site. We work to your programme schedule, provide standardised photographic completion records per site, and invoice per site or per programme as preferred. For group refurbishment programmes we can start with a pilot site and roll out an agreed specification across the estate.",
  },
];

export default function ArchitecturalWrapCareHomesPage() {
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
            <span className="text-foreground">Vinyl Wrapping for Care Homes</span>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="border-b border-border bg-card py-16 md:py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <p className="text-sm font-medium uppercase tracking-wide text-accent">
            Architectural Vinyl Wrapping · Care Home Interiors
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Vinyl wrapping for care home interiors — refresh bedroom furniture, communal areas and corridor surfaces without replacement
          </h1>
          <p className="mt-5 text-lg text-muted leading-relaxed">
            Care home furniture and surface wrapping is the quiet alternative to replacement or redecoration. Bedroom wardrobe panels, bedside cabinets, nurses&apos; station counters, communal lounge units and corridor doors wrapped in commercial architectural film — durable, cleanable, and indistinguishable from a new surface. No construction work, no dust, no room vacated overnight. Scheduled around residents, one room at a time.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact/" className="btn-primary">
              Request a Care Home Survey →
            </Link>
            <Link href="/architectural-vinyl-film/" className="btn-secondary">
              Architectural Wrapping Overview
            </Link>
          </div>
        </div>
      </section>

      {/* What can be wrapped */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-2xl font-semibold text-foreground md:text-3xl">
            Care home surfaces we wrap
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="card-float p-7">
              <h3 className="text-lg font-semibold text-foreground">Resident bedrooms</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Wardrobe door panels, chest of drawer fronts, bedside cabinet tops and sides,
                fitted bedroom unit fronts. Wood-grain, stone or solid colour films available.
                Room usable the same day — no paint drying, no displacement.
              </p>
            </div>
            <div className="card-float p-7">
              <h3 className="text-lg font-semibold text-foreground">Communal lounges &amp; dining</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Lounge unit fascias, media wall panels, dining room furniture edges and chair
                backs. Feature wall wrapping for reception and lounge focal walls. Phased
                across your busier and quieter periods so the space stays usable throughout.
              </p>
            </div>
            <div className="card-float p-7">
              <h3 className="text-lg font-semibold text-foreground">Nurses&apos; station &amp; reception</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Counter fascias, desk front panels, reception desk surfaces. Often the most
                visible surface to visiting families — a wrapped counter looks freshly refurbished
                for a fraction of the cost of a new counter or joinery.
              </p>
            </div>
            <div className="card-float p-7">
              <h3 className="text-lg font-semibold text-foreground">Corridor doors &amp; panels</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Door panels, door frame surrounds, dado rail capping, skirting board cover
                panels and corridor cladding boards. Transforms dated corridor aesthetic without
                plastering or repainting — and without the smell of wet paint in a living environment.
              </p>
            </div>
            <div className="card-float p-7">
              <h3 className="text-lg font-semibold text-foreground">Activity &amp; therapy rooms</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Cupboard doors, storage unit fronts, worktop surfaces. Durable film handles
                regular contact and cleaning without degrading. Activity room wrapping is often
                the easiest room to start with — lower resident sensitivity, easier access scheduling.
              </p>
            </div>
            <div className="card-float p-7">
              <h3 className="text-lg font-semibold text-foreground">Group estate programmes</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                One specification across your whole estate — consistent colour and finish on
                every site, single project manager, standardised completion reporting per home.
                Pilot one site and roll out. We work to your planned maintenance schedule.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why wrap vs replace */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Why vinyl wrapping rather than replacement or repainting
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-4 text-muted leading-relaxed">
              <p>
                <strong className="text-foreground">No wet trades, no smell.</strong> Paint and
                varnish fumes in a living environment occupied by elderly residents is a genuine
                welfare issue. Vinyl film uses water-based adhesive — odour-free within minutes of
                application. No masking, no drying wait, no smell in the corridor or room.
              </p>
              <p>
                <strong className="text-foreground">No construction disruption.</strong> Joinery
                replacement in an occupied room means noise, disposal of the old unit and a
                disrupted room for days. Wrapping the existing furniture takes hours, not days.
                Residents can return to their room the same day with no change to the physical
                layout — same furniture, same positions, new surfaces.
              </p>
            </div>
            <div className="space-y-4 text-muted leading-relaxed">
              <p>
                <strong className="text-foreground">Lower cost than replacement.</strong> Commercial
                architectural film typically costs 20–35% of a full furniture replacement on a
                per-room basis, excluding the disruption cost. For a care home with 40+ bedrooms,
                the difference in budget is significant — and the outcome to residents and families
                is visually identical.
              </p>
              <p>
                <strong className="text-foreground">Cleanable and CQC-ready.</strong> Commercial
                architectural film creates a smooth, non-porous surface that cleans easily with
                standard multi-surface products used in care environments. Compliant with regular
                cleaning schedules. Not a harbourage surface. Film durability is rated 10–12 years
                in interior use — a full planned maintenance cycle.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-3xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Care home vinyl wrapping questions
          </h2>
          <FaqAccordion items={faqItems} />
        </div>
      </section>

      {/* Related */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Related services
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <Link href="/architectural-vinyl-film/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Architectural vinyl film — overview</h3>
              <p className="mt-2 text-sm text-muted">Full range of architectural wrap for commercial and residential surfaces.</p>
            </Link>
            <Link href="/architectural-wrap-hotels/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Hotel interior vinyl wrapping</h3>
              <p className="mt-2 text-sm text-muted">Bedroom furniture, joinery and reception surfaces in hotels and serviced accommodation.</p>
            </Link>
            <Link href="/window-film/care-home-window-film/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Window film for care homes</h3>
              <p className="mt-2 text-sm text-muted">Privacy film, solar control and DDA manifestation for care home glazing.</p>
            </Link>
            <Link href="/window-film/healthcare-window-film/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Window film for healthcare</h3>
              <p className="mt-2 text-sm text-muted">NHS, GP surgeries, private clinics and hospital environments.</p>
            </Link>
            <Link href="/architectural-wrap-education/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Educational building vinyl wrapping</h3>
              <p className="mt-2 text-sm text-muted">Schools, universities and student accommodation interior wrapping.</p>
            </Link>
            <Link href="/contact/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Request a care home survey</h3>
              <p className="mt-2 text-sm text-muted">Send us your site details and we will advise on surfaces and schedule.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-20">
        <div className="container mx-auto max-w-3xl">
          <div className="card-float border-2 border-accent/40 p-10 text-center md:p-12">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              Planning a care home refurbishment programme?
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              We survey care homes and nursing homes across South Yorkshire and the East Midlands.
              Tell us the number of rooms, target surfaces and your preferred schedule — we will
              advise on film specification and programme the work around your residents.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link href="/contact/" className="btn-primary">
                Request a Care Home Survey →
              </Link>
              <Link href="/architectural-vinyl-film/" className="btn-secondary">
                Architectural Wrapping Overview
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
