import type { Metadata } from "next";
import { WindowFilmLocationTemplate } from "@/components/WindowFilmLocationTemplate";

export const metadata: Metadata = {
  title: "Window Film Rotherham | Frosted & Privacy Window Film | WRPX",
  description:
    "Professional window film installation across Rotherham. Privacy film, frosted bathroom windows, solar control and commercial film. WRPX — South Yorkshire specialists.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/window-film/window-film-rotherham/",
  },
};

export default function WindowFilmRotherhamPage() {
  return (
    <WindowFilmLocationTemplate
      city="Rotherham"
      title="Window film Rotherham — frosted, privacy and solar film for Rotherham homes and businesses"
      excludeFromLocations="Rotherham"
      introContent={
        <>
          <p>
            Rotherham — from Wickersley and Maltby to the town centre and Rawmarsh — is an area we cover regularly for both domestic and commercial window film. The mix of 1930s semis, post-war housing and more recent builds covers most of the common glazing situations: bathrooms that need obscuring, street-facing rooms wanting privacy, conservatories overheating.
          </p>
          <p className="mt-4">
            On the commercial side, Rotherham&apos;s growing number of SMEs in the town centre and on industrial estates want the same things Sheffield businesses want — office privacy, solar control, and compliant manifestation. Close to Sheffield, we&apos;re often on site the same week you call.
          </p>
        </>
      }
    />
  );
}
