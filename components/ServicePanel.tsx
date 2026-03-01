"use client";

import { useEffect, useState, type RefObject } from "react";
import { AnimatePresence, motion } from "motion/react";
import { cn } from "@/lib/utils";
import { EmailFallback } from "@/components/EmailFallback";

const REFERRAL_SOURCES = [
  "Search Engine (Google, Bing, etc)",
  "AI App (ChatGPT, Perplexity, etc)",
  "Claude Code Community",
  "X",
  "LinkedIn",
  "Instagram",
  "YouTube",
  "Referral",
  "Newsletter",
  "Podcast",
  "Webinar",
  "Other",
];

interface ServicePanelProps {
  isOpen: boolean;
  onClose: () => void;
  dialogRef: RefObject<HTMLDivElement>;
  prefersReducedMotion?: boolean;
}

export function ServicePanel({
  isOpen,
  onClose,
  dialogRef,
  prefersReducedMotion = false,
}: ServicePanelProps) {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [referralSource, setReferralSource] = useState("");
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      setStatus("idle");
      setReferralSource("");
    }
  }, [isOpen]);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 768px)");
    const update = () => setIsDesktop(mediaQuery.matches);
    update();
    mediaQuery.addEventListener("change", update);
    return () => mediaQuery.removeEventListener("change", update);
  }, []);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("loading");

    const formData = new FormData(event.currentTarget);
    const payload = {
      first_name: String(formData.get("first_name") ?? "").trim(),
      last_name: String(formData.get("last_name") ?? "").trim(),
      email: String(formData.get("email") ?? "").trim(),
      phone: String(formData.get("phone") ?? "").trim(),
      company: String(formData.get("company") ?? "").trim(),
      job_title: String(formData.get("job_title") ?? "").trim(),
      annual_revenue: String(formData.get("annual_revenue") ?? "").trim(),
      services: String(formData.get("services") ?? "").trim(),
      referral_source: String(formData.get("referral_source") ?? "").trim(),
      referral_other: String(formData.get("referral_other") ?? "").trim(),
      message: String(formData.get("message") ?? "").trim(),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) throw new Error("Request failed");
      setStatus("success");
    } catch {
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
                  Get started
                </h2>
                <p className="mt-3 text-muted-foreground">
                  A few details helps us respond with the right scope.
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
                <h3 className="text-2xl font-medium">Message received.</h3>
                <p className="text-muted-foreground">We&apos;ll review this and respond shortly.</p>
                <EmailFallback triggerLabel="Prefer email instead?" />
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="sp-first-name" className="text-sm font-medium">
                      First Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="sp-first-name"
                      name="first_name"
                      required
                      className="w-full border border-border bg-background px-4 py-3 outline-none focus:border-foreground transition-colors"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="sp-last-name" className="text-sm font-medium">
                      Last Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="sp-last-name"
                      name="last_name"
                      required
                      className="w-full border border-border bg-background px-4 py-3 outline-none focus:border-foreground transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="sp-email" className="text-sm font-medium">
                    Work Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="sp-email"
                    name="email"
                    type="email"
                    required
                    className="w-full border border-border bg-background px-4 py-3 outline-none focus:border-foreground transition-colors"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="sp-phone" className="text-sm font-medium">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="sp-phone"
                    name="phone"
                    type="tel"
                    required
                    className="w-full border border-border bg-background px-4 py-3 outline-none focus:border-foreground transition-colors"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="sp-company" className="text-sm font-medium">
                    Company Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="sp-company"
                    name="company"
                    required
                    className="w-full border border-border bg-background px-4 py-3 outline-none focus:border-foreground transition-colors"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="sp-job-title" className="text-sm font-medium">
                    Job Title <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="sp-job-title"
                    name="job_title"
                    required
                    className="w-full border border-border bg-background px-4 py-3 outline-none focus:border-foreground transition-colors"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="sp-revenue" className="text-sm font-medium">
                    Annual Revenue <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="sp-revenue"
                    name="annual_revenue"
                    required
                    defaultValue=""
                    className="w-full border border-border bg-background px-4 py-3 outline-none focus:border-foreground transition-colors"
                  >
                    <option value="" disabled>Select one...</option>
                    <option value="<$1M">&lt;$1M</option>
                    <option value="$1M-$5M">$1M–$5M</option>
                    <option value="$6M-$20M">$6M–$20M</option>
                    <option value="$21M-$50M">$21M–$50M</option>
                    <option value="$51M-$100M">$51M–$100M</option>
                    <option value=">$100M">&gt;$100M</option>
                  </select>
                </div>

                <fieldset className="space-y-3">
                  <legend className="text-sm font-medium">
                    Which services are you interested in? <span className="text-red-500">*</span>
                  </legend>
                  <div className="flex flex-col gap-2">
                    {["AI Engineering", "AI Transformation", "Both"].map((option) => (
                      <label key={option} className="flex items-center gap-3 text-sm cursor-pointer">
                        <input
                          type="radio"
                          name="services"
                          value={option}
                          required
                          className="h-4 w-4 border border-border accent-foreground"
                        />
                        <span>{option}</span>
                      </label>
                    ))}
                  </div>
                </fieldset>

                <div className="space-y-2">
                  <label htmlFor="sp-referral" className="text-sm font-medium">
                    How did you hear about us? <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="sp-referral"
                    name="referral_source"
                    required
                    defaultValue=""
                    value={referralSource}
                    onChange={(e) => setReferralSource(e.target.value)}
                    className="w-full border border-border bg-background px-4 py-3 outline-none focus:border-foreground transition-colors"
                  >
                    <option value="" disabled>Select one...</option>
                    {REFERRAL_SOURCES.map((source) => (
                      <option key={source} value={source}>{source}</option>
                    ))}
                  </select>
                </div>

                {referralSource === "Other" && (
                  <div className="space-y-2">
                    <label htmlFor="sp-referral-other" className="text-sm font-medium">
                      Please specify <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="sp-referral-other"
                      name="referral_other"
                      required
                      className="w-full border border-border bg-background px-4 py-3 outline-none focus:border-foreground transition-colors"
                    />
                  </div>
                )}

                <div className="space-y-2">
                  <label htmlFor="sp-message" className="text-sm font-medium">
                    Describe your specific needs... <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="sp-message"
                    name="message"
                    required
                    rows={5}
                    className="w-full border border-border bg-background px-4 py-3 leading-relaxed outline-none focus:border-foreground resize-none transition-colors"
                  />
                </div>

                <div className="pt-2 space-y-3">
                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="w-full md:w-auto px-7 py-3 bg-foreground text-background font-medium rounded-md hover:bg-[#333333] active:bg-[#1a1a1a] transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {status === "loading" ? "Sending..." : "Send message"}
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
