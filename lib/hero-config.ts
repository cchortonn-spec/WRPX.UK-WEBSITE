import { siteConfig } from "./site-config";

/**
 * Homepage hero layout switch.
 * - true  = immersive Washington-style photo hero (new)
 * - false = classic before/after slider hero (backup / revert)
 *
 * Flip this to false if you want the old hero back instantly.
 */
export const useImmersiveHero = true;

/**
 * HERO PHOTO TEST SWITCH
 * - true  = testing the new darker open-plan kitchen + dining photo
 * - false = back to the original dark kitchen hero
 *
 * To revert, change this to false and save. Nothing else to touch.
 */
export const useTestHeroPhoto = true;

const originalHeroDesktop = {
  src: "/images/hero-immersive-kitchen-v2.jpg",
  alt: "Modern dark kitchen with light stone island and warm under-cabinet lighting",
  width: 1024,
  height: 576,
} as const;

const originalHeroMobile = {
  src: "/images/hero-immersive-kitchen-mobile.jpg",
  alt: "Modern dark kitchen with light stone island — mobile view",
  width: 576,
  height: 1024,
} as const;

const testHeroDesktop = {
  src: "/images/hero-test-dining-kitchen-dark.jpg",
  alt: "Open-plan kitchen and dining area with cream wrapped units and marble-effect floor",
  width: 1024,
  height: 576,
} as const;

/** For the test, phones use the same photo (cropped to fit portrait). */
const testHeroMobile = {
  src: "/images/hero-test-dining-kitchen-dark.jpg",
  alt: "Open-plan kitchen and dining area with cream wrapped units — mobile view",
  width: 1024,
  height: 576,
} as const;

export const immersiveHeroImage = useTestHeroPhoto
  ? testHeroDesktop
  : originalHeroDesktop;

/** Portrait crop for phones — used only below the md breakpoint. */
export const immersiveHeroImageMobile = useTestHeroPhoto
  ? testHeroMobile
  : originalHeroMobile;

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
