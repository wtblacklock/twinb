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

const productContent: Record<string, string> = {
  architecture:
    "We untangle spaghetti code and decouple monoliths. We introduce clear boundaries and domain-driven design principles to make your codebase navigable again.",
  performance:
    "Speed is a feature. We optimize database queries, implement caching strategies, and reduce bundle sizes to get your Core Web Vitals in the green.",
  security:
    "We audit your infrastructure for vulnerabilities, implement proper authentication flows, and ensure data encryption at rest and in transit.",
  infrastructure:
    "We migrate fragile manual setups to robust Infrastructure as Code (Terraform/CDK). We set up auto-scaling and reliable third-party integrations.",
  observability:
    "You can't fix what you can't see. We implement structured logging, tracing, and metrics dashboards so you know about errors before your users do.",
  roadmap:
    "We help you transition from move fast and break things to predictable delivery cycles. We set up realistic technical roadmaps that align with business goals.",
};

const productCapabilities: Record<string, string[]> = {
  architecture: ["Monolith to Microservices", "Codebase Audits", "Tech Stack Migration"],
  performance: ["Database Indexing", "Frontend Optimization", "Server-side Caching"],
};

const productWhenToCallUs = [
  {
    label: "Velocity",
    items: [
      "Each release feels slower than the last.",
      "Shipping one feature breaks two others.",
    ],
  },
  {
    label: "Stability",
    items: [
      "Incidents keep stealing roadmap time.",
      "Performance regresses whenever traffic spikes.",
    ],
  },
  {
    label: "Risk",
    items: [
      "Security debt delays enterprise deals.",
      "Architecture decisions now limit growth.",
    ],
  },
];

export default function ProductPage() {
  const dialog = useDialog();
  const jumpSections = navConfig.productAnchors;
  const [panelService, setPanelService] = useState({
    id: navConfig.productAnchors[0]?.id ?? "architecture",
    label: navConfig.productAnchors[0]?.label ?? "Architecture & Refactoring",
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
            Product Engineering
          </span>
          <h1 className="text-[clamp(3rem,5vw,5rem)] leading-tight-editorial font-medium tracking-tight mb-8 lg:max-w-[90%]">
            From technical debt to technical asset.
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl leading-relaxed">
            We rebuild foundations without stopping the business. Refactoring, performance, and stability for scaling teams.
          </p>
        </div>
      </Section>

      <Section id="post-prototype" className="pt-0 pb-16 md:border-b md:border-border">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <h2 className="text-3xl md:text-4xl font-medium leading-snug-editorial">
              Prototype without a plan?
            </h2>
          </div>
          <div className="md:col-span-8">
            <p className="text-lg text-muted-foreground leading-relaxed max-w-editorial">
              If you built fast and are unsure what comes next, we step in with structure.
              We audit architecture, identify technical debt, evaluate scale readiness, and define a path forward.
            </p>
            <ul className="mt-8 space-y-3 text-muted-foreground">
              <li>Architecture viability</li>
              <li>Technical debt assessment</li>
              <li>Scale risk analysis</li>
              <li>Rewrite vs refactor recommendation</li>
              <li>30 to 60 day execution roadmap</li>
            </ul>
            <SectionCTA
              className="mt-8"
              onOpen={(trigger) => openPanel("architecture", "Architecture & Refactoring", trigger)}
            />
          </div>
        </div>
      </Section>

      <JumpNav sections={jumpSections} />

      <WhenToCallUs
        intro="Bring us in when your roadmap is constrained by technical risk, not product ambition."
        columns={productWhenToCallUs}
      />

      <div className="bg-background">
        {navConfig.productAnchors.map((anchor, index) => (
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
                  {productContent[anchor.id] ??
                    "We design, implement, and harden the systems your team needs to ship reliably and scale sustainably."}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h4 className="font-medium text-sm mb-4">Capabilities</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      {(productCapabilities[anchor.id] ?? [
                        "System Analysis",
                        "Implementation Strategy",
                        "Best Practices Enforcement",
                      ]).map((item) => (
                        <li key={`${anchor.id}-${item}`}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-sm mb-4">Typical Deliverables</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>Architecture Decision Records (ADRs)</li>
                      <li>Refactored Core Modules</li>
                      <li>Documentation & Playbooks</li>
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
            title="Binthere"
            description="Re-architecting a legacy logistics platform for enterprise scale."
            href="/work/binthere"
            meta="Logistics"
          />
           <EditorialCard 
            title="FinStack"
            description="Reducing API latency by 60% for a high-frequency trading dashboard."
            href="/work/finstack"
            meta="Fintech"
          />
           <EditorialCard 
            title="HealthCore"
            description="Achieving SOC2 compliance through infrastructure hardening."
            href="/work/healthcore"
            meta="Healthtech"
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
        title="Fix the foundation." 
        description="Stop building on quicksand. Let's stabilize your product." 
        onOpen={(trigger) => openPanel("general", "Product Review", trigger)}
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
