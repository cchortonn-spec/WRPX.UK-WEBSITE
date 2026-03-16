import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { FaqAccordion } from "@/components/FaqAccordion";

export const metadata: Metadata = {
  title: "How Much Does Window Film Cost? | South Yorkshire Price Guide | WRPX",
  description:
    "Honest window film price guide for South Yorkshire. Typical costs for frosted film, privacy film, solar control and commercial installations. Free quotes from WRPX.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/window-film/window-film-cost/",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Can I get a fixed price without a survey?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "For standard jobs — a bathroom window, a front door sidelight, a single conservatory side panel — yes, often. Send us a photo and the approximate dimensions and we can usually give you a firm price. For office partitions, multi-window jobs, or anything involving upper floors or unusual access, a survey is the right route.",
      },
    },
    {
      "@type": "Question",
      name: "Are there any hidden costs?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. The price we quote includes materials and fitting. If something at survey changes the scope — access equipment needed, unusual glass type — we'll tell you before we proceed.",
      },
    },
    {
      "@type": "Question",
      name: "Do you charge for the survey?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Surveys are free and carry no obligation.",
      },
    },
  ],
};

const faqItems = [
  {
    q: "Can I get a fixed price without a survey?",
    a: "For standard jobs — a bathroom window, a front door sidelight, a single conservatory side panel — yes, often. Send us a photo and the approximate dimensions and we can usually give you a firm price. For office partitions, multi-window jobs, or anything involving upper floors or unusual access, a survey is the right route.",
  },
  {
    q: "Are there any hidden costs?",
    a: "No. The price we quote includes materials and fitting. If something at survey changes the scope — access equipment needed, unusual glass type — we'll tell you before we proceed.",
  },
  {
    q: "Do you charge for the survey?",
    a: "No. Surveys are free and carry no obligation.",
  },
];

const residentialPrices = [
  { job: "Single bathroom window — frosted film", range: "£80–£160" },
  { job: "Front door sidelight — frosted film", range: "£60–£120" },
  { job: "Ground-floor living room — privacy/mirror film", range: "£120–£250" },
  { job: "Conservatory side panels (per panel)", range: "£80–£180" },
  { job: "Conservatory roof (glass, per panel)", range: "£100–£250" },
  { job: "Partial frosting (lower half of window)", range: "£70–£140" },
  { job: "Multiple windows — same visit, same film", range: "Reduced per-window rate" },
];

const commercialPrices = [
  { job: "Office glass partition — full frosted coverage", range: "£150–£350 per panel" },
  { job: "Manifestation strip (per panel, compliant)", range: "£80–£180" },
  { job: "Branded cut manifestation (logo, per panel)", range: "£150–£350" },
  { job: "Office window — solar control film", range: "£120–£280 per window" },
  { job: "Shopfront — reflective/privacy film", range: "£200–£500+ depending on size" },
  { job: "Multi-site programme", range: "Quoted per site on survey" },
];

export default function WindowFilmCostPage() {
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
            <span className="text-foreground">Window Film Cost</span>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="relative h-[35vh] min-h-[240px] w-full overflow-hidden">
        <Image
          src="/images/window-film/frosted-3.png"
          alt="Window film cost — South Yorkshire"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 flex items-center justify-center px-4">
          <h1 className="text-center text-3xl font-bold tracking-tight text-white drop-shadow-lg md:text-4xl">
            Window film cost — what to expect across South Yorkshire
          </h1>
        </div>
      </section>

      {/* Intro */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <p className="text-muted leading-relaxed">
            The honest answer to &quot;how much does window film cost?&quot; is: it depends on the film type, the size of the glass, and how many windows you need doing. But here are the typical ranges for the work we do across South Yorkshire — enough to give you a realistic expectation before you book a survey.
          </p>
          <p className="mt-4 text-muted leading-relaxed">
            All prices below are fitted and inclusive of materials.
          </p>
        </div>
      </section>

      {/* Residential prices */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Typical costs for home window film
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[320px] border-collapse text-left">
              <thead>
                <tr className="border-b border-border">
                  <th className="pb-3 font-semibold text-foreground">Job</th>
                  <th className="pb-3 font-semibold text-foreground">Indicative price range</th>
                </tr>
              </thead>
              <tbody className="text-muted">
                {residentialPrices.map((row) => (
                  <tr key={row.job} className="border-b border-border">
                    <td className="py-3 pr-4">{row.job}</td>
                    <td className="py-3">{row.range}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Commercial prices */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Typical costs for commercial window film
          </h2>
          <p className="mb-6 text-muted leading-relaxed">
            Commercial jobs vary significantly in scope. These are ballpark ranges for planning purposes — a proper commercial quote requires a site survey.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[320px] border-collapse text-left">
              <thead>
                <tr className="border-b border-border">
                  <th className="pb-3 font-semibold text-foreground">Job</th>
                  <th className="pb-3 font-semibold text-foreground">Indicative price range</th>
                </tr>
              </thead>
              <tbody className="text-muted">
                {commercialPrices.map((row) => (
                  <tr key={row.job} className="border-b border-border">
                    <td className="py-3 pr-4">{row.job}</td>
                    <td className="py-3">{row.range}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* What affects the cost */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            What affects the price of window film
          </h2>
          <ul className="space-y-3 text-muted leading-relaxed">
            <li><strong className="text-foreground">Film type:</strong> Premium 3M and Avery Dennison films cost more than entry-level products. We use premium throughout — it&apos;s part of the guarantee.</li>
            <li><strong className="text-foreground">Glass size:</strong> Larger glass means more material and more time. Tall full-height office panels cost more than a standard bathroom window.</li>
            <li><strong className="text-foreground">Access:</strong> Ground-floor internal application is straightforward. External application on upper floors, or glass in awkward locations, increases installation time.</li>
            <li><strong className="text-foreground">Coverage:</strong> Full coverage costs more than a partial band. Multiple windows done in the same visit reduce the effective per-window cost.</li>
            <li><strong className="text-foreground">Design complexity:</strong> Plain frosted is lower cost than cut logos, gradient patterns or intricate branded designs.</li>
          </ul>
        </div>
      </section>

      {/* Compared to alternatives */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Is window film cheaper than the alternatives?
          </h2>
          <div className="card-float space-y-4 p-8 md:p-10">
            <p className="text-muted leading-relaxed">
              <strong className="text-foreground">Vs. new obscure glass:</strong> A frosted film installation on a bathroom window typically costs 40–60% less than replacing the glazed unit with obscure glass — and the result is visually identical.
            </p>
            <p className="text-muted leading-relaxed">
              <strong className="text-foreground">Vs. blinds:</strong> A quality fitted blind for a window costs similar to or more than frosted film. The film doesn&apos;t need cleaning, doesn&apos;t break, doesn&apos;t affect how the window opens, and looks cleaner.
            </p>
            <p className="text-muted leading-relaxed">
              <strong className="text-foreground">Vs. external shading (awnings, external blinds):</strong> Solar film installation is substantially less expensive than external shading solutions, with no planning considerations and no structural fitting.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-3xl">
          <FaqAccordion items={faqItems} />
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-4 py-20">
        <div className="container mx-auto max-w-3xl">
          <div className="card-float border-2 border-accent/40 p-10 text-center md:p-12">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              Get a quote for your windows
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Tell us what you&apos;re looking for, roughly how many windows and where you are in South Yorkshire — we&apos;ll give you a realistic number.
            </p>
            <Link href="/contact/" className="btn-primary mt-8 inline-block">
              Request a Free Quote →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
