"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

interface WorkCardProps {
  client: string;
  title: string;
  category: string;
  outcome: string;
  href: string;
  className?: string;
  showImage?: boolean;
}

export function WorkCard({ client, title, category, outcome, href, className, showImage = false }: WorkCardProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // Generate stable placeholder URLs based on client name
  const images = [
    `https://picsum.photos/seed/${client}1/200/150`,
    `https://picsum.photos/seed/${client}2/200/150`,
    `https://picsum.photos/seed/${client}3/200/150`,
  ];

  useEffect(() => {
    if (!showImage) return;
    
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [showImage, images.length]);

  return (
    <Link 
      href={href} 
      className={cn(
        "group block border-t border-border py-8 hover:bg-muted/5 transition-colors", 
        className
      )}
    >
      <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
        {showImage && (
          <div className="w-[200px] h-[150px] flex-shrink-0 relative overflow-hidden bg-muted/10 rounded-sm">
            <AnimatePresence mode="wait">
              <motion.img
                key={currentImageIndex}
                src={images[currentImageIndex]}
                alt=""
                className="absolute inset-0 w-full h-full object-cover"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              />
            </AnimatePresence>
          </div>
        )}
        
        <div className="flex-grow grid grid-cols-1 md:grid-cols-12 gap-4 items-baseline w-full">
          <div className="md:col-span-3">
            <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
              {client}
            </span>
          </div>
          <div className="md:col-span-5">
            <h3 className="text-xl md:text-2xl font-medium group-hover:underline decoration-1 underline-offset-4">
              {title}
            </h3>
            <span className="text-sm text-muted-foreground mt-1 block md:hidden">{category}</span>
          </div>
          <div className="md:col-span-2 hidden md:block">
            <span className="text-sm text-muted-foreground">{category}</span>
          </div>
          <div className="md:col-span-2 text-right">
            <span className="text-sm font-medium">{outcome}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
