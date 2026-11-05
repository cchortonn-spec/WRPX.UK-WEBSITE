import type { Metadata } from "next";
import Link from "next/link";
import { getServiceSchema } from "@/lib/schema";
import { FaqAccordion } from "@/components/FaqAccordion";

export const metadata: Metadata = {
  title: "Gym Window Film Perth | Frosted, Solar Control & Manifestation for Gyms | WRPX",
  description:
    "Window film installation for gyms and leisure centres across Perth and Perthshire — frosted privacy film for changing rooms, one-way mirror film for studio glass, solar-control for glazed gym floors, Scottish Technical Handbooks-compliant glass manifestation and branded decorative vinyl. Dewars Centre PH2, Perth College UHI sport facilities, Bell's Sports Centre PH1 and all Perth PH postcode gyms and leisure facilities. Approximately 3 hours from our South Yorkshire base via the A1(M) and M90.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/window-film/gym-window-film-perth/",
  },
};

const serviceSchema = getServiceSchema(
  "Gym window film Perth — frosted, solar control, manifestation and privacy film for Perth gyms and leisure centres",
  "Window film installation for gyms, fitness studios and leisure centres across Perth and Perthshire. Frosted privacy film for changing rooms and shower areas, one-way mirror film for studio observation panels, solar-control film for glazed cardio floors and fitness studio windows, Scottish Technical Handbooks-compliant glass manifestation for glass partitions and internal doors, branded decorative vinyl for studio glazing. Dewars Centre Glover Street PH2, Bell's Sports Centre Hay Street PH1, Perth College UHI sport facilities Crieff Road, PureGym Perth and all Perth PH postcode gym and leisure facilities. Approximately 3 hours from our South Yorkshire base via the A1(M) and M90."
);

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.wrpx.co.uk/" },
    { "@type": "ListItem", position: 2, name: "Window Film", item: "https://www.wrpx.co.uk/window-film/" },
    { "@type": "ListItem", position: 3, name: "Window Film for Gyms", item: "https://www.wrpx.co.uk/window-film/gym-window-film/" },
    { "@type": "ListItem", position: 4, name: "Perth", item: "https://www.wrpx.co.uk/window-film/gym-window-film-perth/" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What window film services do you offer for Perth gyms and fitness studios?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Frosted privacy film for changing rooms, shower cubicle glazing and toilet partitions is the most consistent Perth gym application — full-height frosted for complete privacy, or banded frosted with clear glass above to retain natural light. One-way mirror film on studio observation panels and group exercise room glass walls lets instructors and managers see into studios without disturbing participants — used across Perth&apos;s independent fitness and boutique gym market. Solar-control film on south and west-facing glazed cardio floors and fitness studio windows reduces solar heat gain and glare — relevant for glazed fitness spaces at the Dewars Centre PH2 and any Perth gym facility facing direct afternoon sun. Scottish Technical Handbooks-compliant glass manifestation is required on full-height glazed panels and internal glass doors throughout each facility. Branded decorative film incorporating the gym&apos;s logo or identity on studio glass and reception glazing is common across Perth&apos;s independent and chain operators.",
      },
    },
    {
      "@type": "Question",
      name: "Which Perth gyms and leisure centres do you cover?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We cover gyms, fitness studios, leisure centres and health clubs across all Perth PH postcodes and the wider Perthshire area. The Dewars Centre on Glover Street PH2 — Perth&apos;s principal leisure facility operated by Live Active Leisure — generates substantial changing room privacy, poolside glazing and manifestation demand from its large pool, sports halls and fitness suite. Bell&apos;s Sports Centre on Hay Street PH1 adds racquet sport and fitness provision generating glazing film demand from its court areas and changing facilities. Perth College UHI sport and fitness facilities on Crieff Road generate student-facing fitness glazing film demand from changing rooms and studio spaces. PureGym Perth operates a city-centre location with ongoing refurbishment programmes creating consistent changing room and manifestation demand. Independent fitness studios and CrossFit operators across the Perth PH1 and PH2 zones generate studio glass film, changing room frosted film and Scottish Technical Handbooks-compliant manifestation demand.",
      },
    },
    {
      "@type": "Question",
      name: "How quickly can you install window film at a Perth gym?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "WRPX is based in South Yorkshire, approximately 3 hours from Perth via the A1(M) north and M90 — a direct motorway route via the Forth Road Bridge and Kinross into Perth. Survey visits for Perth gyms can typically be arranged within 5 to 10 days of enquiry. A typical Perth gym changing room installation — covering window glazing across the changing area and individual shower cubicle panels — takes 3 to 6 hours depending on the glazing area and layout. Smaller Perth boutique fitness studios in the city-centre PH1 and PH2 zones can often be completed in a single morning. We co-ordinate scheduling with your operations team to minimise disruption to opening hours, including early-morning and weekend slots where required. Perth can also be combined with Dundee — roughly 20 minutes east on the A90 — in a co-ordinated Tayside gym film programme.",
      },
    },
    {
      "@type": "Question",
      name: "Is frosted window film suitable for Perth gym changing rooms?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Commercial-grade frosted architectural film applied to Perth gym changing room windows and shower cubicle glazing provides complete privacy, is cleanable with standard gym cleaning products including disinfectant sprays, and is specified with a humidity-resistant adhesive for wet environments. The installation is visually indistinguishable from sandblasted glass. We seal all edges to prevent moisture ingress at the edge band — the critical factor in longevity in changing room and shower environments. Commercial-grade film in a well-maintained Perth gym changing room typically delivers 8 to 12 years of service life.",
      },
    },
    {
      "@type": "Question",
      name: "Do you work with Perth gym fit-out contractors and facilities managers?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — we work as a subcontract window film installation partner for Perth and Perthshire gym fit-out contractors, leisure facilities management companies, FM contractors and sign companies managing gym refit programmes across Scotland. White-label by default: we attend under your instructions, follow your site access protocols and provide photographic sign-off on completion of each area. We are approximately 3 hours from Perth via the A1(M) and M90. RAMS documentation available as standard for all Perth commercial leisure projects.",
      },
    },
    {
      "@type": "Question",
      name: "Which Perth and Perthshire postcodes do you cover for gym window film?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We cover all Perth and surrounding PH postcode areas — PH1 (Perth city centre: Bell&apos;s Sports Centre Hay Street PH1 generating racquet sport and fitness glazing film demand; city-centre Perth PH1 with commercial gym operators, PureGym and independent fitness studios; Perth Royal Infirmary PH1 generating ancillary clinical and fitness glazing film demand; Perth College UHI Crieff Road campus generating student-facing fitness glazing film demand from sport facilities and changing rooms), PH2 (Bridgend, Glover Street: the Dewars Centre Glover Street PH2 — Perth&apos;s principal leisure facility operated by Live Active Leisure with pools, fitness suite, sports halls and changing rooms generating substantial glazing film demand; Bridgend commercial and residential fitness provision south of the river Tay PH2), PH3 to PH16 (wider Perthshire: Kinross, Crieff, Blairgowrie, Aberfeldy, Pitlochry, Dunkeld and surrounding Perthshire market town leisure and community sport facilities within the broader PH postcode operational area). WRPX is based in South Yorkshire, approximately 3 hours from Perth via the A1(M) and M90.",
      },
    },
  ],
};

