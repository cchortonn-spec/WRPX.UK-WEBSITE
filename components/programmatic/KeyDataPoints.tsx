type Metric = {
  label: string;
  value: string;
  context: string;
};

type KeyDataPointsProps = {
  metrics: Metric[];
};

export default function KeyDataPoints({ metrics }: KeyDataPointsProps) {
  return (
    <section className="border-b border-border bg-muted/30 px-4 py-10">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {metrics.map((metric) => (
            <div key={metric.label} className="rounded-lg border border-border bg-card p-6">
              <p className="text-xs font-semibold uppercase tracking-widest text-accent">
                {metric.label}
              </p>
              <p className="mt-2 text-2xl font-bold text-foreground">{metric.value}</p>
              <p className="mt-1 text-sm text-muted">{metric.context}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
