import { BeforeAfterSlider } from "@/components/BeforeAfterSlider";

/**
 * Before/after slider without overlay headline or CTAs.
 * Used mid-page when the immersive hero is active.
 */
export function BeforeAfterShowcase() {
  return (
    <section className="before-after-showcase reveal" aria-label="Before and after kitchen wrap">
      <div className="before-after-showcase-inner">
        <div className="before-after-showcase-heading">
          <h2 className="section-heading text-2xl font-semibold text-foreground md:text-3xl">
            Before &amp; after
          </h2>
          <p className="before-after-showcase-lead">
            Drag the slider to compare a real kitchen wrap.
          </p>
        </div>
        <div className="before-after-showcase-slider">
          <BeforeAfterSlider priority={false} />
        </div>
      </div>
    </section>
  );
}
