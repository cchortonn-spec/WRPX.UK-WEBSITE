import type { Metadata } from "next";
import Link from "next/link";
import { getServiceSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Student Accommodation Vinyl Wrapping | Kitchen & Furniture Refurbishment | WRPX",
  description:
    "Vinyl wrapping for student accommodation refurbishments across South Yorkshire and the East Midlands. Kitchen doors, communal surfaces, furniture and reception areas wrapped during void periods. Fast turnaround, commercial specification.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/architectural-wrap-student-accommodation/",
  },
};

const serviceSchema = getServiceSchema(
  "Student accommodation vinyl wrapping — kitchens, furniture and communal surfaces",
  "Architectural vinyl wrapping for student accommodation refurbishments across South Yorkshire and the East Midlands. Kitchen unit doors, communal area furniture, reception and corridor surfaces wrapped during void periods. Installation-only, commercial specification, photographic sign-off."
);

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.wrpx.co.uk/" },
    { "@type": "ListItem", position: 2, name: "Architectural Vinyl Film", item: "https://www.wrpx.co.uk/architectural-vinyl-film/" },
    { "@type": "ListItem", position: 3, name: "Student Accommodation Vinyl Wrapping", item: "https://www.wrpx.co.uk/architectural-wrap-student-accommodation/" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What surfaces in student accommodation can be vinyl wrapped?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Kitchen unit doors and drawer fronts are the most common application — student kitchen units take a lot of hard use and wrapping restores the appearance at a fraction of replacement cost. Communal area furniture panels, reception desk fascias, corridor doors and notice board surrounds are also suitable.",
      },
    },
    {
      "@type": "Question",
      name: "Can you complete a block during the summer void period?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — the summer void is the ideal window. We can work through a block systematically, completing flat by flat or floor by floor, within a confirmed void period. We agree the schedule with your facilities team before mobilisation.",
      },
    },
    {
      "@type": "Question",
      name: "How does the finish hold up to student use?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We specify commercial-grade architectural film for student accommodation applications — not standard consumer-grade product. Commercial film on kitchen unit doors typically lasts 5–8 years in student accommodation with normal use. High-contact edges are assessed at survey.",
      },
    },
    {
      "@type": "Question",
      name: "Can you work under our FM contractor's instructions?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — white-label by default. We attend under your facilities or refurbishment contractor's instructions and report back to your project manager. Photographic documentation at sign-off. The accommodation operator or university sees your team throughout.",
      },
    },
    {
      "@type": "Question",
      name: "Do you cover student accommodation outside Sheffield and South Yorkshire?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We regularly cover South Yorkshire, West Yorkshire, the East Midlands, and wider catchments for programme work. Leeds, Sheffield, Nottingham, Derby and Leicester are all within regular working range.",
      },
    },
  ],
};

const faqItems = [
  {
    q: "What surfaces in student accommodation can be vinyl wrapped?",
    a: "Kitchen unit doors and drawer fronts are the most common application — student kitchen units take a lot of hard use and wrapping restores the appearance at a fraction of replacement cost. Communal area furniture panels, reception desk fascias, corridor doors and notice board surrounds are also suitable.",
  },
  {
    q: "Can you complete a block during the summer void period?",
    a: "Yes — the summer void is the ideal window. We can work through a block systematically, completing flat by flat or floor by floor, within a confirmed void period. We agree the schedule with your facilities team before mobilisation.",
  },
  {
    q: "How does the finish hold up to student use?",
    a: "We specify commercial-grade architectural film for student accommodation applications — not standard consumer-grade product. Commercial film on kitchen unit doors typically lasts 5–8 years in student accommodation with normal use. High-contact edges are assessed at survey.",
  },
  {
    q: "Can you work under our FM contractor's instructions?",
    a: "Yes — white-label by default. We attend under your facilities or refurbishment contractor's instructions and report back to your project manager. Photographic documentation at sign-off. The accommodation operator or university sees your team throughout.",
  },
  {
    q: "Do you cover student accommodation outside Sheffield and South Yorkshire?",
    a: "Yes. We regularly cover South Yorkshire, West Yorkshire, the East Midlands, and wider catchments for programme work. Leeds, Sheffield, Nottingham, Derby and Leicester are all within regular working range.",
  },
];

