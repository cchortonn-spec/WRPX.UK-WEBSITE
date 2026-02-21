import { siteConfig } from "./site-config";

export function getLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: siteConfig.name,
    description:
      "Kitchen wrapping specialist serving South Yorkshire including Sheffield, Doncaster, Barnsley, Rotherham, Leeds, Huddersfield and Chesterfield.",
    url: siteConfig.domain,
    telephone: siteConfig.phoneE164,
    email: siteConfig.email,
    areaServed: siteConfig.areaServed,
    address: {
      "@type": "PostalAddress",
      addressRegion: "South Yorkshire",
      addressCountry: "GB",
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
  };
}
