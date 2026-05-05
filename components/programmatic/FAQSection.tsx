"use client";

import { useState } from "react";
import type { FAQItem } from "@/lib/programmatic-pages";

type FAQSectionProps = {
  faqs: FAQItem[];
};

export default function FAQSection({ faqs }: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="border-b border-border px-4 py-12">
      <div className="container mx-auto max-w-5xl">
        <h2 className="mb-6 text-xs font-semibold uppercase tracking-widest text-accent">
          Frequently Asked Questions
        </h2>

        <div className="divide-y divide-border rounded-lg border border-border bg-card">
          {faqs.map((faq, index) => (
            <div key={faq.q}>
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="flex w-full items-center justify-between px-5 py-4 text-left"
              >
                <span className="pr-8 font-semibold text-foreground">{faq.q}</span>
                <span className="text-lg text-muted">{openIndex === index ? "-" : "+"}</span>
              </button>
              {openIndex === index && (
                <div className="px-5 pb-5">
                  <p className="leading-relaxed text-muted">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
