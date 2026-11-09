"use client";

import { useSeasonActive } from "@/lib/use-season-active";

/**
 * Seasonal Christmas decorations: falling snow over the page, plus a string
 * of twinkling fairy lights hanging from the header. Purely decorative — they
 * never block clicks (pointer-events: none).
 *
 * The date check runs in the visitor's browser (not at build time), so they
 * switch themselves on/off on the dates set in lib/seasonal-config.ts.
 * All styling lives in app/globals.css (search for "Christmas").
 */

const FLAKE_COUNT = 18;
const LIGHT_COUNT = 20;

// One arm of a snow crystal, repeated six times round the centre.
const CRYSTAL_ARM = "M12 12V2M9.5 4.5L12 7l2.5-2.5";

function SnowCrystal() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {[0, 60, 120, 180, 240, 300].map((angle) => (
        <path key={angle} d={CRYSTAL_ARM} transform={`rotate(${angle} 12 12)`} />
      ))}
    </svg>
  );
}

export function ChristmasOverlay() {
  const active = useSeasonActive("christmas");
  if (!active) return null;

  return (
    <div className="xmas-overlay" aria-hidden="true">
      <div className="xmas-glow" />
      {Array.from({ length: FLAKE_COUNT }).map((_, i) =>
        i % 3 === 2 ? (
          <span key={i} className="xmas-flake xmas-flake-crystal">
            <SnowCrystal />
          </span>
        ) : (
          <span key={i} className="xmas-flake" />
        )
      )}
    </div>
  );
}

/** Rendered inside the header so the lights always hang from its bottom edge. */
export function ChristmasLights() {
  const active = useSeasonActive("christmas");
  if (!active) return null;

  return (
    <div className="xmas-lights" aria-hidden="true">
      {Array.from({ length: LIGHT_COUNT }).map((_, i) => (
        <span key={i} className="xmas-light" />
      ))}
    </div>
  );
}
