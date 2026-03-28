import type { Metadata } from "next";
import { WindowFilmLocationTemplate } from "@/components/WindowFilmLocationTemplate";

export const metadata: Metadata = {
  title: "Window Film Installer Chesterfield | Privacy & Frosted | WRPX",
  description:
    "Window film for Chesterfield homes and businesses. Frosted bathroom film, privacy window film, solar control. Professional installation from WRPX across South Yorkshire.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/window-film/window-film-chesterfield/",
  },
};

export default function WindowFilmChesterfieldPage() {
  return (
    <WindowFilmLocationTemplate
      city="Chesterfield"
      title="Window film Chesterfield — frosted, privacy and solar film for Chesterfield homes and businesses"
      excludeFromLocations="Chesterfield"
      introContent={
        <>
          <p>
            Chesterfield sits at the southern edge of our regular coverage area and is an area we visit regularly — typically combined with other South Yorkshire jobs on the same day. The town&apos;s mix of Victorian and Edwardian housing stock around the centre and newer residential developments to the north and east generates the same window film needs as the rest of our patch: bathrooms that need frosting, front-facing rooms wanting privacy, and conservatories wanting solar control.
          </p>
          <p className="mt-4">
            For Chesterfield businesses, we install commercial window film, manifestation and solar control film across office, retail and professional premises. Free survey — call or book online.
          </p>
        </>
      }
    />
  );
}
