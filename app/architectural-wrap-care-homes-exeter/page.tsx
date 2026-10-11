import type { Metadata } from "next";
import Link from "next/link";
import { FaqAccordion } from "@/components/FaqAccordion";
import { getServiceSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Care Home Vinyl Wrapping Exeter | Bedroom Furniture & Interior Surfaces | WRPX",
  description:
    "Architectural vinyl wrapping for care homes and nursing homes across Exeter and Devon — bedroom wardrobe door panels, bedside cabinet surfaces, corridor doors, nurses&apos; station counters, communal lounge panels and dining room furniture wrapped without replacement. Resident-sensitive scheduling, no construction noise, no wet trades, rooms usable the same day. All Exeter EX postcodes covered.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/architectural-wrap-care-homes-exeter/",
  },
};

const serviceSchema = getServiceSchema(
  "Care home vinyl wrapping Exeter — bedroom furniture, communal areas and interior surfaces",
  "Architectural vinyl wrapping for care homes and nursing homes across Exeter city and the wider Devon area. Bedroom wardrobe door panels, bedside cabinet surfaces, corridor doors, nurses' station counter fascias, dining room furniture panels and communal lounge surfaces wrapped in commercial-grade film. Resident-sensitive scheduling, no construction noise, no wet trades, rooms usable the same day. CQC-regulated care homes across all Exeter EX postcodes and wider Devon."
);

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.wrpx.co.uk/" },
    { "@type": "ListItem", position: 2, name: "Architectural Vinyl Film", item: "https://www.wrpx.co.uk/architectural-vinyl-film/" },
    { "@type": "ListItem", position: 3, name: "Vinyl Wrapping for Care Homes", item: "https://www.wrpx.co.uk/architectural-wrap-care-homes/" },
    { "@type": "ListItem", position: 4, name: "Exeter", item: "https://www.wrpx.co.uk/architectural-wrap-care-homes-exeter/" },
  ],
};

