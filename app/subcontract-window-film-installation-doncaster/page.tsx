import type { Metadata } from "next";
import Link from "next/link";
import { getServiceSchema } from "@/lib/schema";
import { FaqAccordion } from "@/components/FaqAccordion";

export const metadata: Metadata = {
  title: "Subcontract Window Film Installation Doncaster | White-Label Film Installer South Yorkshire | WRPX",
  description:
    "Subcontract window film installation for sign companies, print companies, shopfitters and fit-out contractors across Doncaster and South Yorkshire. WRPX installs frosted film, privacy film, solar-control film, glass manifestation and decorative window film on a white-label basis. Under 30 minutes from our South Yorkshire base — fast response to all Doncaster DN postcodes.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/subcontract-window-film-installation-doncaster/",
  },
};

const serviceSchema = getServiceSchema(
  "Subcontract window film installation Doncaster — white-label frosted film, manifestation and solar-control film for sign and print companies",
  "Subcontract window film installation for sign companies, print companies, shopfitters, fit-out contractors and glazing contractors across Doncaster and South Yorkshire. Frosted film, privacy film, solar-control film, glass manifestation, etched-effect film and decorative window film installed on a white-label basis. Frenchgate Centre DN1, Lakeside Village DN4, Doncaster Racecourse DN2 and all Doncaster DN postcode commercial sites. Under 30 minutes from our South Yorkshire base — fast survey and installation response. RAMS documentation, photographic sign-off, trade-ready communication."
);

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.wrpx.co.uk/" },
    { "@type": "ListItem", position: 2, name: "Window Film", item: "https://www.wrpx.co.uk/window-film/" },
    { "@type": "ListItem", position: 3, name: "Subcontract Window Film Installation", item: "https://www.wrpx.co.uk/subcontract-window-film-installation/" },
    { "@type": "ListItem", position: 4, name: "Doncaster", item: "https://www.wrpx.co.uk/subcontract-window-film-installation-doncaster/" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What window film types can you install on a subcontract basis in Doncaster?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We install frosted privacy film, one-way mirror film, solar-control film, etched-effect film, decorative window film, glass manifestation strips (frosted, dot pattern, etched-effect or branded), and cut vinyl window decals across all Doncaster and South Yorkshire DN postcode commercial sites. If you are a sign company, print house or shopfitter supplying the film or vinyl product, we install it. If you need us to specify and supply the product as well as install, we can do that too. Either way, the end client in Doncaster sees professional installation — what happens behind it is your arrangement.",
      },
    },
    {
      "@type": "Question",
      name: "Do you work white-label for Doncaster sign and print companies?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — we work white-label for sign companies, print companies, shopfitters and fit-out contractors across Doncaster and South Yorkshire as standard. We arrive at the Doncaster job in unmarked or unbranded workwear where required, communicate only with your site contact, and provide all documentation under your company identity if that is your preference. Your end client does not need to know WRPX is involved. Doncaster is on our doorstep — we know the local trade landscape, how the South Yorkshire sign and print industry works, and we will not put your client relationships at risk.",
      },
    },
    {
      "@type": "Question",
      name: "Can you install glass manifestation for a Doncaster shopfitter or fit-out contractor?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — glass manifestation is one of the most common subcontract window film applications we carry out across Doncaster commercial sites. Shopfitters and fit-out contractors delivering Doncaster commercial projects — retail units at Frenchgate Centre DN1, office refurbishments in the town centre, gym and leisure fitouts, educational facilities — frequently need full-height glazed partitions, glass doors or glazed shop fronts manifested under Building Regulations Approved Document M. Two horizontal bands at 850–1000mm and 1400–1600mm above floor level. We install frosted vinyl strips, etched-effect manifestation, dot-pattern bands and branded manifestation to the correct specification. Where a Doncaster fit-out involves both standard manifestation and a branded element, we install both in a single visit.",
      },
    },
    {
      "@type": "Question",
      name: "How fast can you respond to Doncaster window film subcontract jobs?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Doncaster is under 30 minutes from our South Yorkshire base — one of our closest major commercial centres. For Doncaster subcontract window film work, we can typically survey on the same day or next day for urgent enquiries and schedule installation within days. For sign and print companies in Doncaster that need same-week or same-day installation, contact us directly — our proximity makes us the most responsive installation partner available in the town without the travel premium a more distant installer would add. We also cover Rotherham S60, Sheffield S and Barnsley S70 as adjacent South Yorkshire postcodes within a single mobilisation.",
      },
    },
    {
      "@type": "Question",
      name: "What documentation do you provide for subcontract window film installations in Doncaster?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We provide photographic sign-off as standard — before and after images for every Doncaster window or glazed surface we film. RAMS (Risk Assessment and Method Statements) documentation is available for any Doncaster commercial project that requires it. For installations in managed Doncaster retail environments — Frenchgate Centre DN1, Lakeside Village DN4 or Doncaster Racecourse DN2 — where centre management requires method statements in advance, we prepare these as part of the pre-mobilisation process. All documentation is formatted to be professional and trade-ready, suitable to pass directly to your own Doncaster client or FM contact.",
      },
    },
    {
      "@type": "Question",
      name: "Which Doncaster and South Yorkshire postcodes do you cover for subcontract window film?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We cover all Doncaster DN postcodes — DN1 (Doncaster town centre: Frenchgate Shopping Centre, the civic core, Waterdale and the town-centre retail and commercial zone — the primary concentration of shopfitter and fit-out subcontract window film demand in Doncaster), DN2 (Hyde Park, Wheatley Hills, Cantley — the Doncaster Racecourse DN2 zone and the east town commercial and residential suburban belt; significant office and commercial glazing in the Racecourse and Lakeside approach corridor), DN3 (Armthorpe, Edenthorpe — east Doncaster residential and commercial light industrial zone), DN4 (Bessacarr, Cantley, Warmsworth, Balby — Lakeside Village outlet centre DN4 and the south Doncaster commercial and retail zone along the Great North Road corridor), DN5 (Bentley, Woodlands, Adwick — north Doncaster residential commercial zone), DN6 (Adwick le Street, Woodlands, Carcroft — north Doncaster light industrial and commercial zone), DN7 (Dunscroft, Hatfield, Stainforth — east Doncaster logistics and commercial zone), DN8 (Thorne, Moorends — east South Yorkshire market town commercial zone), DN9 (Finningley, Blaxton — the former Doncaster Sheffield Airport DN9 site, now Robin Hood Doncaster Sheffield Airport closed but the Finningley commercial zone retains commercial activity). Beyond Doncaster: Sheffield S, Rotherham S60/S61/S62/S63/S64/S65/S66, Barnsley S70/S71/S72/S73/S74/S75 and Wakefield WF are all within normal operating range.",
      },
    },
  ],
};

