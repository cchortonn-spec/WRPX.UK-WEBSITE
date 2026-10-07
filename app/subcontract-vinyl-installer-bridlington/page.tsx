import type { Metadata } from "next";
import Link from "next/link";
import { FaqAccordion } from "@/components/FaqAccordion";
import { getServiceSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Subcontract Vinyl Installer Bridlington — Sign & Print Company Installation Partner | WRPX",
  description:
    "Subcontract vinyl installation across Bridlington and the YO15 East Yorkshire coast zone for sign companies, print houses and fit-out contractors. WRPX covers Bridlington town centre, the Old Town, Promenade and Harbour, the A165 coast corridor and the East Yorkshire seaside economy. Naturally combined with Scarborough (22 miles north) or Driffield YO25 (15 miles west) on the same programme.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/subcontract-vinyl-installer-bridlington/",
  },
};

const serviceSchema = getServiceSchema(
  "Subcontract vinyl installer Bridlington — sign company and print house installation partner",
  "Professional subcontract vinyl installation for sign companies, print management firms and fit-out contractors across Bridlington and the YO15 East Yorkshire coast zone. White-label available. WRPX covers Bridlington town centre YO15, the Old Town, the Promenade and Harbour, the A165 Scarborough–Bridlington–Filey coast corridor and the wider East Yorkshire coast commercial and tourism economy."
);

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.wrpx.co.uk/" },
    {
      "@type": "ListItem",
      position: 2,
      name: "Commercial Installation",
      item: "https://www.wrpx.co.uk/commercial-installation/",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Yorkshire Subcontract Hub",
      item: "https://www.wrpx.co.uk/subcontract-vinyl-installation-yorkshire/",
    },
    {
      "@type": "ListItem",
      position: 4,
      name: "Subcontract Installer Bridlington",
      item: "https://www.wrpx.co.uk/subcontract-vinyl-installer-bridlington/",
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How far is WRPX from Bridlington?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Bridlington is approximately 1 hour 50 minutes from our South Yorkshire base. The most efficient route is the A1(M) north to junction 38 (Barnsdale Bar), then the A614 east through Selby, joining the M62 briefly and picking up the A164 north through Beverley HU17, before the A614 and B1255 into Bridlington YO15. Alternatively, the A64 east from York to Scarborough and then the A165 south into Bridlington is an equivalent run in the other direction — allowing Bridlington to sit naturally at the southern end of a full East Yorkshire coast programme that covers Scarborough at the north and Bridlington at the south on the same day.",
      },
    },
    {
      "@type": "Question",
      name: "Do you work white-label in Bridlington?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — white-label is standard on all Bridlington and YO15 zone work. We arrive in unbranded vehicles, carry out every installation under your brand and provide full photographic documentation — before, during and completed sign-off — in your agreed format on the day. No WRPX branding appears on site, on vehicles or on any documentation.",
      },
    },
    {
      "@type": "Question",
      name: "Can you combine Bridlington with Scarborough or Driffield on the same programme?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — Bridlington sits at the southern end of the A165 East Yorkshire coast corridor, 22 miles south of Scarborough. A north-to-south coast run from Scarborough into Bridlington — or the reverse — is a natural single-day programme from South Yorkshire. Driffield YO25, approximately 15 miles west of Bridlington via the A614, extends the same programme inland across the East Riding. For larger programmes, a two-day East Yorkshire run covering Scarborough, Bridlington and the inland East Riding is efficient from our base.",
      },
    },
    {
      "@type": "Question",
      name: "What types of vinyl installation do you cover in Bridlington?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Window graphics, frosted and decorative window film, wall wraps, floor graphics, shop front and fascia vinyls, wayfinding vinyls, hoarding graphics, interior graphics and hospitality venue graphics. Bridlington has a large and diverse seasonal and year-round commercial economy — the Promenade and Harbour-side retail and hospitality zone, the Hilderthorpe Road and Quay Road commercial strips, the Manor Street and King Street independent retail core, and a significant hotel, B&B and self-catering market across the YO15 postcode.",
      },
    },
    {
      "@type": "Question",
      name: "Do you cover the seasonal tourism economy in Bridlington?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — seasonal tourism graphics are a regular part of Bridlington work. The East Yorkshire coast tourism economy generates demand for end-of-season and start-of-season vinyl refreshes across amusement arcades, seafront retail, fish and chip shops, café and restaurant chains and the broader Promenade hospitality strip. National print management companies handling multi-site seasonal rollouts in coastal and holiday park economies are a particular fit — Bridlington is a consistent stop on those programmes.",
      },
    },
  ],
};

