import Link from "next/link";
import { trainingProgram } from "@/lib/training-program";
import { WhatsAppButton } from "@/components/WhatsAppButton";

const HUB_HREF = "/kitchen-wrapping-training/";

type TrainingHubCtaProps = {
  /** Slightly shorter copy for mid-page placements */
  compact?: boolean;
};

/**
 * Pushes satellite SEO pages back to the main training sales hub.
 */
export function TrainingHubCta({ compact = false }: TrainingHubCtaProps) {
  return (
    <div className="training-hub-cta">
      <p className="text-xs font-semibold uppercase tracking-widest text-accent">
        Full training offer
      </p>
      <h2 className="mt-2 text-xl font-bold tracking-tight text-foreground md:text-2xl">
        Ready to see the complete package?
      </h2>
      {!compact ? (
        <p className="mt-3 text-muted leading-relaxed">
          The main training page lays out the live 5-day install, business
          setup, price and how to apply — that&apos;s where the offer is sold.
        </p>
      ) : (
        <p className="mt-2 text-sm text-muted leading-relaxed">
          Everything included, the investment, and how to apply — all on the
          main training page.
        </p>
      )}
      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
        <Link href={HUB_HREF} className="btn-primary inline-flex justify-center text-center">
          View the full training offer
        </Link>
        <WhatsAppButton
          label={trainingProgram.hero.ctaPrimary}
          className="justify-center"
        />
      </div>
    </div>
  );
}
