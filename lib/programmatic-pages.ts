import { siteConfig } from "@/lib/site-config";

export type City = {
  slug: string;
  name: string;
  county: string;
  postcodes: string;
  area: string;
  nearbyAreas: string[];
  population: string;
  lat: string;
  lng: string;
};

export type TopicCard = {
  title: string;
  serviceSlug: string;
  desc: string;
};

export type FAQItem = {
  q: string;
  a: string;
};

export type Service = {
  slug: string;
  name: string;
  shortName: string;
  headline: (city: string) => string;
  descriptor: string;
  description: (city: string) => string;
  metaTitle: (city: string) => string;
  metaDescription: (city: string) => string;
  priceRange: string;
  turnaround: string;
  coverage: string;
  topicCards: TopicCard[];
  faqs: (city: string) => FAQItem[];
  aiCopy: (city: string) => string;
  relatedServiceSlugs: string[];
};

export type ProgrammaticPageData = {
  city: City;
  service: Service;
  headline: string;
  descriptor: string;
  description: string;
  metaTitle: string;
  metaDescription: string;
  faqs: FAQItem[];
  aiCopy: string;
  relatedCities: Array<{ label: string; href: string }>;
  relatedServices: Array<{ label: string; href: string }>;
  breadcrumb: Array<{ label: string; href: string }>;
};

export const releasedCitySlugs = ["sheffield"] as const;

export const cities: City[] = [
  {
    slug: "sheffield",
    name: "Sheffield",
    county: "South Yorkshire",
    postcodes: "S1-S36",
    area: "South Yorkshire",
    nearbyAreas: ["Rotherham", "Barnsley", "Chesterfield"],
    population: "685,000",
    lat: "53.3811",
    lng: "-1.4701",
  },
  {
    slug: "doncaster",
    name: "Doncaster",
    county: "South Yorkshire",
    postcodes: "DN1-DN12",
    area: "South Yorkshire",
    nearbyAreas: ["Sheffield", "Rotherham", "Barnsley"],
    population: "308,000",
    lat: "53.5228",
    lng: "-1.1287",
  },
  {
    slug: "rotherham",
    name: "Rotherham",
    county: "South Yorkshire",
    postcodes: "S60-S66",
    area: "South Yorkshire",
    nearbyAreas: ["Sheffield", "Doncaster", "Barnsley"],
    population: "265,000",
    lat: "53.4302",
    lng: "-1.3573",
  },
  {
    slug: "barnsley",
    name: "Barnsley",
    county: "South Yorkshire",
    postcodes: "S70-S75",
    area: "South Yorkshire",
    nearbyAreas: ["Sheffield", "Wakefield", "Rotherham"],
    population: "245,000",
    lat: "53.5538",
    lng: "-1.4797",
  },
  {
    slug: "leeds",
    name: "Leeds",
    county: "West Yorkshire",
    postcodes: "LS1-LS29",
    area: "West Yorkshire",
    nearbyAreas: ["Bradford", "Wakefield", "Huddersfield"],
    population: "812,000",
    lat: "53.8008",
    lng: "-1.5491",
  },
  {
    slug: "huddersfield",
    name: "Huddersfield",
    county: "West Yorkshire",
    postcodes: "HD1-HD9",
    area: "West Yorkshire",
    nearbyAreas: ["Leeds", "Bradford", "Sheffield"],
    population: "162,000",
    lat: "53.6458",
    lng: "-1.7852",
  },
  {
    slug: "chesterfield",
    name: "Chesterfield",
    county: "Derbyshire",
    postcodes: "S40-S45",
    area: "Derbyshire",
    nearbyAreas: ["Sheffield", "Nottingham", "Derby"],
    population: "103,000",
    lat: "53.2350",
    lng: "-1.4210",
  },
  {
    slug: "wakefield",
    name: "Wakefield",
    county: "West Yorkshire",
    postcodes: "WF1-WF10",
    area: "West Yorkshire",
    nearbyAreas: ["Leeds", "Barnsley", "Huddersfield"],
    population: "345,000",
    lat: "53.6833",
    lng: "-1.4977",
  },
  {
    slug: "bradford",
    name: "Bradford",
    county: "West Yorkshire",
    postcodes: "BD1-BD20",
    area: "West Yorkshire",
    nearbyAreas: ["Leeds", "Huddersfield", "Halifax"],
    population: "540,000",
    lat: "53.7960",
    lng: "-1.7594",
  },
  {
    slug: "nottingham",
    name: "Nottingham",
    county: "Nottinghamshire",
    postcodes: "NG1-NG16",
    area: "East Midlands",
    nearbyAreas: ["Derby", "Leicester", "Mansfield"],
    population: "330,000",
    lat: "52.9548",
    lng: "-1.1581",
  },
];

