import Image from "next/image";
import { siteConfig } from "@/lib/site-config";

const TRUST_IMAGE = "/images/wrpx-vinyl-specialist-branded-van-south-yorkshire.png";
const TRUST_ALT =
  "WRPX vinyl wrapping specialist with branded van — South Yorkshire kitchen and interior wrap";

type WrpxTrustPanelProps = {
  variant?: "featured" | "aside" | "banner";
  className?: string;
};

const trustPoints = [
  `South Yorkshire based — ${siteConfig.areas.slice(0, 4).join(", ")} and beyond`,
  "One installer from survey to sign-off",
  `Fully insured · ${siteConfig.guaranteeYears}-year guarantee`,
  "No subcontractors, no handoffs",
] as const;

export function WrpxTrustPanel({
  variant = "featured",
  className = "",
}: WrpxTrustPanelProps) {
  if (variant === "banner") {
    return (
      <div className={`wrpx-trust-banner ${className}`.trim()}>
        <div className="wrpx-trust-banner-media">
          <Image
            src={TRUST_IMAGE}
            alt={TRUST_ALT}
            fill
            className="object-cover object-center"
            sizes="(max-width: 768px) 100vw, 960px"
            priority
          />
          <div className="wrpx-trust-banner-scrim" aria-hidden="true" />
        </div>
        <ul className="wrpx-trust-banner-points">
          {trustPoints.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
      </div>
    );
  }

  if (variant === "aside") {
    return (
      <aside className={`wrpx-trust-aside ${className}`.trim()} aria-label="WRPX service standards">
        <div className="wrpx-trust-aside-media">
          <Image
            src={TRUST_IMAGE}
            alt={TRUST_ALT}
            fill
            className="object-cover object-center"
            sizes="(max-width: 768px) 100vw, 400px"
          />
        </div>
        <div className="wrpx-trust-aside-body">
          <p className="wrpx-trust-eyebrow">Who you&apos;re dealing with</p>
          <ul className="wrpx-trust-list">
            {trustPoints.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </div>
      </aside>
    );
  }

  return (
    <section
      className={`wrpx-trust-featured reveal ${className}`.trim()}
      aria-label="WRPX service standards"
    >
      <div className="container mx-auto max-w-6xl px-4">
        <div className="wrpx-trust-featured-grid card-float overflow-hidden">
          <div className="wrpx-trust-featured-media">
            <Image
              src={TRUST_IMAGE}
              alt={TRUST_ALT}
              fill
              className="object-cover object-center"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>
          <div className="wrpx-trust-featured-copy">
            <p className="wrpx-trust-eyebrow">Local specialist, not a call centre</p>
            <h2 className="wrpx-trust-heading">
              The same team surveys, wraps and signs off your job
            </h2>
            <p className="wrpx-trust-lead">
              WRPX is a South Yorkshire vinyl wrapping business — kitchens, furniture,
              window film and commercial graphics. {siteConfig.yearsInBusiness}+ years in
              the trade, direct accountability on every project.
            </p>
            <ul className="wrpx-trust-list">
              {trustPoints.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
