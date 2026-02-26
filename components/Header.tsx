"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, ChevronDown } from "lucide-react";
import { navConfig } from "@/config/nav";
import { cn } from "@/lib/utils";
import { useDialog } from "@/hooks/useDialog";
import { ServicePanel } from "@/components/ServicePanel";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeMega, setActiveMega] = useState<string | null>(null);
  const pathname = usePathname();
  const dialog = useDialog();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle cross-page hash scrolling
  useEffect(() => {
    // Small timeout to ensure page content is ready and to provide the "load then scroll" visual
    const timer = setTimeout(() => {
      if (window.location.hash) {
        const id = window.location.hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }, 100);
    
    return () => clearTimeout(timer);
  }, [pathname]);

  // Close mega menu on route change
  useEffect(() => {
    setActiveMega(null);
    setMobileMenuOpen(false);
  }, [pathname]);

  const handleMegaClick = (href: string, id: string) => {
    setActiveMega(null);
    setMobileMenuOpen(false);
    
    // Handle same-page scroll manually
    if (pathname === href) {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-40 transition-all duration-300 bg-background/90 backdrop-blur-md",
          isScrolled ? "border-b border-border py-4" : "py-6"
        )}
      >
        <div className="container mx-auto px-6 max-w-[1280px] flex items-center justify-between">
          <Link href="/" className="z-50 relative flex items-center">
            <Image
              src="/twinb_logo_alt.png"
              alt="TwinB"
              width={118}
              height={118}
              className={cn(
                "object-contain transition-all duration-300",
                isScrolled
                  ? "h-[71px] w-[71px] md:h-[118px] md:w-[118px]"
                  : "h-[118px] w-[118px]"
              )}
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navConfig.mainNav.map((item) => (
              <div
                key={item.title}
                className="relative group"
                onMouseEnter={() => item.type === "mega" && setActiveMega(item.title)}
                onMouseLeave={() => item.type === "mega" && setActiveMega(null)}
              >
                <Link
                  href={item.href}
                  className={cn(
                    "text-sm font-medium tracking-wide hover:text-muted-foreground transition-colors flex items-center gap-1",
                    pathname.startsWith(item.href) && item.href !== "/" ? "text-accent-foreground" : ""
                  )}
                >
                  {item.title}
                  {item.type === "mega" && <ChevronDown className="w-3 h-3 opacity-50" />}
                </Link>

                {/* Mega Menu Dropdown */}
                <AnimatePresence>
                  {activeMega === item.title && item.type === "mega" && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-1/2 -translate-x-1/2 pt-6 w-[600px]"
                    >
                      <div className="bg-background border border-border shadow-lg p-8 rounded-xl grid grid-cols-2 gap-8">
                        <div>
                          <h4 className="font-mono text-xs uppercase tracking-wider text-muted-foreground mb-4">
                            Capabilities
                          </h4>
                          <ul className="space-y-2">
                            {(item.title === "Product"
                              ? navConfig.productAnchors
                              : navConfig.growthAnchors
                            ).map((anchor) => (
                              <li key={anchor.id}>
                                <Link
                                  href={`${item.href}#${anchor.id}`}
                                  scroll={false}
                                  onClick={() => handleMegaClick(item.href, anchor.id)}
                                  className="block text-sm hover:translate-x-1 transition-transform duration-200"
                                >
                                  {anchor.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="bg-muted/30 p-4 rounded-lg">
                          <h4 className="font-medium mb-2">
                            {item.title === "Product" ? "Engineering Excellence" : "Growth Systems"}
                          </h4>
                          <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                            {item.title === "Product"
                              ? "From technical debt to technical asset. We rebuild foundations."
                              : "Data-driven loops that compound. We build engines for scale."}
                          </p>
                          <Link
                            href={item.href}
                            className="text-xs font-mono uppercase tracking-wider border-b border-foreground/20 hover:border-foreground transition-colors"
                          >
                            View Overview
                          </Link>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-6">
            <button
              type="button"
              onClick={(event) => dialog.open(event.currentTarget)}
              className="px-5 py-2.5 bg-foreground text-background text-sm font-medium rounded-lg hover:bg-foreground/90 transition-colors"
            >
              Request a Product Review
            </button>
          </div>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden z-50 relative"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Nav Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-30 bg-background/80 backdrop-blur-sm lg:hidden"
              onClick={() => setMobileMenuOpen(false)}
            />
            
            {/* Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 z-40 bg-background lg:hidden w-[85vw] max-w-sm shadow-2xl overflow-y-auto"
            >
              {/* Close button */}
              <div className="flex justify-end p-6 border-b border-border">
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 hover:bg-muted rounded-lg transition-colors"
                  aria-label="Close menu"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              
              <nav className="flex flex-col gap-8 p-6">
                {navConfig.mainNav.map((item) => (
                <div key={item.title} className="border-b border-border pb-4 last:border-0">
                  {item.type === "mega" ? (
                    <div className="space-y-4">
                      <Link
                        href={item.href}
                        className="text-2xl font-medium block"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.title}
                      </Link>
                      <ul className="pl-4 space-y-3 border-l border-border ml-1">
                        {(item.title === "Product"
                          ? navConfig.productAnchors
                          : navConfig.growthAnchors
                        ).map((anchor) => (
                          <li key={anchor.id}>
                            <Link
                              href={`${item.href}#${anchor.id}`}
                              scroll={false}
                              className="text-base text-muted-foreground block py-1"
                              onClick={() => handleMegaClick(item.href, anchor.id)}
                            >
                              {anchor.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className="text-2xl font-medium block"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.title}
                    </Link>
                  )}
                </div>
              ))}
              <div className="pt-4">
                <button
                  type="button"
                  className="block w-full text-center py-4 bg-foreground text-background text-lg font-medium rounded-lg"
                  onClick={(event) => {
                    setMobileMenuOpen(false);
                    dialog.open(event.currentTarget);
                  }}
                >
                  Request a Product Review
                </button>
              </div>
            </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>

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
