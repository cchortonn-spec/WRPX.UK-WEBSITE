import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Commercial Window Film Installer South Yorkshire | Offices & Retail | WRPX",
  description:
    "Commercial window film installation for offices, retail, healthcare, education and hospitality across South Yorkshire. Privacy, solar control, branding and glass manifestation. Multi-site capability.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/window-film/commercial-window-film/",
  },
};

const services = [
  {
    title: "Privacy film for offices and meeting rooms",
    body: "Frosted and manifestation film on glass partitions, meeting room screens and office frontages. Gives your team focused working space without sacrificing the open-plan feel. Can be plain, patterned, or branded with your company mark.",
  },
  {
    title: "Solar and glare control film",
    body: "South-facing offices and glass-heavy commercial buildings generate significant solar gain and afternoon glare. Our commercial solar film range from 3M and Avery Dennison is specified for your glazing type and orientation, reducing heat load and glare without making the working environment feel dimmed.",
  },
  {
    title: "Reflective and privacy film for commercial frontages",
    body: "Control what's visible from the street during trading hours. Reflective films on shopfronts and office frontages also reduce solar gain — a dual return on the installation.",
  },
  {
    title: "Safety and security film",
    body: "Transparent safety film holds glazing together in the event of impact — providing protection against accidental breakage, forced entry attempts, and in high-risk environments, blast mitigation. Applied invisibly to existing glass.",
  },
  {
    title: "Branded film, logos and graphics",
    body: "Cut frosted logos, branded manifestation designs, full window graphics and privacy film combined with brand elements. We work with your artwork files or your agency — and we deliver the installation to planogram or brand specification.",
  },
  {
    title: "Multi-site rollout programmes",
    body: "Coordinated film installation across multiple commercial locations. Seasonal campaigns, rebrand programmes, new site openings — one contact, consistent results from Sheffield to Nottingham. The same installer pair works every location.",
  },
];

const sectors = [
  { title: "Offices and professional services", body: "Partitions, frontages, meeting rooms, reception areas. Privacy compliance, branding, and solar control." },
  { title: "Retail", body: "Shopfront reflective and branded film, promotional window campaigns, solar film for display-heavy environments." },
  { title: "Healthcare and dental", body: "Privacy film for consulting rooms, waiting rooms and patient-facing glazing. Helps meet privacy obligations without structural work." },
  { title: "Education", body: "Classroom glazing, corridor partitions, manifestation for DDA compliance, solar control for south-facing classrooms." },
  { title: "Hospitality", body: "Hotels, bars and restaurants using window film for atmosphere control, privacy zoning and exterior appearance." },
  { title: "Industrial and commercial", body: "Factory and warehouse office glazing, reception frontages, branded signage on commercial units." },
];

export default function CommercialWindowFilmPage() {
  return (
    <div>
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
            <span className="text-foreground">Commercial Window Film</span>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="relative h-[40vh] min-h-[280px] w-full overflow-hidden">
        <Image
          src="/images/window-film/commercial.png"
          alt="Commercial window film — South Yorkshire"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 flex items-center justify-center px-4">
          <h1 className="text-center text-3xl font-bold tracking-tight text-white drop-shadow-lg md:text-4xl">
            Commercial window film across South Yorkshire — privacy, solar control, branding and compliance for businesses
          </h1>
        </div>
      </section>

      {/* Intro */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <p className="text-muted leading-relaxed">
            WRPX is a South Yorkshire window film and retail graphics specialist with 7 years of experience applying premium materials in commercial and retail environments. Window film is a natural extension of what we do — the same preparation standards, the same premium products, the same application discipline that makes our retail graphics installations last.
          </p>
          <p className="mt-4 text-muted leading-relaxed">
            We work directly with businesses or as a white-label installation partner for marketing agencies, print management companies and signage businesses across the region.
          </p>
        </div>
      </section>

      {/* Commercial window film services */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-center text-2xl font-semibold text-foreground md:text-3xl">
            Commercial window film services
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((item) => (
              <div key={item.title} className="card-float p-6 md:p-8">
                <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
                <p className="mt-3 text-sm text-muted leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sectors */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-center text-2xl font-semibold text-foreground md:text-3xl">
            Sectors we work in
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {sectors.map((item) => (
              <div key={item.title} className="card-float p-6 md:p-8">
                <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
                <p className="mt-3 text-sm text-muted leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* White-label */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-6 text-2xl font-semibold text-foreground md:text-3xl">
            White-label commercial window film for agencies and print companies
          </h2>
          <div className="card-float p-8 md:p-10">
            <p className="text-muted leading-relaxed">
              WRPX works as a silent installation partner for marketing agencies, print management companies and signage businesses across South Yorkshire and the North. We deliver under your brand — your client never needs to know we&apos;re involved — while you maintain full visibility through our reporting process.
            </p>
            <p className="mt-4 text-muted leading-relaxed">
              If you&apos;re an agency running a retail client&apos;s seasonal film campaign, a print company offering print-and-install, or a signage business that needs a reliable regional installer for vinyl-heavy projects, we&apos;re the partner you&apos;ve been looking for in this region.
            </p>
            <p className="mt-4 text-muted leading-relaxed">
              Photographic documentation and consolidated reporting provided on every multi-site programme. One point of contact throughout.
            </p>
          </div>
        </div>
      </section>

      {/* Why WRPX */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-6 text-2xl font-semibold text-foreground md:text-3xl">
            What makes the difference on a commercial installation
          </h2>
          <p className="text-muted leading-relaxed">
            A commercial window film installation fails — bubbles, lifting edges, peeling corners after 8 months — almost always because of the preparation. Surfaces not properly cleaned. Film specified without assessing the glass substrate. Application rushed on a tight site programme.
          </p>
          <p className="mt-4 text-muted leading-relaxed">
            WRPX brings the same preparation discipline to commercial film that we apply to retail vinyl: proper cleaning, proper surface assessment, proper film specification. It&apos;s the reason our installations last and don&apos;t need revisiting.
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-4 py-20">
        <div className="container mx-auto max-w-3xl">
          <div className="card-float border-2 border-accent/40 p-10 text-center md:p-12">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              Commercial window film enquiries
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Whether you&apos;re a business, a facilities manager, or an agency looking for a reliable South Yorkshire installation partner — talk to us. We&apos;ll discuss your project, your sites and your timescales and give you a straight quote.
            </p>
            <p className="mt-4 text-muted">
              Call: <strong className="text-foreground">07398 395417</strong>
              <br />
              Email:{" "}
              <a href="mailto:wrpx.uk@gmail.com" className="text-accent hover:underline">
                wrpx.uk@gmail.com
              </a>
            </p>
            <Link href="/contact/" className="btn-primary mt-8 inline-block">
              Request a commercial quote →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
