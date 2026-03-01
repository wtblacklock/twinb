"use client";

import { useRef } from "react";
import { Section } from "@/components/Section";
import { EditorialCard } from "@/components/EditorialCard";
import { WorkDirectoryCard } from "@/components/WorkDirectoryCard";
import { CTA } from "@/components/CTA";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { workItems } from "@/lib/work-items";
import { useDialog } from "@/hooks/useDialog";
import { ServicePanel } from "@/components/ServicePanel";
import { MastheadLines } from "@/components/MastheadLines";

export default function HomeClient() {
  const featuredWork = workItems[0];
  const secondaryWork = workItems.slice(1, 3);
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
              <Link
                href="/work"
                className="px-8 py-4 border border-border font-medium rounded-lg hover:bg-foreground hover:text-background hover:border-foreground active:bg-[#333333] active:text-background transition-all duration-200"
              >
                See our work
              </Link>
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
              <h2 className="text-[clamp(2.2rem,4vw,4.5rem)] leading-[0.95] tracking-tight-editorial font-medium">
                Everyone&apos;s
                <br />
                experimenting.
                <br />
                No one&apos;s shipping.
              </h2>
            </div>

            <div className="md:col-span-8 space-y-8">
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-editorial">
                Your team is running AI pilots. You have ChatGPT subscriptions everywhere.
                <br />
                <br />
                But nothing has reached production.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  "Where's the highest ROI use case?",
                  "Which AI tools actually fit our stack?",
                  "How do we go from POC to production?",
                  "Who owns AI strategy across the company?",
                  "How do we get the team AI-ready?",
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
                Experimentation was the right move. Now it needs strategy and execution.
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
                As the cost of intelligence approaches zero, the gap between AI-absent and AI-native is widening fast.
              </p>

              <p className="text-[clamp(1.5rem,2.2vw,2.4rem)] leading-[1.08] tracking-tight-editorial font-medium max-w-3xl">
                The risk isn&apos;t using AI badly. It&apos;s not using it at all.
              </p>

              <div className="space-y-4 max-w-3xl">
                <div className="grid grid-cols-[28px_1fr] gap-4 border-b border-border pb-4">
                  <span className="font-mono text-xs text-muted-foreground mt-1">01</span>
                  <p className="text-lg leading-relaxed">No one owns AI strategy across the company.</p>
                </div>
                <div className="grid grid-cols-[28px_1fr] gap-4 border-b border-border pb-4">
                  <span className="font-mono text-xs text-muted-foreground mt-1">02</span>
                  <p className="text-lg leading-relaxed">AI pilots keep failing to reach production.</p>
                </div>
                <div className="grid grid-cols-[28px_1fr] gap-4 border-b border-border pb-4">
                  <span className="font-mono text-xs text-muted-foreground mt-1">03</span>
                  <p className="text-lg leading-relaxed">
                    Teams are resistant without a clear adoption path.
                  </p>
                </div>
              </div>

              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-editorial">
                TwinB engineers the shift — from AI-scattered to AI-native, with no 200-slide decks and no consultants who can&apos;t ship.
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

      {/* Selected Work Section */}
      <Section>
        <div className="flex justify-between items-end mb-16">
          <h2 className="text-[clamp(2rem,3.2vw,3.25rem)] leading-snug-editorial font-medium">Selected Work</h2>
          <Link href="/work" className="hidden md:flex items-center text-sm font-medium hover:translate-x-1 transition-transform">
            View all work <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 md:auto-rows-fr gap-6">
          {[featuredWork, ...secondaryWork].map((item) => (
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
              outcomeCount={1}
              uniformHeight={true}
            />
          ))}
        </div>
        <div className="mt-8 md:hidden">
          <Link href="/work" className="flex items-center text-sm font-medium">
            View all work <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </div>
      </Section>

      {/* Process Preview */}
      <Section className="bg-muted/10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <h2 className="text-3xl font-medium mb-4">How we work</h2>
            <p className="text-muted-foreground mb-8">
              A systematic approach to AI engineering and transformation. No black boxes.
            </p>
            <Link href="/process" className="text-sm font-medium underline underline-offset-4 hover:text-muted-foreground">
              Read full process
            </Link>
          </div>
          <div className="md:col-span-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-8">
              {[
                { step: "01", title: "Discover & Audit", desc: "We map workflows, quantify ROI, and surface your highest-impact AI use cases." },
                { step: "02", title: "Strategy & Roadmap", desc: "We define what to build, automate, and defer — with clear milestones." },
                { step: "03", title: "Build & Deploy", desc: "Engineering pods ship AI features to production on two-week sprints." },
                { step: "04", title: "Enable & Train", desc: "We upskill your team and build the AI-first culture that sustains the shift." },
                { step: "05", title: "Measure & Optimize", desc: "We track adoption and ROI, then iterate. AI transformation is continuous." },
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
