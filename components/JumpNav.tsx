"use client";

import { AnimatePresence, motion } from "motion/react";
import { Section } from "@/components/Section";
import { cn } from "@/lib/utils";
import { useActiveSection } from "@/hooks/useActiveSection";
import { useDialog } from "@/hooks/useDialog";

export interface JumpNavSection {
  id: string;
  label: string;
}

interface JumpNavProps {
  sections: JumpNavSection[];
}

function DesktopJumpLink({ section }: { section: JumpNavSection }) {
  const isActive = useActiveSection(section.id);

  return (
    <a
      href={`#${section.id}`}
      className={cn(
        "text-sm transition-colors underline-offset-4 hover:underline",
        isActive ? "text-accent-foreground" : "text-muted-foreground hover:text-foreground"
      )}
      aria-current={isActive ? "location" : undefined}
    >
      {section.label}
    </a>
  );
}

export function JumpNav({ sections }: JumpNavProps) {
  const sheetDialog = useDialog();

  const handleSelectSection = (sectionId: string) => {
    sheetDialog.close();

    const target = document.getElementById(sectionId);
    if (!target) {
      window.location.hash = sectionId;
      return;
    }

    window.setTimeout(() => {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      window.history.replaceState(null, "", `#${sectionId}`);
      const heading = document.getElementById(`${sectionId}-heading`);
      heading?.focus({ preventScroll: true });
    }, 40);
  };

  return (
    <>
      <Section className="pt-0 pb-8 md:pb-10">
        <div className="hidden md:block sticky top-[104px] z-20">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 border-y border-border bg-background/85 backdrop-blur-sm py-5">
            <div className="md:col-span-3">
              <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground">Jump to</p>
            </div>
            <nav
              aria-label="Jump to section"
              className="md:col-span-9 flex flex-wrap items-center gap-x-6 gap-y-3"
            >
              {sections.map((section) => (
                <DesktopJumpLink key={section.id} section={section} />
              ))}
            </nav>
          </div>
        </div>

        <div className="md:hidden sticky top-[88px] z-20">
          <div className="flex justify-start">
            <button
              type="button"
              onClick={(event) => sheetDialog.open(event.currentTarget)}
              className="inline-flex items-center rounded-md border border-border bg-background px-4 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Jump to section"
            >
              Jump to
            </button>
          </div>
        </div>
      </Section>

      <AnimatePresence>
        {sheetDialog.isOpen && (
          <div className="fixed inset-0 z-50" aria-hidden={false}>
            <motion.button
              type="button"
              aria-label="Close jump list"
              className="absolute inset-0 bg-black/30"
              onClick={sheetDialog.close}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: sheetDialog.prefersReducedMotion ? 0 : 0.18, ease: "easeOut" }}
            />

            <motion.div
              ref={sheetDialog.dialogRef}
              role="dialog"
              aria-modal="true"
              aria-labelledby="jump-nav-sheet-title"
              tabIndex={-1}
              initial={sheetDialog.prefersReducedMotion ? false : { y: 24, opacity: 0.98 }}
              animate={{ y: 0, opacity: 1 }}
              exit={sheetDialog.prefersReducedMotion ? { y: 0, opacity: 1 } : { y: 24, opacity: 0.98 }}
              transition={{ duration: sheetDialog.prefersReducedMotion ? 0 : 0.2, ease: "easeOut" }}
              className="absolute bottom-0 left-0 right-0 max-h-[80vh] overflow-y-auto rounded-t-xl border-t border-border bg-background p-6"
            >
              <div className="mb-6 flex items-start justify-between">
                <h2 id="jump-nav-sheet-title" className="text-lg font-medium">
                  Jump to
                </h2>
                <button
                  type="button"
                  onClick={sheetDialog.close}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Close
                </button>
              </div>

              <nav aria-label="Jump to section" className="space-y-2">
                {sections.map((section) => (
                  <button
                    key={section.id}
                    type="button"
                    onClick={() => handleSelectSection(section.id)}
                    className="w-full border border-border px-4 py-4 text-left text-base rounded-md hover:bg-muted/30 transition-colors"
                  >
                    {section.label}
                  </button>
                ))}
              </nav>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
