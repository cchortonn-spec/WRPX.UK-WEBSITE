"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";

/** Any link with this href opens the pop-up instead of jumping. Also works as a deep link: /kitchen-wrapping-quote/#brochures */
export const RESOURCES_HASH = "#brochures";

const NUDGE_KEY = "wrpx-resources-nudge-seen";
const NUDGE_DELAY_MS = 12000;

const brochures = [
  {
    brand: "3M DI-NOC",
    title: "Architectural Finishes",
    pages: 85,
    cover: "/images/brochure-covers/3m-dinoc-sample-book-cover.jpg",
    href: "/docs/vinyl-sample-books/3m-dinoc-kitchen-wrap-finishes-sample-book.pdf",
    bestFor: "Woodgrains, stone and premium textures.",
  },
  {
    brand: "BENIF",
    title: "Architectural Film 2025–26",
    pages: 52,
    cover: "/images/brochure-covers/benif-sample-book-cover.jpg",
    href: "/docs/vinyl-sample-books/benif-kitchen-vinyl-finishes-sample-book-2025.pdf",
    bestFor: "Modern matts and clean contemporary colours.",
  },
  {
    brand: "Cover Styl",
    title: "Collection Vol. IV",
    pages: 65,
    cover: "/images/brochure-covers/cover-styl-sample-book-cover.jpg",
    href: "/docs/vinyl-sample-books/cover-styl-architectural-vinyl-pattern-book.pdf",
    bestFor: "Bold marbles, patterns and statement looks.",
  },
] as const;

const tools = [
  {
    href: "/wrap-visualiser/",
    title: "Wrap visualiser",
    desc: "See different finishes on real kitchens before you choose.",
    image: "/images/wrap-visualiser-hero-matt-ivory-kitchen-wide.jpg",
  },
  {
    href: "/architectural-vinyl-finishes/",
    title: "Finishes guide",
    desc: "Matt, woodgrain, stone and gloss — what suits your kitchen.",
    image: "/images/vinyl-finish-samples/coverstyl/coverstyl-nh80-sand-oak.jpg",
  },
  {
    href: "/gallery/",
    title: "Our latest jobs",
    desc: "Real kitchens we've wrapped across South Yorkshire.",
    image: "/images/kitchen-wrapping-projects/white-gloss-kitchen-wrap-doncaster-01.jpg",
  },
] as const;

