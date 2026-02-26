import { Section } from "@/components/Section";
import { CTA } from "@/components/CTA";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function InsightDetailPage({ params }: { params: { slug: string } }) {
  // Mock data lookup
  const title = params.slug.replace(/-/g, " ").replace(/\b\w/g, l => l.toUpperCase());

  return (
    <>
      <Section className="pt-48 md:pt-[150px] lg:pt-[160px] pb-16">
        <Link href="/insights" className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-8 transition-colors">
          <ArrowLeft className="mr-2 w-4 h-4" /> Back to Insights
        </Link>
        <div className="max-w-4xl mx-auto text-center">
          <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground mb-6 block">
            Engineering
          </span>
          <h1 className="text-[clamp(2.5rem,4vw,4rem)] leading-tight-editorial font-medium tracking-tight mb-8">
            {title}
          </h1>
          <p className="text-sm text-muted-foreground">
            Published on Oct 12, 2024 • 5 min read
          </p>
        </div>
      </Section>

      <Section>
        <div className="max-w-editorial mx-auto">
          <div className="prose prose-lg prose-neutral">
            <p className="text-xl leading-relaxed mb-8 font-medium text-foreground/80">
              [Lead paragraph summarizing the core argument of the article. It should be punchy and provocative.]
            </p>
            
            <p>
              [Body content placeholder. This would be a deep dive into the topic, likely discussing the trade-offs between speed and quality, and how technical debt accumulates over time.]
            </p>

            <h2>The Cost of Speed</h2>
            <p>
              [More content here. Discussing specific examples or case studies.]
            </p>

            <blockquote>
              &quot;If you don&apos;t schedule time for maintenance, your equipment will schedule it for you.&quot;
            </blockquote>

            <h2>How to Pay it Down</h2>
            <p>
              [Actionable advice on how to address the problem.]
            </p>
            
            <ul>
              <li>Audit your dependencies</li>
              <li>Refactor critical paths</li>
              <li>Improve test coverage</li>
            </ul>
          </div>
        </div>
      </Section>

      <CTA title="Subscribe to our newsletter" description="Get engineering and growth insights delivered to your inbox." buttonText="Subscribe" />
    </>
  );
}