const faqItems = faqSchema.mainEntity.map((item) => ({
  q: item.name,
  a: item.acceptedAnswer.text,
}));

export default function GymWindowFilmPerthPage() {
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
            <Link href="/" className="text-accent hover:underline">Home</Link>
            <span className="mx-2">›</span>
            <Link href="/window-film/" className="text-accent hover:underline">Window Film</Link>
            <span className="mx-2">›</span>
            <Link href="/window-film/gym-window-film/" className="text-accent hover:underline">Window Film for Gyms</Link>
            <span className="mx-2">›</span>
            <span className="text-foreground">Perth</span>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="border-b border-border bg-card py-16 md:py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <p className="text-sm font-medium uppercase tracking-wide text-accent">
            Gym Window Film · Perth &amp; Perthshire
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Gym window film — Perth
          </h1>
          <p className="mt-5 text-lg text-muted leading-relaxed">
            Window film installation for gyms, fitness studios and leisure
            centres across Perth and Perthshire. Frosted privacy film for
            changing rooms, one-way mirror film for studio glass, solar-control
            for glazed gym floors and Scottish Technical Handbooks-compliant
            glass manifestation. Dewars Centre PH2, Bell&apos;s Sports Centre
            PH1 and Perth College UHI sport facilities covered. Approximately
            3 hours from our South Yorkshire base via the A1(M) and M90.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact/" className="btn-primary">
              Request a Perth Gym Quote →
            </Link>
            <Link href="/window-film/gym-window-film/" className="btn-secondary">
              Gym Window Film Overview
            </Link>
          </div>
        </div>
      </section>

      {/* Perth gym market */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Perth gym window film — the market
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              Perth has a well-established gym and leisure market anchored by
              the Dewars Centre on Glover Street PH2 — Perth&apos;s principal
              leisure facility operated by Live Active Leisure — alongside
              Bell&apos;s Sports Centre on Hay Street PH1, an active
              independent fitness sector and national gym operators including
              PureGym in the city-centre PH1 zone.
            </p>
            <p>
              Perth College UHI on Crieff Road — part of the University of the
              Highlands and Islands network — generates student-facing sport
              and fitness facility demand from changing rooms, studio spaces
              and sports areas, alongside a broader student population that
              sustains independent gym and leisure operators across the
              city-centre PH1 and southern PH2 zones.
            </p>
            <p>
              In Scotland, glass manifestation on full-height glazed panels and
              glass doors in sport and leisure facilities is governed by the
              Scottish Technical Handbooks — not Building Regulations as in
              England. We install Scottish Technical Handbooks-compliant
              manifestation on all Perth gym and leisure projects.
            </p>
            <p>
              WRPX is based in South Yorkshire, approximately 3 hours from
              Perth via the A1(M) north and M90. We can mobilise to the
              Dewars Centre, Bell&apos;s Sports Centre, Perth College UHI
              sport facilities and all PH postcode gym and leisure sites, and
              can cover Perth alongside Dundee in a co-ordinated Tayside
              programme.
            </p>
          </div>
        </div>
      </section>

      {/* Film types grid */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-2xl font-semibold text-foreground md:text-3xl">
            Gym window film applications in Perth
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Changing room privacy film
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Full-height frosted film for Perth gym changing rooms, shower
                cubicle glazing and toilet partitions. Specified with
                humidity-resistant adhesive for wet environments across the
                Dewars Centre PH2, Bell&apos;s Sports Centre PH1 and all PH
                postcode gym and leisure facilities.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                One-way mirror film — studio glass
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Reflective one-way mirror film on studio observation panels
                and group exercise room glass walls — lets instructors see in
                without disturbing class participants. Used across Perth
                fitness studios and university sport facilities.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Solar-control film — gym floors
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Reduces solar heat gain on south and west-facing glazed gym
                floors and fitness studio windows. Keeps the workout environment
                comfortable year-round across Perth&apos;s glazed fitness spaces
                without blocking natural light.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Glass manifestation
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Scottish Technical Handbooks-compliant manifestation on
                full-height glazed panels and internal glass doors across
                Perth gym and leisure facilities — frosted bands, etched-effect,
                dot-pattern or branded to the correct specification for
                Scottish commercial premises.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Branded decorative vinyl
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Cut logo, motivational graphics and decorative vinyl for
                Perth gym studio glass and reception glazing — incorporating
                the facility&apos;s identity colours and branding across PH1
                and PH2 city-centre and suburban fitness operators.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Subcontract gym fit-out
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                White-label window film installation for Perth gym fit-out
                contractors, leisure FM companies and sign companies managing
                Perthshire gym refurbishment programmes. RAMS documentation and
                photographic sign-off as standard.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-3xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Perth gym window film — common questions
          </h2>
          <FaqAccordion items={faqItems} />
        </div>
      </section>

      {/* Related links */}
      <section className="bg-card px-4 py-12">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-6 text-lg font-semibold text-foreground">Related Perth and Perthshire services</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <Link href="/window-film/gym-window-film/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Gym Window Film — Overview</p>
              <p className="mt-1 text-xs text-muted">Full gym and leisure window film service</p>
            </Link>
            <Link href="/window-film/gym-window-film-dundee/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Gym Window Film Dundee</p>
              <p className="mt-1 text-xs text-muted">Window film for Dundee gyms and leisure centres</p>
            </Link>
            <Link href="/window-film/gym-window-film-edinburgh/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Gym Window Film Edinburgh</p>
              <p className="mt-1 text-xs text-muted">Window film for Edinburgh gyms and leisure centres</p>
            </Link>
            <Link href="/window-film/retail-window-film-perth/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Retail Window Film Perth</p>
              <p className="mt-1 text-xs text-muted">Retail window film across Perth and Perthshire</p>
            </Link>
            <Link href="/subcontract-window-film-installation-perth/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Subcontract Window Film Perth</p>
              <p className="mt-1 text-xs text-muted">White-label installation for Perth trade partners</p>
            </Link>
            <Link href="/contact/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Request a Quote</p>
              <p className="mt-1 text-xs text-muted">Get in touch for a Perth gym window film enquiry</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-20">
        <div className="container mx-auto max-w-3xl">
          <div className="card-float border-2 border-accent/40 p-10 text-center md:p-12">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              Perth gym window film — get a quote
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Tell us the Perth facility, the glazing areas and what you need
              the film to do — privacy, solar control, manifestation or
              branding. We work white-label for gym fit-out contractors and
              direct for leisure operators. Approximately 3 hours from South
              Yorkshire via the A1(M) and M90.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link href="/contact/" className="btn-primary">
                Request a Perth Gym Quote →
              </Link>
              <Link href="/window-film/gym-window-film/" className="btn-secondary">
                Gym Window Film Overview
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
