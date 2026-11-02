import type { Metadata } from "next";
import Link from "next/link";
import { getServiceSchema } from "@/lib/schema";
import { FaqAccordion } from "@/components/FaqAccordion";

export const metadata: Metadata = {
  title: "Gym Window Film Lancaster | Frosted, Solar Control & Manifestation for Gyms | WRPX",
  description:
    "Window film installation for gyms and leisure centres across Lancaster and North Lancashire — frosted privacy film for changing rooms, one-way mirror film for studio glass, solar-control for glazed gym floors, Building Regulations-compliant glass manifestation and branded decorative vinyl. Lancaster University sport facilities LA1, Bowerham Sports Centre LA1 and Lancaster city-centre gym operators. All Lancaster LA postcodes covered. Approximately 1 hour 30 minutes from our South Yorkshire base via the M62 and M6.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/window-film/gym-window-film-lancaster/",
  },
};

const serviceSchema = getServiceSchema(
  "Gym window film Lancaster — frosted, solar control, manifestation and privacy film for Lancaster gyms and leisure centres",
  "Window film installation for gyms, fitness studios and leisure centres across Lancaster and North Lancashire. Frosted privacy film for changing rooms and shower areas, one-way mirror film for studio observation panels, solar-control film for glazed cardio floors and fitness studio windows, Building Regulations-compliant glass manifestation for glass partitions and internal doors, branded decorative vinyl for studio glazing. Lancaster University Sport and Recreation facilities Bailrigg LA1, Bowerham Sports Centre LA1, Lancaster city-centre fitness operators and all Lancaster LA postcode gym and leisure facilities. Approximately 1 hour 30 minutes from our South Yorkshire base via the M62 and M6."
);

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.wrpx.co.uk/" },
    { "@type": "ListItem", position: 2, name: "Window Film", item: "https://www.wrpx.co.uk/window-film/" },
    { "@type": "ListItem", position: 3, name: "Window Film for Gyms", item: "https://www.wrpx.co.uk/window-film/gym-window-film/" },
    { "@type": "ListItem", position: 4, name: "Lancaster", item: "https://www.wrpx.co.uk/window-film/gym-window-film-lancaster/" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What window film services do you offer for Lancaster gyms and fitness studios?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Frosted privacy film for changing rooms, shower cubicle glazing and toilet partitions is the most consistent Lancaster gym application — full-height frosted for complete privacy, or banded frosted with clear glass above to retain natural light. One-way mirror film on studio observation panels and group exercise room glass walls lets instructors and managers see into studios without disturbing participants. Solar-control film on south and west-facing glazed cardio floors and fitness studio windows reduces solar heat gain and glare — relevant for Lancaster University Sport and Recreation facilities LA1 and any glazed fitness spaces facing direct afternoon sun. Building Regulations-compliant glass manifestation is required on full-height glazed panels and internal glass doors throughout the facility. Branded decorative film incorporating the gym&apos;s logo or identity on studio glass and reception glazing is common across Lancaster&apos;s independent and operator-managed gym market.",
      },
    },
    {
      "@type": "Question",
      name: "Which Lancaster gyms and leisure centres do you cover?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We cover gyms, fitness studios, leisure centres and health clubs across all Lancaster LA postcodes and the wider North Lancashire area. Lancaster University Sport and Recreation on the Bailrigg campus LA1 — the university&apos;s dedicated sport and fitness hub, serving Lancaster University&apos;s approximately 15,000 students and staff — generates consistent changing room privacy film, studio glass and manifestation demand from its large enclosed sport facility footprint. Bowerham Sports Centre LA1 and Lancaster Leisure Park in the LA1 residential zone generate public-facing fitness and leisure glazing film demand. PureGym and The Gym Group operate Lancaster city-centre LA1 sites with ongoing refurbishment programmes creating regular changing room and manifestation demand. Independent fitness studios, CrossFit boxes and boutique gym operators in the city-centre LA1 zone generate studio glass film, changing room frosted film and Building Regulations-compliant manifestation demand.",
      },
    },
    {
      "@type": "Question",
      name: "How quickly can you install window film at a Lancaster gym?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "WRPX is based in South Yorkshire, approximately 1 hour 30 minutes from Lancaster via the M62 west and M6 north — a direct motorway route. Survey visits for Lancaster gyms can typically be arranged within 5 to 10 days of enquiry. A typical Lancaster gym changing room installation — covering window glazing across the changing area and individual shower cubicle panels — takes 3 to 6 hours depending on the glazing area and layout. Smaller Lancaster boutique fitness studios in the city-centre LA1 zone can often be completed in a single morning. We co-ordinate scheduling with your operations team to minimise disruption to opening hours, including early-morning and weekend slots where required. Lancaster can also be combined with Preston LA1 corridor, Wigan WN or other North West gym film programmes in a single regional mobilisation.",
      },
    },
    {
      "@type": "Question",
      name: "Is frosted window film suitable for Lancaster gym changing rooms?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Commercial-grade frosted architectural film applied to Lancaster gym changing room windows and shower cubicle glazing provides complete privacy, is cleanable with standard gym cleaning products including disinfectant sprays, and is specified with a humidity-resistant adhesive for wet environments. The installation is visually indistinguishable from sandblasted glass. We seal all edges to prevent moisture ingress at the edge band — the critical factor in longevity in changing room and shower environments. Commercial-grade film in a well-maintained Lancaster gym changing room typically delivers 8 to 12 years of service life.",
      },
    },
    {
      "@type": "Question",
      name: "Do you work with Lancaster gym fit-out contractors and facilities managers?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — we work as a subcontract window film installation partner for Lancaster and North Lancashire gym fit-out contractors, leisure facilities management companies, FM contractors and sign companies managing gym refit programmes across the North West. White-label by default: we attend under your instructions, follow your site access protocols and provide photographic sign-off on completion of each area. We are approximately 1 hour 30 minutes from Lancaster via the M62 and M6 — one of the most accessible North West locations from our South Yorkshire base. RAMS documentation available as standard for all Lancaster commercial leisure projects.",
      },
    },
    {
      "@type": "Question",
      name: "Which Lancaster and North Lancashire postcodes do you cover for gym window film?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We cover all Lancaster and surrounding LA postcode areas — LA1 (Lancaster city and Bailrigg: Lancaster University Sport and Recreation Bailrigg campus LA1 generating student-facing fitness glazing film demand; Bowerham LA1 residential zone with local gym and leisure provision; city-centre Lancaster LA1 with commercial gym operators and independent fitness studios; Lancaster Leisure Park LA1 public sport and leisure facility generating changing room and studio glazing film demand; city-centre independent and franchise gym operators in the LA1 commercial core), LA2 (Galgate, Caton, rural north: rural LA2 fringe gym and sports club provision within the operational area; Galgate LA2 community sport facilities adjacent to the Lancaster University Bailrigg campus access corridor), LA3 (Heysham: Heysham LA3 community gym and leisure provision on the western coastal fringe of the Lancaster operational area), LA4 (Morecambe: Morecambe Leisure Centre LA4 — the seafront public leisure facility serving the Morecambe and Heysham coastal community, generating changing room privacy film and Building Regulations-compliant manifestation demand; Morecambe LA4 gym and fitness studio operators generating studio film and changing room installation demand). WRPX is based in South Yorkshire, approximately 1 hour 30 minutes from Lancaster via the M62 and M6.",
      },
    },
  ],
};

