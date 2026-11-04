"use client";

import { useEffect } from "react";

/**
 * Some phones (especially foldables) keep the old page width after rotating
 * or folding, so the page ends up cropped and scrolls sideways. When the
 * screen shape changes, this briefly re-applies the viewport tag, which makes
 * the browser re-fit the page to the new width. Renders nothing.
 */

// Pinch-zoom changes none of these, so zooming never triggers a re-fit.
function screenShape() {
  return [
    window.screen.width,
    window.screen.height,
    window.outerWidth,
    document.documentElement.clientWidth,
  ].join("x");
}

export function ViewportFit() {
  useEffect(() => {
    const meta = document.querySelector<HTMLMetaElement>('meta[name="viewport"]');
    if (!meta) return;

    const original = meta.content;
    let lastShape = screenShape();
    let frame = 0;

    const refit = () => {
      const shape = screenShape();
      if (shape === lastShape) return;
      lastShape = shape;

      meta.content = `${original}, maximum-scale=1`;
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        frame = requestAnimationFrame(() => {
          meta.content = original;
        });
      });
    };

    const orientation = window.screen.orientation;
    window.addEventListener("resize", refit);
    window.addEventListener("orientationchange", refit);
    orientation?.addEventListener("change", refit);

    return () => {
      cancelAnimationFrame(frame);
      meta.content = original;
      window.removeEventListener("resize", refit);
      window.removeEventListener("orientationchange", refit);
      orientation?.removeEventListener("change", refit);
    };
  }, []);

  return null;
}
