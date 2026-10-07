import type { Metadata } from "next";
import Link from "next/link";
import { trainingProgram } from "@/lib/training-program";
import { PricingCallout } from "@/components/training/PricingCallout";
import { TrainingRelatedLinks } from "@/components/training/TrainingRelatedLinks";
import { TrainingHubCta } from "@/components/training/TrainingHubCta";

export const metadata: Metadata = {
  title: "Kitchen Wrapping Training Liverpool | Learn to Wrap — WRPX Live Job Training",
  description:
    "Kitchen wrapping training accessible from Liverpool. WRPX runs 5-day live kitchen installs in South Yorkshire — approximately 1 hour 20 minutes from Liverpool via the M62. Not a classroom: real job training on an actual kitchen. Leave with branding, a website, 12 months SEO and ongoing support. £1,699 all-in.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/kitchen-wrapping-training-liverpool/",
  },
  openGraph: {
    title: "Kitchen Wrapping Training Liverpool | WRPX Live Job Training",
    description:
      "Liverpool-accessible kitchen wrapping training on real live installs with WRPX. Full business setup included — branding, website, 12 months SEO and trade support. Approximately 1 hour 20 minutes from Liverpool via the M62.",
    url: "https://www.wrpx.co.uk/kitchen-wrapping-training-liverpool/",
    type: "website",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Kitchen wrapping training Liverpool — WRPX live-job training programme",
  provider: {
    "@type": "LocalBusiness",
    name: "WRPX",
    url: "https://www.wrpx.co.uk",
    address: {
      "@type": "PostalAddress",
      addressRegion: "South Yorkshire",
      addressCountry: "GB",
    },
  },
  areaServed: [
    { "@type": "City", name: "Liverpool" },
    { "@type": "State", name: "Merseyside" },
  ],
  description:
    "5-day kitchen wrapping training on a real live install with WRPX — accessible from Liverpool via the M62. Includes prep, primers, sealants, application, measure and price coaching, branding help, website + live domain, 12 months local SEO and ongoing phone/WhatsApp support. £1,699 all-in.",
  offers: {
    "@type": "Offer",
    price: "1699",
    priceCurrency: "GBP",
    description: "Complete kitchen wrapping training and business launch package",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.wrpx.co.uk/" },
    {
      "@type": "ListItem",
      position: 2,
      name: "Kitchen Wrapping Training",
      item: "https://www.wrpx.co.uk/kitchen-wrapping-training/",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Liverpool",
      item: "https://www.wrpx.co.uk/kitchen-wrapping-training-liverpool/",
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is WRPX kitchen wrapping training available to people based in Liverpool?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Training takes place on live WRPX kitchen wrapping installs in South Yorkshire, approximately 1 hour 20 minutes from Liverpool city centre via the M62 east to the M18 or M1 south. Liverpool has a direct, fast motorway link to South Yorkshire — the M62 runs unbroken from the Mersey Tunnel approach east through Warrington, Manchester and across to the M18 junction near Thorne, which then drops south into the Doncaster and Sheffield corridor. It is one of the most straightforward drives in the country from a major city. Liverpool trainees typically commute daily or stay over a few nights in Sheffield depending on preference.",
      },
    },
    {
      "@type": "Question",
      name: "How long does it take to travel from Liverpool to the WRPX training base?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Approximately 1 hour 20 to 1 hour 40 minutes from Liverpool city centre in off-peak conditions via the M62 east. From Liverpool L1, L2 or L3 city centre, the East Lancashire Road A580 east or the Kingsway Tunnel approach connects to the M62 eastbound at junction 4. The M62 runs east through Warrington, Runcorn and across Greater Manchester — you can bypass Manchester city centre entirely on the M62 by passing through the elevated section at junction 17. At the M62/M18 interchange near Goole, take the M18 south toward Rotherham and Sheffield. For trainees in south Liverpool — Wavertree L15, Allerton L18, Childwall L16, Mossley Hill L18, Garston L19 — the M62 is accessible from the A562 or Queen&apos;s Drive ring road, making the drive door-to-door around 1 hour 25 minutes. For north Liverpool — Anfield L4, Everton L5, Walton L4, Croxteth L11 — allow an extra 15 to 20 minutes to clear the city and pick up the M62 at Tarbock or Winwick.",
      },
    },
    {
      "@type": "Question",
      name: "Is this classroom training or hands-on training?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Hands-on from day one. You join Connor and the WRPX team on a real kitchen install in a real client kitchen — typically in Sheffield or South Yorkshire. There is no classroom, no training bay, no mock kitchens. Five days on a live job is what prepares you for actual work. The problems you encounter on a live install — adhesion on aged laminate, primer on bare MDF edges, cutting around existing appliances, finishing awkward angles — are the same problems you will face on your first solo job in Liverpool. No classroom setting can replicate that preparation, which is why WRPX structures training this way.",
      },
    },
    {
      "@type": "Question",
      name: "Is kitchen wrapping a good business to run in Liverpool?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Liverpool is a strong market for kitchen wrapping. The city and inner suburbs have large concentrations of Victorian and Edwardian terrace housing across L4 (Anfield, Walton), L5 (Everton, Kirkdale), L6 (Tuebrook, West Derby Road), L7 (Edge Hill, Kensington), L8 (Toxteth, Dingle), L15 (Wavertree), L17 (Aigburth, St Michael&apos;s Hamlet), and L18 (Allerton, Mossley Hill). These streets were built between 1860 and 1914 and the fitted kitchens are typically 20 to 35 years old — exactly the stock where kitchen wrapping delivers the most compelling upgrade-vs-replace decision for homeowners. The wider Merseyside area — Wirral CH, Sefton and Knowsley — extends the accessible market further. Liverpool&apos;s property market has seen sustained investment from young owner-occupiers over the past decade, particularly in the inner city and the south Liverpool corridor, which has shifted the local renovation spend demographic strongly toward selective improvements that don&apos;t require a full contractor team.",
      },
    },
    {
      "@type": "Question",
      name: "What do I get at the end of the 5 days?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You leave with the wrap skill, branding help (name and logo direction), trade supplier introductions and account setup support, a done-for-you website with live domain, 12 months of local SEO updates targeting your Liverpool areas and postcodes, an ongoing phone and WhatsApp support line, and a WRPX Certificate of Completion (if approved). The package is built so you leave with a real business ready to take enquiries — not just a technique.",
      },
    },
    {
      "@type": "Question",
      name: "How do I apply for a place from Liverpool?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Message Connor on WhatsApp or call. Places open around live WRPX kitchen installs — so availability depends on the install schedule. If you are based in Liverpool or Merseyside and want to start a kitchen wrapping business, get in touch and we will let you know the next available intake. We do not hold long waitlists — when a place is available and you are ready, we move quickly.",
      },
    },
  ],
};