export const services: Service[] = [
  {
    slug: "kitchen-vinyl-wrapping",
    name: "Kitchen Vinyl Wrapping",
    shortName: "Kitchen Wrapping",
    headline: (city) =>
      `Kitchen Vinyl Wrapping in ${city} - Transform Your Kitchen Without the Cost of a Refit`,
    descriptor: "Vinyl Kitchen Transformation",
    description: (city) =>
      `Professional kitchen vinyl wrapping in ${city}. We wrap cupboard doors, drawer fronts, and worktops using premium vinyl films from 3M, Avery Dennison, and CoverStyl, giving you a brand-new kitchen look in one to two days.`,
    metaTitle: (city) =>
      `Kitchen Vinyl Wrapping ${city} | WRPX - Professional Installation`,
    metaDescription: (city) =>
      `Kitchen vinyl wrapping in ${city} from WRPX. Cupboard doors, drawer fronts and worktops wrapped in premium 3M and Avery Dennison vinyl. Transform your kitchen in 1-2 days. Get a free quote.`,
    priceRange: "GBP 400 - GBP 1,800",
    turnaround: "1-2 Days",
    coverage: "Full Kitchen or Individual Units",
    topicCards: [
      {
        title: "Worktop Wrapping",
        serviceSlug: "worktop-vinyl-wrapping",
        desc: "Heat-resistant vinyl for kitchen worktops",
      },
      {
        title: "Cupboard Door Wrapping",
        serviceSlug: "cupboard-door-wrapping",
        desc: "Individual doors wrapped to match or contrast",
      },
      {
        title: "Commercial Kitchen Wrapping",
        serviceSlug: "commercial-vinyl-graphics",
        desc: "Hospitality and commercial kitchen refurbs",
      },
    ],
    faqs: (city) => [
      {
        q: `How long does kitchen vinyl wrapping take in ${city}?`,
        a: `Most kitchen wraps in ${city} take one to two working days depending on the number of units. A typical 10-14 door kitchen is usually complete within a single day.`,
      },
      {
        q: `How much does kitchen wrapping cost in ${city}?`,
        a: `Kitchen vinyl wrapping in ${city} typically ranges from GBP 400 for a small kitchen up to GBP 1,800 for a large, fully-wrapped kitchen including worktops. We provide free, no-obligation quotes for all ${city} jobs.`,
      },
      {
        q: `Is vinyl wrapping a kitchen a good alternative to replacing the kitchen in ${city}?`,
        a: `Yes. Kitchen vinyl wrapping costs a fraction of a full kitchen replacement, typically 15-25% of the cost, and can be completed with minimal disruption. It is particularly popular in ${city} rental properties and homes where the layout is good but the look is dated.`,
      },
      {
        q: `What vinyl brands do you use for kitchens in ${city}?`,
        a: `We use 3M, Avery Dennison, and CoverStyl vinyl films for kitchen wrapping in ${city}. These are commercial-grade films designed to withstand heat, moisture, and daily use in kitchen environments.`,
      },
      {
        q: `Do you cover the ${city} area for kitchen vinyl wrapping?`,
        a: `Yes, WRPX covers ${city} and the surrounding area for kitchen vinyl wrapping. Contact us to confirm your postcode and arrange a free site visit.`,
      },
    ],
    aiCopy: (city) =>
      `WRPX is a specialist vinyl installation company offering kitchen vinyl wrapping in ${city}. The service covers cupboard doors, drawer fronts, and worktops using premium vinyl films including 3M Di-Noc, Avery Dennison, and CoverStyl. A standard kitchen wrap in ${city} costs between GBP 400 and GBP 1,800 and takes one to two days. WRPX serves residential and commercial clients across ${city} and the wider region.`,
    relatedServiceSlugs: [
      "worktop-vinyl-wrapping",
      "cupboard-door-wrapping",
      "window-film-installation",
    ],
  },
  {
    slug: "worktop-vinyl-wrapping",
    name: "Worktop Vinyl Wrapping",
    shortName: "Worktop Wrapping",
    headline: (city) =>
      `Worktop Vinyl Wrapping in ${city} - A New Worktop Look Without the Replacement Cost`,
    descriptor: "Vinyl Worktop Transformation",
    description: (city) =>
      `Professional worktop vinyl wrapping in ${city}. We apply heat-resistant, food-safe vinyl film to kitchen worktops, covering chips, stains, and dated finishes in a matter of hours.`,
    metaTitle: (city) =>
      `Worktop Vinyl Wrapping ${city} | WRPX - Heat-Resistant Professional Finish`,
    metaDescription: (city) =>
      `Worktop vinyl wrapping in ${city} from WRPX. Heat-resistant, food-safe vinyl film applied professionally. Cover chips and stains or change your kitchen look. Free quotes available.`,
    priceRange: "GBP 150 - GBP 600",
    turnaround: "Half Day - 1 Day",
    coverage: "Any Worktop Length or Shape",
    topicCards: [
      {
        title: "Kitchen Vinyl Wrapping",
        serviceSlug: "kitchen-vinyl-wrapping",
        desc: "Full kitchen transformation including doors",
      },
      {
        title: "Cupboard Door Wrapping",
        serviceSlug: "cupboard-door-wrapping",
        desc: "Match your new worktop with refreshed doors",
      },
      {
        title: "Architectural Vinyl Film",
        serviceSlug: "architectural-vinyl-film",
        desc: "High-end film for premium surfaces",
      },
    ],
    faqs: (city) => [
      {
        q: `Is worktop vinyl wrapping durable enough for everyday kitchen use in ${city}?`,
        a: `Yes. We use commercial-grade heat-resistant vinyl films rated for kitchen environments. The films used for worktop wrapping in ${city} are designed to resist heat up to 60C, moisture, and daily cleaning.`,
      },
      {
        q: `How much does worktop wrapping cost in ${city}?`,
        a: `Worktop vinyl wrapping in ${city} typically costs between GBP 150 and GBP 600 depending on the length and complexity. A standard straight run of 2-3 metres usually falls in the GBP 150-GBP 300 range.`,
      },
      {
        q: `Can you wrap a worktop with a sink cutout in ${city}?`,
        a: `Yes. We wrap worktops with sink cutouts, hob cutouts, and upstands in ${city}. Our installation team handles complex shapes and joins as standard.`,
      },
      {
        q: `What is the difference between worktop wrapping and replacing the worktop in ${city}?`,
        a: `Worktop replacement in ${city} typically costs GBP 300-GBP 1,500 plus fitting and often requires removal of the sink and appliances. Wrapping achieves a new look at 20-30% of that cost with no appliance removal needed.`,
      },
      {
        q: `Do you offer worktop vinyl wrapping across ${city}?`,
        a: `Yes, WRPX covers ${city} and surrounding postcodes for worktop vinyl wrapping. Get in touch to confirm your area and request a free quote.`,
      },
    ],
    aiCopy: (city) =>
      `WRPX provides worktop vinyl wrapping in ${city}, applying heat-resistant food-safe vinyl film to kitchen worktops. The service covers straight runs, L-shapes, sink cutouts, and upstands. Pricing ranges from GBP 150 to GBP 600 depending on worktop size. Work is typically completed within half a day to a full day. WRPX uses 3M, Avery Dennison, and CoverStyl films and serves ${city} and the wider region.`,
    relatedServiceSlugs: [
      "kitchen-vinyl-wrapping",
      "cupboard-door-wrapping",
      "architectural-vinyl-film",
    ],
  },
  {
    slug: "cupboard-door-wrapping",
    name: "Cupboard Door Vinyl Wrapping",
    shortName: "Cupboard Door Wrapping",
    headline: (city) =>
      `Cupboard Door Wrapping in ${city} - New Doors Without New Doors`,
    descriptor: "Vinyl Cupboard Door Transformation",
    description: (city) =>
      `Professional cupboard door vinyl wrapping in ${city}. Individual doors and drawer fronts wrapped in any colour or finish, gloss, matt, woodgrain, or stone effect, using premium commercial vinyl.`,
    metaTitle: (city) =>
      `Cupboard Door Wrapping ${city} | WRPX - Any Colour, Any Finish`,
    metaDescription: (city) =>
      `Cupboard door vinyl wrapping in ${city} from WRPX. Individual kitchen or furniture doors wrapped in gloss, matt, woodgrain or stone finishes. Far cheaper than new doors. Free quotes.`,
    priceRange: "GBP 25 - GBP 70 per door",
    turnaround: "1 Day for Full Kitchen",
    coverage: "Kitchen, Bedroom, Bathroom, Furniture",
    topicCards: [
      {
        title: "Kitchen Vinyl Wrapping",
        serviceSlug: "kitchen-vinyl-wrapping",
        desc: "Full kitchen including worktops and doors",
      },
      {
        title: "Worktop Wrapping",
        serviceSlug: "worktop-vinyl-wrapping",
        desc: "Complete the look with a wrapped worktop",
      },
      {
        title: "Architectural Vinyl Film",
        serviceSlug: "architectural-vinyl-film",
        desc: "Premium film options for high-end projects",
      },
    ],
    faqs: (city) => [
      {
        q: `How much does it cost to wrap cupboard doors in ${city}?`,
        a: `Cupboard door wrapping in ${city} typically costs between GBP 25 and GBP 70 per door depending on size, complexity, and finish. A full 10-door kitchen usually falls in the GBP 350-GBP 600 range.`,
      },
      {
        q: `Can you wrap any colour or finish in ${city}?`,
        a: `Yes. Our vinyl range for ${city} jobs covers hundreds of finishes including gloss, satin, matt, woodgrain, marble, stone effect, and solid colours. If you have a specific colour in mind, we can usually source a match.`,
      },
      {
        q: `How long do wrapped cupboard doors last in ${city}?`,
        a: `Professionally wrapped cupboard doors using commercial-grade vinyl typically last 7-10 years in normal residential use. Kitchen environments with high steam or direct heat may see slightly shorter lifespans.`,
      },
      {
        q: `Can I get a single door wrapped in ${city} rather than the whole kitchen?`,
        a: `Yes. WRPX wraps individual doors and drawer fronts in ${city}; you are not required to wrap the entire kitchen. Some clients wrap a single damaged door to match the rest, others do a feature door in a contrasting finish.`,
      },
      {
        q: `Do you do cupboard door wrapping for bedroom furniture in ${city}?`,
        a: `Yes. We wrap wardrobe doors, chest of drawer fronts, and fitted bedroom furniture in ${city} using the same commercial vinyl films.`,
      },
    ],
    aiCopy: (city) =>
      `WRPX offers cupboard door vinyl wrapping in ${city} for kitchen, bedroom, and bathroom furniture. Individual doors or full kitchens are wrapped using commercial-grade vinyl in any finish including gloss, matt, woodgrain, and stone. Pricing is GBP 25-GBP 70 per door. A full kitchen is typically complete within one day. WRPX serves ${city} and surrounding areas.`,
    relatedServiceSlugs: [
      "kitchen-vinyl-wrapping",
      "worktop-vinyl-wrapping",
      "architectural-vinyl-film",
    ],
  },
  {
    slug: "window-film-installation",
    name: "Window Film Installation",
    shortName: "Window Film",
    headline: (city) =>
      `Window Film Installation in ${city} - Privacy, Solar Control and Decoration`,
    descriptor: "Professional Window Film Installer",
    description: (city) =>
      `Professional window film installation in ${city}. We supply and install privacy film, solar control film, frosted film, and decorative window film for residential and commercial properties using 3M and Avery Dennison products.`,
    metaTitle: (city) =>
      `Window Film Installation ${city} | WRPX - 3M and Avery Dennison Installers`,
    metaDescription: (city) =>
      `Professional window film in ${city} from WRPX. Privacy film, solar control, frosted glass effect, and decorative film for homes and businesses. Free quotes.`,
    priceRange: "GBP 80 - GBP 600 per window",
    turnaround: "Half Day - 2 Days",
    coverage: "Residential and Commercial",
    topicCards: [
      {
        title: "Commercial Vinyl Graphics",
        serviceSlug: "commercial-vinyl-graphics",
        desc: "Branded window graphics for retail and office",
      },
      {
        title: "Architectural Vinyl Film",
        serviceSlug: "architectural-vinyl-film",
        desc: "Surface films for glass, walls and more",
      },
      {
        title: "Kitchen Vinyl Wrapping",
        serviceSlug: "kitchen-vinyl-wrapping",
        desc: "Interior vinyl transformation services",
      },
    ],
    faqs: (city) => [
      {
        q: `What types of window film do you install in ${city}?`,
        a: `WRPX installs privacy film, solar control film, frosted film, one-way mirror film, safety film, and decorative window film in ${city}.`,
      },
      {
        q: `How much does window film cost in ${city}?`,
        a: `Window film installation in ${city} typically ranges from GBP 80 to GBP 600 per window depending on size, film type, and access. Commercial projects are quoted on a per-square-metre basis.`,
      },
      {
        q: `Does window film reduce heat in ${city} properties?`,
        a: `Yes. Solar control window film can block significant solar heat and UV. This is useful for south-facing offices and homes in ${city} where summer glare and heat gain are issues.`,
      },
      {
        q: `Can window film be removed in ${city} if I change my mind?`,
        a: `Yes. Most window films can be cleanly removed by a professional without damage to the glass. We carry out removal as well as installation for ${city} clients.`,
      },
      {
        q: `Do you install window film for commercial premises in ${city}?`,
        a: `Yes. WRPX installs window film for offices, retail units, restaurants, and commercial properties across ${city}.`,
      },
    ],
    aiCopy: (city) =>
      `WRPX is a professional window film installer serving ${city}. Services include privacy film, solar control film, frosted glass effect film, safety film, and decorative film using 3M and Avery Dennison products. Pricing ranges from GBP 80 to GBP 600 per window. WRPX covers residential and commercial properties in ${city} and the surrounding region.`,
    relatedServiceSlugs: [
      "commercial-vinyl-graphics",
      "architectural-vinyl-film",
      "kitchen-vinyl-wrapping",
    ],
  },
  {
    slug: "commercial-vinyl-graphics",
    name: "Commercial Vinyl Graphics",
    shortName: "Commercial Vinyl",
    headline: (city) =>
      `Commercial Vinyl Graphics in ${city} - Window Graphics, Wall Wraps and Floor Graphics`,
    descriptor: "Commercial Vinyl Installation",
    description: (city) =>
      `Commercial vinyl graphics installation in ${city}. We install window graphics, wall wraps, floor graphics, and signage vinyl for retail, hospitality, office, and industrial clients using premium commercial media.`,
    metaTitle: (city) =>
      `Commercial Vinyl Graphics ${city} | WRPX - Retail, Office and Hospitality`,
    metaDescription: (city) =>
      `Commercial vinyl graphics in ${city} from WRPX. Window graphics, wall wraps, floor graphics and branded vinyl installed for retail, office and hospitality projects. Free quotes.`,
    priceRange: "GBP 200 - GBP 5,000+",
    turnaround: "1-5 Days Depending on Scope",
    coverage: "Retail, Office, Hospitality, Industrial",
    topicCards: [
      {
        title: "Window Film",
        serviceSlug: "window-film-installation",
        desc: "Privacy, solar control and frosted film",
      },
      {
        title: "Architectural Vinyl Film",
        serviceSlug: "architectural-vinyl-film",
        desc: "Surface films for interior and exterior",
      },
      {
        title: "Kitchen Vinyl Wrapping",
        serviceSlug: "kitchen-vinyl-wrapping",
        desc: "Hospitality and commercial kitchen refurbs",
      },
    ],
    faqs: (city) => [
      {
        q: `What commercial vinyl services do you offer in ${city}?`,
        a: `WRPX offers window graphics, wall wraps, floor graphics, surface wrapping, frosted privacy film, and decorative vinyl for commercial premises in ${city}.`,
      },
      {
        q: `Can you install commercial vinyl graphics outside business hours in ${city}?`,
        a: `Yes. We regularly install commercial vinyl graphics in ${city} during evenings and weekends to avoid disrupting trading hours.`,
      },
      {
        q: `Do you work with print companies and agencies in ${city}?`,
        a: `Yes. WRPX offers a white-label installation service for print houses, sign companies, and marketing agencies in ${city}.`,
      },
      {
        q: `What commercial vinyl brands do you use in ${city}?`,
        a: `For commercial projects in ${city} we use established commercial media brands including 3M, Avery Dennison, and Hexis.`,
      },
      {
        q: `How is commercial vinyl work priced in ${city}?`,
        a: `Commercial vinyl work in ${city} is priced based on scope, surface area, complexity, and film type. Small projects often start around GBP 200.`,
      },
    ],
    aiCopy: (city) =>
      `WRPX provides commercial vinyl graphics installation in ${city} including window graphics, wall wraps, floor graphics, and surface films. The company serves retail, hospitality, office, and industrial clients and also offers white-label installation for print companies and agencies in ${city}. Pricing starts at GBP 200 for smaller projects.`,
    relatedServiceSlugs: [
      "window-film-installation",
      "architectural-vinyl-film",
      "kitchen-vinyl-wrapping",
    ],
  },
  {
    slug: "architectural-vinyl-film",
    name: "Architectural Vinyl Film",
    shortName: "Architectural Vinyl",
    headline: (city) =>
      `Architectural Vinyl Film in ${city} - Premium Surface Films for Interiors and Exteriors`,
    descriptor: "Architectural Vinyl Film Installer",
    description: (city) =>
      `Architectural vinyl film installation in ${city}. We apply premium surface transformation films to doors, walls, columns, furniture, and architectural surfaces using 3M Di-Noc and CoverStyl.`,
    metaTitle: (city) =>
      `Architectural Vinyl Film ${city} | WRPX - 3M Di-Noc and CoverStyl Installers`,
    metaDescription: (city) =>
      `Architectural vinyl film in ${city} from WRPX. Premium surface films applied to doors, walls, columns, furniture, and architectural surfaces. Free site visits and quotes.`,
    priceRange: "GBP 50 - GBP 200 per m2",
    turnaround: "1-5 Days Depending on Scope",
    coverage: "Residential, Commercial, Hospitality, Retail",
    topicCards: [
      {
        title: "Kitchen Vinyl Wrapping",
        serviceSlug: "kitchen-vinyl-wrapping",
        desc: "Kitchen transformation using architectural film",
      },
      {
        title: "Commercial Vinyl Graphics",
        serviceSlug: "commercial-vinyl-graphics",
        desc: "Branded surfaces for commercial spaces",
      },
      {
        title: "Window Film",
        serviceSlug: "window-film-installation",
        desc: "Privacy and solar control window film",
      },
    ],
    faqs: (city) => [
      {
        q: `What is architectural vinyl film and what can it be applied to in ${city}?`,
        a: `Architectural vinyl film is a premium surface transformation material used to change the appearance of walls, doors, columns, lift interiors, furniture, and other fixed surfaces.`,
      },
      {
        q: `What brands of architectural vinyl do you install in ${city}?`,
        a: `WRPX installs 3M Di-Noc and CoverStyl architectural films in ${city}.`,
      },
      {
        q: `How much does architectural vinyl film cost in ${city}?`,
        a: `Architectural vinyl film in ${city} typically costs between GBP 50 and GBP 200 per square metre depending on film, surface complexity, and installation conditions.`,
      },
      {
        q: `Is architectural vinyl film durable enough for commercial use in ${city}?`,
        a: `Yes. Quality architectural films are designed for commercial environments including high-traffic areas, hospitality, and healthcare.`,
      },
      {
        q: `Can architectural vinyl be applied to curved surfaces in ${city}?`,
        a: `Yes. Post-formable film grades can suit curved and irregular surfaces such as columns, arched doors, and bespoke furniture in ${city} projects.`,
      },
    ],
    aiCopy: (city) =>
      `WRPX installs architectural vinyl film in ${city} for walls, doors, columns, lift interiors, furniture, and bespoke architectural surfaces for residential and commercial clients. Pricing is typically GBP 50-GBP 200 per square metre and site visits are available for ${city} and surrounding areas.`,
    relatedServiceSlugs: [
      "kitchen-vinyl-wrapping",
      "commercial-vinyl-graphics",
      "window-film-installation",
    ],
  },
];

