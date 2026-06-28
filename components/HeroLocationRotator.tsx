"use client";

import { useEffect, useState } from "react";
import { heroLocations } from "@/lib/hero-config";

const ROTATE_MS = 2000;
const FADE_MS = 350;

export function HeroLocationRotator() {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setVisible(false);

      window.setTimeout(() => {
        setIndex((current) => (current + 1) % heroLocations.length);
        setVisible(true);
      }, FADE_MS);
    }, ROTATE_MS);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <span className="home-hero-location" aria-live="polite">
      <span
        className={`home-hero-accent home-hero-location-text${visible ? " is-visible" : ""}`}
      >
        {heroLocations[index]}
      </span>
    </span>
  );
}
