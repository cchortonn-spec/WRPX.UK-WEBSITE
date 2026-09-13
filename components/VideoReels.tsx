"use client";

import { useEffect, useRef, useState } from "react";

export type Reel = {
  src: string;
  poster?: string;
  label: string;
};

const REELS: Reel[] = [
  {
    src: "/videos/kitchen-wrap-reel-01.mp4",
    poster: "/videos/kitchen-wrap-reel-01.jpg",
    label: "Kitchen wrap",
  },
  {
    src: "/videos/kitchen-wrap-reel-02.mp4",
    poster: "/videos/kitchen-wrap-reel-02.jpg",
    label: "Kitchen wrap",
  },
  {
    src: "/videos/kitchen-wrap-reel-03.mp4",
    poster: "/videos/kitchen-wrap-reel-03.jpg",
    label: "Kitchen wrap",
  },
  {
    src: "/videos/kitchen-wrap-reel-04.mp4",
    poster: "/videos/kitchen-wrap-reel-04.jpg",
    label: "Kitchen wrap",
  },
  {
    src: "/videos/kitchen-wrap-reel-05.mp4",
    poster: "/videos/kitchen-wrap-reel-05.jpg",
    label: "Kitchen wrap",
  },
  {
    src: "/videos/kitchen-wrap-reel-06.mp4",
    poster: "/videos/kitchen-wrap-reel-06.jpg",
    label: "Kitchen wrap",
  },
  {
    src: "/videos/kitchen-wrap-reel-07.mp4",
    poster: "/videos/kitchen-wrap-reel-07.jpg",
    label: "Kitchen wrap",
  },
];

function prepareMutedInline(video: HTMLVideoElement, muted: boolean) {
  video.muted = muted;
  video.defaultMuted = muted;
  if (muted) {
    video.setAttribute("muted", "");
  } else {
    video.removeAttribute("muted");
  }
  video.playsInline = true;
  video.setAttribute("playsinline", "");
  video.setAttribute("webkit-playsinline", "");
}

/**
 * Single vertical (9:16) reel card.
 * Only the active (most visible) card plays — phones reliably decode one
 * video at a time. Neighbours preload so swipe feels instant. Tap the
 * sound button to toggle mute.
 */
function ReelCard({
  reel,
  index,
  isActive,
  shouldLoad,
  onActivate,
}: {
  reel: Reel;
  index: number;
  isActive: boolean;
  shouldLoad: boolean;
  onActivate: (index: number) => void;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);
  const mutedRef = useRef(true);
  const activeRef = useRef(isActive);

  useEffect(() => {
    mutedRef.current = muted;
  }, [muted]);

  useEffect(() => {
    activeRef.current = isActive;
  }, [isActive]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    prepareMutedInline(video, true);
  }, []);

  // Play only while this card is the active (most visible) reel.
  useEffect(() => {
    const video = videoRef.current;
    if (!video || !shouldLoad) return;

    let cancelled = false;

    const pauseNow = () => {
      video.pause();
    };

    const playNow = async () => {
      prepareMutedInline(video, mutedRef.current);

      if (video.readyState < HTMLMediaElement.HAVE_CURRENT_DATA) {
        await new Promise<void>((resolve) => {
          let done = false;
          const finish = () => {
            if (done) return;
            done = true;
            video.removeEventListener("loadeddata", finish);
            video.removeEventListener("canplay", finish);
            window.clearTimeout(timer);
            resolve();
          };
          const timer = window.setTimeout(finish, 6000);
          video.addEventListener("loadeddata", finish);
          video.addEventListener("canplay", finish);
        });
      }

      if (cancelled || !activeRef.current) return;

      try {
        await video.play();
      } catch {
        // Autoplay can be blocked once; retry shortly (still muted).
        await new Promise((r) => window.setTimeout(r, 400));
        if (cancelled || !activeRef.current) return;
        prepareMutedInline(video, mutedRef.current);
        await video.play().catch(() => {});
      }
    };

    if (isActive) {
      void playNow();
    } else {
      pauseNow();
    }

    const onVisibility = () => {
      if (document.hidden) {
        pauseNow();
      } else if (activeRef.current) {
        void playNow();
      }
    };

    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      cancelled = true;
      document.removeEventListener("visibilitychange", onVisibility);
      // Don't pause on dependency churn while still active — only when
      // leaving the effect because shouldLoad flipped or unmounting.
    };
  }, [isActive, shouldLoad]);

  // Pause when this card stops being active (separate so Strict Mode
  // remounts don't kill a just-started play on the active card).
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    if (!isActive) {
      video.pause();
    }
  }, [isActive]);

  const toggleSound = () => {
    const video = videoRef.current;
    if (!video) return;
    const nextMuted = !muted;
    mutedRef.current = nextMuted;
    prepareMutedInline(video, nextMuted);
    onActivate(index);
    // User gesture — kick playback even if autoplay was blocked earlier.
    void video.play().catch(() => {});
    setMuted(nextMuted);
  };

  return (
    <div className="reel-card" data-reel-index={index}>
      <video
        ref={videoRef}
        className="reel-card-video"
        src={shouldLoad ? reel.src : undefined}
        poster={reel.poster}
        muted={muted}
        loop
        playsInline
        preload={shouldLoad ? (isActive ? "auto" : "metadata") : "none"}
        aria-label={`${reel.label} — video ${index + 1}`}
      />
      <button
        type="button"
        className="reel-card-sound"
        onClick={toggleSound}
        aria-label={muted ? "Turn sound on" : "Turn sound off"}
      >
        {muted ? <SoundOffIcon /> : <SoundOnIcon />}
      </button>
    </div>
  );
}

