"use client";

import { useEffect, useRef } from "react";
import { useSeasonActive } from "@/lib/use-season-active";

/**
 * Christmas snow for the homepage hero — same canvas approach as 3Sixty Roofing.
 *
 * - Flakes fall over the hero and settle along its bottom edge, building a snow drift.
 * - The same flakes also land on the top edge of the hero buttons. Each landed flake
 *   rests for a moment, the drift builds, then slides off one end once it is heavy.
 * - When the visitor scrolls down, the settled snow breaks loose, falls and disappears.
 * - Once the hero is out of view the snow stops completely (nothing keeps running).
 * - Nothing is drawn for people whose device is set to "reduce motion".
 * - One transparent canvas that ignores clicks and taps.
 *
 * Colours: --snow-rgb / --snow-shade-rgb in globals.css.
 */

type Flake = { x: number; y: number; r: number; vy: number; phase: number };
type Chunk = { x: number; y: number; r: number; vx: number; vy: number };

/** Snow resting on the flat top of a button. */
type Ledge = {
  el: HTMLElement;
  heights: Float32Array;
  limits: Float32Array;
  fullAt: number;
  quietUntil: number;
  /** 0 = resting, 1 = sliding off the right end, -1 = sliding off the left end. */
  slide: number;
  slideOffset: number;
  slideSpeed: number;
};

/** A flake that has just landed on a button, shown briefly before it melts into the drift. */
type Landed = { ledge: Ledge; dx: number; r: number; life: number };

