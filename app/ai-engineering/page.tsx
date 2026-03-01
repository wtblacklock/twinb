import type { Metadata } from "next";
import AIEngineeringClient from "./AIEngineeringClient";

export const metadata: Metadata = {
  title: "AI Engineering",
  description: "Outcome-based AI engineering squads that ship production-grade software faster. You pay for features delivered, not hours logged.",
};

export default function AIEngineeringPage() {
  return <AIEngineeringClient />;
}
