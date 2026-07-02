import type { Metadata } from "next";
import { WindowFilmLocationTemplate } from "@/components/WindowFilmLocationTemplate";

export const metadata: Metadata = {
  title: "Window Film Installer Nottingham | Frosted, Privacy & Solar | WRPX",
  description:
    "Window film installation across Nottingham — frosted bathroom film, privacy film, solar control and glass manifestation. WRPX — professional installers with 7+ years experience.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/window-film/window-film-nottingham/",
  },
};

export default function WindowFilmNottinghamPage() {
  return (
    <WindowFilmLocationTemplate
      city="Nottingham"
      title="Window film Nottingham — frosted, privacy and solar film for Nottingham homes and businesses"
      excludeFromLocations="Nottingham"
      introContent={
        <>
          <p>
            Nottingham has a diverse property mix — Victorian and Edwardian terraces in the Meadows,
            St Ann&apos;s and Sherwood, modern apartment developments in the city centre, and commercial
            premises across the NG1–NG9 postcodes. WRPX installs window film across Nottingham and the
            wider Nottinghamshire area: frosted privacy film for bathrooms and ground-floor windows,
            one-way mirror film for street-facing rooms, solar control film for conservatories and
            south-facing offices, and glass manifestation for commercial compliance.
          </p>
          <p className="mt-4">
            We cover NG1 through to NG16 and surrounding areas including West Bridgford, Arnold,
            Carlton, Beeston, Hucknall and Gedling. Free survey, same-week availability in most cases.
            Premium films from 3M, Avery Dennison and CoverStyl on every job.
          </p>
        </>
      }
    />
  );
}
