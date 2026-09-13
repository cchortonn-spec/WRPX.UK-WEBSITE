import type { Metadata } from "next";
import Link from "next/link";
import { FaqAccordion } from "@/components/FaqAccordion";

export const metadata: Metadata = {
  title: "Window Film for Healthcare — Privacy Film for Hospitals, Clinics & GP Surgeries | WRPX",
  description:
    "Professional window film installation in NHS hospitals, GP surgeries, care homes and private clinics — patient privacy film, DDA glass manifestation, solar control film. Infection-control aware, out-of-hours access, South Yorkshire and East Midlands.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/window-film/healthcare-window-film/",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What window film applications are most common in NHS buildings?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The most common NHS applications are frosted privacy film for consulting rooms and clinical areas where patient dignity is required, DDA-compliant glass manifestation on glazed doors and partitions (required under Building Regulations Part M), and solar control film in south-facing waiting rooms and staff areas. Wayfinding vinyl on glass internal partitions is also common in large hospitals.",
      },
    },
    {
      "@type": "Question",
      name: "Is window film suitable for clinical environments from an infection control perspective?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Quality window film (3M, Avery Dennison) creates a smooth, non-porous surface that is cleanable with standard clinical cleaning regimes including IPA-based products. Edges are sealed during installation to prevent lifting and eliminate potential harbourage points. We follow infection control protocols on site — PPE, surface decontamination prior to and after installation, and no material left in clinical areas.",
      },
    },
    {
      "@type": "Question",
      name: "Can you install window film in a working hospital or clinic?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, with appropriate scheduling. Most clinical film work is done during out-of-hours windows — early morning, evenings or weekends — to avoid disrupting patient care. For consulting rooms and non-clinical admin areas, we can sometimes work between appointments with the facilities team. We follow all site access and infection control requirements relevant to the specific environment.",
      },
    },
    {
      "@type": "Question",
      name: "What is DDA glass manifestation and is it required?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "DDA glass manifestation refers to contrasting marks or bands applied to glazed doors and full-height glazed screens to make them visible to people with visual impairments — required under Building Regulations Part M and the Equality Act. In healthcare buildings this applies to glazed corridor walls, internal glazed doors and full-height glazing in public-facing areas. We install manifestation film that meets the BS 8300 specification.",
      },
    },
    {
      "@type": "Question",
      name: "Do you work with NHS estates contractors and fit-out firms?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — we work as a subcontract installation partner for NHS estates contractors, healthcare fit-out firms, sign companies and FM contractors. White-label by default. We attend under your instructions, carry your paperwork, follow your site access procedures, and provide photographic completion records. We do not engage directly with the NHS client or take on direct NHS relationships from your contracts.",
      },
    },
  ],
};

const faqItems = [
  {
    q: "What window film applications are most common in NHS buildings?",
    a: "The most common NHS applications are frosted privacy film for consulting rooms and clinical areas where patient dignity is required, DDA-compliant glass manifestation on glazed doors and partitions (required under Building Regulations Part M), and solar control film in south-facing waiting rooms and staff areas. Wayfinding vinyl on glass internal partitions is also common in large hospitals.",
  },
  {
    q: "Is window film suitable for clinical environments from an infection control perspective?",
    a: "Yes. Quality window film (3M, Avery Dennison) creates a smooth, non-porous surface that is cleanable with standard clinical cleaning regimes including IPA-based products. Edges are sealed during installation to prevent lifting and eliminate potential harbourage points. We follow infection control protocols on site — PPE, surface decontamination prior to and after installation, and no material left in clinical areas.",
  },
  {
    q: "Can you install window film in a working hospital or clinic?",
    a: "Yes, with appropriate scheduling. Most clinical film work is done during out-of-hours windows — early morning, evenings or weekends — to avoid disrupting patient care. For consulting rooms and non-clinical admin areas, we can sometimes work between appointments with the facilities team. We follow all site access and infection control requirements relevant to the specific environment.",
  },
  {
    q: "What is DDA glass manifestation and is it required?",
    a: "DDA glass manifestation refers to contrasting marks or bands applied to glazed doors and full-height glazed screens to make them visible to people with visual impairments — required under Building Regulations Part M and the Equality Act. In healthcare buildings this applies to glazed corridor walls, internal glazed doors and full-height glazing in public-facing areas. We install manifestation film that meets the BS 8300 specification.",
  },
  {
    q: "Do you work with NHS estates contractors and fit-out firms?",
    a: "Yes — we work as a subcontract installation partner for NHS estates contractors, healthcare fit-out firms, sign companies and FM contractors. White-label by default. We attend under your instructions, carry your paperwork, follow your site access procedures, and provide photographic completion records. We do not engage directly with the NHS client or take on direct NHS relationships from your contracts.",
  },
];

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.wrpx.co.uk/" },
    { "@type": "ListItem", position: 2, name: "Window Film", item: "https://www.wrpx.co.uk/window-film/" },
    { "@type": "ListItem", position: 3, name: "Window Film for Healthcare", item: "https://www.wrpx.co.uk/window-film/healthcare-window-film/" },
  ],
};

