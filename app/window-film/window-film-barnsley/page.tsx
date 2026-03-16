import type { Metadata } from "next";
import { WindowFilmLocationTemplate } from "@/components/WindowFilmLocationTemplate";

export const metadata: Metadata = {
  title: "Window Film Barnsley | Privacy Film & Frosted Film Installation | WRPX",
  description:
    "Window film for Barnsley homes and businesses. Frosted window film, privacy film and solar control professionally installed. Free survey from WRPX across South Yorkshire.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/window-film/window-film-barnsley/",
  },
};

export default function WindowFilmBarnsleyPage() {
  return (
    <WindowFilmLocationTemplate
      city="Barnsley"
      title="Window film Barnsley — frosted, privacy and solar film across the Barnsley area"
      excludeFromLocations="Barnsley"
      introContent={
        <>
          <p>
            Barnsley&apos;s housing — from the terraces in the town centre to the newer estates around Dodworth and Royston — generates a steady stream of the jobs we do most: bathroom windows that need obscuring, front-facing living rooms where homeowners want privacy without net curtains, and ground-floor extensions and conservatories that need solar control to be usable in summer.
          </p>
          <p className="mt-4">
            For Barnsley businesses, we install privacy film on office partitions and glass frontages, manifestation for compliance, and solar control film for commercial premises. We&apos;re based in South Yorkshire and typically survey within the week. Call 07398 395417 or book online.
          </p>
        </>
      }
    />
  );
}
