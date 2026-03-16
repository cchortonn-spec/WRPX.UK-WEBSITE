import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { FaqAccordion } from "@/components/FaqAccordion";

export const metadata: Metadata = {
  title: "Window Tinting South Yorkshire | Buildings & Homes (Not Cars) | WRPX",
  description:
    "Window tinting for homes, offices, conservatories and commercial buildings across South Yorkshire. Not vehicle tinting — specialist building window film installation by WRPX.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/window-film/window-tinting/",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Will tinted window film make my room dark?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Quality neutral tinted films are designed to reduce heat and UV without significantly reducing visible light. The difference is subtle — similar to wearing light sunglasses. We can show you optical transmission levels for different film specs at survey.",
      },
    },
    {
      "@type": "Question",
      name: "How much heat does window film actually reduce?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Good commercial film can reduce solar heat gain by 40–79% depending on the film specification and the existing glass. The difference in a conservatory is significant and noticeable on the first sunny day after installation.",
      },
    },
    {
      "@type": "Question",
      name: "Is building window tinting legal?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — there are no restrictions on tinting building windows in the UK. If your property is listed, check with your local authority — we can advise.",
      },
    },
    {
      "@type": "Question",
      name: "Does it work on conservatory roof panels?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It depends on the panel type — glass panels yes, polycarbonate is more complex and depends on the spec. We assess at survey.",
      },
    },
    {
      "@type": "Question",
      name: "Can I remove tinted film later?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Film can be removed, though it's a separate service. Most clients install it and leave it — typical lifespan is 7–12 years.",
      },
    },
  ],
};

const faqItems = [
  {
    q: "Will tinted window film make my room dark?",
    a: "Quality neutral tinted films are designed to reduce heat and UV without significantly reducing visible light. The difference is subtle — similar to wearing light sunglasses. We can show you optical transmission levels for different film specs at survey.",
  },
  {
    q: "How much heat does window film actually reduce?",
    a: "Good commercial film can reduce solar heat gain by 40–79% depending on the film specification and the existing glass. The difference in a conservatory is significant and noticeable on the first sunny day after installation.",
  },
  {
    q: "Is building window tinting legal?",
    a: "Yes — there are no restrictions on tinting building windows in the UK. If your property is listed, check with your local authority — we can advise.",
  },
  {
    q: "Does it work on conservatory roof panels?",
    a: "It depends on the panel type — glass panels yes, polycarbonate is more complex and depends on the spec. We assess at survey.",
  },
  {
    q: "Can I remove tinted film later?",
    a: "Yes. Film can be removed, though it's a separate service. Most clients install it and leave it — typical lifespan is 7–12 years.",
  },
];

