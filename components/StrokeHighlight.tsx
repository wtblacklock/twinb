"use client";

import { ReactNode, useEffect, useRef, useState } from "react";

interface StrokeHighlightProps {
  children: ReactNode;
  variant?: "underline" | "highlight";
  tone?: "yellow";
  scale?: number;
  hideOnMobile?: boolean;
}

export function StrokeHighlight({
  children,
  variant = "underline",
  tone = "yellow",
  scale = 1,
  hideOnMobile = false,
}: StrokeHighlightProps) {
  const [isActive, setIsActive] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const containerRef = useRef<HTMLSpanElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);
  }, []);

  useEffect(() => {
    const element = containerRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.intersectionRatio >= 0.5 && !isActive) {
            setIsActive(true);
            observer.unobserve(element);
          }
        });
      },
      {
        threshold: Array.from({ length: 101 }, (_, i) => i / 100),
      }
    );

    observer.observe(element);

    return () => observer.unobserve(element);
  }, [isActive]);

  const getDashLength = () => {
    if (variant === "underline") return 400;
    return 400;
  };

  const dashLength = getDashLength();
  const strokeColor =
    tone === "yellow" ? "rgba(251, 218, 86, 0.55)" : "rgba(251, 218, 86, 0.55)";

  const renderUnderlineStroke = () => {
    return (
      <svg
        ref={svgRef}
        width="100%"
        height="24"
        viewBox="0 0 300 24"
        preserveAspectRatio="none"
        className={`absolute bottom-1 left-0 pointer-events-none ${hideOnMobile ? "hidden md:block" : ""}`}
        style={{ overflow: "visible" }}
      >
        <path
          d="M 10 18 Q 75 14 150 18 T 290 18"
          stroke={strokeColor}
          strokeWidth={10 * scale}
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeDasharray={dashLength}
          strokeDashoffset={isActive && !prefersReducedMotion ? 0 : dashLength}
          style={{
            transition: prefersReducedMotion
              ? "none"
              : `stroke-dashoffset 1000ms cubic-bezier(0.34, 1.56, 0.64, 1)`,
          }}
        />
      </svg>
    );
  };

  const renderHighlightStroke = () => {
    return (
      <svg
        ref={svgRef}
        width="100%"
        height="40"
        viewBox="0 0 300 40"
        preserveAspectRatio="none"
        className={`absolute -top-1 left-0 pointer-events-none ${hideOnMobile ? "hidden md:block" : ""}`}
        style={{ overflow: "visible" }}
      >
        <path
          d="M 8 6 L 292 6 Q 296 6 296 10 L 296 30 Q 296 34 292 34 L 8 34 Q 4 34 4 30 L 4 10 Q 4 6 8 6"
          stroke={strokeColor}
          strokeWidth="5"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeDasharray={dashLength}
          strokeDashoffset={isActive && !prefersReducedMotion ? 0 : dashLength}
          style={{
            transition: prefersReducedMotion
              ? "none"
              : `stroke-dashoffset 1100ms cubic-bezier(0.34, 1.56, 0.64, 1)`,
          }}
        />
      </svg>
    );
  };

  return (
    <span
      ref={containerRef}
      className="relative inline-block"
      style={{ display: "inline-block" }}
    >
      {variant === "underline" ? renderUnderlineStroke() : renderHighlightStroke()}
      <span className="relative z-10">{children}</span>
    </span>
  );
}
