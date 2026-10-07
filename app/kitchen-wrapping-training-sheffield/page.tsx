import type { Metadata } from "next";
import Link from "next/link";
import { trainingProgram } from "@/lib/training-program";
import { PricingCallout } from "@/components/training/PricingCallout";
import { TrainingRelatedLinks } from "@/components/training/TrainingRelatedLinks";
import { TrainingHubCta } from "@/components/training/TrainingHubCta";

export const metadata: Metadata = {
  title: "Kitchen Wrapping Training Sheffield | Learn to Wrap — WRPX South Yorkshire",
  description:
    "Kitchen wrapping training based in Sheffield and South Yorkshire. 5-day live kitchen install with WRPX — learn wrap application, prep and pricing, then leave with branding, website, 12 months SEO and ongoing support. £1,699 all-in.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/kitchen-wrapping-training-sheffield/",
  },
  openGraph: {
    title: "Kitchen Wrapping Training Sheffield | WRPX South Yorkshire",
    description:
      "Sheffield-based kitchen wrapping training on real live installs. Full business setup included — branding, website, 12 months SEO and trade support.",
    url: "https://www.wrpx.co.uk/kitchen-wrapping-training-sheffield/",
    type: "website",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Kitchen wrapping training Sheffield — WRPX live-job training programme",
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
    { "@type": "City", name: "Sheffield" },
    { "@type": "State", name: "South Yorkshire" },
    { "@type": "State", name: "Yorkshire" },
  ],
  description:
    "5-day kitchen wrapping training on a real live install with WRPX in Sheffield and South Yorkshire. Includes prep, primers, sealants, application, measure and price coaching, branding help, website + live domain, 12 months local SEO and ongoing phone/WhatsApp support. £1,699 all-in.",
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
      name: "Sheffield",
      item: "https://www.wrpx.co.uk/kitchen-wrapping-training-sheffield/",
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Where does kitchen wrapping training with WRPX take place?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Training takes place on a live WRPX kitchen wrapping install — typically in Sheffield and the surrounding South Yorkshire area. Exact site depends on the install booked that week. We confirm the location when your place is accepted. Sheffield and South Yorkshire is our home territory, so the majority of our live-job kitchen installs are in this area.",
      },
    },
    {
      "@type": "Question",
      name: "Is this classroom training or hands-on training?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Hands-on from day one. You join Connor and the WRPX team on a real kitchen install in a real client's kitchen. There is no classroom, no training bay, no mannequin kitchens — just five days on a live job learning how the work actually runs. That is the fundamental difference between WRPX training and most classroom-only courses.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need to travel to Sheffield for the training?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our installs are primarily based in Sheffield and South Yorkshire, though they can occasionally be elsewhere in the surrounding region. If you are travelling from outside South Yorkshire, Sheffield has good rail connections from Manchester Piccadilly (approximately 1 hour), Leeds (50 minutes), Birmingham New Street (1 hour 20 minutes) and London St Pancras (approximately 2 hours). Budget accommodation in Sheffield city centre is straightforward for trainees coming from further afield.",
      },
    },
    {
      "@type": "Question",
      name: "What do I get at the end of the 5 days?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You leave with the wrap skill, branding help (name and logo direction), trade supplier introductions and account setup support, a done-for-you website with live domain, 12 months of local SEO updates targeting your towns and cities, an ongoing phone and WhatsApp support line, and a WRPX Certificate of Completion (if approved). The package is designed so you have a real business ready to take enquiries — not just a technique.",
      },
    },
    {
      "@type": "Question",
      name: "How do I apply for a place on the Sheffield training?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Message Connor on WhatsApp or call. Places open around live WRPX kitchen installs in Sheffield and South Yorkshire — so availability depends on the install schedule. If you are serious about a place, get in touch now and we will let you know the next intake. We do not hold long waitlists — when a place is available and you are ready, we move quickly.",
      },
    },
  ],
};

