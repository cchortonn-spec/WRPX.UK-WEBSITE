"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import { track } from "@vercel/analytics";
import { siteConfig } from "@/lib/site-config";
import { sendGaEvent } from "@/lib/ga";
import { trackEvent } from "@/lib/track-client";

const FIELD_CLASS =
  "w-full rounded border border-border bg-background px-3 py-2 text-foreground placeholder:text-muted focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent";

export function QuoteForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");
  const [error, setError] = useState("");
  const thanksRef = useRef<HTMLDivElement>(null);

  // The form is replaced by a short message, so bring that message into view.
  useEffect(() => {
    if (status === "sent") {
      thanksRef.current?.scrollIntoView({ block: "center", behavior: "smooth" });
    }
  }, [status]);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    // Stay on the page and send the details in the background.
    event.preventDefault();
    if (status === "sending") return;

    setError("");
    setStatus("sending");

    const data = new FormData(event.currentTarget);
    const payload = {
      name: String(data.get("name") ?? ""),
      phone: String(data.get("phone") ?? ""),
      postcode: String(data.get("postcode") ?? ""),
      description: String(data.get("description") ?? ""),
      contact_time: String(data.get("contact_time") ?? "any"),
      customer_type: String(data.get("customer_type") ?? "domestic"),
      company: String(data.get("company") ?? ""),
    };

    try {
      const response = await fetch("/api/contact-enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const result = (await response.json().catch(() => null)) as { error?: string } | null;
        throw new Error(result?.error || "Sorry, we couldn't send that. Please try again.");
      }

      // Counted once, only after the enquiry has really been sent.
      track("Contact Form Submitted", {
        path: window.location.pathname,
        form: "contact",
      });
      trackEvent({ event_type: "contact_form", page_url: window.location.pathname });
      sendGaEvent("contact_form_submit", { form: "contact", customer_type: payload.customer_type });

      setStatus("sent");
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Sorry, we couldn't send that. Please try again."
      );
      setStatus("idle");
    }
  }

  if (status === "sent") {
    return (
      <div ref={thanksRef} className="space-y-2" role="status">
        <h2 className="text-xl font-semibold text-foreground">Thanks, we&apos;ve got your enquiry</h2>
        <p className="text-muted">
          We&apos;ll be in touch soon on the number you gave us. If it&apos;s urgent, call{" "}
          <a href={`tel:${siteConfig.phoneE164}`} className="text-accent hover:underline">
            {siteConfig.phone}
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4"
      aria-label="Request a free quote"
      // This form reports its own result once it is sent (see handleSubmit),
      // so the site-wide form tracker must not count it as well.
      data-analytics-self="true"
    >
      <fieldset className="enquiry-type">
        <legend className="mb-1 block text-sm text-muted">This is for</legend>
        <div className="enquiry-type-options">
          <label className="enquiry-type-option">
            <input type="radio" name="customer_type" value="domestic" defaultChecked />
            <span className="enquiry-type-card">
              <strong>Home</strong>
              <small>Kitchens, worktops, wardrobes, furniture</small>
            </span>
          </label>
          <label className="enquiry-type-option">
            <input type="radio" name="customer_type" value="commercial" />
            <span className="enquiry-type-card">
              <strong>Business</strong>
              <small>Shops, offices, hotels, window film</small>
            </span>
          </label>
        </div>
      </fieldset>
      <div>
        <label htmlFor="quote-name" className="mb-1 block text-sm text-muted">
          Name
        </label>
        <input
          id="quote-name"
          name="name"
          type="text"
          required
          className={FIELD_CLASS}
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
          className={FIELD_CLASS}
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
          className={FIELD_CLASS}
          placeholder="e.g. S1 2AB"
        />
      </div>
      <div>
        <label htmlFor="quote-desc" className="mb-1 block text-sm text-muted">
          Brief description of your project
        </label>
        <textarea
          id="quote-desc"
          name="description"
          rows={3}
          className={FIELD_CLASS}
          placeholder="e.g. kitchen doors, shop front graphics, vehicle wrap — what needs doing"
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
      {/* Hidden spam trap: real visitors never see or fill this in. */}
      <div className="sr-only" aria-hidden="true">
        <label htmlFor="quote-company">Company (leave empty)</label>
        <input
          id="quote-company"
          name="company"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>
      <p className="text-xs text-muted">
        No obligation. No hard sell. We&apos;ll tell you honestly if wrapping
        isn&apos;t right for your job.
      </p>
      <button type="submit" className="btn-primary w-full" disabled={status === "sending"}>
        {status === "sending" ? "Sending…" : "Send Enquiry"}
      </button>
      {error && (
        <p className="qw-error" role="alert">
          {error}
        </p>
      )}
    </form>
  );
}
