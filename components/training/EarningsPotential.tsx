import { trainingProgram } from "@/lib/training-program";

export function EarningsPotential() {
  const { earnings } = trainingProgram;

  return (
    <div className="rounded-xl border border-border bg-card p-6 md:p-8">
      <h3 className="text-xl font-semibold text-foreground md:text-2xl">
        {earnings.headline}
      </h3>
      <p className="mt-3 text-muted leading-relaxed">{earnings.body}</p>
      <p className="mt-5 text-[11px] leading-relaxed text-muted/70">
        {earnings.disclaimer}
      </p>
    </div>
  );
}