const COLUMN_WIDTH = 8;
const LEDGE_COLUMN = 5;
const LEDGE_INSET = 8;
// How far the drift's base sinks over the button's top edge so it looks attached.
const LEDGE_OVERLAP = 3;
const SCROLL_RELEASE = 40;
const DEPOSIT_WEIGHTS = [1, 0.75, 0.45, 0.2];
const LEDGE_HOLD = 2200;
const LEDGE_QUIET = 600;

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
    let ledgeMax = 11;
    let heights = new Float32Array(0);
    let limits = new Float32Array(0);
    const flakes: Flake[] = [];
    const chunks: Chunk[] = [];
    const landed: Landed[] = [];
    let ledges: Ledge[] = [];
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
      ledgeMax = width < 768 ? 12 : 15;
      limits = new Float32Array(columns);
      for (let i = 0; i < columns; i++) {
        const wave = 0.5 + 0.28 * Math.sin(i * 0.11 + 1) + 0.22 * Math.sin(i * 0.37 + 2);
        limits[i] = maxPile * (0.45 + 0.55 * wave);
      }
      ledges = measureLedges(hero, ledgeMax);
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

    const depositOnto = (
      columns: Float32Array,
      columnLimits: Float32Array,
      column: number,
      amount: number
    ) => {
      for (let k = 0; k < DEPOSIT_WEIGHTS.length; k++) {
        for (const side of k === 0 ? [0] : [-k, k]) {
          const i = column + side;
          if (i < 0 || i >= columns.length) continue;
          columns[i] = Math.min(columnLimits[i], columns[i] + amount * DEPOSIT_WEIGHTS[k]);
        }
      }
    };

    const spawnChunks = (x: number, y: number, pile: number, pieces: number, push = 0) => {
      for (let k = 0; k < pieces; k++) {
        chunks.push({
          x,
          y: y - Math.random() * pile,
          r: 1.3 + Math.random() * 1.8,
          vx: push + (Math.random() - 0.5) * 0.7,
          vy: 0.2 + Math.random() * 1.2,
        });
      }
    };

    const releasePile = (baseline: number) => {
      for (let i = 0; i < heights.length; i++) {
        const h = heights[i];
        if (h < 0.8) continue;
        spawnChunks(
          i * COLUMN_WIDTH + Math.random() * COLUMN_WIDTH,
          baseline,
          h,
          Math.max(1, Math.round(h / 7))
        );
      }
      heights.fill(0);
    };

    const releaseLedge = (ledge: Ledge, left: number, top: number) => {
      for (let i = 0; i < ledge.heights.length; i++) {
        const h = ledge.heights[i];
        if (h < 0.7) continue;
        spawnChunks(left + i * LEDGE_COLUMN + LEDGE_COLUMN / 2, top, h, 1);
      }
      ledge.heights.fill(0);
      ledge.fullAt = 0;
      ledge.slide = 0;
      ledge.quietUntil = performance.now() + LEDGE_QUIET;
    };

    // Move a sliding drift one column toward its edge; the column pushed past
    // the edge breaks into chunks and falls.
    const shiftLedge = (ledge: Ledge, left: number, top: number) => {
      const h = ledge.heights;
      const n = h.length;
      const edgeX = ledge.slide > 0 ? left + n * LEDGE_COLUMN : left;
      const falling = ledge.slide > 0 ? h[n - 1] : h[0];
      if (falling > 0.7) {
        spawnChunks(edgeX, top, falling, Math.max(1, Math.round(falling / 4)), ledge.slide * 0.9);
      }
      if (ledge.slide > 0) {
        h.copyWithin(1, 0, n - 1);
        h[0] = 0;
      } else {
        h.copyWithin(0, 1);
        h[n - 1] = 0;
      }
    };

    const hasPile = () => {
      for (let i = 0; i < heights.length; i++) if (heights[i] > 0.3) return true;
      return false;
    };

    const ledgeHasSnow = (ledge: Ledge) => {
      for (let i = 0; i < ledge.heights.length; i++) if (ledge.heights[i] > 0.4) return true;
      return false;
    };

    const ledgeIsFull = (ledge: Ledge) => {
      let filled = 0;
      let counted = 0;
      for (let i = 0; i < ledge.heights.length; i++) {
        if (ledge.limits[i] < 1) continue;
        counted += 1;
        if (ledge.heights[i] > ledge.limits[i] * 0.82) filled += 1;
      }
      return counted > 0 && filled / counted > 0.7;
    };

    const drawLedge = (ledge: Ledge, left: number, top: number) => {
      if (!ledgeHasSnow(ledge)) return;
      const base = top + LEDGE_OVERLAP;
      const shift = ledge.slide * ledge.slideOffset;
      const n = ledge.heights.length;
      // Thin patches stay at the edge; once there's real snow the base also
      // covers the overlap strip so the drift sits on the button.
      const pointY = (h: number) => base - h - LEDGE_OVERLAP * Math.min(1, h / 1.5);

      const gradient = ctx.createLinearGradient(0, top - ledgeMax, 0, base);
      gradient.addColorStop(0, `rgba(${snowRgb}, 1)`);
      gradient.addColorStop(0.6, `rgba(${snowRgb}, 1)`);
      gradient.addColorStop(1, `rgba(${shadeRgb}, 1)`);
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.moveTo(left + shift - 2, base);
      let px = left + shift - 2;
      let py = pointY(0);
      for (let i = 0; i < n; i++) {
        const x = left + shift + i * LEDGE_COLUMN + LEDGE_COLUMN / 2;
        const y = pointY(ledge.heights[i]);
        ctx.quadraticCurveTo(px, py, (px + x) / 2, (py + y) / 2);
        px = x;
        py = y;
      }
      const endX = left + shift + n * LEDGE_COLUMN + 2;
      ctx.quadraticCurveTo(px, py, endX, base);
      ctx.closePath();
      ctx.fill();
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
      if (pileWasOn && !pileOn && (hasPile() || ledges.some(ledgeHasSnow))) {
        if (hasPile()) releasePile(lastBaseline);
        for (const ledge of ledges) {
          const rect = ledge.el.getBoundingClientRect();
          if (ledgeHasSnow(ledge)) releaseLedge(ledge, rect.left + LEDGE_INSET, rect.top);
        }
      }
      pileWasOn = pileOn;

      const placed = ledges
        .map((ledge) => {
          const rect = ledge.el.getBoundingClientRect();
          const left = rect.left + LEDGE_INSET;
          const span = rect.width - LEDGE_INSET * 2;
          return { ledge, rect, left, span };
        })
        .filter(
          (item) =>
            item.span > 16 &&
            item.rect.top > 0 &&
            item.rect.top < baseline - 6
        );

      if (pileOn) {
        for (const { ledge, left, rect } of placed) {
          if (ledge.slide) {
            ledge.slideSpeed = Math.min(ledge.slideSpeed + 0.08 * dt, 5);
            ledge.slideOffset += ledge.slideSpeed * dt;
            while (ledge.slideOffset >= LEDGE_COLUMN) {
              ledge.slideOffset -= LEDGE_COLUMN;
              shiftLedge(ledge, left, rect.top);
            }
            if (!ledgeHasSnow(ledge)) releaseLedge(ledge, left, rect.top);
            continue;
          }
          if (!ledgeIsFull(ledge)) {
            ledge.fullAt = 0;
            continue;
          }
          if (!ledge.fullAt) ledge.fullAt = now;
          if (now - ledge.fullAt > LEDGE_HOLD) {
            ledge.slide = Math.random() < 0.5 ? -1 : 1;
            ledge.slideOffset = 0;
            ledge.slideSpeed = 0.15;
          }
        }
      }

      ctx.clearRect(0, 0, width, height);

      const target = heroVisible ? flakeTarget : 0;
      while (flakes.length < target) flakes.push(newFlake());

      for (let i = flakes.length - 1; i >= 0; i--) {
        const f = flakes[i];
        const prevY = f.y;
        f.y += f.vy * dt * (heroVisible ? 1 : 4);
        f.x += (Math.sin(now * 0.0012 + f.phase) * 0.35 + 0.15) * dt;
        if (f.x > width + 5) f.x = -5;

        let done = f.y - f.r > height;

        if (pileOn && !done) {
          for (const { ledge, left, span, rect } of placed) {
            if (ledge.slide || now < ledge.quietUntil) continue;
            if (f.x < left || f.x > left + span) continue;
            const column = Math.min(
              ledge.heights.length - 1,
              Math.max(0, Math.floor((f.x - left) / LEDGE_COLUMN))
            );
            const surface = rect.top - ledge.heights[column];
            // The button is solid. A flake that reaches the top stays there.
            if (prevY < surface && f.y + f.r >= surface) {
              depositOnto(ledge.heights, ledge.limits, column, ledgeMax * 0.22);
              landed.push({ ledge, dx: f.x - left, r: f.r, life: 1 });
              done = true;
              break;
            }
            // Anything that has fallen onto the face of the box is hidden by it.
            if (f.y >= rect.top && f.y <= rect.bottom && f.x >= rect.left && f.x <= rect.right) {
              done = true;
              break;
            }
          }
        }

        if (pileOn && !done && f.y < baseline) {
          const column = Math.min(heights.length - 1, Math.max(0, Math.floor(f.x / COLUMN_WIDTH)));
          if (f.y + f.r >= baseline - heights[column]) {
            depositOnto(heights, limits, column, maxPile * 0.22);
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
        const onABox = placed.some(
          ({ rect }) =>
            f.x >= rect.left &&
            f.x <= rect.right &&
            f.y >= rect.top &&
            f.y <= rect.bottom
        );
        if (onABox) continue;
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

      if (pileOn) {
        for (const { ledge, left, rect } of placed) {
          if (!ledge.slide) {
            for (let i = 1; i < ledge.heights.length - 1; i++) {
              ledge.heights[i] +=
                ((ledge.heights[i - 1] + ledge.heights[i + 1]) / 2 - ledge.heights[i]) * 0.05 * dt;
              if (ledge.heights[i] > ledge.limits[i]) ledge.heights[i] = ledge.limits[i];
            }
          }
          drawLedge(ledge, left, rect.top);
        }

        for (let i = landed.length - 1; i >= 0; i--) {
          const l = landed[i];
          l.life -= 0.03 * dt;
          const spot = placed.find((p) => p.ledge === l.ledge);
          if (l.life <= 0 || !spot || l.ledge.slide) {
            landed.splice(i, 1);
            continue;
          }
          const column = Math.min(
            l.ledge.heights.length - 1,
            Math.max(0, Math.floor(l.dx / LEDGE_COLUMN))
          );
          const y = spot.rect.top - l.ledge.heights[column] - l.r * 0.3;
          ctx.fillStyle = `rgba(${snowRgb}, ${0.95 * l.life})`;
          ctx.beginPath();
          ctx.arc(spot.left + l.dx, y, l.r, 0, Math.PI * 2);
          ctx.fill();
        }
      } else if (landed.length) {
        landed.length = 0;
      }

      if (chunks.length) {
        ctx.fillStyle = `rgba(${snowRgb}, 0.95)`;
        ctx.beginPath();
        for (let i = chunks.length - 1; i >= 0; i--) {
          const c = chunks[i];
          const prevChunkY = c.y;
          c.vy = Math.min(c.vy + 0.45 * dt, 22);
          c.y += c.vy * dt;
          c.x += c.vx * dt;
          if (c.y - c.r > height) {
            chunks.splice(i, 1);
            continue;
          }
          let settled = false;
          if (pileOn) {
            for (const { ledge, left, span, rect } of placed) {
              if (ledge.slide || now < ledge.quietUntil) continue;
              if (c.x < left || c.x > left + span) continue;
              const column = Math.min(
                ledge.heights.length - 1,
                Math.max(0, Math.floor((c.x - left) / LEDGE_COLUMN))
              );
              const surface = rect.top - ledge.heights[column];
              if (prevChunkY < surface && c.y >= surface) {
                depositOnto(ledge.heights, ledge.limits, column, c.r * 0.55);
                settled = true;
                break;
              }
            }
          }
          if (settled) {
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
    document.fonts?.ready.then(() => {
      if (!canvas.isConnected) return;
      resize();
      wake();
    });

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

function measureLedges(hero: HTMLElement, max: number): Ledge[] {
  const ledges: Ledge[] = [];
  hero.querySelectorAll<HTMLElement>(".immersive-hero-whatsapp, .immersive-hero-gallery").forEach((el) => {
    const rect = el.getBoundingClientRect();
    const span = Math.max(0, rect.width - LEDGE_INSET * 2);
    if (span < 20) return;
    const count = Math.max(4, Math.ceil(span / LEDGE_COLUMN));
    const limits = new Float32Array(count);
    for (let i = 0; i < count; i++) {
      // Rounded ends over the corners, a fuller pillow across the middle.
      const fromEdge = (Math.min(i, count - 1 - i) + 0.5) * LEDGE_COLUMN;
      const fade = Math.sin((Math.min(1, fromEdge / 26) * Math.PI) / 2);
      const wave = 0.8 + 0.13 * Math.sin(i * 0.29 + 0.4) + 0.07 * Math.sin(i * 0.83 + 1.7);
      limits[i] = max * wave * fade;
    }
    ledges.push({
      el,
      heights: new Float32Array(count),
      limits,
      fullAt: 0,
      quietUntil: 0,
      slide: 0,
      slideOffset: 0,
      slideSpeed: 0,
    });
  });
  return ledges;
}
