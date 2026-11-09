"use client";

import { DragEvent, FormEvent, useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { track } from "@vercel/analytics";
import { RESOURCES_HASH } from "@/components/QuoteResources";

type QuoteType = "complete" | "cabinet" | "worktop" | "";
type DoorStyle = "j-pull" | "shaker" | "flat" | "other" | "";

type ContactInfo = {
  firstName: string;
  lastName: string;
  email: string;
  mobile: string;
  city: string;
};

const STEP_TITLES = ["Your project", "Kitchen details", "Photos", "Your details"] as const;
const MAX_PHOTOS = 12;

const quoteTypeCards = [
  {
    id: "complete" as const,
    title: "Complete kitchen wrap",
    desc: "Doors, drawers, panels, plinths, trims, worktops and upstands.",
    price: "From £1,099",
    badge: "Most popular",
    image: "/images/home/kitchen-home-new-02.png",
  },
  {
    id: "cabinet" as const,
    title: "Cabinets only",
    desc: "Doors, drawers, panels, plinths and trims.",
    price: "Doors from £45",
    badge: "",
    image: "/images/home/kitchen-home-new-04.png",
  },
  {
    id: "worktop" as const,
    title: "Worktops only",
    desc: "Worktops and upstands. Splashbacks quoted separately.",
    price: "From £380",
    badge: "",
    image: "/images/Marble-worktop-potefract/marble-effect-worktop-wrap-pontefract-01.jpeg",
  },
];

const doorStyleCards = [
  { id: "j-pull" as const, label: "J-pull", image: "/images/door-styles/j-pull-bright.png" },
  { id: "shaker" as const, label: "Shaker", image: "/images/door-styles/shaker-bright.png" },
  { id: "flat" as const, label: "Flat / slab", image: "/images/door-styles/flat-bright.png" },
  {
    id: "other" as const,
    label: "Other / not sure",
    image: "/images/door-styles/other-bright.png",
  },
];

const photoIdeas = [
  "The whole room",
  "Doors & drawers close-up",
  "Worktops",
  "Any chips or damage",
];

/** Scrolls so the element sits just under the sticky header (which is taller while the Christmas banner shows). */
function scrollBelowHeader(element: HTMLElement | null, onlyIfHidden: boolean) {
  if (!element) return;
  const headerBottom = document.querySelector("header")?.getBoundingClientRect().bottom ?? 0;
  const top = element.getBoundingClientRect().top;
  if (onlyIfHidden && top >= headerBottom) return;
  window.scrollTo({ top: window.scrollY + top - headerBottom - 16, behavior: "smooth" });
}

const plural = (count: number, word: string) => `${count} ${word}${count === 1 ? "" : "s"}`;
const typeLabel = (id: QuoteType) => quoteTypeCards.find((card) => card.id === id)?.title ?? "";
const styleLabel = (id: DoorStyle) => doorStyleCards.find((card) => card.id === id)?.label ?? "";

export function KitchenWrappingQuoteWizard() {
  const topRef = useRef<HTMLDivElement>(null);
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
  const [dragging, setDragging] = useState(false);
  const [contact, setContact] = useState<ContactInfo>({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    city: "",
  });

  const previews = useMemo(() => photos.map((file) => URL.createObjectURL(file)), [photos]);
  useEffect(() => () => previews.forEach((url) => URL.revokeObjectURL(url)), [previews]);

  const needsDoors = quoteType === "complete" || quoteType === "cabinet";
  const needsWorktop = quoteType === "complete" || quoteType === "worktop";

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

  const hint = useMemo(() => {
    if (stepIsValid) return "";
    if (step === 1) return "Pick an option to continue";
    if (step === 2) {
      if (quoteType === "cabinet" && !doorStyle) return "Choose your door style";
      if (needsDoors && !(Number(doors) > 0)) return "Add how many doors you have";
      if (needsWorktop && !(Number(worktopMetres) > 0)) return "Add your worktop length";
    }
    if (step === 3) {
      const left = 2 - photos.length;
      return `Add ${left} more photo${left === 1 ? "" : "s"}`;
    }
    if (step === 4) return "Fill in all your details to send";
    return "";
  }, [
    stepIsValid,
    step,
    quoteType,
    doorStyle,
    needsDoors,
    needsWorktop,
    doors,
    worktopMetres,
    photos.length,
  ]);

  const goTo = (next: number) => {
    setStep(Math.min(4, Math.max(1, next)));
    requestAnimationFrame(() => scrollBelowHeader(topRef.current, true));
  };

  const chooseType = (id: Exclude<QuoteType, "">) => {
    setQuoteType(id);
    setTimeout(() => goTo(2), 320);
  };

  const addPhotos = (files: FileList | null) => {
    if (!files) return;
    const incoming = Array.from(files).filter(
      (file) => file.type.startsWith("image/") || /\.(heic|heif)$/i.test(file.name),
    );
    setPhotos((current) => {
      const seen = new Set(current.map((file) => `${file.name}-${file.size}`));
      const fresh = incoming.filter((file) => !seen.has(`${file.name}-${file.size}`));
      return [...current, ...fresh].slice(0, MAX_PHOTOS);
    });
  };

  const onDrop = (event: DragEvent<HTMLLabelElement>) => {
    event.preventDefault();
    setDragging(false);
    addPhotos(event.dataTransfer.files);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (step < 4) {
      if (stepIsValid) goTo(step + 1);
      return;
    }
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
          const data = (await response.json().catch(() => null)) as { error?: string } | null;
          throw new Error(data?.error || "Something went wrong while sending your quote.");
        }
        track("Quote Form Submitted", {
          path: window.location.pathname,
          form: "kitchen-wrapping",
        });
        setSubmitted(true);
        requestAnimationFrame(() => scrollBelowHeader(topRef.current, false));
      })
      .catch((error: unknown) => {
        const message =
          error instanceof Error ? error.message : "Something went wrong while sending your quote.";
        setSubmitError(message);
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return <div ref={topRef}>{submitted ? renderSuccess() : renderForm()}</div>;

  function renderSuccess() {
    return (
      <div className="qw-shell qw-success">
        <span className="qw-success-tick" aria-hidden="true">
          <TickIcon />
        </span>
        <h2 className="qw-title mt-5">
          Thanks{contact.firstName ? `, ${contact.firstName.trim()}` : ""} — we&apos;ve got it!
        </h2>
        <p className="qw-sub mx-auto max-w-md">
          Your kitchen details and photos are with our team. Here&apos;s what happens next:
        </p>
        <ol className="qw-next">
          <li>
            <span className="qw-next-num">1</span>
            We review your photos and measurements
          </li>
          <li>
            <span className="qw-next-num">2</span>
            We get in touch with your fixed quote
          </li>
          <li>
            <span className="qw-next-num">3</span>
            Book your free survey — we bring samples
          </li>
        </ol>
        <div className="qw-success-actions">
          <a href={RESOURCES_HASH} className="kw-btn-primary">
            Browse sample books
          </a>
          <Link href="/wrap-visualiser/" className="kw-btn-ghost">
            Try the visualiser <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    );
  }

  function renderForm() {
    const progress = ((step - 1) / (STEP_TITLES.length - 1)) * 100;
    return (
      <form onSubmit={handleSubmit} className="qw-shell" noValidate>
        <div className="qw-top">
          <div className="qw-top-row">
            <p className="qw-step-count">
              Step <strong>{step}</strong> of {STEP_TITLES.length}
              <span className="qw-step-name"> · {STEP_TITLES[step - 1]}</span>
            </p>
            <p className="qw-time">
              <ClockIcon /> About 2 minutes
            </p>
          </div>
          <div className="qw-progress" aria-hidden="true">
            <span style={{ width: `${Math.max(progress, 4)}%` }} />
          </div>
          <ol className="qw-steps">
            {STEP_TITLES.map((title, idx) => {
              const n = idx + 1;
              const status = n < step ? "done" : n === step ? "active" : "todo";
              return (
                <li key={title} className={`qw-step qw-step-${status}`}>
                  <button
                    type="button"
                    disabled={n >= step || isSubmitting}
                    onClick={() => goTo(n)}
                    aria-current={n === step ? "step" : undefined}
                  >
                    <span className="qw-step-dot">{n < step ? <TickIcon /> : n}</span>
                    <span className="qw-step-label">{title}</span>
                  </button>
                </li>
              );
            })}
          </ol>
        </div>

        <div key={step} className="qw-panel">
          {step === 1 && (
            <>
              <h2 className="qw-title">What would you like wrapped?</h2>
              <p className="qw-sub">Tap one to get started — you can change it later.</p>
              <div className="qw-type-grid">
                {quoteTypeCards.map((item) => {
                  const active = quoteType === item.id;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => chooseType(item.id)}
                      className={`qw-type-card${active ? " qw-selected" : ""}`}
                      aria-pressed={active}
                    >
                      <span className="qw-type-image">
                        <Image
                          src={item.image}
                          alt=""
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 40vw, 260px"
                        />
                        {item.badge && <span className="qw-type-badge">{item.badge}</span>}
                      </span>
                      <span className="qw-type-body">
                        <span className="qw-type-title">{item.title}</span>
                        <span className="qw-type-desc">{item.desc}</span>
                        <span className="qw-type-price">{item.price}</span>
                      </span>
                      <span className="qw-check" aria-hidden="true">
                        <TickIcon />
                      </span>
                    </button>
                  );
                })}
              </div>
            </>
          )}

          {step === 2 && (
            <>
              <h2 className="qw-title">Tell us about your kitchen</h2>
              <p className="qw-sub">
                A rough count is fine — we confirm everything at your free survey.
              </p>

              {needsDoors && (
                <fieldset className="qw-field-group">
                  <legend className="qw-label">
                    Door style
                    {quoteType === "complete" && <span className="qw-optional">optional</span>}
                  </legend>
                  <div className="qw-style-grid">
                    {doorStyleCards.map((item) => {
                      const active = doorStyle === item.id;
                      return (
                        <button
                          key={item.id}
                          type="button"
                          onClick={() => setDoorStyle(item.id)}
                          className={`qw-style-card${active ? " qw-selected" : ""}`}
                          aria-pressed={active}
                        >
                          <span className="qw-style-image">
                            <Image
                              src={item.image}
                              alt=""
                              fill
                              className="object-cover"
                              sizes="(max-width: 640px) 45vw, 170px"
                            />
                          </span>
                          <span className="qw-style-label">{item.label}</span>
                          <span className="qw-check" aria-hidden="true">
                            <TickIcon />
                          </span>
                        </button>
                      );
                    })}
                  </div>
                  {doorStyle === "other" && (
                    <p className="qw-note">
                      Some door styles need new flat doors before wrapping. If yours do, we&apos;ll
                      include that option in your quote.
                    </p>
                  )}
                </fieldset>
              )}

              <div className="qw-counts">
                {needsDoors && (
                  <>
                    <NumberStepper
                      label="Doors"
                      value={doors}
                      min={1}
                      onChange={setDoors}
                      placeholder="12"
                    />
                    <NumberStepper
                      label="Drawers"
                      value={drawers}
                      min={0}
                      onChange={setDrawers}
                      placeholder="5"
                    />
                  </>
                )}
                {needsWorktop && (
                  <label className="qw-count qw-count-wide">
                    <span className="qw-label">Worktop length</span>
                    <span className="qw-metres">
                      <input
                        type="number"
                        inputMode="decimal"
                        min={0.1}
                        step={0.1}
                        value={worktopMetres}
                        onChange={(e) => setWorktopMetres(e.target.value)}
                        className="qw-input"
                        placeholder="4.8"
                      />
                      <span className="qw-metres-unit">metres</span>
                    </span>
                    <span className="qw-help">
                      Measure the full run, including the sink and hob.
                    </span>
                  </label>
                )}
              </div>

              <a href={RESOURCES_HASH} className="qw-inspire">
                <span className="qw-inspire-swatches" aria-hidden="true">
                  <span
                    style={{
                      backgroundImage:
                        "url(/images/vinyl-finish-samples/coverstyl/coverstyl-k1-black-mat.jpg)",
                    }}
                  />
                  <span
                    style={{
                      backgroundImage:
                        "url(/images/vinyl-finish-samples/coverstyl/coverstyl-nh80-sand-oak.jpg)",
                    }}
                  />
                  <span
                    style={{
                      backgroundImage:
                        "url(/images/vinyl-finish-samples/coverstyl/coverstyl-ne31-statuary-white.jpg)",
                    }}
                  />
                </span>
                <span>
                  <strong>Not picked a finish yet?</strong> No problem — browse our sample books
                </span>
                <span aria-hidden="true">→</span>
              </a>
            </>
          )}

          {step === 3 && (
            <>
              <h2 className="qw-title">Add a few photos</h2>
              <p className="qw-sub">
                At least 2 — phone photos are perfect. These help us price it right first time.
              </p>

              <ul className="qw-ideas">
                {photoIdeas.map((idea) => (
                  <li key={idea}>
                    <CameraIcon /> {idea}
                  </li>
                ))}
              </ul>

              <label
                className={`qw-drop${dragging ? " qw-drop-active" : ""}`}
                onDragOver={(e) => {
                  e.preventDefault();
                  setDragging(true);
                }}
                onDragLeave={() => setDragging(false)}
                onDrop={onDrop}
              >
                <span className="qw-drop-icon" aria-hidden="true">
                  <UploadIcon />
                </span>
                <span className="qw-drop-title">
                  {photos.length ? "Add more photos" : "Tap to add photos"}
                </span>
                <span className="qw-drop-text">or drag them here · JPG, PNG, HEIC</span>
                <input
                  type="file"
                  accept="image/*"
                  multiple
                  className="sr-only"
                  onChange={(e) => {
                    addPhotos(e.target.files);
                    e.target.value = "";
                  }}
                />
              </label>

              <p className={`qw-photo-count${photos.length >= 2 ? " qw-photo-count-ok" : ""}`}>
                {photos.length >= 2 ? <TickIcon /> : null}
                {photos.length} photo{photos.length === 1 ? "" : "s"} added
                {photos.length < 2 ? " · minimum 2" : " · looking good"}
              </p>

              {photos.length > 0 && (
                <ul className="qw-thumbs">
                  {photos.map((file, i) => (
                    <li key={`${file.name}-${file.size}`} className="qw-thumb">
                      {/* eslint-disable-next-line @next/next/no-img-element -- local blob previews */}
                      <img
                        src={previews[i]}
                        alt={file.name}
                        onError={(e) => (e.currentTarget.style.visibility = "hidden")}
                      />
                      <span className="qw-thumb-name">{file.name}</span>
                      <button
                        type="button"
                        className="qw-thumb-remove"
                        onClick={() =>
                          setPhotos((current) => current.filter((_, idx) => idx !== i))
                        }
                        aria-label={`Remove ${file.name}`}
                      >
                        <CloseIcon />
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </>
          )}

          {step === 4 && (
            <>
              <h2 className="qw-title">Where should we send your quote?</h2>
              <p className="qw-sub">
                Last step — we only use this to send your quote and arrange your survey.
              </p>

              <div className="qw-summary">
                <p className="qw-summary-head">Your request</p>
                <dl>
                  <div>
                    <dt>Project</dt>
                    <dd>{typeLabel(quoteType)}</dd>
                  </div>
                  {needsDoors && (
                  <div>
                    <dt>Doors &amp; drawers</dt>
                    <dd>
                      {plural(Number(doors) || 0, "door")} · {plural(Number(drawers) || 0, "drawer")}
                    </dd>
                  </div>
                )}
                {needsDoors && doorStyle && (
                  <div>
                    <dt>Door style</dt>
                    <dd>{styleLabel(doorStyle)}</dd>
                  </div>
                )}
                  {needsWorktop && (
                    <div>
                      <dt>Worktop</dt>
                      <dd>{worktopMetres} m</dd>
                    </div>
                  )}
                  <div>
                    <dt>Photos</dt>
                    <dd>{photos.length} added</dd>
                  </div>
                </dl>
                <button type="button" className="qw-summary-edit" onClick={() => goTo(1)}>
                  Edit
                </button>
              </div>

              <div className="qw-contact-grid">
                <Field
                  label="First name"
                  autoComplete="given-name"
                  value={contact.firstName}
                  onChange={(v) => setContact({ ...contact, firstName: v })}
                />
                <Field
                  label="Last name"
                  autoComplete="family-name"
                  value={contact.lastName}
                  onChange={(v) => setContact({ ...contact, lastName: v })}
                />
                <Field
                  label="Email address"
                  type="email"
                  autoComplete="email"
                  value={contact.email}
                  onChange={(v) => setContact({ ...contact, email: v })}
                  wide
                />
                <Field
                  label="Mobile number"
                  type="tel"
                  autoComplete="tel"
                  value={contact.mobile}
                  onChange={(v) => setContact({ ...contact, mobile: v })}
                />
                <Field
                  label="Town / city"
                  autoComplete="address-level2"
                  value={contact.city}
                  onChange={(v) => setContact({ ...contact, city: v })}
                />
              </div>
              <p className="qw-privacy">
                <LockIcon /> No spam, no pushy sales calls. Just your quote.
              </p>
            </>
          )}
        </div>

        <div className="qw-nav">
          {step > 1 ? (
            <button
              type="button"
              onClick={() => goTo(step - 1)}
              disabled={isSubmitting}
              className="qw-back"
            >
              <span aria-hidden="true">←</span> Back
            </button>
          ) : (
            <span />
          )}
          <div className="qw-nav-right">
            {hint && <p className="qw-hint">{hint}</p>}
            <button
              type="submit"
              disabled={!stepIsValid || isSubmitting}
              className="kw-btn-primary qw-next-btn"
            >
              {step < 4 ? (
                <>
                  Continue <span aria-hidden="true">→</span>
                </>
              ) : isSubmitting ? (
                "Sending…"
              ) : (
                <>
                  Get my free quote <span aria-hidden="true">→</span>
                </>
              )}
            </button>
          </div>
        </div>
        {submitError && <p className="qw-error">{submitError}</p>}
      </form>
    );
  }
}

function NumberStepper({
  label,
  value,
  min,
  onChange,
  placeholder,
}: {
  label: string;
  value: string;
  min: number;
  onChange: (value: string) => void;
  placeholder: string;
}) {
  const current = Number(value) || 0;
  return (
    <div className="qw-count">
      <span className="qw-label">{label}</span>
      <div className="qw-stepper">
        <button
          type="button"
          onClick={() => onChange(String(Math.max(min, current - 1)))}
          disabled={value === "" || current <= min}
          aria-label={`Fewer ${label.toLowerCase()}`}
        >
          −
        </button>
        <input
          type="number"
          inputMode="numeric"
          min={min}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          aria-label={`Number of ${label.toLowerCase()}`}
        />
        <button
          type="button"
          onClick={() => onChange(String(Math.max(min, current + 1)))}
          aria-label={`More ${label.toLowerCase()}`}
        >
          +
        </button>
      </div>
    </div>
  );
}

function Field({
  label,
  value,
  onChange,
  type = "text",
  autoComplete,
  wide = false,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  type?: string;
  autoComplete: string;
  wide?: boolean;
}) {
  return (
    <label className={`qw-field${wide ? " qw-field-wide" : ""}`}>
      <span className="qw-label">{label}</span>
      <input
        type={type}
        autoComplete={autoComplete}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="qw-input"
      />
    </label>
  );
}

function TickIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-full w-full"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="m5 12 5 5 9-10" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-3.5 w-3.5"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      aria-hidden="true"
    >
      <path d="M6 6l12 12M18 6 6 18" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-3.5 w-3.5"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  );
}

function CameraIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-3.5 w-3.5"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M4 8h3l2-3h6l2 3h3v11H4z" />
      <circle cx="12" cy="13" r="3.5" />
    </svg>
  );
}

function UploadIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-6 w-6"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M12 16V4m0 0-4 4m4-4 4 4M4 16v4h16v-4" />
    </svg>
  );
}

function LockIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-3.5 w-3.5"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="5" y="11" width="14" height="9" rx="2" />
      <path d="M8 11V8a4 4 0 0 1 8 0v3" />
    </svg>
  );
}