const faqItems = [
  {
    q: "Which surfaces in Exeter care homes can be vinyl wrapped?",
    a: "Bedroom wardrobe door panels, bedside cabinet surfaces, chest of drawer fronts, corridor door panels, nurses' station counter fascias, dining room table edges and chair backs, communal lounge unit fronts and media wall panels, reception desk fascias and entrance cladding panels. Any flat or near-flat substrate in sound structural condition can typically be wrapped. We assess at survey and advise on any surface that needs preparation or is unsuitable for film application.",
  },
  {
    q: "Can wrapping be done in occupied rooms in Exeter care homes?",
    a: "Yes, with a small window of access per room. Wrapping a full bedroom suite typically takes 2 to 3 hours. We co-ordinate with care staff to access each room when the resident is in a communal area, at a meal, or has agreed to brief supervised access. Adhesive is water-based and odour-free. Tools are hand squeegees and a low-temperature heat gun — no louder than normal conversation. Rooms are fully usable immediately after we leave. No wet paint, no drying time, no displaced residents overnight.",
  },
  {
    q: "Do you work with CQC-regulated care homes in Exeter and across Devon?",
    a: "Yes — we work with Care Quality Commission (CQC) regulated care homes, nursing homes and residential care facilities across Exeter city and the wider Devon county. Our scheduling approach co-ordinates access times with care management, uses only odour-free adhesives, keeps noise to a minimum and clears up completely on the day. We can provide RAMS (Risk Assessment and Method Statements) documentation for any Exeter or Devon care home contract as standard. Photographic sign-off is provided on completion for each surface area or bedroom.",
  },
  {
    q: "How long does care home vinyl wrapping last in Exeter?",
    a: "Commercial-grade architectural vinyl applied to care home bedroom furniture typically delivers 7 to 10 years before showing wear on normal-use surfaces. Communal areas — nurses' stations, dining room furniture and lounge panels — have higher contact frequency and are typically assessed at 5 to 8 years. We specify film grades matched to the surface type and contact level at survey. All edges are sealed to the manufacturer's specification, which is the most important factor in longevity on care home surfaces where regular cleaning with commercial products is standard practice. Devon's milder, wetter climate means some Exeter care homes — particularly older buildings in lower valley positions or near the Exe estuary — can have elevated internal humidity levels. We specify adhesive chemistry appropriate to the environment at survey.",
  },
  {
    q: "Is vinyl wrapping cheaper than replacement for Exeter care homes?",
    a: "Yes — significantly cheaper in almost every case. Wrapping a full bedroom suite — wardrobe, bedside cabinet, chest of drawers — typically costs a fraction of what new furniture replacement would cost, with no disposal fees, no delivery disruption and no room downtime beyond the 2 to 3 hours of installation. For an Exeter or Devon care home looking to refresh 20, 30 or 40 bedrooms, the cost saving versus furniture replacement can run into tens of thousands of pounds. Corridor doors, communal lounge panels and dining room furniture follow the same cost ratio.",
  },
  {
    q: "Which Exeter and Devon postcodes do you cover for care home wrapping?",
    a: "We cover all Exeter and Devon EX postcodes — EX1 (Exeter city centre, St David's, Heavitree — care homes in the established central Exeter residential zones), EX2 (Exeter south — Topsham Road, Countess Wear, Alphington, Wonford — suburban south Exeter care provision), EX3 (Topsham — the Exe estuary village zone with residential care in converted properties and purpose-built facilities), EX4 (Exeter north — St Thomas, Pennsylvania, Stoke Hill — established north Exeter residential and care provision). Wider Devon: EX8 (Exmouth — east Devon coastal retirement and care zone), EX10 (Sidmouth — east Devon care homes serving the retirement population), EX14 (Honiton — east Devon market town care provision), EX16 (Tiverton — mid Devon care homes), EX31 (Barnstaple — north Devon's principal town care sector), EX39 (Bideford — north Devon coastal care provision), TQ1-TQ14 (Torbay and south Devon — Torquay, Paignton, Newton Abbot care home cluster). WRPX is based in South Yorkshire, approximately 3 hours 30 minutes from Exeter via the M1 south and M5 south to junction 31.",
  },
];

