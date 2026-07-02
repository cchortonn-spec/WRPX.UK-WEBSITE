import type { Metadata } from "next";
import { WindowFilmLocationTemplate } from "@/components/WindowFilmLocationTemplate";

export const metadata: Metadata = {
  title: "Window Film Installer Manchester | Frosted, Privacy & Solar | WRPX",
  description:
    "Window film installation across Manchester — frosted bathroom film, privacy film, solar control and commercial glass manifestation. WRPX — professional installers, 7+ years experience.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/window-film/window-film-manchester/",
  },
};

export default function WindowFilmManchesterPage() {
  return (
    <WindowFilmLocationTemplate
      city="Manchester"
      title="Window film Manchester — frosted, privacy and solar film for Manchester homes and businesses"
      excludeFromLocations="Manchester"
      introContent={
        <>
          <p>
            Manchester is one of the UK&apos;s largest cities, with a huge variety of property types —
            Victorian terraces in Levenshulme, Rusholme and Chorlton, converted industrial buildings
            in Ancoats and Salford, large Edwardian semis in Didsbury and Whalley Range, and a
            substantial commercial and hospitality sector across the city centre. WRPX covers Manchester
            and Greater Manchester for professional window film installation: frosted and privacy film
            for homes, solar control for commercial offices and glazed retail units, and glass
            manifestation for DDA compliance.
          </p>
          <p className="mt-4">
            We serve homeowners, landlords and commercial clients across central Manchester, Salford,
            Trafford, Stockport and surrounding areas. Free survey, usually within the week. Premium
            3M, Avery Dennison, Hexis and CoverStyl films on every installation. 5-year guarantee on
            materials and workmanship.
          </p>
        </>
      }
    />
  );
}
