"use client";

import { FormEvent, useMemo, useState } from "react";
import Image from "next/image";

type QuoteType = "complete" | "cabinet" | "worktop" | "";
type DoorStyle = "j-pull" | "shaker" | "flat" | "other" | "";

type ContactInfo = {
  firstName: string;
  lastName: string;
  email: string;
  mobile: string;
  city: string;
};

const STEP_TITLES = [
  "Quote Type",
  "Kitchen Specs",
  "Submit Pictures",
  "Contact Info",
] as const;

const quoteTypeCards = [
  {
    id: "complete" as const,
    title: "Complete Kitchen Wrap",
    desc: "Doors, drawers, panels, plinths, trims, worktops and upstands.",
    image: "/images/quote-icons/complete-kitchen-wrap.png",
  },
  {
    id: "cabinet" as const,
    title: "Kitchen Cabinet Wrap",
    desc: "Doors, drawers, panels, plinths and trims.",
    image: "/images/quote-icons/kitchen-cabinet-wrap.png",
  },
  {
    id: "worktop" as const,
    title: "Worktop Wrap",
    desc: "Worktops and upstands only. Splashback quoted separately.",
    image: "/images/quote-icons/worktop-wrap.png",
  },
];

const doorStyleCards = [
  {
    id: "j-pull" as const,
    label: "J Pull Doors & Drawers",
    image: "/images/door-styles/j-pull-doors-drawers.png",
  },
  {
    id: "shaker" as const,
    label: "Shaker Doors & Drawers",
    image: "/images/door-styles/shaker-doors-drawers.png",
  },
  {
    id: "flat" as const,
    label: "Flat Doors & Drawers",
    image: "/images/door-styles/flat-doors-drawers.png",
  },
  {
    id: "other" as const,
    label: "Other",
    image: "/images/door-styles/other-doors-drawers.png",
  },
];

