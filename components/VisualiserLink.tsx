"use client";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

const VISUALISER_URL = "https://before-after-ai.coverstyl.com/?lang=en";

type VisualiserLinkProps = {
  className?: string;
  children: React.ReactNode;
  /** Where on the page this button sits, so we can see which one people click. */
  location: string;
};

export function VisualiserLink({
  className,
  children,
  location,
}: VisualiserLinkProps) {
  return (
    <a
      href={VISUALISER_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      onClick={() => {
        if (typeof window.gtag === "function") {
          window.gtag("event", "visualiser_click", {
            link_location: location,
          });
        }
      }}
    >
      {children}
    </a>
  );
}
