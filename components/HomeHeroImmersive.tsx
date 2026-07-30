import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import {
  immersiveHeroImage,
  immersiveHeroImageMobile,
} from "@/lib/hero-config";
import { HeroLocationRotator } from "@/components/HeroLocationRotator";
import { WhatsAppButton } from "@/components/WhatsAppButton";

/**
 * Full-bleed photo hero (Washington-style): image spans under the header.
 * Landscape on desktop, portrait on mobile. 20% dark overlay for readability.
 */
export function HomeHeroImmersive() {
  return (
    <section className="immersive-hero" aria-label="Kitchen wrapping specialists">
      <div className="immersive-hero-media">
        <Image
          src={immersiveHeroImage.src}
          alt={immersiveHeroImage.alt}
          fill
          priority
          quality={95}
          className="immersive-hero-image immersive-hero-image-desktop"
          sizes="100vw"
        />
        <Image
          src={immersiveHeroImageMobile.src}
          alt={immersiveHeroImageMobile.alt}
          fill
          priority
          quality={95}
          className="immersive-hero-image immersive-hero-image-mobile"
          sizes="100vw"
        />
        <div className="immersive-hero-scrim" aria-hidden="true" />
      </div>

      <div className="immersive-hero-content">
        <p className="immersive-hero-eyebrow">WRPX · Kitchen wrapping</p>
        <h1 className="immersive-hero-title">
          We transform kitchens
          <br />
          without the rip-out
        </h1>
        <p className="immersive-hero-subtitle">
          Premium vinyl wrapping across <HeroLocationRotator />. Doors, worktops
          and splashbacks — usually 1–3 days, with a {siteConfig.guaranteeYears}-year
          guarantee.
        </p>
        <div className="immersive-hero-actions">
          <WhatsAppButton className="immersive-hero-whatsapp" />
          <Link href="/gallery/" className="btn-hero-secondary immersive-hero-gallery">
            <GalleryIcon />
            View Our Work
          </Link>
        </div>
      </div>
    </section>
  );
}

function GalleryIcon() {
  return (
    <svg
      className="h-5 w-5 shrink-0"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden="true"
    >
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <circle cx="8.5" cy="8.5" r="1.5" fill="currentColor" stroke="none" />
      <path d="m21 15-5-5L5 21" />
    </svg>
  );
}
