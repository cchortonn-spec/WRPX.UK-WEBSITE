import type { Metadata } from "next";
import { WindowFilmLocationTemplate } from "@/components/WindowFilmLocationTemplate";

export const metadata: Metadata = {
  title: "Window Film Installer Doncaster | Frosted & Privacy | WRPX",
  description:
    "Window film installed across Doncaster. Privacy film, frosted bathroom windows, solar control and commercial film. Professional installation, free survey from WRPX.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/window-film/window-film-doncaster/",
  },
};

export default function WindowFilmDoncasterPage() {
  return (
    <WindowFilmLocationTemplate
      city="Doncaster"
      title="Window film Doncaster — privacy, frosted and solar film for Doncaster homes and businesses"
      excludeFromLocations="Doncaster"
      introContent={
        <>
          <p>
            Doncaster has a mix of residential housing stock — from the semi-detached streets of Bessacarr and Wheatley Hills to terrace rows in the town centre and newer builds near Lakeside and Balby. Street-facing living rooms, bathroom windows with insufficient obscuring, and conservatories that become unusable in summer are the jobs we do most in the area.
          </p>
          <p className="mt-4">
            Commercial Doncaster — the distribution and logistics businesses on the trading estates, the professional services in the town centre — increasingly want office privacy film and solar control for their working environments. WRPX covers Doncaster for all film types. Call or book a free survey online.
          </p>
        </>
      }
    />
  );
}
