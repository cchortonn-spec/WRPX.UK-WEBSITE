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

const PLAY_RETRY_DELAYS_MS = [0, 250, 750, 1500];

function prepareForInlinePlay(video: HTMLVideoElement, muted: boolean) {
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

async function tryPlay(video: HTMLVideoElement, muted: boolean): Promise<boolean> {
  prepareForInlinePlay(video, muted);
  try {
    await video.play();
    return true;
  } catch {
    return false;
  }
}

function waitForCanPlay(video: HTMLVideoElement, timeoutMs = 8000): Promise<void> {
  if (video.readyState >= HTMLMediaElement.HAVE_FUTURE_DATA) {
    return Promise.resolve();
  }

  return new Promise((resolve) => {
    let settled = false;
    const finish = () => {
      if (settled) return;
      settled = true;
      video.removeEventListener("loadeddata", finish);
      video.removeEventListener("canplay", finish);
      window.clearTimeout(timer);
      resolve();
    };

    const timer = window.setTimeout(finish, timeoutMs);
    video.addEventListener("loadeddata", finish);
    video.addEventListener("canplay", finish);
  });
}

/**
 * Single vertical (9:16) reel card.
 * Plays muted + looped automatically once it's on screen, and pauses
 * once it scrolls away (saves battery/data and avoids a wall of moving
 * video). Tap the sound button to toggle sound.
 */
function ReelCard({ reel, index }: { reel: Reel; index: number }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const [muted, setMuted] = useState(true);
  const [shouldLoad, setShouldLoad] = useState(index < 2);
  const mutedRef = useRef(true);
  const wantPlayingRef = useRef(false);
  const playGenerationRef = useRef(0);
  const errorRetriesRef = useRef(0);

  useEffect(() => {
    mutedRef.current = muted;
  }, [muted]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    prepareForInlinePlay(video, true);
  }, []);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const preloadObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting || entry.intersectionRatio > 0) {
          setShouldLoad(true);
        }
      },
      { rootMargin: "200px 120px", threshold: 0 }
    );

    preloadObserver.observe(card);
    return () => preloadObserver.disconnect();
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !shouldLoad) return;

    let cancelled = false;

    const playWithRetries = async () => {
      const generation = ++playGenerationRef.current;
      prepareForInlinePlay(video, mutedRef.current);

      if (video.preload !== "auto") {
        video.preload = "auto";
      }
      // Only force a reload when the element has no usable network activity yet.
      // Calling load() while buffering can abort an in-progress fetch on iOS.
      if (
        video.readyState < HTMLMediaElement.HAVE_CURRENT_DATA &&
        (video.networkState === HTMLMediaElement.NETWORK_EMPTY ||
          video.networkState === HTMLMediaElement.NETWORK_NO_SOURCE)
      ) {
        try {
          video.load();
        } catch {
          /* ignore */
        }
      }
      if (video.readyState < HTMLMediaElement.HAVE_CURRENT_DATA) {
        await waitForCanPlay(video);
      }

      for (const delay of PLAY_RETRY_DELAYS_MS) {
        if (cancelled || !wantPlayingRef.current || generation !== playGenerationRef.current) {
          return;
        }
        if (delay > 0) {
          await new Promise((resolve) => window.setTimeout(resolve, delay));
        }
        if (cancelled || !wantPlayingRef.current || generation !== playGenerationRef.current) {
          return;
        }
        if (video.paused === false) return;
        const ok = await tryPlay(video, mutedRef.current);
        if (ok) {
          errorRetriesRef.current = 0;
          return;
        }
      }
    };

    const onVisibility = (visible: boolean) => {
      wantPlayingRef.current = visible;
      if (visible) {
        void playWithRetries();
      } else {
        playGenerationRef.current += 1;
        video.pause();
      }
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        onVisibility(entry.isIntersecting);
      },
      { threshold: 0.25 }
    );

    const onError = () => {
      if (cancelled || errorRetriesRef.current >= 1) return;
      errorRetriesRef.current += 1;
      try {
        video.load();
      } catch {
        /* ignore */
      }
      if (wantPlayingRef.current) {
        void playWithRetries();
      }
    };

    video.addEventListener("error", onError);
    observer.observe(video);

    return () => {
      cancelled = true;
      playGenerationRef.current += 1;
      observer.disconnect();
      video.removeEventListener("error", onError);
      video.pause();
    };
  }, [shouldLoad]);

  const toggleSound = () => {
    const video = videoRef.current;
    if (!video) return;
    const next = !muted;
    mutedRef.current = next;
    prepareForInlinePlay(video, next);
    if (!next) {
      // User gesture — unmuting should also kick playback if autoplay was blocked.
      void video.play().catch(() => {});
    }
    setMuted(next);
  };

  return (
    <div className="reel-card" ref={cardRef}>
      <video
        ref={videoRef}
        className="reel-card-video"
        src={shouldLoad ? reel.src : undefined}
        poster={reel.poster}
        muted={muted}
        loop
        playsInline
        preload={shouldLoad ? (index < 2 ? "auto" : "metadata") : "none"}
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
        <div className="video-reels-track">
          {REELS.map((reel, index) => (
            <ReelCard key={reel.src} reel={reel} index={index} />
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
