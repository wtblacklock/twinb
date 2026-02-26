import { Section } from "@/components/Section";
import { CTA } from "@/components/CTA";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function WorkDetailPage({ params }: { params: { slug: string } }) {
  // In a real app, fetch data based on params.slug
  const slug = params.slug;
  const title = slug.charAt(0).toUpperCase() + slug.slice(1).replace(/-/g, " ");

  return (
    <>
      <Section className="pt-56 pb-16">
        <Link href="/work" className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-8 transition-colors">
          <ArrowLeft className="mr-2 w-4 h-4" /> Back to Work
        </Link>
        <div className="max-w-4xl">
          <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground mb-6 block">
            Case Study
          </span>
          <h1 className="text-[clamp(2.5rem,4vw,4rem)] leading-tight-editorial font-medium tracking-tight mb-8">
            {title}: Scaling for the next 10 million users
          </h1>
          <div className="flex flex-wrap gap-4 mb-8">
            <span className="px-3 py-1 border border-border rounded-full text-xs font-medium">Product Engineering</span>
            <span className="px-3 py-1 border border-border rounded-full text-xs font-medium">Infrastructure</span>
          </div>
        </div>
      </Section>

      <Section className="py-12 border-y border-border">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <h3 className="font-medium text-lg mb-4">The Challenge</h3>
            <p className="text-muted-foreground">
              The platform was experiencing significant downtime during peak hours, and the engineering team was spending 80% of their time on maintenance rather than new features.
            </p>
          </div>
          <div className="md:col-span-4">
            <h3 className="font-medium text-lg mb-4">The Solution</h3>
            <p className="text-muted-foreground">
              We decoupled the monolithic architecture into domain-specific services, implemented aggressive caching, and migrated to a Kubernetes-based infrastructure.
            </p>
          </div>
          <div className="md:col-span-4">
            <h3 className="font-medium text-lg mb-4">The Outcome</h3>
            <ul className="space-y-2">
              <li className="text-2xl font-medium">99.99% <span className="text-sm font-normal text-muted-foreground">Uptime</span></li>
              <li className="text-2xl font-medium">3x <span className="text-sm font-normal text-muted-foreground">Throughput</span></li>
              <li className="text-2xl font-medium">-40% <span className="text-sm font-normal text-muted-foreground">Cloud Costs</span></li>
            </ul>
          </div>
        </div>
      </Section>

      <Section>
        <div className="max-w-editorial mx-auto">
          {/* Content Placeholder */}
          <div className="prose prose-lg prose-neutral">
            <p className="text-xl leading-relaxed mb-8">
              [Detailed narrative of the engagement would go here. It would cover the initial audit findings, the strategic roadmap, and the technical implementation details.]
            </p>
            
            <h3 className="text-2xl font-medium mt-12 mb-6">Technical Deep Dive</h3>
            <p className="mb-6 text-muted-foreground">
              We identified that the primary bottleneck was a locked database table during write-heavy operations. By implementing a read-replica strategy and optimizing the indexing, we alleviated the pressure.
            </p>

            {/* Image Placeholder */}
            <div className="my-12 bg-muted/20 aspect-video rounded-lg flex items-center justify-center border border-border">
              <span className="text-muted-foreground font-mono text-sm">Architecture Diagram Placeholder</span>
            </div>

            <h3 className="text-2xl font-medium mt-12 mb-6">Stack</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 not-prose">
              <div className="p-4 border border-border rounded text-center text-sm">Node.js</div>
              <div className="p-4 border border-border rounded text-center text-sm">PostgreSQL</div>
              <div className="p-4 border border-border rounded text-center text-sm">Redis</div>
              <div className="p-4 border border-border rounded text-center text-sm">AWS ECS</div>
            </div>
          </div>
        </div>
      </Section>

      <CTA title="Ready for similar results?" />
    </>
  );
}
