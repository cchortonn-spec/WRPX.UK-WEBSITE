import type { Metadata } from "next";
import { WindowFilmLocationTemplate } from "@/components/WindowFilmLocationTemplate";

export const metadata: Metadata = {
  title: "Window Film Installer Leeds | Privacy & Frosted | WRPX",
  description:
    "Window film installation across Leeds. Frosted film, privacy film, solar control and commercial window film. WRPX — South Yorkshire specialists serving Leeds.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/window-film/window-film-leeds/",
  },
};

export default function WindowFilmLeedsPage() {
  return (
    <WindowFilmLocationTemplate
      city="Leeds"
      title="Window film Leeds — frosted, privacy and solar film for Leeds homes and businesses"
      excludeFromLocations="Leeds"
      introContent={
        <>
          <p>
            Leeds is the largest city in our coverage area and one where there&apos;s a genuine gap in quality local window film installation. While there are national providers who list Leeds in their service area, WRPX offers something different: a specialist vinyl installer who surveys in person, specifies the right product, and does the preparation properly.
          </p>
          <p className="mt-4">
            We cover LS1 through the suburbs — residential jobs in Roundhay, Headingley, Horsforth and Morley, and commercial work in the city centre and on the business parks north and east of the city. If you&apos;re in Leeds and looking for frosted film, privacy film, solar control or commercial window film, we&apos;re 30–40 minutes away.
          </p>
        </>
      }
    />
  );
}