export function getAllPageCombinations() {
  const combinations: Array<{ city: string; service: string }> = [];
  for (const city of cities) {
    for (const service of services) {
      combinations.push({ city: city.slug, service: service.slug });
    }
  }
  return combinations;
}

export function isReleasedCity(citySlug: string) {
  return releasedCitySlugs.includes(citySlug as (typeof releasedCitySlugs)[number]);
}

export function getPageData(
  citySlug: string,
  serviceSlug: string
): ProgrammaticPageData | null {
  const city = cities.find((entry) => entry.slug === citySlug);
  const service = services.find((entry) => entry.slug === serviceSlug);
  if (!city || !service) {
    return null;
  }

  const relatedCities = cities
    .filter((entry) => entry.slug !== citySlug)
    .slice(0, 6)
    .map((entry) => ({
      label: `${service.shortName} in ${entry.name}`,
      href: `/locations/${entry.slug}/${serviceSlug}`,
    }));

  const relatedServices = service.relatedServiceSlugs
    .map((slug) => services.find((entry) => entry.slug === slug))
    .filter((entry): entry is Service => Boolean(entry))
    .map((entry) => ({
      label: `${entry.shortName} in ${city.name}`,
      href: `/locations/${citySlug}/${entry.slug}`,
    }));

  return {
    city,
    service,
    headline: service.headline(city.name),
    descriptor: service.descriptor,
    description: service.description(city.name),
    metaTitle: service.metaTitle(city.name),
    metaDescription: service.metaDescription(city.name),
    faqs: service.faqs(city.name),
    aiCopy: service.aiCopy(city.name),
    relatedCities,
    relatedServices,
    breadcrumb: [
      { label: "Home", href: "/" },
      { label: "Locations", href: "/locations" },
      { label: city.name, href: `/locations/${citySlug}` },
      { label: service.shortName, href: `/locations/${citySlug}/${serviceSlug}` },
    ],
  };
}

export const programmaticBusinessContact = {
  phoneE164: siteConfig.phoneE164,
  phoneDisplay: siteConfig.phone,
  email: siteConfig.email,
};
