"use client";

import { Section } from "@/components/Section";

interface WhenToCallUsColumn {
  label: string;
  items: string[];
}

interface WhenToCallUsProps {
  title?: string;
  intro?: string;
  columns: WhenToCallUsColumn[];
}

export function WhenToCallUs({
  title = "When to call us",
  intro = "Bring us in before the cost of waiting multiplies.",
  columns,
}: WhenToCallUsProps) {
  return (
    <Section className="py-12 border-y border-border">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
        <div className="md:col-span-3">
          <h3 className="text-4xl md:text-5xl lg:text-6xl font-extralight tracking-tight leading-[0.98]">{title}</h3>
          <p className="mt-6 text-base md:text-lg text-muted-foreground max-w-xs">{intro}</p>
        </div>
        <div className="md:col-span-9 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
          {columns.map((column) => (
            <div key={column.label} className="border-l border-border pl-5 md:pl-6">
              <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">{column.label}</p>
              <ul className="mt-4 space-y-4">
                {column.items.map((item) => (
                  <li key={`${column.label}-${item}`} className="text-2xl md:text-[1.9rem] font-extralight leading-[1.08]">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
