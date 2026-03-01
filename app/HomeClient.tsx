"use client";

import { useRef } from "react";
import { Section } from "@/components/Section";
import { EditorialCard } from "@/components/EditorialCard";
import { CTA } from "@/components/CTA";
import Link from "next/link";
import { useDialog } from "@/hooks/useDialog";
import { ServicePanel } from "@/components/ServicePanel";
import { MastheadLines } from "@/components/MastheadLines";

export default function HomeClient() {
  const dialog = useDialog();
  const heroContainerRef = useRef<HTMLDivElement>(null);

  return (
    <>
      {/* Hero Section */}
      <Section className="pt-48 md:pt-[150px] lg:pt-[160px] pb-24 min-h-[80vh] flex flex-col justify-center">
        <div className="relative isolate w-full min-h-[80vh] flex items-center">
          <div ref={heroContainerRef} className="absolute inset-0">
            <MastheadLines containerRef={heroContainerRef} />
          </div>
          <div className="relative z-10 max-w-4xl">
            <p className="mb-8 text-sm font-mono text-muted-foreground uppercase tracking-wider">
              AI Engineering & Transformation
            </p>
            <h1 className="text-[clamp(3rem,5vw,5rem)] leading-tight-editorial font-medium tracking-tight mb-8">
              Build AI-native. Win the next decade.
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl leading-relaxed mb-12">
              Outcome-based AI engineering and transformation for companies ready to compete on intelligence.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center">
              <button
                type="button"
                onClick={(event) => dialog.open(event.currentTarget)}
                className="px-8 py-4 bg-foreground text-background font-medium rounded-lg hover:bg-[#333333] active:bg-[#1a1a1a] transition-all duration-200"
              >
                Start a Conversation
              </button>
            </div>
          </div>
        </div>
      </Section>

      <Section className="pt-0 pb-24">
        <div className="py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12">
            <div className="md:col-span-4 md:pr-8">
              <p className="font-mono text-xs uppercase tracking-[0.14em] text-muted-foreground mb-6">
                The AI moment
              </p>
              <h2 className="text-[clamp(1.6rem,3vw,3.2rem)] leading-[0.95] tracking-tight-editorial font-medium">
                Everyone&apos;s
                <br />
                experimenting.
                <br />
                No one&apos;s shipping.
              </h2>
            </div>

            <div className="md:col-span-8 space-y-8">
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-editorial">
                AI has crossed from hype to infrastructure. Your competitors are building on it.
                <br />
                <br />
                Your team is still in planning mode.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  "Are we AI-absent, AI-integrated, or AI-native?",
                  "Where does AI create the most leverage for us?",
                  "How do we build AI capability we actually own?",
                  "Who owns AI strategy across the company?",
                  "How do we close the gap before competitors do?",
                ].map((item) => (
                  <p
                    key={item}
                    className="bg-[#efefeb] px-4 py-4 text-base md:text-lg leading-snug text-foreground"
                  >
                    {item}
                  </p>
                ))}
              </div>

              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-editorial">
                The window is open. The companies moving now will be impossible to catch.
              </p>

              <div>
                <button
                  type="button"
                  onClick={(event) => dialog.open(event.currentTarget)}
                  className="px-6 py-3 border border-border text-sm font-medium rounded-md hover:bg-foreground hover:text-background hover:border-foreground active:bg-[#333333] active:text-background transition-all duration-200"
                >
                  Start a Conversation
                </button>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Problem Section */}
      <Section className="bg-muted/10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <p className="text-sm font-mono uppercase tracking-wider text-muted-foreground mb-8">The Reality</p>
            <h3 className="text-[clamp(2rem,3.2vw,3.3rem)] font-medium leading-snug-editorial max-w-md">
              Most companies have an AI opinion. Few have a strategy.
            </h3>
          </div>
          <div className="md:col-span-8 md:pt-14">
            <div className="space-y-10">
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-editorial">
                As the cost of intelligence approaches zero, the gap between AI-absent and AI-native widens every quarter.
              </p>

              <p className="text-[clamp(1.5rem,2.2vw,2.4rem)] leading-[1.08] tracking-tight-editorial font-medium max-w-3xl">
                The risk isn&apos;t using AI badly. It&apos;s not using it at all.
              </p>

              <div className="space-y-4 max-w-3xl">
                <div className="grid grid-cols-[28px_1fr] gap-4 border-b border-border pb-4">
                  <span className="font-mono text-xs text-muted-foreground mt-1">01</span>
                  <p className="text-lg leading-relaxed">Most companies don&apos;t have the in-house expertise to build real AI systems.</p>
                </div>
                <div className="grid grid-cols-[28px_1fr] gap-4 border-b border-border pb-4">
                  <span className="font-mono text-xs text-muted-foreground mt-1">02</span>
                  <p className="text-lg leading-relaxed">No one owns AI strategy — so it stays scattered and never ships.</p>
                </div>
                <div className="grid grid-cols-[28px_1fr] gap-4 border-b border-border pb-4">
                  <span className="font-mono text-xs text-muted-foreground mt-1">03</span>
                  <p className="text-lg leading-relaxed">
                    Tools get adopted. Organizational capability never gets built.
                  </p>
                </div>
              </div>

              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-editorial">
                TwinB closes the gap — engineering AI systems that reach production and transforming organizations that sustain the shift.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Pillars Section */}
      <Section>
        <div className="mb-16">
          <h2 className="text-[clamp(2rem,3.2vw,3.25rem)] leading-snug-editorial font-medium mb-4">Our Practice</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <EditorialCard
            title="AI Engineering"
            description="Outcome-based engineering squads that leverage AI acceleration to ship production-grade software faster and more affordably. You pay for features delivered, not hours logged."
            href="/ai-engineering"
            meta="01"
          />
          <EditorialCard
            title="AI Transformation"
            description="From AI-scattered to AI-native. We architect the strategy, process, people, and tooling transformation for companies ready to compete on intelligence."
            href="/ai-transformation"
            meta="02"
          />
        </div>
      </Section>

      {/* Process Preview */}
      <Section className="bg-muted/10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <h2 className="text-3xl font-medium mb-4">How we work</h2>
            <p className="text-muted-foreground mb-8">
              From first conversation to production AI. No black boxes, no open-ended engagements.
            </p>
          </div>
          <div className="md:col-span-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-8">
              {[
                { step: "01", title: "Assess & Prioritize", desc: "We map your business against the AI opportunity — surfacing where leverage is highest and what's worth building." },
                { step: "02", title: "Architect the Plan", desc: "Clear roadmap. What gets built, what gets transformed, what gets deferred — milestones tied to outcomes, not effort." },
                { step: "03", title: "Build & Ship", desc: "Elite engineering pods in two-week sprints. You pay for features delivered to production, not hours logged." },
                { step: "04", title: "Transform & Enable", desc: "We shift how your organization thinks, works, and builds — so the capability stays after we leave." },
                { step: "05", title: "Measure & Compound", desc: "We track ROI, optimize what's working, and compound the gains. AI-native is a direction, not a destination." },
              ].map((item) => (
                <div key={item.step} className="border-t border-border pt-4">
                  <span className="font-mono text-xs text-muted-foreground block mb-2">{item.step}</span>
                  <h4 className="text-lg font-medium mb-2">{item.title}</h4>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <CTA
        title="Win the next decade."
        description="Disrupt yourself before your competitors do it for you."
        buttonText="Start a Conversation"
        onOpen={(trigger) => dialog.open(trigger)}
      />

      <ServicePanel
        isOpen={dialog.isOpen}
        onClose={dialog.close}
        dialogRef={dialog.dialogRef}
        prefersReducedMotion={dialog.prefersReducedMotion}
      />
    </>
  );
}
