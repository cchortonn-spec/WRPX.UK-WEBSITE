"use client";

import { useSyncExternalStore } from "react";
import { isHalloweenActive } from "@/lib/seasonal-config";

/**
 * Seasonal Halloween overlay: cobwebs in the corners, a faint glow and a few
 * drifting bats. Purely decorative — it never blocks clicks (pointer-events: none).
 *
 * The date check runs in the visitor's browser (not at build time), so the
 * overlay switches itself off on the end date set in lib/seasonal-config.ts.
 * All styling lives in app/globals.css (search for "Halloween").
 */

const WEB_PATH =
  "M0 0L200 0M0 0L190.2 61.8M0 0L161.8 117.6M0 0L117.6 161.8M0 0L61.8 190.2M0 0L0 200" +
  "M40 0Q30.8 4.9 38 12.4Q27.8 14.2 32.4 23.5Q22.1 22.1 23.5 32.4Q14.2 27.8 12.4 38Q4.9 30.8 0 40" +
  "M80 0Q61.6 9.8 76.1 24.7Q55.6 28.3 64.7 47Q44.1 44.1 47 64.7Q28.3 55.6 24.7 76.1Q9.8 61.6 0 80" +
  "M120 0Q92.4 14.6 114.1 37.1Q83.4 42.5 97.1 70.5Q66.2 66.2 70.5 97.1Q42.5 83.4 37.1 114.1Q14.6 92.4 0 120" +
  "M160 0Q123.3 19.5 152.2 49.4Q111.2 56.7 129.4 94Q88.2 88.2 94 129.4Q56.7 111.2 49.4 152.2Q19.5 123.3 0 160";

const BAT_PATH =
  "M32 8C30 4 28 3 26 2L27 9C22 5 14 4 2 6C8 9 10 14 9 20C12 17 16 17 19 21C21 18 25 18 27 22C29 20 31 20 32 24C33 20 35 20 37 22C39 18 43 18 45 21C48 17 52 17 55 20C54 14 56 9 62 6C50 4 42 5 37 9L38 2C36 3 34 4 32 8Z";

// The outer div places + flips the web into its corner; the inner svg does the
// gentle sway/shimmer (kept separate so the two transforms never clash).
function Cobweb({ className }: { className: string }) {
  return (
    <div className={`halloween-web-wrap ${className}`}>
      <svg
        className="halloween-web"
        viewBox="0 0 200 200"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
      >
        <path d={WEB_PATH} />
      </svg>
    </div>
  );
}

function Bat({ className }: { className: string }) {
  return (
    <div className={`halloween-bat ${className}`}>
      <svg viewBox="0 0 64 32" fill="currentColor">
        <path d={BAT_PATH} />
      </svg>
    </div>
  );
}

const subscribe = () => () => {};

export function HalloweenOverlay() {
  // Server render + first paint = false (nothing shown), then the browser
  // checks the date. This avoids any hydration mismatch.
  const active = useSyncExternalStore(
    subscribe,
    () => isHalloweenActive(),
    () => false
  );

  if (!active) return null;

  return (
    <div className="halloween-overlay" aria-hidden="true">
      <div className="halloween-glow" />
      <Cobweb className="halloween-web-tl" />
      <Cobweb className="halloween-web-tr" />
      <Cobweb className="halloween-web-bl" />
      <Cobweb className="halloween-web-br" />
      <Bat className="halloween-bat-1" />
      <Bat className="halloween-bat-2" />
      <Bat className="halloween-bat-3" />
      <Bat className="halloween-bat-4" />
    </div>
  );
}
