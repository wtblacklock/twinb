import type { Metadata } from "next";
import { Section } from "@/components/Section";
import { CTA } from "@/components/CTA";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { articles } from "@/lib/insights";

export const metadata: Metadata = {
  title: "Insights",
  description: "Perspectives on AI engineering, transformation, and the systems that connect them.",
};

export default function InsightsPage() {
  return (
    <>
      <Section className="pt-48 md:pt-[150px] lg:pt-[160px] pb-16">
        <div className="max-w-4xl">
          <h1 className="text-[clamp(3rem,5vw,5rem)] leading-tight-editorial font-medium tracking-tight mb-8">
            Insights
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl leading-relaxed">
            Perspectives on AI engineering, transformation, and the systems that connect them.
          </p>
        </div>
      </Section>

      <Section className="pt-0 pb-24">
        <div className="flex flex-col border-t border-border">
          {articles.map((article) => (
            <Link
              key={article.slug}
              href={`/insights/${article.slug}`}
              className="group py-12 border-b border-border hover:bg-muted/5 transition-colors"
            >
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                <div className="md:col-span-3">
                  <div className="flex flex-col">
                    <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground mb-2">
                      {article.category}
                    </span>
                    <span className="text-sm text-muted-foreground">
                      {article.date}
                    </span>
                  </div>
                </div>
                <div className="md:col-span-6">
                  <h2 className="text-2xl md:text-3xl font-medium mb-4 group-hover:underline decoration-1 underline-offset-4">
                    {article.title}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    {article.excerpt}
                  </p>
                </div>
                <div className="md:col-span-3 flex items-center justify-end opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-sm font-medium flex items-center">
                    Read Article <ArrowRight className="ml-2 w-4 h-4" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Section>

      <CTA />
    </>
  );
}
