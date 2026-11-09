import { useSyncExternalStore } from "react";
import { isSeasonActive, type Season } from "@/lib/seasonal-config";

const subscribe = () => () => {};

/**
 * Server render + first paint = false (nothing shown), then the browser checks
 * the date. This avoids any hydration mismatch on cached pages.
 */
export function useSeasonActive(season: Season) {
  return useSyncExternalStore(
    subscribe,
    () => isSeasonActive(season),
    () => false
  );
}
