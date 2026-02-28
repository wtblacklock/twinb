import type { Metadata } from "next";
import GrowthClient from "./GrowthClient";

export const metadata: Metadata = {
  title: "Growth Engineering",
  description: "Data-driven loops that compound. Analytics, automation, and conversion systems that turn traffic into revenue.",
};

export default function GrowthPage() {
  return <GrowthClient />;
}
