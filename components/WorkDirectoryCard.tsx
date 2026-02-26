import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface WorkDirectoryCardProps {
  client: string;
  title: string;
  category: string;
  scope: string;
  website: string;
  outcomeStats: Array<{ label: string; value: string }>;
  href: string;
  visualClassName?: string;
  featured?: boolean;
  compact?: boolean;
  outcomeCount?: number;
  uniformHeight?: boolean;
}

export function WorkDirectoryCard({
  client,
  title,
  category,
  scope,
  website,
  outcomeStats,
  href,
  visualClassName,
  featured = false,
  compact = false,
  outcomeCount = 4,
  uniformHeight = false,
}: WorkDirectoryCardProps) {
  const websiteHref = website.startsWith("http") ? website : `https://${website}`;
  const placeholderImageSrc = `https://picsum.photos/seed/${encodeURIComponent(client)}-work/1200/800`;
  const shownOutcomeStats = outcomeStats.slice(0, Math.max(1, outcomeCount));
  const isSingleOutcome = shownOutcomeStats.length === 1;

  return (
    <article
      className={cn(
        "group block rounded-2xl border border-border bg-card overflow-hidden transition-transform duration-300 hover:-translate-y-1",
        uniformHeight && "h-full flex flex-col"
      )}
    >
      <Link href={href} className="block">
        <div
          className={cn(
            "relative border-b border-border overflow-hidden",
            featured ? "aspect-[16/10]" : "aspect-[4/3]",
            visualClassName
          )}
        >
          <img
            src={placeholderImageSrc}
            alt={`${client} placeholder`}
            className="absolute inset-0 h-full w-full object-cover transition-all duration-500 ease-out saturate-90 brightness-105 scale-105 group-hover:saturate-100 group-hover:brightness-75 group-hover:scale-100"
          />
          <div className="absolute inset-0 bg-black/10 transition-colors duration-500 group-hover:bg-black/35" />
          <div className="absolute inset-0 opacity-45 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.55),transparent_45%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.28),transparent_42%)]" />
          <div className="absolute inset-x-5 bottom-5 flex items-end justify-between">
            <span className="text-[10px] font-mono uppercase tracking-[0.15em] text-white/90">
              Case Study
            </span>
            <span className="text-[10px] font-mono uppercase tracking-[0.15em] text-white/90">
              {client}
            </span>
          </div>
        </div>
      </Link>

      <div className="px-6 py-7 border-b border-border">
        <div className="flex items-center gap-4">
          <div className="h-12 w-12 rounded-full border border-border bg-muted/30 flex items-center justify-center">
            <span className="text-xs font-mono uppercase">{client.slice(0, 2)}</span>
          </div>
          <div className="min-w-0">
            <Link href={href} className="inline-block">
              <h3 className="text-[1.7rem] leading-tight font-medium group-hover:underline underline-offset-4">
                {client}
              </h3>
            </Link>
          </div>
        </div>
      </div>

      {!compact && (
        <>
          <div className="grid grid-cols-[110px_1fr] items-start border-b border-border px-6 py-5">
            <span className="text-sm font-medium pt-1">Scope</span>
            <div>
              <span className="mb-2 inline-flex border border-border rounded-md px-2 py-1 text-[10px] font-mono uppercase tracking-wider text-muted-foreground">
                {category}
              </span>
              <p className="text-sm text-muted-foreground overflow-hidden [display:-webkit-box] [-webkit-line-clamp:2] [-webkit-box-orient:vertical]">
                {scope || title}
              </p>
            </div>
          </div>
          <div className="grid grid-cols-[110px_1fr] items-center border-b border-border px-6 py-5">
            <span className="text-sm font-medium">Website</span>
            <a
              href={websiteHref}
              target="_blank"
              rel="noreferrer noopener"
              className="group/website inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors w-fit"
            >
              {website}
              <ArrowUpRight className="ml-1 h-3.5 w-3.5 opacity-0 -translate-x-0.5 translate-y-0.5 transition-all duration-200 group-hover/website:opacity-100 group-hover/website:translate-x-0 group-hover/website:translate-y-0" />
            </a>
          </div>
          <div className="grid grid-cols-[110px_1fr] items-start px-6 py-5">
            <span className="text-sm font-medium pt-2">
              {isSingleOutcome ? "Key Outcome" : "Outcomes"}
            </span>
            <div>
              <div
                className={cn(
                  "border border-foreground/60 rounded-sm overflow-hidden text-center",
                  isSingleOutcome ? "grid w-full" : "inline-grid"
                )}
                style={{ gridTemplateColumns: `repeat(${shownOutcomeStats.length}, minmax(0, 1fr))` }}
              >
                {shownOutcomeStats.map((stat, index) => (
                  <span
                    key={`${client}-${stat.label}-label`}
                    className={cn(
                      "px-3 py-2 text-[10px] font-mono uppercase",
                      index < shownOutcomeStats.length - 1 && "border-r border-foreground/60"
                    )}
                  >
                    {stat.label}
                  </span>
                ))}
                {shownOutcomeStats.map((stat, index) => (
                  <span
                    key={`${client}-${stat.label}-value`}
                    className={cn(
                      "px-3 py-2 text-lg font-medium border-t border-foreground/60",
                      index < shownOutcomeStats.length - 1 && "border-r border-foreground/60"
                    )}
                  >
                    {stat.value}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </>
      )}
    </article>
  );
}
