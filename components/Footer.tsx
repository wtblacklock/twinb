import Link from "next/link";
import Image from "next/image";
import { navConfig } from "@/config/nav";

export function Footer() {
  return (
    <footer className="bg-background border-t border-border pt-20 pb-10">
      <div className="container mx-auto px-6 max-w-[1280px]">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div className="md:col-span-1">
            <Link href="/" className="block" style={{ marginBottom: "22px" }}>
              <Image
                src="/twinb_logo_main.png"
                alt="TwinB"
                width={204}
                height={65}
                className="h-auto w-[204px] max-w-full"
                unoptimized
              />
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-[240px]">
              We turn fast built products into scalable systems. Product & Growth Engineering for the long haul.
            </p>
          </div>
          
          <div>
            <h4 className="font-mono text-xs uppercase tracking-wider mb-6 text-foreground/50">Practice</h4>
            <ul className="space-y-3">
              <li><Link href="/product" className="text-sm hover:text-muted-foreground transition-colors">Product Engineering</Link></li>
              <li><Link href="/growth" className="text-sm hover:text-muted-foreground transition-colors">Growth Engineering</Link></li>
              <li><Link href="/process" className="text-sm hover:text-muted-foreground transition-colors">Our Process</Link></li>
              <li><Link href="/work" className="text-sm hover:text-muted-foreground transition-colors">Selected Work</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-mono text-xs uppercase tracking-wider mb-6 text-foreground/50">Company</h4>
            <ul className="space-y-3">
              <li><Link href="/about" className="text-sm hover:text-muted-foreground transition-colors">About Us</Link></li>
              <li><Link href="/insights" className="text-sm hover:text-muted-foreground transition-colors">Insights</Link></li>
              <li><Link href="/contact" className="text-sm hover:text-muted-foreground transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-mono text-xs uppercase tracking-wider mb-6 text-foreground/50">Connect</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm hover:text-muted-foreground transition-colors">LinkedIn</a></li>
              <li><a href="#" className="text-sm hover:text-muted-foreground transition-colors">Twitter / X</a></li>
              <li><a href="mailto:hello@twinb.com" className="text-sm hover:text-muted-foreground transition-colors">hello@twinb.com</a></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-border/50">
          <p className="text-xs text-muted-foreground mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} TwinB. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-xs text-muted-foreground hover:text-foreground">Privacy Policy</Link>
            <Link href="/terms" className="text-xs text-muted-foreground hover:text-foreground">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
