import type { Metadata } from "next";
import Link from "next/link";
import { trainingProgram } from "@/lib/training-program";
import { PricingCallout } from "@/components/training/PricingCallout";
import { TrainingRelatedLinks } from "@/components/training/TrainingRelatedLinks";
import { TrainingHubCta } from "@/components/training/TrainingHubCta";

export const metadata: Metadata = {
  title: "Kitchen Wrapping Training Cambridge | Live Job Training — WRPX",
  description:
    "Kitchen wrapping training accessible from Cambridge and East Anglia. WRPX runs 5-day live kitchen installs in South Yorkshire — approximately 1 hour 45 minutes to 2 hours via the A14 and M1. Train on a real client kitchen, not a classroom. Leave with branding, a website, 12 months SEO and ongoing support. £1,699 all-in. First kitchen wrapping training specifically targeting Cambridge and CB postcodes.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/kitchen-wrapping-training-cambridge/",
  },
  openGraph: {
    title: "Kitchen Wrapping Training Cambridge | WRPX Live Job Training",
    description:
      "Cambridge kitchen wrapping training on real live installs with WRPX. Full business setup included — branding, website, 12 months SEO and trade support. Accessible from Cambridge via the A14 and M1 to South Yorkshire.",
    url: "https://www.wrpx.co.uk/kitchen-wrapping-training-cambridge/",
    type: "website",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Kitchen wrapping training Cambridge — WRPX live-job training programme",
  provider: {
    "@type": "LocalBusiness",
    name: "WRPX",
    url: "https://www.wrpx.co.uk",
    address: {
      "@type": "PostalAddress",
      addressRegion: "South Yorkshire",
      addressCountry: "GB",
    },
  },
  areaServed: [
    { "@type": "City", name: "Cambridge" },
    { "@type": "City", name: "Huntingdon" },
    { "@type": "City", name: "Ely" },
    { "@type": "City", name: "Newmarket" },
    { "@type": "State", name: "Cambridgeshire" },
    { "@type": "State", name: "East Anglia" },
  ],
  description:
    "5-day kitchen wrapping training on a real live install with WRPX — accessible from Cambridge and East Anglia via the A14 and M1 to South Yorkshire. Includes prep, primers, sealants, application, measure and price coaching, branding help, website + live domain, 12 months local SEO and ongoing phone/WhatsApp support. £1,699 all-in.",
  offers: {
    "@type": "Offer",
    price: "1699",
    priceCurrency: "GBP",
    description: "Complete kitchen wrapping training and business launch package",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.wrpx.co.uk/" },
    {
      "@type": "ListItem",
      position: 2,
      name: "Kitchen Wrapping Training",
      item: "https://www.wrpx.co.uk/kitchen-wrapping-training/",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Cambridge",
      item: "https://www.wrpx.co.uk/kitchen-wrapping-training-cambridge/",
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is WRPX kitchen wrapping training available to people based in Cambridge?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Training takes place on live WRPX kitchen wrapping installs in South Yorkshire. From Cambridge city centre, the standard route west is the A14 dual carriageway, which begins at the Histon junction north-west of Cambridge and heads west through Huntingdon, St Ives and Kettering before joining the M1 motorway at the Catthorpe Interchange, junction 19. From junction 19 the M1 north runs through Leicester, Loughborough and Nottingham towards South Yorkshire. Cambridge CB1 to Sheffield S1 is approximately 120 to 130 miles and typically takes 1 hour 45 minutes to 2 hours 15 minutes depending on traffic. Most Cambridge-based trainees are able to commute daily to the South Yorkshire training site without needing overnight accommodation.",
      },
    },
    {
      "@type": "Question",
      name: "How far is Cambridge from WRPX kitchen wrapping training?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Cambridge to Sheffield is approximately 120 to 130 miles depending on the exact starting postcode and the South Yorkshire training address. The standard route is the A14 west from Cambridge, joining the M1 at junction 19 (Catthorpe Interchange near Lutterworth), then north on the M1 through Leicestershire and Nottinghamshire to South Yorkshire. Trainees in west Cambridge CB3 or Histon CB24 can join the A14 at the Histon junction quickly. Trainees in east Cambridge CB1 or Cherry Hinton CB1 take the A1303 or A1134 to the A14 westbound. Those in Huntingdon PE29 pick up the A14 directly. The drive from Cambridge city centre CB2 to South Yorkshire is typically 1 hour 45 minutes to 2 hours 15 minutes in off-peak conditions, making Cambridge one of the most accessible East of England cities for WRPX training.",
      },
    },
    {
      "@type": "Question",
      name: "Is kitchen wrapping a viable business in Cambridge?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Cambridge is a strong, underserved market for kitchen wrapping. The city has a large private rented and HMO sector driven by two universities and a substantial tech and biomedical workforce. The Mill Road CB1 and Romsey CB1 areas have dense Victorian terrace housing where landlords regularly refresh kitchens between tenancies — fitted kitchens from the 1990s and early 2000s are very well represented. The Arbury CB4 estate and Cherry Hinton CB1 areas have post-war and 1960s semi-detached housing where kitchen wrapping is a natural cost-effective refresh. The wider Cambridgeshire catchment extends to Huntingdon PE29, St Ives PE27, Ely CB7, Newmarket CB8, Saffron Walden CB11 and Royston SG8 — all within 20 to 40 minutes of Cambridge city centre. Cambridge currently has no well-ranked local kitchen wrapper with a credible online presence targeting CB postcodes.",
      },
    },
    {
      "@type": "Question",
      name: "Is this classroom training or hands-on training?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Hands-on from day one. You join Connor and the WRPX team on a real kitchen install in a real client kitchen — typically in Sheffield or South Yorkshire, reachable from Cambridge via the A14 and M1 in under two hours. There is no classroom, no training bay, no mock kitchens. Five days on a live job prepares you for the actual conditions you will face in Cambridge. The challenges that come up during training — adhesion on aged laminate from a 1990s Arbury estate kitchen, primers on bare MDF edges, deep internal cabinet returns in a Victorian Mill Road terrace — are exactly the problems you will encounter on real Cambridge kitchen jobs.",
      },
    },
    {
      "@type": "Question",
      name: "What do I get at the end of the 5 days?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You leave with the wrap skill, branding help (name and logo direction), trade supplier introductions and account setup support, a done-for-you website with live domain, 12 months of local SEO updates targeting your Cambridge and Cambridgeshire postcodes, an ongoing phone and WhatsApp support line, and a WRPX Certificate of Completion (if approved). The package is built so you leave with a real business ready to take enquiries in Cambridge — not just a technique and a piece of paper.",
      },
    },
    {
      "@type": "Question",
      name: "What does Cambridge's university rental market mean for kitchen wrapping demand?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Cambridge University — approximately 25,000 students — and Anglia Ruskin University (ARU) — approximately 15,000 students — generate substantial demand for private rented accommodation across the city, particularly in the Mill Road CB1 corridor, Romsey CB1, Arbury CB4 and Chesterton CB4 areas. These are Victorian and Edwardian terraced streets where landlords regularly turn over tenancies and refresh kitchens between lets. Kitchen wrapping is ideal for this type of landlord market: faster than replacement, significantly cheaper, and visually effective for a new-tenancy presentation. A Cambridge-based kitchen wrapper with local SEO targeting the CB1 and CB4 landlord market is well-placed to capture consistent repeat business from this sector — and Cambridge landlords often manage multiple properties, creating strong repeat-client potential.",
      },
    },
  ],
};

