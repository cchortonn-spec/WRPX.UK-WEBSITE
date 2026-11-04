/**
 * Seasonal overlays — one place to switch them on and off.
 *
 * EASY UNDO: change a season's `enabled` to false and save. Its overlay is gone.
 * Each season also switches itself off automatically at midnight (visitor's
 * local time) at the START of its `endsOn` date, so you can't forget it.
 *
 * To add a new season (e.g. Christmas): add an entry below, build its overlay
 * component, and mount it in components/SiteChrome.tsx.
 */
export const seasons = {
  /** Shown through the weekend of public displays (7–8 Nov), gone on 9 Nov. */
  bonfireNight: {
    enabled: true,
    endsOn: "2026-11-09",
  },
} as const;

export type Season = keyof typeof seasons;

export function isSeasonActive(season: Season, now: Date = new Date()): boolean {
  const { enabled, endsOn } = seasons[season];
  if (!enabled) return false;
  return now.getTime() < new Date(`${endsOn}T00:00:00`).getTime();
}
