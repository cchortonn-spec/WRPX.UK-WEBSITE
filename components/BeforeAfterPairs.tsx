import Image from "next/image";

type Shot = { src: string; alt: string };

type BeforeAfterPair = {
  title: string;
  before: Shot;
  after: Shot;
};

/**
 * Real before / after pairs — each "before" is the same job and angle as its "after".
 * To add another job, copy one block and change the photo paths.
 */
const PAIRS: BeforeAfterPair[] = [
  {
    title: "Grey gloss to navy and white marble — Doncaster",
    before: {
      src: "/images/hero-before-doncaster.png",
      alt: "Doncaster kitchen before wrapping — grey gloss doors and dark worktop",
    },
    after: {
      src: "/images/hero-after-doncaster.png",
      alt: "Doncaster kitchen after wrapping — navy doors with a white marble-effect worktop and splashback",
    },
  },
  {
    title: "Forest green island with a white worktop — Leeds",
    before: {
      src: "/images/forest-green-kitchen-wrap-leeds/forest-green-kitchen-island-wrap-leeds-before-05.jpg",
      alt: "Leeds kitchen island before wrapping — dark grey doors and grey worktop",
    },
    after: {
      src: "/images/forest-green-kitchen-wrap-leeds/forest-green-kitchen-island-wrap-leeds-after-01.jpg",
      alt: "Leeds kitchen island after wrapping — forest green doors and a white worktop",
    },
  },
  {
    title: "Marble-effect worktop and splashback — Sheffield",
    before: {
      src: "/images/marble-worktop-splashback-wrap-sheffield/marble-worktop-splashback-wrap-sheffield-before-02.jpg",
      alt: "Sheffield kitchen before wrapping — wood-effect worktop and white tiles",
    },
    after: {
      src: "/images/marble-worktop-splashback-wrap-sheffield/marble-worktop-splashback-wrap-sheffield-after-02.jpg",
      alt: "Sheffield kitchen after wrapping — marble-effect worktop and splashback with grey doors",
    },
  },
  {
    title: "Oak-effect worktops — York",
    before: {
      src: "/images/oak-effect-worktop-wrap-york/oak-effect-worktop-wrap-york-before-01.jpg",
      alt: "York kitchen before wrapping — pale worktops and peninsula",
    },
    after: {
      src: "/images/oak-effect-worktop-wrap-york/oak-effect-worktop-wrap-york-after-01.jpg",
      alt: "York kitchen after wrapping — oak-effect worktops and peninsula",
    },
  },
  {
    title: "Post Office counter — Sheffield",
    before: {
      src: "/images/post-office-counter-wrap-sheffield/post-office-counter-vinyl-wrap-sheffield-before-01.jpg",
      alt: "Post Office counter before wrapping — worn grey counter front",
    },
    after: {
      src: "/images/post-office-counter-wrap-sheffield/post-office-counter-vinyl-wrap-sheffield-after-02.jpg",
      alt: "Post Office counter after wrapping — red vinyl with the white Post Office logo",
    },
  },
  {
    title: "Grey worktop to white, around the sink — Leeds",
    before: {
      src: "/images/forest-green-kitchen-wrap-leeds/forest-green-kitchen-island-wrap-leeds-before-06.jpg",
      alt: "Leeds kitchen sink before wrapping — grey worktop",
    },
    after: {
      src: "/images/forest-green-kitchen-wrap-leeds/forest-green-kitchen-island-wrap-leeds-after-03.jpg",
      alt: "Leeds kitchen sink after wrapping — white worktop",
    },
  },
];

/** Side-by-side real before and after photos. Styles live in globals.css (.ba-pair-*). */
export function BeforeAfterPairs() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {PAIRS.map((pair) => (
        <figure key={pair.title} className="card-float ba-pair">
          <div className="ba-pair-images">
            <div className="ba-pair-photo">
              <Image
                src={pair.before.src}
                alt={pair.before.alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 50vw, 288px"
              />
              <span className="ba-pair-label ba-pair-label-before">Before</span>
            </div>
            <div className="ba-pair-photo">
              <Image
                src={pair.after.src}
                alt={pair.after.alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 50vw, 288px"
              />
              <span className="ba-pair-label ba-pair-label-after">After</span>
            </div>
          </div>
          <figcaption className="ba-pair-caption">{pair.title}</figcaption>
        </figure>
      ))}
    </div>
  );
}