const faqItems = faqSchema.mainEntity.map((item) => ({
  q: item.name,
  a: item.acceptedAnswer.text,
}));

export default function SubcontractWindowFilmDoncasterPage() {
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
            <Link href="/subcontract-window-film-installation/" className="text-accent hover:underline">Subcontract Window Film Installation</Link>
            <span className="mx-2">›</span>
            <span className="text-foreground">Doncaster</span>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="border-b border-border bg-card py-16 md:py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <p className="text-sm font-medium uppercase tracking-wide text-accent">
            Subcontract Window Film · Doncaster &amp; South Yorkshire
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Subcontract window film installation — Doncaster
          </h1>
          <p className="mt-5 text-lg text-muted leading-relaxed">
            White-label window film installation for sign companies, print companies,
            shopfitters and fit-out contractors across Doncaster and South Yorkshire.
            Frosted film, privacy film, solar-control film, glass manifestation and
            decorative window film installed under your instructions. Frenchgate
            Centre, Lakeside Village and all Doncaster DN postcode commercial sites.
            Under 30 minutes from our South Yorkshire base — fast survey and
            installation response.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact/" className="btn-primary">
              Make a Trade Enquiry →
            </Link>
            <Link href="/subcontract-window-film-installation/" className="btn-secondary">
              Subcontract WF Overview
            </Link>
          </div>
        </div>
      </section>

      {/* Who we work for */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Who we work for in Doncaster
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              Doncaster sits at the heart of South Yorkshire&apos;s commercial and
              logistics geography — a significant retail, office and logistics centre
              at the junction of the M18, M180 and A1(M), with a strong local sign
              and print industry base and a growing pipeline of commercial fit-out
              and refurbishment work across the DN postcode area.
            </p>
            <p>
              We install window film on a subcontract and white-label basis for
              sign companies and print companies who sell or supply frosted film,
              solar-control film, decorative vinyl or manifestation products to
              Doncaster clients but do not carry their own installation team.
              For shopfitters and commercial fit-out contractors delivering retail,
              office and leisure projects across Doncaster, we supply the installation
              element — attending site under your instructions, completing to
              specification and handing back clean documentation.
            </p>
            <p>
              For national retailers, FM companies and print houses running window
              film programmes across multiple South Yorkshire locations — Doncaster,
              Sheffield, Rotherham, Barnsley — we cover the full South Yorkshire
              DN, S and WF postcode geography in a single mobilisation, reducing
              travel overhead and keeping schedules tight.
            </p>
          </div>
        </div>
      </section>

      {/* Film types grid */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-2xl font-semibold text-foreground md:text-3xl">
            Window film types we install in Doncaster
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Frosted and privacy film
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Frosted film for retail fitting rooms, office partitions, meeting
                room glass, gym changing rooms and any glazing requiring privacy
                without removing natural light. Full-height or banded application
                across all Doncaster commercial environments.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Glass manifestation
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Building Regulations-compliant manifestation at 850mm and 1400mm
                height on full-height glazed panels and internal glass doors.
                Frosted bands, etched-effect, dot pattern or branded options —
                the most common subcontract window film job on Doncaster
                commercial fit-out projects.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Solar-control film
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Reduces solar heat gain by 40 to 79% on south and west-facing
                commercial glazing across Doncaster offices, retail units and
                logistics buildings. Cuts UV fading of interiors and furnishings.
                Suitable for large-format commercial buildings across the DN
                postcode area.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Etched-effect and decorative film
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Etched-look film, patterned frosted film and branded decorative
                vinyl for Doncaster office glazing, reception screens and
                commercial shopfronts — supplied and installed or installation-only
                from your supplied product.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                One-way mirror film
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Reflective privacy film for Doncaster office conference rooms,
                gym studio observation panels and retail security applications —
                mirrored on the bright side, view-through from the darker side.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Promotional and temporary vinyl
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Short-term promotional window vinyl for Doncaster retail campaigns,
                seasonal graphics and store-opening programmes — installed and
                removed cleanly without glazing damage on behalf of your print
                or sign company.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Doncaster commercial environments */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Doncaster commercial environments we cover
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              <strong className="text-foreground">Frenchgate Shopping Centre DN1</strong> —
              Doncaster&apos;s principal town-centre shopping destination, with 100+
              retail units across a covered mall in the DN1 core. Standard window
              film applications across Frenchgate include fitting-room frosted
              film, DDA glass manifestation on internal glass doors and partitions,
              and solar-control film on glazed frontages. We follow Frenchgate
              centre management access and contractor protocols.
            </p>
            <p>
              <strong className="text-foreground">Lakeside Village DN4</strong> —
              Doncaster&apos;s edge-of-town outlet centre on Lakeside Boulevard DN4,
              with 50+ outlet stores in an open and covered format. Individual
              unit glazed frontages create consistent frosted film, manifestation
              and solar-control requirements across the outlet footprint.
            </p>
            <p>
              <strong className="text-foreground">Doncaster town centre offices DN1</strong> —
              the civic, professional services and commercial office cluster across
              the DN1 town centre and Waterdale zone. Office fit-out contractors
              and shopfitters delivering Doncaster office projects are the primary
              users of subcontract glass manifestation installation in this zone.
            </p>
            <p>
              <strong className="text-foreground">Great North Road and A638 commercial corridor</strong> —
              the major arterial routes south from Doncaster through Warmsworth,
              Conisbrough and Mexborough carry significant out-of-town retail
              and commercial premises well suited to solar-control film on large
              south-facing glazed elevations.
            </p>
            <p>
              <strong className="text-foreground">Doncaster logistics and industrial zone</strong> —
              Doncaster&apos;s significant logistics and industrial base across DN7,
              DN9 and the former airport site zone generates window film demand
              in commercial office and welfare buildings, gatehouse glazing and
              large commercial units with south-facing clerestory and roof light
              glazing.
            </p>
          </div>
        </div>
      </section>

      {/* How we work */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            How we work with Doncaster trade partners
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              You manage the Doncaster client relationship. We install the film.
              We attend on the agreed date, communicate only with your site contact,
              complete each glazed area to the specification you provide and send
              you before-and-after photographs for every surface. If you need us
              to arrive without WRPX branding visible, we accommodate that.
            </p>
            <p>
              RAMS documentation is prepared as standard for all Doncaster commercial
              projects where the site or centre management requires it in advance.
              For Frenchgate Centre DN1 or Lakeside Village DN4 installations, we
              prepare contractor documentation to meet the centre requirements
              before mobilisation.
            </p>
            <p>
              Doncaster is under 30 minutes from our base — the same-day and
              next-day survey availability we offer for Sheffield applies equally
              here. For South Yorkshire sign and print companies with urgent Doncaster
              installation requirements, we are the closest professional window
              film installer available.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-3xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Doncaster subcontract window film — common questions
          </h2>
          <FaqAccordion items={faqItems} />
        </div>
      </section>

      {/* Related links */}
      <section className="bg-card px-4 py-12">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-6 text-lg font-semibold text-foreground">Related South Yorkshire subcontract services</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <Link href="/subcontract-window-film-installation/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Subcontract Window Film — Overview</p>
              <p className="mt-1 text-xs text-muted">Full subcontract and white-label window film service</p>
            </Link>
            <Link href="/subcontract-window-film-installation-sheffield/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Subcontract Window Film Sheffield</p>
              <p className="mt-1 text-xs text-muted">White-label installation across Sheffield and South Yorkshire</p>
            </Link>
            <Link href="/subcontract-window-film-installation-leeds/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Subcontract Window Film Leeds</p>
              <p className="mt-1 text-xs text-muted">White-label installation across Leeds and West Yorkshire</p>
            </Link>
            <Link href="/commercial-installation-doncaster/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Commercial Installation Doncaster</p>
              <p className="mt-1 text-xs text-muted">Vinyl and graphics installation across Doncaster</p>
            </Link>
            <Link href="/window-film/retail-window-film-sheffield/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Retail Window Film Sheffield</p>
              <p className="mt-1 text-xs text-muted">Retail film across Sheffield and South Yorkshire</p>
            </Link>
            <Link href="/subcontract-vinyl-installer-doncaster/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Subcontract Vinyl Installer Doncaster</p>
              <p className="mt-1 text-xs text-muted">White-label vinyl and graphics installation in Doncaster</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-20">
        <div className="container mx-auto max-w-3xl">
          <div className="card-float border-2 border-accent/40 p-10 text-center md:p-12">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              Doncaster window film subcontract — make an enquiry
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Tell us the Doncaster site, the glazing areas and the film type
              required. We work white-label by default and can mobilise quickly
              across all South Yorkshire DN postcodes. RAMS available on request.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link href="/contact/" className="btn-primary">
                Make a Trade Enquiry →
              </Link>
              <Link href="/subcontract-window-film-installation/" className="btn-secondary">
                Subcontract WF Overview
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
