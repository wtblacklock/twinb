"use client";

import { cn } from "@/lib/utils";

interface SectionCTAProps {
  onOpen: (trigger: HTMLElement) => void;
  className?: string;
}

export function SectionCTA({ onOpen, className }: SectionCTAProps) {
  return (
    <>
      <div
        className={cn(
          "hidden md:flex justify-start transition-all duration-200 opacity-0 translate-y-1 pointer-events-none",
          "group-hover/offering:opacity-100 group-hover/offering:translate-y-0 group-hover/offering:pointer-events-auto",
          "group-focus-within/offering:opacity-100 group-focus-within/offering:translate-y-0 group-focus-within/offering:pointer-events-auto",
          className
        )}
      >
        <button
          type="button"
          onClick={(event) => onOpen(event.currentTarget)}
          className="px-6 py-3 border border-border bg-background text-foreground rounded-lg text-sm font-medium hover:bg-foreground hover:text-background hover:border-foreground active:bg-[#333333] active:text-background transition-all duration-200"
        >
          Talk to us about this
        </button>
      </div>

      <div className="md:hidden fixed left-0 right-0 bottom-0 z-40 bg-black px-6 py-4 section-cta-mobile">
        <button
          type="button"
          onClick={(event) => onOpen(event.currentTarget)}
          className="w-full py-4 bg-white text-black rounded-lg text-base font-medium hover:bg-gray-200 active:bg-gray-300 transition-all duration-200"
        >
          Talk to us about this
        </button>
      </div>
    </>
  );
}
