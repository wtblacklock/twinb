"use client";

import { useEffect, useState, type RefObject } from "react";
import { AnimatePresence, motion } from "motion/react";
import { cn } from "@/lib/utils";
import { EmailFallback } from "@/components/EmailFallback";

type ServiceOptionGroup = {
  title: string;
  options: string[];
};

const serviceGroups: ServiceOptionGroup[] = [
  {
    title: "AI Engineering",
    options: [
      "Application Development",
      "Fine-Tuning & Model Work",
      "Code Migration & Refactors",
      "Data Engineering & Analysis",
      "Custom Agentic Solutions",
      "Outcome-Based Delivery",
    ],
  },
  {
    title: "AI Transformation",
    options: [
      "AI Strategy",
      "Product Transformation",
      "Process Transformation",
      "People & Training",
      "AI Tooling",
      "Implementation Roadmap",
    ],
  },
];

interface ServicePanelProps {
  isOpen: boolean;
  onClose: () => void;
  dialogRef: RefObject<HTMLDivElement>;
  variant?: "serviceInquiry" | "productReview";
  primaryServiceId?: string;
  primaryServiceName?: string;
  prefersReducedMotion?: boolean;
}

export function ServicePanel({
  isOpen,
  onClose,
  dialogRef,
  variant = "serviceInquiry",
  primaryServiceId = "",
  primaryServiceName = "",
  prefersReducedMotion = false,
}: ServicePanelProps) {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [additionalServices, setAdditionalServices] = useState<string[]>([]);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      setStatus("idle");
      setAdditionalServices([]);
      return;
    }

    if (variant !== "serviceInquiry") {
      setAdditionalServices([]);
      return;
    }

    const allOptions = serviceGroups.flatMap((group) => group.options);
    const defaultChecked = allOptions.includes(primaryServiceName) ? [primaryServiceName] : [];
    setAdditionalServices(defaultChecked);
  }, [isOpen, primaryServiceId, primaryServiceName, variant]);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 768px)");
    const update = () => setIsDesktop(mediaQuery.matches);
    update();
    mediaQuery.addEventListener("change", update);
    return () => mediaQuery.removeEventListener("change", update);
  }, []);

  const toggleService = (service: string) => {
    setAdditionalServices((prev) =>
      prev.includes(service) ? prev.filter((item) => item !== service) : [...prev, service]
    );
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("loading");

    const formData = new FormData(event.currentTarget);
    const intent = variant === "productReview" ? "product_review" : "service_inquiry";
    const payload = {
      name: String(formData.get("name") ?? "").trim(),
      email: String(formData.get("email") ?? "").trim(),
      company: String(formData.get("company") ?? "").trim(),
      message: String(formData.get("message") ?? "").trim(),
      intent,
      primary_service: variant === "serviceInquiry" ? primaryServiceId : "",
      additional_services: variant === "serviceInquiry" ? additionalServices : [],
      product_url: variant === "productReview" ? String(formData.get("product_url") ?? "").trim() : "",
      current_state: variant === "productReview" ? String(formData.get("current_state") ?? "").trim() : "",
      biggest_priority:
        variant === "productReview" ? String(formData.get("biggest_priority") ?? "").trim() : "",
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Request failed");
      }

      setStatus("success");
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50" aria-hidden={false}>
          <motion.button
            type="button"
            aria-label="Close panel"
            className="absolute inset-0 bg-black/30"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: prefersReducedMotion ? 0 : 0.18, ease: "easeOut" }}
          />

          <motion.div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="service-panel-title"
            tabIndex={-1}
            initial={
              prefersReducedMotion
                ? false
                : isDesktop
                ? { x: 24, y: 0, opacity: 0.98 }
                : { x: 0, y: 24, opacity: 0.98 }
            }
            animate={{ x: 0, y: 0, opacity: 1 }}
            exit={
              prefersReducedMotion
                ? { x: 0, y: 0, opacity: 1 }
                : isDesktop
                ? { x: 24, y: 0, opacity: 0.98 }
                : { x: 0, y: 24, opacity: 0.98 }
            }
            transition={{ duration: prefersReducedMotion ? 0 : 0.2, ease: "easeOut" }}
            className={cn(
              "absolute bg-background border-border p-6 md:p-8 overflow-y-auto max-h-[90vh] w-full",
              "bottom-0 left-0 right-0 border-t rounded-t-xl md:rounded-none md:border-t-0 md:border-l md:top-0 md:bottom-0 md:left-auto md:right-0 md:h-full md:max-h-none md:w-full md:max-w-[560px]"
            )}
          >
            <div className="flex items-start justify-between mb-8">
              <div>
                <h2 id="service-panel-title" className="text-2xl font-medium tracking-tight">
                  {variant === "productReview"
                    ? "Request a Product Review"
                    : `Talk to us about: ${primaryServiceName}`}
                </h2>
                <p className="mt-3 text-muted-foreground">
                  {variant === "productReview"
                    ? "Share the basics and we’ll suggest the next step."
                    : "A few details helps us respond with the right scope."}
                </p>
              </div>
              <button
                type="button"
                onClick={onClose}
                className="ml-4 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Close
              </button>
            </div>

            {status === "success" ? (
              <div className="space-y-4">
                <h3 className="text-2xl font-medium">
                  {variant === "productReview" ? "Request received." : "Message received."}
                </h3>
                <p className="text-muted-foreground">We&apos;ll review this and respond shortly.</p>
                <EmailFallback triggerLabel="Prefer email instead?" />
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <input
                  type="hidden"
                  name="intent"
                  value={variant === "productReview" ? "product_review" : "service_inquiry"}
                />
                <input type="hidden" name="primary_service" value={variant === "serviceInquiry" ? primaryServiceId : ""} />

                <div className="space-y-2">
                  <label htmlFor="service-name" className="text-sm font-medium">
                    Name
                  </label>
                  <input
                    id="service-name"
                    name="name"
                    required
                    className="w-full border border-border bg-background px-4 py-3 outline-none focus:border-foreground transition-colors"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="service-email" className="text-sm font-medium">
                    Email
                  </label>
                  <input
                    id="service-email"
                    name="email"
                    type="email"
                    required
                    className="w-full border border-border bg-background px-4 py-3 outline-none focus:border-foreground transition-colors"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="service-company" className="text-sm font-medium">
                    Company or Team
                  </label>
                  <input
                    id="service-company"
                    name="company"
                    className="w-full border border-border bg-background px-4 py-3 outline-none focus:border-foreground transition-colors"
                  />
                </div>

                {variant === "productReview" && (
                  <div className="space-y-2">
                    <label htmlFor="service-product-url" className="text-sm font-medium">
                      Product URL
                    </label>
                    <input
                      id="service-product-url"
                      name="product_url"
                      type="url"
                      placeholder="https://…"
                      className="w-full border border-border bg-background px-4 py-3 outline-none focus:border-foreground transition-colors"
                    />
                  </div>
                )}

                {variant === "productReview" && (
                  <fieldset className="space-y-3">
                    <legend className="text-sm font-medium">Current state</legend>
                    <div className="space-y-2">
                      {[
                        "Prototype",
                        "In production but fragile",
                        "Scaling issues",
                        "Adoption issues",
                      ].map((option) => (
                        <label key={option} className="flex items-start gap-3 text-sm leading-6 cursor-pointer">
                          <input
                            type="radio"
                            name="current_state"
                            value={option}
                            required
                            className="mt-1 h-4 w-4 shrink-0 border border-border accent-foreground"
                          />
                          <span>{option}</span>
                        </label>
                      ))}
                    </div>
                  </fieldset>
                )}

                {variant === "productReview" && (
                  <div className="space-y-2">
                    <label htmlFor="service-biggest-priority" className="text-sm font-medium">
                      Biggest priority
                    </label>
                    <select
                      id="service-biggest-priority"
                      name="biggest_priority"
                      required
                      defaultValue=""
                      className="w-full border border-border bg-background px-4 py-3 outline-none focus:border-foreground transition-colors"
                    >
                      <option value="" disabled>
                        Select one
                      </option>
                      <option value="Scale & performance">Scale & performance</option>
                      <option value="Reliability & security">Reliability & security</option>
                      <option value="Adoption & activation">Adoption & activation</option>
                      <option value="Conversion & revenue">Conversion & revenue</option>
                      <option value="Automation & ops">Automation & ops</option>
                    </select>
                  </div>
                )}

                <div className="space-y-2">
                  <label htmlFor="service-message" className="text-sm font-medium">
                    {variant === "productReview" ? "What should we look at?" : "Message"}
                  </label>
                  <textarea
                    id="service-message"
                    name="message"
                    required
                    rows={variant === "productReview" ? 5 : 5}
                    className="w-full border border-border bg-background px-4 py-3 leading-relaxed outline-none focus:border-foreground resize-none transition-colors"
                  />
                </div>

                {variant === "serviceInquiry" && (
                  <fieldset className="space-y-4">
                    <legend className="text-sm font-medium">Also interested in</legend>
                    {serviceGroups.map((group) => (
                      <div key={group.title} className="space-y-2">
                        <h4 className="text-sm text-muted-foreground">{group.title}</h4>
                        <div className="grid grid-cols-1 gap-2">
                          {group.options.map((option) => (
                            <label key={option} className="inline-flex items-start gap-3 text-sm">
                              <input
                                type="checkbox"
                                checked={additionalServices.includes(option)}
                                onChange={() => toggleService(option)}
                                value={option}
                                className="mt-[2px] h-4 w-4 border border-border accent-foreground"
                              />
                              <span>{option}</span>
                            </label>
                          ))}
                        </div>
                      </div>
                    ))}
                  </fieldset>
                )}

                <div className="pt-2 space-y-3">
                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="w-full md:w-auto px-7 py-3 bg-foreground text-background font-medium rounded-md hover:bg-[#333333] active:bg-[#1a1a1a] transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {status === "loading" ? "Sending..." : variant === "productReview" ? "Send request" : "Send message"}
                  </button>
                  <EmailFallback triggerLabel="Prefer email instead?" />
                  {status === "error" && (
                    <p className="text-sm text-red-500">
                      Something went wrong. Please try again.
                    </p>
                  )}
                </div>
              </form>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