const faqItems = [
  {
    q: "Where does kitchen wrapping training with WRPX take place?",
    a: "Training takes place on a live WRPX kitchen wrapping install — typically in Sheffield and the surrounding South Yorkshire area. Exact site depends on the install booked that week. We confirm the location when your place is accepted. Sheffield and South Yorkshire is our home territory, so the majority of our live-job kitchen installs are in this area.",
  },
  {
    q: "Is this classroom training or hands-on training?",
    a: "Hands-on from day one. You join Connor and the WRPX team on a real kitchen install in a real client's kitchen. There is no classroom, no training bay, no mannequin kitchens — just five days on a live job learning how the work actually runs. That is the fundamental difference between WRPX training and most classroom-only courses.",
  },
  {
    q: "Do I need to travel to Sheffield for the training?",
    a: "Our installs are primarily based in Sheffield and South Yorkshire, though they can occasionally be elsewhere in the surrounding region. If you are travelling from outside South Yorkshire, Sheffield has good rail connections from Manchester Piccadilly (approximately 1 hour), Leeds (50 minutes), Birmingham New Street (1 hour 20 minutes) and London St Pancras (approximately 2 hours). Budget accommodation in Sheffield city centre is straightforward for trainees coming from further afield.",
  },
  {
    q: "What do I get at the end of the 5 days?",
    a: "You leave with the wrap skill, branding help (name and logo direction), trade supplier introductions and account setup support, a done-for-you website with live domain, 12 months of local SEO updates targeting your towns and cities, an ongoing phone and WhatsApp support line, and a WRPX Certificate of Completion (if approved). The package is designed so you have a real business ready to take enquiries — not just a technique.",
  },
  {
    q: "How do I apply for a place on the Sheffield training?",
    a: "Message Connor on WhatsApp or call. Places open around live WRPX kitchen installs in Sheffield and South Yorkshire — so availability depends on the install schedule. If you are serious about a place, get in touch now and we will let you know the next intake. We do not hold long waitlists — when a place is available and you are ready, we move quickly.",
  },
];

