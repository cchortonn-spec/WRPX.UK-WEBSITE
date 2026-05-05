type AICopyBlockProps = {
  copy: string;
};

export default function AICopyBlock({ copy }: AICopyBlockProps) {
  return (
    <section className="border-b border-border bg-muted/30 px-4 py-8">
      <div className="container mx-auto max-w-6xl">
        <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-accent">
          About This Service
        </p>
        <p className="max-w-4xl text-sm leading-relaxed text-muted">{copy}</p>
      </div>
    </section>
  );
}