const faqItems = faqSchema.mainEntity.map((item) => ({
  q: item.name,
  a: item.acceptedAnswer.text,
}));

export default function KitchenWrappingTrainingLiverpoolPage() {
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
            <Link href="/" className="text-accent hover:underline">
              Home
            </Link>
            <span className="mx-2">›</span>
            <Link
              href="/kitchen-wrapping-training/"
              className="text-accent hover:underline"
            >
              Kitchen Wrapping Training
            </Link>
            <span className="mx-2">›</span>
            <span className="text-foreground">Liverpool</span>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="border-b border-border bg-card py-16 md:py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <p className="text-sm font-medium uppercase tracking-wide text-accent">
            Kitchen Wrapping Training · Liverpool &amp; Merseyside
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Kitchen wrapping training — Liverpool
          </h1>
          <p className="mt-5 text-lg text-muted leading-relaxed">
            WRPX runs kitchen wrapping training on real live installs in South Yorkshire
            — approximately 1 hour 20 minutes from Liverpool via the M62. Five days on an
            actual kitchen job with Connor&apos;s team: prep, application, pricing and
            finishing under real conditions. Leave with the skill, a brand, a website,
            12 months of SEO targeting your Liverpool areas, and a support line.{" "}
            {trainingProgram.priceDisplay} all-in.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="https://wa.me/447467922560"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Apply on WhatsApp →
            </Link>
            <Link href="/kitchen-wrapping-training/" className="btn-secondary">
              Full Training Overview
            </Link>
          </div>
        </div>
      </section>

      {/* Travel from Liverpool */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Getting to training from Liverpool
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              Training takes place on live WRPX kitchen wrapping installs in Sheffield and
              South Yorkshire. From Liverpool, the M62 eastbound gives a direct, fast link
              to South Yorkshire — one of the most straightforward inter-city motorway
              routes in the north of England.
            </p>
            <p>
              From Liverpool city centre — L1, L2, L3 — pick up the East Lancashire Road
              A580 from the city, or use the Kingsway Tunnel approach to reach the M62 at
              junction 4. The M62 runs east through St Helens, Warrington and Widnes before
              crossing into Greater Manchester. You pass south of the city centre entirely
              on the elevated M62 section at junction 17 — no Manchester traffic, no city
              diversions. The M62 continues east through the Pennines to the M18 junction
              near Goole. Take the M18 southbound, which runs straight into the Rotherham
              and Sheffield corridor, with junctions for Doncaster, Rotherham and Sheffield
              off the M1 at the southern end.
            </p>
            <p>
              From south Liverpool — Wavertree L15, Allerton L18, Garston L19, Childwall
              L16, Mossley Hill L18 — the A562 Speke Road or the Queen&apos;s Drive ring
              road connects east to the M62 at Tarbock junction 6. For trainees in this
              part of Liverpool, the drive to South Yorkshire is typically 1 hour 20 to
              1 hour 30 minutes from the door.
            </p>
            <p>
              From north Liverpool — Anfield L4, Everton L5, Walton L4, Croxteth L11,
              Norris Green L11 — the A57(M) or Queen&apos;s Drive runs south to the
              East Lancashire Road A580, joining the M62 at Gillmoss or Winwick for
              the eastbound run. North Liverpool trainees should allow an extra 15 to
              20 minutes to clear the city — budget 1 hour 35 to 1 hour 45 minutes
              from north Liverpool postcodes.
            </p>
            <p>
              By train, Liverpool Lime Street to Sheffield takes approximately 1 hour 50
              minutes via the TransPennine Express service (changing at Manchester
              Piccadilly in some cases, or via Huddersfield). The direct Transpennine
              route across the Pennines to Sheffield is clean and reliable for trainees
              who prefer not to drive. Sheffield city centre budget accommodation is a
              short walk from the station — staying over for a few nights is a reasonable
              option for Liverpool trainees if a daily 3-hour round trip feels long.
            </p>
            <p>
              Most Liverpool trainees who complete the full 5 days find daily commuting
              perfectly manageable — the M62 is well-lit, well-maintained and has no
              significant bottlenecks between Liverpool and the M18 junction on a 7am
              departure. The M62 at Saddleworth Moor (junctions 22–23) is the only
              section that can be affected by winter weather — allow extra time in
              November to February if conditions are poor.
            </p>
          </div>
        </div>
      </section>

      {/* Liverpool market opportunity */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Kitchen wrapping in Liverpool — the market
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              Liverpool is one of the strongest regional markets for kitchen wrapping in
              the north of England. The city has a large, dense housing stock built
              predominantly between 1860 and 1930 — Victorian and Edwardian terraces
              and semi-detached houses spread across the inner city and the suburbs
              stretching south, east and north.
            </p>
            <p>
              The inner city postcodes — Toxteth L8, Dingle L8, Kensington L7, Edge Hill
              L7, Anfield L4, Walton L4, Kirkdale L5, Everton L5, Tuebrook L6, West Derby
              Road L6 — contain some of the densest concentrations of Victorian terrace
              housing in England outside London. These properties were built with small
              galley or back kitchens, which have since been fitted with laminate-door
              kitchen units. In many of these homes, the fitted kitchen dates from the
              late 1980s or 1990s — structurally sound, well-made units with tired or
              damaged door fronts that a trained wrapper can transform for a fraction of
              the replacement cost.
            </p>
            <p>
              South Liverpool — Wavertree L15, Aigburth L17, Garston L19, Allerton L18,
              Mossley Hill L18, Woolton L25, Childwall L16 — has seen sustained renovation
              spend over the past decade. This is a mix of Edwardian semi-detached and
              1930s bay-fronted suburban properties, now occupied by younger owner-occupiers
              and professional households who invest selectively in property improvements.
              Kitchen wrapping is a natural fit: visible, cost-effective improvement
              without the disruption of a full replacement.
            </p>
            <p>
              The wider Merseyside market extends the addressable area for a Liverpool-based
              wrapper significantly. The Wirral peninsula — Birkenhead CH41, Tranmere CH42,
              Bebington CH63, Heswall CH60, West Kirby CH48 — is accessible via the Mersey
              Tunnel or the M53 and carries a large Victorian and inter-war housing stock.
              Sefton — Bootle L20, Waterloo L22, Crosby L23, Formby L37 — extends the
              market north of Liverpool. Knowsley — Kirkby L32, Huyton L36, Prescot L34
              — extends it east. A Liverpool-based kitchen wrapper covering their home
              city and the surrounding Merseyside area has one of the largest residential
              markets for kitchen wrapping outside London.
            </p>
            <p>
              Kitchen wrapping is under-represented in Liverpool in organic search results.
              Most operators serving the area are based elsewhere or listing on lead-gen
              directories without a dedicated Liverpool site presence. A trained wrapper
              with an optimised website targeting Liverpool postcodes, suburbs and
              surrounding Merseyside areas is not entering a saturated market — they are
              entering a large, underserved one.
            </p>
          </div>
        </div>
      </section>

      {/* What is included */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-2xl font-semibold text-foreground md:text-3xl">
            What the {trainingProgram.priceDisplay} Liverpool training includes
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                5 days on a live kitchen install
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Real client kitchen in South Yorkshire — approximately 1 hour 20 minutes
                from Liverpool via the M62. Real problems, real conditions, from day one.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Prep, primers, sealants and tools
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                The products used every day — what to buy, where to get it, how to apply
                it so the job lasts and doesn&apos;t come back.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Measure and price coaching
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                How to survey a Liverpool kitchen, price it for your skill level and quote
                confidently — so you&apos;re not guessing every job.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Brand name and logo direction
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                A professional brand identity so you look like a real business from the
                first enquiry call you take in Merseyside.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Done-for-you website + live domain
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                A branded site ready to take enquiries — targeting Liverpool postcodes and
                suburbs so homeowners in L4, L7, L8 and L15 can find you.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                12 months of local SEO
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Ongoing SEO updates targeting your Liverpool areas so you rank in the
                markets that matter to your business — not just generic terms.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Trade supplier introductions
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                The film brands, adhesion primers and tools that work — trade account
                introductions so you&apos;re buying at the right price from day one.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Ongoing phone and WhatsApp support
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Call or message Connor when a job goes awkward. Not a generic help desk
                — direct line to the person who trained you.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                WRPX Certificate of Completion
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Issued on approval at the end of training — a WRPX completion document,
                not a government-accredited qualification.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing callout */}
      <section className="bg-card px-4 py-12">
        <div className="container mx-auto max-w-3xl">
          <PricingCallout />
        </div>
      </section>

      {/* Not a classroom */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Why a live job — not a classroom
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              A lot of kitchen wrapping training is delivered in a workshop or training bay
              on practice panels. You learn the basic motion of applying vinyl — but you
              never encounter the actual problems that arise on a real kitchen in a real
              house. Aged laminate that has lifted at the edge and needs primer before
              film. A drawer front that was once repainted and has poor adhesion. A
              cornice above the doors that limits the angle of approach. An existing
              kitchen appliance that cannot be moved.
            </p>
            <p>
              These are the problems that stop new wrappers cold on their first solo job
              in Liverpool. Not a lack of technique — a lack of exposure to real conditions.
            </p>
            <p>
              WRPX training is structured differently. You join a live kitchen install from
              day one, working alongside Connor on a real client kitchen. The problems you
              solve during training are the problems you will face on your first job in
              Toxteth, Wavertree or the Wirral. When you leave after 5 days, you have
              seen the full range of what a real kitchen install involves — and you have
              the solutions, not just the technique.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-3xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Liverpool training — common questions
          </h2>
          <div className="space-y-4">
            {faqItems.map(({ q, a }) => (
              <details key={q} className="card-float group overflow-hidden">
                <summary className="cursor-pointer list-none px-6 py-4 font-medium text-foreground [&::-webkit-details-marker]:hidden">
                  {q}
                </summary>
                <div className="border-t border-border px-6 py-4 text-muted">{a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Related training locations */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <TrainingRelatedLinks currentHref="/kitchen-wrapping-training-liverpool/" />
        </div>
      </section>

      {/* Hub CTA */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-3xl">
          <TrainingHubCta />
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-4 py-20">
        <div className="container mx-auto max-w-3xl">
          <div className="card-float border-2 border-accent/40 p-10 text-center md:p-12">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              Ready to start from Liverpool?
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              The M62 puts WRPX training within easy daily reach of Liverpool. Message
              Connor on WhatsApp to find out what&apos;s available — places fill around
              live install dates, so the sooner you get in touch the better.
            </p>
            <p className="mt-3 text-xs text-muted/60">
              {trainingProgram.earnings.disclaimer}
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                href="https://wa.me/447467922560"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Apply on WhatsApp →
              </Link>
              <Link href="/kitchen-wrapping-training/" className="btn-secondary">
                Full Training Overview
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
