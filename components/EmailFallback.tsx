"use client";

import { useMemo, useState } from "react";
import { cn } from "@/lib/utils";

interface EmailFallbackProps {
  triggerLabel?: string;
  className?: string;
}

const EMAIL_CHAR_CODES = [
  104, 101, 108, 108, 111, 64, 101, 120, 97, 109, 112, 108, 101, 46, 99, 111, 109,
];

export function EmailFallback({
  triggerLabel = "Prefer email instead?",
  className,
}: EmailFallbackProps) {
  const [isRevealed, setIsRevealed] = useState(false);
  const [copyState, setCopyState] = useState<"idle" | "copied" | "error">("idle");

  const email = useMemo(
    () => String.fromCharCode(...EMAIL_CHAR_CODES),
    []
  );

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopyState("copied");
      window.setTimeout(() => setCopyState("idle"), 1500);
    } catch {
      setCopyState("error");
      window.setTimeout(() => setCopyState("idle"), 1500);
    }
  };

  return (
    <div className={cn("space-y-2", className)}>
      {!isRevealed ? (
        <button
          type="button"
          onClick={() => setIsRevealed(true)}
          className="text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          {triggerLabel}
        </button>
      ) : (
        <div className="flex flex-wrap items-center gap-3">
          <a
            href={`mailto:${email}`}
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            {email}
          </a>
          <button
            type="button"
            onClick={handleCopy}
            className="text-xs border border-border px-2 py-1 rounded-sm text-muted-foreground hover:text-foreground hover:bg-foreground hover:text-background hover:border-foreground transition-all duration-200"
          >
            {copyState === "copied" ? "Copied" : copyState === "error" ? "Try again" : "Copy"}
          </button>
        </div>
      )}
    </div>
  );
}
