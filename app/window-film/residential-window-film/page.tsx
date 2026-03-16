import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { FaqAccordion } from "@/components/FaqAccordion";

export const metadata: Metadata = {
  title: "Residential Window Film South Yorkshire | Privacy Film for Homes | WRPX",
  description:
    "Window film for homes across South Yorkshire. Bathroom privacy, front window frosting, conservatory solar film and more. Professional installation, 5-year guarantee. Free home survey.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/window-film/residential-window-film/",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Will you come out and have a look first?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "For straightforward jobs we can often quote from a photo and a description. For anything unusual, bigger, or where you want specific advice about film type — yes, we'll survey. No charge.",
      },
    },
    {
      "@type": "Question",
      name: "How long will residential window film last?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Quality residential film from 3M or Avery Dennison lasts 7–10 years in normal conditions. We provide a 5-year guarantee on our installations.",
      },
    },
    {
      "@type": "Question",
      name: "My window is rented — can I still get film fitted?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Film can be removed cleanly. Many tenants use it for exactly this reason. Check your tenancy agreement about modifications — most landlords consider it acceptable.",
      },
    },
    {
      "@type": "Question",
      name: "Can you do more than one window in the same visit?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Many customers get us to do a bathroom, a front room window and a sidelight in one visit. We price per window and there's no call-out uplift for doing multiple.",
      },
    },
  ],
};

const faqItems = [
  {
    q: "Will you come out and have a look first?",
    a: "For straightforward jobs we can often quote from a photo and a description. For anything unusual, bigger, or where you want specific advice about film type — yes, we'll survey. No charge.",
  },
  {
    q: "How long will it last?",
    a: "Quality residential film from 3M or Avery Dennison lasts 7–10 years in normal conditions. Bathroom films in humid conditions may have slightly shorter life but are still long-term products. We provide a 5-year guarantee on our installations.",
  },
  {
    q: "My window is rented — can I still get film fitted?",
    a: "Film can be removed cleanly. Many tenants use it for exactly this reason. Check your tenancy agreement about modifications — most landlords consider it acceptable.",
  },
  {
    q: "Can you do more than one window in the same visit?",
    a: "Yes. Many customers get us to do a bathroom, a front room window and a sidelight in one visit. We price per window and there's no call-out uplift for doing multiple.",
  },
];

const costRows = [
  { option: "Frosted window film (fitted)", cost: "£80–£180", time: "30–45 minutes", reversible: "Yes" },
  { option: "New obscure glass unit", cost: "£200–£500+", time: "Half day", reversible: "No" },
  { option: "Frosted window spray", cost: "£10–£30", time: "DIY", reversible: "Sort of" },
  { option: "Net curtains / blinds", cost: "£30–£100", time: "DIY", reversible: "Yes" },
];

const situations = [
  {
    title: "The bathroom window problem",
    body: "Clear or poorly obscuring bathroom glass. You're either leaving the blind down all the time or putting up with feeling exposed. Frosted film, properly applied, gives you a permanent solution that looks like etched glass. No more blind — and you keep the daylight.",
  },
  {
    title: "The street-facing living room",
    body: "You shouldn't have to sit in the dark or keep net curtains up to have some privacy in your own living room. One-way mirror film gives you daytime privacy — people on the pavement see a reflection, you see through to the street. (Read the honest explanation on our privacy film page about how this changes at night.)",
  },
  {
    title: "The overlooked bedroom or garden room",
    body: "A frosted lower half on a ground-floor bedroom window, or a rear extension that backs onto a neighbour's garden. Partial coverage frosting solves it without losing the light.",
  },
  {
    title: "The conservatory that's unusable in summer",
    body: "Solar control film on a conservatory reduces solar heat gain significantly. If your conservatory hits 35°C in July and you've given up using it, this is the most cost-effective fix available.",
  },
  {
    title: "Front door sidelights",
    body: "Frosted or decorative film on front door glass panels and sidelights. Keeps the street from seeing your hallway without changing the look of the door.",
  },
];

