import { siteConfig } from "./site-config";

export function getLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${siteConfig.domain}/#business`,
    name: siteConfig.name,
    description:
      "Kitchen wrapping and commercial vinyl installation specialist. Serving Sheffield, Doncaster, Barnsley, Rotherham, Leeds, Huddersfield, Chesterfield and all South Yorkshire. Kitchen doors, worktops, splashbacks, bedroom furniture, bathroom units, appliances and commercial graphics. 7+ years experience, 5-year guarantee.",
    url: siteConfig.domain,
    telephone: siteConfig.phoneE164,
    email: siteConfig.email,
    priceRange: "££",
    foundingDate: "2018",
    image: `${siteConfig.domain}/images/gallery/kitchen-wrap-full-kitchen-south-yorkshire.jpg`,
    knowsAbout: [
      "Kitchen Vinyl Wrapping",
      "Worktop Wrapping",
      "Furniture Wrapping",
      "Kitchen Island Wrapping",
      "Splashback Wrapping",
      "Appliance Wrapping",
      "Window Film Installation",
      "Architectural Vinyl Film",
      "Commercial Vinyl Graphics",
      "Wall Wraps",
      "Floor Graphics",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Vinyl Wrapping & Commercial Graphics Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Kitchen Wrapping",
            description: "Full kitchen vinyl wrapping — doors, drawer fronts, worktops and frames in premium architectural vinyl.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Kitchen Island Wrapping",
            description: "Kitchen island vinyl wrapping in marble, stone, woodgrain and solid colour finishes.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Worktop Wrapping",
            description: "Heat-resistant vinyl wrapping for kitchen worktops in marble, stone and wood-effect finishes.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Splashback Wrapping",
            description: "Vinyl over existing tiles or glass splashbacks — no retiling required.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Kitchen Door Wrapping",
            description: "Kitchen door and drawer front vinyl wrapping in any colour or finish.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Bathroom Cabinet Wrapping",
            description: "Bathroom vanity and cabinet vinyl wrapping with moisture-resistant film.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Bedroom Wardrobe Wrapping",
            description: "Bedroom wardrobe and furniture vinyl wrapping in any finish.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Furniture & Bedroom Wrapping",
            description: "Wardrobes, bedroom and bathroom units wrapped in premium vinyl.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Appliance Wrapping",
            description: "Fridge freezers, cooker hoods, dishwashers and other appliances wrapped in vinyl.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Window Film Installation",
            description: "Frosted, privacy, solar control, one-way mirror and decorative window film installation.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Commercial Vinyl Graphics",
            description: "Window graphics, wall wraps, floor graphics and signage installation for retail, commercial and hospitality.",
          },
        },
      ],
    },
    areaServed: [
      ...siteConfig.areaServed,
      "Wakefield",
      "York",
      "Bradford",
      "Nottingham",
      "Manchester",
      "West Yorkshire",
      "Greater Manchester",
    ],
    address: {
      "@type": "PostalAddress",
      addressRegion: "South Yorkshire",
      addressCountry: "GB",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "53.3811",
      longitude: "-1.4701",
    },
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
