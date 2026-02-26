"use client";

import { Section } from "@/components/Section";
import { useState } from "react";
import { EmailFallback } from "@/components/EmailFallback";

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");

    const formData = new FormData(e.currentTarget);
    const data = {
      name: String(formData.get("name") ?? "").trim(),
      email: String(formData.get("email") ?? "").trim(),
      company: String(formData.get("company") ?? "").trim(),
      topic: String(formData.get("topic") ?? "").trim(),
      message: String(formData.get("message") ?? "").trim(),
      intent: "general_contact",
      primary_service: "",
      additional_services: [],
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <>
      <Section className="pt-56 pb-16">
        <div className="max-w-4xl">
          <h1 className="text-[clamp(3rem,5vw,5rem)] leading-tight-editorial font-medium tracking-tight mb-8">
            Contact
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl leading-relaxed">
            For general inquiries, partnerships, or anything else.
          </p>
        </div>
      </Section>

      <Section className="pt-0 pb-24">
        <div className="max-w-2xl">
          {status === "success" ? (
            <div className="p-8 bg-muted/20 border border-border rounded-lg text-center">
              <h3 className="text-2xl font-medium mb-4">Message received.</h3>
              <p className="text-muted-foreground">
                We&apos;ll review this and respond shortly.
              </p>
              <div className="mt-4 flex justify-center">
                <EmailFallback triggerLabel="Prefer email instead?" />
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              <input type="hidden" name="intent" value="general_contact" />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full p-4 bg-background border border-border focus:border-foreground outline-none transition-colors"
                    placeholder="Jane Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full p-4 bg-background border border-border focus:border-foreground outline-none transition-colors"
                    placeholder="jane@company.com"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="company" className="text-sm font-medium">Company or Team</label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  className="w-full p-4 bg-background border border-border focus:border-foreground outline-none transition-colors"
                  placeholder="Acme"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="topic" className="text-sm font-medium">Topic</label>
                <select
                  id="topic"
                  name="topic"
                  required
                  defaultValue=""
                  className="w-full p-4 bg-background border border-border focus:border-foreground outline-none transition-colors"
                >
                  <option value="" disabled>
                    Select one
                  </option>
                  <option value="General">General</option>
                  <option value="Partnership">Partnership</option>
                  <option value="Speaking">Speaking</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">Message</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="w-full p-4 bg-background border border-border focus:border-foreground outline-none transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={status === "loading"}
                className="px-8 py-4 bg-foreground text-background font-medium rounded-lg hover:bg-foreground/90 transition-colors disabled:opacity-50"
              >
                {status === "loading" ? "Sending..." : "Send message"}
              </button>
              
              {status === "error" && (
                <p className="text-red-500 text-sm">Something went wrong. Please try again.</p>
              )}
            </form>
          )}
        </div>
      </Section>
    </>
  );
}