const faqItems = [
  {
    q: "How far is WRPX from Bridlington?",
    a: "Bridlington is approximately 1 hour 50 minutes from our South Yorkshire base. The most efficient route is the A1(M) north to junction 38 (Barnsdale Bar), then the A614 east through Selby, joining the M62 briefly and picking up the A164 north through Beverley HU17, before the A614 and B1255 into Bridlington YO15. Alternatively, the A64 east from York to Scarborough and then the A165 south into Bridlington is an equivalent run in the other direction — allowing Bridlington to sit naturally at the southern end of a full East Yorkshire coast programme that covers Scarborough at the north and Bridlington at the south on the same day.",
  },
  {
    q: "Do you work white-label in Bridlington?",
    a: "Yes — white-label is standard on all Bridlington and YO15 zone work. We arrive in unbranded vehicles, carry out every installation under your brand and provide full photographic documentation — before, during and completed sign-off — in your agreed format on the day. No WRPX branding appears on site, on vehicles or on any documentation.",
  },
  {
    q: "Can you combine Bridlington with Scarborough or Driffield on the same programme?",
    a: "Yes — Bridlington sits at the southern end of the A165 East Yorkshire coast corridor, 22 miles south of Scarborough. A north-to-south coast run from Scarborough into Bridlington — or the reverse — is a natural single-day programme from South Yorkshire. Driffield YO25, approximately 15 miles west of Bridlington via the A614, extends the same programme inland across the East Riding. For larger programmes, a two-day East Yorkshire run covering Scarborough, Bridlington and the inland East Riding is efficient from our base.",
  },
  {
    q: "What types of vinyl installation do you cover in Bridlington?",
    a: "Window graphics, frosted and decorative window film, wall wraps, floor graphics, shop front and fascia vinyls, wayfinding vinyls, hoarding graphics, interior graphics and hospitality venue graphics. Bridlington has a large and diverse seasonal and year-round commercial economy — the Promenade and Harbour-side retail and hospitality zone, the Hilderthorpe Road and Quay Road commercial strips, the Manor Street and King Street independent retail core, and a significant hotel, B&B and self-catering market across the YO15 postcode.",
  },
  {
    q: "Do you cover the seasonal tourism economy in Bridlington?",
    a: "Yes — seasonal tourism graphics are a regular part of Bridlington work. The East Yorkshire coast tourism economy generates demand for end-of-season and start-of-season vinyl refreshes across amusement arcades, seafront retail, fish and chip shops, café and restaurant chains and the broader Promenade hospitality strip. National print management companies handling multi-site seasonal rollouts in coastal and holiday park economies are a particular fit — Bridlington is a consistent stop on those programmes.",
  },
];

const nearbyPages = [
  { href: "/subcontract-vinyl-installer-scarborough/", label: "Scarborough YO11", desc: "22 miles north via A165" },
  { href: "/subcontract-vinyl-installer-york/", label: "York YO1", desc: "35 miles west via A64" },
  { href: "/subcontract-vinyl-installer-hull/", label: "Hull HU1", desc: "28 miles south via A165 and A1033" },
  { href: "/subcontract-vinyl-installer-malton/", label: "Malton YO17", desc: "25 miles north-west via A614 and B1248" },
];

