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

export default function Home() {
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
              We fix and scale what you built.
            </p>
            <h1 className="text-[clamp(3rem,5vw,5rem)] leading-tight-editorial font-medium tracking-tight mb-8">
              We turn fast built products into scalable systems.
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl leading-relaxed mb-12">
              Product & Growth Engineering for teams that shipped fast and now need durability, adoption, and scale.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center">
              <button
                type="button"
                onClick={(event) => dialog.open(event.currentTarget)}
                className="px-8 py-4 bg-foreground text-background font-medium rounded-lg hover:bg-[#333333] active:bg-[#1a1a1a] transition-all duration-200"
              >
                Request a Product Review
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
                Post-prototype state
              </p>
              <h2 className="text-[clamp(2.2rem,4vw,4.5rem)] leading-[0.95] tracking-tight-editorial font-medium">
                Built something.
                <br />
                Now stuck.
              </h2>
            </div>

            <div className="md:col-span-8 space-y-8">
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-editorial">
                You used AI tools. You got a prototype live. It kind of works.
                <br />
                <br />
                Now the questions start.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  "Is the architecture viable?",
                  "Should you rewrite it?",
                  "Is this the right problem?",
                  "How do you get real users?",
                  "What breaks when traffic hits?",
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
                Speed was the right move. Now it needs structure.
              </p>

              <div>
                <button
                  type="button"
                  onClick={(event) => dialog.open(event.currentTarget)}
                  className="px-6 py-3 border border-border text-sm font-medium rounded-md hover:bg-foreground hover:text-background hover:border-foreground active:bg-[#333333] active:text-background transition-all duration-200"
                >
                  Request a Product Review
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
              Shipping is easy. Adoption and scale are not.
            </h3>
          </div>
          <div className="md:col-span-8 md:pt-14">
            <div className="space-y-10">
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-editorial">
                You can build a prototype in a weekend now. That part is not the problem.
              </p>

              <p className="text-[clamp(1.5rem,2.2vw,2.4rem)] leading-[1.08] tracking-tight-editorial font-medium max-w-3xl">
                The problem is what happens next.
              </p>

              <div className="space-y-4 max-w-3xl">
                <div className="grid grid-cols-[28px_1fr] gap-4 border-b border-border pb-4">
                  <span className="font-mono text-xs text-muted-foreground mt-1">01</span>
                  <p className="text-lg leading-relaxed">Maybe the product is fragile.</p>
                </div>
                <div className="grid grid-cols-[28px_1fr] gap-4 border-b border-border pb-4">
                  <span className="font-mono text-xs text-muted-foreground mt-1">02</span>
                  <p className="text-lg leading-relaxed">Maybe users are not sticking.</p>
                </div>
                <div className="grid grid-cols-[28px_1fr] gap-4 border-b border-border pb-4">
                  <span className="font-mono text-xs text-muted-foreground mt-1">03</span>
                  <p className="text-lg leading-relaxed">
                    Maybe you are not sure what to build, cut, or rebuild.
                  </p>
                </div>
              </div>

              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-editorial">
                TwinB turns fast built products into scalable systems and engineers the growth systems that make them matter.
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <EditorialCard 
            title="Product Engineering"
            description="Refactoring, performance optimization, and architectural stability. We pay down debt so you can move fast again."
            href="/product"
            meta="01"
          />
          <EditorialCard 
            title="Growth Engineering"
            description="Conversion loops, analytics infrastructure, and lifecycle automation. We build the systems that drive revenue."
            href="/growth"
            meta="02"
          />
          <EditorialCard 
            title="Brand Systems"
            description="Design systems and asset libraries that ensure consistency as you scale. Not just a logo, but a language."
            href="/growth#brand-assets"
            meta="03"
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
              A systematic approach to fixing and scaling. No black boxes.
            </p>
            <Link href="/process" className="text-sm font-medium underline underline-offset-4 hover:text-muted-foreground">
              Read full process
            </Link>
          </div>
          <div className="md:col-span-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-8">
              {[
                { step: "01", title: "Audit & Diagnostics", desc: "We look under the hood at code, data, and metrics." },
                { step: "02", title: "Triage & Roadmap", desc: "We prioritize high-impact fixes and structural changes." },
                { step: "03", title: "Stabilize", desc: "We stop the bleeding and fix critical technical debt." },
                { step: "04", title: "Scale", desc: "We implement growth systems and performance improvements." },
                { step: "05", title: "Handover", desc: "We train your team to maintain the new standard." },
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

      <CTA />

      <ServicePanel
        isOpen={dialog.isOpen}
        onClose={dialog.close}
        dialogRef={dialog.dialogRef}
        variant="productReview"
        prefersReducedMotion={dialog.prefersReducedMotion}
      />
    </>
  );
}
