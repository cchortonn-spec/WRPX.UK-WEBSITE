export type FaqItem = { q: string; a: string };

export function FaqAccordion({
  items,
  defaultOpenFirst = false,
}: {
  items: FaqItem[];
  /** Open the first FAQ by default (cost page). */
  defaultOpenFirst?: boolean;
}) {
  return (
    <div className="space-y-4">
      {items.map(({ q, a }, index) => (
        <details
          key={q}
          className="card-float group overflow-hidden"
          open={defaultOpenFirst && index === 0 ? true : undefined}
        >
          <summary className="cursor-pointer list-none px-6 py-4 font-medium text-foreground [&::-webkit-details-marker]:hidden">
            {q}
          </summary>
          <div className="border-t border-border px-6 py-4 text-muted">{a}</div>
        </details>
      ))}
    </div>
  );
}
