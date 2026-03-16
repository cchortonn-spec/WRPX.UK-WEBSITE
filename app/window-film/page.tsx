import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { FaqAccordion } from "@/components/FaqAccordion";

export const metadata: Metadata = {
  title: "Window Film South Yorkshire | Privacy, Frosted & Solar Film | WRPX",
  description:
    "WRPX installs privacy film, frosted window film, one-way mirror film and solar control film for homes and businesses across South Yorkshire. Free survey. 7+ years specialist vinyl experience.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/window-film/",
  },
};

const hubFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is window film permanent?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most films are designed to be long-term — 7 to 12 years depending on orientation and film type. Films can be removed and replaced. We discuss options at survey stage.",
      },
    },
    {
      "@type": "Question",
      name: "Will window film damage my glass?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Applied and removed correctly, no. We assess your glass type before installation. If there is any risk, we tell you upfront.",
      },
    },
    {
      "@type": "Question",
      name: "Does window film work on double glazing?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Film is applied to the interior surface of the glass. It works on most standard double-glazed units. Some speciality low-E coated glass has different requirements, which we assess at survey.",
      },
    },
    {
      "@type": "Question",
      name: "How long does window film installation take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A standard bathroom window takes 30 to 45 minutes. A full office floor with multiple partitions typically takes a day. We give a realistic timeframe when we quote.",
      },
    },
  ],
};

const hubFaqItems = [
  {
    q: "Is window film permanent?",
    a: "Most films we install are designed to be long-term — 7 to 12 years depending on orientation and film type. Frosted and decorative films are permanent in normal use. Films can be removed and replaced, though this is a separate service. We'll discuss your options at survey stage.",
  },
  {
    q: "Will window film damage my glass?",
    a: "Applied and removed correctly, no. We assess your glass type before installation — older or thermally weak glass has different requirements. If there's any risk, we'll tell you upfront.",
  },
  {
    q: "Does window film work on double glazing?",
    a: "Yes — film is applied to the interior surface of the glass, not between the panes. It works on most standard double-glazed units. The exception is some speciality low-E coated glass, which we assess at survey.",
  },
  {
    q: "Can I get window film with a pattern or my company logo?",
    a: "Yes. We can supply frosted film with cut logos, text, or decorative patterns — particularly popular for office partitions and shopfronts. Ask about this at enquiry stage.",
  },
  {
    q: "How long does installation take?",
    a: "A standard bathroom window: 30–45 minutes. A full office floor with multiple partitions: typically a day. We'll give you a realistic timeframe when we quote.",
  },
  {
    q: "Do I need planning permission for window film?",
    a: "In most cases, no. If your property is listed or in a conservation area, it's worth checking with your local authority — we can advise at survey stage.",
  },
];

const filmCards = [
  {
    title: "Frosted Window Film",
    description:
      "Permanent frosted effect. Full privacy day and night. No curtains, no blinds. Perfect for bathrooms, front doors, internal office glass.",
    href: "/window-film/frosted-window-film/",
  },
  {
    title: "Privacy & One-Way Mirror Film",
    description:
      "Mirrored exterior, clear interior view. Daytime privacy for street-facing windows, offices and shopfronts. We'll be honest about the limitations too.",
    href: "/window-film/privacy-window-film/",
  },
  {
    title: "Window Tinting — Buildings",
    description:
      "Tinted film for homes, offices and commercial buildings — not vehicles. Reduces heat, glare and UV. Particularly effective on conservatories and south-facing offices.",
    href: "/window-film/window-tinting/",
  },
  {
    title: "Solar Control Film",
    description:
      "Cut solar gain by up to 79%. Cooler rooms without replacing glazing. Protects furniture, floors and screens from UV fade. Ideal for conservatories, large-glazed offices, shopfronts.",
    href: "/window-film/solar-control-film/",
  },
  {
    title: "Commercial Window Film",
    description:
      "Privacy, safety, branding and compliance for offices, retail, healthcare and industrial sites. Multi-site capability. White-label installation for agencies and print houses.",
    href: "/window-film/commercial-window-film/",
  },
  {
    title: "Glass Manifestation",
    description:
      "Legally required marking for full-height and low-level glazing. Frosted stripes, logos and branded manifestation designs. DDA/Health & Safety compliant.",
    href: "/window-film/glass-manifestation/",
  },
];

