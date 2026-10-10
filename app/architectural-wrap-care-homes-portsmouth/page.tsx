import type { Metadata } from "next";
import Link from "next/link";
import { FaqAccordion } from "@/components/FaqAccordion";
import { getServiceSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Care Home Vinyl Wrapping Portsmouth | Bedroom Furniture & Interior Surfaces | WRPX",
  description:
    "Architectural vinyl wrapping for care homes and nursing homes across Portsmouth, Hampshire and the wider South Coast — bedroom wardrobe door panels, bedside cabinet surfaces, corridor doors, nurses&apos; station counters, communal lounge panels and dining room furniture wrapped without replacement. Resident-sensitive scheduling, no construction noise, no wet trades, rooms usable the same day. All PO postcodes covered.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/architectural-wrap-care-homes-portsmouth/",
  },
};

const serviceSchema = getServiceSchema(
  "Care home vinyl wrapping Portsmouth — bedroom furniture, communal areas and interior surfaces",
  "Architectural vinyl wrapping for care homes and nursing homes across Portsmouth city and the wider Hampshire south coast. Bedroom wardrobe door panels, bedside cabinet surfaces, corridor doors, nurses' station counter fascias, dining room furniture panels and communal lounge surfaces wrapped in commercial-grade film. Resident-sensitive scheduling, no construction noise, no wet trades, rooms usable the same day."
);

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.wrpx.co.uk/" },
    { "@type": "ListItem", position: 2, name: "Architectural Vinyl Film", item: "https://www.wrpx.co.uk/architectural-vinyl-film/" },
    { "@type": "ListItem", position: 3, name: "Vinyl Wrapping for Care Homes", item: "https://www.wrpx.co.uk/architectural-wrap-care-homes/" },
    { "@type": "ListItem", position: 4, name: "Portsmouth", item: "https://www.wrpx.co.uk/architectural-wrap-care-homes-portsmouth/" },
  ],
};

const faqItems = [
  {
    q: "Which surfaces in Portsmouth care homes can be vinyl wrapped?",
    a: "Bedroom wardrobe door panels, bedside cabinet surfaces, chest of drawer fronts, corridor door panels, nurses' station counter fascias, dining room table edges and chair backs, communal lounge unit fronts and media wall panels, reception desk fascias and entrance cladding panels. Any flat or near-flat substrate in sound structural condition can typically be wrapped. We assess at survey and advise on any surface that needs preparation or is unsuitable for film application.",
  },
  {
    q: "Can wrapping be done in occupied rooms in Portsmouth care homes?",
    a: "Yes, with a small window of access per room. Wrapping a full bedroom suite typically takes 2 to 3 hours. We co-ordinate with care staff to access each room when the resident is in a communal area, at a meal, or has agreed to brief supervised access. Adhesive is water-based and odour-free. Tools are hand squeegees and a low-temperature heat gun — no louder than normal conversation. Rooms are fully usable immediately after we leave. No wet paint, no drying time, no displaced residents overnight.",
  },
  {
    q: "Do you work with CQC-regulated care homes in Portsmouth and the wider Hampshire coast?",
    a: "Yes — we work with Care Quality Commission (CQC) regulated care homes, nursing homes and residential care facilities across Portsmouth city and the wider Hampshire south coast including Gosport PO12, Fareham PO16/PO17 and Havant PO9. Our scheduling approach co-ordinates access times with care management, uses only odour-free adhesives, keeps noise to a minimum and clears up completely on the day. We can provide RAMS (Risk Assessment and Method Statements) documentation for any Portsmouth area care home contract as standard. Photographic sign-off is provided on completion for each surface area or bedroom.",
  },
  {
    q: "How long does care home vinyl wrapping last in Portsmouth?",
    a: "Commercial-grade architectural vinyl applied to care home bedroom furniture typically delivers 7 to 10 years before showing wear on normal-use surfaces. Communal areas — nurses' stations, dining room furniture and lounge panels — have higher contact frequency and are typically assessed at 5 to 8 years. We specify film grades matched to the surface type and contact level at survey. All edges are sealed to the manufacturer's specification, which is the most important factor in longevity on care home surfaces where regular cleaning with commercial products is standard practice. Portsmouth's coastal environment means buildings near the waterfront in PO1 and PO5 can have elevated internal humidity — we specify adhesive chemistry appropriate to coastal conditions at survey.",
  },
  {
    q: "Is vinyl wrapping cheaper than replacement for Portsmouth care homes?",
    a: "Yes — significantly cheaper in almost every case. Wrapping a full bedroom suite — wardrobe, bedside cabinet, chest of drawers — typically costs a fraction of what new furniture replacement would cost, with no disposal fees, no delivery disruption and no room downtime beyond the 2 to 3 hours of installation. For a Portsmouth care home looking to refresh 20, 30 or 40 bedrooms, the cost saving versus furniture replacement can run into tens of thousands of pounds. Corridor doors, communal lounge panels and dining room furniture follow the same cost ratio.",
  },
  {
    q: "Which Portsmouth and Hampshire postcodes do you cover for care home wrapping?",
    a: "We cover all Portsmouth and wider Hampshire PO postcodes — PO1 (Portsmouth city centre, Old Portsmouth, Portsea Island north), PO2 (Cosham, Hilsea, north of Portsea Island — residential care provision in the north Portsmouth suburbs), PO3 (Buckland, Hilsea — northern residential zone), PO4 (Southsea east, Milton, Eastney — established residential care area in Victorian stock close to the seafront), PO5 (Southsea west, Clarence Road area — care homes in the south Portsea Island residential zone), PO6 (Cosham, Drayton, Farlington — suburban north Portsmouth with period and post-war residential care homes). Wider south coast: Gosport PO12 and PO13 (Gosport peninsula across the harbour), Fareham PO14 to PO17 (Hampshire market town care provision), Havant PO9 (east Hampshire coast), Lee-on-the-Solent PO13. WRPX is based in South Yorkshire, approximately 3 hours from Portsmouth via the M1 south, M25 and M3/A3(M).",
  },
];