export default function HealthcareWindowFilmPage() {
  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
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
            <Link href="/window-film/" className="text-accent hover:underline">Window Film</Link>
            <span className="mx-2">›</span>
            <span className="text-foreground">Window Film for Healthcare</span>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="border-b border-border bg-card py-16 md:py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <h1 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Window film for healthcare — privacy film, DDA manifestation and solar control in hospitals, clinics and GP surgeries
          </h1>
          <p className="mt-5 text-lg text-muted leading-relaxed">
            Healthcare buildings have three distinct window film requirements: patient privacy in consulting and clinical areas, DDA-compliant glass manifestation on glazed doors and partitions, and solar heat reduction in waiting rooms and staff spaces. WRPX installs all three across NHS trusts, GP surgeries, care homes and private clinics in South Yorkshire and the East Midlands — infection-control aware, out-of-hours, white-label for estates contractors and FM firms.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact/" className="btn-primary">
              Request a Healthcare Survey →
            </Link>
            <Link href="/window-film/" className="btn-secondary">
              Window Film Overview
            </Link>
          </div>
        </div>
      </section>

      {/* Three applications */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-2xl font-semibold text-foreground md:text-3xl">
            Window film applications in healthcare buildings
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="card-float p-7">
              <h3 className="text-lg font-semibold text-foreground">Patient privacy film</h3>
              <p className="mt-4 text-sm text-muted leading-relaxed">
                Frosted and etched-effect film for consulting room windows, clinical area glazing,
                GP surgery screens and ward bathroom windows. Provides complete privacy from the
                outside while maintaining natural light. Indistinguishable from sandblasted glass
                in patient-facing environments.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-muted">
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-accent">✓</span>
                  <span>Consulting room and treatment room windows</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-accent">✓</span>
                  <span>Ward bathroom and patient area glazing</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-accent">✓</span>
                  <span>Reception screening and admin area partitions</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-accent">✓</span>
                  <span>GP surgery waiting room glass</span>
                </li>
              </ul>
              <Link href="/window-film/frosted-window-film/" className="mt-5 inline-block text-sm text-accent hover:underline">
                Frosted privacy film details →
              </Link>
            </div>

            <div className="card-float p-7">
              <h3 className="text-lg font-semibold text-foreground">DDA glass manifestation</h3>
              <p className="mt-4 text-sm text-muted leading-relaxed">
                Building Regulations Part M and BS 8300 require contrasting marks on full-height
                glazed panels and glazed doors to make them visible to people with visual
                impairments. Healthcare buildings have particularly high compliance requirements
                given the range of patients and visitors. We install manifestation film to
                BS 8300 specification: 50mm band at 850–1000mm and at 1400–1600mm.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-muted">
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-accent">✓</span>
                  <span>Glazed corridor walls and full-height screens</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-accent">✓</span>
                  <span>Internal glazed doors and sidelights</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-accent">✓</span>
                  <span>Branded or frosted manifestation options</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-accent">✓</span>
                  <span>Remedial work for compliance gaps during estates inspection</span>
                </li>
              </ul>
              <Link href="/window-film/glass-manifestation/" className="mt-5 inline-block text-sm text-accent hover:underline">
                Glass manifestation details →
              </Link>
            </div>

            <div className="card-float p-7">
              <h3 className="text-lg font-semibold text-foreground">Solar control film</h3>
              <p className="mt-4 text-sm text-muted leading-relaxed">
                South-facing waiting rooms and outpatient areas can become uncomfortably hot
                in summer, affecting patient wellbeing and HVAC efficiency. Solar control film
                reduces solar heat gain by 40–79% without replacing glazing or blocking views.
                In winter it also helps retain heat — reducing energy costs year-round.
                Suitable for NHS premises, private hospitals and care homes.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-muted">
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-accent">✓</span>
                  <span>Waiting rooms and patient reception areas</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-accent">✓</span>
                  <span>South and west-facing staff offices</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-accent">✓</span>
                  <span>Glazed outpatient areas and day units</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-accent">✓</span>
                  <span>Care home resident lounges and day rooms</span>
                </li>
              </ul>
              <Link href="/window-film/solar-control-film/" className="mt-5 inline-block text-sm text-accent hover:underline">
                Solar control film details →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Infection control + access */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Installation in clinical environments
          </h2>
          <div className="space-y-6 text-muted leading-relaxed">
            <p>
              Installing window film in a clinical environment is different from a standard commercial
              job. Surface preparation, material handling and working hygiene all need to meet healthcare
              site standards — not just general commercial practice.
            </p>
            <p>
              <strong className="text-foreground">Infection control.</strong> We follow infection
              prevention procedures appropriate to the environment: PPE for clinical areas, surface
              decontamination before and after installation, no material left unsupervised in clinical
              zones, and hand hygiene protocols. Film itself creates a smooth, non-porous surface
              cleanable with IPA-based clinical cleaning products without film degradation.
            </p>
            <p>
              <strong className="text-foreground">Out-of-hours access.</strong> Most clinical film
              installations run outside of active clinical hours — early morning starts, evenings or
              weekends. We co-ordinate access schedules with your facilities or estates team in advance
              so nothing is booked that creates a conflict with clinical activity.
            </p>
            <p>
              <strong className="text-foreground">White-label for NHS contractors.</strong> We work
              as a subcontract installation partner for NHS estates contractors, healthcare fit-out
              firms and FM companies. We attend under your instructions, follow your site access
              paperwork, and report back to your project manager — not to the NHS client directly.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-3xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Healthcare window film questions
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
            <Link href="/window-film/frosted-window-film/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Frosted &amp; privacy window film</h3>
              <p className="mt-2 text-sm text-muted">Privacy film for consulting rooms, partitions and clinical glazing.</p>
            </Link>
            <Link href="/window-film/glass-manifestation/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Glass manifestation (DDA / BS 8300)</h3>
              <p className="mt-2 text-sm text-muted">Compliant contrasting marks for glazed doors and full-height screens.</p>
            </Link>
            <Link href="/window-film/solar-control-film/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Solar control film</h3>
              <p className="mt-2 text-sm text-muted">Heat and glare reduction for waiting rooms, offices and day rooms.</p>
            </Link>
            <Link href="/healthcare-graphics-installation/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Healthcare graphics installation</h3>
              <p className="mt-2 text-sm text-muted">Subcontract vinyl graphics in NHS and healthcare environments.</p>
            </Link>
            <Link href="/nhs-procurement-vinyl-installation/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">NHS procurement vinyl installation</h3>
              <p className="mt-2 text-sm text-muted">Framework-compatible vinyl installation for NHS supply chain.</p>
            </Link>
            <Link href="/window-film/commercial-window-film/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Commercial window film</h3>
              <p className="mt-2 text-sm text-muted">Full overview of commercial window film applications and sectors.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-20">
        <div className="container mx-auto max-w-3xl">
          <div className="card-float border-2 border-accent/40 p-10 text-center md:p-12">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              Planning a healthcare window film programme?
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              We survey window film programmes in NHS hospitals, GP surgeries, care homes and private
              clinics across South Yorkshire and the East Midlands. Tell us the site and what you need.
            </p>
            <Link href="/contact/" className="btn-primary mt-8 inline-block">
              Request a Healthcare Survey →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