const processSteps = [
  {
    num: 1,
    title: "Free survey",
    body: "We come out, look at the glass, assess the surface and environment, and recommend the right film. No hard sell. If film isn't the right solution for what you're trying to achieve, we'll say so.",
  },
  {
    num: 2,
    title: "Film specification",
    body: "We specify the right product from our 3M, Avery Dennison, Hexis and CoverStyl range — matched to your glass type, orientation, and how long you need it to last.",
  },
  {
    num: 3,
    title: "Preparation",
    body: "Thorough cleaning and degreasing before anything goes near the glass. This step is where most installations succeed or fail. We don't skip it.",
  },
  {
    num: 4,
    title: "Installation and sign-off",
    body: "Clean, precise application. Straight edges, no bubbles, neat perimeter trim. We walk round with you before we leave.",
  },
];

const comparisonRows = [
  { type: "Frosted film", privacy: "Full", night: "Yes", heat: "No", light: "Diffused", best: "Bathrooms, partitions, doors" },
  { type: "One-way mirror", privacy: "Daytime only", night: "No (reverses)", heat: "Partial", light: "Yes (interior)", best: "Street-facing windows, offices" },
  { type: "Solar/tinted film", privacy: "Low–medium", night: "Partial", heat: "Yes", light: "Reduced", best: "Conservatories, south-facing offices" },
  { type: "Blackout film", privacy: "Full", night: "Yes", heat: "Yes", light: "No", best: "Meeting rooms, display windows" },
  { type: "Manifestation film", privacy: "Partial", night: "Partial", heat: "No", light: "Yes", best: "Glass panels, partitions (compliance)" },
];

