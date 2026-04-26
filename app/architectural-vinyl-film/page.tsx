import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Architectural Vinyl Film South Yorkshire | Domestic & Commercial | WRPX",
  description:
    "Architectural vinyl film installation across South Yorkshire for kitchens, furniture and commercial interiors. Local specialist with a 5-year guarantee.",
  alternates: { canonical: "https://www.wrpx.co.uk/architectural-vinyl-film/" },
};

export default function ArchitecturalVinylFilmPage() {
  return (
    <div>
      <section className="border-b border-border bg-card py-14 md:py-18">
        <div className="container mx-auto max-w-4xl px-4">
          <h1 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Architectural Vinyl Film in South Yorkshire
          </h1>
          <p className="mt-5 text-muted leading-relaxed">
            Architectural vinyl film is a specialist interior surface film used
            to transform kitchens, furniture and commercial interiors without
            full replacement. At WRPX, this is our core skill set: careful
            surface preparation, precision application, and durable finishes that
            hold up in real use.
          </p>
          <p className="mt-4 text-muted leading-relaxed">
            We install across Sheffield, Doncaster, Barnsley, Rotherham, Leeds,
            Huddersfield and Chesterfield with the same process on every job:
            honest suitability check, fixed quote and a named{" "}
            {siteConfig.guaranteeYears}-year guarantee.
          </p>
        </div>
      </section>

      <section className="px-4 py-14">
        <div className="container mx-auto max-w-4xl">
          <div className="card-float p-8 md:p-10">
            <h2 className="text-2xl font-semibold text-foreground">
              What is architectural film used for?
            </h2>
            <ul className="mt-5 list-inside list-disc space-y-2 text-muted">
              <li>Kitchen doors, end panels and visible frames</li>
              <li>Worktops and interior furniture surfaces</li>
              <li>Reception desks, counters and wall panels</li>
              <li>Retail and commercial refresh projects</li>
              <li>Office privacy and branded interior upgrades</li>
            </ul>
            <p className="mt-5 text-muted leading-relaxed">
              It is ideal when the structure is sound but the visual finish is
              tired. Instead of removing serviceable units, we re-skin the
              visible surfaces with professional vinyl films in modern finishes.
            </p>
            <p className="mt-4 text-muted">
              Need finish ideas first? Browse our{" "}
              <Link
                href="/architectural-vinyl-finishes/"
                className="text-accent hover:underline"
              >
                architectural vinyl finish sample books
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      <section className="px-4 py-14">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-8 text-center text-2xl font-semibold text-foreground md:text-3xl">
            Domestic and commercial architectural film services
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="card-float p-8">
              <h3 className="text-lg font-semibold text-foreground">
                Domestic: kitchens, worktops, furniture
              </h3>
              <p className="mt-3 text-muted leading-relaxed">
                We install architectural films on kitchen doors, frames, end
                panels and furniture surfaces. Finishes include modern mattes,
                woodgrains, stone looks and marble effects for a full visual
                reset without changing layout.
              </p>
              <p className="mt-4">
                <Link href="/kitchen-wrapping/" className="text-accent hover:underline">
                  Explore kitchen wrapping
                </Link>{" "}
                ·{" "}
                <Link href="/furniture-wrapping/" className="text-accent hover:underline">
                  Explore furniture wrapping
                </Link>
              </p>
            </div>
            <div className="card-float p-8">
              <h3 className="text-lg font-semibold text-foreground">
                Commercial: interiors, retail and brand surfaces
              </h3>
              <p className="mt-3 text-muted leading-relaxed">
                Architectural films are used for reception counters, display
                areas, wall panels and fit-out refreshes in retail and office
                spaces. We also cover related commercial graphics and rollout
                support for agencies and print partners.
              </p>
              <p className="mt-4">
                <Link href="/commercial-installation/" className="text-accent hover:underline">
                  Explore commercial installation
                </Link>{" "}
                ·{" "}
                <Link href="/window-film/" className="text-accent hover:underline">
                  Explore window film services
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-14">
        <div className="container mx-auto max-w-4xl">
          <div className="card-float p-8 md:p-10">
            <h2 className="text-2xl font-semibold text-foreground">
              Why businesses and homeowners choose WRPX
            </h2>
            <ul className="mt-5 list-inside list-disc space-y-2 text-muted">
              <li>7+ years of practical vinyl application experience</li>
              <li>Material-led preparation and application standards</li>
              <li>No franchise handover: same person from survey to finish</li>
              <li>{siteConfig.guaranteeYears}-year guarantee on eligible installs</li>
              <li>Local service across South Yorkshire and nearby areas</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="px-4 py-20">
        <div className="container mx-auto max-w-3xl">
          <div className="card-float border-2 border-accent/40 p-10 text-center md:p-12">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              Request an architectural vinyl film survey
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              We will assess suitability, explain finish options, and provide a
              fixed quote with no pressure.
            </p>
            <Link href="/contact/" className="btn-primary mt-8 inline-block">
              Book a Free Survey
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
