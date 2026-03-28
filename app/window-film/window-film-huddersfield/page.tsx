import type { Metadata } from "next";
import { WindowFilmLocationTemplate } from "@/components/WindowFilmLocationTemplate";

export const metadata: Metadata = {
  title: "Window Film Installer Huddersfield | Privacy & Frosted | WRPX",
  description:
    "Window film installation across Huddersfield. Frosted film, privacy window film, solar control and commercial window film from WRPX — South Yorkshire specialists.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/window-film/window-film-huddersfield/",
  },
};

export default function WindowFilmHuddersfieldPage() {
  return (
    <WindowFilmLocationTemplate
      city="Huddersfield"
      title="Window film Huddersfield — frosted, privacy and solar film for Huddersfield homes and businesses"
      excludeFromLocations="Huddersfield"
      introContent={
        <>
          <p>
            Huddersfield extends our coverage northwest into West Yorkshire — an area with a lot of stone-built terrace housing, period properties and a busy commercial centre. We take on both domestic and commercial window film jobs here, generally as part of routes that combine Huddersfield with Leeds and Barnsley visits.
          </p>
          <p className="mt-4">
            If you&apos;re in Huddersfield and want a professional window film installation — frosted bathroom windows, privacy film for a street-facing room, solar control for a glass extension or conservatory, or commercial film for an office or retail unit — get in touch. We&apos;ll survey and quote, and we&apos;re in the area regularly.
          </p>
        </>
      }
    />
  );
}