/**
 * Horizontal-scrolling row of vertical video reels — shows real jobs at
 * pace, the way they were shot (portrait, with music). Designed to sit
 * as its own section, not stretched into a wide banner.
 */
export function VideoReels() {
  const trackRef = useRef<HTMLDivElement>(null);
  const ratiosRef = useRef<Map<number, number>>(new Map());
  const [activeIndex, setActiveIndex] = useState(0);
  const [loadedIndexes, setLoadedIndexes] = useState<Set<number>>(
    () => new Set([0, 1])
  );

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const cards = Array.from(
      track.querySelectorAll<HTMLElement>("[data-reel-index]")
    );

    const pickActive = () => {
      const viewportMid = window.innerWidth / 2;
      let bestIndex = 0;
      let bestRatio = -1;
      let bestDist = Number.POSITIVE_INFINITY;

      for (const card of cards) {
        const index = Number(card.dataset.reelIndex);
        const ratio = ratiosRef.current.get(index) ?? 0;
        const rect = card.getBoundingClientRect();
        const center = (rect.left + rect.right) / 2;
        const dist = Math.abs(center - viewportMid);

        if (ratio > bestRatio + 0.02 || (Math.abs(ratio - bestRatio) <= 0.02 && dist < bestDist)) {
          bestRatio = ratio;
          bestDist = dist;
          bestIndex = index;
        }
      }

      // Need a meaningful amount on screen before claiming a winner.
      if (bestRatio < 0.15) return;

      setActiveIndex(bestIndex);
      setLoadedIndexes((prev) => {
        const next = new Set(prev);
        next.add(bestIndex);
        if (bestIndex > 0) next.add(bestIndex - 1);
        if (bestIndex < REELS.length - 1) next.add(bestIndex + 1);
        return next;
      });
    };

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const el = entry.target as HTMLElement;
          const index = Number(el.dataset.reelIndex);
          if (Number.isNaN(index)) continue;
          ratiosRef.current.set(index, entry.intersectionRatio);
        }
        pickActive();
      },
      {
        threshold: [0, 0.1, 0.2, 0.35, 0.5, 0.65, 0.8, 1],
        rootMargin: "0px",
      }
    );

    for (const card of cards) {
      observer.observe(card);
    }

    // Horizontal scroll inside the track also changes which card wins.
    const onScroll = () => {
      for (const card of cards) {
        const index = Number(card.dataset.reelIndex);
        const rect = card.getBoundingClientRect();
        const visibleWidth = Math.min(rect.right, window.innerWidth) - Math.max(rect.left, 0);
        const visibleHeight = Math.min(rect.bottom, window.innerHeight) - Math.max(rect.top, 0);
        const area = rect.width * rect.height;
        const ratio =
          area > 0 && visibleWidth > 0 && visibleHeight > 0
            ? (visibleWidth * visibleHeight) / area
            : 0;
        ratiosRef.current.set(index, Math.max(0, Math.min(1, ratio)));
      }
      pickActive();
    };

    track.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    // Initial pick after layout.
    onScroll();

    return () => {
      observer.disconnect();
      track.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <section className="video-reels reveal" aria-label="Kitchen wrapping video reels">
      <div className="video-reels-inner">
        <div className="video-reels-heading">
          <h2 className="section-heading text-2xl font-semibold text-foreground md:text-3xl">
            See the transformations
          </h2>
          <p className="video-reels-lead">
            Real jobs, filmed on site. Tap a video to turn the sound on.
          </p>
        </div>
        <div className="video-reels-track" ref={trackRef}>
          {REELS.map((reel, index) => (
            <ReelCard
              key={reel.src}
              reel={reel}
              index={index}
              isActive={index === activeIndex}
              shouldLoad={loadedIndexes.has(index)}
              onActivate={(i) => {
                setActiveIndex(i);
                setLoadedIndexes((prev) => {
                  const next = new Set(prev);
                  next.add(i);
                  if (i > 0) next.add(i - 1);
                  if (i < REELS.length - 1) next.add(i + 1);
                  return next;
                });
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function SoundOffIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4" aria-hidden="true">
      <path d="M11 5 6 9H2v6h4l5 4V5Z" />
      <line x1="23" y1="9" x2="17" y2="15" />
      <line x1="17" y1="9" x2="23" y2="15" />
    </svg>
  );
}

function SoundOnIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4" aria-hidden="true">
      <path d="M11 5 6 9H2v6h4l5 4V5Z" />
      <path d="M15.5 8.5a5 5 0 0 1 0 7" />
      <path d="M18.5 6a9 9 0 0 1 0 12" />
    </svg>
  );
}
