import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { cities, services, isReleasedCity } from "@/lib/programmatic-pages";

type CityParams = {
  city: string;
};

export async function generateStaticParams(): Promise<CityParams[]> {
  return cities.map((city) => ({ city: city.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<CityParams>;
}): Promise<Metadata> {
  const resolvedParams = await params;
  const city = cities.find((entry) => entry.slug === resolvedParams.city);
  if (!city) {
    return {};
  }

  return {
    title: `WRPX ${city.name} | Vinyl Wrapping and Window Film in ${city.name}`,
    description: `Professional vinyl wrapping and window film installation in ${city.name}. Kitchen wrapping, worktop wrapping, window film, and commercial vinyl services.`,
    alternates: {
      canonical: `https://www.wrpx.co.uk/locations/${city.slug}/`,
    },
    robots: {
      index: isReleasedCity(city.slug),
      follow: true,
    },
  };
}

export default async function CityHubPage({ params }: { params: Promise<CityParams> }) {
  const resolvedParams = await params;
  const city = cities.find((entry) => entry.slug === resolvedParams.city);
  if (!city) {
    notFound();
  }

  return (
    <div>
      <section className="border-b border-border px-4 py-16">
        <div className="container mx-auto max-w-6xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-accent">Service Area</p>
          <h1 className="mt-3 text-4xl font-bold text-foreground">WRPX in {city.name}</h1>
          <p className="mt-4 max-w-2xl text-lg text-muted">
            Professional vinyl installation across {city.name} and the surrounding {city.postcodes} postcode
            area.
          </p>
        </div>
      </section>

      <section className="px-4 py-12">
        <div className="container mx-auto max-w-6xl">
          <h2 className="mb-6 text-xs font-semibold uppercase tracking-widest text-accent">
            Services Available in {city.name}
          </h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`/locations/${city.slug}/${service.slug}`}
                className="rounded-lg border border-border bg-card p-6 transition-colors hover:border-accent"
              >
                <p className="font-bold text-foreground">{service.name}</p>
                <p className="mt-2 text-sm text-muted">
                  {service.description(city.name).slice(0, 110)}
                  ...
                </p>
                <p className="mt-3 text-sm font-semibold text-accent">View service</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
