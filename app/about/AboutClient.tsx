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
              Built for the AI era
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
              <h2 className="text-[clamp(2.2rem,3.6vw,4rem)] leading-[1.02] tracking-tight-editorial font-medium max-w-4xl">
                AI Engineering &amp; Transformation, built by operators.
              </h2>
              <div className="space-y-5 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Today it is easy to experiment with AI.
                  <br />
                  <br />
                  It is hard to make it production-grade, adopted, and commercially viable.
                  <br />
                </p>
                <p>
                  We work at the intersection of AI strategy, engineering execution, and organizational change. We step
                  in before the AI opportunity passes and after the pilots have stalled.
                  <br />
                  We build what actually ships and transform what actually sticks.
                </p>
              </div>
            </div>
            <div className="space-y-5 lg:self-start">
              <p className="text-sm font-medium uppercase tracking-wide text-muted-foreground">Principles</p>
              <ul className="space-y-3 text-lg leading-relaxed">
                <li>Strategy without execution is just a slide deck.</li>
                <li>The best AI tool is the one your team actually uses.</li>
                <li>Production is the only proof of concept that matters.</li>
                <li>ROI is the only AI metric worth tracking.</li>
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
              <span className="block">The companies that win</span>
              <span className="block">won&apos;t have the best AI tools.</span>
              <span className="block">They&apos;ll be restructured around them.</span>
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
              <h3 className="text-xl font-medium mb-3">AI to Production</h3>
              <p className="text-muted-foreground leading-relaxed">
                We take AI use cases from concept to production-grade systems that generate real ROI.
              </p>
            </article>
            <article className="border border-border p-6">
              <h3 className="text-xl font-medium mb-3">Outcome-Based Delivery</h3>
              <p className="text-muted-foreground leading-relaxed">
                Story-point pricing aligned to features, not hours. No surprise invoices.
              </p>
            </article>
            <article className="border border-border p-6">
              <h3 className="text-xl font-medium mb-3">Strategy + Execution</h3>
              <p className="text-muted-foreground leading-relaxed">
                We don&apos;t hand you a deck and disappear. We architect the plan and build the thing.
              </p>
            </article>
            <article className="border border-border p-6">
              <h3 className="text-xl font-medium mb-3">Operators, Not Consultants</h3>
              <p className="text-muted-foreground leading-relaxed">
                We build, run, and improve AI systems in production ourselves.
              </p>
            </article>
          </div>
        </div>
      </Section>

      <Section className="py-20 border-t border-border">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-end">
          <div className="md:col-span-8">
            <h2 className="text-[clamp(2rem,3.2vw,3.4rem)] leading-tight-editorial font-medium lg:max-w-[80%]">
              Ready to architect your AI transformation?
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
