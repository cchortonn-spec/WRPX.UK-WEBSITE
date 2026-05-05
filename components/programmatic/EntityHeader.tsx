import Link from "next/link";
import { programmaticBusinessContact, type City, type Service } from "@/lib/programmatic-pages";

type EntityHeaderProps = {
  headline: string;
  descriptor: string;
  description: string;
  city: City;
  service: Service;
};

export default function EntityHeader({
  headline,
  descriptor,
  description,
  city,
  service,
}: EntityHeaderProps) {
  return (
    <section className="border-b border-border bg-card px-4 py-12 md:py-16">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col gap-8 md:flex-row md:items-start">
          <div className="flex-1">
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-accent">
              {descriptor} - {city.name}, {city.county}
            </span>
            <h1 className="mt-3 text-3xl font-bold leading-tight text-foreground md:text-4xl lg:text-5xl">
              {headline}
            </h1>
            <p className="mt-4 max-w-3xl text-lg leading-relaxed text-muted">{description}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/contact/" className="btn-primary">
                Get a Free Quote
              </Link>
              <a
                href={`tel:${programmaticBusinessContact.phoneE164}`}
                className="inline-flex items-center rounded-md border border-border px-5 py-3 text-sm font-semibold text-foreground transition-colors hover:border-accent"
              >
                Call {programmaticBusinessContact.phoneDisplay}
              </a>
            </div>
          </div>

          <div className="w-full rounded-lg border border-border bg-background p-6 md:w-72">
            <p className="text-xs font-semibold uppercase tracking-widest text-accent">
              Service Area
            </p>
            <p className="mt-2 text-xl font-bold text-foreground">{city.name}</p>
            <p className="text-sm text-muted">{city.county}</p>
            <p className="mt-1 text-sm text-muted">Postcodes: {city.postcodes}</p>
            <p className="mt-3 text-sm text-muted">Population: {city.population}</p>
            <div className="mt-4 border-t border-border pt-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-muted">Also covering</p>
              <p className="mt-1 text-sm text-muted">{city.nearbyAreas.join(", ")}</p>
            </div>
            <div className="mt-4 border-t border-border pt-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-muted">Service</p>
              <p className="mt-1 text-sm text-muted">{service.name}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
