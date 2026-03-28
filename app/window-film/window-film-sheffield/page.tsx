import type { Metadata } from "next";
import { WindowFilmLocationTemplate } from "@/components/WindowFilmLocationTemplate";

export const metadata: Metadata = {
  title: "Window Film Installer Sheffield | Frosted, Privacy & Solar | WRPX",
  description:
    "Window film installation across Sheffield — frosted bathroom film, privacy film, solar control for offices and conservatories. WRPX — South Yorkshire specialists.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/window-film/window-film-sheffield/",
  },
};

export default function WindowFilmSheffieldPage() {
  return (
    <WindowFilmLocationTemplate
      city="Sheffield"
      title="Window film Sheffield — frosted, privacy and solar film for Sheffield homes and businesses"
      excludeFromLocations="Sheffield"
      introContent={
        <>
          <p>
            Sheffield has some of the most varied glazing you&apos;ll see — Victorian terraces in Walkley and Crookes with original sash windows, 1970s semis in Gleadless and Intake with bathroom windows that were never obscured properly, modern glass-heavy new builds in the city centre, and a growing commercial and co-working sector in the S1 and Kelham Island areas with partitioned offices needing privacy solutions.
          </p>
          <p className="mt-4">
            WRPX is Sheffield-based and works across the whole city — S1 to S20, city centre to the suburbs. We install frosted window film, privacy and one-way mirror film, solar control film, glass manifestation and commercial window film for Sheffield homeowners, landlords and businesses. Free survey, usually within the week.
          </p>
        </>
      }
    />
  );
}
