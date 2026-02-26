import { Section } from "@/components/Section";
import { CTA } from "@/components/CTA";

export default function ProcessPage() {
  return (
    <>
      <Section className="pt-56 pb-16">
        <div className="max-w-4xl">
          <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground mb-6 block">
            Our Methodology
          </span>
          <h1 className="text-[clamp(3rem,5vw,5rem)] leading-tight-editorial font-medium tracking-tight mb-8">
            Fix and scale what you built.
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl leading-relaxed">
            We don&apos;t just throw code at the problem. We use a systematic process to identify bottlenecks, stabilize the foundation, and build for growth.
          </p>
        </div>
      </Section>

      <div className="bg-background">
        {[
          {
            step: "01",
            title: "Reality Check",
            desc: "We evaluate the current product state, architecture integrity, positioning clarity, and growth friction. Then we define what should be fixed, removed, or rebuilt.",
            artifacts: ["State Assessment", "Risk Map", "Decision Brief"]
          },
          {
            step: "02",
            title: "Direction & Roadmap",
            desc: "We set direction and sequence the work. We decide what to stabilize first, what to defer, and where focused investment will create the most progress.",
            artifacts: ["Prioritized Backlog", "30 to 60 Day Plan", "Delivery Sequence"]
          },
          {
            step: "03",
            title: "Stabilize",
            desc: "We fix the foundation and reduce operational drag. We address critical technical debt, improve reliability, and make shipping predictable again.",
            artifacts: ["Refactored Core", "Reliability Improvements", "Release Safeguards"]
          },
          {
            step: "04",
            title: "Scale & Grow",
            desc: "We implement the systems required for steady growth. That includes performance hardening, instrumentation, and the loops that convert traffic into usage.",
            artifacts: ["Growth Systems", "Performance Plan", "Measurement Framework"]
          },
          {
            step: "05",
            title: "Handover",
            desc: "We transfer ownership with clear documentation and practical training so your team can maintain momentum without dependency.",
            artifacts: ["Documentation", "Runbooks", "Team Enablement"]
          }
        ].map((item, index) => (
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

      <CTA title="Let's get to work." />
    </>
  );
}
