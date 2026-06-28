"use client";

import Image from "next/image";
import { useCallback, useRef, useState } from "react";
import { heroImages } from "@/lib/hero-config";

/** How far the diagonal shifts from top to bottom (bigger = more aggressive angle). */
const SLIDER_SKEW = 16;

type BeforeAfterSliderProps = {
  className?: string;
  priority?: boolean;
};

function getDiagonalClip(position: number) {
  const topX = Math.min(100, position + SLIDER_SKEW);
  const bottomX = Math.max(0, position - SLIDER_SKEW);
  return {
    clipPath: `polygon(${topX}% 0, 100% 0, 100% 100%, ${bottomX}% 100%)`,
    topX,
    bottomX,
  };
}

export function BeforeAfterSlider({
  className = "",
  priority = true,
}: BeforeAfterSliderProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const { clipPath, topX, bottomX } = getDiagonalClip(position);

  const updatePosition = useCallback((clientX: number) => {
    const container = containerRef.current;
    if (!container) {
      return;
    }

    const rect = container.getBoundingClientRect();
    const next = ((clientX - rect.left) / rect.width) * 100;
    setPosition(Math.min(100, Math.max(0, next)));
  }, []);

  const handlePointerDown = (event: React.PointerEvent) => {
    event.preventDefault();
    setIsDragging(true);
    (event.currentTarget as HTMLElement).setPointerCapture(event.pointerId);
    updatePosition(event.clientX);
  };

  const handleMediaPointerDown = (event: React.PointerEvent) => {
    if ((event.target as HTMLElement).closest(".before-after-slider-handle")) {
      return;
    }
    setIsDragging(true);
    containerRef.current?.setPointerCapture(event.pointerId);
    updatePosition(event.clientX);
  };

  const handlePointerMove = (event: React.PointerEvent) => {
    if (!isDragging) {
      return;
    }
    updatePosition(event.clientX);
  };

  const handlePointerUp = (event: React.PointerEvent) => {
    setIsDragging(false);
    event.currentTarget.releasePointerCapture(event.pointerId);
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      setPosition((value) => Math.max(0, value - 5));
    }
    if (event.key === "ArrowRight") {
      event.preventDefault();
      setPosition((value) => Math.min(100, value + 5));
    }
  };

  return (
    <div
      ref={containerRef}
      className={`before-after-slider ${className}`.trim()}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerUp}
    >
      <div
        className="before-after-slider-media"
        onPointerDown={handleMediaPointerDown}
      >
        {/* Fixed 16:9 box — reliable in Chrome/Safari (no vw min-height fights) */}
        <div className="before-after-slider-aspect">
          <div className="before-after-slider-frame">
            <div className="before-after-slider-layer">
              <Image
                src={heroImages.before.src}
                alt={heroImages.before.alt}
                width={heroImages.before.width}
                height={heroImages.before.height}
                className="before-after-slider-image"
                sizes="100vw"
                priority={priority}
              />
            </div>

            <div
              className="before-after-slider-layer before-after-slider-after"
              style={{ clipPath }}
            >
              <Image
                src={heroImages.after.src}
                alt={heroImages.after.alt}
                width={heroImages.after.width}
                height={heroImages.after.height}
                className="before-after-slider-image"
                sizes="100vw"
                priority={priority}
              />
            </div>
          </div>

          <span className="slider-label-before">Before</span>
          <span className="slider-label-after">After</span>

          <svg
            className="before-after-slider-divider"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <line
              x1={topX}
              y1={0}
              x2={bottomX}
              y2={100}
              vectorEffect="non-scaling-stroke"
            />
          </svg>

          <button
            type="button"
            className="before-after-slider-handle"
            style={{ left: `${position}%` }}
            onPointerDown={handlePointerDown}
            onKeyDown={handleKeyDown}
            aria-label="Drag to compare before and after kitchen photos"
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={Math.round(position)}
            role="slider"
          >
            <span className="before-after-slider-arrows" aria-hidden="true">
              ‹ ›
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
