import type { Metadata } from "next";
import { WindowFilmLocationTemplate } from "@/components/WindowFilmLocationTemplate";

export const metadata: Metadata = {
  title: "Window Film Installer York | Frosted, Privacy & Solar Film | WRPX",
  description:
    "Window film installation across York — frosted bathroom film, privacy film, solar control for homes and offices. WRPX — Yorkshire specialists with 7+ years experience.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/window-film/window-film-york/",
  },
};

export default function WindowFilmYorkPage() {
  return (
    <WindowFilmLocationTemplate
      city="York"
      title="Window film York — frosted, privacy and solar film for York homes and businesses"
      excludeFromLocations="York"
      introContent={
        <>
          <p>
            York is a city with remarkable architectural variety — Georgian townhouses in the
            city centre, Victorian terraces in the Groves and Fishergate, large Edwardian semis
            in Acomb and Bishopthorpe, and a growing commercial and hospitality sector that demands
            professional window film solutions. WRPX installs window film across the whole York
            area — YO1 to YO32 — from frosted bathroom and front door film to solar control for
            south-facing offices and glass manifestation for business premises.
          </p>
          <p className="mt-4">
            York&apos;s period properties often have large sash windows that are overlooked from
            the street. Ground-floor privacy film is one of our most common York enquiries.
            We also install solar control film for the growing number of glazed extensions and
            conservatories on properties throughout the YO10, YO23 and YO24 postcodes. Free
            survey, usually within the week.
          </p>
        </>
      }
    />
  );
}