const faqItems = faqSchema.mainEntity.map((item) => ({
  q: item.name,
  a: item.acceptedAnswer.text,
}));

export default function GymWindowFilmLancasterPage() {
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
            <span className="text-foreground">Lancaster</span>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="border-b border-border bg-card py-16 md:py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <p className="text-sm font-medium uppercase tracking-wide text-accent">
            Gym Window Film · Lancaster &amp; North Lancashire
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Gym window film — Lancaster
          </h1>
          <p className="mt-5 text-lg text-muted leading-relaxed">
            Window film installation for gyms and leisure centres across
            Lancaster and North Lancashire. Frosted privacy film for changing
            rooms, one-way mirror film for studio glass, solar-control for glazed
            cardio floors, Building Regulations-compliant manifestation and
            branded decorative vinyl. Lancaster University sport facilities LA1,
            Bowerham Sports Centre LA1 and all Lancaster LA postcode gym and
            leisure facilities covered. Approximately 1 hour 30 minutes from our
            South Yorkshire base via the M62 and M6.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact/" className="btn-primary">
              Get a Lancaster Gym Film Quote →
            </Link>
            <Link href="/window-film/gym-window-film/" className="btn-secondary">
              Gym Window Film Overview
            </Link>
          </div>
        </div>
      </section>

      {/* Why it matters */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Window film for Lancaster gyms — what we install
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              Lancaster is a university city with a well-established gym and
              leisure market driven by Lancaster University&apos;s approximately
              15,000 students at Bailrigg LA1 and a growing independent fitness
              sector across the city-centre LA1 zone. Lancaster University Sport
              and Recreation on the Bailrigg campus generates consistent changing
              room privacy film, studio glass and manifestation demand from its
              large enclosed sport facility footprint.
            </p>
            <p>
              Changing room privacy film is the most common application across
              Lancaster&apos;s gym and leisure estate — full-height frosted film
              for complete changing room window privacy, or banded frosted with
              clear glass above to retain natural light. Studio glass one-way
              mirror film and Building Regulations-compliant manifestation on
              full-height glazed partitions are routine on Lancaster gym
              refurbishments and new fit-outs.
            </p>
            <p>
              WRPX is based in South Yorkshire, approximately 1 hour 30 minutes
              from Lancaster via the M62 west and M6 north — a direct motorway
              route into the North West. We cover all Lancaster LA postcodes and
              can combine Lancaster gym film installations with Preston, Wigan or
              other North West locations in a single regional programme.
            </p>
          </div>
        </div>
      </section>

      {/* Services grid */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-2xl font-semibold text-foreground md:text-3xl">
            Window film services for Lancaster gyms
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Changing room privacy film
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Full-height frosted film or banded privacy film across Lancaster
                gym changing room windows — providing complete privacy without
                blocking natural light. Humidity-resistant adhesive specified
                for wet environment durability.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Studio glass one-way mirror film
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                One-way mirror film on studio observation panels and group
                exercise room glass walls across Lancaster fitness studios and
                gyms — enabling managers and instructors to monitor studios
                without disrupting participants.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Building Regulations manifestation
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Building Regulations-compliant glass manifestation strips on
                full-height glazed partitions and internal glass doors across
                Lancaster gym and leisure facilities — frosted bands, dot-pattern
                or branded manifestation installed to the correct specification.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Solar-control film
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Solar-control film on glazed cardio floors and south or
                west-facing fitness studio windows across Lancaster gyms —
                reducing solar heat gain and glare without significantly reducing
                visible light transmission.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Branded and decorative vinyl
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Branded decorative film incorporating the gym&apos;s logo or
                identity graphics on studio glass, reception glazing and window
                frontages across Lancaster gyms — adding visual identity without
                permanent glass treatment.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Pool and wet-area glazing
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Frosted privacy film and specialist film grades for poolside
                glazing, spa and steam room windows in Lancaster leisure centres
                with pool facilities — humidity-resistant adhesive specified for
                permanently wet environments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-3xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Lancaster gym window film — common questions
          </h2>
          <FaqAccordion items={faqItems} />
        </div>
      </section>

      {/* Related links */}
      <section className="bg-card px-4 py-12">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-6 text-lg font-semibold text-foreground">Related services and locations</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <Link href="/window-film/gym-window-film/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Gym Window Film — Overview</p>
              <p className="mt-1 text-xs text-muted">Full gym and leisure window film service</p>
            </Link>
            <Link href="/window-film/gym-window-film-manchester/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Gym Window Film Manchester</p>
              <p className="mt-1 text-xs text-muted">Window film for Manchester gyms and leisure centres</p>
            </Link>
            <Link href="/window-film/gym-window-film-liverpool/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Gym Window Film Liverpool</p>
              <p className="mt-1 text-xs text-muted">Window film for Liverpool gyms and leisure centres</p>
            </Link>
            <Link href="/architectural-wrap-student-accommodation-lancaster/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Student Accommodation Wrap Lancaster</p>
              <p className="mt-1 text-xs text-muted">Vinyl wrapping for Lancaster student accommodation</p>
            </Link>
            <Link href="/architectural-wrap-care-homes-lancaster/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Care Home Wrapping Lancaster</p>
              <p className="mt-1 text-xs text-muted">Vinyl wrapping for Lancaster care homes</p>
            </Link>
            <Link href="/contact/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Request a Quote</p>
              <p className="mt-1 text-xs text-muted">Get in touch for a Lancaster gym window film enquiry</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-20">
        <div className="container mx-auto max-w-3xl">
          <div className="card-float border-2 border-accent/40 p-10 text-center md:p-12">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              Lancaster gym window film — get a quote
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Tell us your Lancaster gym, the glazing areas and what you need.
              We cover changing room frosted film, studio glass, manifestation
              and solar-control across all Lancaster LA postcodes. Approximately
              1 hour 30 minutes from South Yorkshire via the M62 and M6.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link href="/contact/" className="btn-primary">
                Get a Lancaster Gym Film Quote →
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
