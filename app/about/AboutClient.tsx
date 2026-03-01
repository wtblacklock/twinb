"use client";

import Link from "next/link";
import { Section } from "@/components/Section";
import { ServicePanel } from "@/components/ServicePanel";
import { useDialog } from "@/hooks/useDialog";

export default function AboutClient() {
  const dialog = useDialog();

  return (
    <>
      <Section className="pt-48 md:pt-[150px] lg:pt-[160px] pb-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-3">
            <p className="font-mono text-xs uppercase tracking-[0.14em] text-muted-foreground">About</p>
          </div>
          <div className="md:col-span-9">
            <h1 className="text-[clamp(3rem,5vw,5rem)] leading-tight-editorial font-medium tracking-tight">
              AI engineering and transformation, done by people who&apos;ve shipped it themselves.
            </h1>
          </div>
        </div>
      </Section>

      <Section className="pt-0 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-3">
            <p className="font-mono text-xs uppercase tracking-[0.14em] text-muted-foreground">
              Positioning
            </p>
          </div>
          <div className="md:col-span-9 grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <div className="space-y-10">
              <h2 className="text-[clamp(1.6rem,2.4vw,2.8rem)] leading-[1.08] tracking-tight-editorial font-medium max-w-4xl">
                AI Engineering &amp; Transformation, built by operators.
              </h2>
              <div className="space-y-5 text-lg text-muted-foreground leading-relaxed">
                <p>
                  The AI shift isn&apos;t coming. It&apos;s here. The question isn&apos;t whether to move — it&apos;s whether you move fast enough to matter.
                </p>
                <p>
                  Most companies know they need to change. Few have the engineering depth, organizational alignment, or outside perspective to actually pull it off. That&apos;s the gap we close.
                </p>
                <p>
                  We build AI systems that reach production. We transform organizations in ways that stick. No decks without delivery. No strategy without execution.
                </p>
              </div>
            </div>
            <div className="space-y-5 lg:self-start">
              <p className="text-sm font-medium uppercase tracking-wide text-muted-foreground">Principles</p>
              <ul className="space-y-3 text-lg leading-relaxed">
                <li>AI is a platform shift, not a feature. Companies treating it like a productivity tool are already behind.</li>
                <li>Every business will land in one of three positions: AI-absent, AI-integrated, or AI-native. Only one is a winning long-term strategy.</li>
                <li>Becoming AI-native isn&apos;t a side project. It&apos;s the most important strategic initiative you&apos;ll run this decade.</li>
                <li>Building real AI systems requires depth most companies don&apos;t have in-house — and can&apos;t hire fast enough to get.</li>
              </ul>
            </div>
          </div>
        </div>
      </Section>

      <Section className="py-14 md:py-20 border-y border-border">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-3">
            <p className="font-mono text-xs uppercase tracking-[0.14em] text-muted-foreground">Perspective</p>
          </div>
          <div className="md:col-span-9">
            <blockquote
              className="leading-[1.15] tracking-tight-editorial font-medium max-w-none"
              style={{ fontSize: "clamp(1.8rem, 3.2vw, 3.8rem)" }}
            >
              <span className="block">The companies falling behind</span>
              <span className="block">on AI aren&apos;t short on opinions.</span>
              <span className="block">They&apos;re short on execution.</span>
            </blockquote>
          </div>
        </div>
      </Section>

      <Section className="py-20 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-3">
            <p className="font-mono text-xs uppercase tracking-[0.14em] text-muted-foreground">Team</p>
          </div>
          <div className="md:col-span-9 grid grid-cols-1 gap-8">
            <article className="border border-border p-8">
              <h3 className="text-2xl md:text-3xl font-medium mb-6">Jackson Blacklock</h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Jackson is a scale strategist with a background in business operations, systems thinking, and
                enterprise execution.
                <br />
                <br />
                With an MBA and experience managing complex initiatives, he brings structural rigor to AI transformation
                engagements.
                <br />
                <br />
                He focuses on operational alignment, process design, change management, and roadmap prioritization so
                AI initiatives reach production and generate measurable ROI.
              </p>
            </article>

            <article className="border border-border p-8 md:p-10">
              <h3 className="text-2xl md:text-3xl font-medium mb-6">William Blacklock</h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                William is a product and AI engineering operator with deep experience across design, product strategy, and
                engineering execution.
                <br />
                <br />
                He has led technical and product initiatives inside enterprise organizations and startups, shipped AI features
                to production, and built automation systems that connect strategy to revenue.
                <br />
                <br />
                His focus is shipping. Strategy must translate to production-grade code, and every AI initiative must
                support measurable business outcomes.
              </p>
            </article>
          </div>
        </div>
      </Section>

      <Section className="pt-0 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-3">
            <h2 className="text-3xl md:text-4xl font-medium leading-tight-editorial">Why TwinB</h2>
          </div>
          <div className="md:col-span-9 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <article className="border border-border p-6">
              <h3 className="text-xl font-medium mb-3">No plan without a builder</h3>
              <p className="text-muted-foreground leading-relaxed">
                The people who advise are the people who build. We don&apos;t separate strategy from engineering — they happen in the same room.
              </p>
            </article>
            <article className="border border-border p-6">
              <h3 className="text-xl font-medium mb-3">Time-boxed, not open-ended</h3>
              <p className="text-muted-foreground leading-relaxed">
                Sprints, not subscriptions. You know exactly what you&apos;re paying for before we start — and what you&apos;ll have when we finish.
              </p>
            </article>
            <article className="border border-border p-6">
              <h3 className="text-xl font-medium mb-3">Depth over breadth</h3>
              <p className="text-muted-foreground leading-relaxed">
                We don&apos;t spread thin across dozens of clients. Your engagement gets focused attention from people who care about the outcome.
              </p>
            </article>
            <article className="border border-border p-6">
              <h3 className="text-xl font-medium mb-3">Accountable to results</h3>
              <p className="text-muted-foreground leading-relaxed">
                Story-point pricing on engineering. ROI milestones on transformation. We don&apos;t invoice for effort — we invoice for output.
              </p>
            </article>
          </div>
        </div>
      </Section>

      <Section className="py-20 border-t border-border">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-end">
          <div className="md:col-span-8">
            <h2 className="text-[clamp(2rem,3.2vw,3.4rem)] leading-tight-editorial font-medium lg:max-w-[80%]">
              Ready to stop piloting and start shipping?
            </h2>
          </div>
          <div className="md:col-span-4 flex flex-col sm:flex-row md:flex-col lg:flex-row gap-4 md:justify-end">
            <button
              type="button"
              onClick={(event) => dialog.open(event.currentTarget)}
              className="px-6 py-3 bg-foreground text-background text-sm font-medium rounded-md hover:bg-[#333333] active:bg-[#1a1a1a] transition-all duration-200"
            >
              Start a Conversation
            </button>
            <Link
              href="/contact"
              className="px-6 py-3 border border-border text-sm font-medium rounded-md hover:bg-foreground hover:text-background hover:border-foreground active:bg-[#333333] active:text-background transition-all duration-200 text-center"
            >
              Contact
            </Link>
          </div>
        </div>
      </Section>

      <ServicePanel
        isOpen={dialog.isOpen}
        onClose={dialog.close}
        dialogRef={dialog.dialogRef}
        prefersReducedMotion={dialog.prefersReducedMotion}
      />
    </>
  );
}
