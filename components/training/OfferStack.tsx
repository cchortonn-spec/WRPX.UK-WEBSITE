import { trainingProgram } from "@/lib/training-program";

export function OfferStack() {
  const core = trainingProgram.offerStack.filter((item) => item.kind === "core");
  const premiums = trainingProgram.offerStack.filter(
    (item) => item.kind === "premium"
  );

  return (
    <div className="training-offer-stack">
      <div className="space-y-3">
        {core.map((item, index) => (
          <div key={item.id} className="training-offer-row">
            <span className="training-offer-num" aria-hidden="true">
              {index + 1}
            </span>
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-accent">
                {item.valueHint}
              </p>
              <h3 className="mt-1 text-lg font-semibold text-foreground">
                {item.feature}
              </h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                {item.benefit}
              </p>
            </div>
          </div>
        ))}
      </div>

      <p className="training-offer-premiums-label">
        And included with your place…
      </p>

      <div className="space-y-3">
        {premiums.map((item) => (
          <div key={item.id} className="training-offer-row training-offer-row-premium">
            <span className="training-offer-check" aria-hidden="true">
              +
            </span>
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-accent">
                {item.valueHint}
              </p>
              <h3 className="mt-1 font-semibold text-foreground">
                {item.feature}
              </h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                {item.benefit}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
