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
    title: "Small teams, elite engineers",
    body: "We don't pad headcount. One sharp engineer outproduces a roster of average ones — so we hire differently, pay accordingly, and keep the team tight.",
  },
  {
    title: "AI-accelerated by default",
    body: "Every engineer on our team uses AI tooling every day. Not as a gimmick — as a multiplier. It's how we stay faster and more affordable than building in-house.",
  },
  {
    title: "You pay for what ships",
    body: "We price on story-points, not hours. You know exactly what you're getting before a line of code is written. No billing surprises, no scope drift.",
  },
  {
    title: "Our incentives match yours",
    body: "Our team earns based on what they deliver — not time on the clock. When you win, we win. That's not a tagline, it's the contract.",
  },
];

const whyYouNeedUs = [
  "The best engineers aren't looking — and even if they were, hiring takes months.",
  "Senior engineering talent costs more than it ever has, and the bar keeps rising.",
  "In fast-moving markets, shipping speed is a strategic advantage, not a nice-to-have.",
  "Technical debt and bad habits compound. Outside execution breaks the cycle.",
];

const capabilityContent: Record<string, { body: string }> = {
  fullstack: {
    body: "Full-stack software built AI-first. From APIs to UI, we ship production-grade apps with AI baked in, not bolted on.",
  },
  finetuning: {
    body: "Most teams still run a software development lifecycle in an AI world. We help you make the shift — new loops, new tooling, new ways of shipping.",
  },
  migration: {
    body: "We modernize codebases — language upgrades, version migrations, structural rewrites. Clean architecture you can actually build on.",
  },
  data: {
    body: "AI without good data is guesswork. We build the pipelines, clean the data, and wire up the infrastructure your models need to perform.",
  },
  agentic: {
    body: "We build agents that do real work — research, dispatch, automation, orchestration. Not chatbots. Actual AI systems.",
  },
};

const deliveryDetails = [
  {
    label: "Dedicated Team",
    desc: "A Technical Product Manager and engineers assigned to you — not a rotating cast of whoever's available.",
  },
  {
    label: "Sprint Cycles",
    desc: "Two-week sprints, every time. You pick priorities, we execute. Predictable rhythm, no surprises.",
  },
  {
    label: "Project Management",
    desc: "We plug into Jira, Linear, or Trello — whichever you already use. Zero onboarding overhead.",
  },
  {
    label: "Regular Check-ins",
    desc: "Structured syncs and async updates built in. You always know what's shipping and what's next.",
  },
  {
    label: "24-Hour Ticket Assessment",
    desc: "Submit a ticket, get a scope and story-point estimate within 24 hours. Never flying blind on cost.",
  },
  {
    label: "Story-Point Commitment",
    desc: "We commit to output, not effort. If it didn't ship, you didn't pay for it.",
  },
  {
    label: "Shared Slack Channel",
    desc: "Your squad in your Slack. No ticketing systems between you and the people doing the work.",
  },
];

export default function AIEngineeringClient() {
  const dialog = useDialog();
  const engineeringItem = navConfig.mainNav.find((item) => item.href === "/ai-engineering");
  const jumpSections = engineeringItem?.type === "mega" ? engineeringItem.anchors : [];
  const capabilitySections = jumpSections.filter((s) => s.id !== "delivery");

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
            AI Engineering
          </span>
          <h1 className="text-[clamp(3rem,5vw,5rem)] leading-tight-editorial font-medium tracking-tight mb-8 lg:max-w-[90%]">
            AI engineering that ships. Not decks, not demos — software.
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl leading-relaxed">
            Outcome-based squads who use AI to build AI. You pay for features in production, not hours in Zoom.
          </p>
        </div>
      </Section>

      {/* What We Believe */}
      <Section className="pt-0 pb-20 md:border-b md:border-border">
        <div className="mb-12">
          <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground mb-4">What we believe</p>
          <h2 className="text-[clamp(2rem,3.2vw,3.25rem)] leading-snug-editorial font-medium max-w-2xl">
            The way we work is the product.
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
              Building a great engineering team has never been harder.
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
              onOpen={(trigger) => openPanel("general", "AI Engineering", trigger)}
            />
          </div>
        </div>
      </Section>

      {/* What We Do Header */}
      <Section className="py-20 md:border-b md:border-border">
        <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground mb-4">What we do</p>
        <h2 className="text-[clamp(2rem,3.2vw,3.25rem)] leading-snug-editorial font-medium max-w-2xl">
          The full stack, end to end.
        </h2>
      </Section>

      {/* Capability Sections */}
      <div className="bg-background">
        {capabilitySections.map((anchor, index) => (
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
                  {capabilityContent[anchor.id]?.body ?? "We design, build, and deploy AI systems that operate reliably at scale."}
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
            <span className="font-mono text-xs text-muted-foreground block mb-2">06</span>
            <h2 className="text-3xl font-medium leading-snug-editorial mb-8">+ More</h2>
            <SectionCTA
              onOpen={(trigger) => openPanel("general", "AI Engineering", trigger)}
            />
          </div>
          <div className="md:col-span-8">
            <p className="text-lg text-muted-foreground leading-relaxed max-w-editorial">
              If it's a software problem, we can solve it. We integrate into your team and your stack without friction.
            </p>
          </div>
        </div>
      </Section>

      {/* Why Work With Us / Delivery Model */}
      <Section id="delivery" className="py-20 md:py-24 bg-muted/10">
        <div className="mb-12">
          <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground mb-4">Why work with us</p>
          <h2 className="text-[clamp(2rem,3.2vw,3.25rem)] leading-snug-editorial font-medium max-w-2xl">
            Structured to ship. Every time.
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
          onOpen={(trigger) => openPanel("delivery", "Delivery Model", trigger)}
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
        title="Stop waiting on engineering."
        description="Two-week sprints. Outcome-based pricing. Real engineers."
        onOpen={(trigger) => openPanel("general", "AI Engineering", trigger)}
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
