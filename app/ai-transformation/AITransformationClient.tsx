"use client";

import { useEffect } from "react";
import { Section } from "@/components/Section";
import { CTA } from "@/components/CTA";
import { navConfig } from "@/config/nav";
import { SectionCTA } from "@/components/SectionCTA";
import { ServicePanel } from "@/components/ServicePanel";
import { useDialog } from "@/hooks/useDialog";

const beliefs = [
  {
    title: "Strategy without execution is just a deck",
    body: "Most consultancies hand you a roadmap and disappear. We stay to build it. Every transformation engagement includes engineering execution, not just recommendations.",
  },
  {
    title: "30, 60, 90 days — not 6 months",
    body: "We run focused, time-boxed engagements that surface your highest-ROI AI use cases fast. You get a clear plan and a team to execute it — without the drawn-out consultancy timeline.",
  },
  {
    title: "People, processes, and products",
    body: "Real AI transformation touches all three. We architect the shift across your team, your workflows, and your technology — because fixing one without the others doesn't stick.",
  },
  {
    title: "We become your AI leadership",
    body: "Most companies don't need a full-time Chief AI Officer yet. We fill that function — providing the technical depth, strategic direction, and hands-on execution to lead the shift.",
  },
];

const whyYouNeedUs = [
  "No one owns AI transformation, which means it's half-assed or unsuccessful.",
  "Deep technical AI chops are required, but missing internally.",
  "Cultural buy-in requires careful comms & proper upskilling.",
  "Most consultancies overcharge, are under-qualified, and don't marry strategy with execution.",
];

const capabilityContent: Record<string, { body: string }> = {
  strategy: {
    body: "No 6-month strategy engagements. We run focused 30-, 60-, or 90-day audits that surface your highest-ROI AI use cases and deliver a clear AI-Adoption Report backed by a technical appendix.",
  },
  "product-tx": {
    body: "We identify where AI creates the most product value — new features, smarter UX, automated workflows — and build it with outcome-based engineering pods that ship to production.",
  },
  "process-tx": {
    body: "We audit your workflows through employee surveys and stakeholder interviews, identify bottlenecks, implement automation, and manage the change with full training and documentation.",
  },
  people: {
    body: "We build bespoke curricula and hands-on workshops that upskill your team on AI tools and workflows, and shift the culture toward AI-first thinking at every level.",
  },
  tooling: {
    body: "We select, configure, and deploy the AI tools that create real competitive advantage for your specific context — not the ones with the best marketing or the highest price tags.",
  },
  roadmap: {
    body: "A sequenced implementation plan with clear priorities, dependencies, and ROI milestones. You know exactly what's happening, when, and why — at every step.",
  },
};

const deliveryDetails = [
  {
    label: "AI-Adoption Report",
    desc: "Every engagement starts with a structured audit. You get a written report with prioritized use cases, ROI estimates, and a technical appendix — not a slide deck.",
  },
  {
    label: "30 / 60 / 90-Day Engagements",
    desc: "Time-boxed scopes so you always know what you're signing up for. No open-ended retainers, no scope creep.",
  },
  {
    label: "Employee Surveys & Stakeholder Interviews",
    desc: "We talk to your people — from the floor to the C-suite — to find where AI actually fits and where resistance will come from.",
  },
  {
    label: "Engineering Execution Included",
    desc: "Transformation that needs software built gets built. Our engineering pods are on standby to move from strategy to production without switching vendors.",
  },
  {
    label: "Custom Training Programs",
    desc: "Bespoke curricula and hands-on workshops built for your team's actual tools and workflows — not generic AI literacy content.",
  },
  {
    label: "Tool Selection & Configuration",
    desc: "We evaluate, select, and configure AI tooling for your stack. No vendor bias, no kickbacks — just what works for your context.",
  },
  {
    label: "Implementation Roadmap",
    desc: "You leave with a sequenced plan, clear ownership, and ROI milestones. Actionable from day one.",
  },
];