export default function ResidentialWindowFilmPage() {
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
            <span className="text-foreground">Residential Window Film</span>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="relative h-[40vh] min-h-[280px] w-full overflow-hidden">
        <Image
          src="/images/window-film/residential-1.png"
          alt="Window film for your home — South Yorkshire"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 flex items-center justify-center px-4">
          <h1 className="text-center text-3xl font-bold tracking-tight text-white drop-shadow-lg md:text-4xl">
            Window film for your home — privacy, comfort and style across South Yorkshire
          </h1>
        </div>
      </section>

      {/* Intro */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <p className="text-muted leading-relaxed">
            Whether it&apos;s a bathroom window that needs obscuring, a living room the neighbours can see into, or a conservatory that turns into a greenhouse every summer — there&apos;s a window film that fixes it. Fitted in a single visit, with no mess, no structural work and no waiting weeks for a glazier.
          </p>
          <p className="mt-4 text-muted leading-relaxed">
            WRPX installs residential window film across Sheffield, Doncaster, Barnsley, Rotherham, Leeds and the wider South Yorkshire area. We&apos;ll come and look at the windows, tell you honestly what works, and get it sorted.
          </p>
        </div>
      </section>

      {/* Common home situations */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-center text-2xl font-semibold text-foreground md:text-3xl">
            What homeowners usually need
          </h2>
          <div className="grid gap-6 sm:grid-cols-2">
            {situations.map((item) => (
              <div key={item.title} className="card-float p-6 md:p-8">
                <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
                <p className="mt-3 text-sm text-muted leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cost comparison table */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Film vs blinds vs new glass — what makes sense
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[320px] border-collapse text-left">
              <thead>
                <tr className="border-b border-border">
                  <th className="pb-3 pr-4 font-semibold text-foreground">Option</th>
                  <th className="pb-3 pr-4 font-semibold text-foreground">Typical cost (bathroom window)</th>
                  <th className="pb-3 pr-4 font-semibold text-foreground">Time</th>
                  <th className="pb-3 font-semibold text-foreground">Reversible?</th>
                </tr>
              </thead>
              <tbody className="text-muted">
                {costRows.map((row) => (
                  <tr key={row.option} className="border-b border-border">
                    <td className="py-3 pr-4">{row.option}</td>
                    <td className="py-3 pr-4">{row.cost}</td>
                    <td className="py-3 pr-4">{row.time}</td>
                    <td className="py-3">{row.reversible}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-6 text-muted leading-relaxed">
            Film is the only option that: looks like etched glass, lets in full daylight, requires no maintenance, and is done in under an hour. For most homes, it&apos;s the straightforward choice.
          </p>
        </div>
      </section>

      {/* What to expect */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-6 text-2xl font-semibold text-foreground md:text-3xl">
            The residential window film process
          </h2>
          <p className="text-muted leading-relaxed">
            You contact us with the windows you want doing. We&apos;ll ask you some basic questions — window sizes, what you&apos;re trying to achieve, whether you&apos;ve had film before. For most standard jobs we can quote over the phone or from photos. For larger or unusual jobs, we&apos;ll come out and survey first.
          </p>
          <p className="mt-4 text-muted leading-relaxed">
            On the day: we arrive, set up, clean the glass thoroughly, apply the film, trim the edges clean, and check the result with you. For a single bathroom window that&apos;s usually under an hour start to finish. We leave no mess.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-3xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Home window film — quick answers
          </h2>
          <FaqAccordion items={faqItems} />
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-4 py-20">
        <div className="container mx-auto max-w-3xl">
          <div className="card-float border-2 border-accent/40 p-10 text-center md:p-12">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              Sort your windows out — free survey across South Yorkshire
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Call 07398 395417 or get in touch online. We&apos;ll come out, have a look, and tell you exactly what works best for your situation.
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
