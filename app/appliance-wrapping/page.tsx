import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Appliance Wrapping South Yorkshire | Fridge, Dishwasher & Cooker Hood Vinyl Wrap | WRPX",
  description:
    "Appliance wrapping South Yorkshire — match your fridge, dishwasher, cooker hood and extractor fan to your new kitchen wrap. Premium vinyl, any finish. Free quote. 5-year guarantee.",
  alternates: { canonical: "https://www.wrpx.co.uk/appliance-wrapping/" },
  openGraph: {
    title: "Appliance Wrapping South Yorkshire | WRPX",
    description:
      "Match your appliances to your wrapped kitchen — fridge, dishwasher, cooker hood. Premium vinyl, any finish. Free quote.",
    url: "https://www.wrpx.co.uk/appliance-wrapping/",
  },
};

export default function ApplianceWrappingPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Which appliances can be vinyl wrapped?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Fridge freezers (American-style, integrated, freestanding), dishwashers, cooker hoods and extractor fans, washing machines, tumble dryers, ovens (exterior panels only), and microwaves. We assess each appliance at the survey — smooth metal or plastic surfaces wrap best.",
        },
      },
      {
        "@type": "Question",
        name: "Is it safe to wrap appliances that generate heat?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, with the right film. For cooker hoods, we use heat-rated films appropriate for the temperatures involved. Oven doors and side panels are also wrappable using specialist high-temp film. We always confirm suitability at the survey before quoting.",
        },
      },
      {
        "@type": "Question",
        name: "Can appliance wrapping void my warranty?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Applying vinyl to the exterior of an appliance doesn't typically affect mechanical warranties, as we don't modify internal components, electrics or seals. However, if your appliance is under manufacturer warranty, we recommend checking the terms. In our experience the vast majority of manufacturers do not object to exterior cosmetic wrapping.",
        },
      },
      {
        "@type": "Question",
        name: "How do I match my appliances to my kitchen wrap?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "If we're wrapping your kitchen at the same time, we bring samples to the same survey and you choose matching or complementary finishes together. If you're coming back just for appliances, we keep job records — bring a photo of your kitchen and we'll find the closest match from our range.",
        },
      },
      {
        "@type": "Question",
        name: "How long does appliance wrapping take?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A single appliance typically takes 1–3 hours. A fridge freezer, dishwasher and cooker hood together can often be completed in a half-day. When combined with a full kitchen wrap, appliances are usually done on the same visit.",
        },
      },
    ],
  };

  const appliances = [
    {
      name: "American-Style Fridge Freezers",
      desc: "The focal point of most modern kitchens — wrapping gives you any colour or pattern without replacing a working appliance.",
    },
    {
      name: "Standard Fridge Freezers",
      desc: "Match your wrapped kitchen units with a consistent colour throughout.",
    },
    {
      name: "Cooker Hoods & Extractors",
      desc: "Stainless steel extractor that doesn't match? Wrap it in any finish from matt black to marble.",
    },
    {
      name: "Dishwashers",
      desc: "White dishwasher panel standing out from your dark wrapped units — wrapped to match in hours.",
    },
    {
      name: "Washing Machines & Dryers",
      desc: "Utility room appliances in any colour to coordinate with your storage.",
    },
    {
      name: "Microwave Exteriors",
      desc: "Match integrated or freestanding microwaves to your kitchen design.",
    },
  ];

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqSchema.mainEntity,
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Appliance Vinyl Wrapping",
            provider: {
              "@type": "LocalBusiness",
              name: "WRPX",
              url: "https://www.wrpx.co.uk",
              telephone: siteConfig.phoneE164,
              areaServed: siteConfig.areaServed,
            },
            description:
              "Professional appliance wrapping in South Yorkshire. Match fridges, dishwashers, cooker hoods and more to your wrapped kitchen. Premium vinyl, free survey, 5-year guarantee.",
            serviceType: "Appliance Vinyl Wrapping",
            areaServed: "South Yorkshire",
          }),
        }}
      />

      <section className="relative h-[40vh] min-h-[280px] w-full overflow-hidden">
        <Image
          src="/images/gallery/kitchen-wrap-before-after-south-yorkshire.jpg"
          alt="Appliance wrapping South Yorkshire — fridge and cooker hood vinyl wrapped"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 flex items-center justify-center px-4">
          <div className="text-center">
            <h1 className="text-3xl font-bold tracking-tight text-white drop-shadow-lg md:text-4xl">
              Appliance Wrapping
            </h1>
            <p className="mt-2 text-lg text-white/90">
              Match your appliances to your wrapped kitchen — South Yorkshire
            </p>
          </div>
        </div>
      </section>

      <section className="px-4 py-16">
        <div className="container mx-auto max-w-3xl space-y-8">
          <div className="card-float p-8">
            <p className="text-muted leading-relaxed">
              A beautifully wrapped kitchen is let down by appliances that don&apos;t match.
              We wrap fridges, dishwashers, cooker hoods, washing machines and more in the
              same premium vinyl as your kitchen units — creating a perfectly coordinated result
              without replacing working appliances. Free survey, fixed quote,{" "}
              {siteConfig.guaranteeYears}-year guarantee.
            </p>
          </div>

          <div className="card-float p-8">
            <h2 className="text-xl font-semibold text-foreground">
              Appliances we wrap
            </h2>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              {appliances.map((a) => (
                <div key={a.name} className="rounded-lg border border-border p-4">
                  <p className="font-semibold text-foreground text-sm">{a.name}</p>
                  <p className="text-xs text-muted mt-2">{a.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="card-float p-8">
            <h2 className="text-xl font-semibold text-foreground">
              Why wrap instead of replace?
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              A working appliance with a mismatched colour doesn&apos;t need replacing —
              that&apos;s an unnecessary cost and waste. Wrapping costs a fraction of
              replacement and can be done in hours. Common scenarios:
            </p>
            <ul className="mt-4 space-y-3 text-muted text-sm">
              <li>
                <strong className="text-foreground">Stainless steel extractor, dark wrapped kitchen:</strong>{" "}
                Wrap the extractor in matt black or anthracite to match — no more mismatched metal.
              </li>
              <li>
                <strong className="text-foreground">White fridge, new grey kitchen:</strong>{" "}
                Wrap the fridge panels in the same grey finish — instantly cohesive.
              </li>
              <li>
                <strong className="text-foreground">Old American fridge:</strong>{" "}
                Give a working appliance a brand-new look in any colour or marble effect.
              </li>
            </ul>
          </div>

          <div className="card-float p-8">
            <h2 className="text-xl font-semibold text-foreground">
              Typical costs
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Appliance wrapping is priced on the appliance size and complexity of application.
              As a guide:
            </p>
            <ul className="mt-4 space-y-2 text-sm text-muted">
              <li>→ Cooker hood: from around £80–£150</li>
              <li>→ Standard fridge freezer: from around £120–£200</li>
              <li>→ American-style fridge freezer: from around £200–£350</li>
              <li>→ Dishwasher panel: from around £60–£100</li>
            </ul>
            <p className="mt-4 text-sm text-muted">
              All prices are fixed after a free survey. Combined kitchen + appliance jobs are
              often more cost-effective than booking separately.
            </p>
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
              Get a quote for appliance wrapping
            </h2>
            <p className="mt-3 text-muted">
              We cover Sheffield, Doncaster, Barnsley, Rotherham, Leeds, Huddersfield, Chesterfield
              and all surrounding areas.
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
              Related:{" "}
              <Link href="/kitchen-wrapping/" className="text-accent hover:underline">Kitchen Wrapping</Link>
              {" · "}
              <Link href="/kitchen-island-wrapping/" className="text-accent hover:underline">Kitchen Island Wrapping</Link>
              {" · "}
              <Link href="/splashback-wrapping/" className="text-accent hover:underline">Splashback Wrapping</Link>
              {" · "}
              <Link href="/worktop-wrapping/" className="text-accent hover:underline">Worktop Wrapping</Link>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
