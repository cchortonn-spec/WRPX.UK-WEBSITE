import type { Metadata } from "next";
import Link from "next/link";
import { FaqAccordion } from "@/components/FaqAccordion";
import { getServiceSchema } from "@/lib/schema";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "White-Label Graphics Installer South Yorkshire | WRPX",
  description:
    "Trade signage installation for agencies, sign companies and brands. We fit supplied window graphics, wall wraps, floor graphics, shop fronts and POS across Yorkshire and the North.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/white-label-graphics-installation/",
  },
};

const serviceSchema = getServiceSchema(
  "White-label retail graphics & signage installation",
  "Subcontract installation of supplied vinyl graphics and signage for trade partners across South Yorkshire, Yorkshire and the North — window graphics, wall wraps, promotional floor graphics, shop fronts and POS."
);

const faqItems = [
  {
    q: "Do you supply or print the graphics?",
    a: "No — we install only. We survey, prepare surfaces and apply graphics and films that you or your supplier provide.",
  },
  {
    q: "Do you only work through trade partners?",
    a: "White-label work is built for agencies, signage companies and brands who want a reliable installer under their name. We can also quote direct commercial clients — see our full commercial service for detail.",
  },
  {
    q: "Can our end client meet you on site?",
    a: "Usually your team remains the client-facing contact. If a joint site visit helps the programme, we can align that on a project-by-project basis.",
  },
  {
    q: "What do you need from us before install?",
    a: "Accurate site access details, agreed install dates, and the supplied graphics or films ready to fit — plus any brand or planogram notes. We confirm substrate and dimensions at survey so there are no surprises on the day.",
  },
  {
    q: "How do lead times work for multi-site programmes?",
    a: "We schedule around your rollout plan. Share your programme calendar early so we can hold capacity and keep the same standard across every location.",
  },
  {
    q: "What kind of floor work do you do?",
    a: "We install promotional floor graphics and anti-slip floor film for retail campaigns and wayfinding.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.a,
    },
  })),
};

