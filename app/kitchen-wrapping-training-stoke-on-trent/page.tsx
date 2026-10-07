import type { Metadata } from "next";
import Link from "next/link";
import { trainingProgram } from "@/lib/training-program";
import { PricingCallout } from "@/components/training/PricingCallout";
import { TrainingRelatedLinks } from "@/components/training/TrainingRelatedLinks";
import { TrainingHubCta } from "@/components/training/TrainingHubCta";

export const metadata: Metadata = {
  title: "Kitchen Wrapping Training Stoke-on-Trent | Live Job Training — WRPX",
  description:
    "Kitchen wrapping training accessible from Stoke-on-Trent. WRPX runs 5-day live kitchen installs in South Yorkshire — approximately 1 hour 30 minutes via the A50 east and M1. Not a classroom course: real install training on an actual client kitchen. Leave with branding, a website, 12 months SEO and ongoing support. £1,699 all-in.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/kitchen-wrapping-training-stoke-on-trent/",
  },
  openGraph: {
    title: "Kitchen Wrapping Training Stoke-on-Trent | WRPX Live Job Training",
    description:
      "Stoke-on-Trent kitchen wrapping training on real live installs with WRPX. Full business setup included — branding, website, 12 months SEO and trade support. Approximately 1 hour 30 minutes from Stoke via the A50 east.",
    url: "https://www.wrpx.co.uk/kitchen-wrapping-training-stoke-on-trent/",
    type: "website",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Kitchen wrapping training Stoke-on-Trent — WRPX live-job training programme",
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
    { "@type": "City", name: "Stoke-on-Trent" },
    { "@type": "City", name: "Newcastle-under-Lyme" },
    { "@type": "State", name: "Staffordshire" },
  ],
  description:
    "5-day kitchen wrapping training on a real live install with WRPX — accessible from Stoke-on-Trent via the A50 east to the M1. Includes prep, primers, sealants, application, measure and price coaching, branding help, website + live domain, 12 months local SEO and ongoing phone/WhatsApp support. £1,699 all-in.",
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
      name: "Stoke-on-Trent",
      item: "https://www.wrpx.co.uk/kitchen-wrapping-training-stoke-on-trent/",
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is WRPX kitchen wrapping training available to people based in Stoke-on-Trent?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Training takes place on live WRPX kitchen wrapping installs in South Yorkshire, approximately 1 hour 30 minutes from Stoke-on-Trent via the A50 east to the M1 north. The A50 runs east from Stoke through the Potteries, past Uttoxeter and Derby, joining the M1 at junction 24 near Nottingham. From there the M1 runs north toward Sheffield and the South Yorkshire corridor. Stoke-on-Trent is on the A50 directly — for trainees in Hanley ST1, Burslem ST6, Tunstall ST6, Longton ST3 or Newcastle-under-Lyme ST5, the A50 eastbound is the natural route.",
      },
    },
    {
      "@type": "Question",
      name: "How long does it take to travel from Stoke-on-Trent to the WRPX training base?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Approximately 1 hour 30 to 1 hour 45 minutes from Stoke-on-Trent city centre in off-peak conditions. From Hanley ST1 or Newcastle-under-Lyme ST5, pick up the A50 eastbound — it runs directly from the Stoke conurbation east through Uttoxeter ST14, Sudbury DE6 and Derby DE1 before joining the M1 at junction 24 near Kegworth NG11. From junction 24, the M1 northbound runs to junction 29 for Chesterfield, or junction 31/32 for Rotherham and Sheffield. An early morning 7am departure from Stoke-on-Trent reaches South Yorkshire well inside the hour and a half. Trainees in south Stoke postcodes — Longton ST3, Fenton ST4, Blurton ST3, Trentham ST4 — can reach the A50 quickly via the A5035 or A500. Trainees in north Stoke — Tunstall ST6, Kidsgrove ST7 — may prefer the A523 east through Leek and Buxton to the M1 at Chesterfield, or the A50 via Blythe Bridge ST11.",
      },
    },
    {
      "@type": "Question",
      name: "Is this classroom training or hands-on training?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Hands-on from day one. You join Connor and the WRPX team on a real kitchen install in a real client kitchen — typically in Sheffield or South Yorkshire. There is no classroom, no training bay, no mock kitchens. Five days on a live job is what prepares you for actual work. The problems you encounter — adhesion on aged laminate, primer on bare MDF edges, cutting around appliances, finishing awkward angles — are the problems you will face on your first solo job in Stoke-on-Trent. No workshop setting can replicate that preparation, which is why WRPX structures training this way.",
      },
    },
    {
      "@type": "Question",
      name: "Is kitchen wrapping a good business to run in Stoke-on-Trent?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Stoke-on-Trent is a strong market for kitchen wrapping. The city and its six towns — Tunstall, Burslem, Hanley, Stoke, Fenton and Longton — have a large concentration of Victorian terrace housing and post-war semi-detached properties. Stoke was built during the industrial period and has a dense stock of terraced houses across ST1, ST4, ST5, ST6 and the Burslem and Longton areas. These properties were built with galley kitchens that have been fitted with laminate-door kitchen units over the past 30 to 40 years — exactly the stock that kitchen wrapping transforms at a fraction of replacement cost. Newcastle-under-Lyme ST5, Stafford ST17, Stone ST15 and the wider Staffordshire area extend the accessible market significantly. Stoke has a local renovation culture driven by strong owner-occupier rates across the Potteries towns.",
      },
    },
    {
      "@type": "Question",
      name: "What do I get at the end of the 5 days?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You leave with the wrap skill, branding help (name and logo direction), trade supplier introductions and account setup support, a done-for-you website with live domain, 12 months of local SEO updates targeting your Stoke-on-Trent areas and postcodes, an ongoing phone and WhatsApp support line, and a WRPX Certificate of Completion (if approved). The package is built so you leave with a real business ready to take enquiries — not just a technique.",
      },
    },
    {
      "@type": "Question",
      name: "How do I apply for a place from Stoke-on-Trent?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Message Connor on WhatsApp or call. Places open around live WRPX kitchen installs — so availability depends on the install schedule. If you are based in Stoke-on-Trent, Newcastle-under-Lyme or the wider Staffordshire area and want to start a kitchen wrapping business, get in touch and we will let you know the next available intake. We do not hold long waitlists — when a place is available and you are ready, we move quickly.",
      },
    },
  ],
};

