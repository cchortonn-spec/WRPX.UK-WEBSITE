import Link from "next/link";

const LOCATION_LINKS = [
  { label: "Sheffield", href: "/window-film/window-film-sheffield/" },
  { label: "Doncaster", href: "/window-film/window-film-doncaster/" },
  { label: "Barnsley", href: "/window-film/window-film-barnsley/" },
  { label: "Rotherham", href: "/window-film/window-film-rotherham/" },
  { label: "Leeds", href: "/window-film/window-film-leeds/" },
  { label: "Chesterfield", href: "/window-film/window-film-chesterfield/" },
  { label: "Huddersfield", href: "/window-film/window-film-huddersfield/" },
] as const;

const SERVICES = [
  { label: "Frosted window film", href: "/window-film/frosted-window-film/" },
  { label: "Privacy & one-way mirror film", href: "/window-film/privacy-window-film/" },
  { label: "Window tinting (buildings)", href: "/window-film/window-tinting/" },
  { label: "Solar control film", href: "/window-film/solar-control-film/" },
  { label: "Commercial window film", href: "/window-film/commercial-window-film/" },
  { label: "Glass manifestation", href: "/window-film/glass-manifestation/" },
] as const;

type Props = {
  city: string;
  title: string;
  introContent: React.ReactNode;
  excludeFromLocations?: string;
};

export function WindowFilmLocationTemplate({ city, title, introContent, excludeFromLocations }: Props) {
  const siblingLinks = LOCATION_LINKS.filter((l) => l.label !== excludeFromLocations);

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
            <span className="text-foreground">Window Film {city}</span>
          </nav>
        </div>
      </section>

      {/* H1 + Intro */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h1 className="mb-6 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            {title}
          </h1>
          <div className="text-muted leading-relaxed">
            {introContent}
          </div>
        </div>
      </section>

      {/* Services we offer */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-center text-2xl font-semibold text-foreground md:text-3xl">
            Window film services we offer in {city}
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="card-float block p-6 text-foreground transition-colors hover:border-accent/40"
              >
                <span className="font-medium">{s.label}</span>
                <span className="ml-2 text-accent">→</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Local to [city] */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <div className="card-float p-8 md:p-10">
            <h2 className="text-xl font-semibold text-foreground">
              Local to {city}
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              We cover {city} and the surrounding area for window film installation. Free survey, usually within the week. Same preparation standards and premium materials whether you&apos;re in the centre or the suburbs.
            </p>
          </div>
        </div>
      </section>

      {/* Cities we also cover */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-6 text-xl font-semibold text-foreground">
            Cities we also cover
          </h2>
          <p className="text-muted">
            {siblingLinks.map((link, i) => (
              <span key={link.href}>
                {i > 0 && " · "}
                <Link href={link.href} className="text-accent hover:underline">
                  {link.label}
                </Link>
              </span>
            ))}
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-20">
        <div className="container mx-auto max-w-3xl">
          <div className="card-float border-2 border-accent/40 p-10 text-center md:p-12">
            <p className="text-muted leading-relaxed">
              Free survey across {city} and South Yorkshire. Call 07398 395417 or book online.
            </p>
            <Link href="/contact/" className="btn-primary mt-8 inline-block">
              Book Your Free Survey →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
