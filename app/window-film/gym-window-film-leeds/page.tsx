import type { Metadata } from "next";
import Link from "next/link";
import { getServiceSchema } from "@/lib/schema";
import { FaqAccordion } from "@/components/FaqAccordion";

export const metadata: Metadata = {
  title: "Gym Window Film Leeds | Frosted, Solar Control & Manifestation for Fitness Centres | WRPX",
  description:
    "Window film installation for gyms and leisure centres across Leeds and West Yorkshire — frosted privacy film for changing rooms, one-way mirror film for studio glass, solar control for glazed gym floors, DDA glass manifestation and branded decorative vinyl. PureGym, David Lloyd, The Gym Group, Nuffield Health and all Leeds LS postcode gyms. Installation available citywide across Leeds.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/window-film/gym-window-film-leeds/",
  },
};

const serviceSchema = getServiceSchema(
  "Gym window film Leeds — frosted, solar control, manifestation and privacy film for Leeds gyms and leisure centres",
  "Window film installation for gyms, fitness studios and leisure centres across Leeds and West Yorkshire. Frosted privacy film for changing rooms and shower areas, one-way mirror film for studio observation panels, solar-control film for glazed gym floors and fitness studio windows, DDA-compliant glass manifestation for glass partitions and internal doors, branded decorative vinyl for studio glazing. Leeds city centre, Headingley, Cookridge, Kirkstall, Armley, Meanwood, Morley, Roundhay and all Leeds LS postcode gym and leisure facilities."
);

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.wrpx.co.uk/" },
    { "@type": "ListItem", position: 2, name: "Window Film", item: "https://www.wrpx.co.uk/window-film/" },
    { "@type": "ListItem", position: 3, name: "Window Film for Gyms", item: "https://www.wrpx.co.uk/window-film/gym-window-film/" },
    { "@type": "ListItem", position: 4, name: "Leeds", item: "https://www.wrpx.co.uk/window-film/gym-window-film-leeds/" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What window film services do you offer for Leeds gyms and fitness studios?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Frosted privacy film for changing rooms, shower cubicle glazing and toilet partitions is the most common Leeds gym application — full-height frosted for complete privacy, or banded frosted with clear glass above to retain natural light. One-way mirror film on studio observation panels and group exercise room glass walls lets instructors and managers see into studios without disrupting class participants. Solar-control film on south and west-facing glazed gym floors and fitness studio windows reduces solar heat gain and glare on exposed Leeds sites. DDA-compliant glass manifestation is required on full-height glazed panels and internal glass doors throughout the facility. Branded decorative film incorporating the gym&apos;s logo or identity on studio glass and reception glazing is increasingly common across Leeds independent and chain fitness operators.",
      },
    },
    {
      "@type": "Question",
      name: "Which Leeds gyms and leisure centres do you cover?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We cover gyms, fitness studios, leisure centres and health clubs across all Leeds LS postcodes. PureGym operates multiple Leeds locations — Leeds city centre LS1, Kirkstall LS5, Seacroft LS14, Morley LS27, Bramley LS13 and others across the metropolitan area. David Lloyd Leeds at Cookridge LS16 is a premium health club with pool, spa and group exercise studios where solar-control film, frosted privacy film and DDA manifestation are all standard applications. The Gym Group and Nuffield Health Leeds (Nuffield Health Leeds Headingley LS6) cover the premium-to-budget range across the city. Leeds City Council leisure centres — the John Charles Centre for Sport LS11, Kirkstall Leisure Centre LS5, Armley Leisure Centre LS12, Middleton Sports Centre LS10 and Fearnville Leisure Centre LS8 — are all within scope. Boutique operators, CrossFit boxes, yoga and pilates studios and independent gyms concentrated in the Headingley LS6, Chapel Allerton LS7, and Hyde Park LS6 zones are also covered.",
      },
    },
    {
      "@type": "Question",
      name: "How quickly can you install window film at a Leeds gym?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "WRPX is based in South Yorkshire, approximately 45 minutes to 1 hour from Leeds city centre via the M1 north. Survey visits for Leeds gyms can typically be arranged within a few days of enquiry. A typical Leeds gym changing room installation — covering window glazing across the changing area and individual shower cubicle panels — takes 3 to 6 hours depending on the glazing area and layout. Smaller Leeds PT studio or boutique fitness installations can often be completed in a single morning. We co-ordinate scheduling with your operations team to minimise disruption to opening hours.",
      },
    },
    {
      "@type": "Question",
      name: "Is frosted window film suitable for Leeds gym changing rooms?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Commercial-grade frosted architectural film applied to Leeds gym changing room windows and shower cubicle glazing provides complete privacy, is cleanable with standard gym cleaning products including disinfectant sprays, and is specified with a humidity-resistant adhesive for wet environments. The installation is neat and visually indistinguishable from sandblasted glass. We seal all edges to prevent moisture ingress at the edge band — the critical factor in longevity in changing room and shower environments. Commercial-grade film in a well-maintained Leeds gym changing room typically delivers 8 to 12 years of service life.",
      },
    },
    {
      "@type": "Question",
      name: "Do you work with Leeds gym fit-out contractors and leisure facilities managers?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — we work as a subcontract window film installation partner for Leeds gym fit-out contractors, leisure facilities management companies, FM contractors and sign companies managing gym refit programmes across West Yorkshire. White-label by default: we attend under your instructions, follow your site access protocols and provide photographic sign-off on completion. For Leeds City Council leisure portfolios managed by Leeds Active or FM operators, we can provide consistent installation across multiple West Yorkshire leisure centre locations. RAMS documentation available as standard.",
      },
    },
    {
      "@type": "Question",
      name: "Which Leeds postcodes and areas do you cover for gym window film?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We cover all Leeds LS postcodes — LS1 (Leeds city centre — multiple gym chain locations, converted commercial-to-gym units in the city core), LS2 (Little London/Woodhouse — Nuffield Health Leeds, university-adjacent gyms), LS3 (Woodhouse/Burley — proximity to university student fitness demand), LS5 (Kirkstall — PureGym Kirkstall, Kirkstall Leisure Centre), LS6 (Headingley/Hyde Park — the densest boutique studio and independent gym zone, University of Leeds and Leeds Beckett proximity, CrossFit boxes and yoga studios), LS7 (Chapel Allerton/Moortown — independent premium gym cluster), LS8 (Fearnville/Roundhay — Fearnville Leisure Centre zone), LS11 (Beeston/Holbeck — John Charles Centre for Sport, the principal Leeds City Council sports hub), LS12 (Armley — Armley Leisure Centre), LS13 (Bramley — PureGym Bramley), LS14 (Seacroft — PureGym Seacroft, east Leeds gym zone), LS16 (Cookridge/Adel — David Lloyd Leeds Cookridge), LS27 (Morley — out-of-town gym cluster, PureGym Morley). Wider West Yorkshire: Bradford BD, Wakefield WF and Huddersfield HD postcodes are within regular reach from our South Yorkshire base.",
      },
    },
  ],
};

