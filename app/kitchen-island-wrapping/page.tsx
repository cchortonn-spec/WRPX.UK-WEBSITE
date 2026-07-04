import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Kitchen Island Wrapping South Yorkshire | Vinyl Wrap Specialist | WRPX",
  description:
    "Kitchen island wrapping South Yorkshire — transform your kitchen island in premium vinyl. Marble, stone, woodgrain and solid colour finishes. Free survey, fixed quote. 5-year guarantee.",
  alternates: { canonical: "https://www.wrpx.co.uk/kitchen-island-wrapping/" },
  openGraph: {
    title: "Kitchen Island Wrapping South Yorkshire | WRPX",
    description:
      "Kitchen island wrapping South Yorkshire — transform your kitchen island in premium vinyl. Free survey, fixed quote. 5-year guarantee.",
    url: "https://www.wrpx.co.uk/kitchen-island-wrapping/",
  },
};

export default function KitchenIslandWrappingPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Can you wrap a kitchen island that has a seating overhang?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Islands with breakfast bar overhangs are straightforward to wrap — we wrap the vertical panels, any horizontal surfaces and the underside of the overhang for a consistent finish. We assess any unusual edge details at the free survey.",
        },
      },
      {
        "@type": "Question",
        name: "How long does kitchen island wrapping take?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A standalone island wrap typically takes half a day to one full day depending on size and complexity. If combined with a full kitchen wrap, we schedule the island on the same job.",
        },
      },
      {
        "@type": "Question",
        name: "Can the island be a different colour from my kitchen units?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Absolutely — two-tone kitchens (contrasting island and units) are one of the most popular wrap requests. Common combinations are dark navy or forest green island with light grey or white units. We bring samples to the survey so you can choose in your own light.",
        },
      },
      {
        "@type": "Question",
        name: "Is kitchen island wrapping permanent?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. Premium architectural vinyl can be removed without damage to the substrate, though removal is a professional job. The vast majority of clients love the result and keep it long-term — the 5-year guarantee reflects the durability of the material.",
        },
      },
      {
        "@type": "Question",
        name: "What finishes work best on a kitchen island?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Marble-effect and stone finishes are extremely popular for islands as they replicate expensive surfaces at a fraction of the cost. Matt colours (navy, forest green, charcoal) are also very popular. Woodgrain finishes work well for a warm, natural look. We stock hundreds of options — your choice will be guided by what you bring to the survey.",
        },
      },
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Kitchen Island Wrapping",
    provider: {
      "@type": "LocalBusiness",
      name: "WRPX",
      url: "https://www.wrpx.co.uk",
      telephone: siteConfig.phoneE164,
      areaServed: siteConfig.areaServed,
    },
    description:
      "Professional kitchen island wrapping in South Yorkshire. Premium architectural vinyl in marble, stone, woodgrain and solid colour finishes. Free survey, 5-year guarantee.",
    areaServed: "South Yorkshire",
    serviceType: "Kitchen Island Vinyl Wrapping",
  };

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      <section className="relative h-[40vh] min-h-[280px] w-full overflow-hidden">
        <Image
          src="/images/gallery/kitchen-wrap-full-kitchen-south-yorkshire.jpg"
          alt="Kitchen island wrapping South Yorkshire — vinyl wrapped island unit"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 flex items-center justify-center px-4">
          <div className="text-center">
            <h1 className="text-3xl font-bold tracking-tight text-white drop-shadow-lg md:text-4xl">
              Kitchen Island Wrapping
            </h1>
            <p className="mt-2 text-lg text-white/90">
              South Yorkshire — Sheffield, Doncaster, Barnsley & beyond
            </p>
          </div>
        </div>
      </section>

      <section className="px-4 py-16">
        <div className="container mx-auto max-w-3xl space-y-8">
          <div className="card-float p-8">
            <p className="text-muted leading-relaxed">
              Your kitchen island is the centrepiece of the room. A vinyl wrap
              transforms it — marble, stone, bold colour or woodgrain — at a
              fraction of the cost of replacement. We wrap the vertical panels,
              horizontal surfaces, kick boards and overhangs to give you a
              complete, seamless finish. Free survey, fixed quote,{" "}
              {siteConfig.guaranteeYears}-year guarantee.
            </p>
          </div>

          <div className="card-float p-8">
            <h2 className="text-xl font-semibold text-foreground">
              Why wrap your kitchen island?
            </h2>
            <ul className="mt-4 space-y-3 text-muted">
              <li className="flex gap-3">
                <span className="text-accent font-bold">→</span>
                <span>
                  <strong className="text-foreground">Two-tone kitchens without the price tag.</strong>{" "}
                  Contrasting island and unit colours are the most-requested kitchen look right now.
                  Wrapping lets you achieve it by updating just the island.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent font-bold">→</span>
                <span>
                  <strong className="text-foreground">Realistic marble and stone finishes.</strong>{" "}
                  Premium architectural films replicate Calacatta marble, Carrara white, dark granite
                  and concrete — textures that feel right to the touch, not just the eye.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent font-bold">→</span>
                <span>
                  <strong className="text-foreground">Half a day. No mess.</strong>{" "}
                  Island wrapping is a single-day job. No kitchen disruption, no dust, no waste.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent font-bold">→</span>
                <span>
                  <strong className="text-foreground">
                    Cost: from around £250–£600.
                  </strong>{" "}
                  Depending on the island&apos;s size, complexity and finish. A fraction of
                  the cost of a replacement or respray.
                </span>
              </li>
            </ul>
          </div>

          <div className="card-float p-8">
            <h2 className="text-xl font-semibold text-foreground">
              Popular island wrap finishes
            </h2>
            <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3">
              {[
                { name: "Calacatta Marble", desc: "White with dramatic grey veining" },
                { name: "Forest Green Matt", desc: "Deep botanical tones, very on-trend" },
                { name: "Dark Navy Matt", desc: "Bold two-tone contrast with white units" },
                { name: "Charcoal Concrete", desc: "Industrial-modern texture effect" },
                { name: "Carbon Black", desc: "Sleek, contemporary statement finish" },
                { name: "Oak Woodgrain", desc: "Warm natural look, many grain options" },
              ].map((finish) => (
                <div key={finish.name} className="rounded-lg border border-border p-4">
                  <p className="font-medium text-foreground text-sm">{finish.name}</p>
                  <p className="text-xs text-muted mt-1">{finish.desc}</p>
                </div>
              ))}
            </div>
            <p className="mt-4 text-sm text-muted">
              We hold a large sample library — you choose in your own home at the free survey.
            </p>
          </div>

          <div className="card-float p-8">
            <h2 className="text-xl font-semibold text-foreground">
              What&apos;s included in an island wrap
            </h2>
            <ul className="mt-4 space-y-2 text-muted text-sm">
              <li>✓ Free survey and fixed quote — no obligation</li>
              <li>✓ Full surface preparation (cleaning, degreasing, priming where needed)</li>
              <li>✓ Premium architectural vinyl (3M, CoverStyl or equivalent)</li>
              <li>✓ Vertical panels, horizontal surfaces, kick boards and overhangs</li>
              <li>✓ Any door fronts or drawer fronts on the island</li>
              <li>✓ Hardware refitted after wrap</li>
              <li>✓ {siteConfig.guaranteeYears}-year written guarantee on adhesion and material</li>
              <li>✓ No mess, no dust, no skip required</li>
            </ul>
          </div>

          <div className="card-float p-8">
            <h2 className="text-xl font-semibold text-foreground">
              Can I wrap my island at the same time as my kitchen?
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Yes — and this is the most efficient approach. We schedule the island
              alongside the kitchen wrap, which often saves time and means you only need
              one survey visit and one fixed price. If you want a contrasting island finish,
              we plan the material order at the survey so everything arrives together.
              You can also come back for the island later — we keep job records so matching
              or contrasting existing units is straightforward.
            </p>
          </div>

          <div className="card-float p-8">
            <h2 className="text-xl font-semibold text-foreground">
              Areas we cover
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              We wrap kitchen islands across{" "}
              {siteConfig.areas.join(", ")} and surrounding South Yorkshire areas.
              Travel is included in the fixed quote — no mileage extras.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {siteConfig.areas.map((area) => (
                <Link
                  key={area}
                  href={`/kitchen-wrapping-${area.toLowerCase()}/`}
                  className="rounded-full border border-border px-3 py-1 text-sm text-muted hover:text-accent hover:border-accent transition-colors"
                >
                  {area}
                </Link>
              ))}
            </div>
          </div>

          <div className="card-float p-8">
            <h2 className="text-xl font-semibold text-foreground">
              Frequently asked questions
            </h2>
            <ul className="mt-4 space-y-6">
              {faqSchema.mainEntity.map((item, i) => (
                <li key={i}>
                  <p className="font-medium text-foreground">{item.name}</p>
                  <p className="mt-2 text-sm text-muted">{item.acceptedAnswer.text}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className="card-float p-8 text-center">
            <h2 className="text-xl font-semibold text-foreground">
              Ready to transform your kitchen island?
            </h2>
            <p className="mt-3 text-muted">
              Free survey, fixed quote, no obligation. We cover all of South Yorkshire.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
              <Link href="/contact/" className="btn-primary inline-block">
                Get a Free Quote
              </Link>
              <a href={`tel:${siteConfig.phone}`} className="btn-secondary inline-block">
                Call {siteConfig.phone}
              </a>
            </div>
          </div>

          <div className="mt-4 text-sm text-muted">
            <p>
              Related services:{" "}
              <Link href="/kitchen-wrapping/" className="text-accent hover:underline">Kitchen Wrapping</Link>
              {" · "}
              <Link href="/worktop-wrapping/" className="text-accent hover:underline">Worktop Wrapping</Link>
              {" · "}
              <Link href="/splashback-wrapping/" className="text-accent hover:underline">Splashback Wrapping</Link>
              {" · "}
              <Link href="/appliance-wrapping/" className="text-accent hover:underline">Appliance Wrapping</Link>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
