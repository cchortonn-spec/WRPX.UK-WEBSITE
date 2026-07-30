import Link from "next/link";
import { BeforeAfterSlider } from "@/components/BeforeAfterSlider";
import { HeroLocationRotator } from "@/components/HeroLocationRotator";
import { WhatsAppButton } from "@/components/WhatsAppButton";

/**
 * Classic homepage hero — before/after slider with overlay copy.
 * Kept as a backup. Set `useImmersiveHero = false` in lib/hero-config.ts to restore.
 */
export function HomeHeroClassic() {
  return (
    <section className="home-hero">
      <div className="home-hero-inner">
        <div className="home-hero-media">
          <BeforeAfterSlider className="home-hero-slider" priority />
          <div className="home-hero-scrim" aria-hidden="true" />
        </div>
        <div className="home-hero-copy">
          <h1 className="home-hero-title">Kitchen Wrapping Specialists</h1>
          <p className="home-hero-subtitle">
            Transform your kitchen with our premium wrapping service across{" "}
            <HeroLocationRotator />.
          </p>
          <div className="home-hero-actions">
            <WhatsAppButton className="home-hero-whatsapp" />
            <Link href="/gallery/" className="btn-hero-secondary">
              <GalleryIcon />
              View Our Work
            </Link>
          </div>
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
