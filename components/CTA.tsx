import Link from "next/link";
import { cn } from "@/lib/utils";

interface CTAProps {
  title?: string;
  description?: string;
  buttonText?: string;
  href?: string;
  className?: string;
}

export function CTA({ 
  title = "Ready to scale?", 
  description = "Let's discuss how we can turn your product into a scalable system.", 
  buttonText = "Request a Product Review", 
  href = "/contact",
  className 
}: CTAProps) {
  return (
    <section className={cn("py-24 bg-foreground text-background", className)}>
      <div className="container mx-auto px-6 max-w-[1280px] text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium mb-6 tracking-tight">
          {title}
        </h2>
        <p className="text-lg md:text-xl text-background/80 mb-10 max-w-2xl mx-auto leading-relaxed">
          {description}
        </p>
        <Link 
          href={href}
          className="inline-block px-8 py-4 bg-background text-foreground font-medium rounded-lg hover:bg-background/90 transition-colors text-lg"
        >
          {buttonText}
        </Link>
      </div>
    </section>
  );
}