export default function CareHomeWrapExeterPage() {
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

      {/* Breadcrumb */}
      <section className="border-b border-border bg-card px-4 py-3">
        <div className="container mx-auto max-w-4xl">
          <nav className="text-sm text-muted">
            <Link href="/" className="text-accent hover:underline">Home</Link>
            <span className="mx-2">›</span>
            <Link href="/architectural-vinyl-film/" className="text-accent hover:underline">Architectural Vinyl Film</Link>
            <span className="mx-2">›</span>
            <Link href="/architectural-wrap-care-homes/" className="text-accent hover:underline">Vinyl Wrapping for Care Homes</Link>
            <span className="mx-2">›</span>
            <span className="text-foreground">Exeter</span>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="border-b border-border bg-card py-16 md:py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <p className="text-sm font-medium uppercase tracking-wide text-accent">
            Care Home Vinyl Wrapping · Exeter &amp; Devon
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Care home vinyl wrapping — Exeter
          </h1>
          <p className="mt-5 text-lg text-muted leading-relaxed">
            Architectural vinyl wrapping for care homes and nursing homes across
            Exeter city and Devon — bedroom furniture, corridor doors, nurses&apos;
            station counters, communal lounges and dining room furniture refreshed
            without removal or replacement. Resident-sensitive scheduling,
            odour-free adhesives, rooms usable immediately after installation. All
            Exeter EX postcodes covered, with wider Devon reach across Exmouth,
            Sidmouth, Tiverton, Barnstaple, Torbay and south Devon. Approximately
            3 hours 30 minutes from our South Yorkshire base via the M1 and M5 south.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact/" className="btn-primary">
              Request an Exeter Survey →
            </Link>
            <Link href="/architectural-wrap-care-homes/" className="btn-secondary">
              Care Home Wrap Overview
            </Link>
          </div>
        </div>
      </section>

      {/* Exeter care home context */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Exeter and Devon care homes — the refurbishment challenge
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              Exeter is Devon&apos;s county town and the administrative and commercial
              centre of the South West. Devon as a county has one of the UK&apos;s
              highest proportions of older residents — a retirement destination
              for decades — and the care home sector reflects that: a large,
              distributed network of residential care homes, nursing homes and
              specialist dementia facilities spread across Exeter city and the
              wider county from Barnstaple in the north to Torbay in the south.
            </p>
            <p>
              Exeter&apos;s care home stock is regulated by the Care Quality Commission
              (CQC) and includes a mix of purpose-built facilities and period
              residential buildings converted to care use. The central Exeter
              zones of Heavitree EX1 and Wonford EX2 carry established residential
              care provision close to the Royal Devon and Exeter Hospital — a
              practical consideration for care homes sourcing NHS-step-down beds.
              Topsham EX3 on the Exe estuary and Exmouth EX8 to the east have
              care homes serving the affluent east Devon coastal retirement
              population. Tiverton EX16 and Barnstaple EX31 cover mid and north
              Devon&apos;s county town care provision.
            </p>
            <p>
              Devon&apos;s climate is relevant to vinyl specification. Exeter sits
              in a river valley below Dartmoor, with a wetter, milder climate
              than many English cities. Care homes in lower valley positions
              or near the Exe estuary — particularly older converted buildings —
              can carry elevated internal humidity levels that affect adhesive
              specification. We assess conditions at survey and specify film and
              adhesive chemistry appropriate to each Exeter environment.
            </p>
            <p>
              WRPX is based in South Yorkshire and travels to Exeter for
              multi-day programmes. The M1 south from Doncaster connects via
              the M5 south to junction 31, then the A30 into Exeter —
              approximately 3 hours 30 minutes in off-peak conditions. We stay
              locally during multi-day Exeter and Devon programmes rather than
              commuting.
            </p>
          </div>
        </div>
      </section>

      {/* Why wrap not replace */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Why Exeter care homes choose wrapping over replacement
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              Bedroom furniture replacement in an occupied care home involves
              temporary displacement of the resident, removal and disposal of
              existing furniture, delivery and installation of new furniture, and
              a period of disruption to the resident&apos;s environment that can be
              distressing — particularly for residents with dementia or other
              cognitive needs. For a 40-bedroom Exeter care home, a full
              furniture refresh by replacement can cost upward of £100,000 and
              take several months to execute safely.
            </p>
            <p>
              Vinyl wrapping removes all of those problems. The resident remains in
              their room or moves to a communal area for the 2 to 3 hours of
              installation. No furniture is removed. No disposal is needed. There
              is no paint, no solvent, no drying time and no overnight displacement.
              The room is returned to full use immediately after the installer leaves
              — with a completely fresh-looking finish at a fraction of the
              replacement cost.
            </p>
            <p>
              For Exeter care homes looking to meet CQC environment expectations,
              demonstrate investment in resident accommodation quality, or simply
              refresh the appearance of ageing furniture ahead of a regulatory
              review, vinyl wrapping offers a fast, cost-effective and
              resident-friendly route to a visible improvement without the
              operational disruption that replacement entails.
            </p>
          </div>
        </div>
      </section>

      {/* Surfaces grid */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-2xl font-semibold text-foreground md:text-3xl">
            Exeter care home surfaces we wrap
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Bedroom wardrobe door panels
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Wardrobe door fronts are typically the most visible furniture
                surface in a care home bedroom. Worn, scratched or discoloured
                laminate can be wrapped in 30 to 45 minutes per door panel.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Bedside cabinet surfaces
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Bedside cabinet door fronts, drawer faces and top surfaces
                wrapped to a consistent finish — matching the wardrobe and
                chest of drawers as part of a full bedroom suite refresh.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Corridor door panels
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Corridor fire door leaf panels and bedroom door fronts absorb
                daily impact and contact marks. Wrapping refreshes the visual
                standard of the whole floor without repainting or door replacement.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Nurses&apos; station counter fascias
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Counter front panels and side cladding at nurses&apos; station
                positions wrapped in durable commercial film — refreshing the
                appearance of the care home&apos;s central hub without structural works.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Communal lounge and dining furniture
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Storage unit fronts, media wall panels, dining table edges and
                chair back panels in communal areas wrapped during off-peak or
                overnight access windows.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Reception and entrance surfaces
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Reception desk fascia cladding, entrance lobby panel surfaces
                and signage board bases wrapped to improve the first impression
                for families visiting Exeter and Devon care homes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Working method */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            How Exeter care home programmes work
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              Exeter care home programmes are planned in advance with the care
              home manager or facilities lead. We confirm access times, scheduling
              approach (room-by-room versus floor-by-floor), RAMS requirements and
              sign-off format before mobilisation. We do not arrive and start without
              a confirmed access plan.
            </p>
            <p>
              On-site, we co-ordinate room access directly with care staff. A typical
              bedroom suite — wardrobe, bedside cabinet, chest of drawers — takes 2 to
              3 hours including surface preparation and final inspection. Corridor
              access is by arrangement to minimise impact on resident movement. All
              materials are packed in and packed out — no waste is left on site.
            </p>
            <p>
              RAMS documentation is prepared as standard for every Exeter care home
              contract. Photographic sign-off — before and after images for each
              room or area — is provided on completion. For larger multi-floor Devon
              programmes, we provide progress reports at the end of each day so
              the care home manager has a clear picture of progress.
            </p>
            <p>
              WRPX is based in South Yorkshire and travels to Exeter for multi-day
              and multi-week programmes. The M1 south from Doncaster connects via the
              M5 south to junction 31, then the A30 into Exeter — approximately
              3 hours 30 minutes in off-peak conditions. We stay locally during
              multi-day Exeter programmes, ensuring an early start on site each day.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-3xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Exeter care home wrap — common questions
          </h2>
          <FaqAccordion items={faqItems} />
        </div>
      </section>

      {/* Related links */}
      <section className="bg-card px-4 py-12">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-6 text-lg font-semibold text-foreground">Related Exeter and Devon services</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <Link href="/architectural-wrap-care-homes/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Care Home Vinyl Wrap — Overview</p>
              <p className="mt-1 text-xs text-muted">Full care home wrapping service nationwide</p>
            </Link>
            <Link href="/architectural-wrap-care-homes-bristol/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Care Home Wrap Bristol</p>
              <p className="mt-1 text-xs text-muted">Vinyl wrapping for Bristol care homes</p>
            </Link>
            <Link href="/architectural-wrap-student-accommodation-exeter/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Student Accommodation Wrap Exeter</p>
              <p className="mt-1 text-xs text-muted">PBSA void-period refurbishment Exeter</p>
            </Link>
            <Link href="/window-film/retail-window-film-exeter/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Retail Window Film Exeter</p>
              <p className="mt-1 text-xs text-muted">Window film for Exeter retail and commercial glazing</p>
            </Link>
            <Link href="/architectural-vinyl-film/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Architectural Vinyl Film</p>
              <p className="mt-1 text-xs text-muted">Full architectural wrapping service overview</p>
            </Link>
            <Link href="/contact/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Request a Survey</p>
              <p className="mt-1 text-xs text-muted">Get a scoped quote for your Exeter care home</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-20">
        <div className="container mx-auto max-w-3xl">
          <div className="card-float border-2 border-accent/40 p-10 text-center md:p-12">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              Exeter care home — get a survey and quote
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Send us your care home details — number of bedrooms, primary surfaces,
              and your preferred scheduling approach — and we&apos;ll come back with a
              scoped proposal. We cover all EX postcodes across Exeter city and
              the wider Devon county including Exmouth, Tiverton, Barnstaple
              and Torbay.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link href="/contact/" className="btn-primary">
                Request an Exeter Survey →
              </Link>
              <Link href="/architectural-wrap-care-homes/" className="btn-secondary">
                Care Home Wrap Overview
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
