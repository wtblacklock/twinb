import { cn } from "@/lib/utils";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  className?: string;
  id?: string;
  containerClassName?: string;
}

export function Section({ children, className, id, containerClassName, ...props }: SectionProps) {
  return (
    <section 
      id={id} 
      className={cn("py-24 md:py-32 lg:py-40", className)} 
      {...props}
    >
      <div className={cn("container mx-auto px-6 max-w-[1280px]", containerClassName)}>
        {children}
      </div>
    </section>
  );
}
