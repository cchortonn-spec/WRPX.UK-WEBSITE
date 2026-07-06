import type { Metadata } from "next";
import { WindowFilmLocationTemplate } from "@/components/WindowFilmLocationTemplate";

export const metadata: Metadata = {
  title: "Window Film Installer Bradford | Frosted, Privacy & Solar | WRPX",
  description:
    "Window film installation across Bradford — frosted bathroom film, privacy film, solar control and glass manifestation. WRPX — professional installers, 7+ years experience.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/window-film/window-film-bradford/",
  },
};

export default function WindowFilmBradfordPage() {
  return (
    <WindowFilmLocationTemplate
      city="Bradford"
      title="Window film Bradford — frosted, privacy and solar film for Bradford homes and businesses"
      excludeFromLocations="Bradford"
      introContent={
        <>
          <p>
            Bradford is a large West Yorkshire city with a varied housing stock — Victorian terraces
            in Manningham and Toller Lane, large Edwardian semis in Heaton and Saltaire, 1960s–80s
            estates across the district, and modern commercial premises. WRPX installs window film
            across the full BD postcode area, from Bradford city centre out to Shipley, Bingley,
            Keighley and Ilkley.
          </p>
          <p className="mt-4">
            Common Bradford window film requests: frosted film for Victorian bathrooms with original
            sash windows, one-way mirror film for ground-floor front rooms in terraced properties,
            solar control for conservatories and glazed extensions in Wharfedale properties, and
            glass manifestation for Bradford business premises. Free survey, usually within the week.
            Premium films from 3M, Avery Dennison, Hexis and CoverStyl on every job.
          </p>
        </>
      }
    />
  );
}
