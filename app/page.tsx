import type { Metadata } from "next";
import HomeClient from "./HomeClient";

export const metadata: Metadata = {
  title: "TwinB | AI Engineering & Transformation",
  description: "Outcome-based AI engineering and transformation for companies ready to compete on intelligence. Build AI-native. Win the next decade.",
};

export default function Home() {
  return <HomeClient />;
}
