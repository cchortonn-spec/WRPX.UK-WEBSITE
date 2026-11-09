/**
 * Seasonal overlays — one place to switch them on and off.
 *
 * EASY UNDO: change a season's `enabled` to false and save. Its overlay is gone.
 * Each season switches itself on at midnight (visitor's local time) at the
 * START of its `startsOn` date, and off at the START of its `endsOn` date,
 * so you can't forget it.
 *
 * PREVIEW: add `?season=christmas` to any page address to see a season early.
 * It stays on while you browse in that tab; `?season=off` turns the preview off.
 *
 * To add a new season: add an entry below, build its overlay component, and
 * mount it in components/SiteChrome.tsx.
 */
type SeasonConfig = {
  enabled: boolean;
  startsOn?: string;
  endsOn: string;
};

const seasonList = {
  /** From 9 Nov through New Year's Day, gone on 2 Jan. */
  christmas: {
    enabled: true,
    startsOn: "2026-11-09",
    endsOn: "2027-01-02",
  },
} satisfies Record<string, SeasonConfig>;

export type Season = keyof typeof seasonList;
export const seasons: Record<Season, SeasonConfig> = seasonList;

const PREVIEW_KEY = "wrpx-season-preview";

function previewedSeason(): string | null {
  if (typeof window === "undefined") return null;
  const param = new URLSearchParams(window.location.search).get("season");
  try {
    if (param === "off") sessionStorage.removeItem(PREVIEW_KEY);
    else if (param) sessionStorage.setItem(PREVIEW_KEY, param);
    return sessionStorage.getItem(PREVIEW_KEY);
  } catch {
    return param && param !== "off" ? param : null;
  }
}

function midnight(date: string) {
  return new Date(`${date}T00:00:00`).getTime();
}

export function isSeasonActive(season: Season, now: Date = new Date()): boolean {
  if (previewedSeason() === season) return true;
  const { enabled, startsOn, endsOn } = seasons[season];
  if (!enabled) return false;
  const time = now.getTime();
  if (startsOn && time < midnight(startsOn)) return false;
  return time < midnight(endsOn);
}
