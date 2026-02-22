/**
 * Site-wide config for WRPX. Used in layout, schema, CTAs, and trust copy.
 */
export const siteConfig = {
  name: "WRPX",
  phone: "07398395417",
  phoneE164: "+447398395417",
  email: "wrpx.uk@gmail.com",
  domain: "https://wrpx.co.uk",
  guaranteeYears: 5,
  yearsInBusiness: 7,
  areas: [
    "Sheffield",
    "Doncaster",
    "Barnsley",
    "Rotherham",
    "Leeds",
    "Huddersfield",
    "Chesterfield",
  ] as const,
  areaServed: [
    "Sheffield",
    "Doncaster",
    "Barnsley",
    "Rotherham",
    "Leeds",
    "Huddersfield",
    "Chesterfield",
    "South Yorkshire",
  ],
} as const;

export type AreaSlug = (typeof siteConfig.areas)[number];