const faqItems = faqSchema.mainEntity.map((item) => ({
  q: item.name,
  a: item.acceptedAnswer.text,
}));

export default function KitchenWrappingTrainingStokeOnTrentPage() {
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
            <span className="text-foreground">Stoke-on-Trent</span>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="border-b border-border bg-card py-16 md:py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <p className="text-sm font-medium uppercase tracking-wide text-accent">
            Kitchen Wrapping Training · Stoke-on-Trent &amp; Staffordshire
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Kitchen wrapping training — Stoke-on-Trent
          </h1>
          <p className="mt-5 text-lg text-muted leading-relaxed">
            WRPX runs kitchen wrapping training on real live installs in South Yorkshire
            — approximately 1 hour 30 minutes from Stoke-on-Trent via the A50 east to
            the M1. Five days on an actual client kitchen with Connor&apos;s team: prep,
            application, pricing and finishing under real conditions. Leave with the skill,
            a brand, a website, 12 months of SEO targeting your Stoke areas, and a
            support line. {trainingProgram.priceDisplay} all-in.
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

      {/* Travel from Stoke */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Getting to training from Stoke-on-Trent
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              Training takes place on live WRPX kitchen wrapping installs in Sheffield
              and South Yorkshire. From Stoke-on-Trent, the A50 eastbound gives the most
              direct route — a single arterial road running east from the Potteries
              through Uttoxeter and Derby to the M1 at junction 24.
            </p>
            <p>
              From Hanley ST1 or Newcastle-under-Lyme ST5, pick up the A500 ring road
              and then the A50 eastbound. The A50 runs through Longton ST3 and Blythe
              Bridge ST11 before crossing into Staffordshire farmland east of Uttoxeter.
              Past Uttoxeter ST14, the road continues east through Sudbury DE6 and Hatton
              DE65 toward Derby. At Derby the A50 merges with the M1 approach — taking
              junction 24 northbound puts you on the M1 toward Nottingham, Leicester North
              and Sheffield.
            </p>
            <p>
              From the M1 at junction 24, it is approximately 40 to 45 minutes north to
              the Sheffield and Rotherham area. Junction 29 (Chesterfield A617) or
              junction 31 (Rotherham A631) or junction 33/34 (Sheffield) are all within
              easy reach from the A50/M1 approach. A 7am departure from Stoke-on-Trent
              reaches South Yorkshire before 8:30am — comfortably before any site start.
            </p>
            <p>
              For trainees in Burslem ST6, Tunstall ST6 or Kidsgrove ST7 — north Stoke
              postcodes — an alternative route runs via the A523 east through Leek ST13
              and Buxton SK17 into Derbyshire, then south to the M1 at Chesterfield. The
              A6 Buxton to Bakewell to Chesterfield route via Matlock is scenic and
              reliable, adding around 15 minutes compared to the A50 option but avoiding
              the Stoke city-centre roads entirely.
            </p>
            <p>
              By train, Stoke-on-Trent has direct rail services to Sheffield via Derby
              and Nottingham — journey times are approximately 1 hour 30 to 2 hours
              depending on the service. Sheffield city centre has budget accommodation a
              short walk from the station. For trainees who prefer not to drive across
              Staffordshire and Derbyshire early morning, staying over for part of the
              week is a practical option.
            </p>
          </div>
        </div>
      </section>

      {/* Stoke market opportunity */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Kitchen wrapping in Stoke-on-Trent — the market
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              Stoke-on-Trent is one of the most significant markets for kitchen wrapping
              in the English Midlands. The city was built to house the workers of the
              Staffordshire Potteries — ceramic, coal and iron industries that drew a
              huge working population into the six towns of Tunstall, Burslem, Hanley,
              Stoke, Fenton and Longton through the nineteenth century and into the
              early twentieth.
            </p>
            <p>
              That industrial housing remains the dominant residential fabric of the
              Stoke conurbation today. Victorian terraces in Burslem ST6, Longton ST3,
              Fenton ST4 and Shelton ST4 are densely packed, with galley kitchens
              retrofitted over the decades with laminate-door fitted units. The majority
              of these kitchens date from the 1985 to 2005 period — still structurally
              sound, well-fitted carcasses, but with door fronts that are scratched,
              swollen or simply dated. Kitchen wrapping transforms these units at a
              fraction of replacement cost.
            </p>
            <p>
              Post-war semi-detached housing in Meir ST3, Blurton ST3, Trentham ST4,
              Northwood ST1 and Abbey Hulton ST2 extends the market beyond the Victorian
              core. These areas were built in the 1940s to 1960s and have a similar
              profile: owner-occupied homes where selective renovation investment makes
              far more sense than whole-kitchen replacement.
            </p>
            <p>
              Newcastle-under-Lyme ST5 is a separate but adjacent market — a market town
              with its own housing stock running from inter-war semis through to newer
              estate housing. Stafford ST17 and Stone ST15 to the south, and Leek ST13
              to the north-east, extend the accessible working radius for a Stoke-based
              kitchen wrapper into a substantial regional market.
            </p>
            <p>
              Kitchen wrapping in Stoke-on-Trent and the Potteries is an undersupplied
              service in online search. Most operators listed for the area are not based
              locally, or are listed on aggregator platforms without a genuine Stoke web
              presence. A trained wrapper with a site optimised for Stoke postcodes and
              suburbs is entering an underserved market rather than a crowded one.
            </p>
          </div>
        </div>
      </section>

      {/* What is included */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-2xl font-semibold text-foreground md:text-3xl">
            What the {trainingProgram.priceDisplay} Stoke-on-Trent training includes
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                5 days on a live kitchen install
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Real client kitchen in South Yorkshire — approximately 1 hour 30 minutes
                from Stoke via the A50 east. Real problems, real conditions, from day one.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Prep, primers, sealants and tools
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                The products used every day — what to buy, where to get it, how to apply
                it so the job lasts and doesn&apos;t come back.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Measure and price coaching
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                How to survey a Stoke-on-Trent kitchen, price it for your skill level
                and quote confidently — so you&apos;re not guessing every job.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Brand name and logo direction
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                A professional brand identity so you look like a real business from
                the first enquiry call you take in the Potteries.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Done-for-you website + live domain
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                A branded site ready to take enquiries — targeting Stoke-on-Trent
                postcodes so homeowners in ST1, ST4, ST6 and beyond can find you.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                12 months of local SEO
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Ongoing SEO updates targeting your Stoke areas so you rank in the
                markets that matter to your business — not just generic terms.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Trade supplier introductions
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                The film brands, adhesion primers and tools that work — trade account
                introductions so you&apos;re buying at the right price from day one.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Ongoing phone and WhatsApp support
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Call or message Connor when a job goes awkward. Not a generic help desk
                — direct line to the person who trained you.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                WRPX Certificate of Completion
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Issued on approval at the end of training — a WRPX completion document,
                not a government-accredited qualification.
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
              A lot of kitchen wrapping training is delivered in a workshop or training
              bay on practice panels. You learn the basic motion of applying vinyl — but
              you never encounter the actual problems that arise on a real kitchen in a
              real house. Aged laminate that has lifted at the edge and needs primer
              before film. A drawer front that was once repainted and has poor adhesion.
              A cornice above the doors that limits the angle of approach. An existing
              appliance that cannot be moved.
            </p>
            <p>
              These are the problems that stop new wrappers cold on their first solo job
              in Burslem, Longton or Newcastle-under-Lyme. Not a lack of technique — a
              lack of exposure to real conditions.
            </p>
            <p>
              WRPX training is structured differently. You join a live kitchen install
              from day one, working alongside Connor on a real client kitchen. The
              problems you solve during training are the problems you will face on your
              first job in the Potteries. When you leave after 5 days, you have seen the
              full range of what a real kitchen install involves — and you have the
              solutions, not just the technique.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-3xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Stoke-on-Trent training — common questions
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
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <TrainingRelatedLinks currentHref="/kitchen-wrapping-training-stoke-on-trent/" />
        </div>
      </section>

      {/* Hub CTA */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-3xl">
          <TrainingHubCta />
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-4 py-20">
        <div className="container mx-auto max-w-3xl">
          <div className="card-float border-2 border-accent/40 p-10 text-center md:p-12">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              Ready to start from Stoke-on-Trent?
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              The A50 puts WRPX training within easy reach of Stoke-on-Trent. Message
              Connor on WhatsApp to find out what&apos;s available — places fill around
              live install dates, so the sooner you get in touch the better.
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
