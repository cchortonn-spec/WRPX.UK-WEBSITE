import type { Metadata } from "next";
import Link from "next/link";
import { getServiceSchema } from "@/lib/schema";
import { FaqAccordion } from "@/components/FaqAccordion";

export const metadata: Metadata = {
  title: "Gym Window Film Bristol | Frosted, Solar Control & Manifestation for Gyms | WRPX",
  description:
    "Window film installation for gyms and leisure centres across Bristol and Avon — frosted privacy film for changing rooms, one-way mirror film for studio glass, solar-control for glazed gym floors, DDA glass manifestation and branded decorative vinyl. PureGym, The Gym Group, David Lloyd, Gravity Active and all Bristol BS postcode gyms and leisure centres. Approximately 2 hours from our South Yorkshire base via the M5.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/window-film/gym-window-film-bristol/",
  },
};

const serviceSchema = getServiceSchema(
  "Gym window film Bristol — frosted, solar control, manifestation and privacy film for Bristol gyms and leisure centres",
  "Window film installation for gyms, fitness studios and leisure centres across Bristol and Avon. Frosted privacy film for changing rooms and shower areas, one-way mirror film for studio observation panels, solar-control film for glazed cardio floors and fitness studio windows, DDA-compliant glass manifestation for glass partitions and internal doors, branded decorative vinyl for studio glazing. PureGym, The Gym Group, Nuffield Health, David Lloyd Bristol, Gravity Active BS1 and all Bristol BS postcode gym and leisure facilities. Approximately 2 hours from our South Yorkshire base via the M1 and M5."
);

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.wrpx.co.uk/" },
    { "@type": "ListItem", position: 2, name: "Window Film", item: "https://www.wrpx.co.uk/window-film/" },
    { "@type": "ListItem", position: 3, name: "Window Film for Gyms", item: "https://www.wrpx.co.uk/window-film/gym-window-film/" },
    { "@type": "ListItem", position: 4, name: "Bristol", item: "https://www.wrpx.co.uk/window-film/gym-window-film-bristol/" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What window film services do you offer for Bristol gyms and fitness studios?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Frosted privacy film for changing rooms, shower cubicle glazing and toilet partitions is the most common Bristol gym application — full-height frosted for complete privacy, or banded frosted with clear glass above to retain natural light. One-way mirror film on studio observation panels and group exercise room glass walls lets instructors and managers see into studios without disturbing class participants — a consistent application across Bristol&apos;s growing boutique fitness and yoga studio market. Solar-control film on south and west-facing glazed cardio floors and fitness studio windows reduces solar heat gain and glare — particularly relevant for newer Bristol BS2 and Harbourside gym units with large glazed frontages. DDA-compliant glass manifestation is required on full-height glazed panels and internal glass doors throughout the facility. Branded decorative film incorporating the gym&apos;s logo or identity on studio glass and reception glazing is common across Bristol&apos;s independent and chain operators.",
      },
    },
    {
      "@type": "Question",
      name: "Which Bristol gyms and leisure centres do you cover?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We cover gyms, fitness studios, leisure centres and health clubs across all Bristol and Avon BS postcodes. PureGym and The Gym Group operate across multiple Bristol city centre BS1/BS2 and suburban locations. David Lloyd Bristol at Aztec West BS32 is one of the largest health club and racquet sports facilities in the South West, generating window film demand for changing room privacy film, solar-control on glazed court areas and studio one-way mirror film. Gravity Active Bristol in the Cabot Circus vicinity provides an adventure-led leisure concept with glazed studio and observation areas requiring frosted and one-way mirror film. The UWE Bristol Frenchay Campus BS16 sports centre and University of Bristol Clifton-zone sports facilities create university leisure market demand. Independent boutique fitness studios, yoga studios and personal training spaces across Clifton BS8, Redcliffe BS1 and the Harbourside corridor generate consistent smaller installation demand.",
      },
    },
    {
      "@type": "Question",
      name: "How quickly can you install window film at a Bristol gym?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "WRPX is based in South Yorkshire, approximately 2 hours from Bristol via the M1 and M5. Survey visits for Bristol gyms can typically be arranged within 3 to 4 days of enquiry. A typical Bristol gym changing room installation — covering window glazing across the changing area and individual shower cubicle panels — takes 3 to 6 hours depending on the glazing area and layout. Smaller Bristol boutique fitness studios or personal training spaces can often be completed in a single morning. We co-ordinate scheduling with your operations team to minimise disruption to opening hours, including early-morning and weekend slots where required.",
      },
    },
    {
      "@type": "Question",
      name: "Is frosted window film suitable for Bristol gym changing rooms?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Commercial-grade frosted architectural film applied to Bristol gym changing room windows and shower cubicle glazing provides complete privacy, is cleanable with standard gym cleaning products including disinfectant sprays, and is specified with a humidity-resistant adhesive for wet environments. The installation is visually indistinguishable from sandblasted glass. We seal all edges to prevent moisture ingress at the edge band — the critical factor in longevity in changing room and shower environments. Commercial-grade film in a well-maintained Bristol gym changing room typically delivers 8 to 12 years of service life.",
      },
    },
    {
      "@type": "Question",
      name: "Do you work with Bristol gym fit-out contractors and facilities managers?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — we work as a subcontract window film installation partner for Bristol gym fit-out contractors, leisure facilities management companies, FM contractors and sign companies managing gym refit programmes across Bristol and Avon. White-label by default: we attend under your instructions, follow your site access protocols and provide photographic sign-off on completion. We are approximately 2 hours from Bristol via the M1 and M5 — a straightforward motorway route — and can cover Bristol alongside South West England sites in a co-ordinated multi-site programme. RAMS documentation available as standard.",
      },
    },
    {
      "@type": "Question",
      name: "Which Bristol and Avon postcodes do you cover for gym window film?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We cover all Bristol and Avon BS postcodes — BS1 (Bristol city centre and Harbourside: the commercial gym market including boutique fitness studios along the Harbourside corridor, Baldwin Street and the Old City zone; Cabot Circus BS1 provides a leisure and retail zone with gym and health club provision), BS2 (St Jude&apos;s, Kingsdown, Montpelier — inner Bristol gym and fitness studio zone with an active independent fitness market), BS3 (Bedminster, Southville, Ashton — south Bristol residential and leisure zone; Ashton Gate BS3 stadium area generates sports facility and gym window film demand), BS5 (Easton, Greenbank, St George — east Bristol residential zone with community gym provision), BS6 (Redland, Cotham, Bishopston — a prosperous north Bristol residential zone with yoga studios, Pilates studios and private personal training spaces generating consistent smaller installation demand), BS7 (Horfield, Ashley Down — north Bristol zone; Horfield Leisure Centre is a major public leisure facility), BS8 (Clifton, Hotwells — Bristol&apos;s premium residential and commercial zone; Clifton has a concentration of private health clubs, yoga studios and boutique fitness spaces; Nuffield Health Bristol at Clifton is the primary private health club in BS8), BS9 (Westbury-on-Trym, Stoke Bishop — north-west Bristol residential zone with private gym and health club provision), BS16 (Emersons Green, Frenchay, Stapleton — UWE Bristol Frenchay Campus BS16 has a substantial sports centre and gym facilities), BS32 (Aztec West, Bradley Stoke — north Bristol business and leisure park; David Lloyd Bristol at Aztec West BS32 is one of the region&apos;s largest health, tennis and fitness clubs, generating window film demand for changing room privacy, solar-control on glazed court sections and studio film). Bath BA1-BA2, Weston-super-Mare BS22-BS24 and wider Avon also covered. WRPX is based in South Yorkshire, approximately 2 hours from Bristol via the M1 and M5.",
      },
    },
  ],
};

