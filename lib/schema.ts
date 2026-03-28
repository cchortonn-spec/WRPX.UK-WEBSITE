import { siteConfig } from "./site-config";

export function getLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: siteConfig.name,
    description:
      "Kitchen wrapping and commercial graphics & signage installation specialist serving South Yorkshire including Sheffield, Doncaster, Barnsley, Rotherham, Leeds, Huddersfield and Chesterfield.",
    url: siteConfig.domain,
    telephone: siteConfig.phoneE164,
    email: siteConfig.email,
    priceRange: "££",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Kitchen Wrapping Services",
    },
    areaServed: siteConfig.areaServed,
    address: {
      "@type": "PostalAddress",
      addressRegion: "South Yorkshire",
      addressCountry: "GB",
    },
    // Update ratingValue and reviewCount when you have 4–5+ real Google reviews
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5",
      reviewCount: "5",
      bestRating: "5",
    },
  };
}

export function getServiceSchema(serviceName: string, description: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: serviceName,
    provider: { "@type": "LocalBusiness", name: siteConfig.name },
    areaServed: "South Yorkshire",
    description,
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      areaServed: "South Yorkshire",
    },
  };
}
