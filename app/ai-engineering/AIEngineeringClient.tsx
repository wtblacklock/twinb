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

const engineeringContent: Record<string, string> = {
  fullstack:
    "Full-stack AI-first development from web apps to internal tools. We build production-grade software with modern stacks and AI acceleration baked in from day one.",
  finetuning:
    "We fine-tune open and closed models on your proprietary data. The result: domain-specific AI that outperforms generic models on the tasks that matter to your business.",
  migration:
    "Legacy codebases drag on velocity. We migrate, refactor, and modernize your core systems — and integrate AI tooling into the new architecture.",
  data:
    "Good AI needs good data. We design and build the pipelines, warehouses, and analysis layers that make AI features reliable and insights actionable.",
  agentic:
    "We build multi-agent systems that automate complex workflows end-to-end. From research agents to autonomous dispatch, we engineer AI that operates without hand-holding.",
  delivery:
    "Outcome-based, story-point pricing. Two-week sprints. Dedicated Technical Product Manager. You control prioritization — we control quality and velocity.",
};

const engineeringCapabilities: Record<string, string[]> = {
  fullstack: ["React / Next.js", "Node.js / Python", "AI Feature Integration"],
  finetuning: ["LoRA / QLoRA Fine-Tuning", "RLHF & Preference Data", "Evaluation Pipelines"],
  migration: ["Legacy Modernization", "AI Tooling Integration", "Test Coverage Uplift"],
  data: ["Pipeline Architecture", "Vector Stores & RAG", "Analytics Dashboards"],
  agentic: ["Multi-Agent Orchestration", "Tool & API Integration", "Autonomous Workflows"],
  delivery: ["Story-Point Pricing", "Two-Week Sprints", "Dedicated TPM"],
};

const whenToCallUs = [
  {
    label: "Velocity",
    items: [
      "You need to ship AI features but your team isn't AI-native yet.",
      "You're spending on engineers but not getting AI-accelerated output.",
    ],
  },
  {
    label: "Quality",
    items: [
      "Your AI prototypes work in demos but fail in production.",
      "Fine-tuned models underperform on domain-specific tasks.",
    ],
  },
  {
    label: "Ownership",
    items: [
      "You need a dedicated AI engineering team without full-time hiring risk.",
      "You want outcome-based pricing, not billable hours.",
    ],
  },
];

export default function AIEngineeringClient() {
  const dialog = useDialog();
  const engineeringItem = navConfig.mainNav.find((item) => item.href === "/ai-engineering");
  const jumpSections = engineeringItem?.type === "mega" ? engineeringItem.anchors : [];
  const [panelService, setPanelService] = useState({
    id: jumpSections[0]?.id ?? "fullstack",
    label: jumpSections[0]?.label ?? "Application Development",
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
            AI Engineering
          </span>
          <h1 className="text-[clamp(3rem,5vw,5rem)] leading-tight-editorial font-medium tracking-tight mb-8 lg:max-w-[90%]">
            High-velocity AI engineering. You pay for features delivered, not hours logged.
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl leading-relaxed">
            Outcome-based engineering squads that leverage AI acceleration to ship production-grade software faster and more affordably.
          </p>
        </div>
      </Section>

      <Section id="how-we-work" className="pt-0 pb-16 md:border-b md:border-border">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <h2 className="text-3xl md:text-4xl font-medium leading-snug-editorial">
              One world-class engineer beats ten mediocre ones.
            </h2>
          </div>
          <div className="md:col-span-8">
            <p className="text-lg text-muted-foreground leading-relaxed max-w-editorial">
              We hire the best, use AI aggressively, and charge on outcomes. Our squads deliver more in two weeks than most teams ship in a quarter.
            </p>
            <ul className="mt-8 space-y-3 text-muted-foreground">
              <li>Story-point based pricing — you pay for features, not hours</li>
              <li>Two-week sprint cycles with full prioritization control</li>
              <li>Dedicated Technical Product Manager on every engagement</li>
              <li>Shared Slack channel and 24-hour ticket turnaround</li>
              <li>Compatible with Jira, Linear, and Trello</li>
            </ul>
            <SectionCTA
              className="mt-8"
              onOpen={(trigger) => openPanel("fullstack", "Application Development", trigger)}
            />
          </div>
        </div>
      </Section>

      <JumpNav sections={jumpSections} />

      <WhenToCallUs
        intro="Bring us in when velocity is the constraint — not ideas."
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
                  {engineeringContent[anchor.id] ??
                    "We design, build, and deploy production-grade AI systems that operate reliably at scale."}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h4 className="font-medium text-sm mb-4">Capabilities</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      {(engineeringCapabilities[anchor.id] ?? [
                        "System Design",
                        "Implementation",
                        "Production Deployment",
                      ]).map((item) => (
                        <li key={`${anchor.id}-${item}`}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-sm mb-4">Typical Deliverables</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>Production-Ready Code</li>
                      <li>Documentation & Runbooks</li>
                      <li>Evaluation & Testing Suite</li>
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
            title="Axiom Logistics"
            description="Multi-agent dispatch automation that eliminated 80% of manual operations."
            href="/work/axiom-logistics"
            meta="Logistics"
          />
          <EditorialCard
            title="LexCore"
            description="Fine-tuned legal AI that reduced document review time by 70%."
            href="/work/lexcore"
            meta="Legal AI"
          />
          <EditorialCard
            title="PulseData"
            description="AI-driven data platform delivering 10x pipeline performance."
            href="/work/pulsedata"
            meta="Data Engineering"
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
        title="Ship AI features faster."
        description="Outcome-based engineering. Two-week sprints. No hourly billing."
        onOpen={(trigger) => openPanel("general", "AI Engineering", trigger)}
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
