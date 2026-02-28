import type { Metadata } from "next";
import AboutClient from "./AboutClient";

export const metadata: Metadata = {
  title: "About",
  description: "Product & Growth Engineering built by operators. We step in after the prototype and before scale breaks.",
};

export default function AboutPage() {
  return <AboutClient />;
}
