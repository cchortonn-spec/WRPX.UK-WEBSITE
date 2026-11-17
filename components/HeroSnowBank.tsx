"use client";

import { useEffect, useRef } from "react";
import { useSeasonActive } from "@/lib/use-season-active";

/**
 * Christmas snow for the homepage hero — same canvas approach as 3Sixty Roofing.
 *
 * - Flakes fall over the hero and settle along its bottom edge, building a snow drift.
 * - When the visitor scrolls down, the drift breaks loose, falls and disappears.
 * - Once the hero is out of view the snow stops completely (nothing keeps running).
 * - Nothing is drawn for people whose device is set to "reduce motion".
 * - One transparent canvas that ignores clicks and taps.
 *
 * Colours: --snow-rgb / --snow-shade-rgb in globals.css.
 */

type Flake = { x: number; y: number; r: number; vy: number; phase: number };
type Chunk = { x: number; y: number; r: number; vx: number; vy: number };

const COLUMN_WIDTH = 8;
const SCROLL_RELEASE = 40;
const DEPOSIT_WEIGHTS = [1, 0.75, 0.45, 0.2];

export function HeroSnowBank({ targetId = "home-hero" }: { targetId?: string }) {
  const active = useSeasonActive("christmas");
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!active) return;

    const canvas = canvasRef.current;
    const hero = document.getElementById(targetId);
    if (!canvas || !hero) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const styles = getComputedStyle(document.documentElement);
    const snowRgb = styles.getPropertyValue("--snow-rgb").trim() || "255, 255, 255";
    const shadeRgb = styles.getPropertyValue("--snow-shade-rgb").trim() || "205, 220, 236";

    let width = 0;
    let height = 0;
    let flakeTarget = 60;
    let maxPile = 24;
    let heights = new Float32Array(0);
    let limits = new Float32Array(0);
    const flakes: Flake[] = [];
    const chunks: Chunk[] = [];
    let pileWasOn = false;
    let lastBaseline = 0;
    let raf = 0;
    let last = 0;

    const resize = () => {
      width = canvas.clientWidth;
      height = canvas.clientHeight;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const columns = Math.ceil(width / COLUMN_WIDTH);
      if (heights.length !== columns) heights = new Float32Array(columns);
      flakeTarget = Math.max(40, Math.min(150, Math.round(width / 9)));
      maxPile = width < 768 ? 20 : 34;
      limits = new Float32Array(columns);
      for (let i = 0; i < columns; i++) {
        const wave = 0.5 + 0.28 * Math.sin(i * 0.11 + 1) + 0.22 * Math.sin(i * 0.37 + 2);
        limits[i] = maxPile * (0.45 + 0.55 * wave);
      }
    };

    const newFlake = (): Flake => {
      const r = 1.2 + Math.random() * 2.6;
      return {
        x: Math.random() * width,
        y: -Math.random() * height * 0.6 - r,
        r,
        vy: 0.7 + r * 0.35,
        phase: Math.random() * Math.PI * 2,
      };
    };

    const deposit = (column: number) => {
      const amount = maxPile * 0.22;
      for (let k = 0; k < DEPOSIT_WEIGHTS.length; k++) {
        for (const side of k === 0 ? [0] : [-k, k]) {
          const i = column + side;
          if (i < 0 || i >= heights.length) continue;
          heights[i] = Math.min(limits[i], heights[i] + amount * DEPOSIT_WEIGHTS[k]);
        }
      }
    };

    const releasePile = (baseline: number) => {
      for (let i = 0; i < heights.length; i++) {
        const h = heights[i];
        if (h < 0.8) continue;
        const pieces = Math.max(1, Math.round(h / 7));
        for (let k = 0; k < pieces; k++) {
          chunks.push({
            x: i * COLUMN_WIDTH + Math.random() * COLUMN_WIDTH,
            y: baseline - Math.random() * h,
            r: 1.4 + Math.random() * 2.2,
            vx: (Math.random() - 0.5) * 0.6,
            vy: Math.random() * 1.5,
          });
        }
      }
      heights.fill(0);
    };

    const hasPile = () => {
      for (let i = 0; i < heights.length; i++) if (heights[i] > 0.3) return true;
      return false;
    };

    const frame = (now: number) => {
      const dt = Math.min((now - last) / 16.667 || 1, 3);
      last = now;

      const heroBottom = hero.getBoundingClientRect().bottom;
      let limit = height;
      // Sit the drift on top of the phone sticky bar when it's showing
      const bar = document.querySelector(".sticky-cta-bar--visible");
      if (bar) {
        const rect = bar.getBoundingClientRect();
        if (rect.height > 0) limit = Math.min(limit, rect.top);
      }
      const baseline = Math.min(heroBottom, limit);
      const heroVisible = heroBottom > 40;
      const pileOn = window.scrollY < SCROLL_RELEASE && baseline > 24;

      if (pileOn) lastBaseline = baseline;
      if (pileWasOn && !pileOn && hasPile()) releasePile(lastBaseline);
      pileWasOn = pileOn;

      ctx.clearRect(0, 0, width, height);

      const target = heroVisible ? flakeTarget : 0;
      while (flakes.length < target) flakes.push(newFlake());

      for (let i = flakes.length - 1; i >= 0; i--) {
        const f = flakes[i];
        f.y += f.vy * dt * (heroVisible ? 1 : 4);
        f.x += (Math.sin(now * 0.0012 + f.phase) * 0.35 + 0.15) * dt;
        if (f.x > width + 5) f.x = -5;

        let done = f.y - f.r > height;
        if (pileOn && !done && f.y < baseline) {
          const column = Math.min(heights.length - 1, Math.max(0, Math.floor(f.x / COLUMN_WIDTH)));
          if (f.y + f.r >= baseline - heights[column]) {
            deposit(column);
            done = true;
          }
        }
        if (done) {
          if (flakes.length <= target) flakes[i] = newFlake();
          else flakes.splice(i, 1);
        }
      }

      ctx.fillStyle = `rgba(${snowRgb}, 0.9)`;
      ctx.beginPath();
      for (const f of flakes) {
        ctx.moveTo(f.x + f.r, f.y);
        ctx.arc(f.x, f.y, f.r, 0, Math.PI * 2);
      }
      ctx.fill();

      if (pileOn && hasPile()) {
        for (let i = 1; i < heights.length - 1; i++) {
          heights[i] += ((heights[i - 1] + heights[i + 1]) / 2 - heights[i]) * 0.04 * dt;
        }
        const gradient = ctx.createLinearGradient(0, baseline - maxPile, 0, baseline + 3);
        gradient.addColorStop(0, `rgba(${snowRgb}, 0.98)`);
        gradient.addColorStop(0.6, `rgba(${snowRgb}, 0.98)`);
        gradient.addColorStop(1, `rgba(${shadeRgb}, 0.98)`);
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.moveTo(0, baseline + 3);
        for (let i = 0; i < heights.length; i++) {
          ctx.lineTo(i * COLUMN_WIDTH + COLUMN_WIDTH / 2, baseline - heights[i]);
        }
        ctx.lineTo(width, baseline + 3);
        ctx.closePath();
        ctx.fill();
      }

      if (chunks.length) {
        ctx.fillStyle = `rgba(${snowRgb}, 0.95)`;
        ctx.beginPath();
        for (let i = chunks.length - 1; i >= 0; i--) {
          const c = chunks[i];
          c.vy = Math.min(c.vy + 0.45 * dt, 22);
          c.y += c.vy * dt;
          c.x += c.vx * dt;
          if (c.y - c.r > height) {
            chunks.splice(i, 1);
            continue;
          }
          ctx.moveTo(c.x + c.r, c.y);
          ctx.arc(c.x, c.y, c.r, 0, Math.PI * 2);
        }
        ctx.fill();
      }

      if (heroVisible || flakes.length || chunks.length) {
        raf = requestAnimationFrame(frame);
      } else {
        raf = 0;
        ctx.clearRect(0, 0, width, height);
      }
    };

    const wake = () => {
      if (raf) return;
      last = performance.now();
      raf = requestAnimationFrame(frame);
    };

    const onResize = () => {
      resize();
      wake();
    };

    resize();
    wake();
    window.addEventListener("scroll", wake, { passive: true });
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", wake);
      window.removeEventListener("resize", onResize);
    };
  }, [active, targetId]);

  if (!active) return null;

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-30 h-full w-full"
    />
  );
}