export default function KitchenWrappingTrainingSheffieldPage() {
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
            <span className="text-foreground">Sheffield</span>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="border-b border-border bg-card py-16 md:py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <p className="text-sm font-medium uppercase tracking-wide text-accent">
            Kitchen Wrapping Training · Sheffield &amp; South Yorkshire
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Kitchen wrapping training — Sheffield
          </h1>
          <p className="mt-5 text-lg text-muted leading-relaxed">
            WRPX runs its kitchen wrapping training on real live installs in Sheffield
            and South Yorkshire. Five days on an actual kitchen job with Connor&apos;s team
            — prep, application, pricing and finishing under real conditions. Leave with
            the skill, a brand, a website, 12 months of SEO and a support line.{" "}
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

      {/* Why Sheffield */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Why train in Sheffield?
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              WRPX is based in South Yorkshire — Sheffield is our home city. Our kitchen
              wrapping jobs are primarily in Sheffield, Rotherham, Doncaster, Barnsley and
              the surrounding South Yorkshire area. When you train with us, you are on a
              real Sheffield-area kitchen install — not a trip to a warehouse training bay
              somewhere else in the country.
            </p>
            <p>
              Sheffield is also one of the best cities in the UK to start a kitchen wrapping
              business. It has a large owner-occupier housing stock, strong demand for affordable
              kitchen refurbishment across the S1 to S20 postcode band, and a growing market
              for kitchen wrapping among homeowners who want a new kitchen look without the cost
              of replacement. The Sheffield–Rotherham–Barnsley triangle alone represents a
              substantial pipeline of potential kitchen wrapping enquiries for a well-positioned
              local operator.
            </p>
            <p>
              For trainees travelling to us — Sheffield has direct rail links from Leeds (50
              minutes), Manchester Piccadilly (1 hour), Nottingham (50 minutes) and Birmingham
              New Street (1 hour 20 minutes). Budget accommodation in the city centre is easy
              to find for trainees spending 5 days with us on a job.
            </p>
            <p>
              We train in small intakes because each place is tied to a live kitchen install.
              That means when you train, you are genuinely on the job from day one — not waiting
              for a classroom slot to free up. It also means places are limited, and when we
              have an install and a confirmed place available, we move quickly.
            </p>
          </div>
        </div>
      </section>

      {/* What is included */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-2xl font-semibold text-foreground md:text-3xl">
            What the {trainingProgram.priceDisplay} Sheffield training includes
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                5 days on a live Sheffield kitchen install
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Real client kitchen. Real problems. Real conditions. From day one you are
                on site with Connor and the team — not watching slides.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Prep, primers, sealants and tools
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                The products we use every day — what to buy, where to get it and how to
                apply it so a job lasts and doesn&apos;t come back.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Measure and price coaching
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                How to survey a kitchen, price it for your skill level and quote with
                confidence — so you&apos;re not guessing every job.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Brand name and logo direction
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                We help you shape a professional brand identity so you look like a real
                business from the first call you take.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Done-for-you website + live domain
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                A branded site ready to take enquiries — with your domain live so when
                someone searches kitchen wrapping near them, you&apos;re there.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                12 months of local SEO updates
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                We target your towns and cities so enquiries can start coming in while
                you are getting sharp on the tools.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Supplier introductions and account help
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                We introduce you to the suppliers we use and help you open a trade account
                — so you buy like a professional from day one.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Ongoing phone and WhatsApp support
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Stuck on a tool, product or tricky substrate after training? Message or
                call — we answer.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                WRPX Certificate of Completion
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Awarded on successful completion (if approved). Confirms you completed
                live architectural vinyl installation training with WRPX — not an official
                accreditation or industry licence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing callout */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <PricingCallout />
        </div>
      </section>

      {/* Live job vs classroom */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Live job training vs classroom training
          </h2>
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="card-float border-accent/30 p-7">
              <h3 className="mb-4 text-lg font-semibold text-accent">WRPX — live job</h3>
              <ul className="space-y-3 text-sm text-muted">
                <li className="flex gap-2">
                  <span className="text-accent">✓</span>
                  Real client kitchen in Sheffield — not a training mock-up
                </li>
                <li className="flex gap-2">
                  <span className="text-accent">✓</span>
                  Problems you only see on a live job — and how to solve them
                </li>
                <li className="flex gap-2">
                  <span className="text-accent">✓</span>
                  Pricing and survey coaching on a real job you helped complete
                </li>
                <li className="flex gap-2">
                  <span className="text-accent">✓</span>
                  Business setup included — brand, website, SEO, suppliers
                </li>
                <li className="flex gap-2">
                  <span className="text-accent">✓</span>
                  Support line after training — not a certificate and goodbye
                </li>
                <li className="flex gap-2">
                  <span className="text-accent">✓</span>
                  Subcontract pathway for overflow WRPX work (when available)
                </li>
              </ul>
            </div>
            <div className="card-float p-7">
              <h3 className="mb-4 text-lg font-semibold text-foreground">
                Classroom-only course
              </h3>
              <ul className="space-y-3 text-sm text-muted">
                <li className="flex gap-2">
                  <span className="text-muted">–</span>
                  Training bay or mock kitchen — controlled conditions, not real
                </li>
                <li className="flex gap-2">
                  <span className="text-muted">–</span>
                  Problems are staged — real installs are always different
                </li>
                <li className="flex gap-2">
                  <span className="text-muted">–</span>
                  Pricing theory — no real-job context to anchor it
                </li>
                <li className="flex gap-2">
                  <span className="text-muted">–</span>
                  Certificate issued — business setup is your own problem
                </li>
                <li className="flex gap-2">
                  <span className="text-muted">–</span>
                  No ongoing support once the course ends
                </li>
                <li className="flex gap-2">
                  <span className="text-muted">–</span>
                  No subcontract pathway or overflow work connection
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Who it is for */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Who this training is for
          </h2>
          <div className="grid gap-5 sm:grid-cols-3">
            {trainingProgram.whoItsFor.map((group) => (
              <div key={group.title} className="card-float p-6">
                <h3 className="font-semibold text-foreground">{group.title}</h3>
                <p className="mt-3 text-sm text-muted leading-relaxed">
                  {group.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-3xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Sheffield kitchen wrapping training — common questions
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

      {/* Related links */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <TrainingRelatedLinks currentHref="/kitchen-wrapping-training-sheffield/" />
        </div>
      </section>

      {/* Hub CTA */}
      <section className="px-4 pb-16">
        <div className="container mx-auto max-w-4xl">
          <TrainingHubCta />
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-4 py-20">
        <div className="container mx-auto max-w-3xl">
          <div className="card-float border-2 border-accent/40 p-10 text-center md:p-12">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              Ready to start — or want to talk it through first?
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Places open around our Sheffield kitchen installs. If you&apos;re serious about
              training, message Connor on WhatsApp or call — we&apos;ll tell you when the
              next intake is and what to expect.
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
              <Link href="/contact/" className="btn-secondary">
                Send an enquiry instead
              </Link>
            </div>
            <p className="mt-6 text-xs text-muted/70">
              {trainingProgram.earnings.disclaimer}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
