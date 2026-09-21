"use client";

import { useMemo } from "react";

/**
 * Subtle DNA helix backdrop for light sections.
 * Renders as an absolutely-positioned layer — parent must be `relative`.
 */
export default function DnaBackdrop({
  className = "",
  turns = 3.4,
  rungs = 30,
  amplitude = 70,
  cx = 110,
}) {
  const W = 760;
  const H = 420;

  const { strandA, strandB, pairs } = useMemo(() => {
    const steps = 180;
    const phase = Math.PI;

    const pt = (t, offset) => {
      const a = t * Math.PI * 2 * turns + offset;
      return {
        x: cx + Math.sin(a) * amplitude,
        y: -30 + t * (H + 60),
        d: Math.cos(a),
      };
    };

    const toPath = (offset) =>
      Array.from({ length: steps + 1 }, (_, i) => {
        const p = pt(i / steps, offset);
        return `${i === 0 ? "M" : "L"}${p.x.toFixed(1)} ${p.y.toFixed(1)}`;
      }).join(" ");

    const pairList = Array.from({ length: rungs }, (_, i) => {
      const t = (i + 0.5) / rungs;
      return { a: pt(t, 0), b: pt(t, phase), i };
    });

    return { strandA: toPath(0), strandB: toPath(phase), pairs: pairList };
  }, [turns, rungs, amplitude, cx]);

  const molecules = [
    [232, 96, 1], [246, 236, 0.95], [40, 320, 1.05],
    [196, 172, 0.6], [24, 70, 0.55], [320, 300, 0.5],
  ];

  const hexes = [
    [260, 150, 44], [338, 196, 44], [338, 104, 44],
    [416, 150, 44], [182, 250, 44], [416, 58, 44],
  ];

  const hexPoints = (x, y, r) =>
    Array.from({ length: 6 }, (_, i) => {
      const a = (Math.PI / 3) * i + Math.PI / 6;
      return `${(x + r * Math.cos(a)).toFixed(1)},${(y + r * Math.sin(a)).toFixed(1)}`;
    }).join(" ");

  return (
    <svg
      className={`dna-bd pointer-events-none absolute inset-0 h-full w-full ${className}`}
      viewBox={`0 0 ${W} ${H}`}
      preserveAspectRatio="xMinYMid slice"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="bd-strandA" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="var(--color-slate-dark, #1d3b45)" />
          <stop offset="45%" stopColor="var(--color-slate, #3d6b76)" />
          <stop offset="70%" stopColor="var(--color-slate-light, #8fb3ba)" />
          <stop offset="100%" stopColor="var(--color-slate, #3d6b76)" />
        </linearGradient>
        <linearGradient id="bd-strandB" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="var(--color-slate-light, #8fb3ba)" />
          <stop offset="55%" stopColor="var(--color-slate, #3d6b76)" />
          <stop offset="100%" stopColor="var(--color-slate-light, #8fb3ba)" />
        </linearGradient>

        <radialGradient id="bd-halo" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0%" stopColor="var(--color-slate-light, #8fb3ba)" stopOpacity="0.35" />
          <stop offset="100%" stopColor="var(--color-slate-light, #8fb3ba)" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="bd-atom" cx="0.35" cy="0.3" r="0.85">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="60%" stopColor="var(--color-slate-light, #8fb3ba)" />
          <stop offset="100%" stopColor="var(--color-slate, #3d6b76)" />
        </radialGradient>

        <filter id="bd-blur" x="-60%" y="-60%" width="220%" height="220%">
          <feGaussianBlur stdDeviation="14" />
        </filter>

        {/* fade out toward the right so headline stays readable */}
        <linearGradient id="bd-fade" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#fff" stopOpacity="1" />
          <stop offset="40%" stopColor="#fff" stopOpacity="0.45" />
          <stop offset="72%" stopColor="#fff" stopOpacity="0" />
        </linearGradient>
        <mask id="bd-mask">
          <rect width={W} height={H} fill="url(#bd-fade)" />
        </mask>
      </defs>

      <g mask="url(#bd-mask)">
        {/* halos */}
        <ellipse cx={cx} cy="90" rx="150" ry="120" fill="url(#bd-halo)" filter="url(#bd-blur)" />
        <ellipse cx={cx + 20} cy="320" rx="140" ry="110" fill="url(#bd-halo)" filter="url(#bd-blur)" />

        {/* hex lattice */}
        <g opacity="0.6">
          {hexes.map(([x, y, r], i) => (
            <polygon
              key={i}
              points={hexPoints(x, y, r)}
              fill="none"
              stroke="var(--color-slate, #3d6b76)"
              strokeOpacity="0.28"
              strokeWidth="1"
            />
          ))}
          {hexes.map(([x, y], i) => (
            <circle
              key={`n${i}`}
              cx={x}
              cy={y - 44}
              r="2.4"
              fill="var(--color-slate, #3d6b76)"
              className="bd-twinkle"
              style={{ animationDelay: `${i * 0.5}s` }}
            />
          ))}
        </g>

        {/* helix */}
        <g className="bd-breathe">
          <path
            d={strandB}
            fill="none"
            stroke="url(#bd-strandB)"
            strokeWidth="7"
            strokeLinecap="round"
            opacity="0.45"
          />

          {pairs.map(({ a, b, i }) => {
            const depth = (a.d + 1) / 2;
            return (
              <line
                key={i}
                x1={a.x}
                y1={a.y}
                x2={b.x}
                y2={b.y}
                stroke="var(--color-slate, #3d6b76)"
                strokeWidth={1.2 + depth * 1.8}
                strokeLinecap="round"
                opacity={0.15 + depth * 0.5}
                className="bd-rung"
                style={{ animationDelay: `${i * 0.08}s` }}
              />
            );
          })}

          <path
            d={strandA}
            fill="none"
            stroke="url(#bd-strandA)"
            strokeWidth="9"
            strokeLinecap="round"
            opacity="0.85"
          />
          <path
            d={strandA}
            fill="none"
            stroke="#ffffff"
            strokeOpacity="0.5"
            strokeWidth="2"
            strokeLinecap="round"
          />

          {/* travelling highlight */}
          <path
            d={strandA}
            fill="none"
            stroke="#ffffff"
            strokeOpacity="0.9"
            strokeWidth="9"
            strokeLinecap="round"
            strokeDasharray="70 3000"
            className="bd-pulse"
          />
        </g>

        {/* molecules */}
        {molecules.map(([x, y, s], i) => (
          <g key={i} transform={`translate(${x} ${y}) scale(${s})`}>
            <g
              className="bd-float"
              style={{ animationDelay: `${i * 0.9}s`, animationDuration: `${6 + i}s` }}
            >
              <line x1="0" y1="0" x2="13" y2="-9" stroke="var(--color-slate, #3d6b76)" strokeOpacity="0.4" strokeWidth="1.4" />
              <line x1="0" y1="0" x2="10" y2="12" stroke="var(--color-slate, #3d6b76)" strokeOpacity="0.4" strokeWidth="1.4" />
              <line x1="13" y1="-9" x2="10" y2="12" stroke="var(--color-slate, #3d6b76)" strokeOpacity="0.28" strokeWidth="1.4" />
              <circle cx="0" cy="0" r="6" fill="url(#bd-atom)" />
              <circle cx="13" cy="-9" r="5" fill="url(#bd-atom)" />
              <circle cx="10" cy="12" r="4.5" fill="url(#bd-atom)" />
            </g>
          </g>
        ))}

        {/* dust */}
        {[[70, 40], [120, 260], [210, 70], [258, 190], [34, 210], [160, 360], [300, 120]].map(
          ([x, y], i) => (
            <circle
              key={i}
              cx={x}
              cy={y}
              r={i % 3 === 0 ? 2 : 1.3}
              fill="var(--color-slate, #3d6b76)"
              className="bd-twinkle"
              style={{ animationDelay: `${i * 0.4}s` }}
            />
          )
        )}
      </g>

      <style jsx>{`
        .bd-breathe {
          transform-origin: ${cx}px ${H / 2}px;
          animation: bd-breathe 10s ease-in-out infinite;
        }
        @keyframes bd-breathe {
          0%, 100% { transform: translateY(0) scaleX(1); }
          50%      { transform: translateY(-10px) scaleX(0.96); }
        }

        .bd-rung { animation: bd-rung 3.4s ease-in-out infinite; }
        @keyframes bd-rung {
          0%, 100% { opacity: inherit; }
          50%      { opacity: 0.18; }
        }

        .bd-pulse {
          stroke-dashoffset: 2400;
          animation: bd-pulse 5s linear infinite;
          filter: drop-shadow(0 0 6px rgba(255, 255, 255, 0.9));
        }
        @keyframes bd-pulse {
          from { stroke-dashoffset: 2400; }
          to   { stroke-dashoffset: 0; }
        }

        .bd-float {
          animation-name: bd-float;
          animation-timing-function: ease-in-out;
          animation-iteration-count: infinite;
        }
        @keyframes bd-float {
          0%, 100% { transform: translateY(0); }
          50%      { transform: translateY(-9px); }
        }

        .bd-twinkle { animation: bd-twinkle 3.2s ease-in-out infinite; }
        @keyframes bd-twinkle {
          0%, 100% { opacity: 0.2; }
          50%      { opacity: 0.85; }
        }

        @media (prefers-reduced-motion: reduce) {
          .bd-breathe, .bd-rung, .bd-pulse, .bd-float, .bd-twinkle { animation: none; }
        }
      `}</style>
    </svg>
  );
}