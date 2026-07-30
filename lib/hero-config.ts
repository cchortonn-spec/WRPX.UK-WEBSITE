import { siteConfig } from "./site-config";

/**
 * Homepage hero layout switch.
 * - true  = immersive Washington-style photo hero (new)
 * - false = classic before/after slider hero (backup / revert)
 *
 * Flip this to false if you want the old hero back instantly.
 */
export const useImmersiveHero = true;

export const immersiveHeroImage = {
  src: "/images/hero-after-2.png",
  alt: "Modern kitchen after vinyl wrapping — South Yorkshire",
  width: 1672,
  height: 941,
} as const;

export const heroImages = {
  before: {
    src: "/images/hero-before-2.png",
    alt: "Kitchen before vinyl wrapping — oak cabinets, South Yorkshire",
    width: 1717,
    height: 916,
  },
  after: {
    src: "/images/hero-after-2.png",
    alt: "Kitchen after vinyl wrapping — transformed finish, South Yorkshire",
    width: 1672,
    height: 941,
  },
} as const;

/** Locations cycled in the homepage hero subtitle. */
export const heroLocations = [
  "South Yorkshire",
  ...siteConfig.areas,
] as const;
