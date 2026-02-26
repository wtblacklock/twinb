"use client";

import { useEffect, useState } from "react";

export function useActiveSection(sectionId: string) {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const target = document.getElementById(sectionId);
    if (!target) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsActive(entry.isIntersecting && entry.intersectionRatio >= 0.55);
      },
      {
        threshold: [0, 0.55, 0.7, 1],
      }
    );

    observer.observe(target);

    return () => observer.disconnect();
  }, [sectionId]);

  return isActive;
}