export default function CareHomeWrapPortsmouthPage() {
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
            <span className="text-foreground">Portsmouth</span>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="border-b border-border bg-card py-16 md:py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <p className="text-sm font-medium uppercase tracking-wide text-accent">
            Care Home Vinyl Wrapping · Portsmouth &amp; Hampshire South Coast
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Care home vinyl wrapping — Portsmouth
          </h1>
          <p className="mt-5 text-lg text-muted leading-relaxed">
            Architectural vinyl wrapping for care homes and nursing homes across
            Portsmouth city and the wider Hampshire south coast — Gosport, Fareham,
            Havant and the Solent coastal area. Bedroom furniture, corridor doors,
            nurses&apos; station counters, communal lounges and dining room furniture
            refreshed without removal or replacement. Resident-sensitive scheduling,
            odour-free adhesives, rooms usable immediately after installation. All
            PO postcodes covered. Approximately 3 hours from our South Yorkshire
            base via the M1 south, M25 and M3/A3(M).
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact/" className="btn-primary">
              Request a Portsmouth Survey →
            </Link>
            <Link href="/architectural-wrap-care-homes/" className="btn-secondary">
              Care Home Wrap Overview
            </Link>
          </div>
        </div>
      </section>

      {/* Portsmouth care home context */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Portsmouth care homes — the refurbishment challenge
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              Portsmouth is the UK&apos;s only island city, with its principal urban
              area on Portsea Island and a wider Hampshire south coast catchment
              that extends through Gosport, Fareham, Havant and the Solent coastal
              corridor. Portsmouth&apos;s care home sector is regulated by the Care
              Quality Commission (CQC), with residential and nursing care provision
              distributed across the island and the surrounding mainland Hampshire
              coast — a population with a significant retired and elderly component
              reflecting the south coast&apos;s established retirement appeal.
            </p>
            <p>
              Portsmouth&apos;s care home stock is concentrated in the established
              residential zones of Portsea Island. Cosham PO6 and Drayton PO6 in
              the north of the island — connected to the mainland by the M27 — carry
              substantial suburban care home provision in post-war and period
              residential streets. Southsea PO4 and PO5 on the southern seafront
              zone have care homes in the area&apos;s mix of Victorian townhouses, converted
              commercial properties and purpose-built facilities. The Gosport
              peninsula PO12/PO13 — across Portsmouth Harbour from the naval base —
              has a significant care home cluster in a semi-rural coastal setting.
            </p>
            <p>
              Portsmouth&apos;s coastal setting is a relevant consideration for vinyl
              specification. Buildings near the Portsea Island waterfront — PO1,
              PO4 and PO5 — and on the Gosport peninsula can experience elevated
              internal humidity from marine air, particularly in older stock with
              less controlled ventilation. We assess adhesive chemistry and film
              specification for coastal environments at survey, which matters for
              longevity of care home surface wrapping in this zone.
            </p>
            <p>
              WRPX is based in South Yorkshire and travels to Portsmouth for
              multi-day programmes. The M1 south from Doncaster connects via the
              M25 at junction 8, then the M3 south to the A3(M) south through
              Horndean into Portsmouth — approximately 3 hours in off-peak
              conditions. We stay locally during multi-day Portsmouth programmes
              rather than commuting.
            </p>
          </div>
        </div>
      </section>

      {/* Why wrap not replace */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Why Portsmouth care homes choose wrapping over replacement
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              Bedroom furniture replacement in an occupied care home involves
              temporary displacement of the resident, removal and disposal of
              existing furniture, delivery and installation of new furniture, and
              a period of disruption to the resident&apos;s environment that can be
              distressing — particularly for residents with dementia or other
              cognitive needs. For a 40-bedroom Portsmouth care home, a full
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
              For Portsmouth care homes looking to meet CQC environment
              expectations, demonstrate investment in resident accommodation quality,
              or simply refresh the appearance of ageing furniture ahead of a
              regulatory review, vinyl wrapping offers a fast, cost-effective and
              resident-friendly route to a visible improvement.
            </p>
          </div>
        </div>
      </section>

      {/* Surfaces grid */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-2xl font-semibold text-foreground md:text-3xl">
            Portsmouth care home surfaces we wrap
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
                for families visiting Portsmouth care homes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Working method */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            How Portsmouth care home programmes work
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              Portsmouth care home programmes are planned in advance with the care
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
              RAMS documentation is prepared as standard for every Portsmouth care
              home contract. Photographic sign-off — before and after images for each
              room or area — is provided on completion. For larger multi-floor
              programmes, we provide progress reports at the end of each day so the
              care home manager has a clear picture of progress.
            </p>
            <p>
              WRPX is based in South Yorkshire and travels to Portsmouth for multi-day
              and multi-week programmes. The M1 south from Doncaster connects via the
              M25 at junction 8, then the M3 south to the A3(M) south through
              Horndean into Portsmouth — approximately 3 hours in off-peak conditions.
              We stay locally during multi-day Portsmouth programmes, ensuring an
              early start on site each day.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-3xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Portsmouth care home wrap — common questions
          </h2>
          <FaqAccordion items={faqItems} />
        </div>
      </section>

      {/* Related links */}
      <section className="bg-card px-4 py-12">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-6 text-lg font-semibold text-foreground">Related Portsmouth and Hampshire services</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <Link href="/architectural-wrap-care-homes/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Care Home Vinyl Wrap — Overview</p>
              <p className="mt-1 text-xs text-muted">Full care home wrapping service nationwide</p>
            </Link>
            <Link href="/architectural-wrap-care-homes-southampton/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Care Home Wrap Southampton</p>
              <p className="mt-1 text-xs text-muted">Vinyl wrapping for Southampton care homes</p>
            </Link>
            <Link href="/architectural-wrap-student-accommodation-portsmouth/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Student Accommodation Wrap Portsmouth</p>
              <p className="mt-1 text-xs text-muted">PBSA void-period refurbishment Portsmouth</p>
            </Link>
            <Link href="/architectural-vinyl-film/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Architectural Vinyl Film</p>
              <p className="mt-1 text-xs text-muted">Full architectural wrapping service overview</p>
            </Link>
            <Link href="/window-film/care-home-window-film/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Window Film for Care Homes</p>
              <p className="mt-1 text-xs text-muted">Window film for care home glazing and privacy</p>
            </Link>
            <Link href="/contact/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Request a Survey</p>
              <p className="mt-1 text-xs text-muted">Get a scoped quote for your Portsmouth care home</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-20">
        <div className="container mx-auto max-w-3xl">
          <div className="card-float border-2 border-accent/40 p-10 text-center md:p-12">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              Portsmouth care home — get a survey and quote
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Send us your care home details — number of bedrooms, primary surfaces,
              and your preferred scheduling approach — and we&apos;ll come back with a
              scoped proposal. We cover all PO postcodes across Portsmouth city,
              Gosport, Fareham, Havant and the wider Hampshire south coast.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link href="/contact/" className="btn-primary">
                Request a Portsmouth Survey →
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