export default function ArchitecturalWrapStudentAccommodationPage() {
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
            <span className="text-foreground">Student Accommodation Vinyl Wrapping</span>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="border-b border-border bg-card py-16 md:py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <h1 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Student accommodation vinyl wrapping — kitchens, furniture and communal surfaces
          </h1>
          <p className="mt-5 text-lg text-muted leading-relaxed">
            Student accommodation refurbishment has a hard deadline and a fixed void window. Vinyl wrapping is one of the fastest ways to refresh kitchen units, communal furniture and reception areas — without the lead time, waste, and disruption of full replacement. We work across South Yorkshire, West Yorkshire and the East Midlands on void-period programmes for accommodation operators, universities and their FM contractors.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact/" className="btn-primary">
              Discuss Your Void Programme →
            </Link>
            <Link href="/architectural-vinyl-film/" className="btn-secondary">
              Architectural Film Overview
            </Link>
          </div>
        </div>
      </section>

      {/* Why vinyl wrap for student accommodation */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Why accommodation operators and universities choose wrapping
          </h2>
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Void-period turnaround</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                The summer turnaround between academic years is typically six to eight weeks. Replacing kitchen units requires ordering, delivery, removal and re-installation — rarely achievable across a large block. Wrapping the existing units takes days per flat, not weeks.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Cost efficiency at scale</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                For a 100-flat block, the cost difference between wrapping existing kitchen doors and replacing units is significant. Architectural film delivers a fresh, brand-aligned finish without the capital outlay of full replacement.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Durable specification</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Student accommodation takes hard use. We specify commercial-grade film — not standard retail product — for these applications. Surface durability, ease of cleaning and resistance to scuffs and moisture are factored into our specification.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Minimal waste and disruption</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Wrapping generates a fraction of the waste of a replacement programme. No skip, no structural alterations, no waiting for delivery. We arrive, prepare, wrap and leave — ready for the next flat.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What we cover */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-2xl font-semibold text-foreground md:text-3xl">
            Surfaces and areas we cover
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Kitchen unit doors and drawers</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                The primary application. Doors and drawer fronts wrapped to a consistent finish across every flat. Colour-matched or brand-specified.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Communal area furniture</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                Common room furniture panels, study booth dividers, lounge area cabinets and storage units.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Reception desks and counters</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                Fascias, side panels and counter-tops wrapped to match the block&apos;s refurbished aesthetic.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Corridor doors</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                Corridor and flat-entry doors wrapped to update the finish without door replacement. Substrate and fire-door compliance assessed at survey.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Laundry and utility rooms</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                Cupboard units, worktops and appliance panels in laundry rooms and utility areas.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Study bedroom furniture</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                Wardrobe doors, desk panels and built-in storage fascias in individual study bedrooms.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Universities and cities */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Where we work
          </h2>
          <p className="text-muted leading-relaxed">
            We cover student accommodation programmes across South Yorkshire, West Yorkshire and the East Midlands — including Sheffield, Leeds, Barnsley, Doncaster, Rotherham, Bradford, Huddersfield, Nottingham, Derby, Leicester and the university towns in between. We are accessible from the M1, A1(M) and M62 corridors.
          </p>
          <p className="mt-4 text-muted leading-relaxed">
            If your programme is outside this area, contact us — we assess each programme on its scope and can cover further afield for the right job size.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div>
              <h3 className="font-semibold text-foreground mb-2">Universities in our region</h3>
              <ul className="space-y-1 text-sm text-muted">
                <li>University of Sheffield (S10) — Endcliffe, Ranmoor, Tapton</li>
                <li>Sheffield Hallam University (S1) — city campus accommodation</li>
                <li>University of Leeds (LS2) — residential campus</li>
                <li>Leeds Beckett University (LS1/LS6)</li>
                <li>University of Huddersfield (HD1)</li>
                <li>University of Bradford (BD7)</li>
                <li>University of Nottingham (NG7/NG9)</li>
                <li>Nottingham Trent University (NG1/NG11)</li>
                <li>University of Derby (DE22)</li>
                <li>University of Leicester (LE1)</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-2">Also covered</h3>
              <ul className="space-y-1 text-sm text-muted">
                <li>Purpose-built student accommodation (PBSA) operators</li>
                <li>Private student accommodation landlords and managing agents</li>
                <li>FM contractors on university maintenance frameworks</li>
                <li>Property developers refurbishing converted student blocks</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-3xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Student accommodation wrapping — common questions
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
            Related services
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <Link href="/architectural-wrap-hotels/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Hotel interior vinyl wrapping</h3>
              <p className="mt-2 text-sm text-muted">Surface and furniture wrapping for hotel refurbishment programmes.</p>
            </Link>
            <Link href="/window-film/hotel-window-film/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Window film for hotels and accommodation</h3>
              <p className="mt-2 text-sm text-muted">Privacy film and solar control film for guest rooms and communal glazed areas.</p>
            </Link>
            <Link href="/property-management-vinyl-installation/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Property management vinyl installation</h3>
              <p className="mt-2 text-sm text-muted">Vinyl graphics and wrapping for property management companies and FM contractors.</p>
            </Link>
            <Link href="/architectural-vinyl-film/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Architectural vinyl film overview</h3>
              <p className="mt-2 text-sm text-muted">Full overview of architectural film services for commercial and residential interiors.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-20">
        <div className="container mx-auto max-w-3xl">
          <div className="card-float border-2 border-accent/40 p-10 text-center md:p-12">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              Got a void programme coming up?
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Tell us the block size, scope and timeline. We&apos;ll give you a realistic picture of what vinyl wrapping can deliver in your window — and what it costs.
            </p>
            <Link href="/contact/" className="btn-primary mt-8 inline-block">
              Discuss Your Void Programme →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
