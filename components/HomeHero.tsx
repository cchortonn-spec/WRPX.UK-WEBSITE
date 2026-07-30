import { useImmersiveHero } from "@/lib/hero-config";
import { HomeHeroClassic } from "@/components/HomeHeroClassic";
import { HomeHeroImmersive } from "@/components/HomeHeroImmersive";

/**
 * Homepage hero entry point.
 * Toggle in lib/hero-config.ts: useImmersiveHero true/false to switch layouts.
 */
export function HomeHero() {
  if (useImmersiveHero) {
    return <HomeHeroImmersive />;
  }
  return <HomeHeroClassic />;
}
