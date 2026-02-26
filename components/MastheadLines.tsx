"use client";

import type { RefObject } from "react";

interface MastheadLinesProps {
  containerRef: RefObject<HTMLElement>;
}

export function MastheadLines({ containerRef: _containerRef }: MastheadLinesProps) {
  return (
    <div className="absolute inset-x-0 bottom-0 top-[25px] pointer-events-none -z-10" aria-hidden="true">
      <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="h-full w-full">
        <g stroke="rgba(138, 138, 138, 0.14)" strokeWidth="0.24" vectorEffect="non-scaling-stroke">
          {/* Full-span structural lines */}
          <line x1="20" y1="100" x2="100" y2="20" />
          <line x1="0" y1="10" x2="90" y2="100" />
          <line x1="0" y1="30" x2="30" y2="0" />

          {/* Staggered lines ending at intersections */}
          <line x1="0" y1="90" x2="55" y2="35" />
          <line x1="20" y1="0" x2="70" y2="50" />
          <line x1="0" y1="60" x2="25" y2="35" />
          <line x1="0" y1="40" x2="25" y2="65" />
        </g>
      </svg>
    </div>
  );
}
