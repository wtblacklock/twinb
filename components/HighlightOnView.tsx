"use client";

import { ReactNode, useEffect, useRef, useState } from "react";

interface HighlightOnViewProps {
  children: ReactNode;
  compact?: boolean;
}

export function HighlightOnView({ children, compact = false }: HighlightOnViewProps) {
  const [shouldHighlight, setShouldHighlight] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const elementRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    // Check prefers-reduced-motion
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);
  }, []);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.intersectionRatio >= 0.45 && !shouldHighlight) {
            setShouldHighlight(true);
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
  }, [shouldHighlight]);

  return (
    <>
      <style>{`
        @keyframes highlightSwipe {
          from {
            background-size: 0% 100%;
          }
          to {
            background-size: 100% 100%;
          }
        }

        .highlight-view {
          display: inline;
          background: linear-gradient(
            to right,
            rgba(251, 218, 86, 0.5),
            rgba(251, 218, 86, 0.5)
          );
          background-position: left center;
          background-repeat: no-repeat;
          background-size: 0% 100%;
          padding: 0.125rem 0;
          border-radius: 0.125rem;
          box-decoration-break: clone;
          -webkit-box-decoration-break: clone;
        }

        .highlight-view.compact {
          padding: 0.15rem 0;
        }

        .highlight-view.active {
          animation: highlightSwipe 900ms ease-out forwards;
        }

        .highlight-view.active.reduced-motion {
          animation: none;
          background-size: 100% 100%;
        }
      `}</style>
      <span
        ref={elementRef}
        className={`highlight-view ${compact ? "compact" : ""} ${shouldHighlight ? "active" : ""} ${
          shouldHighlight && prefersReducedMotion ? "reduced-motion" : ""
        }`}
      >
        {children}
      </span>
    </>
  );
}