const faqItems = faqSchema.mainEntity.map((item) => ({
  q: item.name,
  a: item.acceptedAnswer.text,
}));

export default function GymWindowFilmLeedsPage() {
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
            <span className="text-foreground">Leeds</span>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="border-b border-border bg-card py-16 md:py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <p className="text-sm font-medium uppercase tracking-wide text-accent">
            Gym &amp; Leisure Window Film · Leeds &amp; West Yorkshire
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Gym window film — Leeds
          </h1>
          <p className="mt-5 text-lg text-muted leading-relaxed">
            Window film installation for gyms, fitness studios and leisure centres
            across Leeds and West Yorkshire. Frosted privacy film for changing rooms,
            one-way mirror film for studio glass, solar control for glazed gym floors,
            DDA-compliant glass manifestation and branded decorative vinyl. Leeds city
            centre, Headingley, Cookridge, Kirkstall and all LS postcode gym and
            leisure facilities. Approximately 45 minutes to 1 hour from our South
            Yorkshire base via the M1 north.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact/" className="btn-primary">
              Request a Leeds Gym Quote →
            </Link>
            <Link href="/window-film/gym-window-film/" className="btn-secondary">
              Gym Window Film Overview
            </Link>
          </div>
        </div>
      </section>

      {/* Leeds gym market */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Leeds gym and leisure window film — the market
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              Leeds is the UK&apos;s largest financial and professional services centre
              outside London, with a city-region population approaching 800,000
              and a metropolitan economy that drives strong demand across commercial
              gyms, corporate wellness facilities and boutique fitness studios.
              The University of Leeds and Leeds Beckett University together bring
              approximately 63,000 students to the city, with a particularly dense
              fitness and lifestyle market concentrated in the Headingley LS6 and
              Hyde Park LS6 zones immediately north-west of the city centre.
            </p>
            <p>
              Leeds has an exceptionally wide gym sector — from David Lloyd Cookridge
              LS16 at the premium end, through Nuffield Health, PureGym&apos;s multiple
              Leeds locations and The Gym Group budget sites, to independent boutique
              operators along the Headingley corridor and in Chapel Allerton LS7.
              The John Charles Centre for Sport in Beeston LS11 — Leeds City
              Council&apos;s principal sport and leisure hub — operates a large fitness
              suite, pool complex and sports hall where window film requirements
              span changing rooms, pool glazing and publicly accessible glazed areas.
            </p>
            <p>
              Leeds&apos; gym and fitness market also reflects a strong corporate wellness
              trend. Office buildings and mixed-use developments in the South Bank
              LS10, city-centre LS1 and Wellington Place LS1 zones increasingly
              incorporate on-site gym and wellness facilities where window film —
              particularly frosted privacy film for changing rooms and solar-control
              film for glazed gym floors — is part of the fit-out specification
              rather than a retrofit project.
            </p>
            <p>
              WRPX is based in South Yorkshire, approximately 45 minutes to 1 hour
              from Leeds city centre via the M1 north. Leeds gyms benefit from fast
              local survey and installation response without the premium that a
              distant national installer would need to charge.
            </p>
          </div>
        </div>
      </section>

      {/* Film types grid */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-2xl font-semibold text-foreground md:text-3xl">
            Gym window film applications in Leeds
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Frosted privacy film — changing rooms
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Full-height or banded frosted film for changing room windows,
                shower cubicle glazing and toilet partition glass across Leeds
                gyms. Humidity-resistant adhesive for wet-environment durability,
                cleanable with standard gym disinfectant products.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                One-way mirror film — studio glass
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Reflective privacy film for studio observation panels and group
                exercise room glass walls in Leeds fitness studios — mirrored
                on the bright studio side, view-through from the darker corridor.
                Popular for yoga studios, spin rooms and CrossFit boxes.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Solar control film — gym floors
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Reduces solar heat gain by 40 to 79% on south and west-facing
                glazed cardio floors and fitness studio windows. Cuts UV fading
                of flooring and equipment without blocking natural light —
                relevant for Leeds gyms with large glazed south-facing facades.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                DDA glass manifestation
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Building Regulations-compliant manifestation strips at 850mm and
                1400mm height for full-height glazed panels and internal glass
                doors throughout Leeds gym and leisure facilities — frosted
                bands, etched-effect, dot pattern or branded options.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Branded decorative film
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Cut logo, motivational text, pattern or printed frosted film
                incorporating Leeds gym branding on studio glass, reception
                glazing and partition panels — combining identity and privacy
                in a single installation.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Poolside and wet-area film
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Specialist film specification for Leeds leisure centre
                poolside glazing, spa areas and wet-side changing environments —
                humidity-appropriate adhesive, edge sealing and film grade
                selected for chlorine-adjacent installations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leeds gym zones */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Leeds gym and leisure zones we cover
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              <strong className="text-foreground">Leeds city centre LS1/LS2</strong> —
              the primary commercial gym cluster, with multiple PureGym, The Gym Group
              and independent studio locations in and around the city core. The South
              Bank regeneration zone in LS10 and the Wellington Place office quarter
              in LS1 have growing corporate wellness and on-site gym facilities
              within office and mixed-use developments. Converted commercial units
              often have large glazed frontages where frosted banding and DDA
              manifestation are required alongside changing room privacy film.
            </p>
            <p>
              <strong className="text-foreground">Headingley and Hyde Park LS6</strong> —
              Leeds&apos; densest independent boutique fitness zone, immediately
              north-west of the city centre and adjacent to both the University of
              Leeds and Leeds Beckett University campuses. Yoga studios, CrossFit
              boxes, personal training studios and independent gyms along the
              Otley Road and Headingley Lane corridors frequently need frosted film
              on street-facing studio glass, one-way mirror film on observation
              panels and branded decorative film for studio identity.
            </p>
            <p>
              <strong className="text-foreground">Cookridge and north Leeds LS16</strong> —
              David Lloyd Leeds at Cookridge LS16 is a large premium health club
              with pool, spa, tennis and group exercise facilities where solar-control
              film, frosted privacy film for changing rooms and DDA manifestation
              for glass doors are all standard ongoing maintenance applications.
              The north Leeds residential zones of Adel LS16, Alwoodley LS17 and
              Moortown LS17 have independent health clubs and tennis clubs with
              window film requirements.
            </p>
            <p>
              <strong className="text-foreground">Beeston and south Leeds LS11</strong> —
              the John Charles Centre for Sport in Beeston LS11 is Leeds City
              Council&apos;s principal sport and leisure hub, with a large fitness suite,
              50-metre pool, athletics track and extensive glazed areas across the
              facility. Poolside glazing, changing room windows and glazed internal
              partitions are all within scope. Morley LS27 and Rothwell LS26 to
              the south carry additional gym and leisure provision for the south
              Leeds suburban population.
            </p>
          </div>
        </div>
      </section>

      {/* B2B / subcontract section */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Subcontract and white-label gym window film — Leeds
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              For Leeds gym fit-out contractors, FM companies, sign companies and
              property management businesses managing window film programmes across
              multiple Leeds and West Yorkshire leisure sites, WRPX operates as a
              white-label installation partner. We attend under your instructions,
              follow your site access protocols and provide photographic sign-off
              on completion of each area.
            </p>
            <p>
              RAMS documentation is provided as standard for all Leeds gym
              programmes. For national gym chain operators — PureGym, David Lloyd,
              The Gym Group — managing Leeds sites within a wider UK window film
              programme, our local South Yorkshire position means we can cover
              Leeds and West Yorkshire sites without a travel premium that a
              distant national installer would need to build into the quote.
            </p>
            <p>
              We also cover Bradford BD, Wakefield WF, Huddersfield HD and the
              wider West Yorkshire leisure portfolio as local rather than
              out-of-area locations — all within straightforward daily reach from
              our South Yorkshire base.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-3xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Leeds gym window film — common questions
          </h2>
          <FaqAccordion items={faqItems} />
        </div>
      </section>

      {/* Related links */}
      <section className="bg-card px-4 py-12">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-6 text-lg font-semibold text-foreground">Related Leeds window film services</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <Link href="/window-film/gym-window-film/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Gym Window Film — Overview</p>
              <p className="mt-1 text-xs text-muted">Full gym and leisure window film service</p>
            </Link>
            <Link href="/window-film/gym-window-film-sheffield/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Gym Window Film Sheffield</p>
              <p className="mt-1 text-xs text-muted">Gym and leisure film across Sheffield and South Yorkshire</p>
            </Link>
            <Link href="/window-film/frosted-film-leeds/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Frosted Window Film Leeds</p>
              <p className="mt-1 text-xs text-muted">Frosted and privacy film across Leeds</p>
            </Link>
            <Link href="/window-film/frosted-window-film/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Frosted Window Film</p>
              <p className="mt-1 text-xs text-muted">Privacy film for changing rooms and studio glass</p>
            </Link>
            <Link href="/window-film/one-way-mirror-film/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">One-Way Mirror Film</p>
              <p className="mt-1 text-xs text-muted">Reflective privacy film for studio observation panels</p>
            </Link>
            <Link href="/window-film/glass-manifestation/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Glass Manifestation</p>
              <p className="mt-1 text-xs text-muted">DDA-compliant manifestation for gym partitions and doors</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-20">
        <div className="container mx-auto max-w-3xl">
          <div className="card-float border-2 border-accent/40 p-10 text-center md:p-12">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              Leeds gym window film — get a quote
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Tell us your Leeds gym location, the glazing areas and what
              you need the film to do — privacy, solar control, manifestation
              or branding. We&apos;ll confirm a specification and price. Subcontract
              and white-label enquiries welcome.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link href="/contact/" className="btn-primary">
                Request a Leeds Gym Quote →
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
