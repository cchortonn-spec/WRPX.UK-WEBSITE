"use client";

import { useState } from "react";
import type { SeriesPoint } from "@/lib/analytics-types";

/** A tiny line + soft fill used inside the big number cards. */
export function Sparkline({ values }: { values: number[] }) {
  if (values.length < 2 || values.every((v) => v === 0)) {
    return <div className="dash-spark dash-spark-empty" aria-hidden="true" />;
  }

  const width = 120;
  const height = 36;
  const max = Math.max(...values, 1);
  const step = width / (values.length - 1);
  const points = values.map((v, i) => [i * step, height - 3 - (v / max) * (height - 8)] as const);
  const line = points.map(([x, y], i) => `${i === 0 ? "M" : "L"}${x.toFixed(1)},${y.toFixed(1)}`).join(" ");
  const area = `${line} L${width},${height} L0,${height} Z`;

  return (
    <svg
      className="dash-spark"
      viewBox={`0 0 ${width} ${height}`}
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path d={area} className="dash-spark-fill" />
      <path d={line} className="dash-spark-line" vectorEffect="non-scaling-stroke" />
    </svg>
  );
}

/** Visitors as a soft area, enquiries as pink bars. Hover (or tap) for the exact numbers. */
export function TrendChart({ series }: { series: SeriesPoint[] }) {
  const [active, setActive] = useState<number | null>(null);

  const width = 800;
  const height = 240;
  const padTop = 16;
  const padBottom = 8;
  const innerHeight = height - padTop - padBottom;

  const maxVisitors = Math.max(...series.map((p) => p.sessions), 1);
  const maxLeads = Math.max(...series.map((p) => p.leads), 1);
  const count = series.length;
  const slot = width / Math.max(count, 1);

  const xAt = (i: number) => slot * i + slot / 2;
  const yAt = (v: number) => padTop + innerHeight - (v / maxVisitors) * innerHeight;

  const linePath = series
    .map((p, i) => `${i === 0 ? "M" : "L"}${xAt(i).toFixed(1)},${yAt(p.sessions).toFixed(1)}`)
    .join(" ");
  const areaPath =
    count > 0
      ? `${linePath} L${xAt(count - 1).toFixed(1)},${height - padBottom} L${xAt(0).toFixed(1)},${height - padBottom} Z`
      : "";

  // Show at most ~6 labels when there are lots of points so they never crowd on a narrow screen.
  const labelEvery = count > 8 ? Math.ceil(count / 6) : 1;
  const activePoint = active !== null ? series[active] : null;

  return (
    <div className="dash-chart">
      <svg
        className="dash-chart-svg"
        viewBox={`0 0 ${width} ${height}`}
        preserveAspectRatio="none"
        role="img"
        aria-label="Visitors and enquiries over time"
      >
        {[0.25, 0.5, 0.75].map((f) => (
          <line
            key={f}
            x1={0}
            x2={width}
            y1={padTop + innerHeight * f}
            y2={padTop + innerHeight * f}
            className="dash-chart-grid"
            vectorEffect="non-scaling-stroke"
          />
        ))}

        <path d={areaPath} className="dash-chart-area" />
        <path d={linePath} className="dash-chart-line" vectorEffect="non-scaling-stroke" />

        {series.map((p, i) => {
          if (p.leads === 0) return null;
          const barHeight = Math.max(8, (p.leads / maxLeads) * innerHeight * 0.55);
          const barWidth = Math.min(slot * 0.5, 22);
          return (
            <rect
              key={p.key}
              x={xAt(i) - barWidth / 2}
              y={height - padBottom - barHeight}
              width={barWidth}
              height={barHeight}
              rx={3}
              className="dash-chart-bar"
            />
          );
        })}

        {active !== null ? (
          <line
            x1={xAt(active)}
            x2={xAt(active)}
            y1={padTop}
            y2={height - padBottom}
            className="dash-chart-cursor"
            vectorEffect="non-scaling-stroke"
          />
        ) : null}

        {series.map((p, i) => (
          <rect
            key={`hit-${p.key}`}
            x={slot * i}
            y={0}
            width={slot}
            height={height}
            fill="transparent"
            onMouseEnter={() => setActive(i)}
            onMouseLeave={() => setActive(null)}
            onTouchStart={() => setActive(i)}
          />
        ))}
      </svg>

      {activePoint ? (
        <div
          className="dash-chart-tip"
          style={{ left: `${Math.min(Math.max((xAt(active as number) / width) * 100, 14), 86)}%` }}
        >
          <strong>{activePoint.label}</strong>
          <span>{activePoint.sessions} visitors</span>
          <span className="dash-chart-tip-pink">{activePoint.leads} enquiries</span>
        </div>
      ) : null}

      <div className="dash-chart-axis">
        {series.map((p, i) => (
          <span key={p.key} style={{ width: `${100 / count}%` }}>
            {i % labelEvery === 0 ? p.label : ""}
          </span>
        ))}
      </div>

      <div className="dash-chart-legend">
        <span>
          <i className="dash-dot dash-dot-white" /> Visitors
        </span>
        <span>
          <i className="dash-dot dash-dot-pink" /> Enquiries
        </span>
      </div>
    </div>
  );
}