const faqItems = faqSchema.mainEntity.map((item) => ({
  q: item.name,
  a: item.acceptedAnswer.text,
}));

export default function KitchenWrappingTrainingCambridgePage() {
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
            <Link href="/" className="text-accent hover:underline">
              Home
            </Link>
            <span className="mx-2">›</span>
            <Link
              href="/kitchen-wrapping-training/"
              className="text-accent hover:underline"
            >
              Kitchen Wrapping Training
            </Link>
            <span className="mx-2">›</span>
            <span className="text-foreground">Cambridge</span>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="border-b border-border bg-card py-16 md:py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <p className="text-sm font-medium uppercase tracking-wide text-accent">
            Kitchen Wrapping Training · Cambridge &amp; East Anglia
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Kitchen wrapping training — Cambridge
          </h1>
          <p className="mt-5 text-lg text-muted leading-relaxed">
            WRPX runs kitchen wrapping training on real live installs in South Yorkshire
            — accessible from Cambridge via the A14 and M1 in under two hours. Five days
            on a real client kitchen with Connor&apos;s team: prep, application, pricing
            and finishing under live conditions. Leave with the skill, a brand, a
            website, 12 months of SEO targeting your Cambridge and Cambridgeshire areas,
            and an ongoing support line. {trainingProgram.priceDisplay} all-in. The first
            kitchen wrapping training programme specifically targeting Cambridge and CB
            postcodes.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="https://wa.me/447467922560"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Apply on WhatsApp →
            </Link>
            <Link href="/kitchen-wrapping-training/" className="btn-secondary">
              Full Training Overview
            </Link>
          </div>
        </div>
      </section>

      {/* Travel from Cambridge */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Getting to training from Cambridge
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              Training takes place on live WRPX kitchen wrapping installs in Sheffield
              and South Yorkshire. From Cambridge city centre, the standard route west
              is the A14 dual carriageway. The A14 begins at the Histon interchange
              north-west of Cambridge CB4 and heads west through St Ives PE27 and
              Huntingdon PE29 before continuing west and south-west through
              Kettering NN15 and Wellingborough NN8 to the Catthorpe Interchange.
            </p>
            <p>
              At the Catthorpe Interchange — junction 19 of the M1, near Lutterworth
              LE17 — the A14 meets the M1 motorway. From junction 19, trainees join
              the M1 northbound through Leicester, Loughborough and Nottinghamshire
              before entering South Yorkshire. Sheffield is approximately 50 miles
              north of junction 19 on the M1. Cambridge CB1 to Sheffield S1 is
              approximately 120 to 130 miles total, with a typical drive time of
              1 hour 45 minutes to 2 hours 15 minutes in off-peak conditions.
            </p>
            <p>
              Cambridge is one of the closer East of England cities to South Yorkshire
              — significantly more accessible than the coastal East Anglia cities.
              Trainees from CB1, CB2, CB3 and CB4 are typically able to commute to
              and from the South Yorkshire training site each day. A 6:00am departure
              from Cambridge reaches Sheffield comfortably for an 8:00am site start.
            </p>
            <p>
              Trainees from Huntingdon PE29 or St Ives PE27 join the A14 westbound
              at Huntingdon and shorten the journey slightly. Those from Ely CB7 take
              the A10 or A142 south to Cambridge and then the A14 west. Trainees from
              Newmarket CB8 or Haverhill CB9 approach the A14 from the east. WRPX
              will confirm the exact training address when your dates are booked.
            </p>
          </div>
        </div>
      </section>

      {/* Cambridge market */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Kitchen wrapping in Cambridge — the opportunity
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              Cambridge is a city of approximately 145,000 people with a housing stock
              dominated by Victorian and Edwardian terraced houses in the inner city,
              1960s and 1970s semi-detached and council estates on the outskirts, and
              a large and growing stock of modern private and shared-ownership
              developments. The private rented sector is exceptionally large relative
              to the city&apos;s size — driven by two universities and a major
              technology and biomedical employment base that attracts significant
              numbers of professionals without local ties.
            </p>
            <p>
              The Mill Road CB1 and Romsey CB1 areas south-east of the city centre
              are Victorian terrace streets with some of the highest HMO and private
              rental densities in Cambridge. Landlords in these streets regularly
              refresh kitchens between tenancies, and the 1990s and early 2000s
              fitted kitchen cabinets common in Romsey properties are precisely the
              age and type where wrapping outperforms replacement on cost. Arbury CB4,
              to the north of the city, has a large post-war council estate with
              similar kitchen stock and a growing number of owner-occupiers investing
              in refreshes.
            </p>
            <p>
              Beyond the city boundary, the Cambridgeshire catchment is wide.
              Huntingdon PE29, St Ives PE27, Ely CB7, Newmarket CB8 and Saffron
              Walden CB11 are all within 20 to 40 minutes of Cambridge, each with
              their own mix of older housing stock, private rental and owner-occupied
              demand. The growth villages around Cambridge — Histon CB24, Cottenham
              CB24, Waterbeach CB25, Fulbourn CB21 and Great Shelford CB22 — are
              increasingly affluent commuter communities where homeowners choose
              kitchen wrapping as a premium alternative to full replacement.
            </p>
            <p>
              Cambridge currently has no well-ranked local kitchen wrapper with a
              credible online presence targeting CB postcodes. The city&apos;s
              combination of high rental churn, strong landlord demand and a
              professional homeowner demographic makes it one of the most attractive
              untapped markets in England for a trained, SEO-visible local operator.
            </p>
          </div>
        </div>
      </section>

      {/* What is included */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-2xl font-semibold text-foreground md:text-3xl">
            What the {trainingProgram.priceDisplay} Cambridge training includes
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                5 days on a live kitchen install
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Real client kitchen in South Yorkshire — under two hours from Cambridge
                via A14 and M1. Real problems, real conditions, from day one.
                Not a workshop with practice panels.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Prep, primers, sealants and tools
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                The products used every day — what to buy, where to get it, how
                to apply it so the job lasts and doesn&apos;t come back.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Measure and price coaching
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                How to survey a Cambridge kitchen, price it for your skill level
                and quote with confidence — so you&apos;re not guessing on every job.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Brand name and logo direction
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                A professional brand identity so you look like a real business
                from the first enquiry call across Cambridge and Cambridgeshire.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Done-for-you website + live domain
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                A branded site ready to take enquiries — targeting Cambridge CB
                postcodes and the Cambridgeshire towns so homeowners can find you.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                12 months of local SEO
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Ongoing SEO updates targeting Cambridge and the wider Cambridgeshire
                area — so you rank in the markets where the work is.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Trade supplier introductions
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                The film brands, primers and tools that work on real jobs —
                trade account introductions so you&apos;re buying at the right price.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Ongoing phone and WhatsApp support
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Call or message Connor when a job goes awkward. Direct line to
                the person who trained you.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                WRPX Certificate of Completion
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Issued on approval — a WRPX completion document confirming you
                trained on a real architectural vinyl installation, not a
                government-accredited qualification.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing callout */}
      <section className="bg-card px-4 py-12">
        <div className="container mx-auto max-w-3xl">
          <PricingCallout />
        </div>
      </section>

      {/* Not a classroom */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Why a live job — not a classroom
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              Most kitchen wrapping training puts you in a workshop on practice panels.
              The basic application technique is quick to demonstrate — but the problems
              that stop new wrappers cold on their first real job are never part of a
              training bay session. Aged laminate on a 1990s Arbury estate kitchen
              that lifts at the door edge. Bare MDF at a cut corner where the primer coat
              needs three passes. A deep internal cabinet return on a Victorian Mill Road
              terrace that limits the squeegee angle.
            </p>
            <p>
              These are the conditions you will face on a real Cambridge kitchen job. No
              workshop version of those problems prepares you adequately.
            </p>
            <p>
              WRPX training is different. You are on a live install from day one —
              a real client kitchen with Connor&apos;s team in South Yorkshire. The
              challenges you encounter during the 5 days are the same challenges
              you will face on your first solo Cambridge job. When you leave after the
              week, you have seen the full range of what real kitchen wrapping
              involves, not a curated selection of practice scenarios.
            </p>
          </div>
        </div>
      </section>

      {/* Why Cambridge now */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Why Cambridge — and why now
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              Kitchen wrapping is growing as a trade across the UK — but the established
              operators are concentrated in the large cities of the Midlands and the
              North. The market in Cambridge specifically is at a very early stage.
              Demand from homeowners and landlords is present — the private rental
              sector is unusually large for a city of Cambridge&apos;s size, and the
              landlord market in Mill Road, Romsey and Arbury creates consistent
              repeat business that favours a reliable local operator.
            </p>
            <p>
              The tech and biomedical workforce in Cambridge — centred on the Cambridge
              Science Park CB4, the Biomedical Campus CB2 and the Addenbrooke&apos;s
              hospital area — brings a professional homeowner demographic that is
              cost-conscious but values quality finishes. Kitchen wrapping at a fraction
              of replacement cost appeals directly to this type of busy professional
              household, where the decision is made on value and convenience rather
              than budget alone.
            </p>
            <p>
              The gap in the Cambridge market is wider than most comparable English
              cities. Getting trained, getting ranked on Google for Cambridge kitchen
              wrapping, and taking the position now — before operators from London or
              the Midlands start expanding eastward — is worth doing this year,
              not next year. Cambridge&apos;s relative isolation from the main wrapping
              trade centres means first-mover advantage in CB postcodes is genuinely
              durable.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-3xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Cambridge training — common questions
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

      {/* Related training locations */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <TrainingRelatedLinks currentHref="/kitchen-wrapping-training-cambridge/" />
        </div>
      </section>

      {/* Hub CTA */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-3xl">
          <TrainingHubCta />
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-card px-4 py-20">
        <div className="container mx-auto max-w-3xl">
          <div className="card-float border-2 border-accent/40 p-10 text-center md:p-12">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              Ready to build a kitchen wrapping business in Cambridge?
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Message Connor on WhatsApp to ask about the next available intake.
              Training places open around live install dates — get in touch early
              and we&apos;ll confirm the next window. Cambridge trainees can commute
              daily to South Yorkshire via the A14 and M1 in under two hours.
            </p>
            <p className="mt-3 text-xs text-muted/60">
              {trainingProgram.earnings.disclaimer}
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                href="https://wa.me/447467922560"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Apply on WhatsApp →
              </Link>
              <Link href="/kitchen-wrapping-training/" className="btn-secondary">
                Full Training Overview
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
