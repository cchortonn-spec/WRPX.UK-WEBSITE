import type { Metadata } from "next";
import Link from "next/link";
import { FaqAccordion } from "@/components/FaqAccordion";
import { getServiceSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Christmas University Graphics Installation — Seasonal Vinyl for Campuses & Student Unions | WRPX",
  description:
    "Christmas window graphics, festive wall vinyl and seasonal installations for universities, student unions, campus cafes and student accommodation across Yorkshire and the East Midlands. White-label installation for university Christmas decoration suppliers and FM contractors. Book August for November slots.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/christmas-university-graphics/",
  },
};

const serviceSchema = getServiceSchema(
  "Christmas university graphics installation — seasonal vinyl for campuses and student unions",
  "Christmas window graphics, festive wall vinyl, seasonal window film and multi-building campus Christmas graphics installations for universities, student unions, student accommodation blocks and campus hospitality venues across Yorkshire and the East Midlands. Subcontract installation for university Christmas decoration suppliers, campus FM contractors and print management firms. White-label available."
);

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.wrpx.co.uk/" },
    { "@type": "ListItem", position: 2, name: "Christmas Window Graphics", item: "https://www.wrpx.co.uk/christmas-window-graphics/" },
    { "@type": "ListItem", position: 3, name: "Christmas University Graphics", item: "https://www.wrpx.co.uk/christmas-university-graphics/" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "When should a university book Christmas graphics installation?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "August and September is the right time to confirm installation for November. Most university Christmas graphics programmes need to be in place before students return from Reading Week and before the start of end-of-term social events in late November. Campus FM teams and students&apos; union events officers who confirm installation in August have full access to November dates. Those who leave it to October typically find installer availability is restricted.",
      },
    },
    {
      "@type": "Question",
      name: "What access restrictions apply to university campus installations?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "University access varies by institution and by building type. Students&apos; union buildings typically operate as commercial premises — confirm trading hours and any licensing restrictions on access during events. Student accommodation communal areas require coordination with the accommodation management office and advance booking. Academic and administrative buildings follow standard out-of-hours access protocols — early morning or weekend slots before semester activity begins. Confirm the relevant estates contact for each building in the brief.",
      },
    },
    {
      "@type": "Question",
      name: "Can you handle a multi-building campus Christmas programme?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — multi-site consistency is core to our commercial work. For university estates teams or FM contractors running a campus-wide Christmas graphics programme across multiple buildings and venues, we work to a single brief, document each location photographically and report back to the estates or FM project manager with per-building completion status. We plan the day sequencing to match the campus geography and access logistics.",
      },
    },
    {
      "@type": "Question",
      name: "Do you install as a subcontractor for university decoration or FM companies?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — white-label installation for university Christmas decoration suppliers, campus FM contractors and print management firms is standard. If you supply the printed or cut material, we provide the installation under your brief, report back to your project manager with photo documentation, and the university sees your company throughout. No WRPX branding on site.",
      },
    },
    {
      "@type": "Question",
      name: "Do you remove Christmas graphics after the Christmas period?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — January removal is included as standard. We schedule removal visits in the first or second week of January, timed around the start of the spring semester. Glass and wall surfaces are left clean with no adhesive residue. For student accommodation, we co-ordinate removal timing with the accommodation management schedule so buildings are returned to standard condition before students arrive back.",
      },
    },
  ],
};

const faqItems = [
  {
    q: "When should a university book Christmas graphics installation?",
    a: "August and September is the right time to confirm installation for November. Most university Christmas graphics programmes need to be in place before students return from Reading Week and before the start of end-of-term social events in late November. Campus FM teams and students' union events officers who confirm installation in August have full access to November dates. Those who leave it to October typically find installer availability is restricted.",
  },
  {
    q: "What access restrictions apply to university campus installations?",
    a: "University access varies by institution and by building type. Students' union buildings typically operate as commercial premises — confirm trading hours and any licensing restrictions on access during events. Student accommodation communal areas require coordination with the accommodation management office and advance booking. Academic and administrative buildings follow standard out-of-hours access protocols — early morning or weekend slots before semester activity begins. Confirm the relevant estates contact for each building in the brief.",
  },
  {
    q: "Can you handle a multi-building campus Christmas programme?",
    a: "Yes — multi-site consistency is core to our commercial work. For university estates teams or FM contractors running a campus-wide Christmas graphics programme across multiple buildings and venues, we work to a single brief, document each location photographically and report back to the estates or FM project manager with per-building completion status. We plan the day sequencing to match the campus geography and access logistics.",
  },
  {
    q: "Do you install as a subcontractor for university decoration or FM companies?",
    a: "Yes — white-label installation for university Christmas decoration suppliers, campus FM contractors and print management firms is standard. If you supply the printed or cut material, we provide the installation under your brief, report back to your project manager with photo documentation, and the university sees your company throughout. No WRPX branding on site.",
  },
  {
    q: "Do you remove Christmas graphics after the Christmas period?",
    a: "Yes — January removal is included as standard. We schedule removal visits in the first or second week of January, timed around the start of the spring semester. Glass and wall surfaces are left clean with no adhesive residue. For student accommodation, we co-ordinate removal timing with the accommodation management schedule so buildings are returned to standard condition before students arrive back.",
  },
];