export function KitchenWrappingQuoteWizard() {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const [quoteType, setQuoteType] = useState<QuoteType>("");
  const [doorStyle, setDoorStyle] = useState<DoorStyle>("");
  const [doors, setDoors] = useState("");
  const [drawers, setDrawers] = useState("");
  const [worktopMetres, setWorktopMetres] = useState("");
  const [photos, setPhotos] = useState<File[]>([]);
  const [contact, setContact] = useState<ContactInfo>({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    city: "",
  });

  const stepIsValid = useMemo(() => {
    if (step === 1) return quoteType !== "";
    if (step === 2) {
      if (quoteType === "worktop") return Number(worktopMetres) > 0;
      const hasCounts = Number(doors) > 0 && Number(drawers) >= 0;
      if (quoteType === "complete") return hasCounts && Number(worktopMetres) > 0;
      return hasCounts && doorStyle !== "";
    }
    if (step === 3) return photos.length >= 2;
    if (step === 4) {
      return (
        contact.firstName.trim().length > 1 &&
        contact.lastName.trim().length > 1 &&
        /^\S+@\S+\.\S+$/.test(contact.email) &&
        contact.mobile.trim().length >= 10 &&
        contact.city.trim().length > 1
      );
    }
    return false;
  }, [step, quoteType, worktopMetres, doors, drawers, doorStyle, photos.length, contact]);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!stepIsValid || isSubmitting) return;
    setSubmitError("");
    setIsSubmitting(true);

    const formData = new FormData();
    formData.append("quoteType", quoteType);
    formData.append("doorStyle", doorStyle);
    formData.append("doors", doors);
    formData.append("drawers", drawers);
    formData.append("worktopMetres", worktopMetres);
    formData.append("firstName", contact.firstName);
    formData.append("lastName", contact.lastName);
    formData.append("email", contact.email);
    formData.append("mobile", contact.mobile);
    formData.append("city", contact.city);

    photos.forEach((file) => formData.append("photos", file));

    fetch("/api/kitchen-wrapping-quote", {
      method: "POST",
      body: formData,
    })
      .then(async (response) => {
        if (!response.ok) {
          const data = (await response.json().catch(() => null)) as
            | { error?: string }
            | null;
          throw new Error(data?.error || "Something went wrong while sending your quote.");
        }
        setSubmitted(true);
      })
      .catch((error: unknown) => {
        const message =
          error instanceof Error
            ? error.message
            : "Something went wrong while sending your quote.";
        setSubmitError(message);
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  if (submitted) {
    return (
      <div className="quote-shell card-float p-6 md:p-8">
        <h2 className="text-2xl font-semibold text-foreground">Thanks, quote request received.</h2>
        <p className="mt-3 text-muted">
          We have your kitchen wrapping details and photos. Our team will contact you
          shortly with next steps for your fixed quote.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="quote-shell card-float p-4 md:p-6" noValidate>
      <ol className="quote-stepper">
        {STEP_TITLES.map((title, idx) => {
          const stepNumber = idx + 1;
          const status =
            stepNumber < step ? "done" : stepNumber === step ? "active" : "todo";
          return (
            <li key={title} className={`quote-step ${status}`}>
              <span className="quote-step-badge">{stepNumber < step ? "✓" : stepNumber}</span>
              <span className="quote-step-label">{title}</span>
            </li>
          );
        })}
      </ol>

      <div className="mt-6 rounded-xl border border-border bg-card p-4 md:p-6">
        {step === 1 && (
          <>
            <h2 className="text-2xl font-semibold text-foreground">
              What type of quote do you need?
            </h2>
            <p className="mt-2 text-sm text-muted">Choose one option to continue.</p>
            <div className="mt-5 grid gap-4 md:grid-cols-3">
              {quoteTypeCards.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setQuoteType(item.id)}
                  className={`quote-option-card ${
                    quoteType === item.id ? "quote-option-card-active" : ""
                  }`}
                >
                  <div className="relative h-40 w-full overflow-hidden rounded-lg">
                    <Image src={item.image} alt={item.title} fill className="object-cover" />
                  </div>
                  <h3 className="mt-3 text-lg font-semibold text-foreground">{item.title}</h3>
                  <p className="mt-1 text-sm text-muted">{item.desc}</p>
                </button>
              ))}
            </div>
          </>
        )}

        {step === 2 && (
          <>
            <h2 className="text-2xl font-semibold text-foreground">Tell us about your kitchen</h2>
            <p className="mt-2 text-sm text-muted">
              Add your measurements so we can produce a realistic quote.
            </p>

            {quoteType !== "worktop" && (
              <>
                <h3 className="mt-6 text-lg font-semibold text-foreground">
                  Style of doors and drawers
                </h3>
                <div className="mt-3 grid grid-cols-2 gap-4 lg:grid-cols-4">
                  {doorStyleCards.map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setDoorStyle(item.id)}
                      className={`quote-style-card ${
                        doorStyle === item.id ? "quote-option-card-active" : ""
                      } h-full`}
                    >
                      <div className="relative aspect-[4/5] w-full overflow-hidden rounded-md bg-black/40 p-2">
                        <Image
                          src={item.image}
                          alt={item.label}
                          fill
                          className="object-contain"
                          sizes="(max-width: 1024px) 50vw, 25vw"
                        />
                      </div>
                      <span className="mt-3 block text-center text-sm font-medium leading-snug text-foreground">
                        {item.label}
                      </span>
                    </button>
                  ))}
                </div>

                {doorStyle === "other" && (
                  <div className="mt-4 rounded-lg border border-accent/50 bg-accent/10 p-3 text-sm text-foreground">
                    Your door style may need new flat doors before wrapping. We will
                    include this option in your quote if required.
                  </div>
                )}
              </>
            )}

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {quoteType !== "worktop" && (
                <>
                  <label className="text-sm text-muted">
                    Number of doors
                    <input
                      type="number"
                      min={1}
                      value={doors}
                      onChange={(e) => setDoors(e.target.value)}
                      className="mt-1 w-full rounded border border-border bg-background px-3 py-2 text-foreground"
                      placeholder="e.g. 12"
                    />
                  </label>
                  <label className="text-sm text-muted">
                    Number of drawers
                    <input
                      type="number"
                      min={0}
                      value={drawers}
                      onChange={(e) => setDrawers(e.target.value)}
                      className="mt-1 w-full rounded border border-border bg-background px-3 py-2 text-foreground"
                      placeholder="e.g. 5"
                    />
                  </label>
                </>
              )}

              {(quoteType === "complete" || quoteType === "worktop") && (
                <label className="text-sm text-muted sm:col-span-2">
                  Metres of worktop (include sink and hob length)
                  <input
                    type="number"
                    min={0.1}
                    step={0.1}
                    value={worktopMetres}
                    onChange={(e) => setWorktopMetres(e.target.value)}
                    className="mt-1 w-full rounded border border-border bg-background px-3 py-2 text-foreground"
                    placeholder="e.g. 4.8"
                  />
                </label>
              )}
            </div>
          </>
        )}

        {step === 3 && (
          <>
            <h2 className="text-2xl font-semibold text-foreground">
              Upload a minimum of 2 kitchen photos
            </h2>
            <p className="mt-2 text-sm text-muted">
              Include wide room shots and close-ups of any damaged areas.
            </p>
            <label className="mt-5 block cursor-pointer rounded-xl border border-dashed border-border bg-background p-8 text-center">
              <span className="block text-lg font-medium text-foreground">
                Drag and drop or click to upload
              </span>
              <span className="mt-1 block text-sm text-muted">JPG, PNG or WEBP</span>
              <input
                type="file"
                accept="image/*"
                multiple
                className="sr-only"
                onChange={(e) => setPhotos(Array.from(e.target.files ?? []))}
              />
            </label>
            <p className={`mt-3 text-sm ${photos.length >= 2 ? "text-accent" : "text-muted"}`}>
              {photos.length} photo{photos.length === 1 ? "" : "s"} selected (minimum 2 required)
            </p>
            {photos.length > 0 && (
              <ul className="mt-3 space-y-1 text-sm text-muted">
                {photos.map((file) => (
                  <li key={file.name}>{file.name}</li>
                ))}
              </ul>
            )}
          </>
        )}

        {step === 4 && (
          <>
            <h2 className="text-2xl font-semibold text-foreground">Enter your contact details</h2>
            <p className="mt-2 text-sm text-muted">
              We only use this to send your quote and arrange your survey.
            </p>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <label className="text-sm text-muted">
                First name
                <input
                  type="text"
                  value={contact.firstName}
                  onChange={(e) => setContact({ ...contact, firstName: e.target.value })}
                  className="mt-1 w-full rounded border border-border bg-background px-3 py-2 text-foreground"
                />
              </label>
              <label className="text-sm text-muted">
                Last name
                <input
                  type="text"
                  value={contact.lastName}
                  onChange={(e) => setContact({ ...contact, lastName: e.target.value })}
                  className="mt-1 w-full rounded border border-border bg-background px-3 py-2 text-foreground"
                />
              </label>
              <label className="text-sm text-muted sm:col-span-2">
                Email address
                <input
                  type="email"
                  value={contact.email}
                  onChange={(e) => setContact({ ...contact, email: e.target.value })}
                  className="mt-1 w-full rounded border border-border bg-background px-3 py-2 text-foreground"
                />
              </label>
              <label className="text-sm text-muted">
                Mobile number
                <input
                  type="tel"
                  value={contact.mobile}
                  onChange={(e) => setContact({ ...contact, mobile: e.target.value })}
                  className="mt-1 w-full rounded border border-border bg-background px-3 py-2 text-foreground"
                />
              </label>
              <label className="text-sm text-muted">
                City / town
                <input
                  type="text"
                  value={contact.city}
                  onChange={(e) => setContact({ ...contact, city: e.target.value })}
                  className="mt-1 w-full rounded border border-border bg-background px-3 py-2 text-foreground"
                />
              </label>
            </div>
          </>
        )}
      </div>

      <div className="mt-5 flex items-center justify-between gap-3">
        <button
          type="button"
          onClick={() => setStep((s) => Math.max(1, s - 1))}
          disabled={step === 1 || isSubmitting}
          className="btn-secondary disabled:cursor-not-allowed disabled:opacity-50"
        >
          Previous
        </button>
        {step < 4 ? (
          <button
            type="button"
            onClick={() => !isSubmitting && stepIsValid && setStep((s) => Math.min(4, s + 1))}
            disabled={!stepIsValid || isSubmitting}
            className="btn-primary disabled:cursor-not-allowed disabled:opacity-50"
          >
            Next
          </button>
        ) : (
          <button
            type="submit"
            disabled={!stepIsValid || isSubmitting}
            className="btn-primary disabled:opacity-50"
          >
            {isSubmitting ? "Sending..." : "Submit quote request"}
          </button>
        )}
      </div>
      {submitError && <p className="mt-3 text-sm text-red-400">{submitError}</p>}
    </form>
  );
}