export default function WindowFilmHubPage() {
  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(hubFaqSchema) }}
      />

      {/* Breadcrumb */}
      <section className="border-b border-border bg-card px-4 py-3">
        <div className="container mx-auto max-w-4xl">
          <nav className="text-sm text-muted">
            <Link href="/" className="text-accent hover:underline">
              Home
            </Link>
            <span className="mx-2">›</span>
            <span className="text-foreground">Window Film</span>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="relative h-[50vh] min-h-[320px] w-full overflow-hidden">
        <Image
          src="/images/hero.jpg"
          alt="Window film installation South Yorkshire"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center">
          <h1 className="text-center text-3xl font-bold tracking-tight text-white drop-shadow-lg md:text-4xl lg:text-5xl">
            Privacy, comfort and style — professional window film for South Yorkshire homes and businesses
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-white/90">
            Whether you need a bathroom window nobody can see through, an office that stays cool in summer, or a shopfront that looks the part — there&apos;s a window film that solves it.
          </p>
          <Link href="/contact/" className="btn-primary mt-8 inline-block">
            Get a Free Survey
          </Link>
        </div>
      </section>

      {/* Intro */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <p className="text-muted leading-relaxed">
            Whether you need a bathroom window nobody can see through, an office that stays cool in summer, or a shopfront that looks the part, there&apos;s a window film that solves it. WRPX installs every film type — frosted, mirrored, tinted, solar and manifestation — across South Yorkshire, with the same preparation discipline and premium materials we bring to every job.
          </p>
        </div>
      </section>

      {/* Film types grid */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-center text-2xl font-semibold text-foreground md:text-3xl">
            What we install — film types and what they solve
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filmCards.map((card) => (
              <Link
                key={card.href}
                href={card.href}
                className="card-float flex flex-col p-6 transition-colors hover:border-accent/40 md:p-8"
              >
                <h3 className="text-lg font-semibold text-foreground">{card.title}</h3>
                <p className="mt-3 flex-1 text-sm text-muted leading-relaxed">{card.description}</p>
                <span className="mt-4 text-sm font-medium text-accent">Read more →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits strip */}
      <section className="border-y border-border bg-muted/30 px-4 py-8">
        <div className="container mx-auto max-w-4xl">
          <p className="text-center text-sm font-medium text-muted-foreground">
            Privacy · Less Glare · UV Protection · No Mess · 5-Year Guarantee
          </p>
        </div>
      </section>

      {/* Why WRPX */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-center text-2xl font-semibold text-foreground md:text-3xl">
            Vinyl specialists, not window film generalists
          </h2>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="space-y-4 text-muted leading-relaxed">
              <p>
                The reason window film fails — bubbles, peeling edges, lifting corners — is almost always the preparation. Surfaces not properly cleaned. Wrong film specified for the glass type. Application rushed.
              </p>
              <p>
                WRPX has spent 7 years applying premium vinyl to some of the most demanding surfaces in kitchen and commercial fitting — worktops, curved furniture, tiled splashbacks. That same preparation discipline, the same degreasing and surface assessment routine, carries directly into every window film installation we do.
              </p>
              <p>
                We use premium film from 3M, Avery Dennison, Hexis and CoverStyl — specified to your glass type, orientation and environment. We tell you honestly what each film can and can&apos;t do. And our installations come with a 5-year guarantee on materials and workmanship.
              </p>
              <p className="italic text-foreground">
                &quot;The finish has to stand up close. That&apos;s always been the standard.&quot;
              </p>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg border border-border">
              <Image
                src="/images/gallery/kitchen-cabinet-wrap-south-yorkshire.jpg"
                alt="Professional vinyl application — WRPX finish standard"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Who we install for */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-center text-2xl font-semibold text-foreground md:text-3xl">
            Domestic and commercial — across South Yorkshire
          </h2>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="card-float p-8 md:p-10">
              <h3 className="text-lg font-semibold text-foreground">Homeowners</h3>
              <p className="mt-4 text-muted leading-relaxed">
                Bathrooms you can finally stop putting temporary frosted film on. Ground-floor living rooms your neighbours can&apos;t see into. Conservatories you can use in July. We survey, advise, and fit — usually in a single visit for smaller jobs.
              </p>
            </div>
            <div className="card-float p-8 md:p-10">
              <h3 className="text-lg font-semibold text-foreground">Businesses</h3>
              <p className="mt-4 text-muted leading-relaxed">
                Offices that need meeting room privacy without losing the open feel. Shopfronts with promotional or branded film. Retail units with window displays that stay cool. Healthcare and education premises needing DDA-compliant manifestation. We work with the business owner directly or as a white-label partner for agencies and print companies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Film comparison table */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-center text-2xl font-semibold text-foreground md:text-3xl">
            Choosing the right film — quick comparison
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[640px] border-collapse text-left">
              <thead>
                <tr className="border-b border-border">
                  <th className="pb-3 pr-4 font-semibold text-foreground">Film type</th>
                  <th className="pb-3 pr-4 font-semibold text-foreground">Privacy level</th>
                  <th className="pb-3 pr-4 font-semibold text-foreground">Works at night</th>
                  <th className="pb-3 pr-4 font-semibold text-foreground">Blocks heat</th>
                  <th className="pb-3 pr-4 font-semibold text-foreground">Lets light in</th>
                  <th className="pb-3 font-semibold text-foreground">Best for</th>
                </tr>
              </thead>
              <tbody className="text-muted">
                {comparisonRows.map((row) => (
                  <tr key={row.type} className="border-b border-border">
                    <td className="py-3 pr-4 font-medium text-foreground">{row.type}</td>
                    <td className="py-3 pr-4">{row.privacy}</td>
                    <td className="py-3 pr-4">{row.night}</td>
                    <td className="py-3 pr-4">{row.heat}</td>
                    <td className="py-3 pr-4">{row.light}</td>
                    <td className="py-3">{row.best}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-center text-2xl font-semibold text-foreground md:text-3xl">
            How it works
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step) => (
              <div key={step.num} className="card-float flex gap-4 p-6 md:p-8">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent text-sm font-bold text-accent-foreground">
                  {step.num}
                </span>
                <div>
                  <h3 className="font-semibold text-foreground">{step.title}</h3>
                  <p className="mt-2 text-sm text-muted leading-relaxed">{step.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Where we work */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-6 text-center text-2xl font-semibold text-foreground md:text-3xl">
            Window film installation across South Yorkshire and beyond
          </h2>
          <p className="text-center text-muted">
            <Link href="/window-film/window-film-sheffield/" className="text-accent hover:underline">Sheffield</Link>
            {" · "}
            <Link href="/window-film/window-film-doncaster/" className="text-accent hover:underline">Doncaster</Link>
            {" · "}
            <Link href="/window-film/window-film-barnsley/" className="text-accent hover:underline">Barnsley</Link>
            {" · "}
            <Link href="/window-film/window-film-rotherham/" className="text-accent hover:underline">Rotherham</Link>
            {" · "}
            <Link href="/window-film/window-film-leeds/" className="text-accent hover:underline">Leeds</Link>
            {" · "}
            <Link href="/window-film/window-film-chesterfield/" className="text-accent hover:underline">Chesterfield</Link>
            {" · "}
            <Link href="/window-film/window-film-huddersfield/" className="text-accent hover:underline">Huddersfield</Link>
          </p>
          <p className="mt-4 text-center text-sm text-muted">
            Also covering Wakefield, Bradford, York, Harrogate, Worksop, Mansfield and surrounding areas. Commercial multi-site programmes available nationally — discussed on a project basis.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-3xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Common questions about window film
          </h2>
          <FaqAccordion items={hubFaqItems} />
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-4 py-20">
        <div className="container mx-auto max-w-3xl">
          <div className="card-float border-2 border-accent/40 p-10 text-center md:p-12">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              Ready to talk about your windows?
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Free survey. No obligation. We cover Sheffield, Doncaster, Barnsley, Rotherham, Leeds and across South Yorkshire. Call 07398 395417 or use the form below.
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
