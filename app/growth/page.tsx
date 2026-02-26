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

const growthContent: Record<string, string> = {
  positioning:
    "We align your product truth with market perception. We refine the narrative to ensure that what you built is what they buy.",
  adoption:
    "We engineer the Aha moment. We streamline onboarding flows and remove friction to get users to value faster.",
  conversion:
    "We build experimentation frameworks and optimize funnels. Every click is measured, every drop-off analyzed.",
  retention:
    "Acquisition is vanity, retention is sanity. We build lifecycle campaigns and product hooks that keep users coming back.",
  automation:
    "We connect your tools (CRM, Email, Product) to automate the busywork. We use n8n and custom scripts to scale operations.",
  "brand-assets":
    "We codify your brand into a system. From UI kits to voice guidelines, we ensure your brand scales without losing its soul.",
};

const growthCapabilities: Record<string, string[]> = {
  automation: ["n8n / Zapier Workflows", "CRM Integration", "Data Pipelines"],
  "brand-assets": ["Design Systems", "Asset Libraries", "Brand Guidelines"],
};

const growthWhenToCallUs = [
  {
    label: "Acquisition",
    items: [
      "Your traffic quality is high, but conversion is flat.",
      "Paid spend grows while CAC refuses to improve.",
    ],
  },
  {
    label: "Activation",
    items: [
      "Users sign up, then vanish before first value.",
      "You have hypotheses, but no reliable test loop.",
    ],
  },
  {
    label: "Retention",
    items: [
      "Churn climbs after month one with no clear signal.",
      "Lifecycle touchpoints feel disconnected and manual.",
    ],
  },
];

export default function GrowthPage() {
  const dialog = useDialog();
  const jumpSections = navConfig.growthAnchors;
  const [panelService, setPanelService] = useState({
    id: navConfig.growthAnchors[0]?.id ?? "positioning",
    label: navConfig.growthAnchors[0]?.label ?? "Positioning & Narrative",
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
      <Section id="top" className="pt-56 pb-16">
        <div className="max-w-4xl">
          <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground mb-6 block">
            Growth Engineering
          </span>
          <h1 className="text-[clamp(3rem,5vw,5rem)] leading-tight-editorial font-medium tracking-tight mb-8">
            Data-driven loops that compound.
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl leading-relaxed">
            We build the engines for scale. Analytics, automation, and conversion systems that turn traffic into revenue.
          </p>
        </div>
      </Section>

      <JumpNav sections={jumpSections} />

      <Section className="pt-0 pb-14">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <h2 className="text-3xl font-medium leading-snug-editorial">
              Launch does not equal adoption.
            </h2>
          </div>
          <div className="md:col-span-8">
            <p className="text-lg text-muted-foreground leading-relaxed max-w-editorial">
              A working product is not a growth strategy.
              We clarify positioning, remove activation friction, and engineer the systems that turn traffic into usage.
            </p>
          </div>
        </div>
      </Section>

      <WhenToCallUs
        intro="Call us when growth feels noisy, expensive, and hard to repeat."
        columns={growthWhenToCallUs}
      />

      <div className="bg-background">
        {navConfig.growthAnchors.map((anchor, index) => (
          <Section key={anchor.id} id={anchor.id} className="py-20 md:py-24 border-b border-border last:border-0">
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
                  {growthContent[anchor.id] ??
                    "We build a measurable growth system that aligns product, go-to-market, and operations."}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h4 className="font-medium text-sm mb-4">Capabilities</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      {(growthCapabilities[anchor.id] ?? [
                        "Funnel Analysis",
                        "A/B Testing Setup",
                        "User Journey Mapping",
                      ]).map((item) => (
                        <li key={`${anchor.id}-${item}`}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-sm mb-4">Typical Deliverables</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>Growth Models</li>
                      <li>Automated Workflows</li>
                      <li>Dashboard Implementation</li>
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
            title="Keep22"
            description="Building a retention engine for a subscription fintech app."
            href="/work/keep22"
            meta="Fintech"
          />
           <EditorialCard 
            title="Beast Putty"
            description="Optimizing e-commerce conversion rates through rigorous testing."
            href="/work/beast-putty"
            meta="E-commerce"
          />
           <EditorialCard 
            title="SaaS Flow"
            description="Automating sales operations to reduce manual touchpoints by 80%."
            href="/work/saas-flow"
            meta="B2B SaaS"
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

      <CTA title="Ignite growth." description="Build the systems that make scaling inevitable." />

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
