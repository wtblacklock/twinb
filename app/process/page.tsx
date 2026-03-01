import type { Metadata } from "next";
import { Section } from "@/components/Section";
import { CTA } from "@/components/CTA";

export const metadata: Metadata = {
  title: "Our Process",
  description: "A systematic five-step approach to AI engineering and transformation: discover, strategize, build, enable, and optimize.",
};

export default function ProcessPage() {
  return (
    <>
      <Section className="pt-48 md:pt-[150px] lg:pt-[160px] pb-16">
        <div className="max-w-4xl">
          <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground mb-6 block">
            Our Methodology
          </span>
          <h1 className="text-[clamp(3rem,5vw,5rem)] leading-tight-editorial font-medium tracking-tight mb-8 lg:max-w-[80%]">
            From AI-scattered to AI-native.
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl leading-relaxed">
            We don&apos;t just advise. We discover, strategize, build, train, and optimize — then measure the ROI at every step.
          </p>
        </div>
      </Section>

      <div className="bg-background">
        {[
          {
            step: "01",
            title: "Discover & Audit",
            desc: "We map your workflows, survey your team, and surface your highest-ROI AI use cases through stakeholder interviews and data analysis. The output is a clear picture of where AI creates the most value.",
            artifacts: ["AI-Adoption Assessment", "Use-Case Discovery", "ROI Quantification"]
          },
          {
            step: "02",
            title: "Strategy & Roadmap",
            desc: "We define the sequenced plan: what to build, what to automate, what to defer — with clear milestones, dependencies, and ROI targets. No 200-slide decks. A focused implementation roadmap backed by a technical appendix.",
            artifacts: ["AI-Adoption Report", "90-Day Plan", "Dependency Mapping"]
          },
          {
            step: "03",
            title: "Build & Deploy",
            desc: "Our AI engineering pods ship production-grade features, automations, and models on two-week sprints. Outcome-based pricing means you pay for features delivered, not hours logged.",
            artifacts: ["Production-Ready Code", "Documentation & Runbooks", "Evaluation Suite"]
          },
          {
            step: "04",
            title: "Enable & Train",
            desc: "We upskill your team with bespoke curricula, hands-on workshops, and AI-first culture programs that sustain the transformation beyond our engagement.",
            artifacts: ["Custom Curricula", "Hands-On Workshops", "Training Documentation"]
          },
          {
            step: "05",
            title: "Measure & Optimize",
            desc: "We track adoption, ROI, and model performance — then iterate. AI transformation is a continuous program, not a one-time project.",
            artifacts: ["ROI Dashboard", "Optimization Roadmap", "Ongoing Advisory"]
          }
        ].map((item) => (
          <Section key={item.step} className="py-20 border-t border-border">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
              <div className="md:col-span-3">
                <span className="text-6xl font-medium text-muted-foreground/20">{item.step}</span>
              </div>
              <div className="md:col-span-5">
                <h2 className="text-3xl font-medium mb-6">{item.title}</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {item.desc}
                </p>
              </div>
              <div className="md:col-span-4 bg-muted/10 p-8 rounded-lg">
                <h4 className="font-mono text-xs uppercase tracking-wider text-muted-foreground mb-4">Key Artifacts</h4>
                <ul className="space-y-3">
                  {item.artifacts.map((artifact) => (
                    <li key={artifact} className="flex items-center text-sm">
                      <span className="w-1.5 h-1.5 bg-accent rounded-full mr-3"></span>
                      {artifact}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Section>
        ))}
      </div>

      <CTA title="Let's architect your AI future." />
    </>
  );
}