export default function SubcontractVinylInstallerBridlington() {
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
              href="/commercial-installation/"
              className="text-accent hover:underline"
            >
              Commercial Installation
            </Link>
            <span className="mx-2">›</span>
            <Link
              href="/subcontract-vinyl-installation-yorkshire/"
              className="text-accent hover:underline"
            >
              Yorkshire Subcontract Hub
            </Link>
            <span className="mx-2">›</span>
            <span className="text-foreground">Bridlington</span>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="border-b border-border bg-card py-16 md:py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <p className="text-sm font-medium uppercase tracking-wide text-accent">
            Subcontract Vinyl Installation · Bridlington YO15
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Subcontract vinyl installer — Bridlington
          </h1>
          <p className="mt-5 text-lg text-muted leading-relaxed">
            WRPX provides subcontract vinyl installation across Bridlington and the East
            Yorkshire coast YO15 zone for sign companies, print houses and fit-out
            contractors. White-label as standard. Bridlington sits at the southern end of
            the A165 East Yorkshire coast corridor — 22 miles south of Scarborough — the
            natural anchor point for a full coast programme from South Yorkshire.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact/" className="btn-primary">
              Discuss Bridlington Subcontract Work →
            </Link>
            <Link
              href="/subcontract-vinyl-installation-yorkshire/"
              className="btn-secondary"
            >
              Yorkshire Subcontract Hub
            </Link>
          </div>
        </div>
      </section>

      {/* Bridlington context */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Bridlington — East Yorkshire&apos;s largest coastal resort
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              Bridlington is the largest coastal resort on the East Yorkshire coast and one
              of the most visited seaside destinations in the north of England. The town
              has a major tourism economy built around its Blue Flag beaches, the working
              harbour, the Promenade and the Old Town — a distinct historic quarter inland
              from the seafront with a strong independent retail, food and hospitality
              market.
            </p>
            <p>
              The Promenade and Harbour-side strip contains a dense concentration of
              amusements, seafront retail, cafés, fish and chip restaurants, ice cream
              shops and seasonal hospitality businesses — the core of Bridlington&apos;s
              seasonal vinyl and graphics demand. These businesses refresh their window
              graphics and seasonal vinyls regularly, and national print management
              companies handling multi-site coastal rollouts include Bridlington as a
              standard stop on the A165 East Yorkshire coast programme.
            </p>
            <p>
              Beyond the seafront, Bridlington has a substantial year-round commercial
              economy. The Hilderthorpe Road, Quay Road and Manor Street retail and
              service core serves the town&apos;s permanent population of approximately
              36,000 and a large retirement and coastal living demographic that drives
              consistent demand for high street retail and professional services
              businesses across the YO15 postcode.
            </p>
            <p>
              For sign companies covering the East Yorkshire coast, Bridlington is the
              natural southern anchor on the A165. A single programme from South Yorkshire
              can run north through York and Scarborough and finish at Bridlington — or
              run south from Scarborough through Filey and into Bridlington. Driffield
              YO25, approximately 15 miles west via the A614, provides an efficient inland
              extension on the same day.
            </p>
          </div>
        </div>
      </section>

      {/* What we install */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-2xl font-semibold text-foreground md:text-3xl">
            What we install in Bridlington
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Seafront and Promenade retail vinyls
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Seasonal window graphics, fascia vinyls, promotional decals and
                cut vinyl lettering for the Promenade retail and hospitality strip —
                amusements, seafront cafés, ice cream parlours, fish restaurants and
                the wider Harbour-side commercial zone.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Hotel and B&amp;B window film
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Frosted privacy film for guest room and bathroom windows, solar control
                film for south and west-facing sea-view rooms, and window graphics for
                ground-floor shopfront and reception glazing across Bridlington&apos;s
                large hotel and B&amp;B stock.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Old Town independent retail
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Window vinyls, frosted film, wall graphics and interior branding
                for the independent retailers, restaurants and service businesses
                of Bridlington Old Town — Manor Street, King Street and the
                surrounding conservation quarter.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Holiday park and self-catering graphics
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Directional and wayfinding vinyls, accommodation branding, reception
                and welcome graphics, seasonal promotional vinyls and exterior
                surface wraps for holiday parks and self-catering complexes in the
                Bridlington and East Yorkshire coast zone.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Leisure, entertainment and food-and-drink vinyls
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Interior wall graphics, branded vinyls and promotional graphics for
                Bridlington&apos;s amusement arcades, bowling facilities, entertainment
                venues and the concentrated food-and-drink economy along the
                Promenade and Quay Road.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Commercial and professional services
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Frosted privacy film, Part M manifestation, cut vinyl lettering,
                wall wraps and shop front graphics for Bridlington&apos;s year-round
                commercial businesses — professional services, healthcare, estate
                agents and the wider Hilderthorpe Road retail and service core.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Nearby pages */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Nearby towns we also cover
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {nearbyPages.map(({ href, label, desc }) => (
              <Link
                key={href}
                href={href}
                className="card-float p-5 hover:border-accent/60 transition-colors"
              >
                <h3 className="font-semibold text-foreground">{label}</h3>
                <p className="mt-1 text-sm text-muted">{desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-3xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Bridlington subcontract installation — common questions
          </h2>
          <FaqAccordion items={faqItems} />
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-20">
        <div className="container mx-auto max-w-3xl">
          <div className="card-float border-2 border-accent/40 p-10 text-center md:p-12">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              Got Bridlington work coming up?
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Send us the job details — location, surface, material size and access
              requirements. We&apos;ll confirm availability and provide a subcontract rate
              the same day. White-label as standard. No WRPX branding on site or on any
              documentation.
            </p>
            <Link href="/contact/" className="btn-primary mt-8 inline-block">
              Discuss Bridlington Subcontract Work →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
