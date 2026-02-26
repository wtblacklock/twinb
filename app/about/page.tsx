"use client";

import Link from "next/link";
import { Section } from "@/components/Section";
import { ServicePanel } from "@/components/ServicePanel";
import { useDialog } from "@/hooks/useDialog";

export default function AboutPage() {
  const dialog = useDialog();

  return (
    <>
      <Section className="pt-56 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-3">
            <p className="font-mono text-xs uppercase tracking-[0.14em] text-muted-foreground">About</p>
          </div>
          <div className="md:col-span-9">
            <h1 className="text-[clamp(3rem,5vw,5rem)] leading-tight-editorial font-medium tracking-tight">
              About TwinB
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
                Product &amp; Growth Engineering, built by operators.
              </h2>
              <div className="space-y-5 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Today it is easy to ship something.
                  <br />
                  <br />
                  It is hard to make it durable, adopted, and commercially viable.
                  <br />
                  <br />
                </p>
                <p>
                  We work at the intersection of product structure, design clarity, and growth systems. We step in
                  after the prototype and before scale breaks.
                  <br />
                  We fix what is fragile and engineer what comes next.
                </p>
              </div>
            </div>
            <div className="space-y-5 lg:self-start">
              <p className="text-sm font-medium uppercase tracking-wide text-muted-foreground">Principles</p>
              <ul className="space-y-3 text-lg leading-relaxed">
                <li>Product and marketing are one system.</li>
                <li>Architecture must support adoption.</li>
                <li>Speed matters. Structure matters more.</li>
                <li>We reduce fragility before we add features.</li>
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
              className="leading-[0.82] tracking-tight-editorial font-medium max-w-none"
              style={{ fontSize: "clamp(1.8rem, 3.2vw, 3.8rem)" }}
            >
              <span className="block">Speed got you here.</span>
              <span className="block">Structure gets you further.</span>
            </blockquote>
          </div>
        </div>
      </Section>

      <Section className="py-20 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-3">
            <p className="font-mono text-xs uppercase tracking-[0.14em] text-muted-foreground">Team</p>
          </div>
          <div className="md:col-span-9 grid grid-cols-1 lg:grid-cols-12 gap-8">
            <article className="lg:col-span-5 border border-border p-8">
              <h3 className="text-2xl md:text-3xl font-medium mb-6">Jackson Blacklock</h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Jackson is a scale strategist with a background in business operations, systems thinking, and
                enterprise execution.
                <br />
                <br />
                With an MBA and experience managing complex initiatives, he brings structural rigor to fast-built
                products.
                <br />
                <br />
                He focuses on operational alignment, process design, system hardening, and roadmap prioritization so
                early builds become sustainable platforms.
              </p>
            </article>

            <article className="lg:col-span-7 border border-border p-8 md:p-10">
              <h3 className="text-2xl md:text-3xl font-medium mb-6">William Blacklock</h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                William is a product and brand operator with deep experience across design, product strategy, and
                growth execution.
                <br />
                <br />
                He has led creative and product initiatives inside enterprise organizations and startups, built consumer
                brands, launched digital products, and developed automation systems that connect product to revenue.
                <br />
                <br />
                His focus is clarity and cohesion. Messaging must reflect the product, and the product must support
                growth.
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
              <h3 className="text-xl font-medium mb-3">Prototype to Production</h3>
              <p className="text-muted-foreground leading-relaxed">
                We turn fast builds into systems ready for real usage.
              </p>
            </article>
            <article className="border border-border p-6">
              <h3 className="text-xl font-medium mb-3">Adoption Built In</h3>
              <p className="text-muted-foreground leading-relaxed">
                We engineer positioning and growth systems alongside the product.
              </p>
            </article>
            <article className="border border-border p-6">
              <h3 className="text-xl font-medium mb-3">Design Taste, Engineering Rigor</h3>
              <p className="text-muted-foreground leading-relaxed">
                High craft without fragile foundations.
              </p>
            </article>
            <article className="border border-border p-6">
              <h3 className="text-xl font-medium mb-3">Operators, Not Spectators</h3>
              <p className="text-muted-foreground leading-relaxed">
                We build, run, and improve our own products too.
              </p>
            </article>
          </div>
        </div>
      </Section>

      <Section className="py-20 border-t border-border">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-end">
          <div className="md:col-span-8">
            <h2 className="text-[clamp(2rem,3.2vw,3.4rem)] leading-tight-editorial font-medium">
              Want a clear plan for what you built?
            </h2>
          </div>
          <div className="md:col-span-4 flex flex-col sm:flex-row md:flex-col lg:flex-row gap-4 md:justify-end">
            <button
              type="button"
              onClick={(event) => dialog.open(event.currentTarget)}
              className="px-6 py-3 bg-foreground text-background text-sm font-medium rounded-md hover:bg-foreground/90 transition-colors"
            >
              Request a Product Review
            </button>
            <Link
              href="/contact"
              className="px-6 py-3 border border-border text-sm font-medium rounded-md hover:bg-muted/20 transition-colors text-center"
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
        variant="productReview"
        prefersReducedMotion={dialog.prefersReducedMotion}
      />
    </>
  );
}
