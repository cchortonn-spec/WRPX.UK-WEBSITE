import { trainingProgram } from "@/lib/training-program";
import { siteConfig } from "@/lib/site-config";
import { WhatsAppButton } from "@/components/WhatsAppButton";

type PricingCalloutProps = {
  note?: string;
};

export function PricingCallout({ note }: PricingCalloutProps) {
  const block = trainingProgram.priceBlock;

  return (
    <div className="training-price-callout">
      <p className="text-xs font-semibold uppercase tracking-widest text-accent">
        {block.eyebrow}
      </p>
      <h2 className="mt-2 text-2xl font-bold tracking-tight text-foreground md:text-3xl">
        {block.headline}
      </h2>
      <p className="mt-4 text-5xl font-bold tracking-tight text-foreground md:text-6xl">
        {trainingProgram.priceDisplay}
      </p>
      <p className="mt-2 text-muted">{note ?? block.note}</p>
      <p className="mt-4 text-sm text-muted leading-relaxed">{block.reduce}</p>
      <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
        <WhatsAppButton
          label={block.ctaPrimary}
          className="w-full justify-center sm:w-auto"
        />
        <a
          href={`tel:${siteConfig.phoneE164}`}
          className="btn-secondary inline-flex w-full items-center justify-center sm:w-auto"
        >
          {block.ctaSecondary} · {siteConfig.phone}
        </a>
      </div>
    </div>
  );
}