export default function WhiteLabelGraphicsInstallationPage() {
  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <section className="border-b border-border bg-card py-16 md:py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <p className="text-sm font-medium uppercase tracking-wide text-accent">
            Trade &amp; agencies
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            White-label retail graphics &amp; signage installation
          </h1>
          <p className="mt-6 text-lg text-muted leading-relaxed">
            WRPX fits <strong className="text-foreground">graphics and films supplied by you or your supplier</strong>.
            We are a South Yorkshire-based <strong className="text-foreground">installation partner</strong> for marketing
            agencies, signage companies and brands rolling out campaigns across Yorkshire and the North.
          </p>
          <ul className="mt-6 space-y-2 text-muted">
            <li className="flex gap-2">
              <span className="text-accent">✓</span>
              <span>Your brand in front of the client — our prep, application and finish quality</span>
            </li>
            <li className="flex gap-2">
              <span className="text-accent">✓</span>
              <span>Photo reporting and a single point of contact on multi-site programmes</span>
            </li>
            <li className="flex gap-2">
              <span className="text-accent">✓</span>
              <span>Premium films (3M, Avery Dennison, CoverStyl, Hexis) and preparation-led installs</span>
            </li>
          </ul>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Link href="/contact/" className="btn-primary inline-block text-center">
              Request a trade quote
            </Link>
            <p className="text-sm text-muted">
              Call{" "}
              <a href={`tel:${siteConfig.phoneE164}`} className="text-accent hover:underline">
                {siteConfig.phone}
              </a>{" "}
              or{" "}
              <a href={`mailto:${siteConfig.email}`} className="text-accent hover:underline">
                {siteConfig.email}
              </a>
            </p>
          </div>
        </div>
      </section>

      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl font-semibold text-foreground md:text-3xl">Who this is for</h2>
          <ul className="mt-6 space-y-3 text-muted">
            {[
              "Marketing agencies running retail or commercial campaigns and needing a dependable installer on the ground",
              "Signage companies subcontracting specialist vinyl application or overflow capacity",
              "Brand and rollout teams coordinating refreshes, seasonal graphics or new openings across multiple sites",
              "Facilities and retail operations commissioning graphics installs with a clear handover and sign-off",
            ].map((item) => (
              <li key={item} className="flex gap-2">
                <span className="mt-1 shrink-0 text-accent">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm text-muted leading-relaxed">
            If you supply finished graphics or films and need a subcontract installer who understands materials and
            preparation, we built this service for you.
          </p>
        </div>
      </section>

      <section className="border-y border-border bg-card px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl font-semibold text-foreground md:text-3xl">What we install</h2>
          <p className="mt-4 text-muted leading-relaxed">
            <strong className="text-foreground">Retail graphics and signage</strong> — window graphics, wall wraps,{" "}
            <strong className="text-foreground">promotional floor graphics</strong> and anti-slip floor film, shop
            front applications, POS and display graphics.
          </p>
          <ul className="mt-6 space-y-3 text-muted">
            <li>
              <Link href="/commercial/window-graphics/" className="text-accent hover:underline">
                Window graphics &amp; vinyl signage
              </Link>{" "}
              — frosted, full colour, perforated and campaign installs
            </li>
            <li>
              <Link href="/commercial/wall-wraps/" className="text-accent hover:underline">
                Wall wraps &amp; large-format graphics
              </Link>
            </li>
            <li>
              <Link href="/commercial/floor-graphics/" className="text-accent hover:underline">
                Floor graphics
              </Link>{" "}
              — campaigns, wayfinding, anti-slip commercial film
            </li>
            <li>
              Shop fronts, fascia graphics, POS — as covered on our{" "}
              <Link href="/commercial-installation/" className="text-accent hover:underline">
                commercial installation
              </Link>{" "}
              hub
            </li>
            <li>
              <Link href="/window-film/commercial-window-film/" className="text-accent hover:underline">
                Commercial window film
              </Link>{" "}
              where specified alongside or instead of printed graphics
            </li>
          </ul>
        </div>
      </section>

      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl font-semibold text-foreground md:text-3xl">How white-label works</h2>
          <div className="mt-6 space-y-4 text-muted leading-relaxed">
            <p>
              You retain the client relationship. We attend under your instructions — your paperwork, your brand on
              comms where agreed — and we deliver the application standard your reputation depends on.
            </p>
            <p>
              You get photographic documentation and clear sign-off on each site. On multi-site programmes, we keep
              the same preparation and finish rules at every location so the estate looks consistent.
            </p>
            <p>
              NDAs and programme-specific requirements can be discussed upfront. We are used to working quietly
              behind agencies and sign companies across the region.
            </p>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-card px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl font-semibold text-foreground md:text-3xl">Coverage</h2>
          <p className="mt-4 text-muted leading-relaxed">
            Based in <strong className="text-foreground">South Yorkshire</strong>, we regularly cover{" "}
            <strong className="text-foreground">Yorkshire</strong>, <strong className="text-foreground">Greater Manchester</strong>{" "}
            and the wider <strong className="text-foreground">North of England</strong>, including the M1 corridor
            and East Midlands extensions for coordinated programmes. National coverage for large rollouts is discussed
            on a project basis.
          </p>
          <p className="mt-4 text-muted">
            <strong className="text-foreground">
              Sheffield · Rotherham · Barnsley · Doncaster · Leeds · Huddersfield · Chesterfield · Manchester · Nottingham
            </strong>{" "}
            and surrounding towns and retail parks.
          </p>
        </div>
      </section>

      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl font-semibold text-foreground md:text-3xl">Why WRPX</h2>
          <ul className="mt-6 space-y-3 text-muted">
            <li className="flex gap-2">
              <span className="text-accent">✓</span>
              <span>
                <strong className="text-foreground">{siteConfig.yearsInBusiness}+ years</strong> applying premium vinyl
                in demanding environments — the same discipline we use on kitchens transfers to retail graphics
              </span>
            </li>
            <li className="flex gap-2">
              <span className="text-accent">✓</span>
              <span>
                We specify and work with{" "}
                <strong className="text-foreground">3M, Avery Dennison, CoverStyl and Hexis</strong> — not budget film
                chosen to hit a price point
              </span>
            </li>
            <li className="flex gap-2">
              <span className="text-accent">✓</span>
              <span>
                <strong className="text-foreground">Surface preparation first</strong> — installs that are meant to last
                the life of the campaign
              </span>
            </li>
            <li className="flex gap-2">
              <span className="text-accent">✓</span>
              <span>
                Eligible commercial graphics work can carry a named{" "}
                <strong className="text-foreground">{siteConfig.guaranteeYears}-year guarantee</strong> on material
                defects, colour stability and adhesion when correctly maintained
              </span>
            </li>
          </ul>
        </div>
      </section>

      <section className="border-y border-border bg-card px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-center text-2xl font-semibold text-foreground md:text-3xl">
            How we work
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                num: 1,
                title: "Survey",
                body: "We visit site — or your client's site — before install. Surfaces, access and preparation needs are recorded so graphics arrive ready to fit.",
              },
              {
                num: 2,
                title: "Specification",
                body: "We confirm film and adhesive suitability for the substrate and environment — aligned with what you have supplied.",
              },
              {
                num: 3,
                title: "Preparation",
                body: "Cleaning, degreasing and treatment as required. This step decides whether the job lasts months or years.",
              },
              {
                num: 4,
                title: "Application",
                body: "Professional install to trade standard. Multi-site programmes can use consistent crews for repeatable quality.",
              },
              {
                num: 5,
                title: "Reporting & sign-off",
                body: "Photo pack per site, walk-round sign-off, and consolidated records on rollouts.",
              },
            ].map((step) => (
              <div key={step.num} className="card-float flex gap-4 bg-background p-6 md:p-8">
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

      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl font-semibold text-foreground md:text-3xl">Trade FAQ</h2>
          <p className="mt-4 text-muted">
            Quick answers for partners booking installation-only work.
          </p>
          <div className="mt-8">
            <FaqAccordion items={faqItems} />
          </div>
        </div>
      </section>

      <section className="px-4 pb-20">
        <div className="container mx-auto max-w-3xl">
          <div className="card-float border-2 border-accent/40 p-10 text-center md:p-12">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              Book a white-label install
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Send programme details, site list and timelines. We&apos;ll confirm coverage and quote installation —
              you supply the graphics; we deliver the finish.
            </p>
            <p className="mt-4 text-muted">
              <strong>Call: {siteConfig.phone}</strong> ·{" "}
              <a href={`mailto:${siteConfig.email}`} className="text-accent hover:underline">
                {siteConfig.email}
              </a>
            </p>
            <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <Link href="/contact/" className="btn-primary inline-block">
                Contact WRPX
              </Link>
              <Link href="/commercial-installation/" className="text-accent hover:underline">
                Full commercial service overview
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