export default function AITransformationClient() {
  const dialog = useDialog();
  const transformationItem = navConfig.mainNav.find((item) => item.href === "/ai-transformation");
  const jumpSections = transformationItem?.type === "mega" ? transformationItem.anchors : [];

  const openPanel = (_serviceId: string, _serviceLabel: string, trigger: HTMLElement) => {
    dialog.open(trigger);
  };

  useEffect(() => {
    const focusHeadingFromHash = () => {
      const hash = window.location.hash.replace("#", "");
      if (!hash) return;
      const heading = document.getElementById(`${hash}-heading`);
      if (!heading) return;
      heading.focus({ preventScroll: true });
    };

    const timer = setTimeout(focusHeadingFromHash, 120);
    window.addEventListener("hashchange", focusHeadingFromHash);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("hashchange", focusHeadingFromHash);
    };
  }, []);

  return (
    <>
      {/* Hero */}
      <Section id="top" className="pt-48 md:pt-[150px] lg:pt-[160px] pb-16">
        <div className="max-w-4xl">
          <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground mb-6 block">
            AI Transformation
          </span>
          <h1 className="text-[clamp(3rem,5vw,5rem)] leading-tight-editorial font-medium tracking-tight mb-8 lg:max-w-[80%]">
            From AI-absent to AI-native.
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl leading-relaxed">
            As the cost of intelligence approaches zero, companies that don&apos;t transform will be disrupted by those that do. We architect the shift.
          </p>
        </div>
      </Section>

      {/* What We Believe */}
      <Section className="pt-0 pb-20 md:border-b md:border-border">
        <div className="mb-12">
          <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground mb-4">What we believe</p>
          <h2 className="text-[clamp(2rem,3.2vw,3.25rem)] leading-snug-editorial font-medium max-w-2xl">
            Transformation is a verb, not a deliverable.
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-border">
          {beliefs.map((belief) => (
            <div key={belief.title} className="bg-background p-8 md:p-10">
              <h3 className="text-lg font-medium mb-3">{belief.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{belief.body}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Why You Need Us */}
      <Section className="py-20 md:border-b md:border-border">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground mb-4">Why you need us</p>
            <h2 className="text-[clamp(2rem,3.2vw,3.25rem)] leading-snug-editorial font-medium">
              Becoming AI-native is difficult, but mission critical.
            </h2>
          </div>
          <div className="md:col-span-8 md:pt-12">
            <div className="space-y-0">
              {whyYouNeedUs.map((point, i) => (
                <div key={i} className="grid grid-cols-[28px_1fr] gap-4 border-b border-border py-5 last:border-0">
                  <span className="font-mono text-xs text-muted-foreground mt-1">0{i + 1}</span>
                  <p className="text-lg leading-relaxed">{point}</p>
                </div>
              ))}
            </div>
            <SectionCTA
              className="mt-10"
              onOpen={(trigger) => openPanel("general", "AI Transformation", trigger)}
            />
          </div>
        </div>
      </Section>

      {/* What We Do Header */}
      <Section className="py-20 md:border-b md:border-border">
        <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground mb-4">What we do</p>
        <h2 className="text-[clamp(2rem,3.2vw,3.25rem)] leading-snug-editorial font-medium max-w-2xl">
          The full transformation stack.
        </h2>
      </Section>

      {/* Capability Sections */}
      <div className="bg-background">
        {jumpSections.map((anchor, index) => (
          <Section
            key={anchor.id}
            id={anchor.id}
            className="py-20 md:py-24 md:border-b md:border-border last:border-0"
          >
            <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
              <div className="md:col-span-4">
                <span className="font-mono text-xs text-muted-foreground block mb-2">0{index + 1}</span>
                <h2
                  id={`${anchor.id}-heading`}
                  tabIndex={-1}
                  className="scroll-mt-32 md:scroll-mt-36 text-3xl font-medium leading-snug-editorial focus:outline-none mb-8"
                >
                  {anchor.label}
                </h2>
                <SectionCTA
                  onOpen={(trigger) => openPanel(anchor.id, anchor.label, trigger)}
                />
              </div>
              <div className="md:col-span-8">
                <p className="text-lg max-w-editorial text-muted-foreground leading-relaxed">
                  {capabilityContent[anchor.id]?.body ?? "We build measurable AI transformation programs that align strategy, technology, and people."}
                </p>
              </div>
            </div>
          </Section>
        ))}
      </div>

      {/* + More */}
      <Section className="py-20 md:py-24 md:border-t md:border-b md:border-border">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <span className="font-mono text-xs text-muted-foreground block mb-2">07</span>
            <h2 className="text-3xl font-medium leading-snug-editorial mb-8">+ More</h2>
            <SectionCTA
              onOpen={(trigger) => openPanel("general", "AI Transformation", trigger)}
            />
          </div>
          <div className="md:col-span-8">
            <p className="text-lg text-muted-foreground leading-relaxed max-w-editorial">
              Every company is different. If your transformation challenge doesn&apos;t fit neatly into a category, that&apos;s exactly where we do our best work.
            </p>
          </div>
        </div>
      </Section>

      {/* Why Work With Us */}
      <Section id="delivery" className="py-20 md:py-24 bg-muted/10">
        <div className="mb-12">
          <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground mb-4">Why work with us</p>
          <h2 className="text-[clamp(2rem,3.2vw,3.25rem)] leading-snug-editorial font-medium max-w-2xl">
            Built to move fast and stick.
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {deliveryDetails.map((item) => (
            <div key={item.label} className="border-t border-border pt-6">
              <h3 className="font-medium mb-2">{item.label}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
        <SectionCTA
          className="mt-12"
          onOpen={(trigger) => openPanel("general", "AI Transformation", trigger)}
        />
      </Section>

      <Section className="py-10">
        <div className="flex justify-end">
          <a
            href="#top"
            className="text-sm text-muted-foreground hover:text-foreground underline underline-offset-4 transition-colors"
          >
            Back to top
          </a>
        </div>
      </Section>

      <CTA
        title="Win the next decade."
        description="Disrupt yourself before your competitors do it for you."
        onOpen={(trigger) => openPanel("general", "AI Transformation", trigger)}
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
