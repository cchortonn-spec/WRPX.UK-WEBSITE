import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { immersiveHeroImage } from "@/lib/hero-config";
import { HeroLocationRotator } from "@/components/HeroLocationRotator";
import { WhatsAppButton } from "@/components/WhatsAppButton";

/**
 * Layered Washington Construct–style hero.
 * Split layout: copy left, overlapping photo right, trust strip below.
 * Does not change the site menu.
 */
export function HomeHeroImmersive() {
  return (
    <section className="immersive-hero" aria-label="Kitchen wrapping specialists">
      <div className="immersive-hero-blueprint" aria-hidden="true" />

      <div className="immersive-hero-grid">
        <div className="immersive-hero-copy">
          <p className="immersive-hero-eyebrow">WRPX · Kitchen wrapping</p>
          <h1 className="immersive-hero-title">
            We transform kitchens without the rip-out
          </h1>
          <p className="immersive-hero-subtitle">
            Premium vinyl wrapping across <HeroLocationRotator />. Doors,
            worktops and splashbacks — usually 1–3 days, with a{" "}
            {siteConfig.guaranteeYears}-year guarantee.
          </p>
          <div className="immersive-hero-actions">
            <WhatsAppButton className="immersive-hero-whatsapp" />
            <Link href="/gallery/" className="btn-hero-secondary immersive-hero-gallery">
              <GalleryIcon />
              View Our Work
            </Link>
          </div>
        </div>

        <div className="immersive-hero-visual">
          <div className="immersive-hero-photo">
            <Image
              src={immersiveHeroImage.src}
              alt={immersiveHeroImage.alt}
              fill
              priority
              className="immersive-hero-photo-img"
              sizes="(max-width: 900px) 100vw, 55vw"
            />
          </div>

          <div className="immersive-hero-inset">
            <div className="immersive-hero-inset-media">
              <Image
                src="/images/wrpx-vinyl-specialist-branded-van-south-yorkshire.png"
                alt="WRPX vinyl specialist with branded van"
                fill
                className="object-cover"
                sizes="180px"
              />
            </div>
            <p className="immersive-hero-inset-text">
              Same installer from survey to sign-off
            </p>
          </div>
        </div>
      </div>

      <div className="immersive-hero-bar">
        <div className="immersive-hero-bar-item">
          <span className="immersive-hero-bar-label">Call</span>
          <a href={`tel:${siteConfig.phoneE164}`} className="immersive-hero-bar-value">
            {siteConfig.phone}
          </a>
        </div>
        <div className="immersive-hero-bar-item">
          <span className="immersive-hero-bar-label">Guarantee</span>
          <span className="immersive-hero-bar-value">
            {siteConfig.guaranteeYears}-year named cover
          </span>
        </div>
        <div className="immersive-hero-bar-item">
          <span className="immersive-hero-bar-label">Survey</span>
          <Link href="/contact/" className="immersive-hero-bar-value immersive-hero-bar-link">
            Book free — no obligation
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