export default function WindowTintingPage() {
  return (
    <div>
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
            <Link href="/window-film/" className="text-accent hover:underline">
              Window Film
            </Link>
            <span className="mx-2">›</span>
            <span className="text-foreground">Window Tinting</span>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="relative h-[40vh] min-h-[280px] w-full overflow-hidden">
        <Image
          src="/images/hero.jpg"
          alt="Window tinting for buildings — South Yorkshire"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 flex items-center justify-center px-4">
          <h1 className="text-center text-3xl font-bold tracking-tight text-white drop-shadow-lg md:text-4xl">
            Window tinting for buildings across South Yorkshire — homes, offices and commercial premises
          </h1>
        </div>
      </section>

      {/* Callout: buildings only, not vehicles */}
      <section className="px-4 py-8">
        <div className="container mx-auto max-w-4xl">
          <div className="card-float border-2 border-accent/50 bg-accent/5 p-6 md:p-8">
            <p className="font-semibold text-foreground">
              This page is for building window tinting only.
            </p>
            <p className="mt-2 text-muted leading-relaxed">
              If you&apos;re looking for vehicle window tinting, we don&apos;t offer that service. For conservatories, homes, offices and commercial glazing — read on.
            </p>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <p className="text-muted leading-relaxed">
            Building window tinting means applying a lightly or heavily tinted film to the interior of your glass — reducing the amount of solar heat coming in, cutting screen glare, blocking UV rays and adding a degree of privacy. It&apos;s one of the most cost-effective upgrades you can make to a south-facing office, an overheating conservatory, or a retail space where summer heat affects staff and customers.
          </p>
          <p className="mt-4 text-muted leading-relaxed">
            WRPX installs tinted window film across South Yorkshire using 3M, Avery Dennison and Hexis commercial-grade products — specified for your glass type, orientation and purpose.
          </p>
        </div>
      </section>

      {/* Four problems */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-center text-2xl font-semibold text-foreground md:text-3xl">
            Four problems tinted window film solves
          </h2>
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="card-float p-6 md:p-8">
              <h3 className="text-lg font-semibold text-foreground">1. Overheating rooms and conservatories</h3>
              <p className="mt-3 text-muted leading-relaxed">
                South-facing rooms and glass-roofed conservatories can become unusable in summer without intervention. The right tinted film reduces solar heat gain by up to 79%, bringing rooms back into usable temperature ranges without air conditioning.
              </p>
            </div>
            <div className="card-float p-6 md:p-8">
              <h3 className="text-lg font-semibold text-foreground">2. Screen glare in offices</h3>
              <p className="mt-3 text-muted leading-relaxed">
                Afternoon sun hitting monitor screens is one of the most complained-about workplace issues. A neutral density tinted film cuts glare without making the room feel dark, and without the eyesore of pulling blinds across half the day.
              </p>
            </div>
            <div className="card-float p-6 md:p-8">
              <h3 className="text-lg font-semibold text-foreground">3. UV damage to furniture, floors and stock</h3>
              <p className="mt-3 text-muted leading-relaxed">
                UV radiation fades hardwood floors, carpets, upholstery and retail stock — often without anyone attributing the cause. Quality window film blocks up to 99% of UV while remaining clear or nearly so.
              </p>
            </div>
            <div className="card-float p-6 md:p-8">
              <h3 className="text-lg font-semibold text-foreground">4. Privacy and solar combined</h3>
              <p className="mt-3 text-muted leading-relaxed">
                A lightly reflective tinted film gives you daytime privacy and solar control in a single product. Useful for street-facing commercial premises and ground-floor homes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Where tinted window film gets installed
          </h2>
          <div className="space-y-6 text-muted leading-relaxed">
            <p>
              <strong className="text-foreground">Conservatories:</strong> The most common residential installation. A glass conservatory without solar film can hit 40°C in July. Roof film and side film bring temperatures down to usable ranges and protect furniture from UV fade.
            </p>
            <p>
              <strong className="text-foreground">Offices and open-plan commercial spaces:</strong> South and west-facing offices lose productivity in afternoon sun. Tinted film is a permanent, low-cost fix compared to expensive blinds or HVAC upgrades.
            </p>
            <p>
              <strong className="text-foreground">Retail:</strong> Reducing solar gain protects products from UV and keeps customer-facing areas comfortable. A slightly reflective film also gives some display control.
            </p>
            <p>
              <strong className="text-foreground">Homes:</strong> Living rooms, kitchen-diners and bedrooms with large south-facing windows that get too hot in summer. Often more cost-effective than external shading solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Our installation */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-6 text-2xl font-semibold text-foreground md:text-3xl">
            How we install it
          </h2>
          <p className="text-muted leading-relaxed">
            Survey → film specification → preparation → application. The same four-step process we apply to every job. We don&apos;t just turn up and stick film on — we assess the glass orientation, the light conditions, the existing spec of the glass unit, and recommend the right product. A film that works well on clear single-skin glass may perform differently on a double-glazed low-E unit.
          </p>
          <p className="mt-4 text-muted leading-relaxed">
            We use commercial-grade films only. Not the budget products available online. The difference in optical clarity, longevity and heat rejection is significant.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-3xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Window tinting questions — buildings
          </h2>
          <FaqAccordion items={faqItems} />
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-4 py-20">
        <div className="container mx-auto max-w-3xl">
          <div className="card-float border-2 border-accent/40 p-10 text-center md:p-12">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              Overheating office, conservatory or home?
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Book a free survey and we&apos;ll assess your glazing and recommend the right solution. No obligation. Across South Yorkshire.
            </p>
            <Link href="/contact/" className="btn-primary mt-8 inline-block">
              Book Your Free Survey →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