export function QuoteResources() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [open, setOpen] = useState(false);
  const [nudge, setNudge] = useState(false);

  const markSeen = useCallback(() => {
    try {
      sessionStorage.setItem(NUDGE_KEY, "1");
    } catch {}
  }, []);

  const openResources = useCallback(() => {
    setNudge(false);
    markSeen();
    setOpen(true);
  }, [markSeen]);

  const closeResources = useCallback(() => {
    setOpen(false);
    if (window.location.hash === RESOURCES_HASH) {
      history.replaceState(null, "", window.location.pathname + window.location.search);
    }
  }, []);

  // Open from any #brochures link, or when the page is loaded with #brochures.
  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      if (window.location.hash === RESOURCES_HASH) openResources();
    });

    const onClick = (event: MouseEvent) => {
      const link = (event.target as HTMLElement | null)?.closest?.(`a[href="${RESOURCES_HASH}"]`);
      if (!link) return;
      event.preventDefault();
      openResources();
    };
    document.addEventListener("click", onClick);
    return () => {
      cancelAnimationFrame(frame);
      document.removeEventListener("click", onClick);
    };
  }, [openResources]);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (open && !dialog.open) dialog.showModal();
    if (!open && dialog.open) dialog.close();
    document.documentElement.classList.toggle("qr-locked", open);
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeResources();
    };
    if (open) document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.documentElement.classList.remove("qr-locked");
    };
  }, [open, closeResources]);

  // Gentle one-time prompt — waits until the visitor isn't mid-typing.
  useEffect(() => {
    try {
      if (sessionStorage.getItem(NUDGE_KEY)) return;
    } catch {}

    let timer: ReturnType<typeof setTimeout>;
    const tryShow = () => {
      const typing = document.activeElement?.matches("input, textarea, select");
      if (typing) {
        timer = setTimeout(tryShow, 6000);
        return;
      }
      setNudge(true);
    };
    timer = setTimeout(tryShow, NUDGE_DELAY_MS);
    return () => clearTimeout(timer);
  }, []);

  const dismissNudge = () => {
    setNudge(false);
    markSeen();
  };

  return (
    <>
      {nudge && !open && (
        <div className="qr-nudge" role="status">
          <div className="qr-nudge-covers" aria-hidden="true">
            {brochures.map((book) => (
              <span key={book.brand} className="qr-nudge-cover">
                <Image src={book.cover} alt="" fill sizes="40px" className="object-cover" />
              </span>
            ))}
          </div>
          <div className="min-w-0">
            <p className="qr-nudge-title">Choosing a finish?</p>
            <p className="qr-nudge-text">See our sample books &amp; visualiser</p>
          </div>
          <button type="button" onClick={openResources} className="qr-nudge-open">
            Take a look
          </button>
          <button
            type="button"
            onClick={dismissNudge}
            className="qr-nudge-close"
            aria-label="Dismiss"
          >
            <CloseIcon />
          </button>
        </div>
      )}

      <dialog
        ref={dialogRef}
        className="qr-dialog"
        aria-labelledby="qr-title"
        onClose={closeResources}
        onClick={(event) => {
          if (event.target === event.currentTarget) closeResources();
        }}
      >
        {open && (
          <div className="qr-panel">
            <div className="qr-head">
              <div>
                <p className="kw-kicker">Get inspired</p>
                <h2 id="qr-title" className="qr-title">
                  Sample books &amp; design tools
                </h2>
                <p className="qr-sub">
                  Browse hundreds of real finishes, then mention your favourites when we call — or
                  we&apos;ll bring samples to your free survey.
                </p>
              </div>
              <button
                type="button"
                onClick={closeResources}
                className="qr-close"
                aria-label="Close"
              >
                <CloseIcon />
              </button>
            </div>

            <div className="qr-books">
              {brochures.map((book) => (
                <article key={book.brand} className="qr-book">
                  <a
                    href={book.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="qr-book-cover"
                    aria-label={`View the ${book.brand} sample book`}
                  >
                    <Image
                      src={book.cover}
                      alt={`${book.brand} ${book.title} sample book cover`}
                      fill
                      sizes="(max-width: 640px) 30vw, 200px"
                      className="object-cover"
                    />
                  </a>
                  <div className="qr-book-body">
                    <p className="qr-book-brand">{book.brand}</p>
                    <p className="qr-book-title">{book.title}</p>
                    <p className="qr-book-meta">
                      {book.pages} pages · PDF · {book.bestFor}
                    </p>
                    <div className="qr-book-actions">
                      <a
                        href={book.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="qr-btn qr-btn-view"
                      >
                        <EyeIcon /> View
                      </a>
                      <a href={book.href} download className="qr-btn">
                        <DownloadIcon /> Download
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <p className="qr-note">
              Sample books are around 17&nbsp;MB each — best opened on Wi-Fi.
            </p>

            <div className="qr-tools">
              {tools.map((tool) => (
                <Link key={tool.href} href={tool.href} className="qr-tool" onClick={closeResources}>
                  <span className="qr-tool-image">
                    <Image src={tool.image} alt="" fill sizes="96px" className="object-cover" />
                  </span>
                  <span className="min-w-0">
                    <span className="qr-tool-title">
                      {tool.title} <span aria-hidden="true">→</span>
                    </span>
                    <span className="qr-tool-desc">{tool.desc}</span>
                  </span>
                </Link>
              ))}
            </div>
          </div>
        )}
      </dialog>
    </>
  );
}

function CloseIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-4 w-4"
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

function EyeIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

function DownloadIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M12 3v12m0 0-4-4m4 4 4-4M4 17v3h16v-3" />
    </svg>
  );
}
