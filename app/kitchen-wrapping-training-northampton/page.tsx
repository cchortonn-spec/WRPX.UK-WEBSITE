import type { Metadata } from "next";
import Link from "next/link";
import { trainingProgram } from "@/lib/training-program";
import { PricingCallout } from "@/components/training/PricingCallout";
import { TrainingRelatedLinks } from "@/components/training/TrainingRelatedLinks";
import { TrainingHubCta } from "@/components/training/TrainingHubCta";

export const metadata: Metadata = {
  title: "Kitchen Wrapping Training Northampton | Live Job Training — WRPX",
  description:
    "Kitchen wrapping training accessible from Northampton. WRPX runs 5-day live kitchen installs in South Yorkshire — approximately 1 hour 15 minutes via the M1 north. Real install training on an actual client kitchen, not a classroom. Leave with branding, a website, 12 months SEO and ongoing support. £1,699 all-in.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/kitchen-wrapping-training-northampton/",
  },
  openGraph: {
    title: "Kitchen Wrapping Training Northampton | WRPX Live Job Training",
    description:
      "Northampton kitchen wrapping training on real live installs with WRPX. Full business setup included — branding, website, 12 months SEO and trade support. Approximately 1 hour 15 minutes from Northampton via the M1 north.",
    url: "https://www.wrpx.co.uk/kitchen-wrapping-training-northampton/",
    type: "website",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Kitchen wrapping training Northampton — WRPX live-job training programme",
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
    { "@type": "City", name: "Northampton" },
    { "@type": "City", name: "Kettering" },
    { "@type": "City", name: "Wellingborough" },
    { "@type": "State", name: "Northamptonshire" },
  ],
  description:
    "5-day kitchen wrapping training on a real live install with WRPX — accessible from Northampton via the M1 north. Includes prep, primers, sealants, application, measure and price coaching, branding help, website + live domain, 12 months local SEO and ongoing phone/WhatsApp support. £1,699 all-in.",
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
      name: "Northampton",
      item: "https://www.wrpx.co.uk/kitchen-wrapping-training-northampton/",
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is WRPX kitchen wrapping training available to people based in Northampton?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Training takes place on live WRPX kitchen wrapping installs in South Yorkshire, approximately 1 hour 15 minutes from Northampton via the M1 north. Junction 15A of the M1 is the Northampton access point — from there it is a clear run north through Leicester Forest East, past junction 21 (M69), junction 23A/24 (M42/A42), and onward to junction 31 or 33/34 for the Sheffield and Rotherham area. This is one of the most straightforward motorway routes from any training location in the Midlands — Northampton sits directly on the M1 and has a shorter journey to South Yorkshire than much of the Midlands.",
      },
    },
    {
      "@type": "Question",
      name: "How long does the drive from Northampton to WRPX training take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Approximately 1 hour 15 minutes to 1 hour 30 minutes from Northampton town centre in off-peak conditions. The M1 is the only road you need — join at junction 15A or junction 16 (north of Northampton) and drive north to the Sheffield area. A 6am departure from NN1 or NN4 reaches South Yorkshire before 7:30am, comfortably ahead of any morning site start. Trainees in Northampton town centre NN1, Kingsthorpe NN2, Abington NN3, Weston Favell NN3, Duston NN5, Upton NN5, Dallington NN5 or Billing NN3 are all within easy reach of junction 15A or 16.",
      },
    },
    {
      "@type": "Question",
      name: "Is this classroom training or hands-on training?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Hands-on from day one. You join Connor and the WRPX team on a real kitchen install in a real client kitchen — typically in Sheffield or South Yorkshire. There is no classroom, no training bay, no mock kitchens. Five days on a live job is what prepares you for actual work. The problems you encounter — adhesion on aged laminate, primer on bare MDF edges, cutting around appliances, finishing awkward angles — are the problems you will face on your first solo job in Northampton. No workshop setting can replicate that preparation, which is why WRPX structures training this way.",
      },
    },
    {
      "@type": "Question",
      name: "Is kitchen wrapping a viable business in Northampton?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Northampton is a strong market for kitchen wrapping. The town has extensive post-war housing across the NN postcodes — semi-detached and terraced properties in Kingsthorpe NN2, Abington NN3, Weston Favell NN3, Far Cotton NN4, Duston NN5, Goldings NN3 and Billing NN3 are predominantly owner-occupied with kitchens fitted in the 1990s and 2000s that are structurally sound but dated in appearance. Northampton also has significant newer-build estates in areas like Upton NN5, Kings Heath NN5 and Collingtree Park NN4 — properties where owners are improving interiors without a full kitchen replacement. The wider NN area extends the market considerably: Kettering NN15/NN16, Wellingborough NN8/NN9, Daventry NN11, Towcester NN12 and Corby NN17/NN18 all fall within easy reach of a Northampton-based kitchen wrapper. In online search, Northampton kitchen wrapping is an underserved category — no established local operator is currently ranking for the core terms.",
      },
    },
    {
      "@type": "Question",
      name: "What do I get at the end of the 5 days?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You leave with the wrap skill, branding help (name and logo direction), trade supplier introductions and account setup support, a done-for-you website with live domain, 12 months of local SEO updates targeting your Northampton areas and NN postcodes, an ongoing phone and WhatsApp support line, and a WRPX Certificate of Completion (if approved). The package is built so you leave with a real business ready to take enquiries — not just a technique.",
      },
    },
    {
      "@type": "Question",
      name: "How do I apply for a place from Northampton?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Message Connor on WhatsApp or call. Places open around live WRPX kitchen installs — so availability depends on the install schedule. If you are based in Northampton or the wider Northamptonshire area and want to start a kitchen wrapping business, get in touch and we will let you know the next available intake. We do not hold long waitlists — when a place is available and you are ready, we move quickly.",
      },
    },
  ],
};

