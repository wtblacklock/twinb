import type { Metadata } from "next";
import AITransformationClient from "./AITransformationClient";

export const metadata: Metadata = {
  title: "AI Transformation",
  description: "From AI-absent to AI-native. We architect the strategy, process, people, and tooling transformation for companies ready to compete on intelligence.",
};

export default function AITransformationPage() {
  return <AITransformationClient />;
}
