"use client";

import { useEffect, useRef, useState } from "react";

export type Reel = {
  src: string;
  poster?: string;
  label: string;
};

const REELS: Reel[] = [
  { src: "/videos/kitchen-wrap-reel-01.mp4", label: "Kitchen wrap" },
  { src: "/videos/kitchen-wrap-reel-02.mp4", label: "Kitchen wrap" },
  { src: "/videos/kitchen-wrap-reel-03.mp4", label: "Kitchen wrap" },
  { src: "/videos/kitchen-wrap-reel-04.mp4", label: "Kitchen wrap" },
  { src: "/videos/kitchen-wrap-reel-05.mp4", label: "Kitchen wrap" },
  { src: "/videos/kitchen-wrap-reel-06.mp4", label: "Kitchen wrap" },
  { src: "/videos/kitchen-wrap-reel-07.mp4", label: "Kitchen wrap" },
];

/**
 * Single vertical (9:16) reel card.
 * Plays muted + looped automatically once it's on screen, and pauses
 * once it scrolls away (saves battery/data and avoids a wall of moving
 * video). Tap the card to toggle sound.
 */
function ReelCard({ reel, index }: { reel: Reel; index: number }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {
            /* Autoplay can be blocked; ignore silently. */
          });
        } else {
          video.pause();
        }
      },
      { threshold: 0.6 }
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  const toggleSound = () => {
    const video = videoRef.current;
    if (!video) return;
    const next = !muted;
    video.muted = next;
    if (!next) {
      video.play().catch(() => {});
    }
    setMuted(next);
  };

  return (
    <div className="reel-card">
      <video
        ref={videoRef}
        className="reel-card-video"
        src={reel.src}
        poster={reel.poster}
        muted={muted}
        loop
        playsInline
        preload="metadata"
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