const faqItems = faqSchema.mainEntity.map((item) => ({
  q: item.name,
  a: item.acceptedAnswer.text,
}));

export default function KitchenWrappingTrainingNorthamptonPage() {
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
            <span className="text-foreground">Northampton</span>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="border-b border-border bg-card py-16 md:py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <p className="text-sm font-medium uppercase tracking-wide text-accent">
            Kitchen Wrapping Training · Northampton &amp; Northamptonshire
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Kitchen wrapping training — Northampton
          </h1>
          <p className="mt-5 text-lg text-muted leading-relaxed">
            WRPX runs kitchen wrapping training on real live installs in South Yorkshire
            — approximately 1 hour 15 minutes from Northampton via the M1 north. Five days
            on an actual client kitchen with Connor&apos;s team: prep, application, pricing
            and finishing under real conditions. Leave with the skill, a brand, a website,
            12 months of SEO targeting your Northampton areas, and a support line.{" "}
            {trainingProgram.priceDisplay} all-in.
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

      {/* Travel from Northampton */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Getting to training from Northampton
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              Training takes place on live WRPX kitchen wrapping installs in Sheffield
              and South Yorkshire. From Northampton, the route is simple: join the M1
              at junction 15A or 16 and drive north. No changes of road, no complex
              junction sequences — one motorway all the way to junction 31 (Rotherham)
              or junction 33/34 (Sheffield). It is the most direct long-distance drive
              available from Northampton to anywhere in the north of England.
            </p>
            <p>
              Junction 15A is the main Northampton motorway access — it sits on the
              western side of the town and is straightforward from Northampton town
              centre, Upton NN5, Duston NN5 or Dallington NN5 via the A45 and A4500.
              Junction 16, north of the A45/A4500 interchange, is the alternative for
              trainees in Kingsthorpe NN2 or north Northampton NN3.
            </p>
            <p>
              A 6am departure from Northampton NN1 reaches Sheffield before 7:30am — well
              ahead of a morning site start. In normal weekday conditions with no
              significant M1 delay, the journey north is around 1 hour 10 to 1 hour 20
              minutes. The M1 between Northampton and Sheffield has no tolls and no
              significant bottleneck sections.
            </p>
            <p>
              By train, Northampton has direct services to Sheffield via Derby —
              journey times are approximately 1 hour 30 minutes to 1 hour 50 minutes
              depending on the service. For trainees who prefer not to drive the M1
              five mornings in a row, staying over for part of the training week in
              Sheffield is practical. Budget accommodation near Sheffield city centre
              is plentiful and the total cost is well within the all-in price.
            </p>
          </div>
        </div>
      </section>

      {/* Northampton market */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Kitchen wrapping in Northampton — the market
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              Northampton has a large and varied housing stock spread across the NN
              postcodes. The town expanded significantly through the 1960s and 1970s
              as a designated New Town — large residential estates in Rectory Farm NN3,
              Semilong NN2, Goldings NN3, Abington NN3 and Billing NN3 were built
              during this period with fitted kitchens now 40 to 50 years old. These
              kitchens are structurally sound but the doors are dated, often in
              laminate finishes that were standard in the 1970s and 1980s.
            </p>
            <p>
              More recent growth has added owner-occupied estates across Upton NN5,
              Kings Heath NN5, Collingtree Park NN4 and Brackmills NN4 — newer
              builds where owners are selectively improving interiors to their own
              specification. Kitchen wrapping is well established as a way to upgrade
              door fronts and worktops without the cost and disruption of a full
              kitchen fit-out.
            </p>
            <p>
              The wider Northamptonshire market is substantial. Kettering NN15/NN16
              is 15 miles north of Northampton. Wellingborough NN8/NN9 is 10 miles
              east. Daventry NN11 is 12 miles west. Towcester NN12 and Milton Keynes
              MK1 are to the south. Corby NN17/NN18 extends the territory north.
              A Northampton-based kitchen wrapper operates in a large, low-competition
              market — Northamptonshire has no established kitchen wrapping operator
              currently ranking in online search for the area.
            </p>
            <p>
              In Northampton itself, the dominant renovation channels are Facebook
              Marketplace, local trade pages and Google search. A trainer who leaves
              with a site optimised for NN postcodes and Northampton suburb names
              is entering a market where local SEO visibility matters and where the
              competition online is minimal.
            </p>
          </div>
        </div>
      </section>

      {/* What is included */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-2xl font-semibold text-foreground md:text-3xl">
            What the {trainingProgram.priceDisplay} Northampton training includes
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                5 days on a live kitchen install
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Real client kitchen in South Yorkshire — approximately 1 hour 15 minutes
                from Northampton via the M1 north. Real problems, real conditions, from day one.
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
                How to survey a Northampton kitchen, price it for your skill level and quote
                confidently — so you&apos;re not guessing every job.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Brand name and logo direction
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                A professional brand identity so you look like a real business from
                the first enquiry call you take in Northampton.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Done-for-you website + live domain
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                A branded site ready to take enquiries — targeting Northampton postcodes
                so homeowners in NN1 through NN18 and beyond can find you.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                12 months of local SEO
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Ongoing SEO updates targeting your Northampton areas so you rank in the
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
              Most kitchen wrapping training is delivered in a workshop or training bay
              on practice panels. You learn the basic motion of applying vinyl — but
              you never encounter the actual problems that arise on a real kitchen in a
              real house. Aged laminate that has lifted at the edge and needs primer
              before film. A drawer front that was once repainted and has poor adhesion.
              A cornice above the doors that limits the angle of approach. An existing
              appliance that cannot be moved.
            </p>
            <p>
              These are the problems that stop new wrappers cold on their first solo job
              in Abington, Duston or Kingsthorpe. Not a lack of technique — a lack of
              exposure to real conditions.
            </p>
            <p>
              WRPX training is structured differently. You join a live kitchen install
              from day one, working alongside Connor on a real client kitchen. The
              problems you solve during training are the problems you will face on your
              first job in Northampton. When you leave after 5 days, you have seen the full
              range of what a real kitchen install involves — and you have the solutions,
              not just the technique.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-3xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Northampton training — common questions
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
          <TrainingRelatedLinks currentHref="/kitchen-wrapping-training-northampton/" />
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
              Ready to start from Northampton?
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Northampton is just over an hour from WRPX training via the M1 north.
              Message Connor on WhatsApp to find out what&apos;s available — places fill
              around live install dates, so the sooner you get in touch the better.
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
