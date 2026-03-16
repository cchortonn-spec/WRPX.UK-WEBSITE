import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { FaqAccordion } from "@/components/FaqAccordion";

export const metadata: Metadata = {
  title: "Solar Control Window Film South Yorkshire | Conservatories & Offices | WRPX",
  description:
    "Solar control window film installed across South Yorkshire. Cut heat and glare in conservatories, offices and homes by up to 79%. UV protection. Professional installation from WRPX.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/window-film/solar-control-film/",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How much will solar film actually reduce the temperature?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It varies by film specification and glazing type, but in a well-ventilated conservatory, a quality solar film typically reduces peak summer temperatures by 8–15°C. We can give you a realistic expectation for your specific space at survey.",
      },
    },
    {
      "@type": "Question",
      name: "Will the room be noticeably darker?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "With the right film specification, no. We choose films that maximise heat rejection while maintaining high visible light transmission — the room stays bright. If privacy is also important, a slightly more tinted film can combine both benefits.",
      },
    },
    {
      "@type": "Question",
      name: "Does it work on conservatory polycarbonate panels?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It depends on the polycarbonate spec — some types take film well, others don't. We assess at survey.",
      },
    },
    {
      "@type": "Question",
      name: "Does solar film void a double-glazing warranty?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Some double-glazed unit manufacturers have restrictions on film application. We check at survey — if there's a warranty consideration, we'll flag it.",
      },
    },
  ],
};

const faqItems = [
  {
    q: "How much will it actually reduce the temperature?",
    a: "It varies by film specification and glazing type, but in a well-ventilated conservatory, a quality solar film typically reduces peak summer temperatures by 8–15°C. We can give you a realistic expectation for your specific space at survey.",
  },
  {
    q: "Will the room be noticeably darker?",
    a: "With the right film specification, no. We choose films that maximise heat rejection while maintaining high visible light transmission — the room stays bright. If privacy is also important, a slightly more tinted film can combine both benefits.",
  },
  {
    q: "Does it work on conservatory polycarbonate panels?",
    a: "It depends on the polycarbonate spec — some types take film well, others don't. We assess at survey.",
  },
  {
    q: "Does solar film void a double-glazing warranty?",
    a: "Some double-glazed unit manufacturers have restrictions on film application. We check at survey — if there's a warranty consideration, we'll flag it.",
  },
];

export default function SolarControlFilmPage() {
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
            <span className="text-foreground">Solar Control Film</span>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="relative h-[40vh] min-h-[280px] w-full overflow-hidden">
        <Image
          src="/images/hero.jpg"
          alt="Solar control window film — South Yorkshire"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 flex items-center justify-center px-4">
          <h1 className="text-center text-3xl font-bold tracking-tight text-white drop-shadow-lg md:text-4xl">
            Solar control window film — cooler rooms without replacing your glazing
          </h1>
        </div>
      </section>

      {/* Intro */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <p className="text-muted leading-relaxed">
            If a room in your home or workplace becomes too hot to use in summer — or if afternoon sun is creating glare problems year-round — solar control film is the most cost-effective solution available. Applied to the interior of your existing glass, it reduces solar heat gain, eliminates glare and blocks up to 99% of UV radiation, without replacing the glazing and without darkening the room significantly.
          </p>
          <p className="mt-4 text-muted leading-relaxed">
            WRPX installs solar control film across South Yorkshire for homeowners, businesses and commercial clients.
          </p>
        </div>
      </section>

      {/* What it does */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-center text-2xl font-semibold text-foreground md:text-3xl">
            What solar control film actually reduces
          </h2>
          <div className="grid gap-6 sm:grid-cols-3">
            <div className="card-float p-6 md:p-8">
              <h3 className="text-lg font-semibold text-foreground">Solar heat gain</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                A quality solar film reduces the amount of solar energy transmitted through your glass by 40–79%. In a south-facing conservatory or office, this is the difference between an unusable space and a comfortable one from April to October.
              </p>
            </div>
            <div className="card-float p-6 md:p-8">
              <h3 className="text-lg font-semibold text-foreground">Screen glare</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                In offices, the practical benefit of solar film is often the glare reduction. Afternoon sun hitting monitors costs productivity and is one of the most consistent complaints in glazed commercial buildings. Film cuts the glare; the room stays usable without pulling blinds.
              </p>
            </div>
            <div className="card-float p-6 md:p-8">
              <h3 className="text-lg font-semibold text-foreground">UV damage</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                UV radiation isn&apos;t visible, but it fades hardwood floors, carpets, upholstery and retail merchandise over months and years. Quality solar film from 3M and Avery Dennison blocks up to 99% of UV while remaining optically clear.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Best applications */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Conservatories, offices and south-facing rooms
          </h2>
          <div className="space-y-6 text-muted leading-relaxed">
            <p>
              <strong className="text-foreground">Conservatories</strong> are the most common residential application. A glass conservatory without solar film can hit 38–42°C in July. Adding roof film and side panel film brings the temperature into a liveable range and protects furniture from UV damage. Most residential conservatory jobs take half a day.
            </p>
            <p>
              <strong className="text-foreground">South and west-facing offices</strong> lose productivity in afternoon sun. Tinted solar film is a permanent, low-cost fix compared to expensive blinds or air conditioning upgrades.
            </p>
            <p>
              <strong className="text-foreground">Retail and commercial spaces</strong> benefit from UV protection and temperature management — protecting stock, reducing cooling costs, and improving customer comfort.
            </p>
            <p>
              <strong className="text-foreground">Homes</strong> with large picture windows, kitchen extensions and orangeries face the same heat problems as conservatories. Solar film is a cleaner solution than external awnings or additional glazing treatments.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-3xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Solar film questions
          </h2>
          <FaqAccordion items={faqItems} />
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-4 py-20">
        <div className="container mx-auto max-w-3xl">
          <div className="card-float border-2 border-accent/40 p-10 text-center md:p-12">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              Overheating conservatory or office? Let&apos;s fix it.
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Free survey across South Yorkshire. Call 07398 395417 or book online.
            </p>
            <Link href="/contact/" className="btn-primary mt-8 inline-block">
              Book a Free Survey →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
