import type { Metadata } from "next";
import Link from "next/link";
import { cities, services, isReleasedCity } from "@/lib/programmatic-pages";

export const metadata: Metadata = {
  title: "WRPX Service Locations | Vinyl Installation Across Yorkshire and Midlands",
  description:
    "Explore WRPX service locations for kitchen wrapping, worktop wrapping, window film, commercial vinyl graphics and architectural film.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/locations/",
  },
};

export default function LocationsHubPage() {
  return (
    <div>
      <section className="border-b border-border px-4 py-16">
        <div className="container mx-auto max-w-6xl">
          <h1 className="text-4xl font-bold text-foreground">WRPX Service Locations</h1>
          <p className="mt-4 max-w-2xl text-lg text-muted">
            Professional vinyl wrapping and window film installation across Yorkshire, Derbyshire, and
            the East Midlands.
          </p>
        </div>
      </section>

      <section className="px-4 py-12">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {cities.map((city) => (
              <div key={city.slug} className="rounded-lg border border-border bg-card p-6">
                <div className="mb-4 border-b border-border pb-3">
                  <h2 className="text-xl font-bold text-foreground">{city.name}</h2>
                  <p className="text-sm text-muted">
                    {city.county} - {city.postcodes}
                  </p>
                  {!isReleasedCity(city.slug) && (
                    <p className="mt-2 text-xs font-medium uppercase tracking-wide text-muted">
                      Launching soon
                    </p>
                  )}
                </div>
                <ul className="space-y-2">
                  {services.map((service) => (
                    <li key={service.slug}>
                      <Link
                        href={`/locations/${city.slug}/${service.slug}`}
                        className="text-sm text-muted transition-colors hover:text-accent"
                      >
                        {service.shortName} in {city.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
