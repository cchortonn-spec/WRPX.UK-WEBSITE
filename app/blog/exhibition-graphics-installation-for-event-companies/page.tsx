import type { Metadata } from "next";
import Link from "next/link";
import { BlogAuthor } from "@/components/BlogAuthor";

export const metadata: Metadata = {
  title: "Exhibition Graphics Installation: What Event Companies Need to Know",
  description:
    "A practical guide for event designers, agencies and print companies subcontracting exhibition graphics installation — surface types, shell scheme specs, venue rules, briefing installers and what goes wrong.",
  alternates: {
    canonical:
      "https://www.wrpx.co.uk/blog/exhibition-graphics-installation-for-event-companies/",
  },
};

export default function ExhibitionGraphicsInstallationForEventCompaniesPage() {
  return (
    <div>
      <article className="px-4 py-16">
        <div className="container mx-auto max-w-3xl">
          <p className="text-sm text-muted">
            <Link href="/blog/" className="hover:text-accent">
              Blog
            </Link>
          </p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-foreground">
            Exhibition Graphics Installation: What Event Companies Need to Know
          </h1>
          <p className="mt-2 text-muted">
            A practical guide for event designers, agencies and print companies who need a specialist
            vinyl installer on the show floor — surface prep, shell scheme specs, venue rules,
            briefing installers and the things that cause installation failures under pressure.
          </p>
          <p className="mt-2 text-xs text-muted">Updated July 2026</p>

          <div className="prose prose-invert mt-8 max-w-none prose-p:text-muted prose-li:text-muted prose-headings:text-foreground">
            <h2>Why exhibition graphics installation is a separate discipline</h2>
            <p>
              Exhibition graphics installation has more in common with a pressured commercial
              project than with a standard retail window graphic — and more consequences than either
              when it goes wrong. The show floor opens at a fixed time. The venue has strict build
              and breakdown schedules. The client is standing by watching. And you almost never get
              to inspect the stand surfaces in advance the way you would a retail unit or office wall.
            </p>
            <p>
              The result is that exhibition graphics installation rewards experience and preparation
              in ways that other vinyl installation does not. An experienced installer who has worked
              on exhibition floors knows how to handle the unexpected — a panel system they
              haven&apos;t seen before, a floor graphic substrate that&apos;s been waxed, a stand that
              wasn&apos;t built to the dimensions in the brief. An inexperienced one discovers these
              problems in real time, in front of your client, with the clock running.
            </p>
            <p>
              This guide is for event companies, agencies and print houses who are thinking about
              subcontracting exhibition graphics installation — or who have done it before and want
              to brief their installer more effectively.
            </p>

            <h2>Shell scheme panel graphics — what you need to know before you brief</h2>
            <p>
              Shell scheme panels are not all the same surface. The three panel systems you encounter
              most often on UK exhibition floors — octanorm, Tecna and contractor-supplied MDF-backed
              systems — each have different surface characteristics that affect how vinyl adheres and
              how it releases at breakdown.
            </p>
            <p>
              Octanorm and similar aluminium extrusion systems use fabric-faced or powder-coated
              infill panels. Fabric panels are problematic for self-adhesive vinyl — adhesion is poor
              and removal almost always causes damage. If your client has a fabric shell scheme, you
              need to clarify upfront whether the exhibition contractor permits adhesive vinyl at all,
              and if so what weight of vinyl and what adhesive specification they require.
            </p>
            <p>
              MDF-backed panels (common in contractor-built bespoke shell schemes) accept vinyl well
              but are often not finished consistently — paint coverage can vary across a panel batch,
              and edge sealing is sometimes missing. Your installer should check every panel before
              installation starts, not after the vinyl is down.
            </p>
            <p>
              What to include in your brief for shell scheme installs:
            </p>
            <ul>
              <li>The exhibition contractor name and panel system (Octanorm, Tecna, other — your exhibiting client&apos;s join pack will have this)</li>
              <li>Panel dimensions with the graphic file dimensions cross-referenced</li>
              <li>Whether the exhibition contractor permits adhesive vinyl or requires specific material types</li>
              <li>Any bleed or margin requirements specified by the contractor</li>
              <li>Whether the client wants graphics de-installed at breakdown or left on the panels</li>
            </ul>

            <h2>Custom stand surfaces — substrate matters more than you think</h2>
            <p>
              Custom-built exhibition stands use a variety of substrate materials — painted MDF,
              foamex, aluminium composite (Dibond/ACM), powder-coated steel, glass and various
              fabric systems. Each needs to be treated differently.
            </p>
            <p>
              Painted MDF is the most common surface in exhibition stand builds. The critical variable
              is paint adhesion — a poorly bonded paint layer will come away with your vinyl at
              breakdown, leaving the client with a damaged stand and a claim you&apos;d rather not
              field. Your installer should test adhesion on a corner before committing to a full
              installation. If paint isn&apos;t bonded properly, the surface needs to be sealed
              before any vinyl goes on.
            </p>
            <p>
              Aluminium composite panels (ACM/Dibond) are an excellent vinyl substrate — typically
              need only cleaning with IPA and they&apos;re ready. The issue with ACM in exhibition
              builds is that the panels are often coated with a protective peel-off film by the
              fabricator. This film must be removed before vinyl installation — it&apos;s easy to
              miss in a busy build environment and extremely obvious once the vinyl is down over it.
            </p>
            <p>
              For foamex and similar foam-core boards: clean and dry, they accept vinyl well.
              The problem is temperature — if a stand has been in a cold vehicle all night and
              arrives on a show floor with the heating on, the surface temperature change can cause
              adhesion issues in the first hour after installation. Let panels acclimatise before
              installing graphics if you can.
            </p>

            <h2>Exhibition floor graphics — the compliance issue nobody mentions until it&apos;s too late</h2>
            <p>
              Floor graphics at exhibitions carry a slip risk that wall and window graphics do not.
              UK exhibition venues typically require floor graphics to meet a minimum slip resistance
              rating — Pendulum Test Value (PTV) of 36 or above when wet is the standard requirement
              across most venue specifications. Vinyl applied without an anti-slip laminate almost
              never meets this requirement on smooth show floor surfaces.
            </p>
            <p>
              This is not an abstract risk. Venue health and safety checks will require anti-slip
              compliance documentation for floor graphics. If your installer applies non-compliant
              floor graphics and someone slips, the liability chain is short and points at the
              production and installation decision. Anti-slip laminate is a standard specification —
              not an upgrade.
            </p>
            <p>
              The second floor graphic issue is substrate compatibility. Exhibition venue floors are
              laid over a range of surfaces — polished concrete, screed, exhibition carpet, sprung
              wood. The adhesive used for floor graphics needs to be matched to the substrate type
              and must be removable without damaging the venue floor. Brief your installer on the
              venue floor type — they should know what adhesive to use before arriving, not after
              the first tile is down.
            </p>

            <h2>Venue rules your installer needs to know before the build</h2>
            <p>
              Every exhibition venue has its own set of rules about what can and cannot be done on
              the show floor. These include:
            </p>
            <ul>
              <li><strong>Working hours:</strong> Many venues impose build hours (typically 08:00–22:00 or similar). If your installation requires more time than the build window allows, you need to know this before booking your installer.</li>
              <li><strong>Tool restrictions:</strong> Some venues prohibit certain tools — hot air guns and heat guns are commonly restricted near fire suppression systems. If your install depends on heat for vinyl application or seam joining, check venue policy.</li>
              <li><strong>Accreditation:</strong> Larger venues (NEC, ExCeL, Harrogate International Centre) require passes for all contractors on the show floor during build. Your installer needs their pass sorted before arrival, not at the loading dock at 07:00.</li>
              <li><strong>Floor protection:</strong> Some venues require contractors to lay floor protection during build. Vinyl installers bringing carts of rolled material need to know if floor protection is mandatory before load-in.</li>
            </ul>
            <p>
              The venue join pack sent to your exhibiting client contains most of this information.
              Forward the contractor section to your installer as part of the brief — not as
              supplementary reading, but as required briefing.
            </p>

            <h2>Briefing an exhibition graphics installer — what to include</h2>
            <p>
              The single biggest difference between a smooth exhibition installation and a chaotic
              one is the quality of the brief. Installers who arrive with a clear brief — panel
              dimensions, surface spec, access schedule, graphic file spec and de-install
              requirements — can work independently and efficiently. Installers who arrive with
              incomplete information will need to ask questions on a show floor where your
              attention is already stretched.
            </p>
            <p>
              What a complete exhibition installation brief includes:
            </p>
            <ul>
              <li>Venue name and address, build start time, build end time, show open time</li>
              <li>Contractor accreditation requirements and how your installer will receive their pass</li>
              <li>Stand number and hall location</li>
              <li>Stand type: shell scheme (contractor name + panel system) or custom build (substrate spec)</li>
              <li>Graphic inventory: item reference, dimensions, substrate, laminate specification, delivery method (rolled, flat-packed, with or without application tape)</li>
              <li>Placement diagram: numbered graphic reference matching each graphic to its location on the stand</li>
              <li>Floor type at the venue (if floor graphics are included)</li>
              <li>De-installation requirements: yes/no, breakdown schedule, panel condition requirements from the exhibition contractor</li>
              <li>Your on-site contact name and mobile number</li>
            </ul>
            <p>
              If you&apos;re regularly producing exhibition graphics for clients and subcontracting
              installation, this brief format should be standardised — the same template filled in
              for each show. It reduces briefing time, reduces the chance of missing something
              critical, and means your installer can hit the floor running at every show.
            </p>

            <h2>What goes wrong — and how to prevent it</h2>
            <p>
              Based on the exhibition installations we&apos;ve been called in to fix or support,
              the most common failure modes are:
            </p>
            <ul>
              <li><strong>Graphic file at wrong dimensions:</strong> The printed graphic doesn&apos;t match the panel dimension in the brief. Usually a measurement error at the design stage. Cross-reference graphic files against panel dimensions before sending to print — not after they arrive on the show floor.</li>
              <li><strong>Material spec not matched to surface:</strong> High-tack vinyl applied to a fabric panel system, or standard floor vinyl applied without anti-slip laminate. Avoidable at brief stage with the right material specification.</li>
              <li><strong>Installer has no venue pass:</strong> Easily avoided — include accreditation requirements in the brief and confirm with your installer that they have their pass at least 24 hours before build.</li>
              <li><strong>Protective film left on panel substrate:</strong> ACM and foamex panels are often factory-wrapped in a peel-off protective layer. This gets missed in the rush of a build. Your installer should check every surface before applying vinyl, not assume it&apos;s clear.</li>
              <li><strong>De-install not briefed, panels damaged at breakdown:</strong> If your installer hasn&apos;t been told what the de-install requirements are — and hasn&apos;t been supplied with the right solvent for panel cleaning — panels come back damaged and the exhibition contractor charges the exhibiting client. Brief de-install upfront, not as a last-minute conversation at breakdown.</li>
            </ul>

            <h2>Working with WRPX on exhibition graphics</h2>
            <p>
              WRPX provides{" "}
              <Link href="/exhibition-graphics-installation/" className="text-accent hover:underline">
                exhibition graphics installation
              </Link>{" "}
              for event designers, agencies and print companies across Yorkshire and the East Midlands.
              We install shell scheme panel graphics, custom stand surface vinyl, floor graphics
              and vehicle livery at shows — on your brief, to your specification.
            </p>
            <p>
              We are installation-only. We do not produce or print graphics. You supply material
              ready to apply; we prepare surfaces, install to specification and return photo
              documentation. White-label working available for agency clients.
            </p>
            <p>
              Venues we cover as standard: Harrogate International Centre, Sheffield venues, Leeds
              venues, East Midlands Conference Centre (Nottingham) and Derby. For venues outside
              this area, discuss directly.
            </p>
            <p>
              If you&apos;re planning an exhibition and want to understand what a well-briefed
              installation looks like before you book anyone, use the checklist above and send us
              the brief — we&apos;ll tell you what&apos;s there, what&apos;s missing and what a
              straightforward installation quote looks like.
            </p>

            <hr className="border-border" />

            <p>
              <Link href="/exhibition-graphics-installation/" className="text-accent hover:underline">
                Exhibition graphics installation — service page
              </Link>{" "}
              ·{" "}
              <Link href="/sign-company-installation-partner/" className="text-accent hover:underline">
                Sign company installation partner
              </Link>{" "}
              ·{" "}
              <Link href="/multi-site-rollout-installation/" className="text-accent hover:underline">
                Multi-site rollout installation
              </Link>
            </p>
          </div>

          <BlogAuthor />
        </div>
      </article>
    </div>
  );
}
