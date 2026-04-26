"use client";

import { siteConfig } from "@/lib/site-config";

export function QuoteForm() {
  return (
    <form
      action="/contact/"
      method="get"
      className="space-y-4"
      aria-label="Request a free quote"
    >
      <div>
        <label htmlFor="quote-name" className="mb-1 block text-sm text-muted">
          Name
        </label>
        <input
          id="quote-name"
          name="name"
          type="text"
          required
          className="w-full rounded border border-border bg-background px-3 py-2 text-foreground placeholder:text-muted focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
          placeholder="Your name"
        />
      </div>
      <div>
        <label htmlFor="quote-phone" className="mb-1 block text-sm text-muted">
          Phone
        </label>
        <input
          id="quote-phone"
          name="phone"
          type="tel"
          required
          className="w-full rounded border border-border bg-background px-3 py-2 text-foreground placeholder:text-muted focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
          placeholder={siteConfig.phone}
        />
      </div>
      <div>
        <label htmlFor="quote-postcode" className="mb-1 block text-sm text-muted">
          Postcode
        </label>
        <input
          id="quote-postcode"
          name="postcode"
          type="text"
          required
          className="w-full rounded border border-border bg-background px-3 py-2 text-foreground placeholder:text-muted focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
          placeholder="e.g. S1 2AB"
        />
      </div>
      <div>
        <label htmlFor="quote-desc" className="mb-1 block text-sm text-muted">
          Brief description of your kitchen
        </label>
        <textarea
          id="quote-desc"
          name="description"
          rows={3}
          className="w-full rounded border border-border bg-background px-3 py-2 text-foreground placeholder:text-muted focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
          placeholder="e.g. 10 doors, laminate worktops, want dark grey finish"
        />
      </div>
      <div>
        <label htmlFor="quote-time" className="mb-1 block text-sm text-muted">
          Preferred contact time
        </label>
        <select
          id="quote-time"
          name="contact_time"
          className="w-full rounded border border-border bg-background px-3 py-2 text-foreground focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
        >
          <option value="morning">Morning</option>
          <option value="afternoon">Afternoon</option>
          <option value="evening">Evening</option>
          <option value="any">Any time</option>
        </select>
      </div>
      <p className="text-xs text-muted">
        No obligation. No hard sell. We&apos;ll tell you honestly if wrapping
        isn&apos;t right for your kitchen.
      </p>
      <button type="submit" className="btn-primary w-full">
        Send Enquiry
      </button>
    </form>
  );
}
