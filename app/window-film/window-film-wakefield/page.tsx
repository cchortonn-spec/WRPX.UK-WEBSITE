import type { Metadata } from "next";
import { WindowFilmLocationTemplate } from "@/components/WindowFilmLocationTemplate";

export const metadata: Metadata = {
  title: "Window Film Installer Wakefield | Frosted, Privacy & Solar | WRPX",
  description:
    "Window film installation across Wakefield — frosted bathroom film, privacy film, solar control and glass manifestation for homes and businesses. WRPX — 7+ years experience.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/window-film/window-film-wakefield/",
  },
};

export default function WindowFilmWakefieldPage() {
  return (
    <WindowFilmLocationTemplate
      city="Wakefield"
      title="Window film Wakefield — frosted, privacy and solar film for Wakefield homes and businesses"
      excludeFromLocations="Wakefield"
      introContent={
        <>
          <p>
            Wakefield sits at the crossroads of West Yorkshire and covers a wide geographic area —
            from the city centre to Horbury, Ossett, Castleford, Pontefract and out to the
            surrounding villages. WRPX covers the full WF postcode for window film installation.
            Whether you need frosted film for a bathroom window, one-way mirror film for a
            ground-floor living room that&apos;s overlooked, solar control for a glazed extension
            or conservatory, or glass manifestation for a Wakefield business premises, we have
            the film and the experience to do it properly.
          </p>
          <p className="mt-4">
            We work with homeowners, landlords and commercial clients across the WF1–WF10 postcodes.
            Same-week surveys in most cases. Free site visit, fixed price, 5-year guarantee on
            materials and installation.
          </p>
        </>
      }
    />
  );
}
