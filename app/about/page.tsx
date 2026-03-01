import type { Metadata } from "next";
import AboutClient from "./AboutClient";

export const metadata: Metadata = {
  title: "About",
  description: "AI Engineering & Transformation built by operators. We architect the shift from AI-scattered to AI-native.",
};

export default function AboutPage() {
  return <AboutClient />;
}