export default function ChristmasUniversityGraphicsPage() {
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

      {/* Hero */}
      <section className="border-b border-border bg-card py-16 md:py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <p className="text-sm font-medium uppercase tracking-wide text-accent">
            Seasonal · Christmas Graphics for Universities &amp; Student Unions
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Christmas university graphics installation
          </h1>
          <p className="mt-5 text-lg text-muted leading-relaxed">
            Window vinyl, festive wall graphics, seasonal window film and multi-building campus
            Christmas installations for universities, students&apos; unions, student accommodation
            and campus venues across Yorkshire and the East Midlands. White-label installation
            for university Christmas decoration suppliers and FM contractors. Book now — November
            campus installation dates fill from September.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact/" className="btn-primary">
              Book Campus Christmas Installation →
            </Link>
            <Link href="/christmas-window-graphics/" className="btn-secondary">
              Christmas Window Graphics
            </Link>
          </div>
        </div>
      </section>

      {/* Urgency */}
      <section className="bg-accent/10 border-b border-accent/20 px-4 py-8">
        <div className="container mx-auto max-w-4xl">
          <p className="text-foreground font-medium">
            <span className="text-accent font-bold">It&apos;s August.</span>{" "}
            University Christmas graphics typically need to be in place before end-of-term
            events in late November — and campus FM teams and students&apos; union events officers
            are planning programmes now. If you need installation across multiple campus buildings
            or student accommodation blocks, confirming in August secures the dates you need.
          </p>
        </div>
      </section>

      {/* What we install */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-2xl font-semibold text-foreground md:text-3xl">
            Campus Christmas graphics we install
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
            <div className="card-float p-6">
              <h3 className="font-semibold text-foreground">Students&apos; union window graphics</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Printed and cut vinyl for union bar windows, main entrance glazing and event space
                windows. Seasonal festive designs, branded Christmas artwork, frosted privacy film
                with seasonal cut-outs. Applied to glass and removed cleanly in January. Scheduled
                around union trading hours and events calendar.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="font-semibold text-foreground">Student accommodation communal areas</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Seasonal wall graphics and window vinyl for student accommodation communal spaces —
                reception areas, common rooms, corridor feature walls, laundry room windows.
                Installation co-ordinated with accommodation management to minimise disruption.
                Low-odour, temporary vinyl throughout.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="font-semibold text-foreground">Campus cafe and restaurant graphics</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Christmas window graphics and seasonal wall vinyl for university cafes, restaurants,
                coffee shops and food courts. Temporary festive window treatments, branded seasonal
                designs and frosted film with Christmas patterns. Scheduled around catering
                operational hours.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="font-semibold text-foreground">Campus library and study space graphics</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Discreet seasonal window film and graphics for library glazing and study spaces.
                Frosted or etched-effect film with subtle seasonal patterns — maintains sightlines
                and does not disrupt the study environment. Quick application, clean removal in
                January without residue.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="font-semibold text-foreground">Sports and leisure centre graphics</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Christmas window graphics and seasonal wall vinyl for campus sports centres,
                swimming pools and leisure buildings. Sized and specified around the large-format
                glazing typical of campus sports facilities. Removal in January before the spring
                semester activity peak.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="font-semibold text-foreground">Multi-building campus rollout</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Full campus Christmas graphics programmes across multiple buildings — one brief,
                one installation team, one documentation standard per building. Photographic
                sign-off for each location reported back to the estates or FM project manager.
                Consistent specification across all campus venues.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who we work with */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Who we work with on university Christmas programmes
          </h2>
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-foreground">University FM contractors</h3>
                <p className="mt-2 text-sm text-muted leading-relaxed">
                  FM contractors managing university estates often co-ordinate seasonal graphics
                  installation alongside other maintenance and dressing programmes. We integrate
                  with the FM schedule, follow the same access protocols as other campus contractors,
                  and provide documentation in the format the FM team requires.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Students&apos; union events teams</h3>
                <p className="mt-2 text-sm text-muted leading-relaxed">
                  Students&apos; union events officers and venue managers planning Christmas events
                  programmes need window and venue graphics installed before end-of-term event season.
                  We work directly with union teams or as a subcontract installer under your
                  events company or print supplier.
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-foreground">University accommodation management</h3>
                <p className="mt-2 text-sm text-muted leading-relaxed">
                  University accommodation managers and PBSA operators planning seasonal communal
                  area graphics for student accommodation blocks. We install around resident
                  schedules, use low-odour temporary vinyl throughout, and co-ordinate removal
                  timing with accommodation management.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Print companies and decoration suppliers</h3>
                <p className="mt-2 text-sm text-muted leading-relaxed">
                  Print management firms and Christmas decoration suppliers with university accounts
                  who need a reliable subcontract installer. White-label installation — you supply
                  the printed or cut material, we install under your brief, photographic sign-off
                  per building, report back to your account manager. No WRPX branding on campus.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Universities we cover */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Universities and campuses we cover
          </h2>
          <p className="text-muted leading-relaxed mb-8">
            Our primary campus Christmas graphics region is Yorkshire and the East Midlands — universities
            and further education colleges within practical range of our South Yorkshire base.
          </p>
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 text-sm">
            {[
              { city: "Sheffield", note: "University of Sheffield, Sheffield Hallam, Sheffield College" },
              { city: "Leeds", note: "University of Leeds, Leeds Beckett, Leeds Arts University" },
              { city: "Bradford", note: "University of Bradford, Bradford College" },
              { city: "Huddersfield", note: "University of Huddersfield" },
              { city: "York", note: "University of York, York St John" },
              { city: "Nottingham", note: "University of Nottingham, Nottingham Trent" },
              { city: "Derby", note: "University of Derby" },
              { city: "Leicester", note: "University of Leicester, De Montfort University" },
              { city: "Doncaster", note: "Doncaster College" },
            ].map(({ city, note }) => (
              <div key={city} className="card-float p-4">
                <p className="font-semibold text-foreground">{city}</p>
                <p className="mt-1 text-muted">{note}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-muted text-sm">
            Not listed? Contact us — we cover a wide geographic range for the right campus programme.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-3xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            University Christmas graphics questions
          </h2>
          <FaqAccordion items={faqItems} />
        </div>
      </section>

      {/* Related */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Related seasonal and campus services
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
            <Link href="/christmas-window-graphics/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Christmas window graphics</h3>
              <p className="mt-2 text-sm text-muted">Retail, restaurants and commercial premises</p>
            </Link>
            <Link href="/christmas-hotel-graphics/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Christmas hotel graphics</h3>
              <p className="mt-2 text-sm text-muted">Seasonal installation for hotels and hospitality venues</p>
            </Link>
            <Link href="/christmas-subcontract-installer/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Christmas subcontract installer</h3>
              <p className="mt-2 text-sm text-muted">For print companies, agencies and decoration suppliers</p>
            </Link>
            <Link href="/window-film/student-accommodation-window-film/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Student accommodation window film</h3>
              <p className="mt-2 text-sm text-muted">Year-round privacy and solar control film for PBSA</p>
            </Link>
            <Link href="/architectural-wrap-education/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Architectural vinyl wrap — education</h3>
              <p className="mt-2 text-sm text-muted">Surface wrapping for schools and universities</p>
            </Link>
            <Link href="/multi-site-rollout-installation/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Multi-site rollout installation</h3>
              <p className="mt-2 text-sm text-muted">Consistent installation across multiple campus buildings</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-20">
        <div className="container mx-auto max-w-3xl">
          <div className="card-float border-2 border-accent/40 p-10 text-center md:p-12">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              Book campus Christmas graphics installation
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Tell us the campus, the buildings in scope — union, accommodation, cafes, sports
              centre — and whether you&apos;re supplying material or need us to procure. We&apos;ll
              come back with availability and a quote. White-label as standard.
            </p>
            <Link href="/contact/" className="btn-primary mt-8 inline-block">
              Get a Campus Christmas Graphics Quote →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
