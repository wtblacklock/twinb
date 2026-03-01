"use client";

import { useEffect, useState } from "react";
import { Section } from "@/components/Section";
import { CTA } from "@/components/CTA";
import { navConfig } from "@/config/nav";
import { EditorialCard } from "@/components/EditorialCard";
import { SectionCTA } from "@/components/SectionCTA";
import { ServicePanel } from "@/components/ServicePanel";
import { WhenToCallUs } from "@/components/WhenToCallUs";
import { JumpNav } from "@/components/JumpNav";
import { useDialog } from "@/hooks/useDialog";

const transformationContent: Record<string, string> = {
  strategy:
    "No 6-month strategy engagements. We run focused 30-, 60-, or 90-day audits that surface your highest-ROI AI use cases and deliver an AI-Adoption Report backed by a technical appendix.",
  "product-tx":
    "We identify where AI creates the most product value — new features, smarter UX, automated workflows — and build it with outcome-based engineering pods that ship to production.",
  "process-tx":
    "We audit your workflows through employee surveys and stakeholder interviews, identify bottlenecks, implement automation, and manage the change with full training and documentation.",
  people:
    "We build bespoke curricula and hands-on workshops that upskill your team on AI tools and workflows, and shift the culture toward AI-first thinking at every level.",
  tooling:
    "We select, configure, and deploy the AI tools that create real competitive advantage for your specific context — not the ones with the best marketing or the highest price tags.",
  roadmap:
    "A sequenced implementation plan with clear priorities, dependencies, and ROI milestones. You know exactly what's happening, when, and why — at every step.",
};

const transformationCapabilities: Record<string, string[]> = {
  strategy: ["Use-Case Discovery", "ROI Quantification", "AI-Adoption Report"],
  "product-tx": ["Feature Identification", "Engineering Pod Deployment", "Production Delivery"],
  "process-tx": ["Employee Surveys", "Bottleneck Analysis", "Automation Implementation"],
  people: ["Custom Curricula", "Hands-On Workshops", "AI-First Culture Programs"],
  tooling: ["Tool Selection & Audit", "Configuration & Integration", "Ongoing Optimization"],
  roadmap: ["90-Day Plan", "Dependency Mapping", "ROI Milestone Tracking"],
};

const whenToCallUs = [
  {
    label: "Ownership",
    items: [
      "No single person owns AI strategy across the company.",
      "Everyone is experimenting but nothing is coordinating.",
    ],
  },
  {
    label: "Expertise",
    items: [
      "You lack internal technical AI expertise to evaluate what to build.",
      "Your current vendors overcharge and underdeliver.",
    ],
  },
  {
    label: "Culture",
    items: [
      "Teams are resistant to AI adoption without a clear migration path.",
      "AI pilots keep failing to reach production.",
    ],
  },
];

export default function AITransformationClient() {
  const dialog = useDialog();
  const transformationItem = navConfig.mainNav.find((item) => item.href === "/ai-transformation");
  const jumpSections = transformationItem?.type === "mega" ? transformationItem.anchors : [];
  const [panelService, setPanelService] = useState({
    id: jumpSections[0]?.id ?? "strategy",
    label: jumpSections[0]?.label ?? "AI Strategy",
  });

  const openPanel = (serviceId: string, serviceLabel: string, trigger: HTMLElement) => {
    setPanelService({ id: serviceId, label: serviceLabel });
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

      <JumpNav sections={jumpSections} />

      <Section className="pt-0 pb-14">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <h2 className="text-3xl font-medium leading-snug-editorial">
              AI isn&apos;t the risk. Ignoring it is.
            </h2>
          </div>
          <div className="md:col-span-8">
            <p className="text-lg text-muted-foreground leading-relaxed max-w-editorial">
              Most companies have an AI opinion. Few have an AI strategy. Fewer still have an AI culture. We bridge all three — with no 200-slide decks, no 6-month engagements, no consultants who can&apos;t ship.
            </p>
          </div>
        </div>
      </Section>

      <WhenToCallUs
        intro="Call us when AI initiatives keep stalling before they reach production."
        columns={whenToCallUs}
      />

      <div className="bg-background">
        {jumpSections.map((anchor, index) => (
          <Section key={anchor.id} id={anchor.id} className="py-20 md:py-24 md:border-b md:border-border last:border-0">
            <div className="group/offering grid grid-cols-1 md:grid-cols-12 gap-12">
              <div className="md:col-span-4">
                <span className="font-mono text-xs text-muted-foreground block mb-2">0{index + 1}</span>
                <h2
                  id={`${anchor.id}-heading`}
                  tabIndex={-1}
                  className="scroll-mt-32 md:scroll-mt-36 text-3xl font-medium leading-snug-editorial focus:outline-none"
                >
                  {anchor.label}
                </h2>
                <SectionCTA
                  className="mt-8"
                  onOpen={(trigger) => openPanel(anchor.id, anchor.label, trigger)}
                />
              </div>
              <div className="md:col-span-8">
                <p className="text-lg mb-8 max-w-editorial">
                  {transformationContent[anchor.id] ??
                    "We build measurable AI transformation programs that align strategy, technology, and people."}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h4 className="font-medium text-sm mb-4">Capabilities</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      {(transformationCapabilities[anchor.id] ?? [
                        "Discovery & Analysis",
                        "Implementation",
                        "Change Management",
                      ]).map((item) => (
                        <li key={`${anchor.id}-${item}`}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-sm mb-4">Typical Deliverables</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>AI-Adoption Report</li>
                      <li>Implementation Roadmap</li>
                      <li>Training & Documentation</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </Section>
        ))}
      </div>

      <Section className="bg-muted/10">
        <h2 className="text-3xl font-medium mb-12">Related Work</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <EditorialCard
            title="Meridian Homes"
            description="Full AI transformation across sales, operations, and design for a regional homebuilder."
            href="/work/meridian-homes"
            meta="Real Estate"
          />
          <EditorialCard
            title="CareLink Health"
            description="AI workflow automation that 2x'd staff capacity in clinical operations."
            href="/work/carelink-health"
            meta="Healthcare"
          />
          <EditorialCard
            title="Capsule"
            description="Embedded AI engineering pod delivering 3x velocity for a high-growth SaaS startup."
            href="/work/capsule"
            meta="SaaS"
          />
        </div>
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
        primaryServiceId={panelService.id}
        primaryServiceName={panelService.label}
        prefersReducedMotion={dialog.prefersReducedMotion}
      />
    </>
  );
}
