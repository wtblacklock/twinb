import Link from "next/link";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

interface EditorialCardProps {
  title: string;
  description: string;
  href: string;
  meta?: string;
  className?: string;
}

export function EditorialCard({ title, description, href, meta, className }: EditorialCardProps) {
  return (
    <Link 
      href={href} 
      className={cn(
        "group block p-8 border border-border hover:border-foreground/20 transition-all duration-300 bg-background hover:bg-muted/10 h-full flex flex-col justify-between", 
        className
      )}
    >
      <div>
        {meta && (
          <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground mb-4 block">
            {meta}
          </span>
        )}
        <h3 className="text-2xl font-medium mb-4 group-hover:translate-x-1 transition-transform duration-300">
          {title}
        </h3>
        <p className="text-muted-foreground leading-relaxed">
          {description}
        </p>
      </div>
      <div className="mt-8 flex items-center text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 -translate-x-2 group-hover:translate-x-0">
        Learn more <ArrowRight className="ml-2 w-4 h-4" />
      </div>
    </Link>
  );
}
