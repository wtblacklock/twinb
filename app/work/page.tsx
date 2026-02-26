 "use client";

import { useMemo, useState } from "react";
import { Section } from "@/components/Section";
import { WorkDirectoryCard } from "@/components/WorkDirectoryCard";
import { CTA } from "@/components/CTA";
import { AnimatePresence, motion } from "motion/react";
import { workItems } from "@/lib/work-items";

export default function WorkPage() {
  const filterOptions = useMemo(
    () => ["All Types", ...Array.from(new Set(workItems.map((item) => item.category)))],
    []
  );
  const [activeFilter, setActiveFilter] = useState("All Types");

  const filteredItems = useMemo(() => {
    if (activeFilter === "All Types") return workItems;
    return workItems.filter((item) => item.category === activeFilter);
  }, [activeFilter]);
  const filteredCount = filteredItems.length;
  const projectLabel = filteredCount === 1 ? "Project" : "Projects";

  const featuredItem = filteredItems[0];
  const remainingItems = filteredItems.slice(1);

  return (
    <>
      <Section className="pt-48 md:pt-[150px] lg:pt-[160px] pb-16">
        <div className="max-w-4xl">
          <h1 className="text-[clamp(3rem,5vw,5rem)] leading-tight-editorial font-medium tracking-tight mb-8">
            Selected Work
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl leading-relaxed">
            Case studies in fixing, stabilizing, and scaling products.
          </p>
        </div>
      </Section>

      <Section className="pt-0 pb-24">
        <div
          className="mb-8 flex flex-wrap gap-y-4"
          style={{ columnGap: "13px" }}
        >
          {filterOptions.map((option) => {
            const isActive = option === activeFilter;
            return (
              <button
                key={option}
                type="button"
                onClick={() => setActiveFilter(option)}
                className={`rounded-lg px-5 py-2 text-sm transition-colors ${
                  isActive
                    ? "bg-foreground text-background"
                    : "border border-border text-muted-foreground hover:text-foreground hover:bg-muted/30"
                }`}
              >
                {option}
              </button>
            );
          })}
        </div>
        <div className="flex items-center justify-between mb-8">
          <span className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
            Case Study Directory
          </span>
          <span className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
            {activeFilter === "All Types"
              ? `${filteredCount} ${projectLabel}`
              : `${filteredCount} of ${workItems.length} Projects`}
          </span>
        </div>
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
          >
            {featuredItem ? (
              <>
                <div className="mb-8">
                  <WorkDirectoryCard
                    client={featuredItem.client}
                    title={featuredItem.title}
                    category={featuredItem.category}
                    scope={featuredItem.scope}
                    website={featuredItem.website}
                    outcomeStats={featuredItem.outcomeStats}
                    href={featuredItem.href}
                    visualClassName={featuredItem.visualClassName}
                    featured={true}
                  />
                </div>
                {remainingItems.length > 0 && (
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {remainingItems.map((item) => (
                      <WorkDirectoryCard
                        key={item.href}
                        client={item.client}
                        title={item.title}
                        category={item.category}
                        scope={item.scope}
                        website={item.website}
                        outcomeStats={item.outcomeStats}
                        href={item.href}
                        visualClassName={item.visualClassName}
                      />
                    ))}
                  </div>
                )}
              </>
            ) : (
              <div className="rounded-2xl border border-border px-6 py-8 text-muted-foreground">
                No projects found for this work type.
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </Section>

      <CTA />
    </>
  );
}
