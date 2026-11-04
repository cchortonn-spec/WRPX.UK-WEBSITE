"use client";

import { useSyncExternalStore } from "react";
import { isSeasonActive } from "@/lib/seasonal-config";

/**
 * Seasonal Bonfire Night overlay: warm firelight glow, firework bursts,
 * rising embers and a flickering flame in each bottom corner. Purely
 * decorative — it never blocks clicks (pointer-events: none).
 *
 * The date check runs in the visitor's browser (not at build time), so the
 * overlay switches itself off on the end date set in lib/seasonal-config.ts.
 * All styling lives in app/globals.css (search for "Bonfire Night").
 */

const FLAME_OUTER =
  "M32 2C36 18 50 28 54 46C58 64 50 86 32 94C14 86 6 66 10 48C12 38 18 32 22 24C22 34 26 40 30 42C28 30 28 16 32 2Z";
const FLAME_INNER =
  "M32 40C35 50 44 56 44 70C44 82 38 90 32 92C26 90 20 82 20 70C20 62 25 58 28 52C29 58 31 60 33 61C31 54 30 47 32 40Z";

const SPARKS_PER_BURST = 12;
const EMBER_COUNT = 10;

function Burst({ className }: { className: string }) {
  return (
    <div className={`bonfire-burst ${className}`}>
      <span className="bonfire-rocket" />
      <span className="bonfire-flash" />
      <div className="bonfire-sparks">
        {Array.from({ length: SPARKS_PER_BURST }).map((_, i) => (
          <span key={i} className="bonfire-spark" />
        ))}
      </div>
    </div>
  );
}

// The outer div places + mirrors the flame; the svg inside flickers
// (kept separate so the two transforms never clash).
function Flame({ className }: { className: string }) {
  return (
    <div className={`bonfire-flame-wrap ${className}`}>
      <svg className="bonfire-flame" viewBox="0 0 64 96">
        <path className="bonfire-flame-outer" d={FLAME_OUTER} />
        <path className="bonfire-flame-inner" d={FLAME_INNER} />
      </svg>
    </div>
  );
}

const subscribe = () => () => {};

export function BonfireNightOverlay() {
  // Server render + first paint = false (nothing shown), then the browser
  // checks the date. This avoids any hydration mismatch.
  const active = useSyncExternalStore(
    subscribe,
    () => isSeasonActive("bonfireNight"),
    () => false
  );

  if (!active) return null;

  return (
    <div className="bonfire-overlay" aria-hidden="true">
      <div className="bonfire-glow" />
      <Burst className="bonfire-burst-1" />
      <Burst className="bonfire-burst-2" />
      <Burst className="bonfire-burst-3" />
      <Burst className="bonfire-burst-4" />
      <div className="bonfire-embers">
        {Array.from({ length: EMBER_COUNT }).map((_, i) => (
          <span key={i} className="bonfire-ember" />
        ))}
      </div>
      <Flame className="bonfire-flame-left" />
      <Flame className="bonfire-flame-right" />
    </div>
  );
}