const faqItems = faqSchema.mainEntity.map((item) => ({
  q: item.name,
  a: item.acceptedAnswer.text,
}));

export default function GymWindowFilmBristolPage() {
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
            <span className="text-foreground">Bristol</span>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="border-b border-border bg-card py-16 md:py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <p className="text-sm font-medium uppercase tracking-wide text-accent">
            Gym &amp; Leisure Window Film · Bristol &amp; Avon
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Gym window film — Bristol
          </h1>
          <p className="mt-5 text-lg text-muted leading-relaxed">
            Window film installation for gyms, fitness studios and leisure
            centres across Bristol and Avon. Frosted privacy film for changing
            rooms, one-way mirror film for studio glass, solar control for
            glazed gym floors, DDA-compliant glass manifestation and branded
            decorative vinyl. PureGym, The Gym Group, David Lloyd Aztec West,
            Gravity Active and all Bristol BS postcode gym and leisure
            facilities. Approximately 2 hours from our South Yorkshire base
            via the M1 and M5.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact/" className="btn-primary">
              Request a Bristol Gym Quote →
            </Link>
            <Link href="/window-film/gym-window-film/" className="btn-secondary">
              Gym Window Film Overview
            </Link>
          </div>
        </div>
      </section>

      {/* Bristol gym market */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Bristol gym and leisure window film — the market
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              Bristol is one of the UK&apos;s largest and most dynamic cities —
              a regional centre of approximately 470,000 people with a gym and
              leisure market that spans major public leisure infrastructure,
              national chain gym operators, a large private health club sector
              and one of the most active boutique fitness and wellness scenes
              outside London.
            </p>
            <p>
              David Lloyd Bristol at Aztec West BS32 is one of the largest
              private health, tennis and fitness clubs in the South West —
              a substantial multi-zone site generating window film demand for
              changing room privacy, solar-control on glazed court and gym
              sections, and studio one-way mirror film. PureGym and The Gym
              Group operate multiple Bristol city centre and suburban sites,
              with ongoing maintenance and refurbishment programmes creating
              consistent changing room frosted film and DDA manifestation
              demand across the Bristol BS postcode zone.
            </p>
            <p>
              Bristol&apos;s independent fitness market is particularly active —
              with a high concentration of yoga studios, Pilates studios,
              CrossFit boxes and boutique fitness concepts in the Clifton BS8,
              Redland BS6 and Harbourside BS1 zones. These smaller operators
              generate consistent studio glazing film demand for frosted film,
              one-way mirror film and branded decorative vinyl. The UWE Bristol
              Frenchay Campus BS16 sports centre and University of Bristol
              sports facilities add a university market segment.
            </p>
            <p>
              WRPX is based in South Yorkshire, approximately 2 hours from
              Bristol via the M1 and M5 — a straightforward motorway route. We
              can survey Bristol gym sites and cover Bristol alongside Bath,
              Weston-super-Mare and wider South West England sites in a
              co-ordinated programme.
            </p>
          </div>
        </div>
      </section>

      {/* Film types grid */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-2xl font-semibold text-foreground md:text-3xl">
            Gym window film applications in Bristol
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Frosted privacy film — changing rooms
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Full-height or banded frosted film for changing room windows,
                shower cubicle glazing and toilet partition glass across Bristol
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
                exercise room glass walls — mirrored on the bright studio side,
                view-through from the darker corridor. Used in yoga studios, spin
                rooms and boutique fitness class areas across Bristol&apos;s Clifton,
                Redland and Harbourside zones.
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
                applicable across David Lloyd Aztec West BS32 and city-centre
                gym units with large glazed frontages facing the Harbourside and
                New Street commercial corridor.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                DDA glass manifestation
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Building Regulations-compliant manifestation strips at 850mm and
                1400mm height for full-height glazed panels and internal glass
                doors throughout Bristol gym and leisure facilities — frosted
                bands, etched-effect, dot pattern or branded options.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Branded decorative film
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Cut logo, motivational text, pattern or frosted film incorporating
                Bristol gym branding on studio glass, reception glazing and
                partition panels — combining identity and privacy in a single
                installation across Bristol&apos;s independent and chain operators.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Poolside and wet-area film
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Specialist film specification for Bristol leisure centre poolside
                glazing, spa areas and wet-side changing environments —
                humidity-appropriate adhesive, edge sealing and film grade
                selected for chlorine-adjacent installations at Bristol&apos;s
                major pool and spa facilities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bristol gym zones */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Bristol gym and leisure zones we cover
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              <strong className="text-foreground">Aztec West BS32</strong> —
              Bristol&apos;s north business and leisure park zone, home to David
              Lloyd Bristol — one of the South West&apos;s largest private health,
              tennis and fitness club facilities. Solar-control on glazed tennis
              courts and gym sections, changing room privacy film and studio
              one-way mirror film are the primary applications.
            </p>
            <p>
              <strong className="text-foreground">Cabot Circus and Harbourside BS1</strong> —
              Bristol&apos;s prime city-centre leisure and retail zone, with
              boutique fitness studios, national chain gyms and Gravity Active
              adventure leisure. Frosted film for changing rooms, DDA
              manifestation throughout and branded studio glazing are consistent
              demands from operators across this zone.
            </p>
            <p>
              <strong className="text-foreground">Clifton BS8</strong> —
              Bristol&apos;s premium residential and commercial district, with
              Nuffield Health Bristol and a high concentration of independent
              yoga studios, Pilates spaces and private personal training studios.
              One-way mirror film for studio observation glass and frosted film
              for treatment room glazing are the principal applications.
            </p>
            <p>
              <strong className="text-foreground">Horfield and north Bristol BS7</strong> —
              Horfield Leisure Centre on Dorian Road is a major Bristol City
              Council public leisure facility, with a 25-metre pool, gym, sports
              halls and group exercise studios. A multi-zone public leisure
              facility generating changing room frosted film, DDA manifestation
              and solar-control demand.
            </p>
            <p>
              <strong className="text-foreground">UWE Bristol Frenchay BS16</strong> —
              UWE Bristol&apos;s main campus has a substantial sports centre and
              fitness facility at Frenchay BS16, with studio glass, changing
              rooms and sports hall glazing generating consistent window film
              demand during refurbishment cycles.
            </p>
          </div>
        </div>
      </section>

      {/* B2B / subcontract section */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Subcontract and white-label gym window film — Bristol
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              For Bristol gym fit-out contractors, FM companies, sign companies
              and property management businesses managing window film programmes
              across South West leisure sites, WRPX operates as a white-label
              installation partner. We attend under your instructions, follow
              your site access protocols and provide photographic sign-off on
              completion of each area.
            </p>
            <p>
              RAMS documentation is provided as standard for all Bristol gym
              programmes. For national gym chain operators managing Bristol sites
              within a wider UK window film programme, our South Yorkshire base
              means we can cover Bristol alongside Cardiff, Bath and other South
              West and South Wales sites in a co-ordinated South West
              mobilisation — the most practical arrangement for multi-site
              South West programmes.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-3xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Bristol gym window film — common questions
          </h2>
          <FaqAccordion items={faqItems} />
        </div>
      </section>

      {/* Related links */}
      <section className="bg-card px-4 py-12">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-6 text-lg font-semibold text-foreground">Related Bristol and regional window film services</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <Link href="/window-film/gym-window-film/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Gym Window Film — Overview</p>
              <p className="mt-1 text-xs text-muted">Full gym and leisure window film service</p>
            </Link>
            <Link href="/window-film/gym-window-film-leeds/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Gym Window Film Leeds</p>
              <p className="mt-1 text-xs text-muted">Gym and leisure film across Leeds and West Yorkshire</p>
            </Link>
            <Link href="/window-film/gym-window-film-manchester/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Gym Window Film Manchester</p>
              <p className="mt-1 text-xs text-muted">Gym and leisure film across Manchester and Greater Manchester</p>
            </Link>
            <Link href="/window-film/retail-window-film-bristol/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Retail Window Film Bristol</p>
              <p className="mt-1 text-xs text-muted">Retail window film across Bristol and Avon</p>
            </Link>
            <Link href="/subcontract-window-film-installation-bristol/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Subcontract Window Film Bristol</p>
              <p className="mt-1 text-xs text-muted">White-label window film installation for trade partners in Bristol</p>
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
              Bristol gym window film — get a quote
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Tell us your Bristol gym location, the glazing areas and what you
              need the film to do — privacy, solar control, manifestation or
              branding. We&apos;ll confirm a specification and price. Subcontract
              and white-label enquiries welcome. Approximately 2 hours from
              South Yorkshire via the M1 and M5.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link href="/contact/" className="btn-primary">
                Request a Bristol Gym Quote →
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
