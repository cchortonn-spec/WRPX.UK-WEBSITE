import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  getAllPageCombinations,
  getPageData,
  isReleasedCity,
  programmaticBusinessContact,
} from "@/lib/programmatic-pages";
import EntityHeader from "@/components/programmatic/EntityHeader";
import KeyDataPoints from "@/components/programmatic/KeyDataPoints";
import TopicCards from "@/components/programmatic/TopicCards";
import InternalLinks from "@/components/programmatic/InternalLinks";
import FAQSection from "@/components/programmatic/FAQSection";
import AICopyBlock from "@/components/programmatic/AICopyBlock";
import CTABlock from "@/components/programmatic/CTABlock";

type ProgrammaticParams = {
  city: string;
  service: string;
};

export async function generateStaticParams(): Promise<ProgrammaticParams[]> {
  return getAllPageCombinations();
}

export async function generateMetadata({
  params,
}: {
  params: Promise<ProgrammaticParams>;
}): Promise<Metadata> {
  const resolvedParams = await params;
  const data = getPageData(resolvedParams.city, resolvedParams.service);
  if (!data) {
    return {};
  }

  const canonical = `https://www.wrpx.co.uk/locations/${resolvedParams.city}/${resolvedParams.service}/`;

  return {
    title: data.metaTitle,
    description: data.metaDescription,
    alternates: {
      canonical,
    },
    robots: {
      index: isReleasedCity(resolvedParams.city),
      follow: true,
    },
    openGraph: {
      title: data.metaTitle,
      description: data.metaDescription,
      url: canonical,
      siteName: "WRPX",
      type: "website",
    },
  };
}

export default async function ProgrammaticPage({
  params,
}: {
  params: Promise<ProgrammaticParams>;
}) {
  const resolvedParams = await params;
  const data = getPageData(resolvedParams.city, resolvedParams.service);
  if (!data) {
    notFound();
  }

  const { city, service, headline, descriptor, description, faqs, aiCopy, relatedCities, relatedServices, breadcrumb } =
    data;

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": `https://www.wrpx.co.uk/locations/${city.slug}/${service.slug}/`,
        name: "WRPX",
        description,
        url: `https://www.wrpx.co.uk/locations/${city.slug}/${service.slug}/`,
        telephone: programmaticBusinessContact.phoneE164,
        email: programmaticBusinessContact.email,
        address: {
          "@type": "PostalAddress",
          addressLocality: "Sheffield",
          addressRegion: "South Yorkshire",
          addressCountry: "GB",
        },
        areaServed: {
          "@type": "City",
          name: city.name,
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: city.lat,
          longitude: city.lng,
        },
        priceRange: service.priceRange,
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: service.name,
        },
      },
      {
        "@type": "FAQPage",
        mainEntity: faqs.map((faq) => ({
          "@type": "Question",
          name: faq.q,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.a,
          },
        })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: breadcrumb.map((crumb, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: crumb.label,
          item: `https://www.wrpx.co.uk${crumb.href}`,
        })),
      },
    ],
  };

  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <nav className="border-b border-border bg-muted/30 px-4 py-3">
        <div className="container mx-auto max-w-6xl">
          <ol className="flex flex-wrap items-center gap-1 text-sm text-muted">
            {breadcrumb.map((crumb, index) => (
              <li key={crumb.href} className="flex items-center gap-1">
                {index > 0 && <span>/</span>}
                {index === breadcrumb.length - 1 ? (
                  <span className="font-medium text-foreground">{crumb.label}</span>
                ) : (
                  <Link href={crumb.href} className="transition-colors hover:text-accent">
                    {crumb.label}
                  </Link>
                )}
              </li>
            ))}
          </ol>
        </div>
      </nav>

      <EntityHeader
        headline={headline}
        descriptor={descriptor}
        description={description}
        city={city}
        service={service}
      />

      <KeyDataPoints
        metrics={[
          { label: "Typical Price Range", value: service.priceRange, context: "Free quotes available" },
          { label: "Turnaround Time", value: service.turnaround, context: "Minimal disruption" },
          {
            label: "Coverage",
            value: service.coverage,
            context: `Serving ${city.name} and surrounding areas`,
          },
        ]}
      />

      <TopicCards cards={service.topicCards} citySlug={city.slug} cityName={city.name} />

      <InternalLinks
        section1Title={`${service.shortName} in Other Areas`}
        section1Links={relatedCities}
        section2Title={`Other Services in ${city.name}`}
        section2Links={relatedServices}
      />

      <FAQSection faqs={faqs} />

      <AICopyBlock copy={aiCopy} />

      <CTABlock cityName={city.name} serviceName={service.name} />
    </div>
  );
}
