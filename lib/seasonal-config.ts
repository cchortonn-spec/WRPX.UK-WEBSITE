/**
 * Seasonal overlays — one place to switch them on and off.
 *
 * HALLOWEEN
 * - EASY UNDO: change `halloweenEnabled` to false and save. The overlay is gone.
 * - It also switches itself off automatically at midnight on `halloweenEndsOn`,
 *   so you can't forget to take it down.
 */
export const halloweenEnabled = true;

/**
 * The overlay is hidden from midnight (visitor's local time) at the START of
 * this date — so it's shown through 31 October and gone on 1 November.
 */
export const halloweenEndsOn = "2026-11-01";

export function isHalloweenActive(now: Date = new Date()): boolean {
  if (!halloweenEnabled) return false;
  return now.getTime() < new Date(`${halloweenEndsOn}T00:00:00`).getTime();
}
